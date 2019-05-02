const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const client = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

client.on('guildMemberAdd', mem => {

setTimeout(function () {
        
if(mem.guild.channels.get('572452695156457472').send("**Welcome To Atlants Community ,_,**"));
}, 3000);
})


client.on('ready',async () => {
    client.channels.find(ch => ch.id === "552811803780972554" && ch.type === 'voice').join();
  });

client.login(process.env.BOT_TOKEN);
