(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme");
  if (button) {
    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("gdg-theme", next);
      } catch (e) {}
    });
  }

  document.querySelectorAll("[data-copy]").forEach(function (el) {
    el.addEventListener("click", function () {
      var value = el.getAttribute("data-copy");
      var done = function () {
        var prev = el.textContent;
        el.textContent = "Copied";
        window.setTimeout(function () {
          el.textContent = prev;
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(function () {});
      }
    });
  });
})();
