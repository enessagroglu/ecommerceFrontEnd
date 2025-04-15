import "./page.css";
import { Col, Row } from "antd";

export default function Home() {
  return (
    <div className="root-page">
      <Row>
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
          4 col-order-responsive
        </Col>
      </Row>
    </div>
  );
}
