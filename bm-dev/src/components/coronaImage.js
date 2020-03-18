import React, { useState, useEffect } from "react";

const Img = url => {
  const [image, setImage] = useState();
  //   const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      console.log("mounting");
      const data = await fetch("https://covid19.mathdro.id/api/og")
        .then(res => res.json())
        .catch(err => {
          setError(err);
        });
      setImage(data);
      //   setLoading(false);
    };
    fetchData();
  }, [url]);
  return {
    image,
    // loading,
    error
  };
};

const ImageData = ({ url }) => {
  const { image, error } = Img();
  if (!image && !error) {
    return <div className='container'>Loading...</div>;
  } else {
    return <img src='https://covid19.mathdro.id/api/og' alt='imag' />;
  }
};

export default ImageData;
