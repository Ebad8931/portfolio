import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Card from "./Card";
import SectionTitle from "./SectionTitle";
import { education } from "../constants/data";

const Education = () => {
  return (
    <section id="academics" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="My Academics">
              <p>My academics journey laid the foundation for my path into tech—and it's still evolving.</p>
            </SectionTitle>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <VerticalTimeline lineColor="rgb(255, 189, 35)" layout="1-column-left">
              {education.map((edu) => (
                <VerticalTimelineElement
                  key={`education-${edu.id}`}
                  contentArrowStyle={{ display: "none" }}
                  date={edu.date}
                >
                  <Card>
                    <span className="title">
                      <h5>{edu.degree}</h5>
                      <em>&nbsp;&nbsp;in&nbsp;&nbsp;</em>
                      <h5>{edu.major}</h5>
                    </span>
                    <p className="location">{edu.college} | {edu.location} ({edu.achievements})</p>
                    <p className="d-sm-none">{edu.date}</p>
                  </Card>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;