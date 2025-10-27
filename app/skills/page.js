"use client";

import Image from "next/image";

export default function Skills() {
  const data = [
    { id: 1, img: "/js.png", text: "JavaScript" },
    { id: 2, img: "/tailwindcss.png", text: "Tailwind" },
    { id: 3, img: "/react.png", text: "React" },
    { id: 4, img: "/next.png", text: "Next" },
    { id: 5, img: "/htmlgsh.png", text: "HTML" },
    { id: 6, img: "/css.png", text: "CSS" },
  ];

  return (
    <div className="w-full flex items-center h-screen justify-center flex-col gap-[100px] mt-[-200px]">
      <div>
        <h1 className="text-black font-bold text-[27px] ">Coding languages I know</h1>
      </div>
      <div className="grid  grid-cols-2  gap-[50px]  sm:grid-cols-3">
        {data.map((item, index) => (
          <div
            className="w-[100px] h-[100px] flex flex-col items-center"
            key={index}
          >
            <div>
              <Image
                src={`/image${item.img}`}
                height={200}
                width={200}
                alt="zurag"
              />
              <p className="text-black">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
