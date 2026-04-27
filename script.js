const players = [
  {
    name: "ふぇぐ",
    image: "Images/ふぇぐ.jpg",
    bio: `実績
・最終ビヨ5回(最高26位)
・WGP2018 優勝
・RSPL 19-20 1st season 優勝`,
    twitter: "https://x.com/feeeeeeeeeg",
    youtube: "https://t.co/EuD6kCduSU",
    note:"https://note.com/feeeeeeeeeg"
  },
  {
    name: "じゅなん",
    image: "Images/じゅなん.jpg",
    bio: `実績
    ・RAGE Japan Championship 優勝
    ・ECS福岡 ベスト16
    ・RAGE 2023 Spring PO決勝`
,
    twitter: "https://x.com/junan_64",
    youtube: "https://t.co/9OK5jILYd7",
    note:"https://note.com/isolate1994"
  },
  {
    name: "Beita",
    image: "Images/beita.jpg",
    bio: `実績
    ・最終ビヨ2回(最高20位)
    ・RAGE 2023 Summer ベスト8
    ・第21回 レート杯 優勝
    ・Shadowverse KoreaOpen 2026 GF進出`,
    twitter: "https://x.com/eunggeon",
    youtube: "",
    note:"https://note.com/eunggeon"
  },
  {
    name: "Hirobosu",
    image: "Images/hirobosu.jpg",
    bio: `実績
    ・最終ビヨ11回(5位以内1回)
    ・RAGE 2024 Summer ベスト4
    ・OCS 2025 August ベスト4
    ・JCS 2025 PO進出`,
    twitter: "https://x.com/hirobosu_sv",
    youtube: "https://t.co/k2hajyNUwU"
  },
  {
    name: "kt",
    image: "Images/kt.jpg",
    bio: `実績
    ・最終ビヨ8回(5位以内3回)
    ・JCG優勝 1回
    ・JCG準優勝 1回`,
    twitter: "https://x.com/kt__sv",
    youtube: "",
    note: "https://t.co/kFcciQtBJr"
  },
  {
    name: "MingiGod",
    image: "Images/Mingi.jpg",
    bio: `実績
    ・最終ビヨ4回(5位以内1回)
    →最終1位(絶傑の後継者前半R)
    ・WGP2021 ベスト4
    ・WGP2018 14位`,
    twitter: "https://x.com/minimin_sv",
    youtube: "https://t.co/59w2TGY013",
    note:"https://note.com/mingi_god"
  },
  {
    name: "まっつ",
    image: "Images/まっつ.jpg",
    bio: `実績
    ・最終ビヨ12回(5位以内1回)
    ・RSPL 20-21 優勝
    ・RAGE 2023 Winter ベスト8
    ・ECS北海道 ベスト8`,
    twitter: "https://x.com/mattsu__sv",
    youtube: "https://t.co/z8swApD0Z2"
  },
  {
    name: "Ryu",
    image: "Images/Ryu.jpg",
    bio: `実績
    ・最終ビヨ6回(5位以内1回)
    ・RAGE 2023 Spring 優勝
    ・RAGE 2021 Autumn ベスト8
    ・MPランキング覇者 2回`,
    twitter: "https://x.com/darkness_mare",
    youtube: "https://t.co/a0rhk5zGPJ",
    note:"https://note.com/darkness_mare"
  },
  {
    name: "夢都(むと)",
    image: "Images/夢都.jpg",
    bio: `実績
    ・最終ビヨ2回(最高4位)
    →CR2300↑(絶傑の継承者前半Ni)
    ・MPランキング
    ・YouTubeで企画多数実施`,
    twitter: "https://x.com/hieroglyph459",
    youtube: "https://t.co/WmnbaJlHLD",
    note:"https://note.com/hieroglyph"
  },
  {
    name: "セシリア",
    image: "Images/セシリア.jpg",
    bio: `実績
    ・最終ビヨ7回(最高12位)
    ・RAGE 2024 Spring 準優勝
    ・RAGE 2024 Summer PO決勝
    ・GrandMasterFinal 2023 入賞 `,
    twitter: "https://x.com/THE_FOOL_HERO",
    youtube: "https://t.co/s3zpNrqHAX"
  },
  {
    name: "Bene",
    image: "Images/Bene.jpg",
    bio: `実績
    ・最終ビヨ2回(最高31位)
    ・ECS宮城 PO進出
    ・CT神奈川 準優勝`,
    twitter: "https://x.com/Bene_88_swb",
    youtube: ""
  },
  {
    name: "ねむる",
    image: "Images/ねむる.jpg",
    bio: `実績
    ・OCS November 優勝
    ・WGP 2025 PO進出
    ・JCS 2025 Day2進出`,
    twitter: "https://x.com/numuramen2323",
    youtube: ""
  },
  {
    name: "Axis",
    image: "Images/Axis.jpg",
    bio: `実績
    ・CR複数 2000↑
    ・Ratings第13回後半戦1位
    ・JCG準優勝 4回`,
    twitter: "https://x.com/Axis0415sv",
    youtube: "",
    note:"https://t.co/6xxEbBv3Od",
    twitch:"https://t.co/30SkE1La7b"
  },
   {
    name: "かもめ",
    image: "Images/かもめ.jpg",
    bio: `実績
    ・最強チーム決定戦 準優勝
    ・RAGE 2023 Summer ベスト8
    ・RAGE JCS 2025 PO進出
    ・Ratings 1位 2回(19期後半・22期前半) `,
    twitter: "https://x.com/FxvJcv",
    youtube: "",
    note:"https://note.com/uuu_kamokamo",
    twitch:""
  },
  {
    name: "ねぎま",
    image: "Images/ねぎま.jpg",
    bio: `実績
    ・RAGE 2020 Spring 優勝
    ・RAGE 2022 Winter ベスト8
    ・WGP2021 準優勝
    ・レート杯出場 4回`,
    twitter: "https://x.com/leek2060",
    youtube: "https://t.co/wJENAeHbDH",
    note:"",
    twitch:""
  },
  {
    name: "Utatomo",
    image: "Images/Utatomo.jpg",
    bio: `実績
    ・最終ビヨ 2回(最高27位)
    ・JCS2025 ベスト8
    ・最強チーム決定戦 福岡予選 優勝
    ・レート杯出場 3回
    `,
    twitter: "https://x.com/FxvJcv",
    youtube: "",
    note:"https://note.com/uuu_kamokamo",
    twitch:""
  },
  {
    name: "ぼーいん",
    image: "Images/ぼーいん.jpg",
    bio: `実績
    ・最強チーム決定戦 準優勝
    ・RAGE 2023 Summer ベスト8
    ・RAGE JCS 2025 PO進出
    ・Ratings 1位 2回(19期後半・22期前半)
    `,
    twitter: "https://x.com/utatomo_sv",
    youtube: "https://t.co/neeiGrrehJ",
    note:"",
    twitch:""
  },
  {
    name: "つきあかめん",
    image: "Images/つきあかめん.jpg",
    bio: `実績
    ・最終ビヨ1回(最高58位)
    ・瞬間1位達成多数(AFでも)
    ・JCS2025 PO進出 
    ・YouTube登録者6000人↑
    メモ
    `,
    twitter: "https://x.com/tsukiakamen",
    youtube: "https://t.co/s1Lh20WoZ6",
    note:"",
    twitch:""
  },
  {
    name: "チャッピー",
    image: "Images/チャッピー.jpg",
    bio: `実績
    ・最終ビヨ26回(5位以内1回)
    →取得回数全体4位
    ・全ビヨ達成(蒼空の六龍後半)
    ・JCS2026 PO進出 
    `,
    twitter: "https://x.com/chappy_106",
    youtube: "",
    note:"",
    twitch:"https://t.co/M2ZIFfGQ1t"
  },
  {
    name: "さくさくぱんだ",
    image: "Images/さくさくぱんだ.jpg",
    bio: `実績
    ・最終ビヨ3回(5位以内2回)
    ・ガクシャドGF 優勝
    ・ガチ億エキシビションマッチ 優勝
    `,
    twitter: "https://x.com/sakura_hf_",
    youtube: "https://t.co/4VEjj4QpnM",
    note:"https://t.co/U6Jdyq3QJm",
    twitch:""
  },
       {
    name: "へるん",
    image: "Images/へるん.jpg",
    bio: `実績
    ・最終ビヨ1回(最高69位)
    ・RAGE 2018 Winter 優勝
    ・RAGE PO進出 4回
    ・レート杯出場 4回
    `,
    twitter: "https://x.com/sv_hern",
    youtube: "https://t.co/LZfTCbj4em",
    note:"https://t.co/nSI9RbKzGb",
    twitch:""
  },
       {
    name: "アレクサンダー@YouTuber",
    image: "Images/アレクサンダー.jpg",
    bio: `実績
    ・CT千葉・静岡 3位
    ・JCS2026 Day2進出
    ・XやYT上での発信多数
    `,
    twitter: "https://x.com/alexander_svwb",
    youtube: "https://t.co/Ay4Rk0HHLn",
    note:"",
    twitch:""
  },
       {
    name: "ナツ",
    image: "Images/ナツ.jpg",
    bio: `実績
    ・最終ビヨ1回(最高61位)
    ・ガクシャド2025 3rd season チーム戦優勝
    →個人戦優勝・チーム戦全勝
    ・ガクシャド チーム戦GF2025 準優勝
    `,
    twitter: "https://x.com/karamelnuts",
    youtube: "https://t.co/dKaiXTKKRb",
    note:"",
    twitch:""
  },
       {
    name: "COM*",
    image: "Images/COM.jpg",
    bio: `実績
    ・最終ビヨ2回(最高6位)
    ・RAGE 2023 Autumn ベスト8
    ・ECS PO進出 2回
    ・WCS 2025出場(ポケモン)
    `,
    twitter: "https://x.com/com_maipm",
    youtube: "",
    note:"https://note.com/com_maipm",
    twitch:""
  },
       {
    name: "めいす",
    image: "Images/めいす.jpg",
    bio: `実績
    ・最終ビヨ1回(最高65位)
    ・ECS 大阪 PO進出
    ・レート杯優勝(2Pick7期)
    ・元RSPLプロ 
    `,
    twitter: "https://x.com/Satans_servant_",
    youtube: "https://t.co/cx1LDOZLja",
    note:"",
    twitch:""
  },
       {
    name: "UMA",
    image: "Images/UMA.jpg",
    bio: `実績
    ・RAGE 2019 Summer ベスト8
    ・JCG 優勝 2回
    ・ECS 福岡 PO進出
    `,
    twitter: "https://x.com/uma_sv_msv",
    youtube: "",
    note:"",
    twitch:""
  },
       {
    name: "nico",
    image: "Images/nico.jpg",
    bio: `実績
    ・最終ビヨ5回(最高23位)
    ・JCG 優勝3回
    ・RAGE マネフィ 2回
    ・レート杯出場 2回
    `,
    twitter: "https://x.com/nico_02020202",
    youtube: "https://t.co/ZJFnhPFseV",
    note:"",
    twitch:""
  },
       {
    name: "seiru",
    image: "Images/seiru.jpg",
    bio: `実績
    ・最終ビヨ6回(5位以内1回)
    ・RAGE 2019 Autumn PO進出
    ・JCG 15th season 優勝
    `,
    twitter: "https://x.com/_seiru",
    youtube: "https://t.co/yYK6F9gWJ1",
    note:"https://t.co/FvwmdHOfeM",
    twitch:""
  },
       {
    name: "もっちゃま",
    image: "Images/もっちゃま.jpg",
    bio: `実績
    ・最終ビヨ1回(最高75位)
    ・YouTube登録者5000人↑
    `,
    twitter: "https://x.com/mocha__mochama",
    youtube: "https://t.co/ktii4Kjn8F",
    note:"",
    twitch:""
  },
];

let currentPage = 1;

function initials(name) {
  const clean = [...name.replace(/[\s\(\)・。、]/g, '')];
  if (!clean.length) return '?';
  if (clean.length === 1) return clean[0].toUpperCase();
  return (clean[0] + clean[clean.length - 1]).toUpperCase();
}

function render() {
  const grid = document.getElementById('grid');
  const itemsPerPage = window.innerWidth <= 768 ? 10 : 20;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const list = players.slice(startIndex, startIndex + itemsPerPage);

  document.getElementById('result-bar').innerHTML =
    `Showing <strong>${players.length}</strong> members`;

  grid.innerHTML = list.map((p, i) => {
    const idx = players.indexOf(p);
    const avatarContent = p.image
      ? `<img src="${p.image}" alt="${p.name}">`
      : initials(p.name);

    return `<div class="player-card"
              style="animation-delay:${i * 18}ms"
              onclick="openModal(${idx})">
            <div class="player-avatar">${avatarContent}</div>
            <div class="player-name">${p.name}</div>
          </div>`;
  }).join('');

  renderPagination(players.length, itemsPerPage);
}

function renderPagination(totalItems, itemsPerPage) {
  const nav = document.getElementById('pagination');
  if (!nav) return;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  nav.innerHTML = '';
  if (totalPages <= 1) return;

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.innerText = i;
    btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
    btn.onclick = () => {
      currentPage = i;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    nav.appendChild(btn);
  }
}

function openModal(idx) {
  const p = players[idx];

  const avatarEl = document.getElementById('modal-avatar');
  avatarEl.innerHTML = p.image
    ? `<img src="${p.image}" alt="${p.name}">`
    : initials(p.name);

  document.getElementById('modal-name').textContent = p.name;

  // --- 【ここから修正：innerHTMLの代入と処理を一つにまとめます】 ---
  const bioText = p.bio || ''; 
  document.getElementById('modal-bio').innerHTML = bioText
    .split('\n')
    .map(line => {
      const trimmedLine = line.trim();

      if (trimmedLine === '実績' || trimmedLine === 'メモ') {
        return `<div style="font-weight: bold; color: var(--text); margin-top: 1.2rem; margin-bottom: 0.4rem;">${trimmedLine}</div>`;
      }

      if (trimmedLine.startsWith('・') ||trimmedLine.startsWith('→')) {
        return `<div style="padding-left: 1.2em; text-indent: -1.2em; margin-bottom: 0.2rem;">${trimmedLine}</div>`;
      }

      return `<div style="margin-bottom: 0.2rem;">${trimmedLine}</div>`;
    })
    .join('');
  // --- 【ここまで】 ---

  const twitterIcon = `<svg class="modal-link-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`;
  const youtubeIcon = `<svg class="modal-link-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
  const noteIcon = `<svg class="modal-link-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.103 2H5.9a2.535 2.535 0 0 0-2.528 2.533V19.46A2.535 2.535 0 0 0 5.9 22h12.203a2.535 2.535 0 0 0 2.528-2.534V4.533A2.535 2.535 0 0 0 18.103 2zm-1.29 15.61H7.182v-1.306h9.631v1.306zm0-3.324H7.182v-1.306h9.631v1.306zm0-3.325H7.182V9.654h9.631v1.306z"/></svg>`;
  const twitchIcon = `<svg class="modal-link-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>`;

  const links = [];
  if (p.twitter) links.push({ href: p.twitter, label: 'X(Twitter)', icon: twitterIcon });
  if (p.youtube) links.push({ href: p.youtube, label: 'YouTube', icon: youtubeIcon });
  if (p.note) links.push({ href: p.note, label: 'note', icon: noteIcon });
  if (p.twitch) links.push({ href: p.twitch, label: 'twitch', icon: twitchIcon });

  document.getElementById('modal-links').innerHTML = links.map(l =>
    `<a class="modal-link" href="${l.href}" target="_blank" rel="noopener">${l.icon}${l.label}</a>`
  ).join('');

  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('modal-close-btn').addEventListener('click', closeModal);

document.getElementById('modal-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

render();