const { MessageEmbed } = require("discord.js");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
const ZWS = " \u200B";
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = class PogyEmbed extends MessageEmbed {
  splitFields(contentOrTitle, rawContent) {
    if (typeof contentOrTitle === "undefined") return this;

    let title;
    let content;
    if (typeof rawContent === "undefined") {
      title = ZWS;
      content = contentOrTitle;
    } else {
      title = contentOrTitle;
      content = rawContent;
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (Array.isArray(content)) content = content.join("\n");
    if (title === ZWS && !this.description && content.length < 2048) {
      this.description === content;
      return this;
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    let x;
    let slice;
    while (content.length) {
      if (content.length < 1024) {
        this.fields.push({ name: title, value: content, inline: false });
        return this;
      }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
      slice = content.slice(0, 1024);
      x = slice.lastIndexOf("\n");
      if (x === -1) x = slice.lastIndexOf("");
      if (x === -1) x = 1024;

      this.fields.push({
        name: title,
        value: content.trim().slice(0, x),
        inline: false,
      });
      content = content.slice(x + 1);
      title = ZWS;
    }
    return this;
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين