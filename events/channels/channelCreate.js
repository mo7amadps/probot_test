const Event = require("../../structures/Event");
const Logging = require("../../database/schemas/logging");
const discord = require("discord.js");
const cooldown = new Set();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
const Maintenance = require("../../database/schemas/maintenance");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class extends Event {
  async run(message, channel) {
    if (!message || !channel) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    const logging = await Logging.findOne({ guildId: message.guild.id });
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
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (cooldown.has(message.guild.id)) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (message.name.indexOf("Room") >= 0) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (logging) {
      if (logging.server_events.toggle == "true") {
        const channelEmbed = await message.guild.channels.cache.get(
          logging.server_events.channel
        );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
        if (channelEmbed) {
          let color = logging.server_events.color;
          if (color == "#000000") color = message.client.color.green;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (logging.server_events.channel_created == "true") {
            if (message.type === "GUILD_TEXT") {
              const embed = new discord.MessageEmbed()
                .setDescription(`:pencil: ***Channel Created***`)
                .addField("Channel", `${message}`, true)
                .addField("Channel Name", `${message.name}`, true)
                .addField("Channel Type", "Text Channel", true)
                .setFooter({ text: `Channel ID: ${message.id}` })
                .setTimestamp()
                .setColor(color);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              if (message.parent && message.type !== "GUILD_CATEGORY")
                embed.addField(`Parent Name`, message.parent.name);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              if (
                channelEmbed &&
                channelEmbed.viewable &&
                channelEmbed
                  .permissionsFor(message.guild.me)
                  .has(["SEND_MESSAGES", "EMBED_LINKS"])
              ) {
                channelEmbed.send({ embeds: [embed] }).catch(() => {});
                cooldown.add(message.guild.id);
                setTimeout(() => {
                  cooldown.delete(message.guild.id);
                }, 3000);
              }
            } else {
              const embed = new discord.MessageEmbed()
                .setDescription(`🆕 ***Channel Created***`)
                .addField("Channel Name", `${message.name}`, true)
                .addField("Channel Type", `${message.type}`, true)
                .setFooter({ text: `Channel ID: ${message.id}` })
                .setTimestamp()
                .setColor(color);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              if (
                channelEmbed &&
                channelEmbed.viewable &&
                channelEmbed
                  .permissionsFor(message.guild.me)
                  .has(["SEND_MESSAGES", "EMBED_LINKS"])
              ) {
                channelEmbed.send({ embeds: [embed] }).catch(() => {});
                cooldown.add(message.guild.id);
                setTimeout(() => {
                  cooldown.delete(message.guild.id);
                }, 3000);
              }
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