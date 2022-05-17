const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@danielteodoro/baileys-md')

let fs = require('fs')

let handler = async (m) => {

    let who

    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender

    else who = m.sender

    let user = global.db.data.users[who]

let anu = `*â”€â”€â”€â”€â”€Œ Botkingdom ã€ â”€â”€â”€*

.request ඔබගෙ සමූහයෙ ලින්ක් එක යොදා බොට්ගෙ ඉන්බොක්ස් සෙන්ඩ් කරන්න 😴`

     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({

     templateMessage: {

         hydratedTemplate: {

           hydratedContentText: anu,

           locationMessage: { 

           jpegThumbnail: fs.readFileSync('./media/donasi.jpg') }, 

           hydratedFooterText: wm,

           hydratedButtons: [{

             urlButton: {

               displayText: 'Botkingdom',

               url: https://chat.whatsapp.com/CIDWlH7yzEsKombRDcTKcV

             }

           },

               {

             quickReplyButton: {

               displayText: 'Back To Menu',

               id: '.menu',

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

handler.help = ['donasi', 'donate']

handler.tags = ['xp']

handler.command = /^(donasi|addmygc)$/i

module.exports = handler
