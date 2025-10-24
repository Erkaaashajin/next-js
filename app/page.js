import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[20vw] h-full flex ml-[300px] mt-[200px]">
      <div>
        <div>
          <h1 className="text-[40px] text-black font-bold">
            Hi! I'm Erdenesaikhan👋
          </h1>
          <p className="w-[1000px] h-[200px] text-black font-bold text-[24px]">
            I'm a full stack developer (React.js & Node.js) with a focus on{" "}
            <br />
            creating (and occasionally designing) exceptional digital
            experiences that <br /> are fast, accessible, visually appealing,
            and responsive. I still love it as if it was something new.
          </p>
        </div>

        <div>
          <span className="font-bold text-black text-[30px]">
            Ulaanbaatar, Mongolia
          </span>
        </div>
      </div>
      <img
        className=""
        src="https://portfolio-rust-eight-16.vercel.app/profile.jpg"
      />
    </div>
  );
}
