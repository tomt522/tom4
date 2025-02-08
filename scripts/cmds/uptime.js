const os = require('os');const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
    config: {
        name: "up",
        aliases: ["uptime", "upt"],
        version: "1.2",
        author: "VEX_ADNAN",//**you needed my cmd but don't share this cmd***and original author fb I'd : https://www.facebook.com/VEX.ADNAN.404 **//
        countDown: 5,
        role: 0,
        shortDescription: {
            en: ""
        },
        longDescription: {
            en: "get information."
        },
        category: "𝗦𝗬𝗦𝗧𝗘𝗠",
        guide: {
            en: "{pn}"
        }
    },

    onStart: async function ({ message, event, args, api, usersData, threadsData }) {
        const iURL = "https://i.imgur.com/DJQUBTm.jpeg"; //**photo link to fixed don't change photo link okay bro**//
        const uptime = process.uptime();
        const s = Math.floor(uptime % 60);
        const m = Math.floor((uptime / 60) % 60);
        const h = Math.floor((uptime / (60 * 60)) % 24);
        const upSt = `${h} Hour ${m} minute ${s} second`;

        let threadInfo = await api.getThreadInfo(event.threadID);

        const genderb = [];
        const genderg = [];
        const nope = [];

        for (let z in threadInfo.userInfo) {
            const gioitinhone = threadInfo.userInfo[z].gender;
            const nName = threadInfo.userInfo[z].name;

            if (gioitinhone === "MALE") {
                genderb.push(z + gioitinhone);
            } else if (gioitinhone === "FEMALE") {
                genderg.push(gioitinhone);
            } else {
                nope.push(nName);
            }
        }

        const b = genderb.length;
        const g = genderg.length;
        const u = await usersData.getAll();
        const t = await threadsData.getAll();
        const totalMemory = os.totalmem();
        const freeMemory = os.freemem();
        const usedMemory = totalMemory - freeMemory;
        const diskUsage = await getDiskUsage();
        const system = `${os.platform()} ${os.release()}`;
        const model = `${os.cpus()[0].model}`;
        const cores = `${os.cpus().length}`;
        const arch = `${os.arch()}`;
        const processMemory = prettyBytes(process.memoryUsage().rss);

        const a = {
            body: `⚡ ➠ Prefix: ( ${global.GoatBot.config.prefix} )\n⏳ ➠ Bot Running: ${upSt}\n🙋 ➠ Boys: ${b}\n🙋🏼‍♀️ ➠ Girls: ${g}\n🤞🏻 ➠ Groups: ${t.length}\n🎉 ➠ Users: ${u.length}\n📡 ➠ OS: ${system}\n📱 ➠ Model: ${model}\n🛡 ➠ Cores: ${cores}`,
            attachment: await global.utils.getStreamFromURL(iURL)
        };

        message.reply(a, event.threadID);
    }
};

async function getDiskUsage() {
    const { stdout } = await exec('df -k /'); 
    const [_, total, used] = stdout.split('\n')[1].split(/\s+/).filter(Boolean);
    return { total: parseInt(total) * 1024, used: parseInt(used) * 1024 };
}

function prettyBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (bytes >= 1024 && i < units.length - 1) {
        bytes /= 1024;
        i++;
    }
    return `${bytes.toFixed(2)} ${units[i]}`;
};
//**Fixed by VEX_ADNAN 🤍🤍 **//
