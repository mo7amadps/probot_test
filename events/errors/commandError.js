const Event = require("../../structures/Event");
const Discord = require("discord.js");
const config = require("../../../config.json");
const webhookClient = new Discord.WebhookClient({ url: config.webhooks.errors });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class extends Event {
  async run(error, message) {
    console.error(error);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (
      message.channel &&
      message.channel.viewable &&
      message.channel
        .permissionsFor(message.guild.me)
        .has(["SEND_MESSAGES", "EMBED_LINKS"])
    ) {
      message.channel
        .sendCustom(
          `${message.client.emoji.fail} Hey pogger! An Error just occured, make sure to report it here ${config.discord}!`
        )
        .catch(() => {});
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    webhookClient.sendCustom(
      `${message.author.username} (${message.author.id})\n${message.content}\n${error}`
    );
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين