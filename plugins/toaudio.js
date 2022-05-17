const fs = require("fs")
const { toAudio } = require(`../lib/converter`)
handler = async (m, {conn}) => {
    q = m.quoted ? m.quoted : m
    mime = q.mtype
    if (mime != 'videoMessage') throw `reply videonya`
    vid = await q.download()
    mp3 = await toAudio(vid)
    await conn.sendFile(m.chat, mp3.data, '', '', m)
    fs.unlinkSync(mp3.filename)
}
handler.command = ['toaudio', 'tomp3']
handler.help = ['toaudio', 'tomp3']
handler.tags = ['tools']

module.exports = handler