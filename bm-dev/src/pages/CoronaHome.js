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
            Huu ukurasa unatoa taarifa juu ya ugonjwa wa <span>COVID-19</span>, dalili na
            namna ya kujikinga
          </h2>
          <p>
            Taarifa zote za idadi ya wagonjwa, vifo n.k zinatoka moja kwa moja kutoka Chuo Kikuu cha John
            Hopkins kilichopo Marekani.
          </p>
          <a
            href='https://coronavirus.jhu.edu/'
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

const Prevention = () => {
  return (
    <>
      <div className='prevention' id='prevention'>
        <header>
          <div className='container'>
            <h1>Uzuiaji</h1>
            <p>
              Kwa sasa hamna dawa wala tiba iliyothibitishwa ya COVID-19, dawa
              kwa ajili ya kinga bado zinafanyiwa majaribio. <br />
              Njia nzuri za kujikinga na COVID-19 ni kujiepusha na mazingira
              yenye hawa virusi
            </p>
          </div>
        </header>
        <div className='showcase'>
          <div className='do'>
            <h2>Fanya</h2>
            <ul>
              <li>
                Baki nyumbani kama hakuna ulazima wa kutoka na kama u mgonjwa
              </li>
              <li>
                Jizuie kushika sehemu mbalimbali za uso hasa macho, pua na mdomo
              </li>
              <li>
                Safisha na ua vijidudu kwa kutumia dawa maalum maeneo ambayo
                unayagusa mara kwa mara
              </li>
              <li>Unapokohoa au kupiga chafya jizibe kwa tissue au kitambaa</li>
              <li>
                Jizuie kukaribiana na wagonjwa na vaa barakoa(mask)
                unapowahudumia wagonjwa wa COVID-19
              </li>
              <li>
                Safisha mikono yako kwa maji yanayotiririka na sabuni walau kwa
                dakika 20 mara kwa mara
              </li>
            </ul>
          </div>
          <div className='dont'>
            <h2>Usifanye</h2>
            <ul>
              <li>Kushikana mikono na watu, kukumbatiana, mabusu</li>
              <li>Kushika macho, mdomo na pua kama mikono yako sio misafi</li>
              <li>
                Kuvaa barakoa(mask) kama hujaambukizwa au humhudumii mgonjwa wa
                COVID-19
              </li>
              <li>
                Kwenda kituo cha afya kama unajihisi dalili tajwa bali piga
                namba za tahadhari zilizotolewa
              </li>
              <li>
                kwenda kwenye mikusanyiko au kwenda maeneo yenye idadi kubwa
                sana ya watu bali, Jizuie kadiri unavyoweza kwenda maeneo hayo
              </li>
            </ul>
          </div>
        </div>
        <div className='video'>
          <div className='container'>
            <header>
              <h1>
                Tazama video hapa chini kuona namna ya kujikinga na virusi vya
                corona
              </h1>
            </header>
            <div className='iframe'>
              <iframe
                src='https://www.youtube.com/embed/uDLinO-Mf9k'
                frameborder='0'
                // width='800px'
                // height='450px'
                title='youtube video'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
        <Prevention />
        <Footer />
      </main>
    </>
  );
};

export default CoronaHome;
