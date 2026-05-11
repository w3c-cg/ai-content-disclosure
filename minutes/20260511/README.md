# AI Content Disclosure CG Minutes

## 11 May 2026

### Meeting Information
Scribe: David Weekly

Attendees:
- David Weekly (co-chair)
- Doğu Abaris (co-chair)
- Chris Marstall
- Sydney Cohen
- David Condrey

### Agenda review

Kickoff meeting following the launch of the Community Group on 3 February 2026. Discussion of vocabulary, meeting cadence, boundary cases, outreach, and working modes.

### Welcome and introductions

Co-chairs welcomed attendees. Round of introductions.

### Scope and non-goals

Reviewed the [charter](../../charter.md). No changes proposed to in-scope / out-of-scope items.

### Use cases and requirements

Deferred to issue-by-issue discussion on GitHub. See "Working modes" below.

### Initial technical direction

#### Disclosure levels — rename `autonomous` to `ai-autonomous`

Agreed to rename the `autonomous` disclosure value to `ai-autonomous`. Rationale: humans also have autonomy, so the bare term is ambiguous; the `ai-` prefix keeps the value namespace explicit and parallel with `ai-assisted` and `ai-generated`. Charter and the draft spec (`index.html`) updated in this PR.

#### Granularity / boundary cases

Two boundary cases were discussed and resolved:

- **Content that is neither LLM-generated nor human-generated** (e.g., a table populated from a database query, sensor readings) should **not** carry any AI Content Disclosure tag. The vocabulary is intended to disclose AI involvement in producing text, not to mark all programmatically rendered material. Note: this revises the discussion from [9 March 2026](../20260309/README.md), where David had previously suggested `autonomous` (now `ai-autonomous`) might apply to such cases. Today's consensus is that no tag is needed.
- **Machine-generated translation that has not been human-reviewed** is `ai-autonomous`. Human review, where performed, would move such content into `ai-assisted` territory; the precise boundary will be refined in spec text.

Both cases will be filed as GitHub issues for the record and for spec-text refinement.

#### Candidate mechanisms

No new mechanism proposals today. Current draft (`ai-disclosure` attribute + `<meta name="ai-disclosure">`) stands as the working basis.

### First work items

- Land the `ai-autonomous` rename across the charter and the draft spec (this PR).
- File issues for the two boundary cases above.

### Outreach

**UL (Underwriters Laboratories)** is reportedly engaging in AI safety specifications and is likely to be interested in this group's work. Sydney to reach out and invite participation.

### Working modes

- **GitHub Issues** will be used to discuss specific technical questions (e.g., the boundary cases above). Decisions reached on issues will be summarised by a chair before closing, per the charter's decision process.
- **The public mailing list** (`public-ai-content-disclosure@w3.org`) will be used to announce meetings, highlight active issue discussions where direct conversation is welcomed, and host broader non-issue-specific discussion.

### Next steps and scheduling

- Meeting cadence: **monthly on Mondays at 09:00 Pacific (12:00 Eastern, 17:00 London)**. Charter updated accordingly.
- **Next meeting: Monday, 8 June 2026** at 09:00 Pacific. Calendar invites to be sent to the public mailing list. Attendees are asked to mark their calendars.

### Action items

- [ ] Sydney: outreach to UL re: AI safety specs and CG participation.
- [ ] Chairs: send calendar invite for 8 June 2026 to the public mailing list.
- [ ] File GitHub issues for the two boundary cases (DB-query / sensor content; unreviewed machine translation).

### Closing

- Adjourned.
