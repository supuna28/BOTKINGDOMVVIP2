handler = async (m, {command, conn}) => {
    if (command == 'nsfwloli') {
        haha = await conn.getBuffer(`https://api-faza.herokuapp.com/api/wallpaper/nsfwloli?apikey=FZDEVELOPER`)
        conn.sendFile(m.chat, haha, '', 'tobat', m)
    } else {
        haha = await conn.getBuffer(`https://api-faza.herokuapp.com/api/nsfw/${command.replace('nsfw', '')}?apikey=FZDEVELOPER`)
        conn.sendFile(m.chat, haha, '', `tobat ${m.name}`, m)
    }
}

handler.help = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.command = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.tags = ['nsfw']
handler.owner = true
handler.limit = true
module.exports = handler