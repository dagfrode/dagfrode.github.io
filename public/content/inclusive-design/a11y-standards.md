# Accessibility Standards & Guidelines

Standards can feel overwhelming. This guide makes them practical and actionable for developers.

## WCAG: Web Content Accessibility Guidelines

WCAG is the international standard for web accessibility. The current version is WCAG 2.2, but WCAG 3 is in development.

### The POUR Principles

WCAG is organized around four principles. Content must be:

**P**erceivable  
Users must be able to perceive information (it can't be invisible to all their senses)
- Provide text alternatives for images
- Provide captions for videos
- Ensure sufficient color contrast
- Don't rely on color alone to convey information

**O**perable  
Users must be able to operate interface components
- Make everything work with a keyboard
- Give users enough time to read and use content
- Don't cause seizures (no rapidly flashing content)
- Help users navigate and find content

**U**nderstandable  
Information and operation must be understandable
- Make text readable
- Make content appear and operate predictably
- Help users avoid and correct mistakes

**R**obust  
Content must be robust enough to work with current and future technologies
- Use valid HTML
- Ensure compatibility with assistive technologies

## Conformance Levels: A, AA, AAA

WCAG has three levels of conformance:

- **Level A:** Minimum (basic requirements)
- **Level AA:** Mid-range (recommended target for most sites)
- **Level AAA:** Highest (not always achievable for all content)

**Most organizations aim for AA compliance.** It's a reasonable balance between effort and accessibility.

### Examples by Level

**Level A Examples:**
- Images have alt text
- Videos have captions
- Color isn't the only way to convey information

**Level AA Examples (includes all A):**
- Text has 4.5:1 contrast ratio
- Text can be resized to 200%
- Multiple ways to find pages (navigation, search, sitemap)

**Level AAA Examples (includes all A and AA):**
- Text has 7:1 contrast ratio
- Sign language interpretation for videos
- No time limits on tasks

## What Developers Need to Know

You don't need to memorize all WCAG criteria. Focus on these common developer responsibilities:

1. **Semantic HTML** - Use the right elements
2. **Keyboard accessibility** - Everything works without a mouse
3. **Color contrast** - Text is readable
4. **Form labels** - Every input has a label
5. **Alt text** - Images have descriptions
6. **Heading structure** - Logical heading hierarchy
7. **Focus management** - Users can see where they are
8. **Error handling** - Clear error messages

## WCAG 3: The Future

WCAG 3 is in draft and will eventually replace WCAG 2. Key changes:
- Simpler language
- More guidance on cognitive accessibility
- New testing methods
- Score-based system instead of A/AA/AAA

For now, focus on WCAG 2.2. WCAG 3 is years away from being finalized.

## Legal Requirements (High Level)

**Note:** This is not legal advice. Consult your legal team for compliance requirements.

### Europe
**EN 301 549** - European accessibility standard for ICT products and services
- Applies to public sector websites and apps
- Based on WCAG 2.1 Level AA

### United States
**ADA (Americans with Disabilities Act)** - Civil rights law prohibiting discrimination
- Applies to places of "public accommodation"
- Courts increasingly require WCAG 2.1 Level AA compliance

**Section 508** - US federal accessibility standard
- Applies to federal agencies
- Based on WCAG 2.0 Level AA (updating to 2.1)

### Other Regions
- **Canada:** AODA (Accessibility for Ontarians with Disabilities Act)
- **Australia:** DDA (Disability Discrimination Act)
- **UK:** Equality Act 2010

Most laws reference WCAG 2.1 Level AA as the technical standard.

## Compliance vs Real Accessibility

**Important:** You can be fully WCAG-compliant and still have an inaccessible website.

WCAG provides minimum requirements, but:
- Automated tools only catch ~30% of issues
- Real users encounter problems that pass WCAG checks
- Usability matters beyond technical compliance

**Example:** A site might pass all WCAG checks but still be confusing, poorly organized, or difficult to use. Aim for usability, not just compliance.

## Quick Exercise (10 minutes)

1. Visit [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
2. Pick one principle (Perceivable, Operable, Understandable, or Robust)
3. Read through 2-3 success criteria
4. Think: Have you seen these issues in websites you use?

## WAI-ARIA: A Preview

ARIA (Accessible Rich Internet Applications) is a specification for making dynamic web content accessible. It's part of the W3C's Web Accessibility Initiative (WAI).

**Key concept:** ARIA fills gaps where HTML isn't enough. Use HTML first, ARIA second.

We'll cover ARIA in detail in the [ARIA section](./a11y-aria.md).

## Learn More

- **[WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)** (Reference)  
  Official standard. Don't try to read it all—use it as a reference.

- **[WCAG 3 Introduction](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/)** (~10 min)  
  Overview of what's coming in WCAG 3 and why it's changing.

- **[How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/)** (~30 min)  
  Context for why these standards exist. Real stories from real users.

## Next Steps

Understanding standards is important, but implementation matters more.

Continue to [Semantic HTML](./a11y-semantic-html.md) to learn the foundation of accessible development.
