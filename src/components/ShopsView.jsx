import { Row, Col, Card, CardText, CardTitle, CardSubtitle } from "reactstrap";
import { Link } from "../Link"
import "./ShopsView.css";

export function ShopsView({ shops }) {
  return (
    <Row className="shop-view">
      {shops.map((shop) => {
        return (
          <Col key={shop.id} sm="6">
            <Card className="card-shop" body>
              <CardTitle tag="h3">{shop.name}</CardTitle>
              <CardSubtitle tag="h5">{shop.description}</CardSubtitle>
              <CardText>{shop.owner}</CardText>
             {/*<a className="card-link" href="/turns/:query"></a>*/}
              <Link className="card-link" to={`/turns/${shop.id}`}></Link>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}
