// Choix du thème clair / sombre, mémorisé dans le navigateur du visiteur.
// Chargé dans le <head> pour appliquer le thème avant l'affichage (pas de flash).
(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  function current() {
    return root.dataset.theme || (systemDark.matches ? "dark" : "light");
  }

  var sun = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    if (!button) return;

    function sync() {
      var dark = current() === "dark";
      button.innerHTML = dark ? sun : moon;
      button.setAttribute("aria-label", dark ? "Passer en mode clair" : "Passer en mode sombre");
      button.title = dark ? "Mode clair" : "Mode sombre";
    }

    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });
    systemDark.addEventListener("change", sync);
    sync();
  });
})();
