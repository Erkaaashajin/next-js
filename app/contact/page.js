export default function Contact() {
  return (
    <div className="ml-[300px] mt-[200px] flex flex-row gap-[700px]">
      {" "}
      <div className="flex flex-col gap-[60px]">
        <div>
          <div>
            {" "}
            <h1 className="text-black text-[40px] font-bold">Contact me on:</h1>
          </div>
          <div className="mt-[30px]">
            {" "}
            <h2 className=" text-[30px]">
              <p className="text-black">Instagram:</p>{" "}
              <a
                className="text-[#047FD1]"
                href="https://www.instagram.com/ft.erka/"
              >
                @ft.erka
              </a>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className=" text-[30px]">
              <p className="text-black">Facebook:</p>{" "}
              <a
                className="text-[#047FD1]"
                href="https://www.facebook.com/erdenesaikhan.erka.2025"
              >
                @ft.erka
              </a>
            </h2>
          </div>
        </div>
        <div>
          <div>
            <h2 className=" text-[30px]">
              <p className="text-black">Phone:</p>{" "}
              <p className="text-[#047FD1]">+976-9047-5522</p>
            </h2>
          </div>
        </div>
      </div>
      <div>
        <img src="https://media.istockphoto.com/id/153696622/photo/happy-senior-man-giving-thumb-up.jpg?s=612x612&w=0&k=20&c=b2BI4P4vvgEK9AqxQ_gl7EpWnr1BomTJV24RqtGpaRo=" />
      </div>
    </div>
  );
}
