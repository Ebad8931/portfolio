import SectionTitle from "./SectionTitle";
import Chip from "./Chip";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="I work with" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 d-flex flex-wrap justify-content-center">
            {skills.map((skill) => (
              <Chip size="lg" text={skill} key={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
