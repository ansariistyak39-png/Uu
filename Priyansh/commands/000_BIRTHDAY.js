module.exports = {
  config: {
    name: "bd",
    version: "1.0",
    author: "julmi",
    role: 0,
    category: "𝗪𝗜𝗦𝗛𝗘𝗦𝗛",
    guide: {
      vi: "Not Available",
      en: "cpx @(mention)"
    } 
  },

  onStart: async function ({ api, event, userData, args }) {
      var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Need to tag 1 friend whome you want to birthday wish.", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = []; 
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
setTimeout(() => {a({body: "🥳🎉🎂 HAPPY BIRTHDAY TO YOU 🍰🎁🎈🧁🕯️" + " " + name, mentions: arraytag})}, 2000);
setTimeout(() => {a({body: "🎁जन्मदिन 🍰मुबारक हो !🥳" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "*birthgirl 🎁तुम🎈जियो🎂हजारों🥳साल🧁" + " " + name, mentions: arraytag})}, 10000);
setTimeout(() => {a({body: "🥳जन्मदिन🎁की🕯️शुभकामनाएं🎂" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "*birthvideo 🎂जन्मदिन🕯️की🧁ढेरों🎁बधाईयाँ💌" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "🎁मेरी🕯️तरफ🎂से🎈हजारों🥳मुस्कुराहटें💌आपके🥰इस🎁जन्मदिन🎂पर🧁" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "🥰जितने💌पुराने🥳होगे🎂उतने🎁ही🕯️मीठे🎈भी🥳होगे🧁जन्मदिन🎂मुबारक🎁हो💌" + " " + name, mentions: arraytag})}, 30000);
setTimeout(() => {a({body: "🧁यही दुआ करता हूँ खुद से,🎉 आपकी जिंदिगी में कोई गम न हो,🥳 जन्मदिन पर मिले हज़ारो खुशियां,🎁 चाहे उनमें शामिल हम न हो. 🍰HAPPY BIRTHDAY🎂" + " " + name, mentions: arraytag})}, 35000);
setTimeout(() => {a({body: "🥳हमारी तो दुआ है,🎁 कोई गिला नहीं🍰, वो गुलाब जो आज तक खिला नहीं,🎉 आज के दिन आपको वो सब कुछ मिले, 🧁जो आज तक किसी को कभी मिला नहीं.🎈" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "*cake 🎁आशाओं के दीप जले आशीर्वाद – उपहार मिले वर्षगाँठ हैं 🕯️आपकी शुभकामनाओ से प्यार मिले जन्मदिवस की हार्दिक शुभकामनाये. 🧁 HAPPY BIRTHDAY🍰" + " " + name, mentions: arraytag})}, 45000);
setTimeout(() => {a({body: "🧁आप के जनम दिवस पर आप आज, ख़ूब प्यार पायें🍰, आप के जनम दिवस पर आप आज,🎈 ख़ूब मस्ती करे,🥳 आप के जनम दिवस पर आप आज,🕯️ ख़ूब ख़ुश रहे, बस आप यूँही हँसते रहे. जनम दिवस की शुभ कामनाए🎂" + " " + name, mentions: arraytag})}, 50000);
setTimeout(() => {a({body: "🎈स्वर्गलोक से इंद्रदेव, वैकुण्ठ से विष्णुजी🥳, कैलाश से महादेव, ब्रह्मलोक से ब्रम्हाजी, 🕯️और पृथ्वीलोक से रोहन🎁, आपको जन्मदिन के लिए शुभकामना देते है…🎉" + " " + name, mentions: arraytag})}, 55000);
setTimeout(() => {a({body: "🕯️आसमान की बुलंदियों पर नाम हो आपका,🎉 चाँद की धरती पर मुकाम हो आपका, हम तो रहते है छोटी सी दुनिया में,🧁 पर खुदा करे सारा जहाँ हो आपका🎂" + " " + name, mentions: arraytag})}, 60000);
setTimeout(() => {a({body: "🕯️उगता हुआ सूरज दुआ दे आपको, खिलता हुआ फूल खुशबु दे आपको,🎂 हम तो कुछ देने के काबिल नहीं है, 🎁देने वाला हज़ार खुशिया दे आपक🍰" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "*birthvideo 🧁हस्ते रहे आप #करोड़ों के बीच,खिलते रहे आप #लाखों के बीच,🎁रोशन रहे आप हज़ारों के बीच,जैसे रहता है 🕯️सूरज आसमानों के बीच!!🎂Wishing u a very very Happiest B’day My 😘Jaan🎂" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "इस #Birthday पर बहुत सारे   ➟➟➟➟➟➟➟.🎁Gift पाओ, 🌹Love पाओ, 😊Smile पाओ,👬Friends पाओ, और साथ में अपनो का आशीर्वाद पाओ,🎂HAPPY #BIRTHDAY🎂" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "मेरे दोस्त भी हो 👉तुम,मेरा सहारा भी हो 👉 तुम,जीवन के इस सफर के हमसफर भी हो 👉तुम ।मेरे लिये हर पल रहते हो फिक्रमंद,🙂खुशनसीबी है मेरी कि,😇 तुम 🧑 मिले मुझे ।🙏🎂🍫🍬जन्मदिन की ढेर सारी शुभकामनाये…🎂🍫🍬" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "चाँद 🌙 से प्यारी चांदनी;चांदनी से भी प्यारी ✨ रात;रात से प्यारी 😇 जिंदगी;और जिंदगी से भी प्यारे आप🍬🎂Happy Birthday to You…🎂🍬" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a({body: "🎁ये शुभ दिन आये आपके जिवन में हज़ार बार,हम आपको जन्मदिन मुबारक कहते रहें हर बार…🙏🍫🍬Happiest Birthday to You" + " " + name, mentions: arraytag})}, 90000);
setTimeout(() => {a({body: "*cake2 हमारे लिए ख़ास है आज का दिन,जो नहीं #बिताना चाहते आपके बिन,वैसे तो हर #दुआ आपके लिए माँगते है,फिर भी कहते है खूब सारी #खुशियाँ मिले आपको इस जन्मदिन!🍫🍫🎂🎂" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "रिश्ता हम दोस्तो का,कभी मीठा, कभी खट्टा,कभी रूठना, कभी मनना,आज हैं जन्मदिन भाई तुम्हारा,🙂तो लाना बड़ा-सा केक,🎂साथ मनायेगे खुशियों का दिन ये प्यारा…☺️☺️🎂🍫🍬Happy Birthday to you🎂🍫🍬" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "यही दुआ करते है खुदा से आपकी ज़िन्दगी में कभी कोई ग़म ना हो जन्मदिन पर मिले हज़ारों दुआये चाहे उनमें शामिल हम ना हो Happy Bday🍫🍫🎂🎂" + " " + name, mentions: arraytag})}, 1050000);
setTimeout(() => {a({body: "*Birthday की बहार आयी हैं,आप के लियें ख़ुशियों कीBest Wishes लायी हैं,आप Smile करो हर दिन,इसलिये God से हमने आपकेलिए दुआ 🙏 माँगी हैं…Happy Birthday🎂🎀🎁" + " " + name, mentions: arraytag})}, 110000);
setTimeout(() => {a({body: "निकलता हुआ सूरज दुआ दे आपको,खिलता हुआ फूल खुशबु दे आपको,हम तो कुछ देने के काबिल नही,खुदा हज़ार खुशियाँ दे आपको।🌹Happy birthday to you🌹" + " " + name, mentions: arraytag})} , 115000);
setTimeout(() => {a({body: "*birthvideo 👌आपका जन्म दिन हैं “ख़ास” ❤️क्यूँकि आप होते हैं सबके दिल के “पास”… 👍और आज पूरी हो आपकी हर “आस”..🎁😀 🎂HAPPY BIRTHDAY🎂" + " " + name, mentions: arraytag})} , 120000);
setTimeout(() => {a({body: " हो पूरी दिल ❤ की ख्वाइशें आपकी मिले खुशियों का जहाँ सारा आप #दुआ में मांगो एक तारा और खुदा बरसा दे आसमां सारा…🎂🎂🍫🍫जन्मदिन मुबारक हो😘…🍫🍫🎂🎂" + " " + name, mentions: arraytag})} , 125000);
setTimeout(() => {a({body: "सजती रहे प्यार 💘 की महफ़िल;हर पल सुहानी रहे;आप जिंदगी में इतने #खुशनसीब रहें कि;हर ख़ुशी आपकी #दिवानी रहे। Happy Birthday🍫🍫🎂🎂" + " " + name, mentions: arraytag})} , 130000);
setTimeout(() => {a({body: " दूर है तो क्या हुआ आज का दिन तो हमे याद 😇 है,तुम ना सही पर तुम्हारा साया तो हमारे साथ है,🙂तुम्हे लगता है हम सब भूल जाते है पर देख लो तुम्हारा जन्मदिन तो हमे याद है..! 😊😊🎂🎂🍫🍫 हैप्पी वाला बर्थडे… pending😉" + " " + name, mentions: arraytag})} , 135000);
setTimeout(() => {a({body: "दोस्त तू है मेरा सबसे न्यारा,तुझे मुबारक हो तेरा जन्मदिन ओ यारा…किसी की कभी नजर ना लगे तुझे,कभी उदास ना हो ये चहेरा प्यारा 💞 प्यारा…जन्मदिन 🎂🎀🎁 की बहोत बहोत शुभकामनायें" + " " + name, mentions: arraytag})} , 140000);
setTimeout(() => {a({body: "*cake4 On these Beautiful Birthday,भगवान करे आप Enjoyment से भरपूर और Smile से अपना आज का दिन Celebrate करो, और बहुत सारी Surprises पाओ 🎂🎀🎁^HAPPY BIRTHDAY MY DEAR^🎂" + " " + name, mentions: arraytag})} , 145000);
setTimeout(() => {a({body: "Life का हर Goal रहे आपका Clear,तुम Success पाओ Without any Fear हर पल जियो Without any Tear,Enjoy your day my Dear,🎂HAPPY BIRTHDAY🎂🎀🎁" + " " + name, mentions: arraytag})} , 150000);
setTimeout(() => {a({body: " हर लम्हा आपके हाथों पे मुस्कान रहे,हर ग़म से आप अन्जान रहे,जिसके साथ मेहक उठे आपकी जिंदगी,हमेशा आपके पास वो इंसान रहे…🎂 Happy Birthday To You…🎂🎀🎁" + " " + name, mentions: arraytag})} , 155000);
setTimeout(() => {a({body: "*ये दुआ 🙏 है आपके जन्मदिन पे हमारी,ना तूटे कभी दोस्ती हमारी,सारी जिंदगी देंगे खुशियाँ आपको…और वो खुशियाँ होगी प्यारी प्यारी…😊🎂Happy Birthday to you my Best Friend…🎂🎀🎁" + " " + name, mentions: arraytag})} , 160000);
setTimeout(() => {a({body: " एक दुआ 🙏 माँगते है हम अपने भगवान से,चाहते है आपकी खुशी पूरे ईमान से,सब हसरतें पूरी हो आपकी और आप मुस्कुराएँ दिलो ❤ जान 💗 से🎂🎀🎁*Happy Birthday*🎂🎂" + " " + name, mentions: arraytag})} , 165000);
setTimeout(() => {a({body: "*birthvideo अगर इस जहां में #Best_Dost के लिए कोई #award होता तो हर दिन वह आपके 👉 नाम ही होता।मुझे यह #ख़ूबसूरत दुनिया दिखाने और जीवन के हर #मोड़ पर मेरा साथ निभाने के लिए शुक्रिया🙏🌷🎂🎂🍬आपको जन्मदिन की हार्दिक शुभकामनाएं।🌷🎂🎂🍬" + " " + name, mentions: arraytag})} , 170000);
setTimeout(() => {a({body: "जो भूले न भुला सके ❤️ प्यार,वो है मेरे प्यारे दोस्त का प्यार,😘दिल 🧡 में जिसके मैं हूँ, वो है मेरा सारा संसार🌏🌷🌺जन्मदिन पर हैप्पी बर्थ डे और ढेर सारा प्यार।🌷🌺" + " " + name, mentions: arraytag})} , 175000);
setTimeout(() => {a({body: "🎁खुशियां आपके ज़िंदगी में बेहिसाब हो, 🕯️आज का हर एक पल ख़ास हो। - 🍰Happy Birthday🧁" + " " + name, mentions: arraytag})} , 180000);
setTimeout(() => {a({body: "🎂कामयाबी के शिखर पर आपका ही नाम हो,🎁 आप हर एक कदम पर दुनिया का सलाम हो। - 🍰जन्मदिन की शुभकामनाएं🕯️" + " " + name, mentions: arraytag})} , 185000);
setTimeout(() => {a({body: "🎉इस जन्मदिन आप अपने सपने बताओ🎁 नहीं बल्कि सबको दिखाओ। - 🎂हैप्पी बर्थडे🍰" + " " + name, mentions: arraytag})} , 190000);
setTimeout(() => {a({body: "*cake7🕯️कोशिश करो ऐसा की हर सपना साकार हो, 🎂ईश्वर करें की दुनियां में बस आपके ही नाम का शोर हो। - 🥳Happy Birthday🎈" + " " + name, mentions: arraytag})} , 195000);
setTimeout(() => {a({body: "🍰ऊपर वाला हम से भी पहले आपकी दुआ कबूल करें, 🕯️आपकी उम्र बढ़ती रहें लेकिन इसी तरह जवान दिखती रहें। - 🎁हैप्पी बर्थडे🎂" + " " + name, mentions: arraytag})} , 200000);
setTimeout(() => {a({body: "🍰 कुछ ऐसा हो की सब को आप पे गुरुर हो,🎉 आज वक्त का तू गुलाम है, 🕯️पर कल वक्त भी तेरा गुलाम हो। - 🎂Happy Birthday🎁" + " " + name, mentions: arraytag})} , 205000);
setTimeout(() => {a({body: "*birthday 🎂 इस जन्म दिवस के अवसर पर भगवान से यही प्रार्थना है की,🍰 आपकी हर प्रार्थना पूरी हो। - 🎉हैप्पी बर्थडे🎁" + " " + name, mentions: arraytag})} , 210000);
setTimeout(() => {a({body: "🍰आपकी ज़िंदगी में नई रौशनी आये और आप सितारों सा चमकें। - 🕯️Happy Birthday🎂" + " " + name, mentions: arraytag})} , 215000);
setTimeout(() => {a({body: "*birthvideo 🍰 हर राह आसान हो,🎈 हर राह पे खुशिया हो🎁, हर दिन ख़ूबसूरत हो, 🎉ऐसा ही आपका हर जन्मदिन हो..!! - 🎂Happy Birthday🥳" + " " + name, mentions: arraytag})} , 220000);
setTimeout(() => {a({body: "🎈इस जन्म दिवस के मौके पर आपको उम्मीद जैसी ऊर्जा मिले,🧁 जिससे आप अपने ज़िंदगी के अँधेरे हिस्से को रौशन कर सकें। - 🍰जन्मदिन की शुभकामनाएं🎁" + " " + name, mentions: arraytag})} , 225000);
setTimeout(() => {a({body: "🎉आपकी हसी चेहरे पे हमेशा रहे,🎂 आप जीवन का हर पड़ाव अच्छे से निभाये,🕯️ ऐसी इश्वर से कामना है मेरी। - 🍰जन्मदिन की शुभकामनाएं🤔" + " " + name, mentions: arraytag})} , 230000);
setTimeout(() => {a({body: "🕯️चंद लम्हें जो तुमने जी है 🍰हमारे साथ वो याद करलो कभी, 🎂पास अभी आ नहीं सकते तुम्हारे इस दूरी को नज़दीकी समझलो कभी,🎉 एक साल तो अपना जन्मदिन हमारे बिना मनालो कभी। - 🧁Happy Birthday🎁" + " " + name, mentions: arraytag})} , 235000);
setTimeout(() => {a({body: "*cake8 🍰ये लो तुम्हारा 🎁 Birthday Gift… 1000 Rs. का Scratch कार्ड… तुम भी क्या याद करोंगे… कर लो ऐश 😉 ░░░░░░░░░░░░ Scratch करो wish करों…🤪😜😝😅\n                       🍬🎂Happy Birthday🎂🍬" + " " + name, mentions: arraytag})} , 240000);
setTimeout(() => {a({body: "🥳🎉🎂 HAPPY BIRTHDAY TO YOU 🍰🎁🎈🧁🕯️" + " " + name, mentions: arraytag})} , 245000);
setTimeout(() => {a({body: "*birthday" + " " + name, mentions: arraytag})} , 250000);
  }
};