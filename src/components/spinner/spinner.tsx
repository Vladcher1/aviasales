import React from "react";
import { Space, Spin } from "antd";
import "./spinner.scss";

const Spinner: React.FC = () => (
  <Space direction="vertical" style={{ width: "100%" }}>
    <Spin tip="Loading" size="large" className="spinner">
      <div className="content" />
    </Spin>
  </Space>
);

export default Spinner;
