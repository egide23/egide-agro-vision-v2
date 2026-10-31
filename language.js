const translations = {
  en: {
    "nav.home": "Home",
    "nav.market": "🌍 Marketplace",
    "nav.login": "Login",
    "nav.register": "Register",

    "myMarket.title": "My Marketplace 🛒",

    "hero.title": "Shaping the Future of African Agriculture",
    "hero.description": "Africa AgroVision is a Rwanda-based African agriculture platform providing practical farming knowledge, crop production, livestock and poultry information, agricultural innovation, smart farming solutions, and technology for a more sustainable agricultural future across Africa.",
    "hero.button": "Explore More",

    "market.badge": "🌍 NEW • AFRICA AGROVISION MARKETPLACE",
    "market.title": "Everything Agriculture, In One Place",
    "market.description": "Buy and sell crops and animals, find farm equipment, agricultural jobs, workers, veterinary assistance, seeds, breeds, agricultural services, buyers, and much more.",
    "market.button": "Explore Agro Marketplace →",

    "resources.title": "Africa AgroVision Agriculture Resources",
    "resources.description": "Explore agricultural knowledge covering crop production, livestock farming, poultry farming, sustainable agriculture, animal health, animal housing, and agricultural innovation.",
    "resources.crops": "🌱 Crop & Agriculture Knowledge",
    "resources.livestock": "🐄 Livestock Farming",
    "resources.poultry": "🐔 Poultry Farming",
    "resources.housing": "🏠 Animal Housing",
    "resources.health": "🩺 Animal Health",
    "resources.market": "🛒 Agriculture Marketplace",

    "footer.description": "Africa AgroVision is building Africa's agricultural future through innovation, sustainable farming, modern technology, and collaboration. Our mission is to empower farmers with knowledge, connect communities, and create smarter solutions for food security across Africa.",
    "footer.about": "About Us",
    "footer.agriculture": "Agriculture",
    "footer.projects": "Projects",
    "footer.contact": "Contact",
    "footer.copyright": "© 2026 Africa AgroVision 🌱 | Building a sustainable agricultural future."
  },

  rw: {
    "nav.home": "Ahabanza",
    "nav.market": "🌍 Isoko",
    "nav.login": "Injira",
    "nav.register": "Iyandikishe",

    "myMarket.title": "Isoko Ryanjye 🛒",

    "hero.title": "Duteza Imbere Ejo Hazaza h'Ubuhinzi muri Afurika",
    "hero.description": "Africa AgroVision ni urubuga rukorera mu Rwanda rutanga ubumenyi ngiro ku buhinzi n'ubworozi, guhinga ibihingwa bitandukanye, korora amatungo n'inkoko, gukoresha ikoranabuhanga mu buhinzi no guteza imbere ubuhinzi burambye muri Afurika.",
    "hero.button": "Menya Byinshi",

    "market.badge": "🌍 GISHYA • ISOKO RYA AFRICA AGROVISION",
    "market.title": "Ibikenewe mu Buhinzi n'Ubworozi Ahantu Hamwe",
    "market.description": "Gura cyangwa ugurishe imyaka n'amatungo, shakisha ibikoresho by'ubuhinzi, akazi, abakozi, serivisi z'ubuvuzi bw'amatungo, imbuto, amoko y'amatungo, abaguzi n'izindi serivisi z'ubuhinzi n'ubworozi.",
    "market.button": "Sura Isoko ry'Ubuhinzi n'Ubworozi →",

    "resources.title": "Ubumenyi ku Buhinzi n'Ubworozi",
    "resources.description": "Menya byinshi ku guhinga ibihingwa bitandukanye, korora amatungo n'inkoko, ubuhinzi burambye, ubuzima bw'amatungo, kubaka ibiraro no gukoresha ikoranabuhanga mu buhinzi.",
    "resources.crops": "🌱 Ubumenyi ku Buhinzi",
    "resources.livestock": "🐄 Ubworozi bw'Amatungo",
    "resources.poultry": "🐔 Ubworozi bw'Inkoko",
    "resources.housing": "🏠 Ibiraro by'Amatungo",
    "resources.health": "🩺 Ubuzima bw'Amatungo",
    "resources.market": "🛒 Isoko ry'Ubuhinzi n'Ubworozi",

    "footer.description": "Africa AgroVision igamije guteza imbere ubuhinzi muri Afurika binyuze mu ikoranabuhanga, ubuhinzi burambye n'ubufatanye. Intego yacu ni uguha abahinzi n'aborozi ubumenyi, kubahuza n'abandi no guteza imbere ibisubizo bifasha Afurika kugira ibiribwa bihagije.",
    "footer.about": "Abo Turi Bo",
    "footer.agriculture": "Ubuhinzi",
    "footer.projects": "Imishinga",
    "footer.contact": "Twandikire",
    "footer.copyright": "© 2026 Africa AgroVision 🌱 | Duteza imbere ubuhinzi burambye."
  }
};

function changeLanguage(lang) {
  const selected = translations[lang] ? lang : "en";

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    const translation = translations[selected][key];

    if (translation !== undefined) {
      element.textContent = translation;
    }
  });

  document.documentElement.lang = selected;
  localStorage.setItem("agrovision-language", selected);

  const selector = document.getElementById("languageSelector");

  if (selector) {
    selector.value = selected;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage =
    localStorage.getItem("agrovision-language") || "en";

  changeLanguage(savedLanguage);

  const selector = document.getElementById("languageSelector");

  if (selector) {
    selector.addEventListener("change", event => {
      changeLanguage(event.target.value);
    });
  }
});