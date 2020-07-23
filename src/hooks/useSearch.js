import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../contexts/Search";
import axios from "axios";

const CancelToken = axios.CancelToken;
var cancel;

export default function useSearch() {
  const [albums, setAlbums] = useState([]);
  const { searchInput } = useContext(SearchContext);

  if (cancel) {
    cancel();
  }
  async function getAlbums() {
    const data = await axios
      .get(
        `https://itunes.apple.com/search?term=${encodeURI(
          searchInput.toLowerCase()
        )}&entity=album`,
        {
          cancelToken: new CancelToken((c) => {
            cancel = c;
          }),
        }
      )
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          console.error("Request canceled");
        } else {
          console.error(thrown);
        }
      });
    // cancel the request (the message parameter is optional)
    if (data && data.data && data.data.results) setAlbums(data.data.results);
  }

  useEffect(() => {
    if (searchInput.length) getAlbums();
    // eslint-disable-next-line
  }, [searchInput]);

  return albums;
}
