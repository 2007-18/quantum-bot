import fs from 'fs-extra';
const { readJsonSync } = fs
const { Prefijo, NombreDelBot, MinimoDeUsuarios, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "es",
Habla: () => "Idioma Español",
Start: () => ["Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...", "\n[!] Código finalizado:", "Iniciando la creación y lectura inicial de la base de datos"],
Conn: () => ["Conectando...", "Motivo de desconexión:", "Se agotó el tiempo de conexión, reconectando...", "Se requiere reinicio, reiniciando...", "Dispositivo cerró sesión, por favor escanee nuevamente y ejecute.", "Conexión reemplazada, se abrió una nueva sesión, por favor cierre la sesión actual primero.", "Conexión perdida con el servidor, reconectando...", "Conexión cerrada, reconectando...", "Archivo de sesión incorrecto, por favor elimina la sesión y escanea nuevamente", "Conectado ✓", "\n\n[_>] Si va a utilizar el método de emparejamiento, por favor ingresa el número que se convertirá en el bot, Asegúrate de ingresar el número completo de WhatsApp junto con su código de país.\nEjemplo:  +51xxx...\n", "\nSu código de emparejamiento:"],
Call: (n = '', k = "") => `\n*[ ! ] ${n} Seras bloqueado*\n_Razon : por realizar una ${k?"videollamada":"llamada"} a este numero sin autorizacion!_\n`,
GpUp: (a = "") => ["🔒 *[ GRUPO CERRADO ]* 🔒\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🔓 *[ GRUPO ABIERTO ]* 🔓\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉⁿᵛᶦᵃʳ ᵐᵉⁿˢᵃʲᵉˢ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_", "🧰 *[AJUSTES REALIZADOS EL EN GRUPO]* ⚙️\n_ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵖᵘᵉᵈᵉⁿ ᵉᵈᶦᵗᵃʳ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ_\n~ᴾᵒʳ ᶠᵃᵛᵒʳ ᵉˢᵗᵃʳ ᵃᵗᵉⁿᵗᵒˢ ᵃ ᵖᵉʳˢᵒⁿᵃˢ ᶜᵒⁿ ʳᵉᵗʳᵃˢᵒ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ ASUNTO DEL GRUPO CAMBIADO ]* 🤳\n\nAsunto nuevo: _${a}_\n`],
RestriN: () => "[ ! ] No se pudo eliminar al participante nuevo, por favor active el modo restringido!",
AlertList: () => "[ ! ] Borre los números que inicien con   '1'   de FakeList en ./config.json...!",
WlcAdd: (n = '', e = '', k = '', o = "") => `⚡ *Bienvenid@ @${n} a este grandioso grupo* ${e}\n📆 *Fecha de ingreso | ${k}*\n🍷 _*Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas*_ ;)\n\n📜 *Normas del grupo actualmente :* \n${masss}\n${o}`,
WlcRemove: (n = '', k = "") => `\`\`\`[!] C fue alv : @${n}\`\`\`\n_- Fecha de salida | ${k}_`,
WlcPromot: (m = '', d = '', z = "") => [`*Felicidades @${m}!, ${z || 'Un administrador'} te acaba de dar un gran poder, ahora eres admin del grupo* : _${d}_\n`, `~Ahora tengo el poder absoluto y me la pelan!~\n\n*Digo..., _Muchas gracias a ${m || 'un administrador'} por darme administración intentaré dar lo mejor de mi para este grupo!!!_ :D*`],
WlcDemot: (m = '', d = '', z = "") => [`*${z || 'Un administrador'} acaba de degradar a @${m} ya no es administrador del grupo* : _${d}_`, "Shale, ya no soy administrador unu"],
Cprint: () => ["EJECUTANDO","MENSAJE","Por","De","Chat","grupo:","Privado:","Fecha"],
MsjRowner: () => "*[ ! ]* Este comando solo puede ser usado *desde el bot principal*!",
MsjOwner: () => "*[ ! ]* Este comando solo puede ser utilizado por el *propietario del bot*!",
MsjMods: () => "*[ ! ]* Este comando solo puede ser utilizado por un *moderador*!",
MsjPremium: () => "*[ ! ]* Esta solicitud es solo para usuarios *premium*!",
MsjGroup: () => "*[ ! ]* Este comando solo se puede usar en *grupos*!",
MsjPrivate: () => "*[ ! ]* Este comando solo se puede usar por *chat privado*!",
MsjAdmin: () => "*[ ! ]* Este comando solo puede ser usado por los *administradores del grupo*!",
MsjBotAdmin: () => "*[ ! ]* El bot necesita *ser administrador* para usar este comando!",
MsjUnreg: () => `*[ ! ]* Regístrese para comenzar a usar esta función\n\nEjemplo: ${Prefijo}rg nombre|edad\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] Para realizar acciones de eliminación, mi dueño tiene que encender el modo restringido!",
SpmrCmd: (a = "") => ["_Espere unos segundos antes de usar otro comando..._ ✓", `[ ! ] ${a} Por favor no sature al bot ;-;`],
SpmrCnsl: () => "[SPAMER CMD] Comando :",
Proces: (n = '', k = "") => [`_Procesando, ${n} por favor espere..._`, `_Buscando, ${k} por favor espere..._`],
Error: () => ["[ ! ] Error, vuelva a intentarlo mas tarde...", "[ ! ] Ocurrio un error inesperado u.u [ ! ]"],
Antprv: (a = "") => ["El modo anti privado esta activo, por favor evite usar este chat ;)", "[ ! ] Ultima advertencia, no hablar al bot por privado!", `*[X] El chat por privado esta prohibido [X]*\nPuedes contactar con uno de mis dueños si necesita mas información:\n\n${a}\n\n_Adios..._`],
Antnlc: (a = "") => ["[ ! ] Aea causa acabas de enviar un enlace, lo weno es que el enlace detectado es de este grupo owo", "*[ ! ] Enlace detectado [ ! ]*\n\n_Por suerte no soy acmin, asi que no puedo hacer nada unu_", `*[ ! ] Enlace detectado [ ! ]*\n_Ahora si k_gaste @${a} Adios..._\n`],
Antgll: () => ["Acabas de etiquetar a todos los participantes de este grupo, no soy administrador asi que no puedo hacer nada :0", "La acción de etiquetar a todos esta prohibido en este grupo, adiu!"],
Antlnk: (a = "") => `*[ ! ] Link detectado [ ! ]*  ${a ? "" : "\n\n_Por suerte no soy admin, asi que no puedo hacer nada :v_"}`,
Antrb: (n = '', k = "") => [`El administrador @${n} acaba de enviar un texto que contiene muchos caracteres -.-!`,`*[ ! ] Se detecto un mensaje que contiene muchos caracteres [ ! ]* ${n?"":`${saltos}\nNo soy administrador, no puedo hacer nada mas... :/`}`,`Marcar el chat como leido ✓\n${saltos}\n=> El número : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Acaba de enviar un texto que contiene muchos caracteres que puede ocasionar fallos en dispositivos móviles`],
Binf: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = '', u = '', v = '', w = '', x = '', y = "") => ["_Obteniendo información..._",`*~》INFORMACIÓN《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(activo)_\n➪ *Dueño actual* : _${author.name}_\n➪ *Aplicación Node.js iniciado* : _Hace ${a}._\n➪ *Tiempo de ejecucion actual* : _${b}._\n➪ *Apodo en Whatsapp* : _${c}._\n➪ *Total de grupos* :  _${d}_\n➪ *Total de usuarios* : _${e}_\n➪ *Grupos activos* : _${f} / ${g}_\n➪ *Chats personales* : _${h}_\n➪ *Total de chats* : _${i} / ${j}_\n➪ *Hits globales* : _${k}_\n➪ *Version del bot* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Carpeta temporal* : _${l}_\n➪ *Base de datos* : _${m}_\n➪ *Versión NodeJs* : _${n}_\n➪ *Velocidad de procesamiento* : _${o} s_\n➪ *Velocidad de conexion* : _${p} ms_\n➪ *RAM:* _${q}_\n➪ *Plataforma* : _${r}_\n➪ *Versión* : _${s}_\n➪ *Base OS* : _${t}_\n➪ *Arquitectura* : _${u}_\n➪ *Host* : _${v}_\n\n➫ _Consumo de memoria :_\n${w} ${""==x?"":`\n➫  _Uso total de CPU:_\n${x}\n➫ _CPU Core(s) Usado_ ${y}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Máxima duración de vídeo son 8 segundos!*", `*[ ! ] Por favor Envie o Responda un video o una imagen usando el comando ${Prefijo+a}*\n_NOTA : duracion de video 1 a 8 segundos máximo_ ✓`, "[ ! ] Url inválido, prueba con otro ;3"],
Tozg: (a = "") => [`*[ ! ] Responda a un sticker usando el comando:*\n\n${Prefijo + a}`, `Convertido a ${a ? "video" : "imagen"} correctamente ✓`],
Tptv: () => "Por favor, responda o envie un video que no exceda los 59 segundos de duración.",
AiChat: (n = "", k = "") => ["No hay sistema!", "Por favor, sea mas específico en su mensaje", "Y el mensaje?", `Se ${n ? "activó" : "desactivó"} "${k}" correctamente.`],
Dytv: (n = '', k = "") => [`Que video desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de un video de YouTube_\n", "[ ! ] Tu wea pesa demasiado, sorry mi king no podre enviarlo :v", `Titulo: ${n}\nTamaño: ${k}\nExtencion: .mp4`],
Dyta: (a = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Link inválido*\n_Por favor, use un link de YouTube_\n", "[ ! ] El audio pesa demasiado, lo siento no podre enviarlo..."],
Dtkv: (n = "", e = "", k = "", o = "", m = "", d ="", z = "") => ["*[ ! ] Y el Link de tiktok?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Tik Tok_\nEjm : ${Prefijo+n} https://vm.tiktok.com/ZMYmRWCo2/`, `${n ? `🔥 Autor: ${n}` : ""} ${e ? `\n🤳 Usuario: ${e}` : ""} ${k ? `\n📝 Descripción: ${k}` : ""} ${o ? `\n💕 Me gusta: ${o}` : ""} ${m ? `\n🎭 Comentarios: ${m}` : ""} ${d ? `\n🔄 Compartido: ${d}` : ""} ${z ? `\n👀 Vistas: ${z}` : ""}`],
Dlig: (a = "") => ["*[ ! ] Y el Link de Instagram?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor, use un link de Instagram_\nEjm : ${Prefijo+a} https://www.instagram.com/reel/CtTvwiuMl5L/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==`],
Dfbv: (a = "") => ["*[ ! ] Y el Link de Facebook?*", "*[ ! ] Link inválido*\n_Por favor, use un link válido_", `*[ ! ] Link inválido*\n_Por favor use un Link válido de un vídeo de Facebook_\n\nEjemplo de uso: ${Prefijo+a} https://fb.watch/b7LOc9_LU2/\n`, "[ ! ] Error puede que el link sea inválido o el vídeo sea privado, vuelva a intentarlo mas tarde"],
Dpl2: (n = '', e = '', k = '', o = '', s = '', m = '', i = '', c = '', _ = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Sin resultados, vuelva a intentarlo...",`✍️ Titulo : ${n}\n⚡ Autor : ${e}\n⏰ Duracion : ${k}\n👀 Vistas : ${o}\n📆 Fecha de subida : ${s}\n📺 Canal : ${m}\n📃 Descripcion : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Puedes usar los siguientes comandos para descargar_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
	Dyau: (n = '', e = '', k = '', o = '', s = '', x = '', d = "") => [`Que audio desea descargar de Youtube?, Ejemplo de uso: \n\n${Prefijo+n} mtc s3rl`, `🔍 Resultado encontrado para: ${n}\n${e?`✍️ Titulo: ${e}\n⏳ Duracion: 1:23 ━━━━●───────── ${k}\n👀 Vistas: ${o}\n📝 Autor: ${s}\n📜 Descripción: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Enviando audio, espere...\`\`\``:""}`],
	Ytbd: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "") => [`Que desea buscar en Youtube?, Ejemplo de uso: \n\n${Prefijo+a} cuanto es 1 + 1`, `*[ > ] Resultados en Youtube para:* _${a}_\n\n`, `🔖 Titulo: ${a}\n🧬 ID: ${b}\n⛓️ URL: ${c}\n🗜️ Tipo: ${d}\n🖼️ Miniatura: ${e}\n⌚ Duracion: ${f}\n📜 Descripción: ${g}\n📆 Fecha de subida: ${h}\n👀 Vistas: ${i}\n||\n⚡Autor: ${j}\n📺 Canal: ${k}\n\n*——————————*\n\n`],
	Gtag: (n = "", e = "", k = "", o = "") => [`*[ ! ] Invocando a los integrantes del grupo* :\n${n}\n\n*~> Invocador* : _@${e}_\n*~> Mensaje* : _${k||"No hay :v"}_\n${masss}\n╔═══ஜ۩۞۩ஜ═══╗\n${o ? o.map((e=>"╠➥ @"+e.replace(/@.+/,""))).join`\n` : ''}\n╚═══════════\n`, `${n||"ˢᵉˣʸ ᵉˡ ᑫᵘᵉ ˡᵒ ˡᵉᵃ ⁷ʷ⁷"}`],
	GpOpt: (n = '', k = "") => [`Se ${n ? 'activó' : 'desactivó'} ${k} para este grupo`, "Aqui tiene la lista de opciones :3", "Opcion", "Descripción:", "Comando:"],
	GpActn: () => [{
titulo: "[ ⬇️ BIENVENIDA AUTOMÁTICA ]",
func: [{
action: "[ 🛬 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ᵈᵃʳᵃ́ ᵇᶦᵉⁿᵛᵉⁿᶦᵈᵃ ᵃ ˡᵒˢ ⁿᵘᵉᵛᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ SOLO - ADMINS ]",
func: [{
action: "[ ⭐ Activar ]",
desc: "~ᴬʰᵒʳᵃ ˢᵒˡᵒ ˡᵒˢ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵈᵒʳᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Desactivar ]",
desc: "~ᴬʰᵒʳᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˡ ᵍʳᵘᵖᵒ ᵖᵒᵈʳᵃ́ⁿ ᵘˢᵃʳ ᵃˡ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECCIÓN ]",
func: [{
action: "[ 🌕 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ́ ᵈᵉᵗᵉᶜᵗᵃʳᵃ́ ˡᵒˢ ᵃʲᵘˢᵗᵉˢ ʳᵉᵃˡᶦᶻᵃᵈᵒˢ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI - ENLACES ]",
func: [{
action: "[ 🗡️ Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉ ᵘⁿ ᵉⁿˡᵃᶜᵉ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ᵉⁿˡᵃᶜᵉˢ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉᵗᶦᑫᵘᵉᵗᵉⁿ ᵃ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Desactivar ]",
desc: "~ᴱˡ ᵇᵒᵗ ⁿᵒ ʰᵃʳᵃ́ ⁿᵃᵈᵃ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉᵗᶦᑫᵘᵉᵗᵉ ᵃ ᵗᵒᵈᵒˢ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵘⁿ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵘⁿ ᵍʳᵘᵖᵒ ᵈᵉ ʷʰᵃᵗˢᵃᵖᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᶜʰᵃᵗ⁻ᵇᵒᵗ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ ᵃᶜᵗᵘᵃˡ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ MODO RESTRINGIDO ]",
func: [{
action: "[ 🌚 Activado ]",
desc: "~ᴬᶜᵗᶦᵛᵃ ˡᵃ ᶠᵘⁿᶜᶦᵒ́ⁿ ᵖᵃʳᵃ ᵉˡᶦᵐᶦⁿᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵉⁿ ᵍʳᵘᵖᵒˢ⁽ᴺᵒ ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 Desactivado ]",
desc: "~ᴬᶜᶜᶦᵒⁿᵉˢ ᵈᵉ ᵉˡᶦᵐᶦⁿᵃʳ ʸ ᵃᵍʳᵉᵍᵃʳ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵃ⁽ʳᵉᶜᵒᵐᵉⁿᵈᵃᵇˡᵉ⁾~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Activar ]",
desc: "~ᴱˡ ᵇᵒᵗ ᵉˡᶦᵐᶦⁿᵃʳᵃ́ ᵃ ˡᵒˢ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗᵉˢ ᑫᵘᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Desactivar ]",
desc: "~ᴺᵒ ˢᵉ ʳᵉᵃˡᶦᶻᵃʳᵃ́ ⁿᶦⁿᵍᵘⁿᵃ ᵃᶜᶜᶦᵒ́ⁿ ᶜᵘᵃⁿᵈᵒ ˢᵉ ᵉⁿᵛᶦ́ᵉⁿ ˡᶦⁿᵏˢ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 1 ]",
func: [{
action: "[ 🛡️ Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵉˢᵗᵃᵈᵒᵘⁿᶦᵈᵉⁿˢᵉˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 2 ]",
func: [{
action: "[ 🛡️ Activar ]",
desc: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘ́ᵐᵉʳᵒˢ ᶠᵃˡˢᵒˢ ᵒ ᵛᶦʳᵗᵘᵃˡᵉˢ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - EXTRANJEROS ]",
func: [{
action: "[ 🏳️ Activar ]",
desc: "~ˢᵉ ᵃᶜᵗᶦᵛᵃ ˡᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᶜᵒⁿᵗʳᵃ ⁿᵘᵐᵉʳᵒˢ ᵈᶦˢᵗᶦⁿᵗᵒˢ ᵃˡ ᵖʳᵉᶠᶦʲᵒ ᵈᵉˡ ᵖʳᵒᵖᶦᵉᵗᵃʳᶦᵒ~\nᴸᵒˢ ⁿᵘ́ᵐᵉʳᵒˢ ᑫᵘᵉ ᶜᵒᵐᶦᵉⁿᶻᵉⁿ ᶜᵒⁿ +" + LocPref + " ⁿᵒ ˢᵉʳᵃ́ⁿ ᵉˡᶦᵐᶦⁿᵃᵈᵒˢ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Desactivar ]",
desc: "~ᴰᵉˢᵃᶜᵗᶦᵛᵃʳ ᴬⁿᵗᶦᵉˢᵗʳᵃⁿʲᵉʳᵒˢ ᵉⁿ ᵉˡ ᵍʳᵘᵖᵒ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - TRABA ]",
func: [{
action: "[ 🐸 Activar ]",
desc: "~ᴱˢᵗᵉ ᶜᵒᵐᵃⁿᵈᵒ ᵃᶜᵗᶦᵛᵃ ᵖʳᵒᵗᵉᶜᶜᶦᵒ́ⁿ ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵉⁿ ᵂʰᵃᵗˢᵃᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Desactivar ]",
desc: "~ᴬⁿᵗᶦ ᵗʳᵃᵇᵃˢ ᵈᵉˢᵃᶜᵗᶦᵛᵃᵈᵒ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Hola ${a}!, 👋`,
[{
info: `*[ Menu-Completo ♻️ ]*
≡ ~ᴸᶦˢᵗᵃ ᶜᵒᵐᵖˡᵉᵗᵃ ᵈᵉ ᵗᵒᵈᵒˢ ˡᵒˢ ᶜᵒᵐᵃⁿᵈᵒˢ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = '', e = '', k = '', o = "") => ["_Cargando menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Tiempo activo: ${n}
║❂ Version del bot: ${version}
║❂ Dueño del bot: ${author.name}
║❂ Prefijo único: 「  ${Prefijo}  」
║❂ Cliente: ${e}
╚══════════ ${k ? '' : `
┏─── ⊹ ⊱♡⊰ ⊹ ───┓
Sub-Bot de wa.me/${o}
┗─── ⊹ ⊱♡⊰ ⊹ ───┛`}
${masss}
~|-------------------------|~
*[_>] _COMANDOS_ ☷*
~|-------------------------|~

╔「 _CONVERSORES :_ 」
║╭—————————
║├  ${Prefijo}sticker
║├  ${Prefijo}aimg
║├  ${Prefijo}amp4
║├  ${Prefijo}aptv
║╰—————————
╚══════════
╔「 _DESCARGADOR :_ 」
║╭—————————
║├  ${Prefijo}audio
║├  ${Prefijo}play
║├  ${Prefijo}play2
║├  ${Prefijo}ytmp4
║├  ${Prefijo}ytmp3
║├  ${Prefijo}ytv
║├  ${Prefijo}yta
║├  ${Prefijo}ytvbochi
║├  ${Prefijo}ytabochi
║├  ${Prefijo}tiktokdl
║├  ${Prefijo}igdl
║├  ${Prefijo}fbdl
║╰—————————
╚══════════
╔「 _HERRAMIENTAS :_ 」
║╭—————————
║├  ${Prefijo}ytbuscar
║├  ${Prefijo}afk
║├  ${Prefijo}robar
║├  ${Prefijo}aichat
║├  ${Prefijo}rentbot
║╰—————————
╚══════════
╔「 _JUEGOS/RPG :_ 」
║╭—————————
║├  ${Prefijo}ttt
║├  ${Prefijo}calumnia
║├  ${Prefijo}nombreninja
║├  ${Prefijo}quien
║├  ${Prefijo}suerte
║├  ${Prefijo}testgay
║├  ${Prefijo}iniciarviaje
║├  ${Prefijo}aventurar
║├  ${Prefijo}explorar
║├  ${Prefijo}inventario
║├  ${Prefijo}repararnave
║├  ${Prefijo}subirnivel
║╰—————————
╚══════════
╔「 _ADMINS :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}invocar 
║├  ${Prefijo}hidetag
║├  ${Prefijo}cgpen
║├  ${Prefijo}agp
║├  ${Prefijo}ban
║├  ${Prefijo}promote
║├  ${Prefijo}demote
║╰—————————
╚══════════
╔「 _DUEÑO :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║├  ${Prefijo}bot
║├  ${Prefijo}add
║├  ${Prefijo}banchat
║├  ${Prefijo}unbanchat
║├  ${Prefijo}addprem
║├  ${Prefijo}delprem
║├  ${Prefijo}usbann
║├  ${Prefijo}usdesb
║├  ${Prefijo}gpbc
║├  ${Prefijo}actualizarbot
║╰—————————
╚══════════
╔「 _ALEATORIO :_ 」
║╭—————————
║├  ${Prefijo}creador
║├  ${Prefijo}dueño 
║├  ${Prefijo}rg
║├  ${Prefijo}desrg
║├  ${Prefijo}miperfil
║├  ${Prefijo}infobot
║├  ${Prefijo}simi
║├  ${Prefijo}estadobot
║├  ${Prefijo}unetebot
║├  ${Prefijo}listbots
║├  ${Prefijo}instalarbot
║├  ${Prefijo}sugerir
║├  ${Prefijo}apoyar
║╰—————————
╚══════════

Muy pronto mas funciones...`],
Boes: (a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '', j = '', k = '', l = '', m = '', n = '', o = '', p = '', q = '', r = '', s = '', t = "") => `${a?`*Grupo* : _[ ${b} ]_\n\n*Grupo baneado* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot usuario* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLICO [✓]":"MODO-PRIVADO [ ! ]"}_\n\n*Modo Restringido* : _${g?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Anti-Privado* : _${h?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n\n*Ser Sub-Bot* : _${i?"ACTIVADO [✓]":"DESACTIVADO [X]"}_\n${a?`\n*Modo Solo-Admins* : _${j?"Activo [✓]":"Inactivo [X]"}_\n\n*Bienvenida* : _${k?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Enlaces* : _${l?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Urls* : _${m?"Activo [✓]":"Inactivo [X]"}_\n\n*Anti Extranjeros* : _${n?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos* : _${o?"Activo [✓]":"Inactivo [X]"}_\n\n*No Falsos 2* : _${p?"Activo [✓]":"Inactivo [X]"}_\n\n*Detección* : _${q?"Activo [✓]":"Inactivo [X]"}_\n\n*Antitraba* : _${r?"Activo [✓]":"Inactivo [X]"}_\n\n*Chat Bot* : _${s?"Activo [✓]":"Inactivo [X]"}_`:""}\n`,
Upfl: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", b = "", r = "", u = "") => [`💻 <[ PERFIL É INFO DE USUARIO]> 🌐\n\n➢ Nombre: ${n}\n${e?"➢ Es administrador: [✓]":"➢ Es administrador: [X]"}\n${k?"➢ Usuario premium: Si":"➢ Usuario premium: No"} \n${o?"➢ Registrado: [✓]":"➢ Registrado: [X]"} ${o?`\n➢ Nombre registrado: ${s}\n➢ Edad: ${m}\n➢ Fecha de registro: ${i}`:""}${c?`\n➢ Porcentaje gay: ${c}`:""}\n➢ Límites restantes: ${b+r+u}\n- Juegos = ${b}\n- Descargas = ${r}\n- Otros = ${u}\n`,`➢ Pais: ${n} \n➢ clave de pais: ${e} \n➢ Origen del número: ${k||"No encontrado u.u"} ${o?"\n➢ Número valido: [✓]":"\n➢ Número valido: [X]"} ${s?"\n➢ Dispositivo mobil: [✓]":"\n➢ Dispositivo mobil: [X]"} \n➢ Operadora: ${m} \n➢ Tipo de linea: ${s} \n➢ Formato local: ${i} \n➢ Formato internacional: ${c} \n➢ Código de pais: ${b}`],
Stke: (a = "") => ["Responda un sticker del chat actual...", `Envie ó Responda un sticker con el comando ${Prefijo+a}`, "Consejo, elimina tu sticker para todos ;v", "[ ! ] Responda un sticker para obtener los metadatos", "[ ! ] Responda un sticker para asignarle un precio falso :p", "Responda un sticker para editar el EXIF a tu manera"],
Jtli: (n = "", k = "") => ["Ya estas en una sala activa -.-", `*[ ! ] Ingrese un nombre para crear una nueva sala*\n\nEjemplo de uso:\n\n${Prefijo+n} latam\n`, "Rival encontrado!\nᴱˡ ᶦⁿᶦᶜᶦᵃᵈᵒʳ ᵗᶦᵉⁿᵉ ᑫᵘᵉ ᶜᵒᵐᵉⁿᶻᵃʳ ᵉˡ ʲᵘᵉᵍᵒ ᵉˢᶜʳᶦᵇᶦᵉⁿᵈᵒ ᵘⁿ ⁿᵘ́ᵐᵉʳᵒ ᵈᵉ ¹ ᵃˡ ⁹ ᵖᵃʳᵃ ᶜᵒᵐᵉⁿᶻᵃʳ", "tiene que comenzar el juego", "~Escriba :~\n\nrendirse\n\n~para darse por vencido~", `*[ ! ] Esperando rival*\npara unirse a la partida use el comando ${Prefijo+n} ${k}\n\n`, "El juego ha terminado", "Inválido", "Posición inválida", "Posición inválida", "Victoria!", "Juego terminado, empate", "Turno de", "*Sala 3 en linea eliminado correctamente ✓*"],
Jcal: (a = "") => [`*[ ! ] Use bien el comando :*\n${Prefijo+a} @tag|mensaje|respuesta`, `*[ ! ] Agrege barras entre cada palabra todo junto*\n\n_Ejemplo de uso_ : \n${Prefijo+a} @usuarioetiquetado|bendiceme|bendecido\n~No olvide usar esta barra~ : " | "`, "No hay texto :v", " use 2 barras!!!\n\n@tag|mensaje|respuesta ✓"],
Jnij: (a = "") => ["Use un nombre o apodo...", `☯️ Nombre ninja para _${a}_:`],
Jqun: (a = "") => [`*[ ! ] Invente un asunto*\n_Ejemplo:_\n\n${Prefijo+a} es gay :v?\n`, "*[ ! ] El asunto es muy corto*"],
Jtgs: (n = "", e = "", k = "", o = "") => [`*Jugador : @${n}*\n*[ Felicidades, ganaste!!! ]* 🥳🎉\n\n*🎰=====🎉======🎰*\n*┃ ┌────────┐ ┃*\n*${e}*\n*┃ ├────────┤ ┃*\n*${k} <==*\n*┃ ├────────┤ ┃*\n*${o}*\n*┃ └────────┘ ┃*\n*🎰=====🎉======🎰*\n\n*Todos tus límites fueron reestablecidos*`, `Jugador : @${n}\n\n🎰=====🪀======🎰\n┃ ┌────────┐ ┃\n${e}\n┃ ├────────┤ ┃\n${k}\n┃ ├────────┤ ┃\n${o}\n┃ └────────┘ ┃\n🎰=====🪀======🎰`],
Jtgy: (n = "", k = "") => [`_Calculando porcentaje..._\n💉${n}🔬`, "su porcentaje de gay es ", `@${n} es ${k} gay`, "*[ ! ] Limite de gay superado [ ! ]*"],
RpgX: (n = "", e = "", k = "", o = "") => [`\`\`\`Por favor confirme que va a comenzar el juego RPG, Ejemplo de uso:\`\`\`\n\n- Para continuar el juego:\n${Prefijo+n} true\n\n- Para pausar el juego:\n${Prefijo+n} false`, '```Juego rpg comenzado correctamente ✓```', `\n_Por favor elija su raza para comenzar, Razas disponibles:_\n\n\n${n}\n• Habilidades: Manipulación de Energía, Vuelo.\n- Objetivos: Preservar la Sabiduría, Exploración Cósmica.\nUse el comando:\n${Prefijo+o} ${k.myphers}\n\n\n${e}\n• Habilidades: Regeneración, Fuerza Física.\n- Objetivos: Dominio Militar, Honor y Lealtad.\nUse el comando:\n${Prefijo+o} ${k.drakonites}\n`, `\`\`\`Has elegido la raza ${n}!\`\`\` ${"myphers"===n?"\n\n*Trasfondo de los Myphers:*\n\n_Los Myphers son seres etéreos originarios del planeta gaseoso Myphoria. Su sociedad está profundamente arraigada en la espiritualidad y la conexión con las energías cósmicas que impregnan su atmósfera. A lo largo de las eras, han desarrollado una sabiduría ancestral que los guía en su búsqueda de conocimiento y paz en el vasto universo._\n\n_Los Myphers han perfeccionado el arte de la manipulación de energía cósmica, permitiéndoles realizar hazañas asombrosas, desde curar heridas hasta crear poderosas barreras defensivas. Su habilidad innata para volar les brinda una ventaja en la exploración de los planetas gaseosos y les permite desplazarse con gracia y velocidad._\n\n_Su objetivo primordial es preservar la sabiduría antigua de su raza y expandir su comprensión del universo. Los Myphers creen en la armonía universal y buscan compartir su conocimiento con otras razas para fomentar la paz y el entendimiento en la galaxia._":"\n\n*Trasfondo de los Drakonites:*\n\n_Los Drakonites, originarios del abrasador planeta Draconis, son una raza de reptilianos fuertes y resilientes. Han sobrevivido a generaciones en un entorno hostil, lo que ha forjado su carácter fiero y su determinación inquebrantable. Desde las edades antiguas, han honrado el código del honor y la lealtad, valores que han guiado su sociedad durante milenios._\n\n_La habilidad regenerativa de los Drakonites les permite recuperarse rápidamente de las heridas, mientras que su fuerza física y resistencia los convierten en guerreros formidables en la batalla. Han perfeccionado las artes del combate cuerpo a cuerpo y han desarrollado tecnologías avanzadas para defender su hogar y expandir su dominio._\n\n_El objetivo principal de los Drakonites es establecer un dominio militar en el universo, expandiendo su influencia y asegurando la supervivencia de su especie. Valorando el honor por encima de todo, buscan aliados que compartan sus valores y están dispuestos a luchar junto a ellos en la conquista de nuevos mundos._"} `, "[ ! ] Esta raza no existe, por favor escoja una raza valida", `Para detener el juego RPG use el comando:\n\n${Prefijo+n} false`, "🌌 Juego RPG pausado correctamente ✓"],
RpgA: (a) => ["Tu nave no puede explorar más planetas en su estado actual. Necesitas recolectar más recursos para repararla.", `Podra volver a realizar otra aventura dentro de ${a}`, `Volviste al planeta: *${a}*...`, `¡Has descubierto un nuevo planeta: *${a}*!`],
RpgE: (n='', e='', k='', o='', m='', d='', z='') => [`*[ ! ] Ya realizaste una exploración recientemente, por favor espera*\n🕐 ${n}...*\n`, `🪨 ${n ? '*No encontraste recursos por ahora u.u*' : '*Has descubierto:*'}\n${e ? `\n🛢️ Gas: ${e}` : ''} ${k ? `\n⚒️  Wolframio: ${k}` : ''} ${o ? `\n⚒️  Oro: ${o}` : ''} ${m ? `\n⚒️  Hierro: ${m}` : ''} ${d ? `\n⚒️  Aluminio: ${d}` : ''} ${z ? `\n⚒️  Silicio: ${z}` : ''}\n`, "🏜️ *No se encontró nada por ahora*\n\n", `\n*🏳️ Has encontrado una nueva civilización:* ${n}!, alianzas realizadas ${e}, ahora tu horda esta conformado por ${k} unidades.`, "\n🏴 Hasta el momento, no se ha registrado ningún avistamiento de vida alienígena en este planeta."],
RpgI: (a='', b='', c='', d='', e='', f='', g='', h='', i='', j='', k='', l='', m='', n='', o='', p='', q='', r='', s='') => `\`\`\`Inventario de @${a} (${b})\`\`\`\n\n*[🪐] Planetas descubiertos:*\n   - Total: _${c}_ ${d?`\n   - Planeta actual: _${d}_`:""}\n\n*[🚀] Nave:*\n   - Gas: _${e}_\n   - Tecnología: _${f}_\n   - Estado: _${g}_\n\n*[🌌] Exploraciones:*\n   - Última Odisea: _${0===h?"Sin viajes":`Hace ${i}`}._\n   - Última Exploración: _${0===j?"Sin exploraciones":`Hace ${k}`}._\n\n*[🎒] Items:*\n   - Wolframio: _${l}_\n   - Oro: _${m}_\n   - Hierro: _${n}_\n   - Aluminio: _${o}_\n   - Silicio: _${p}_\n\n*[👥] Horda:*\n   - _${q} unidades_\n\n*[🌟] Experiencia:*\n   - _${r} puntos_\n\n*[👑] Rol:*\n   - _${s}_\n`,
RpgR: (m='', d='', z='') => [`*[🚀] Que material desea usar para reparar su nave:*\n\n🪨 W74 (Wolframio):\n_1 de W74 proporciona 50 de tecnología_\n\n🪨 Au79 (Oro)\n_3 de Au79 proporciona 45 de tecnología_\n\n🪨 Fe26 (Hierro)\n_5 de Fe26 proporciona 20 de tecnología_\n\n🪨 Al13 (Aluminio)\n_10 de Al13 proporciona 15 de tecnología_\n\n🪨 Si14 (Silicio)\n_20 de Si14 proporciona 5 de tecnología_\n\nEjemplo de uso:\n\n${Prefijo+m} Si14\n`, `No tienes suficiente material para reparar la nave, necesitas ${m} de ${d}, actualmente tienes ${z}`, `Acabas de reparar tu nave con ${m} de tecnología.`, "Este material no existe"],
RpgS: (m='', d='', z='') => [`${m}\n\n- Nivel alcanzado: _${d}_\n- Rol asignado por el nivel: ${z}`, `Tu nivel actual es ${m}, de acuerdo a tu nivel tu rol es: ${d}`],
Lvls: () => ({0:"Esclavo Nivel-Ⅱ",3:"Esclavo Nivel-Ⅲ",4:"Esclavo Nivel-Ⅳ",5:"Esclavo Nivel-Ⅴ",6:"Esclavo Nivel-VI",7:"Esclavo Nivel-VII",8:"Esclavo Nivel-VIII",9:"Esclavo Nivel-IX",10:"Esclavo Nivel-X",11:"Dejaste de ser un esclavo felicidades 🥳",12:"Ser de baja inteligencia",13:"Ser de inteligencia media",15:"Ser de alta inteligencia",16:"Novato en entrenamiento ✓",20:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",24:"Recluta Nivel-Ⅰ",28:"Recluta Nivel-Ⅱ",32:"Recluta Nivel-Ⅲ",36:"Recluta Nivel-Ⅳ",40:"Recluta Nivel-Ⅴ",44:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",48:"Soldado De Primera Clase",52:"Soladado Con Honores",56:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",60:"Especialista",64:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",68:"Cabo Sub-1",72:"Cabo Sub-2",76:"Cabo Sub-3",80:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",84:"Sargento",88:"Sargento de Segunda Clase",92:"Sargento de Primera Clase",96:"Sargento Maestro",100:"Sargento Primero",104:"Sargento Mayor",108:"Sargento Mayor de Comando",112:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",116:"Teniente",120:"Teniente Primero",124:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",128:"Capitan",132:"Capitan Teniente",136:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",140:"Mayor",144:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",148:"Teniente coronel",152:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",156:"Coronel [－]",160:"Coronel [＝]",164:"Coronel [≡]",168:"Coronel [≥]",172:"Coronel [≧]",176:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",180:"General de brigada ㈠",184:"General de brigada ㈡",188:"General de brigada ㈢",192:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",196:"General ︾",200:"General ︾︾",204:"General ︾︾︾",208:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",212:"Lider De Alto Mando •",216:"Lider De Alto Mando ••",220:"Lider De Alto Mando ⊙",224:"Lider De Alto Mando ⊚",228:"Lider De Alto Mando ⊛",232:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",236:"Retirado Con Honores",240:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",244:"Heroe Bronce ☆",248:"Heroe Plata ☆",252:"Heroe Oro ☆",256:"Heroe Diamante ☆",260:"*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ 🪀\n",264:"Leyenda ✩",268:"Leyenda ✩✩",272:"Leyenda ✩✩✩",276:"Leyenda ✩✩✩✩",280:"Leyenda ✩✩✩✩✩",284:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",288:"Angel ✬",292:"Angel ✬✬",296:"Angel ✬✬✬",300:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",304:"Principado ✯",308:"Principado ✯✯",312:"Principado ✯✯✯",316:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",320:"Potestad ✪",324:"Potestad ✪✪",328:"Potestad ✪✪✪",332:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",336:"Grigori ♧",340:"Grigori ♧♧",344:"Grigori ♧♧♧",348:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",352:"Paladin ♤",356:"Paladin ♤♤",360:"Paladin ♤♤♤",364:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",368:"Regente Tipo 1",372:"Regente Tipo 2",376:"Regente Tipo 3",380:"Regente Tipo 4",384:"Regente Tipo 5",388:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",392:"Arcangel •",396:"Arcangel ○",400:"Arcangel ●",404:"Arcangel □",408:"Arcangel ■",412:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",416:"Guardia Celestial Tipo 1",420:"Guardia Celestial Tipo 2",424:"Guardia Celestial Tipo 3",428:"Guardia Celestial Tipo 4",432:"Guardia Celestial Tipo 5",436:"Ascendiendo a niveles sagrados continua con tu travesia... 🌌",440:"Ascension Divina Proceso 1.0...",444:"Ascension Divina Proceso 2.0...",448:"Ascension Divina Proceso 3.0...",452:"Ascension Divina Proceso 4.0...",456:"Ascension Divina Proceso 5.0...",460:"Ascendiendo A Poderes Divinos 🧿\n*FELICIDADES SIGUE ASI*",464:"Entidad Menor Tipo I",468:"Entidad Menor Tipo II",472:"Entidad Menor Tipo III",476:"Entidad Menor Tipo IV",480:"Entidad Menor Tipo V",484:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",488:"Entidad Mayor Tipo I",492:"Entidad Mayor Tipo II",496:"Entidad Mayor Tipo III",500:"Entidad Mayor Tipo IV",504:"Entidad Mayor Tipo V",508:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",512:"Semi-Dios ◇",516:"Semi-Dios ◇◇",520:"Semi-Dios ◇◇◇",524:"Semi-Dios ◇◇◇◇",528:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",532:"Forjador De Mundos •",536:"Forjador De Mundos ▪︎",540:"Forjador De Mundos ○",544:"Forjador De Mundos ●",548:"Forjador De Mundos □",552:"Forjador De Mundos ■",556:"Forjador De Mundos ♡",560:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",564:"Dios Nivel 0",568:"Dios Nivel 1",572:"Dios Nivel 2",576:"Dios Nivel 3",580:"Dios Nivel 4",584:"Dios Nivel 5",588:"Dios Nivel 8",592:"Dios Nivel 10",596:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",600:"Señor de Panteón Tipo-I",604:"Señor de Panteón Tipo-II",608:"Señor de Panteón Tipo-III",612:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",616:"Juez Del Destino Faze Intermedia",620:"Juez Del Destino Faze Avanzada",624:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",628:"Control De La Materia Fase 1",632:"Control De La Materia Fase 2",636:"Control De La Materia Fase 3",640:"Control De La Materia Fase 4",644:"Control De La Materia Fase 5",648:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",652:"Controlador Del Universo\nFase 1",656:"Controlador Del Universo\nFase 2",799:"Controlador Del Universo\nFase 3",800:"Controlador Del Universo\nFase 4",850:"Controlador Del Universo\nFase 5",870:"Ascendiendo De Poder ⚜️\n*FELICIDADES SIGUE ASI*",930:"EN ASCENSO A UN PODER INIMAGINABLE... ☯️",950:"\n*Control Del Todo Absoluto por encima de Dios* 🔥\n",1e3:"[ Felicidades!!! ]\nAlcansaste el máximo nivel, muchísimas gracias por interactuar conmigo :,3"}),
Gadd: (a = "") => ["Active el modo restringido para realizar esta acción", "[ ! ] Indique el número de un usuario que desea agregar al grupo", `wa.me/${a} te esta invitando a su grupo de WhatsApp!`, `*[ ! ] Error, no se pudo añadir a @${a} al grupo*\n\n_Por favor enviale un enlace de invitación manualmente wa.me/${a}_\n`],
Bunt: (n = '', k = "") => ["Y el enlace de WhatsApp?", "[ ! ] Error, El enlace no funciona o es inválido", `[ ! ] La cantidad mínima para unirme al grupo debe ser de *${MinimoDeUsuarios}* participantes`, `${NombreDelBot} se unió al grupo ${n} con éxito \n`],
Uban: (n = "", k = "") => ["Me odias? :,c", `*El participante @${n} fue eliminado del grupo ✓*\n_Accion ejecutada por ${k}_`, "A que usuario desea eliminar!?\nPor favor etiqueta a uno"],
Uact: (n = "", e = "", o = "") => ["*A que participante desea convertirlo en administrador?*", `Ejemplo de uso:\n\n${Prefijo+n} @51995...\n`, "A quien desea banear?", "[ ! ] Por favor etiquete al usuario que desea banear", `Usuario baneado, ${n} ya no podra usar al bot [ ! ]`, "*A que administrador desea quitarle su puesto?*", "A quien desea desbanear?", `Usuario desbaneado, ${n} puede volver a usar al bot [✓]`, `Por favor etiquete o mencioné a alguien!\n\nEjemplo de uso:\n${Prefijo+n} @${e}`, `*${n}* dejó de ser premium`, "Por favor indique el número de dias", `Solo números!\n\nEjemplo de uso:\n${Prefijo+n} @${e} 369...`, "[ ! ] Maximo 7 dias", `*[ USUARIO PREMIUM ]*\n🔖 *Nombre:* ${n}\n📆 *Tiempo:* ${e} dia(s)\n📉 *Restante:* ${o}MS`, "[ ! ] Se acabó tu tiempo premium!\n_Espero que lo hayas disfrutado :3_\n"],
Gbnd: () => ["Chat baneado correctamente ✓", "Chat desbaneado correctamente ✓"],
Gpbc: (n = "", k = "") => ["[ ! ] Y el mensaje que desea transmitir?", `Enviando transmisión a ${n} grupo(s), en aproximadamente ${k} segundo(s)`],
Gcea: (n = "", k = "") => [`*En que tiempo desea cerrar el grupo?*\n\n_Ejemplo de uso_ : \n${Prefijo+n} 10 segundos`, `*El grupo se cerrará en ${n}*\n_Accion ejecutada por : @${k}_`],
Bblst: (n = "", k = "") => ["Actualmente no hay subbots activos...", "*Lista de números que se hicieron subbots*\n~Puede que algunos números esten inactivos!~", `${n === k ? `\n\n*🐝 Bot:* wa.me/${k}` : `\n\n*👑 Dueño:* +${n}\n*🐜 Bot:* wa.me/${k}`}`],
Bbot: (a = '', b = "") => ["[ ! ] No puedes usar este comando siendo bot [ ! ]", "La opción para ser bot temporal esta desactivado", `*Hola ${a}!, antes de continuar por favor lea esta mini guia para evitar inconvenientes:*\n\n☝️🤓 Información y uso del comando:  ${b}\n\n1.- Al solicitar el código QR por primera vez se te generará una clave unica para que puedas usar el comando posteriormente, (no olvides guardar tu clave).\n\n2.- El comando tiene algunas acciones que puedes utilizar:\n┬[  ${b} tu_clave-xxx...\n└‒> _Podras conectarte manualmente si es que el bot se "desconecta"._\n┬[  ${b} tu_clave-xxx... stop\n└‒> _Detendrá el proceso de subbot hasta que lo reactives manualmente con tu clave._\n┬[  ${b} tu_clave-xxx... neoqr\n└‒> _Tu sesion actual sera cerrada y podras solicitar un nuevo código QR para escanear._\n\n3.- Cuando te conviertas en un subbot, es recomendable salirse de los grupos donde se encuentra el bot principal, esto es para evitar posibles errores o conflictos con el sistema antispam del bot.\n\n4.- El propietario y administrador de este bot se reserva el derecho de detener, modificar o deshabilitar los subbot activos o características del sistema sin previo aviso.\n\n5.- Recuerda escanear uno de los códigos QR que te seran enviados, si pides el código QR en vano seras marcado por 1 hora, impidiendo temporalmente el acceso al comando hasta que se pueda utilizar nuevamente.\n\n~El creador de este bot no se hace responsable de ninguna acción, daño o consecuencia derivada de su uso.~`, "[_>] Solicitar código...", "Deteniendo su servicio subbot...", "Generando nuevo código QR, no olvides escanearlo a tiempo!", "[ ! ] Por favor use su clave para continuar...", "[ ! ] Clave incorrecta, vuelva a intentarlo..."],
Bbbot: () => ["Tardó demasiado en escanear uno de los código QR, deteniendo servicio...", 'Escanea este QR para convertirte en un bot temporal\n1. Toque en los tres puntos "︙" en la esquina superior derecha\n2. Seleccione la opción "dispositivos vinculado"\n3. Toque en "vincular un dispositivo"\n4. Puede escanear este QR o usar el método de "Vincular con el número de teléfono" que se encuentra en la parte inferior de la pantalla\n~[NOTA] El código QR caducará si no se escanea a tiempo!~\n\n_Enviando código de vinculación..._', "Recientemente se ha detectado una sesión cerrada de tu subbot. No podrás conectarte como bot hasta que el dueño reinicie la base de datos.", "*Conectado correctamente*\n\nAqui tiene su clave unica para que vuelva a conectarse manualmente si se desconecta del servicio de bot temporal:", "Conección restablecida, volviste a ser subbot nuevamente!"],
Afkpl: (n = "", k = "") => [`📲 *Dejaste de estar AFK después de ${n}.*\nBienvenid@ de vuelta!!! :D`, `📴 *El usuario mencionado actualmente esta ausente, tiempo transcurrido ${n}.*\n\n┏⊱ *Razon* \n┗━⊱ ${k}\n`, `Por favor diga su motivo para irse AFK\nEjemplo de uso :\n\n${Prefijo+n} iré al baño :v`, "[ ! ] El motivo es muy corto", `*Se activo la función AFK exitosamente*\n\n➸ *Usuario*: ${n}\n➸ *Razon*: ${k}`],
Ureg: (k = "", o = "", s = "", m = "", i = "", c = "") => ["Por favor introduzca su código de registro","[ ! ] Codigo de registro incorrecto","[✓] Su registro fue eliminado de la base de datos correctamente 🗑️",`*[ ! ] Ya estuviste registrado en mi base de datos*\nQuieres volver a registrarte nuevamente?\nUse el comando:  \n\n${Prefijo}desrg <Código de registro>\n`,"Nombre y edad!?",'*[ ! ] Por favor agregue una barra en medio de nombre y edad*\n\n" | "\n',"*[ ! ] En edad solo se aceptan números -.-*","*[ ! ] Bruh el nombre es muy largo ._.*","*[ ! ] Maximo de edad 30 años*","*[ ! ] Minimo de edad 13 años*","REGISTRO","Nombre: ","Edad: ","Puberto(a)","Adolecente","Joven","Adulto(a)","Fecha de registro:","Información:",`〘  *REGISTRO* 〙\n\n┏─━─━━─━─━━─━\n╠≽️ *Registro de usuario* : @${k}\n╠≽️ *Nombre Registrado* : ${o}\n╠≽️ *Fecha de nacimiento* : ${s}\n╠≽️ *De acuerdo a tu edad eres un(a)* : ${m}\n╠≽️ *Información* : ${i}\n╠≽️ *Número* : wa.me/${k}\n┗─━─━━─━─━━─━\n\n_Codigo de registro_ : ${c}\n\nᴺᵒ ᵒˡᵛᶦᵈᵉ ᵍᵘᵃʳᵈᵃʳ ᵒ ᶜᵒᵖᶦᵃʳ ˢᵘ ᶜᵒ́ᵈᶦᵍᵒ ᵈᵉ ʳᵉᵍᶦˢᵗʳᵒ`],
Bscp: () => [`*🛑 Antes de continuar con su lectura, tenga en cuenta los siguientes requisitos:*\n- _Tener WhatsApp oficial en su dispositivo_\n- _Tener 200MBS de almacenamiento libre en su dispositivo_\n- _Tener instalado Termux.apk_\n- _Tener una buena conexión a internet_\n- _Por último y mas importante, tener paciencia_ :v\n\n\n*[_>] Aqui se estaran subiendo los tutoriales tanto para la aplicación termux y para máquinas virtuales:*\n~> https://whatsapp.com/channel/0029VaChGim1CYoQ3zfSrh1E\n\nNecesitas mas ayuda?, comunicate con mi creador:`, "Demo Test Tmp"],
Vthx: () => "💻 *Redes sociales* 📲\n\n[ > ] Canal de Youtube:\n- https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA\n\n[ f ] Página de Facebook:\n- https://fb.watch/b7pj-i5ejP/\n\n[Ꮄ] Tiktok:\n- https://vm.tiktok.com/ZMLjAbySN/ \n\nᴺᵒ ᵖᶦᵈᵒ ᵈᶦⁿᵉʳᵒ⁻ ˢᵒˡᵒ ᶜᵒⁿ ᵗᵘ ᵃᵖᵒʸᵒ ˢᵒʸ ᶠᵉˡᶦᶻ  :³"
};