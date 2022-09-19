import React from "react";
import Image from "next/image";
import cult from "../public/images/1236774.jpg";

var exec = require("child_process").execFile;

var fun = function () {
  //exec("D:\\Games\\Cult of the Lamb\\Cult Of The Lamb.exe");
};

function Home() {
  return (
    <React.Fragment>
      <div className="grad min-h-screen w-full overflow-hidden">
        <svg
          className="absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 495"
          fill="none"
        >
          <path
            fill="#d926a9"
            fill-opacity="1"
            d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"
          ></path>
        </svg>
        <div className="absolute top-0 left-0 w-full h-full overflow-y-hidden mask">
          <Image src={cult} layout="responsive" alt="" />
        </div>
        <div className="z-10 relative ml-10 card w-72 shadow-xl bg-opacity-80 bg-gray-800 text-neutral-content mt-24">
          <div className="flex justify-center">
            <p className="text-[#ffffff] font-bold text-2xl overflow-auto mt-10">
              Cult of the Lamb
            </p>
          </div>
          <div className="flex justify-center mt-8 mb-10">
            <button
              className="btn btn-secondary btn-active btn-md w-28"
              onClick={fun}
            >
              <img src="/icons/play.svg" className="mr-4" />
              <span>Play</span>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
