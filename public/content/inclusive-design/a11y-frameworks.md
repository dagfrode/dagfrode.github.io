# Accessibility in Modern Frontend Frameworks

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Single-page applications (SPAs) introduce unique accessibility challenges. Here's how to address them.

## Why SPAs Are Different

Traditional websites:

- New page = new page load
- Browser handles focus reset
- URL changes trigger screen reader announcements

SPAs:

- Content changes without page reload
- You must manage focus manually
- You must announce content changes
- Browser history doesn't always help users

**The challenge:** Making dynamic updates accessible.

## Common SPA Accessibility Issues

### Issue 1: Focus Not Managed

When navigating between views, focus doesn't move automatically:

```javascript
// ❌ Bad: Focus stays on clicked link
function navigate(path) {
  router.push(path);
  // User has no idea where they are
}

// ✅ Good: Move focus to new content
function navigate(path) {
  router.push(path);

  // Wait for render
  nextTick(() => {
    const heading = document.querySelector("h1");
    heading.tabIndex = -1;
    heading.focus();
  });
}
```

### Issue 2: Route Changes Not Announced

Screen readers don't know content changed:

```javascript
// ✅ Good: Announce route changes
function navigate(path) {
  router.push(path);

  // Update page title (screen readers announce this)
  document.title = `${newPageTitle} - Site Name`;

  // Announce change
  const announcement = document.getElementById("route-announcer");
  announcement.textContent = `Navigated to ${newPageTitle}`;
}
```

```html
<!-- Add to app root -->
<div
  id="route-announcer"
  role="status"
  aria-live="polite"
  aria-atomic="true"
  style="position: absolute; left: -9999px;"
></div>
```

### Issue 3: Loading States Not Announced

Users don't know content is loading:

```javascript
// ✅ Good: Announce loading
function fetchData() {
  setLoading(true);
  announceToScreenReader("Loading content");

  fetch("/api/data").then((data) => {
    setData(data);
    announceToScreenReader("Content loaded");
    setLoading(false);
  });
}
```

```html
<!-- Loading indicator -->
<div role="status" aria-live="polite" aria-busy="{loading}">
  {loading ? 'Loading...' : ''}
</div>
```

## React-Specific Tips

### Focus Management

```jsx
import { useRef, useEffect } from "react";

function Page() {
  const headingRef = useRef(null);

  useEffect(() => {
    // Focus heading when component mounts
    headingRef.current?.focus();
  }, []);

  return (
    <h1 ref={headingRef} tabIndex={-1}>
      Page Title
    </h1>
  );
}
```

### Live Regions

```jsx
function LiveRegion({ message }) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

// Usage
function Form() {
  const [status, setStatus] = useState("");

  return (
    <>
      <form onSubmit={handleSubmit}>{/* form fields */}</form>
      <LiveRegion message={status} />
    </>
  );
}
```

### Fragments and Semantic HTML

```jsx
// ❌ Bad: Extra div breaks semantics
function List() {
  return (
    <ul>
      {items.map((item) => (
        <div key={item.id}>
          <li>{item.name}</li>
        </div>
      ))}
    </ul>
  );
}

// ✅ Good: Fragment doesn't add extra nodes
function List() {
  return (
    <ul>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <li>{item.name}</li>
        </React.Fragment>
      ))}
    </ul>
  );
}
```

## Vue-Specific Tips

### Focus Management

```vue
<template>
  <h1 ref="heading" tabindex="-1">{{ title }}</h1>
</template>

<script setup>
import { ref, onMounted } from "vue";

const heading = ref(null);

onMounted(() => {
  heading.value?.focus();
});
</script>
```

### Announce Route Changes

```javascript
// router.js
router.afterEach((to) => {
  // Update page title
  document.title = to.meta.title || "App";

  // Announce to screen readers
  nextTick(() => {
    const announcement = document.getElementById("route-announcer");
    if (announcement) {
      announcement.textContent = `Navigated to ${to.meta.title}`;
    }
  });
});
```

## Common Component Patterns

### Modal/Dialog

```jsx
function Modal({ isOpen, onClose, children }) {
  const previousFocus = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Save previous focus
      previousFocus.current = document.activeElement;

      // Focus modal
      modalRef.current?.focus();

      // Trap focus in modal
      document.body.style.overflow = "hidden";
    } else {
      // Restore focus
      previousFocus.current?.focus();
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      <button onClick={onClose} aria-label="Close">
        ×
      </button>
      {children}
    </div>
  );
}
```

**Better:** Use native `<dialog>` element if possible.

### Tabs

```jsx
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`panel-${tab.id}`}
          hidden={activeTab !== index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
```

## Client-Side Routing

### Update Document Title

```javascript
// React Router example
function App() {
  useEffect(() => {
    // Update title on route change
    document.title = getCurrentRouteTitle();
  }, [location]);
}
```

### Announce Navigation

Create a route announcer component:

```jsx
function RouteAnnouncer() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage(`Navigated to ${getPageTitle()}`);
  }, [location]);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{
        position: "absolute",
        left: "-9999px",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      }}
    >
      {message}
    </div>
  );
}
```

## Hydration and SSR

Server-side rendering can help accessibility:

**Benefits:**

- Content available immediately
- Search engines can index
- Works without JavaScript
- Faster perceived performance

**Watch out for:**

- Hydration mismatches (can break semantics)
- Client-only features that break without JS

```jsx
// Check if client-side
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return children;
}
```

## Quick Exercise (10 minutes)

Test your SPA:

1. **Navigation:** Click through pages. Does focus move? Is it announced?
2. **Forms:** Submit a form. Is the result announced?
3. **Modals:** Open a modal. Where does focus go? Can you close with Escape? Where does focus return?
4. **Loading:** Trigger loading state. Is it announced to screen readers?

Fix one issue.

## Framework-Specific Resources

### React

- [React Accessibility Docs](https://react.dev/learn/accessibility)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [Reach UI](https://reach.tech/) - Accessible component library

### Vue

- [Vue Accessibility Docs](https://vuejs.org/guide/best-practices/accessibility.html)
- [vue-axe](https://github.com/vue-a11y/vue-axe) - Runtime accessibility testing
- [Vue A11y Project](https://vue-a11y.com/)

### Svelte

- [Svelte Accessibility Warnings](https://svelte.dev/docs/accessibility-warnings)
- Built-in a11y warnings at compile time

## Testing SPAs

Additional testing for SPAs:

- [ ] Navigation announces page changes
- [ ] Focus moves appropriately
- [ ] Loading states are announced
- [ ] Dynamic content updates are announced
- [ ] Modals trap focus and restore on close
- [ ] Browser back/forward works
- [ ] Deep links work

Use tools:

- React DevTools (check component props)
- Vue DevTools (check component state)
- Axe DevTools (check rendered output)

## Learn More

- **[Teaching Accessible Computing - SPA Section](https://bookish.press/tac)** (Free web book)  
  Deep dive into SPA accessibility patterns.

## Next Steps

You now have a solid foundation in accessibility!

- Go back to [main learning page](./edu.md) to review topics
- Start applying what you learned in your projects
- Join accessibility communities to keep learning
- Test with real users when possible

Remember: Accessibility is a practice, not a checklist. Keep learning and improving!
