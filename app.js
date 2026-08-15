/* =========================================================
   INOCULA
   Digital Life Game
   VERSION 2.0
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
let usedChallenges = [];

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

checkNews:"¿Qué deberías hacer con esta publicación?",
share:"Compartir",
doNotShare:"No compartir",

correctDecision:"¡Correcto! Detectaste la información y tomaste una buena decisión.",
wrongDecision:"¡Cuidado! Tomaste una decisión sin verificar correctamente la información.",

sourceQuestion:"¿Cuál sería el mejor primer paso para verificar esta afirmación?",
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
socialWrong:"Sí. Si tiene muchos likes debe ser cierta.",

shieldFound:"¡Encontraste un escudo!",
shieldDescription:"Tu escudo puede protegerte de una amenaza futura.",

viralTitle:"¡Zona de alta carga viral!",
viralDescription:"Tu feed está lleno de información sin verificar.",
useShield:"Usar escudo",

bonusTitle:"¡Bonus!",
bonusDescription:"Encontraste una fuente confiable.",

errorNews:"Esta publicación no estaba suficientemente verificada.",
errorChallenge:"Tu respuesta no aplicó una estrategia de verificación.",
errorAI:"No detectaste una señal importante de contenido generado por IA.",
errorSocial:"Confundiste popularidad con evidencia.",

questionTypes:"Reto",
newsType:"Noticia",
aiType:"IA",
socialType:"Redes",
deepfakeType:"Deepfake",
shieldType:"Escudo",
viralType:"Viral",
bonusType:"Bonus"

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

checkNews:"What should you do with this post?",
share:"Share",
doNotShare:"Do not share",

correctDecision:"Correct! You detected the information and made a good decision.",
wrongDecision:"Be careful! You made a decision without properly verifying the information.",

sourceQuestion:"What would be the best first step to verify this claim?",
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
socialWrong:"Yes. If it has many likes it must be true.",

shieldFound:"You found a shield!",
shieldDescription:"Your shield can protect you from a future threat.",

viralTitle:"High viral load zone!",
viralDescription:"Your feed is filled with unverified information.",
useShield:"Use shield",

bonusTitle:"Bonus!",
bonusDescription:"You found a reliable source.",

errorNews:"This post was not sufficiently verified.",
errorChallenge:"Your answer did not apply a proper verification strategy.",
errorAI:"You missed an important signal of AI-generated content.",
errorSocial:"You confused popularity with evidence.",

questionTypes:"Challenge",
newsType:"News",
aiType:"AI",
socialType:"Social",
deepfakeType:"Deepfake",
shieldType:"Shield",
viralType:"Viral",
bonusType:"Bonus"

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

checkNews:"你应该如何处理这条帖子？",
share:"分享",
doNotShare:"不分享",

correctDecision:"正确！你识别了信息并做出了正确的决定。",
wrongDecision:"请注意！你在没有充分验证的情况下做出了决定。",

sourceQuestion:"验证这个说法最好的第一步是什么？",
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
socialWrong:"是的。有很多点赞就一定是真的。",

shieldFound:"你找到了护盾！",
shieldDescription:"你的护盾可以保护你免受未来的威胁。",

viralTitle:"高病毒负荷区域！",
viralDescription:"你的信息流充满了未经验证的信息。",
useShield:"使用护盾",

bonusTitle:"奖励！",
bonusDescription:"你找到了一条可靠的信息来源。",

errorNews:"这条帖子没有得到充分验证。",
errorChallenge:"你的回答没有正确使用验证策略。",
errorAI:"你没有发现人工智能生成内容的重要信号。",
errorSocial:"你把受欢迎程度和证据混淆了。",

questionTypes:"挑战",
newsType:"新闻",
aiType:"人工智能",
socialType:"社交媒体",
deepfakeType:"深度伪造",
shieldType:"护盾",
viralType:"病毒",
bonusType:"奖励"

}

};


/* =========================================================
   3. NOTICIAS — MÁS VARIEDAD
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
title:"¡Dormir con el celular debajo de la almohada aumenta tu inteligencia!",
body:"Un video viral asegura que mantener el teléfono bajo la almohada durante la noche mejora la memoria.",
fake:true
},
{
icon:"📰",
title:"El agua hierve a una temperatura diferente según la presión atmosférica.",
body:"La presión del ambiente puede modificar la temperatura a la que hierve el agua.",
fake:false
},
{
icon:"🚨",
title:"¡Un algoritmo sabe exactamente cuándo vas a enfermar!",
body:"Una publicación afirma que una aplicación puede predecir con certeza cuándo una persona enfermará.",
fake:true
},
{
icon:"📰",
title:"Las imágenes antiguas pueden volver a circular como si fueran actuales.",
body:"Una fotografía real puede utilizarse fuera de contexto si se presenta como un evento reciente.",
fake:false
},
{
icon:"🚨",
title:"¡Si una noticia aparece en muchos perfiles, automáticamente es verdadera!",
body:"Una publicación afirma que la cantidad de personas que comparten una noticia demuestra que es cierta.",
fake:true
},
{
icon:"📰",
title:"Una fuente confiable también puede cometer errores.",
body:"Incluso fuentes reconocidas deben ser contrastadas cuando una afirmación es importante.",
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
title:"Sleeping with your phone under your pillow makes you smarter!",
body:"A viral video claims that keeping your phone under your pillow improves memory.",
fake:true
},
{
icon:"📰",
title:"Water boils at different temperatures depending on atmospheric pressure.",
body:"Environmental pressure can change the temperature at which water boils.",
fake:false
},
{
icon:"🚨",
title:"An algorithm knows exactly when you will get sick!",
body:"A post claims that an app can predict with certainty when someone will become ill.",
fake:true
},
{
icon:"📰",
title:"Old images can circulate again as if they were recent.",
body:"A real photograph can be taken out of context and presented as a recent event.",
fake:false
},
{
icon:"🚨",
title:"If many people share a story, it is automatically true!",
body:"A post claims that the number of shares proves that a story is accurate.",
fake:true
},
{
icon:"📰",
title:"A reliable source can still make mistakes.",
body:"Even established sources should be checked when a claim is important.",
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
title:"把手机放在枕头下面睡觉会让你更聪明！",
body:"一段网络视频声称晚上把手机放在枕头下面可以提高记忆力。",
fake:true
},
{
icon:"📰",
title:"水的沸点会受到大气压力影响。",
body:"环境压力可以改变水沸腾时的温度。",
fake:false
},
{
icon:"🚨",
title:"一个算法可以准确知道你什么时候会生病！",
body:"一篇帖子声称某个应用可以准确预测一个人什么时候会生病。",
fake:true
},
{
icon:"📰",
title:"旧照片可能会重新传播，并被误认为是最近发生的事件。",
body:"真实照片可能脱离原本背景，被描述成最近发生的事件。",
fake:false
},
{
icon:"🚨",
title:"如果很多人分享一条新闻，它就一定是真的！",
body:"一篇帖子声称分享数量可以证明新闻是真实的。",
fake:true
},
{
icon:"📰",
title:"可靠的信息来源也可能犯错误。",
body:"即使是知名来源，在重要信息上也应该进行核实。",
fake:false
}
]

};


/* =========================================================
   4. RETOS ALEATORIOS
   ========================================================= */

const CHALLENGES = {

es: [

{
type:"question",
icon:"🔎",
title:"Detective de fuentes",
question:"Encuentras una publicación que asegura que una nueva ley ya entró en vigor. ¿Qué haces primero?",
correct:"Buscas la fuente oficial y compruebas la fecha.",
wrong:"La compartes porque muchas personas están hablando de ella."
},

{
type:"question",
icon:"🧠",
title:"Pensamiento crítico",
question:"Una persona famosa afirma algo sobre ciencia en un video. ¿Qué debes hacer?",
correct:"Buscar evidencia científica independiente.",
wrong:"Creerlo automáticamente porque es una persona famosa."
},

{
type:"question",
icon:"📅",
title:"La fecha importa",
question:"Una noticia parece alarmante, pero fue publicada hace cinco años. ¿Qué haces?",
correct:"Compruebas si sigue siendo relevante actualmente.",
wrong:"La compartes como si hubiera ocurrido hoy."
},

{
type:"question",
icon:"🔗",
title:"El enlace sospechoso",
question:"Un mensaje te pide hacer clic en un enlace para confirmar que ganaste un premio. ¿Qué haces?",
correct:"Verificas el sitio y la fuente antes de hacer clic.",
wrong:"Abres el enlace inmediatamente para reclamar el premio."
},

{
type:"question",
icon:"👀",
title:"Título llamativo",
question:"Un titular utiliza muchas mayúsculas y signos de exclamación. ¿Qué significa?",
correct:"Es una señal para detenerte y verificar la información.",
wrong:"Significa que la noticia es más importante y probablemente verdadera."
},

{
type:"question",
icon:"📊",
title:"Datos sin contexto",
question:"Una gráfica muestra que algo aumentó 300%. ¿Qué deberías revisar?",
correct:"El periodo, las unidades y los valores originales.",
wrong:"Asumir que el cambio fue enorme sin revisar los datos."
},

{
type:"question",
icon:"🗣️",
title:"Cita viral",
question:"Una frase se atribuye a una persona famosa, pero no aparece la fuente original. ¿Qué haces?",
correct:"Buscas la cita en una fuente verificable.",
wrong:"La compartes porque aparece en muchas imágenes."
},

{
type:"question",
icon:"🌐",
title:"Más de una fuente",
question:"Dos sitios presentan versiones diferentes del mismo acontecimiento. ¿Qué haces?",
correct:"Comparas sus fuentes y buscas evidencia adicional.",
wrong:"Eliges automáticamente el sitio que te gusta más."
}

],

en:[

{
type:"question",
icon:"🔎",
title:"Source detective",
question:"You find a post claiming that a new law is already in effect. What do you do first?",
correct:"Find the official source and check the date.",
wrong:"Share it because many people are talking about it."
},

{
type:"question",
icon:"🧠",
title:"Critical thinking",
question:"A famous person makes a scientific claim in a video. What should you do?",
correct:"Look for independent scientific evidence.",
wrong:"Believe it automatically because the person is famous."
},

{
type:"question",
icon:"📅",
title:"Dates matter",
question:"A news story looks alarming, but it was published five years ago. What do you do?",
correct:"Check whether it is still relevant today.",
wrong:"Share it as if it happened today."
},

{
type:"question",
icon:"🔗",
title:"Suspicious link",
question:"A message asks you to click a link to claim a prize. What do you do?",
correct:"Verify the website and source before clicking.",
wrong:"Open the link immediately to claim the prize."
},

{
type:"question",
icon:"👀",
title:"Attention-grabbing headline",
question:"A headline uses many capital letters and exclamation marks. What does that suggest?",
correct:"It is a signal to stop and verify the information.",
wrong:"It means the story is more important and probably true."
},

{
type:"question",
icon:"📊",
title:"Data without context",
question:"A graph says something increased by 300%. What should you check?",
correct:"The time period, units, and original values.",
wrong:"Assume the change was huge without checking the data."
},

{
type:"question",
icon:"🗣️",
title:"Viral quote",
question:"A quote is attributed to a famous person, but there is no original source. What do you do?",
correct:"Look for the quote in a verifiable source.",
wrong:"Share it because it appears in many images."
},

{
type:"question",
icon:"🌐",
title:"Multiple sources",
question:"Two websites give different versions of the same event. What do you do?",
correct:"Compare their sources and look for additional evidence.",
wrong:"Automatically choose the website you like more."
}

],

zh:[

{
type:"question",
icon:"🔎",
title:"来源侦探",
question:"你看到一条帖子说新法律已经生效。你首先应该做什么？",
correct:"寻找官方来源并检查日期。",
wrong:"因为很多人在讨论，所以直接分享。"
},

{
type:"question",
icon:"🧠",
title:"批判性思维",
question:"一位名人在视频中发表科学观点。你应该怎么做？",
correct:"寻找独立的科学证据。",
wrong:"因为对方很有名，所以自动相信。"
},

{
type:"question",
icon:"📅",
title:"日期很重要",
question:"一条新闻看起来很令人担忧，但它是五年前发布的。你应该怎么做？",
correct:"检查它今天是否仍然相关。",
wrong:"把它当成今天发生的事情分享。"
},

{
type:"question",
icon:"🔗",
title:"可疑链接",
question:"一条消息要求你点击链接领取奖品。你应该怎么做？",
correct:"点击之前验证网站和来源。",
wrong:"立即打开链接领取奖品。"
},

{
type:"question",
icon:"👀",
title:"吸引注意力的标题",
question:"一个标题使用很多大写字母和感叹号。这意味着什么？",
correct:"这是一个需要停下来验证信息的信号。",
wrong:"说明新闻更重要，而且很可能是真的。"
},

{
type:"question",
icon:"📊",
title:"没有背景的数据",
question:"一张图表说某件事增加了300%。你应该检查什么？",
correct:"时间范围、单位和原始数值。",
wrong:"不检查数据就认为变化非常巨大。"
},

{
type:"question",
icon:"🗣️",
title:"热门名言",
question:"一句话被认为是名人说的，但没有原始来源。你应该怎么做？",
correct:"寻找可以验证的来源。",
wrong:"因为很多图片都有这句话，所以分享。"
},

{
type:"question",
icon:"🌐",
title:"多个来源",
question:"两个网站对同一事件给出了不同版本。你应该怎么做？",
correct:"比较来源并寻找更多证据。",
wrong:"自动选择你更喜欢的网站。"
}

]

};


/* =========================================================
   5. IA
   ========================================================= */

const AI_CHALLENGES = {

es:[
{
question:"Observas una fotografía con seis dedos en una mano. ¿Qué sospechas?",
correct:"Puede ser una señal de generación o edición mediante IA.",
wrong:"Eso demuestra que la fotografía es auténtica."
},
{
question:"En una imagen el texto de un cartel aparece deformado y sin sentido. ¿Qué haces?",
correct:"Investigas si la imagen fue generada o manipulada.",
wrong:"La compartes porque la imagen parece profesional."
},
{
question:"Una persona aparece con reflejos diferentes en cada ojo. ¿Qué haces?",
correct:"Revisas otros detalles y buscas el origen de la imagen.",
wrong:"Asumes que es real porque parece una fotografía."
},
{
question:"Un rostro parece perfecto, pero los dientes tienen formas extrañas. ¿Qué haces?",
correct:"Consideras que puede existir manipulación o generación por IA.",
wrong:"Ignoras el detalle porque la foto tiene buena calidad."
},
{
question:"Una imagen tiene iluminación imposible y sombras que no coinciden. ¿Qué haces?",
correct:"La analizas antes de compartirla.",
wrong:"La compartes porque tiene muchos comentarios."
}
],

en:[
{
question:"You see a photograph with six fingers on one hand. What do you suspect?",
correct:"It may be a sign of AI generation or editing.",
wrong:"It proves the photograph is authentic."
},
{
question:"Text on a sign in an image looks distorted and meaningless. What do you do?",
correct:"Investigate whether the image was generated or manipulated.",
wrong:"Share it because the image looks professional."
},
{
question:"A person has different-looking reflections in each eye. What do you do?",
correct:"Check other details and find the image's origin.",
wrong:"Assume it is real because it looks like a photograph."
},
{
question:"A face looks perfect, but the teeth have strange shapes. What do you do?",
correct:"Consider possible AI generation or manipulation.",
wrong:"Ignore the detail because the image is high quality."
},
{
question:"An image has impossible lighting and inconsistent shadows. What do you do?",
correct:"Analyze it before sharing.",
wrong:"Share it because it has many comments."
}
],

zh:[
{
question:"你看到一张照片，其中一只手有六根手指。你会怀疑什么？",
correct:"这可能是人工智能生成或编辑的信号。",
wrong:"这证明照片是真实的。"
},
{
question:"图片中的招牌文字变形且没有意义。你会怎么做？",
correct:"调查图片是否由人工智能生成或经过修改。",
wrong:"因为图片看起来很专业，所以直接分享。"
},
{
question:"一个人的眼睛反射看起来不一样。你会怎么做？",
correct:"检查其他细节并寻找图片来源。",
wrong:"因为看起来像照片，所以认为它是真的。"
},
{
question:"一个人的脸非常完美，但牙齿形状很奇怪。你会怎么做？",
correct:"考虑图片可能经过人工智能生成或修改。",
wrong:"因为图片质量很好，所以忽略这个细节。"
},
{
question:"图片的光线不自然，而且阴影互相矛盾。你会怎么做？",
correct:"分享之前先分析图片。",
wrong:"因为评论很多，所以直接分享。"
}
]

};


/* =========================================================
   6. REDES SOCIALES
   ========================================================= */

const SOCIAL_CHALLENGES = {

es:[
{
question:"Una publicación tiene 2 millones de likes. ¿Eso demuestra que es verdadera?",
correct:"No. La popularidad no demuestra veracidad.",
wrong:"Sí. Si tiene muchos likes debe ser cierta."
},
{
question:"Un influencer recomienda un producto y dice que funciona para todos. ¿Qué haces?",
correct:"Buscas evidencia independiente y revisas otras experiencias.",
wrong:"Lo compras inmediatamente porque el influencer tiene muchos seguidores."
},
{
question:"Un video tiene millones de reproducciones, pero nadie muestra la fuente original. ¿Qué haces?",
correct:"Buscas el origen antes de compartirlo.",
wrong:"Asumes que es cierto por tener tantas reproducciones."
},
{
question:"Un comentario dice '100% CONFIRMADO' pero no incluye ninguna fuente. ¿Qué haces?",
correct:"Buscas evidencia antes de creerlo.",
wrong:"Lo consideras confirmado porque lo dice el comentario."
},
{
question:"Una publicación coincide completamente con lo que tú ya pensabas. ¿Qué deberías hacer?",
correct:"Intentar comprobarla aunque confirme tus propias ideas.",
wrong:"Creerla automáticamente porque coincide contigo."
}
],

en:[
{
question:"A post has 2 million likes. Does that prove it is true?",
correct:"No. Popularity does not prove accuracy.",
wrong:"Yes. If it has many likes, it must be true."
},
{
question:"An influencer recommends a product and says it works for everyone. What do you do?",
correct:"Look for independent evidence and other experiences.",
wrong:"Buy it immediately because the influencer has many followers."
},
{
question:"A video has millions of views, but nobody shows the original source. What do you do?",
correct:"Find the original source before sharing.",
wrong:"Assume it is true because it has so many views."
},
{
question:"A comment says '100% CONFIRMED' but provides no source. What do you do?",
correct:"Look for evidence before believing it.",
wrong:"Consider it confirmed because the comment says so."
},
{
question:"A post completely agrees with what you already believe. What should you do?",
correct:"Try to verify it even if it confirms your beliefs.",
wrong:"Automatically believe it because it agrees with you."
}
],

zh:[
{
question:"一条帖子有200万个赞。这能证明它是真的吗？",
correct:"不能。受欢迎并不能证明信息准确。",
wrong:"是的。有很多点赞就一定是真的。"
},
{
question:"一位网红推荐一个产品，并说它对所有人都有效。你会怎么做？",
correct:"寻找独立证据并查看其他人的体验。",
wrong:"因为网红有很多粉丝，所以立即购买。"
},
{
question:"一个视频有数百万次观看，但没有人提供原始来源。你会怎么做？",
correct:"分享之前寻找原始来源。",
wrong:"因为观看次数很多，所以认为它是真的。"
},
{
question:"一条评论写着“100%确认”，但没有提供来源。你会怎么做？",
correct:"在相信之前寻找证据。",
wrong:"因为评论这么说，所以认为已经确认。"
},
{
question:"一条帖子完全符合你原来的想法。你应该怎么做？",
correct:"即使它符合自己的想法，也要尝试验证。",
wrong:"因为它符合你的观点，所以自动相信。"
}
]

};


/* =========================================================
   7. DEEPFAKES
   ========================================================= */

const DEEPFAKE_CHALLENGES = {

es:[
{
question:"Un político parece decir algo que contradice todas sus declaraciones anteriores. ¿Qué haces?",
correct:"Buscas el video completo y otras fuentes.",
wrong:"Lo compartes inmediatamente."
},
{
question:"Un video muestra a una celebridad haciendo algo extraño, pero dura solo cinco segundos. ¿Qué haces?",
correct:"Buscas el contexto completo y la fuente original.",
wrong:"Lo das por auténtico porque parece real."
},
{
question:"El movimiento de los labios no coincide perfectamente con el audio. ¿Qué haces?",
correct:"Consideras la posibilidad de manipulación y verificas el contenido.",
wrong:"Ignoras la señal."
},
{
question:"Un video viral no muestra quién lo grabó ni dónde ocurrió. ¿Qué haces?",
correct:"Investigas el origen y el contexto.",
wrong:"Lo compartes porque es viral."
}
],

en:[
{
question:"A politician appears to say something that contradicts all previous statements. What do you do?",
correct:"Find the full video and other sources.",
wrong:"Share it immediately."
},
{
question:"A video shows a celebrity doing something strange, but it is only five seconds long. What do you do?",
correct:"Look for the full context and original source.",
wrong:"Assume it is authentic because it looks real."
},
{
question:"The lip movements do not perfectly match the audio. What do you do?",
correct:"Consider possible manipulation and verify the content.",
wrong:"Ignore the signal."
},
{
question:"A viral video does not show who recorded it or where it happened. What do you do?",
correct:"Investigate the origin and context.",
wrong:"Share it because it is viral."
}
],

zh:[
{
question:"一位政治人物似乎说了一些与过去言论完全相反的话。你会怎么做？",
correct:"寻找完整视频和其他来源。",
wrong:"立即分享。"
},
{
question:"一个视频显示名人在做奇怪的事情，但只有五秒钟。你会怎么做？",
correct:"寻找完整背景和原始来源。",
wrong:"因为看起来真实，所以认为是真的。"
},
{
question:"嘴唇动作与声音并不完全同步。你会怎么做？",
correct:"考虑可能存在修改，并验证内容。",
wrong:"忽略这个信号。"
},
{
question:"一个热门视频没有说明是谁拍摄的，也没有说明在哪里发生。你会怎么做？",
correct:"调查来源和背景。",
wrong:"因为它很热门，所以分享。"
}
]

};


/* =========================================================
   8. TIPOS DE CASILLA
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
   9. NAVEGACIÓN
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
   10. IDIOMA
   ========================================================= */

function changeLanguage(lang) {

  if(!TEXT[lang]) {
    lang = "es";
  }

  currentLanguage = lang;

  document.documentElement.lang = lang;

  const select = document.getElementById("lang-select");

  if(select) {
    select.value = lang;
  }

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
  updateAvatarPreview();
  updateAvatar();
  renderViruses();

}


/* =========================================================
   11. PERSONAJE
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


function createAvatarHTML() {

  const character = characterIcons[selectedCharacter];
  const accessory = styleIcons[selectedStyle];

  return `
    <span class="avatar-character">${character}</span>
    <span class="avatar-accessory ${selectedStyle}">
      ${accessory}
    </span>
  `;

}


function updateAvatarPreview() {

  const avatar = document.getElementById("avatar-preview");

  if(!avatar) return;

  avatar.innerHTML = createAvatarHTML();

}


function confirmCharacter() {

  updateAvatar();

  navigateTo("page-game");

  gameStarted = true;

}


function updateAvatar() {

  const avatar = document.getElementById("player-avatar");

  if(!avatar) return;

  avatar.innerHTML = createAvatarHTML();

}


/* =========================================================
   12. INICIAR
   ========================================================= */

function startGame() {

  navigateTo("page-character");

}


/* =========================================================
   13. CREAR TABLERO
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

    const typeData = getTileVisual(type);

    tile.innerHTML = `
      <div class="tile-number">${i + 1}</div>
      <div class="tile-icon">${typeData.icon}</div>
      <span class="tile-label">${typeData.name}</span>
    `;

    board.appendChild(tile);

  }

  renderPlayer();

}


/* =========================================================
   14. ETAPA
   ========================================================= */

function getStage(position) {

  if(position < 12) return 1;
  if(position < 24) return 2;
  if(position < 36) return 3;

  return 4;

}


/* =========================================================
   15. TIPO DE CASILLA
   ========================================================= */

function getTileType(position) {

  if(position === 0) return "start";

  if(position === TOTAL_TILES - 1) return "finish";

  const pattern = [
    "news",
    "question",
    "ai",
    "social",
    "news",
    "deepfake",
    "question",
    "viral",
    "ai",
    "social",
    "bonus",
    "news"
  ];

  return pattern[position % pattern.length];

}


function getTileVisual(type) {

  const t = TEXT[currentLanguage];

  const names = {

    news:{
      icon:"📰",
      name:t.newsType
    },

    question:{
      icon:"🧠",
      name:t.questionTypes
    },

    ai:{
      icon:"🤖",
      name:t.aiType
    },

    deepfake:{
      icon:"🎭",
      name:t.deepfakeType
    },

    social:{
      icon:"📱",
      name:t.socialType
    },

    shield:{
      icon:"🛡️",
      name:t.shieldType
    },

    viral:{
      icon:"🦠",
      name:t.viralType
    },

    bonus:{
      icon:"⭐",
      name:t.bonusType
    },

    start:{
      icon:"🚀",
      name:currentLanguage === "es"
        ? "Inicio"
        : currentLanguage === "en"
        ? "Start"
        : "开始"
    },

    finish:{
      icon:"🏆",
      name:currentLanguage === "es"
        ? "Meta"
        : currentLanguage === "en"
        ? "Finish"
        : "终点"
    }

  };

  return names[type];

}


/* =========================================================
   16. SELECCIÓN ALEATORIA SIN REPETICIÓN
   ========================================================= */

function getRandomUnused(array, usedArray) {

  if(!array || array.length === 0) {
    return null;
  }

  if(usedArray.length >= array.length) {
    usedArray.length = 0;
  }

  const available = array.filter(
    (_, index) => !usedArray.includes(index)
  );

  const index =
    available[Math.floor(Math.random() * available.length)];

  usedArray.push(index);

  return array[index];

}


/* =========================================================
   17. GIRAR RUEDA
   ========================================================= */

function spinWheel() {

  const button = document.getElementById("spin-button");

  if(!button || button.disabled) {
    return;
  }

  button.disabled = true;

  const moves = Math.floor(Math.random() * 5) + 1;

  const result = document.getElementById("wheel-result");

  result.textContent = `🎲 +${moves}`;

  setTimeout(() => {

    movePlayer(moves);

  }, 600);

}


/* =========================================================
   18. MOVER JUGADOR
   ========================================================= */

function movePlayer(moves) {

  let steps = 0;

  const interval = setInterval(() => {

    if(steps >= moves) {

      clearInterval(interval);

      setTimeout(() => {

        triggerTileEvent();

      }, 400);

      return;

    }

    if(playerPosition < TOTAL_TILES - 1) {

      playerPosition++;

      renderPlayer();

      updateHUD();

    }

    steps++;

  }, 400);

}


/* =========================================================
   19. RENDER JUGADOR
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
   20. PROGRESO
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
   21. EVENTO DE CASILLA
   ========================================================= */

function triggerTileEvent() {

  if(playerPosition === TOTAL_TILES - 1) {

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
   22. ABRIR EVENTO
   ========================================================= */

function openEvent(type) {

  const modal = document.getElementById("event-modal");

  const icon = document.getElementById("event-icon");
  const title = document.getElementById("event-title");
  const description = document.getElementById("event-description");
  const content = document.getElementById("event-content");
  const actions = document.getElementById("event-actions");

  if(!modal) return;

  modal.classList.remove("hidden");

  content.innerHTML = "";
  actions.innerHTML = "";

  const t = TEXT[currentLanguage];


  /* ================= NOTICIA ================= */

  if(type === "news") {

    const database = NEWS[currentLanguage];

    currentEvent = getRandomUnused(
      database,
      usedNews
    );

    icon.textContent = currentEvent.icon;

    title.textContent = t.checkNews;

    description.textContent = currentEvent.body;

    content.innerHTML = `
      <div class="news-card">
        <h3>${currentEvent.title}</h3>
        <p>${currentEvent.body}</p>
      </div>
    `;

    /*
      IMPORTANTE:
      Estos botones preguntan directamente si debes compartir.

      Compartir = correcto SOLO si la noticia es verdadera.
      No compartir = correcto SOLO si la noticia es falsa.
    */

    addAnswerButton(
      `📤 ${t.share}`,
      () => evaluateNews(true),
      "share"
    );

    addAnswerButton(
      `🛑 ${t.doNotShare}`,
      () => evaluateNews(false),
      "no-share"
    );

    return;

  }


  /* ================= RETO ================= */

  if(type === "question") {

    const challenges =
      CHALLENGES[currentLanguage];

    const challenge =
      getRandomUnused(
        challenges,
        usedChallenges
      );

    currentEvent = challenge;

    icon.textContent = challenge.icon;

    title.textContent = challenge.title;

    description.textContent = challenge.question;

    addAnswerButton(
      `✅ ${challenge.correct}`,
      () => correctAnswer()
    );

    addAnswerButton(
      `❌ ${challenge.wrong}`,
      () => wrongAnswer()
    );

    return;

  }


  /* ================= IA ================= */

  if(type === "ai") {

    const challenges =
      AI_CHALLENGES[currentLanguage];

    const challenge =
      challenges[
        Math.floor(Math.random() * challenges.length)
      ];

    currentEvent = challenge;

    icon.textContent = "🤖";

    title.textContent =
      currentLanguage === "es"
      ? "Detecta la IA"
      : currentLanguage === "en"
      ? "Detect the AI"
      : "识别人工智能";

    description.textContent =
      challenge.question;

    addAnswerButton(
      `✅ ${challenge.correct}`,
      () => correctAnswer()
    );

    addAnswerButton(
      `❌ ${challenge.wrong}`,
      () => wrongAnswer()
    );

    return;

  }


  /* ================= DEEPFAKE ================= */

  if(type === "deepfake") {

    const challenges =
      DEEPFAKE_CHALLENGES[currentLanguage];

    const challenge =
      challenges[
        Math.floor(Math.random() * challenges.length)
      ];

    currentEvent = challenge;

    icon.textContent = "🎭";

    title.textContent =
      currentLanguage === "es"
      ? "Alerta Deepfake"
      : currentLanguage === "en"
      ? "Deepfake Alert"
      : "深度伪造警报";

    description.textContent =
      challenge.question;

    addAnswerButton(
      `✅ ${challenge.correct}`,
      () => correctAnswer()
    );

    addAnswerButton(
      `❌ ${challenge.wrong}`,
      () => wrongAnswer()
    );

    return;

  }


  /* ================= REDES ================= */

  if(type === "social") {

    const challenges =
      SOCIAL_CHALLENGES[currentLanguage];

    const challenge =
      challenges[
        Math.floor(Math.random() * challenges.length)
      ];

    currentEvent = challenge;

    icon.textContent = "📱";

    title.textContent =
      currentLanguage === "es"
      ? "Redes sociales"
      : currentLanguage === "en"
      ? "Social Media"
      : "社交媒体";

    description.textContent =
      challenge.question;

    addAnswerButton(
      `✅ ${challenge.correct}`,
      () => correctAnswer()
    );

    addAnswerButton(
      `❌ ${challenge.wrong}`,
      () => wrongAnswer()
    );

    return;

  }


  /* ================= ESCUDO ================= */

  if(type === "shield") {

    icon.textContent = "🛡️";

    title.textContent = t.shieldFound;

    description.textContent =
      t.shieldDescription;

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


  /* ================= VIRAL ================= */

  if(type === "viral") {

    icon.textContent = "🦠";

    title.textContent = t.viralTitle;

    description.textContent =
      t.viralDescription;

    addAnswerButton(
      `🛡️ ${t.useShield}`,
      () => useShield()
    );

    addAnswerButton(
      `⚠️ ${t.continue}`,
      () => {

        viralLoad += 15;

        viralLoad =
          Math.min(viralLoad, 100);

        closeEvent();

        updateHUD();

      }
    );

    return;

  }


  /* ================= BONUS ================= */

  if(type === "bonus") {

    icon.textContent = "⭐";

    title.textContent = t.bonusTitle;

    description.textContent =
      t.bonusDescription;

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


  /* ================= META ================= */

  if(type === "finish") {

    showVictory();

  }

}


/* =========================================================
   23. BOTONES
   ========================================================= */

function addAnswerButton(text, callback, extraClass = "") {

  const button =
    document.createElement("button");

  button.className =
    `event-option ${extraClass}`;

  button.textContent = text;

  button.onclick = () => {

    button.disabled = true;

    callback();

  };

  document
    .getElementById("event-actions")
    .appendChild(button);

}


/* =========================================================
   24. NOTICIAS
   ========================================================= */

function evaluateNews(userWantsToShare) {

  if(!currentEvent) {
    return;
  }

  /*
    Si fake = true:
      La respuesta correcta es NO compartir.

    Si fake = false:
      La respuesta correcta es COMPARTIR.

    Esto corrige el problema anterior donde
    "No compartir" se interpretaba al revés.
  */

  const shouldShare =
    !currentEvent.fake;

  const isCorrect =
    userWantsToShare === shouldShare;

  if(isCorrect) {

    correctAnswer();

  } else {

    wrongAnswer();

  }

}


/* =========================================================
   25. RESPUESTA CORRECTA
   ========================================================= */

function correctAnswer() {

  followers += 30;

  closeEvent();

  updateHUD();

}


/* =========================================================
   26. RESPUESTA INCORRECTA
   ========================================================= */

function wrongAnswer() {

  if(shields > 0) {

    const use =
      confirm(

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

  viralLoad =
    Math.min(viralLoad, 100);

  addVirus();

  closeEvent();

  showError();

  updateHUD();

}


/* =========================================================
   27. VIRUS
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

    const span =
      document.createElement("span");

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
   28. ERROR
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

  if(button) {
    button.disabled = false;
  }

}


/* =========================================================
   29. ESCUDO
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
   30. CERRAR EVENTO
   ========================================================= */

function closeEvent() {

  document
    .getElementById("event-modal")
    .classList.add("hidden");

}


/* =========================================================
   31. HUD
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

    followersElement.textContent =
      followers;

  }

  if(shieldsElement) {

    shieldsElement.textContent =
      shields;

  }

  if(viralElement) {

    viralElement.textContent =
      viralLoad + "%";

  }

  const score =
    document.getElementById("your-score");

  if(score) {

    score.textContent =
      followers;

  }

}


/* =========================================================
   32. VICTORIA
   ========================================================= */

function showVictory() {

  const modal =
    document.getElementById("event-modal");

  document
    .getElementById("event-icon")
    .textContent = "🏆";

  document
    .getElementById("event-title")
    .textContent =
      TEXT[currentLanguage].victory;

  document
    .getElementById("event-description")
    .textContent =
      TEXT[currentLanguage].victoryText;

  document
    .getElementById("event-content")
    .innerHTML = `

      <div class="news-card">

        ⭐ ${TEXT[currentLanguage].position}:
        ${playerPosition + 1}/${TOTAL_TILES}

        <br><br>

        👥 ${TEXT[currentLanguage].followers}:
        ${followers}

        <br><br>

        🛡️ ${TEXT[currentLanguage].shields}:
        ${shields}

        <br><br>

        🦠 ${TEXT[currentLanguage].viralLoad}:
        ${viralLoad}%

      </div>

    `;

  document
    .getElementById("event-actions")
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

      usedNews = [];

      usedChallenges = [];

      renderViruses();

      createBoard();

      updateHUD();

      updateAvatar();

    }
  );

  modal.classList.remove("hidden");

}


/* =========================================================
   33. LABORATORIO
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
   34. INICIO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  createBoard();

  updateHUD();

  updateAvatarPreview();

  updateAvatar();

});
