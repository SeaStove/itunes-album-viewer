import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/Search";
import axios from "axios";
import { Card } from "antd";
import moment from "moment";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const { searchInput } = useContext(SearchContext);

  useEffect(() => {
    axios
      .get("https://itunes.apple.com/search?term=rascal+flatts&entity=album")
      .then(({ data }) => {
        if (data && data.results) {
          setAlbums(data.results);
        }
      });
  }, []);

  return (
    <div className="albums">
      {albums
        .filter(
          (album) =>
            searchInput.length === 0 ||
            album.collectionName
              .toLowerCase()
              .includes(searchInput.toLowerCase())
        )
        .map((album) => {
          return (
            <a
              href={album.collectionViewUrl}
              key={album.collectionId}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card
                bordered={false}
                cover={
                  <img
                    src={album.artworkUrl100}
                    alt="Album Cover"
                    className="cover"
                  />
                }
              >
                <Card.Meta
                  title={album.collectionName}
                  description={`Rascal Flatts, ${moment(
                    album.releaseDate
                  ).format("YYYY")}`}
                />
              </Card>
            </a>
          );
        })}
    </div>
  );
}
