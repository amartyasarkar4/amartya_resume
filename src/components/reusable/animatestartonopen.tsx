import React, { useEffect, useState } from "react";
import AnimatedTextWord from "./textwriting";

const Animatestartonopen = (props: {
  carouseIndx: number;
  matchIndx: number;
  writeAnimeText: string;
}) => {
  const [textToSend, setTextToSend] = useState("");
  const [AnimeStart, setAnimeStart] = useState(false);
  useEffect(() => {
    console.log("ghhujgjjjkhjkhk,,", props.carouseIndx);
    console.log("ghhujgjjjkhjkhk,,", props.carouseIndx);
    console.log("ghhujgjjjkhjkhk,,", props.carouseIndx);
    if (props.carouseIndx == props.matchIndx) {
      setAnimeStart(true);
      setTextToSend(props.writeAnimeText);
    } else {
      setAnimeStart(false);
      setTextToSend("");
    }
  }, [props]);

  const start = () => {
    // setAnimeStart(true);
    // setTextToSend("Hello Friend Do you believe this is awesome");
  };
  return (
    <div>
      {AnimeStart ? (
        <AnimatedTextWord
          text={textToSend}
          firstColor="green"
          secondColor="red"
          secondColorAfterSpace={3}
          breakAfterSpace={3}
          textSize={"sd"}
        />
      ) : null}

      <button onClick={start}>start</button>
    </div>
  );
};

export default Animatestartonopen;
