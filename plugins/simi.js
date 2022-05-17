handler = (m, {conn, text}) => {
  try {
    //conn.fetchJson(`https://api.lolhuman.xyz/api/simi?apikey=rey2k21&text=${text}`)
    conn.fetchJson(`https://api-toxic-devil.herokuapp.com/api/ai/simi?text=${text}&lang=id`)
    .then(api => {
      m.reply(api.response)
    })
  } catch {
    m.reply(eror)
  }
}

handler.tags = ['kerang']
handler.command = ['simi']
handler.help = ['simi']

module.exports = handler
