const fs = require('fs');const moment = require('moment-timezone');
module.exports = {
  config: {
    name: "info",
    aliases: ["inf", "in4"],
    version: "1.0",
    author: "VEX_ADNAN",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    longDescription: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "Information",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message }) {
    this.sendInfo(message);
  },

  onChat: async function ({ event, message }) {
    if (event.body && event.body.toLowerCase() === "info") {
      this.sendInfo(message);
    }
  },

  sendInfo: async function (message) {
    const botName = "𝐄𝐒𝐇𝐀💋";
    const botPrefix = ".";
    const authorName = "Ă̈Y̆̈Ă̈N̆̈";
    const authorFB = "Ami Facebook Chalai na🫠";
    const authorInsta = "No";
    const status = "𝗣𝘂𝗿𝗲 𝗦𝗶𝗻𝗴𝗹𝗲";

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/Adnan.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM Do YYYY');
    const time = now.format('h:mm:ss A');

    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `${hours}h ${minutes}m ${seconds}sec`;

    message.reply({
      body: `
≡≡║Bot & Owner Info║≡≡
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

♕︎ Bot Name↠ ${botname}

♕︎ Bot Prefix↠ ${botPrefix}

♕︎ Owner Name↠ ${authorName}

♕︎ Facebook↠ ${authorFB}

♕︎ Instagram↠ ${authorInsta}

♕︎ Status↠ ${status}

♕︎ Date↠ ${date}

♕︎ Time↠ ${time}

♕︎ Uptime↠ ${uptimeString}

﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋﹋
Thanks for using ↠ \➪${botName}
﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`,
      attachment: await global.utils.getStreamFromURL(link)
    });
  }
};
