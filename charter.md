# AI Content Disclosure Community Group Charter

| | |
|---|---|
| **This Charter** | https://github.com/w3c-cg/ai-content-disclosure/blob/main/charter.md |
| **Start Date** | 2026-02-03 |
| **Last Modified** | 2026-02-23 |

## Goals

A modern news article page might have a human-written investigation next to an AI-generated summary sidebar and AI-moderated user comments. Today there is no standard way for authors to say which parts of a page involved AI, or how much.

This Community Group will develop an HTML mechanism that lets authors disclose AI involvement at both page level and element level. The group will define a small vocabulary of disclosure values, specify how disclosure inherits through the document tree, and coordinate with related efforts at the IETF, IPTC, Schema.org, and C2PA so that HTML-level disclosure fits into the content-provenance stack.

The EU AI Act (Article 50) will require machine-readable marking of AI-generated text by August 2026, but the need goes beyond regulation. Publishers want a way to be transparent with their audiences, accessibility tools need structured authorship signals, and search engines benefit from reliable metadata about how content was produced. A standard mechanism at the HTML layer can serve all of these needs at once.

The group intends to produce a Community Group Report suitable for adoption by a W3C Working Group or for integration into the WHATWG HTML Living Standard.

## Scope of Work

### In Scope

1. **HTML disclosure attributes.** A global `ai-disclosure` attribute on any HTML element, a `<meta name="ai-disclosure">` tag for page-level declaration, optional metadata attributes (model, provider, methodology URL), and rules for how values inherit from parent to child elements.

2. **Disclosure vocabulary.** A set of values (such as `none`, `ai-assisted`, `ai-generated`, `autonomous`) with boundary guidance on what falls into each category. The vocabulary should align with existing taxonomies (IETF, IPTC) where practical.

3. **Cross-standard coordination.** How the HTML-level disclosure relates to the IETF `AI-Disclosure` HTTP response header, IPTC Digital Source Type vocabulary, Schema.org structured data, and C2PA cryptographic provenance. The layers should complement each other without duplicating work.

4. **Accessibility integration.** How disclosure attributes are exposed to assistive technology through the Accessibility Object Model, and how user agents might present disclosure information.

5. **Implementation guidance.** Non-normative advice for content authors, CMS developers, AI tool vendors, and browser implementers.

### Out of Scope

1. **AI content detection.** This work is about voluntary, author-declared disclosure. Automated detection of AI-generated content is a separate problem.

2. **Cryptographic provenance.** Verified, tamper-proof provenance is the domain of C2PA. The attributes defined here are advisory metadata without integrity guarantees.

3. **Non-text media.** Provenance for images, video, and audio is handled by C2PA and IPTC. This group focuses on HTML text content.

4. **Content policy.** The group will not prescribe what content should or should not be created, or how platforms should act on disclosure signals.

5. **Rendering requirements.** How browsers display or surface disclosure information is a user-agent decision, not part of this specification.

6. **Owning related specifications.** The IETF `AI-Disclosure` header and Schema.org `aiDisclosure` property are governed by their respective communities. This group coordinates alignment but does not author those specifications.

7. **Interpreting regulation.** The group produces technical standards. It does not offer legal advice or prescribe how to comply with specific regulations.

## Deliverables

### Specifications

- **AI Content Disclosure for HTML** -- A Community Group Report defining the `ai-disclosure` global HTML attribute, the `<meta name="ai-disclosure">` tag, optional metadata attributes, the disclosure value vocabulary, and inheritance semantics.

### Non-Normative Reports

The group may produce reports including:

- **Explainer** -- A document describing the problem, motivation, proposed solution, key scenarios, alternatives considered, and privacy/security/accessibility considerations, following the W3C Explainer format.

- **Cross-Standard Alignment Guide** -- A report documenting the relationship between HTML disclosure attributes and the IETF AI-Disclosure header, IPTC Digital Source Type vocabulary, Schema.org integration, and C2PA, including vocabulary mapping tables and guidance on how the layers work together.

- **Implementation Guide** -- Practical guidance for content authors, CMS developers, AI tool vendors, and browser implementers.

### Test Suites and Other Software

Contributions to this Community Group's repositories, including test suites and other software, are under the terms described in [CONTRIBUTING.md](https://github.com/w3c-cg/ai-content-disclosure/blob/main/CONTRIBUTING.md) and [LICENSE.md](https://github.com/w3c-cg/ai-content-disclosure/blob/main/LICENSE.md).

The group may produce:

- A polyfill or browser extension demonstrating how disclosure attributes can be surfaced to users.
- A validation tool for checking correct usage of `ai-disclosure` attributes.

## Dependencies or Liaisons

### W3C Groups

- **[WHATWG HTML](https://whatwg.org/)** -- The HTML Living Standard, where `ai-disclosure` could ultimately land.
- **[W3C Technical Architecture Group (TAG)](https://www.w3.org/2001/tag/)** -- For architectural review of the proposal.
- **[Accessible Rich Internet Applications (ARIA) Working Group](https://www.w3.org/WAI/ARIA/)** -- For guidance on exposing disclosure attributes to assistive technology through the Accessibility Object Model.
- **[Schema.org Community Group](https://www.w3.org/community/schemaorg/)** -- For alignment of the `aiDisclosure` structured data property with the HTML attribute vocabulary.

### External Organizations

- **[IETF](https://www.ietf.org/)** -- For coordination on the `AI-Disclosure` HTTP response header ([draft-abaris-aicdh](https://datatracker.ietf.org/doc/draft-abaris-aicdh/)).
- **[IPTC](https://iptc.org/)** -- For vocabulary alignment with the [Digital Source Type](https://cv.iptc.org/newscodes/digitalsourcetype/) taxonomy.
- **[C2PA](https://c2pa.org/)** -- For ensuring HTML-level disclosure and cryptographic media provenance work together.
- **[European Commission, DG CNECT](https://commission.europa.eu/about/departments-and-executive-agencies/communications-networks-content-and-technology_en)** -- For alignment with EU AI Act Article 50 transparency requirements and the [Code of Practice on Transparency of AI-Generated Content](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content).

## Communication

- **GitHub:** [w3c-cg/ai-content-disclosure](https://github.com/w3c-cg/ai-content-disclosure) (issues and pull requests)
- **Mailing list:** [public-ai-content-disclosure@w3.org](mailto:public-ai-content-disclosure@w3.org) ([archive](https://lists.w3.org/Archives/Public/public-ai-content-disclosure/))
- **IRC:** [#ai-content-disclosure](irc://irc.w3.org:6667/#ai-content-disclosure) on irc.w3.org
- **Teleconferences:** Monthly, with agendas posted at least 24 hours before each call. Meeting minutes are published in the repository under [`minutes/`](https://github.com/w3c-cg/ai-content-disclosure/tree/main/minutes).

## Community and Business Group Process

The group operates under the [W3C Community and Business Group Process](https://www.w3.org/community/about/process/). Terms in this Charter that conflict with those of the Community and Business Group Process are void.

## Code of Ethics and Professional Conduct

All participants are expected to follow the [W3C Code of Ethics and Professional Conduct](https://www.w3.org/Consortium/cepc/).

## Work Limited to Charter Scope

The group will not publish Specifications on topics other than those listed under [Specifications](#specifications) above. See [Amendments to this Charter](#amendments-to-this-charter) for how to modify the charter.

## Contribution Mechanics

Substantive Contributions to Specifications can only be made by Community Group Participants who have agreed to the [W3C Community Contributor License Agreement (CLA)](https://www.w3.org/community/about/process/cla/).

Specifications created in the Community Group must use the [W3C Software and Document License](https://www.w3.org/copyright/software-license/).

All GitHub repositories attached to the Community Group must contain a copy of the [CONTRIBUTING](https://github.com/w3c-cg/ai-content-disclosure/blob/main/CONTRIBUTING.md) and [LICENSE](https://github.com/w3c-cg/ai-content-disclosure/blob/main/LICENSE.md) files.

Community Group participants agree to make all contributions in the GitHub repository the group is using for the particular specification. This may be in the form of a pull request, by raising an issue, or by adding a comment to an existing issue.

## Transparency

The group will conduct all of its technical work in public. All technical discussion will take place either in GitHub issues, on the public mailing list, or during teleconferences whose minutes are posted publicly.

Meetings may be restricted to Community Group participants, but a summary or minutes must be posted to the group's public mailing list or GitHub repository.

## Decision Process

This group will seek to make decisions through consensus. When the group discusses an issue on GitHub and the Chair determines that the group has reached consensus, the Chair will close the issue with a summary of the decision. The group is free to decide how consensus is assessed (e.g., a poll in an issue, a show of hands during a call, or simply no objections raised within a reasonable period).

After a decision is recorded, any participant may register a formal objection within 7 days, provided that the objection includes a clear technical rationale. The group will then revisit the decision.

If the group cannot reach consensus on an issue, Committers will vote on the available options. Each Committer has one vote. A simple majority wins. If the vote is a tie, the Chair may cast a deciding vote or defer the decision.

Participants who disagree with a decision may fork the relevant specification and work on it independently under the Community Group's license terms.

The Chair is responsible for ensuring that the decision process is fair and not combative, and should strive to involve all interested participants and to resolve disagreements constructively.

## Chair Selection

Participants in this group choose their Chair(s) and can replace their Chair(s) at any time using whatever means they prefer.

However, if 5 participants -- no two from the same organization -- call for an election, the group must use the following process: any participant may nominate themselves during a 14-day candidacy period; votes are cast during a 21-day voting period; the candidate with the most votes wins; ties are broken using [RFC 2777](https://www.rfc-editor.org/rfc/rfc2777).

Current Chairs: [David Weekly](https://github.com/dweekly) and [Dogu Abaris](https://github.com/doguabaris).

## Amendments to this Charter

The group can decide to work on a topic that is not on the current list of Specifications by proposing a charter amendment using the group's standard decision process.

Substantive changes to goals, scope, deliverables, or decision process require a 30-day vote, with approval by two-thirds of the votes cast.

Simple corrections to the charter (fixing typos, updating links, adjusting dates) may be made through the standard decision process.
