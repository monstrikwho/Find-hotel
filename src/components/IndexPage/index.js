import React from "react";

import Filters from "../Filters";
import Posts from "../Posts";

export default function IndexPage() {
  return (
    <React.Fragment>
      <Filters />
      <Posts />
    </React.Fragment>
  );
}
