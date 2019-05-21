var loadScript = new function () {
    var script = document.createElement("script");
    script.src = "/assets/js/external/mathjax/MathJax.js?config=AM_HTMLorMML-full&delayStartupUntil=configured";
    document.body.appendChild(script);
}();