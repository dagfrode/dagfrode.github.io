# Screen Readers & Assistive Technologies

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Screen readers read web content aloud. Understanding how they work transforms how you build websites.

## What Are Screen Readers?

Screen readers are software that:

- Read web content aloud using text-to-speech
- Navigate through page structure (headings, landmarks, links)
- Announce interactive elements and their states
- Provide keyboard shortcuts for efficient navigation

They don't just read top to bottom—they use semantic HTML to understand page structure.

## Common Screen Readers

- **NVDA** (Windows, free) - Most popular for testing
- **JAWS** (Windows, paid) - Industry standard, expensive
- **VoiceOver** (macOS/iOS, built-in) - Easy to test on Mac
- **TalkBack** (Android, built-in)
- **Narrator** (Windows, built-in)

**For testing:** Start with NVDA (Windows) or VoiceOver (Mac). Both are free.

## How Screen Readers Work

Screen readers build a representation from the "accessibility tree"—a structured version of your HTML that includes:

- **Role:** What is it? (button, link, heading, etc.)
- **Name:** What's it called? (button text, link text, image alt)
- **State:** Current condition (checked, expanded, disabled)
- **Value:** Current value (for inputs, sliders)

### Example

```html
<button aria-expanded="false">Menu</button>
```

Screen reader announces: **"Menu, button, collapsed"**

- **Name:** "Menu"
- **Role:** "button"
- **State:** "collapsed" (from aria-expanded)

## Reading Order vs Visual Order

Screen readers follow DOM order, not visual order.

```html
<!-- HTML order -->
<header>Header</header>
<main>Main content</main>
<aside>Sidebar</aside>

<!-- CSS can reorder visually -->
<style>
  aside {
    order: -1;
  } /* Moves sidebar before main visually */
</style>
```

**Visual order:** Header → Sidebar → Main  
**Screen reader order:** Header → Main → Sidebar

**Rule:** DOM order should match intended reading order. Use CSS for layout, not HTML reordering.

## Navigating with Screen Readers

Screen reader users don't just listen from top to bottom. They use shortcuts:

**Common navigation methods:**

- **H key** - Jump between headings
- **D key** - Jump between landmarks (main, nav, etc.)
- **F key** - Jump between form fields
- **K key** - Jump between links
- **T key** - Jump between tables
- **List of headings** - Get page overview
- **List of links** - Find specific link quickly

This is why semantic HTML matters—it powers these navigation methods.

## Quick Exercise (15 minutes)

**Install and try a screen reader:**

### On Mac (VoiceOver):

1. Press `Cmd + F5` to enable VoiceOver
2. Press `Ctrl + Option + H` to open VoiceOver tutorial
3. Navigate a familiar website
4. Try pressing `Ctrl + Option + U` to open rotor (lists headings, links, etc.)

### On Windows (NVDA):

1. Download [NVDA](https://www.nvaccess.org/download/)
2. Run the installer (or portable version)
3. Navigate a familiar website
4. Try pressing `Insert + F7` to list elements

**Navigate without looking at the screen.** Close your eyes or turn off your monitor.

**Questions:**

- Could you understand the page structure?
- Could you find specific content?
- What was confusing?

## Announcing Dynamic Updates

When content changes dynamically, screen readers need to be notified:

```html
<!-- Status message after form submit -->
<div role="status" aria-live="polite">Form submitted successfully!</div>
```

```html
<!-- Urgent alert -->
<div role="alert" aria-live="assertive">Error: Connection lost!</div>
```

**Live regions:**

- `aria-live="polite"` - Announce when convenient
- `aria-live="assertive"` - Interrupt and announce immediately
- `aria-live="off"` - Don't announce changes

## Common Screen Reader Issues

### Issue 1: Missing Labels

```html
<!-- ❌ Screen reader says: "Edit text" (no context) -->
<input type="text" placeholder="Enter email" />

<!-- ✅ Screen reader says: "Email, edit text" -->
<label for="email">Email</label>
<input type="text" id="email" />
```

### Issue 2: Empty Links

```html
<!-- ❌ Screen reader says: "Link" (no context) -->
<a href="/profile">
  <img src="profile.png" alt="" />
</a>

<!-- ✅ Screen reader says: "View profile, link" -->
<a href="/profile">
  <img src="profile.png" alt="View profile" />
</a>
```

### Issue 3: Vague Link Text

```html
<!-- ❌ Bad: "Click here, link" - click here for what? -->
<a href="/report.pdf">Click here</a> for the annual report

<!-- ✅ Good: "Annual report, link" - descriptive -->
<a href="/report.pdf">Annual report</a>
```

Screen reader users often navigate by links list. "Click here" gives no context.

### Issue 4: Icon Buttons

```html
<!-- ❌ Screen reader says: "Button" (no context) -->
<button>
  <svg><!-- X icon --></svg>
</button>

<!-- ✅ Screen reader says: "Close, button" -->
<button aria-label="Close">
  <svg aria-hidden="true"><!-- X icon --></svg>
</button>
```

## Testing Checklist

Test these with a screen reader:

- [ ] Can you navigate by headings?
- [ ] Can you jump between landmarks?
- [ ] Do all images have appropriate alt text?
- [ ] Do all buttons and links have clear labels?
- [ ] Do form fields have labels?
- [ ] Are dynamic updates announced?
- [ ] Can you complete the main user task?

## Role, Name, Value Model

Every accessible element should have:

1. **Role** - What is it?
2. **Name** - What's it called?
3. **Value** (if applicable) - What's its state/content?

```html
<!-- Checkbox example -->
<input type="checkbox" id="terms" checked />
<label for="terms">I agree to terms</label>

<!-- Screen reader: -->
<!-- Role: "checkbox" -->
<!-- Name: "I agree to terms" -->
<!-- Value: "checked" -->
```

If any of these are missing or incorrect, screen reader users are confused.

## Learn More

- **[How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/)** (~30 min)  
  Real stories from screen reader users. Understand their strategies and challenges.

- **[Teaching Accessible Computing - Screen Reader Section](https://bookish.press/tac)** (Free web book)  
  Deep dive into screen reader behavior and testing strategies.

## Next Steps

Now that you understand screen readers, learn when and how to use ARIA:

Continue to [ARIA: Proper and Responsible Use](./a11y-aria.md).
