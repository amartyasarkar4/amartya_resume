"use server";
import fs from "fs";
import path from "path";

export const getSvgDataUri = (filePath: string): string => {
  const svgPath = path.join(process.cwd(), "public", filePath);
  const svgContent = fs.readFileSync(svgPath, "utf-8");
  const base64Svg = Buffer.from(svgContent).toString("base64");
  return `data:image/svg+xml;base64,${base64Svg}`;
};
