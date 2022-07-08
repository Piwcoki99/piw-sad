import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/sayabot.mp3'
conn.sendFile(m.chat, vn, 'sayabot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['bot']
handler.tags = ['sound']
handler.command = /^(bot)$/i
handler.fail = null
handler.exp = 100
export default handler