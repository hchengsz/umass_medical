import background from "../img/umms2.png";
import Button from "@material-ui/core/Button";

function Staffs() {
  return (
    <>
      <div className="hero-container">
        <img src={background} alt="background" className="background-img" />
        <div className="hero-overlay-content">
          <h3>GET ANSWERS</h3>
          <h1 style={{ margin: 0, padding: 0 }}>Ask a real student</h1>
          <p>
            Whether you have a quick question or want some hosting tips, you can
            message a host and get answers
          </p>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ maxWidth: 150 }}
          >
            Get Start
          </Button>
        </div>
      </div>
    </>
  );
}

export default Staffs;
