let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'give me link'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/shorturl?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link එකෙහි දෝශයකි'
}
handler.help = ['shorturl'].map(v => v + ' <url>')
handler.tags = ['shortlink']
handler.command = /^shorturl$/i

module.exports = handler
