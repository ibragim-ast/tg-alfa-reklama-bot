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
  ggntu,
} = require("./screensInfo");
const { screenOptions } = require("./options");

const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramApi(token, { polling: true });

const sendScreenInfo = async (chatId, screen) => {
  if (screen.image) {
    await bot.sendPhoto(chatId, screen.image);
  }
  if (screen.latitude && screen.longitude) {
    bot.sendLocation(chatId, screen.latitude, screen.longitude);
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
    { command: "/manual", description: "Памятка" },
    { command: "/info", description: "О нас" },
    { command: "/screens", description: "Экраны" },
    { command: "/promotions", description: "Акции" },
    { command: "/contacts", description: "Контакты" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === "/start") {
      const adminId = "28506635";
      await bot.sendPhoto(chatId, "https://ibb.co/t3qQJyH");
      await bot.sendMessage(adminId, "кто-то этим пользуется");
      return bot.sendMessage(
        chatId,
        `Этот бот предоставляет справочную информацию об услугах агентства по размещению рекламы на экранах в г. Грозном и г. Аргуне. \n\nДоступные команды:\n/info - общая информация об агентстве\n/screens - подробности о наших экранах\n/promotions - акции\n/contacts - способы связаться с нами`
      );
    }
    if (text === "/manual") {
      return bot.sendMessage(
        chatId,
        `Уважаемый клиент! 

        Просим Вас ознакомиться с нижеследующей информацией:
        1️⃣Макет, предоставляемый Вами, не должен быть выполнен на белом фоне. Просим учесть, что подобный дизайн не поддерживается и не будет принят к работе.
        2️⃣Поддерживаемые форматы: mp4, mov, jpg.
        3️⃣Максимальная продолжительность рекламы - 15 сек..
        4️⃣Повторные трансляции, оговоренные в Прайсе, осуществляются исключительно без учета трансляций социальных реклам и рекламы Агентства.
        5️⃣В случае возникновения непреодолимых обстоятельств, независящих от ООО «Альфа-Реклама», такими как сбои в подаче электроэнергии и т.д., периоды трансляций видеороликов не подлежат возмещению.
        6️⃣При отказе клиента от услуг, которые уже были оплачены, денежные средства не возвращаются, так как отчет по поступлениям предоставляется учредителю еженедельно.
        7️⃣Размещение видеороликов на LED-экранах "Грозный-Молл" (три стороны) и «Спираль» на Минутке осуществляется в порядке очереди, с установленным временем ожидания от 1,5 до 2 месяцев. Клиент включается в очередь после предоставления готового макета в необходимом формате через Telegram.
        8️⃣При оплате по безналичному расчету +10% к общей сумме.
        9️⃣Все предоставляемые услуги оказываются только после ознакомления с данной информацией и их оплаты.
        
        
        С уважением, Альфа Реклама`
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
    if (data == 22) {
      sendScreenInfo(chatId, ggntu);
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
