let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) throw 'ලින්ක් එක 🫥?'
  let res = await fetch(`http://hadi-api.herokuapp.com/api/cuttly?url=${text}`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'දෝශයකි
}
handler.help = ['cuttly'].map(v => v + ' <link>')
handler.tags = ['shortlink']
handler.command = /^cuttly$/i

module.exports = handler
