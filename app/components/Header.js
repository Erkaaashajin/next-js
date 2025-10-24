import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-[200px] flex justify-around items-center bg-black">
      <Link href={"/"}>
        <img
          className="w-[140px] h-[100px] rounded-[2100px]"
          src="https://e7.pngegg.com/pngimages/17/851/png-clipart-dragon-logo-logo-dragon-decal-chinese-dragon-television-dragon.png"
        ></img>
      </Link>
      <div className="gap-[70px] flex">
        <Link href={"/skills"}>
          {" "}
          <h1 className="text-[40px] text-white">My Skills </h1>{" "}
        </Link>
        <Link href={"/contact"}>
          {" "}
          <h1 className="text-[40px] text-white"> Contact Info </h1>{" "}
        </Link>
      </div>
    </div>
  );
}
