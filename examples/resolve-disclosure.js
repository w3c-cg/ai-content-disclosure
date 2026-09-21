// Illustrative consumer for the report's DOM processing rules.
// This does not add browser support, verify claims, or assess legal compliance.
const values = new Set(["human-only", "ai-assisted", "ai-autonomous"]);
const metadata = ["ai-model", "ai-provider", "ai-prompt-url"];
const asciiLower = value => value.replace(/[A-Z]/g, char => char.toLowerCase());

export function parseDisclosure(value) {
  if (typeof value !== "string") return null;
  const keyword = asciiLower(value);
  return values.has(keyword) ? keyword : null;
}

function startingElement(node) {
  if (node?.nodeType === 1) return node;
  return node?.nodeType === 3 ? node.parentElement : null;
}

function pageDeclaration(element) {
  if (!element?.isConnected) return null;
  const candidates = element.ownerDocument.head?.querySelectorAll("meta") ?? [];
  return [...candidates].find(meta =>
    asciiLower(meta.getAttribute("name") ?? "") === "ai-disclosure"
  ) ?? null;
}

export function effectiveDisclosure(node) {
  const start = startingElement(node);
  for (let element = start; element; element = element.parentElement) {
    const value = parseDisclosure(element.getAttribute("ai-disclosure"));
    if (value) return value;
  }
  return parseDisclosure(pageDeclaration(start)?.getAttribute("content")) ?? "unknown";
}

export function effectiveMetadata(node) {
  const value = effectiveDisclosure(node);
  const result = Object.fromEntries(metadata.map(name => [name, null]));
  if (value === "human-only" || value === "unknown") return result;

  const start = startingElement(node);
  const page = pageDeclaration(start);
  for (const name of metadata) {
    let declaration = start;
    while (declaration && !declaration.hasAttribute(name)) {
      declaration = declaration.parentElement;
    }
    declaration ??= page;
    result[name] = declaration?.getAttribute(name) || null;
  }
  // Prompt URLs remain raw attribute strings here. This consumer never fetches them.
  return result;
}
