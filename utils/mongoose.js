require('dotenv').config()
const mongoose = require("mongoose");
const logger = require("./logger");
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
module.exports = {
  init: async () => {
    mongoose.Promise = global.Promise;

    mongoose.connection.on("err", (err) => {
      logger.error(`Mongoose connection error: ${err.stack}`, {
        label: "Database",
      });
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    mongoose.connection.on("disconnected", () => {
      logger.error(`Mongoose connection lost`, { label: "Database" });
    });

    mongoose.connection.on("connected", () => {
      logger.info(`Mongoose connection connected`, { label: "Database" });
    });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    mongoose.set("useNewUrlParser", true);
    mongoose.set("useFindAndModify", false);
    mongoose.set("useCreateIndex", true);

    await mongoose
      .connect(process.env.MONGO)
      .catch((e) => {
        logger.error(e.message, { label: "Database" });
        process.exit(1);
      });
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
    return true;
  },
};
