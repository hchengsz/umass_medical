import Button from "@material-ui/core/Button";
import React from "react";

function Footer() {
  const [html, setHtml] = React.useState(0);
  let handleScroll = function () {
    let scrollY = window.scrollY;
    if (scrollY >= 2000) {
      setHtml(1);
    } else {
      setHtml(0);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  });
  return (
    <div className="pop-window" style={{ opacity: html }}>
      <h3 style={{ marginRight: 15 }}>Interested in studying at UMMS?</h3>
      <Button variant="outlined" style={{ marginRight: 10 }}>
        Not yet
      </Button>
      <Button variant="contained" color="primary">
        Yes
      </Button>
    </div>
  );
}

export default Footer;
