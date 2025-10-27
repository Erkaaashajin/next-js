import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-full flex lg:flex-row md:flex-col sm:p-8 sm:p-8 lg:gap-[800px] sm:flex-col sm:gap-[10px] lg:p-30">
      <div className="flex flex-col gap-[60px]">
        <div className="md:w-auto lg:w-full sm:w-full">
          <h1 className="text-[40px] text-black font-bold sm:text-[27px] ">
            Hi! I'm Erdenesaikhan👋
          </h1>
          <p className="w-[768px] h-[200px] text-black lg:font-bold sm: text-[24px] sm:w-[600px] ">
            I'm a full stack developer (React.js & JavaScript) with a focus on{" "}
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
      <div className="w-[800px] h-[400px] sm:w-[600px] ">
        <img
          className=""
          src="https://portfolio-rust-eight-16.vercel.app/profile.jpg"
        />
      </div>
    </div>
  );
}
