const Event = require("../../structures/Event");
const Username = require("../../database/schemas/usernames");
const Maintenance = require("../../database/schemas/maintenance");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class extends Event {
  async run(oldUser, newUser) {
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
    if (
      oldUser.username != newUser.username ||
      oldUser.discriminator != newUser.discriminator
    ) {
      let user = await Username.findOne({
        discordId: newUser.id,
      });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      if (!user) {
        const newUser1 = new Username({
          discordId: newUser.id,
        });
        newUser1.usernames.push(newUser.tag);
        newUser1.save();

        user = await Username.findOne({
          discordId: newUser.id,
        });
      } else {
        if (user.usernames.length > 4) {
          user.usernames.splice(-5, 1);
          user.usernames.push(newUser.tag);
        } else {
          user.usernames.push(newUser.tag);
        }

        user.save().catch(() => {});
      }
    }
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين