# Accessible Forms & Validation

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Forms are everywhere on the web. Making them accessible ensures everyone can complete tasks.

## Why Forms Matter

Forms are often the goal of a website:

- Sign up
- Log in
- Make a purchase
- Submit feedback
- Apply for a job

If your forms aren't accessible, you're blocking people from completing these critical tasks.

## Form Basics: Labels

Every input needs a label. Always. No exceptions.

### Proper Label Association

```html
<!-- ✅ Good: Explicit association -->
<label for="email">Email address</label>
<input type="email" id="email" />

<!-- ✅ Also good: Implicit association -->
<label>
  Email address
  <input type="email" />
</label>

<!-- ❌ Bad: No association -->
<span>Email address</span>
<input type="email" />

<!-- ❌ Bad: Placeholder is not a label -->
<input type="email" placeholder="Email address" />
```

**Why?**

- Screen readers announce the label when you focus the input
- Clicking the label focuses the input (bigger click target)
- It's required for accessibility

### Placeholders Are Not Labels

Placeholders disappear when you start typing. They:

- Don't work with screen readers the same way labels do
- Are often low contrast (hard to read)
- Disappear, making users forget what the field is for

```html
<!-- ❌ Bad: Only placeholder -->
<input type="text" placeholder="First name" />

<!-- ✅ Good: Label + optional placeholder for hint -->
<label for="firstname">First name</label>
<input type="text" id="firstname" placeholder="e.g., Jane" />
```

## Required Fields

Indicate required fields clearly:

```html
<!-- ✅ Good: Visual and programmatic indication -->
<label for="email">
  Email address
  <abbr title="required" aria-label="required">*</abbr>
</label>
<input type="email" id="email" required />

<!-- ✅ Also good: Explicit text -->
<label for="phone">Phone number (required)</label>
<input type="tel" id="phone" required aria-required="true" />
```

**Don't:**

- Rely only on color (red asterisk without symbol)
- Use only asterisk without explanation
- Hide the required state from screen readers

## Field Instructions

Provide instructions before the field, not after:

```html
<!-- ✅ Good: Instructions before field -->
<label for="password">Password</label>
<span id="password-hint">Must be at least 8 characters</span>
<input type="password" id="password" aria-describedby="password-hint" />

<!-- ❌ Bad: Instructions after field -->
<input type="password" id="password" />
<span>Must be at least 8 characters</span>
```

`aria-describedby` connects the hint to the input. Screen readers announce it when you focus the field.

## Grouping Related Fields

Use `<fieldset>` and `<legend>` for groups:

```html
<fieldset>
  <legend>Shipping address</legend>

  <label for="street">Street</label>
  <input type="text" id="street" />

  <label for="city">City</label>
  <input type="text" id="city" />

  <label for="zip">ZIP code</label>
  <input type="text" id="zip" />
</fieldset>
```

Screen readers announce the legend with each field: "Shipping address, Street, edit text"

### Radio Buttons and Checkboxes

Always group radio buttons:

```html
<fieldset>
  <legend>Preferred contact method</legend>

  <label>
    <input type="radio" name="contact" value="email" />
    Email
  </label>

  <label>
    <input type="radio" name="contact" value="phone" />
    Phone
  </label>

  <label>
    <input type="radio" name="contact" value="mail" />
    Mail
  </label>
</fieldset>
```

## Error Handling

Errors must be clear and actionable.

### Identifying Errors

```html
<!-- Form submit reveals errors -->
<form onsubmit="return validateForm()">
  <!-- Error summary at top -->
  <div role="alert" id="error-summary">
    <h2>There are 2 errors in this form:</h2>
    <ul>
      <li><a href="#email">Email address is invalid</a></li>
      <li><a href="#password">Password is too short</a></li>
    </ul>
  </div>

  <!-- Individual field error -->
  <label for="email">Email address</label>
  <input
    type="email"
    id="email"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <span id="email-error" role="alert">
    Please enter a valid email address
  </span>

  <button type="submit">Submit</button>
</form>
```

**Key points:**

- `role="alert"` announces errors to screen readers
- `aria-invalid="true"` marks the field as having an error
- `aria-describedby` connects error message to field
- Error summary at top with links to fields
- Move focus to first error or summary

### Inline Validation

Real-time validation as users type:

```html
<label for="username">Username</label>
<input
  type="text"
  id="username"
  aria-describedby="username-hint username-status"
/>
<span id="username-hint">Must be 3-20 characters</span>
<span id="username-status" role="status" aria-live="polite">
  <!-- Dynamically updated: "Username available" or "Username taken" -->
</span>
```

Use `aria-live="polite"` so screen readers announce changes without interrupting.

## Success Messages

Announce successful submission:

```html
<div role="status" aria-live="polite">
  Form submitted successfully! Check your email for confirmation.
</div>
```

Consider moving focus to the success message:

```javascript
function handleSuccess() {
  const message = document.getElementById("success");
  message.tabIndex = -1;
  message.focus();
}
```

## Common Form Patterns

### Login Form

```html
<form>
  <h1>Log In</h1>

  <label for="username">Username</label>
  <input type="text" id="username" autocomplete="username" required />

  <label for="password">Password</label>
  <input
    type="password"
    id="password"
    autocomplete="current-password"
    required
  />

  <button type="submit">Log In</button>

  <a href="/forgot-password">Forgot password?</a>
</form>
```

**Note:** Use `autocomplete` attributes to help password managers.

### Search Form

```html
<form role="search">
  <label for="search">Search</label>
  <input type="search" id="search" />
  <button type="submit">Search</button>
</form>
```

`role="search"` helps users find the search quickly.

## Quick Exercise (10 minutes)

Fix this broken form:

```html
<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />

  <div>
    <input type="radio" name="size" value="s" /> S
    <input type="radio" name="size" value="m" /> M
    <input type="radio" name="size" value="l" /> L
  </div>

  <div onclick="submit()">Submit</div>
</form>
```

**Issues to fix:**

1. No labels
2. Radio buttons not grouped
3. Submit button is a div

<details>
<summary>See Solution</summary>

```html
<form>
  <label for="name">Name</label>
  <input type="text" id="name" required />

  <label for="email">Email</label>
  <input type="email" id="email" required />

  <fieldset>
    <legend>Size</legend>
    <label>
      <input type="radio" name="size" value="s" required />
      Small
    </label>
    <label>
      <input type="radio" name="size" value="m" />
      Medium
    </label>
    <label>
      <input type="radio" name="size" value="l" />
      Large
    </label>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

</details>

## Multi-Step Forms

For wizards and multi-step forms:

1. **Indicate progress:** "Step 2 of 4"
2. **Use clear headings:** Each step has an h1
3. **Save progress:** Allow users to come back
4. **Validate per step:** Don't wait until the end

```html
<form>
  <p aria-live="polite">Step 2 of 4</p>
  <h1>Shipping Information</h1>

  <!-- Form fields -->

  <button type="button" onclick="previousStep()">Previous</button>
  <button type="submit">Next</button>
</form>
```

## Learn More

- **[Teaching Accessible Computing - Forms Section](https://bookish.press/tac)** (Free web book)  
  Comprehensive guide to form accessibility with complex examples.

## Next Steps

Forms are part of visual design. Learn about contrast, color, and motion:

Continue to [Visual Accessibility & Design](./a11y-visual.md).
