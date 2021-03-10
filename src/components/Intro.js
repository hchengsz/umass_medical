import icon1 from "../img/icon1.png";
import icon2 from "../img/icon2.png";
import icon3 from "../img/icon3.png";

function Intro() {
  return (
    <>
      <div className="introduction">
        <div className="intro-card1">
          <h2>Facts about UMMS</h2>
          <p>
            UMMS was founded in 1962 to provide affordable, high-quality medical
            education to state residents and to increase the number of primary
            care physicians practicing in underserved areas of the state.
          </p>

          <p>
            Our mission is to advance the health and wellness of our diverse
            communities throughout Massachusetts and across the world by leading
            and innovating in education, research, health care delivery and
            public service.
          </p>
        </div>
        <div className="intro-card2">
          <h2>Why UMMS?</h2>
          <ul>
            <li>
              <img src={icon1} alt="World Class" />
              <h3>World Class</h3>
              <p>
                The UMass Medical School cooperates with multiple different
                universities around the world.
              </p>
            </li>
            <li>
              <img src={icon2} alt="PURCH track" />
              <h3>PURCH track</h3>
              <p>
                Our programs offer the opportunity to integrate population
                health into medical education.
              </p>
            </li>
            <li>
              <img src={icon3} alt="Top 10%" />
              <h3>Top 10%</h3>
              <p>
                Our graduates rank us in the top 1% for student satisfaction
                among all medical schools.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Intro;
