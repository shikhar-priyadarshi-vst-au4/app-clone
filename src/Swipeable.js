import React, { useState, useEffect } from "react";

export const SwipeableItem = ({ children, width }) => {
  return (
    <>
      <div className="swipeable-item" style={{ width }}>
        {children}
      </div>
    </>
  );
};

export const Swipeable = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    newIndex < 0 && (newIndex = React.Children.count(children) - 1);
    newIndex >= React.Children.count(children) && (newIndex = 0);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <>
      <div className="swipeable">
        <div
          className="inner-body"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </>
  );
};
