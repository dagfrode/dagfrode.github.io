# Accessibility as a System

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Accessibility isn't just about code—it's about how all the layers of your product work together.

## The Reverse Swiss Cheese Model

In security, we talk about the "Swiss cheese model"—multiple layers of protection where holes in one layer are covered by another layer. As long as one layer is intact, you're protected.

**Accessibility feels like the reverse.** You're trying to get through ALL the layers successfully. A hole in any layer breaks the experience.

### The Layers

Each layer must work correctly for accessibility to succeed:

#### 1. Style Guide & Design System

- Color palettes with sufficient contrast
- Typography that supports readability (dyslexia considerations)
- Consistent spacing and visual hierarchy
- Motion preferences

**If this breaks:** All components built from it inherit accessibility issues.

#### 2. Component Library

- Semantic HTML structure
- Keyboard navigation built-in
- ARIA attributes when needed
- Focus management

**If this breaks:** Developers can use components correctly and still create inaccessible interfaces.

#### 3. Application Code

- Components used correctly
- Proper props passed (alt text, labels, aria-labels)
- Dynamic content announced
- Route changes managed

**If this breaks:** Perfect components become inaccessible through misuse.

#### 4. Content

- Meaningful alt text (not generated)
- Clear, simple language
- Logical heading structure
- Descriptive link text

**If this breaks:** Technical implementation is perfect but content is incomprehensible.

#### 5. User Experience Flow

- Logical task flows
- Clear error messages
- Understandable feedback
- Consistent patterns

**If this breaks:** Everything works technically but users can't accomplish goals.

## The Challenge of Distributed Systems

This becomes even more complex when you have:

- **Multiple teams** building different parts
- **Different technologies** (web, native apps, third-party integrations)
- **Autonomous development** (teams making their own decisions)
- **Large ecosystems** (many applications, many platforms)

A hole in any layer, in any application, in any team's work creates an inaccessible experience.

## Why "Just Use Good Components" Isn't Enough

A common misconception: _"We have an accessible component library, so our apps are accessible."_

**Reality:** Accessible components are necessary but not sufficient.

```jsx
// ✅ Component is accessible
<Button>Click me</Button>

// ❌ Used incorrectly - no context
<Button onClick={() => deleteEverything()}>
  <Icon name="trash" />
</Button>

// ✅ Used correctly
<Button
  onClick={() => deleteEverything()}
  aria-label="Delete all items"
>
  <Icon name="trash" aria-hidden="true" />
</Button>
```

The component provides the foundation, but correct usage, meaningful content, and good UX patterns must be in place.

## What This Means for Teams

### 1. Shared Responsibility

Accessibility isn't one person's job or one team's responsibility. Everyone contributes:

- **Designers** - Color, typography, visual hierarchy, user flows
- **Component developers** - Semantic HTML, keyboard support, ARIA
- **Application developers** - Correct usage, dynamic content
- **Content creators** - Alt text, clear language, heading structure
- **QA/Testers** - Manual testing, real user feedback
- **Product owners** - Prioritization, requirements, acceptance criteria

### 2. Knowledge Must Flow

Each layer needs to understand the layers around it:

- Designers should understand what's possible/difficult in code
- Developers should understand user needs and assistive technologies
- Content creators should understand technical limitations
- Everyone should understand WCAG requirements

### 3. Testing at Every Layer

Don't wait until the end:

- **Design phase:** Review for color contrast, clear flows
- **Component development:** Test with keyboard and screen readers
- **Application development:** Automated linting, manual testing
- **Content creation:** Review alt text, heading structure
- **Pre-release:** Full accessibility audit
- **Post-release:** User testing with people with disabilities

### 4. Documentation Bridges Gaps

Good documentation helps layers work together:

- **Component docs:** Show accessible usage patterns, common mistakes
- **Style guide:** Document color combinations, when to use what
- **Team guidelines:** Share testing procedures, tools, checklists
- **Decision records:** Explain why certain approaches were chosen

## Building a Sustainable System

Making this work long-term requires:

### Education

- Onboarding includes accessibility training
- Regular refreshers and updates
- Share learnings across teams
- Build empathy through experience

### Process

- Accessibility in Definition of Done
- Reviews include accessibility checks
- Templates and examples show correct patterns
- Gradual improvements, not big bang fixes

### Tools

- Linting catches issues during development
- Automated tests in CI/CD pipelines
- Manual testing checklists
- Screen readers available and documented

### Culture

- Accessibility is everyone's responsibility
- Safe to ask questions and admit gaps
- Celebrate improvements
- Learn from mistakes together

## The Positive Side

While the reverse Swiss cheese model sounds daunting, it also means:

### Small improvements compound

Every layer you improve makes the whole system better. Fix contrast in the design system → all applications improve.

### You can start anywhere

You don't need to fix everything at once. Start with one layer, one team, one application.

### Reusable solutions scale

Good components, good patterns, good content examples can be reused across the organization.

### It gets easier over time

As you build knowledge, tools, and processes, accessibility becomes less of a last-minute scramble and more of a natural part of development.

## Quick Exercise (10 minutes)

Think about a recent project:

1. **Identify the layers:** What are all the layers in your system?
2. **Find the gaps:** Where do you have holes? Which layers need work?
3. **Map dependencies:** What layers depend on what? Where do things break down?
4. **Pick one layer:** What's the highest-impact improvement you could make?

## Learn More

- **[Teaching Accessible Computing - Systems Thinking](https://bookish.press/tac)** (Free web book)  
  Understanding how organizational structure affects accessibility outcomes.

## Next Steps

Understanding accessibility as a system helps you see where to focus effort.

- Ready to learn the technical details? Go back to [Learning Path](./edu.md)
- Want to test your current system? See [Accessibility Testing](./a11y-testing.md)
- Building a design system? Check [Visual Accessibility](./a11y-visual.md) and [Semantic HTML](./a11y-semantic-html.md)
