const Event = require("../../structures/Event");
const Guild = require("../../database/schemas/Guild");
const WelcomeDB = require("../../database/schemas/welcome");
const discord = require("discord.js");
const muteModel = require("../../database/models/mute");
const moment = require("moment");
const alt = require("../../database/models/altdetector.js");
const StickyDB = require("../../database/schemas/stickyRole");
const Logging = require("../../database/schemas/logging");
const Maintenance = require("../../database/schemas/maintenance");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class extends Event {
  async run(member) {
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
    const logging = await Logging.findOne({ guildId: member.guild.id });

    const muteDoc = await muteModel.findOne({
      guildID: member.guild.id,
      memberID: member.id,
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (muteDoc) {
      const muteRole = member.guild.roles.cache.find((r) => r.name == "Muted");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      if (muteRole)
        member.roles
          .add(muteRole.id, ["Mute Command / User left and Rejoined."])
   // صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
            .catch(() => {});

      muteDoc.memberRoles = [];
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      await muteDoc.save().catch(() => {});
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (logging) {
      if (logging.server_events.toggle == "true") {
        const channelEmbed = await member.guild.channels.cache.get(
          logging.server_events.channel
        );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
        if (channelEmbed) {
          let color = logging.server_events.color;
          if (color == "#000000") color = member.client.color.green;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (logging.server_events.member_join == "true") {
            const embed = new discord.MessageEmbed()
              .setTitle("📥 Member Joined")
              .setAuthor(
                `${member.guild.name}`,
                member.guild.iconURL({ dynamic: true })
              )
              .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
              .setDescription(`${member} (**${member.user.tag}**)`)
              .addField(
                "Account created on",
                moment(member.user.createdAt).format("dddd, MMMM Do YYYY")
              )
              .setTimestamp()
              .setColor(member.guild.me.displayHexColor);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
            if (
              channelEmbed &&
              channelEmbed.viewable &&
              channelEmbed
                .permissionsFor(member.guild.me)
                .has(["SEND_MESSAGES", "EMBED_LINKS"])
            ) {
              channelEmbed.send({ embeds: [embed] }).catch(() => {});
            }
          }
        }
      }
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let altDetector = await alt.findOne({ guildID: member.guild.id });
    if (altDetector) {
      if (altDetector.altToggle === true) {
        let arr = altDetector.allowedAlts;
        if (!arr.includes(member.id)) {
          let altLog = member.guild.channels.cache.get(altDetector.altModlog);

          let day = Number(altDetector.altDays);
          let x = Date.now() - member.user.createdAt;
          let created = Math.floor(x / 86400000);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (day >= created) {
            let action;
            if (
              altDetector.altAction &&
              altDetector.altAction.toLowerCase() === "ban"
            ) {
              await member
                .ban({ reason: "Alt Account | Alt Detector Module" })
                .catch(() => {});
              action = "Banned";
            }
            if (
              altDetector.altAction &&
              altDetector.altAction.toLowerCase() === "kick"
            ) {
              await member
                .kick({ reason: "Alt Account | Alt Detector Module" })
                .catch(() => {});
              action = "Kicked";
            }

            if (altLog) {
              if ((action && action === "Kicked") || action === "Banned") {
                const embedAlt = new discord.MessageEmbed()
                  .setColor("GREEN")
                  .setTitle(`Alt Detector | ${member.user.tag}`)
                  .setDescription(
                    `**${action} ${
                      member.user.tag
                    } From the guild.**\n\n**Reason:** Alt Detector\n\n__**Account Created at:**__ ${moment(
                      member.user.createdAt
                    ).format("MMMM Do YYYY, h:mm:ss a")}`
                  );
                altLog.send({ embeds: [embedAlt] }).catch(() => {});
              }
            }
          }
        }
      }
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let guildDB = await Guild.findOne({
      guildId: member.guild.id,
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let welcome = await WelcomeDB.findOne({
      guildId: member.guild.id,
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (!welcome) {
      const newSettings = new WelcomeDB({
        guildId: member.guild.id,
      });
      await newSettings.save().catch(() => {});
      welcome = await WelcomeDB.findOne({ guildId: member.guild.id });
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (welcome.welcomeToggle == "true") {
      if (welcome.welcomeDM == "true") {
        let text = welcome.welcomeMessage
          .replace(/{user}/g, `${member}`)
          .replace(/{user_tag}/g, `${member.user.tag}`)
          .replace(/{user_name}/g, `${member.user.username}`)
          .replace(/{user_ID}/g, `${member.id}`)
          .replace(/{guild_name}/g, `${member.guild.name}`)
          .replace(/{guild_ID}/g, `${member.guild.id}`)
          .replace(/{memberCount}/g, `${member.guild.memberCount}`)
          .replace(/{size}/g, `${member.guild.memberCount}`)
          .replace(/{guild}/g, `${member.guild.name}`)
          .replace(
            /{member_createdAtAgo}/g,
            `${moment(member.user.createdTimestamp).fromNow()}`
          )
          .replace(
            /{member_createdAt}/g,
            `${moment(member.user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}`
          );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
        if (welcome.welcomeEmbed == "false") {
          member.send(`${text}`).catch(() => {});
        }
        if (welcome.welcomeEmbed == "true") {
          let embed = new discord.MessageEmbed();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let color = welcome.embed.color;
          if (color) embed.setColor(color);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let title = welcome.embed.title;
          if (title !== null) embed.setTitle(title);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let titleUrl = welcome.embed.titleURL;
          if (titleUrl !== null) embed.setURL(titleUrl);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let textEmbed = welcome.embed.description
            .replace(/{user}/g, `${member}`)
            .replace(/{user_tag}/g, `${member.user.tag}`)
            .replace(/{user_name}/g, `${member.user.username}`)
            .replace(/{user_ID}/g, `${member.id}`)
            .replace(/{guild_name}/g, `${member.guild.name}`)
            .replace(/{guild_ID}/g, `${member.guild.id}`)
            .replace(/{memberCount}/g, `${member.guild.memberCount}`)
            .replace(/{size}/g, `${member.guild.memberCount}`)
            .replace(/{guild}/g, `${member.guild.name}`)
            .replace(
              /{member_createdAtAgo}/g,
              `${moment(member.user.createdTimestamp).fromNow()}`
            )
            .replace(
              /{member_createdAt}/g,
              `${moment(member.user.createdAt).format(
                "MMMM Do YYYY, h:mm:ss a"
              )}`
            );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (textEmbed !== null) embed.setDescription(textEmbed);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let authorName = welcome.embed.author.name
            .replace(/{user_tag}/g, `${member.user.tag}`)
            .replace(/{user_name}/g, `${member.user.username}`)
            .replace(/{user_ID}/g, `${member.id}`)
            .replace(/{guild_name}/g, `${member.guild.name}`)
            .replace(/{guild_ID}/g, `${member.guild.id}`)
            .replace(/{memberCount}/g, `${member.guild.memberCount}`)
            .replace(/{size}/g, `${member.guild.memberCount}`)
            .replace(/{guild}/g, `${member.guild.name}`);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          if (authorName !== null) embed.setAuthor(authorName);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let authorIcon = welcome.embed.author.icon;
          if (authorIcon !== null) embed.setAuthor(authorName, authorIcon);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let authorUrl = welcome.embed.author.url;
          if (authorUrl !== null)
            embed.setAuthor(authorName, authorIcon, authorUrl);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let footer = welcome.embed.footer;
          if (footer !== null) embed.setFooter(footer);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let footerIcon = welcome.embed.footerIcon;
          if (footer && footerIcon !== null)
            embed.setFooter(footer, footerIcon);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let timestamp = welcome.embed.timestamp;
          if (timestamp == "true") embed.setTimestamp();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let thumbnail = welcome.embed.thumbnail;
          if (thumbnail === "{userAvatar}")
            thumbnail = member.user.displayAvatarURL({
              dynamic: true,
              size: 512,
            });
          if (thumbnail !== null) embed.setThumbnail(thumbnail);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          let image = welcome.embed.image;
          if (image === "{userAvatar}")
            image = member.user.displayAvatarURL({ dynamic: true, size: 512 });
          if (image !== null) embed.setImage(image);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          member.send({ embeds: [embed] }).catch(() => {});
        }
      }
      if (welcome.welcomeDM == "false") {
        if (welcome.welcomeChannel) {
          const greetChannel = member.guild.channels.cache.get(
            welcome.welcomeChannel
          );
          if (greetChannel) {
            let text = welcome.welcomeMessage
              .replace(/{user}/g, `${member}`)
              .replace(/{user_tag}/g, `${member.user.tag}`)
              .replace(/{user_name}/g, `${member.user.username}`)
              .replace(/{user_ID}/g, `${member.id}`)
              .replace(/{guild_name}/g, `${member.guild.name}`)
              .replace(/{guild_ID}/g, `${member.guild.id}`)
              .replace(/{memberCount}/g, `${member.guild.memberCount}`)
              .replace(/{size}/g, `${member.guild.memberCount}`)
              .replace(/{guild}/g, `${member.guild.name}`)
              .replace(
                /{member_createdAtAgo}/g,
                `${moment(member.user.createdTimestamp).fromNow()}`
              )
              .replace(
                /{member_createdAt}/g,
                `${moment(member.user.createdAt).format(
                  "MMMM Do YYYY, h:mm:ss a"
                )}`
              );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
            if (welcome.welcomeEmbed == "false") {
              if (
                greetChannel &&
                greetChannel.viewable &&
                greetChannel
                  .permissionsFor(member.guild.me)
                  .has(["SEND_MESSAGES", "EMBED_LINKS"])
              ) {
                greetChannel.send(`${text}`).catch(() => {});
              }
            }
            if (welcome.welcomeEmbed == "true") {
              let embed = new discord.MessageEmbed();
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              let color = welcome.embed.color;
              if (color) embed.setColor(color);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              let title = welcome.embed.title;
              if (title !== null) embed.setTitle(title);
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
              let titleUrl = welcome.embed.titleURL;
              if (titleUrl !== null) embed.setURL(titleUrl);

              let textEmbed = welcome.embed.description
                .replace(/{user}/g, `${member}`)
                .replace(/{user_tag}/g, `${member.user.tag}`)
                .replace(/{user_name}/g, `${member.user.username}`)
                .replace(/{user_ID}/g, `${member.id}`)
                .replace(/{guild_name}/g, `${member.guild.name}`)
                .replace(/{guild_ID}/g, `${member.guild.id}`)
                .replace(/{memberCount}/g, `${member.guild.memberCount}`)
                .replace(/{size}/g, `${member.guild.memberCount}`)
                .replace(/{guild}/g, `${member.guild.name}`)
                .replace(
                  /{member_createdAtAgo}/g,
                  `${moment(member.user.createdTimestamp).fromNow()}`
                )
                .replace(
                  /{member_createdAt}/g,
                  `${moment(member.user.createdAt).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}`
                );

              if (textEmbed !== null) embed.setDescription(textEmbed);

              let authorName = welcome.embed.author.name
                .replace(/{user_tag}/g, `${member.user.tag}`)
                .replace(/{user_name}/g, `${member.user.username}`)
                .replace(/{user_ID}/g, `${member.id}`)
                .replace(/{guild_name}/g, `${member.guild.name}`)
                .replace(/{guild_ID}/g, `${member.guild.id}`)
                .replace(/{memberCount}/g, `${member.guild.memberCount}`)
                .replace(/{size}/g, `${member.guild.memberCount}`)
                .replace(/{guild}/g, `${member.guild.name}`);

              if (authorName !== null) embed.setAuthor(authorName);

              let authorIcon = welcome.embed.author.icon;
              if (authorIcon !== null) embed.setAuthor(authorName, authorIcon);

              let authorUrl = welcome.embed.author.url;
              if (authorUrl !== null)
                embed.setAuthor(authorName, authorIcon, authorUrl);

              let footer = welcome.embed.footer;
              if (footer !== null) embed.setFooter(footer);

              let footerIcon = welcome.embed.footerIcon;
              if (footer && footerIcon !== null)
                embed.setFooter(footer, footerIcon);

              let timestamp = welcome.embed.timestamp;
              if (timestamp == "true") embed.setTimestamp();

              let thumbnail = welcome.embed.thumbnail;
              if (thumbnail === "{userAvatar}")
                thumbnail = member.user.displayAvatarURL({
                  dynamic: true,
                  size: 512,
                });
              if (thumbnail !== null) embed.setThumbnail(thumbnail);

              let image = welcome.embed.image;
              if (image === "{userAvatar}")
                image = member.user.displayAvatarURL({
                  dynamic: true,
                  size: 512,
                });
              if (image !== null) embed.setImage(image);

              if (
                greetChannel &&
                greetChannel.viewable &&
                greetChannel
                  .permissionsFor(member.guild.me)
                  .has(["SEND_MESSAGES", "EMBED_LINKS"])
              ) {
                greetChannel.send({ embeds: [embed] }).catch(() => {});
              }
            }
          }
        }
      }
    }

    if (guildDB && guildDB.autoroleToggle && guildDB.autoroleToggle === true) {
      if (guildDB.autoroleID) {
        let role = member.guild.roles.cache.get(guildDB.autoroleID);
        if (role) {
          member.roles.add(role).catch(() => {});
        }
      }
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let sticky = await StickyDB.findOne({
      guildId: member.guild.id,
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (!sticky) {
      const newSettingss = new StickyDB({
        guildId: member.guild.id,
      });
      await newSettingss.save().catch(() => {});
      sticky = await StickyDB.findOne({ guildId: member.guild.id });
    }

    if (sticky) {
      let stickyRoleID = sticky.stickyroleID;
      let stickyRole = member.guild.roles.cache.get(stickyRoleID);
      if (sticky.stickyroleToggle == "true") {
        if (stickyRole) {
          if (
            !member.roles.cache.find(
              (r) => r.name.toLowerCase() === stickyRole.name
            )
          ) {
            if (sticky.stickyroleUser.includes(member.id)) {
              await member.roles.add(stickyRole).catch(() => {});
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