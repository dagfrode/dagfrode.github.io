# Visual Accessibility & Design

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Visual accessibility isn't just for blind users. It affects everyone who sees your interface.

## Who Benefits?

- People with low vision
- People with color blindness (~8% of men, ~0.5% of women)
- People with photosensitivity
- People in bright sunlight
- People on low-quality screens
- People with aging eyes
- Everyone trying to read small text

**Visual accessibility makes interfaces better for everyone.**

## Color Contrast

Text must have sufficient contrast against its background.

### WCAG Requirements

**Normal text (< 18pt or < 14pt bold):**

- Level AA: 4.5:1 contrast ratio
- Level AAA: 7:1 contrast ratio

**Large text (≥ 18pt or ≥ 14pt bold):**

- Level AA: 3:1 contrast ratio
- Level AAA: 4.5:1 contrast ratio

**Non-text (icons, UI components):**

- Level AA: 3:1 contrast ratio

### Examples

```css
/* ❌ Bad: 2.8:1 - too low */
.text {
  color: #999999;
  background: #ffffff;
}

/* ✅ Good: 4.6:1 - meets AA */
.text {
  color: #767676;
  background: #ffffff;
}

/* ✅ Better: 7.1:1 - meets AAA */
.text {
  color: #595959;
  background: #ffffff;
}
```

### Testing Contrast

**Tools:**

- Chrome DevTools: Inspect element → Color picker shows contrast ratio
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Color.review](https://color.review/)
- Browser extensions like "Colour Contrast Checker"

## Color Alone Isn't Enough

Never rely on color alone to convey information.

```html
<!-- ❌ Bad: Only color indicates error -->
<input type="text" style="border-color: red;" />

<!-- ✅ Good: Icon + text + color -->
<input type="text" aria-invalid="true" aria-describedby="error" />
<span id="error">
  <svg aria-hidden="true"><!-- Error icon --></svg>
  Please enter a valid email
</span>
```

**Examples of color-only communication:**

- Red/green for success/error without text or icons
- Color-coded charts without patterns or labels
- Link text only distinguished by color
- Required fields only marked with red asterisks

### Links Without Color

If links are only distinguished by color, add underline or another indicator:

```css
/* ✅ Good: Links underlined */
a {
  text-decoration: underline;
  color: #0066cc;
}

/* ⚠️ Acceptable if high contrast (3:1) with surrounding text */
a {
  color: #0066cc; /* Must have 3:1 contrast with surrounding text */
}
a:hover,
a:focus {
  text-decoration: underline;
}
```

## Text Scaling and Zoom

Users must be able to resize text to 200% without loss of functionality.

### How Users Scale Text

- Browser zoom (Ctrl/Cmd +)
- Text-only zoom (browser setting)
- OS text scaling settings
- Screen magnification software

### Making Text Scalable

```css
/* ✅ Good: Relative units */
body {
  font-size: 1rem; /* Respects user preferences */
}

h1 {
  font-size: 2rem; /* Scales with base font */
}

/* ❌ Bad: Fixed pixels for font-size */
body {
  font-size: 16px; /* Doesn't scale with user preferences */
}

/* ⚠️ Pixels OK for: borders, shadows, images */
.box {
  border: 1px solid black; /* This is fine */
  padding: 1rem; /* Use rem for spacing */
}
```

### Avoid Viewport Units for Text

```css
/* ❌ Bad: Text won't scale */
h1 {
  font-size: 5vw;
}

/* ✅ Good: Use rem or em */
h1 {
  font-size: 2rem;
}
```

### Test at 200% Zoom

1. Set browser zoom to 200%
2. Check:
   - Can you still read all text?
   - Are buttons and inputs usable?
   - Does content overlap or get cut off?
   - Can you still complete tasks?

## Responsive Typography

Ensure text is readable at all screen sizes:

```css
/* ✅ Good: Readable minimum size */
body {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5; /* Improves readability */
}

/* ⚠️ Never make text smaller than 16px base */
small {
  font-size: 0.875rem; /* 14px if base is 16px - minimum */
}
```

**Line height matters:**

- Body text: 1.5 minimum
- Headings: 1.2-1.3 is OK (shorter lines)

## Motion and Animation

Some users are sensitive to motion. It can cause:

- Dizziness
- Nausea
- Migraines
- Vestibular disorders
- Seizures (for rapid flashing)

### Respecting prefers-reduced-motion

```css
/* Animations by default */
.box {
  animation: slide-in 0.5s ease;
}

/* Disable for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .box {
    animation: none;
  }

  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**What to reduce:**

- Parallax scrolling
- Animated backgrounds
- Auto-playing videos
- Spinning elements
- Zoom effects
- Rapid transitions

**Keep:**

- Hover effects (minor)
- Loading spinners (essential feedback)
- Focus indicators

### Never Auto-Play Video with Sound

```html
<!-- ❌ Bad: Auto-plays with sound -->
<video src="video.mp4" autoplay />

<!-- ✅ Good: User control, muted by default -->
<video src="video.mp4" controls muted />
```

### Avoid Flashing Content

**Critical:** Never flash more than 3 times per second. Rapid flashing can trigger seizures.

## High Contrast Mode

Some users use high contrast mode (Windows) or increased contrast (macOS).

### Support High Contrast

```css
/* Detect high contrast mode */
@media (prefers-contrast: high) {
  /* Increase contrast even more */
  .button {
    border: 2px solid currentColor;
  }
}

/* Respect forced colors (Windows high contrast) */
@media (forced-colors: active) {
  /* Don't use background images for essential info */
  .icon::before {
    content: none; /* Icon might be invisible */
  }
}
```

**Test in high contrast mode:**

- Windows: Alt + Shift + Print Screen
- macOS: System Preferences → Accessibility → Display → Increase contrast

## Focus Indicators

Covered in [Keyboard Accessibility](./a11y-keyboard.md), but visually:

```css
/* ✅ Good: Visible focus */
:focus-visible {
  outline: 3px solid #0066cc;
  outline-offset: 2px;
}

/* ⚠️ OK: Custom focus that's clearly visible */
button:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.5);
  outline: none;
}

/* ❌ Bad: No visible focus */
:focus {
  outline: none; /* Never do this */
}
```

## Quick Exercise (10 minutes)

Audit your most recent project:

1. **Check contrast:** Use DevTools color picker on 3 text elements
2. **Test zoom:** Set browser to 200% zoom. Can you still use the site?
3. **Check motion:** Add `prefers-reduced-motion: reduce` in DevTools. Does animation stop?
4. **Remove color:** Use a browser extension to view in grayscale. Can you still understand information?

Fix at least one issue.

## Color Blindness Types

- **Deuteranopia** (green-blind) - Most common (~5% of men)
- **Protanopia** (red-blind) - Common (~2.5% of men)
- **Tritanopia** (blue-blind) - Rare (~0.001%)
- **Achromatopsia** (total color blindness) - Very rare

**Testing tools:**

- Chrome DevTools: Rendering → Emulate vision deficiencies
- [Color Blind Web Page Filter](https://www.toptal.com/designers/colorfilter)

## Learn More

- **[Teaching Accessible Computing - Visual Design Section](https://bookish.press/tac)** (Free web book)  
  Detailed visual accessibility guidance with design examples.

## Next Steps

Visual and functional accessibility should be tested together:

Continue to [Accessibility Testing](./a11y-testing.md) to learn how to verify everything works.
