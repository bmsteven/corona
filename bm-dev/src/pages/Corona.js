import React, { useEffect, useState } from "react";
import Stats from "../components/Stats";

// const useStats = () => {
//   const [stats, setStats] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const data = await fetch("https://covid19.mathdro.id/api")
//         .then(res => res.json())
//         .catch(err => {
//           setError(err);
//         });
//       setStats(data);
//       setLoading(false);
//     };
//     fetchData();
//   }, []);
//   return {
//     stats,
//     loading,
//     error
//   };
// };

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

const Country = () => {
  const [count, setCount] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://covid19.mathdro.id/api/countries")
        .then(res => res.json())
        .catch(err => console.error(err));
      setCount(data);
    };
    fetchData();
  }, []);
  return count;
};

const Corona = () => {
  const [selectedCountry, setSelectedCountry] = useState("Tanzania");
  console.log(selectedCountry);
  //   const { stats, loading, error } = useStats();
  //   console.log(stats);
  const countr = Countries();
  console.log(countr);
  const count = Country();
  console.log(count);
  useEffect(() => {
    document.title = `COVID-19 - coronavirus pandemic updates and in ${selectedCountry}`;
  });
  //   if (!stats) return <div className='container'>Loading...</div>;
  return (
    <div className='container'>
      <h2>COVID-19 - coronavirus pandemic updates</h2>
      <Stats url='https://covid19.mathdro.id/api' />
      <div className='countries'>
        {/* {countr.countries} */}
        {!countr ? (
          <div>Loading</div>
        ) : (
          <select
            onChange={e => {
              setSelectedCountry(e.target.value);
            }}
          >
            <option value="">None</option>
            {Object.entries(countr.countries).map(([country, code]) => {
              return (
                <option
                  key={country}
                  // value={countr.iso3[code]}
                  value={country}
                >
                  {country}
                </option>
              );
            })}
          </select>
        )}
      </div>
      <div className='country'>
        <h2>Currently showing: {selectedCountry}</h2>
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      </div>
    </div>
  );
};

export default Corona;
