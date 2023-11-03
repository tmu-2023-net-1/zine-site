const workList = [
  {
    tag: "ajiwau",
    title: "日々是好日",
    author: "今泉えみり",
    img: "/img/08_今泉.png",
    path: "https://tmu-2023-net-1.github.io/EmiriImaizumi/",
  },
  {
    tag: "ajiwau",
    title: "イマノコトバ",
    author: "杉本達應",
    img: "/img/12_杉本.png",
    path: "https://tmu-2023-net-1.github.io/sugi2000/",
  },
  {
    tag: "ajiwau",
    title: "四字で紡ぐ",
    author: "山本晴菜",
    img: "/img/16_山本晴菜.png",
    path: "https://tmu-2023-net-1.github.io/yamaharuna/",
  },
  {
    tag: "ajiwau",
    title: "心は “笑い” に表れる",
    author: "山本茉希帆",
    img: "/img/17_山本茉希帆.png",
    path: "https://tmu-2023-net-1.github.io/MakihoYamamoto/",
  },
  {
    tag: "ajiwau",
    title: "四季",
    author: "岡西美空",
    img: "/img/18_岡西美空.png",
    path: "https://tmu-2023-net-1.github.io/oknsmk/",
  },
  {
    tag: "tanoshimu",
    title: "電脳神社",
    author: "小林優芽",
    img: "/img/20_小林.png",
    path: "http://tmu-2023-net-1.github.io/koba0305/",
  },
  {
    tag: "tanoshimu",
    title: "マリトッツォ大好きブログ",
    author: "長久保有香",
    img: "/img/24_長久保.png",
    path: "https://tmu-2023-net-1.github.io/Nagayuka/",
  },
  {
    tag: "tanoshimu",
    title: "あなたに見せたいもの",
    author: "田中美羽",
    img: "/img/28_田中美羽.png",
    path: "https://tmu-2023-net-1.github.io/miiutanaka/",
  },
  {
    tag: "tanoshimu",
    title: "なつやすみの日記",
    author: "mgmg_pixel",
    img: "/img/29_mgmg_pixel.png",
    path: "https://tmu-2023-net-1.github.io/ononarumi/",
  },
  {
    tag: "asobu",
    title: "文字としての月",
    author: "魚田真之介",
    img: "/img/32_魚田.png",
    path: "https://tmu-2023-net-1.github.io/aqizakana/",
  },
  {
    tag: "asobu",
    title: "白の廊下",
    author: "小泉陽大",
    img: "/img/36_小泉陽大.png",
    path: "https://tmu-2023-net-1.github.io/KOIZUMIharuto/",
  },
  {
    tag: "asobu",
    title: "YourWord",
    author: "kawasemium",
    img: "/img/37_kawasemium.png",
    path: "https://tmu-2023-net-1.github.io/kawasemium/",
  },
  {
    tag: "asobu",
    title: "うちゅうじんのことばあそび",
    author: "H.I",
    img: "/img/38_HI.png",
    path: "https://tmu-2023-net-1.github.io/ito-hinata/",
  },
  {
    tag: "asobu",
    title: "車窓から感じる24節気",
    author: "そら",
    img: "/img/39_そら.png",
    path: "https://tmu-2023-net-1.github.io/sorakaeru/",
  },
  {
    tag: "asobu",
    title: "ひねもす",
    author: "unonou",
    img: "/img/40_unonou.png",
    path: "https://tmu-2023-net-1.github.io/UNOFUKA/",
  },
  {
    tag: "odoru",
    title: "archeType",
    author: "坂村空介",
    img: "/img/42_坂村.png",
    path: "https://tmu-2023-net-1.github.io/sakamura/",
  },
  {
    tag: "odoru",
    title: "Re『陰翳礼讃』",
    author: "土屋志野",
    img: "/img/46_土屋志野.png",
    path: "https://tmu-2023-net-1.github.io/shinoTsuchiya/",
  },
  {
    tag: "odoru",
    title: "文字あそび",
    author: "小此木隼翔",
    img: "/img/47_小此木隼翔.png",
    path: "https://okonogihayto-6kyrmff4c-network1-final.vercel.app/",
  },
  {
    tag: "odoru",
    title: "EON.Encoder",
    author: "溝口真也",
    img: "/img/48_溝口真也.png",
    path: "https://tmu-2023-net-1.github.io/mizoguchi65/",
  },
  {
    tag: "odoru",
    title: "あわもじ",
    author: "あべ",
    img: "/img/49_あべ.png",
    path: "https://tmu-2023-net-1.github.io/YuukiAbe2023/",
  },
];

const mojiList = [
  {
    title: "もじをあじわう",
    tag: "ajiwau",
    desc: "はじめに、文字をじっくり読んで観賞できるサイトを紹介します。どのサイトも、ディスプレイ上に言葉が丁寧に盛り付けられており、文字の美しさや、優しさを感じられるようなものばかりです。",
  },
  {
    title: "もじをたのしむ",
    tag: "tanoshimu",
    desc: "お次は文字とグラフィックの組み合わせを楽しめるサイトをご紹介します。写真や装飾、ページの展開など、様々なアプローチが試みられて、どのサイトもそれぞれ作者の個性が際立っています。まるでファッションショーに来たかのような気分でお楽しみください。",
  },
  {
    title: "もじとあそぶ",
    tag: "asobu",
    desc: "ここまでのものとはまた違った、インターフェースを使ったサイトをご紹介します。宇宙を漂ったり、実世界を歩いたり、文字を掴んだり、車窓を眺めたり、夜を待ったり、文字と交流する方法は違います。夢中で遊んでいると、文字の普段と違う顔も見られるかも。",
  },
  {
    title: "もじとおどる",
    tag: "odoru",
    desc: "最後に、タイポグラフィに参加できるサイトを紹介します。Webというダンスホールに繰り出すことで、 文字と踊るような体験ができます。ノリ方は貴方次第です。何を踊るのかは入場するまでわかりません。 パーティーが終わったら、自分の踊りをシェアしてみるのもいいかも。",
  },
];

const shopList = [
  {
    title: "技術書典",
    desc: "紙版・電子版",
    link: "https://techbookfest.org/product/7V0Tkg5WKFrgwGHvGgfBjd",
    color: "#67AD5B",
  },
  {
    title: "BOOTH",
    desc: "紙版・電子版のみ",
    link: "https://sugi2000.booth.pm/items/5224641",
    color: "#E95B57",
  },
  {
    title: "Amazon",
    desc: "電子版のみ",
    link: "",
    color: "#F7C948",
  },
];

const authorList = [
  {
    name: "今泉 えみり",
    respnsibility: "表紙デザイン",
    link: "",
  },
  {
    name: "魚田 真之介",
    respnsibility: "扉ページ文",
    link: "https://twitter.com/fallfish56",
  },
  {
    name: "小林 優芽",
    respnsibility: "表紙・扉ページデザイン",
    link: "",
  },
  {
    name: "坂村 空介",
    respnsibility: "組版・座談会編集",
    link: "https://www.sakamura.dev/",
  },
  {
    name: "長久保 有香",
    respnsibility: "レイアウトデザイン",
    link: "https://www.instagram.com/nagayuka_a/",
  },
  {
    name: "杉本 達應",
    respnsibility: "編集長",
    link: "",
  },
];

export { workList, mojiList, shopList, authorList };
