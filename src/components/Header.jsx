import CarouselComponent from "./CarouselComponent"
import Scroll from "../images/scroll.png"
import Image from "next/image"



const Header = () => {

  const handleLinkClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 1300, behavior: "smooth" });
  };


  return (
    <>
      <div className="bg-[#ed165f] ">
        <div className="flex justify-center items-center container mx-auto bg-[url('../images/bg_logo.png')] bg-contain bg-center bg-no-repeat">
            <CarouselComponent  />
        </div>
        <div className="box text-center p-10">
          <h1 className="text-white text-2xl">Explore our collection</h1>
          <Image onClick={handleLinkClick} className=" mt-3 cursor-pointer drop-shadow-2xl bounce-2 mx-auto" src={Scroll} width={20} height={20} />
        </div>
      </div>
      <style>
        {`

          .box img {
            align-self: flex-center;
            animation-duration: 3s;
            animation-iteration-count: infinite;
            margin: 0 auto 0 auto;
            transform-origin: bottom;
          }
          .bounce-2 {
            animation-name: bounce-2;
          }
          @keyframes bounce-2 {
            0%   { transform: translateY(0); }
            50%  { transform: translateY(15px); }
            100% { transform: translateY(0); }
          }

        `}
      </style>
    </>
  )
}

export default Header