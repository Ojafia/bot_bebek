// S C R I P T  O R I  B Y  Bochilgaming And KANNACHAN 🔭

// Ditulis Ulang Oleh WH MODS DEV

// Credits, jangan dihapus atau diubah!

//[!] Jangan Lupa Ganti Ownernya

import { watchFile, unwatchFile } from 'fs'

import chalk from 'chalk'

import { fileURLToPath } from 'url'

import moment from 'moment-timezone'

/*============= WAKTU =============*/

let wibh = moment.tz('Asia/Jakarta').format('HH')

    let wibm = moment.tz('Asia/Jakarta').format('mm')

    let wibs = moment.tz('Asia/Jakarta').format('ss')

    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`

    

    let d = new Date(new Date + 3600000)

    let locale = 'id'

    // d.getTimeZoneOffset()

    // Offset -420 is 18.00

    // Offset    0 is  0.00

    // Offset  420 is  7.00

    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

    let week = d.toLocaleDateString(locale, { weekday: 'long' })

    let date = d.toLocaleDateString(locale, {

      day: 'numeric',

      month: 'long',

      year: 'numeric'

    })

      

    

/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v

global.sig ='https://instagram.com/mhrj34' // ig

global.sgh ="-" 'https://github.com/WH-MODS-BOT/' // github

global.sgc = 'https://chat.whatsapp.com/I3MsNCSMNKfFA945aDxwx0' // group whatsapp

global.sdc = 'https://www.discord.com'//discord

global.snh = "-"

global.sfb = 'https://www.facebook.com/' // facebook

global.syt = 'https://www.youtube.com/' // my youtube channel "kalau ada yt ke 2 tarok link nya disini"

/*============== PAYMENT ==============*/

global.pdana = '087878823108' //dana

global.povo = '087878823108' //ovo

global.pgopay = '087878823108' //gopay

global.plinkaja = '087878823108' //link aja

global.ppulsa = '087878823108' //telkomsel

global.ppulsa2 = '087878823108' // kalau ada kartu lain isi aja

global.psaweria = 'https://saweria.com/mrw4h1d'

/*============== NOMOR ==============*/

global.nomorbot = '6282112051088'

global.nomorown = '6287878823108'

global.namebot = 'IZHAAR_STORE BOT'

global.nameown = 'OJA STORE'

/*============== Github Thanks To ==============*/

global.namagithub = 'Nama Github Belum Diisi' // nama github lu

global.linkgithub = 'Link Githu Belum Diisi' // tarok link github lu

// klau kgk ada github kasih tanda '-' aja biar kgk error

/*============== APIKEY SIMPEL ==============*/

global.zenzkey = '-'

global.lolkey = '-' // PUNYA WAHID  8e66d0934cf741bfd2182c16

/*============== STAFF ==============*/

global.owner = [

  ['6282124046059', 'KABUL STORE || READY', true],

  ['-', 'ISI KALAU ADA', true],

  ['-', 'ISI KALAU ADA', true],

  ['-', 'ISI KALAU ADA', true],

  ['-', 'ISI KALAU ADA', true]

    //Ganti jd nomormu sama Namamu

  // [number, dia creator/owner?, dia developer?]

] // Put your number here

global.mods = [] // Want some help?

global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10

/*============== API ==============*/

global.APIs = { // API Prefix

  // name: 'https://website'

  nrtm: 'https://nurutomo.herokuapp.com',

  rey: 'https://server-api-rey.herokuapp.com',

  xteam: 'https://api.xteam.xyz',

  zahir: 'https://zahirr-web.herokuapp.com',

  lol: 'https://api.lolhuman.xyz',

  dhnjing: 'https://dhnjing.xyz',

  neoxr: 'https://neoxr-api.herokuapp.com',

  zeks: 'https://api.zeks.me',

  pencarikode: 'https://pencarikode.xyz',

  ana: 'https://anabotofc.herokuapp.com/',

  amel: 'https://melcanz.com',

  hardianto: 'https://hardianto.xyz',

  botstyle: 'https://botstyle-api.herokuapp.com',

  adiisus: 'https://adiixyzapi.herokuapp.com',

  kanx: 'https://kannxapi.herokuapp.com/', 

  violetics : 'https://violetics.pw',

  ziy : 'https://ziy.herokuapp.com',

  males : 'https://malesin.xyz'

}

global.APIKeys = { // APIKey Here

  // 'https://website': 'apikey'

  'https://api.xteam.xyz': 'ebb6251cc00f9c63',

  'https://anabotofc.herokuapp.com/': 'AnaBot',

  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16

  'https://zahirr-web.herokuapp.com': 'zahirgans',

  'https://api.zeks.me': 'apivinz',

  'https://pencarikode.xyz': 'pais',

  'https://melcanz.com': 'melcantik',

  'https://neoxr-api.herokuapp.com': 'yntkts',

  'https://server-api-rey.herokuapp.com': 'apirey',

  'https://botstyle-api.herokuapp.com': 'Apikeymu',

  'https://hardianto.xyz': 'hardianto',

  'https://violetics.pw': 'beta',

  'https://ziy.herokuapp.com' : 'xZiyy'

}

// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/

global.wm = '                「 KABUL STORE || READY 」' //Main Watermark

global.wm2 = '꒷︶꒷꒥꒷ ‧₊˚ ꒰ฅ˘KABUL STORE || READY ˘ฅ ꒱ ‧₊˚꒷︶꒷꒥꒷'

global.wm3 = '⫹⫺ KABUL STORE || READY '

global.botdate = `⌚: ${wktuwib}\n📆: ${week} ${date}`

global.bottime = `T I M E : ${wktuwib}`

global.titlebot = `⫹⫺ WhatsApp Bot | By KABUL STORE || READY`

global.packname = '☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ'

global.author = '                「 KABUL STORE || READY  あ」'

/*Fake*/

global.fsizedoc = '1'.repeat(10)

global.fpagedoc = '1'.repeat(10)

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*============== LOGO ==============*/

global.thumb = 'https://i.ibb.co/n8YcnVX/IMG-20221004-WA0012.jpg' //Main Thumbnail

global.imagebot = 'https://i.ibb.co/n8YcnVX/IMG-20221004-WA0012.jpg'

global.giflogo = 'https://i.ibb.co/n8YcnVX/IMG-20221004-WA0012.jpg'

global.thumbs = ['https://i.ibb.co/n8YcnVX/IMG-20221004-WA0012.jpg']

global.fla = 'https://i.ibb.co/n8YcnVX/IMG-20221004-WA0012.jpg'

global.thumbnailUrl = [

'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg','https://telegra.ph/file/ac4928f0824a2a0492737.jpg',

'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg','https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',

'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg','https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',

'https://telegra.ph/file/55e5af5f33fbd57104187.jpg','https://telegra.ph/file/af236598456b95884bd15.jpg',

'https://telegra.ph/file/de92ed4a729887ffc974c.jpg','https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg']

global.flaaa2 = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.flaaa = [

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',

'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.hwaifu2 = ['https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',

'https://i.pinimg.com/originals/85/4d/bb/854dbbd30304cd69f305352f0183fad0.jpg',

'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',

'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',

'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',

'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',

'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',

'https://i.pinimg.com/originals/46/ad/05/46ad0505d33a2c2359f84ed9b867a58c.jpg',

'https://i.pinimg.com/originals/23/b7/fb/23b7fb922770e139a2a57b1a443a2180.jpg',

'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',

'https://i.pinimg.com/originals/a4/a1/74/a4a1740e565f4205eb3f700e1936e064.jpg',

'https://i.pinimg.com/originals/f9/8d/2c/f98d2c3f64e50ba6c8efd9fdc7cf0093.png',

'https://i.pinimg.com/originals/29/a4/b4/29a4b4573f993d7d6abb45843f529892.jpg',

'https://i.pinimg.com/originals/40/de/84/40de84ce2ee376d8fae8ff5863d6edb0.jpg',

'https://i.pinimg.com/originals/b6/f5/b7/b6f5b7d59fd4f332b3820db38612a5a0.jpg',

'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',

'https://i.pinimg.com/originals/b5/94/ef/b594ef0774d29f5a05cd182994aa354e.jpg',

'https://i.pinimg.com/originals/0f/ed/3f/0fed3f4c456158c506d88f5867ca93d2.jpg',

'https://i.pinimg.com/originals/1b/7a/a8/1b7aa80191b83b888e9ea6042f090763.jpg',

'https://i.pinimg.com/originals/72/7a/08/727a08cdf67b62c2ba49e7308c09a1cd.jpg',

'https://i.pinimg.com/originals/86/93/75/8693757390b9d5b83fb8e40ff9ea876f.jpg',

'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',

'https://i.pinimg.com/originals/b8/b3/f3/b8b3f397fead38a988174df75d481202.png',

'https://i.pinimg.com/originals/7a/e0/55/7ae055891f8200cd62ec76a40d47118d.jpg',

'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',

'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',

'https://i.pinimg.com/originals/41/10/c6/4110c64fc91a1c85de02166f67aff7ad.jpg',

'https://i.pinimg.com/originals/45/11/41/451141522a9086f56efc0da3fdac1957.jpg',

'https://i.pinimg.com/originals/c1/4e/c7/c14ec7dffbc682f78c52ad8a295b8831.jpg',

'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',

'https://i.pinimg.com/originals/1f/95/15/1f95156c3d8e2b339a22b3bad2f69a8a.png',

'https://i.pinimg.com/originals/bb/1a/12/bb1a1249dbc73736ab534fdd52bdc74c.jpg',

'https://i.pinimg.com/originals/d5/58/a7/d558a745f2452d851d480025ab341537.jpg',

'https://i.pinimg.com/originals/e7/00/0e/e7000e7e72c1b37ea7a4c780182d05d8.jpg',

'https://i.pinimg.com/originals/9e/53/a9/9e53a92ee711d979b9bdbb6212115fe0.jpg',

'https://i.pinimg.com/originals/c6/16/d9/c616d9a871ed3cd9fb6a46efb7f92d95.jpg',

'https://i.pinimg.com/originals/ac/f0/29/acf029047efffe57999fa876554cbf1d.jpg',

'https://i.pinimg.com/originals/ae/86/3b/ae863b64ca579f05008dbf027b04988f.jpg',

'https://i.pinimg.com/originals/d5/65/43/d56543a959da518e08012b4db93747bb.jpg',

'https://i.pinimg.com/originals/ed/3c/e2/ed3ce276ca71e5bfec1cf2fbfc5561e1.jpg',

'https://i.pinimg.com/originals/66/30/37/663037f00539f3bc1dbd3efeae0d700b.jpg',

'https://i.pinimg.com/originals/63/6b/7b/636b7bd0e1df03f0bf72c494cedd6f07.png',

'https://i.pinimg.com/originals/db/a4/13/dba413518c0a470a5e81cafa431281da.jpg',

'https://i.pinimg.com/originals/3b/d9/aa/3bd9aa880d23dc3262e119ca09345e99.jpg',

'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',

'https://i.pinimg.com/originals/fb/f7/a9/fbf7a92af75577e33a564ce490154c8f.jpg',

'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',

'https://i.pinimg.com/originals/fc/51/4e/fc514e2f4c23eb96721611b483edc28c.jpg',

'https://i.pinimg.com/originals/bb/a4/98/bba49848bc4369333f4128b62fc64258.jpg',

'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',

'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',

'https://i.pinimg.com/originals/83/e5/71/83e5710c42b9e8b9e1a4b6381c4535fe.jpg',

'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',

'https://i.pinimg.com/originals/32/2c/a4/322ca456fa2cdec4b717895a65adfa8d.jpg',

'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',

'https://i.pinimg.com/originals/16/14/9c/16149c94a7c0f753230b1edbd03ab3e6.jpg',

'https://i.pinimg.com/originals/7f/f5/46/7ff546b38e2969e578e697c44944b74f.jpg',

'https://i.pinimg.com/originals/6d/bc/61/6dbc616311268a25b0ee0e1bd4de13b6.jpg',

'https://i.pinimg.com/originals/60/34/18/603418ea5c35839914a1071e134add8b.jpg',

'https://i.pinimg.com/originals/5f/79/71/5f79713647b3e99a787ee7483715c1eb.jpg',

'https://i.pinimg.com/originals/ed/ea/37/edea37b6f876bfc8f59bbae4d43e26d7.jpg',

'https://i.pinimg.com/originals/94/38/6d/94386d3c23f509dbc30341fed0363a07.jpg',

'https://i.pinimg.com/originals/f6/20/b4/f620b4b1c2aaf096455952465db8a980.jpg',

'https://i.pinimg.com/originals/97/50/73/9750731b4b004da61d44fe01dbe93d85.jpg',

'https://i.pinimg.com/originals/a0/55/41/a055419e96bc61a5990c575af10ba99e.png',

'https://i.pinimg.com/originals/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg',

'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',

'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',

'https://i.pinimg.com/originals/c4/e4/1d/c4e41d096e7585a7e6245e852ece25c2.jpg',

'https://i.pinimg.com/originals/87/cf/bc/87cfbc189e773ed9294bccfd50a4fbc7.jpg',

'https://i.pinimg.com/originals/7a/3b/e6/7a3be6cf1595fe6764b5b18b46ca576d.jpg',

'https://i.pinimg.com/originals/c5/42/f8/c542f83b992e51c6d2519f07489b1dec.jpg',

'https://i.pinimg.com/originals/96/29/1e/96291e9abbf311b8fc6c8c3f9f8ae059.jpg',

'https://i.pinimg.com/originals/e5/1a/8d/e51a8d35d2b717fa757fa2abf053a2c7.jpg',

'https://i.pinimg.com/originals/47/18/af/4718afcd517c8e7e07cc9dba48b3b770.jpg',

'https://i.pinimg.com/originals/39/2c/cb/392ccb1793c5a23783869994b1ec24b7.jpg',

'https://i.pinimg.com/originals/0f/98/5f/0f985ffbfff2650d6e3ecf8ba0eb574e.jpg',

'https://i.pinimg.com/originals/ab/f9/50/abf950c9aa1c4710437d9acc83078f87.jpg',

'https://i.pinimg.com/originals/f2/dd/cc/f2ddccd5a1b89d2302cf75c6520c58dd.png',

'https://i.pinimg.com/originals/f1/f7/fc/f1f7fca39eba7d64e50749da5406247c.jpg',

'https://i.pinimg.com/originals/71/18/96/711896c067c28814ec9ec9c25d4a3ba9.jpg',

'https://i.pinimg.com/originals/67/a7/54/67a754077a1ffc75c25b3c7bb04d2258.png',

'https://i.pinimg.com/originals/8f/fe/d4/8ffed485ed8b6db07067e452f8399fff.jpg',

'https://i.pinimg.com/originals/db/b6/46/dbb6463c9134591aa79369f325877e03.jpg',

'https://i.pinimg.com/originals/9f/23/1a/9f231a6acc906f95ff3f917211b9abda.png',

'https://i.pinimg.com/originals/b9/a9/66/b9a9669f0fbbe75e780adad301601b43.jpg',

'https://i.pinimg.com/originals/86/ed/26/86ed265f2dbb22a48bbc612f59303508.png',

'https://i.pinimg.com/originals/da/ae/25/daae25409adec418a9b6f6c5dcdecd47.jpg',

'https://i.pinimg.com/originals/a4/6d/fa/a46dfad749d0577366e9ea2db6cc305e.jpg',

'https://i.pinimg.com/originals/09/5b/4d/095b4d0ce48f40eca7ad23e43e85ab9a.jpg',

'https://i.pinimg.com/originals/d9/e1/30/d9e1307a5fbbeb2a267562eab8abc063.jpg',

'https://i.pinimg.com/originals/db/cf/dc/dbcfdc263095906eabf7e06099ebaef0.png',

'https://i.pinimg.com/originals/89/14/0d/89140d3ef976904013f672fea0157b7e.png',

'https://i.pinimg.com/originals/cf/4f/cf/cf4fcf2036f0b5b974f146f2c0ba81db.jpg',

'https://i.pinimg.com/originals/93/62/9e/93629ee9ab27043076bce2b1f22f9193.jpg',

'https://i.pinimg.com/originals/99/6b/c4/996bc4049d632bdbf7d9bc24dc8081f0.png',

'https://i.pinimg.com/originals/f2/6d/35/f26d354b1421546ae993c83f5c7bcfb0.jpg',

'https://i.pinimg.com/originals/25/5d/d9/255dd9dde5f44673092a4f15e917759f.jpg',

'https://i.pinimg.com/originals/08/8f/1d/088f1dc58092b60652e05cc941ee0fbd.jpg',

'https://i.pinimg.com/originals/14/17/dd/1417dd63009eea0b63252076f3b405e6.jpg',

'https://i.pinimg.com/originals/35/04/d5/3504d53c5850b3bddaa6e0e0714ccacb.jpg',

'https://i.pinimg.com/originals/88/46/88/884688def830c43648f88154836a8b05.jpg',

'https://i.pinimg.com/originals/57/d9/20/57d920d58533915850b431bd0b8e1f1d.jpg',

'https://i.pinimg.com/originals/44/39/17/443917c07ffd65caa7d7cd4065fb8571.jpg',

'https://i.pinimg.com/originals/bc/9b/81/bc9b81c63b4844fd1a434d462bdfbd80.png',

'https://i.pinimg.com/originals/4a/e2/74/4ae274c828a2c719bcf9f644106d26cf.jpg',

'https://i.pinimg.com/originals/d0/cb/da/d0cbdaa334fa92f8b09d1c4d1ddc9cd2.jpg',

'https://i.pinimg.com/originals/71/16/31/711631ac52f7809f530e40f230b371a4.jpg',

'https://i.pinimg.com/originals/af/f1/1b/aff11bcfdf946a7bba1687c80515f902.jpg',

'https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg',

'https://i.pinimg.com/originals/ef/90/4e/ef904eda01a996e5a9d557a55db6da0f.png',

'https://i.pinimg.com/originals/a2/e7/73/a2e773fdb7ce0fc99eb123d8a81764ec.jpg',

'https://i.pinimg.com/originals/79/92/ed/7992ed0c9b272654938ea186cc2e3f4a.jpg',

'https://i.pinimg.com/originals/7a/08/c8/7a08c8c22066a142f22928662d9d70aa.jpg',

'https://i.pinimg.com/originals/20/b0/96/20b0962b8c62584fbcd6e7675b4782a4.jpg',

'https://i.pinimg.com/originals/51/0f/8c/510f8cb8f28b8666d560f89e2006d4b1.jpg',

'https://i.pinimg.com/originals/c2/4f/75/c24f7518e17faba4bf8908a39be604a6.jpg',

'https://i.pinimg.com/originals/4e/43/7b/4e437b1bbdee605d833155a97d35bef1.png',

'https://i.pinimg.com/originals/d5/a2/c9/d5a2c9cdfac835518e45b13cfc39819d.jpg',

'https://i.pinimg.com/originals/95/bb/2e/95bb2e7c8b71754003d063f39feb232a.jpg',

'https://i.pinimg.com/originals/16/92/89/1692897136ac3688ab9ccdbb0e54fb21.jpg',

'https://i.pinimg.com/originals/6f/9a/86/6f9a86eb31e7c5bc34cf0d1d130574e0.png',

'https://i.pinimg.com/originals/f0/67/f0/f067f00a885fab47d76d4e5423d54c35.jpg',

'https://i.pinimg.com/originals/4e/9a/7a/4e9a7a196cea58427163313b7db6363e.jpg',

'https://i.pinimg.com/originals/53/4c/6a/534c6a2e65fdb4c52824f94acc5e2195.jpg',

'https://i.pinimg.com/originals/8d/04/9a/8d049a1e6951491b24ea4c364f2459bc.jpg',

'https://i.pinimg.com/originals/22/dc/94/22dc941e60b0ace15d796a94f07d8ba7.jpg',

'https://i.pinimg.com/originals/80/bc/96/80bc968b4dcd939b60ffe2c8b0c54d75.png',

'https://i.pinimg.com/originals/ed/34/f8/ed34f88af161e6278993e1598c29a621.jpg',

'https://i.pinimg.com/originals/9b/36/24/9b36241f4a3b782c05eadb0805ef0dda.png',

'https://i.pinimg.com/originals/22/8b/ca/228bca60a07d72cac953a9c3be542bab.jpg',

'https://i.pinimg.com/originals/57/0e/9b/570e9b1288f1189a22b39c8e24ec957f.jpg',

'https://i.pinimg.com/originals/68/af/17/68af1781a9120a59629d0f774555185f.jpg',

'https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg',

'https://i.pinimg.com/originals/c8/0e/ee/c80eeea7a37d732d5a1b0e60464f9e18.jpg',

'https://i.pinimg.com/originals/1d/08/cb/1d08cbb9d42812984bed54e8291edaec.jpg',

'https://i.pinimg.com/originals/4e/37/02/4e37020a3e69f16cd04b246c2937b979.jpg',

'https://i.pinimg.com/originals/59/8e/bf/598ebf206f5ec366e2e32e8c6e8cffb4.jpg',

