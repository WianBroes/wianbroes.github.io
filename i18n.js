(function () {
  const translations = {
    en: {
      "meta.title": "Wian Broes — Indie developer",
      "meta.description": "Wian Broes, indie Android developer. InkOrb and KidOrb: simple drawing apps, no ads, no tracking.",
      "hero.tagline": "Indie Android developer. Simple, honest apps — no ads, no accounts, no tracking.",
      "hero.cta": "See the apps",
      "inkorb.tag": "Physics-based ball painting: layers, pigment mixing, export.",
      "inkorb.desc": "A ball rolls across the canvas and leaves a trail of paint behind it — precise or chaotic, depending on speed and gesture. Layers, a pigment mixer, several customizable balls, image export. No ads, no accounts, no network connection.",
      "kidorb.tag": "Calm painting for kids: roll a ball of color across the screen.",
      "kidorb.desc": "A stripped-down version of the same engine, made for young children: no complicated text, no levels to unlock, no pressure. One simple, satisfying gesture. No ads, no accounts, works offline.",
      "app.status": "🔒 In closed testing on Google Play — testers and content creators wanted.",
      "app.cta": "Become a tester",
      "contact.title": "Contact",
      "contact.text": "Tester, content creator, or just want to talk about the apps:",
      "footer.privacy": "Privacy policy",
    },
    fr: {
      "meta.title": "Wian Broes — Développeur indé",
      "meta.description": "Wian Broes, développeur Android indépendant. InkOrb et KidOrb : des apps de dessin simples, sans pub, sans tracking.",
      "hero.tagline": "Développeur Android indépendant. Des apps simples, honnêtes — sans pub, sans compte, sans tracking.",
      "hero.cta": "Voir les apps",
      "inkorb.tag": "Peinture par bille physique : calques, mélange de pigments, export.",
      "inkorb.desc": "Une bille roule sur la toile et laisse une traînée de peinture derrière elle — précise ou chaotique, selon la vitesse et le geste. Calques, mélangeur de pigments, plusieurs billes personnalisables, export en image. Aucune pub, aucun compte, aucune connexion réseau.",
      "kidorb.tag": "Peinture apaisante pour enfants : fais rouler une bille de couleur.",
      "kidorb.desc": "Une version épurée du même moteur, pensée pour les jeunes enfants : pas de texte compliqué, pas de niveau à débloquer, pas de pression. Un geste simple et satisfaisant. Aucune pub, aucun compte, fonctionne hors-ligne.",
      "app.status": "🔒 En test fermé sur Google Play — testeurs et créateurs de contenu recherchés.",
      "app.cta": "Devenir testeur",
      "contact.title": "Contact",
      "contact.text": "Testeur, créateur de contenu, ou juste envie d'échanger sur les apps :",
      "footer.privacy": "Politique de confidentialité",
    },
  };

  const STORAGE_KEY = "wianbroes-lang";

  function applyLang(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] === undefined) return;
      if (el.tagName === "META") {
        el.setAttribute("content", dict[key]);
      } else if (el.tagName === "TITLE") {
        el.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    const toggle = document.getElementById("lang-toggle");
    const otherLang = lang === "en" ? "fr" : "en";
    toggle.textContent = otherLang.toUpperCase();
  }

  function getInitialLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
    return "en";
  }

  let currentLang = getInitialLang();
  applyLang(currentLang);

  document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "fr" : "en";
    localStorage.setItem(STORAGE_KEY, currentLang);
    applyLang(currentLang);
  });
})();
