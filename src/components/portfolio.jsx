import React from "react";

//import stock
import stock from "../img/music.jpg";
import stock1 from "../img/wedding.jpg";
import stock2 from "../img/skinCancerReact.jpg";
import stock3 from "../img/skin.jpg";
import stock4 from "../img/beatona.png";
import stock5 from "../img/logo.png";

class Portfolio extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">
                  From web components to mobile development check out my lastest
                  work
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock2} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">
                        Skin Cancer Detection|2020 (React Native)
                      </h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                          Mobile application allows user to capture image of his
                          abnormal skin to determine if there is skin cancer or
                          not based on deep learning model.
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/j1kQLbSMH6E">
                            Demo
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">Moody Music | 2020</h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                          {<br />}Web application provides music depends on user
                          mood, using Deezer API and material UI.{<br />}{" "}
                          Implemented using the MERN stack.
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/-12f4VDepb8">Demo</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock1} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">Wedding Planner | 2020</h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                          {<br />}Web application helps the bride and groom to
                          organize their wedding event. Also, they can create
                          their wish list. Implemented using the MERN stack.
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/5WrYOxVkzFU">Demo</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock5} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">
                        Ordering Food Application | 2019
                      </h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                          Android application allows user to order food from
                          pizza hut and send the order via email.
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/gK-GoswrC2s">{<br/>}Demo</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock4} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">Our Environment | 2019</h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                          Mobile application (Front-end) aims to increase citizens awarness
                          of recycling. Implemented using React Native.
                          
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/CeMXWOyc80c">Demo</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <div className="work-img">
                  <img src={stock3} alt="" className="img-fluid" />
                </div>
                <div className="work-content">
                  <div className="row">
                    <div className="col-sm-8">
                      <h3 className="w-title">Skin Cancer Detection|2019 </h3>
                      <div className="w-ctegory">
                        <span className="w-more">
                        Native Android Mobile application based on deep learning model and used Firebase ML kits to deploy
                        DL model on Android.
                        </span>
                      </div>
                      <div className="w-more">
                        <span className="w-ctegory">
                          <a href="https://youtu.be/GdgC2175gdE">Demo</a>
                        </span>
                      </div>
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

export default Portfolio;
