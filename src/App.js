import React from "react";
import { Albums, Search } from "./components";
import { Layout } from "antd";

export default function App() {
  return (
    <Layout className="theme">
      <Layout.Header>
        <div className="logo">Rascal Flatts Album Viewer</div>
        <Search />
      </Layout.Header>
      <Layout.Content>
        <Albums />
      </Layout.Content>
    </Layout>
  );
}
