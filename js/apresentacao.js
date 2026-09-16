(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  const contador = document.getElementById("contador");
  const barra = document.getElementById("barra-progresso");
  const btnPrev = document.getElementById("btn-anterior");
  const btnNext = document.getElementById("btn-proximo");
  const btnFonteMenos = document.getElementById("fonte-menos");
  const btnFonteMais = document.getElementById("fonte-mais");
  const btnContraste = document.getElementById("contraste");
  const btnTela = document.getElementById("tela-cheia");
  let atual = 0;
  let escala = 100;

  function irPara(indice, atualizarHash) {
    atual = Math.max(0, Math.min(total - 1, indice));
    slides.forEach((slide, i) => {
      slide.classList.toggle("ativa", i === atual);
      slide.setAttribute("aria-hidden", i === atual ? "false" : "true");
    });
    if (contador) contador.textContent = (atual + 1) + " / " + total;
    if (barra) barra.style.width = ((atual + 1) / total * 100) + "%";
    if (btnPrev) btnPrev.disabled = atual === 0;
    if (btnNext) btnNext.disabled = atual === total - 1;
    if (atualizarHash !== false) {
      history.replaceState(null, "", "#" + (atual + 1));
    }
    slides[atual].scrollTop = 0;
  }

  function lerHash() {
    const n = parseInt(location.hash.replace("#", ""), 10);
    return Number.isFinite(n) ? n - 1 : 0;
  }

  btnPrev && btnPrev.addEventListener("click", () => irPara(atual - 1));
  btnNext && btnNext.addEventListener("click", () => irPara(atual + 1));

  document.addEventListener("keydown", (e) => {
    if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) return;
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
      e.preventDefault();
      irPara(atual + 1);
    } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
      e.preventDefault();
      irPara(atual - 1);
    } else if (e.key === "Home") {
      irPara(0);
    } else if (e.key === "End") {
      irPara(total - 1);
    }
  });

  let toqueX = null;
  document.addEventListener("touchstart", (e) => {
    toqueX = e.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (toqueX === null) return;
    const dx = e.changedTouches[0].screenX - toqueX;
    if (Math.abs(dx) > 50) irPara(dx < 0 ? atual + 1 : atual - 1);
    toqueX = null;
  });

  window.addEventListener("hashchange", () => irPara(lerHash(), false));

  function aplicarFonte() {
    document.documentElement.style.setProperty("--font-scale", escala + "%");
  }
  btnFonteMenos && btnFonteMenos.addEventListener("click", () => {
    escala = Math.max(90, escala - 10);
    aplicarFonte();
  });
  btnFonteMais && btnFonteMais.addEventListener("click", () => {
    escala = Math.min(130, escala + 10);
    aplicarFonte();
  });
  btnContraste && btnContraste.addEventListener("click", () => {
    const ativo = document.body.classList.toggle("alto-contraste");
    btnContraste.setAttribute("aria-pressed", ativo ? "true" : "false");
  });
  btnTela && btnTela.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen();
    }
  });

  irPara(lerHash(), false);
})();
