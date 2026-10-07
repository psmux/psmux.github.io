# psmux account: project fact sheets

Collected 2026-10-08 from the GitHub API (psmux token), crates.io, the Chocolatey community feed and microsoft/winget-pkgs. Every number below is a snapshot; stars are refreshed live on the site. Machine readable version: `projects.json` in this folder.

Anything flagged in a Warning line, a Caveats list or the closing Things to flag section must not go on the site as written.

## Overview

| Project | Category | Stars | Forks | Latest release | Language | License |
|---|---|---:|---:|---|---|---|
| [psmux](https://github.com/psmux/psmux) | flagship | 3,626 | 219 | v3.3.8 (2026-08-18) | Rust | MIT |
| [psmux plugins](https://github.com/psmux/psmux-plugins) | flagship | 39 | 8 | none | PowerShell | MIT (README only, no LICENSE file) |
| [DeskVNC](https://github.com/psmux/DeskVNC) | product | 69 | 6 | v0.27.10 (2026-10-07) | Rust | MIT OR Apache-2.0 |
| [GodwinMix](https://github.com/psmux/GodwinMix) | product | 1 | 0 | v0.2.1 (2026-10-07) | Rust | Apache-2.0 |
| [pstop](https://github.com/psmux/pstop) | terminal | 255 | 11 | v0.5.4 (2026-04-18) | Rust | MIT |
| [PSNET](https://github.com/psmux/psnet) | terminal | 148 | 7 | v1.1.0 (2026-08-10) | Rust | MIT |
| [Vigil](https://github.com/psmux/vigil) | terminal | 4 | 1 | none | Rust | MIT |
| [TerminalMap](https://github.com/psmux/TerminalMap) | terminal | 20 | 2 | v0.1.0 (2026-03-21) | Rust | MIT |
| [Tmux Plugin Panel](https://github.com/psmux/Tmux-Plugin-Panel) | terminal | 85 | 0 | v0.1.1 (2026-03-04) | Rust | MIT |
| [OMP Manager](https://github.com/psmux/omp-manager) | terminal | 72 | 0 | v0.1.2 (2026-03-03) | Rust | MIT |
| [Psroot](https://github.com/psmux/Psroot) | terminal | 14 | 1 | none | Rust | MIT (README only, no LICENSE file) |
| [TmuxTop](https://github.com/psmux/tmuxtop) | terminal | 2 | 0 | v0.1 (2024-07-22) | Python | MIT |
| **Total, featured** | | **4,335** | | | | |

Plumbing repos add 11 stars, for 4,346 across everything the brief allows. Forks of other people's projects and vt100-rust-patched-old are left out of every total.

## psmux

*Native tmux for Windows, written in Rust on ConPTY.*

psmux is a terminal multiplexer for Windows 10 and 11 that drives Windows ConPTY directly and speaks the tmux command language. It reads an existing .tmux.conf, supports tmux themes and installs three identical binaries: psmux, pmux and tmux. It needs no WSL, Cygwin or MSYS2.

* Repo: https://github.com/psmux/psmux
* Platforms: Windows 10, Windows 11
* Language: Rust (GitHub's language bar says PowerShell because the PowerShell test scripts outweigh the Rust source in bytes (10.3 MB vs 8.4 MB). The program itself is Rust.)
* License: MIT
* Stars 3,626, forks 219; created 2025-11-30, last push 2026-10-07
* Latest release: v3.3.8 on 2026-08-18

**Install** (copied from the README unless a warning says otherwise)

WinGet:

```
winget install psmux
```

Cargo:

```
cargo install psmux
```

Scoop:

```
scoop bucket add psmux https://github.com/psmux/scoop-psmux
scoop install psmux
```

Chocolatey:

```
choco install psmux
```

From source:

```
git clone https://github.com/psmux/psmux.git
cd psmux
cargo build --release
```

**Key features**

* Split panes, multiple windows, detach and reattach sessions, all native on Windows
* Reads .tmux.conf; 90+ tmux compatible commands and 140+ format variables
* Full mouse support, including over SSH on supported Windows builds
* Copy mode with 53 vim keys
* Claude Code agent teams: teammates spawn in their own psmux panes with no extra config
* Control mode (-C and -CC) for IDE and plugin authors, including the iTerm2 tmux gateway

**Proof points**

* 3,626 GitHub stars and 219 forks (API, 2026-10-08)
* 48 contributors (GitHub contributors API, anonymous included)
* 38 GitHub releases; release assets downloaded 133,111 times in total
* crates.io: 3,876 downloads of the psmux crate
* Chocolatey: 8,678 total package downloads, latest 3.3.8
* WinGet: package marlocarlo.psmux, 17 versions published, latest 3.3.8
* Scoop bucket psmux/scoop-psmux, manifest at 3.3.8
* 23 pages in docs/ plus an llms.txt for AI assistants
* Measured in docs/performance.md: CLI round trips such as list-panes at about 18 ms median

**Links**

* repo: https://github.com/psmux/psmux
* homepage: https://psmux.pages.dev/
* docs: https://github.com/psmux/psmux/blob/master/docs/README.md
* claude_code_guide: https://github.com/psmux/psmux/blob/master/docs/claude-code.md
* crates_io: https://crates.io/crates/psmux
* chocolatey: https://community.chocolatey.org/packages/psmux
* winget: https://github.com/microsoft/winget-pkgs/tree/master/manifests/m/marlocarlo/psmux
* llms_txt: https://github.com/psmux/psmux/blob/master/llms.txt
* releases: https://github.com/psmux/psmux/releases

**Existing media**

* https://raw.githubusercontent.com/psmux/psmux/master/demo.gif
* Note: The README also embeds https://psmux.pages.dev/stats-card.svg, a live stats card, not a product capture.

**Search phrases**: tmux for windows; tmux windows native; tmux powershell; terminal multiplexer windows; tmux without wsl; split terminal windows powershell; tmux alternative windows; claude code agent teams windows; tmux.conf windows

## psmux plugins

*Plugin manager and tmux plugin ports for psmux, in PowerShell.*

The plugin collection for psmux. PPM is a port of tpm, and the repo holds PowerShell rewrites of well known tmux plugins such as resurrect, continuum, sensible and vim navigator, plus a set of theme plugins. Plugins are declared in ~/.psmux.conf with set -g @plugin and installed from inside psmux with Prefix + I.

* Repo: https://github.com/psmux/psmux-plugins
* Platforms: Windows
* Language: PowerShell
* License: MIT (stated in README; the repo has no LICENSE file and GitHub detects none)
* Stars 39, forks 8; created 2026-02-25, last push 2026-09-14
* Latest release: none

**Install** (copied from the README unless a warning says otherwise)

Install PPM:

```
git clone https://github.com/psmux/psmux-plugins.git "$env:TEMP\psmux-plugins" ; Copy-Item "$env:TEMP\psmux-plugins\ppm" "$env:USERPROFILE\.psmux\plugins\ppm" -Recurse ; Remove-Item "$env:TEMP\psmux-plugins" -Recurse -Force
```

Configure (~/.psmux.conf):

```
set -g @plugin 'psmux-plugins/ppm'
set -g @plugin 'psmux-plugins/psmux-sensible'
set -g @plugin 'psmux-plugins/psmux-resurrect'
set -g @plugin 'psmux-plugins/psmux-pain-control'

# Initialize PPM (keep at the very bottom)
run '~/.psmux/plugins/ppm/ppm.ps1'
```

Install plugins:

```
Start psmux and press Prefix + I
```

**Key features**

* PPM plugin manager: Prefix + I installs, Prefix + U updates, Prefix + M removes unused
* psmux-resurrect and psmux-continuum save and restore sessions
* psmux-vim-navigator moves between panes and vim splits with Ctrl h/j/k/l
* Status bar plugins for CPU, memory and battery
* Theme plugins including Catppuccin, Dracula, Nord, Tokyo Night, Gruvbox and Warm Burnout
* Plugin developer guide with a bash to PowerShell translation reference

**Proof points**

* 39 stars, 8 forks
* Repo tree holds PPM plus 12 plugins and 10 theme plugins (README tables list 11 plugins and 6 themes; git-status, net-speed, everforest, kanagawa, onedark and rosepine exist in the tree but are not in the README tables)
* psmux docs/plugins.md links to this repo throughout

**Links**

* repo: https://github.com/psmux/psmux-plugins
* developer_guide: https://github.com/psmux/psmux-plugins/blob/main/PLUGIN_DEVELOPER_GUIDE.md
* psmux_plugins_doc: https://github.com/psmux/psmux/blob/master/docs/plugins.md

**Existing media**

* None.

**Search phrases**: psmux plugins; tmux plugins windows; tpm for windows; tmux resurrect windows; tmux themes powershell; catppuccin tmux windows; tmux plugin manager powershell

**Caveats**

* No LICENSE file in the repo; only the README says MIT.
* README says 'PowerShell 7 comes with psmux'; psmux docs list PowerShell 7 as recommended and installed separately. Do not repeat that line.

## DeskVNC

*VNC, RDP and SSH client with an MCP server for AI agents.*

DeskVNC is a native remote desktop client for Windows, macOS and Linux, written in Rust on Tauri 2, that keeps VNC, RDP and SSH hosts in one library. It ships dvv, an MCP server that lets an AI agent open a saved machine, read the screen, click and type over the ordinary protocol, with nothing installed on the target. A person can click into the pane and take control back at any point.

* Repo: https://github.com/psmux/DeskVNC
* Platforms: Windows, macOS, Linux
* Platform note: Release v0.27.10 assets: Windows .exe and .msi, macOS universal .dmg, Linux .deb, .rpm and .AppImage. DeskVNC Support (attended support app) ships for macOS and Windows only.
* Language: Rust (Rust protocol cores and backend, TypeScript web UI inside Tauri 2.)
* License: MIT OR Apache-2.0 (dual; README and LICENSE-MIT plus LICENSE-APACHE; GitHub shows Apache-2.0)
* Stars 69, forks 6; created 2026-07-30, last push 2026-10-07
* Latest release: v0.27.10 on 2026-10-07

**Install** (copied from the README unless a warning says otherwise)

Download:

```
https://github.com/psmux/DeskVNC/releases/latest
```

Register the MCP server with Claude Code (macOS path):

```
claude mcp add deskvnc -- /Applications/DeskVNCViewer.app/Contents/MacOS/dvv mcp --stdio
```

From source:

```
npm install --prefix ui
cargo install tauri-cli --version "^2"   # if you do not have it

cargo tauri dev      # development, with hot reload
cargo tauri build    # production bundle
```

**Key features**

* Own VNC core (RFB 3.3 to 3.8, VeNCrypt, RA2 and Apple auth), RDP core (NLA, RemoteApp) and SSH core (SFTP, tunnels, PuTTY key files)
* Tabs split into panes, each pane holding a different machine and protocol
* Frames decoded in Rust and painted through WebGL2; H.264 hardware decode where the webview offers it
* Passwords in the OS keychain (Keychain, Credential Manager, Secret Service); no account and no telemetry
* Network discovery: mDNS, subnet scan with banner fingerprinting, LLMNR, NetBIOS, Wake on LAN
* dvv MCP server: open, look, click, type, file transfer, SSH terminal, groups of machines, with leases and stale screen fences

**Proof points**

* Measured against a 1920x1080 Windows desktop on a LAN: one observe then act cycle in 19 ms, about 52 actions per second
* dvv_screen at 0.25 scale in 25 ms; dvv_type at 447 characters per second
* One agent drove two desktops at once and finished both tasks in 0.95 seconds
* Verified MCP clients: Claude Code and OpenCode over stdio and HTTP
* 25 GitHub releases since 2026-07-30; release assets downloaded 774 times
* macOS build signed and notarized; Windows installer signed
* Source registers 25 dvv_ tool names (README documents the main ones)

**Links**

* repo: https://github.com/psmux/DeskVNC
* releases: https://github.com/psmux/DeskVNC/releases/latest
* install_docs: https://github.com/psmux/DeskVNC/blob/main/docs/INSTALL.md
* agents_docs: https://github.com/psmux/DeskVNC/blob/main/docs/AGENTS.md
* architecture: https://github.com/psmux/DeskVNC/blob/main/docs/ARCHITECTURE.md
* changelog: https://github.com/psmux/DeskVNC/blob/main/CHANGELOG.md
* sponsors: https://github.com/sponsors/psmux

**Existing media**

* https://raw.githubusercontent.com/psmux/DeskVNC/main/docs/images/library.png
* https://raw.githubusercontent.com/psmux/DeskVNC/main/docs/images/session.png
* https://raw.githubusercontent.com/psmux/DeskVNC/main/docs/images/split.png
* https://raw.githubusercontent.com/psmux/DeskVNC/main/docs/images/agent.png
* Note: README says these are real builds against demo servers on loopback; desktop credits are in docs/images/CREDITS.md and should travel with any reuse.

**Search phrases**: vnc client mac; rdp client for mac and linux; open source remote desktop manager; vnc rdp ssh in one app; mcp remote desktop; ai agent control windows desktop; computer use over vnc; claude code remote desktop; rust vnc client

**Caveats**

* README contains a 'Support and commercial use' section offering paid support; per the brief, do not mention pricing or packages on the site.

## GodwinMix

*Live video mixer in Rust that keeps the RTMP output running.*

GodwinMix takes several sources (RTMP cameras, files, HLS, SRT, web pages), puts one on programme at a time, and sends programme to one or more RTMP destinations without the output stopping while sources are added, removed or fail. It is one Rust binary on GStreamer with one HTTP port, and that binary is also the gmx command line client and an MCP server for AI agents. It was called LiveboxMix until 0.2.

* Repo: https://github.com/psmux/GodwinMix
* Platforms: Linux, macOS (Apple Silicon for the .dmg), Windows, Docker
* Language: Rust
* License: Apache-2.0
* Stars 1, forks 0; created 2026-09-15, last push 2026-10-07
* Latest release: v0.2.1 on 2026-10-07

**Install** (copied from the README unless a warning says otherwise)

Docker (headless quickstart):

```
git clone https://github.com/psmux/GodwinMix && cd GodwinMix
docker compose -f deploy/docker/docker-compose.yml up -d --build
```

Docker image:

```
docker run -d --name godwinmix --shm-size 1g \
  -p 127.0.0.1:8080:8080 -e GODWINMIX_TOKEN="$TOKEN" \
  ghcr.io/psmux/godwinmix:latest
```

Desktop app:

```
https://github.com/psmux/GodwinMix/releases/latest (.exe or .msi on Windows, .dmg on Apple Silicon, .deb, .AppImage)
```

From source:

```
brew install gstreamer
cargo install --git https://github.com/psmux/GodwinMix godwinmix

godwinmix --probe
godwinmix
```

Connect an AI agent:

```
claude mcp add godwinmix -- godwinmix mcp
godwinmix skill install --for claude
```

**Key features**

* Sources chosen by URL: RTMP, HLS, DASH, RTSP, SRT, UDP, RTP, files, exec: commands and web pages rendered by a real browser
* Output encoder starts once and never restarts; switching happens upstream on raw video and audio
* Hardware codecs picked at startup: NVIDIA, VA, Media Foundation, VideoToolbox, or software x264
* Everything is one HTTP call; gmx ctl scripts it; web UI, desktop app and MCP server use the same public API
* Plugins run beside the core through a public plugin protocol, with an optional WebAssembly host
* Ad breaks played immediately or on a given frame, with auto return to the camera

**Proof points**

* 123 unit tests that build real GStreamer pipelines, no mocks
* Tested on mediamtx and node-media-server v4: programme held exactly 30 fps across takes, 0 disconnects
* Scheduled cue landed +4 ms from the requested time (one frame is 33 ms)
* Docker quickstart is timed in CI on every push; the claim is under five minutes and the job fails if not
* Trimmed GStreamer runtime 84 MB; GodwinMix.app 108 MB on an Apple M4 Pro
* api_level 1 frozen for breaking changes, written on the front page
* Release v0.2.1 ships builds for Windows, macOS (arm64) and Linux (x86_64 and aarch64)

**Links**

* repo: https://github.com/psmux/GodwinMix
* releases: https://github.com/psmux/GodwinMix/releases/latest
* docs: https://github.com/psmux/GodwinMix/tree/main/docs
* agents_playbook: https://github.com/psmux/GodwinMix/blob/main/docs/agents.md
* http_api: https://github.com/psmux/GodwinMix/blob/main/docs/reference/http-api.md
* container: ghcr.io/psmux/godwinmix:latest

**Existing media**

* None.
* Note: README has no screenshots or video. The repo has an app icon (tauri-app/icons/icon.png) and overlay graphics under graphics/, which are content assets, not product captures. Do not use anything from ~/workspace/GodwinMix-GodwinOTT-Demo.

**Search phrases**: open source live video mixer; rtmp switcher; headless obs alternative; gstreamer video mixer; live stream switcher server; rtmp restream multiple destinations; ai director live stream; mcp video mixer

**Caveats**

* README says the repository is four crates; the repo now has 12 crates under crates/. Do not quote 'four crates'.
* No footprint numbers are published yet (README says so). Do not invent CPU or memory figures.
* 1 star; not a social proof candidate yet.

## pstop

*htop for Windows: a terminal system monitor written in Rust.*

pstop is an htop style process viewer for Windows 10 and 11. It shows per core CPU bars, memory, swap, network and GPU meters and a process tree, with extra tabs for disk I/O, per process network, GPU and processes inside WSL. Every install method also gives you an htop command.

* Repo: https://github.com/psmux/pstop
* Platforms: Windows 10, Windows 11
* Language: Rust
* License: MIT
* Stars 255, forks 11; created 2026-02-07, last push 2026-10-07
* Latest release: v0.5.4 on 2026-04-18

**Install** (copied from the README unless a warning says otherwise)

WinGet:

```
winget install marlocarlo.pstop
```

Chocolatey:

```
choco install pstop
```

Cargo:

```
cargo install pstop
```

From source:

```
cargo install --git https://github.com/psmux/pstop
```

Add htop alias:

```
pstop --install-alias
```

**Key features**

* Per core CPU bars, plus memory, swap, network, GPU and VRAM meters
* Five tabs: Main, I/O, Net (per process bandwidth, no admin), GPU, WSL
* Tree view, search, filter, kill, priority and CPU affinity
* F2 setup menu for meters, columns and 15 display options
* 23 color schemes including the 16 Windows Terminal schemes
* Mouse support and opt in vim keys; about 1 MB single binary

**Proof points**

* 255 stars, 11 forks
* 13 GitHub releases; release assets downloaded 10,056 times
* crates.io: 951 downloads
* WinGet marlocarlo.pstop with 11 versions; Chocolatey 0.5.4 (43 downloads)

**Links**

* repo: https://github.com/psmux/pstop
* homepage: https://crates.io/crates/pstop
* crates_io: https://crates.io/crates/pstop
* chocolatey: https://community.chocolatey.org/packages/pstop
* winget: https://github.com/microsoft/winget-pkgs/tree/master/manifests/m/marlocarlo/pstop

**Existing media**

* https://raw.githubusercontent.com/psmux/pstop/master/pstop-demo.gif

**Search phrases**: htop for windows; htop windows; htop alternative windows; top command windows; task manager in terminal; powershell process monitor; windows system monitor cli; gpu usage per process terminal

**Caveats**

* The repo description and the psmux README say '7 color schemes'; the pstop README says 23. Use 23.

## PSNET

*Terminal network monitor for Windows with nine tabs and no Npcap.*

psnet is a TUI network monitor for Windows 10 and 11 built in Rust. One psnet.exe of about 12 MB has nine tabs covering traffic graphs, connections with DNS names, listening servers, a packet inspector, a topology view, alerts, a per app firewall, LAN devices and network adapters. It uses built in Windows APIs and raw sockets, so it needs no Npcap or WinPcap.

* Repo: https://github.com/psmux/psnet
* Platforms: Windows 10, Windows 11
* Language: Rust
* License: MIT
* Stars 148, forks 7; created 2026-02-12, last push 2026-10-07
* Latest release: v1.1.0 on 2026-08-10

**Install** (copied from the README unless a warning says otherwise)

Cargo:

```
cargo install psnet
```

WinGet:

```
winget install marlocarlo.psnet
```

> Warning: README says 'winget install psmux.psnet', but the published WinGet id is marlocarlo.psnet (verified in microsoft/winget-pkgs). Use marlocarlo.psnet.

Chocolatey:

```
choco install psnet
```

> Warning: Not found on the Chocolatey community feed on 2026-10-08. Leave out until it is approved.

Binary:

```
https://github.com/psmux/psnet/releases/latest
```

From source:

```
git clone https://github.com/psmux/psnet.git
cd psnet
cargo build --release
.\target\release\psnet.exe
```

**Key features**

* Dashboard with traffic graph, world map of connections and top apps by bandwidth
* Connections with DNS resolved hostnames and the real service behind svchost
* Servers tab fingerprints 200+ server types and matches 6,500+ Wappalyzer signatures
* Packet inspector with protocol dissection and hex view (raw sockets, needs Administrator)
* Per app firewall block and allow from the TUI
* LAN device scan with a 35,000 entry MAC vendor database; GeoIP embedded, no network lookups

**Proof points**

* 148 stars, 7 forks
* 3 GitHub releases; release assets downloaded 2,854 times
* crates.io: 455 downloads
* WinGet marlocarlo.psnet, 3 versions
* About 12 MB binary with four databases compiled in

**Links**

* repo: https://github.com/psmux/psnet
* crates_io: https://crates.io/crates/psnet
* winget: https://github.com/microsoft/winget-pkgs/tree/master/manifests/m/marlocarlo/psnet
* releases: https://github.com/psmux/psnet/releases/latest

**Existing media**

* https://raw.githubusercontent.com/psmux/psnet/master/image.png

**Search phrases**: network monitor windows terminal; glasswire alternative; wireshark without npcap; per app bandwidth monitor windows; tui network monitor; netstat with process names windows; block app internet windows firewall cli; which apps use my internet windows

**Caveats**

* WinGet id mismatch in README (see install warning).
* Chocolatey package not live.

## Vigil

*Terminal security dashboard for Linux servers, written in Rust.*

Vigil is a TUI for Linux servers that shows a 0 to 100 security score, a braille world map of attack origins, every listening port with a risk badge, fail2ban bans and firewall state. It reads /proc, auth.log or journalctl, fail2ban and UFW, iptables or nftables, with GeoIP data embedded. The README presents it as the Linux counterpart to psnet.

* Repo: https://github.com/psmux/vigil
* Platforms: Linux
* Language: Rust
* License: MIT
* Stars 4, forks 1; created 2026-03-20, last push 2026-10-07
* Latest release: none

**Install** (copied from the README unless a warning says otherwise)

From source:

```
git clone https://github.com/psmux/vigil
cd vigil
cargo build
cargo run
```

crates.io (as written in README):

```
cargo install vigil
```

> Warning: BROKEN: the crates.io name 'vigil' belongs to an unrelated project (Metaswitch/vigil, created 2018). This command installs someone else's crate.

Prebuilt binary (as written in README):

```
curl -fsSL https://github.com/psmux/vigil/releases/latest/download/vigil-linux-amd64 \
  -o /usr/local/bin/vigil && chmod +x /usr/local/bin/vigil
```

> Warning: BROKEN: the repo has no releases, so this URL returns 404.

**Key features**

* Six views: Command Center, Attack Radar, Doors, Network Pulse, Geography, System
* Security score from 0 to 100 weighted across ports, firewall, SSH hardening and more
* Doors view lists every listening port with bind address, auth status and risk
* 24 hour attack heatmap and top attackers by country
* fail2ban and UFW, iptables or nftables integration
* Basic views run without root; sudo adds firewall, fail2ban and attack detection

**Proof points**

* 4 stars, 1 fork
* No releases yet

**Links**

* repo: https://github.com/psmux/vigil

**Existing media**

* None.
* Note: README shows only an ASCII mockup in a code block. Its logo URL (raw .../vigil/main/.github/vigil-logo.svg) returns 404 on both main and master.

**Search phrases**: linux server security dashboard; fail2ban dashboard; ssh brute force monitor; check open ports linux server; terminal security monitor; ufw dashboard; attack map terminal

**Caveats**

* Only working install path is building from source. Do not show 'cargo install vigil' on the site.
* README links to crates.io/crates/vigil, which is the unrelated Metaswitch crate.

## TerminalMap

*OpenStreetMap in the terminal, as an app and a Rust library.*

TerminalMap renders OpenStreetMap vector tiles as braille or ASCII art in any terminal, with keyboard and mouse pan and zoom from world view down to street level. It is also an embeddable Rust library: each MapState is an independent map with its own markers and camera. Tiles come from OpenFreeMap with no API key, and low zoom tiles are embedded for offline use.

* Repo: https://github.com/psmux/TerminalMap
* Platforms: Windows, Linux, macOS
* Platform note: Package managers: WinGet, Scoop and Cargo on Windows; an APT repo for Debian and Ubuntu amd64; Cargo elsewhere.
* Language: Rust
* License: MIT
* Stars 20, forks 2; created 2026-03-21, last push 2026-10-07
* Latest release: v0.1.0 on 2026-03-21

**Install** (copied from the README unless a warning says otherwise)

Cargo:

```
cargo install terminalmap
```

WinGet:

```
winget install psmux.TerminalMap
```

Scoop:

```
scoop bucket add terminalmap https://github.com/psmux/scoop-terminalmap
scoop install terminalmap
```

APT (Debian/Ubuntu):

```
curl -fsSL https://psmux.github.io/apt-repo/gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/terminalmap.gpg
echo "deb [signed-by=/usr/share/keyrings/terminalmap.gpg] https://psmux.github.io/apt-repo stable main" | sudo tee /etc/apt/sources.list.d/terminalmap.list
sudo apt update && sudo apt install terminalmap
```

Chocolatey:

```
choco install terminalmap
```

> Warning: Not found on the Chocolatey community feed on 2026-10-08. Leave out until it is approved.

From source:

```
git clone https://github.com/psmux/TerminalMap.git
cd TerminalMap
cargo run --release
```

**Key features**

* Braille rendering at 2x8 subpixels per cell, zoom 0 to 18
* Full Mapbox Vector Tile parsing and Mapbox GL style support
* Label collision detection and filled polygons
* Markers with shapes, colors and blink or pulse animations
* Scriptable camera with fly to animation and a globe tour
* Embeddable MapState API; several independent maps per app

**Proof points**

* 20 stars, 2 forks
* Release v0.1.0 assets downloaded 471 times; crates.io 162 downloads
* Published on WinGet (psmux.TerminalMap), Scoop and a self hosted APT repo
* Inspired by mapscii (credited in README)

**Links**

* repo: https://github.com/psmux/TerminalMap
* crates_io: https://crates.io/crates/terminalmap
* apt_repo: https://psmux.github.io/apt-repo/
* winget: https://github.com/microsoft/winget-pkgs/tree/master/manifests/p/psmux/TerminalMap

**Existing media**

* https://raw.githubusercontent.com/psmux/TerminalMap/master/screenshot.png

**Search phrases**: map in terminal; terminal map viewer; openstreetmap terminal; mapscii alternative; rust tui map widget; ratatui map; braille map cli; ascii world map

**Caveats**

* The APT repo lives at psmux.github.io/apt-repo, a path under the new site's domain. See the site warning in facts.md.

## Tmux Plugin Panel

*TUI plugin and theme manager for tmux and psmux.*

Tmux Plugin Panel (binary name tmuxpanel) is a terminal UI for browsing, installing, updating and removing tmux plugins and themes, and for editing tmux options without memorising set -g syntax. It ships with a curated registry of 40+ plugins, searches GitHub for more, and detects both tmux and psmux installs. It installs three commands: tmuxpanel, tmuxplugins and tmuxthemes.

* Repo: https://github.com/psmux/Tmux-Plugin-Panel
* Platforms: Windows (x64, x86, ARM64), Linux (x64, ARM64), macOS (Intel, Apple Silicon)
* Language: Rust
* License: MIT
* Stars 85, forks 0; created 2026-02-25, last push 2026-10-07
* Latest release: v0.1.1 on 2026-03-04

**Install** (copied from the README unless a warning says otherwise)

Cargo:

```
cargo install tmuxpanel
```

WinGet:

```
winget install marlocarlo.tmuxpanel
```

Scoop:

```
scoop bucket add tmuxpanel https://github.com/marlocarlo/scoop-tmuxpanel
scoop install tmuxpanel
```

> Warning: URL uses the old marlocarlo account and works through GitHub's rename redirect. The canonical bucket is https://github.com/psmux/scoop-tmuxpanel.

Chocolatey:

```
choco install tmuxpanel
```

> Warning: Not found on the Chocolatey community feed on 2026-10-08. Leave out until it is approved.

From source:

```
git clone https://github.com/marlocarlo/Tmux-Plugin-Panel.git
cd Tmux-Plugin-Panel
cargo build --release
./target/release/tmuxpanel
```

**Key features**

* Browse a curated registry of 40+ plugins by category, with an embedded offline copy
* Search GitHub for any tmux plugin
* One key install, update, update all, remove and orphan cleanup
* Theme gallery with preview and switch
* Config editor for tmux.conf and psmux.conf, with reset to defaults
* Auto detects tmux and psmux binaries and config files

**Proof points**

* 85 stars
* 2 GitHub releases; release assets downloaded 2,435 times
* crates.io: 486 downloads (crate tmuxpanel)
* WinGet marlocarlo.tmuxpanel; Scoop bucket psmux/scoop-tmuxpanel at 0.1.1
* Prebuilt binaries for 7 OS and CPU combinations

**Links**

* repo: https://github.com/psmux/Tmux-Plugin-Panel
* crates_io: https://crates.io/crates/tmuxpanel
* registry_format: https://github.com/psmux/Tmux-Plugin-Panel/blob/master/REGISTRY_FORMAT.md

**Existing media**

* https://raw.githubusercontent.com/psmux/Tmux-Plugin-Panel/master/screenshot.png

**Search phrases**: tmux plugin manager; tpm alternative; tmux themes; install tmux plugins; tmux plugin manager tui; catppuccin tmux install; tmux config editor; psmux themes

**Caveats**

* README links use github.com/marlocarlo/... (old account name). They redirect today. Use psmux URLs on the site.

## OMP Manager

*Setup wizard TUI for Oh My Posh themes, fonts and shells.*

OMP Manager is a terminal UI that sets up Oh My Posh from nothing: it installs Oh My Posh, installs a Nerd Font, lets you preview and apply one of 100+ themes, and writes the init line into each shell profile it finds. It supports eight shells, from PowerShell 7 to Nushell and Elvish.

* Repo: https://github.com/psmux/omp-manager
* Platforms: Windows (x64, x86, ARM64), Linux (x64, ARM64), macOS (Intel, Apple Silicon)
* Language: Rust
* License: MIT
* Stars 72, forks 0; created 2026-03-03, last push 2026-10-07
* Latest release: v0.1.2 on 2026-03-03

**Install** (copied from the README unless a warning says otherwise)

Cargo:

```
cargo install omp-manager
```

WinGet:

```
winget install marlocarlo.OmpManager
```

Chocolatey:

```
choco install omp-manager
```

Scoop:

```
scoop bucket add omp-manager https://github.com/marlocarlo/scoop-omp-manager
scoop install omp-manager
```

> Warning: Old marlocarlo URL, works by redirect. Canonical bucket: https://github.com/psmux/scoop-omp-manager.

**Key features**

* Four step setup wizard: install Oh My Posh, Nerd Font, theme, shells
* Theme browser with 100+ themes, categories, live search and in terminal preview
* Curated list of 18 Nerd Fonts
* Configures PowerShell 7, Windows PowerShell, Bash, Zsh, Fish, Nushell, Cmd (Clink) and Elvish
* Full mouse support
* Statically linked Windows binaries, no VC runtime needed

**Proof points**

* 72 stars
* 2 GitHub releases; release assets downloaded 1,399 times
* crates.io: 391 downloads
* WinGet marlocarlo.OmpManager, Chocolatey 0.1.2, Scoop bucket at 0.1.2

**Links**

* repo: https://github.com/psmux/omp-manager
* crates_io: https://crates.io/crates/omp-manager
* chocolatey: https://community.chocolatey.org/packages/omp-manager

**Existing media**

* https://raw.githubusercontent.com/psmux/omp-manager/master/screenshot.png

**Search phrases**: oh my posh setup; oh my posh themes preview; install oh my posh windows; powershell prompt theme; nerd font install windows; oh my posh manager; customize powershell prompt

**Caveats**

* Repo homepage field points to github.com/marlocarlo/omp-manager (redirect).

## Psroot

*Containers on Windows without Hyper-V, WSL or Docker, using AppContainer.*

Psroot runs Docker style containers on Windows using kernel primitives that need no hardware virtualization: AppContainer, Job Objects and a process visibility shim. It works on cloud VMs and nested setups where Hyper-V and WSL2 cannot run, and its standard tier needs no admin rights. Linux (namespaces and cgroups) and macOS (sandbox-exec) backends give the same CLI.

* Repo: https://github.com/psmux/Psroot
* Platforms: Windows 10 1809+ (x86_64, primary), Linux, macOS
* Language: Rust
* License: MIT (stated in README; no LICENSE file in the repo, GitHub detects none)
* Stars 14, forks 1; created 2026-04-19, last push 2026-07-18
* Latest release: none

**Install** (copied from the README unless a warning says otherwise)

From source:

```
git clone https://github.com/psmux/Psroot.git
cd Psroot
cargo build --release
```

**Key features**

* Filesystem isolation through AppContainer, the sandbox Chrome and Edge use
* Process visibility isolation: the container sees only its own process tree
* Network modes: none (default), outbound, full
* 35+ host environment variables replaced so paths and usernames do not leak
* Memory, CPU and process count limits via Job Objects; Docker style create, start, exec, stop, rm
* Tool provisioning: --tool node, rust-bin, winget

**Proof points**

* 66 built in isolation tests (psroot test all)
* About 2 MB binary; README states under one second startup
* Standard tier needs no admin and no VT-x
* 14 stars, 1 fork

**Links**

* repo: https://github.com/psmux/Psroot
* docs: https://github.com/psmux/Psroot/tree/master/docs
* cli_reference: https://github.com/psmux/Psroot/blob/master/docs/cli-reference.md

**Existing media**

* None.

**Search phrases**: docker without hyper-v; docker without vt-x; containers without virtualization windows; windows sandbox command line; run untrusted script isolated windows; appcontainer sandbox; windows containers no admin; ci isolation windows runner

**Caveats**

* No releases exist, yet docs/installation.md says to download psroot.exe from Releases. Only build from source works.
* Not on crates.io.
* No LICENSE file.

## TmuxTop

*Top style monitor for tmux sessions, with backup and restore.*

TmuxTop is a Python curses tool that lists the processes running in each tmux session, window and pane with their CPU and memory use. It can export that data to JSON and write a shell script that rebuilds the current tmux sessions later. It is the oldest repo on the account, from July 2024.

* Repo: https://github.com/psmux/tmuxtop
* Platforms: Any system with tmux and Python 3 (README does not name platforms)
* Language: Python
* License: MIT
* Stars 2, forks 0; created 2024-07-22, last push 2026-10-07
* Latest release: v0.1 on 2024-07-22

**Install** (copied from the README unless a warning says otherwise)

Dependencies (as written in README):

```
pip install psutil curses argparse
```

> Warning: curses and argparse ship with Python and are not pip packages; this line will likely error on argparse/curses. Safer to show 'pip install psutil'. Not tested here.

Run:

```
python tmuxtop.py
```

**Key features**

* Live CPU and memory per process inside tmux panes
* Navigate sessions, windows and panes
* Export to tmuxtop_export.json (--export or e)
* Back up sessions to a shell script (--backup or b) and restore them (--restore or r)

**Proof points**

* 2 stars
* Oldest project on the account (2024-07-22)
* Has its own GitHub Pages site at https://psmux.github.io/tmuxtop/

**Links**

* repo: https://github.com/psmux/tmuxtop
* homepage: https://psmux.github.io/tmuxtop/

**Existing media**

* https://github.com/user-attachments/assets/af7dccdc-bbec-4fa5-a154-08b0bfd29815
* Note: Only image is a GitHub user-attachments URL (PNG, 22 KB, returns 200), not a raw.githubusercontent URL. Better to copy it into the site than hotlink.

**Search phrases**: tmux process monitor; tmux top; tmux session backup restore; save tmux sessions; tmux cpu usage per pane

**Caveats**

* Repo homepage field is https://marlocarlo.github.io/tmuxtop/, which returns 404. The live page is https://psmux.github.io/tmuxtop/.

## Plumbing (under the hood mention only)

| Repo | What it is | Published as | Stars |
|---|---|---|---:|
| [portable-pty-patched](https://github.com/psmux/portable-pty-patched) | Patched copy of wezterm's portable-pty 0.9.0 that passes the ConPTY flags psmux needs (PASSTHROUGH_MODE on Windows 11 22H2+, WIN32_INPUT_MODE, RESIZE_QUIRK). | crates.io portable-pty-psmux 0.9.7, 4,950 downloads | 3 |
| [vt100-rust-patched](https://github.com/psmux/vt100-rust-patched) | GitHub fork of doy/vt100-rust with psmux patches: CSI s/u/f/n cursor save and restore, blink, hidden and strikethrough SGR. | crates.io vt100-psmux 0.16.10, 3,319 downloads | 1 |
| [scoop-psmux](https://github.com/psmux/scoop-psmux) | Scoop bucket for psmux (psmux.exe, pmux.exe, tmux.exe). | manifest version 3.3.8 | 5 |
| [scoop-terminalmap](https://github.com/psmux/scoop-terminalmap) | Scoop bucket for TerminalMap. | manifest version 0.1.0 | 0 |
| [scoop-tmuxpanel](https://github.com/psmux/scoop-tmuxpanel) | Scoop bucket for Tmux Plugin Panel. | manifest version 0.1.1 | 1 |
| [scoop-omp-manager](https://github.com/psmux/scoop-omp-manager) | Scoop bucket for OMP Manager. | manifest version 0.1.2 | 1 |
| [apt-repo](https://github.com/psmux/apt-repo) | Signed APT repository for TerminalMap, served by GitHub Pages at https://psmux.github.io/apt-repo/. | terminalmap_0.1.0-1_amd64.deb | 0 |

vt100-rust-patched is technically a GitHub fork of doy/vt100-rust. The brief lists it as plumbing, so it stays, described as a patched fork.

## Story across the projects

Facts only. Use these to connect the projects on the site; do not dress them up.

### Common threads

* Language. Ten of the twelve featured projects are Rust. psmux-plugins is PowerShell and tmuxtop is Python. GitHub labels psmux as PowerShell only because its test scripts are larger than its Rust source.
* Windows terminal tooling. psmux, pstop, psnet and Psroot are Windows first and run from PowerShell or Windows Terminal. Tmux Plugin Panel and OMP Manager are cross platform but ship Windows builds through WinGet and Scoop. vigil is the one Linux only tool and its README calls itself the Linux counterpart to psnet.
* TUI stack. pstop, psnet, vigil, Tmux Plugin Panel and OMP Manager all use ratatui and crossterm (stated in their READMEs). TerminalMap renders with braille characters and is built as a library for any Rust TUI app (its README does not name ratatui).
* AI agent integration. DeskVNC ships `dvv`, an MCP server for driving remote desktops. GodwinMix ships `godwinmix mcp`, an MCP server for running the mixer, plus `godwinmix skill install` for Claude, opencode, pi, Codex and Gemini. psmux has no MCP server; its agent story is Claude Code agent teams, where teammates open in separate psmux panes, plus control mode for programmatic use. All three name Claude Code explicitly in their docs.
* Distribution. The same set of channels repeats: crates.io (psmux, pstop, psnet, TerminalMap, tmuxpanel, omp-manager), WinGet (psmux, pstop, psnet, tmuxpanel, OmpManager, TerminalMap), Chocolatey (psmux, pstop, omp-manager live), self hosted Scoop buckets (psmux, TerminalMap, tmuxpanel, omp-manager) and one self hosted APT repo (TerminalMap).
* Tauri 2 desktop apps. DeskVNC and GodwinMix both ship as Tauri desktop apps with signed or packaged installers for Windows, macOS and Linux.
* One author. Profile name Godwin Sam Josh. psmux has 48 contributors on GitHub's count; every other repo has 1 or 2.

### Totals

* Featured projects: 4,335 stars (psmux alone is 3,626, about 84 percent).
* Plumbing repos: 11 stars more, 4,346 in all.
* GitHub release asset downloads, summed over all releases: psmux 133,111; pstop 10,056; psnet 2,854; Tmux Plugin Panel 2,435; OMP Manager 1,399; DeskVNC 774; TerminalMap 471; GodwinMix 3. Total about 151,100.
* crates.io downloads: psmux 3,876; pstop 951; tmuxpanel 486; psnet 455; omp-manager 391; terminalmap 162; plus the plumbing crates portable-pty-psmux 4,950 and vt100-psmux 3,319 (psmux's own Cargo.toml uses both, now vendored under crates/ in the psmux workspace).

### How the projects feed into each other

* psmux README "Related Projects" links to pstop, psnet, Tmux Plugin Panel and OMP Manager, with their GIFs or screenshots and `cargo install` lines.
* psmux docs/plugins.md points to psmux-plugins (30 links) and Tmux Plugin Panel.
* psmux-plugins exists only for psmux. Tmux Plugin Panel detects psmux and edits psmux.conf as well as tmux.conf, and its README tells Windows users to `winget install psmux`.
* vigil README has a "Part of the psmux Family" table listing psmux, psnet and pstop, and compares itself to psnet line by line.
* psmux depends on portable-pty-psmux and vt100-psmux, the crates published from the two patched plumbing repos. Today psmux builds them from copies vendored under crates/ in its own workspace (vt100-psmux 0.16.13 there, 0.16.10 on crates.io).
* TerminalMap depends on scoop-terminalmap and apt-repo for distribution; psmux, Tmux Plugin Panel and OMP Manager each have their own Scoop bucket.
* DeskVNC and GodwinMix both expose MCP servers and both document `claude mcp add`. Neither README links to the other or to psmux.
* pstop, psnet, Psroot, DeskVNC, GodwinMix and tmuxtop READMEs do not link to any other psmux project.

### Things to flag before the site goes live

* Site path collision. Two project Pages sites already live under this domain: https://psmux.github.io/apt-repo/ (the TerminalMap APT repo, live, gpg.key returns 200) and https://psmux.github.io/tmuxtop/ (returns 200). The new user site must not create `/apt-repo/` or `/tmuxtop/` paths, and it must not break them.
* vigil install is broken. `cargo install vigil` installs an unrelated crate owned by Metaswitch, and the curl download 404s because there are no releases. Only build from source works.
* psnet WinGet id. README says `psmux.psnet`; the real id is `marlocarlo.psnet`.
* Chocolatey packages for psnet, tmuxpanel and terminalmap are not on the community feed, although their READMEs list `choco install`. psmux, pstop and omp-manager are live.
* Psroot has no releases, but its docs say to download from Releases. No LICENSE file either. psmux-plugins also lacks a LICENSE file despite saying MIT.
* Old account name. Tmux Plugin Panel, OMP Manager, scoop-psmux and repo homepage fields still use github.com/marlocarlo/... These redirect today. The marlocarlo user exists with 0 public repos; if anything is ever created there under the same name, the redirect breaks. tmuxtop's homepage field (marlocarlo.github.io/tmuxtop) already returns 404.
* pstop color scheme count: repo description and psmux README say 7, pstop README says 23.
* GodwinMix README says four crates; the repo has 12.
* DeskVNC tool count: 25 `dvv_` names found in source, read from the local clone; not every one is documented in the README, so say "about two dozen" or list the documented ones.
* Not verified: the DeskVNC and GodwinMix performance figures (taken from their READMEs, not rerun), Chocolatey download counts beyond what the OData feed returned, and whether tmuxtop's `pip install` line works.
* The profile bio mentions another project not in the brief. It is not covered here.

### Projects with no usable visual media

* psmux-plugins: none.
* GodwinMix: no screenshots or video; only an app icon and overlay graphics in the repo.
* vigil: none; the README's logo link is a 404 and the rest is an ASCII mockup.
* Psroot: none.
* tmuxtop has one small screenshot, but only as a GitHub user-attachments URL. Copy it rather than hotlink.
