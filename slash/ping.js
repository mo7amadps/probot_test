module.exports = {
  name: "ping",
  description: "Get the bot's api ping!",
  category: "general",
  slash: "true",
  global: true,
  error: async () => {},
  run: async (data) => {
    data.interaction.editReply({
      content: `Api Ping: \`${Math.floor(
        data.interaction.client.ws.ping
      )} ms\``,
    });
  },
};
// صاحب بروجكت صلاح
// رابط قناته https://youtube.com/@nova-maker?si=_p7faJwEc0NGuoo2
// والله لو تحذفه لابندك ومارح اسامحك ليوم دين