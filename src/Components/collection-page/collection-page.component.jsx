import React from "react";
import ColletionItem from "../../Components/collection-item/collection-item.component";
import { selectCollecion } from "../../redux/shop-data/shop-data.selectors";
import { connect } from "react-redux";
import "./collection-page.styles.scss";

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <ColletionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollecion(ownProps.match.params.colletionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
