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


╭─❒ 「 tanks yo 」 ❒
├ a mi
├ zeeone ofc
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

2. No llames a los bots. ☎️
Sanciones: *❎ SOFT BLOCK*

3. No explotes bots.😖
Sanciones: *BLOQUEO PERMANENTE*

🗯️ Los bots no responden o tardan en responder. ?
➡️ Puede estar influenciado por la red, la señal, prohibido por Whatsapp y algún origen. Apégate a las reglas‼️

🗯️ ¿Dónde puedo obtener scripts de este bot? ?
➡️ Este guión sigue siendo privado y nunca se comercializa, sea sabio al conocer a los estafadores..

🗯️ ¿Puedo añadir al grupo??
➡️ Durante un tiempo el bot está en libre para add.

🗯️ ¿Qué prefijo es sí??
➡️ Este bot utiliza prefijo múltiple. Esto significa que puede usar el prefijo #, . y otros prefijos razonables.

🗯️ Sis, cómo el dueño del chat shaa no respondió?
➡️ El propietario solo responde a preguntas sobre bots y restricciones de error, no para conocidos o scripts de mendicidad..


Si ya entiende las reglas, escriba *${prefix}allmenu* empezar!

⚠️ Todas las políticas y disposiciones de alphabot son mantenidas por el propietario y cualquier cambio de política, en cualquier momento el propietario tiene el derecho de revocar, bloquear al usuario(*﹏*) 

Arigatou Gozaimasu! Para usuarios amigables y algunas personas que ayudaron también en el proyecto de creación de alphabot
😖🙏
`
}
exports.source = () =>{
return`*── 「 FUENTE 」 ──*

Base : https://github.com/DikaArdnt/Hisoka-Morou
Recode : https://github.com/zeeoneofc/Alphabot-Md
Translate: wa.me/593991398786

Para tutoriales de instalación que puede ver
Último video en esta lista de reproducción.
https://youtube.com/channel/UCCfr9OPXCCOqRhQlI1pjxzQ
`
}
exports.tos = (ownernomer) => {
    return `
*── 「 DONAR 」 ──*

Eh 👋
no pido donaciones gracias:
🏧 593991398786

Cualquiera que sea su donación significará mucho. 👍

Arigatou!

Contact person Owner:
wa.me/${ownernomer} (Owner)

    `
}
