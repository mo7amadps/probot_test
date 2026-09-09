module.exports = class Event {
  constructor(client, name, options = {}) {
    this.name = name;
    (this.partials = [
      "MESSAGE",
      "CHANNEL",
      "REACTION",
      "GUILD_MEMBER",
      "USER",
      "GUILD_MESSAGE_REACTIONS",
    ]),
      (this.client = client);
    this.type = options.once ? "once" : "on";
    this.emitter =
      (typeof options.emitter === "string"
        ? this.client[options.emitter]
        : options.emitter) || this.client;
  }
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين
  // eslint-disable-next-line no-unused-vars
  async run(message, args) {
    throw new Error(`The run method has not been implemented in ${this.name}`);
  }

  reload() {
    return this.store.load(this.file.path);
  }
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين