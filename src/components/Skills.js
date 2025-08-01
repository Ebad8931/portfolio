import SectionTitle from "./SectionTitle";
import Chip from "./Chip";
import { skills } from "../constants/data";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="My Skills">
              <p>Here are the tools and technologies I work with on a regular basis. I am always learning, evolving, and staying updated with the latest in frontend development.</p>
            </SectionTitle>
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
