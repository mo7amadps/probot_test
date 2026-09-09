const Event = require("../structures/Event");
module.exports = class extends Event {
  async run(thread) {
    try {
      await thread.join();
    } catch (err) {
      //nothing
    }
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين