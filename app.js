/* =========================================================
   INOCULA · DIGITAL LIFE GAME
   VERSION ESTABLE MULTILINGÜE
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

let gameStarted = false;
let isMoving = false;


/* =========================================================
   TRADUCCIONES
   ========================================================= */

const TEXT = {

es: {
navHome:"Inicio",
navGame:"Tablero",
navLab:"Laboratorio",
navRanking:"Ranking",

hackathon:"✨ UNESCO Youth Hackathon 2026",

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
cool:"Cool",
smart:"Smart",
fun:"Divertido",
cyber:"Cyber",

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
you:"Tú",

errorTitle:"¡ERROR DE VERIFICACIÓN!",

errorWrong:"Compartiste información sin verificar. Un agente digital debe detenerse, investigar y comprobar antes de compartir.",

correct:"¡Verificar y continuar!",
wrong:"Compartir sin verificar",

correctMessage:"¡Excelente! Detectaste correctamente la situación.",
wrongMessage:"La decisión no fue segura. Primero había que verificar la información.",

next:"Continuar",

advance:"Avanzas",
spaces:"casillas",

newsTitle:"🔎 Detecta la información",
questionTitle:"🧠 Reto de pensamiento crítico",
aiTitle:"🤖 Detector de IA",
deepfakeTitle:"🎭 Alerta Deepfake",
socialTitle:"📱 Redes sociales",

shieldTitle:"🛡️ ¡Encontraste un escudo!",
viralTitle:"🦠 Zona de alta carga viral",
bonusTitle:"⭐ ¡Bonus!",

useShield:"🛡️ Usar escudo",
continueWithoutShield:"Continuar sin escudo",

shieldDescription:"Tu escudo puede protegerte de una amenaza futura.",
viralDescription:"Tu feed está lleno de información sin verificar.",
bonusDescription:"Encontraste una fuente confiable.",

victory:"🏆 ¡Completaste tu día digital!",
victoryText:"Has recorrido todas las etapas y protegido tu entorno digital.",

threat:"Amenaza",
yes:"Sí",
no:"No",

source:"Fuente",
image:"Imagen",
ai:"IA",
date:"Fecha"
},

en: {
navHome:"Home",
navGame:"Game Board",
navLab:"Laboratory",
navRanking:"Leaderboard",

hackathon:"✨ UNESCO Youth Hackathon 2026",

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
cool:"Cool",
smart:"Smart",
fun:"Fun",
cyber:"Cyber",

continue:"Continue →",

position:"Position",
followers:"Followers",
shields:"Shields",
viralLoad:"Viral load",

stage1:"Morning",
stage2:"School",
stage3:"Social Media",
stage4:"Night",

spin:"🎲 SPIN",

labTitle:"🧪 Verification Laboratory",
labDescription:"Learn how to investigate before sharing.",

sourceTool:"Source",
sourceDescription:"Find the origin",
imageTool:"Image",
imageDescription:"Check the context",
aiTool:"AI",
aiDescription:"Look for AI signals",
dateTool:"Date",
dateDescription:"Check when it happened",

rankingTitle:"🏆 INOCULA Leaderboard",
you:"You",

errorTitle:"VERIFICATION ERROR!",

errorWrong:"You shared information without verifying it. A digital agent should stop, investigate and check before sharing.",

correct:"Verify and continue!",
wrong:"Share without verifying",

correctMessage:"Excellent! You correctly identified the situation.",
wrongMessage:"That was not the safest choice. The information needed to be verified first.",

next:"Continue",

advance:"You advance",
spaces:"spaces",

newsTitle:"🔎 Check the information",
questionTitle:"🧠 Critical thinking challenge",
aiTitle:"🤖 AI Detector",
deepfakeTitle:"🎭 Deepfake Alert",
socialTitle:"📱 Social Media",

shieldTitle:"🛡️ You found a shield!",
viralTitle:"🦠 High viral-load zone",
bonusTitle:"⭐ Bonus!",

useShield:"🛡️ Use shield",
continueWithoutShield:"Continue without shield",

shieldDescription:"Your shield can protect you from a future threat.",
viralDescription:"Your feed is filled with unverified information.",
bonusDescription:"You found a reliable source.",

victory:"🏆 You completed your digital day!",
victoryText:"You completed every stage and protected your digital environment.",

threat:"Threat",
yes:"Yes",
no:"No",

source:"Source",
image:"Image",
ai:"AI",
date:"Date"
},

zh: {
navHome:"首页",
navGame:"游戏板",
navLab:"实验室",
navRanking:"排行榜",

hackathon:"✨ UNESCO 青年黑客松 2026",

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
cool:"酷",
smart:"聪明",
fun:"有趣",
cyber:"赛博",

continue:"继续 →",

position:"位置",
followers:"关注者",
shields:"护盾",
viralLoad:"病毒负荷",

stage1:"早晨",
stage2:"学校",
stage3:"社交媒体",
stage4:"夜晚",

spin:"🎲 开始",

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
you:"你",

errorTitle:"验证错误！",

errorWrong:"你在没有验证的情况下分享了信息。数字特工应该先停下来调查和核实。",

correct:"验证并继续！",
wrong:"未经验证直接分享",

correctMessage:"太棒了！你正确识别了这个情况。",
wrongMessage:"这个选择并不安全。你应该先验证信息。",

next:"继续",

advance:"你前进了",
spaces:"格",

newsTitle:"🔎 检查信息",
questionTitle:"🧠 批判性思维挑战",
aiTitle:"🤖 人工智能检测器",
deepfakeTitle:"🎭 深度伪造警报",
socialTitle:"📱 社交媒体",

shieldTitle:"🛡️ 你找到了护盾！",
viralTitle:"🦠 高病毒负荷区域",
bonusTitle:"⭐ 奖励！",

useShield:"🛡️ 使用护盾",
continueWithoutShield:"不使用护盾继续",

shieldDescription:"你的护盾可以保护你免受未来的威胁。",
viralDescription:"你的信息流充满了未经验证的信息。",
bonusDescription:"你找到了一条可靠的信息来源。",

victory:"🏆 你完成了数字生活的一天！",
victoryText:"你完成了所有阶段，并保护了你的数字环境。",

threat:"威胁",
yes:"是",
no:"否",

source:"来源",
image:"图片",
ai:"人工智能",
date:"日期"
}

};


/* =========================================================
   PERSONAJES Y ESTILOS
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


/* =========================================================
   CONTENIDO VARIADO
   ========================================================= */

const EVENTS = {

news: [

{
title:{
es:"¡Esta bebida elimina TODAS las toxinas!",
en:"This drink removes ALL toxins!",
zh:"这种饮料可以清除所有毒素！"
},
body:{
es:"Una publicación afirma que una bebida puede eliminar todas las toxinas del cuerpo.",
en:"A post claims that a drink can remove every toxin from the human body.",
zh:"一篇帖子声称某种饮料可以清除人体内的所有毒素。"
},
fake:true
},

{
title:{
es:"Las neuronas utilizan señales eléctricas y químicas.",
en:"Neurons use electrical and chemical signals.",
zh:"神经元使用电信号和化学信号。"
},
body:{
es:"Las neuronas transmiten información mediante señales eléctricas y sustancias químicas llamadas neurotransmisores.",
en:"Neurons transmit information using electrical signals and chemicals called neurotransmitters.",
zh:"神经元通过电信号和称为神经递质的化学物质传递信息。"
},
fake:false
},

{
title:{
es:"¡Instagram puede leer tus pensamientos!",
en:"Instagram can read your thoughts!",
zh:"Instagram 可以读取你的思想！"
},
body:{
es:"Una publicación afirma que una red social puede leer directamente la mente de sus usuarios.",
en:"A post claims that a social media platform can directly read its users' minds.",
zh:"一篇帖子声称社交媒体平台可以直接读取用户的思想。"
},
fake:true
},

{
title:{
es:"Una foto antigua puede volver a circular como si fuera actual.",
en:"An old photo can circulate again as if it were current.",
zh:"旧照片可能会再次传播，并被误认为是最新照片。"
},
body:{
es:"Una imagen verdadera también puede desinformar si se presenta con una fecha o contexto incorrecto.",
en:"A real image can still mislead people if it is presented with the wrong date or context.",
zh:"即使图片是真实的，如果日期或背景错误，也可能造成误导。"
},
fake:false
},

{
title:{
es:"¡Un mensaje dice que debes compartirlo para evitar una multa!",
en:"A message says you must share it to avoid a fine!",
zh:"一条消息称必须转发，否则会被罚款！"
},
body:{
es:"El mensaje utiliza urgencia y miedo para convencer a las personas de compartirlo.",
en:"The message uses urgency and fear to persuade people to share it.",
zh:"这条消息利用紧迫感和恐惧来让人转发。"
},
fake:true
},

{
title:{
es:"Comparar varias fuentes ayuda a detectar errores.",
en:"Comparing several sources can help detect errors.",
zh:"比较多个来源有助于发现错误。"
},
body:{
es:"Contrastar una afirmación con fuentes independientes y confiables puede revelar información falsa o incompleta.",
en:"Checking a claim against independent and reliable sources can reveal false or incomplete information.",
zh:"将说法与独立且可靠的来源进行比较，可以发现虚假或不完整的信息。"
},
fake:false
}

],

question: [

{
q:{
es:"Ves una noticia sorprendente. ¿Qué deberías hacer primero?",
en:"You see a surprising news story. What should you do first?",
zh:"你看到一条令人震惊的新闻。首先应该做什么？"
},
correct:{
es:"Buscar quién publicó originalmente la información.",
en:"Find who originally published the information.",
zh:"寻找最初发布这条信息的人。"
},
wrong:{
es:"Compartirla rápidamente antes de que desaparezca.",
en:"Share it quickly before it disappears.",
zh:"趁它消失之前赶快转发。"
}
},

{
q:{
es:"Una publicación usa MAYÚSCULAS y muchos signos de exclamación. ¿Eso demuestra que es cierta?",
en:"A post uses CAPITAL LETTERS and many exclamation marks. Does that prove it is true?",
zh:"一篇帖子使用大量大写字母和感叹号。这能证明它是真的吗？"
},
correct:{
es:"No. El estilo de escritura no demuestra que una afirmación sea verdadera.",
en:"No. Writing style does not prove that a claim is true.",
zh:"不能。写作风格不能证明信息是真的。"
},
wrong:{
es:"Sí. Si parece urgente debe ser verdadera.",
en:"Yes. If it looks urgent, it must be true.",
zh:"是的。如果看起来很紧急，就一定是真的。"
}
},

{
q:{
es:"Encuentras una captura de pantalla sin enlace. ¿Qué haces?",
en:"You find a screenshot with no link. What do you do?",
zh:"你看到一张没有链接的截图。你会怎么做？"
},
correct:{
es:"Buscas la publicación original y el contexto completo.",
en:"Look for the original post and its full context.",
zh:"寻找原始帖子和完整背景。"
},
wrong:{
es:"La compartes porque la captura parece auténtica.",
en:"Share it because the screenshot looks authentic.",
zh:"因为截图看起来真实，所以转发。"
}
}

],

ai: [

{
q:{
es:"¿Qué puede ser una señal de una imagen generada por IA?",
en:"What could be a sign that an image was generated by AI?",
zh:"什么可能表明图片是人工智能生成的？"
},
correct:{
es:"Detalles extraños, manos deformes o inconsistencias visuales.",
en:"Strange details, distorted hands, or visual inconsistencies.",
zh:"奇怪的细节、变形的手或视觉上的不一致。"
},
wrong:{
es:"Que tenga muchos likes.",
en:"That it has many likes.",
zh:"它有很多点赞。"
}
},

{
q:{
es:"Una imagen tiene texto extraño y letras que cambian de forma. ¿Qué haces?",
en:"An image has strange text and letters that change shape. What do you do?",
zh:"一张图片中的文字很奇怪，而且字母形状不一致。你会怎么做？"
},
correct:{
es:"Investigas la imagen y buscas señales de generación o edición.",
en:"Investigate the image and look for signs of generation or editing.",
zh:"调查图片并寻找人工生成或编辑的迹象。"
},
wrong:{
es:"La compartes porque se ve profesional.",
en:"Share it because it looks professional.",
zh:"因为它看起来很专业，所以转发。"
}
},

{
q:{
es:"Una persona aparece con manos imposibles en una fotografía. ¿Qué sospechas?",
en:"A person has impossible-looking hands in a photograph. What do you suspect?",
zh:"照片中的人物手部看起来不自然。你会怀疑什么？"
},
correct:{
es:"Que la imagen podría estar generada o manipulada digitalmente.",
en:"The image may have been generated or digitally manipulated.",
zh:"图片可能是人工生成或经过数字修改的。"
},
wrong:{
es:"Que todas las fotografías reales tienen errores.",
en:"That all real photographs have mistakes.",
zh:"所有真实照片都会有错误。"
}
}

],

deepfake: [

{
q:{
es:"Un video muestra a una persona famosa diciendo algo extraordinario. ¿Qué haces?",
en:"A video shows a famous person saying something extraordinary. What do you do?",
zh:"一段视频显示名人在说非常离奇的话。你会怎么做？"
},
correct:{
es:"Buscas otras fuentes y verificas el video antes de compartirlo.",
en:"Look for other sources and verify the video before sharing it.",
zh:"寻找其他来源并在转发前验证视频。"
},
wrong:{
es:"Lo compartes porque puedes ver y escuchar a la persona.",
en:"Share it because you can see and hear the person.",
zh:"因为能看到并听到这个人，所以直接转发。"
}
},

{
q:{
es:"Un video tiene movimientos faciales extraños. ¿Cuál es una buena reacción?",
en:"A video has unusual facial movements. What is a good response?",
zh:"一段视频中的面部动作很奇怪。正确的做法是什么？"
},
correct:{
es:"Investigar el origen del video y buscar verificaciones independientes.",
en:"Investigate the video's origin and look for independent verification.",
zh:"调查视频来源，并寻找独立验证。"
},
wrong:{
es:"Asumir que es real porque tiene buena calidad.",
en:"Assume it is real because the quality is good.",
zh:"因为画质很好，就认为它是真的。"
}
},

{
q:{
es:"Un audio parece imitar perfectamente la voz de alguien. ¿Qué haces?",
en:"An audio clip appears to perfectly imitate someone's voice. What do you do?",
zh:"一段音频似乎完美模仿了某人的声音。你会怎么做？"
},
correct:{
es:"No confías solo en la voz; buscas una fuente verificable.",
en:"Do not rely only on the voice; look for a verifiable source.",
zh:"不要只相信声音；寻找可以验证的来源。"
},
wrong:{
es:"Lo das por verdadero porque reconoces la voz.",
en:"Assume it is true because you recognize the voice.",
zh:"因为你认识这个声音，所以认为它是真的。"
}
}

],

social: [

{
q:{
es:"Una publicación tiene 2 millones de likes. ¿Eso demuestra que es verdadera?",
en:"A post has 2 million likes. Does that prove it is true?",
zh:"一条帖子有200万个赞。这能证明它是真的吗？"
},
correct:{
es:"No. La popularidad no demuestra veracidad.",
en:"No. Popularity does not prove accuracy.",
zh:"不能。受欢迎并不能证明信息准确。"
},
wrong:{
es:"Sí. Si tiene muchos likes debe ser cierta.",
en:"Yes. If it has many likes it must be true.",
zh:"是的。有很多点赞就一定是真的。"
}
},

{
q:{
es:"Tu amigo comparte una noticia sin fuente. ¿Qué haces?",
en:"Your friend shares a news story without a source. What do you do?",
zh:"你的朋友分享了一条没有来源的新闻。你会怎么做？"
},
correct:{
es:"Preguntas por la fuente antes de compartirla.",
en:"Ask for the source before sharing it.",
zh:"在转发前询问信息来源。"
},
wrong:{
es:"La compartes porque confías en tu amigo.",
en:"Share it because you trust your friend.",
zh:"因为你相信朋友，所以转发。"
}
},

{
q:{
es:"Un influencer recomienda una supuesta cura milagrosa. ¿Qué haces?",
en:"An influencer recommends a supposed miracle cure. What do you do?",
zh:"一位网红推荐所谓的神奇疗法。你会怎么做？"
},
correct:{
es:"Buscas evidencia y fuentes confiables antes de creerlo.",
en:"Look for evidence and reliable sources before believing it.",
zh:"在相信之前寻找证据和可靠来源。"
},
wrong:{
es:"La crees porque el influencer tiene millones de seguidores.",
en:"Believe it because the influencer has millions of followers.",
zh:"因为网红有数百万粉丝，所以相信。"
}
}

]

};


/* =========================================================
   TIPOS DE CASILLA
   ========================================================= */

const TILE_PATTERN = [
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
"ai",
"news"
];


/* =========================================================
   NAVEGACIÓN
   ========================================================= */

function navigateTo(pageId) {

  document.querySelectorAll(".page-view").forEach(page => {
    page.classList.add("hidden");
  });

  const page = document.getElementById(pageId);

  if (!page) return;

  page.classList.remove("hidden");

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");

    const action = btn.getAttribute("onclick") || "";

    if (action.includes(pageId)) {
      btn.classList.add("active");
    }
  });

}


/* =========================================================
   IDIOMA
   ========================================================= */

function changeLanguage(lang) {

  if (!TEXT[lang]) {
    lang = "es";
  }

  currentLanguage = lang;

  document.documentElement.lang = lang;

  const select = document.getElementById("lang-select");

  if (select && select.value !== lang) {
    select.value = lang;
  }

  applyTranslations();

  createBoard();
  updateHUD();
  updateAvatarPreview();
  updateAvatar();

  if (currentEvent && !document.getElementById("event-modal").classList.contains("hidden")) {
    reopenCurrentEvent();
  }

  renderViruses();

}


function applyTranslations() {

  const t = TEXT[currentLanguage];

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if (Object.prototype.hasOwnProperty.call(t, key)) {
      element.innerHTML = t[key];
    }

  });

}


/* =========================================================
   PERSONAJE
   ========================================================= */

function selectCharacter(type, button) {

  if (!characterIcons[type]) return;

  selectedCharacter = type;

  document.querySelectorAll(".character-option")
    .forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  updateAvatarPreview();
}


function selectStyle(style, button) {

  if (!styleIcons[style]) return;

  selectedStyle = style;

  document.querySelectorAll(".style-option")
    .forEach(b => b.classList.remove("selected"));

  button.classList.add("selected");

  updateAvatarPreview();
}


function updateAvatarPreview() {

  const avatar = document.getElementById("avatar-preview");
  const style = document.getElementById("preview-style");

  if (avatar) {
    avatar.textContent = characterIcons[selectedCharacter];
  }

  if (style) {
    style.textContent = styleIcons[selectedStyle];
  }

}


function updateAvatar() {

  const avatar = document.getElementById("player-avatar");
  const style = document.getElementById("player-style");

  if (avatar) {
    avatar.textContent = characterIcons[selectedCharacter];
  }

  if (style) {
    style.textContent = styleIcons[selectedStyle];
  }

}


function confirmCharacter() {

  updateAvatar();

  gameStarted = true;

  navigateTo("page-game");

  createBoard();
  updateHUD();

}


/* =========================================================
   INICIO
   ========================================================= */

function startGame() {

  resetGame();

  navigateTo("page-character");

}


/* =========================================================
   RESET
   ========================================================= */

function resetGame() {

  playerPosition = 0;
  followers = 100;
  shields = 1;
  viralLoad = 0;
  viruses = [];
  currentEvent = null;
  isMoving = false;

  updateHUD();
  renderViruses();

}


/* =========================================================
   TABLERO
   ========================================================= */

function createBoard() {

  const board = document.getElementById("game-board");

  if (!board) return;

  board.innerHTML = "";

  for (let i = 0; i < TOTAL_TILES; i++) {

    const tile = document.createElement("div");

    tile.className = "tile";

    const stage = getStage(i);

    tile.classList.add("stage" + stage);

    const type = getTileType(i);

    tile.dataset.position = i;
    tile.dataset.type = type;

    const visual = getTileVisual(type);

    tile.innerHTML = `
      <div class="tile-number">${i + 1}</div>
      <div class="tile-icon">${visual.icon}</div>
      <span class="tile-label">${visual.name}</span>
    `;

    board.appendChild(tile);
  }

  renderPlayer();
}


function getStage(position) {

  if (position < 12) return 1;
  if (position < 24) return 2;
  if (position < 36) return 3;

  return 4;
}


function getTileType(position) {

  if (position === 0) return "start";
  if (position === TOTAL_TILES - 1) return "finish";

  return TILE_PATTERN[(position - 1) % TILE_PATTERN.length];
}


function getTileVisual(type) {

  const names = {

    news: {
      icon:"📰",
      name:{
        es:"Noticia",
        en:"News",
        zh:"新闻"
      }
    },

    question:{
      icon:"🧠",
      name:{
        es:"Reto",
        en:"Challenge",
        zh:"挑战"
      }
    },

    ai:{
      icon:"🤖",
      name:{
        es:"IA",
        en:"AI",
        zh:"人工智能"
      }
    },

    deepfake:{
      icon:"🎭",
      name:{
        es:"Deepfake",
        en:"Deepfake",
        zh:"深度伪造"
      }
    },

    social:{
      icon:"📱",
      name:{
        es:"Redes",
        en:"Social",
        zh:"社交媒体"
      }
    },

    shield:{
      icon:"🛡️",
      name:{
        es:"Escudo",
        en:"Shield",
        zh:"护盾"
      }
    },

    viral:{
      icon:"🦠",
      name:{
        es:"Viral",
        en:"Viral",
        zh:"病毒"
      }
    },

    bonus:{
      icon:"⭐",
      name:{
        es:"Bonus",
        en:"Bonus",
        zh:"奖励"
      }
    },

    start:{
      icon:"🚀",
      name:{
        es:"Inicio",
        en:"Start",
        zh:"开始"
      }
    },

    finish:{
      icon:"🏆",
      name:{
        es:"Meta",
        en:"Finish",
        zh:"终点"
      }
    }

  };

  return {
    icon:names[type].icon,
    name:names[type].name[currentLanguage]
  };
}


/* =========================================================
   RUEDA
   ========================================================= */

function spinWheel() {

  if (isMoving) return;

  const button = document.getElementById("spin-button");

  if (!button) return;

  button.disabled = true;

  isMoving = true;

  const moves = Math.floor(Math.random() * 4) + 1;

  const result = document.getElementById("wheel-result");

  if (result) {
    result.textContent = `🎲 +${moves}`;
  }

  setTimeout(() => {
    movePlayer(moves);
  }, 500);

}


/* =========================================================
   MOVER JUGADOR
   ========================================================= */

function movePlayer(moves) {

  let steps = 0;

  const interval = setInterval(() => {

    if (steps >= moves || playerPosition >= TOTAL_TILES - 1) {

      clearInterval(interval);

      isMoving = false;

      setTimeout(triggerTileEvent, 350);

      return;
    }

    playerPosition++;

    renderPlayer();
    updateHUD();

    steps++;

  }, 350);

}


/* =========================================================
   RENDER JUGADOR
   ========================================================= */

function renderPlayer() {

  document.querySelectorAll(".tile-car")
    .forEach(car => car.remove());

  document.querySelectorAll(".tile")
    .forEach(tile => tile.classList.remove("current"));

  const tile = document.querySelector(
    `.tile[data-position="${playerPosition}"]`
  );

  if (!tile) return;

  tile.classList.add("current");

  const car = document.createElement("div");

  car.className = "tile-car";
  car.textContent = "🚗";

  tile.appendChild(car);

  updateStageProgress();
}


function updateStageProgress() {

  const stage = getStage(playerPosition);

  document.querySelectorAll(".stage-point")
    .forEach((point,index) => {

      point.classList.toggle(
        "active",
        index + 1 <= stage
      );

    });

}


/* =========================================================
   EVENTOS
   ========================================================= */

function triggerTileEvent() {

  if (playerPosition >= TOTAL_TILES - 1) {

    showVictory();

    return;
  }

  const tile = document.querySelector(
    `.tile[data-position="${playerPosition}"]`
  );

  const type = tile ? tile.dataset.type : "question";

  openEvent(type);
}


/* =========================================================
   ABRIR EVENTO
   ========================================================= */

function openEvent(type) {

  const modal = document.getElementById("event-modal");

  if (!modal) return;

  const t = TEXT[currentLanguage];

  document.getElementById("event-content").innerHTML = "";
  document.getElementById("event-actions").innerHTML = "";

  currentEvent = {
    type:type,
    data:null
  };

  if (type === "news") {

    const item = randomEvent(EVENTS.news);

    currentEvent.data = item;

    showQuestionEvent(
      "📰",
      t.newsTitle,
      item.body[currentLanguage],
      `
        <div class="news-card">
          <h3>${item.title[currentLanguage]}</h3>
          <p>${item.body[currentLanguage]}</p>
        </div>
      `,
      [
        {
          text:t.correct,
          callback:() => evaluateNews(true)
        },
        {
          text:t.wrong,
          callback:() => evaluateNews(false)
        }
      ]
    );

  }

  else if (
    type === "question" ||
    type === "ai" ||
    type === "deepfake" ||
    type === "social"
  ) {

    const item = randomEvent(EVENTS[type]);

    currentEvent.data = item;

    const titleMap = {
      question:t.questionTitle,
      ai:t.aiTitle,
      deepfake:t.deepfakeTitle,
      social:t.socialTitle
    };

    const iconMap = {
      question:"🧠",
      ai:"🤖",
      deepfake:"🎭",
      social:"📱"
    };

    showQuestionEvent(
      iconMap[type],
      titleMap[type],
      item.q[currentLanguage],
      "",
      [
        {
          text:item.correct[currentLanguage],
          callback:correctAnswer
        },
        {
          text:item.wrong[currentLanguage],
          callback:wrongAnswer
        }
      ]
    );

  }

  else if (type === "shield") {

    showQuestionEvent(
      "🛡️",
      t.shieldTitle,
      t.shieldDescription,
      "",
      [
        {
          text:"+1 🛡️",
          callback:() => {

            shields++;

            closeEvent();
            updateHUD();

          }
        }
      ]
    );

  }

  else if (type === "viral") {

    showQuestionEvent(
      "🦠",
      t.viralTitle,
      t.viralDescription,
      "",
      [
        {
          text:t.useShield,
          callback:useShield
        },
        {
          text:t.continueWithoutShield,
          callback:() => {

            viralLoad = Math.min(100, viralLoad + 15);

            closeEvent();
            updateHUD();

          }
        }
      ]
    );

  }

  else if (type === "bonus") {

    showQuestionEvent(
      "⭐",
      t.bonusTitle,
      t.bonusDescription,
      "",
      [
        {
          text:"+50 👥",
          callback:() => {

            followers += 50;

            closeEvent();
            updateHUD();

          }
        }
      ]
    );

  }

  modal.classList.remove("hidden");

}


function showQuestionEvent(icon,title,description,content,buttons) {

  document.getElementById("event-icon").textContent = icon;
  document.getElementById("event-title").textContent = title;
  document.getElementById("event-description").textContent = description;

  document.getElementById("event-content").innerHTML = content;

  const actions = document.getElementById("event-actions");

  actions.innerHTML = "";

  buttons.forEach(buttonData => {

    addAnswerButton(
      buttonData.text,
      buttonData.callback
    );

  });

}


function reopenCurrentEvent() {

  if (!currentEvent) return;

  openEvent(currentEvent.type);

}


/* =========================================================
   BOTONES
   ========================================================= */

function addAnswerButton(text,callback) {

  const button = document.createElement("button");

  button.className = "event-option";
  button.textContent = text;

  button.onclick = callback;

  document.getElementById("event-actions")
    .appendChild(button);

}


/* =========================================================
   RANDOM
   ========================================================= */

function randomEvent(array) {

  return array[
    Math.floor(Math.random() * array.length)
  ];

}


/* =========================================================
   NOTICIAS
   ========================================================= */

function evaluateNews(userSaysShare) {

  if (!currentEvent || !currentEvent.data) return;

  const news = currentEvent.data;

  /*
    fake = true
    -> lo correcto es NO compartir

    fake = false
    -> lo correcto es poder compartir
       después de verificar
  */

  const correct =
    (news.fake && !userSaysShare) ||
    (!news.fake && userSaysShare);

  if (correct) {
    correctAnswer();
  } else {
    wrongAnswer();
  }

}


/* =========================================================
   RESPUESTAS
   ========================================================= */

function correctAnswer() {

  followers += 30;

  const score = document.getElementById("your-score");

  if (score) {
    score.textContent = followers;
  }

  closeEvent();

  updateHUD();

}


function wrongAnswer() {

  const t = TEXT[currentLanguage];

  if (shields > 0) {

    const use = window.confirm(
      currentLanguage === "es"
      ? "¡Te equivocaste! ¿Quieres usar un escudo?"
      : currentLanguage === "en"
      ? "You made a mistake! Do you want to use a shield?"
      : "你答错了！要使用护盾吗？"
    );

    if (use) {

      shields--;

      closeEvent();
      updateHUD();

      return;
    }

  }

  viralLoad = Math.min(100, viralLoad + 15);

  addVirus();

  closeEvent();

  showError(t.wrongMessage);

  updateHUD();

}


/* =========================================================
   VIRUS
   ========================================================= */

const VIRUSES = [
"🦠",
"🧫",
"👾",
"🕷️",
"☣️",
"🤖",
"💀",
"🪱",
"🧬",
"👹"
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

  if (!container) return;

  container.innerHTML = "";

  viruses.forEach((virus,index) => {

    const span = document.createElement("span");

    span.textContent = virus;

    span.title =
      `${TEXT[currentLanguage].threat} ${index + 1}`;

    container.appendChild(span);

  });

}


/* =========================================================
   ERROR
   ========================================================= */

function showError(message) {

  const screen =
    document.getElementById("error-screen");

  const messageElement =
    document.getElementById("error-message");

  messageElement.textContent =
    message || TEXT[currentLanguage].errorWrong;

  screen.classList.remove("hidden");

}


function closeError() {

  document
    .getElementById("error-screen")
    .classList.add("hidden");

  const button =
    document.getElementById("spin-button");

  if (button && !isMoving) {
    button.disabled = false;
  }

}


/* =========================================================
   ESCUDO
   ========================================================= */

function useShield() {

  if (shields <= 0) {

    wrongAnswer();

    return;
  }

  shields--;

  closeEvent();
  updateHUD();

}


/* =========================================================
   CERRAR EVENTO
   ========================================================= */

function closeEvent() {

  const modal =
    document.getElementById("event-modal");

  if (modal) {
    modal.classList.add("hidden");
  }

}


/* =========================================================
   HUD
   ========================================================= */

function updateHUD() {

  const position =
    document.getElementById("position-value");

  const followersElement =
    document.getElementById("followers-count");

  const shieldsElement =
    document.getElementById("shields-count");

  const viralElement =
    document.getElementById("viral-count");

  if (position) {
    position.textContent =
      `${playerPosition + 1}/${TOTAL_TILES}`;
  }

  if (followersElement) {
    followersElement.textContent = followers;
  }

  if (shieldsElement) {
    shieldsElement.textContent = shields;
  }

  if (viralElement) {
    viralElement.textContent =
      viralLoad + "%";
  }

  const score =
    document.getElementById("your-score");

  if (score) {
    score.textContent = followers;
  }

}


/* =========================================================
   VICTORIA
   ========================================================= */

function showVictory() {

  const t = TEXT[currentLanguage];

  const modal =
    document.getElementById("event-modal");

  document.getElementById("event-icon")
    .textContent = "🏆";

  document.getElementById("event-title")
    .textContent = t.victory;

  document.getElementById("event-description")
    .textContent = t.victoryText;

  document.getElementById("event-content")
    .innerHTML = `
      <div class="news-card">
        ⭐ ${t.position}: ${playerPosition + 1}/${TOTAL_TILES}<br><br>
        👥 ${t.followers}: ${followers}<br><br>
        🛡️ ${t.shields}: ${shields}<br><br>
        🦠 ${t.viralLoad}: ${viralLoad}%
      </div>
    `;

  document.getElementById("event-actions")
    .innerHTML = "";

  addAnswerButton(
    t.next,
    () => {

      closeEvent();

      resetGame();

      createBoard();
      updateHUD();

    }
  );

  modal.classList.remove("hidden");

}


/* =========================================================
   LABORATORIO
   ========================================================= */

function labTool(tool) {

  const output =
    document.getElementById("lab-output");

  const responses = {

    source:{
      es:"🔎 FUENTE: Busca quién publicó originalmente la afirmación y comprueba si fuentes confiables e independientes la confirman.",
      en:"🔎 SOURCE: Find who originally published the claim and check whether reliable, independent sources confirm it.",
      zh:"🔎 来源：寻找最初发布该说法的人，并检查可靠且独立的来源是否确认。"
    },

    image:{
      es:"🖼️ IMAGEN: Comprueba si la imagen es reciente, busca su origen y revisa si está fuera de contexto o manipulada.",
      en:"🖼️ IMAGE: Check whether the image is recent, find its origin, and look for signs that it is out of context or manipulated.",
      zh:"🖼️ 图片：检查图片是否最新，寻找来源，并确认它是否脱离背景或经过修改。"
    },

    ai:{
      es:"🤖 IA: Busca manos extrañas, texto deformado, sombras imposibles, reflejos inconsistentes y detalles que no tengan sentido.",
      en:"🤖 AI: Look for strange hands, distorted text, impossible shadows, inconsistent reflections, and details that do not make sense.",
      zh:"🤖 人工智能：寻找奇怪的手部、变形文字、不合理的阴影、不一致的反射以及不合逻辑的细节。"
    },

    date:{
      es:"📅 FECHA: Comprueba cuándo ocurrió realmente el evento y si la publicación está utilizando una noticia antigua.",
      en:"📅 DATE: Check when the event actually happened and whether the post is using an old news story.",
      zh:"📅 日期：确认事件实际发生的时间，并检查帖子是否使用旧新闻。"
    }

  };

  output.textContent =
    responses[tool][currentLanguage];

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  applyTranslations();

  createBoard();

  updateHUD();

  updateAvatarPreview();

  updateAvatar();

});
