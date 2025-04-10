console.log("Documento carregado?", document.readyState);
console.log("Elemento nome-musica existe?", document.getElementById("nome-musica") !== null);

// Elementos do player
const musicas = document.getElementById("musicas");
const botaoMusica = document.getElementById("botao-musica");
const botaoAnterior = document.getElementById("botao-anterior");
const botaoProxima = document.getElementById("botao-proxima");
const botaoShuffle = document.getElementById("botao-shuffle");
const contadorMusica = document.getElementById("contador-musica");

// 🎶 Playlist (adicione quantas quiser)
const playlist = [
    "musicas/1.Soul Eater - Resonance [8-Bit].mp3",
    "musicas/2.Stella's Departure  8 Bit Song Covers  Original from Spiritfarer  8 Bit Game Music.mp3",
    "musicas/3.8bits of Fairy Tail 5th opening.mp3",
    "musicas/4.Fairy Tail Opening 1 Snow Fairy.mp3",
    "musicas/5.「8bit  Chiptune」Black Clover Opening 10 Black Catcher by Vickeblanka.mp3",
    "musicas/6.This Game [CHIPTUNE].mp3",
    "musicas/7.JoJo's Bizarre Adventure Opening 2 - Bloody Stream [8-bit; 2A03] [16-bit; Genesis].mp3",
    "musicas/8.Black Paper Moon [Chiptune] - Soul Eater Op 2.mp3",
    "musicas/9.Hohoemi no Bakudan [Chiptune] - Yuyu Hakusho OP.mp3",
    "musicas/10.One Piece - We Are! 8-Bit.mp3",
    "musicas/11.Racionais.8bit.mp3",
    "musicas/12.Soviet Union National Anthem 8-bit Remix (25%Osc).mp3",
    "musicas/13.『 8 Bit 』Black Clover Opening 3  Black Rover by Vickeblanka『Chiptune』.mp3",
    "musicas/14.Top Gear Sound Theme (HQ Audio) Tema de TopGear.mp3",
    "musicas/15.Five Nights at Freddy's - 8 Bit lofi Hip Hop.mp3",
    "musicas/16.Mega Man 2 - Dr. Wily's Castle.mp3",
    "musicas/17.Honkai Star Rail - Sparkle's Theme (Monodrama) (8 Bit Cover).mp3",
    "musicas/18.CRY FOR ME, TWICE - Videogame Style.mp3",
    "musicas/19.HOLD ON TIGHT, aespa - Videogame Ver..mp3",
    "musicas/20.KILL THIS LOVE, BLACKPINK - Videogame Style.mp3",
    "musicas/21.GOD'S MENU, Stray Kids - Videogame Style.mp3",
    "musicas/22.SUPER SHY, NewJeans - Videogame Ver..mp3",
    "musicas/23.WHAT IS LOVE, Twice - 8 bits.mp3",
    "musicas/24.『 8 Bit 』Jujutsu Kaisen Season 2 Opening 2  「SPECIALZ」by King Gnu『Chiptune』.mp3",
    "musicas/25.『 8 Bit 』Jujutsu Kaisen Season 2 Opening   Ao No Sumika ( REMAKE.ver ) 『Chiptune』.mp3",
    "musicas/26.【 8Bit  Chiptune 】Puella Magi Madoka Magica Opening   Connect by Claris.mp3",
    "musicas/27.Shangri-La Frontier Opening 【8 Bit Cover】.mp3",
    "musicas/28.Radiohead - Nude (8 bit).mp3",
    "musicas/29.Radiohead - Jigsaw Falling Into Place (8 bit).mp3",
    "musicas/30.Radiohead - Exit Music (For a Film) (8 bit).mp3",
    "musicas/31.千本桜  - Senbonzakura 【8bit】【chiptune】【vocaloid cover】.mp3",
    "musicas/32.Ievan Polkka 8-Bit Chiptune.mp3",
    "musicas/33.[#8bit] Lagtrain inabakumori [#Chiptune RemixCover] #inabakumori.mp3",
    "musicas/34.Sis Puella Magica! [8-bit; N163] [Chiptune Cover].mp3",
    "musicas/35.「8bit  Chiptune」DAN DA DAN  Opening Otonoke by Creepy Nuts.mp3",
    "musicas/36.「8bitChiptune」( If I could be a constellation ) Bocchi the Rock! EP.12 OST Cover.mp3",
    "musicas/37.Frieren Beyond Journey's End OP  Yuusha - YOASOBI 【8 Bit Cover】.mp3",
    "musicas/38.Ma Meilleure Ennemie (8 BIT COVER)  EKKO and Jinx Song Dance.mp3",
    "musicas/39.Chainsaw Man - #4 Ending  Tablet (Jozai) - TOOBOE.mp3",
    "musicas/40.[#8bit] The Apothecary Diaries  Be a flower - Ryokuoushoku Shakai [#Chiptune RemixCover].mp3",
    "musicas/41.[#8bit] Frieren Beyond Journey's End  YUSHA(Brave) YOASOBI [#Chiptune RemixCover  #Frieren].mp3",
    "musicas/42.[#8bit] Genshin Impact - Fontaine Battle  Lamentation et Triomphe [#Chiptune RemixCover].mp3",
    "musicas/43.[#8bit] Genshin Impact - Fontaine Battle  Rondeau des fleurs et des rapieres [#Chiptune Remix].mp3",
    "musicas/44.Fairy Tail Opening 23 [8-Bit; VRC6]  - Power of the Dream.mp3",
    "musicas/45.ILLIT (아일릿) 'Tick-Tack' - Videogame Ver..mp3",
    "musicas/46.「8bit」Solo Leveling Season 2 Opening  ReawakeR 「Chiptune」.mp3",
    "musicas/47.「8bit」Sword Art Online II OP 1  IGNITE.mp3",
    "musicas/48.WHIPLASH, aespa 에스파 - Videogame Ver..mp3",
    "musicas/49.Dan Da Dan ED  TAIDADA [ 8-Bit; VRC6Chiptune ].mp3",
    "musicas/50.「8bit  Chiptune」Shangri-La Frontier S2  Opening QUEEN by LiSA.mp3",
    "musicas/51.「8bit  Chiptune」My Hero Academia Season 7 - Opening 2 Curtain Call by YUURI.mp3",
    "musicas/52.BEAT 8BIT RITMADO 🕹️ - Your Love Is My Drug - Viral do Tiktok (FUNK REMIX) by Canal Sr. Nescau.mp3",
    "musicas/53.[#8bit] Persona 3 Reload  It's Going Down Now [#Chiptune RemixCover  #Persona3Reload].mp3",
    "musicas/54.【8bit】That Time I Got Reincarnated as a Slime S3 OP『PEACEKEEPER』- STEREO DIVE FOUNDATION【Chiptune】.mp3",
    "musicas/55.【8bit】Demon Slayer Season 4 Opening   MUGEN  - MY FIRST STORY × HYDE  【Chiptune】.mp3",
    "musicas/56.[#8bit] Oshi no Ko - Opening  Idol - YOASOBI [#Chiptune Remix  Cover].mp3",
    "musicas/57.【8bit】Haikyuu!! Opening 6   PHOENIX  - BURNOUT SYNDROMES 【Chiptune】.mp3",
    "musicas/58.【8bit】Kaiju No. 8 Opening  Abyss - YUNGBLUD【Chiptune】.mp3",
    "musicas/59.【8bit】Minor Piece - ZAQ [ Classroom Of The Elite Season 3 OP ]【Chiptune】.mp3",
    "musicas/60.[#8bit] Denki Yohou - inabakumori [#Chiptune RemixCover  #inabakumori].mp3",
    "musicas/61.【8 Bit】Ambivalent [ The Apothecary Diaries OP 2 ]【Chiptune】.mp3",
    "musicas/62.[8bit] Pokémon Scarlet and Violet  Gym Leader Battle Theme (All Phases) [Chiptune Cover Remix].mp3",
    "musicas/63.(8bit) ELDEN RING - Main Theme  Short Version (Chiptune Cover).mp3",
    "musicas/64.[8bit] Call of the Night (Yofukashi no Uta) - Opening  Daten - Creepy Nuts [Chiptune Cover].mp3",
    "musicas/65.[8bit] Pokémon Scarlet and Violet  Iono's Theme [Chiptune Cover].mp3",
    "musicas/66.[#8bit] Chainsaw Man _ Opening  KICK BACK Kenshi Yonezu [#Chiptune CoverRemix, #ChainsawMan].mp3",
    "musicas/67.Sonny Boy - Theme Song - SHONEN SHOUJO  (8bit  Chiptune Cover).mp3",
    "musicas/68.Bring Me the Horizon - STRANGERS  Chiptune Cover.mp3",
    "musicas/69.[8bit] Overlord IV - Opening  HOLLOW HUNGER - OxT [Chiptune Cover].mp3",
    "musicas/70.(8bit) STONE OCEAN - JoJo's Bizarre Adventure Part 6 - OP  STONE OCEAN - ichigo (Chiptune Cover).mp3",
    "musicas/71.Måneskin - I WANNA BE YOUR SLAVE ♬Chiptune Cover♬.mp3",
    "musicas/72.Blue Period - OP song  EVERBLUE Omoinotake (8bit  Chiptune Cover).mp3",
    "musicas/73.【8 Bit】Haru (Sunny) [ Frieren Beyond Journey's End OP 2 ]【Chiptune】.mp3",
    "musicas/74.【8 Bit】Bling-Bang-Bang-Born [ Mashle Magic and Muscles Opening 2 ]【Chiptune】.mp3",
    "musicas/75.Michael Jackson - Smooth Criminal ♬Chiptune Cover♬.mp3",
    "musicas/76.Water Level Music 🌊🕹️ - Sunken Heart City.mp3",
    "musicas/77.Skillet - Monster (8 bit).mp3",
    "musicas/78.Stardew Valley Inspired Music 👨‍🌾 - Farming Fever.mp3",
    "musicas/79.Nirvana - Come As You Are (8 bit Remix).mp3",
    "musicas/80.BABYMETAL - Megitsune (8 bit Remix).mp3",
    "musicas/81.16 Bit Music 🕹️ - Stand My Ground.mp3",
    "musicas/82.16 Bit Music 🕹️ - Its Not Game Over Yet.mp3",
    "musicas/83.Linkin Park - Numb (8 bit Remix).mp3",
    "musicas/84.Linkin Park - Papercut (8 bit).mp3"
];

// Estado do player
let indexAtual = 0;
let shuffleAtivado = false;
let playerIniciado = false;

// Funções do player
function atualizarBotoes() {
    botaoMusica.textContent = musicas.paused ? "▶️" : "⏸";
    botaoShuffle.classList.toggle('ativo', shuffleAtivado);
    botaoShuffle.style.color = shuffleAtivado ? "#05C7F2" : "white";
}

function formatarNomeMusica(nomeArquivo) {
    return nomeArquivo
        .split('/').pop()
        .replace('.mp3', '')
        .replace(/^\d+\./, '')
        .replace(/\[.*?\]/g, '')
        .replace(/\(.*?\)/g, '')
        .replace(/\s+/g, ' ')
        .trim();
}

function mostrarNotificacao(mensagem, tempo = 2000) {
    const notificacao = document.createElement('div');
    notificacao.textContent = mensagem;
    notificacao.style.position = 'fixed';
    notificacao.style.bottom = '80px';
    notificacao.style.right = '20px';
    notificacao.style.backgroundColor = '#333';
    notificacao.style.color = '#fff';
    notificacao.style.padding = '10px 15px';
    notificacao.style.borderRadius = '20px';
    notificacao.style.zIndex = '10000';
    notificacao.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
    notificacao.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(notificacao);
    
    setTimeout(() => {
        notificacao.style.animation = 'fadeOut 0.3s';
        setTimeout(() => document.body.removeChild(notificacao), 300);
    }, tempo);
}

function carregarMusica(index, forcarPlay = false) {
  if (index < 0 || index >= playlist.length) return;
  
  indexAtual = index;
  const musicaAtual = playlist[indexAtual];
  
  try {
      // Atualiza contador
      contadorMusica.textContent = `${indexAtual + 1}/${playlist.length}`;
      
      // Formata e mostra nome da música
      const nomeFormatado = formatarNomeMusica(musicaAtual);
      mostrarNotificacao(`🎵 ${nomeFormatado}`);
      
      // Configura áudio
      musicas.src = musicaAtual;
      musicas.load();
      
      // Se for para forçar play (quando já iniciado) ou se for o primeiro play
      if (forcarPlay || !playerIniciado) {
          musicas.play()
              .then(() => {
                  playerIniciado = true;
                  atualizarBotoes();
              })
              .catch(e => console.error("Erro ao reproduzir:", e));
      }
  } catch (error) {
      console.error("Erro ao carregar música:", error);
      contadorMusica.textContent = "Erro";
  }
}

function toggleMusica() {
  if (musicas.paused) {
      if (!playerIniciado) {
          // Primeira vez que está sendo iniciado
          carregarMusica(indexAtual, true); // Força play
      } else {
          musicas.play().catch(e => console.error("Erro ao reproduzir:", e));
      }
  } else {
      musicas.pause();
  }
  atualizarBotoes();
}

function proximaMusica() {
  const novoIndex = shuffleAtivado ? 
      Math.floor(Math.random() * playlist.length) : 
      (indexAtual + 1) % playlist.length;
  carregarMusica(novoIndex, playerIniciado); // Força play se já iniciado
}

function musicaAnterior() {
  const novoIndex = shuffleAtivado ?
      Math.floor(Math.random() * playlist.length) :
      (indexAtual - 1 + playlist.length) % playlist.length;
  carregarMusica(novoIndex, playerIniciado); // Força play se já iniciado
}

function toggleShuffle() {
    shuffleAtivado = !shuffleAtivado;
    mostrarNotificacao(shuffleAtivado ? "🔀 Shuffle ativado" : "▶️ Ordem normal");
    atualizarBotoes();
}

// Event listeners
botaoMusica.addEventListener("click", toggleMusica);
botaoProxima.addEventListener("click", proximaMusica);
botaoAnterior.addEventListener("click", musicaAnterior);
botaoShuffle.addEventListener("click", toggleShuffle);
musicas.addEventListener("ended", proximaMusica);

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    musicas.volume = 0.5;
    contadorMusica.textContent = `0/${playlist.length}`;
    
    // Verificação de elementos
    if (!musicas || !contadorMusica) {
        console.error("Elementos essenciais não encontrados!");
        return;
    }
});