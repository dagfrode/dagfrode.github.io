# Semantic HTML & Native Accessibility

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

**The most important accessibility lesson:** Use the right HTML elements. Get this right and you solve 80% of problems before they start.

## Why Semantic HTML Matters

Browsers provide built-in accessibility features for native HTML elements. When you use semantic HTML:

- Screen readers understand content structure
- Keyboard navigation works automatically
- Focus management is handled for you
- ARIA attributes are often unnecessary

**Bad:** `<div onclick="handleClick()">Click me</div>`  
**Good:** `<button onclick="handleClick()">Click me</button>`

The button is keyboard accessible, focusable, and announced correctly by screen readers. The div is none of these.

## Document Structure

### Headings

Headings create an outline of your page. Screen reader users navigate by headings.

**Rules:**

- Use `<h1>` through `<h6>` for headings
- Don't skip levels (h1 → h2 → h3, not h1 → h3)
- Use only one `<h1>` per page
- Headings should describe content, not just be styled text

```html
<!-- ✅ Good -->
<h1>Website Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>

<!-- ❌ Bad -->
<div class="heading-big">Website Title</div>
<div class="heading-medium">Random text styled as heading</div>
```

### Landmarks

Landmarks help users navigate page sections quickly.

```html
<header>
  <nav><!-- Main navigation --></nav>
</header>

<main>
  <!-- Primary content -->
  <article><!-- Self-contained content --></article>
  <section><!-- Thematic grouping --></section>
  <aside><!-- Related content --></aside>
</main>

<footer><!-- Site footer --></footer>
```

Screen reader users can jump between landmarks. This is like having a table of contents for your page structure.

## Interactive Elements

### Buttons vs Links

**Button:** Performs an action (submit form, open modal, toggle menu)  
**Link:** Navigates to another page or location

```html
<!-- ✅ Correct usage -->
<button onclick="openModal()">Open Settings</button>
<a href="/about">About Us</a>

<!-- ❌ Wrong usage -->
<a href="#" onclick="openModal()">Open Settings</a>
<button onclick="navigate('/about')">About Us</button>
```

**Why it matters:**

- Screen readers announce them differently
- Keyboard behavior is different (Enter for both, but Space only for buttons)
- User expectations differ

### Never Use Divs for Interactive Elements

```html
<!-- ❌ Bad: Not keyboard accessible, no screen reader support -->
<div onclick="handleClick()">Submit</div>

<!-- ✅ Good: Keyboard accessible, proper semantics -->
<button onclick="handleClick()">Submit</button>
```

To make the div accessible, you'd need to add:

- `tabindex="0"` (keyboard focus)
- `role="button"` (screen reader announcement)
- `onKeyDown` handler (keyboard interaction)
- Focus styles

Just use `<button>`. It's free.

## Lists

Use lists for groups of related items:

```html
<!-- ✅ Good -->
<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<!-- ❌ Bad -->
<div>First item</div>
<div>Second item</div>
<div>Third item</div>
```

Screen readers announce: "List, 3 items." This gives context that styled divs don't provide.

## Tables

Use tables for tabular data, not layout:

```html
<table>
  <caption>
    Monthly Sales Data
  </caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
  </tbody>
</table>
```

- `<caption>` describes the table
- `<th>` with `scope` helps screen readers associate data with headers
- Never use tables for layout (that's what CSS is for)

## Forms

Forms are covered in detail in the [Forms section](./a11y-forms.md), but the basics:

```html
<!-- ✅ Good: Label is associated -->
<label for="email">Email address</label>
<input type="email" id="email" />

<!-- ❌ Bad: No association -->
<div>Email address</div>
<input type="email" />
```

**Every input needs a label.** Screen readers use labels to announce what each field is for.

## Images

Images need alternative text:

```html
<!-- Informative image -->
<img src="chart.png" alt="Bar chart showing 50% increase in sales" />

<!-- Decorative image -->
<img src="decoration.png" alt="" />

<!-- Never omit alt attribute -->
<img src="photo.png" />
<!-- ❌ Bad -->
```

**Alt text rules:**

- Describe what the image conveys, not what it looks like
- Keep it concise (< 150 characters)
- For decorative images, use empty alt (`alt=""`)
- Never omit the alt attribute entirely

## Quick Exercise (10 minutes)

Refactor this inaccessible code:

```html
<div class="header-text">Welcome to Our Site</div>

<div class="nav">
  <div class="link" onclick="navigate('/home')">Home</div>
  <div class="link" onclick="navigate('/about')">About</div>
</div>

<div class="content">
  <div class="title">Our Services</div>
  <div>Service 1</div>
  <div>Service 2</div>
  <div>Service 3</div>
</div>

<div class="action" onclick="submit()">Submit</div>
```

**Questions:**

1. What semantic elements should replace the divs?
2. How would you fix the navigation?
3. What's wrong with the "action" button?

<details>
<summary>See Solution</summary>

```html
<h1>Welcome to Our Site</h1>

<nav>
  <a href="/home">Home</a>
  <a href="/about">About</a>
</nav>

<main>
  <h2>Our Services</h2>
  <ul>
    <li>Service 1</li>
    <li>Service 2</li>
    <li>Service 3</li>
  </ul>
</main>

<button onclick="submit()">Submit</button>
```

</details>

## The Accessibility Tree

Browsers build an "accessibility tree" from your HTML. This is what screen readers and other assistive technologies use.

**View the accessibility tree:**

- Chrome DevTools: Elements tab → Accessibility pane
- Firefox DevTools: Accessibility tab

Inspect your semantic HTML vs div soup to see the difference.

## Learn More

- **[How Browsers Work](https://howbrowserswork.com/)** (~45 min)  
  Deep dive into how browsers parse HTML and build the accessibility tree.

- **[Teaching Accessible Computing - HTML Section](https://bookish.press/tac)** (Free web book)  
  Comprehensive guide to semantic HTML with accessibility in mind.

## Next Steps

Now that you understand semantic HTML, learn how people navigate without a mouse:

Continue to [Keyboard Accessibility](./a11y-keyboard.md).
