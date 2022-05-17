let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks, teks2] = text.split('|')

let listeffect = `
Layered 
8Bit 
VintageStyle 
Space3D 
Glitch 
Glitch2 
Stone 
Pornhub 
AvengersLogo 
CoolGraffiti 
MarvelStudio 
MarvelStudio2 
LionLogo 
WallGraffiti 
BlackWhite 
NinjaLogo 
3DSteel 
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await conn.getBuffer(global.API('dapu', `/api/textpro/${effect}`, {text1: teks, text2: teks2}, 'apikey'))
 let caption = `*textpro2*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['textpro2 <effect|teks|teks2>']
handler.tags = ['maker']
handler.command = /^(textpro2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
