import "./page.css";
import { Col, Row } from "antd";
import Home from "./components/home/Home.js";

export default function Page() {
  return (
    <div className="root-page">
      <Home />
      {/* <Row>
        <Col
          className=""
          span={2}
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          md={{ order: 3 }}
          lg={{ order: 4 }}
        ></Col>

        <Col
          className=""
          span={2}
          xs={{ order: 3 }}
          sm={{ order: 4 }}
          md={{ order: 2 }}
          lg={{ order: 1 }}
        ></Col>
        <Col
          className="test"
          span={20}
          xs={{ order: 4 }}
          sm={{ order: 3 }}
          md={{ order: 1 }}
          lg={{ order: 2 }}
        >
          </Col>
          </Row>  */}
    </div>
  );
}
