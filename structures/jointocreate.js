const Vc = require("../database/schemas/tempvc");
const jointocreatemap = new Map();
module.exports = function (client) {
  client.on("voiceStateUpdate", async (oldState, newState) => {
    if (!oldState || !newState) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    const vcDB = await Vc.findOne({
      guildId: oldState.guild.id || newState.guild.id,
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (!vcDB) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let voice = vcDB.channelId;

  // صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      let category = vcDB.categoryID;

    if (!voice || !category) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (!oldState.channelId && newState.channelId) {
      if (newState.channelId !== voice) return;
      jointocreatechannel(newState);
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (oldState.channelId && !newState.channelId) {
      if (
        jointocreatemap.get(
          `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
        )
      ) {
        var vc = oldState.guild.channels.cache.get(
          jointocreatemap.get(
            `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
          )
        );

        if (vc.members.size < 1) {
          jointocreatemap.delete(
            `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
          );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          return vc.delete().catch(() => {});
        }
      }
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (oldState.channelId && newState.channelId) {
      if (oldState.channelId !== newState.channelId) {
        if (newState.channelId === voice) jointocreatechannel(oldState);

        if (
          jointocreatemap.get(
            `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
          )
        ) {
          var vc2 = oldState.guild.channels.cache.get(
            jointocreatemap.get(
              `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
            )
          );

          if (vc2.members.size < 1) {
            jointocreatemap.delete(
              `tempvoicechannel_${oldState.guild.id}_${oldState.channelId}`
            );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
            return vc2.delete().catch(() => {});
          }
        }
      }
    }
  });
  async function jointocreatechannel(user) {
    try {
      const vcDB = await Vc.findOne({
        guildId: user.guild.id,
      });
      if (!vcDB) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      let category = vcDB.categoryID;
      if (!category) return;
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      await user.guild.channels
        .create(`${user.member.user.username}'s Room`, {
          type: "GUILD_VOICE",
          parent: category,
        })
        .then(async (vc) => {
          user.setChannel(vc).catch(() => {});
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          jointocreatemap.set(
            `tempvoicechannel_${vc.guild.id}_${vc.id}`,
            vc.id
          );
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
          await vc.permissionOverwrites.set([
            {
              id: user.id,
              allow: ["MANAGE_CHANNELS"],
            },
            {
              id: user.guild.id,
              allow: ["VIEW_CHANNEL"],
            },
          ]);
        });
    } catch (err) {
      let vcDB = await Vc.findOne({
        guildId: user.guild.id,
      });

      vcDB
        .updateOne({
          channelId: null,
          categoryID: null,
        })
        .catch((err) => console.error(err));
    }
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين