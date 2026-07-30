# Introduction to Accessibility

Accessibility is about fit. When there is a gap between what a person can do and what a system demands, that person is excluded. Closing that gap is what accessibility work is about.

## The Gap Model

Disability can be understood as the gap between a person's ability and the demands of a given context. This framing shifts focus from the person to the interaction between person and environment — and opens a much more actionable design space.

The same person may be excluded in one context and not another. A broken arm makes a touchscreen hard to use. A crowded street makes audio directions hard to follow. Poor lighting makes a low-contrast UI illegible. Disability is not a fixed property of a person — it is a relationship between ability and context.

## Permanent, Temporary, and Situational Impairment

A useful way to think about who benefits from accessible design:

- **Permanent** — a person who is deaf
- **Temporary** — a person with an ear infection
- **Situational** — a person watching video in a noisy environment

The same solution — captions, visual cues, text alternatives — serves all three. When we design for the permanent case, we solve for a much larger population than we initially assumed. This framing of [permanent, temporary, and situational impairment](https://uxdesign.cc/understanding-accessibility-makes-you-a-better-insert-your-name-here-1f7a15c50e7f) is a useful lens for the rest of this text.

## Models of Disability

How we frame disability shapes how we design.

The **medical model** treats disability as a defect in the person — something to diagnose and fix. The [**social model**](https://doi.org/10.1080/09687599.2013.818773) argues the opposite: disability is created by barriers in society. A wheelchair user is not disabled by their body — they are disabled by the absence of ramps.

The **biopsychosocial model**, used by the WHO in its [International Classification of Functioning (ICF)](https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health), synthesizes both. Disability emerges from the interaction between a health condition, personal factors, and the environment. This is the most complete framing for design work.

## Universal and Inclusive Design

**Universal Design** is the idea that products and environments should work for the widest possible range of people without adaptation or specialized versions. Its seven principles cover equitable use, flexibility in use, simple and intuitive operation, perceptible information, tolerance for error, low physical effort, and appropriate size and space.

**Inclusive Design** takes a related but distinct approach: start from the people most excluded, solve for them, and let the solutions extend outward. [Microsoft's framing](https://inclusive.microsoft.design/articles/inclusive-101-guidebook/) — "solve for one, extend to many" — captures this well. A better text alternative for a screen reader user tends to improve clarity for everyone.

## The Curb Cut Effect

Curb cuts were added to sidewalks for wheelchair users. They also made life easier for strollers, delivery carts, and cyclists. This pattern repeats across accessibility work: features designed for people with disabilities tend to benefit everyone.

Captions were designed for deaf users. They are now widely used for comprehension, language learning, and watching video in noisy environments. This is the curb cut effect, and it is one of the strongest practical arguments for building accessibility in from the start.

## WCAG — A Baseline, Not a Ceiling

The Web Content Accessibility Guidelines (WCAG) are the international standard for digital accessibility. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) is the current stable version; [WCAG 3](https://www.w3.org/WAI/standards-guidelines/wcag/wcag3-intro/) is in active development. Before applying any of it, [How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/) is essential reading.

WCAG organizes requirements around four principles, often called **POUR**:

- **Perceivable** — all information is available to the senses the user has
- **Operable** — all interface components can be operated
- **Understandable** — content and behavior is predictable and clear
- **Robust** — content works across the range of assistive technologies

> You can be compliant with WCAG but still have a webpage that is not accessible to most people.

WCAG is a legal and regulatory baseline in many countries, including Norway (WCAG 2.1 level AA is required under the Norwegian Accessibility Regulation). It is a good starting point. It is not a complete picture of accessibility.

## Beyond WCAG: Design Principles Worth Knowing

WCAG is strongest for sensory and motor impairments. Cognitive accessibility — how well a design supports memory, attention, and comprehension — is harder to test automatically and less fully covered by any standard.

[**Cognitive load**](https://doi.org/10.1207/S15326985EP3801_1) — every interface places a mental burden on the user ([Sweller's original work](https://doi.org/10.1016/0364-0213%2888%2990023-7) introduced the idea). Reducing unnecessary complexity helps everyone, and is often the difference between usable and unusable for people with cognitive or attention-related challenges.

**Progressive enhancement** — build a working baseline accessible to all, then layer richer features on top. The baseline is not a fallback; it is the foundation.

**Nothing About Us Without Us** — people with disabilities should be co-designers of the systems they use. This is both a principle from the disability rights movement and practical design wisdom: lived experience surfaces failures that automated testing never will.

## Challenges, Not Categories

A common trap in accessibility education is organizing the field around disability categories — visual, auditory, motor, cognitive. This leads to a mental model where accessibility is a checklist of conditions to accommodate.

A more productive framing is to start from challenges: what makes this task hard? Who struggles with it, and why? This question applies to everyone, not only people with a diagnosed disability. It keeps focus on the design problem rather than on the person.

> The goal is not to design for disabilities. It is to design for the full range of human variation.

This is also why simulation and game-based learning are valuable approaches in this space — they create direct experience of specific challenges rather than abstract categories. A quick demonstration: [what dyslexia feels like](https://geon.github.io/programming/2016/03/03/dsxyliea) makes a reading challenge visceral in a way a description cannot, and the consequences are real — [someone lost their job because IT systems were inaccessible](https://www.nrk.no/trondelag/birgit-risholt-blei-ufor-fra-jobben-i-sintef-mot-sin-vilje-_-it-systema-er-ikkje-universelt-utforma-1.17661414) (Norwegian). For a deeper treatment, [Teaching Accessible Computing](https://bookish.press/tac) is a useful web book for both students and educators.

For a curated set of tools, games, and further reading, see the [resources page](../resources).
