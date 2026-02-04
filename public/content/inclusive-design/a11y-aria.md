# ARIA: Proper and Responsible Use

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

ARIA (Accessible Rich Internet Applications) fills gaps where HTML isn't enough. But misuse makes things worse.

## The First Rule of ARIA

> **"If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so."**  
> — W3C ARIA Authoring Practices

**Translation:** Use HTML first. Add ARIA only when HTML can't do what you need.

### Why?

- HTML elements have built-in keyboard behavior
- HTML elements are tested across browsers and assistive tech
- ARIA only affects the accessibility tree—you still need to implement behavior
- Wrong ARIA is worse than no ARIA

## When to Use ARIA

**Good use cases:**

- Custom widgets that don't exist in HTML (tree views, complex tabs)
- Announcing dynamic content changes (`aria-live`)
- Adding labels to elements that need them (`aria-label`)
- Indicating expanded/collapsed state (`aria-expanded`)

**Don't use ARIA for:**

- Things HTML already does (buttons, links, inputs)
- Purely visual styling
- Making divs into buttons (just use `<button>`)

## Common ARIA Attributes

### Labeling

#### aria-label

Provides a label when visible text isn't present:

```html
<!-- Icon button with no visible text -->
<button aria-label="Close dialog">
  <svg><!-- X icon --></svg>
</button>
```

#### aria-labelledby

Points to another element that labels this one:

```html
<h2 id="dialog-title">Confirm Action</h2>
<div role="dialog" aria-labelledby="dialog-title">
  <!-- Dialog content -->
</div>
```

#### aria-describedby

Provides additional description:

```html
<input type="password" id="password" aria-describedby="password-hint" />
<span id="password-hint"> Must be at least 8 characters </span>
```

### State and Properties

#### aria-expanded

Indicates whether content is expanded or collapsed:

```html
<button aria-expanded="false" aria-controls="menu" onclick="toggleMenu()">
  Menu
</button>

<ul id="menu" hidden>
  <!-- Menu items -->
</ul>
```

Update `aria-expanded` when you toggle:

```javascript
function toggleMenu() {
  const button = document.querySelector("button");
  const menu = document.getElementById("menu");
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", !isExpanded);
  menu.hidden = isExpanded;
}
```

#### aria-hidden

Hides content from screen readers (but not visually):

```html
<!-- Decorative icon -->
<svg aria-hidden="true"><!-- Icon --></svg>
<span>Save</span>
```

**Warning:** Don't use `aria-hidden` on focusable elements. It creates confusion.

```html
<!-- ❌ Bad: Hidden but focusable -->
<button aria-hidden="true">Click me</button>

<!-- ✅ Good: Hidden and not focusable -->
<div aria-hidden="true">Decorative text</div>
```

#### aria-live

Announces dynamic updates:

```html
<!-- Polite: Announce when convenient -->
<div role="status" aria-live="polite">3 items in cart</div>

<!-- Assertive: Interrupt and announce -->
<div role="alert" aria-live="assertive">Error: Payment failed</div>
```

## ARIA Roles

Roles define what an element is. HTML elements have implicit roles.

### When Roles Are Needed

```html
<!-- Custom tab interface -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>

<div role="tabpanel" id="panel1">Content 1</div>
<div role="tabpanel" id="panel2" hidden>Content 2</div>
```

**But remember:** If you can use semantic HTML, do that instead.

## Common ARIA Anti-Patterns

### Anti-Pattern 1: Redundant Roles

```html
<!-- ❌ Bad: Button already has role="button" -->
<button role="button">Click me</button>

<!-- ✅ Good: No role needed -->
<button>Click me</button>
```

### Anti-Pattern 2: Wrong Roles

```html
<!-- ❌ Bad: Button acting as link -->
<button role="link" onclick="navigate()">Go to page</button>

<!-- ✅ Good: Use actual link -->
<a href="/page">Go to page</a>
```

### Anti-Pattern 3: aria-label on Divs

```html
<!-- ❌ Bad: Screen readers ignore aria-label on non-interactive elements -->
<div aria-label="Important info">...</div>

<!-- ✅ Good: Use semantic element or role -->
<section aria-labelledby="heading">
  <h2 id="heading">Important Info</h2>
  ...
</section>
```

### Anti-Pattern 4: Hiding Focusable Content

```html
<!-- ❌ Bad: Button is hidden but still focusable -->
<button aria-hidden="true">Click me</button>

<!-- ✅ Good: Properly hide -->
<button hidden>Click me</button>
```

## ARIA Widget Patterns

For complex widgets, follow established patterns from [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/).

### Example: Accordion

```html
<div class="accordion">
  <h3>
    <button aria-expanded="false" aria-controls="section1" id="accordion1">
      Section Title
    </button>
  </h3>
  <div id="section1" role="region" aria-labelledby="accordion1" hidden>
    Section content
  </div>
</div>
```

**Key points:**

- Use `<button>` (keyboard accessible)
- `aria-expanded` indicates state
- `aria-controls` links button to content
- `aria-labelledby` labels the region

## Quick Exercise (10 minutes)

Find the ARIA mistakes:

```html
<!-- Example 1 -->
<div role="button" onclick="submit()">Submit</div>

<!-- Example 2 -->
<button role="link" aria-label="Close">
  <span aria-hidden="false">X</span>
</button>

<!-- Example 3 -->
<div aria-label="Main content">
  <p>This is the content</p>
</div>

<!-- Example 4 -->
<input type="text" aria-label="Email" placeholder="Email" />
<label>Email</label>
```

<details>
<summary>See Answers</summary>

**Example 1:** Should use `<button>`. Div needs `tabindex="0"`, keyboard handler, and focus styles.

**Example 2:** Should be `<button>` not link. `aria-hidden="false"` is redundant (default). Consider using `<button aria-label="Close">` only.

**Example 3:** `aria-label` on div is ignored. Should be `<main>` or `<section>` with heading.

**Example 4:** Label isn't associated. Should have `for="id"` matching input `id`.

</details>

## Testing ARIA

**Browser DevTools:**

- Chrome: Elements tab → Accessibility pane
- Firefox: Accessibility tab

Check:

- Is the role correct?
- Is the name correct?
- Are states accurate?

**Screen readers:**

- Does it announce what you expect?
- Can you operate it with keyboard?

## Learn More

- **[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)** (Reference)  
  Official patterns for common widgets. Copy these patterns, don't invent your own.

- **[Teaching Accessible Computing - ARIA Section](https://bookish.press/tac)** (Free web book)  
  Practical ARIA usage with real examples.

## Next Steps

ARIA is often used in forms for error handling and dynamic validation:

Continue to [Accessible Forms & Validation](./a11y-forms.md).
