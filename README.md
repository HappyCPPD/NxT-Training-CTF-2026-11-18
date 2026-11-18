# NxT Training CTF (13 Nov 2026), the replay

All 31 challenges from NxT training night, back online as a static site.

**Play:** https://happycppd.github.io/NxT-Training-CTF-2026-11-18/

- No account and no time limit. Your progress is saved in your browser.
- Hints are free, and every challenge has a writeup under its flag box (spoilers). All writeups: https://happycppd.github.io/NxT-Training-CTF-2026-11-18/writeups/
- Categories: warmup, crypto, web, pwn, rev, forensics, osint, and the six-stage boss.

Everything runs in your browser. The challenges that needed a server on the night are rebuilt to behave the same way: the SQL injection runs on a real SQLite engine (WebAssembly), the XSS admin bot is a hidden frame on the page, and the command injection runs on a small simulated shell.

That also means the flags are somewhere in this repo. Digging them out of the site's JavaScript is not the point. Solve them the way the challenge intends.
