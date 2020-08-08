const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
  console.log('Beep boop! I am ready!');
});

const roll = [
  'Üstada sorarlar sеvgi mi nеfrеt mi diyе, “nеfrеt” diyе cеvap vеrir vе еklеr; çünkü onun sahtеsi olmaz.',
  'Yanlış bildiğin yolda; hеrkеslе yürüyеcеğinе, doğru bildiğin yolda; tеk başına yürü.',
  'Büyük sıçrayışı gerçekleştirmek isteyen, birkaç adım geriye gitmek zorundadır. Bugün yarına dünle beslenerek yol alır.',
  'Herşeyi denerim; ama yapabildiklerimi yaparım.',
  'Aşk bir kadının yaşamının tüm öyküsü, erkeğin ise yalnızca bir serüvenidir. '
];
const guildID = '330030129885741059';
const channelID = '634051065129730076';
const content = [
  'hello',
  'hi',
  'alo',
  'aloo',
  'alooo',
  'hallo',
  'selam',
  'selamlar',
  'nbr',
  'slm',
  'naber'
];
client.on('message', async msg => {
  if (msg.guild.id === guildID && msg.channel.id === channelID) {
    if (content.indexOf(msg.content.toLowerCase()) > -1) {
      await msg.reply('hello!');
      // await msg.channel.send(`${msg.author} hello!`);
    }

    let regex = /^\!roll\s.+/i;
    if (regex.exec(msg.content)) {
      const i = Math.floor(Math.random() * roll.length);
      const reply = roll[i]
      // console.log(roll[i])
      // console.log(i)
      await msg.reply(reply);
    }
  }
});

client.login('NzQxNjQxNDY1ODA0ODgyMDEx.Xy6hcA.WxxP3G-x11FDg1CkfwUA_jyqASw');
