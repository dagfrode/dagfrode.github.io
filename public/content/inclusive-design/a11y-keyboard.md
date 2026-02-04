# Keyboard Accessibility

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Millions of people can't use a mouse. Your interfaces must work with keyboards alone.

## Who Uses Keyboards Only?

- People with motor disabilities (can't use a mouse precisely)
- People with tremors or limited dexterity
- People with arthritis or repetitive strain injuries
- Blind users (screen reader users navigate by keyboard)
- Power users (keyboard is faster)
- People with broken mice or trackpads

**This isn't rare.** Many professional developers prefer keyboard navigation for speed.

## Quick Test (5 minutes)

**Right now:**

1. Unplug your mouse (or put it aside)
2. Open a website you use regularly
3. Try to complete a task using only:
   - **Tab** - Move forward
   - **Shift + Tab** - Move backward
   - **Enter** - Activate links and buttons
   - **Space** - Activate buttons, scroll page
   - **Arrow keys** - Navigate within components

**Questions:**

- Could you complete the task?
- Could you see where you were?
- Did anything trap your focus?

## Keyboard Navigation Basics

### Tab Order

Focus moves through interactive elements in DOM order:

```html
<!-- Focus order: 1 → 2 → 3 -->
<button>First</button>
<a href="#">Second</a>
<input type="text" />
<!-- Third -->
```

**Golden rule:** Tab order should match visual order. If it doesn't, your HTML structure is wrong.

### Focusable Elements

Native focusable elements:

- `<a>` (with href)
- `<button>`
- `<input>`, `<select>`, `<textarea>`
- `<iframe>`
- `<summary>` (in `<details>`)

Non-focusable by default:

- `<div>`, `<span>`, `<p>`, etc.

## Focus Visibility

Users must see where they are. Browsers provide default focus indicators (usually a blue outline).

### Never Remove Focus Outlines

```css
/* ❌ NEVER DO THIS */
*:focus {
  outline: none;
}
```

This breaks keyboard navigation completely. Users can't see where they are.

### Styling Focus

You can style focus indicators, but they must be visible:

```css
/* ✅ Good: Custom but visible */
button:focus {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}

/* ✅ Even better: Use :focus-visible */
button:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}
```

**`:focus-visible`** shows focus for keyboard users but not mouse users. This is ideal for most cases.

## Managing Focus

### Skip Links

Allow users to skip repetitive content:

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- ... header, navigation ... -->

<main id="main-content">
  <!-- Content starts here -->
</main>
```

```css
.skip-link {
  position: absolute;
  left: -9999px;
}

.skip-link:focus {
  left: 0;
  top: 0;
  z-index: 9999;
  padding: 1rem;
  background: #000;
  color: #fff;
}
```

Skip links are hidden until focused. They let keyboard users bypass navigation.

### Focus Management in SPAs

When navigating in single-page applications, focus should move to the new content:

```javascript
// After navigation
const mainHeading = document.querySelector("h1");
mainHeading.tabIndex = -1; // Make focusable
mainHeading.focus();
```

`tabindex="-1"` makes an element focusable programmatically but not in normal tab order.

### Modals and Dialogs

When opening a modal:

1. **Trap focus** inside the modal
2. **Remember** the previous focus
3. **Return focus** when closing

```javascript
function openModal(modalElement) {
  const previousFocus = document.activeElement;

  modalElement.showModal(); // Native <dialog> handles trap
  modalElement.querySelector("button").focus();

  modalElement.addEventListener(
    "close",
    () => {
      previousFocus.focus();
    },
    { once: true }
  );
}
```

Native `<dialog>` element handles focus trapping automatically. Use it!

## Avoiding Keyboard Traps

A keyboard trap is when users can't escape a component:

```html
<!-- ❌ Bad: Users stuck in modal -->
<div class="modal">
  <button>Action</button>
  <!-- No way to close! -->
</div>
```

**Rules:**

- Users must be able to leave any component
- Usually Escape key should close modals/menus
- Provide visible close buttons

## Custom Interactive Components

If you must use non-standard elements:

```html
<div
  role="button"
  tabindex="0"
  onclick="handleClick()"
  onkeydown="handleKeyDown(event)"
>
  Custom Button
</div>
```

```javascript
function handleKeyDown(event) {
  // Activate on Enter or Space
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    handleClick();
  }
}
```

**But seriously:** Just use `<button>`. It does all this automatically.

## Common Keyboard Shortcuts

Users expect these shortcuts to work:

- **Tab/Shift+Tab** - Navigate
- **Enter** - Activate links and buttons
- **Space** - Activate buttons, scroll
- **Escape** - Close modals/dialogs
- **Arrow keys** - Navigate within lists, tabs, menus
- **Home/End** - Jump to start/end
- **Page Up/Down** - Scroll

Don't override these unless you have a very good reason.

## Quick Exercise (10 minutes)

Test your most recent project:

1. Unplug your mouse
2. Try to complete your primary user flow
3. Check:
   - Can you reach all interactive elements?
   - Can you see where you are?
   - Does tab order make sense?
   - Can you close modals?
   - Can you activate all buttons?

Fix at least one issue you find.

## Dropdown Menus & Autocomplete

These require careful keyboard handling:

```javascript
// Simplified autocomplete pattern
const input = document.querySelector("input");
const list = document.querySelector("ul");

input.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown") {
    e.preventDefault();
    list.querySelector("li").focus();
  }
});
```

For production, use established patterns from component libraries or ARIA Authoring Practices.

## Learn More

- **[Teaching Accessible Computing - Keyboard Section](https://bookish.press/tac)** (Free web book)  
  Detailed patterns for keyboard interaction in complex components.

## Next Steps

Understanding keyboard navigation prepares you for screen readers:

Continue to [Screen Readers & Assistive Technologies](./a11y-screen-readers.md).
