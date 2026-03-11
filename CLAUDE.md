# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

W3C Community Group specification for **AI Content Disclosure for HTML** — a proposed standard HTML mechanism (`ai-disclosure` global attribute and `<meta name="ai-disclosure">`) that lets authors disclose AI involvement in web content. Co-chaired by David Weekly and Dogu Abaris.

Key motivation: EU AI Act Article 50 requires machine-readable AI-generated text marking by August 2026. The spec also serves publishers, accessibility tools, and search engines.

## Repository Structure

- `index.html` — The spec itself, built with [ReSpec](https://respec.org/docs/) (W3C's spec authoring tool). Currently a skeleton/template.
- `charter.md` — The CG charter defining scope, deliverables, and governance.
- `minutes/` — Meeting minutes, one folder per meeting (`minutes/YYYYMMDD/README.md`).
- `w3c.json` — W3C group metadata (group ID 174458).

## Working with the Spec

The spec (`index.html`) uses ReSpec — just open it in a browser and ReSpec renders it client-side. No build step required. ReSpec config is in the `<script>` block at the top of `index.html`.

ReSpec docs: https://respec.org/docs/

## Coordination Context

The spec intentionally complements (not duplicates) work in:
- **IETF** `AI-Disclosure` HTTP header ([draft-abaris-aicdh](https://datatracker.ietf.org/doc/draft-abaris-aicdh/))
- **IPTC** Digital Source Type vocabulary
- **Schema.org** `aiDisclosure` structured data
- **C2PA** cryptographic media provenance

## Conventions

- Contributions require W3C Community Contributor License Agreement (CLA)
- All work is public; discussions happen in GitHub issues and the mailing list `public-ai-content-disclosure@w3.org`
- Meeting minutes follow the template in `minutes/README.md`
