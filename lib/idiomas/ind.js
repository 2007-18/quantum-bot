import fs from 'fs-extra';
const { readJsonSync, readJsonSync } = fs
const { Prefijo, NombreDelBot, LocPref } = readJsonSync('./config.json');
const { version, author } = readJsonSync('./package.json');
const masss = String.fromCharCode(8206).repeat(850), saltos = "\n".repeat(400);

export default {
Lengua: () => "id",
Habla: () => "Bahasa Indo",
Start: () => ["Menjalankan Bot paling Kawaii dunia ketiga.\nMemulai eksekusi skrip...", "\n[!] Kode selesai:"],
Conn: () => ["Menghubungkan...", "Alasan Putus Koneksi:", "Waktu koneksi habis, sedang menghubungkan kembali...", "Restart diperlukan, sedang merestart...", "Perangkat keluar, harap scan ulang dan jalankan kembali.", "Koneksi digantikan, sesi baru terbuka, harap tutup sesi saat ini terlebih dahulu.", "Koneksi terputus dari server, menghubungkan kembali...", "Koneksi ditutup, menghubungkan kembali...", "File sesi tidak valid, harap hapus sesi dan scan ulang.", "Terhubung ✓"],
Call: (n = "", k = "") => `\n*[ ! ] ${n} Anda akan diblokir*\n_Alasan: melakukan ${k ? "panggilan video" : "panggilan"} ke nomor ini tanpa izin!_\n`,
GpUp: (a = "") => ["🔒 *[ KELOMPOK TERTUTUP ]* 🔒\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ˢᵉᵐᵘᵃ ᵃᵈᵐᶦⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🔓 *[ GRUP TERBUKA ]* 🔓\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᶦʳᶦᵐ ᵖᵉˢᵃⁿ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_", "🧰 *[PENGATURAN DIBUAT PADA GROUP]* ⚙️\n_ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵉᵈᶦᵗ ᵖᵉⁿᵍᵃᵗᵘʳᵃⁿ ᵍʳᵘᵖ_\n~ᴴᵃʳᵃᵖ ᵇᵉʳʰᵃᵗᶦ⁻ʰᵃᵗᶦ ᵗᵉʳʰᵃᵈᵃᵖ ᵒʳᵃⁿᵍ⁻ᵒʳᵃⁿᵍ ᵈᵉⁿᵍᵃⁿ ᵏᵉᵗᵉʳᵇᵉˡᵃᵏᵃⁿᵍᵃⁿ ᵐᵉⁿᵗᵃˡ~", `✍️ *[ SUBYEK KELOMPOK DIUBAH ]* 🤳\n\nNama baru: _${a}_\n`],
RestriN: () => "[!] Gagal menghapus peserta baru, harap aktifkan mode terbatas!",
AlertList: () => "[!] Hapus nomor yang dimulai dengan '1' dari FakeList di ./config.json...!",
WlcAdd: (n = "", e = "", k = "", o = "") => `⚡ *Selamat datang @${n} di grup ini yang luar biasa* ${e}\n📆 *Tanggal bergabung: ${k}*\n🍷 _*Semoga Anda menikmati tinggal di sini, jangan lupa menghormati peserta dan aturan*_ ;)\n\n📜 *Aturan grup saat ini:* \n${masss}\n${o}`,
WlcRemove: (n = "", k = "") => `\`\`\`[!] Kiri: @${n}\`\`\`\n_- Tanggal keberangkatan |  ${k} `,
WlcPromot: (m = "", d = "", z = "") => ["Seorang administrator", `*Selamat @${m}! @${z} baru saja memberikanmu kekuatan besar, sekarang kamu menjadi admin grup*: _${d}_\n`, `~Sekarang aku memiliki kekuatan mutlak dan aku tidak peduli!~\n\n*Aku maksud..., _Terima kasih banyak kepada @${m} karena memberi saya administrasi, saya akan memberikan yang terbaik untuk grup ini!!!_ :D*`],
WlcDemot: (m = "", d = "", z = "") => ["Administrator", `*@${z} baru saja menurunkan jabatan @${m} dan tidak lagi menjadi administrator grup*: _${d}_`, "Sedih sekali, saya bukan lagi seorang administrator unu"],
Cprint: () => ["SEDANG MENJALANKAN", "PESAN", "Dari", "Dari", "Obrolan", "grup:", "Pribadi:", "Tanggal"],
MsjRowner: () => "*[ ! ]* Perintah ini hanya dapat digunakan *dari bot utama*!",
MsjOwner: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *pemilik bot*!",
MsjMods: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *moderator*!",
MsjPremium: () => "*[ ! ]* Permintaan ini hanya untuk pengguna *premium*!",
MsjGroup: () => "*[ ! ]* Perintah ini hanya dapat digunakan di *grup*!",
MsjPrivate: () => "*[ ! ]* Perintah ini hanya dapat digunakan melalui *chat pribadi*!",
MsjAdmin: () => "*[ ! ]* Perintah ini hanya dapat digunakan oleh *administrator grup*!",
MsjBotAdmin: () => "*[ ! ]* Bot perlu menjadi *administrator* untuk menggunakan perintah ini!",
MsjUnreg: () => `*[ ! ]* Silakan daftar untuk mulai menggunakan fitur ini\n\nContoh: ${Prefijo}rg nama|usia\n\n${Prefijo}rg Juanito|15\n`,
MsjRestrict: () => "[ ! ] Untuk melakukan tindakan penghapusan, pemilik saya harus mengaktifkan mode terbatas!",
SpmrCmd: (a = "") => ["_Tunggu beberapa detik sebelum menggunakan perintah lain..._ ✓", `[ ! ] ${a} Mohon jangan spam bot ;-;`],
SpmrCnsl: () => "[SPAMER CMD] Perintah :",
Proces: (n = "", k = "") => [`_Memproses, ${n} harap tunggu..._`, `_Mencari, ${k} harap tunggu..._`],
Error: () => ["[ ! ] Terjadi kesalahan, silakan coba lagi nanti...", "[ ! ] Terjadi kesalahan yang tidak terduga u.u [ ! ]"],
Antprv: (a = "") => ["Mode anti-private aktif, harap hindari menggunakan obrolan ini ;)", "[ ! ] Peringatan terakhir, jangan mengobrol dengan bot secara pribadi!", `*[X] Obrolan pribadi dilarang [X]*\nAnda dapat menghubungi salah satu dari pemilik saya jika membutuhkan informasi lebih lanjut:\n\n${a}\n\n_Sampai jumpa..._`],
Antnlc: (a = "") => ["[ ! ] Gila saya baru saja mengirim tautan, untungnya tautan yang terdeteksi berasal dari grup ini owo", "*[ ! ] Tautan terdeteksi [ ! ]*\n\n_Untungnya saya bukan admin, jadi Aku tidak bisa melakukan apa-apa unu_", `*[ ! ] Tautan terdeteksi [ ! ]*\n_Sekarang jika Anda layak @${a} Selamat tinggal..._\n`],
Antgll: () => ["Anda baru saja menandai semua peserta dalam grup ini, saya bukan admin jadi saya tidak bisa melakukan apa-apa :0", "Tindakan menandai semua orang dilarang dalam grup ini, adiu!"],
Antlnk: (a = "") => `*[ ! ] Tautan terdeteksi [ ! ]*  ${a ? "" : "\n\n_Sayangnya saya bukan admin, jadi tidak bisa melakukan apa-apa :v_"}`,
Antrb: (n = "", k = "") => [`Administrator @${n} baru saja mengirimkan teks yang berisi banyak karakter -.-!`,"*[ ! ] Terdeteksi pesan yang berisi banyak karakter [ ! ]* "+(n?"":`${saltos}\nSaya bukan administrator, saya tidak bisa melakukan lebih banyak... :/`),`Tandai chat sebagai sudah dibaca ✓\n${saltos}\n=> Nomor : wa.me/${n}\n=> Alias : ${k}\n[ ! ] Baru saja mengirimkan teks yang berisi banyak karakter yang dapat menyebabkan gangguan pada perangkat seluler`],
Binf: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "", u = "", v = "", w = "", x = "") => ["_Mendapatkan informasi..._",`*~》INFORMASI《~*\n${masss}\n┏─━─━━──━━─━─┓\n➪ *Bot* : _(aktif)_\n➪ *Pemilik saat ini* : _${author.name}_\n➪ *Waktu eksekusi* : _${a}._\n➪ *Nama panggilan di WhatsApp* : _${b}._\n➪ *Total grup* :  _${c}_\n➪ *Total pengguna* : _${d}_\n➪ *Grup aktif* : _${e} / ${f}_\n➪ *Obrolan pribadi* : _${g}_\n➪ *Total obrolan* : _${h} / ${i}_\n➪ *Total hits* : _${j}_\n➪ *Versi bot* : _${version}_\n➪ *Wa-web API* : _https://github.com/adiwajshing/Baileys_\n➪ *Script - Bot* : _https://youtu.be/Tk9Pitk1_oM_\n➪ *Folder sementara* : _${k}_\n➪ *Basis data* : _${l}_\n➪ *Versi NodeJs* : _${m}_\n➪ *Kecepatan pemrosesan* : _${n} s_\n➪ *Kecepatan koneksi* : _${o} ms_\n➪ *RAM:* _${p}_\n➪ *Platform* : _${q}_\n➪ *Versi* : _${r}_\n➪ *Base OS* : _${s}_\n➪ *Arsitektur* : _${t}_\n➪ *Host* : _${u}_\n\n➫ _Pemakaian memori :_\n${v} ${""==w?"":`\n➫  _Total penggunaan CPU:_\n${w}\n➫ _Jumlah Core CPU yang digunakan_ ${x}`}\n\n┗─━─「 ✵ 」━─━─┛`],
Stks: (a = "") => ["*[ ! ] Durasi maksimal video adalah 8 detik!*", `*[ ! ] Silakan kirim atau balas dengan video atau gambar menggunakan perintah ${Prefijo+a}*\n_CATATAN: Durasi video maksimal 1 hingga 8 detik_ ✓`, "[ ! ] URL tidak valid, coba yang lain ;3"],
AiChat: () => ["Tidak ada sistem!", "Silakan berikan pesan yang lebih spesifik", "Dan pesannya?"],
Dytv: (n = "", k = "") => [`Video apa yang ingin Anda download dari Youtube?, Contoh penggunaan: \n\n${Prefijo+n} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , saya menggunakan tautan dari video YouTube_\n", "[ ! ] Video Anda terlalu besar, maaf raja saya tidak dapat mengirimkannya :v", `Judul: ${n}\nUkuran: ${k} \nEkstensi: .mp4`],
Dyta: (a = "") => [`Audio apa yang ingin Anda unduh dari Youtube?, Contoh penggunaan: \n\n${Prefijo+a} https://youtu.be/ed-6VSF-GGc`, "*[ ! ] Invalid link*\n_Please , gunakan tautan YouTube_\n", "[ ! ] Audio terlalu berat, maaf saya tidak dapat mengirimkannya..."],
Dpl2: (n = "", e = "", k = "", o = "", s = "", m = "", i = "", c = "", _ = "") => [`Apa yang ingin Anda cari di Youtube? Contoh penggunaan:\n\n${Prefijo+n} The prophet wanna play?`,"[ ! ] Tidak ada hasil, coba lagi...",`✍️ Judul : ${n}\n⚡ Penulis : ${e}\n⏰ Durasi : ${k}\n👀 Tampilan : ${o}\n📆 Tanggal unggah : ${s}\n📺 Saluran : ${m}\n📃 Deskripsi : ${i||"-"}\n🧬 ID : ${c}\n\n🧑‍💻 _Anda dapat menggunakan perintah berikut untuk mengunduh_${masss}\n\n┌ Audio -\n│┌  ${Prefijo}ytmp3 ${_}\n└┼  ${Prefijo}yta ${_}\n   └  ${Prefijo}ytabochi ${_}\n\n┌ Video -\n│┌  ${Prefijo}ytmp4 ${_}\n└┼  ${Prefijo}ytv ${_}\n   └  ${Prefijo}ytvbochi ${_}\n`],
Dyau: (n = "", e = "", k = "", o = "", s = "", x = "", d = "") => [`Audio apa yang ingin Anda unduh dari YouTube?, Contoh penggunaan: \n\n${Prefijo+n} mtc s3rl`, `🔍 Hasil ditemukan untuk: ${n}\n${e?`✍️ Judul: ${e}\n⏳ Durasi: 1:23 ━━━━●───────── ${k}\n👀 Tampilan: ${o}\n📝 Penulis: ${s}\n📜 Deskripsi: ${x}\n⛓️ URL: ${d}\n\n\`\`\`Mengirim audio, harap tunggu...\`\`\``:""}`],
GpOpt: (n = "", k = "") => [`Berhasil ${n ? 'mengaktifkan' : 'menonaktifkan'} ${k} untuk grup ini`, "Berikut adalah daftar opsi :3", "Opsi", "Deskripsi:", "Perintah:"],
GpActn: () => [{
titulo: "[ ⬇️ SELAMAT DATANG OTOMATIS ]",
func: [{
action: "[ 🛬 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿʸᵃᵐᵇᵘᵗ ᵖᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵏᵉ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender bienvenida`
}, {
action: "[ 🛫 Menonaktifkan ]",
desc: "~ᴾᵉˢᵉʳᵗᵃ ᵇᵃʳᵘ ᵈᵃˡᵃᵐ ᵍʳᵘᵖ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦᵗᵉʳᶦᵐᵃ~",
cmd: `${Prefijo}apagar bienvenida`
}]
}, {
titulo: "[ ⬇️ HANYA - ADMIN ]",
func: [{
action: "[ ⭐ Mengaktifkan ]",
desc: "~ˢᵉᵏᵃʳᵃⁿᵍ ʰᵃⁿʸᵃ ᵃᵈᵐᶦⁿᶦˢᵗʳᵃᵗᵒʳ ʸᵃⁿᵍ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
cmd: `${Prefijo}encender soloadmins`
}, {
action: "[ ✨ Menonaktifkan ]",
desc: "~ˢᵉᵏᵃʳᵃⁿᵍ ˢᵉᵐᵘᵃ ᵖᵉˢᵉʳᵗᵃ ᵃᵏᵃⁿ ᵈᵃᵖᵃᵗ ᵐᵉⁿᵍᵍᵘⁿᵃᵏᵃⁿ ᵇᵒᵗ~",
cmd: `${Prefijo}apagar soloadmins`
}]
}, {
titulo: "[ ⬇️ DETEKSI ]",
func: [{
action: "[ 🌕 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender deteccion`
}, {
action: "[ 🌑 Menonaktifkan ]",
desc: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉⁿᵈᵉᵗᵉᵏˢᶦ ᵖᵉⁿʸᵉˢᵘᵃᶦᵃⁿ ʸᵃⁿᵍ ᵈᶦˡᵃᵏᵘᵏᵃⁿ ᵖᵃᵈᵃ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar deteccion`
}]
}, {
titulo: "[ ⬇️ ANTI-WA_LINKS ]",
func: [{
action: "[ 🗡️ Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵐᵉʳᵉᵏᵃ ʸᵃⁿᵍ ᵐᵉⁿᵍᶦʳᶦᵐ ᵗᵃᵘᵗᵃⁿ ᵂʰᵃᵗˢᴬᵖᵖ ᵏᵉ ᵍʳᵘᵖ~",
cmd: `${Prefijo}encender antienlaces`
}, {
action: "[ 😴 Menonaktifkan ]",
desc: "~ᵀᶦᵈᵃᵏ ᵃᵈᵃ ᵗᶦⁿᵈᵃᵏᵃⁿ ʸᵃⁿᵍ ᵃᵏᵃⁿ ᵈᶦᵃᵐᵇᶦˡ ˢᵃᵃᵗ ᵗᵃᵘᵗᵃⁿ ᵂʰᵃᵗˢᴬᵖᵖ ᵈᶦᵏᶦʳᶦᵐ~",
cmd: `${Prefijo}apagar antienlaces`
}]
}, {
titulo: "[ ⬇️ ANTI - TAGALL ]",
func: [{
action: "[ 🧐 Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉⁿᵃⁿᵈᵃᶦ ˢᵉᵐᵘᵃ ᵒʳᵃⁿᵍ~",
cmd: `${Prefijo}encender antitagall`
}, {
action: "[ 😶 Menonaktifkan ]",
desc: "~ᴮᵒᵗ ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵐᵉˡᵃᵏᵘᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ˢᵉᵐᵘᵃ ᵒʳᵃⁿᵍ ᵈᶦᵇᵉʳᶦ ᵗᵃᵍ~",
cmd: `${Prefijo}apagar antitagall`
}]
}, {
titulo: "[ ⬇️ CHAT - BOT ]",
func: [{
action: "[ 🗣️ Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender chatbot`
}, {
action: "[ 👤 Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᶜʰᵃᵗᵇᵒᵗ ᵈᶦ ᵍʳᵘᵖ ˢᵃᵃᵗ ᶦⁿᶦ~",
cmd: `${Prefijo}apagar chatbot`
}]
}, {
titulo: "[ ⬇️ MODE TERBATAS ]",
func: [{
action: "[ 🌚 Diaktifkan ]",
desc: "~ᴬᵏᵗᶦᶠᵏᵃⁿ ᶠᵘⁿᵍˢᶦ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᵃʳᶦ ᵍʳᵘᵖ ⁽ᵈᵉⁿᵍᵃⁿ ʳᶦˢᶦᵏᵒ ᴬⁿᵈᵃ ˢᵉⁿᵈᶦʳᶦ⁾~",
cmd: `${Prefijo}encender restringido`
}, {
action: "[ 🌝 dengan disabilitas ]",
desc: "~ᵀᶦⁿᵈᵃᵏᵃⁿ ᵘⁿᵗᵘᵏ ᵐᵉⁿᵃᵐᵇᵃʰ ᵈᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}apagar restringido`
}]
}, {
titulo: "[ ⬇️ ANTI - URLS ]",
func: [{
action: "[ 🗡️ Mengaktifkan ]",
desc: "~ᴮᵒᵗ ᵃᵏᵃⁿ ᵐᵉⁿᵍʰᵃᵖᵘˢ ᵖᵉˢᵉʳᵗᵃ ʸᵃⁿᵍ ᵐᵉⁿᵍᶦʳᶦᵐ ᵘʳˡ~",
cmd: `${Prefijo}encender antiurl`
}, {
action: "[ 😴 Menonaktifkan ]",
desc: "~ˢᵃʸᵃ ᵗᶦᵈᵃᵏ ᵗᵃʰᵘ ᵃᵏᵃⁿ ᵐᵉˡᵃᵏᵘᵏᵃⁿ ᵗᶦⁿᵈᵃᵏᵃⁿ ᵃᵖᵃ ᵖᵘⁿ ˢᵃᵃᵗ ᵗᵃᵘᵗᵃⁿ⁻ᵘʳˡ ᵈᶦᵏᶦʳᶦᵐ~",
cmd: `${Prefijo}apagar antiurl`
}]
}, {
titulo: "[ ⬇️ ANTI-PALSU 1 ]",
func: [{
action: "[ 🛡️ Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᴬˢ ⁺¹~",
cmd: `${Prefijo}encender antifake1`
}, {
action: "[ ⚰️ Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵃⁿᵗᶦ⁻ᵖᵃˡˢᵘ ¹ ᵈᶦ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antifake1`
}]
}, {
titulo: "[ ⬇️ ANTI - PALSU 2 ]",
func: [{
action: "[ 🛡️ Mengaktifkan ]",
desc: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ᵃⁿᵉʰ ᵃᵗᵃᵘ ᵐᵉⁿᶜᵘʳᶦᵍᵃᵏᵃⁿ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}encender antifake2`
}, {
action: "[ ⚰️ Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᵃⁿᵗᶦ⁻ᵖᵃˡˢᵘ ² ᵈᵃˡᵃᵐ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antifake2`
}]
}, {
titulo: "[ ⬇️ ANTI - ORANG ASING ]",
func: [{
action: "[ 🏳️ Mengaktifkan ]",
desc: "~ᴾᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ⁿᵒᵐᵒʳ ˢᵉˡᵃᶦⁿ ᵃʷᵃˡᵃⁿ ᵖᵉᵐᶦˡᶦᵏ ᵈᶦᵃᵏᵗᶦᶠᵏᵃⁿ~\nᴬⁿᵍᵏᵃ ʸᵃⁿᵍ ᵈᶦᵐᵘˡᵃᶦ ᵈᵉⁿᵍᵃⁿ +" + PaisPrefix + " ᵗᶦᵈᵃᵏ ᵃᵏᵃⁿ ᵈᶦʰᵃᵖᵘˢ~",
cmd: `${Prefijo}encender antiextranjeros`
}, {
action: "[ 🏴 Menonaktifkan ]",
desc: "~ᴺᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ ᴬⁿᵗᶦ ᴼʳᵃⁿᵍ ᴬˢᶦⁿᵍ ᵈᶦ ᵍʳᵘᵖ~",
cmd: `${Prefijo}apagar antiextranjeros`
}]
}, {
titulo: "[ ⬇️ ANTI - MENCARA ]",
func: [{
action: "[ 🐸 Mengaktifkan ]",
desc: "~ᴾᵉʳᶦⁿᵗᵃʰ ᶦⁿᶦ ᵐᵉⁿᵍᵃᵏᵗᶦᶠᵏᵃⁿ ᵖᵉʳˡᶦⁿᵈᵘⁿᵍᵃⁿ ᵗᵉʳʰᵃᵈᵃᵖ ᵖᵉˢᵃⁿ ᵐᵒᵍᵒᵏ ᵈᶦ ᵂʰᵃᵗˢᴬᵖᵖ~",
cmd: `${Prefijo}encender antitraba`
}, {
action: "[ 👾 Menonaktifkan ]",
desc: "~ᴬⁿᵗᶦ⁻ᶜʳᵃˢʰ ᵈᶦⁿᵒⁿᵃᵏᵗᶦᶠᵏᵃⁿ~",
cmd: `${Prefijo}apagar antitraba`
}]
}],
Menl: (a = "") => [`Halo ${a}!, 👋`,
[{
info: `*[ Menu-Lengkap ♻️ ]*
≡ ~ᴰᵃᶠᵗᵃʳ ˡᵉⁿᵍᵏᵃᵖ ˢᵉᵐᵘᵃ ᵖᵉʳᶦⁿᵗᵃʰ~
${Prefijo}menucompleto`
},
{
info: `...`
}]
],
Menu: (n = "", k = "") => ["_Menu pemuatan..._", `╔I [ \`\`\`${NombreDelBot}\`\`\` ]
║❂ Waktu aktif: ${n}
║❂ Versi bot: ${version}
║❂ Pemilik Bot: ${author.name}
║❂ Awalan unik: 「  ${Prefijo}  」
║❂ Klien: ${k}
╚══════════
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
~|-------------------------|~
*[_>] _PERINTAH_ ☷*
~|-------------------------|~

╔「 _CONVERTER :_ 」
║╭—————————
║├  ${Prefijo}sticker
║╰—————————
╚══════════
╔「 _PENGUNDUH :_ 」
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
╔「 _PERALATAN :_ 」
║╭—————————
║├  ${Prefijo}aichat
║╰—————————
╚══════════
╔「 _ADMIN :_ 」
║╭—————————
║├  ${Prefijo}encender
║├  ${Prefijo}apagar
║╰—————————
╚══════════
╔「 _ACAK :_ 」
║╭—————————
║├  ${Prefijo}sugerir 
║├  ${Prefijo}simi
║╰—————————
╚══════════

Muito em breve mais funções...`],
Boes: (a = "", b = "", c = "", d = "", e = "", f = "", g = "", h = "", i = "", j = "", k = "", l = "", m = "", n = "", o = "", p = "", q = "", r = "", s = "", t = "") => `${a?`*Grup* : _[ ${b} ]_\n\n*Grup Diblokir* : _${c?"[✓]":"[X]"}_\n\n*Admin Bot?* : _${d?"[✓]":"[X]"}_`:""}\n\n*Bot Pengguna* : ${NombreDelBot}\n_${"@"+e}_\n\n*Bot* : _${f?"MODO-PUBLIC [✓]":"MODO-PRIVAT [ ! ]"}_\n\n*Mode Terbatas* : _${g?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Anti-Pribadi* : _${h?"AKTIF [✓]":"NONAKTIF [X]"}_\n\n*Jadi Sub-Bot* : _${i?"AKTIF [✓]":"NONAKTIF [X]"}_\n${a?`\n*Mode Hanya-Admins* : _${j?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Selamat Datang* : _${k?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Tautan* : _${l?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti URL* : _${m?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti Orang Asing* : _${n?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu* : _${o?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*No Palsu 2* : _${p?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Deteksi* : _${q?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Anti-Menabrak* : _${r?"Aktif [✓]":"Tidak Aktif [X]"}_\n\n*Chat Bot* : _${s?"Aktif [✓]":"Tidak Aktif [X]"}_`:""}\n`
};