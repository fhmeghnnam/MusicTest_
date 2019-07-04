const Discord = require('discord.js'); // تعريف Discord.js
const fs = require('fs'); // تعريف fs.
const client = new Discord.Client(); // تعريف الكلينت
const prefix = "$"; //تعريف البرفك

client.on('guildMemberAdd', mem => {

setTimeout(function () {
        
if(mem.guild.channels.get('572452695156457472').send("**Welcome To DTM Server ,_,**"));
}, 3000);
})


client.on('ready',async () => {
    client.channels.find(ch => ch.id === "595626622682398780" && ch.type === 'voice').join();
  });


 client.on('message', (message) => {
	if (message.content){

		client.channels.get('596473681736368130').send(message.content)
	   
   }

})


client.login(process.env.BOT_TOKEN);
