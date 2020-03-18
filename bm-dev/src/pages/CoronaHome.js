import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import ImageData from "../components/coronaImage";
import Stats from "../components/Stats";

//components
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

//images
import Hero from "../images/hero.svg";
import Cough from "../images/cough.svg";
import Fever from "../images/fever.svg";
import Breath from "../images/breath.svg";

const Emergency = () => {
  return (
    <div className='emergency'>
      <div className='container'>
        <div className='left'>Unajihisi una dalili za COVID-19?</div>
        <div className='right'>
          <span>
            piga: <a href='tel:0800110124'>0800110124</a>
            <span> au</span>
          </span>
          <span>
            piga: <a href='tel:0800110125'>0800110125</a>
          </span>
        </div>
      </div>
    </div>
  );
};

const Source = () => {
  return (
    <div className='source'>
      <div className='container'>
        <div className='left'>
          <h2>
            Huu ukurasa unatoa taarifa juu ya ugonjwa wa COVID-19, dalili na
            namna ya kujikinga na ugonjwa wa <span>COVID-19</span>
          </h2>
          <p>
            taarifa zote zinatoka moja kwa moja kutoka Chuo Kikuu cha John
            Hopkins kilichopo Marekani.
          </p>
          <a
            href='https://covid19.mathdro.id/api'
            target='_blank'
            rel='noopener noreferrer'
            className='primary-btn'
          >
            Source
          </a>
        </div>
        <div className='right'>
          <img src={Hero} alt='' />
        </div>
      </div>
    </div>
  );
};

// const Comparison = () => {

// }

const CoronaHome = () => {
  useEffect(() => {
    document.title = `COVID-19 - coronavirus pandemic updates`;
  });
  return (
    <>
      <NavBar />
      <main id='home'>
        <Emergency />
        <Source />
        <div className='stats' id='facts'>
          <div className='container'>
            <h1>Taarifa</h1>
            <div className='world facts'>
              <p>Hii ni taarifa ya COVID-19 ya dunia yote</p>
              <Stats url='https://covid19.mathdro.id/api' />
            </div>
            <div className='tz facts'>
              <p>Taarifa za tanzania juu ya corona virus</p>
              <Stats url='https://covid19.mathdro.id/api/countries/tz' />
            </div>
            <Link to='/all-countries' className='primary-btn'>
              Angalia nchi zote
            </Link>
          </div>
        </div>
        <div className='symptoms' id='symptoms'>
          <div className='container'>
            <h2>Dalili kuu za COVID-19 (Coronavirus)</h2>
            <p>
              Dalili za COVID-19 zinatofautiana kutoka kutoonesha dalili yoyote
              hadi kuonesha kuwa katika hali mbaya, na zinaanza kuonekana
              kuanzia siku 2 toka mgonjwa aambukizwe had siku 14
            </p>
            <div className='showcase'>
              <article>
                <img src={Fever} alt='' />
                <h2>Joto la mwili kupanda</h2>
              </article>
              <article>
                <img src={Cough} alt='' />
                <h2>Kikohozi kikavu na mafua</h2>
              </article>
              <article>
                <img src={Breath} alt='' />
                <h2>Upumuaji wa shida</h2>
              </article>
            </div>
          </div>
        </div>
        <Emergency />
        {/* <div className='corona-map'>
        <ImageData />
      </div> */}
        <Footer />
      </main>
    </>
  );
};

export default CoronaHome;
