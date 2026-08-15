/* =========================================================
   INOCULA
   Digital Life Game
   VERSION CORREGIDA
   ========================================================= */

let currentLanguage = "es";

let playerPosition = 0;
const TOTAL_TILES = 48;

let followers = 100;
let shields = 1;
let viralLoad = 0;

let selectedCharacter = "neutral";
let playerName = "";

let currentEvent = null;
let viruses = [];

let gameStarted = false;
let isMoving = false;
let eventOpen = false;


/* =========================================================
   TRADUCCIONES
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

chooseCharacter:"Crea tu personaje",
characterDescription:"Elige cómo quieres identificarte durante tu aventura.",
neutral:"Neutral",
woman:"Mujer",
man:"Hombre",

nameLabel:"Tu nombre",
namePlaceholder:"Escribe tu nombre",
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

wrong:"La respuesta no fue correcta.",

next:"Continuar",

advance:"Avanzas",

spaces:"casillas",

victory:"🏆 ¡Completaste tu día digital!",
victoryText:"Has recorrido todas las etapas y protegido tu entorno digital.",

morning:"Mañana",
school:"Escuela",
social:"Redes",
night:"Noche",

check:"Comprobar",
share:"Compartir",
doNotShare:"No compartir",

sourceQuestion:"Encuentras una noticia sorprendente en redes. ¿Qué haces primero?",
sourceCorrect:"Buscar quién publicó originalmente la información.",
sourceWrong:"Compartirla rápidamente porque parece importante.",

aiQuestion:"Una imagen parece perfecta, pero algo se siente extraño. ¿Qué haces?",
aiCorrect:"Buscar inconsistencias en manos, texto, sombras y detalles.",
aiWrong:"Creerla porque parece profesional.",

deepfakeQuestion:"Un video muestra a una persona famosa diciendo algo inesperado. ¿Qué haces?",
deepfakeCorrect:"Buscar otras fuentes y comprobar si el video es auténtico.",
deepfakeWrong:"Compartirlo inmediatamente.",

socialQuestion:"Una publicación tiene millones de likes. ¿Eso demuestra que es verdadera?",
socialCorrect:"No. La popularidad no demuestra que una información sea verdadera.",
socialWrong:"Sí. Muchos likes significan que debe ser verdad.",

shieldFound:"¡Encontraste un escudo!",
shieldText:"Este escudo puede protegerte de un error futuro.",

useShield:"Usar escudo",
noShield:"Continuar sin escudo",

viralTitle:"🦠 Zona de alta carga viral",
viralText:"Tu feed contiene mucha información sin verificar.",

bonusTitle:"⭐ Bonus",
bonusText:"Encontraste una fuente confiable. ¡Recibes seguidores!",

newsTitle:"📰 Detecta la información",

correctNews:"¡Correcto! Detectaste correctamente la información.",
wrongNews:"La decisión no fue correcta.",

reset:"Jugar de nuevo"
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

chooseCharacter:"Create your character",
characterDescription:"Choose how you want to identify yourself during your adventure.",
neutral:"Neutral",
woman:"Woman",
man:"Man",

nameLabel:"Your name",
namePlaceholder:"Enter your name",
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

errorTitle:"VERIFICATION ERROR!",

errorWrong:"You shared information without verifying it. A digital agent should stop and check before sharing.",

correct:"Excellent! Your verification was correct.",

wrong:"That answer was not correct.",

next:"Continue",

advance:"You advance",

spaces:"spaces",

victory:"🏆 You completed your digital day!",
victoryText:"You completed every stage and protected your digital environment.",

morning:"Morning",
school:"School",
social:"Social Media",
night:"Night",

check:"Check",
share:"Share",
doNotShare:"Do not share",

sourceQuestion:"You find a surprising news story on social media. What do you do first?",
sourceCorrect:"Find who originally published the information.",
sourceWrong:"Share it quickly because it looks important.",

aiQuestion:"An image looks perfect, but something feels strange. What do you do?",
aiCorrect:"Look for inconsistencies in hands, text, shadows and details.",
aiWrong:"Believe it because it looks professional.",

deepfakeQuestion:"A video shows a celebrity saying something unexpected. What do you do?",
deepfakeCorrect:"Look for other sources and check whether the video is authentic.",
deepfakeWrong:"Share it immediately.",

socialQuestion:"A post has millions of likes. Does that prove it is true?",
socialCorrect:"No. Popularity does not prove that information is true.",
socialWrong:"Yes. Many likes mean it must be true.",

shieldFound:"You found a shield!",
shieldText:"This shield can protect you from a future mistake.",

useShield:"Use shield",
noShield:"Continue without shield",

viralTitle:"🦠 High viral load zone",
viralText:"Your feed contains lots of unverified information.",

bonusTitle:"⭐ Bonus",
bonusText:"You found a reliable source. You gain followers!",

newsTitle:"📰 Check the information",

correctNews:"Correct! You identified the information properly.",
wrongNews:"That decision was not correct.",

reset:"Play again"
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

chooseCharacter:"创建你的角色",
characterDescription:"选择你在冒险中的身份。",
neutral:"中性",
woman:"女性",
man:"男性",

nameLabel:"你的名字",
namePlaceholder:"输入你的名字",
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

wrong:"这个答案不正确。",

next:"继续",

advance:"你前进了",

spaces:"格",

victory:"🏆 你完成了数字生活的一天！",
victoryText:"你完成了所有阶段，并保护了你的数字环境。",

morning:"早晨",
school:"学校",
social:"社交媒体",
night:"夜晚",

check:"检查",
share:"分享",
doNotShare:"不分享",

sourceQuestion:"你在社交媒体上看到一条令人惊讶的新闻。你首先会做什么？",
sourceCorrect:"寻找最初发布这条信息的人。",
sourceWrong:"因为看起来很重要，所以马上分享。",

aiQuestion:"一张图片看起来非常完美，但有些地方很奇怪。你会怎么做？",
aiCorrect:"检查手部、文字、阴影和细节是否存在不一致。",
aiWrong:"因为看起来很专业，所以相信它。",

deepfakeQuestion:"一个视频显示一位名人在说一些奇怪的话。你会怎么做？",
deepfakeCorrect:"寻找其他来源并检查视频是否真实。",
deepfakeWrong:"立即分享。",

socialQuestion:"一条帖子有数百万个赞。这能证明它是真的吗？",
socialCorrect:"不能。受欢迎并不能证明信息是真的。",
socialWrong:"是的。有很多点赞就一定是真的。",

shieldFound:"你找到了护盾！",
shieldText:"这个护盾可以保护你免受未来的错误。",

useShield:"使用护盾",
noShield:"不使用护盾继续",

viralTitle:"🦠 高病毒负荷区域",
viralText:"你的信息流中有很多未经验证的信息。",

bonusTitle:"⭐ 奖励",
bonusText:"你找到了一条可靠的信息来源。你获得了关注者！",

newsTitle:"📰 检查信息",

correctNews:"正确！你正确识别了这条信息。",
wrongNews:"这个决定不正确。",

reset:"重新开始"
}

};


/* =========================================================
   NOTICIAS
   ========================================================= */

const NEWS = {

es:[
{
icon:"🚨",
title:"¡Esta bebida elimina TODAS las toxinas!",
body:"Una publicación afirma que una bebida puede eliminar todas las toxinas del cuerpo.",
fake:true
},
{
icon:"📰",
title:"Las neuronas utilizan señales eléctricas y químicas.",
body:"Las neuronas transmiten información mediante señales eléctricas y neurotransmisores.",
fake:false
},
{
icon:"🚨",
title:"¡Instagram puede leer tus pensamientos!",
body:"Una publicación afirma que las redes sociales pueden leer directamente la mente.",
fake:true
},
{
icon:"🧠",
title:"Comparar diferentes fuentes ayuda a verificar información.",
body:"Contrastar una afirmación con varias fuentes confiables puede revelar errores.",
fake:false
},
{
icon:"🚨",
title:"¡Beber agua con limón cura cualquier infección!",
body:"Un mensaje viral asegura que beber agua con limón elimina cualquier infección sin necesidad de tratamiento.",
fake:true
},
{
icon:"📰",
title:"Dormir suficiente ayuda a mantener funciones cognitivas saludables.",
body:"El sueño adecuado está relacionado con la memoria, la atención y otros procesos cognitivos.",
fake:false
}
],

en:[
{
icon:"🚨",
title:"This drink removes ALL toxins from your body!",
body:"A post claims that a drink can remove every toxin from the human body.",
fake:true
},
{
icon:"📰",
title:"Neurons use electrical and chemical signals.",
body:"Neurons transmit information using electrical signals and neurotransmitters.",
fake:false
},
{
icon:"🚨",
title:"Instagram can read your thoughts!",
body:"A post claims that social media platforms can directly read people's minds.",
fake:true
},
{
icon:"🧠",
title:"Comparing different sources helps verify information.",
body:"Checking a claim against multiple reliable sources can reveal errors.",
fake:false
},
{
icon:"🚨",
title:"Drinking lemon water cures every infection!",
body:"A viral message claims that lemon water can eliminate any infection without medical treatment.",
fake:true
},
{
icon:"📰",
title:"Getting enough sleep supports healthy cognitive functions.",
body:"Adequate sleep is associated with memory, attention and other cognitive processes.",
fake:false
}
],

zh:[
{
icon:"🚨",
title:"这种饮料可以清除体内所有毒素！",
body:"一篇帖子声称某种饮料可以清除人体内的所有毒素。",
fake:true
},
{
icon:"📰",
title:"神经元使用电信号和化学信号。",
body:"神经元通过电信号和神经递质传递信息。",
fake:false
},
{
icon:"🚨",
title:"Instagram 可以读取你的思想！",
body:"一篇帖子声称社交媒体可以直接读取人的思想。",
fake:true
},
{
icon:"🧠",
title:"比较不同的信息来源有助于验证信息。",
body:"将一个说法与多个可靠来源进行比较可以发现错误。",
fake:false
},
{
icon:"🚨",
title:"喝柠檬水可以治愈所有感染！",
body:"一条病毒式消息声称柠檬水可以在没有治疗的情况下消除任何感染。",
fake:true
},
{
icon:"📰",
title:"充足的睡眠有助于保持健康的认知功能。",
body:"充足的睡眠与记忆力、注意力和其他认知过程有关。",
fake:false
}
]

};


/* =========================================================
   RETOS
   ========================================================= */

const CHALLENGES = {

es:[
{
q:"Recibes una noticia alarmante en un grupo familiar. ¿Qué haces primero?",
correct:"Busco la fuente original antes de compartir.",
wrong:"La comparto porque viene de alguien que conozco."
},
{
q:"Una publicación dice que una celebridad fue arrestada. ¿Qué haces?",
correct:"Busco confirmación en medios confiables.",
wrong:"La comparto porque todos están hablando de eso."
},
{
q:"Un titular dice que una investigación científica demuestra algo increíble. ¿Qué haces?",
correct:"Busco el estudio y reviso quién lo realizó.",
wrong:"Creo el titular sin revisar la investigación."
},
{
q:"Una publicación te pide compartirla para evitar que sea eliminada. ¿Qué haces?",
correct:"Me detengo y verifico quién la publicó.",
wrong:"La comparto inmediatamente para ayudar."
},
{
q:"Una cuenta desconocida afirma tener información exclusiva. ¿Qué haces?",
correct:"Investigo la cuenta y busco otras fuentes.",
wrong:"Confío en ella porque dice ser información exclusiva."
}
],

en:[
{
q:"You receive an alarming story in a family group chat. What do you do first?",
correct:"I look for the original source before sharing.",
wrong:"I share it because it came from someone I know."
},
{
q:"A post says a celebrity was arrested. What do you do?",
correct:"I look for confirmation from reliable news sources.",
wrong:"I share it because everyone is talking about it."
},
{
q:"A headline says a scientific study proves something incredible. What do you do?",
correct:"I find the study and check who conducted it.",
wrong:"I believe the headline without checking the study."
},
{
q:"A post asks you to share it before it gets deleted. What do you do?",
correct:"I stop and verify who published it.",
wrong:"I share it immediately to help."
},
{
q:"An unknown account claims to have exclusive information. What do you do?",
correct:"I investigate the account and look for other sources.",
wrong:"I trust it because it claims to be exclusive information."
}
],

zh:[
{
q:"你在家庭群里收到一条令人担忧的新闻。首先怎么办？",
correct:"在分享之前寻找原始来源。",
wrong:"因为是认识的人发的，所以直接分享。"
},
{
q:"一篇帖子说某位名人被捕了。你会怎么做？",
correct:"寻找可靠新闻来源进行确认。",
wrong:"因为大家都在讨论，所以直接分享。"
},
{
q:"一个标题说某项科学研究证明了令人难以置信的事情。怎么办？",
correct:"寻找研究并确认是谁完成的。",
wrong:"不查看研究，直接相信标题。"
},
{
q:"一篇帖子要求你赶快分享，否则就会被删除。怎么办？",
correct:"停下来确认是谁发布的。",
wrong:"为了帮助别人立即分享。"
},
{
q:"一个陌生账号声称拥有独家信息。怎么办？",
correct:"调查账号并寻找其他来源。",
wrong:"因为它说是独家信息，所以相信它。"
}
]

};


/* =========================================================
   RETOS IA
   ========================================================= */

const AI_CHALLENGES = {

es:[
{
q:"Una foto tiene manos con seis dedos. ¿Qué señal es?",
correct:"Una posible señal de contenido generado por IA.",
wrong:"Una prueba de que la foto es auténtica."
},
{
q:"El texto de un cartel aparece deformado y sin sentido. ¿Qué haces?",
correct:"Considero que podría haber sido generado por IA y lo verifico.",
wrong:"Asumo que es auténtico porque parece una fotografía."
},
{
q:"Una persona aparece con reflejos diferentes en cada ojo. ¿Qué haces?",
correct:"Busco inconsistencias antes de confiar en la imagen.",
wrong:"La considero real automáticamente."
},
{
q:"Una imagen tiene iluminación imposible y sombras contradictorias. ¿Qué haces?",
correct:"La analizo antes de compartirla.",
wrong:"La comparto porque tiene buena calidad."
},
{
q:"Un rostro parece demasiado perfecto y cambia ligeramente entre imágenes. ¿Qué haces?",
correct:"Investigo el origen de las imágenes.",
wrong:"Confío en ellas porque parecen profesionales."
}
],

en:[
{
q:"A photo shows a hand with six fingers. What could this be?",
correct:"A possible sign of AI-generated content.",
wrong:"Proof that the photo is authentic."
},
{
q:"The text on a sign looks distorted and meaningless. What do you do?",
correct:"I consider that it may be AI-generated and verify it.",
wrong:"I assume it is authentic because it looks like a photograph."
},
{
q:"A person has different reflections in each eye. What do you do?",
correct:"I look for inconsistencies before trusting the image.",
wrong:"I automatically consider it real."
},
{
q:"An image has impossible lighting and contradictory shadows. What do you do?",
correct:"I analyze it before sharing it.",
wrong:"I share it because the image quality is high."
},
{
q:"A face looks extremely perfect and changes slightly between images. What do you do?",
correct:"I investigate where the images came from.",
wrong:"I trust them because they look professional."
}
],

zh:[
{
q:"一张照片中的手有六根手指。这可能是什么？",
correct:"可能是人工智能生成内容的迹象。",
wrong:"证明这张照片是真实的。"
},
{
q:"一个标牌上的文字看起来变形且没有意义。怎么办？",
correct:"考虑它可能是人工智能生成的，并进行验证。",
wrong:"因为看起来像照片，所以认为它是真的。"
},
{
q:"一个人的两只眼睛反射不同。怎么办？",
correct:"在相信图片之前寻找不一致之处。",
wrong:"直接认为图片是真的。"
},
{
q:"一张图片的光线不合理，阴影也互相矛盾。怎么办？",
correct:"在分享之前进行分析。",
wrong:"因为图片质量很好，所以直接分享。"
},
{
q:"一个人的脸看起来过于完美，而且不同图片中略有变化。怎么办？",
correct:"调查这些图片的来源。",
wrong:"因为看起来很专业，所以相信它们。"
}
]

};


/* =========================================================
   RETOS REDES
   ========================================================= */

const SOCIAL_CHALLENGES = {

es:[
{
q:"Una publicación tiene 2 millones de likes. ¿Eso demuestra que es verdadera?",
correct:"No. La popularidad no demuestra veracidad.",
wrong:"Sí. Muchos likes significan que debe ser verdad."
},
{
q:"Un influencer recomienda un producto y dice que está científicamente comprobado. ¿Qué haces?",
correct:"Busco la evidencia científica.",
wrong:"Le creo porque tiene muchos seguidores."
},
{
q:"Una publicación usa MAYÚSCULAS y muchos signos de exclamación. ¿Qué haces?",
correct:"Me detengo y verifico la información.",
wrong:"La creo porque parece urgente."
},
{
q:"Un video se vuelve viral pero nadie menciona la fuente original. ¿Qué haces?",
correct:"Busco el origen del video.",
wrong:"Lo comparto porque ya es viral."
},
{
q:"Una publicación dice 'TODOS están hablando de esto'. ¿Qué significa?",
correct:"Es una frase que busca llamar la atención, no demostrar que sea cierta.",
wrong:"Significa que necesariamente es verdadera."
}
],

en:[
{
q:"A post has 2 million likes. Does that prove it is true?",
correct:"No. Popularity does not prove accuracy.",
wrong:"Yes. Many likes mean it must be true."
},
{
q:"An influencer recommends a product and says it is scientifically proven. What do you do?",
correct:"I look for the scientific evidence.",
wrong:"I believe them because they have many followers."
},
{
q:"A post uses ALL CAPS and many exclamation marks. What do you do?",
correct:"I stop and verify the information.",
wrong:"I believe it because it seems urgent."
},
{
q:"A video goes viral but nobody mentions the original source. What do you do?",
correct:"I look for where the video came from.",
wrong:"I share it because it is already viral."
},
{
q:"A post says 'EVERYONE is talking about this'. What does that mean?",
correct:"It is attention-grabbing language, not proof that the claim is true.",
wrong:"It means the information must be true."
}
],

zh:[
{
q:"一条帖子有200万个赞。这能证明它是真的吗？",
correct:"不能。受欢迎并不能证明信息准确。",
wrong:"是的。有很多点赞就一定是真的。"
},
{
q:"一个网红推荐产品并说它经过科学证明。怎么办？",
correct:"寻找科学证据。",
wrong:"因为他有很多粉丝，所以相信他。"
},
{
q:"一篇帖子使用大量大写字母和感叹号。怎么办？",
correct:"停下来验证信息。",
wrong:"因为看起来很紧急，所以相信它。"
},
{
q:"一个视频变得非常热门，但没人提到原始来源。怎么办？",
correct:"寻找视频的来源。",
wrong:"因为已经很热门，所以分享。"
},
{
q:"一篇帖子说“所有人都在讨论这个”。这意味着什么？",
correct:"这是吸引注意力的说法，并不能证明信息是真的。",
wrong:"这意味着信息一定是真的。"
}
]

};


/* =========================================================
   NAVEGACIÓN
   ========================================================= */

function navigateTo(pageId) {

  document.querySelectorAll(".page-view").forEach(page => {
    page.classList.add("hidden");
  });

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

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
   IDIOMA
   ========================================================= */

function changeLanguage(lang) {

  if(!TEXT[lang]) {
    lang = "es";
  }

  currentLanguage = lang;

  document.documentElement.lang = lang;

  const t = TEXT[lang];

  document.querySelectorAll("[data-i18n]").forEach(element => {

    const key = element.dataset.i18n;

    if(t[key]) {
      element.innerHTML = t[key];
    }

  });

  const nameInput = document.getElementById("player-name");

  if(nameInput) {
    nameInput.placeholder = t.namePlaceholder;
  }

  updateHUD();
  createBoard();
  updateAvatar();
}


/* =========================================================
   PERSONAJE
   ========================================================= */

const characterIcons = {
  neutral:"🧑‍💻",
  woman:"👩‍💻",
  man:"👨‍💻"
};


function selectCharacter(type, button) {

  selectedCharacter = type;

  document.querySelectorAll(".character-option").forEach(b => {
    b.classList.remove("selected");
  });

  button.classList.add("selected");

  updateAvatar();
}


function updateAvatar() {

  const icon = characterIcons[selectedCharacter] || characterIcons.neutral;

  const preview = document.getElementById("avatar-preview");

  if(preview) {
    preview.textContent = icon;
  }

  const playerAvatar = document.getElementById("player-avatar");

  if(playerAvatar) {
    playerAvatar.textContent = icon;
  }
}


function confirmCharacter() {

  const input = document.getElementById("player-name");

  if(input) {
    playerName = input.value.trim();
  }

  if(!playerName) {

    playerName =
      currentLanguage === "es"
      ? "Jugador"
      : currentLanguage === "en"
      ? "Player"
      : "玩家";
  }

  resetGame();

  gameStarted = true;

  updateAvatar();

  navigateTo("page-game");

  createBoard();
  updateHUD();
}


/* =========================================================
   INICIAR
   ========================================================= */

function startGame() {

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
  eventOpen = false;

  const button = document.getElementById("spin-button");

  if(button) {
    button.disabled = false;
  }

  renderViruses();
  updateHUD();
}


/* =========================================================
   TABLERO
   ========================================================= */

function createBoard() {

  const board = document.getElementById("game-board");

  if(!board) return;

  board.innerHTML = "";

  for(let i = 0; i < TOTAL_TILES; i++) {

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


/* =========================================================
   ETAPA
   ========================================================= */

function getStage(position) {

  if(position < 12) return 1;
  if(position < 24) return 2;
  if(position < 36) return 3;

  return 4;
}


/* =========================================================
   TIPO DE CASILLA
   ========================================================= */

function getTileType(position) {

  if(position === 0) return "start";

  if(position === TOTAL_TILES - 1) return "finish";

  const pattern = [
    "news",
    "question",
    "ai",
    "social",
    "shield",
    "news",
    "deepfake",
    "question",
    "ai",
    "social",
    "viral",
    "bonus"
  ];

  return pattern[position % pattern.length];
}


/* =========================================================
   VISUALES
   ========================================================= */

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
   RUEDA
   ========================================================= */

function spinWheel() {

  if(isMoving || eventOpen) {
    return;
  }

  const button = document.getElementById("spin-button");

  if(!button || button.disabled) {
    return;
  }

  if(playerPosition >= TOTAL_TILES - 1) {
    return;
  }

  isMoving = true;

  button.disabled = true;

  const moves = Math.floor(Math.random() * 4) + 1;

  const result = document.getElementById("wheel-result");

  if(result) {
    result.textContent = `🎲 +${moves}`;
  }

  setTimeout(() => {

    movePlayer(moves);

  }, 600);
}


/* =========================================================
   MOVER
   ========================================================= */

function movePlayer(moves) {

  let steps = 0;

  const interval = setInterval(() => {

    if(playerPosition >= TOTAL_TILES - 1) {

      clearInterval(interval);

      isMoving = false;

      setTimeout(triggerTileEvent, 300);

      return;
    }

    if(steps >= moves) {

      clearInterval(interval);

      isMoving = false;

      setTimeout(triggerTileEvent, 400);

      return;
    }

    playerPosition++;

    renderPlayer();
    updateHUD();

    steps++;

  }, 450);
}


/* =========================================================
   RENDER JUGADOR
   ========================================================= */

function renderPlayer() {

  document.querySelectorAll(".tile-car").forEach(car => {
    car.remove();
  });

  document.querySelectorAll(".tile").forEach(tile => {
    tile.classList.remove("current");
  });

  const tile = document.querySelector(
    `.tile[data-position="${playerPosition}"]`
  );

  if(!tile) return;

  tile.classList.add("current");

  const car = document.createElement("div");

  car.className = "tile-car";

  car.innerHTML = `
    <span class="board-player-avatar">
      ${characterIcons[selectedCharacter]}
    </span>
    🚗
  `;

  tile.appendChild(car);

  updateStageProgress();
}


/* =========================================================
   PROGRESO
   ========================================================= */

function updateStageProgress() {

  const stage = getStage(playerPosition);

  document.querySelectorAll(".stage-point").forEach((point,index) => {

    point.classList.toggle(
      "active",
      index < stage
    );

  });
}


/* =========================================================
   EVENTO
   ========================================================= */

function triggerTileEvent() {

  if(playerPosition >= TOTAL_TILES - 1) {

    showVictory();

    return;
  }

  const tile = document.querySelector(
    `.tile[data-position="${playerPosition}"]`
  );

  const type = tile?.dataset.type;

  openEvent(type);
}


/* =========================================================
   RANDOM
   ========================================================= */

function randomItem(array) {

  if(!array || array.length === 0) {
    return null;
  }

  return array[
    Math.floor(Math.random() * array.length)
  ];
}


/* =========================================================
   EVENTOS
   ========================================================= */

function openEvent(type) {

  const modal = document.getElementById("event-modal");

  const icon = document.getElementById("event-icon");

  const title = document.getElementById("event-title");

  const description =
    document.getElementById("event-description");

  const content =
    document.getElementById("event-content");

  const actions =
    document.getElementById("event-actions");

  if(!modal) return;

  eventOpen = true;

  modal.classList.remove("hidden");

  content.innerHTML = "";
  actions.innerHTML = "";

  const t = TEXT[currentLanguage];


  /* NOTICIA */

  if(type === "news") {

    currentEvent = randomItem(NEWS[currentLanguage]);

    icon.textContent = currentEvent.icon;

    title.textContent = t.newsTitle;

    description.textContent = "";

    content.innerHTML = `
      <div class="news-card">
        <h3>${currentEvent.title}</h3>
        <p>${currentEvent.body}</p>
      </div>
    `;

    addAnswerButton(
      t.share,
      () => evaluateNews(true)
    );

    addAnswerButton(
      t.doNotShare,
      () => evaluateNews(false)
    );

    return;
  }


  /* RETO */

  if(type === "question") {

    currentEvent =
      randomItem(CHALLENGES[currentLanguage]);

    icon.textContent = "🧠";

    title.textContent =
      currentLanguage === "es"
      ? "Reto de pensamiento crítico"
      : currentLanguage === "en"
      ? "Critical thinking challenge"
      : "批判性思维挑战";

    description.textContent = currentEvent.q;

    addAnswerButton(
      currentEvent.correct,
      () => correctAnswer()
    );

    addAnswerButton(
      currentEvent.wrong,
      () => wrongAnswer()
    );

    return;
  }


  /* IA */

  if(type === "ai") {

    currentEvent =
      randomItem(AI_CHALLENGES[currentLanguage]);

    icon.textContent = "🤖";

    title.textContent =
      currentLanguage === "es"
      ? "Detecta contenido generado por IA"
      : currentLanguage === "en"
      ? "Detect AI-generated content"
      : "识别人工智能生成的内容";

    description.textContent = currentEvent.q;

    addAnswerButton(
      currentEvent.correct,
      () => correctAnswer()
    );

    addAnswerButton(
      currentEvent.wrong,
      () => wrongAnswer()
    );

    return;
  }


  /* DEEPFAKE */

  if(type === "deepfake") {

    currentEvent = {

      q:
        currentLanguage === "es"
        ? "Un video muestra a una persona famosa diciendo algo que parece extraño. ¿Qué haces?"
        : currentLanguage === "en"
        ? "A video shows a famous person saying something unusual. What do you do?"
        : "一个视频显示一位名人在说奇怪的话。你会怎么做？",

      correct:
        currentLanguage === "es"
        ? "Busco otras fuentes y verifico el video."
        : currentLanguage === "en"
        ? "I look for other sources and verify the video."
        : "寻找其他来源并验证视频。",

      wrong:
        currentLanguage === "es"
        ? "Lo comparto inmediatamente."
        : currentLanguage === "en"
        ? "I share it immediately."
        : "立即分享。"
    };

    icon.textContent = "🎭";

    title.textContent =
      currentLanguage === "es"
      ? "Alerta Deepfake"
      : currentLanguage === "en"
      ? "Deepfake Alert"
      : "深度伪造警报";

    description.textContent = currentEvent.q;

    addAnswerButton(
      currentEvent.correct,
      () => correctAnswer()
    );

    addAnswerButton(
      currentEvent.wrong,
      () => wrongAnswer()
    );

    return;
  }


  /* REDES */

  if(type === "social") {

    currentEvent =
      randomItem(SOCIAL_CHALLENGES[currentLanguage]);

    icon.textContent = "📱";

    title.textContent =
      currentLanguage === "es"
      ? "Redes sociales"
      : currentLanguage === "en"
      ? "Social Media"
      : "社交媒体";

    description.textContent = currentEvent.q;

    addAnswerButton(
      currentEvent.correct,
      () => correctAnswer()
    );

    addAnswerButton(
      currentEvent.wrong,
      () => wrongAnswer()
    );

    return;
  }


  /* ESCUDO */

  if(type === "shield") {

    icon.textContent = "🛡️";

    title.textContent = t.shieldFound;

    description.textContent = t.shieldText;

    addAnswerButton(
      "+1 🛡️",
      () => {

        shields++;

        closeEvent();

        updateHUD();

      }
    );

    return;
  }


  /* VIRAL */

  if(type === "viral") {

    icon.textContent = "🦠";

    title.textContent = t.viralTitle;

    description.textContent = t.viralText;

    if(shields > 0) {

      addAnswerButton(
        t.useShield,
        () => useShield()
      );

    }

    addAnswerButton(
      t.noShield,
      () => {

        viralLoad += 15;

        viralLoad = Math.min(viralLoad,100);

        addVirus();

        closeEvent();

        showError();

        updateHUD();

      }
    );

    return;
  }


  /* BONUS */

  if(type === "bonus") {

    icon.textContent = "⭐";

    title.textContent = t.bonusTitle;

    description.textContent = t.bonusText;

    addAnswerButton(
      "+50 👥",
      () => {

        followers += 50;

        closeEvent();

        updateHUD();

      }
    );

    return;
  }
}


/* =========================================================
   BOTONES
   ========================================================= */

function addAnswerButton(text, callback) {

  const button = document.createElement("button");

  button.className = "event-option";

  button.textContent = text;

  button.onclick = () => {

    document
      .querySelectorAll("#event-actions .event-option")
      .forEach(btn => btn.disabled = true);

    callback();

  };

  document
    .getElementById("event-actions")
    .appendChild(button);
}


/* =========================================================
   NOTICIAS
   ========================================================= */

function evaluateNews(userChoice) {

  if(!currentEvent) return;

  const isCorrect =
    (currentEvent.fake && !userChoice) ||
    (!currentEvent.fake && userChoice);

  if(isCorrect) {

    correctAnswer();

  } else {

    wrongAnswer();

  }
}


/* =========================================================
   CORRECTO
   ========================================================= */

function correctAnswer() {

  followers += 30;

  closeEvent();

  updateHUD();
}


/* =========================================================
   INCORRECTO
   ========================================================= */

function wrongAnswer() {

  if(shields > 0) {

    const message =
      currentLanguage === "es"
      ? "¡Te equivocaste! ¿Quieres usar un escudo?"
      : currentLanguage === "en"
      ? "You made a mistake! Do you want to use a shield?"
      : "你答错了！要使用护盾吗？";

    const use = confirm(message);

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
   VIRUS
   ========================================================= */

const VIRUSES = [
"🦠",
"🧫",
"👾",
"🕷️",
"☣️",
"🪱",
"🧬",
"🧟",
"👹",
"💀"
];


function addVirus() {

  const virus =
    VIRUSES[
      viruses.length % VIRUSES.length
    ];

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
      ? `Amenaza ${index + 1}`
      : currentLanguage === "en"
      ? `Threat ${index + 1}`
      : `威胁 ${index + 1}`;

    container.appendChild(span);

  });
}


/* =========================================================
   ERROR
   ========================================================= */

function showError() {

  const screen =
    document.getElementById("error-screen");

  const message =
    document.getElementById("error-message");

  if(!screen || !message) return;

  message.textContent =
    TEXT[currentLanguage].errorWrong;

  screen.classList.remove("hidden");
}


function closeError() {

  const screen =
    document.getElementById("error-screen");

  if(screen) {
    screen.classList.add("hidden");
  }

  const button =
    document.getElementById("spin-button");

  if(button) {
    button.disabled = false;
  }

  isMoving = false;
}


/* =========================================================
   ESCUDO
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
   CERRAR EVENTO
   ========================================================= */

function closeEvent() {

  const modal =
    document.getElementById("event-modal");

  if(modal) {
    modal.classList.add("hidden");
  }

  eventOpen = false;

  const button =
    document.getElementById("spin-button");

  if(button) {
    button.disabled = false;
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

  if(position) {

    position.textContent =
      `${playerPosition + 1}/${TOTAL_TILES}`;
  }

  if(followersElement) {
    followersElement.textContent = followers;
  }

  if(shieldsElement) {
    shieldsElement.textContent = shields;
  }

  if(viralElement) {
    viralElement.textContent =
      viralLoad + "%";
  }

  renderViruses();
}


/* =========================================================
   VICTORIA
   ========================================================= */

function showVictory() {

  const modal =
    document.getElementById("event-modal");

  if(!modal) return;

  const t = TEXT[currentLanguage];

  document.getElementById("event-icon")
    .textContent = "🏆";

  document.getElementById("event-title")
    .textContent = t.victory;

  document.getElementById("event-description")
    .textContent = t.victoryText;

  document.getElementById("event-content")
    .innerHTML = `
      <div class="news-card">

        👤 ${playerName}<br><br>

        📍 ${t.position}:
        ${playerPosition + 1}/${TOTAL_TILES}<br><br>

        👥 ${t.followers}:
        ${followers}<br><br>

        🛡️ ${t.shields}:
        ${shields}<br><br>

        🦠 ${t.viralLoad}:
        ${viralLoad}%

      </div>
    `;

  document.getElementById("event-actions")
    .innerHTML = "";

  addAnswerButton(
    t.reset,
    () => {

      closeEvent();

      resetGame();

      createBoard();

      updateHUD();

      navigateTo("page-game");

    }
  );

  modal.classList.remove("hidden");

  eventOpen = true;
}


/* =========================================================
   LABORATORIO
   ========================================================= */

function labTool(tool) {

  const output =
    document.getElementById("lab-output");

  if(!output) return;

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
   INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  createBoard();

  updateHUD();

  updateAvatar();

});
