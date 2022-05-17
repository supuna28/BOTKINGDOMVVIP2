handler = async (m, {conn, command}) => {
    switch (command) {
        case 'ppcp':
        res = await conn.fetchJson(global.API('lol', '/api/random/ppcouple', {}, 'apikey'))
        buff = await conn.getBuffer(res.result.male)
        bufm = await conn.getBuffer(res.result.female)
        await conn.sendFile(m.chat, buff, '', wm, m)
        await conn.sendFile(m.chat, bufm, '', wm, m)
        break
        case 'patrick': 
        res = await conn.getBuffer(global.API('lol', '/api/sticker/patrick', {}, 'apikey'))
        await conn.sendFile(m.chat, res, '', wm, m)
        break
        case 'estetic':
        buf = await conn.getBuffer(global.API('lol', '/api/random/estetic', {}, 'apikey'))
        conn.sendButton(m.chat, `nih kak *${m.name}*`, wm, buf, [{buttonId: '.estetic', buttonText: {displayText: 'NEXT'}, type: 1}], m)
    }
}

handler.command = ['ppcp', 'patrick', 'estetic']
handler.help = ['ppcp', 'patrick', 'estetic']
handler.tags = ['image']

module.exports = handler