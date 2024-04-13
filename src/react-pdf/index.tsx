// import { PDFViewer } from "@react-pdf/renderer";
// import React from "react";
// import MyDocument from "./CvPdfComp";

// const MyPDFViewer = () => {
//   return (
//     <div>
//       {/* <PDFViewer>
//     <MyDocument />
//     </PDFViewer> */}
//       ghfhj
//       {/* <PDFViewer
//         style={
//           {
//             //   width: window.innerWidth, //the pdf viewer will take up all of the width and height
//             //   height: window.innerHeight,
//           }
//         }
//       > */}
//       <PDFViewer width="600" height="800">
//         <>
//           <MyDocument />
//         </>
//       </PDFViewer>
//     </div>
//   );
// };

// export default MyPDFViewer;

// import React from "react";
// import dynamic from "next/dynamic";
// import { Document } from "@react-pdf/renderer";
// import MyPage1 from "./CvPdfComp";

// const DynamicPDFViewer = dynamic(
//   () => import("react-pdf/dist/esm/entry.webpack")
// );

// const MyPDFViewer: React.FC = () => {
//   return (
//     <div>
//       {typeof window !== "undefined" && (
//         <DynamicPDFViewer>
//           <Document>
//             <MyPage1 />
//           </Document>
//         </DynamicPDFViewer>
//       )}
//     </div>
//   );
// };

// export default MyPDFViewer;

// import React from "react";
// import dynamic from "next/dynamic";

// const { Document, Page } = dynamic(
//   () => import("react-pdf/dist/esm/entry.webpack"),
//   {
//     ssr: false, // Ensure that this component is not rendered on the server side
//   }
// );

// const MyPDFViewer: React.FC = () => {
//   return (
//     <div>
//       {typeof window !== "undefined" && (
//         <Document file="path/to/your/pdf/document.pdf">
//           <Page pageNumber={1} />
//         </Document>
//       )}
//     </div>
//   );
// };

// export default MyPDFViewer;

"use client";
import ReactPDF, { Document, PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import MyPage1 from "./CvPdfComp";

import dynamic from "next/dynamic";
import MyDocument from "./MyDocument";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const MyPDFViewer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Check if window is defined (runs in client-side)
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    }
  }, []); // Empty dependency array to run only once after component mount

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2px",
        }}
      >
        <button
          className="bg-cyan-500 text-cyan-600"
          style={{
            backgroundColor: "#0369a1",
            color: "#f8fafc",
            padding: "4px 30px",
            borderRadius: "6px",
            fontWeight: 700,
          }}
        >
          <PDFDownloadLink
            document={<MyDocument />}
            fileName={"Amartya_Sarkar_RESUME_2024.pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Resume Loading..." : "Download Resume"
            }
          </PDFDownloadLink>
        </button>
      </div>

      <PDFViewer
        style={{
          //   width: "800px",
          //   height: "600px",
          width: windowWidth, //the pdf viewer will take up all of the width andheight
          height: windowHeight,
        }}
      >
        {/* <>{ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`)};</> */}
        <MyDocument />
        {/* <Document>
          <MyPage1 />
        </Document> */}
      </PDFViewer>
      {/* <div className="download-link">
        <PDFDownloadLink
          document={
            <Document>
              <MyPage1 />
            </Document>
          }
          fileName={"SelfPotraintExtensive.pdf"}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading..." : "Download Invoice"
          }
        </PDFDownloadLink>
      </div> */}

      {/* <h2>hgjh</h2> */}
    </div>
  );
};

export default MyPDFViewer;
