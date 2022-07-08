import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/alok.mp3'
conn.sendFile(m.chat, vn, 'alok.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['bocilalok']
handler.tags = ['sound']
handler.command = /^(bocilalok)$/i
handler.fail = null
handler.exp = 100
export default handler
