module.exports = {
 config: {
	 name: "bayjid",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "ayan") {
 return message.reply({
 body: " 「❥︎----ღ᭄_ᴬˢˢᴬᴸᴬᴹᴼᴸᴬᴵᴷᵁᴹ ..\n❥︎----ღ᭄_  .🌴.\n❥ \n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝐌𝐎𝐇𝐀𝐌𝐌𝐀𝐃 Ă̈Y̆̈Ă̈N̆̈」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/IN0CM0T.mp4")
 });
 }
 }
}
