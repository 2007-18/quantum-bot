import fs from 'fs-extra';
const { readJsonSync, readJsonSync } = fs
const { Prefijo, NombreDelBot, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "en",
Habla: () => "English language",
Start: () => ["Running the most Kawaii third world Bot.\nStarting script execution...", "\n[!] Code finished:"],
Conn: () => ["Connecting...", "Disconnect reason:", "Connection timed out, reconnecting...", "Restart required, restarting...", "Device logged out, please scan again and run.", "Connection replaced, another new session opened, please close current session first.", "Connection lost from server, reconnecting...", "Connection closed, reconnecting...", "Bad session file, please delete session and scan again.", "Connected ✓"],
Call: (n = "", k = "") => `\n*[ ! ] ${n} You will be blocked*\n_Reason: for making a ${k ? "video call" : "call"} to this number without authorization!_\n`,
GpUp: (e = "") => ["🔒 *[ CLOSED GROUP ]* 🔒\n_ᴺᵒʷ ᵃˡˡ ᵃˡˡ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🔓 *[ OPEN GROUP ]* 🔓\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ˢᵉⁿᵈ ᵐᵉˢˢᵃᵍᵉˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_", "🧰 *[SETTINGS MADE ON IN GROUP]* ⚙️\n_ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶜᵃⁿ ᵉᵈᶦᵗ ᵍʳᵒᵘᵖ ˢᵉᵗᵗᶦⁿᵍˢ_\n~ᴾˡᵉᵃˢᵉ ᵇᵉ ᵃʷᵃʳᵉ ᵒᶠ ᵖᵉᵒᵖˡᵉ ʷᶦᵗʰ ᵐᵉⁿᵗᵃˡ ʳᵉᵗᵃʳᵈᵃᵗᶦᵒⁿ~", `✍️ *[ GROUP SUBJECT CHANGED ]* 🤳\n\nNew name: _${e}_\n`],
RestriN: () => "[!] Failed to remove the new participant, please enable restricted mode!",
AlertList: () => "[!] Delete numbers starting with  '1'  from FakeList in ./config.json...!",
WlcAdd: (n = "", e = "", k = "", o = "") => `⚡ *Welcome @${n} to this amazing group* ${e}\n📆 *Join Date: ${k}*\n🍷 _*I hope you enjoy your stay here, don't forget to respect the participants and the rules*_ ;)\n\n📜 *Group rules currently:* \n${masss}\n${o}`,
WlcRemove: (n = "", k = "") => `\`\`\`[!] Left: @${n}\`\`\`\n_- Date of departure |  ${k}_`,
WlcPromot: (m = "", d = "", z = "") => ["An administrator", `*Congratulations @${m}! @${z} has just given you great power, now you are an admin of the group*: _${d}_\n`, `~Now I have absolute power and I don't care!~\n\n*I mean..., _Thank you very much to @${m} for giving me administration, I will try my best for this group!!!_ :D*`],
WlcDemot: (m = "", d = "", z = "") => ["The administrator", `*@${z} has just demoted @${m} and is no longer an administrator of the group*: _${d}_`, "How sad, I'm no longer an administrator unu"],
Cprint: () => ["RUNNING", "MESSAGE", "By", "From", "Chat", "group:", "Private:", "Date"],
MsjRowner: () => "*[ ! ]* This command can only be used *from the main bot*!",
MsjOwner: () => "*[ ! ]* This command can only be used by the *bot owner*!",
MsjMods: () => "*[ ! ]* This command can only be used by a *moderator*!",
MsjPremium: () => "*[ ! ]* This request is only for *premium users*!",
MsjGroup: () => "*[ ! ]* This command can only be used in *groups*!",
MsjPrivate: () => "*[ ! ]* This command can only be used in *private chat*!",
MsjAdmin: () => "*[ ! ]* This command can only be used by *group administrators*!",
MsjBotAdmin: () => "*[ ! ]* The bot needs to be *an administrator* to use this command!",
MsjUnreg: () => `*[ ! ]* Register to start using this feature\n\nExample: ${Prefijo}rg name|age\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] To perform deletion actions, my owner needs to enable restricted mode!",
SpmrCmd: (a = "") => ["_Wait a few seconds before using another command..._ ✓", `[ ! ] ${a} Please do not spam the bot ;-;`],
SpmrCnsl: () => "[SPAMMER CMD] Command:",
Proces: (n = "", k = "") => [`_Processing, ${n} please wait..._`, `_Searching, ${k} please wait..._`],
Error: () => ["[ ! ] Error, please try again later...", "[ ! ] An unexpected error occurred u.u [ ! ]"],
Antprv: (a = "") => ["The anti-private mode is active, please avoid using this chat ;)", "[ ! ] Last warning, do not talk to the bot in private!", `*[X] Private chat is not allowed [X]*\nYou can contact one of my owners if you need more information:\n\n${a}\n\n_Goodbye..._`],
Antnlc: (a = "") => ["[ ! ] My crazy you just sent a link, the good thing is that the link detected is from this group owo", "*[ ! ] Link detected [ ! ]*\n\n_Luckily I'm not an admin, so I can't do nothing unu_", `*[ ! ] Link detected [ ! ]*\n_Now if you were worth @${e} Goodbye..._\n`],
Antgll: () => ["You just mentioned all participants in this group, but I'm not an admin so I can't do anything :0", "Tagging everyone action is prohibited in this group, bye!"],
Antlnk: (a = "") => `*[ ! ] Link detected [ ! ]*  ${a ? "" : "\n\n_Luckily I'm not an admin, so I can't do anything :v_"}`,
Antrb: (n = "", k = "") => [`The administrator @${n} has just sent a text that contains too many characters -.-!`, `*[ ! ] A message containing too many characters was detected [ ! ]* ${n ? "" : `${saltos}\nI am not an administrator, I cannot do anything more... :/`}`, `Mark the chat as read ✓\n${saltos}\n=> Number: wa.me/${n}\n=> Alias: ${k}\n[ ! ] Just sent a text that contains too many characters that may cause issues on mobile devices`],
Binf: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "", u = "", v = "", w = "", x = "") => ["_Getting information..._",`*~》INFORMATION《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(active)_\n➪ *Current owner* : _${author.name}_\n➪ *Execution time* : _${a}._\n➪ *Whatsapp nickname* : _${b}._\n➪ *Total groups* :  _${c}_\n➪ *Total users* : _${d}_\n➪ *Active groups* : _${e} / ${f}_\n➪ *Personal chats* : _${g}_\n➪ *Total chats* : _${h} / ${i}_\n➪ *Global hits* : _${j}_\n➪ *Bot version* : _${version}_\n➪ *Wa-web Api* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Temporary folder* : _${k}_\n➪ *Database* : _${l}_\n➪ *Node.js version* : _${m}_\n➪ *Processing speed* : _${n} s_\n➪ *Connection speed* : _${o} ms_\n➪ *RAM:* _${p}_\n➪ *Platform* : _${q}_\n➪ *Version* : _${r}_\n➪ *Base OS* : _${s}_\n➪ *Architecture* : _${t}_\n➪ *Host* : _${u}_\n\n➫ _Memory consumption :_\n${v} ${""==w?"":`\n➫  _Total CPU usage:_\n${w}\n➫ _Used CPU Core(s)_ ${x}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Maximum video duration is 8 seconds!*", `*[ ! ] Please send or reply with a video or image using the command ${Prefix + a}*\n_NOTE: Video duration should be 1 to 8 seconds maximum_ ✓`, "[ ! ] Invalid URL, please try another one ;3"],
AiChat: () => ["No system available!", "Please be more specific in your message", "And the message?"],
Dytv: (n = "", k = "") => [`What video do you want to download from Youtube?, Usage example: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a link from a YouTube video_\n", "[ ! ] Your video weighs too much, sorry my king I can't send it :v", `Title: ${n}\nSize: ${k}\nExtension: .mp4`],
Dyta: (a = "") => [`What audio do you want to download from Youtube?, Usage example: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please, use a YouTube link_\n", "[ ! ] The audio is too heavy, sorry I can't send it..."],
Dpl2: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", _ = "") => [`What do you want to search on Youtube? Example of use: \n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] No results found, please try again...",`✍️ Title: ${n}\n⚡ Author: ${e}\n⏰ Duration: ${k}\n👀 Views: ${o}\n📆 Upload Date: ${s}\n📺 Channel: ${m}\n📃 Description: ${i||"-"}\n🧬 ID: ${c}\n\n🧑‍💻 _You can use the following commands to download_${masss}\n\n┌ Audio -\n│┌  ${Prefix}ytmp3 ${_}\n└┼  ${Prefix}yta ${_}\n   └  ${Prefix}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefix}ytmp4 ${_}\n└┼  ${Prefix}ytv ${_}\n   └  ${Prefix}ytvbochi ${_}\n`],
Dyau: (n = "", e = "", k = "", o = "", s = "", x = "", d = "") => [`Which audio do you want to download from YouTube? Usage example: \n\n${Prefix + n} mtc s3rl`, `🔍 Result found for: ${n}\n${e ? `✍️ Title: ${e}\n⏳ Duration: 1:23 ━━━━●───────── ${k}\n👀 Views: ${o}\n📝 Author: ${s}\n📜 Description: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Sending audio, please wait...\`\`\`` : ""}`],
GpOpt: (n = "", k = "") => [`Group ${n ? 'enabled' : 'disabled'} ${k} for this group`, "Here's the list of options :3", "Option", "Description:", "Command:"],
GpActn: () => [{
titulo: "[ ⬇️ AUTOMATIC WELCOME ]",
func: [{
action: "[ 🛬 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʷᵉˡᶜᵒᵐᵉ ⁿᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Deactivate ]",
desc: "~ᴺᵉʷ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶦⁿ ᵃ ᵍʳᵒᵘᵖ ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʷᵉˡᶜᵒᵐᵉᵈ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ ONLY - ADMINS ]",
func: [{
action: "[ ⭐ Activate ]",
desc: "~ᴺᵒʷ ᵒⁿˡʸ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Deactivate ]",
desc: "~ᴺᵒʷ ᵃˡˡ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷᶦˡˡ ᵇᵉ ᵃᵇˡᵉ ᵗᵒ ᵘˢᵉ ᵗʰᵉ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETECTION ]",
func: [{
action: "[ 🌕 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵈᵉᵗᵉᶜᵗ ᵃᵈʲᵘˢᵗᵐᵉⁿᵗˢ ᵐᵃᵈᵉ ᵗᵒ ᵃ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵗᵒ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴺᵒ ᵃᶜᵗᶦᵒⁿ ʷᶦˡˡ ᵇᵉ ᵗᵃᵏᵉⁿ ʷʰᵉⁿ ᵂʰᵃᵗˢᴬᵖᵖ ˡᶦⁿᵏˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ᵗᵃᵍ ᵉᵛᵉʳʸᵒⁿᵉ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Deactivate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ᵈᵒ ⁿᵒᵗʰᶦⁿᵍ ʷʰᵉⁿ ᵉᵛᵉʳʸᵒⁿᵉ ᶦˢ ᵗᵃᵍᵍᵉᵈ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵃ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᵃ ᵂʰᵃᵗˢᴬᵖᵖ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᶜʰᵃᵗᵇᵒᵗ ᶦⁿ ᶜᵘʳʳᵉⁿᵗ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ RESTRICTED MODE ]",
func: [{
action: "[ 🌚 Activated ]",
desc: "~ᴬᶜᵗᶦᵛᵃᵗᵉ ᵗʰᵉ ᶠᵘⁿᶜᵗᶦᵒⁿ ᵗᵒ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᶠʳᵒᵐ ᵃ ᵍʳᵒᵘᵖ ⁽ᵃᵗ ʸᵒᵘʳ ᵒʷⁿ ʳᶦˢᵏ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 Disabled ]",
desc: "~ᴬᶜᵗᶦᵒⁿˢ ᵗᵒ ᵃᵈᵈ ᵃⁿᵈ ʳᵉᵐᵒᵛᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Activate ]",
desc: "~ᵀʰᵉ ᵇᵒᵗ ʷᶦˡˡ ʳᵉᵐᵒᵛᵉ ᵗʰᵉ ᵖᵃʳᵗᶦᶜᶦᵖᵃⁿᵗˢ ʷʰᵒ ˢᵉⁿᵈ ᵘʳˡˢ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Deactivate ]",
desc: "~ᴵ ᵈᵒⁿ'ᵗ ᵏⁿᵒʷ ʷᶦˡˡ ᵖᵉʳᶠᵒʳᵐ ᵃⁿʸ ᵃᶜᵗᶦᵒⁿ ʷʰᵉⁿ ᵘʳˡˢ ᵃʳᵉ ˢᵉⁿᵗ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 1 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᵁˢ ⁿᵘᵐᵇᵉʳˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᵃⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ¹ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - FAKES 2 ]",
func: [{
action: "[ 🛡️ Activate ]",
desc: "~ᴾʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ˢᵗʳᵃⁿᵍᵉ ᵒʳ ˢᵘˢᵖᶦᶜᶦᵒᵘˢ ⁿᵘᵐᵇᵉʳˢ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ⁻ᶠᵃᵏᵉˢ ² ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI-FOREIGNERS ]",
func: [{
action: "[ 🏳️ Activate ]",
desc: "~ᵀʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ⁿᵘᵐᵇᵉʳˢ ᵒᵗʰᵉʳ ᵗʰᵃⁿ ᵗʰᵉ ᵒʷⁿᵉʳ'ˢ ᵖʳᵉᶠᶦˣ ᶦˢ ᵃᶜᵗᶦᵛᵃᵗᵉᵈ~\nᴺᵘᵐᵇᵉʳˢ ˢᵗᵃʳᵗᶦⁿᵍ ʷᶦᵗʰ +" + PaisPrefix + " ʷᶦˡˡ ⁿᵒᵗ ᵇᵉ ʳᵉᵐᵒᵛᵉᵈ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Deactivate ]",
desc: "~ᴰᶦˢᵃᵇˡᵉ ᴬⁿᵗᶦ ᶠᵒʳᵉᶦᵍⁿᵉʳˢ ᶦⁿ ᵗʰᵉ ᵍʳᵒᵘᵖ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - CRASHED ]",
func: [{
action: "[ 🐸 Activate ]",
desc: "~ᵀʰᶦˢ ᶜᵒᵐᵐᵃⁿᵈ ᵃᶜᵗᶦᵛᵃᵗᵉˢ ᵗʰᵉ ᵖʳᵒᵗᵉᶜᵗᶦᵒⁿ ᵃᵍᵃᶦⁿˢᵗ ᶜʳᵃˢʰ ᵐᵉˢˢᵃᵍᵉˢ ᶦⁿ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Deactivate ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦˢᵃᵇˡᵉᵈ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Hello ${a}!, 👋`,
[{
info: `*[ Menu-Complete ♻️ ]*
≡ ~ᶠᵘˡˡ ˡᶦˢᵗ ᵒᶠ ᵃˡˡ ᶜᵒᵐᵐᵃⁿᵈˢ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = "", k = "") => ["_Loading menu..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Active time: ${n}
║❂ Bot version: ${version}
║❂ Bot Owner: ${author.name}
║❂ Unique prefix: 「  ${Prefijo}  」
║❂ Client: ${k}
╚══════════
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
~|-------------------------|~
*[_>] _COMMANDS_ ☷*
~|-------------------------|~

╔「 _CONVERTERS :_ 」
║╭—————————
║├  ${Prefijo}sticker
║╰—————————
╚══════════
╔「 _DOWNLOADER :_ 」
║╭—————————
║├  ${Prefijo}audio
║├  ${Prefijo}play2
║├  ${Prefijo}ytmp4
║├  ${Prefijo}ytmp3
║├  ${Prefijo}ytv
║├  ${Prefijo}yta
║├  ${Prefijo}ytvbochi
║├  ${Prefijo}ytabochi
║╰—————————
╚══════════
╔「 _TOOLS :_ 」
║╭—————————
║├  ${Prefijo}aichat
║╰—————————
╚══════════
╔「 _ADMINS :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║╰—————————
╚══════════
╔「 _RANDOM :_ 」
║╭—————————
║├  ${Prefijo}sugerir 
║├  ${Prefijo}simi
║╰—————————
╚══════════

Very soon more functions...`],
Boes: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "") => `${a?`*Group* : _[ ${b} ]_\n\n*Banned Group* : _${c?"[✓]":"[X]"}_\n\n*Bot Admin?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot User* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"PUBLIC MODE [✓]":"PRIVATE MODE [ ! ]"}_\n\n*Restricted Mode* : _${g?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Anti-Private* : _${h?"ENABLED [✓]":"DISABLED [X]"}_\n\n*Be Sub-Bot* : _${i?"ENABLED [✓]":"DISABLED [X]"}_\n${a?`\n*Admins-Only Mode* : _${j?"Active [✓]":"Inactive [X]"}_\n\n*Welcome* : _${k?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Links* : _${l?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Urls* : _${m?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Foreigners* : _${n?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes* : _${o?"Active [✓]":"Inactive [X]"}_\n\n*No Fakes 2* : _${p?"Active [✓]":"Inactive [X]"}_\n\n*Detection* : _${q?"Active [✓]":"Inactive [X]"}_\n\n*Anti-Crash* : _${r?"Active [✓]":"Inactive [X]"}_\n\n*Chat Bot* : _${s?"Active [✓]":"Inactive [X]"}_`:""}\n`
};