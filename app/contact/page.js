export default function Contact() {
  return (
    <div className="lg:ml-[300px] lg:mt-[200px] flex flex-row lg:gap-[700px] sm:p-8 ">
      {" "}
      <div className="flex flex-col lg:gap-[60px] sm:gap-[10px]">
        <div>
          <div>
            {" "}
            <h1 className="text-black lg:text-[40px] sm:text-[27px] font-bold">
              Contact me on:
            </h1>
          </div>
          <div className="lg:mt-[30px]">
            {" "}
            <h2 className=" lg:text-[30px] sm:text-[20px]">
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
            <h2 className="lg:text-[30px] sm:text-[20px]">
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
            <h2 className="lg:text-[30px] sm:text-[20px]">
              <p className="text-black">Phone:</p>{" "}
              <p className="text-[#047FD1] lg:text-[30px] sm:text-[17px]">+976-9047-5522</p>
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
