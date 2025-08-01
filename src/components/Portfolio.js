import Card from "./Card";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import Chip from "./Chip";
import { projects } from "../constants/data";

const Portfolio = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="Personal Projects" />
          </div>
        </div>
        <div className="row">
          {projects.map((project) => (
            <div
              className="col-12 col-sm-6"
              key={`project-${project.id}`}
            >
              <Card>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="techs">
                  {project.techs.map((tech) => (
                    <Chip size="sm" text={tech} id={tech} />
                  ))}
                </div>
                <div className="btn-wrapper d-flex justify-content-start align-items-center">
                  <Button url={project.demo} type="cta" size="sm" text="View Demo" />
                  <Button url={project.code} type="text" text="View Code" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
