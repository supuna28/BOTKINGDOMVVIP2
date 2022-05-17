let xfar = require('xfarr-api')

let fetch = require('node-fetch')

let handler = async (m, { conn, command, text }) => {

    if (!text) throw 'LINK'

  let res = await xfar.Youtube(text)

m.reply('*WAIT 😎...*')

conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader

720p`, m)

}

handler.help = ['ytv720 <url>']

handler.tags = ['internet']

handler.command = /^ytvv$/i

module.exports = handler
