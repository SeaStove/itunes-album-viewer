import React from "react";
import { Albums, Search } from "./components";
import { Layout, BackTop } from "antd";

export default function App() {
  return (
    <Layout className="theme">
      <Layout.Header>
        <div className="logo">iTunes Album Viewer</div>
        <Search />
      </Layout.Header>
      <Layout.Content>
        <div className="albums">
          <Albums />
        </div>
        <BackTop
          target={() =>
            document.getElementsByClassName("ant-layout-content")[0]
          }
        />
      </Layout.Content>
    </Layout>
  );
}
