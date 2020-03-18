import React, { useState, useEffect } from "react";
import Spinner from "../images/spinner.gif";

const useStats = url => {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("mounting");
      const data = await fetch(url)
        .then(res => res.json())
        .catch(err => {
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
    error
  };
};

const Statistics = ({ url }) => {
  const { stats, error } = useStats(url);
  if (!stats && !error) {
    return (
      <section>
        <img src={Spinner} alt='spinner' />
      </section>
    );
  } else {
    return (
      <>
        {stats.confirmed ? (
          <span>{stats.confirmed.value}</span>
        ) : (
          <span>Not recorded</span>
        )}
        {stats.recovered ? (
          <span>{stats.recovered.value}</span>
        ) : (
          <span>Not recorded</span>
        )}
        {stats.recovered && stats.confirmed ? (
          <span>{stats.confirmed.value - stats.recovered.value}</span>
        ) : (
          <span>Not recorded</span>
        )}
        {stats.deaths ? (
          <span>{stats.deaths.value}</span>
        ) : (
          <span>Not recorded</span>
        )}
      </>
    );
  }
};

export default Statistics;
