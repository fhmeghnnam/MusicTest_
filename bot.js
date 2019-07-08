const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const bot = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

bot.on('guildMemberAdd', member => {
   bot.channels.get('596473681736368130').send("Hi jif asild hlasjd lakjs546456$%^$%^"); 
});
bot.on('ready',async () => {
  bot.channels.find(ch => ch.id === "529746544975544342" && ch.type === 'voice').join();
});

  bot.on('message', msg => {
    if(msg.content === "joinah"){
      msg.channels.find(ch => ch.id === "529746544975544342" && ch.type === 'voice').join();
    }
  })

  bot.on('message', msg => {
    if(msg.author.id !== "595688805873483795") return;
    if(msg.content === "leaveah"){
      msg.channels.find(ch => ch.id === "529746544975544342" && ch.type === 'voice').leaveVoiceChannel;
    }
  })


bot.login(process.env.BOT_TOKEN);
