import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Statistics from "../components/Statistics";

const Countries = () => {
  const [countr, setCountr] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://covid19.mathdro.id/api/countries")
        .then(res => res.json())
        .catch(err => console.error(err));
      setCountr(data);
    };
    fetchData();
  }, []);
  return countr;
};

const NavBar = () => {
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <h1>
            <Link to='/'>COVID-19</Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link to='/'>Nyumbani</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const AllCountries = () => {
  const countr = Countries();
  console.log(countr);
  useEffect(() => {
    document.title = `All countries COVID-19 - coronavirus pandemic updates`;
  });
  return (
    <>
      <NavBar />
      <main>
        <div className='allcountries'>
          <div className='container'>
            <ul className='countries'>
              <li className='head'>Country</li>
              {!countr ? (
                <span>Loading</span>
              ) : (
                <>
                  {Object.entries(countr.countries).map(([index, country]) => {
                    return <li key={index}>{country.name}</li>;
                  })}
                </>
              )}
            </ul>
            <ul className='data'>
              <li className='head'>
                <span>Confirmed</span>
                <span>Recovered</span>
                <span>Positive</span>
                <span>Deaths</span>
              </li>
              {!countr ? (
                <></>
              ) : (
                <>
                  {Object.entries(countr.countries).map(([index, country]) => {
                    return (
                      <Statistics
                        url={`https://covid19.mathdro.id/api/countries/${country.name}`}
                        key={index}
                      />
                    );
                  })}
                </>
              )}
            </ul>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AllCountries;

//toDo call mamdogo
