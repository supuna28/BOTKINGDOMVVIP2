// NurNurz
let handler = async (m, { conn, text }) => {
   if (!text) throw `please text give me`
     try {
        await conn.setStatus(text)
        conn.reply(m.chat, 'ok add Bio Bot', m)
     } catch (e) {
       console.log(e)
       throw `Error`
     }
}
handler.help = ['setbotbio']
handler.tags = ['owner']
handler.command = /^(setbotbio)$/i
handler.owner = true

module.exports = handler
