import { useEffect, useState } from "react";

const MarginTop = () => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".MuiAppBar-positionFixed");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);
  
  return <div style={{ marginTop: navbarHeight }}></div>;
};

export default MarginTop;
