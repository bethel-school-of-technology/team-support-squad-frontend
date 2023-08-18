import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Stack from "react-bootstrap/Stack";
import { Link, Outlet } from "react-router-dom";
import { ItemContext } from "../context/ItemContext";

function Read(props) {
  function itemList(items) {
    if (items === null) return;
    return items.map((items) => (
      <ListGroup.Item key={items.id}>
        <Link to={`/items/${items.id}`} key={items.id}>
          {items.name}
        </Link>
      </ListGroup.Item>
    ));
  }

  return (
    <>
      <h1>Support Items</h1>
      <Stack direction="horizontal" gap={3}>
        <ListGroup className="align-self-start w-75">
          <ItemContext.Consumer>
            {({ items }) => itemList(items)}
          </ItemContext.Consumer>
        </ListGroup>
        <Outlet />
      </Stack>
    </>
  );
}

export default Read;
