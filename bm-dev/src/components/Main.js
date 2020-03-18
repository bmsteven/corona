import React from 'react'

//style
import "../styles/components/main/main.css"

//images
import pricing from "../images/pricing.jpeg"

//dependencies


//main-content section component
const HtmlCss = () => {
    return (
      <section>
        <Card />
        <Card />
        <Card />
      </section>
    );
}

const Js = () => {
  return (
    <section>
      <Card />
      <Card />
      <Card />
    </section>
  );
};

const Reactjs = () => {
  return (
    <section>
      <Card />
      <Card />
      <Card />
    </section>
  );
};

//card
const Card = () => {
    return (
      <article>
        <div className="image-section">
          <img src={pricing} alt="pricing" />
        </div>
        <div className="post-description">
          <h2>Awesome pricing showcase design</h2>
          <p>
            Secondary line text Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nam massa quam. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nam massa quam.
          </p>
          <div className="btns">
            <a href="codesandbox.com" className="btn-primary">View Demo</a>
            <a href="codesandbox.com" className="btn-primary">Watch Video</a>
          </div>
        </div>
      </article>
    );
}

export default function Main() {
    return (
      <main className="main-content">
        <div className="content-container">
          <header>
            <nav>
              <div className="container">
                <ul>
                  <li className="active">HTML & CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="content-showcase">
            <div className="html-css-showcase showcase" id="html-css-showcase">
              <HtmlCss />
            </div>
            <div
              className="javascript-showcase showcase"
              id="javascript-showcase"
            >
              <Js />
            </div>
            <div className="react-showcase showcase" id="react-showcase">
              <Reactjs />
            </div>
          </div>
        </div>
      </main>
    );
}
