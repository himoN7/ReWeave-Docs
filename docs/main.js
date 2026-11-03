(function () {
  const root = document.documentElement;
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const narrowQuery = window.matchMedia("(max-width: 800px)");
  const fineQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

  const bar = document.getElementById("topbar");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const filmA = document.getElementById("film-a");
  const filmB = document.getElementById("film-b");
  const filmButton = document.getElementById("film-toggle");
  const media = document.querySelector(".hero-media");
  const pin = document.getElementById("gallery");
  const track = document.getElementById("gallery-track");
  const progress = document.getElementById("gallery-progress");
  const rail = document.getElementById("scroll-rail");
  const stroke = document.getElementById("scroll-stroke");
  const head = document.getElementById("scroll-head");

  let playing = false;
  let showingA = true;
  let timer = 0;
  let frame = 0;

  function isReduced() {
    return root.classList.contains("reduced");
  }

  function syncMotionClass() {
    const reduced = motionQuery.matches;
    root.classList.toggle("reduced", reduced);
    root.classList.toggle("motion", !reduced);
  }

  function visibleFilm() {
    return showingA ? filmA : filmB;
  }

  function hiddenFilm() {
    return showingA ? filmB : filmA;
  }

  function syncFilmButton() {
    const active = !filmA.paused || !filmB.paused;
    playing = active;
    filmButton.textContent = active ? "Pause film" : "Play film";
  }

  function stopCrossfade() {
    if (timer) {
      window.clearInterval(timer);
      timer = 0;
    }
  }

  function crossfade() {
    if (isReduced() || !playing) return;
    const incoming = hiddenFilm();
    if (incoming.readyState < 2) return;
    incoming.classList.add("is-on");
    visibleFilm().classList.remove("is-on");
    showingA = !showingA;
  }

  function armCrossfade() {
    stopCrossfade();
    if (isReduced() || !playing) return;
    timer = window.setInterval(crossfade, 8000);
  }

  function pauseFilms() {
    playing = false;
    stopCrossfade();
    filmA.pause();
    filmB.pause();
    syncFilmButton();
  }

  function playFilms() {
    playing = true;
    visibleFilm().muted = true;
    visibleFilm().play().catch(function () { syncFilmButton(); });
    if (!isReduced()) {
      hiddenFilm().muted = true;
      hiddenFilm().play().catch(function () {});
      armCrossfade();
    }
    syncFilmButton();
  }

  function setProgress(value) {
    const next = Math.min(1, Math.max(0, value));
    progress.style.transform = "scaleX(" + next + ")";
  }

  function layoutGallery() {
    const usePin = !narrowQuery.matches && !isReduced();
    if (!usePin) {
      pin.classList.remove("is-pinned");
      pin.style.height = "";
      track.style.transform = "";
      const max = Math.max(0, track.scrollWidth - track.clientWidth);
      setProgress(max > 0 ? track.scrollLeft / max : 0);
      return;
    }

    pin.classList.add("is-pinned");
    const view = track.parentElement.clientWidth;
    const extra = Math.max(0, track.scrollWidth - view);
    const height = Math.round(window.innerHeight + extra);
    if (pin.style.height !== height + "px") pin.style.height = height + "px";
    const distance = Math.max(1, pin.offsetHeight - window.innerHeight);
    const scrolled = Math.min(distance, Math.max(0, window.scrollY - pin.offsetTop));
    track.style.transform = "translate3d(" + ((-scrolled / distance) * extra).toFixed(2) + "px,0,0)";
    setProgress(scrolled / distance);
  }

  function layoutLine() {
    const height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    rail.style.height = height + "px";
    if (isReduced()) {
      stroke.style.height = "100%";
      head.style.opacity = "0";
      return;
    }
    const max = Math.max(1, height - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / max));
    const lead = window.scrollY + (0.08 + progress * 0.84) * window.innerHeight;
    const drawn = Math.max(0, Math.min(height, lead));
    stroke.style.height = drawn + "px";
    head.style.opacity = "1";
    head.style.top = drawn + "px";
  }

  function onScroll() {
    bar.classList.toggle("is-solid", window.scrollY > 12);
    layoutLine();
    if (!isReduced()) {
      const amount = Math.min(1, window.scrollY / Math.max(1, window.innerHeight));
      media.style.transform = "scale(" + (1 + amount * 0.07).toFixed(4) + ")";
    } else {
      media.style.transform = "";
    }
    layoutGallery();
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
    bar.classList.remove("is-open");
  }

  syncMotionClass();
  filmA.muted = true;
  filmB.muted = true;
  filmA.addEventListener("play", syncFilmButton);
  filmA.addEventListener("pause", syncFilmButton);
  filmB.addEventListener("play", syncFilmButton);
  filmB.addEventListener("pause", syncFilmButton);

  if (isReduced()) {
    filmA.preload = "metadata";
    filmB.preload = "none";
    filmA.pause();
    filmB.pause();
    playing = false;
    syncFilmButton();
  } else {
    filmB.preload = "auto";
    playFilms();
  }

  filmButton.addEventListener("click", function () {
    if (playing) pauseFilms();
    else playFilms();
  });

  toggle.addEventListener("click", function () {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", open ? "false" : "true");
    toggle.textContent = open ? "Menu" : "Close";
    bar.classList.toggle("is-open", !open);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  track.addEventListener("scroll", function () {
    if (pin.classList.contains("is-pinned")) return;
    const max = Math.max(0, track.scrollWidth - track.clientWidth);
    setProgress(max > 0 ? track.scrollLeft / max : 0);
  }, { passive: true });

  window.addEventListener("scroll", function () {
    if (frame) return;
    frame = window.requestAnimationFrame(function () {
      frame = 0;
      onScroll();
    });
  }, { passive: true });

  window.addEventListener("resize", onScroll);
  window.addEventListener("load", onScroll);
  narrowQuery.addEventListener("change", onScroll);
  motionQuery.addEventListener("change", function () {
    syncMotionClass();
    if (isReduced()) pauseFilms();
    onScroll();
  });

  if (fineQuery.matches) {
    window.addEventListener("pointermove", function (event) {
      if (isReduced()) return;
      document.body.style.setProperty("--gx", (event.clientX / Math.max(1, window.innerWidth)) * 100 + "%");
      document.body.style.setProperty("--gy", (event.clientY / Math.max(1, window.innerHeight)) * 100 + "%");
      const frameEl = event.target.closest && event.target.closest(".frame");
      if (!frameEl) return;
      const rect = frameEl.getBoundingClientRect();
      frameEl.style.setProperty("--px", ((event.clientX - rect.left) / rect.width) * 100 + "%");
      frameEl.style.setProperty("--py", ((event.clientY - rect.top) / rect.height) * 100 + "%");
    }, { passive: true });
  }

  track.querySelectorAll("img").forEach(function (img) {
    if (!img.complete) img.addEventListener("load", onScroll, { once: true });
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(onScroll);
  onScroll();
}());
