let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks, teks2] = text.split('|')

let listeffect = `
PaulScholes 
Tiktok 
Avengers 
3DWood 
Graffiti4 
Graffiti6 
MultiColor3D 
RealisticVintage 
Pornhub 
Juventus 
CaptainAmerica 
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('රැදී සිටින්න...')
 let hasil = await conn.getBuffer(global.API('dapu', `/api/ephoto/${effect}`, {text1: teks, text2: teks2}, 'apikey'))
 let caption = `*ephoto2*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['ephoto2 <effect|teks|teks2>']
handler.tags = ['maker']
handler.command = /^(ephoto2)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
