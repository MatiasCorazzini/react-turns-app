import { shops as INIT_SHOPS } from "../mocks/shops.json";
import { useState } from "react";
import { ShopsView } from "../components/ShopsView";

export function HomePage() {
  const [shops] = useState(INIT_SHOPS);

  return (
    <>
      <ShopsView shops={shops}/>
    </>
  );
}