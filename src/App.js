import React from "react";
import { Albums, Search } from "./components";
import { Layout, BackTop } from "antd";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export default function App() {
  return (
    <Layout className="theme">
      <Layout.Header>
        <div className="header">
          <div className="logo">iTunes Album Viewer</div>
          <Search />
        </div>
      </Layout.Header>
      <OverlayScrollbarsComponent>
        <Layout.Content>
          <div className="albums">
            <Albums />
          </div>
          <BackTop
            target={() => document.getElementsByClassName("os-viewport")[0]}
          />
        </Layout.Content>
      </OverlayScrollbarsComponent>
    </Layout>
  );
}
