# Tools for inclusive design

## Text Resizing bookmarklet

<a href='javascript:(function () {"use strict";var baseFontSize = parseInt(getComputedStyle(document.body, null)["font-size"]);var scaling = 100;var el = document.createElement("div");el.style.border = "1px solid black";el.innerText = "Shift + scroll to change text size";el.style.position = "fixed";el.style.position = "inline-block";el.style.background = "white";el.style.padding = "10px";el.style.left = "20px";el.style.top = "20px";el.style.zIndex = "10000";document.body.appendChild(el);setTimeout(() => {document.body.removeChild(el);}, 3000);var timer;document.addEventListener("wheel", function (e) {if (!e.shiftKey) return;e.preventDefault();if (e.wheelDelta > 0) {scaling += 25;} else {scaling -= 25;}el.innerHTML = `${scaling.toString()}%`;el.style.left = e.clientX;el.style.top = e.clientY;document.body.appendChild(el);timer = Date.now();setTimeout(() => {if (Date.now() - timer > 800 && document.body.contains(el)) {document.body.removeChild(el);}}, 1000);document.body.style.fontSize = (baseFontSize * scaling) / 100 + "px";});})();)'>Resize Text</a>

```
  (function () {
    "use strict";

    var baseFontSize = parseInt(
      getComputedStyle(document.body, null)["font-size"]
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

      document.body.style.fontSize = (baseFontSize * scaling) / 100 + "px";
    });
  })();
```
