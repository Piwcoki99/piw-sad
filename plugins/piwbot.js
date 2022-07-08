import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/imut1.mp3'
conn.sendFile(m.chat, vn, 'imut1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['imut2']
handler.tags = ['sound']
handler.command = /^(imut2)$/i
handler.fail = null
handler.exp = 100
export default handler
