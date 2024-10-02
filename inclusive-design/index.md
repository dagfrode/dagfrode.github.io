# Accessibility testing

## Automatic tests

### As part of testing

Use a tool like SiteImprove or Wave. There are quite a few other alternatives so have a look around to find what tools you like the best. Some tools even help you with manual testing.

SiteImprove also provides tools for scanning public pages and create a report. This is usefull if your solution is a big website with many involved parties resposible for content and changes that can affect accesability.

#### Constrast

<details>
<summary>WCAG</summary>
- Success Criterion 1.4.3 Contrast (Minimum) (AA)
  - design - automated tools
- Success Criterion 1.4.11 Non-text Contrast (AA)
  - the contrast for non text content and and user interface components
</details>

### As part of the development process

#### Linting

Adding accessability linting provides a convinient reminder of what you can do to make your solutions more accessible as you write them.

One possible linter is [axe DevTools® Linter](https://www.deque.com/axe/devtools/linter/)

#### Automatic tests

There are multiple tools that can be used for accassability testing as part of CI/CD one of the is Playwright

[Accessibility testing with Playwright](https://playwright.dev/docs/accessibility-testing)

## Manual testing

### Keyboard and navigation

- Can you use the keyboard to access all functions of the page? No need for the mouse at all? No getting stuck in some input elment or modal?
- Does the order the focus is moved make sense?
- Can you see where the focus is at all times? Even after filling in information?
- Does the webpage stay the same when moving the focus / entering information?

Tips

Use tab, tab + shift, arrow keys, space and enter to navigate the webpage.

Developers: DO NOT make single key shortcuts

<details>
<summary>WCAG</summary>
- Success Criterion 2.1.1 Keyboard (A)
  - all functionality is operable trough a keyboard
- Success Criterion 2.1.2 No Keyboard Trap (A)
- Success Criterion 2.1.4 Character Key Shortcuts (A)
  - no one letter shortcut

- Success Criterion 2.4.3 Focus Order (A)
  - the focus order should make sense by precerving meaning and operability
- Success Criterion 2.4.7 Focus Visible (AA)
  - you should see where the focus is
- Success Criterion 2.4.11 Focus Not Obscured (Minimum)
  - When a user interface component receives keyboard focus, the component is not entirely hidden due to author-created content.
- Success Criterion 3.2.1 On Focus (A)

  - change of focus should not change context
  - the page should be unchanged when moving the focus around as it should never be interpreded as an input action

- Success Criterion 3.2.2 On Input (A)
  - changing a setting should not change the context
  - make it clear to the user if changs of a setting will do major changes to the page they might not observe if they do not see the whole page at once

</details>

#### Naviagtion

- Do you have a "skip to content" button that gets you to the content?
- Is the manu the same in the same order if it is shared accross multiple pages so you can learn where it is without seing it?

<details>
<summary>WCAG</summary>
- Success Criterion 2.4.1 Bypass Blocks (A)
  - bypas content that are repeated on multiple pages
- Success Criterion 3.2.3 Consistent Navigation (AA)
  - the order of the navigation should be the same if it is repeated on multiple pages

</details>

### Pointer

- Can all functionality on the page be used without using a touch screen or stylus? Can user use a mouse and keyboard to operate the page?
- Can the user cancel an action mid-action? Developers: use on `click` or on `mouseUp` not `mouseDown`
- does the page use motion from the device or the user as input? Eg. video of the users actions or tilt of a mobile device to controll the webpage? If so, can it be disabled?
- Can functionality that uses dragging movement be done without clicking and dragging at they same time or by using the keyboard? [dnd kit](https://dndkit.com/) is an example that does this well.
- Would it be possible to use the website with a 24x24 pointer?

- 1.4.13??

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 2.5.1 Pointer Gestures (A)
- Success Criterion 2.5.2 Pointer Cancellation (A)
- Success Criterion 1.4.13 Content on Hover or Focus (AA)
  - tooltips
- Success Criterion 2.5.4 Motion Actuation (A)
  - alternative input to sensory input that ar enot mouse or keyboard
- Success Criterion 2.5.7 Dragging Movements (A)
  - there should be an alternative to dragging that you can do without holding and moving at the same time
  - react dnd does this well
- Success Criterion 2.5.8 Target Size (Minimum) (AA)
  - pointer input should be 24x24 so that people with reduced mobility eg CP or Parkinsons are able to hit the input

### Scale

- does the webpage work when scaled to 400% without loss of functionality or content on a 1280x1024 device? Tables exempt, does the webpage work without horizontal scrolling?
- does the webpage work when increasing the text size to 200% without loss of functionality or content on a 1280x1024 device? Tables exempt, does the webpage work without horizontal scrolling?
- is it possible to increase text spacing, line height, word spacing etc without loss?

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 1.4.4 Resize Text (AA)
  - T - change font size to 200% and make sure you do not lose content or functionality
- Success Criterion 1.4.10 Reflow (AA)
  - content can be presented without scroll in two directions at 400% and 1280x1024
  - tables are excempt
- Success Criterion 1.4.12 Text Spacing (AA)
  - no loss of content or functionality when
    - line height 1.5
    - paragrap space 2
    - letter spacing 0.12
    - word space 0.16

### Structure / markup / screenreader / content

- Does images and icons that comunicate meaning have alt text / aria labels?
- Does images and incons that is purely decorative NOT have alt text / aria label?
- Does

<details>
<summary>WCAG</summary>

- Success Criterion 1.1.1 Non-text Content (A)
  - Images and icons that are content and not purely decoration should have text alternatives
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
  - plan for it in design
- Success Criterion 1.4.5 Images of Text (AA)
  - use text insted of images unless the way the text is presented in the image is adding information sush as in a stylized logo
- Success Criterion 2.4.4 Link Purpose (In Context) (A)
  - The purpose of each link can be determined from the link text alone
- Success Criterion 2.4.6 Headings and Labels (AA)

  - meaningfull heading and labels

- Success Criterion 2.4.2 Page Titled(A)

  - titles that describe the pages topic or purpose

- Success Criterion 2.4.5 Multiple Ways (AA)

  - the webpage should have multiple pages to find a page. site map etc

- Success Criterion 2.5.3 Label in Name (A)

- Success Criterion 3.3.2 Labels or Instructions (A)

  - labels or instructions are provided when content requires user input

- Success Criterion 4.1.2 Name, Role, Value (A)
  - ?

</details>

#### Consistent

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 3.2.6 Consistent Help (A)
  - the user should be able to find the help function if there is one across the whole website. it should be in te same place on all pages
- Success Criterion 3.2.4 Consistent Identification (AA)
  - similar functionality should look the same

#### Language

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 3.1.1 Language of Page (A)
  - the screen reader should be able to tell what language the page is
- Success Criterion 3.1.2 Language of Parts (AA)

  - text bloks in other languages should be marked with the language

#### Error handeling and status messages

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 3.3.1 Error Identification (A)
  - the error is described to hte user in text so they can find the errorus item
- Success Criterion 3.3.3 Error Suggestion (AA)
  - If possible the user should get suggestions for corrections of errors
- Success Criterion 4.1.3 Status Messages (AA)
  - status messages can be detmined trough role for people who use assistive technologies

#### Form

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 3.3.4 Error Prevention (Legal, Financial, Data) (AA)
  - actions that are permanent in some way should make an effort to prevent the user from making mistakes. This includes financial or legal commitments, deleteion of data or other permanent actions.
  - The user should be able to revers the submition, check the data that is submitted or have the submission in some other way confirmed.
- Success Criterion 3.3.7 Redundant Entry (A)
  - Give the input the correct markup to benefit the user from the browsers auto fill feature unless it should be avoided.

### Authentication

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 3.3.8 Accessible Authentication (Minimum) (AA)
  - make sure captchas does not prevent users with cognetive or sensory issues from authenticating

### Time based content (animations, anything moving, blinking or auto updating)

<details>
<summary>WCAG</summary>

</details>

- Success Criterion 2.2.1 Timing Adjustable (A)
  - make sure users have enough time to see the content if it is animated. let them pause or extend viewing time
- Success Criterion 2.2.2 Pause, Stop, Hide (A)
  - let user controll moving, blinking, scrolling, or auto-updating information
- Success Criterion 2.3.1 Three Flashes or Below Threshold (A)
  - more than 3 blinks per seccon can trigger sezures

### Time-Based Media (audio / video)

- Does your application have any video or audio? Then you will need to look into these. We have not gotten around to it just yet as we do not have much of this type of content.

<details>
<summary>WCAG</summary>
- Success Criterion 1.2.1 Audio-only and Video-only (Prerecorded) (A)
- Success Criterion 1.2.2 Captions (Prerecorded) (A)
- Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded) (A)
- Success Criterion 1.2.4 Captions (Live) (AA)
- Success Criterion 1.2.5 Audio Description (Prerecorded)(AA)
- Success Criterion 1.4.2 Audio Control (A)
</details>

kilder

- https://www.w3.org/TR/WCAG22/
- https://design.sparebank1.no/universell-utforming/
- https://www.uio.no/for-ansatte/arbeidsstotte/uu/teste-uu.html
