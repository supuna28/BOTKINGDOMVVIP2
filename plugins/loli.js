let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api-faza.herokuapp.com/api/wallpaper/loli?apikey=FZDEVELOPER')
  if (!res.ok) throw 'Error Website sedang down'
  let json = await res.buffer()
  conn.sendFile(m.chat, json, '', 'istri gwej', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true

module.exports = handler
