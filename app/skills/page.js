"use client";


export default function Skills() {
  const data = [{ id: 1, img: "/image copy.png", text: "JavaScript" }];

  return (
    <div>
      <div className="grid  grid-cols-2  gap-[50px]  sm:grid-cols-3">
        {data.map((item, index) => (
          <div className="w-[100px] h-[100px] bg-red-500">
            <p className="text-white">{item.text}</p>
            <Image src={item.img} height={100} width={100} alt="zurag" />
          </div>
        ))}
      </div>
    </div>
  );
}
