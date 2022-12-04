import React from "react";

const Circle = (props)=> {
     return (
          <div
               className={
                    "rounded-circle position-absolute circle " +
                    props.backgroundColor +
                    "-background"
               }
               style={{
                    width: `${props.size}em`,
                    height: `${props.size}em`,
                    animationDuration: `${props.duration}s`,
                    top: `${props.top}px`,
                    bottom: `${props.bottom}px`,
                    right: `${props.right}px`,
                    left: `${props.left}px`,
               }}
          ></div>
     );
}
export default Circle;