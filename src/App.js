import React from "react";
import HomePage from "./Pages/homepage/HomePage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";
import Checkout from "./Pages/checkout/checkout.component";
import SignInSignUpPage from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { SetCurrentUser } from "./redux/user/user.action";
import { createStructuredSelector } from "reselect";

import "./App.css";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { SetCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          SetCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      SetCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  SetCurrentUser: user => dispatch(SetCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
