import React, { useContext } from "react";
import { SearchContext } from "../contexts/Search";
import useSearch from "../hooks/useSearch";
import Album from "./Album";
import { Empty, Typography, Spin } from "antd";
import { AppleOutlined } from "@ant-design/icons";

export default function Albums() {
  const { searchInput } = useContext(SearchContext);
  const { albums, loading } = useSearch();

  // When albums are loaded
  if (albums.length > 0)
    return albums.map((album) => {
      return <Album album={album} key={album.collectionId} />;
    });

  // If loading
  if (loading) return <Spin />;

  // If there's no result
  if (searchInput.length > 0) return <Empty description="No Albums Found" />;

  // Default
  return (
    <div className="apple-container">
      <AppleOutlined />
      <Typography.Title>
        Enter an artist's name, then press Enter
      </Typography.Title>
    </div>
  );
}
