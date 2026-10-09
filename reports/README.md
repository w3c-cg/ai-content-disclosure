# Final Community Group Report publication

The group approved publication of *AI Content Disclosure for HTML* as a Final
Community Group Report. The final export for 9 October 2026 is prepared in this
repository and is submitted to W3C for publication. The root
[`index.html`](../index.html) remains the single maintained report source;
static HTML is generated output.

## Final report, 9 October 2026

The final export is
[`CG-FINAL-ai-content-disclosure-20261009/index.html`](CG-FINAL-ai-content-disclosure-20261009/index.html),
generated with ReSpec 37.4.1 from the source on the branch that adds it.

| Field | Value |
| --- | --- |
| W3C URL | https://www.w3.org/community/reports/ai-content-disclosure/CG-FINAL-ai-content-disclosure-20261009/ |
| Publication date | 2026-10-09 |
| SHA-256 | `95e10d97dce7e7463cd6e2e2a14043e81efedcc058fd10f2c2a97243ecacda9f` |

The export injects `specStatus: "CG-FINAL"`, `publishDate`, `thisVersion`
and `latestVersion` into a throwaway copy of the source; the maintained
`index.html` keeps its editor's-draft metadata. Compared with the approved
candidate below, the text differs only in publication metadata, the
ReSpec-generated FSA boilerplate, the status paragraph recording the decision,
and two editorial changes requested during the vote: the C2PA link now points
to version 2.4 of the C2PA technical specification (requested by Leonard
Rosenthol, C2PA Technical Working Group chair), and the acknowledgements name
individual contributors (requested by David Condrey). The C2PA 2.4
specification still covers unstructured text (section 9.2.4) and regions of
interest (section 18.2), so the report's description of C2PA is unchanged.

Validation of the final export: ReSpec render with no errors or warnings; 184
unique IDs and no broken internal fragment links; all 61 external links
resolve except LinkedIn, which refuses automated requests, and the W3C URL
above, which resolves only after W3C publishes the report; final CG logo
served by the `cg-final` stylesheet; no third-party tracking.

To regenerate it, apply the four config values above to a copy of the source
in `build/` and run the ReSpec command under "Rendering during editing" on
that copy.

## Approved candidate, 21 September 2026

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
This file is the voting artifact the group approved. Preserve it unchanged.

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
21 September 2026. Paola Di Maio opened issues
[#46](https://github.com/w3c-cg/ai-content-disclosure/issues/46) through
[#49](https://github.com/w3c-cg/ai-content-disclosure/issues/49) during the
vote, explicitly for a future revision; they do not change the approved text.

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

## Decision

The chairs opened the
[call for decision](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0011.html) on
`public-ai-content-disclosure@w3.org` on 21 September 2026, under the
[charter decision process](../charter.md#decision-process), with responses due
1 October. The chairs treat that thread as the recorded decision. No formal
objection was raised in the seven days after responses closed.

| Response | Participant | Record |
| --- | --- | --- |
| Support | David Weekly, Sydney Cohen (co-chairs) | Call for decision |
| Support | David G. Rodenko | [0012](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0012.html) |
| Support | Paola Di Maio | [0013](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0013.html) |
| Support | Evgenii Arsentev | [0014](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0014.html) |
| Support | Doğu Abaris (former co-chair) | [0015](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0015.html) |
| Support | Vagner Santana | [0016](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0016.html) |
| Support | Mario Ljubinka | Sent privately; asked to confirm on the list |
| Support | David Condrey | Sent privately; asked to confirm on the list |

There were no abstentions or objections. Leonard Rosenthol
([0017](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/2026Sep/0017.html)) asked that the C2PA reference cite version 2.4, which
the final export does. The chairs confirmed the outcome at the 5 October 2026
meeting. Replace the two private rows with list links once those replies
arrive.

## W3C publication steps after approval

Follow the [CG report requirements](https://www.w3.org/community/reports/reqs/),
[Community Group Process](https://www.w3.org/community/about/process/#deliverables),
[publication FAQ](https://www.w3.org/community/about/faq/#publish), and
[w3c/cg-reports instructions](https://w3c.github.io/cg-reports/).

Remaining steps, in order:

- ~~Record the decision and confirm editor credits and the publication date.~~
- ~~Export the final report with `CG-FINAL` metadata, compare it with the
  approved candidate, and archive the export and its checksum.~~
- Submit a PR to [w3c/cg-reports](https://github.com/w3c/cg-reports) adding
  `ai-content-disclosure/CG-FINAL-ai-content-disclosure-20261009/index.html`,
  byte-identical to the archived export. W3C's Community Lead merges it and
  the report is mirrored to w3.org. In the PR, ask W3C staff whether the
  report should link the W3C-maintained FSA commitments page before merge; the
  [requirements](https://www.w3.org/community/reports/reqs/) call for that
  link, ReSpec does not generate it, and only 5 of the 96 final reports in
  w3c/cg-reports mention commitments. Do not invent the page's URL.
- Once the W3C URL resolves, the chair registers the report through the
  group's Reports controls. W3C's system lists it, announces it to the group,
  and invites voluntary FSA commitments. Verify the listing, then link the
  published report from the repository README.
- Close the Community Group only after the report is listed, because the
  chair registers the report through the group's own Reports controls.
- Send the notifications below using the W3C URL, and record their public
  links where available.

W3C treats the document at the published URL as immutable. Handle later
substantive changes, including issues #46 to #49, as a new version.

## Rendering during editing

Edit only [`../index.html`](../index.html). Use Node.js 24 or later for
ReSpec 37.4.1. Generate a disposable preview for validation with:

```sh
mkdir -p build
npx --yes respec@37.4.1 --src index.html --out build/report.html --haltonerror --haltonwarn --timeout 60
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
