# Tools for inclusive design

## Text Resizing bookmarklet

A bookmarklet is JavaScript that you can add as a bookmark. Just drag and drop the following link in your bookmark bar and you will be able to change the root font size on any page. The bookmarklet does not use any external code. The code is in the accordian futher down.

The bookmarklet works by setting up shift + scroll to change the font size in the same way ctrl + scroll changes zoom.

<a href='javascript:(function () {"use strict";var baseFontSize = parseInt(getComputedStyle(document.documentElement, null)["font-size"]);var scaling = 100;var el = document.createElement("div");el.style.border = "1px solid black";el.innerText = "Shift + scroll to change text size";el.style.position = "fixed";el.style.position = "inline-block";el.style.background = "white";el.style.padding = "10px";el.style.left = "20px";el.style.top = "20px";el.style.zIndex = "10000";document.body.appendChild(el);setTimeout(() => {document.body.removeChild(el);}, 3000);var timer;document.addEventListener("wheel", function (e) {if (!e.shiftKey) return;e.preventDefault();if (e.wheelDelta > 0) {scaling += 25;} else {scaling -= 25;}el.innerHTML = `${scaling.toString()}%`;el.style.left = e.clientX;el.style.top = e.clientY;document.body.appendChild(el);timer = Date.now();setTimeout(() => {if (Date.now() - timer > 800 && document.body.contains(el)) {document.body.removeChild(el);}}, 1000);document.documentElement.style.fontSize = (baseFontSize * scaling) / 100 + "px";});})();'>Resize Text</a>

<br/>
<br/>
<br/>
<br/>

<details>
<summary>Code</summary>
```
  (function () {
    "use strict";

    var baseFontSize = parseInt(
      getComputedStyle(document.documentElement, null)["font-size"]
    );
    var scaling = 100;

    var el = document.createElement("div");
    el.style.border = "1px solid black";
    el.innerText = "Shift + scroll to change text size";
    el.style.position = "fixed";
    el.style.position = "inline-block";
    el.style.background = "white";
    el.style.padding = "10px";
    el.style.left = "20px";
    el.style.top = "20px";
    el.style.zIndex = "10000";
    document.body.appendChild(el);

    setTimeout(() => {
      document.body.removeChild(el);
    }, 3000);

    var timer;

    document.addEventListener("wheel", function (e) {
      if (!e.shiftKey) return;
      e.preventDefault();

      if (e.wheelDelta > 0) {
        scaling += 25;
      } else {
        scaling -= 25;
      }
      el.innerHTML = `${scaling.toString()}%`;
      el.style.left = e.clientX;
      el.style.top = e.clientY;
      document.body.appendChild(el);
      timer = Date.now();
      setTimeout(() => {
        if (Date.now() - timer > 800 && document.body.contains(el)) {
          document.body.removeChild(el);
        }
      }, 1000);

      document.documentElement.style.fontSize = (baseFontSize * scaling) / 100 + "px";
    });

})();

```
</details>

