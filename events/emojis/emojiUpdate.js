const Event = require("../../structures/Event");
const Logging = require("../../database/schemas/logging");
const discord = require("discord.js");
const Maintenance = require("../../database/schemas/maintenance");
module.exports = class extends Event {
  async run(oldEmoji, newEmoji) {
    const logging = await Logging.findOne({ guildId: newEmoji.guild.id });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    const maintenance = await Maintenance.findOne({
      maintenance: "maintenance",
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (maintenance && maintenance.toggle == "true") return;

    if (logging) {
      if (logging.server_events.toggle == "true") {
        const channelEmbed = await oldEmoji.guild.channels.cache.get(
          logging.server_events.channel
        );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
        if (channelEmbed) {
          let color = logging.server_events.color;
          if (color == "#000000") color = oldEmoji.client.color.yellow;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (logging.server_events.emoji_update == "true") {
            const embed = new discord.MessageEmbed()
              .setDescription(`:pencil: ***Emoji Updated***`)
              .addField(
                "Emoji Name",
                `${oldEmoji.name} --> ${newEmoji.name}`,
                true
              )
              .addField("Emoji", newEmoji, true)
              .addField(
                "Full ID",
                `\`<:${oldEmoji.name}:${oldEmoji.id}>\``,
                true
              )
              .setFooter({ text: `Emoji ID: ${oldEmoji.id}` })
              .setTimestamp()
              .setColor(color);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
            if (
              channelEmbed &&
              channelEmbed.viewable &&
              channelEmbed
                .permissionsFor(newEmoji.guild.me)
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
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين