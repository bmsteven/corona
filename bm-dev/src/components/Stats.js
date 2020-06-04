import React, { useState, useEffect } from "react";
import Spinner from "../images/spinner.gif";
import Moment from "react-moment";

const useStats = (url) => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetch(url)
        .then((res) => res.json())
        .catch((err) => {
          setError(err);
        });
      setStats(data);
      setLoading(false);
    };
    fetchData();
  }, [url]);
  return {
    stats,
    loading,
    error,
  };
};

const Stats = ({ url }) => {
  const { stats, error } = useStats(url);
  if (!stats && !error) {
    return (
      <section>
        <img src={Spinner} alt='spinner' className='spinner' />
      </section>
    );
  } else {
    return (
      <section>
        <small>
          Imechapishwa:{" "}
          {stats.lastUpdate ? (
            <span>
              <Moment fromNow>{stats.lastUpdate}</Moment>
            </span>
          ) : (
            ""
          )}
        </small>
        <div className='showcase'>
          <div className='statBlock'>
            <h3>Walioathirika</h3>
            {stats.confirmed ? (
              <h2>{stats.confirmed.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
          <div className='statBlock'>
            <h3>Waliopona</h3>
            {stats.recovered ? (
              <h2>{stats.recovered.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
          <div className='statBlock'>
            <h3>Walio Wagonjwa</h3>
            {stats.recovered && stats.confirmed && stats.deaths ? (
              <h2>
                {stats.confirmed.value -
                  stats.recovered.value -
                  stats.deaths.value}
              </h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
          <div className='statBlock'>
            <h3>Vifo</h3>
            {stats.deaths ? (
              <h2>{stats.deaths.value}</h2>
            ) : (
              <h3>haijarekodiwa</h3>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Stats;
