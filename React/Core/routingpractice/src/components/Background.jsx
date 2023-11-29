import React from "react";
import { useParams } from "react-router-dom";

const Background = (props) => {
  const { word, usercolor, userbackgroundColor } = useParams();
  return (
    <div>
      {isNaN(word) ? 
        <p
          style={
            usercolor
              ? { color: usercolor, backgroundColor: userbackgroundColor }
              : null
          }
        >
          The word is : {word}
        </p>
       : 
        <p>This is a number: {word}</p>
      }
    </div>
  );
};

export default Background;
