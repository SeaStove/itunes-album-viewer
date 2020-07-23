import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../contexts/Search";
import axios from "axios";

const CancelToken = axios.CancelToken;
var cancel;

export default function useSearch() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchInput } = useContext(SearchContext);

  async function getAlbums() {
    setLoading(true);
    const data = await axios
      .get(
        `https://itunes.apple.com/search?term=${encodeURI(
          searchInput.toLowerCase()
        ).replace(/%20/g, "+")}&entity=album`,
        {
          cancelToken: new CancelToken((c) => {
            cancel = c;
          }),
        }
      )
      .catch(function (thrown) {
        setLoading(false);
        if (axios.isCancel(thrown)) {
          console.error("Request canceled");
        } else {
          console.error(thrown);
        }
      });
    if (cancel) {
      cancel();
    }
    setLoading(false);
    // cancel the request (the message parameter is optional)
    if (data && data.data && data.data.results) setAlbums(data.data.results);
  }

  useEffect(() => {
    if (searchInput.length) getAlbums();
    else setAlbums([]);
    // eslint-disable-next-line
  }, [searchInput]);

  return { albums, loading };
}
