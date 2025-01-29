/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const config = require('../../settings');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["king"],
    react: "🧠",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `╭┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*👋 ʜᴇʟʟᴏ ᴜsᴇʀ ${pushname}*\n\n *ɪ ᴀᴍ 𝚂𝙽𝙸𝙿𝙴𝚁*\n\n
  ɪ ᴀᴍ  ᴡʜᴀᴛsᴀᴘᴘ ʙᴀsᴇᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ 𓏺𝙰𝙷𝙼𝙴𝙳 𝙰𝙱𝙳𝙴𝙻𝙵𝙰𝚃𝚃𝙰𝙷 ғʀᴏᴍ *Egypt*.\nᴍʏ sᴏʟᴇ ᴘᴜʀᴘᴏsᴇ ɪs ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴜʀᴅᴇɴ ᴏʀ ᴄᴏsᴛ ᴏғ ᴘᴜʀᴄʜᴜsɪɴɢ ᴅᴀᴛᴀ ʙᴜɴᴅʟᴇ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢs, ᴀᴘᴘs, ᴠɪᴅᴇᴏs & ᴍᴏᴠɪᴇs ʙʏ  ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ  ʙᴜɴᴅʟᴇs.
\n\n *ғᴏʀ ᴍᴏʀᴇ ɪɴғᴏʀ ᴠɪsɪᴛ.....
     ─┄┄┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┄┄─

> *OWNER'S WHATSAPP* : https://wa.me/201020182886/?text=𝚂𝙽𝙸𝙿𝙴𝚁-xᴍᴅ+Fan+Here

> *maintained by* :
https://wa.me/201020182886/?text=𝚂𝙽𝙸𝙿𝙴𝚁+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *FOLLOW INSTAGRAM* :https://instagram.com/_bcqf/

> *FOLLOW OWNER* :https://youtube.com/@EG-SNIPER/

 *RELEASE DATE* - *30 ᴊᴀɴᴜᴀʀʏ 2025*
 
> *ʟᴏʀᴅ 𝚂𝙽𝙸𝙿𝙴𝚁*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://www2.0zz0.com/2025/01/29/22/218411100.png` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: '🪀『 𝚂𝙽𝙸𝙿𝙴𝚁 𝔖 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Media/mgenu.mp3
        await conn.sendMessage(from, { //https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Mehdia/menu.mpu3
            audio: { url: 'https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Mediia/menu.mip3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

