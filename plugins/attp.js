const {sticker5, sticker} = require('../lib/sticker')
let handler = async (m, {conn, text}) => {
  if (!text) throw ('ටෙස්ක්ස්ට් එකක් ඇතුලත් කරන්න')
  api = await conn.getBuffer(`https://xteam.xyz/attp?file&text=${text}`)
  conn.sendMessage(m.chat, {sticker:api},{quoted:m}) 
}

handler.help = ['attp'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(attp)$/i

module.exports = handler
