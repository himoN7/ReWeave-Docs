---
layout: default
title: Data disclosure
description: Local files ReWeave keeps on your PC, and the network requests it makes only when you start them.
permalink: /data-disclosure.html
---

**Last updated:** 3 November 2026
**Product:** ReWeave (ReZephyr)

This page supplements the [privacy policy](privacy-policy.html).

## No account

ReWeave does not ask you to sign in. There is no ReZephyr-hosted user database.

## Local storage

App data is under your Windows profile, typically `%LocalAppData%\ReZephyr\ReWeave`, or the package `LocalState` folder after a Microsoft Store install. That includes settings, libraries, recent projects, and autosave or crash-recovery snapshots.

A `.reweave` file is written only where you choose in Save or Save As. ReWeave does not copy it elsewhere. An encrypted save uses the local `WFSP1` header so the file is not plain text. That encryption does not upload the project.

Uninstall does not delete those folders or the files you saved. Remove them yourself for a full cleanup.

## Optional network

Core design and simulation stay offline. Requests happen only in these cases:

- **Weaver, cloud provider.** With Anthropic Claude, OpenAI, Google Gemini, or an OpenAI-compatible endpoint enabled, each turn sends your message, recent chat, and the draft context Weaver needs. Your API key is stored on this PC with Windows DPAPI. Providers off means Weaver uses the built-in offline mill rules.
- **Weaver, local endpoint.** If you set a local server such as Ollama (`http://127.0.0.1:11434`) or LM Studio, the prompt goes there. It leaves the PC only if you enter a remote address.
- **Updates and links.** Check for updates, Releases, documentation, and support open a request or your browser. Projects, images, and simulation results are not uploaded with those requests.

## Kept on this PC only

- **Weaver chat** (`WeaveAiChat\chat-history.json`): messages, replies, and suggestion cards. Clear and New chat manage it.
- **Saved prompts** under `WeaveAiChat`.
- **Weaver memory** (`WeaveMemory\memory.json`): preferences such as the last structure and colourway for follow-up requests.
- **Usage statistics** (`Telemetry\copilot-turns-yyyyMM.jsonl`): outcome, duration, mode, provider, model name, app version, and a random install id. No message text, designs, paths, or keys. You can turn this off in Settings → Weaver. Sharing a report is a manual copy.
- **Reliability record** (`reliability\app-sessions-yyyyMM.jsonl` and `reliability\app-faults-yyyyMM.jsonl`): start time, duration, error type, and a short stack of method names, plus version and the same install id. Error message text is omitted because it can contain a file name. ReWeave does not send this file.
- **Crash log** (`logs\last-unhandled-exception.txt`): the latest unexpected error, including message text that may name an open file. Nothing sends it. Delete it whenever you want.
- **Older prompt samples** (`AiTrainingSamples\weave-ai-samples.jsonl`): versions before 0.8.0 could save prompts locally when a training switch was on. That switch is gone and the file is no longer written. It was never uploaded. Delete it if you still have it.

## Contact

[himpire@outlook.com](mailto:himpire@outlook.com)
