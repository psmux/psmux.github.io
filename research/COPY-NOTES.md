# Copy notes for Godwin

Every spot below is a value judgement or a personal statement rather than a fact from facts.md. Each one is marked in the HTML with `<!-- GODWIN: rewrite in your voice -->` so you can grep for it. Rewrite them so they sound like you; everything else on the site is drawn from research/facts.md and research/projects.json.

## index.html

1. Hero headline: "tmux, native on Windows. No WSL." It is short on purpose because it has to land in three seconds. Change the phrasing if it feels like a slogan to you.
2. Hero lede, last clause: "so your fingers and scripts do not have to change." The facts are that psmux reads .tmux.conf and installs a tmux binary; the clause about fingers is mine.
3. Account statement under the lede: "This account is where I publish it, next to the other Rust tools I build: ..." This is the one sentence that says what the account is. It speaks in first person.
4. Terminal tools intro: "several started as things I wanted next to psmux on my own Windows machine." I do not know this to be true. Confirm or cut it.
5. Footer: "I write the tools I want on my own machines, mostly in Rust, and publish them under MIT or Apache 2.0. Stars and bug reports tell me which ones to keep pushing." Pure personal statement.

## Other wording worth a look

* Section kickers such as "remote desktop for people and agents" and "live video" are labels, not claims. Rename freely.
* The hero terminal is an illustration drawn in HTML and is captioned as one. Its fake build log and pstop meters are not real output; if you would rather show the real psmux demo video in the hero once media/ is filled, swap the figure for a video.
* Product pages (deskvnc/, godwinmix/, pstop/, psnet/) are factual only. Their FAQ answers paraphrase the READMEs. The DeskVNC FAQ says the app is free (MIT or Apache 2.0 source plus release builds); keep or drop that line as you prefer, since the README also mentions paid support, which the site does not mention.
* Numbers that are snapshots (151,000+ release downloads, 48 contributors, 133,111 psmux downloads) were collected 2026-10-08 and do not update. Star counts update live.

## Added in the review pass

* pstop/index.html: the first heading was "htop, on Windows, in your terminal". It read like a three beat tagline, so it is now "What pstop shows". Marked with a GODWIN comment.
* godwinmix/index.html: "One binary, one port" had the same rhythm problem. It is now "A single binary with an HTTP API". Marked with a GODWIN comment.
* Media captions under the large frames are built from media/manifest.json: "From the project README." for README images, and the recording credit for captures made for this site. The DeskVNC desktop credits are shown in full because docs/images/CREDITS.md asks for them to travel with the images. Shorten if you like, but keep the credit.
* The hero caption now links to the real psmux recording in the psmux section.
