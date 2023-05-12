import React, { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    getItems();
  }, [url]);

  return { loading, items };
};

export default useFetch;
