const mineflayer = require('mineflayer')

const botConfig = {
  host: 'sunucu-ipniz.falixsrv.me',     // ← FalixNodes sunucu adresin (ör: abc123.falixsrv.me)
  port: 25565,                           // genelde 25565
  username: 'AFKBotcu',                  // cracked ise istediğin nick
  version: false                         // otomatik versiyon algılasın
}

const bot = mineflayer.createBot(botConfig)

bot.on('login', () => {
  console.log('Bot giriş yaptı! 7/24 açık tutuyorum...')
  setInterval(() => {
    bot.setControlState('forward', true)
    setTimeout(() => bot.setControlState('forward', false), 200)
    bot.setControlState('back', true)
    setTimeout(() => bot.setControlState('back', false), 200)
    // veya bot.chat('Ben burdayım 7/24 :)') gibi şeyler ekleyebilirsin
  }, 60000) // her 60 saniyede küçük hareket
})

bot.on('error', err => console.log('Hata:', err))
bot.on('end', () => {
  console.log('Bağlantı koptu, 10 sn sonra tekrar deniyorum...')
  setTimeout(() => {
    const newBot = mineflayer.createBot(botConfig)
  }, 10000)
})
