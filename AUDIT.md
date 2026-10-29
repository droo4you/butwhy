# ButWhy audit

Audited 29 Oct 2026 against the lunch-break MVP (`02835f9`) and the live deploy at https://butwhy-droo4you.vercel.app. The GitHub About link, https://butwhy-pi.vercel.app, returns 404.

Method: read the app, posted the live dive API, then re-checked the rewritten loop locally (written trails with no key, and `LLM_PROVIDER=mock` for the generator).

## Verdict

The repeat card is not a mystery glitch. Every "But Why?" after the opening answer calls `POST /api/dive`. If every provider key is missing or every call throws, `fetchDeepDive` returns one hardcoded card and the client treats that 200 as a real next level. The live API does exactly that:

```json
{
  "topic": "Why does curiosity have no bottom?",
  "answer": "Every answer reveals a deeper layer beneath. Physics bottoms out in math, math in axioms, axioms in choice. The universe may be questions all the way down.",
  "hook": "But some mathematicians believe math isn't discovered — it's invented.",
  "_provider": "fallback"
}
```

The same JSON comes back for depth 1 and depth 7. The breadcrumb and the map repeat it because they render whatever the chain array holds.

## Architecture

Next.js 14 App Router. The home page is a client grid over `data/seeds.ts` (32 topics). `/topic/[id]` is static and mounts `DiveScreen`, which keeps the chain in React state and appends a card per tap. There is no router state, no cache, and no branch: the hole is a single list.

`/chain/[slug]` and `lib/supabase.ts` are stubs for a "Session 3" that never shipped. Nothing imports the Supabase helpers. `@supabase/supabase-js` and `@supabase/ssr` are installed and unused.

The UI is inline styles plus a small Tailwind token file. That kept the cream editorial look consistent, and it also meant responsive rules and focus styles had nowhere obvious to live.

## AI integration

`lib/llm.ts` tried Groq, Gemini, Claude, and OpenAI, picking a preferred order by depth. Past depth 8 the preferred provider was Claude, the expensive end of the list, with no cache in front of it.

The prompt sent only the previous hook and a depth number. It did not send the questions already on the trail, so a successful model could still repeat itself. The response was parsed by grabbing the first `{...}` with a greedy regex, then spread onto the card with no check that `topic`, `answer`, and `hook` existed or that the topic was new.

Gemini put the API key in the query string (`?key=`). A logged URL would have leaked it. Keys were otherwise server-only (`GROQ_API_KEY` and friends, no `NEXT_PUBLIC_`), which is the right boundary.

There was no way to choose a provider or a model without editing source. The Gemini default, `gemini-1.5-flash-latest`, is a retired id.

Cost, as an order of magnitude for a short JSON card (roughly 600 input tokens and 200 output tokens), using public list prices checked in October 2026:

| Provider | Default model | About per tap | Notes |
| --- | --- | --- | --- |
| Groq | `llama-3.1-8b-instant` | under $0.00005 | Cheapest. About $0.05 / $0.08 per million tokens. |
| Gemini | `gemini-2.5-flash-lite` | about $0.00015 | $0.10 / $0.40 per million. Thinking tokens can multiply this if they are left on. |
| OpenAI | `gpt-4o-mini` | about $0.0002 | Useful fallback, not the default. |
| Claude Haiku | the id already in the repo | several times a mini tap | The old code preferred this once the hole was deep. |

A repeated trail with no cache pays that on every tap, including refreshes and every visitor who follows the same But. The fallback path costs $0 and still looks like an answer, so a missing key on Vercel was invisible in the logs unless someone read the `_provider` field.

## Error handling

Two failures, and both were silent:

- Model missing or throwing: HTTP 200 and the curiosity card. The UI has no way to tell a written answer from a placeholder.
- Network or non-OK response: `DiveScreen` logged the error and cleared the spinner. The button came back. Nothing on the page said the tap failed.

The client also never sent the prior questions, so the server could not refuse a duplicate.

## Security

- Keys stay off the client. The Gemini query-string key was the leak path.
- `POST /api/dive` is public, unauthenticated, and unbounded. No body size cap, no rate limit, no max depth. A loop can burn a paid key. Depth-based routing made the deep taps the costly ones.
- Hook text was passed through with no length limit, so one request could be a very large prompt.
- There was no free-text ask box yet, and no content filter. Adding "ask your own question" without a filter would hand a child-facing app an open prompt.
- React text rendering avoids XSS. There is no `dangerouslySetInnerHTML`.
- Errors logged the provider's whole JSON body, which can echo request details.
- Security headers were the framework defaults, including `X-Powered-By: Next.js`.

Supabase, if it had been turned on as written, would have used the public anon key from the browser. It is not called.

## Performance

The shell is light: two fonts via `next/font`, no images, 32 static topic pages. That part is fine.

The dive was the slow and expensive part. Every tap waited on a live model, including taps the last visitor had already paid for. A seven-card hole is seven viewports of DOM, which is small. The failure people hit was not slowness. It was a fast, wrong, identical card.

## Accessibility

- Breadcrumbs were 11px, low-contrast gray (`#9C8E7A`) on near-black, and every label was forced through `.slice(0, 28) + "…"`. Short questions gained an ellipsis they did not need. The repeated fallback made the bar look like one question stuttering.
- The hook color `#C4622D` on the paper background is about 3.6:1, under the 4.5:1 bar for normal text. `#9C8E7A` on paper is about 2.8:1, so the hint under the button failed too.
- The map was a full-screen click target, not a dialog. No Escape, no focus move, no name.
- The new card was not announced. A loading failure was not announced either, because nothing was rendered.
- `prefers-reduced-motion` was ignored (`fadeUp`, the spinner, smooth scroll).
- Buttons are real buttons, the language is `en`, and category names are text as well as emoji. Those parts were already sound.

## Mobile

The grid (`minmax(300px, 1fr)` with no page padding) fits a 320px screen as one column. Category tabs scroll sideways. That is the good part.

The fixed nav was always `top: 38px`, reserving a breadcrumb strip that does not exist on the first card, so the bar sits in a dead band the same color as the page. The breadcrumb itself was 38px tall with an 11px label, under a comfortable tap target, and the forced ellipsis made it worse on a phone. The depth ruler sat 28px from the left edge and could crowd the column. There was no free-text ask field, so the portfolio line "Ask a question" had nothing to tap. An input under 16px would also zoom iOS Safari; the app simply had no input.

## Code quality

The pieces are small and the types are honest about the card shape. The problems are concentrated:

- One success-shaped fallback hid every failure.
- Provider selection, parsing, and the HTTP route were one file with no validation.
- Tailwind was configured and then barely used; tokens.ts even says static colors should prefer it. Inline styles won, including duplicated header bars.
- No tests. A repeated topic could not fail CI because CI did not exist for this behavior.
- `launch.json` points `runtimeExecutable` at a Windows Node path.
- The README did not exist, so the live URL, the dead About link, and the required env vars were tribal knowledge.

## What this revamp changes

The follow-up section below is the current product: eight written levels and no model unless someone opts in. The bullets here describe the first repair.

- Written trails: four follow-ups for each of the 32 shelf questions, plus six questions reachable by typing them (`Why is the sky blue?`, ice, hiccups, stars, goosebumps, compasses). Each level is the why raised by the previous But. `npm run verify` checks the link, the Why/But shape, and that topics do not repeat.
- The generator sends the questions already asked, rejects a repeat, and will not substitute a fake card. No key, or a dead key, ends in a pause that says nothing was invented.
- `LLM_PROVIDER` selects `auto` or one provider. Models are env overrides. Results are cached in memory and, for live calls, in the Next.js data cache for 30 days. Gemini is called with `x-goog-api-key` and thinking disabled when the API allows it. A per-instance call budget and a per-IP rate limit sit in front of live calls only.
- `LLM_PROVIDER=mock` is local-only. Practice cards say so in the sentence itself. Production ignores mock.
- Ask box on the home page, with length checks, a kid-scale refusal list, and a block on child-sexual combinations. A typed question that matches a written trail opens that trail instead of spending a model call.
- Breadcrumb uses real CSS ellipsis, a 48px tap height, and light type on the dark bar. The map is a dialog (Escape, focus trap, the But between levels). Hook text uses the darker accent. Loading and the pause are on the page and in an `aria-live` region. Reduced motion is respected.
- Shareable `/chain/[slug]` now says trails are not saved, instead of promising Session 3.

## Follow-up: the shelf is the product

The owner cannot spend money per tap, so the default is now `LLM_PROVIDER=off`. A key in the environment does not turn the model on. Written trails run about eight levels, ending on a bedrock card, and one more tap says you hit bedrock instead of offering a paid continuation.

New shelves sit beside the original six: Game Dev (frame rate, coyote time, polygons, save files, loading screens), Web (typing an address, slow pages, servers, packet addresses, the padlock), Music (earworms, timbre, dancing, minor chords), and Bodies (blinking, bruises, fingerprints, healing bone). Typed questions use token overlap plus aliases, so "60 fps" and "what happens when you type a url" open a trail. A near miss returns suggestions. A total miss still offers a few shelves. None of that calls a model.

`npm run verify` checks every link, forbids repeated questions, and requires the last answer of each trail to name bedrock.

## Residual risks

- The rate limit and the call budget are per server instance. A determined client can still spread traffic across instances. A shared store (Upstash, or the unused Supabase project) would make the cap global. It is not required for a portfolio deploy.
- Written answers are simplified for reading aloud. A few opening cards keep the original popular claims (hand-sniffing after a handshake, dreamless sleep, the bribed gate). Follow-ups are hedged where the science is unsettled.
- The safety filter is a word list plus the model prompt. It is not a moderator. It is there so an obvious miss does not become a card.
- Saved, shareable holes still need a database. The chain route tells the truth about that.
- The GitHub About homepage is still https://butwhy-pi.vercel.app. That is a repo setting, not a file. Point it at https://butwhy-droo4you.vercel.app.
- Inline styles make a strict Content-Security-Policy awkward. The app sends `nosniff`, a referrer policy, and `X-Frame-Options` instead.
