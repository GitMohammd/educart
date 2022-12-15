import React, { useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let closeDrowpdown = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", closeDrowpdown);

    return () => {
      document.removeEventListener("mousedown", closeDrowpdown);
    };
  });

  return domNode;
};

export default useClickOutside;
