import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/imut2.mp3'
conn.sendFile(m.chat, vn, 'imut2.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['imut1']
handler.tags = ['sound']
handler.command = /^(imut1)$/i
handler.fail = null
handler.exp = 100
export default handler
