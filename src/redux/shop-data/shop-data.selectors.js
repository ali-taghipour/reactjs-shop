import { createSelector } from "reselect";

const selectShopData = state => state.shop;

export const selectShopDataCollecions = createSelector(
  [selectShopData],
  shop => shop.collections
);

export const selectCollecion = CollectionUrlParam =>
  createSelector(
    [selectShopDataCollecions],
    collections => collections[CollectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopDataCollecions],
  collections => Object.keys(collections).map(key => collections[key])
);
