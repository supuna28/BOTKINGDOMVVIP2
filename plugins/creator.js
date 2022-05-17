const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:Sy;🫥;;;
FN: supuna
item.ORG: supuna
item1.TEL;waid=94753943957:94753943957@s.whatsapp.net
item1.X-ABLabel:🫥
item2.EMAIL;type=🫥
item2.X-ABLabel:🫥
item3.ADR:;;SRILANKA;;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 LOCATION
item4.EMAIL;type=INTERNET:🫥
item4.X-ABLabel:👤
item5.URL:${instagram}
item5.X-ABLabel:supuna.ml
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER', 
            contacts: [{ vcard }] 
        }
    }
)
await conn.reply(m.chat, "🫥", sentMsg)}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
