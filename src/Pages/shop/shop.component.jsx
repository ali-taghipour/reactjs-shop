import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import CollectionPage from "../../Components/collection-page/collection-page.component";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:colletionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
