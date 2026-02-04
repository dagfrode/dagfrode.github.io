# Accessibility Testing

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Testing is essential. Automated tools catch ~30% of issues. Manual testing finds the rest.

## Testing Strategy

Good accessibility testing combines:

1. **Automated tools** (fast, catches obvious issues)
2. **Manual keyboard testing** (catches interaction issues)
3. **Screen reader testing** (catches experience issues)
4. **Real user testing** (catches usability issues)

**All are necessary.** No single method catches everything.

## Automated Testing

Automated tools are the first line of defense. They're fast and catch common issues.

### Browser DevTools

**Chrome/Edge DevTools:**

1. Open DevTools (F12)
2. Go to Elements tab → Accessibility pane
3. Inspect any element to see its accessibility tree

**Firefox DevTools:**

1. Open DevTools (F12)
2. Go to Accessibility tab
3. Enable accessibility inspector
4. Check for contrast issues, keyboard issues, etc.

### Lighthouse

Built into Chrome DevTools:

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Select "Accessibility" category
4. Run audit

**Lighthouse checks:**

- Color contrast
- Missing alt text
- Form labels
- ARIA usage
- Heading hierarchy
- And more...

**Limitations:** Lighthouse catches ~30-40% of WCAG issues.

### Axe DevTools

One of the best automated tools. Free browser extension.

**Install:**

- [Chrome/Edge Extension](https://chrome.google.com/webstore/detail/axe-devtools-web-accessibility-testing/lhdoppojpmngadmnindnejefpokejbdd)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/axe-devtools/)

**Usage:**

1. Open DevTools
2. Go to "Axe DevTools" tab
3. Click "Scan all of my page"
4. Review issues with clear explanations and how to fix them

**Why Axe is better:**

- Finds more issues than Lighthouse
- Clear explanations
- Shows exactly where issues are
- No false positives (very accurate)

### ESLint Plugins

Catch accessibility issues during development:

**eslint-plugin-jsx-a11y** (React):

```bash
npm install eslint-plugin-jsx-a11y --save-dev
```

```javascript
// .eslintrc
{
  "extends": ["plugin:jsx-a11y/recommended"]
}
```

Catches issues like:

- Images without alt text
- Buttons without labels
- Invalid ARIA attributes
- Missing form labels

**Other linters:**

- **eslint-plugin-vuejs-accessibility** (Vue)
- **eslint-plugin-lit-a11y** (Lit/Web Components)
- **svelte-check** (Svelte - built-in a11y warnings)

### Browser Extensions for Manual Testing

While DevTools are great, specialized extensions provide additional insights:

**Siteimprove Accessibility Checker:**
- Free Chrome extension
- Comprehensive page-level scans
- Clear categorization of issues (errors, warnings, reviews)
- Highlights issues directly on the page
- Provides guidance on how to fix

**WAVE (Web Accessibility Evaluation Tool):**
- Visual feedback directly on page
- Shows errors, alerts, and features
- Great for understanding page structure
- Includes contrast checker

**Color Blind Simulator:**
- Simulate different types of color blindness
- Verify color isn't the only information carrier

**HeadingsMap:**
- Visualize heading structure
- Ensure logical hierarchy

## Manual Testing Checklist

### Keyboard Testing (5-10 minutes)

1. **Unplug your mouse**
2. Navigate using only:
   - Tab / Shift+Tab
   - Enter
   - Space
   - Arrow keys
   - Escape

**Check:**

- [ ] Can you reach all interactive elements?
- [ ] Can you see where focus is? (visible focus indicator)
- [ ] Does tab order make sense?
- [ ] Can you open and close modals/menus?
- [ ] Can you submit forms?
- [ ] Can you skip navigation (skip link)?
- [ ] Are you ever trapped? (keyboard trap)

### Screen Reader Testing (10-15 minutes)

**Mac (VoiceOver):**

- Enable: Cmd + F5
- Navigate: Ctrl + Option + Arrow keys
- Rotor (jump to headings/links): Ctrl + Option + U

**Windows (NVDA):**

- [Download NVDA](https://www.nvaccess.org/download/)
- Navigate: Arrow keys or H (headings), K (links), etc.
- Elements list: Insert + F7

**Basic test:**

1. Start screen reader
2. Close your eyes or turn off monitor
3. Navigate the page
4. Try to complete a task

**Check:**

- [ ] Can you understand page structure?
- [ ] Are headings descriptive?
- [ ] Do images have good alt text?
- [ ] Do buttons and links have clear labels?
- [ ] Do forms have labels?
- [ ] Are errors announced?
- [ ] Can you complete the main task?

### Visual Testing (5 minutes)

**Zoom to 200%:**

1. Ctrl/Cmd + (or browser settings)
2. Check if everything still works

**Check:**

- [ ] Text is readable
- [ ] No horizontal scrolling
- [ ] Buttons/controls are usable
- [ ] No overlapping content

**Color Contrast:**

1. Use DevTools color picker or WebAIM Contrast Checker
2. Test text colors against backgrounds

**Check:**

- [ ] Body text: 4.5:1 minimum
- [ ] Large text: 3:1 minimum
- [ ] UI components: 3:1 minimum

**Grayscale Test:**

1. Use browser extension or DevTools (Rendering → Emulate vision deficiencies)
2. View site in grayscale

**Check:**

- [ ] Information doesn't depend on color alone
- [ ] Links are distinguishable
- [ ] Status indicators are clear

## Testing Different Disabilities

### Visual

- [ ] Screen reader works
- [ ] High contrast mode works
- [ ] Text scales to 200%
- [ ] Color isn't only indicator

### Motor

- [ ] Full keyboard access
- [ ] Large click targets (44×44px minimum)
- [ ] No time limits or can be extended
- [ ] No fast reactions required

### Cognitive

- [ ] Clear, simple language
- [ ] Consistent navigation
- [ ] Clear error messages
- [ ] No distracting animations
- [ ] Headings and structure are logical

### Auditory

- [ ] Video has captions
- [ ] Audio has transcripts
- [ ] No information in audio only

## Quick Exercise (5 minutes)

Pick a website you use daily and test it:

1. **Automated:** Run Lighthouse accessibility audit
2. **Keyboard:** Navigate with Tab only for 2 minutes
3. **Visual:** Set zoom to 200%

**Count the issues.** Most sites have many.

## Accessibility in CI/CD

Automate what you can:

### Pa11y CI

Tests multiple URLs:

```bash
npm install pa11y-ci --save-dev
```

```json
// .pa11yci.json
{
  "urls": [
    "http://localhost:3000/",
    "http://localhost:3000/about",
    "http://localhost:3000/contact"
  ]
}
```

```bash
# Run in CI
npx pa11y-ci
```

### Axe Core (programmatic)

Test in Jest or other test frameworks:

```javascript
import { axe } from "jest-axe";

test("page should be accessible", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Axe with Playwright

Integrate accessibility testing into your end-to-end tests:

```bash
npm install -D @axe-core/playwright
```

```javascript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('homepage should be accessible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});

// Test specific areas
test('navigation should be accessible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .include('nav') // Only test navigation
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});

// Exclude third-party components you can't control
test('main content accessible', async ({ page }) => {
  await page.goto('http://localhost:3000');
  
  const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude('.third-party-widget')
    .analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

**Benefits of Playwright + Axe:**
- Tests in real browser environments
- Can test authenticated pages
- Can test dynamic states (modals open, forms filled)
- Integrates with existing E2E test suite

### GitHub Actions Example

```yaml
name: Accessibility Tests
on: [push]
jobs:
  a11y:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npx pa11y-ci
```

## What Automated Tools Miss

Automated tools **cannot** check:

- **Context:** Is the alt text meaningful for this image?
- **Usability:** Is the flow confusing?
- **Order:** Does reading order make sense?
- **Language:** Is text clear and simple?
- **Keyboard traps:** Is focus trapped in a modal?
- **Label quality:** Is "Learn more" a good link text here?

**Always test manually.** Automation is the start, not the end.

## Testing Checklist for Release

Before releasing, verify:

**Automated:**

- [ ] Lighthouse accessibility score > 90
- [ ] Axe DevTools shows no violations
- [ ] ESLint accessibility rules pass

**Manual:**

- [ ] Keyboard navigation works
- [ ] Screen reader announces content correctly
- [ ] Zoom to 200% works
- [ ] Color contrast meets WCAG AA
- [ ] Forms have labels and error handling

**Real Users (if possible):**

- [ ] User testing with people with disabilities

## Real User Testing: Why It Matters

Automated tools and keyboard testing are essential, but they can't replace testing with real users who have disabilities.

### The Gap Between Theory and Reality

You can understand accessibility intellectually and test with screen readers yourself (while seeing the screen), but you'll still miss things that only become apparent through real usage.

**Example insights from real user testing:**

- **Visual structure matters:** Things you take for granted seeing all at once aren't obvious when experienced piece by piece through a screen reader
- **Technical solutions don't always work in context:** Some ARIA techniques that work in theory fail in specific screen reader + browser combinations
- **Cognitive load differs:** What seems like "just one more step" to you might be overwhelming for someone with cognitive disabilities
- **Workarounds you don't know exist:** Users develop strategies to work around inaccessible interfaces that you'd never discover through testing alone

### When to Do User Testing

You can't always do formal user testing, but when you can:

- **Major new features** - Before launch
- **Complete redesigns** - Early and often
- **After accessibility improvements** - Verify they actually help
- **Quarterly reviews** - Catch degradation over time

### How to Get Started

- Work with accessibility consulting firms that employ people with disabilities as testers
- Partner with disability advocacy organizations
- Include accessibility requirements in your UX research
- Compensate participants fairly for their time and expertise

**Remember:** People with disabilities are the experts on their own experiences. Listen, learn, and act on their feedback.

## Common Testing Tools Summary

| Tool           | Type      | Best For                 |
| -------------- | --------- | ------------------------ |
| Lighthouse     | Automated | Quick overview           |
| Axe DevTools   | Automated | Detailed issues          |
| NVDA/VoiceOver | Manual    | Screen reader experience |
| Keyboard only  | Manual    | Interaction testing      |
| Color Oracle   | Manual    | Color blind simulation   |
| WAVE           | Automated | Visual overlay of issues |
| Pa11y CI       | Automated | Continuous integration   |

## Learn More

- **[Teaching Accessible Computing - Testing Section](https://bookish.press/tac)** (Free web book)  
  Comprehensive testing strategies and tools.

- **[Axe DevTools Documentation](https://www.deque.com/axe/devtools/)** (~20 min)  
  Learn how to use one of the best automated testing tools.

## Next Steps

If you're working with modern frameworks, there are specific considerations:

Continue to [Modern Frameworks & Accessibility](./a11y-frameworks.md).

Or go back to the [main learning page](./edu.md) to explore other topics.
