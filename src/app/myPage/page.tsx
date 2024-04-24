"use client";
import AnimatedTextWord from "@/components/reusable/textwriting";
import MyPDFViewer from "@/react-pdf";

import React from "react";

const MyPage = () => {
  return (
    <div>
      <div className="flex justify-center w-full text-center">
        <AnimatedTextWord
          text="Hello,dear Sorry for unble to show resume preview in Mobile Device so PLEASE download It by Clicking Download Resume"
          firstColor="text-cyan-700"
          secondColor="bg-gradient-to-r from-sky-900 via-fuchsia-500 to-lime-800 text-transparent bg-clip-text"
          secondColorAfterSpace={4}
          breakAfterSpace={8}
          textSize={"text-xl sm:text-3xl md:text-4xl lg:text-5xl"}
        />
      </div>

      <MyPDFViewer />
    </div>
  );
};

export default MyPage;
