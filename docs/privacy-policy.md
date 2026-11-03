---
layout: default
title: Privacy policy
description: How the ReWeave Windows app stores information on your PC and when it contacts a network.
permalink: /privacy-policy.html
---

**Last updated:** 3 November 2026
**Product:** ReWeave (ReZephyr)
**Contact:** [himpire@outlook.com](mailto:himpire@outlook.com)

This policy describes the Windows desktop app. ReWeave does not require an account, and ReZephyr does not sell personal information.

## Information stored on your PC

Depending on how you use the app, ReWeave stores:

- Project files you save (`.reweave`), including an optional encrypted form
- Settings, recent projects, and local libraries (weaves, colours, yarns, presets)
- Weaver chat history, saved prompts, and design memory for the open project
- A local reliability record (session length, fault type, app version, a random install id) and, if the app closes unexpectedly, one crash log you can choose to send
- Optional Weaver usage statistics that record outcome, duration, mode, and model name, and do not record your messages, designs, or file paths

Uninstalling the app does not delete documents you saved or folders under `%LocalAppData%\ReZephyr\ReWeave`. Delete those yourself if you want them gone.

The full list of files and requests is on the [data disclosure](data-disclosure.html) page.

## Network

Design, geometry, physics, and mechanical tests work offline. ReWeave does not upload projects or simulation results to a ReZephyr server, and it does not run analytics.

A network request happens only when you start one:

- **Weaver with a cloud provider.** If you turn on Anthropic Claude, OpenAI, Google Gemini, or an OpenAI-compatible endpoint, that turn sends your message, recent chat, and the draft details Weaver needs (structure, colours, yarn, and sett). The API key stays on this PC, protected with Windows DPAPI. With providers off, Weaver stays on the built-in offline rules.
- **A local model you configure.** If you point Weaver at an address such as Ollama or LM Studio, the request goes to that address. The loopback defaults stay on your PC unless you type a remote address.
- **Update check and links.** Checking for updates, opening documentation, or emailing support uses the network or your browser. ReWeave does not record whether you followed the link.

Those providers and sites have their own privacy policies.

## Children

ReWeave is not directed at children under 13.

## Changes

The date above changes when this page changes. The Store listing uses this URL: `https://himon7.github.io/ReWeave-Docs/privacy-policy.html`.
