import { shops } from "../mocks/shops.json";
import { Card, CardText, ListGroup, ListGroupItem } from "reactstrap";

function findShopById(shops, id) {
  return shops.find((shop) => {
    return shop.id === id;
  });
}

export function Turns({ id }) {
  const shop = findShopById(shops, id);

  if (!shop) {
    return (
      <section className="p-2">
        <p>Shop not found</p>
      </section>
    );
  }

  return (
    <section className="p-2">
      <header>
        <h1>{shop.name}</h1>
        <p>By <span className="badge bg-secondary">{shop.owner}</span></p>
      </header>
      <div className="border-top m-3">
        <strong>Turns Table: </strong>
        <ListGroup>
          {shop.turns.map((turn) => {
            return(
              <ListGroupItem
                key={turn.turnId}
                action
                href="#"
                tag="a">
                  {turn.start} to {turn.end}
              </ListGroupItem>
            )
          })}
        </ListGroup>
      </div>
    </section>
  );
}