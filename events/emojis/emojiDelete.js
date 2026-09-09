const Event = require("../../structures/Event");
const Logging = require("../../database/schemas/logging");
const discord = require("discord.js");
const Maintenance = require("../../database/schemas/maintenance");
module.exports = class extends Event {
  async run(emoji) {
    const maintenance = await Maintenance.findOne({
      maintenance: "maintenance",
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (maintenance && maintenance.toggle == "true") return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    const logging = await Logging.findOne({ guildId: emoji.guild.id });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (logging) {
      if (logging.server_events.toggle == "true") {
        const channelEmbed = await emoji.guild.channels.cache.get(
          logging.server_events.channel
        );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
        if (channelEmbed) {
          let color = logging.server_events.color;
          if (color == "#000000") color = emoji.client.color.red;

          if (logging.server_events.emoji_update == "true") {
            const embed = new discord.MessageEmbed()
              .setDescription(`🗑️ ***Emoji Delete***`)
              .addField("Emoji Name", `${emoji.name}`, true)
              .addField("Emoji", `${emoji}`, true)
              .setFooter({ text: `Emoji ID: ${emoji.id}` })
              .setTimestamp()
              .setColor(color);

            if (
              channelEmbed &&
              channelEmbed.viewable &&
              channelEmbed
                .permissionsFor(emoji.guild.me)
                .has(["SEND_MESSAGES", "EMBED_LINKS"])
            ) {
              channelEmbed.send({ embeds: [embed] }).catch(() => {});
            }
          }
        }
      }
    }
  }
};
