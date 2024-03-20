require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const {
  isaevaMall,
  spiral,
  kadyrovaGroznyCity,
  kadyrovaTunnelA,
  kadyrovaMall,
  putinaMall,
  altayskiyKrug,
  nazarbaevaStolitca,
  staropromParadise,
  esambaevaPilon,
  putinaTsum,
  groznyCity,
  nazarbaevaDelovoy,
  kishieva,
  tower,
  towerRing,
  argun,
  chernorech,
  berkatPilon,
  lorsanovaCRD,
} = require("./screensInfo");
const { screenOptions } = require("./options");

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const sendScreenInfo = async (chatId, screen) => {
  if (screen.image) {
    await bot.sendPhoto(chatId, screen.image);
  }
  bot.sendMessage(chatId, screen.text, {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [
          {
            text: "Оставить заявку",
            callback_data: `contact_manager_${screen.name}`,
          },
        ],
        [
          {
            text: "Вернуться к списку экранов",
            callback_data: 0,
          },
        ],
      ],
    }),
  });
};

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Старт" },
    { command: "/info", description: "О нас" },
    { command: "/screens", description: "Экраны" },
    { command: "/promotions", description: "Акции" },
    { command: "/contacts", description: "Контакты" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      await bot.sendPhoto(chatId, "https://ibb.co/t3qQJyH");
      return bot.sendMessage(
        chatId,
        `Этот бот предоставляет справочную информацию об услугах агентства по размещению рекламы на экранах в г. Грозном и г. Аргуне. \n\nДоступные команды:\n/info - общая информация об агентстве\n/screens - подробности о наших экранах\n/promotions - акции\n/contacts - способы связаться с нами`
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        `Рекламное агентство "Альфа реклама" успешно предоставляет услуги в сфере рекламы с 2006 года. Наши услуги включают: 
        - печать баннеров и самоклеек на широкоформатном принтере; 
        - размещение рекламы на сити-форматах; 
        - размещение рекламы на билбордах; 
        - размещение рекламы на зданиях; 
        - размещение рекламы на экранах;
        - изготовление и продажа государственной и муниципальной символики (флаги, гербы и т.д.);
        - продажа и сдача в аренду виндеров (лёгкие и мобильные флагштоки);
        - изготовление портретов
        - изготовление табличек (адресные, надмогильные)
        - изготовление информационных стендов различных форм и размеров`
      );
    }
    if (text === "/screens") {
      return bot.sendMessage(
        chatId,
        "Выберите экран для получения информации",
        screenOptions
      );
    }
    if (text === "/promotions") {
      return bot.sendMessage(
        chatId,
        "✨Специальные предложения на экраны!\n\n❗При аренде всех экранов в комплексе -15% скидка от общей суммы!🌟\n\n❗При аренде 4-х экранов на проспекте М. Эсамбаева -1000 рублей от общей цены в месяц!💥"
      );
    }
    if (text === "/contacts") {
      return bot.sendMessage(
        chatId,
        "📔 Наши контакты: \n\n📱 По вопросам размещения рекламы: 8(928)640-84-84 или 8(928)745-84-84; \n📱 По вопросам изготовления или заказов нашей продукции: 8(965)955-16-16. \n📟 Также по данным номерам можно связаться через Telegram или Whatsapp.\n\n🌐 Сайт: https://alfara.ru \n\n📩 Email: gup-rra@mail.ru; \n\n🧭 Адрес: г. Грозный, ул. Трошева, 35 \n\n🕙 Режим работы: Пн-Сб 10:00-18:00"
      );
    }

    return bot.sendMessage(chatId, "Данная команда не поддерживается");
  });

  bot.on("callback_query", async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    const managerId = "5570889262";
    const username = msg.message.chat.username;

    if (data == 1) {
      sendScreenInfo(chatId, spiral);
    }
    if (data == 2) {
      sendScreenInfo(chatId, kadyrovaMall);
    }
    if (data == 3) {
      sendScreenInfo(chatId, kadyrovaTunnelA);
    }
    if (data == 4) {
      sendScreenInfo(chatId, kadyrovaGroznyCity);
    }
    if (data == 5) {
      sendScreenInfo(chatId, putinaMall);
    }
    if (data == 6) {
      sendScreenInfo(chatId, putinaTsum);
    }
    if (data == 7) {
      sendScreenInfo(chatId, isaevaMall);
    }
    if (data == 8) {
      sendScreenInfo(chatId, esambaevaPilon);
    }
    if (data == 9) {
      sendScreenInfo(chatId, altayskiyKrug);
    }
    if (data == 10) {
      sendScreenInfo(chatId, nazarbaevaStolitca);
    }
    if (data == 11) {
      sendScreenInfo(chatId, nazarbaevaDelovoy);
    }
    if (data == 12) {
      sendScreenInfo(chatId, staropromParadise);
    }
    if (data == 13) {
      console.log(data);
      sendScreenInfo(chatId, groznyCity);
    }
    if (data == 15) {
      sendScreenInfo(chatId, kishieva);
    }
    if (data == 16) {
      sendScreenInfo(chatId, tower);
    }
    if (data == 17) {
      sendScreenInfo(chatId, towerRing);
    }
    if (data == 18) {
      sendScreenInfo(chatId, chernorech);
    }
    if (data == 19) {
      sendScreenInfo(chatId, argun);
    }
    if (data == 20) {
      sendScreenInfo(chatId, berkatPilon);
    }
    if (data == 21) {
      sendScreenInfo(chatId, lorsanovaCRD);
    }
    if (data == 0) {
      bot.sendMessage(chatId, "Список экранов", screenOptions);
    }
    if (data.startsWith("contact_manager")) {
      const page = data.split("_")[2];

      bot.sendMessage(
        managerId,
        `Пользователь @${username} (id:${chatId}) хочет связаться с вами по поводу экрана: ${page}`
      );
    }
  });
};

start();
