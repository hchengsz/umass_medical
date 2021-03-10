import React from "react";
import Button from "@material-ui/core/Button";

function Header() {
  return (
    <>
      <div className="header-img-container">
        <p className="header-p1">GET YOUR DEGREE</p>
        <p className="header-p2">Find the medical program</p>
        <p className="header-p3"> that is right for you.</p>
        <p className="header-p4">
          Our MD program is recognized for excellence in primary care training
          by U.S. News & World Report.{" "}
        </p>
        <Button variant="contained" color="primary" size="large">
          Get Start
        </Button>
      </div>
    </>
  );
}

export default Header;
