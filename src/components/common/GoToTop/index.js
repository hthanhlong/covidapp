import React, { useEffect, useState } from "react";
import "./style.scss";

const GoToTop = () => {
  const [isShow, setIsShow] = useState(false);

  const handleOnScroll = (e) => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 800) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  const handleOnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    document.addEventListener("scroll", handleOnScroll);
    return () => {
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  return (
    <div className="button-top">
      {isShow && <div onClick={handleOnTop}>Go to top</div>}
    </div>
  );
};

export default GoToTop;
