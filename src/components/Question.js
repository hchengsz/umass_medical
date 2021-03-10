import TextField from "@material-ui/core/TextField";
import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";

function Question() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <div className="questions">
        <div className="questions-card">
          <h1 style={{ fontSize: 50 }}>
            Find out more and connect with UMass Medical School
          </h1>
          <p style={{ maxWidth: 500 }}>
            We’ll share more about hosting and give you access to live webinars
            where experienced hosts can answer your questions.
          </p>
        </div>
        <div className="questions-card" style={{ maxWidth: 500, padding: 10 }}>
          <TextField
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            style={{ backgroundColor: "white", marginTop: 17, width: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="Phone #(Optional)"
            variant="outlined"
            style={{
              backgroundColor: "white",
              marginBottom: 20,
              width: "100%",
            }}
          />
          <FormControlLabel
            style={{ fontSize: 5 }}
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                name="checkedB"
                color="primary"
              />
            }
            label="I want to receive occasional insights and information from UMMS and can unsubscribe any time."
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ maxWidth: 150, marginTop: 17 }}
          >
            Apply Now
          </Button>
          <p style={{ fontSize: 14 }}>
            By selecting "Apply now," I agree that UMMS will process my personal
            information in accordance with the{" "}
            <a href="https://www.mozilla.org/zh-CN/" title="Knowing mozilla">
              UMMS Privacy Policy
            </a>
          </p>
        </div>
      </div>
      <div style={{ margin: "18vh" }}>
        <a href="https://www.umassmed.edu/">Privacy</a>
      </div>
    </>
  );
}

export default Question;
