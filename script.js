const players = [
  {
    name: "ふぇぐ",
    image: "画像/ふぇぐ.jpg",
    bio: `実績
・最終ビヨ5回(最高26位)
・WGP2018 優勝
・RSPL 19-20 1st season 優勝
メモ
・旧プロ時代から随一の華がある選手。
・現役プロでGF進出した数少ない選手でもある。
・他界隈の方と接するとき自分の色を出せる数少ない選手の1人であり、現在は配信活動にも注力している。`,
    twitter: "https://x.com/feeeeeeeeeg",
    youtube: "https://t.co/EuD6kCduSU",
    note:"https://note.com/feeeeeeeeeg"
  },
  {
    name: "じゅなん",
    image: "画像/じゅなん.jpg",
    bio: `実績
    ・RAGE Japan Championship 優勝
    ・ECS福岡 ベスト16
    ・RAGE 2023 Spring PO決勝
メモ
・ビヨンドに入って初めてのRAGE王者。
・デッキの持ち込み方が、環境を読み、それに強いデッキを持ち込むなどのメタゲーム性◎
・現在は泌尿器科のお医者さん(プロになり次第退職予定)
→配信中に急患などで離席もあった
・医師免許持ちのプロゲーマーは熱い`
,
    twitter: "https://x.com/junan_64",
    youtube: "https://t.co/9OK5jILYd7",
    note:"https://note.com/isolate1994"
  },
  {
    name: "Beita",
    image: "画像/beita.jpg",
    bio: `実績
    ・最終ビヨ2回(最高20位)
    ・RAGE 2023 Summer ベスト8
    ・第21回 レート杯 優勝
    ・Shadowverse KoreaOpen 2026 GF進出
メモ
    ・現在社会人を行っているため、ビヨンドは少なめだが、実力は現在でもトップクラス
    ・大会シーンだけでなくレート杯も複数回出場とレートの力も光る
    ・プロ志望の気持ちが最も高い選手の一人
    →少なくとも2022年時点でプロ志望を出している
    ・2022 Summerの対かきpとのBO5は旧シャドのBO5単位の試合では最高のマッチの1つ`,
    twitter: "https://x.com/eunggeon",
    youtube: "",
    note:"https://note.com/eunggeon"
  },
  {
    name: "Hirobosu",
    image: "画像/Hirobosu.jpg",
    bio: `実績
    ・最終ビヨ11回(5位以内1回)
    ・RAGE 2024 Summer ベスト4
    ・OCS 2025 August ベスト4
    ・JCS 2025 PO進出
メモ
    ・多分ビヨンド入ってから公式大会の成績が最も安定して高い方
    ・旧シャドでも当然素晴らしい成績
    ・最終ビヨ11回とレートも成績も安定
    ・配信や企画も精力的に行っている方で、今後の動向に注目が集まる選手の1人でもある`,
    twitter: "https://x.com/hirobosu_sv",
    youtube: "https://t.co/k2hajyNUwU"
  },
  {
    name: "kt",
    image: "画像/kt.jpg",
    bio: `実績
    ・最終ビヨ8回(5位以内3回)
    ・JCG優勝 1回
    ・JCG準優勝 1回
メモ
    ・ビヨンドに入ってから彼のnoteを読んだことがないシャドバプレイヤーはいない 
    →それだけわかりやすい(言語化能力が高い) 
    ・最高CRが2200↑を複数回と実力も十分 
    ・デッキの構築力も光る 
    ・ビヨンドに対する熱が最も高い選手の1人`,
    twitter: "https://x.com/kt__sv",
    youtube: "",
    note: "https://t.co/kFcciQtBJr"
  },
  {
    name: "MingiGod",
    image: "画像/Mingi.jpg",
    bio: `実績
    ・最終ビヨ4回(5位以内1回)
    →最終1位(絶傑の後継者前半R)
    ・WGP2021 ベスト4
    ・WGP2018 14位
メモ
    ・韓国の最強プレイヤー筆頭
    →日本語超ペラペラ
    (WGのとき通訳の代わりに喋ってと言われるレベル)
    ・韓国の大会などで解説も行う
    ・レート杯も複数出場
    ・人格者、配信などからもそれを感じられる
    ・JCSも参加されるので、ここでも注目`,
    twitter: "https://x.com/minimin_sv",
    youtube: "https://t.co/59w2TGY013",
    note:"https://note.com/mingi_god"
  },
  {
    name: "まっつ",
    image: "画像/まっつ.jpg",
    bio: `実績
    ・最終ビヨ12回(5位以内1回)
    ・RSPL 20-21 優勝
    ・RAGE 2023 Winter ベスト8
    ・ECS北海道 ベスト8
メモ
    ・OJA→SHG→OJAとそれぞれの状況でいろいろな立場を知っている元プロ
    ・レート杯複数回出場
    ・プロ脱退後もRAGEのファイナリストになるなど素晴らしい成績
    ・幅広いデッキを使うイメージがあり、柔軟性◎
    ・2023 Winterのvs rikkaの第1戦は個人的に好きな試合の1つ`,
    twitter: "https://x.com/mattsu__sv",
    youtube: "https://t.co/z8swApD0Z2"
  },
  {
    name: "Ryu",
    image: "画像/Ryu.jpg",
    bio: `実績
    ・最終ビヨ6回(5位以内1回)
    ・RAGE 2023 Spring 優勝
    ・RAGE 2021 Autumn ベスト8
    ・MPランキング覇者 2回
メモ
    ・現役プロ選手初のRAGE王者(未だに唯一)
    ・レート杯の出場もかなり多い選手
    ・メタゲームを得意としており、それを言語化する力も高い
    ・YouTubeの解説は(個人的に)1,2を争うほどわかりやすい(あと顔がいい)
    ・ビヨンドではネメシスをメインに使用`,
    twitter: "https://x.com/darkness_mare",
    youtube: "https://t.co/a0rhk5zGPJ",
    note:"https://note.com/darkness_mare"
  },
  {
    name: "夢都(むと)",
    image: "画像/夢都.jpg",
    bio: `実績
    ・最終ビヨ2回(最高4位)
    →CR2300↑(絶傑の継承者前半Ni)
    ・MPランキング
    ・YouTubeで企画多数実施
メモ
    ・現在、社会人(プロになったら離職予定)
    ・CRで成績を残しつつ、YouTubeなどで発信
    →これを社会人を行いながら行える胆力は尋常じゃない
    ・YouTubeではいろいろな方を交えた企画行える
    →他人を巻き込める数少ない存在の1人
    ・言語化能力も非常に高い選手
    ・ナイトメア巧者(旧シャドからずっと)
    ・プロ志望が最も高い選手の1人`,
    twitter: "https://x.com/hieroglyph459",
    youtube: "https://t.co/WmnbaJlHLD",
    note:"https://note.com/hieroglyph"
  },
  {
    name: "セシリア",
    image: "画像/セシリア.jpg",
    bio: `実績
    ・最終ビヨ7回(最高12位)
    ・RAGE 2024 Spring 準優勝
    ・RAGE 2024 Summer PO決勝
    ・GrandMasterFinal 2023 入賞
メモ
    ・旧シャドの大会シーンでは、終盤を中心にとんでもない 
    ・ランクマ覇者などやり込み度合いもトップ 
    ・ビヨンドでも実績は十分 
    ・自分の筋を持てている選手 
    ・デッキビルド力も高い 
    →バフドラのクロードラゴニュートは彼が起源 `,
    twitter: "https://x.com/THE_FOOL_HERO",
    youtube: "https://t.co/s3zpNrqHAX"
  },
  {
    name: "Bene",
    image: "画像/Bene.jpg",
    bio: `実績
    ・最終ビヨ2回(最高31位)
    ・ECS宮城 PO進出
    ・CT神奈川 準優勝
メモ
    ・社会人を行いつつ、最終ビヨンドも2回達成 
    →環境の上位と下位のリーダーで取っており、対応力も◎ 
    ・直近で全LEGENDも達成 
    ・Twitterでの投稿なども活発 
    ・一次選考通過次第、初顔出し `,
    twitter: "https://x.com/Bene_88_swb",
    youtube: ""
  },
  {
    name: "ねむる",
    image: "画像/ねむる.jpg",
    bio: `実績
    ・OCS November 優勝
    ・WGP 2025 PO進出
    ・JCS 2025 Day2進出
    メモ
    ・ビヨンドから競技シーンに参加
    →それなのにOCSで優勝し、世界大会進出
    ・人当たりも非常よく、チームの顔になりうる存在
    →応援されやすい性格
    ・プロに対する熱量も非常に高い選手`,
    twitter: "https://x.com/numuramen2323",
    youtube: ""
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

  const links = [];
  if (p.twitter) links.push({ href: p.twitter, label: 'X(Twitter)', icon: twitterIcon });
  if (p.youtube) links.push({ href: p.youtube, label: 'YouTube', icon: youtubeIcon });
  if (p.note) links.push({ href: p.note, label: 'note', icon: noteIcon });

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