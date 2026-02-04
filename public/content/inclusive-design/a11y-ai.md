# AI-Assisted Accessibility

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

AI tools can help you build accessible interfaces, but they need guidance. Here's how to use AI effectively for accessibility.

## The Challenge with AI-Generated Code

AI models like Claude, ChatGPT, and GitHub Copilot are trained on code from the internet. Much of that code has poor accessibility:

- Generic alt text or missing alt attributes
- Divs instead of semantic HTML
- Missing ARIA labels
- No keyboard navigation
- Poor color contrast

**The AI produces average code based on its training data.** If most code online is inaccessible, the AI will generate inaccessible code by default.

## Making AI Accessibility-Aware

You need to explicitly guide AI to consider accessibility. Here are strategies:

### 1. Include Accessibility in Your Prompts

**Bad prompt:**

> "Create a modal dialog component"

**Good prompt:**

> "Create an accessible modal dialog component with:
>
> - Proper ARIA attributes (role, aria-modal, aria-labelledby)
> - Focus trap inside modal
> - Focus management (save and restore previous focus)
> - Close on Escape key
> - Keyboard navigation support"

### 2. Reference WCAG Standards

**Example prompt:**

> "Create a form that meets WCAG 2.2 Level AA requirements:
>
> - Every input has an associated label
> - Required fields are marked programmatically
> - Error messages use aria-live regions
> - Color is not the only indicator of errors"

### 3. Ask for Multiple Approaches

**Example:**

> "Show me three ways to make this image carousel accessible, with pros and cons of each approach"

This helps you understand trade-offs and make informed decisions.

### 4. Request Accessibility Testing Code

**Example:**

> "Write Playwright tests using @axe-core/playwright to verify this component is accessible"

This ensures you can validate the AI's suggestions.

## Claude Skills for Accessibility

Claude (via Claude for Work or API) supports "skills" - specific instructions for handling certain types of tasks.

### Creating an Accessibility Skill

Create a skill that instructs Claude to always consider accessibility:

```markdown
# Accessibility-First Web Development Skill

When generating UI components or web interfaces:

1. Always use semantic HTML elements first (button, nav, main, header, etc.)
2. Ensure all interactive elements are keyboard accessible
3. Provide appropriate ARIA attributes only when HTML semantics aren't enough
4. Include focus management for dynamic content
5. Ensure color contrast meets WCAG AA standards (4.5:1 for text)
6. Make sure all images have descriptive alt text
7. Provide labels for all form inputs
8. Use aria-live regions for dynamic content updates
9. Consider screen reader announcements
10. Include skip links for navigation

Always explain accessibility decisions made and suggest testing steps.

When reviewing existing code, check for:

- Semantic HTML usage
- Keyboard accessibility
- ARIA attributes correctness
- Color contrast
- Form labels
- Alt text quality
```

### Using the Skill

With the skill active, prompts become simpler:

**Before skill:**

> "Create an accessible dropdown menu with keyboard navigation, ARIA attributes, focus management..."

**With skill:**

> "Create a dropdown menu"

Claude will automatically apply accessibility best practices.

## Claude Agents for Accessibility Review

Agents are autonomous instances that can review your code and provide feedback.

### Setting Up an Accessibility Review Agent

Create an agent with this system prompt:

```markdown
You are an accessibility expert reviewing code for WCAG 2.2 Level AA compliance.

For each component or page:

1. Check semantic HTML structure
2. Verify keyboard navigation works
3. Review ARIA attributes (are they needed? are they correct?)
4. Check color contrast
5. Verify form labels
6. Check alt text quality
7. Look for common anti-patterns

Provide:

- Issues found (severity: critical, important, minor)
- Specific code locations
- How to fix each issue
- Testing steps to verify fixes

Be specific and actionable. Cite WCAG success criteria when relevant.
```

### Using the Agent

Send your code to the agent:

```javascript
// Component code
const MyComponent = () => {
  return (
    <div onClick={handleClick}>
      <img src="icon.png" />
      <span>Click me</span>
    </div>
  );
};
```

**Agent response:**

```
Critical Issues:
1. [WCAG 4.1.2] Interactive div should be a <button>
   - Not keyboard accessible
   - No role, name, or state for assistive tech
   - Fix: Replace div with button element

2. [WCAG 1.1.1] Image missing alt attribute
   - Screen readers can't describe it
   - Fix: Add alt="[description]" or alt="" if decorative

Minor Issues:
3. Prefer button text over nested spans for simplicity

Suggested fix:
<button onClick={handleClick}>
  <img src="icon.png" alt="Icon description" aria-hidden="true" />
  Click me
</button>
```

## Workflow: AI + Human Review

A good workflow combines AI assistance with human judgment:

### 1. Generate with AI

Use prompts that include accessibility requirements.

### 2. Review Generated Code

- Does it use semantic HTML?
- Are ARIA attributes necessary and correct?
- Is keyboard navigation handled?

### 3. Test with Tools

- Run automated tests (Axe, Lighthouse)
- Test with keyboard
- Test with screen reader

### 4. Iterate with AI

If issues found:

> "The modal doesn't trap focus. Update the code to trap focus inside the modal when open."

### 5. Document Decisions

Ask AI to document accessibility choices:

> "Add comments explaining the accessibility features of this component"

## Common AI Mistakes to Watch For

Even with good prompts, AI makes mistakes:

### Mistake 1: Over-using ARIA

```jsx
// ❌ AI might generate
<button role="button" aria-label="Submit">Submit</button>

// ✅ Simplified
<button>Submit</button>
```

**Why it's wrong:** Button already has role="button" and the text provides the label.

### Mistake 2: Generic Alt Text

```jsx
// ❌ AI might generate
<img src="chart.png" alt="chart" />

// ✅ Descriptive
<img src="chart.png" alt="Bar chart showing 50% increase in sales from January to June" />
```

**Why it's wrong:** Alt text should convey meaning, not just describe the type.

### Mistake 3: Incorrect ARIA Relationships

```jsx
// ❌ AI might generate
<button aria-describedby="help">Help</button>
<div id="tooltip">Need assistance?</div>

// ✅ Correct relationship
<button aria-describedby="help">Help</button>
<div id="help">Need assistance?</div>
```

**Why it's wrong:** The ID must match exactly.

### Mistake 4: Missing Focus Management

```jsx
// ❌ AI might generate (modal without focus trap)
const Modal = ({ isOpen }) => {
  if (!isOpen) return null;
  return <div role="dialog">...</div>;
};

// ✅ With focus management
const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const previousFocus = document.activeElement;
      modalRef.current?.focus();

      return () => previousFocus?.focus();
    }
  }, [isOpen]);

  return isOpen ? (
    <div ref={modalRef} role="dialog" tabIndex={-1}>
      ...
    </div>
  ) : null;
};
```

## Quick Exercise (10 minutes)

1. Ask your AI tool to create a simple form with name and email fields
2. Review the generated code for accessibility issues
3. Create a prompt asking the AI to fix any issues
4. Compare the before and after

**Questions to ask:**

- Does every input have a label?
- Are required fields marked?
- Is there error handling?
- Can you submit with keyboard only?

## Prompt Templates

### General Component

```
Create a [component name] that meets WCAG 2.2 Level AA standards.
Include:
- Semantic HTML
- Keyboard navigation
- Appropriate ARIA (only if needed)
- Focus management if needed
- Screen reader considerations

Explain accessibility choices made.
```

### Form Component

```
Create an accessible [form type] with:
- Labels for all inputs
- Required field indicators (visual and programmatic)
- Error messages with aria-live regions
- Keyboard submission
- Clear focus indicators
Meeting WCAG 2.2 Level AA standards.
```

### Interactive Widget

```
Create an accessible [widget type] following ARIA authoring practices:
- Proper ARIA roles and attributes
- Keyboard navigation (arrows, enter, escape)
- Focus management
- State announcements for screen readers
Include usage documentation.
```

## Limitations of AI

AI cannot:

- **Understand context:** Is this alt text meaningful for this specific image in this specific context?
- **Test with real users:** Does this actually work for people with disabilities?
- **Verify contrast in designs:** AI can't see your actual designs
- **Ensure consistency:** AI doesn't remember previous components you built
- **Make subjective judgments:** Is this heading hierarchy logical?

**Always combine AI assistance with:**

- Automated testing tools
- Manual testing (keyboard, screen reader)
- Human review
- User testing when possible

## Building AI Knowledge

The more context you give AI, the better:

### Include in Your Prompts:

- Your design system's accessibility patterns
- Component library conventions
- WCAG level you're targeting
- Browser support requirements
- Assistive tech testing results from previous work

### Example with Context:

```
Create a button component following our design system patterns:
- Use our design tokens for colors (meets AA contrast)
- Include focus-visible styles (3px outline, 2px offset)
- Support icon-only buttons (require aria-label)
- Support loading state (announce with aria-live)
- Match our existing Button component API

Based on previous feedback, avoid:
- role="button" on button elements
- aria-label when text content is present
```

## Learn More

- **[Claude Skills Documentation](https://www.anthropic.com/product)** - How to create and use skills
- **[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)** - Reference for AI prompts
- **[Teaching Accessible Computing](https://bookish.press/tac)** (Free web book) - Understanding accessibility deeply helps you guide AI better

## Next Steps

Now that you understand how to use AI for accessibility:

- Apply these techniques in your next project
- Create accessibility skills/prompts for your team
- Document common AI mistakes you encounter
- Share successful prompts with your team

Go back to the [main learning page](./edu.md) to explore other topics.
