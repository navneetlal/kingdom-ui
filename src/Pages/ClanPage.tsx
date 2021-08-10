import { Fragment } from 'react';
import { Col, Row } from "antd";
import AddClan from "../Components/AddClan";
import TableComponent from "../Components/Table";

export default function ClanPage() {
  return (
    <Fragment>
      <Row justify="end">
        <Col>
          <AddClan />
        </Col>
      </Row>
      <Row>
        <TableComponent />
      </Row>
    </Fragment>
  )
}