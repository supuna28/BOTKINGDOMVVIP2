let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `බොට් ඇතුලත් කර සමූහයක් සාදගන්න මෙය භාවිතා කරන්න `
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'කණ්ඩායම් හමු නොවීය ¯\_(ツ)_/¯'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['creategroup <name>']
handler.tags = ['tools']

handler.command = /^create(group|c)/i
handler.register = false
module.exports = handler

const axios = require('axios')
const cheerio = require('cheerio')
async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-grup-wa/daftar-link-grup-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}
