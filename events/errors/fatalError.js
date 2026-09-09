const Event = require("../../structures/Event");
const Discord = require("discord.js");
const config = require("../../../config.json");
const webhookClient = new Discord.WebhookClient({
  url: config.webhooks.errors,
});
const uuid = require("uuid");
const id = uuid.v4();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class extends Event {
  async run(error, message) {
    console.log(error);

    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        `**User:** ${message.author} (${message.author.tag} - ${message.author.id})\n**Message:** ${message.content}\n**Error:** ${error}\n**ID:** \`${id}\`\n\n__**Guild Info**__\nName: ${message.guild.name}\nID: ${message.guild.id}\nChannel: ${message.channel.name} (${message.channel.id})`
      )
      .setTimestamp();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    webhookClient.sendCustom(embed);
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين