import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
let vn = './media/towol1.opus'
conn.sendFile(m.chat, vn, 'towol1.opus', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['desah']
handler.tags = ['sound']
handler.command = /^(desah)$/i
handler.fail = null
handler.exp = 100
export default handler




