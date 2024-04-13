import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

import React from "react";

const styles = StyleSheet.create({
  fullPart: {
    height: "3%",
    paddingLeft: "50%",
    // backgroundColor: "yellow",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  imageSection: {
    flex: 1,
    paddingRight: "10px",
  },
  imageDesign: {
    width: "15px",
    height: "15px",
    borderRadius: "50%",
  },
  textdesign: {
    marginBottom: "2px",
    fontSize: "10px",
    fontWeight: 400,
    fontFamily: "poppins",
  },
  textSection: {
    flex: 14,
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
  },
  textdesignHead: {
    fontSize: "8px",
    fontWeight: 700,
    fontFamily: "poppins",
  },
  nameSection: {
    flex: 0.31,
    display: "flex",
    justifyContent: "center",
  },
  longRest: {
    flex: 0.69,
    paddingLeft: ".8px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  longLine: {
    flex: 0.5,
    marginLeft: ".8px",
    // marginTop: ".66px",
    backgroundColor: "#ea580c",
    height: "3px",
    borderRadius: "50%",
  },
  longLine2: {
    flex: 0.09,
    marginLeft: ".8px",
    backgroundColor: "#ea580c",
    height: "5px",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  longLineMiddleText: {
    flex: 0.41,
    alignItems: "center",
    textAlign: "center",
  },
  smallText: {
    fontSize: "6px",
  },
});

const ExtensiveReportHeader = (props: { userBasicInfo: any }) => {
  return (
    <View style={styles.fullPart}>
      <View style={styles.section}>
        <View style={styles.imageSection}>
          <Image
            src={`${props.userBasicInfo.uImage}.png`}
            style={styles.imageDesign}
          ></Image>
        </View>
        <View style={styles.textSection}>
          <View style={styles.nameSection}>
            <Text style={styles.textdesignHead}>
              {props.userBasicInfo.uName}
            </Text>
            {/* <Text style={styles.textdesign}>
              {props.userBasicInfo.department}
            </Text> */}
          </View>
          <View style={styles.longRest}>
            <View style={styles.longLine}></View>
            <View style={styles.longLineMiddleText}>
              <Text style={styles.smallText}>Talent Capability Lens</Text>
            </View>
            <View style={styles.longLine2}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExtensiveReportHeader;
