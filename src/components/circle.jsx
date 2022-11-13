import React from "react";

export default function circle(props) {
     return (
          <div
               className={
                    "rounded-circle position-absolute circle " +
                    props.backgroundColor +
                    "-background"
               }
               style={{
                    width: `${props.size}px`,
                    height: `${props.size}px`,
                    animationDuration: `${props.duration}s`,
                    top: `${props.top}px`,
                    bottom: `${props.bottom}px`,
                    right: `${props.right}px`,
                    left: `${props.left}px`,
               }}
          ></div>
     );
}
