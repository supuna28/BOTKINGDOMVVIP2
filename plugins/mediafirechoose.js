const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const { mediafireDl } = require('../lib/mediafire.js')
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

let duit = `*────── 「 MEDIAFIRE DOWNLOADER 」 ──────*

*ඔබගේ ගොනුව පිලිබද තොරතුරු*

🆔 නම : ${res[0].nama}

📊 ප්‍රමානය : ${res[0].size}

💬 Link : ${res[0].link}

_ Upload Media_`

let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/1afe4bdf9c931fdb6f54d.jpg' }}, { upload: conn.waUploadToServer })

     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {

           imageMessage: message.imageMessage,

           hydratedContentText: duit,

           hydratedFooterText: wm,

           hydratedButtons: [{

             urlButton: {

               displayText: '🏧 MY WEBSITE',

               url: 'supuna.ml'

             }

           },

               {

             callButton: {

               displayText: 'call',

               phoneNumber: '+94'

             }

           },           

               {

             quickReplyButton: {

               displayText: 'ඩවුන්ලොඩ් කිරීම තහවුරු කරන්න,

               id: '.mediafire ${res[0].link}',

             }

           }]

         }

       }

     }), { userJid: m.sender, quoted: m });

    //conn.reply(m.chat, text.trim(), m)

    return await conn.relayMessage(

         m.chat,

         template.message,

         { messageId: template.key.id }

     )

}

handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^mediafiretest$/i

module.exports = handler
