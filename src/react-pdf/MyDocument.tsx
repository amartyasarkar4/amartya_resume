import { Document, Font } from "@react-pdf/renderer";
import React from "react";
import MyPage1 from "./CvPdfComp";

const MyDocument = () => {
  Font.register({
    family: "poppins", //Japanese Font,
    format: "truetype",
    fonts: [
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
        fontWeight: 400,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8V1tvFP-KUEg.ttf",
        fontWeight: 500,
      },
      {
        src: "http://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6V1tvFP-KUEg.ttf",
        fontWeight: 700,
      },
    ],
  });
  return (
    <>
      <Document>
        <MyPage1 />
      </Document>
    </>
  );
};

export default MyDocument;
