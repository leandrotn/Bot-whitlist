const Discord = require("discord.js");
const client = new Discord.Client({intents: 32767,}); 
const config = require("./config.json") 
const mysql = require('mysql'); 

var resultadog = config.resultado
var  iddacategoria = config.categoria_wl
var footer = config.footer
var canalwl = config.canal_wl
var cargoaprovado = config.cargoaprovado
client.on("ready", () => {
  console.log("ON")

  let embed = new Discord.MessageEmbed()
  .setColor('#0091ff')
  .setAuthor('CANAL DE WL')
.setTitle("INICIE SUA WL:")
  .setDescription('Para iniciar sua wl basta clicar em "🔰"'); 
    const iniciar = new Discord.MessageActionRow().addComponents(
              
    
        new Discord.MessageButton().setCustomId('wl').setEmoji("🔰").setStyle('PRIMARY'),
     
        ); 
        client.channels.cache.get(canalwl).bulkDelete("100")
    
    
        client.channels.cache.get(canalwl).send({embeds: [embed], components: [iniciar]})
})
  client.login(config.token); 





    client.on('interactionCreate', async interaction => {
        if (interaction.isButton()) {
    
            if (interaction.customId.startsWith('wl')) {
   
               let enviarresultado = client.channels.cache.get(resultadog)
    
               
                let server = interaction.guild
                let resultado = client.channels.cache.get(resultadog)
                const host = "ID"; 
                let title = server.name
                let color = "BLUE"
                var exp = 0; 
                let pts = "8"
                const userdb = "NAME_USER"; // MYSQL USUÁRIO
                const senhadb = "SENHA_USER"; // MYSQL SENHA
                const basedb = "NAME_DATABASE"; // MYSQL DB
                const connection = mysql.createConnection({ 
                  host: host,
                  user: userdb,
                  password: senhadb,
                  database: basedb
                }); 
    let desc = `\n\n- _Você possui 1 minuto para responder cada pergunta!_\n- _Somente você e o bot possuem acesso a este canal!_\n\n**Se falhar, terá que realizar a whitelist novamente!**`
    let pe1 = "\n> ⭐  **Qual o Nome do seu Personagem?**"
    let pe2 = "\n> ⭐ **Qual é o seu ID?**"
    let pe3 = "\n> ⭐**O que significa amor a vida?**\n\n:one:  - Reagir a um assalto.\n\n:two:  - É valorizar a sua vida como ela fosse única.\n\n:three:  - É ter amor próprio.\n\n:four:  - É pular de uma ponte para evitar ser pego."
    let pe4 = "\n> ⭐**O que significa RDM?**\n\n:one:  - RDM é fazer sigla usada para quem abusou de bug.\n\n:two: - RDM é atropelar alguém sem motivos.\n\n:three:  - RDM é matar alguém sem motivos.\n\n::four:  - RDM é sacar uma arma e ameaçar alguém."        
    let pe5 = "\n> ⭐**O que é VDM?**\n\n:one:  - É usar um veículo como arma, sem motivo algum.\n\n\:two: - É matar alguém sem motivo.\n\n\:three:  - É a sigla em inglês que significa fazer algo fora da realidade.\n\n\::four:  - VDM é subir uma montanha com carro simples."
    let pe6 = "\n> ⭐**O que é Combat-Logging?**\n\n:one:  - É entrar em combate na ação.\n\n\:two: - É chamar alguém para lutar.\n\n\:three:  - É deslogar do servidor para sair de uma ação.\n\n\::four:  - É tentar fugir de uma ação."
    let pe7 = "\n> ⭐**O que é Meta-Gaming?**\n\n:one:  - É você utilizar informação de fora do jogo.\n\n\:two: - É você fazer rp baseado em metas de missões.\n\n\:three:  - É você abusar da mecânico do jogo.\n\n\::four:  - É você bater as metas do servidor."          
    let pe8 = "\n> ⭐**Se um bandido apontasse a arma na sua cabeça para te assaltar, o que você faria?**\n\n:one:  - Se eu tivesse armado reagiria.\n\n\:two: - Chamaria a polícia.\n\n\:three:  - Chamaria meu amigo que está em call comigo.\n\n\::four:  - Levantaria as mãos e entregaria tudo."
    
    let pe9 = "\n>  **Oque é Power-Gaming?**\n\n:one:  - Assaltar uma loja sozinho.\n\n\:two: - Matar alguém sem razão ou motivo aparente.\n\n\:three:  - Fazer ou realizar alguma ação que não é possível acontecer na vida real.\n\n\::four:  - Utilizar o veículo como arma."
    
    let pe10 = "\n> ⭐**Caso você presencie uma situação de ANTI-RP, o que você faria?**\n\n:one:  - Pararia o RP e chamaria um administrador.\n\n\:two: - Faria ANTI-RP contra a pessoa que também fez ANTI-RP.\n\n\:three:  - Começaria a gravar e esperaria o RP acabar após isso fária uma denúncia para os administradores.\n\n\::four:  - Iria sair do servidor, porquê não concordo com ANTI-RP!."
    
    let pe11 = "\n> ⭐**Você está em uma safezone e alguém lhe assalta, o que você faria?**\n\n:one:  - Não aceitaria o RP e chamaria um administrador.\n\n\:two: - Seguiria o RP normalmente e depois faria uma denúncia para os administradores.\n\n\:three:  - Sairia correndo não tendo amor a minha vida.\n\n\::four:  - Reagiria ao assalto e mataria o assaltante."
    
    let pe12 = "\n> ⭐**Você está andando pela rua. De repente, um bandido te assalta, você reage e é morto o quê você faria após isso?**\n\n:one:  - Continuaria o RP normalmente esquecendo toda a ação passada.\n\n\:two: - Voltaria para o local que foi morto e mataria a pessoa que te matou, para se vingar.\n\n\:three:  - Lembraria de toda a ação para se vingar em outra hora.\n\n\::four:  - Esperaria algum paramédico para ser reanimado no hospital e esqueceria toda a ação e tudo o quê aconteceu."
    let guild = interaction.guild; 
    
    
              
              
              
              
              
                    
                      if (interaction.guild.channels.cache.find(channel => channel.name === `wl-${interaction.user.id}`)) return interaction.reply({content:`Você ja tem uma **WL** aberta!`, ephemeral: true})
                      const channel = await guild.channels.create(`wl-${interaction.user.id}`,{
                        
                      type: 'text',
                      setRateLimitPerUser: 3000,
                      parent: iddacategoria,
                      permissionOverwrites:[
                          {
                              allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                              id: interaction.user.id
                          },
                          {
                              deny: 'VIEW_CHANNEL',
                              id: guild.id
                          }
                      ]
                  }).then(channel => {
    
                  channel.setRateLimitPerUser("3", "Time wl")
    
                  
                  
                  interaction.reply({content:`Sua wl foi iniciada! \n Canal: <#${channel.id}>`, ephemeral: true})
                  channel.send({content:`<@${interaction.user.id}>`})
    
              const { once } = require("events")
          
              let embeds = new Discord.MessageEmbed()
              .setTitle(title)
          .setDescription(`
    
          
          __Seja bem vindo ao nosso Sistema Exclusivo de Whitelist!__
          
          Para iniciar as perguntas digite aqui neste canal \`iniciar\`
          
          - _Você possui 1 minuto para responder a cada pergunta!_
          - _Somente você e o bot possuem acesso a este canal!_
          
          **Se falhar, terá que refazer a whitelist!**`)
          .setColor("GREEN")
          
           
          channel.send({ embeds: [embeds]}).then(msg => {
          
            let i1 = 0

            setTimeout(() => {
      if(i1 == 0) {
        setTimeout(() => {
              channel.delete()
        }, 5000)
      
        msg.channel.send({content: "Esse canal será deletado por inatividade!"})
        msg.delete()
      }
            },60000)
                
            let iniciar = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
            
            .on('collect', c => {
    
              if(!c.author.id == interaction.user.id) return; 
              if(c.author.id == interaction.user.id) {
               
                      
                     
    
      if(c.content == "iniciar"){ 

        i1 += 10
        iniciar.stop()
        let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(pe1 + desc)
        .setColor(color)
        .setFooter(`${footer} `)
    
        .setThumbnail(server.iconURL())
        channel.send({embeds: [embed]}).then(msg => {

          let i2 = 0

          setTimeout(() => {
    if(i2 == 0) {
      setTimeout(() => {
            channel.delete()
      }, 5000)
    
      msg.channel.send({content: "Esse canal será deletado por inatividade!"})
      msg.delete()
    }
          },60000)
              
          
      
          
          let per1 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
          
          .on('collect', c => {
    
            if(!c.author.id == interaction.user.id) return; 
            if(c.author.id == interaction.user.id) {
              i2 += 1
              per1.stop()
              let nome = c.content
              if (nome.length > 30) nome = "NaN"
              let per2 = new Discord.MessageEmbed()
              .setTitle(title)
              .setDescription(pe2 + desc)
              .setColor(color)
              .setFooter(`${footer} `)
              .setThumbnail(server.iconURL())
              channel.send({embeds: [per2]}).then(msg2 => {
          
                let i3 = 0

                setTimeout(() => {
          if(i3 == 0) {
            setTimeout(() => {
                  channel.delete()
            }, 5000)
          
            msg.channel.send({content: "Esse canal será deletado por inatividade!"})
            msg.delete()
          }
                },60000)
          
                let p2 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})

                    
                .on('collect', c => {


          
                  if(!c.author.id == interaction.user.id) return; 
                  if(c.author.id == interaction.user.id) {
                    i3 += 1
                    p2.stop()
                    let id = c.content
                    let per3 = new Discord.MessageEmbed()
                    .setTitle(title)
                    .setDescription(pe3)
                    .setColor(color)
                    .setFooter(`${footer} `)
                    .setThumbnail(server.iconURL())
                    channel.send({embeds: [per3]}).then(msg => {
          
                      let i4 = 0

                      setTimeout(() => {
                if(i4 == 0) {
                  setTimeout(() => {
                        channel.delete()
                  }, 5000)
                
                  msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                  msg.delete()
                }
                      },60000)
          
                      let p3 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                    
                          
                      .on('collect', c => {
                
                        if(!c.author.id == interaction.user.id) return; 
                        if(c.author.id == interaction.user.id) {
                          i4 +=5
                          p3.stop()
                          let pp3 = c.content
                          if(pp3 == "2") { 
                            exp += 1; 
                          }
    
    
    
                          let per4 = new Discord.MessageEmbed()
                          .setTitle(title)
                          .setDescription(pe4)
                          .setColor(color)
                          .setFooter(`${footer} `)
                          .setThumbnail(server.iconURL())
                          channel.send({embeds: [per4]}).then(msg => {
          
                            let i5 = 0

                            setTimeout(() => {
                      if(i5 == 0) {
                        setTimeout(() => {
                              channel.delete()
                        }, 5000)
                      
                        msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                        msg.delete()
                      }
                            },60000)
                                
          
                            let p4 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                            
                            .on('collect', c => {
                      
                              if(!c.author.id == interaction.user.id) return; 
                              if(c.author.id == interaction.user.id) {
                                i5 +=1
                                p4.stop()
                                let pp4 = c.content
                                if(pp4 == "3") { 
                                  exp += 1; 
          
                                }
                                let per5 = new Discord.MessageEmbed()
                                .setTitle(title)
                                .setDescription(pe5 )
                                .setColor(color)
                                .setFooter(`${footer} `)
                                .setThumbnail(server.iconURL())
                                channel.send({embeds: [per5]}).then(msg => {
          
      
                                  let i6 = 0

                                  setTimeout(() => {
                            if(i6 == 0) {
                              setTimeout(() => {
                                    channel.delete()
                              }, 5000)
                            
                              msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                              msg.delete()
                            }
                                  },60000)
                                      
                                  let p5 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                  
                                  .on('collect', c => {


                            
                                    if(!c.author.id == interaction.user.id) return; 
                                    if(c.author.id == interaction.user.id) {

                                      i6+=1
                                      p5.stop()
                                      let pp5 = c.content
                                      if(pp5 == "1") { 
                                        exp += 1; 
                
                                      }
                                      let per6 = new Discord.MessageEmbed()
                                      .setTitle(title)
                                      .setDescription(pe6)
                                      .setColor(color)
                                      .setFooter(`${footer} `)
                                      .setThumbnail(server.iconURL())
                                      channel.send({embeds: [per6]}).then(msg => {
          
                                        let i7 = 0

                                        setTimeout(() => {
                                  if(i7 == 0) {
                                    setTimeout(() => {
                                          channel.delete()
                                    }, 5000)
                                  
                                    msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                    msg.delete()
                                  }
                                        },60000)
                                            
          
                                        let p6 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                        
                                        .on('collect', c => {

                                          i7 += 1
                                  
                                          if(!c.author.id == interaction.user.id) return; 
                                          if(c.author.id == interaction.user.id) {
                                            p6.stop()
                                      let pp6 = c.content
                                      if(pp6 == "3") { 
                                        exp += 1; 
                
                                      }
                                      let per7 = new Discord.MessageEmbed()
                                      .setTitle(title)
                                      .setDescription(pe7)
                                      .setColor(color)
                                      .setFooter(`${footer} `)
                                      .setThumbnail(server.iconURL())
                                      channel.send({embeds: [per7]}).then(msg => {
          
                                        let i8 = 0

                                        setTimeout(() => {
                                  if(i8 == 0) {
                                    setTimeout(() => {
                                          channel.delete()
                                    }, 5000)
                                  
                                    msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                    msg.delete()
                                  }
                                        },60000)
                                            
          
                                        let p7 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                        
                                        .on('collect', c => {
                                  
                                       
                                          if(!c.author.id == interaction.user.id) return; 
                                          if(c.author.id == interaction.user.id) {
                                            i8 +=1
                                            p7.stop()
                                            let pp7 = c.content
                                            if(pp7 == "1") { 
                                              exp += 1; 
                      
                                            }
                                            let per8 = new Discord.MessageEmbed()
                                            .setTitle(title)
                                            .setDescription(pe8)
                                            .setColor(color)
                                            .setFooter(`${footer} `)
                                            .setThumbnail(server.iconURL())
                                            channel.send({embeds: [per8]}).then(msg => {
          
                                              let i9 = 0

                                              setTimeout(() => {
                                        if(i9 == 0) {
                                          setTimeout(() => {
                                                channel.delete()
                                          }, 5000)
                                        
                                          msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                          msg.delete()
                                        }
                                              },60000)
                                                  
          
                                              let p8 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                              
                                              .on('collect', c => {
                                        
                                                if(!c.author.id == interaction.user.id) return; 
                                                if(c.author.id == interaction.user.id) {
                                                  i9 +=1
                                                  p8.stop()
                                            let pp8 = c.content
                                            if(pp8 == "4") { 
                                              exp += 1; 
                      
                                            }
                                            let per9 = new Discord.MessageEmbed()
                                            .setTitle(title)
                                            .setDescription(pe9)
                                            .setColor(color)
                                            .setFooter(`${footer} `)
                                            .setThumbnail(server.iconURL())
                                            channel.send({embeds: [per9]}).then(msg => {
                                              let i10 = 0

                                              setTimeout(() => {
                                        if(i10 == 0) {
                                          setTimeout(() => {
                                                channel.delete()
                                          }, 5000)
                                        
                                          msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                          msg.delete()
                                        }
                                              },60000)
                                                  
      
          
                                              let p9 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                              
                                              .on('collect', c => {
                                        
                                                if(!c.author.id == interaction.user.id) return; 
                                                if(c.author.id == interaction.user.id) {
                                                  i10 +=1
                                                  p9.stop()
                                                  let pp9 = c.content
                                                  if(pp9 == "3") { 
                                                    exp += 1; 
                            
                                                  }
                                                  let per10 = new Discord.MessageEmbed()
                                                  .setTitle(title)
                                                  .setDescription(pe10)
                                                  .setColor(color)
                                                  .setFooter(`${footer} `)
                                                  .setThumbnail(server.iconURL())
                                                  channel.send({embeds: [per10]}).then(msg => {
                                                    let i11 = 0

                                                    setTimeout(() => {
                                              if(i11 == 0) {
                                                setTimeout(() => {
                                                      channel.delete()
                                                }, 5000)
                                              
                                                msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                                msg.delete()
                                              }
                                                    },60000)
                                                        
      
          
                                                    let p10 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                                    
                                                    .on('collect', c => {
                                              
                                                      if(!c.author.id == interaction.user.id) return; 
                                                      if(c.author.id == interaction.user.id) {
                                                        i11 += 1
                                                        p10.stop()
                                                        let pp10 = c.content
                                                        if(pp10 == "3") { 
                                                          exp += 1; 
                                  
                                                        }
                                                        let per11 = new Discord.MessageEmbed()
                                                        .setTitle(title)
                                                        .setDescription(pe11)
                                                        .setColor(color)
                                                        .setFooter(`${footer} `)
                                                        .setThumbnail(server.iconURL())
                                                        channel.send({embeds: [per11]}).then(msg => {
          
                                                          let i12 = 0

                                                          setTimeout(() => {
                                                    if(i12 == 0) {
                                                      setTimeout(() => {
                                                            channel.delete()
                                                      }, 5000)
                                                    
                                                      msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                                      msg.delete()
                                                    }
                                                          },60000)
                                                              
          
                                                          let p11 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                                          
                                                          .on('collect', c => {
                                                    
                                                            if(!c.author.id == interaction.user.id) return; 
                                                            if(c.author.id == interaction.user.id) {

                                                              i12 += 1
                                                              p11.stop()
                                                              let pp11 = c.content
                                                              if(pp11 == "2") { 
                                                                exp += 1; 
                                        
                                                              }
                                                              let per12 = new Discord.MessageEmbed()
                                                              .setTitle(title)
                                                              .setDescription(pe12)
                                                              .setColor(color)
                                                              .setFooter(`${footer} `)
                                                              .setThumbnail(server.iconURL())
                                                              channel.send({embeds: [per12]}).then(msg => {
          
                                                                let i13 = 0

                                                                setTimeout(() => {
                                                          if(i13 == 0) {
                                                            setTimeout(() => {
                                                                  channel.delete()
                                                            }, 5000)
                                                          
                                                            msg.channel.send({content: "Esse canal será deletado por inatividade!"})
                                                            msg.delete()
                                                          }
                                                                },60000)
                                                                    
          
                                                                let p12 = channel.createMessageCollector({filter:x => x.author.id == interaction.user.id, max: 1, time: 600000})
                                                                
                                                                .on('collect', c => {

                                                          
                                                                  if(!c.author.id == interaction.user.id) return; 
                                                                  if(c.author.id == interaction.user.id) {

                                                                    i13 += 1
                                                                    p12.stop()
                                                                    let pp12 = c.content
                                                                    if(pp12 == "4") { 
                                                                      exp += 1; 
                                              
                                                                    }
                                                                    let ok = new Discord.MessageEmbed()
                                                                    .setThumbnail(server.iconURL())
                                                                    .setDescription(`Estou verificando suas respostas!\nAguarde só um pouquinho... `)
                                                                    .setTitle(server.name)
                                                                    .setColor("BLUE")
    
                                                                    let ok2 = new Discord.MessageEmbed()
                                                                    .setThumbnail(server.iconURL())
                                                                    .setTitle(server.name)
                                                                    .setColor("BLUE")
                                                                    .setDescription(`Todas as respostas foram registradas com Sucesso! \n\n_Irei te chama-lo para avisa-lo o resultado da sua WL!_`)
                                                                   
                                                                    let enviar = channel.send({embeds: [ok] }).then(msg => {
                                                                      setTimeout( () => {
                                                                          msg.edit({embeds: [ok2] })
                                                                      }, 5000)
                                                                     
                                                                  }).then(m => {
                                                                      setTimeout(() => {
                                                                      
                                                                        channel.delete("Wl finalizada!"); 
                                                              
                                                                        
    
                                                                    if(pts <= exp) {
                                                                      
                                                                      connection.connect((err) => {
                                                                      }); 
                                                                      setInterval(function () {
                                                                        connection.query('SELECT 1'); 
                                                                      }, 5000); 
    
                                                                        connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${id}'`, (err, rows) => { 
                                                                        }); 
    
                                                                      let passou = new Discord.MessageEmbed()
                                                                      .setTitle(title)
                                                                      .setDescription(`
                                                                      User: ${interaction.user}
                                                                      Nome: ${nome}
                                                                      Id: ${id}
                                                                      Acertou: ${exp}
                                                                      Status: **Passou**
                                                                      Resposta 1: ${pp3}
                                                                      Resposta 2: ${pp4}
                                                                      Resposta 3: ${pp5}
                                                                      Resposta 4: ${pp6}
                                                                      Resposta 5: ${pp7}
                                                                      Resposta 6: ${pp8}
                                                                      Resposta 7: ${pp9}
                                                                      Resposta 8: ${pp10}
                                                                      Resposta 9: ${pp11}
                                                                      Resposta 10: ${pp12}`)
                                                                      .setColor("GREEN")
    
                                                                      resultado.send({embeds: [passou]})
    
                                                                      let passougeral = new Discord.MessageEmbed()
                                                                      .setTitle(" APROVADO NA WHITELIST")
                                                                      .setColor("GREEN")
                                                                      .setDescription(`> **Usuario:**\n${interaction.user} / \`${interaction.user.tag}\`\n\n> **Nome do personagem**\n\`\`\`fix\n${nome}\`\`\`\n> **ID no jogo:** \`${id}\`\n\n> **Total de acertos:** \`${exp}\``)
                                                                      .setThumbnail(server.iconURL())
                                                                      .setFooter("Parabens! Você foi aprovado, entre em nossa cidade e tenha um bom RP!")
                                                                      enviarresultado.send({embeds: [passougeral]})
                                  interaction.member.roles.add(cargoaprovado)
                                                                      interaction.member.setNickname(`${nome} | ${id} `)
                                                                      return   interaction.user.send({content: "Você foi aprovado!!! Parabens; "})
                                                                     
                                                                     
                                                                    }                         
                                                                     if(pts > exp) {
                                                                      let reprovou = new Discord.MessageEmbed()
                                                                      .setTitle(title)
                                                                      .setDescription(`
                                                                      User: ${interaction.user}
                                                                      Nome: ${nome}
                                                                      Id: ${id}
                                                                      Acertou: ${exp}
                                                                      Status: **Reprovou**
                                                                      Resposta 1: ${pp3}
                                                                      Resposta 2: ${pp4}
                                                                      Resposta 3: ${pp5}
                                                                      Resposta 4: ${pp6}
                                                                      Resposta 5: ${pp7}
                                                                      Resposta 6: ${pp8}
                                                                      Resposta 7: ${pp9}
                                                                      Resposta 8: ${pp10}
                                                                      Resposta 9: ${pp11}
                                                                      Resposta 10: ${pp12}`)
                                                                      .setColor("RED")
                                                                      let reprovougeral = new Discord.MessageEmbed()
                                                                      .setTitle("REPROVADO NA WHITELIST")
                                                                      .setColor("RED")
                                                                      .setDescription(`> **Usuario:**\n${interaction.user} / \`${interaction.user.tag}\`\n\n> **Nome do personagem**\n\`\`\`fix\n${nome}\`\`\`\n> **ID no jogo:** \`${id}\`\n\n> **Total de acertos:** \`${exp}\`\n> **Motivo:** \n\`Errou muitas perguntas!\``)
                                                                      .setThumbnail(server.iconURL())
                                                                      .setFooter("Infelizmente você foi reprovado,Tente novamente para entrar em nossa cidade!")
                                                                      enviarresultado.send({embeds: [reprovougeral]})
                                                                      resultado.send({embeds: [reprovou]})
    
                                                                      return interaction.user.send({content: "Você foi reprovado, tente novamente!"})
    
                                                                      let
    
    
                                                          
                                                                    }
                                                                  }, 15000) // 1 seconds
                                                                }) 
    
                                                          
                                                                  }
                                                          
                                                                })
                                                                p12                                                          })
                                                    
                                                            }
                                                    
                                                          })
                                                          p11                                                    })
                                              
                                                      }
                                              
                                                    })
                                                    p10                                              })
                                        
                                                }
                                        
                                              })
                                              p9                                        })
                                        
                                                }
                                        
                                              })
                                              p8                                        })
                                  
                                          }
                                  
                                        })
                                        p7                                  })
                                  
                                          }
                                  
                                        })
                                        p6                                  })
                            
                                    }
                            
                                  })
                                  p5                            })
                      
                              }
                      
                            })
                            p4                      })
                
                        }
                
                      })
                      
                    })
          
                  }
          
                })
                p2          })
            }
    
          })
    
        })
      
    
            }
    
          }
        })
       
            
            
      })
        
      })
    }

        }
      })


      process.on('unhandledRejection', (reason, p) => {
        console.log(' [ ANTICLASH ] | SCRIPT REJEITADO'); 
        console.log(reason, p); 
    }); 



    process.on("uncaughtException", (err, origin) => {
        console.log(' [ ANTICLASH] | CATCH ERROR'); 
        console.log(err, origin); 
    }) 



    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(' [ ANTICLASH ] | BLOQUEADO'); 
        console.log(err, origin); 
    }); 


    process.on('multipleResolves', (type, promise, reason) => {
        console.log(' [ ANTICLASH ] | VÁRIOS ERROS'); 
        console.log(type, promise, reason); 
    }); 