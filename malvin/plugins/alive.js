const {
  cmd,
  commands
} = require("../command");
const os = require('os');
const {
  runtime
} = require("../functions");
cmd({
  'pattern': "alive",
  'alias': ["status", "runtime", "uptime"],
  'desc': "Check uptime and system status",
  'category': "main",
  'react': '⌚',
  'filename': __filename
}, async (_0x4b24d4, _0x17ef62, _0x60d552, {
  from: _0x581379,
  quoted: _0xa47052,
  body: _0x3fb6cd,
  isCmd: _0x1fba4b,
  command: _0xb2c73b,
  args: _0x3a80d2,
  q: _0x2749aa,
  isGroup: _0x8bd476,
  sender: _0x3f6907,
  senderNumber: _0x42a933,
  botNumber2: _0x13943e,
  botNumber: _0x2e3c00,
  pushname: _0x58e989,
  isMe: _0x4a5c1c,
  isOwner: _0x1e33b8,
  groupMetadata: _0x272b62,
  groupName: _0x39ea88,
  participants: _0x594303,
  groupAdmins: _0x44d0d8,
  isBotAdmins: _0x5649b6,
  isAdmins: _0x41bea6,
  reply: _0x4a4b30
}) => {
  try {
    const _0x20475a = "╭━━〔 *𝚂𝙽𝙸𝙿𝙴𝚁 𝔖* 〕━━┈⊷\n┃🦄╭─────────────·๏\n┃🪀┃• *⏳ᴜᴘᴛɪᴍᴇ*:  " + runtime(process.uptime()) + " \n┃🪀┃• *📟 ʀᴀᴍ ᴜsᴀɢᴇ*: " + (process.memoryUsage().heapUsed / 0x400 / 0x400).toFixed(0x2) + "GB / " + (os.totalmem() / 0x400 / 0x400).toFixed(0x2) + "TB\n┃🪀┃• *⚙️ HostName*: " + os.hostname() + "\n┃🪀┃• *👨‍💻 ᴏᴡɴᴇʀ*: 𓏺𝙰𝙷𝙼𝙴𝙳 𝙰𝙱𝙳𝙴𝙻𝙵𝙰𝚃𝚃𝙰𝙷\n┃🪀┃• *🧬 ᴠᴇʀsɪᴏɴ*: 1.0.0\nɴᴇxᴜs ᴍᴅ\n╰──────────────┈⊷\n> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𓏺𝙰𝙷𝙼𝙴𝙳 𝙰𝙱𝙳𝙴𝙻𝙵𝙰𝚃𝚃𝙰𝙷";
    await _0x4b24d4.sendMessage(_0x581379, {
      'image': {
        'url': "https://www2.0zz0.com/2025/01/29/22/218411100.png"
      },
      'caption': _0x20475a,
      'contextInfo': {
        'mentionedJid': [_0x60d552.sender],
        'forwardingScore': 0x3e7,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': '',
          'newsletterName': "𝚂𝙽𝙸𝙿𝙴𝚁 𝔖",
          'serverMessageId': 0x8f
        }
      }
    }, {
      'quoted': _0x17ef62
    });
  } catch (_0x45556f) {
    console.error("Error in alive command:", _0x45556f);
    _0x4a4b30("An error occurred: " + _0x45556f.message);
  }
});
