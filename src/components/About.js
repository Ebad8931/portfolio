import SectionTitle from "./SectionTitle";
import Video from '../assets/about.mp4';
import Play from "../assets/play.svg";
import { useState, useRef } from "react";

const About = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    // You can add additional logic here before or after the click
    console.log('Video clicked!'); 
  };

  const handlePlay = () => {
    setPlay(true)
    if (videoRef.current) { 
      console.log(videoRef.current)
      videoRef.current?.play();
    }
  };

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <SectionTitle title="About Me" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-10 video-wrapper">
            {!play && <div className="overlay" />}
            <video
              ref={videoRef}
              src={Video}
              type="video/mp4"
              controls={play ? true : false}
              preload="auto"
              playsInline={true}
              onClick={handleClick}
            >
              Your browser does not support the video tag.
            </video>
            {!play && (
              <button className="play" onClick={handlePlay}>
                <img src={Play} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
