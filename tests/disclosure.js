import { effectiveDisclosure, effectiveMetadata, parseDisclosure } from "../examples/resolve-disclosure.js";

export function runTests() {
  const passed = [];
  const equal = (actual, expected) => {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
    }
  };
  const check = (name, run) => { run(); passed.push(name); };
  const fixture = (body, head = "") => {
    const doc = document.implementation.createHTMLDocument("Disclosure fixture");
    doc.head.innerHTML = head;
    doc.body.innerHTML = body;
    return doc;
  };
  const humanDefault = '<meta name="ai-disclosure" content="human-only">';
  const aiDefault = '<meta name="AI-DISCLOSURE" content="AI-Assisted" ai-model="model-a" ai-provider="provider-a" ai-prompt-url="/method">';

  check("Case-insensitive whole-keyword parsing; whitespace and unknown values invalid", () => {
    equal(parseDisclosure("AI-Assisted"), "ai-assisted");
    for (const value of [null, "", "mixed", " ai-assisted", "ai-assisted\n", "aı-assisted"]) {
      equal(parseDisclosure(value), null);
    }
  });
  check("Missing declarations are unknown", () => {
    equal(effectiveDisclosure(fixture("<p>Text</p>").querySelector("p")), "unknown");
  });
  check("Page default, section override, and deeper override", () => {
    const doc = fixture('<p id="page">Text</p><section ai-disclosure="ai-autonomous"><p id="section">AI</p><p id="local" ai-disclosure="human-only">Correction</p></section>', humanDefault);
    equal(effectiveDisclosure(doc.getElementById("page").firstChild), "human-only");
    equal(effectiveDisclosure(doc.getElementById("section")), "ai-autonomous");
    equal(effectiveDisclosure(doc.getElementById("local")), "human-only");
  });
  check("Invalid declarations do not mask a valid ancestor", () => {
    const doc = fixture('<div ai-disclosure="ai-assisted"><section ai-disclosure="mixed"><p ai-disclosure=" ai-autonomous ">Text</p></section></div>', humanDefault);
    equal(effectiveDisclosure(doc.querySelector("p")), "ai-assisted");
  });
  check("First matching meta controls; invalid first does not permit a later default", () => {
    const doc = fixture("<p>Text</p>", '<meta name="ai-disclosure" content="mixed">' + humanDefault);
    equal(effectiveDisclosure(doc.querySelector("p")), "unknown");
    doc.head.firstElementChild.setAttribute("content", "AI-AUTONOMOUS");
    equal(effectiveDisclosure(doc.querySelector("p")), "ai-autonomous");
  });
  check("Body meta does not supply a page default", () => {
    const doc = fixture(humanDefault + "<p>Text</p>");
    equal(effectiveDisclosure(doc.querySelector("p")), "unknown");
  });
  check("Metadata inherits per field, overrides independently, and can be cleared", () => {
    const doc = fixture('<article ai-provider="provider-b"><p ai-model="model-b" ai-prompt-url="">Text</p></article>', aiDefault);
    equal(effectiveDisclosure(doc.querySelector("p")), "ai-assisted");
    equal(effectiveMetadata(doc.querySelector("p").firstChild), {"ai-model":"model-b", "ai-provider":"provider-b", "ai-prompt-url":null});
  });
  check("Disclosure override retains metadata; human-only and unknown ignore it", () => {
    const doc = fixture('<p ai-disclosure="ai-autonomous">Text</p>', aiDefault);
    const p = doc.querySelector("p");
    equal(effectiveMetadata(p)["ai-model"], "model-a");
    p.setAttribute("ai-disclosure", "human-only");
    equal(Object.values(effectiveMetadata(p)), [null, null, null]);
    p.removeAttribute("ai-disclosure");
    doc.head.firstElementChild.setAttribute("content", "invalid");
    equal(Object.values(effectiveMetadata(p)), [null, null, null]);
  });
  check("Text alternatives use their owning element's disclosure", () => {
    const doc = fixture('<img src="example.png" alt="AI-written description" ai-disclosure="ai-autonomous">', humanDefault);
    equal(effectiveDisclosure(doc.querySelector("img")), "ai-autonomous");
  });
  check("Live mutation, reparenting, insertion, and detachment change the result", () => {
    const doc = fixture('<div ai-disclosure="ai-autonomous"><p>Text</p></div>', humanDefault);
    const p = doc.querySelector("p");
    equal(effectiveDisclosure(p), "ai-autonomous");
    doc.body.append(p);
    equal(effectiveDisclosure(p), "human-only");
    doc.head.firstElementChild.setAttribute("content", "ai-assisted");
    equal(effectiveDisclosure(p), "ai-assisted");
    p.remove();
    equal(effectiveDisclosure(p), "unknown");
  });
  check("Template content gains a page default only after insertion", () => {
    const doc = fixture('<template><p>Text</p></template>', humanDefault);
    const content = doc.querySelector("template").content;
    equal(effectiveDisclosure(content.querySelector("p")), "unknown");
    doc.body.append(content);
    equal(effectiveDisclosure(doc.querySelector("p")), "human-only");
  });
  check("Shadow ancestry stops at the root; slotting does not change DOM ancestry", () => {
    const doc = fixture('<div ai-disclosure="ai-assisted" ai-model="host-model"><p slot="text">Light DOM</p></div>', humanDefault);
    const host = doc.querySelector("div");
    const shadow = host.attachShadow({mode:"open"});
    shadow.innerHTML = '<p>Shadow text</p><slot name="text" ai-disclosure="ai-autonomous"></slot>';
    equal(effectiveDisclosure(shadow.querySelector("p")), "human-only");
    equal(effectiveDisclosure(host.querySelector("p")), "ai-assisted");
    shadow.querySelector("p").setAttribute("ai-disclosure", "ai-autonomous");
    equal(effectiveMetadata(shadow.querySelector("p"))["ai-model"], null);
  });
  check("Detached subtree ancestors still apply", () => {
    const doc = fixture('<article ai-disclosure="ai-assisted" ai-model="detached-model"><p>Text</p></article>');
    const article = doc.querySelector("article");
    article.remove();
    equal(effectiveDisclosure(article.querySelector("p")), "ai-assisted");
    equal(effectiveMetadata(article.querySelector("p"))["ai-model"], "detached-model");
  });
  return passed;
}
