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
} = require("./screensInfo");

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const screenOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Grozny Mall, ул. Х.Исаева",
          callback_data: "1",
        },
      ],
      [
        {
          text: "Grozny Mall, пр-т. В.В.Путина",
          callback_data: "2",
        },
      ],
      [
        {
          text: "Grozny Mall, пр-т. А.А. Кадырова",
          callback_data: "3",
        },
      ],
      [
        {
          text: "Спираль, пл. Минутка",
          callback_data: "4",
        },
      ],
      [
        {
          text: "Грозный Сити, пр-т. А.А. Кадырова",
          callback_data: "5",
        },
      ],
      [
        {
          text: "Туннель, пр-т. А.А. Кадырова",
          callback_data: "6",
        },
      ],
      [
        {
          text: "Алтайский круг",
          callback_data: "8",
        },
      ],
      [
        {
          text: "Столица",
          callback_data: "9",
        },
      ],
      [
        {
          text: "Старопромысловское шоссе",
          callback_data: "10",
        },
      ],
      [
        {
          text: "пр-т. М. Эсамбаева",
          callback_data: "11",
        },
      ],
      [
        {
          text: "пр-т. В.В. Путина, ЦУМ",
          callback_data: "12",
        },
      ],
      [
        {
          text: "Высотный комплекс 'Грозный Сити'",
          callback_data: "13",
        },
      ],
      [
        {
          text: "ул. Назарбаева, ТЦ 'Гранд Деловой'",
          callback_data: "14",
        },
      ],
      [
        {
          text: "пр-т. К-Х. Кишиева",
          callback_data: "15",
        },
      ],
      [
        {
          text: "Садовое кольцо, 'Башня'",
          callback_data: "16",
        },
      ],
      [
        {
          text: "Садовое кольцо, 'Кольцо вокруг Башни'",
          callback_data: "17",
        },
      ],
      [
        {
          text: "г. Аргун",
          callback_data: "18",
        },
      ],
    ],
  }),
};

const callOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Связаться с менеджером",
          callback_data: "1",
        },
      ],
    ],
  }),
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
        `Рекламное агенство "Альфа реклама" успешно предоставляет услуги в сфере рекламы с 2006 года. Наши услуги включают: 
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
    const managerId = "5159544996";

    if (data == 1) {
      await bot.sendPhoto(chatId, isaevaMall.image);
      bot.sendMessage(chatId, isaevaMall.text);
    }
    if (data == 2) {
      await bot.sendPhoto(chatId, kadyrovaMall.image);
      bot.sendMessage(chatId, putinaMall.text);
    }
    if (data == 3) {
      await bot.sendPhoto(chatId, putinaMall.image);
      bot.sendMessage(chatId, kadyrovaMall.text);
    }
    if (data == 4) {
      await bot.sendPhoto(chatId, spiral.image);
      bot.sendMessage(chatId, spiral.text, callOptions).then(() => {
        bot.sendMessage(
          managerId,
          `Пользователь ${chatId} хочет связаться с вами`
        );
      });
    }
    if (data == 5) {
      await bot.sendPhoto(chatId, kadyrovaGroznyCity.image);
      bot.sendMessage(chatId, kadyrovaGroznyCity.text);
    }
    if (data == 6) {
      await bot.sendPhoto(chatId, kadyrovaTunnelA.image);
      bot.sendMessage(chatId, kadyrovaTunnelA.text);
    }
    if (data == 8) {
      await bot.sendPhoto(chatId, altayskiyKrug.image);
      bot.sendMessage(chatId, altayskiyKrug.text);
    }
    if (data == 9) {
      bot.sendMessage(chatId, nazarbaevaStolitca.text);
    }
    if (data == 10) {
      bot.sendMessage(chatId, staropromParadise.text);
    }
    if (data == 11) {
      await bot.sendPhoto(chatId, esambaevaPilon.image);
      bot.sendMessage(chatId, esambaevaPilon.text);
    }
    if (data == 12) {
      //   await bot.sendPhoto(chatId, esambaevaPilon.image);
      bot.sendMessage(chatId, putinaTsum.text);
    }
    if (data == 13) {
      await bot.sendPhoto(chatId, groznyCity.image);
      bot.sendMessage(chatId, groznyCity.text);
    }
    if (data == 14) {
      //await bot.sendPhoto(chatId, nazarbaevaDelovoy.image);
      bot.sendMessage(chatId, nazarbaevaDelovoy.text);
    }
    if (data == 15) {
      //await bot.sendPhoto(chatId, nazarbaevaDelovoy.image);
      bot.sendMessage(chatId, kishieva.text);
    }
    if (data == 16) {
      await bot.sendPhoto(chatId, tower.image);
      bot.sendMessage(chatId, tower.text);
    }
    if (data == 17) {
      await bot.sendPhoto(chatId, towerRing.image);
      bot.sendMessage(chatId, towerRing.text);
    }
    if (data == 18) {
      //await bot.sendPhoto(chatId, towerRing.image);
      bot.sendMessage(chatId, argun.text);
    }
  });
};

start();
