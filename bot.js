const Discord = require('discord.js');
const client = new Discord.Client();
const hero = new Discord.Client();
 const prefix = "$";
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
    	message.reply('pong');
  	}
});



const ms = require("ms");
const fs = require("fs");






///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////اذا جاك ايرور وقت تشغيل البوت وقالك الجيسون فيه غلط///////////////////////////
//////////////////////////////////////ولقيته فاضي////////////////////////////////////////////////////
///////////////////////////////////////حله بسيط//////////////////////////////////////////////////////
////////////////////////روح عند اي ملف جيسون موجوده و اضغط ctrl + z///////////////////////////////
////////////////////بتلقى الي كان مكتوب رجع خلاص سوي حفظ للملف ctrl + s///////////////////////////
//////////////////////غير كذا اي ايرور يصير للجيسون خليه لي انا بحله////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////iyvu

const developers = ["452191687159185409"]
const adminprefix = "$";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setavatar')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});

hero.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    var filter = s => s.author.id === message.author.id;
    var role;
    var why;
    var active;

    var what;
    var pay;
    var channel = hero.channels.get('471567203079028736');
    message.channel.send('**اولا اكتب على اي رتبة تريد التقديم .. `ادارة , Helper , Seller`**').then(m => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
      }).then(collected => {
        var content = collected.first().content;
        if(content !== 'Seller' && content !== 'Helper' && content !== 'ادارة') return message.reply('يجب عليك اختيار رتبة من الثلاثة المذكورين .');
        role = content;
        message.channel.send(`** ثانية لماذا تريد الرتبة ..\`${role}\`**`).then(m => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
          }).then(collected => {
            why = collected.first().content;
            message.channel.send(`**ثالثا هل ستكون متفاعل برتبتك؟ \`${role}\`**`).then(m => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ['time']
            }).then(collected => {
              active = collected.first().content;
              if(role === 'Seller') {
                message.channel.send('**ما الذي ستبيعه ؟**').then(m => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  }).then(collected => {
                    what = collected.first().content;
                    message.channel.send('**ما هي طرق الدفع المتوفرة لديك؟**').then(m => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                      }).then(collected => {
                        message.channel.send(':white_check_mark:| تم ارسال طلبك');
                        pay = collected.first().content;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username, message.author.avatarURL)
                        .setThumbnail(message.author.avatarURL)
                        .setTitle(`تم الطلب على رتبة \`${role}\``)
                        .addField('» تم الطلب بواسطة',message.author.tag,true)
                        .addField('» تم الطلب على رتبة', role,true)
                        .addField('» لماذا اراد الرتبة', why,true)
                        .addField('» هل سيكون متفاعل', active,true)
                        .addField('» الذي سيبيعه', what, true)
                        .addField('» طرق الدفع', pay,true)
                        .setFooter(`© SBot. 2018`);
                        channel.send(embed);
                      });
                    });
                  });
                });
              } else {
                message.channel.send(':white_check_mark:| تم ارسال طلبك');
                let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setThumbnail(message.author.avatarURL)
                .setTitle(`تم الطلب على رتبة \`${role}\``)
                .addField('» تم الطلب بواسطة',message.author.tag,true)
                .addField('» تم الطلب على رتبة', role,true)
                .addField('» لماذا اراد الرتبة', why,true)
                .addField('» هل سيكون متفاعل', active,true)
                .setFooter(`© SBot. 2018`);
                channel.send(embed);
              }
            });
          });
        });
        });
      });
    });
  }
});

hero.on('message',async message => {
let mention = message.mentions.members.first();
let acRoom = hero.channels.get('471567203079028736');
if(message.content.startsWith(prefix + "رفض")) {
if(message.guild.id !== '468068936848637972') return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
if(!mention) return message.reply("منشن شخص");

var embed = new Discord.RichEmbed()
.setTitle(':x:| تم رفض شخص')
.addField('» تم رفض', `${mention}`,true)
.addField('» بواسطة', `${message.author}`,true)
.setFooter(`© SBot. 2018`);
acRoom.send(embed);
}
});

hero.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = hero.channels.get('471567203079028736');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '468068936848637972') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      var embed = new Discord.RichEmbed()
      .setTitle(':white_check_mark:| تم قبول شخص')
      .addField('» تم قبول', `${mention}`,true)
      .addField('» بواسطة', `${message.author}`,true)
      .setFooter(`© SBot. 2018`);
      acRoom.send(embed);
    });
  }
});

client.on('message',async message => {
var room;
var title;
var duration;
var gMembers;
var filter = m => m.author.id === message.author.id;
if(message.content.startsWith(prefix + "giveaway")) {
  //return message.channel.send(':heavy_multiplication_x:| **هذا الامر معطل حاليا.. ``حاول في وقت لاحق``**');
 if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
 message.channel.send(`:eight_pointed_black_star:| **منشن الروم الذي تريد به القيف اواي**`).then(msg => {
   message.channel.awaitMessages(filter, {
     max: 1,
     time: 20000,
     errors: ['time']
   }).then(collected => {
     let room = message.guild.channels.find('name', collected.first().content);
     if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
     room = collected.first().content;
     collected.first().delete();
     msg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي**').then(msg => {
       message.channel.awaitMessages(filter, {
         max: 1,
         time: 20000,
         errors: ['time']
       }).then(collected => {
         if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
         if(collected.first().content > 180) return message.channel.send(':heavy_multiplication_x:| **الوقت لا يزيد عن 180 دقيقة .. `يتم حساب الوقت بالدقائق ان كنت لا تعلم`**');
         duration = collected.first().content * 60000;
         collected.first().delete();
         msg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
           message.channel.awaitMessages(filter, {
             max: 1,
             time: 20000,
             errors: ['time']
           }).then(collected => {
             title = collected.first().content;
             collected.first().delete();
             try {
               let giveEmbed = new Discord.RichEmbed()
               .setAuthor(message.guild.name, message.guild.iconURL)
               .setTitle(title)
               .setDescription(`المدة : ${duration / 60000} دقائق`)
               .setFooter(message.author.username, message.author.avatarURL);
               message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                  let re = m.react('✨');
                  setTimeout(() => {
                    let users = m.reactions.get("✨").users;
                    let list = users.array().filter(u => u.id !== m.author.id);
                    let gFilter = list[Math.floor(Math.random() * list.length) + 1]
                    let endEmbed = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .setTitle(title)
                    .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                    .setFooter(message.guild.name, message.guild.iconURL);
                    m.edit(endEmbed);
                  },duration);
                });
               msg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
             } catch(e) {
               msg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
               console.log(e);
             }
           });
         });
       });
     });
   });
 });
}
});


client.on('message', message => {
   let args = message.content.split(" ").slice(1);
  if (message.content.startsWith(prefix + "serch")) {
let Embed = new Discord.RichEmbed()
        .setColor(0x36393e);
    if (!args[0]) {
        Embed.setFooter(`**للأستعمال : $serch [ Letter ].**`);
        return message.channel.send(Embed); 
    }

    if (args[0].length <= 1) {
        Embed.setFooter(`للأستعمال : $serch [ Letter ].`);
        return message.channel.send(Embed); 
    }
    let array = []; 
    let number = 0; 
    message.guild.members.map(m => { 
        if (m.user.username.toUpperCase().includes(args[0].toUpperCase())) { 
            number++; 
            array.push(`${number}. ${m.user.username}`); 
        }
    });
    Embed.setTitle(`نتائج البحث عن : "${args[0]}"`);
    Embed.setDescription(`\`\`\`${array.slice(0, 30).join(`\n`)}\`\`\``);

    message.channel.send(Embed);
   
   }
}); 

client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith('$mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايدي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField(":scroll: اسم السيرفر",`${args}`,true)
        .addField(":globe_with_meridians: بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`S Bot.`)
                .setTimestamp()
    message.channel.send(embed)      
}})

client.on('message', message => {
              if(!message.channel.guild) return;
    var prefix = "$";
    if(message.content.startsWith('$bc')) {
    if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للإدارة**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية لاستعمال هاذا الأمر** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "S Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**يجب عليك كتابة شيئ لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من الإرسال؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
    msg.react('✅')
    .then(() => msg.react('❌'))
    .then(() =>msg.react('✅'))

    let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
	      let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`**☑ |   لقد تم ارسال الرسالة لـ ${message.guild.members.size} عضوآ**`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .setDescription(`**البرودكاست :mega: **
**:shield: السيرفر : ** ${message.guild.name}
** :thinking:  المرسل : ** ${message.author.username}
**  الرسالة : ** ${args}
        `)
         .setTimestamp()
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**تم الغاء البرودكاست :x:.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });





client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '$color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});
client.on('message', ra3d => {
  
  if (ra3d.content ===  prefix + 'cc'){
              if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send("**✅ | يتم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < 141; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
client.on("message", message => {
    if(message.content.startsWith(prefix + "server")) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("**ليس لديك البرمشن المطلوب لاستخدام هذا الامر :x:**");
        const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setThumbnail(message.guild.iconURL)
        .setColor("RANDOM")
.setDescription(`**
مالك السيرفر :key: \` ${message.guild.owner.user.username} \`                                        
عدد اعضاء السيرفر :bar_chart: \` ${message.guild.memberCount}\`
                                  عدد رومات السيرفر :books:
\`#\`${message.guild.channels.filter(m => m.type === 'text').size} \`🔈\`${message.guild.channels.filter(m => m.type === 'voice').size}
عدد الرتب :straight_ruler: 
${message.guild.roles.size}
**  `)
        message.channel.send({embed:embed})
    }
});









client.on('message', message => {
    if(message.content.startsWith('$help')) {
        
        message.channel.send('**[ لقد تم أرسال جميع أوامر البوت في الخاص :envelope_with_arrow: | Check your DM. ]**')
    }
});


client.on('message', message => {
    if(message.content.startsWith('$help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
        
╭━━━╮╭━━╮╱╱╱╭╮
┃╭━╮┃┃╭╮┃╱╱╭╯╰╮
┃╰━━╮┃╰╯╰┳━┻╮╭╯
╰━━╮┃┃╭━╮┃╭╮┃┃
┃╰━╯┃┃╰━╯┃╰╯┃╰╮
╰━━━╯╰━━━┻━━┻━╯
By , <@456641975932813345> - <@323885452207587329> 
<@406143689984049152> - <@352139023348924418> - <@298732816995319809> .
General's Commands. :earth_asia: 
$server - معلومات عن سيرفرك :scroll:   
$user - معلومات عن حسابك :id: 
$avatar - صورة بروفايلك الشخصي :frame_photo: 
$time - الوقت الحالي - السعودية فقط :flag_sa: 
$sar7 - لمصارحة شخص  :flushed: 
$cal - آله حاسبة خاصةة بالبوت :calendar_spiral: 
$voice - معرفة عدد المتواجدين بالصوت :microphone: 
$allbots - رؤية جميع بوتات السيرفر :robot:
$ping - رؤية سرعة اتصالك :stopwatch:  
$mcstats - يعطيك معلومات لأي سيرفر ماين كرافتي :crossed_swords: 
$serch - للبحث عن اسم شخص معك بالسيرفر :battery: 
$channels - لرؤية رومات السيرفر :urn: 
$at - لكتابة ما تكتبة في انجاز ماين كرافتي :hole: 
$ft - رؤية احصائياتك في فورتنايت :lizard: 
$color - لأختيار لونك في السيرفر :heart: 
$invite - معلومة عن الدعوة :soccer: 
        **
        `)
    message.author.send(embed)
}
});


client.on('message', async message => {
      //!fortnite Ninja solo pc
  let Client = require('fortnite');
  let fortnite = new Client('2bb97881-c068-4cba-b3b5-152abfc71c83');
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    if(message.content.startsWith(prefix + "ft")) {
        let username = args[0];
        let platform = args[2] || 'pc';
        let gamemode = args[1];
        if(gamemode != 'solo' && gamemode != 'duo' && gamemode != 'squad' && gamemode != 'lifetime') return message.reply(`**طريقة الاستخدام : ${prefix}fortnite username mode platform**`);
        
    if(!username) return message.reply('**Specify a username!**');
    
    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        
        if(gamemode === 'solo') {
            let solostats = stats.solo;
            let score = solostats.score;
            let kd = solostats.kd;
            let matches = solostats.matches;
            let kills = solostats.kills;
            let wins = solostats.wins;
            let top3 = solostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Solo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else if (gamemode === 'duo') {
            let Duostats = stats.duo;
            let score = Duostats.score;
            let kd = Duostats.kd;
            let matches = Duostats.matches;
            let kills = Duostats.kills;
            let wins = Duostats.wins;
            let top3 = Duostats.top_3;

            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
        message.channel.send(ByEmbed);

        }else if(gamemode === 'squad') {
            let squadstats = stats.squad;
            let score = squadstats.score;
            let kd = squadstats.kd;
            let matches = squadstats.matches;
            let kills = squadstats.kills;
            let wins = squadstats.wins;
            let top3 = squadstats.top_3;
            
            let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Squad Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",matches,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Top 3:",top3,true)
            
            return message.channel.send(ByEmbed);
            
        }else {
            
        
        let lifetime = stats.lifetime;
        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        
                    let ByEmbed = new Discord.RichEmbed()
            .setAuthor('Forntite Tracker Duo Stats')
            .setTitle(data.username+"'s Stats")
            .setColor("RANDOM")
            .setThumbnail("https://www.teepublic.com/t-shirt/2412274-fortnite-logo-game-t-shirts")
            .addField('# | Wins:',wins,true)
            .addField('# | Kills:',kills,true)
            .addField('# | Score:',score,true)
            .addField("# | Matches:",mplayed,true)
            .addField("# | Kill/Death Ratio:",kd,true)
            .addField("# | Win Percentage:",winper,true)
            
        message.channel.send(ByEmbed);
    }
    })
    }
});

client.on('message', message => {
    if(message.content.startsWith('$help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
Admin's Commands. :wrench: 
$ban - أمر الباند :no_entry:
$kick - أمر الباند  :outbox_tray:
$cc - صنع ألوان :heart:
$bc - البرودكاست :mega:
$clear - مسح الشات :hourglass_flowing_sand: 
$role - لأعطاء رتبة لـ أحد الأعضاء :key: 
$rerole - لآزالة الرتبة من أحد الاعضاء 
$move - لنقل الاعضاء الي رومك  :scales: 
  **      `)
    message.author.send(embed)
}
});

client.on('message', message => {
    if(message.content.startsWith('$help')) {
   const embed = new Discord.RichEmbed()
.setColor('RANDOM')
        .setDescription(`**
Other's :briefcase:
لدعوة البوت - $inv :pen_fountain:         
  **      `)
    message.author.send(embed)
}
});


const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "at")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**. اكتب محتوي الانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
    }
});

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});


  client.on('message', message => {
    if (message.content.startsWith("$tr")) {

        const translate = require('google-translate-api');
        const Discord = require('discord.js');

    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`**من فضلك قم باستخدام . \`$tr [الكلمه] to [اللغه]\`**`);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'S Bot translate',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "S Bot",
                    value: `**من:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**الي: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "S Bot"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌  لم استطيع العثور علي اللغة المطلوبه',
                color: 0xE8642B
            }
        });
    });
    }
});
  client.on('message',async message =>{ 
    if(message.content.startsWith(prefix + "channels")) {
        let i = 1;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL)
        .setDescription(message.guild.channels.map(c => `\`${i++}\` - **${c.name}**`))
        .setFooter(message.guild.channels.size + ' Channels in the server!');
        message.channel.send(embed).then(msg => {
            msg.delete(25000);
            message.delete(25000);
        });
    }
});


client.on('message', message => { 

 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});

client.on("message", message => {

	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
client.on('message', message => {
            if(!message.channel.guild) return;
var args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bcall')){
 if (message.author.id !== '456641975932813345') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '456641975932813345') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', message => {
if(message.content == '<@465885551329804288>') {
message.channel.startTyping()
setTimeout(() => { 
message.channel.stopTyping()
}, 7000);
}
});
  
	   client.on('message', message => {
          

           if (message.content.startsWith(prefix + "user")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
 .setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

.setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')  
    message.channel.sendEmbed(id);
})
}
    

         
     });






client.on('message', message => {
           var currentTime = new Date(),
           hours = currentTime.getHours() + 0 ,
           minutes = currentTime.getMinutes(),
           seconds = currentTime.getSeconds(),
           years = currentTime.getFullYear(),
           month = currentTime.getMonth() + 1,
           day = currentTime.getDate(),
           week = currentTime.getDay();
      
            

           if (minutes < 10) {
               minutes = "0" + minutes;
           }
           var suffix = "AM";
           if (hours >= 12) {
               suffix = "PM";
               hours = hours - 12;
           }
           if (hours == 0) {
               hours = 12;
           }
               if(message.content.startsWith('$time')) {
                   const embed = new Discord.RichEmbed()
          .addField(`🕐 Time `,` ** 「  ${hours} : ${minutes} : ${suffix} 」**`)
.addField(` :satellite: Date `,`**「 ${years} : ${month} : ${day} 」**`)

          
message.channel.send(embed)
}
});   
client.on('message',function(message) {
   if(message.content === prefix + "inv") {
       if(!message.channel.guild) return;
       var mmmmEmbed = new Discord.RichEmbed()
       .setAuthor(client.user.username)
       .setTitle(':eight_pointed_black_star: Click Here.')
       .setURL(`https://discordapp.com/oauth2/authorize/?permissions=268443710&scope=bot&client_id=465885551329804288`)
       .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
       message.channel.send(mmmmEmbed)
   }
});















//,,,,



















client.on('message',   eyad =>{
    
    var  args = eyad.content.split(" ").slice(2).join(" ")
    var men = eyad.mentions.users.first()|| client.users.get(eyad.content.split(' ')[1])
    var  mas = eyad.author
                              if(eyad.content.startsWith(prefix + 'sar7')) {
                              if(eyad.channel.type === "dm"){
if(!args) return  eyad.channel.send(":black_medium_square: **قم بوضع رسالة الصراحة **");
if(!men) return  eyad.channel.send(":black_medium_square:**قم بوضع ايدي المراد مصارحتة , ربما يكون الشخص غير موجود في سيرفرات مشتركة بينك وبينة لذلك لن يستطيع البوت الأرسال** ");
                      var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
     var eyadandr3d = new Discord.RichEmbed()
     .setAuthor(eyad.author.username , eyad.author.avatarURL)
     .setThumbnail(men.avatarURL)
     .setDescription(`**:black_medium_square:  هل انت موافق لآرسال هذه الصراحة  ؟  \nمحتوي الرسالة : ${args}**`)
     .setTimestamp() 
     .setFooter(`- By , message.author.name .`)
     eyad.channel.send(eyadandr3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{            
    var kk = (reaction, user) => reaction.emoji.name === '✅' && user.id === eyad.author.id;    
    var nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === eyad.author.id;
    var kkk = message.createReactionCollector(kk, { time: 60000 });
    var nnn = message.createReactionCollector(nn, { time: 60000 });
kkk.on("collect", r => {
          const embed = new Discord.RichEmbed()
               .setThumbnail("https://cdn.discordapp.com/attachments/429056808561278979/450412294078332948/download.jpg")   
               .setColor("RANDOM")
               .addField('**• السلام عليكم ** ', `<@${men.id}>` , true)
                    .addField('**• لقد قام شخص ما بمصارحتك **' ,       ` __${args}__ ` , true)
                    .addField('**• تاريخ المصارحة**' , Day + "-" + Month + "-" + Year , true)
          client.users.get(men.id).sendEmbed(embed)
          eyad.reply(`لقد تم ارسال الصراحه للشخص \n <@${men.id}>`)
message.delete()
          eyad.delete();
})
nnn.on("collect", r => {
message.delete()
eyad.reply("`تم الغاء الصراحة`")
eyad.delete();
})
})
}) 
})
}
}
});


// شف دسكورد
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  var command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  var args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
   var textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحه```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


  message.guild.member(user).ban(7, user);

message.channel.send(`**✅ ${user.tag} banned from the server ! ✈ **  `)

}
});
  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد طردة**");


  message.guild.member(user).kick(7, user);

message.channel.send(`**✅ ${user.tag} kicked from the server ! ✈ **  `)

}
});




 client.on('message', message => {
        var  user = message.mentions.users.first() || message.author;
    if (message.content.startsWith(prefix + "avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});






 

        client.on('message', async message => {
			if(message.content.includes('discord.gg')){ 
			    if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
.setDescription(`**  :lock: لقد تمت معاقبتك  **
**  بسبب نشر الروابط خيو :smirk: :frog: **
`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
   
       
    }
})



    client.on('message', message => {
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الخاصيه المطلوبة`");  
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``للأستخدام اكتب  : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("`لا تستطيع سحب `"+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }
}
});


  const math = require('math-expression-evaluator');   
client.on('message', message => {
if (message.content.startsWith(prefix + 'cal')) {
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
           var Canvas = module.require('canvas');
           var jimp = module.require('jimp');
   
    const w = ['./math.png'];
   
            let Image = Canvas.Image,
                canvas = new Canvas(802, 404),
                ctx = canvas.getContext('2d');
            ctx.patternQuality = 'bilinear';
            ctx.filter = 'bilinear';
            ctx.antialias = 'subpixel';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 2;
            fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                if (err) return console.log(err);
                let BG = Canvas.Image;
                let ground = new Image;
                ground.src = Background;
                ctx.drawImage(ground, 0, 0, 802, 404);
   
    })
        let args = message.content.split(" ").slice(1);
       const question = args.join(' ');
   if (args.length < 1) {
       message.reply('Specify a equation, please.\n\ Ex: #calc 5+5 ' );
} else {    let answer;
   try {
       answer = math.eval(question);
   } catch (err) {
       message.reply(`Error: ${err}`);
   }
var ment = message.mentions.users.first();
           var getvalueof;
           if(ment) {
             getvalueof = ment;
           } else {
             getvalueof = message.author;
           }
                                          let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                                            jimp.read(url, (err, ava) => {
                                                if (err) return console.log(err);
                                                ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                                                    if (err) return console.log(err);
                                                                             
                           
                                                    ctx.font = '42px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '50px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${answer}`,108, 130);
                                                    
                                                    
                                                     ctx.font = '25px Arial Bold';//Name ,_,
                                                    ctx.fontSize = '30px';
                                                    ctx.fillStyle = "#ffffff";
                                                    ctx.fillText(`${question}`,105, 90);

                           
                                ctx.beginPath();
                                ctx.stroke();
                              message.channel.sendFile(canvas.toBuffer());
                           
                           
                         
                           
                            })
                           
                            })
}
}
});
   



client.on("message", async function(message)  {
if(message.content.startsWith(prefix + "voice")) {
    message.channel.send(`**الاعضاء المتواجدون حاليا : ${message.guild.members.filter(member => member.voiceChannel).size}**`);

    message.channel.send('```\n'+message.guild.members.filter(member => member.voiceChannel).map(m => m.user.tag).join('\n') + '```');

}
});

client.on('message', message => {
     if(!message.channel.guild) return;

                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**لقد وجد البوت ${message.guild.members.filter(m=>m.user.bot).size} بوت في السيرفر :electric_plug: **
${botssize.join('\n')}`)
.setFooter('S Bot','https://cdn.discordapp.com/avatars/465885551329804288/55614337cfb9813916a60383469736d9.jpg?size=128')
.setTimestamp();
message.channel.send(embed)

}


});


client.on('message', message => {

  if(message.content.startsWith('$ping')) {
    message.channel.send('**:stopwatch: Pinging...**').then(sent => {
      sent.edit(`**Pong! Took ${sent.createdTimestamp - message.createdTimestamp} ms :stopwatch: **`)
})
}
    

         
     });



	









const { Client , Util } = require('discord.js');
const ytdl = require("ytdl-core");
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();

/*
البكجآت
npm install discord.js
npm install ytdl-core
npm install get-youtube-id
npm install youtube-info
npm install simple-youtube-api
npm install queue
*/


//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

client.on('message', async msg => { // eslint-disable-line
	if (msg.author.bot) return undefined;
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('يجب توآجد حضرتك بروم صوتي .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('لا يتوآجد لدي صلاحية للتكلم بهذآ الروم');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**يجب توآفر برمشن `EMBED LINKS`لدي **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			return msg.channel.send(` **${playlist.title}** تم الإضآفة إلى قأئمة التشغيل`);
		} else {
			try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**الرجآء إختيآر رقم المقطع** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					.setFooter(msg.guild.name)
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
					} catch (err) {
						console.error(err);
						return msg.channel.send('لم يتم إختيآر مقطع صوتي');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: لا يتوفر نتآئج بحث ');
				}
			}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

			return handleVideo(video, msg, voiceChannel);
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لتجآوزه');
		serverQueue.connection.dispatcher.end('تم تجآوز هذآ المقطع');
		return undefined;
	} else if (command === `stop`) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يتوفر مقطع لإيقآفه');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('تم إيقآف هذآ المقطع');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('أنت لست بروم صوتي .');
		if (!serverQueue) return msg.channel.send('لا يوجد شيء شغآل.');
		if (!args[1]) return msg.channel.send(`:loud_sound: مستوى الصوت **${serverQueue.volume}**`);
		serverQueue.volume = args[1];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: تم تغير الصوت الي **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: الان يتم تشغيل : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		if (!serverQueue) return msg.channel.send('لا يوجد شيء حالي ف العمل.');
		let index = 0;
		//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		const embedqu = new Discord.RichEmbed()
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**الان يتم تشغيل** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('تم إيقاف الموسيقى مؤقتا!');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي ف العمل.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('استأنفت الموسيقى بالنسبة لك !');
		}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		return msg.channel.send('لا يوجد شيء حالي في العمل.');
	}

	return undefined;
});
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queue.set(msg.guild.id, queueConstruct);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		queueConstruct.songs.push(song);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`لا أستطيع دخول هذآ الروم ${error}`);
		}
	} else {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** تم اضافه الاغنية الي القائمة!`);
	}
	return undefined;
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	console.log(serverQueue.songs);
//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
			play(guild, serverQueue.songs[0]);
		})//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
		.on('error', error => console.error(error));//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

	serverQueue.textChannel.send(`بدء تشغيل : **${song.title}**`);
}//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'

const adminprefixsdsds = "$p";//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
const devs = ['356808288974667776','323885452207587329'];//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
client.on('message', message => {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  var argresult = message.content.split(` `).slice(1).join(' ');//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    if (!devs.includes(message.author.id)) return;//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
    
if (message.content.startsWith(adminprefixsdsds + 'setgame')) {//by ,$ ReBeL ء , 🔕#4777 'CODES SERVER'
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefixsdsds + 'setusername')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefixsdsds + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefixsdsds + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

});


client.login(process.env.BOT_TOKEN);
