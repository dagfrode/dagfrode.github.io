# Accessability testing

## Automatic tests

### As part of testing

Use a tool like SiteImprove or Wave. There are quite a few other alternatives so have a look around to find what tools you like the best. Some tools even help you with manual testing.

SiteImprove also provides tools for scanning public pages and create a report. This is usefull if your solution is a big website with many involved parties resposible for content and changes that can affect accesability.

### As part of the development process

#### Linting

Adding accessability linting provides a convinient reminder of what you can do to make your solutions more accessible as you write them.

One possible linter is [axe DevTools® Linter](https://www.deque.com/axe/devtools/linter/)

#### Automatic tests

There are multiple tools that can be used for accassability testing as part of CI/CD one of the is Playwright 

[Accessibility testing with Playwright](https://playwright.dev/docs/accessibility-testing)


## Manual testing

### Keyboard

- Success Criterion 1.1.1 Non-text Content (A)
    - Images and icons that are content and not purely decoration should have text alternatives
- 

### Structure / markup / screenreader
- Success Criterion 1.3.1 Info and Relationships (A)
    - The makrup represents the presentation. If you removed the css the page could still be understood.
- Success Criterion 1.3.2 Meaningful Sequence (A)
    - if the order the content is precented maters, it should be represented in markup
- Success Criterion 1.3.3 Sensory Characteristics (A)
    - It should be possible to understand and use the webpage without looking or hearing the page
- Success Criterion 1.3.4 Orientation (AA)
    - unless strictly nessessarry, the user should be able to view the webpage in both portrait and landscape
- Success Criterion 1.3.5 Identify Input Purpose (AA)
    - Input fields should have the correct makrup identifing the purpose of the input. label, input type, field tryp given name, runame etc
- Success Criterion 1.4.1 Use of Color (A)
    - Blind and color blind people should be able to use the website. Make sure contant is not dependant on color
    - T - Tur the page greyscale and see if you understand the page
    - T - Do you understand error vs success without colors?

### Time-Based Media (audio / video)
- Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded) (A)
- Success Criterion 1.2.2 Captions (Prerecorded) (A)
- Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)
- Success Criterion 1.2.4 Captions (Live) (AA)
- Success Criterion 1.2.5 Audio Description (Prerecorded)(AA)

