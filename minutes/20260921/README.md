# AI Content Disclosure CG Minutes

## 21 September 2026

### Meeting Information

**Time:** 8:58 – 10:05 a.m. Pacific (1h07m)
**Venue:** Co-chair working session (duly noticed)

Scribe: David Weekly (compiled from Grain AI notes and transcript)

Attendees:
- David Weekly (co-chair)
- Sydney Cohen (co-chair)

Regrets:
- Evgeny — sent regrets ahead of the call; will review the group report and open
  issues asynchronously.
- Prof. Kalina Bontcheva (University of Sheffield) — indicated she would attend
  both this call and the previous one; did not join either.

First working session following the Doğu Abaris → Sydney Cohen co-chair
rotation. A sprint through all 21 open issues and the open pull requests, with
edits made live during the call.

### Agenda review

No posted agenda. The chairs agreed at the top of the call to sprint the open
issue list oldest-first, with Sydney reading and proposing resolutions and David
editing `index.html` live and closing issues.

**Working method agreed:** one commit per issue fixed, with all of the session's
commits gathered into a single working-session pull request rather than merged
piecemeal. Issues are linked by citing the issue number in the commit message.

### Issue triage and resolution

All 21 open issues were resolved and closed.

- **[#38](https://github.com/w3c-cg/ai-content-disclosure/issues/38)** — the
  `mixed` disclosure value is removed from the draft as redundant.
- **[#37](https://github.com/w3c-cg/ai-content-disclosure/issues/37)** —
  boundary guidance now states that disclosure concerns AI involvement in
  producing the **textual content**. Using AI to generate HTML structure, CSS,
  or JavaScript without generating or modifying the text does not affect the
  disclosure value. As put in session: *"it's the textual content and not the
  layout or structure."*
- **[#35](https://github.com/w3c-cg/ai-content-disclosure/issues/35)** — stale
  agenda item. David Condrey's self-nomination for co-chair, left as a comment
  on 10 August, was **declined** with thanks for his contributions: the co-chair
  positions are adequately filled. The vocabulary mismatch the comment raised
  had already been fixed to match what the group ratified.
- **[#34](https://github.com/w3c-cg/ai-content-disclosure/issues/34)** — AI
  suggestions that are **not applied** do not count as AI involvement. A
  no-op AI spell-check, or ignored suggestions, leave content `human-only`.
  Recorded rationale: the spec concerns how meaningfully the text was composed
  by AI; if you use tools and are still typing everything yourself, that is
  outside what counts as AI-produced text. By the same logic, using AI as a
  research assistant to produce a brief and then writing the text yourself is
  `human-only`.
- **[#32](https://github.com/w3c-cg/ai-content-disclosure/issues/32)** — agenda
  item, no outstanding comments; closed.
- **[#31](https://github.com/w3c-cg/ai-content-disclosure/issues/31)** — the
  "and/or" in the `ai-assisted` definition was checked and found correct: it
  ranges over human authorship or human review, and does not weaken the rule
  that `ai-assisted` definitively asserts human review happened
  (`ai-autonomous` is the unreviewed case). The proposal to add "two clear
  questions" to the design goals was **not adopted** as a separate change.
- **[#29](https://github.com/w3c-cg/ai-content-disclosure/issues/29)** — closed.
  A good-faith outreach effort was made to the EU AI Office contacts; they did
  not attend.
- **[#28](https://github.com/w3c-cg/ai-content-disclosure/issues/28)** — already
  covered by the existing IETF and IPTC correspondences; no additional boundary
  guidance needed. The chairs noted that Article 50's exemption applies where
  content undergoes human review or editorial control **and** a person or
  organisation holds editorial responsibility; the article itself does not
  specify reviewer competence, while the Commission's FAQ does, describing
  deliberate examination of substance by people with relevant knowledge and
  professional judgment and excluding superficial spelling or grammar checks.
- **[#27](https://github.com/w3c-cg/ai-content-disclosure/issues/27)** —
  TextSeal noted as related work, not written into the spec. The chairs also
  noted Anthropic has begun enabling text watermarking, and that its published
  description is nonspecific about how the signal is embedded.
- **[#26](https://github.com/w3c-cg/ai-content-disclosure/issues/26)** —
  PROV-O / Dublin Core provenance vocabularies are a level of expressivity not
  required at this stage; out of scope.
- **[#25](https://github.com/w3c-cg/ai-content-disclosure/issues/25)** — closed
  with a comment recording the decision not to use percentage language.
- **[#22](https://github.com/w3c-cg/ai-content-disclosure/issues/22)** — covered:
  `ai-autonomous` means fully unreviewed, `ai-assisted` means reviewed.
- **[#18](https://github.com/w3c-cg/ai-content-disclosure/issues/18)** — IPTC
  outreach to Brendan Quinn received no reply. Closed noting that the report
  maps to IPTC source types regardless.
- **[#17](https://github.com/w3c-cg/ai-content-disclosure/issues/17)** —
  structured data is outside this spec's scope; such work would belong as pull
  requests against a provenance ontology.
- **[#16](https://github.com/w3c-cg/ai-content-disclosure/issues/16)** — mooted.
  `ai-prompt-url` stays as an optional, free-form link to documentation; the
  spec prescribes nothing about what is found there.
- **[#15](https://github.com/w3c-cg/ai-content-disclosure/issues/15)** —
  `ai-model` and `ai-provider` are retained as optional free-form strings. Not a
  controlled taxonomy, but consumers can reliably extract the sub-attribute.
- **[#13](https://github.com/w3c-cg/ai-content-disclosure/issues/13)** — the
  `ai-evidence-url` / CPOE proposal is **not adopted**. CPOE is still in draft,
  and the group has decided to leave the prompt/evidence link unstructured
  rather than bind it to an external evidence format.
- **[#11](https://github.com/w3c-cg/ai-content-disclosure/issues/11)** — IBM AI
  Attribution Toolkit. No engagement since the March outreach; closed as
  related work.
- **[#9](https://github.com/w3c-cg/ai-content-disclosure/issues/9)** — the
  original concern (the tag being `autonomous` rather than `ai-autonomous`) has
  been overtaken by the current vocabulary. Also reaffirmed: a Python script
  that generates text is not generative AI.
- **[#8](https://github.com/w3c-cg/ai-content-disclosure/issues/8)** — the group
  provides an example of expressing disclosure in a Schema.org-compatible way
  and has shared it with the Schema.org community, but does not claim
  jurisdiction to specify Schema.org terms. Consumers remain free to add further
  metadata under the disclosure key. Noted that a proposal informed by this
  group's work was posted to
  [schemaorg#3391](https://github.com/schemaorg/schemaorg/issues/3391) in late
  March, and that the thread keeps being flagged for inactivity.
- **[#7](https://github.com/w3c-cg/ai-content-disclosure/issues/7)** — resolved
  by the vocabulary change: anything involving both humans and AI buckets as
  `ai-assisted`, so the fuzzy assisted/generated boundary no longer exists.

### Pull requests

- **[PR #36](https://github.com/w3c-cg/ai-content-disclosure/pull/36)** — merged.
- **[PR #20](https://github.com/w3c-cg/ai-content-disclosure/pull/20)**
  (author decision guide) — merged after removing the `mixed` recommendation
  that the guide still carried.
- **[PR #21](https://github.com/w3c-cg/ai-content-disclosure/pull/21)** —
  **rejected.** The linked CPOE specification is still in draft and the group
  has decided to leave the link unstructured.
- **[PR #40](https://github.com/w3c-cg/ai-content-disclosure/pull/40)** — the
  working-session pull request carrying the day's commits.

### Editorial change: `human-only` labelling

In boundary guidance, the heading "**Not AI** (no disclosure needed)" is
corrected to "**`human-only`** (no AI was used in the generation or review of
the text)". Rationale: absent an affirmative declaration the status is
*unknown*, so "no disclosure needed" worked against the goal of getting authors
to positively assert human-only provenance. The new wording also matches the
structure of the `ai-assisted` and `ai-autonomous` headings.

### Editors list

Sydney Cohen added to the current editors list, linked to her LinkedIn profile.

### Open question: `<meta>` vs. `<body>`

Discussed at length, **not resolved.** The chairs agreed that a `<meta>`
declaration and a declaration on `<body>` would behave identically — a default
for the whole document, with more specific declarations on subsections
overriding it, the most granular declaration winning, by analogy to CSS
specificity. The open question is what unique value the `<meta>` tag adds if
`<body>` (or any subsection) can carry the same declaration, and whether keeping
both invites conflicts between a page-level default and the content beneath it.

Also noted as not formally codified: the most-granular-wins hierarchy was
discussed by analogy rather than written down as a rule.

**Where the text stands for the 5 October read.** The report prepared for the
vote resolves both points rather than leaving them open. The page default is
taken from the first `meta` element in the document's `head`
([Inheritance](https://w3c-cg.github.io/ai-content-disclosure/#inheritance)),
a `meta` element in the body supplies no default, and the most-granular-wins
cascade is written out as a normative procedure. Note that `<body
ai-disclosure="...">` already works as an ordinary element declaration and
covers everything inside the body, so the live question for the group is
narrower than it was in session: whether `meta` earns its place alongside it.
Reviewers should treat this as a decision to confirm or change on 5 October,
not as an open question the text leaves unanswered.

### Open question: what counts as "human review"

Deliberately **punted.** The chairs agreed that a passing glance should not
count as human review, but that distinguishing a passing glance from a rigorous
review is beyond the group's authority and ability to define. The spec will say
that, absent existing tools that codify the amount of review performed, it
relies on developer discretion — phrased so a future standard can be referenced
if one emerges. Recorded intent: *"We don't have to litigate the universe"* —
be clear about what is and is not within the group's jurisdiction.

### Path to ratification

- A revised draft, ready for ratification, will be circulated to the group
  ahead of the next meeting.
- **Final ratification meeting: Monday 5 October 2026.** Format is a heads-down
  read of the final spec followed by a vote and co-chair approval.
- **Target presentation: W3C Web & AI Interest Group, Monday 12 October 2026**
  — the next IG meeting. The chairs want roughly 5 minutes of agenda time to
  report out the community group's final work. Presenting a *ratified* version
  on 12 October depends on the 5 October vote carrying and on securing agenda
  time in advance. Note the IG is invitation- or W3C-member-gated, so Sydney
  needs an invitation as well as David.
- After ratification, notify all relevant parties that there is a community
  group approved specification.

### Action items

- [ ] **Sydney:** send an email update to the group covering what was done in
      this session and the next steps.
- [ ] **Sydney:** announce the 5 October final ratification meeting with a clear
      time, place, and meeting link.
- [ ] **David:** circulate the revised ratification-ready draft to the group
      ahead of 5 October.
- [ ] **David:** contact the Web & AI Interest Group now to request ~5 minutes of
      agenda time on 12 October and to get Sydney invited. Confirm the meeting
      time — the March 2026 presentation was at 8:00 a.m. Pacific
      ([9 March minutes](../20260309/)). Current IG chairs are Fabien Gandon,
      Max Gendler, and Liang Zeng; Ruoxi Ran is the staff contact; the list is
      `public-webai@w3.org`.
- [ ] **David:** get Sydney issue-closing permissions on the repository. She can
      comment but not close; the repository permissions appear to be managed
      through W3C rather than in repo settings.
- [ ] **David:** post to
      [schemaorg#3391](https://github.com/schemaorg/schemaorg/issues/3391) with
      the group's recommendation when closing out the Schema.org thread.

### Closing

- Adjourned. Next meeting is the 5 October final ratification meeting.
