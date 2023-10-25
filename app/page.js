import Image from "next/image";
import workList from "@/components/lists";

import { FaArrowRight } from "react-icons/fa";

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

const authorList = [
  {
    name: "今泉 えみり",
    respnsibility: "表紙デザイン",
    link: "",
  },
  {
    name: "魚田 真之介",
    respnsibility: "扉ページ文",
    link: "@fallfish56",
  },
  {
    name: "小林 優芽",
    respnsibility: "表紙・扉ページデザイン",
    link: "",
  },
  {
    name: "坂村 空介",
    respnsibility: "組版・座談会編集",
    link: "@menma275",
  },
  {
    name: "長久保 有香",
    respnsibility: "レイアウトデザイン",
    link: "@nagayuka_a",
  },
  {
    name: "杉本 達應",
    respnsibility: "編集長",
    link: "",
  },
];

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-3 text-base">
      {/* トースター */}
      <div className="fixed right-5 bottom-5">
        <a href="/">
          <div className="group flex flex-row gap-2 px-4 py-2 rounded-xl text-white bg-green-500">
            <p>購入する</p>
            <FaArrowRight className="my-auto group-hover:translate-x-1/4 transition-all duration-150" />
          </div>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 px-5 pb-10 pt-16 gap-7 ">
        <div className="my-auto mx-auto">
          <h2 className="text-sm text-[var(--font-secondary)]">
            すぎもと組テックジン vol.5
          </h2>
          <h1 className="text-4xl font-semibold tracking-wider mt-4 mb-2">
            もじとおどる
          </h1>
          <h2 className="tracking-wide">JavaScriptで楽しむWebと文字</h2>
          <p className="p-0.5 w-fit text-xs mt-4 text-[var(--bg-primary)] bg-[var(--font-primary)]">
            技術書典15オンライン・オフライン出品
          </p>
        </div>
        <div className="bg-gray-200 m-auto">
          <Image src="/img/cover.png" alt="cover" width={325} height={325} />
        </div>
      </div>
      {/* アバウト */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-5 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold my-auto">About</h1>
        <div className="">
          <p className="text-sm">
            説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
          </p>
        </div>
      </div>
      {/* コンテンツ */}
      <div className="my-5 p-5 bg-[var(--bg-secondary)] rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <h1 className="text-xl font-bold pb-3">Contents</h1>
          <div className="">
            {/* <p className="text-sm mb-5">
              説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
            </p> */}
          </div>
        </div>
        <div>
          {mojiList.map((moji, index) => (
            <div className="pt-5 pb-2 mt-0 border-0 border-[var(--font-primary)]">
              <h3
                key={index}
                className="text-sm w-fit h-fit mb-3 px-3 py-1 text-[var(--bg-primary)] bg-[var(--font-primary)] "
              >
                {moji.title}
              </h3>
              <p className="text-sm w-full md:w-2/3">{moji.desc}</p>
              <details>
                <summary className="text-xs my-3 px-3 py-1 text-[var(--font-secondary)] cursor-pointer">
                  収録作品を見る
                </summary>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                  {workList
                    .filter((work) => work.tag === moji.tag)
                    .map((work, index) => (
                      <a
                        key={index}
                        className="group bg-[var(--bg-primary)] rounded-md overflow-hidden border border-[var(--bg-secondary)] hover:border-[var(--font-primary)] transition-all duration-75"
                        href={work.path}
                      >
                        <img
                          src={work.img}
                          className="w-full h-auto object-cover aspect-[16/10] object-left-top"
                        />
                        <div className="w-full flex justify-between px-3">
                          <p className="text-xs py-3">{work.title}</p>
                          <p className="text-xs my-auto text-[var(--font-secondary)]">
                            {work.author}
                          </p>
                        </div>
                      </a>
                    ))}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
      {/* Author */}
      <div className="my-5">
        <div className="bg-[var(--bg-secondary)] p-6 rounded-xl">
          <h1 className="text-xl font-bold mb-5">Author</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <h1 className="text-md">すぎもと組について</h1>
              <p className="mt-3 text-sm">
                説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
              </p>
            </div>
            <div className="text-xs">
              {authorList.map((author, index) => (
                <div key={index} className="flex justify-between py-2">
                  <p className="text-[var(--font-secondary)]">
                    {author.respnsibility}
                  </p>
                  <p>{author.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="text-xs text-[var(--font-secondary)] mx-auto w-fit pb-5">
        © 2023 すぎもと組
      </footer>
    </main>
  );
}
