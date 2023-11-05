import Image from "next/image";
import { workList, mojiList, shopList, authorList } from "@/components/lists";

import fs from "fs";

import { FiArrowUpRight } from "react-icons/fi";
import { FaLink } from "react-icons/fa6";

import maru_su from "@/public/img/maru_su.png";

export default function Home(){
  const sampleFolder = "public/img/sampleImage/";
  const files = fs.readdirSync(sampleFolder)
  const samples = files.filter((file) => file.endsWith(".png"));

  return (
    <main className="max-w-screen-xl mx-auto px-4 text-base">
      {/* トースター */}
      {/* <div className="fixed right-5 bottom-5">
        <a href="/">
          <div className="group flex flex-row gap-2 px-4 py-2 rounded-xl text-white bg-green-500">
            <p>購入する</p>
            <FaArrowRight className="my-auto group-hover:translate-x-1/4 transition-all duration-150" />
          </div>
        </a>
      </div> */}
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
      {/* 販売ページ */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold my-auto">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {shopList.map((shop) => (
            <a
              key={shop.title}
              className={"group p-3 rounded-md flex justify-between"}
              style={
                shop.link !== ""
                  ? { background: shop.color }
                  : { background: "#ddd", pointerEvents: "none" }
              }
              href={shop.link}
              target="_blank"
            >
              <div>
                <h3 className="text-md font-medium mb-1 text-white">
                  {shop.title}
                </h3>
                <p className="text-xs text-white">{shop.desc}</p>
              </div>
              <FiArrowUpRight className="text-white text-lg group-hover:translate-x-1/4 group-hover:-translate-y-1/4 transition-all duration-150" />
            </a>
          ))}
        </div>
      </div>
      {/* アバウト */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold my-auto">About</h1>
        <div className="text-sm sm:text-base">
          <p className="leading-6 mb-3">
            本書は、Webとタイポグラフィをテーマにした20作品をおさめた作品集です。
          </p>
          <p className="leading-6 mb-3">
            本書の構成は次の通りです。作品を4つのカテゴリー「もじをあじわう」「もじをたのしむ」 「もじとあそぶ」「もじとおどる」に分類し、セクションごとに作品を1ページずつ紹介しています。
          </p>
          <p className="leading-6 mb-3">
            編集メンバーが制作した作品は、4ページにわたって詳細な解説を加えました。最後に、「もじをかたる」では作品制作を振りかえった座談会を収録しました。
          </p>
          <p className="leading-6 mb-3">
            どの作品も粗削りで発展の余地がありますが、Webとタイポグラフィの可能性を感じるものばかりです。紙面で気になった作品があれば、本Webサイトで観賞していただくこともできます。
          </p>
          <div className="my-3">
            <p>〈こんな方に〉</p>
            <ul className="list-disc ml-[1rem]">
              <li>文字やフォントが大好きな方</li>
              <li>グラフィックデザイン、タイポグラフィに関心のある方</li>
              <li>個人で作品としてのWebサイトを制作してみたい方</li>
              <li>実用的なプロダクトではなく、ちょっと変わった創作物を愛している方</li>
              <li>制作課題に取り組む学生の声をききたい方</li>
              <li className="list-none">など</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc ml-[1rem]">
              <li>A5変形</li>
              <li>60ページ</li>
              <li>電子版：本文カラー</li>
              <li>紙版：本文モノクロ</li>
            </ul>
          </div>
        </div>
      </div>
      {/* サンプル */}
      <div className="my-5 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold mb-5">Sample</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {samples.map((file) => (
            <div key={file} className="">
              <Image src={`/img/sampleImage/${file}`} alt={file} width={325} height={325}/>
            </div>
          ))}
        </div>
      </div>
      {/* コンテンツ */}
      <div className="my-5 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold">Contents</h1>
        <div>
          {mojiList.map((moji) => (
            <div
              key={moji.title}
              className="pt-3 pb-2 mt-0 border-0 border-[var(--font-primary)]"
            >
              <h3 className="text-sm w-fit h-fit mb-3 px-3 py-1 text-[var(--bg-primary)] bg-[var(--font-primary)] ">
                {moji.title}
              </h3>
              <p className="text-sm sm:text-base  w-full leading-6 mb-3 md:w-2/3">
                {moji.desc}
              </p>
              <details>
                <summary className="text-xs my-3 px-3 py-1 text-[var(--font-secondary)] cursor-pointer">
                  収録作品を見る
                </summary>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
                  {workList
                    .filter((work) => work.tag === moji.tag)
                    .map((work) => (
                      <a
                        key={work.author}
                        target="_blank"
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
        <div className="bg-[var(--bg-secondary)] p-7 rounded-xl">
          <h1 className="text-xl font-bold mb-5">Author</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <div className="flex flex-row gap-3">
                <Image src={maru_su} className="w-10 h-auto rounded-full" />
                <h1 className="text-md my-auto">すぎもと組について</h1>
              </div>
              <p className="mt-5 text-sm sm:text-base  leading-6 mb-3">
                刊行のたびにメンバーが入れ替わる流浪のテック・ジン醸造所。<br/>
                主宰者の杉本達應は、東京都立大学システムデザイン学部インダストリアルアート学科の教員です。
              </p>
            </div>
            <div className="text-xs">
              {authorList.map((author) => (
                <div key={author.name} className="flex justify-between py-2">
                  <p className="text-[var(--font-secondary)]">
                    {author.respnsibility}
                  </p>
                  {author.link ? (
                    <a
                      href={author.link}
                      className="flex flex-row gap-1 border-b border-[var(--font-secondary)]"
                      target="_blank"
                    >
                      <FaLink className="my-auto text-[var(--font-secondary)]" />
                      {author.name}
                    </a>
                  ) : (
                    <p className="">{author.name}</p>
                  )}
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
