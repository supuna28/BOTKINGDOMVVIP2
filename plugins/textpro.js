let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split('|')

let listeffect = `
Bokeh
BrokenGlass
ArtPaperCut
NeonDevil
3D UnderWater
BearLogo
Biscuit
AbstraGold
RusyMetal
FruitJuice
IceCold
Marble
Horror
PlasticBagDrug
Honey
Christmas
BreakWall
DropWater
GreenNeon
Wood
MetalRainbow
PurpleGem
ShinyMetal
YellowJewelry
ErodedMetal
BronzeGlitter
BlueGem
BlueMetal
3D Glowing
WonderfulGraffiti
Futuristic
Snow
Cloud
LuxuryGold
Blackpink
Cloud 2
SummerBeach
Writing
Emgraved 3D
Summery
3D Glue
MetalDark
NeonLight
Minion
Holograpic
MetalPurple
DeluxeSilver
GlosyCarbon
Fabric
Neon
NewYear
NewYear2
XmasCards
Blood
Halloween
LogoJoker
Wicker
NaturalLeaves
FireworkSparkle
Skeleton
Steel
UltraGloss
Denim
DecorateGreen
Rock
Lava
YellowGlass
PurpleShiny
CaptainAmerica
Robot
RainbowEqualizer
Toxic
PinkSparkling
ChocolateCake
PurpleGlass
Strawberry
KoiFish
Bread
MatixStyle
HorrorBlood
NeonLight 2
3D Box
Neon 2
RoadWarning
GreenHorror
Transformer
Berry
Thunder2
MagmaHot
3D Stone
3D NeonLight
HarryPotter
Embossed
Fiction
`.trim()


    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'Uhm... Teksnya?', m)

  await m.reply('Sedang membuat...')
 let hasil = await conn.getBuffer(global.API('dapu', `/api/textpro/${effect}`, {text: teks}, 'apikey'))
 let caption = `*textpro*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, '', caption, m)
}
handler.help = ['textpro <effect|teks>']
handler.tags = ['maker']
handler.command = /^(textpro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
