import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "O5mRy9aFlY2PIFDfvkanzqdOywkqULUA";
const BASE_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const UseGif = (initialTag = "") => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState(initialTag);
  const [loading, setLoading] = useState(false);

  const fetchData = async (tag) => {
    setLoading(true);
    try {
      const url = tag ? `${BASE_URL}&tag=${tag}` : BASE_URL;
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      setGif(imageSource);
    } catch (error) {
      console.error("Error fetching the gif:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  return { gif, loading, fetchData, setTag };
};

export default UseGif;
