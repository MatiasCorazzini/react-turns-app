import { shops } from "../mocks/shops.json";
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  CardText,
  List,
} from "reactstrap";
import { InstagramIcon, FacebookIcon, WhatsappIcon } from "./Icons";
import "./Turns.css"

function findShopById(shops, id) {
  return shops.find((shop) => {
    return shop.id === id;
  });
}

export function Turns({ id }) {
  const shop = findShopById(shops, id);

  if (!shop) {
    return (
      <section className="p-2 turns">
        <p>The place you're trying to in doesn't exist</p>
      </section>
    );
  }

  return (
    <section className="turns p-2 mx-auto">
      <header>
        <h1>{shop.name}</h1>
        <p>
          By <span className="badge bg-secondary">{shop.owner}</span>
        </p>
      </header>
      <div className="border-top m-3">
        <strong>Turns Table: </strong>
        <Row className="g-5">
          <Col sm="6">
            <ListGroup className="d-grid gap-3">
              {shop.turns.map((turn) => {
                return (
                  <ListGroupItem
                    key={turn.turnId}
                    action
                    href=""
                    tag="a"
                    className="shadow"
                  >
                    {turn.start} to {turn.end}
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Social of {shop.owner}</CardTitle>
              <CardText>
                <List type="unstyled" className="d-grid gap-2 m-2">
                  <li>
                    <InstagramIcon />
                    <a className="ms-1" href="https://www.instagram.com/">
                      {shop.owner}
                    </a>
                  </li>
                  <li>
                    <FacebookIcon />
                    <a className="ms-1" href="https://www.facebook.com/">
                      {shop.owner}
                    </a>
                  </li>
                  <li>
                    <WhatsappIcon />
                    <a className="ms-1" href="">
                      +543442607722
                    </a>
                  </li>
                </List>
              </CardText>
              <Form className="border-top">
                <p>You can also send an E-Mail directly to the owner</p>
                <FormGroup>
                  <Label for="second-form-email">Email:</Label>
                  <Input
                    id="second-form-email"
                    name="email"
                    placeholder="yourmail@turnsapp.com"
                    type="email"
                  />
                  <Label for="second-form-text">Message:</Label>
                  <Input id="second-form-text" name="text" type="textarea" />
                </FormGroup>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
