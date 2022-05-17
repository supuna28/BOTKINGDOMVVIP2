let handler = m => m

let linkRegex = /https://chat.whatsapp.com/
handler.before = async function (m, { isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat];
  let ValidLink = (m.text.includes('https://') || m.text.includes('http://'))
  if (chat.antiLink && ValidLink && !isAdmin && !m.isBaileys && m.isGroup) {
    let thisGroup = isBotAdmin ? `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat)}` : 0
    if (m.text.includes(thisGroup) && thisGroup != 0) throw false // jika link grup itu sendiri gak dikick
    await conn.reply(m.chat, `*Link හමුවිය 😒!*${isBotAdmin ? '' : 'ඉවත් කරන්න 🤤'}\n\nයොදන්න*.off antilink* මෙම විශේෂාංගය අක්‍රිය කිරීමට${opts['restrict'] ? '' : '\nයොදන්න.on restrict* ඒ නිසා ඉවත් කරන්න'}`, '', '', '', m)
    if (global.opts['restrict']) {
      if (isBotAdmin) this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    }
  }
  return true
}

module.exports = handler
