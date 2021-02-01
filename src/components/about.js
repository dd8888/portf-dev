import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <br></br>
        <br></br>

        <span style={{ textAlign: "center" }}>
          I also recently started writing about programming, you might like my{" "}
          <a
            style={{ fontWeight: "bold", color: "black" }}
            href="https://blog.daviddiazh.dev"
          >
            posts
          </a>
        </span>

        {/*<div className="about-section">
           <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div> */}
        {/* <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div> 
        </div>*/}
      </div>
    </div>
  )
}

export default About
