/* =========================================================
   INOCULA · V1
   Digital Life Game
========================================================= */


/* =========================================================
   1. STATE
========================================================= */

const state = {

  language: "es",

  page: "home",

  identity: "female",

  style: "student",

  avatar: "👩‍💻",

  name: "Agent",

  position: 0,

  totalTiles: 24,

  followers: 100,

  shields: 1,

  viralLoad: 15,

  spinning: false,

  currentChallenge: null,

  completedChallenges: 0

};


/* =========================================================
   2. TRANSLATIONS
========================================================= */

const translations = {

  es: {

    navHome: "Inicio",
    navGame: "Tablero",
    navLab: "Laboratorio",
    navRanking: "Ranking",

    heroBadge: "UNESCO Youth Hackathon 2026",

    heroTitle1: "Antes de creer,",
    heroTitle2: "inocúlate.",

    heroDescription:
      "Una experiencia interactiva que te entrena para detectar fake news, deepfakes y manipulación digital.",

    startGame: "Comenzar aventura",
    tryLab: "Explorar laboratorio",

    fakeNews: "Fake News",
    detectIt: "Detect it.",
    verifyIt: "Verify it.",

    digitalJourney: "Tu viaje digital",

    featureGame: "Aprende jugando",
    featureGameText:
      "Toma decisiones y observa sus consecuencias.",

    featureSkills: "Desarrolla habilidades",
    featureSkillsText:
      "Aprende a verificar información antes de compartirla.",

    featureLanguages: "Multilingüe",
    featureLanguagesText:
      "Disponible en español, inglés y chino.",

    createAgent: "Crea tu agente",
    createAgentText:
      "Este personaje te acompañará durante todo tu viaje digital.",

    identity: "Identidad",
    female: "Mujer",
    male: "Hombre",
    other: "Otro",

    style: "Estilo",
    styleCool: "Cool",
    styleStudent: "Student",
    styleTech: "Tech",

    agentName: "Nombre de tu agente",
    enterWorld: "Entrar al mundo digital",

    digitalDay: "DÍA DIGITAL",
    followers: "Seguidores",
    shields: "Escudos",
    viralLoad: "Carga viral",

    stageMorning: "Mañana",
    stageSchool: "Escuela",
    stageSocial: "Redes",
    stageNight: "Noche",

    currentAgent: "Agente actual",
    currentPosition: "Posición",

    digitalWheel: "Rueda digital",
    spinToMove: "Gira para avanzar.",
    spin: "GIRAR",

    viralExplanation:
      "Evita compartir información dudosa.",

    boardTip:
      "Cada decisión cambia tu día digital.",

    you: "Tú",
    challengeTile: "Reto",
    shieldTile: "Escudo",
    bonusTile: "Bonus",

    stage1Title:
      "Despertar & Feed Matutino",

    stage2Title:
      "Escuela & Chats",

    stage3Title:
      "Noticias & Redes",

    stage4Title:
      "Noche & Retiro Digital",

    labTitle:
      "Laboratorio de verificación",

    labDescription:
      "Practica antes de enfrentarte a los retos del tablero.",

    toolClickbait:
      "Detectar clickbait",

    toolClickbaitText:
      "Descubre cuándo un titular exagera.",

    toolSource:
      "Verificar fuente",

    toolSourceText:
      "Aprende a investigar el origen.",

    toolAI:
      "Detectar IA",

    toolAIText:
      "Identifica señales de contenido artificial.",

    toolContext:
      "Revisar contexto",

    toolContextText:
      "Una imagen no siempre cuenta toda la historia.",

    rankingTitle:
      "Agentes destacados",

    rankingDescription:
      "La confianza también se construye.",

    newChallenge:
      "NUEVO RETO",

    readArticle:
      "Leer nota completa",

    question:
      "¿Qué harías?",

    share:
      "Compartir",

    verify:
      "Verificar",

    ignore:
      "Ignorar",

    continue:
      "Continuar",

    stageUnlocked:
      "¡NUEVA ETAPA DESBLOQUEADA!",

    journeyComplete:
      "¡DÍA DIGITAL COMPLETADO!",

    congratulations:
      "¡Lo lograste!",

    finishText:
      "Terminaste tu recorrido por INOCULA.",

    playAgain:
      "Jugar otra vez",

    feedbackGood:
      "¡Excelente decisión!",

    feedbackBad:
      "¡Cuidado!",

    feedbackVerify:
      "Verificar primero reduce el riesgo de compartir información falsa.",

    feedbackShare:
      "Compartir sin verificar puede aumentar la propagación de información falsa.",

    feedbackIgnore:
      "Ignorar puede evitar la propagación, pero aprender a verificar te da una herramienta para el futuro.",

    labClickbait:
      "Un titular exagerado puede utilizar emociones fuertes para conseguir clics.",

    labSource:
      "Busca quién publicó la información, cuándo fue publicada y si otras fuentes confiables confirman la afirmación.",

    labAI:
      "La detección de IA no es perfecta. Busca inconsistencias y verifica siempre la información.",

    labContext:
      "Una fotografía puede ser real pero utilizarse fuera de contexto. Investiga su origen y fecha."

  },


  en: {

    navHome: "Home",
    navGame: "Game Board",
    navLab: "Laboratory",
    navRanking: "Leaderboard",

    heroBadge: "UNESCO Youth Hackathon 2026",

    heroTitle1: "Before you believe,",
    heroTitle2: "inoculate yourself.",

    heroDescription:
      "An interactive experience that trains you to detect fake news, deepfakes and digital manipulation.",

    startGame: "Start adventure",
    tryLab: "Explore laboratory",

    fakeNews: "Fake News",
    detectIt: "Detect it.",
    verifyIt: "Verify it.",

    digitalJourney: "Your digital journey",

    featureGame: "Learn by playing",
    featureGameText:
      "Make decisions and observe their consequences.",

    featureSkills: "Build skills",
    featureSkillsText:
      "Learn how to verify information before sharing it.",

    featureLanguages: "Multilingual",
    featureLanguagesText:
      "Available in Spanish, English and Chinese.",

    createAgent: "Create your agent",
    createAgentText:
      "This character will accompany you throughout your digital journey.",

    identity: "Identity",
    female: "Woman",
    male: "Man",
    other: "Other",

    style: "Style",
    styleCool: "Cool",
    styleStudent: "Student",
    styleTech: "Tech",

    agentName: "Agent name",
    enterWorld: "Enter the digital world",

    digitalDay: "DIGITAL DAY",
    followers: "Followers",
    shields: "Shields",
    viralLoad: "Viral load",

    stageMorning: "Morning",
    stageSchool: "School",
    stageSocial: "Social",
    stageNight: "Night",

    currentAgent: "Current agent",
    currentPosition: "Position",

    digitalWheel: "Digital wheel",
    spinToMove: "Spin to move.",
    spin: "SPIN",

    viralExplanation:
      "Avoid sharing questionable information.",

    boardTip:
      "Every decision changes your digital day.",

    you: "You",
    challengeTile: "Challenge",
    shieldTile: "Shield",
    bonusTile: "Bonus",

    stage1Title:
      "Wake Up & Morning Feed",

    stage2Title:
      "School & Chats",

    stage3Title:
      "News & Social Media",

    stage4Title:
      "Night & Digital Detox",

    labTitle:
      "Verification Laboratory",

    labDescription:
      "Practice before facing the challenges on the board.",

    toolClickbait:
      "Detect clickbait",

    toolClickbaitText:
      "Discover when a headline exaggerates.",

    toolSource:
      "Verify the source",

    toolSourceText:
      "Learn how to investigate where information comes from.",

    toolAI:
      "Detect AI",

    toolAIText:
      "Identify signals of artificially generated content.",

    toolContext:
      "Check context",

    toolContextText:
      "A picture does not always tell the whole story.",

    rankingTitle:
      "Featured agents",

    rankingDescription:
      "Trust is built one decision at a time.",

    newChallenge:
      "NEW CHALLENGE",

    readArticle:
      "Read full article",

    question:
      "What would you do?",

    share:
      "Share",

    verify:
      "Verify",

    ignore:
      "Ignore",

    continue:
      "Continue",

    stageUnlocked:
      "NEW STAGE UNLOCKED!",

    journeyComplete:
      "DIGITAL DAY COMPLETED!",

    congratulations:
      "You did it!",

    finishText:
      "You completed your INOCULA journey.",

    playAgain:
      "Play again",

    feedbackGood:
      "Excellent decision!",

    feedbackBad:
      "Careful!",

    feedbackVerify:
      "Verifying first reduces the risk of sharing misinformation.",

    feedbackShare:
      "Sharing without checking can increase the spread of misinformation.",

    feedbackIgnore:
      "Ignoring can stop the spread, but learning how to verify gives you a skill for the future.",

    labClickbait:
      "An exaggerated headline may use strong emotions to attract clicks.",

    labSource:
      "Check who published the information, when it was published, and whether reliable sources confirm the claim.",

    labAI:
      "AI detection is not perfect. Look for inconsistencies and always verify the information.",

    labContext:
      "A photograph can be real but used out of context. Investigate its original source and date."

  },


  zh: {

    navHome: "首页",
    navGame: "游戏板",
    navLab: "实验室",
    navRanking: "排行榜",

    heroBadge: "联合国教科文组织青年黑客马拉松 2026",

    heroTitle1: "在相信之前，",
    heroTitle2: "先给自己接种。",

    heroDescription:
      "通过互动体验训练你识别假新闻、深度伪造和数字信息操纵。",

    startGame: "开始冒险",
    tryLab: "探索实验室",

    fakeNews: "虚假新闻",
    detectIt: "识别它。",
    verifyIt: "验证它。",

    digitalJourney: "你的数字旅程",

    featureGame: "边玩边学",
    featureGameText:
      "做出选择并观察它们带来的后果。",

    featureSkills: "培养技能",
    featureSkillsText:
      "学习在分享信息之前进行验证。",

    featureLanguages: "多语言",
    featureLanguagesText:
      "支持西班牙语、英语和中文。",

    createAgent: "创建你的特工",
    createAgentText:
      "这个角色将在整个数字旅程中陪伴你。",

    identity: "身份",
    female: "女性",
    male: "男性",
    other: "其他",

    style: "风格",
    styleCool: "酷",
    styleStudent: "学生",
    styleTech: "科技",

    agentName: "特工名称",
    enterWorld: "进入数字世界",

    digitalDay: "数字生活",
    followers: "关注者",
    shields: "护盾",
    viralLoad: "病毒负荷",

    stageMorning: "早晨",
    stageSchool: "学校",
    stageSocial: "社交网络",
    stageNight: "夜晚",

    currentAgent: "当前特工",
    currentPosition: "位置",

    digitalWheel: "数字转盘",
    spinToMove: "旋转转盘前进。",
    spin: "旋转",

    viralExplanation:
      "避免分享可疑信息。",

    boardTip:
      "每一个选择都会改变你的数字生活。",

    you: "你",
    challengeTile: "挑战",
    shieldTile: "护盾",
    bonusTile: "奖励",

    stage1Title:
      "起床与早晨信息流",

    stage2Title:
      "学校与聊天",

    stage3Title:
      "新闻与社交网络",

    stage4Title:
      "夜晚与数字休息",

    labTitle:
      "信息验证实验室",

    labDescription:
      "在挑战游戏板之前练习验证信息。",

    toolClickbait:
      "识别标题党",

    toolClickbaitText:
      "发现标题什么时候在夸大信息。",

    toolSource:
      "验证来源",

    toolSourceText:
      "学习如何调查信息的来源。",

    toolAI:
      "识别人工智能内容",

    toolAIText:
      "发现人工生成内容的信号。",

    toolContext:
      "检查背景",

    toolContextText:
      "一张图片并不总能说明完整的故事。",

    rankingTitle:
      "优秀特工",

    rankingDescription:
      "信任需要通过每一次选择建立。",

    newChallenge:
      "新挑战",

    readArticle:
      "阅读完整文章",

    question:
      "你会怎么做？",

    share:
      "分享",

    verify:
      "验证",

    ignore:
      "忽略",

    continue:
      "继续",

    stageUnlocked:
      "新阶段已解锁！",

    journeyComplete:
      "数字生活完成！",

    congratulations:
      "你做到了！",

    finishText:
      "你完成了 INOCULA 的数字旅程。",

    playAgain:
      "再玩一次",

    feedbackGood:
      "做得很好！",

    feedbackBad:
      "请注意！",

    feedbackVerify:
      "先验证信息可以降低传播错误信息的风险。",

    feedbackShare:
      "未经验证就分享可能增加错误信息的传播。",

    feedbackIgnore:
      "忽略可以阻止传播，但学习验证信息会成为你未来的重要技能。",

    labClickbait:
      "夸张的标题可能利用强烈情绪来吸引点击。",

    labSource:
      "检查谁发布了信息、发布时间以及其他可靠来源是否证实这一说法。",

    labAI:
      "人工智能检测并不完美。寻找不一致之处，并始终验证信息。",

    labContext:
      "照片可能是真实的，但可能被放在错误的背景中。调查它的原始来源和日期。"

  }

};


/* =========================================================
   3. NEWS DATABASE
========================================================= */

const newsDatabase = {

  es: [

    {
      headline:
        "🚨 ¡Este alimento elimina TODAS las toxinas de tu cuerpo!",
      article:
        "La publicación afirma que un alimento puede eliminar todas las toxinas del cuerpo. El organismo ya cuenta con órganos como el hígado y los riñones que cumplen funciones importantes en el procesamiento de sustancias de desecho.",
      correct: "verify"
    },

    {
      headline:
        "🧠 Las neuronas utilizan señales eléctricas y químicas.",
      article:
        "Las neuronas transmiten información mediante señales eléctricas y sustancias químicas llamadas neurotransmisores.",
      correct: "verify"
    },

    {
      headline:
        "🚨 ¡Una publicación con millones de likes DEBE ser verdadera!",
      article:
        "La cantidad de interacciones de una publicación no demuestra por sí misma que la información sea verdadera.",
      correct: "verify"
    },

    {
      headline:
        "🚨 ¡La inteligencia artificial NUNCA se equivoca!",
      article:
        "Los sistemas de inteligencia artificial pueden producir información incorrecta o inventada y sus resultados necesitan ser verificados.",
      correct: "verify"
    },

    {
      headline:
        "📸 Esta fotografía demuestra exactamente lo que ocurrió.",
      article:
        "Una fotografía puede ser antigua, estar fuera de contexto o haber sido modificada. Es necesario verificar su origen y fecha.",
      correct: "verify"
    },

    {
      headline:
        "🔎 Comparar varias fuentes puede ayudar a detectar información falsa.",
      article:
        "Contrastar una afirmación con diferentes fuentes confiables puede ayudar a identificar errores o inconsistencias.",
      correct: "verify"
    }

  ],


  en: [

    {
      headline:
        "🚨 This food removes ALL toxins from your body!",
      article:
        "The post claims that one food can remove all toxins from the body. The body already has organs such as the liver and kidneys that perform important waste-processing functions.",
      correct: "verify"
    },

    {
      headline:
        "🧠 Neurons communicate using electrical and chemical signals.",
      article:
        "Neurons transmit information through electrical signals and chemicals called neurotransmitters.",
      correct: "verify"
    },

    {
      headline:
        "🚨 A post with millions of likes MUST be true!",
      article:
        "The number of interactions on a post does not prove that the information is accurate.",
      correct: "verify"
    },

    {
      headline:
        "🚨 Artificial intelligence is NEVER wrong!",
      article:
        "Artificial intelligence systems can produce incorrect or fabricated information, so their outputs should be verified.",
      correct: "verify"
    },

    {
      headline:
        "📸 This photograph proves exactly what happened.",
      article:
        "A photograph can be old, taken out of context, or digitally modified. Its origin and date should be checked.",
      correct: "verify"
    },

    {
      headline:
        "🔎 Comparing multiple sources can help identify misinformation.",
      article:
        "Checking a claim against several reliable sources can help identify errors and inconsistencies.",
      correct: "verify"
    }

  ],


  zh: [

    {
      headline:
        "🚨 这种食物可以清除身体里的所有毒素！",
      article:
        "这条信息声称某种食物可以清除身体里的所有毒素。事实上，肝脏和肾脏本身就承担着处理废物的重要功能。",
      correct: "verify"
    },

    {
      headline:
        "🧠 神经元通过电信号和化学信号传递信息。",
      article:
        "神经元通过电信号以及被称为神经递质的化学物质传递信息。",
      correct: "verify"
    },

    {
      headline:
        "🚨 一条帖子有数百万个赞，它一定是真的！",
      article:
        "帖子的点赞数量本身并不能证明其中的信息是真实的。",
      correct: "verify"
    },

    {
      headline:
        "🚨 人工智能永远不会犯错！",
      article:
        "人工智能系统可能产生错误或虚构的信息，因此其结果仍然需要验证。",
      correct: "verify"
    },

    {
      headline:
        "📸 这张照片证明了事情确实发生过。",
      article:
        "照片可能很旧，也可能脱离原来的背景，甚至经过修改。因此需要检查照片的来源和日期。",
      correct: "verify"
    },

    {
      headline:
        "🔎 比较多个来源可以帮助识别虚假信息。",
      article:
        "将一个说法与多个可靠来源进行比较，可以帮助发现错误和不一致。",
      correct: "verify"
    }

  ]

};


/* =========================================================
   4. BOARD TILES
========================================================= */

const tileTypes = [

  "start",

  "challenge",
  "normal",
  "shield",
  "challenge",
  "normal",

  "stage",

  "challenge",
  "normal",
  "bonus",
  "challenge",
  "normal",

  "stage",

  "challenge",
  "shield",
  "normal",
  "challenge",
  "bonus",

  "stage",

  "challenge",
  "normal",
  "shield",
  "challenge",
  "finish"

];


/* =========================================================
   5. INITIALIZATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    buildBoard();

    applyLanguage();

    updateAllUI();

  }
);


/* =========================================================
   6. PAGE NAVIGATION
========================================================= */

function showPage(pageName) {

  document
    .querySelectorAll(".page")
    .forEach(page => {
      page.classList.remove("active");
    });


  const page =
    document.getElementById(
      `page-${pageName}`
    );


  if (page) {
    page.classList.add("active");
  }


  document
    .querySelectorAll(".nav-button")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === pageName
      );

    });


  state.page = pageName;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =========================================================
   7. START GAME
========================================================= */

function startGame() {

  showPage("character");

}


/* =========================================================
   8. CHARACTER
========================================================= */

function selectIdentity(identity, button) {

  state.identity = identity;

  document
    .querySelectorAll(
      ".option-group:first-of-type .choice-button"
    )
    .forEach(btn => {
      btn.classList.remove("selected");
    });

  button.classList.add("selected");

  updateAvatar();

}


function selectStyle(style, button) {

  state.style = style;

  const groups =
    document.querySelectorAll(
      ".option-group"
    );

  const styleButtons =
    groups[1].querySelectorAll(
      ".choice-button"
    );

  styleButtons.forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");

  updateAvatar();

}


function updateAvatar() {

  let avatar = "🧑‍💻";


  if (state.identity === "female") {

    if (state.style === "cool") {
      avatar = "👩😎";
    }

    else if (state.style === "tech") {
      avatar = "👩‍💻";
    }

    else {
      avatar = "👩‍🎓";
    }

  }


  if (state.identity === "male") {

    if (state.style === "cool") {
      avatar = "👨😎";
    }

    else if (state.style === "tech") {
      avatar = "👨‍💻";
    }

    else {
      avatar = "👨‍🎓";
    }

  }


  if (state.identity === "neutral") {

    if (state.style === "cool") {
      avatar = "🧑😎";
    }

    else if (state.style === "tech") {
      avatar = "🧑‍💻";
    }

    else {
      avatar = "🧑‍🎓";
    }

  }


  state.avatar = avatar;


  const preview =
    document.getElementById(
      "avatarPreview"
    );

  if (preview) {
    preview.textContent = avatar;
  }


  const mini =
    document.getElementById(
      "miniAvatar"
    );

  if (mini) {
    mini.textContent = avatar;
  }


  const ranking =
    document.getElementById(
      "rankingAvatar"
    );

  if (ranking) {
    ranking.textContent = avatar;
  }

}


function updateAgentName() {

  const input =
    document.getElementById(
      "agentName"
    );

  const name =
    input.value.trim() ||
    "Agent";

  state.name = name;


  const preview =
    document.getElementById(
      "avatarNamePreview"
    );

  if (preview) {
    preview.textContent = name;
  }

}


function confirmCharacter() {

  updateAgentName();

  state.position = 0;
  state.followers = 100;
  state.shields = 1;
  state.viralLoad = 15;
  state.completedChallenges = 0;


  buildBoard();

  updateAllUI();

  showPage("game");

}


/* =========================================================
   9. BUILD BOARD
========================================================= */

function buildBoard() {

  const board =
    document.getElementById(
      "gameBoard"
    );

  if (!board) return;

  board.innerHTML = "";


  tileTypes.forEach(
    (type, index) => {

      const tile =
        document.createElement("div");

      tile.className =
        `game-tile stage-${getStage(index)}`;

      tile.dataset.position =
        index;


      const number =
        document.createElement("span");

      number.className =
        "tile-number";

      number.textContent =
        index + 1;


      const icon =
        document.createElement("span");

      icon.className =
        "tile-icon";


      const label =
        document.createElement("span");

      label.className =
        "tile-label";


      if (type === "start") {

        icon.textContent = "🚀";
        label.textContent =
          getTileLabel("start");

      }

      else if (type === "challenge") {

        icon.textContent = "📰";
        label.textContent =
          getTileLabel("challenge");

      }

      else if (type === "shield") {

        icon.textContent = "🛡️";
        label.textContent =
          getTileLabel("shield");

      }

      else if (type === "bonus") {

        icon.textContent = "⭐";
        label.textContent =
          getTileLabel("bonus");

      }

      else if (type === "stage") {

        icon.textContent = "🔓";
        label.textContent =
          getTileLabel("stage");

      }

      else if (type === "finish") {

        icon.textContent = "🏁";
        label.textContent =
          getTileLabel("finish");

      }

      else {

        icon.textContent = "•";

      }


      tile.appendChild(number);
      tile.appendChild(icon);
      tile.appendChild(label);


      board.appendChild(tile);

    }
  );


  updatePlayerPosition();

}


function getStage(position) {

  if (position < 6) return 1;

  if (position < 12) return 2;

  if (position < 18) return 3;

  return 4;

}


function getTileLabel(type) {

  const labels = {

    es: {
      start: "Inicio",
      challenge: "Reto",
      shield: "Escudo",
      bonus: "Bonus",
      stage: "Nueva etapa",
      finish: "Final"
    },

    en: {
      start: "Start",
      challenge: "Challenge",
      shield: "Shield",
      bonus: "Bonus",
      stage: "New stage",
      finish: "Finish"
    },

    zh: {
      start: "开始",
      challenge: "挑战",
      shield: "护盾",
      bonus: "奖励",
      stage: "新阶段",
      finish: "终点"
    }

  };


  return labels[state.language][type];

}


/* =========================================================
   10. SPIN
========================================================= */

function spinWheel() {

  if (state.spinning) return;

  if (state.position >= state.totalTiles - 1) {
    return;
  }


  state.spinning = true;


  const button =
    document.getElementById(
      "spinButton"
    );

  if (button) {
    button.disabled = true;
  }


  const wheel =
    document.getElementById(
      "wheelNumber"
    );

  if (wheel) {
    wheel.classList.add("spinning");
  }


  const moves =
    Math.floor(
      Math.random() * 4
    ) + 1;


  if (wheel) {
    wheel.textContent = moves;
  }


  setTimeout(
    () => {

      if (wheel) {
        wheel.classList.remove(
          "spinning"
        );
      }

      movePlayer(moves);

    },
    700
  );

}


/* =========================================================
   11. MOVE PLAYER
========================================================= */

function movePlayer(moves) {

  let steps = moves;


  const interval =
    setInterval(
      () => {

        if (steps <= 0) {

          clearInterval(interval);

          finishMovement();

          return;

        }


        if (
          state.position <
          state.totalTiles - 1
        ) {

          state.position++;

          updatePlayerPosition();

          steps--;

        }

      },
      300
    );

}


/* =========================================================
   12. PLAYER POSITION
========================================================= */

function updatePlayerPosition() {

  const tiles =
    document.querySelectorAll(
      ".game-tile"
    );


  tiles.forEach(tile => {

    tile.classList.remove(
      "current"
    );


    const oldToken =
      tile.querySelector(
        ".player-token"
      );

    if (oldToken) {
      oldToken.remove();
    }

  });


  const current =
    document.querySelector(
      `.game-tile[data-position="${state.position}"]`
    );


  if (!current) return;


  current.classList.add("current");


  const player =
    document.createElement("div");

  player.className =
    "player-token";

  player.textContent =
    state.avatar;


  current.appendChild(player);


  updatePositionUI();

  updateStageUI();

}


/* =========================================================
   13. FINISH MOVEMENT
========================================================= */

function finishMovement() {

  state.spinning = false;


  const button =
    document.getElementById(
      "spinButton"
    );

  if (button) {
    button.disabled = false;
  }


  const type =
    tileTypes[state.position];


  if (
    state.position ===
    state.totalTiles - 1
  ) {

    showFinish();

    return;

  }


  if (type === "challenge") {

    setTimeout(
      () => openChallenge(),
      350
    );

  }


  else if (type === "shield") {

    state.shields++;

    showTemporaryMessage(
      getTemporaryText("shield")
    );

    updateAllUI();

  }


  else if (type === "bonus") {

    state.followers += 20;

    showTemporaryMessage(
      getTemporaryText("bonus")
    );

    updateAllUI();

  }


  else if (type === "stage") {

    unlockStage(
      getStage(state.position)
    );

  }

}


/* =========================================================
   14. TEMPORARY MESSAGES
========================================================= */

function getTemporaryText(type) {

  const texts = {

    es: {
      shield: "🛡️ ¡Encontraste un Escudo!",
      bonus: "⭐ ¡Bonus! +20 Seguidores"
    },

    en: {
      shield: "🛡️ You found a Shield!",
      bonus: "⭐ Bonus! +20 Followers"
    },

    zh: {
      shield: "🛡️ 你找到了护盾！",
      bonus: "⭐ 奖励！+20 关注者"
    }

  };


  return texts[state.language][type];

}


function showTemporaryMessage(message) {

  const wheelMessage =
    document.getElementById(
      "wheelMessage"
    );

  if (wheelMessage) {

    wheelMessage.textContent =
      message;

    setTimeout(
      () => {

        wheelMessage.textContent =
          translations[
            state.language
          ].spinToMove;

      },
      2200
    );

  }

}


/* =========================================================
   15. STAGE UI
========================================================= */

function updateStageUI() {

  const stage =
    getStage(state.position);


  const nodes =
    document.querySelectorAll(
      ".stage-node"
    );


  nodes.forEach(
    (node, index) => {

      const number =
        index + 1;

      node.classList.toggle(
        "active",
        number === stage
      );

      node.classList.toggle(
        "locked",
        number > stage
      );

    }
  );


  const tag =
    document.getElementById(
      "currentStageTag"
    );

  const title =
    document.getElementById(
      "currentStageTitle"
    );


  const stageIcons =
    ["🌅", "🏫", "📱", "🌙"];


  if (tag) {

    const stageText = {

      es: "ETAPA",
      en: "STAGE",
      zh: "阶段"

    };


    tag.textContent =
      `${stageIcons[stage - 1]} ${stageText[state.language]} ${stage}`;

  }


  const stageTitles = {

    es: [
      "Despertar & Feed Matutino",
      "Escuela & Chats",
      "Noticias & Redes",
      "Noche & Retiro Digital"
    ],

    en: [
      "Wake Up & Morning Feed",
      "School & Chats",
      "News & Social Media",
      "Night & Digital Detox"
    ],

    zh: [
      "起床与早晨信息流",
      "学校与聊天",
      "新闻与社交网络",
      "夜晚与数字休息"
    ]

  };


  if (title) {
    title.textContent =
      stageTitles[
        state.language
      ][stage - 1];
  }

}


/* =========================================================
   16. POSITION UI
========================================================= */

function updatePositionUI() {

  const position =
    document.getElementById(
      "currentPosition"
    );

  const progress =
    document.getElementById(
      "positionProgress"
    );


  if (position) {

    position.textContent =
      state.position + 1;

  }


  if (progress) {

    const percentage =
      (
        state.position /
        (state.totalTiles - 1)
      ) * 100;

    progress.style.width =
      `${Math.max(4, percentage)}%`;

  }

}


/* =========================================================
   17. STAGE UNLOCK
========================================================= */

function unlockStage(stage) {

  const modal =
    document.getElementById(
      "stageModal"
    );

  const icon =
    document.getElementById(
      "unlockIcon"
    );

  const title =
    document.getElementById(
      "unlockTitle"
    );

  const text =
    document.getElementById(
      "unlockText"
    );


  const data = {

    es: {

      2: {
        icon: "🏫",
        title: "Escuela & Chats",
        text:
          "Ahora tendrás que enfrentarte a la información que circula entre compañeros y grupos."
      },

      3: {
        icon: "📱",
        title: "Noticias & Redes",
        text:
          "El mundo digital se vuelve más rápido. Aprende a distinguir lo viral de lo verdadero."
      },

      4: {
        icon: "🌙",
        title: "Noche & Retiro Digital",
        text:
          "Tu última etapa. Antes de terminar el día, demuestra todo lo que aprendiste."
      }

    },

    en: {

      2: {
        icon: "🏫",
        title: "School & Chats",
        text:
          "Now you will face information circulating among classmates and group chats."
      },

      3: {
        icon: "📱",
        title: "News & Social Media",
        text:
          "The digital world gets faster. Learn to distinguish what is viral from what is true."
      },

      4: {
        icon: "🌙",
        title: "Night & Digital Detox",
        text:
          "Your final stage. Before ending the day, prove everything you have learned."
      }

    },

    zh: {

      2: {
        icon: "🏫",
        title: "学校与聊天",
        text:
          "现在你将面对同学和群聊中传播的信息。"
      },

      3: {
        icon: "📱",
        title: "新闻与社交网络",
        text:
          "数字世界变得越来越快。学习区分什么是热门的，什么是真实的。"
      },

      4: {
        icon: "🌙",
        title: "夜晚与数字休息",
        text:
          "这是最后一个阶段。在结束一天之前，展示你学到的所有知识。"
      }

    }

  };


  const current =
    data[state.language][stage];


  if (!current) return;


  icon.textContent =
    current.icon;

  title.textContent =
    current.title;

  text.textContent =
    current.text;


  modal.classList.remove(
    "hidden"
  );

}


function closeStageModal() {

  document
    .getElementById(
      "stageModal"
    )
    .classList.add(
      "hidden"
    );

}


/* =========================================================
   18. CHALLENGES
========================================================= */

function openChallenge() {

  const languageNews =
    newsDatabase[
      state.language
    ];


  const index =
    Math.floor(
      Math.random() *
      languageNews.length
    );


  state.currentChallenge =
    languageNews[index];


  const modal =
    document.getElementById(
      "challengeModal"
    );


  const headline =
    document.getElementById(
      "challengeHeadline"
    );

  const article =
    document.getElementById(
      "challengeArticle"
    );

  const feedback =
    document.getElementById(
      "challengeFeedback"
    );


  headline.textContent =
    state.currentChallenge.headline;

  article.textContent =
    state.currentChallenge.article;


  article.classList.add(
    "hidden"
  );

  feedback.classList.add(
    "hidden"
  );


  modal.classList.remove(
    "hidden"
  );

}


function toggleArticle() {

  const article =
    document.getElementById(
      "challengeArticle"
    );

  article.classList.toggle(
    "hidden"
  );

}


/* =========================================================
   19. ANSWER
========================================================= */

function answerChallenge(answer) {

  if (!state.currentChallenge) {
    return;
  }


  const correct =
    state.currentChallenge.correct;


  const title =
    document.getElementById(
      "feedbackTitle"
    );

  const text =
    document.getElementById(
      "feedbackText"
    );

  const feedback =
    document.getElementById(
      "challengeFeedback"
    );


  let good = false;


  if (
    answer === correct
  ) {

    good = true;

    state.followers += 25;

    state.completedChallenges++;

    title.textContent =
      translations[
        state.language
      ].feedbackGood;

    text.textContent =
      translations[
        state.language
      ].feedbackVerify;

  }

  else {

    state.viralLoad =
      Math.min(
        100,
        state.viralLoad + 10
      );


    title.textContent =
      translations[
        state.language
      ].feedbackBad;


    if (answer === "share") {

      text.textContent =
        translations[
          state.language
        ].feedbackShare;

    }

    else {

      text.textContent =
        translations[
          state.language
        ].feedbackIgnore;

    }

  }


  feedback.classList.remove(
    "hidden"
  );


  updateAllUI();

}


function closeChallenge() {

  document
    .getElementById(
      "challengeModal"
    )
    .classList.add(
      "hidden"
    );

  state.currentChallenge = null;

}


/* =========================================================
   20. FINISH
========================================================= */

function showFinish() {

  document.getElementById(
    "finalFollowers"
  ).textContent =
    state.followers;


  document.getElementById(
    "finalShields"
  ).textContent =
    state.shields;


  document.getElementById(
    "finalViral"
  ).textContent =
    `${state.viralLoad}%`;


  document
    .getElementById(
      "finishModal"
    )
    .classList.remove(
      "hidden"
    );

}


function restartGame() {

  document
    .getElementById(
      "finishModal"
    )
    .classList.add(
      "hidden"
    );


  state.position = 0;

  state.followers = 100;

  state.shields = 1;

  state.viralLoad = 15;

  state.completedChallenges = 0;


  buildBoard();

  updateAllUI();

}


/* =========================================================
   21. LAB
========================================================= */

function runLab(tool) {

  const result =
    document.getElementById(
      "labResult"
    );

  const title =
    document.getElementById(
      "labResultTitle"
    );

  const text =
    document.getElementById(
      "labResultText"
    );


  const data = {

    es: {

      clickbait: [
        "📰 Clickbait",
        translations.es.labClickbait
      ],

      source: [
        "🔎 Verificación de fuente",
        translations.es.labSource
      ],

      ai: [
        "🤖 Contenido generado por IA",
        translations.es.labAI
      ],

      context: [
        "🧩 Contexto",
        translations.es.labContext
      ]

    },

    en: {

      clickbait: [
        "📰 Clickbait",
        translations.en.labClickbait
      ],

      source: [
        "🔎 Source verification",
        translations.en.labSource
      ],

      ai: [
        "🤖 AI-generated content",
        translations.en.labAI
      ],

      context: [
        "🧩 Context",
        translations.en.labContext
      ]

    },

    zh: {

      clickbait: [
        "📰 标题党",
        translations.zh.labClickbait
      ],

      source: [
        "🔎 来源验证",
        translations.zh.labSource
      ],

      ai: [
        "🤖 人工智能生成内容",
        translations.zh.labAI
      ],

      context: [
        "🧩 背景",
        translations.zh.labContext
      ]

    }

  };


  const response =
    data[
      state.language
    ][tool];


  title.textContent =
    response[0];

  text.textContent =
    response[1];


  result.classList.remove(
    "hidden"
  );

}


/* =========================================================
   22. LANGUAGE
========================================================= */

function changeLanguage(language) {

  if (
    !translations[language]
  ) {
    language = "es";
  }


  state.language =
    language;


  document.documentElement.lang =
    language;


  buildBoard();

  applyLanguage();

  updateAllUI();

}


/* =========================================================
   23. APPLY LANGUAGE
========================================================= */

function applyLanguage() {

  const dictionary =
    translations[
      state.language
    ];


  document
    .querySelectorAll(
      "[data-i18n]"
    )
    .forEach(
      element => {

        const key =
          element.dataset.i18n;


        if (
          dictionary[key]
        ) {

          element.textContent =
            dictionary[key];

        }

      }
    );


  updateStageUI();

}


/* =========================================================
   24. UPDATE EVERYTHING
========================================================= */

function updateAllUI() {

  updateAvatar();

  updateAgentName();

  updatePlayerPosition();

  updateStageUI();


  const followers =
    document.getElementById(
      "followers"
    );

  const shields =
    document.getElementById(
      "shields"
    );

  const viral =
    document.getElementById(
      "viralLoad"
    );

  const viralPercent =
    document.getElementById(
      "viralPercent"
    );

  const viralBar =
    document.getElementById(
      "viralBar"
    );


  if (followers) {
    followers.textContent =
      state.followers;
  }


  if (shields) {
    shields.textContent =
      state.shields;
  }


  if (viral) {
    viral.textContent =
      `${state.viralLoad}%`;
  }


  if (viralPercent) {
    viralPercent.textContent =
      `${state.viralLoad}%`;
  }


  if (viralBar) {
    viralBar.style.width =
      `${state.viralLoad}%`;
  }


  const playerName =
    document.getElementById(
      "playerName"
    );

  if (playerName) {
    playerName.textContent =
      state.name;
  }


  const rankingName =
    document.getElementById(
      "rankingName"
    );

  const rankingFollowers =
    document.getElementById(
      "rankingFollowers"
    );

  const rankingViral =
    document.getElementById(
      "rankingViral"
    );


  if (rankingName) {
    rankingName.textContent =
      state.name;
  }


  if (rankingFollowers) {

    rankingFollowers.textContent =
      `${state.followers} 👥`;

  }


  if (rankingViral) {

    rankingViral.textContent =
      `-${Math.max(
        0,
        100 - state.viralLoad
      )}% 🦠`;

  }

}


/* =========================================================
   25. INITIAL HOME STATE
========================================================= */

showPage("home");
