let limit = 30

let fetch = require('node-fetch')

const { servers, yta } = require('../lib/y2mate')

let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {

  if (!args || !args[0]) throw `contoh:\n${usedPrefix + command} https://www.youtube.com/watch?v=yxDdj_G9uRY`

  let chat = global.db.data.chats[m.chat]

  let server = (args[1] || servers[0]).toLowerCase()

  let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])

  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize

  m.reply(isLimit ? `Ukuran File: ${filesizeF}\nUkuran file diatas ${limit} MB, download sendiri: ${dl_link}` : global.wait)

  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp3', `

┏┉━━━━━━━━━━━❏

┆ *YOUTUBE MP3*

├┈┈┈┈┈┈┈┈┈┈┈

┆• *නම:* ${title}

│• *Type:* MP3

┆• *📥 File:* ${filesizeF}

└❏

`.trim(), m, null, {

    asDocument: chat.useDocument, mimetype: 'audio/mp4', ptt: true, contextInfo: {

        externalAdReply: {

            title: '▶︎ ━━━━━━━•────────────────── ', 

            body: 'Now Playing...',

            description: 'Now Playing...',

            mediaType: 2,

          thumbnail: await (await fetch('https://telegra.ph/file/4bfec25f504f75e14e236.jpg')).buffer(),

         mediaUrl: `https://youtu.be/t0Q2otsqC4I`

        }

     }

  })

}

handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)

handler.tags = ['downloader']

handler.command = /^ytaa$/i

handler.owner = false

handler.mods = false

handler.premium = false

handler.group = false

handler.private = false

handler.admin = false

handler.botAdmin = false

handler.fail = null

handler.exp = 0

handler.limit = true

module.exports = handler
