const { MessageEmbed, TextChannel, WebhookClient } = require("discord.js");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
TextChannel.prototype.sendCustom = function (content) {
  try {
    if (typeof content === "object" && content instanceof MessageEmbed) {
      if (content.embed) {
        return this.send({ embeds: [content.embed] });
      } else {
        return this.send({ embeds: [content] });
      }
    } else {
      if (!(content instanceof MessageEmbed) && content.embed) {
        return this.send({ embeds: [content.embed] });
      }
    }
    if (typeof content === "string") {
      return this.send({ content });
    }
    return this.send(content);
  } catch (error) {
    console.log(error);
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
WebhookClient.prototype.sendCustom = function (content) {
  try {
    if (typeof content === "object" && content instanceof MessageEmbed) {
      if (content.embed) {
        return this.send({ embeds: [content.embed] });
      } else {
        return this.send({ embeds: [content] });
      }
    } else {
      if (!(content instanceof MessageEmbed) && content.embed) {
        return this.send({ embeds: [content.embed] });
      }
    }
    if (typeof content === "string") {
      return this.send({ content });
    }
    return this.send(content);
  } catch (error) {
    console.log(error);
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين