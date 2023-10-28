import Image from "next/image";
import { workList, mojiList, shopList, authorList } from "@/components/lists";

import { FaArrowRight, FaArrowUp } from "react-icons/fa";
import { FiArrowUpRight, FiArrowUpLeft } from "react-icons/fi";
import { FaXTwitter, FaInstagram, FaLink } from "react-icons/fa6";
import { background } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 text-base">
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
      {/* 販売ページ */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-3 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <h1 className="text-xl font-bold my-auto">Shop</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {shopList.map((shop) => (
            <a
              key={shop.title}
              className={"group p-3 rounded-md flex justify-between"}
              style={{ background: shop.color }}
              href={shop.link}
            >
              <div>
                <h3 className="text-md mb-1 text-white">{shop.title}</h3>
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
        <div className="">
          <p className="text-sm">
            説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
          </p>
        </div>
      </div>
      {/* コンテンツ */}
      <div className="my-5 p-7 bg-[var(--bg-secondary)] rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <h1 className="text-xl font-bold pb-3">Contents</h1>
          <div className="">
            {/* <p className="text-sm mb-5">
              説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
            </p> */}
          </div>
        </div>
        <div>
          {mojiList.map((moji) => (
            <div
              key={moji.title}
              className="pt-5 pb-2 mt-0 border-0 border-[var(--font-primary)]"
            >
              <h3 className="text-sm w-fit h-fit mb-3 px-3 py-1 text-[var(--bg-primary)] bg-[var(--font-primary)] ">
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
              <h1 className="text-md">すぎもと組について</h1>
              <p className="mt-3 text-sm">
                説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
              </p>
            </div>
            <div className="text-xs">
              {authorList.map((author) => (
                <div key={author.name} className="flex justify-between py-2">
                  <p className="text-[var(--font-secondary)]">
                    {author.respnsibility}
                  </p>
                  <div className="p-1">
                    {author.link ? (
                      <a href={author.link} className="flex flex-row gap-1">
                        <FaLink className="my-auto text-[var(--font-secondary)]" />
                        {author.name}
                      </a>
                    ) : (
                      <p className="">{author.name}</p>
                    )}
                  </div>
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
