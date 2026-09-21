# Final Community Group Report preparation

The [editor's draft](https://w3c-cg.github.io/ai-content-disclosure/) is proposed
for final publication. The root [`index.html`](../index.html) is the single
maintained report source; static HTML is generated output. The group has not
yet voted on the report. Publication and external notifications follow the
vote; the message drafts below have not been sent.

## Frozen candidate for the 5 October 2026 vote

The voting artifact is
[`CG-DRAFT-ai-content-disclosure-20260921/index.html`](CG-DRAFT-ai-content-disclosure-20260921/index.html),
exported from source commit `7c53bf8`.

| Field | Value |
| --- | --- |
| Static URL | https://w3c-cg.github.io/ai-content-disclosure/reports/CG-DRAFT-ai-content-disclosure-20260921/ |
| Source commit | `7c53bf8` |
| SHA-256 | `c34e8caee5cea5d4facc2967c9e414ea887052564406865c4a25a36c56c71ea3` |

The export differs from a render of the source in five lines, all publication
metadata (`publishDate` and `thisVersion`); the technical text is identical.
This file is the fixed voting artifact, not a second editable source. Preserve
it once the vote opens. If substantive changes are needed, prepare a new
candidate and reissue the ballot against it.

## Report and review record

The report includes the three disclosure values, required human review for
`ai-assisted`, the textual-content boundary, the author decision guide, and the
scope clarifications agreed during issue triage. It incorporates
[PR #39](https://github.com/w3c-cg/ai-content-disclosure/pull/39),
[PR #40](https://github.com/w3c-cg/ai-content-disclosure/pull/40), and
[PR #20](https://github.com/w3c-cg/ai-content-disclosure/pull/20).

The final-report preparation changes publication metadata and status text,
repairs ReSpec terminology links, and encourages explicit `human-only`
declarations instead of leaving provenance ambiguous. It also aligns the
absence wording with the existing inheritance rules. Sydney Cohen joins the
current editor list, and Doğu Abaris retains credit as a former editor.
The report retains the three classification values. Publication review also
clarifies the definition of human review, the text-only scope (including text
alternatives), the DOM processing model, value parsing, and metadata inheritance.
It removes the expired HTTP-draft dependency, corrects the informative IPTC
correspondence, and adds current Commission guidance and Code of Practice links.
These processing clarifications are part of the text to be voted on, rather
than changes to make silently after approval. The report includes a change log.
The final readiness review also makes clear that human review does not identify
the reviewer, record sign-off, or establish editorial responsibility. It corrects
the descriptions of deterministic operation and C2PA's text support, and
distinguishes local metadata processing from the privacy effects of following
a methodology link. No new disclosure values or processing rules are added.
There were no open issues or pull requests when preparation began on
21 September 2026. Recheck before opening the vote; a closed issue list alone
does not establish approval to publish.

Validation completed for the proposed text: ReSpec export with no errors or
warnings; unique IDs and working internal fragment links in the rendered
output; both source JSON examples parsed; and visual inspection of the report
header and ten-scenario author guide. The illustrative consumer also passes 13
browser checks for parsing, inheritance, metadata, text alternatives, mutation,
templates, and shadow DOM. This is not evidence of independent interoperable
implementations. External links and publication-specific
final metadata must be checked again before final publication.
The 21 September readiness check resolved all 38 distinct external reference
URLs in the report; the IPTC vocabulary server requires an `Accept: text/html`
request header. The Article 50 review and transition statements were checked
against the Commission FAQ, and the C2PA description against its technical
specification.

During editing, render to the ignored `build/` directory for validation; do not
maintain a generated copy alongside the source. When the text is ready for the
vote, export from a specific source commit with a fixed `publishDate` and a
`thisVersion` pointing to the chosen public snapshot URL. Archive that generated
file under a dated `reports/CG-DRAFT-ai-content-disclosure-YYYYMMDD/` directory
and verify that its GitHub Pages URL resolves before announcing the vote.

The ballot should identify that static URL, the source and snapshot commits,
and the exported file's SHA-256 hash. The archived snapshot is the fixed voting
artifact, not another editable source. Preserve it once the vote opens. If
substantive changes are needed, prepare a new candidate for review.

## Vote

Use the group's [charter decision process](../charter.md#decision-process): seek
consensus, record the chair's determination and any objections, and allow the
charter's seven-day formal-objection period after the decision is recorded.
If consensus cannot be reached, the charter defines a Committer vote. Do not
substitute a poll of all respondents for that fallback procedure.

The chair should set the response deadline and identify the exact candidate
before sending this draft to `public-ai-content-disclosure@w3.org`:

> Subject: [VOTE] Publish AI Content Disclosure for HTML as a Final CG Report
>
> We propose publishing the linked candidate as the AI Content Disclosure
> Community Group's Final Community Group Report.
>
> Candidate: [STATIC CANDIDATE URL]
> Source/snapshot commit: [COMMIT PERMALINK]
> Snapshot SHA-256: [HASH]
> Responses due: [DATE AND TIME, UTC]
>
> Please reply with support, abstention, or an objection with its technical
> rationale. We will assess the responses under the charter's decision process,
> record the outcome, and allow the seven-day formal-objection period.
>
> Approval authorizes final publication of this technical text, with publication
> metadata, status, and licensing boilerplate updated for the final report.
> Substantive changes will return to the group for review. After publication,
> we plan to notify the relevant standards and policy communities.
>
> This is a Community Group Report, not a W3C Standard or a document on the
> W3C Standards Track. This decision concerns the report; closure of the group
> would be a separate action.

Record the vote announcement, outcome, objections and their disposition as
public links before proceeding to publication.

## W3C publication steps after approval

Follow the [CG report requirements](https://www.w3.org/community/reports/reqs/),
[Community Group Process](https://www.w3.org/community/about/process/#deliverables),
[publication FAQ](https://www.w3.org/community/about/faq/#publish), and
[w3c/cg-reports instructions](https://w3c.github.io/cg-reports/).

1. Confirm the recorded approval and completion of the charter's objection
   period, with any objections resolved through the group's process. Confirm
   the editor credits and publication date with the chairs.
2. Coordinate with `team-community-process@w3.org` to confirm permanent W3C
   archiving of the contribution history and obtain the report's actual
   W3C-maintained Final Specification Agreement commitments-page URL. The final
   report must link to that page. Do not invent its report ID or imply that
   every participant has signed the FSA.
3. Starting from the approved source, set `specStatus: "CG-FINAL"` and
   `publishDate` to the agreed `YYYY-MM-DD`. Set `thisVersion` to
   `https://www.w3.org/community/reports/ai-content-disclosure/CG-FINAL-ai-content-disclosure-YYYYMMDD/`.
   Set `latestVersion` to that published final report and retain the editor's
   draft link separately. Replace the proposed-final status paragraph with the
   actual approval/publication record and add the commitments-page link.
4. Export **static HTML** with ReSpec. Check the final CG logo/style, date,
   group identity, FSA copyright and status boilerplate, non-standards-track
   disclaimer, contribution-history links, and commitments link. ReSpec selects
   draft versus final boilerplate from `specStatus`; verify the generated
   result. Keep the report free of third-party tracking.
5. Compare the technical text with the approved candidate. Check ReSpec errors
   and warnings, HTML, internal and external links, examples, and visual
   rendering of the tables and decision guide. Preserve an archived copy of
   the exported file and its checksum.
6. Submit a PR to [w3c/cg-reports](https://github.com/w3c/cg-reports) containing
   `ai-content-disclosure/CG-FINAL-ai-content-disclosure-YYYYMMDD/index.html`.
   W3C's Community Lead merges that PR and the report is mirrored to w3.org.
7. Once the W3C URL resolves, the chair registers/announces the final report
   through the group's Reports controls. W3C's system adds the report listing,
   announces it to the group, and invites voluntary FSA commitments. Verify the
   listing and commitments link, then link the published report from this repo.
8. Preserve the published final snapshot. W3C's process treats the document at
   that URI as immutable; handle later substantive changes as a new version.
   Send the notifications below using the stable W3C URL and record their
   public links where available.

## Rendering during editing

Edit only [`../index.html`](../index.html). Use Node.js 24 or later for
ReSpec 37.4.0. Generate a disposable preview for validation with:

```sh
mkdir -p build
npx --yes respec@37.4.0 --src index.html --out build/report.html --haltonerror --haltonwarn --timeout 60
```

Run these commands from the repository root. ReSpec launches Chromium: on this
workspace, run the exporter outside the Codex command sandbox in accordance
with the workspace browser instructions. Do not edit or commit `build/report.html`.
The later vote snapshot and final W3C export are generated from the source with
their respective publication metadata; the final export does not overwrite the
voted-on candidate.

To run the illustrative consumer checks, serve the repository over HTTP (for
example, `python3 -m http.server 8000 --bind 127.0.0.1`) and open
`http://127.0.0.1:8000/tests/disclosure.html` in a browser. The page reports each
check's outcome. The sample consumer uses the proposed unprefixed names;
it neither fetches prompt URLs nor installs browser reflection properties.

## Notifications after publication

Confirm recipients at send time. These are proposed destinations and specific
follow-up requests, not claims of endorsement or completed liaison work.

| Recipient | Public route or existing thread | Message focus |
| --- | --- | --- |
| European Commission AI Office / DG CNECT | Existing Article 50 contacts, including the outreach recorded in [#29](https://github.com/w3c-cg/ai-content-disclosure/issues/29); [transparency Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content) | Share element-level author declarations and the Article 50 discussion; invite technical feedback without claiming compliance or an exemption. |
| IETF | Chairs to identify an active HTTP metadata forum before sending | Share the HTML processing model and invite coordination. The report no longer depends on or claims equivalence to the expired individual header proposal. |
| Schema.org | [schemaorg/schemaorg#3391](https://github.com/schemaorg/schemaorg/issues/3391), following [David's January comment](https://github.com/schemaorg/schemaorg/issues/3391#issuecomment-3801268141); [Schema.org CG](https://www.w3.org/community/schemaorg/) | Update the earlier four-value proposal to the final three values and `ai-disclosure` spelling; share the illustrative encoding and leave formal vocabulary design to Schema.org. |
| W3C Web & AI Interest Group | [Group page](https://www.w3.org/groups/ig/webai/), `public-webai@w3.org` | Share the report and request coordination on adoption and implementation feedback. |
| WHATWG HTML | Existing [HTML #9479](https://github.com/whatwg/html/issues/9479) discussion | Share the page default plus element-level inheritance design and ask about next steps for HTML consideration. |
| IPTC | David's outreach to Brendan Quinn recorded in [#18](https://github.com/w3c-cg/ai-content-disclosure/issues/18), and [Digital Source Type vocabulary](https://cv.iptc.org/newscodes/digitalsourcetype/) | Follow up with the corrected `digitalCreation` correspondence for human-written text and request review; prior outreach does not establish IPTC endorsement of the mapping. |
| C2PA | Existing liaison contacts and [specification project](https://spec.c2pa.org/) | Explain the complementary, self-declared HTML scope and invite feedback on provenance integration. |
| W3C TAG and ARIA communities | [TAG reviews](https://github.com/w3ctag/design-reviews), [ARIA WG](https://www.w3.org/groups/wg/aria/) | Share architecture and accessibility considerations; ask for an appropriate review path without implying either group has reviewed or approved the report. |

Draft common announcement, to tailor for each audience after publication:

> The AI Content Disclosure Community Group has published *AI Content Disclosure
> for HTML*: [FINAL W3C REPORT URL]. The publication decision is recorded at
> [DECISION URL].
>
> The report proposes element-level and page-level declarations using
> `human-only`, `ai-assisted` (AI involved, human reviewed), and `ai-autonomous`
> (AI involved, no human review before publication). It includes inheritance
> rules, optional provenance metadata, an author decision guide, and discussion
> of related work and Article 50. The subject is the textual content itself;
> page scaffolding alone does not count as AI involvement in the text.
>
> This is a Community Group Report, not a W3C Standard. The metadata is
> self-declared; it does not verify provenance or establish legal compliance.
> [AUDIENCE-SPECIFIC FOLLOW-UP REQUEST FROM THE TABLE ABOVE.]
>
> Feedback: https://github.com/w3c-cg/ai-content-disclosure/issues

For the Schema.org thread, explicitly supersede the old four-value mapping
from the January proposal with the published three-value model, and note the
group's decision not to specify percentages. The report's JSON-LD examples are illustrative and do not
standardize an `aiDisclosure` property or require a particular JSON-LD syntax.
