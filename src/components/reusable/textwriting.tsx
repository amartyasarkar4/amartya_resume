import React from "react";
import { motion } from "framer-motion";

const AnimatedTextWord = (props: {
  text: String | null;
  firstColor: string;
  secondColor: string;
  secondColorAfterSpace: number;
  breakAfterSpace: number;
  textSize: string;
}) => {
  const words = props.text?.split("");

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  let spacecount = 0;

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "unset",
        padding: "5px",
      }}
      className={props.textSize}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1>
        {words?.map((word, index) => {
          word.charCodeAt(0) == 32 ? spacecount++ : null;

          // if(spacecount%2==0 && word.charCodeAt(0)==32){
          //   return "\n"
          // }

          return (
            <motion.span
              variants={child}
              style={{ marginRight: "0px", fontWeight: 700 }}
              className={props.secondColor}
              // spacecount >= props.secondColorAfterSpace
              //   ? props.secondColor
              //   : props.firstColor
              // }
              // className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-400 text-transparent bg-clip-text"
              key={index}
            >
              {word.charCodeAt(0) == 32 &&
              spacecount % props.breakAfterSpace == 0 ? (
                <br />
              ) : (
                word
              )}
            </motion.span>
          );
        })}
      </h1>
    </motion.div>
  );
};

export default AnimatedTextWord;
