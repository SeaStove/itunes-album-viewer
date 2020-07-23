import React, { useContext } from "react";
import { SearchContext } from "../contexts/Search";
import useSearch from "../hooks/useSearch";
import Album from "./Album";
import { Empty } from "antd";

export default function Albums() {
  const { searchInput } = useContext(SearchContext);
  const albums = useSearch();

  return (
    <div className="albums">
      {albums.length ? (
        albums
          .filter(
            (album) =>
              searchInput.length === 0 ||
              album.collectionName
                .toLowerCase()
                .includes(searchInput.toLowerCase())
          )
          .map((album) => {
            return <Album album={album} key={album.collectionId} />;
          })
      ) : (
        <Empty description="No Albums Found" />
      )}
    </div>
  );
}
