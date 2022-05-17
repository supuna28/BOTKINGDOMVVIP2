let handler = async (m, { conn, text }) => {
if (!text) throw `.react 😎`
 if (text.length > 2) throw 'riply with emoji'
const reactionMessage = { react : {text:`${text}`, key : m.quoted ? m.quoted.fakeObj.key : m.key}}
conn.sendMessage(m.chat, reactionMessage)
}
handler.help = ['react <emoji>']
handler.tags = ['tools']
handler.command = /^(react)$/i
handler.rowner = true

module.exports = handler
