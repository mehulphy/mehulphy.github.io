(function () {
  var root = document.documentElement;

  // ----- Theme toggle: an explicit choice is saved; otherwise follow the system.
  var toggle = document.getElementById('themeToggle');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)');
  function currentTheme() {
    return root.getAttribute('data-theme') || (systemDark.matches ? 'dark' : 'light');
  }
  function updateToggle() {
    if (toggle) toggle.textContent = currentTheme() === 'dark' ? 'light' : 'dark';
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      updateToggle();
    });
  }
  systemDark.addEventListener && systemDark.addEventListener('change', updateToggle);
  updateToggle();

  // ----- Year / subject filters on the reflections page.
  var scope = document.querySelector('[data-filterable]');
  if (scope) {
    var params = new URLSearchParams(location.search);
    var state = { year: params.get('year') || '', tag: params.get('tag') || '' };
    var items = scope.querySelectorAll('[data-item]');
    var groups = scope.querySelectorAll('[data-group]');
    var yearChips = scope.querySelectorAll('[data-year]:not([data-item])');
    var tagChips = scope.querySelectorAll('[data-tag]');
    var count = scope.querySelector('[data-count]');
    var clear = scope.querySelector('[data-clear]');
    var empty = scope.querySelector('[data-empty]');

    function labelFor(tag) {
      for (var i = 0; i < tagChips.length; i++) {
        if (tagChips[i].getAttribute('data-tag') === tag) {
          var name = tagChips[i].querySelector('.tag-card-name');
          return (name || tagChips[i]).textContent.trim();
        }
      }
      return tag;
    }

    function render() {
      var shown = 0;
      items.forEach(function (el) {
        var tags = (el.getAttribute('data-tags') || '').split('|');
        var ok = (!state.year || el.getAttribute('data-year') === state.year) &&
                 (!state.tag || tags.indexOf(state.tag) !== -1);
        el.hidden = !ok;
        if (ok) shown++;
      });
      groups.forEach(function (g) {
        g.hidden = !g.querySelector('[data-item]:not([hidden])');
      });
      yearChips.forEach(function (c) {
        c.classList.toggle('is-active', c.getAttribute('data-year') === state.year);
      });
      tagChips.forEach(function (c) {
        c.classList.toggle('is-active', c.getAttribute('data-tag') === state.tag);
      });
      scope.classList.toggle('has-tag-filter', !!state.tag);
      if (count) {
        count.textContent = shown + (shown === 1 ? ' post' : ' posts') +
          (state.tag ? ' in ' + labelFor(state.tag) : '') +
          (state.year ? ' from ' + state.year : '');
      }
      if (clear) clear.hidden = !state.year && !state.tag;
      if (empty) empty.hidden = shown > 0;

      var q = new URLSearchParams();
      if (state.year) q.set('year', state.year);
      if (state.tag) q.set('tag', state.tag);
      var qs = q.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    }

    yearChips.forEach(function (c) {
      c.addEventListener('click', function () { state.year = c.getAttribute('data-year'); render(); });
    });
    tagChips.forEach(function (c) {
      c.addEventListener('click', function () {
        var t = c.getAttribute('data-tag');
        state.tag = state.tag === t ? '' : t;
        render();
      });
    });
    if (clear) clear.addEventListener('click', function () { state.year = ''; state.tag = ''; render(); });
    render();
  }

  // ----- Email links: the address is assembled only when clicked.
  document.querySelectorAll('.js-email').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var rev = function (t) { return t.split('').reverse().join(''); };
      e.preventDefault();
      window.location.href = 'mailto:' + rev(a.getAttribute('data-u')) + '@' + rev(a.getAttribute('data-d'));
    });
  });

  // ----- Poetry page: show one language at a time.
  var poemScope = document.querySelector('[data-poem-filter]');
  if (poemScope) {
    var tabs = poemScope.querySelectorAll('[data-lang]');
    var groupsByLang = poemScope.querySelectorAll('[data-lang-group]');
    var showLang = function (lang) {
      tabs.forEach(function (t) { t.classList.toggle('is-active', t.getAttribute('data-lang') === lang); });
      groupsByLang.forEach(function (g) { g.hidden = !!lang && g.getAttribute('data-lang-group') !== lang; });
      var q = new URLSearchParams(location.search);
      if (lang) q.set('lang', lang); else q.delete('lang');
      var qs = q.toString();
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { showLang(t.getAttribute('data-lang')); }); });
    showLang(new URLSearchParams(location.search).get('lang') || '');
  }
})();
