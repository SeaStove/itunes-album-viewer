import React from "react";
import { Card } from "antd";
import moment from "moment";

export default function Album({ album }) {
  return (
    <a href={album.collectionViewUrl} target="_blank" rel="noopener noreferrer">
      <Card
        bordered={false}
        cover={
          <img
            src={album.artworkUrl100.replace("100x100", "300x300")}
            alt="Album Cover"
            className="cover"
          />
        }
      >
        <Card.Meta
          title={album.collectionName}
          description={`${album.artistName}, ${moment(album.releaseDate).format(
            "YYYY"
          )}`}
        />
      </Card>
    </a>
  );
}
