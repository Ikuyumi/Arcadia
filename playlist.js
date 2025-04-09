// 🎵 Variáveis principais
const musica = document.getElementById("musica");
const botao = document.getElementById("botao-musica");

// 🎶 Playlist (adicione quantas quiser)
const playlist = [
    "musicas/1.Soul Eater - Resonance [8-Bit].mp3",
    "musicas/2.Stella's Departure  8 Bit Song Covers  Original from Spiritfarer  8 Bit Game Music.mp3",
    "musicas/3.8bits of Fairy Tail 5th opening.mp3",
    "musicas/4.Fairy Tail Opening 1 - Snow Fairy (8bit)",
    "musicas/5.「8bit  Chiptune」Black Clover Opening 10 Black Catcher by Vickeblanka",
    "musicas/6.This Game [CHIPTUNE]",
    "musicas/7.JoJo's Bizarre Adventure Opening 2 - Bloody Stream [8-bit; 2A03] [16-bit; Genesis]",
    "musicas/8.Black Paper Moon [Chiptune] - Soul Eater Op 2",
    "musicas/9.Hohoemi no Bakudan [Chiptune] - Yuyu Hakusho OP",
    "musicas/10.One Piece - We Are! 8-Bit",
    "musicas/11.Racionais.8bit",
    "musicas/12.Soviet Union National Anthem 8-bit Remix (25%Osc)",
    "musicas/13.『 8 Bit 』Black Clover Opening 3  Black Rover by Vickeblanka『Chiptune』",
    "musicas/14.Top Gear Sound Theme (HQ Audio) Tema de TopGear",
    "musicas/15.Five Nights at Freddy's - 8 Bit lofi Hip Hop",
    "musicas/16.Mega Man 2 - Dr. Wily's Castle",
    "musicas/17.Honkai Star Rail - Sparkle's Theme (Monodrama) (8 Bit Cover)",
    "musicas/18.CRY FOR ME, TWICE - Videogame Style",
    "musicas/19.HOLD ON TIGHT, aespa - Videogame Ver.",
    "musicas/20.KILL THIS LOVE, BLACKPINK - Videogame Style",
    "musicas/21.GOD'S MENU, Stray Kids - Videogame Style",
    "musicas/22.SUPER SHY, NewJeans - Videogame Ver.",
    "musicas/23.WHAT IS LOVE, Twice - 8 bits",
    "musicas/24.『 8 Bit 』Jujutsu Kaisen Season 2 Opening 2  「SPECIALZ」by King Gnu『Chiptune』",
    "musicas/25.『 8 Bit 』Jujutsu Kaisen Season 2 Opening   Ao No Sumika ( REMAKE.ver ) 『Chiptune』",
    "musicas/26.【 8Bit  Chiptune 】Puella Magi Madoka Magica Opening   Connect by Claris",
    "musicas/27.Shangri-La Frontier Opening 【8 Bit Cover】",
    "musicas/28.Radiohead - Nude (8 bit)",
    "musicas/29.Radiohead - Jigsaw Falling Into Place (8 bit)",
    "musicas/30.Radiohead - Exit Music (For a Film) (8 bit)",
    "musicas/31.千本桜  - Senbonzakura 【8bit】【chiptune】【vocaloid cover】",
    "musicas/32.Ievan Polkka 8-Bit Chiptune",
    "musicas/33.[#8bit] Lagtrain inabakumori [#Chiptune RemixCover] #inabakumori",
    "musicas/34.Sis Puella Magica! [8-bit; N163] [Chiptune Cover]",
    "musicas/35.「8bit  Chiptune」DAN DA DAN  Opening Otonoke by Creepy Nuts",
    "musicas/36.「8bitChiptune」( If I could be a constellation ) Bocchi the Rock! EP.12 OST Cover",
    "musicas/37.Frieren Beyond Journey's End OP  Yuusha - YOASOBI 【8 Bit Cover】",
    "musicas/38.Ma Meilleure Ennemie (8 BIT COVER)  EKKO and Jinx Song Dance",
    "musicas/39.[8bit] Chainsaw Man - #4 Ending  Tablet (Jozai) - TOOBOE [Chiptune Cover]",
    "musicas/40.[#8bit] The Apothecary Diaries  Be a flower - Ryokuoushoku Shakai [#Chiptune RemixCover]",
    "musicas/41.[#8bit] Frieren Beyond Journey's End  YUSHA(Brave) YOASOBI [#Chiptune RemixCover  #Frieren]",
    "musicas/42.[#8bit] Genshin Impact - Fontaine Battle  Lamentation et Triomphe [#Chiptune RemixCover]",
    "musicas/43.[#8bit] Genshin Impact - Fontaine Battle  Rondeau des fleurs et des rapieres [#Chiptune Remix]",
    "musicas/44.Fairy Tail Opening 23 [8-Bit; VRC6]  - Power of the Dream",
    "musicas/45.ILLIT (아일릿) 'Tick-Tack' - Videogame Ver.",
    "musicas/46.「8bit」Solo Leveling Season 2 Opening  ReawakeR 「Chiptune」",
    "musicas/47.「8bit」Sword Art Online II OP 1  IGNITE",
    "musicas/48.WHIPLASH, aespa 에스파 - Videogame Ver.",
    "musicas/49.Dan Da Dan ED  TAIDADA [ 8-Bit; VRC6Chiptune ]",
    "musicas/50.「8bit  Chiptune」Shangri-La Frontier S2  Opening QUEEN by LiSA",
    "musicas/51.「8bit  Chiptune」My Hero Academia Season 7 - Opening 2 Curtain Call by YUURI",
    "musicas/52.BEAT 8BIT RITMADO 🕹️ - Your Love Is My Drug - Viral do Tiktok (FUNK REMIX) by Canal Sr. Nescau",
    "musicas/53.[#8bit] Persona 3 Reload  It's Going Down Now [#Chiptune RemixCover  #Persona3Reload]",
    "musicas/54.【8bit】That Time I Got Reincarnated as a Slime S3 OP『PEACEKEEPER』- STEREO DIVE FOUNDATION【Chiptune】",
    "musicas/55.【8bit】Demon Slayer Season 4 Opening   MUGEN  - MY FIRST STORY × HYDE  【Chiptune】",
    "musicas/56.[#8bit] Oshi no Ko - Opening  Idol - YOASOBI [#Chiptune Remix  Cover]",
    "musicas/57.【8bit】Haikyuu!! Opening 6   PHOENIX  - BURNOUT SYNDROMES 【Chiptune】",
    "musicas/58.【8bit】Kaiju No. 8 Opening  Abyss - YUNGBLUD【Chiptune】",
    "musicas/59.【8bit】Minor Piece - ZAQ [ Classroom Of The Elite Season 3 OP ]【Chiptune】",
    "musicas/60.[#8bit] Denki Yohou - inabakumori [#Chiptune RemixCover  #inabakumori]",
    "musicas/61.【8 Bit】Ambivalent [ The Apothecary Diaries OP 2 ]【Chiptune】",
    "musicas/62.[8bit] Pokémon Scarlet and Violet  Gym Leader Battle Theme (All Phases) [Chiptune Cover Remix]",
    "musicas/63.(8bit) ELDEN RING - Main Theme  Short Version (Chiptune Cover)",
    "musicas/64.[8bit] Call of the Night (Yofukashi no Uta) - Opening  Daten - Creepy Nuts [Chiptune Cover]",
    "musicas/65.[8bit] Pokémon Scarlet and Violet  Iono's Theme [Chiptune Cover]",
    "musicas/66.[#8bit] Chainsaw Man _ Opening  KICK BACK Kenshi Yonezu [#Chiptune CoverRemix, #ChainsawMan]",
    "musicas/67.Sonny Boy - Theme Song - SHONEN SHOUJO  (8bit  Chiptune Cover)",
    "musicas/68.Bring Me the Horizon - STRANGERS  Chiptune Cover",
    "musicas/69.[8bit] Overlord IV - Opening  HOLLOW HUNGER - OxT [Chiptune Cover]",
    "musicas/70.(8bit) STONE OCEAN - JoJo's Bizarre Adventure Part 6 - OP  STONE OCEAN - ichigo (Chiptune Cover)",
    "musicas/71.Måneskin - I WANNA BE YOUR SLAVE ♬Chiptune Cover♬",
    "musicas/72.Blue Period - OP song  EVERBLUE Omoinotake (8bit  Chiptune Cover)",
    "musicas/73.【8 Bit】Haru (Sunny) [ Frieren Beyond Journey's End OP 2 ]【Chiptune】",
    "musicas/74.【8 Bit】Bling-Bang-Bang-Born [ Mashle Magic and Muscles Opening 2 ]【Chiptune】",
    "musicas/75.Michael Jackson - Smooth Criminal ♬Chiptune Cover♬",
    "musicas/76.Water Level Music 🌊🕹️ - Sunken Heart City",
    "musicas/77.Skillet - Monster (8 bit)",
    "musicas/78.Stardew Valley Inspired Music 👨‍🌾 - Farming Fever",
    "musicas/79.Nirvana - Come As You Are (8 bit Remix)",
    "musicas/80.BABYMETAL - Megitsune (8 bit Remix)",
    "musicas/81.16 Bit Music 🕹️ - Stand My Ground",
    "musicas/82.16 Bit Music 🕹️ - Its Not Game Over Yet",
    "musicas/83.Linkin Park - Numb (8 bit Remix)",
    "musicas/84.Linkin Park - Papercut (8 bit)"
];

const musicas = document.getElementById("musicas");
let indexAtual = 0;

let shuffleAtivado = false;

function toggleShuffle() {
    shuffleAtivado = !shuffleAtivado;
    console.log("Shuffle", shuffleAtivado ? "ativado" : "desativado");
  }
  

  function toggleMusica() {
    // Se a música não foi carregada ainda ou é diferente da atual
    if (!musicas.src || !musicas.src.endsWith(playlist[indexAtual])) {
      musicas.src = playlist[indexAtual];
    }
  
    if (!musicas.paused && !musicas.ended) {
      musicas.pause();
    } else {
      musicas.play().catch((error) => {
        console.error("Erro ao tentar tocar a música:", error);
      });
    }
  }

// Quando uma música termina, avança pra próxima
musicas.addEventListener("ended", () => {
  if (shuffleAtivado) {
    let novoIndex;
    do {
      novoIndex = Math.floor(Math.random() * playlist.length);
    } while (novoIndex === indexAtual && playlist.length > 1);
    indexAtual = novoIndex;
  } else {
    indexAtual = (indexAtual + 1) % playlist.length;
  }

  musicas.src = playlist[indexAtual];
  musicas.play();
});

botao.addEventListener("click", toggleMusica);