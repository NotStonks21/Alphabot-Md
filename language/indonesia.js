exports.wait = () => {
    return `⏳ espera un momento
}

exports.ok = () => {
    return `✅ hecho, ok~`
}

exports.err = () => {
    return `⚠️ Características del medio de error`
}
exports.erorLink = () => {
    return `⚠️ El error de enlace`
}
exports.media = () => {
    return `Seleccione los medios que desea descargar`
}

exports.wrongFormat = (prefix) => {
    return `Formato incorrecto ❎ Compruebe cómo se utiliza en *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Introduzca el mensaje que desea entregar!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Comando *${cmd}* no registrado en *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Este comando es especial a Owner!`
}

exports.doneOwner = () => {
    return `✅  ️Está hecho, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Este comando solo se puede usar en grupos.!`
}

exports.adminOnly = () => {
    return `🙅  Este comando solo puede ser utilizado por administradores de grupo!`
}

exports.nhFalse = () => {
    return `Código no válido!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 SALÓN DE LA VERGÜENZA 」 ──*
    
Total bloqueado: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ El usuario no es un administrador.! ❎`
}

exports.adminAlready = () => {
    return `❎ No se puede promocionar al usuario que es administrador!`
}

exports.botNotAdmin = () => {
    return `Hacer que el bot sea un administrador primero! 🙏`
}

exports.received = (pushname) => {
    return `
Hola ${pushname}!
Gracias por informar, su informe será recibido pronto.`
}

exports.videoLimit = () => {
    return `El tamaño del archivo es demasiado grande!`
}

exports.notNum = (q) => {
    return `"${q}", no numero!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Seguro ${salam} ${pushname} 😖*
*⌚Time Server : ${time}*
*📚 List-Menu Alphabot-Md :*

╭─❒ 「 Bot Info 」 ❒
├ ${prefix}owner
├ ${prefix}rules
├ ${prefix}botstatus
╰❒ ${prefix}donate


╭─❒ 「 Owner 」 ❒
├ < evaluate
├ > evaluate
├ $ exec
├ => exec
├ ${prefix}join [link]
├ ${prefix}self
├ ${prefix}public [only bot]
├ ${prefix}del [pesan bot]
╰❒ ${prefix}setppbot [reply imagen]

╭─❒ 「 Grupo 」 ❒
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}add [593***]
├ ${prefix}kick @tag
├ ${prefix}revoke
├ ${prefix}leave
├ ${prefix}linkgc
├ ${prefix}group [open/close]
├ ${prefix}tagall [text]
╰❒ ${prefix}hidetag [text]

╭─❒ 「 Anime 」 ❒
├ ${prefix}quotesanime
├ ${prefix}anime [consulta]
├ ${prefix}manga [consulta]
╰❒ ${prefix}character [consulta]


╭─❒ 「 Search 」 ❒
├ ${prefix}ytsearch [consulta]
├ ${prefix}film [consulta]
├ ${prefix}wallpaper [consulta]
├ ${prefix}wikimedia [consulta]
├ ${prefix}hentai
├ ${prefix}wattpad [consulta]
├ ${prefix}webtoons [consulta]
├ ${prefix}drakor [consulta]
╰❒ ${prefix}pinterest [consulta]


╭─❒ 「 convertidor 」 ❒
├ ${prefix}stiker [reply imagen]
╰❒${prefix}toimg [reply sticker]


╭─❒ 「 Download 」 ❒
├ ${prefix}tiktok [link]
├ ${prefix}tiktoknowm [link]
├ ${prefix}tiktokwm [link]
├ ${prefix}tiktokaudio [link]
├ ${prefix}ytdl [link]
├ ${prefix}play [consulta]
├ ${prefix}ytmp3 link
├ ${prefix}ytmp4 link
├ ${prefix}facebook link
├ ${prefix}igstory [username]
├ ${prefix}igdl [link]
├ ${prefix}igphoto [link]
├ ${prefix}igvideo [link]
├ ${prefix}igreels [link]
├ ${prefix}igtv [link]
╰❒ ${prefix}twitter link


╭─❒ 「 Random Anime 」 ❒
├ ${prefix}loli
├ ${prefix}neko
├ ${prefix}waifu
├ ${prefix}shinobu
├ ${prefix}megumin
├ ${prefix}bully
├ ${prefix}cuddle
├ ${prefix}cry
├ ${prefix}hug
├ ${prefix}awoo
├ ${prefix}kiss
├ ${prefix}lick
├ ${prefix}pat
├ ${prefix}smug
├ ${prefix}bonk
├ ${prefix}yeet
├ ${prefix}blush
├ ${prefix}smile
├ ${prefix}wave
├ ${prefix}highfive
├ ${prefix}handhold
├ ${prefix}nom
├ ${prefix}bite
├ ${prefix}glomp
├ ${prefix}slap
├ ${prefix}kill
├ ${prefix}happy
├ ${prefix}wink
├ ${prefix}poke
├ ${prefix}dance
╰❒ ${prefix}cringe


╭─❒ 「 TqTo 」 ❒
├ My God
├ My Parents
├ Fatih A.
├ Ferdi
├ DikaArdnt
├ Mhankbarbar
├ Nurutomo
├ Rashid
├ ZeeoneOfc
├ Penyedia Module
╰❒ And All Support

    `
}

exports.rules = (prefix) => {
    return `
*── 「 REGLAS Y PREGUNTAS FRECUENTES 」 ──*

1. No envíes spam a los bots. 🙅
Sanciones: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan Alphabot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Alphabot
😖🙏
`
}
exports.source = () =>{
return`*── 「 SOURCE 」 ──*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zeeoneofc/Alphabot-Md

Untuk tutorial penginstalan kalian bisa tonton
video terbaru di playlist ini.
https://youtube.com/playlist?list=PLFCglBzFPHG7vSQaa9S3P8yfla_d9w-2-
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONATE 」 ──*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
🏧 0887435047326 (OVO/Dana/GoPay)

Berapapun donasi kalian akan sangat berarti 👍

Arigatou!

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}
