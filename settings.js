const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "MALVIN-XMD~E9Z2TLoI#9w1HdMRpGkJScWNGVGGNSfLAqXzLIIszwrp4M5rd0rk",
// add your Session Id 

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "‌SNIPER",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "201020182886",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "*Ahmed Abdelfattah*",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© Ahmed Abdelfattah*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://www2.0zz0.com/2025/01/29/22/218411100.png",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://www2.0zz0.com/2025/01/29/22/218411100.png",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦𝚂𝙽𝙸𝙿𝙴𝚁 𝔖✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\n*Bot By*⚡\n\n\n*© 𓏺𝙰𝙷𝙼𝙴𝙳 𝙰𝙱𝙳𝙴𝙻𝙵𝙰𝚃𝚃𝙰𝙷\n\n> ʷʰᵃᵗˢᵃᵖᵖ :* https://wa.me/201020182886",
// add alive msg here

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by 𝚂𝙽𝙸𝙿𝙴𝚁 𝔖 🚀🔥*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 

};
