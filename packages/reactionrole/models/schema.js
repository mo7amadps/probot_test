const mongoose = require("mongoose");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
const reactionSchema = new mongoose.Schema({
  guildid: { type: String },
  msgid: { type: String },
  roleid: { type: String },
  reaction: { type: String },
  dm: { type: Boolean },
  option: { type: Number },
});
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = mongoose.model("reaction", reactionSchema);
