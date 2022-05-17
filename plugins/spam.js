const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan di spam\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    if (text > 5000000) return conn.reply(m.chat, 'Teks Kepanjangan!\nMAX 500 HURUF!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62\n\n*Contoh:*\n.spam 6285xxxxxxxx|elyas ganteng', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 WA SPAMMER ]`

conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
conn.sendMessage(korban + '@s.whatsapp.net', {text:spam1}, {quoted:m})
   
    m.reply(`ok 🫡`)
}
handler.help = ['spam mobile no']
handler.tags = ['spam']
handler.command = /^(spam|spamwa)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
