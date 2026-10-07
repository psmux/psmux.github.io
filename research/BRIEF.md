# Brief for everyone working on psmux.github.io

## Situation

github.com/psmux is a personal GitHub account (owner: Godwin Sam Josh), not an organization. Its profile README is the README of the flagship repo psmux/psmux (about 3.6k stars, native tmux for Windows in Rust). We must not change psmux/psmux or its site psmux.pages.dev. That repo stays the flagship and keeps its traffic.

This repo builds https://psmux.github.io: a new, separate showcase of every project under the psmux account. It needs to catch attention, rank in search, and push visitors to star, install and use each project. psmux stays the headline project, and the others get proper billing next to it.

## Projects to feature (public repos under github.com/psmux)

Flagship: psmux, plus psmux-plugins (its plugin ecosystem).
Products: DeskVNC (native VNC/RDP/SSH client with an MCP control plane for AI agents), GodwinMix (plugin first live video mixer, Rust).
Terminal tools: pstop, psnet, vigil, TerminalMap, Tmux-Plugin-Panel, omp-manager, Psroot, tmuxtop.
Plumbing (small "under the hood" mention only): portable-pty-patched, vt100-rust-patched, scoop buckets, apt-repo.
Exclude: forks of other people's projects (winget-pkgs, oh-my-claudecode, oh-my-codex, nord), vt100-rust-patched-old, and every private repo.

Never use or mention private repos or client work. Never reuse files from ~/workspace/GodwinMix-GodwinOTT-Demo; it is client sales material. Never mention GodwinOTT, btn36, pricing or packages.

## GitHub access

Use the psmux account token for gh: `export GH_TOKEN=$(gh auth token -u psmux)`. Read only against other repos. Do not push, open PRs, edit settings or touch git in this repo; the coordinator commits.

## Writing rules (hard requirements, the owner publishes this under his own name)

* No dash punctuation at all: no em dash, no en dash, no horizontal bar, no double hyphen standing in for one. Ranges are written "1 to 3". Prefer open forms like "self hosted", "cross platform" over hyphenated ones where English allows.
* Do not write like an AI. No slogan openers or punchy taglines built on rhythm. No "Not X, but Y" or "It is not just X, it is Y". No bolded lead in on every bullet. No sets of three used as a rhythm device. No uniform sentence lengths.
* Banned words: leverage, seamless, robust, cutting edge, delve, elevate, unlock, harness, landscape, journey, transformative, testament.
* Plain declarative sentences of uneven length, the way a working engineer describes his own work. Concrete facts beat adjectives: numbers, commands, platforms, protocols.
* Every claim must be true of the code or README as it is today. Star counts come from the GitHub API and get refreshed live on the page.
