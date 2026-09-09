module.exports = class randoStrings {
  password(option) {
    if (!option) {
      var length = 12,
        charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&*()'%-+=/",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (option) {
      if (!option.string)
        option.string =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&*()'%-+=/";
      if (!option.length) option.length = 12;

      (length = option.length), (charset = option.string), (retVal = "");
      for (i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
  captcha(option) {
    if (!option) {
      var length = 5,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        retVal = "";
      for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    if (option) {
      if (!option.string)
        option.string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (!option.length) option.length = 5;

      (length = option.length), (charset = option.string), (retVal = "");
      for (i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      return retVal;
    }
  }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
  numberGenerator(option) {
    if (!option.min)
      throw new Error(
        "NUMBERGENERATOR - You did not specify the minimum value. Confused? Join our discord: https://discord.gg/DEA64fV6QU");
    if (!option.max)
      throw new Error(
        "NUMBERGENERATOR - You did not specify the maximum value. Confused? Join our discord: https://discord.gg/DEA64fV6QU"
      );
    if (isNaN(option.min))
      throw new Error(
        "NUMBERGENERATOR - Your minimum value is not a number. Confused? Join our discord: https://discord.gg/DEA64fV6QU"
      );
    if (isNaN(option.max))
      throw new Error(
        "NUMBERGENERATOR - Your minimum value is not a number. Confused? Join our discord: https://discord.gg/DEA64fV6QU"
      );
    if (option.min > option.max)
      throw new Error(
        "NUMBERGENERATOR - Your minimum value is higher than the maximum value. Confused? Join our discord: https://discord.gg/vaZACzAm5u"
      );

    let min = (option.min = Math.ceil(option.min));
    let max = (option.max = Math.floor(option.max));
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين