import img1 from "../img/student0.jpg";
import img2 from "../img/student1.jpg";
import img3 from "../img/student2.png";
import img4 from "../img/student3.jpg";
import React from "react";
import { useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const studentInfo = [
  {
    label:
      "UMMS has enabled me to tap into my creativity and spend more time with my career.",
    name: " Kelly,",
    status: "International Student at UMass Medical School",
    imgPath: img1,
  },
  {
    label:
      "You don't have to live a nine to five life. You can open up your mind, and ready to learn.",
    name: " Peter,",
    status: "Senior Student at UMass Medical School",
    imgPath: img2,
  },
  {
    label:
      "Studying at UMMS has enabled me to be my own person, and dictate how I spend my time and what I do.",
    name: " Darrel,",
    status: "Senior Student at UMass Medical School",
    imgPath: img3,
  },
  {
    label:
      "When I was a student there, people helped me. I can't wait to share the sprit with the others.",
    name: " Ryo,",
    status: "UMass Medical School Alumnus",
    imgPath: img4,
  },
];

function Student() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="student-root">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {studentInfo.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img src={step.imgPath} alt={step.label} aria-hidden="true" />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper
        square
        elevation={0}
        style={{
          backgroundColor: "#f7f7f7",
          marginLeft: "4vw",
          marginRight: "4vw",
          textAlign: "start",
        }}
      >
        <h1 style={{ marginBottom: "4vw" }}>{studentInfo[activeStep].label}</h1>
        <p style={{ margin: 0, padding: 1 }}>{studentInfo[activeStep].name}</p>
        <p style={{ margin: 0, padding: 1 }}>
          {studentInfo[activeStep].status}
        </p>
      </Paper>
    </div>
  );
}

export default Student;
