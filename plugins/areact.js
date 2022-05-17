let handler = async (m, { conn, text }) => {

  

  conn.sendMessage(m.chat, {

        react: {

          text: `${pickRandom(['😨', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🤨','🥴','👆','😔', '👀','👎'])}`,

          key: m.key,

        }})

  

}

handler.customPrefix = /^(hi|පකයා|ok|ko|wa.me|.song|pamkaya|whatsapp|gm|gn|හෙලෝ|අරන්|turu|mk|ajg|❤️|ngocok|p)$/i

handler.command = new RegExp

handler.exp = 3

module.exports = handler

function pickRandom(list) {

   return list[Math.floor(Math.random() * list.length)]

}
