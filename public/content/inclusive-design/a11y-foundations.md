# Accessibility Foundations

**Note:** This guide was generated based on material and resources compiled by Dag Frode, restructured and rewritten by Claude Sonnet 4.5, and proofread by Dag.

---

Understanding why accessibility matters starts with empathy—experiencing how others interact with the web.

## It's Normal to Feel Overwhelmed

Accessibility can feel confusing and overwhelming—even for experienced developers. You're not alone in this feeling.

**Common reactions:**

- "There's so much to learn!"
- "I've read about this before, but I still feel lost when I need to implement it"
- "Where do I even start?"
- "Am I doing this right?"

This is normal. Accessibility is a complex, multifaceted topic that intersects with design, development, content, and user experience. Nobody masters it overnight.

**The good news:** You don't need to know everything to start making a difference. Small improvements matter. Learning to use semantic HTML correctly solves most problems. Testing with a keyboard for 5 minutes reveals issues you can fix immediately.

**Remember:** Accessibility is a practice, not a destination. Start small, keep learning, and improve with each project.

## What Is Accessibility?

Web accessibility means building digital products that work for everyone, regardless of how they interact with technology. It's not just about screen readers—it's about:

- People who can't use a mouse
- People with cognitive differences
- People with color blindness
- People using outdated browsers or slow connections
- People in bright sunlight who can't see their screen
- People with temporary injuries (broken arm, eye surgery)

**Key insight:** Accessibility improves usability for everyone.

## Types of Disabilities

Understanding the range of disabilities helps you design better solutions:

### Visual

- Blindness (screen reader users)
- Low vision (need magnification/zoom)
- Color blindness (can't distinguish certain colors)

### Motor

- Cannot use a mouse (keyboard-only navigation)
- Tremors or limited precision
- One-handed usage

### Auditory

- Deaf or hard of hearing
- Need captions and transcripts

### Cognitive & Neurodiversity

- ADHD (easily distracted, need clear structure)
- Dyslexia (struggle with reading)
- Autism (sensitive to motion, need predictability)
- Memory issues
- Learning disabilities

### Permanent, Temporary, Situational

Microsoft's inclusive design framework shows disability as a spectrum:

- **Permanent:** Lost an arm
- **Temporary:** Broken arm
- **Situational:** Holding a baby

All three need one-handed interfaces. [Learn more about this model](https://uxdesign.cc/understanding-accessibility-makes-you-a-better-insert-your-name-here-1f7a15c50e7f) (~5 min read).

## Statistics That Matter

- ~15-20% of the population has some form of disability ([NHF Statistics](https://nhf.no/for-tillitsvalgte/abc-om-nhf/tall-og-fakta/))
- In Norway, hundreds of thousands of people have visual, motor, or cognitive disabilities ([Bufdir statistics](https://www.bufdir.no/statistikk-og-analyse/funksjonsnedsettelse/begreper-kunnskapsgrunnlag/))
- This isn't a niche—it's a significant portion of your users

## Real-World Impact

When systems aren't accessible, people lose their jobs. Read this story about [someone who lost their IT job because the systems weren't accessible](https://www.nrk.no/trondelag/birgit-risholt-blei-ufor-fra-jobben-i-sintef-mot-sin-vilje-_-it-systema-er-ikkje-universelt-utforma-1.17661414) (~8 min read, Norwegian).

This is why accessibility isn't optional—it's about people's ability to work and participate in society.

## Common Myths

❌ **"Accessibility is just for blind people"**  
Reality: Most accessibility features benefit people without disabilities too.

❌ **"Accessibility makes things ugly"**  
Reality: Good design is accessible design. They're not in conflict.

❌ **"We don't have users with disabilities"**  
Reality: You do. They're just currently excluded by your interface.

❌ **"Accessibility is expensive"**  
Reality: Fixing it later is expensive. Building it in from the start is not.

❌ **"Automated tools can check accessibility"**  
Reality: Automated tools catch ~30% of issues. Manual testing is essential.

## Quick Exercise (5 minutes)

1. **Experience dyslexia:** Visit [this dyslexia simulation](https://geon.github.io/programming/2016/03/03/dsxyliea) and try to read
2. **Try keyboard navigation:** Unplug your mouse and navigate a website using only Tab, Shift+Tab, Enter, and arrow keys
3. **Reflect:** How did it feel? What was frustrating?

## Accessibility vs Usability vs Inclusive Design

- **Usability:** Can people use your product effectively?
- **Accessibility:** Can people with disabilities use your product?
- **Inclusive Design:** Designing for a diversity of people from the start

They overlap significantly. Good accessibility improves usability for everyone.

## Why This Matters to You

**Ethically:** Everyone deserves equal access to information and services.

**Legally:** Many countries require accessibility (EU's EN 301 549, US ADA). Non-compliance can result in lawsuits.

**Business:** You're excluding 15-20% of potential users. Accessible sites also tend to have better SEO and performance.

**Quality:** Accessibility is a sign of professional, well-crafted software.

## Learn More

- **[How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/)** (~30 min)  
  W3C's excellent overview of different disabilities and how people adapt. Real stories and practical examples.

- **[Types of Disabilities and Barriers](https://pressbooks.library.torontomu.ca/wafd/chapter/types-of-disabilities-and-barriers/#Everyone)** (~15 min)  
  Comprehensive breakdown of disability types and the barriers they face.

## Next Steps

Ready to learn what standards exist? Continue to [Standards & Guidelines](./a11y-standards.md).

Want to start coding? Jump to [Semantic HTML](./a11y-semantic-html.md) for immediate impact.
