let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split('|')

let listeffect = `
Shadow
Romantic
Smoke
BurnPaper
LoveMessage
UnderGrass
DoubleHeart
CoffeCup
CoffeCup2
Butterfly
Cup
Cup2
WolfMetal
UnderWater
Roses
WhiteCube
NightSky
Flaming
Naruto
CsgoBanner
GreenLeaves
HarryPotter
LolBanner
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await conn.getBuffer(global.API('dapu', `/api/photooxy/${effect}`, {text: teks}, 'apikey'))
 let caption = `*photooxy*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['photooxy <effect|teks>']
handler.tags = ['maker']
handler.command = /^(photooxy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
