# AI Content Disclosure CG Minutes

## 9 March 2026

### Meeting Information

**Time:** 8:00 AM Pacific
**Venue:** W3C Web AI Working Group meeting

**Attendees:**
- David Weekly (co-chair, AI Content Disclosure CG)
- Doğu Abaris (co-chair, AI Content Disclosure CG)
- Janina Sajka
- Max Gendler
- Fabien Gandon
- Philippe (W3C)
- Alexander Dawson
- Pierre-Antoine Champin

### Summary

First presentation of the AI Content Disclosure standard to the W3C Web AI Working Group. The standard was overall well received by the group, with substantive discussion on accessibility, use case documentation, incentives for adoption, JSON-LD integration, and the distinction between generative AI and deterministic programmatic content.

### Discussion

#### Accessibility and AI-generated alt text (Janina Sajka)

Janina raised concerns about accessibility, specifically around machine-generated alt text for images — text meant to describe what is in the image and the image's function in the page. She also asked whether the standard could be used for annotating automated email summaries.

David indicated that in both cases the standard could be appropriate. For alt text, the caption element could carry an `ai-disclosure` attribute. For email summaries, the `<div>` containing the summary could carry the disclosure as well.

#### Use case documentation for ai-assisted vs ai-generated (Max Gendler)

Max asked for example use case documents that outline the differences between `ai-assisted` and `ai-generated`. Concrete examples would help authors figure out which characterization is more appropriate. There is a lot of gray space in determining who the primary author is — human or AI.

#### Incentives for adoption (Fabien Gandon)

Fabien asked about incentives to include AI disclosure. He noted that for a number of web standards, improved ranking in search results was given to site owners that adopted the newer standard, suggesting a similar dynamic could encourage adoption here.

#### Code provenance (Philippe, W3C)

Philippe asked about code used to generate user interfaces. David acknowledged that code provenance and AI participation in code creation is an interesting area, but viewed it as somewhat outside the scope of this standard, which targets content received and consumed by end users — the actual content itself rather than the code behind the content.

#### JSON-LD / Schema.org integration (Alexander Dawson)

Alexander asked whether the standard could be used for schema. David pointed out that his original proposal at [github.com/dweekly/AI-content-disclosure](https://github.com/dweekly/AI-content-disclosure) explicitly included a JSON-LD segment. This was well received and highlighted that the current proposal should do a better job of surfacing the JSON-LD integration.

Alexander also asked about annotation of outbound links. David noted it might be difficult to reconcile a link tagged with one degree of AI involvement for the target and the target's own self-identification. David suggested that a browser could perform a speculative fetch of the target content to determine its AI "nutrition label" and decide how to display links to such material, without the link author needing to do anything themselves.

#### Deterministic vs generative programmatic content (Pierre-Antoine Champin)

Pierre-Antoine pointed out that some programmatically generated content is not from generative AI — for example, deterministic output like sensor readings — and wanted to distinguish this from non-deterministic generative AI output. The standard does not currently make this distinction; both would fall under `autonomous` since they had not been reviewed by a human. This is a potential area for improvement that would require further discussion and refinement.

### Action Items

- [ ] Create example use case documents distinguishing `ai-assisted` from `ai-generated` (per Max Gendler's request)
- [ ] Better highlight JSON-LD integration in the current proposal (per Alexander Dawson's feedback)
- [ ] Consider whether the vocabulary should distinguish deterministic programmatic content from generative AI output (per Pierre-Antoine Champin's feedback)
