import TelegramBot from "node-telegram-bot-api";

const token = process.env.TOKEN;

if (!token) {
  console.error("❌ TOKEN не найден");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("✅ Telegram-бот запущен");

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Привет! Я бот, работающий на Render 🚀");
});
