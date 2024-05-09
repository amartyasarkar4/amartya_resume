"use client";
import React, { useEffect, useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Svg,
  G,
  Polygon,
  Link,
} from "@react-pdf/renderer";
import { getSvgDataUri } from "@/utils/svgUtils";
import ExtensiveReportHeader from "./extra/ExtensiveReportHeader";

// const svgImg = require("../../public/pdfcomp/call.svg");
// const svgString = `
//   ${svgImg}
// `;

// const svgDataUri = `data:image/svg+xml;base64,${Buffer.from(svgString).toString(
//   "base64"
// )}`;

// const Tiger = () => (

// );

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: "20px",
    paddingRight: "30px",

    backgroundColor: "#fff",
  },
  pageFlex: {
    display: "flex",
    flexDirection: "row",
  },
  section: {
    marginHorizontal: "20px",
    padding: "5px",
    flexGrow: 0,
    width: "50%",
  },
  smText: {
    fontSize: "9px",
    fontFamily: "poppins",
    fontWeight: 400,
  },
  smboldText: {
    fontSize: "9px",
    fontFamily: "poppins",
    fontWeight: 700,
    marginVertical: "5px",
  },
  mdText: {
    fontSize: "11px",
    fontFamily: "poppins",
    fontWeight: 500,
  },
  mdBoldText: {
    fontSize: "10px",
    fontFamily: "poppins",
    fontWeight: 700,
  },
  lgText: {
    fontSize: "13px",
    fontFamily: "poppins",
    fontWeight: 500,
  },
  lgBoldText: {
    fontSize: "13px",
    fontFamily: "poppins",
    fontWeight: 700,
  },
  flexComp: {
    display: "flex",
    flexDirection: "row",
    marginVertical: "5px",
  },
  bullet: {
    fontSize: 12,
    marginRight: 5,
  },
  imgSM: {
    width: "10px",
    height: "10px",
    marginRight: "3px",
  },
});

// Create Document Component
const MyPage1 = () => {
  //   const svgFilePath = "/call.svg"; // Path to your SVG file in the public folder
  //   const svgDataUri = getSvgDataUri(svgFilePath);

  const myUr =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PgoNPCEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iODAwcHgiIGhlaWdodD0iODAwcHgiIHZpZXdCb3g9IjAgMCAxMjAgMTIwIiBpZD0iTGF5ZXJfMSIgdmVyc2lvbj0iMS4xIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KDTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiNGRkI1NjI7fQ0KCS5zdDF7ZmlsbDojM0YzRjNGO30NCgkuc3Qye2ZpbGw6IzQzOERGRjt9DQoJLnN0M3tmaWxsOiMzRDgxRTI7fQ0KPC9zdHlsZT4KDTxnPgoNPGc+Cg08ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iMjAuMSIgY3k9IjY1IiByeD0iNi40IiByeT0iNi40Ii8+Cg08ZWxsaXBzZSBjbGFzcz0ic3QwIiBjeD0iOTkuOSIgY3k9IjY1IiByeD0iNi40IiByeT0iNi40Ii8+Cg08L2c+Cg08cGF0aCBjbGFzcz0ic3QwIiBkPSJNOTQuMSw1My4xQzkzLjYsMzQuOCw3OC41LDIwLDYwLDIwYy0xOC41LDAtMzMuNSwxNC43LTM0LjEsMzMuMWgtNEMyMi41LDMyLjYsMzkuMywxNiw2MCwxNiAgIGMyMC43LDAsMzcuNSwxNi41LDM4LjEsMzcuMUg5NC4xeiIvPgoNPGc+Cg08cGF0aCBjbGFzcz0ic3QxIiBkPSJNNjkuNCwxMDEuOGMtMi40LDAtNC0wLjEtNC4yLTAuMWwwLjItMi4yYzAuMiwwLDIzLDEuNywyNS44LTcuN2MzLTEwLjUsMS41LTIxLjUsMS41LTIxLjZsMi4yLTAuMyAgICBjMC4xLDAuNCwxLjYsMTEuNi0xLjYsMjIuNUM5MC43LDEwMC43LDc2LjYsMTAxLjgsNjkuNCwxMDEuOHoiLz4KDTwvZz4KDTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik03MC40LDEwNEg2MC4yYy0wLjksMC0xLjYtMC43LTEuNi0xLjZ2LTRjMC0wLjksMC43LTEuNiwxLjYtMS42aDEwLjJjMC45LDAsMS42LDAuNywxLjYsMS42djQgICBDNzIsMTAzLjMsNzEuMywxMDQsNzAuNCwxMDR6Ii8+Cg08Zz4KDTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yOC41LDUxaC03LjFjLTIuMiwwLTQsMi00LDQuNXYxNy45YzAsMi41LDEuOCw0LjUsNCw0LjVoNy4xYzEuNSwwLDIuOC0xLjQsMi44LTMuMVY1NCAgICBDMzEuMiw1Mi4zLDMwLDUxLDI4LjUsNTF6Ii8+Cg08cGF0aCBjbGFzcz0ic3QyIiBkPSJNOTguNyw1MWgtNy4xYy0xLjUsMC0yLjgsMS40LTIuOCwzLjF2MjAuNmMwLDEuNywxLjIsMy4xLDIuOCwzLjFoNy4xYzIuMiwwLDQtMiw0LTQuNXYtMTggICAgQzEwMi42LDUyLjksMTAwLjgsNTEsOTguNyw1MXoiLz4KDTwvZz4KDTxnPgoNPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjQsNzAuOGwtMS43LDEuN2MtMi42LDIuNi01LjIsNC4zLTcuMywyLjJMNDcuMiw2Mi41Yy0yLjItMi4yLTAuNS00LjcsMi4yLTcuM2wxLjctMS43bC04LjMtOC4zbC0yLjQsMi40ICAgIGMtNC4zLDQuMy00LjMsMTEuMSwwLDE1LjNMNTksODEuNWM0LjMsNC4zLDExLjEsNC4zLDE1LjMsMGwyLjQtMi40TDY4LjQsNzAuOHoiLz4KDTxnPgoNPHBhdGggY2xhc3M9InN0MyIgZD0iTTUyLjUsNTIuN2wtOC44LTguOGMtMC44LTAuOC0yLjEtMC44LTIuOSwwbC0xLjUsMS41Yy0wLjgsMC44LTAuOCwyLjEsMCwyLjlsOC44LDguOGMwLjgsMC44LDIuMSwwLjgsMi45LDAgICAgIGwxLjUtMS41QzUzLjMsNTQuOSw1My4zLDUzLjYsNTIuNSw1Mi43eiIvPgoNPHBhdGggY2xhc3M9InN0MyIgZD0iTTc4LDc4LjJsLTguOC04LjhjLTAuOC0wLjgtMi4xLTAuOC0yLjksMGwtMS41LDEuNWMtMC44LDAuOC0wLjgsMi4xLDAsMi45bDguOCw4LjhjMC44LDAuOCwyLjEsMC44LDIuOSwwICAgICBsMS41LTEuNUM3OC44LDgwLjMsNzguOCw3OSw3OCw3OC4yeiIvPgoNPC9nPgoNPGc+Cg08cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTguOSw1NC4zYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuN2MtMC4yLTAuOSwwLjMtMS42LDEuMi0xLjljMy0wLjcsNiwwLjIsOC4xLDIuM3MzLDUuMiwyLjMsOC4xICAgICBjLTAuMiwwLjktMSwxLjMtMS45LDEuMmMtMC45LTAuMi0xLjMtMS0xLjItMS45YzAuNC0xLjktMC4xLTMuOS0xLjUtNS4zYy0xLjQtMS40LTMuMy0yLTUuMy0xLjVDNTkuOCw1NC44LDU5LjMsNTQuNiw1OC45LDU0LjN6ICAgICAiLz4KDTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01Ny42LDQ4LjJjLTAuMi0wLjItMC40LTAuNS0wLjQtMC43Yy0wLjItMC45LDAuMy0xLjYsMS4yLTEuOWM1LjEtMS4yLDEwLjMsMC4zLDEzLjksNCAgICAgYzMuNywzLjcsNS4yLDguOCw0LDEzLjljLTAuMiwwLjktMSwxLjQtMS45LDEuMmMtMC45LTAuMi0xLjQtMS0xLjItMS45YzAuOS00LTAuMy04LjEtMy4xLTExcy03LTQuMS0xMS0zLjEgICAgIEM1OC41LDQ4LjcsNTgsNDguNiw1Ny42LDQ4LjJ6Ii8+Cg08cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTYuMyw0Mi4xYy0wLjItMC4yLTAuNC0wLjUtMC40LTAuN2MtMC4yLTAuOSwwLjMtMS42LDEuMi0xLjljNy4xLTEuNiwxNC41LDAuNSwxOS43LDUuNiAgICAgYzUuMiw1LjIsNy4zLDEyLjUsNS42LDE5LjdjLTAuMiwwLjktMSwxLjQtMS45LDEuMmMtMC45LTAuMi0xLjQtMS0xLjItMS45YzEuNC02LjEtMC40LTEyLjQtNC44LTE2LjcgICAgIGMtNC40LTQuNC0xMC43LTYuMi0xNi43LTQuOEM1Ny4yLDQyLjcsNTYuNiw0Mi41LDU2LjMsNDIuMXoiLz4KDTwvZz4KDTwvZz4KDTwvZz4KDTwvc3ZnPg==";

  const svgBase64 =
    "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gVXBsb2FkIHRvOiBTdmcgU3R5bGUgRGVzYyAtLT4NCjxzdmcgd2lkdGg9IjgwMHB4IiBoZWlnaHQ9IjgwMHB4IiB2aWV3Qm94PSIwIDAgMTIwIDEyMCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRkZCNTYyO30NCgkuc3Qxe2ZpbGw6IzMzRjNGMzt9DQoJLnN0MntmaWxsOiMzRDgxRTI7fQ0KPC9zdHlsZT4NCjwvZz4NCjwvc3ZnPgo=";
  const svgur = `data:image/svg+xml;base64,${svgBase64}`;

  //   React.useEffect(async () => {
  //     console.log("gvgghsd", await svgDataUri);
  //   });
  // const [svgDataUri, setSvgDataUri] = useState(null);

  //   useEffect(() => {
  //     const svgFilePath = "/call.svg";

  //     getSvgDataUri(svgFilePath)
  //       .then((dataUri) => {
  //         setSvgDataUri(dataUri);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching SVG data URI:", error);
  //       });
  //   }, []); // Empty dependency array to run once after component mount

  const circleImgPath = "/newCircle.svg";
  //   const circleDataUri = getSvgDataUri(circleImgPath);

  const uName = "Amartya Sarkar";
  const uImage = "myImg";
  const basicInfo = {
    uName,
    uImage,
  };

  return (
    <Page size="A4" style={styles.page}>
      <ExtensiveReportHeader userBasicInfo={basicInfo} />
      <View style={styles.pageFlex}>
        <View style={styles.section}>
          <Image
            // alt="ownImg"
            src={"/myImg.png"}
            style={{
              width: "48px",
              borderRadius: "50%",
              border: "4px solid blue",
            }}
          />
          <Text style={styles.lgText}>Amartya Sarkar</Text>
          <Text style={styles.smText}>MERN Developer</Text>
          <Text style={styles.smText}>
            (<Text style={{ fontWeight: 700 }}>Next.js, TailwindCSS</Text>,
            Node.js, Nest.js, Postgree SQL, MongoDb expert)
          </Text>
          <View style={styles.flexComp}>
            <Image
              // alt=""
              src={"/pdfcomp/call.png"}
              style={{
                width: "15px",
                height: "15px",
                marginRight: "3px",
              }}
            />

            {/* <Image src={`${svgDataUri}`} style={{ width: "50px" }} /> */}
            {/* <Image src={myUr} style={{ width: "50px" }} /> */}
            {/* <Image src={svgur} style={{ width: "60px", height: "60px" }} /> */}
            {/* <Image src="/call.svg" style={{ width: "60px", height: "60px" }} /> */}
            {/* <Text>{svgDataUri}</Text> */}

            <Text style={styles.smText}>8167302455 , 7679250758</Text>
          </View>
          <View style={styles.flexComp}>
            <Image
              // alt="git"
              src={"/pdfcomp/github.png"}
              style={{
                width: "11px",
                height: "11px",
                marginRight: "3px",
              }}
            />

            <Link src="https://github.com/amartyasarkar4" style={styles.smText}>
              https://github.com/amartyasarkar4
            </Link>
          </View>
          <View style={styles.flexComp}>
            <Image
              // alt="git"
              src={"/pdfcomp/gmail.png"}
              style={{
                width: "12px",
                height: "12px",
                marginRight: "3px",
              }}
            />

            <Link src="sarkaramartya0@gmail.com" style={styles.smText}>
              sarkaramartya0@gmail.com
            </Link>
          </View>
          <View style={styles.flexComp}>
            <Image
              // alt="git"
              src={"/pdfcomp/linkedin.png"}
              style={{
                width: "12px",
                height: "12px",
                marginRight: "3px",
              }}
            />

            <Link
              src="https://www.linkedin.com/in/amartya-sarkar-7aa09b188/"
              style={styles.smText}
            >
              https://www.linkedin.com/in/amartya-sarkar-7aa09b188/
            </Link>
          </View>
          <View style={styles.flexComp}>
            <Image
              // alt={"git"}
              src={"/pdfcomp/twitter.png"}
              style={{
                width: "12px",
                height: "12px",
                marginRight: "3px",
              }}
            />

            <Link
              src="https://twitter.com/sarkaramartya43"
              style={styles.smText}
            >
              https://twitter.com/sarkaramartya43
            </Link>
          </View>

          <View>
            <Text style={styles.lgBoldText}>Achievements:</Text>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/right-arrow.png"} style={styles.imgSM} />
              <Text style={styles.mdText}>
                * 11 months <Text style={{ fontWeight: 700 }}>Internship</Text>{" "}
                at <Text style={{ fontWeight: 700 }}>Eubrics</Text>
              </Text>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/right-arrow.png"} style={styles.imgSM} />
              <Text style={styles.mdText}>* Worked As a Freelancer</Text>
            </View>
          </View>

          <View>
            <Text style={styles.lgBoldText}>Projects:</Text>
            <Text style={{ marginBottom: "6px" }}></Text>
            <Text style={styles.mdBoldText}>Frontend Live Links:</Text>

            <Text style={{ marginBottom: "2px" }}></Text>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://meeting-schedule-delta.vercel.app/disscussion"
                style={styles.smText}
              >
                https://meeting-schedule-delta.vercel.app/disscussion
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://multi-step-form-smoky.vercel.app"
                style={styles.smText}
              >
                https://multi-step-form-smoky.vercel.app
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://goindiaassignment.vercel.app"
                style={styles.smText}
              >
                https://goindiaassignment.vercel.app
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://home-design-eta.vercel.app"
                style={styles.smText}
              >
                https://home-design-eta.vercel.app
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://teams-meet-dashboard.vercel.app/"
                style={styles.smText}
              >
                https://teams-meet-dashboard.vercel.app/
              </Link>
            </View>
            <Text style={{ marginBottom: "4px" }}></Text>
            <Text style={styles.mdBoldText}>Full Stack Live Links:</Text>
            <Text style={{ marginBottom: "3px" }}></Text>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://long-cyan-coati.cyclic.app/"
                style={styles.smText}
              >
                https://long-cyan-coati.cyclic.app/
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point-cursor.png"} style={styles.imgSM} />
              <Link
                src="https://new-analysis-chart-frontend.vercel.app"
                style={styles.smText}
              >
                https://new-analysis-chart-frontend.vercel.app
              </Link>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
              <Text style={styles.smText}>
                Create a Device Repairing Center’s (repairing mobiles, tablets,
                laptops any many other electronics,) slot Booking Website in
                Freelance work
              </Text>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
              <Text style={styles.smText}>
                Create A Instagram look like website
              </Text>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
              <Text style={styles.smText}>
                Flipkart look like website:Here admin can create product list,
                give product photo, and user can purchase any item.Razorpay
                using for Online payment.Redux ,react-redux for store.
              </Text>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
              <Text style={styles.smText}>
                Create a Live Video Streaming web also.
              </Text>
            </View>
            <View style={styles.flexComp}>
              <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
              <Text style={styles.smText}>Solidity Messaging App,</Text>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.lgBoldText}>SKILLS:</Text>
          <Text style={{ marginBottom: "6px" }}></Text>
          <View style={styles.flexComp}>
            <Text style={styles.smText}>
              <Text style={{ fontWeight: 600 }}>
                React.js, NEXT.js, Tailwind CSS,
              </Text>{" "}
              Material UI, <Text style={{ fontWeight: 600 }}>Node</Text>.js,
              Nest.js, Postgree SQL, MongoDB,{"  "}
              <Text style={{ fontWeight: 600 }}>Redux</Text>, Javascript, Html,
              CSS, <Text style={{ fontWeight: 600 }}>OOPs</Text> , Solidity,
              python, <Text style={{ fontWeight: 600 }}>C++ , </Text>
              <Text style={{ fontWeight: 600 }}>DSA , </Text>
              Bootstrap
            </Text>
          </View>
          <Text style={{ marginBottom: "6px" }}></Text>

          <Text style={styles.lgBoldText}>Features worked at Internship:</Text>
          <Text style={{ marginBottom: "6px" }}></Text>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>
              React-PDF generation ,personalized 10-page report detailing
              user&apos;s unique strengths, developmental areas for improvement
              , and a tailored path to skill enhancement/empower growth journey.
            </Text>
          </View>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>
              Cron job , Run every-day or every-minute/every-hour
            </Text>
          </View>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>Excel to bulk-user creation,</Text>
          </View>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>
              aws cognito, google-calender integration, slack integration,
            </Text>
          </View>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>Oauth, email sending</Text>
          </View>
          <View style={styles.flexComp}>
            <Image src={"/pdfcomp/point.png"} style={styles.imgSM} />
            <Text style={styles.smText}>
              Responsive Figma/psd design convert,Redux
            </Text>
          </View>
          <Text style={{ marginBottom: "6px" }}></Text>

          <Text style={styles.lgBoldText}>Carrer-Onbjective:</Text>
          <Text style={{ marginBottom: "6px" }}></Text>
          <View style={styles.flexComp}>
            <Text style={styles.smText}>
              Embark on a transformative endeavor to address the shortcomings of
              today&apos;s world with a groundbreaking and purpose-driven
              initiative.
            </Text>
          </View>

          <Text style={{ marginBottom: "3px" }}></Text>

          <Text style={styles.mdText}>Other Interests:</Text>
          <Text style={{ marginBottom: "2px" }}></Text>

          <Text style={styles.smText}>Drawing, Cricket, Watching Movies</Text>

          <Text style={{ marginBottom: "6px" }}></Text>

          <Text style={styles.lgBoldText}>Education:</Text>
          <Text style={{ marginBottom: "6px" }}></Text>
          <View>
            <Text style={styles.smboldText}>
              B-Tech Computer-Science(2019-2023)
            </Text>
            <Text style={styles.smText}>Siliguri Institute Of Technology</Text>
            <Text style={styles.smText}>
              under-- MAKAUT( Maulana Abul Kalam Azad University of Technology)
            </Text>
            <Text style={styles.smboldText}>CGPA: 9.19</Text>
          </View>
          <View>
            <Text style={styles.smboldText}>Higher Secondary:</Text>
            <Text style={styles.smText}>
              Chowdhurihat Vivekananda Vidya Mandir,
            </Text>
            <Text style={styles.smText}>
              under-- WBCHSE(West Bengal Council Of Higher Secondary Education)
            </Text>
            <Text style={styles.smboldText}>Percentage: 77</Text>
          </View>

          <View>
            <Text style={styles.smboldText}>Secondary:</Text>
            <Text style={styles.smText}>
              Chowdhurihat Vivekananda Vidya Mandir,
            </Text>
            <Text style={styles.smText}>
              under-- WBBSE(West Bengal Board Of Secondary Education)
            </Text>
            <Text style={styles.smboldText}>Percentage: 86.28</Text>
          </View>

          <Text style={styles.smboldText}>Thank You,</Text>
        </View>
      </View>
    </Page>
  );
};

export default MyPage1;
