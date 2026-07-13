# AI Content Disclosure CG Minutes

## 13 July 2026

### Meeting Information
Scribe: David Weekly (compiled from chair notes and the meeting transcript)

Attendees:
- David Weekly (co-chair)
- Sydney Cohen (Applied Ontologist; joining the National Center for Ontological Research as an independent contractor the following week)
- Luke Swartz
- Elijah (new participant)

Regrets/absent:
- Doğu Abaris (co-chair)
- David Condrey

Attendance was light again. Where the group reached working consensus below, decisions will be ratified asynchronously on the linked GitHub issues so that non-attendees can weigh in.

### Agenda review

As posted in [#32](https://github.com/w3c-cg/ai-content-disclosure/issues/32). The pre-read agenda email appears to have landed in several attendees' spam folders; the chairs will look at improving distribution so attendees arrive having seen the draft.

### Published draft and recent merges

- The three-level vocabulary ([#24](https://github.com/w3c-cg/ai-content-disclosure/pull/24)) and the deterministic-content clarification ([#30](https://github.com/w3c-cg/ai-content-disclosure/pull/30)) are merged, and the draft is published at <https://w3c-cg.github.io/ai-content-disclosure/>.
- Attendees reviewed the published draft live and reception was positive: a good summary of the discussion so far, and well formatted as a spec.
- The group reaffirmed that the three top-level values (`human-only`, `ai-assisted`, `ai-autonomous`) are correct as non-overlapping categories.
- Sydney will produce visual aids illustrating the disclosure values (originally floated as a Venn diagram, then generalized to diagrams — since the categories don't actually overlap), targeted within one week, for possible inclusion in the spec.

### `ai-assisted` requires human review ([#31](https://github.com/w3c-cg/ai-content-disclosure/issues/31))

- **Working consensus:** tagging content `ai-assisted` affirmatively asserts that a human reviewed the content and takes responsibility for it. The current "human authorship and/or review" wording will be tightened accordingly.
- Discussion probed the breadth of the category: Luke noted it spans everything from a human author taking occasional editorial suggestions from an LLM to fully AI-generated text that a human reviewed before publication — all `ai-assisted` under this definition. Purely deterministic aids (e.g., spell check) remain out of scope per the existing spec text.
- To be ratified asynchronously on [#31](https://github.com/w3c-cg/ai-content-disclosure/issues/31) before spec text changes, given light attendance.

### AI intensity within `ai-assisted` ([#25](https://github.com/w3c-cg/ai-content-disclosure/issues/25))

- **Working consensus against a numeric percentage:** a percent value gives a false sense of precision and has no well-defined numerator ("73% AI involved doesn't really mean anything"). Luke was more reserved — a percentage is easily comparable and some tools can approximate it — and was not ready to rule it out entirely, but agreed it is not clearly right.
- David floated an alternative: a small set of self-disclosed intensity buckets within `ai-assisted` (roughly: mostly human / roughly equal / mostly AI), giving an editorial sense of AI involvement without false numeric precision.
- Sydney noted that if sub-attributes are ever added they should draw on existing community metrics rather than any single proprietary tool — but recommended **not pursuing intensity work right now**: chasing it may be a wild-goose chase, the three general categories are a fair start, and keeping the barrier to entry low matters more for adoption at this stage.
- **Outcome: no intensity sub-attribute and no research action for now.** The group proceeds with the three top-level values; [#25](https://github.com/w3c-cg/ai-content-disclosure/issues/25) should be revisited in light of this discussion.

### `ai-evidence-url` (PR [#21](https://github.com/w3c-cg/ai-content-disclosure/pull/21))

- David presented the PR: an optional attribute linking to documentation or evidence of exactly how AI was used, intended to be future-proof — the spec would not itself encode evidence claims, just point to where such claims can be made as external verification standards mature.
- Luke initially found it uncontroversial; a URL/URI is an idiomatic way to extend a spec.
- Sydney asked why the evidence output is a URL at all, and observed from the linked material that evidence is serialized as signed CBOR and scored into a "forensic authorship report," with hashed URIs linking back to the attestation — likely the origin of the URL design. She found the tool and its report-out structure genuinely well-designed.
- David raised the binding problem: the attribute could point anywhere (even an unrelated site), and what is behind the URL is only discoverable by fetching it — something at the destination must relate it back to the source document.
- Concerns about the reference tooling, **Writer's Proof**: nobody present knew who is behind it (an organization called **Writers Logic** appears to be pushing the related IETF standard); generating a report requires downloading a desktop tool, which is awkward for a W3C standard (a web-based upload flow would be preferred); and a pricing scheme already exists, raising the question of how much can be relied on to remain free.
- **Outcome:** deferred. The group is skeptical of the download requirement but considers the underlying standard well thought out; more engagement from David Condrey is needed to get PR [#21](https://github.com/w3c-cg/ai-content-disclosure/pull/21) over the hump. David will tee up a set of questions for Condrey; Sydney will follow up with Condrey and the Writers Logic team about which parts of the tool the group could use and what commitments exist about staying open, given the existing pricing scheme.

### Author decision guide (PR [#20](https://github.com/w3c-cg/ai-content-disclosure/pull/20))

Carried over — Condrey was absent, and the guide's decision tree will need one final revision to reflect the [#31](https://github.com/w3c-cg/ai-content-disclosure/issues/31) outcome once ratified. The June minutes already recorded it as ready to advance in substance.

### Committee leadership and participation

- David noted that the other co-chair has been essentially absent for the last couple of months; the role was accepted on an understanding of a roughly 50/50 split of effort that has not materialized, and this work is otherwise a volunteer labor of love. Asked by Luke whether he was effectively seeking a new co-chair, David said yes — and, more broadly, invited participants to act like co-chairs regardless of title: write to the mailing list, open and comment on issues, review PRs.
- **Sydney volunteered to step up**, noting the timing works well with her new role starting the following week, and committed to a comprehensive review of the spec document with notes, plus the visual-aid work above.
- Luke endorsed Sydney as a co-chair choice and offered focused help when specific items are flagged for him, though he cannot take on general load while ramping into a new job.

### Outreach

- David's outreach to the professor leading the EU Article 50 work on AI content identification has gone unanswered; he re-pinged today.
- Sydney's earlier, carefully written email to former colleagues at Underwriters Laboratories' digital safety research institute — which works intensely on digital standards — also received no reply; she will try again.
- Luke made a case for persistence: most non-responses are busy inboxes, not disinterest (recounting that even David, famously generous with his time, once needed a follow-up ping). Agreed norm: **politely persistent** follow-ups.
- Luke will reach out to former colleagues at Google and his broader network: companies with a vested interest in an open web that is "not AI slop" should be at the table, and their absence is surprising.
- Sharing the draft Community Group report in outreach is fine — it is a public document (marked draft).

### Tooling and adoption

- Sydney proposed shifting outreach from advocacy toward tooling: the schema is straightforward, and integrations (browser extension, CMS plugin) that embed it into HTML documents let the group lead with "here is a tool that works" rather than "this is important." David agreed: once the schema is finalized, the natural next phase of outreach is to tooling vendors and open-source projects that can start emitting the markup.
- Elijah, a group member since shortly after founding attending his first call, volunteered: he has built browser extensions and manages a WordPress site, and will collaborate with Sydney on tooling. He will introduce himself on the mailing list.

### Not reached (carried to August / async)

- IPTC digital source type mapping correction (from the research on [#10](https://github.com/w3c-cg/ai-content-disclosure/issues/10)).
- Whether to contact EU Code of Practice signatories before the 22 July signatory-form deadline.
- Erratum to the June minutes on the Article 50 timeline (obligations apply from 2 August 2026; 2 December 2026 is transitional for systems already on the EU market).
- Refreshing the IETF companion draft `draft-abaris-aicdh` before it expires 3 August 2026.

### Action items

- [ ] Sydney: produce visual diagrams for the disclosure values (target: one week).
- [ ] Sydney: comprehensive review of the spec document, with notes for the group.
- [ ] Sydney: follow up with David Condrey and the Writers Logic team on tool reuse and openness/pricing commitments.
- [ ] Sydney: re-ping former colleagues at UL's digital safety research institute.
- [ ] David: tee up the PR [#21](https://github.com/w3c-cg/ai-content-disclosure/pull/21) questions for Condrey (who is behind Writer's Proof; openness guarantees; web-based report flow; how a report is bound to the disclosing document).
- [ ] Luke: reach out to Google and broader network to recruit participants.
- [ ] Elijah: introduce himself on the mailing list; collaborate with Sydney on browser-extension/CMS tooling.
- [ ] Chairs: run async ratification of [#31](https://github.com/w3c-cg/ai-content-disclosure/issues/31); once ratified, request the final PR [#20](https://github.com/w3c-cg/ai-content-disclosure/pull/20) revision and merge.
- [ ] Chairs: post the Article 50 timeline erratum; decide on Code of Practice signatory outreach before 22 July; resolve the IETF draft refresh before 3 August.
- [ ] Chairs: publish these minutes and send a summary to the mailing list; continue discussion on the list between meetings.

### Closing

- Adjourned. Next meeting: Monday 10 August 2026, 09:00 Pacific.

### Post-meeting note

Shortly after the call, Professor Kalina Bontcheva (University of Sheffield; chair of Working Group 1 of the EU AI Office's Code of Practice on marking and labelling AI-generated content) replied to the chairs' outreach, welcoming the standardization effort — and will join the **10 August meeting**. Polite persistence works; please come with your best thinking on EU AI Act Article 50 alignment.
