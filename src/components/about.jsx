import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "HTML", porcentage: "80%", value: "80" },
        { id: "CSS3_skill", content: "CSS", porcentage: "75%", value: "75" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "85%",
          value: "85"
        },
        { id: "nodejs_skill", content: "Node JS", porcentage: "70%", value: "70" },
        {
          id: "ReactJS_skill",
          content: "React JS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "c++_skill",
          content: "C++",
          porcentage: "85%",
          value: "85"
        },
        {
          id: " ReactNative_skill",
          content: "React Native",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "MySql_skill",
          content: "My SQL",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "sqlServer_skill",
          content: "SQL Server",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "mongoDB_skill",
          content: "Mongo DB",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "android_skill",
          content: "Android Studio",
          porcentage: "70%",
          value: "70"
        }

      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "Passionate software developer with robust problem-solving skills and proven experience in creating and designing software. Seeking for challenging opportunities and willing to learn new technologies."
        },
     
        {
          id: "third-p-about",
          content:
            "Graduated from University of Jordan 2020 with a bachelor's degree in Computer Information Systems, then joined RebootKamp (Rbk) - An intensive 20-week program, Full Stack Web Based on Hack Reactor curriculum- ."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                     
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                     
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
