# AI Content Disclosure CG Minutes

## 8 June 2026

### Meeting Information
Scribe: David Weekly

Slides as presented: [W3C AI Content Disclosure Community Group (June 8, 2026)](https://docs.google.com/presentation/d/1pzJo4DWNb6XvFow2yG4F0p5mixUpcCdeYn5qYahkMy4/edit)

Attendees:
- David Weekly (co-chair)
- David Condrey (C2PA)
- Sydney Cohen (Applied Ontologist, Johns Hopkins Applied Physics Laboratory)

Regrets:
- Doğu Abaris (co-chair) — absent due to a medical issue.

This was our second working meeting. Attendance was light; the chairs renewed the call for broader participation (see [Call for participation](#call-for-participation) below).

### Agenda review

Regulatory landscape, standards/coordination updates, and a working discussion of disclosure levels, an optional `ai-assisted-percent` attribute, and provenance vocabularies.

### Regulatory updates

- **EU AI Act, Article 50.** The enforcement deadline for machine-readable marking of AI-generated text moved from **2 August 2026 to 2 December 2026**, giving the group more runway. (The charter's August 2026 framing should be revisited.)
- **New York S.8420-A.** Requires visual/auditory disclaimers when synthetic human actors are used. Not directly applicable to textual disclosure, but a signal that regulators are leaning into mandated AI disclosure.
- **US FTC Act, Section 5.** Requires disclosure of AI virtual influencers and fake endorsements. Again adjacent rather than textual, but part of the same regulatory direction.

Takeaway: there is still no existing HTML standard that meets what legislators and the public are asking for, which is the gap this group exists to fill.

### Standards and coordination updates

- **IPTC.** The chairs have reached out to invite IPTC to engage with the CG; no response yet. (Tracking: [#18](../../issues/18).)
- **Schema.org.** Issue [schemaorg#3391](https://github.com/schemaorg/schemaorg/issues/3391) on expressivity for AI disclosure now cites this group's work, and is considering allowing a software application to be named as author / contributor / editor.
- **PR [#20](../../pull/20) — author decision guide** (dcondrey). Well received; seems solid and ready to advance.
- **PR [#21](../../pull/21) — `ai-evidence-url` attribute** (dcondrey). Merits further discussion before adoption; carried over for group input. (Related: [#13](../../issues/13).)
- **TextSeal.** Noted as emergent work on a textual LLM watermark for provenance / distillation protection — relevant as a possible signal that a span of text was machine-authored, but out of scope for this group to own.

### Disclosure levels — moving from four values to three

The draft spec currently defines four values (`none`, `ai-assisted`, `ai-generated`, `ai-autonomous`). The meeting reached working consensus on two simplifications:

- **Replace `none` with `human-only`.** "None" is ambiguous about whether it means "no disclosure" or "no AI." `human-only` makes explicit that the author is positively asserting that AI was not used at all. (Resolves discussion in [#10](../../issues/10).)
- **Merge `ai-assisted` and `ai-generated` into a single `ai-assisted`.** Asking authors to reason about whether a document was AI-*assisted* versus AI-*generated* is too nuanced to apply reliably — even with multiple human contributors it forces unanswerable questions about who counts as "first author." The distinction was judged more confusing than useful. (Resolves [#14](../../issues/14); obsoletes the example request in [#7](../../issues/7).)

This lands the vocabulary at three levels:

| Value | Meaning |
|---|---|
| `human-only` | The author positively asserts no AI was involved. |
| `ai-assisted` | AI was involved in producing the content, with human authorship and/or review. |
| `ai-autonomous` | Published without human involvement or review. |

### Optional `ai-assisted-percent` attribute

To recover some of the granularity lost by merging the two middle values, the group discussed an **optional** numeric attribute, `ai-assisted-percent` (an integer 0–100), valid when `ai-assisted` is declared, indicating roughly what proportion of the content was authored by AI. This is a proposal to be worked out in spec text and is filed as a follow-up issue.

### Provenance vocabularies (Sydney Cohen)

- **W3C [PROV-O](https://www.w3.org/TR/prov-o/)** (the PROV Ontology) may be relevant for expressing provenance information in a standard, interoperable way.
- **[Dublin Core](https://www.dublincore.org/specifications/dublin-core/dcmi-terms/) DCMI Metadata Terms** were also flagged as potentially relevant prior art for metadata expression.

Both are filed as related-work follow-ups for evaluation against the group's single-axis model.

### Call for participation

The chairs asked everyone reading these minutes to attend. Meetings are the **second Monday of each month, 09:00–10:00 Pacific**. Anyone having trouble connecting or scheduling should contact the chairs. Active participation is also welcome on the mailing list (`public-ai-content-disclosure@w3.org`) and in GitHub issues.

### Action items

- [ ] Chairs: open a PR moving the spec and charter to the three-level vocabulary (`human-only` / `ai-assisted` / `ai-autonomous`), pending formal ratification on [#10](../../issues/10) and [#14](../../issues/14).
- [ ] File an issue for the optional `ai-assisted-percent` attribute proposal.
- [ ] File related-work issues for PROV-O and Dublin Core DCMI Metadata Terms, and for TextSeal watermarking.
- [ ] Chairs: continue IPTC outreach ([#18](../../issues/18)).
- [ ] Group: weigh in on PR [#21](../../pull/21) (`ai-evidence-url`).
- [ ] Revisit the charter's "August 2026" Article 50 framing in light of the 2 December 2026 deadline.

### Closing

- Adjourned.
