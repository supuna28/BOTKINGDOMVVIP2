let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = `https://leyscoders-api.herokuapp.com/api/memeindo?apikey=dappakntlll`
    await conn.sendFile(m.chat, url, '', '', m, 0, { thumbnail: await (await fetch(url)).buffer() })
}
handler.help = ['meme']
handler.tags = ['image']
handler.command = /^(meme)$/i
handler.limit = true

module.exports = handler
