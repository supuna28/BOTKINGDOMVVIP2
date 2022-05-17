let fetch = require('node-fetch')
let handler = async (m, { command, conn, text }) => {
  let url = global.API('lol', '/api/nulis', {text}, 'apikey')
  await conn.sendFile(m.chat, url, '', wm, m, false, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['nulis <teks>']
handler.tags = ['nulis']

handler.command = 'nulis'

handler.limit = true

module.exports = handler
