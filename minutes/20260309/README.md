# AI Content Disclosure CG Minutes

## 9 March 2026

### Meeting Information

**Time:** 8:00 AM Pacific
**Venue:** [W3C Web & AI Interest Group](https://www.w3.org/groups/ig/webai/) meeting, chaired by Ruoxi Ran
**Official W3C minutes:** https://www.w3.org/2026/03/09-webai-minutes.html#2e1a

**Attendees:**
- David Weekly (co-chair, AI Content Disclosure CG)
- Doğu Abaris (co-chair, AI Content Disclosure CG)
- Ruoxi Ran (chair, Web & AI IG)
- Janina Sajka
- Max Gendler
- Fabien Gandon
- Philippe Le Hégaret (PLH, W3C)
- Alexander Dawson
- Pierre-Antoine Champin
- Tzviya Siegman
- Vagner Santana
- Dom (W3C)

**Presentation:** [W3C AI Content Disclosure](https://docs.google.com/presentation/d/1Q8zpjz1SWqxh3CYkHG7R9IdkJiETbe6ELjmvr-nnUoM/edit) (public-visible)

### Summary

First presentation of the AI Content Disclosure standard to the W3C Web & AI Interest Group. The standard was overall well received, with substantive discussion on accessibility, use case documentation, incentives for adoption, JSON-LD/Schema.org integration, third-party content annotation, and the distinction between generative AI and deterministic programmatic content. IBM's AI Attribution Toolkit was surfaced by Vagner Santana as a related effort.

### Discussion

#### Accessibility and AI-generated alt text (Janina Sajka)

Janina noted concerns from ongoing accessibility discussions. AI-generated alt text is currently easy to spot because it doesn't follow WCAG guidelines well, but there are situations where automatically generated alt text is problematic — e.g. in educational contexts where accuracy of the alternative is critical. She asked about extending disclosure to content generated on the fly with no human review.

David indicated the `autonomous` level would fit this case and could be applied to a `<figcaption>` element. Dom noted in chat that this wouldn't work to annotate the `alt` attribute directly (since attributes can't carry attributes).

Janina confirmed that an automatically generated summary would likewise be tagged as `autonomous`. David agreed.

#### `ai-disclosure="none"` wording (chat note)

cpn noted in chat that `ai-disclosure="none"` reads oddly — it could be interpreted as "there's no disclosure" rather than "no AI was used."

#### Use case documentation for ai-assisted vs ai-generated (Max Gendler)

Max (speaking with co-chair hat off) said the general outline makes sense and asked for a use cases/examples document outlining the subtle differences between `ai-assisted` and `ai-generated`. Tzviya expressed support (+1).

Max noted the distinction based on who started the authoring process can get tricky. For example, sharing rough bullet-point notes that are then fed to an AI for a written-up memo — does that count as AI-assisted or AI-generated? "First draft" can take very different shapes.

David acknowledged this is probably the fuzziest part of the proposal.

#### Incentives for adoption (Fabien Gandon)

Fabien asked about incentives for adoption, noting that many annotation formats never took off for lack of them. David cited trust-building, regulatory compliance, and potential visibility boosts. He noted both carrots (e.g. search ranking benefits) and sticks (regulatory enforcement).

Alexander Dawson noted in chat that EU Green Claims are already regulated — lying about AI use when AI has greater impact than human implementation can have consequences.

Fabien observed that PICS got better adoption than P3P precisely because of indexing incentives.

#### Generative UI / code provenance (Philippe Le Hégaret)

PLH asked whether this applies to the underlying code of a page — whether the UI was partially or entirely AI-generated. David said he hadn't considered it, expected that in the near future essentially 100% of web content will be at least partially AI-assisted, and suspected users care more about content accountability than code provenance. Doğu noted the CG focuses on content and has considered using HTML comments for code annotation.

Max noted in chat that infrastructure providers might care about code-creation provenance even if readers don't. Fabien suggested this extends to data provenance as well.

#### Schema.org integration and third-party content (Alexander Dawson)

Alexander asked about Schema.org, noting existing mechanisms for marking advertisement disclosure per regulation that could be reused for AI disclosure. David pointed out that his [original proposal](https://github.com/dweekly/ai-content-disclosure) included a Schema.org/JSON-LD integration suggestion.

Alexander then asked about annotating content coming from third parties (imported content, outbound links). David noted that for links, keeping annotation in sync between source and target would be difficult — but a browser could prefetch AI disclosure info on link hover. Alexander noted he was coming at it from a sustainability perspective.

#### AI Attribution Toolkit (Vagner Santana, via chat)

Vagner Santana surfaced the [AI Attribution Toolkit](https://aiattribution.github.io/create-attribution) ([source](https://github.com/aiattribution/aiattribution.github.io)) as a related effort that proposes a richer set of attributions for the level of AI engagement. The toolkit is a research prototype that guides creators through structured reflection prompts to produce standardized attribution statements, centering human judgment and self-reporting. Inspired by Creative Commons licenses and the CRediT contributor taxonomy. Licensed under Apache 2.0.

#### Deterministic vs generative programmatic content (Pierre-Antoine Champin)

Pierre-Antoine noted a potentially missing category: content not directly from humans nor from AI — e.g. content extracted from databases (possibly curated by humans) or data from a sensor. David suggested this would fall under `autonomous` since it's published without human review.

Pierre-Antoine's initial reaction was to distinguish deterministic vs generative output. Fabien added that there is also room for discussion about what autonomy means for an agent. cpn noted in chat that extending to non-AI content means it's no longer strictly an "AI disclosure."

This is a potential area for improvement in the standard that would require further discussion and refinement.

### Action Items

- [ ] Create example use case documents distinguishing `ai-assisted` from `ai-generated` (per Max Gendler's request)
- [ ] Better highlight JSON-LD / Schema.org integration in the current proposal (per Alexander Dawson's feedback)
- [ ] Consider whether the vocabulary should distinguish deterministic programmatic content from generative AI output (per Pierre-Antoine Champin's feedback)
- [ ] Evaluate the AI Attribution Toolkit for alignment opportunities and add to related efforts documentation
- [ ] Consider the `ai-disclosure="none"` wording concern (per cpn's chat note)
- [ ] Relevant upstream issue: [w3c/webai#5](https://github.com/w3c/webai/issues/5)
