"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import MyDocument from "../MyDocument";

const DownloadButton = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      {isClient ? (
        <PDFDownloadLink
          document={<MyDocument />}
          fileName={"Amartya_Sarkar_RESUME_2024.pdf"}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Resume Loading..." : "Download Resume"
          }
        </PDFDownloadLink>
      ) : (
        <h2>load web..</h2>
      )}
    </>
  );
};

export default DownloadButton;
