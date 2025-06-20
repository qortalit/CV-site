const phrases = [
  "Специалист по тестированию",
  "Найдет ваши баги",
  "Улучшит ПО",
  "Эксперт по качеству продукта",
  "Software testing expert",
  "Will find your bugs",
  "Improve your software",
  "Ensure product quality",
  "Experto en pruebas de software",
  "Encontrará sus errores",
  "Mejorará su software",
  "Garantizará la calidad",
  "专家软件测试",
  "会找到你的漏洞",
  "改进你的软件",
  "保证产品质量",
  "خبير اختبار البرمجيات",
  "سيجد أخطاءك",
  "سيحسن البرنامج",
  "يضمن جودة المنتج",
  "Expert en test logiciel",
  "Trouvera vos bugs",
  "Améliorera votre logiciel",
  "Assurera la qualité du produit",
  "Software-Test-Experte",
  "Findet Ihre Fehler",
  "Verbessert Ihre Software",
  "Sichert die Produktqualität",
  "Esperto di test software",
  "Troverà i tuoi bug",
  "Migliorerà il software",
  "Garantirà la qualità del prodotto",
  "ソフトウェアテストの専門家",
  "バグを見つけます",
  "ソフトを改善します",
  "製品の品質を保証します"
];

let current = 0;
const phraseEl = document.getElementById('phrase');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function showNextPhrase() {
  phraseEl.style.opacity = 0;
  setTimeout(() => {
    phraseEl.textContent = phrases[current];
    phraseEl.style.opacity = 1;
    current = (current + 1) % phrases.length;
  }, 500);
}

setInterval(showNextPhrase, 3000);
showNextPhrase();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  if (document.body.classList.contains('light-mode')) {
    themeIcon.src = "icon-light.svg";
  } else {
    themeIcon.src = "icon-dark.svg";
  }
});
