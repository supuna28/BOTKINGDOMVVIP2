/**
diupload oleh https://github.com/uhdahlah
**/

let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Daerah', m)

  await m.reply('Searching...')
	axios.get(global.API('lol', `/api/cuaca/${text}`, {}, 'apikey')).then ((res) => {
	 	let hasil = `Cuaca Daerah *${text}*\n\nTempat : ${res.data.result.tempat}\nAngin : ${res.data.result.angin}\nCuaca : ${res.data.result.cuaca}\nDeskripsi : ${res.data.result.description}\nKelembapan : ${res.data.result.kelembapan}\nSuhu : ${res.data.result.suhu}\nUdara : ${res.data.result.udara}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['cuaca'].map(v => v + ' <daerah>')
handler.tags = ['tools']
handler.command = /^(cuaca)$/i
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
