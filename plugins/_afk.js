let handler = m => m
handler.before = m => {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
ඔබ AFK වෙතින් ඉවත් විය${user.afkReason ? ' අනතුරුව ' + user.afkReason : ''}
තුළ ${clockString(new Date - user.afk)}
`.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user) continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0) continue
        let reason = user.afkReason || ''
        m.reply(`
ඔහුව ටැග් කරන්න එපා!
ඔහු AFK හි සිටී${reason ? ' හේතුවක් ඇතුව' + reason : 'හේතුවක් නෑ'}
තුළ ${clockString(new Date - afkTime)}
`.trim())
    }
    return true
}

module.exports = handler

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
