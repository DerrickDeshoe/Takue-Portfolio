// import React from "react";

// const Footer = () => {
//   return (
//     <div className="h-[50vh] w-full ">
//       <div className="h-[50vh] w-full "></div>
//       <div className="h-[50vh] w-full bg-darkblue flex justify-center rounded-lg ">
//         <div className=" relative bg-white w-[250px] h-[40px] rounded-b-lg">

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import Image from "next/image";
import React from "react";
import Footers from "../../public/images/footer.png";
import Link from "next/link";
import { RiArrowUpLine } from "react-icons/ri";
("");

const Footer = () => {
  return (
    <div className="relative">
      <Image src={Footers} alt="" className="absolute top-0" />

      <div className=" absolute top-0  px-20 text-white h-full w-full">
        <div className=" flex space-x-10 justify-between">
          <div className="flex-col ">
            <h1 className="lg:pt-16  xl:pt-24 lg:pb-16">Takunda</h1>
            <div className="bg-light/80 flex  items-center text-white h-[60px] pl-8 pr-1 rounded-full space-x-8">
              <p>click here for resume</p>
              <button className="bg-lightblue w-[55px] h-[55px] flex justify-center items-center rounded-full text-white">
                A
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:space-y-2">
            <h1 className="font-bold  lg:pt-16 xl:pt-24">Quick Links</h1>
            <Link href="#" className="font-thin">
              Hero
            </Link>
            <Link href="#" className="font-thin">
              About Me
            </Link>
            <Link href="#" className="font-thin">
              What i can do
            </Link>
            <Link href="#" className="font-thin">
              My work
            </Link>
            <Link href="#" className="font-thin">
              Contact me
            </Link>
          </div>
          <div className="flex flex-col  lg:space-y-2">
            <h1 className="  lg:pt-16 xl:pt-24"> Contact</h1>
            <Link href="#" className="font-thin">
              +263 717 479 076
            </Link>
            <Link href="#" className="font-thin">
              Charindapanzetakunda@gmail.com
            </Link>
            <Link href="#" className="font-thin">
              www.linkedin.com/in/takunda-b346a52ab
            </Link>
          </div>
        </div>
        <div className="lg:pt-12 xl:pt-20">
          {" "}
          <hr />
        </div>

        <div className="flex items-center justify-between relative h-[17vh] w-[81.5%] ">
          <p>Copyright @2024 Takue_thebrain</p>
          <Link href='#' className="flex flex-col text-black justify-center absolute bottom-0 right-0 items-center">
            <RiArrowUpLine />
            <p>Back to top</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
