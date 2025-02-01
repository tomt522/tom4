const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
config: {
  name: "owner",
  aurthor:"Tokodori",// Convert By Goatbot Tokodori 
   role: 0,
  shortDescription: " ",
  longDescription: "",
  category: "admin",
  guide: "{pn}"
},

  onStart: async function ({ api, event }) {
  try {
    const ownerInfo = {
      name: '【𝗔𝗬𝗔𝗡】',
      gender: '【MaLe】',
      age: '【1+】',
      height: '【5.9】',
      choise: '【Russian 😞】',
      nick: '【Jamai Dak mgi 】'
    };

    const bold = 'https://i.imgur.com/bIVvTjU.mp4'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = ` 
╭[.  ]•〆 ᴀʏᴀɴ 〆 ]  ─⦿
├───【 OWNER】─────   ─⦿  
├───【𝙷𝙴𝙻𝙻𝙾 𝙴𝚅𝙴𝚁𝚈𝙾𝙽𝙴】─⦿
├────────────────  ─⦿
├───────────────   ─⦿
├─Name: ${ownerInfo.name}
├─Choise: ${ownerInfo.choise}
├─Gender:${ownerInfo.gender}
├─Nick: ${ownerInfo.nick}
├─Height: ${ownerInfo.height}
╰───────────────────❏
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
},
};
