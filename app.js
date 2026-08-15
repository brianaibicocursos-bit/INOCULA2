/* =========================================================
   INOCULA
   Digital Life Game
   ========================================================= */


/* =========================================================
   1. ESTADO
   ========================================================= */

let currentLanguage = "es";

let playerPosition = 0;
const TOTAL_TILES = 48;

let followers = 100;
let shields = 1;
let viralLoad = 0;

let selectedCharacter = "neutral";
let selectedStyle = "cool";

let currentEvent = null;

let viruses = [];

let usedNews = [];

let gameStarted = false;


/* =========================================================
   2. TRADUCCIONES
   ========================================================= */

const TEXT = {

es: {

navHome:"Inicio",
navGame:"Tablero",
navLab:"Laboratorio",
navRanking:"Ranking",

heroTitle:"Antes de creer,<br><span>inocúlate.</span>",
heroText:"Un juego educativo que convierte la alfabetización mediática en una aventura digital.",

startGame:"🚀 Comenzar aventura",
tryTools:"🧪 Probar herramientas",

tiles:"Casillas",
languages:"Idiomas",
stages:"Etapas",

chooseCharacter:"Elige tu personaje",
characterDescription:"Tu personaje te acompañará durante todo el recorrido.",
neutral:"Neutral",
woman:"Mujer",
man:"Hombre",
chooseStyle:"Elige tu estilo",
continue:"Continuar →",

position:"Posición",
followers:"Seguidores",
shields:"Escudos",
viralLoad:"Carga viral",

stage1:"Mañana",
stage2:"Escuela",
stage3:"Redes",
stage4:"Noche",

spin:"🎲 GIRAR",

labTitle:"🧪 Laboratorio de Verificación",
labDescription:"Aprende a investigar antes de compartir.",

sourceTool:"Fuente",
sourceDescription:"Busca el origen",
imageTool:"Imagen",
imageDescription:"Analiza el contexto",
aiTool:"IA",
aiDescription:"Busca señales de IA",
dateTool:"Fecha",
dateDescription:"Comprueba cuándo ocurrió",

rankingTitle:"🏆 Ranking INOCULA",

errorTitle:"¡ERROR DE VERIFICACIÓN!",

errorWrong:"Compartiste información sin verificar. Un agente digital debe detenerse y comprobar antes de compartir.",

correct:"¡Excelente! Tu verificación fue correcta.",

wrong:"La información parecía creíble, pero necesitaba una verificación adicional.",

next:"Continuar",

victory:"🏆 ¡Completaste tu día digital!",
victoryText:"Has recorrido todas las etapas y protegido tu entorno digital.",

advance:"Avanzas",

spaces:"casillas",

morning:"Mañana",
school:"Escuela",
social:"Redes",
night:"Noche",

sourceQuestion:"¿Cuál sería el mejor primer paso?",
sourceCorrect:"Buscar quién publicó originalmente la información.",
sourceWrong:"Compartirla rápidamente porque parece importante.",

aiQuestion:"¿Qué señal puede indicar que una imagen fue generada por IA?",
aiCorrect:"Detalles extraños, manos deformes o inconsistencias visuales.",
aiWrong:"Que tenga muchos likes.",

deepfakeQuestion:"Un video parece mostrar a una persona diciendo algo extraño. ¿Qué haces?",
deepfakeCorrect:"Buscas otras fuentes y verificas el video.",
deepfakeWrong:"Lo compartes inmediatamente.",

socialQuestion:"Una publicación tiene 2 millones de likes. ¿Eso demuestra que es verdadera?",
socialCorrect:"No. La popularidad no demuestra veracidad.",
socialWrong:"Sí. Si tiene muchos likes debe ser cierta."

},

en: {

navHome:"Home",
navGame:"Game Board",
navLab:"Laboratory",
navRanking:"Leaderboard",

heroTitle:"Before you believe,<br><span>inoculate yourself.</span>",
heroText:"An educational game that turns media literacy into a digital adventure.",

startGame:"🚀 Start adventure",
tryTools:"🧪 Try tools",

tiles:"Tiles",
languages:"Languages",
stages:"Stages",

chooseCharacter:"Choose your character",
characterDescription:"Your character will accompany you throughout the journey.",
neutral:"Neutral",
woman:"Woman",
man:"Man",
chooseStyle:"Choose your style",
continue:"Continue →",

position:"Position",
followers:"Followers",
shields:"Shields",
viralLoad:"Viral load",

stage1:"Morning",
stage2:"School",
stage3:"Social media",
stage4:"Night",

spin:"🎲 SPIN",

labTitle:"🧪 Verification Laboratory",
labDescription:"Learn how to investigate before sharing.",

sourceTool:"Source",
sourceDescription:"Find the origin",
imageTool:"Image",
imageDescription:"Check context",
aiTool:"AI",
aiDescription:"Look for AI signals",
dateTool:"Date",
dateDescription:"Check when it happened",

rankingTitle:"🏆 INOCULA Leaderboard",

errorTitle:"VERIFICATION ERROR!",

errorWrong:"You shared information without verifying it. A digital agent should stop and check before sharing.",

correct:"Excellent! Your verification was correct.",

wrong:"The information looked credible, but it required additional verification.",

next:"Continue",

victory:"🏆 You completed your digital day!",
victoryText:"You completed every stage and protected your digital environment.",

advance:"You advanced",

spaces:"spaces",

morning:"Morning",
school:"School",
social:"Social Media",
night:"Night",

sourceQuestion:"What would be the best first step?",
sourceCorrect:"Find who originally published the information.",
sourceWrong:"Share it quickly because it looks important.",

aiQuestion:"What could indicate that an image was generated by AI?",
aiCorrect:"Strange details, distorted hands, or visual inconsistencies.",
aiWrong:"The fact that it has many likes.",

deepfakeQuestion:"A video appears to show someone saying something unusual. What do you do?",
deepfakeCorrect:"Look for other sources and verify the video.",
deepfakeWrong:"Share it immediately.",

socialQuestion:"A post has 2 million likes. Does that prove it is true?",
socialCorrect:"No. Popularity does not prove accuracy.",
socialWrong:"Yes. If it has many likes it must be true."

},

zh: {

navHome:"首页",
navGame:"游戏板",
navLab:"实验室",
navRanking:"排行榜",

heroTitle:"在相信之前，<br><span>先保护自己。</span>",
heroText:"一个将媒体素养变成数字冒险的教育游戏。",

startGame:"🚀 开始冒险",
tryTools:"🧪 尝试工具",

tiles:"格子",
languages:"语言",
stages:"阶段",

chooseCharacter:"选择你的角色",
characterDescription:"你的角色会陪伴你完成整个数字旅程。",
neutral:"中性",
woman:"女性",
man:"男性",
chooseStyle:"选择你的风格",
continue:"继续 →",

position:"位置",
followers:"关注者",
shields:"护盾",
viralLoad:"病毒负荷",

stage1:"早晨",
stage2:"学校",
stage3:"社交媒体",
stage4:"夜晚",

spin:"🎲 旋转",

labTitle:"🧪 信息验证实验室",
labDescription:"学习在分享之前进行调查。",

sourceTool:"来源",
sourceDescription:"寻找来源",
imageTool:"图片",
imageDescription:"检查背景",
aiTool:"人工智能",
aiDescription:"寻找人工智能迹象",
dateTool:"日期",
dateDescription:"确认发生时间",

rankingTitle:"🏆 INOCULA 排行榜",

errorTitle:"验证错误！",

errorWrong:"你在没有验证的情况下分享了信息。数字特工应该在分享之前停下来核实。",

correct:"太棒了！你的验证是正确的。",

wrong:"这些信息看起来可信，但仍然需要进一步验证。",

next:"继续",

victory:"🏆 你完成了数字生活的一天！",
victoryText:"你完成了所有阶段，并保护了你的数字环境。",

advance:"你前进了",

spaces:"格",

morning:"早晨",
school:"学校",
social:"社交媒体",
night:"夜晚",

sourceQuestion:"最好的第一步是什么？",
sourceCorrect:"寻找最初发布这条信息的人。",
sourceWrong:"因为看起来很重要，所以马上分享。",

aiQuestion:"什么可能表明一张图片是人工智能生成的？",
aiCorrect:"奇怪的细节、变形的手或视觉上的不一致。",
aiWrong:"它有很多点赞。",

deepfakeQuestion:"一个视频似乎显示某人在说奇怪的话。你会怎么做？",
deepfakeCorrect:"寻找其他来源并验证视频。",
deepfakeWrong:"立即分享。",

socialQuestion:"一条帖子有200万个赞。这能证明它是真的吗？",
socialCorrect:"不能。受欢迎并不能证明信息准确。",
socialWrong:"是的。有很多点赞就一定是真的。"

}

};


/* =========================================================
   3. NOTICIAS
   ========================================================= */

const NEWS = {

es:[
{
type:"news",
icon:"🚨",
title:"¡Esta bebida elimina TODAS las toxinas!",
body:"Una publicación afirma que una bebida puede eliminar todas las toxinas del cuerpo.",
fake:true
},
{
type:"news",
icon:"📰",
title:"Las neuronas utilizan señales eléctricas y químicas.",
body:"Las neuronas transmiten información mediante señales eléctricas y neurotransmisores.",
fake:false
},
{
type:"news",
icon:"🚨",
title:"¡Instagram puede leer tus pensamientos!",
body:"Una publicación afirma que las redes sociales pueden leer directamente la mente.",
fake:true
},
{
type:"news",
icon:"🧠",
title:"Comparar diferentes fuentes ayuda a verificar información.",
body:"Contrastar una afirmación con varias fuentes confiables puede revelar errores.",
fake:false
}
],

en:[
{
type:"news",
icon:"🚨",
title:"This drink removes ALL toxins from your body!",
body:"A post claims that a drink can remove every toxin from the human body.",
fake:true
},
{
type:"news",
icon:"📰",
title:"Neurons use electrical and chemical signals.",
body:"Neurons transmit information using electrical signals and neurotransmitters.",
fake:false
},
{
type:"news",
icon:"🚨",
title:"Instagram can read your thoughts!",
body:"A post claims that social media platforms can directly read people's minds.",
fake:true
},
{
type:"🧠",
title:"Comparing different sources helps verify information.",
body:"Checking a claim against multiple reliable sources can reveal errors.",
fake:false
}
],

zh:[
{
type:"news",
icon:"🚨",
title:"这种饮料可以清除体内所有毒素！",
body:"一篇帖子声称某种饮料可以清除人体内的所有毒素。",
fake:true
},
{
type:"news",
icon:"📰",
title:"神经元使用电信号和化学信号。",
body:"神经元通过电信号和神经递质传递信息。",
fake:false
},
{
type:"news",
icon:"🚨",
title:"Instagram 可以读取你的思想！",
body:"一篇帖子声称社交媒体可以直接读取人的思想。",
fake:true
},
{
type:"🧠",
title:"比较不同的信息来源有助于验证信息。",
body:"将一个说法与多个可靠来源进行比较可以发现错误。",
fake:false
}
]

};


/* =========================================================
   4. TIPOS DE CASILLA
   ========================================================= */

const TILE_TYPES = [
"news",
"question",
"ai",
"deepfake",
"social",
"shield",
"viral",
"bonus"
];


/* =========================================================
   5. NAVEGACIÓN
   ========================================================= */

function navigateTo(pageId) {

  document.querySelectorAll(".page-view")
    .forEach(page => page.classList.add("hidden"));

  document.querySelectorAll(".nav-btn")
    .forEach(btn => btn.classList.remove("active"));

  const page = document.getElementById(pageId);

  if(page) {
    page.classList.remove("hidden");
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {

    const onclick = btn.getAttribute("onclick") || "";

    if(onclick.includes(pageId)) {
      btn.classList.add("active");
    }

  });

}


/* =========================================================
   6. IDIOMA
   ========================================================= */

function changeLanguage(lang) {

  if(!TEXT[lang]) lang = "es";

  currentLanguage = lang;

  document.documentElement.lang = lang;

  const t = TEXT[lang];

  document.querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key = element.dataset.i18n;

      if(t[key]) {
        element.innerHTML = t[key];
      }

    });

  updateHUD();
  createBoard();

}


/* =========================================================
   7. PERSONAJE
   ========================================================= */

const characterIcons = {
  neutral:"🧑‍💻",
  woman:"👩‍💻",
  man:"👨‍💻"
};

const styleIcons = {
  cool:"😎",
  smart:"🤓",
  fun:"🤪",
  cyber:"🤖"
};


function selectCharacter(type, button) {

  selectedCharacter = type;

  document.querySelectorAll(".character-option")
    .forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  updateAvatarPreview();

}


function selectStyle(style, button) {

  selectedStyle = style;

  document.querySelectorAll(".style-option")
    .forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  updateAvatarPreview();

}


function updateAvatarPreview() {

  const avatar = document.getElementById("avatar-preview");

  if(!avatar) return;

  avatar.textContent = characterIcons[selectedCharacter];

  avatar.dataset.style = selectedStyle;

}


function confirmCharacter() {

  updateAvatar();

  navigateTo("page-game");

  gameStarted = true;

}


function updateAvatar() {

  const avatar = document.getElementById("player-avatar");

  if(!avatar) return;

  avatar.textContent = characterIcons[selectedCharacter];

  avatar.style.filter = "";

  if(selectedStyle === "cool") {
    avatar.textContent = characterIcons[selectedCharacter] + " 😎";
  }

  if(selectedStyle === "smart") {
    avatar.textContent = characterIcons[selectedCharacter] + " 🤓";
  }

  if(selectedStyle === "fun") {
    avatar.textContent = characterIcons[selectedCharacter] + " 🤪";
  }

  if(selectedStyle === "cyber") {
    avatar.textContent = characterIcons[selectedCharacter] + " 🤖";
  }

}


/* =========================================================
   8. INICIAR
   ========================================================= */

function startGame() {

  navigateTo("page-character");

}


/* =========================================================
   9. CREAR TABLERO
   ========================================================= */

function createBoard() {

  const board = document.getElementById("game-board");

  if(!board) return;

  board.innerHTML = "";

  for(let i=0; i<TOTAL_TILES; i++) {

    const tile = document.createElement("div");

    tile.className = "tile";

    const stage = getStage(i);

    tile.classList.add("stage" + stage);

    const type = getTileType(i);

    tile.dataset.position = i;
    tile.dataset.type = type;

    const typeData = getTileVisual(type);

    tile.innerHTML = `
      <div class="tile-number">${i+1}</div>
      <div class="tile-icon">${typeData.icon}</div>
      <span class="tile-label">${typeData.name}</span>
    `;

    board.appendChild(tile);

  }

  renderPlayer();

}


/* =========================================================
   10. ETAPA
   ========================================================= */

function getStage(position) {

  if(position < 12) return 1;

  if(position < 24) return 2;

  if(position < 36) return 3;

  return 4;

}


/* =========================================================
   11. TIPO DE CASILLA
   ========================================================= */

function getTileType(position) {

  if(position === 0) return "start";

  if(position === TOTAL_TILES-1) return "finish";

  const pattern = [
    "news",
    "question",
    "shield",
    "ai",
    "social",
    "news",
    "viral",
    "question",
    "deepfake",
    "bonus",
    "news",
    "ai"
  ];

  return pattern[position % pattern.length];

}


function getTileVisual(type) {

  const names = {

    news:{
      icon:"📰",
      name:{
        es:"Noticia",
        en:"News",
        zh:"新闻"
      }[currentLanguage]
    },

    question:{
      icon:"🧠",
      name:{
        es:"Reto",
        en:"Challenge",
        zh:"挑战"
      }[currentLanguage]
    },

    ai:{
      icon:"🤖",
      name:{
        es:"IA",
        en:"AI",
        zh:"人工智能"
      }[currentLanguage]
    },

    deepfake:{
      icon:"🎭",
      name:{
        es:"Deepfake",
        en:"Deepfake",
        zh:"深度伪造"
      }[currentLanguage]
    },

    social:{
      icon:"📱",
      name:{
        es:"Redes",
        en:"Social",
        zh:"社交媒体"
      }[currentLanguage]
    },

    shield:{
      icon:"🛡️",
      name:{
        es:"Escudo",
        en:"Shield",
        zh:"护盾"
      }[currentLanguage]
    },

    viral:{
      icon:"🦠",
      name:{
        es:"Viral",
        en:"Viral",
        zh:"病毒"
      }[currentLanguage]
    },

    bonus:{
      icon:"⭐",
      name:{
        es:"Bonus",
        en:"Bonus",
        zh:"奖励"
      }[currentLanguage]
    },

    start:{
      icon:"🚀",
      name:{
        es:"Inicio",
        en:"Start",
        zh:"开始"
      }[currentLanguage]
    },

    finish:{
      icon:"🏆",
      name:{
        es:"Meta",
        en:"Finish",
        zh:"终点"
      }[currentLanguage]
    }

  };

  return names[type];

}


/* =========================================================
   12. GIRAR RUEDA
   ========================================================= */

function spinWheel() {

  const button = document.getElementById("spin-button");

  if(button.disabled) return;

  button.disabled = true;

  const moves = Math.floor(Math.random()*4)+1;

  const result = document.getElementById("wheel-result");

  result.textContent = `🎲 +${moves}`;

  setTimeout(() => {

    movePlayer(moves);

  },600);

}


/* =========================================================
   13. MOVER JUGADOR
   ========================================================= */

function movePlayer(moves) {

  let steps = 0;

  const interval = setInterval(() => {

    if(steps >= moves) {

      clearInterval(interval);

      setTimeout(() => {

        triggerTileEvent();

      },400);

      return;

    }

    if(playerPosition < TOTAL_TILES-1) {

      playerPosition++;

      renderPlayer();

      updateHUD();

    }

    steps++;

  },400);

}


/* =========================================================
   14. RENDER JUGADOR
   ========================================================= */

function renderPlayer() {

  document.querySelectorAll(".tile-car")
    .forEach(car => car.remove());

  document.querySelectorAll(".tile")
    .forEach(tile => tile.classList.remove("current"));

  const tile = document.querySelector(
    `.tile[data-position="${playerPosition}"]`
  );

  if(!tile) return;

  tile.classList.add("current");

  const car = document.createElement("div");

  car.className = "tile-car";

  car.textContent = "🚗";

  tile.appendChild(car);

  updateStageProgress();

}


/* =========================================================
   15. PROGRESO
   ========================================================= */

function updateStageProgress() {

  const stage = getStage(playerPosition);

  document.querySelectorAll(".stage-point")
    .forEach((point,index) => {

      point.classList.toggle(
        "active",
        index < stage
      );

    });

}


/* =========================================================
   16. EVENTO DE CASILLA
   ========================================================= */

function triggerTileEvent() {

  if(playerPosition === TOTAL_TILES-1) {

    showVictory();

    return;

  }

  const type =
    document.querySelector(
      `.tile[data-position="${playerPosition}"]`
    )?.dataset.type;

  openEvent(type);

}


/* =========================================================
   17. EVENTOS
   ========================================================= */

function openEvent(type) {

  const modal = document.getElementById("event-modal");

  const icon = document.getElementById("event-icon");
  const title = document.getElementById("event-title");
  const description = document.getElementById("event-description");
  const content = document.getElementById("event-content");
  const actions = document.getElementById("event-actions");

  modal.classList.remove("hidden");

  content.innerHTML = "";
  actions.innerHTML = "";

  const t = TEXT[currentLanguage];


  /* NOTICIA */

  if(type === "news") {

    const database = NEWS[currentLanguage];

    let index = Math.floor(Math.random()*database.length);

    currentEvent = database[index];

    icon.textContent = "📰";

    title.textContent =
      currentLanguage === "es" ? "Detecta la información" :
      currentLanguage === "en" ? "Check the information" :
      "检查信息";

    description.textContent =
      currentEvent.body;

    content.innerHTML = `
      <div class="news-card">
        <h3>${currentEvent.title}</h3>
        <p>${currentEvent.body}</p>
      </div>
    `;

    addAnswerButton(
      t.correct,
      () => evaluateNews(true)
    );

    addAnswerButton(
      t.wrong,
      () => evaluateNews(false)
    );

  }


  /* PREGUNTA */

  else if(type === "question") {

    icon.textContent = "🧠";

    title.textContent =
      currentLanguage === "es" ? "Reto de pensamiento crítico" :
      currentLanguage === "en" ? "Critical thinking challenge" :
      "批判性思维挑战";

    description.textContent =
      t.sourceQuestion;

    addAnswerButton(
      t.sourceCorrect,
      () => correctAnswer()
    );

    addAnswerButton(
      t.sourceWrong,
      () => wrongAnswer()
    );

  }


  /* IA */

  else if(type === "ai") {

    icon.textContent = "🤖";

    title.textContent =
      currentLanguage === "es" ? "¿Detectas contenido generado por IA?" :
      currentLanguage === "en" ? "Can you detect AI-generated content?" :
      "你能识别人工智能生成的内容吗？";

    description.textContent =
      t.aiQuestion;

    addAnswerButton(
      t.aiCorrect,
      () => correctAnswer()
    );

    addAnswerButton(
      t.aiWrong,
      () => wrongAnswer()
    );

  }


  /* DEEPFAKE */

  else if(type === "deepfake") {

    icon.textContent = "🎭";

    title.textContent =
      currentLanguage === "es" ? "Alerta Deepfake" :
      currentLanguage === "en" ? "Deepfake Alert" :
      "深度伪造警报";

    description.textContent =
      t.deepfakeQuestion;

    addAnswerButton(
      t.deepfakeCorrect,
      () => correctAnswer()
    );

    addAnswerButton(
      t.deepfakeWrong,
      () => wrongAnswer()
    );

  }


  /* REDES */

  else if(type === "social") {

    icon.textContent = "📱";

    title.textContent =
      currentLanguage === "es" ? "Redes sociales" :
      currentLanguage === "en" ? "Social Media" :
      "社交媒体";

    description.textContent =
      t.socialQuestion;

    addAnswerButton(
      t.socialCorrect,
      () => correctAnswer()
    );

    addAnswerButton(
      t.socialWrong,
      () => wrongAnswer()
    );

  }


  /* ESCUDO */

  else if(type === "shield") {

    icon.textContent = "🛡️";

    title.textContent =
      currentLanguage === "es" ? "¡Encontraste un escudo!" :
      currentLanguage === "en" ? "You found a shield!" :
      "你找到了护盾！";

    description.textContent =
      currentLanguage === "es"
      ? "Tu escudo puede protegerte de una amenaza futura."
      : currentLanguage === "en"
      ? "Your shield can protect you from a future threat."
      : "你的护盾可以保护你免受未来的威胁。";

    addAnswerButton(
      "+1 🛡️",
      () => {
        shields++;
        closeEvent();
        updateHUD();
      }
    );

  }


  /* VIRAL */

  else if(type === "viral") {

    icon.textContent = "🦠";

    title.textContent =
      currentLanguage === "es" ? "¡Zona de alta carga viral!" :
      currentLanguage === "en" ? "High viral load zone!" :
      "高病毒负荷区域！";

    description.textContent =
      currentLanguage === "es"
      ? "Tu feed está lleno de información sin verificar."
      : currentLanguage === "en"
      ? "Your feed is filled with unverified information."
      : "你的信息流充满了未经验证的信息。";

    addAnswerButton(
      currentLanguage === "es" ? "Usar Escudo" :
      currentLanguage === "en" ? "Use Shield" :
      "使用护盾",
      () => useShield()
    );

    addAnswerButton(
      currentLanguage === "es" ? "Continuar" :
      currentLanguage === "en" ? "Continue" :
      "继续",
      () => {
        viralLoad += 15;
        closeEvent();
        updateHUD();
      }
    );

  }


  /* BONUS */

  else if(type === "bonus") {

    icon.textContent = "⭐";

    title.textContent =
      currentLanguage === "es" ? "¡Bonus!" :
      currentLanguage === "en" ? "Bonus!" :
      "奖励！";

    description.textContent =
      currentLanguage === "es"
      ? "Encontraste una fuente confiable."
      : currentLanguage === "en"
      ? "You found a reliable source."
      : "你找到了一条可靠的信息来源。";

    addAnswerButton(
      "+50 👥",
      () => {
        followers += 50;
        closeEvent();
        updateHUD();
      }
    );

  }


  /* META */

  else if(type === "finish") {

    showVictory();

  }

}


/* =========================================================
   18. BOTONES DE EVENTO
   ========================================================= */

function addAnswerButton(text, callback) {

  const button = document.createElement("button");

  button.className = "event-option";

  button.textContent = text;

  button.onclick = callback;

  document.getElementById("event-actions")
    .appendChild(button);

}


/* =========================================================
   19. NOTICIAS
   ========================================================= */

function evaluateNews(correct) {

  if(!currentEvent) return;

  if(
    (currentEvent.fake && correct) ||
    (!currentEvent.fake && !correct)
  ) {

    correctAnswer();

  } else {

    wrongAnswer();

  }

}


/* =========================================================
   20. RESPUESTA CORRECTA
   ========================================================= */

function correctAnswer() {

  followers += 30;

  closeEvent();

  updateHUD();

}


/* =========================================================
   21. RESPUESTA INCORRECTA
   ========================================================= */

function wrongAnswer() {

  if(shields > 0) {

    const use = confirm(
      currentLanguage === "es"
      ? "¡Te equivocaste! ¿Quieres usar un Escudo?"
      : currentLanguage === "en"
      ? "You made a mistake! Do you want to use a Shield?"
      : "你答错了！要使用护盾吗？"
    );

    if(use) {

      shields--;

      closeEvent();

      updateHUD();

      return;

    }

  }

  viralLoad += 15;

  viralLoad = Math.min(viralLoad,100);

  addVirus();

  closeEvent();

  showError();

  updateHUD();

}


/* =========================================================
   22. VIRUS
   ========================================================= */

const VIRUSES = [
"🦠",
"🧫",
"👾",
"🕷️",
"☣️",
"🤖",
"💀",
"🪱"
];


function addVirus() {

  const virus =
    VIRUSES[viruses.length % VIRUSES.length];

  viruses.push(virus);

  renderViruses();

}


function renderViruses() {

  const container =
    document.getElementById("virus-container");

  if(!container) return;

  container.innerHTML = "";

  viruses.forEach((virus,index) => {

    const span = document.createElement("span");

    span.textContent = virus;

    span.title =
      currentLanguage === "es"
      ? `Amenaza ${index+1}`
      : currentLanguage === "en"
      ? `Threat ${index+1}`
      : `威胁 ${index+1}`;

    container.appendChild(span);

  });

}


/* =========================================================
   23. ERROR
   ========================================================= */

function showError() {

  const screen =
    document.getElementById("error-screen");

  const message =
    document.getElementById("error-message");

  message.textContent =
    TEXT[currentLanguage].errorWrong;

  screen.classList.remove("hidden");

}


function closeError() {

  document
    .getElementById("error-screen")
    .classList.add("hidden");

  const button =
    document.getElementById("spin-button");

  button.disabled = false;

}


/* =========================================================
   24. ESCUDO
   ========================================================= */

function useShield() {

  if(shields <= 0) {

    closeEvent();

    wrongAnswer();

    return;

  }

  shields--;

  closeEvent();

  updateHUD();

}


/* =========================================================
   25. CERRAR EVENTO
   ========================================================= */

function closeEvent() {

  document
    .getElementById("event-modal")
    .classList.add("hidden");

  document
    .getElementById("spin-button")
    .disabled = false;

}


/* =========================================================
   26. HUD
   ========================================================= */

function updateHUD() {

  const t = TEXT[currentLanguage];

  const position =
    document.getElementById("position-value");

  const followersElement =
    document.getElementById("followers-count");

  const shieldsElement =
    document.getElementById("shields-count");

  const viralElement =
    document.getElementById("viral-count");

  if(position)
    position.textContent =
      `${playerPosition+1}/${TOTAL_TILES}`;

  if(followersElement)
    followersElement.textContent = followers;

  if(shieldsElement)
    shieldsElement.textContent = shields;

  if(viralElement)
    viralElement.textContent = viralLoad + "%";

}


/* =========================================================
   27. VICTORIA
   ========================================================= */

function showVictory() {

  const modal =
    document.getElementById("event-modal");

  document.getElementById("event-icon")
    .textContent = "🏆";

  document.getElementById("event-title")
    .textContent = TEXT[currentLanguage].victory;

  document.getElementById("event-description")
    .textContent = TEXT[currentLanguage].victoryText;

  document.getElementById("event-content")
    .innerHTML = `
      <div class="news-card">
        ⭐ ${TEXT[currentLanguage].position}: ${playerPosition+1}/${TOTAL_TILES}<br><br>
        👥 ${TEXT[currentLanguage].followers}: ${followers}<br><br>
        🛡️ ${TEXT[currentLanguage].shields}: ${shields}<br><br>
        🦠 ${TEXT[currentLanguage].viralLoad}: ${viralLoad}%
      </div>
    `;

  document.getElementById("event-actions")
    .innerHTML = "";

  addAnswerButton(
    TEXT[currentLanguage].continue,
    () => {

      closeEvent();

      playerPosition = 0;
      followers = 100;
      shields = 1;
      viralLoad = 0;
      viruses = [];

      renderViruses();
      createBoard();
      updateHUD();

    }
  );

  modal.classList.remove("hidden");

}


/* =========================================================
   28. LABORATORIO
   ========================================================= */

function labTool(tool) {

  const output =
    document.getElementById("lab-output");

  const responses = {

    source: {
      es:"🔎 FUENTE: Busca quién publicó originalmente la afirmación y si otras fuentes confiables la confirman.",
      en:"🔎 SOURCE: Find who originally published the claim and whether other reliable sources confirm it.",
      zh:"🔎 来源：寻找最初发布该说法的人，并检查其他可靠来源是否确认。"
    },

    image: {
      es:"🖼️ IMAGEN: Una imagen puede estar fuera de contexto, ser antigua o estar manipulada.",
      en:"🖼️ IMAGE: An image may be out of context, old, or manipulated.",
      zh:"🖼️ 图片：图片可能脱离背景、来自过去，或者经过修改。"
    },

    ai: {
      es:"🤖 IA: Busca inconsistencias en manos, texto, sombras, reflejos y rostros.",
      en:"🤖 AI: Look for inconsistencies in hands, text, shadows, reflections, and faces.",
      zh:"🤖 人工智能：检查手部、文字、阴影、反射和面部是否存在不一致。"
    },

    date: {
      es:"📅 FECHA: Comprueba cuándo ocurrió realmente el evento y si la publicación utiliza una noticia antigua.",
      en:"📅 DATE: Check when the event actually happened and whether the post uses an old story.",
      zh:"📅 日期：确认事件实际发生的时间，并检查帖子是否使用旧新闻。"
    }

  };

  output.textContent =
    responses[tool][currentLanguage];

}


/* =========================================================
   29. INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  createBoard();

  updateHUD();

  updateAvatarPreview();

});
