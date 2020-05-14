// import { ApolloClient, ApolloProvider }  from 'react-apollo';
// import { initApolloClient } from '../lib/with-apollo.tsx'
// import "../styles/tailwind.css";
import "antd/dist/antd.less";
import "nprogress/nprogress.css";
import "../styles.less";

import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "@app/lib";
import { notification } from "antd";
import { ApolloClient } from "apollo-client";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import * as React from "react";
import { Provider } from "react-redux";

// import Navbar from "../components/navbar";
// import { route_history_update } from "../src/redux/actions/actionCreators";
import createStore from "../redux/basicStore";
import withReduxSaga from "../redux/withReduxSaga";

NProgress.configure({
  showSpinner: false,
});

if (typeof window !== "undefined") {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  Router.events.on("routeChangeError", (err: Error | string) => {
    NProgress.done();
    if (err["cancelled"]) {
      // No worries; you deliberately cancelled it
    } else {
      notification.open({
        message: "Page load failed",
        description: `This is very embarassing! Please reload the page. Further error details: ${
          typeof err === "string" ? err : err.message
        }`,
        duration: 0,
      });
    }
  });
}

class MyApp extends App<{ apollo: ApolloClient<any>; store: any }> {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    // console.log("...props in _app", ...props);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    console.log("pageProps in _app", pageProps);
    //  throw new Error("Just checking...");
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo, store } = this.props;

    return (
      // <Provider store={store}>
      //   {/* <Navbar /> */}
      //   <Component {...pageProps} />
      // </Provider>
      //   <Provider store={store}>
      <ApolloProvider client={apollo}>
        {/* //  <Navbar /> */}
        <Component {...pageProps} />
      </ApolloProvider>
      //  </Provider>
    );
  }
}

//const withWrappers = withRedux(createStore)(withReduxSaga(withApollo(MyApp)));
const withWrappers = withApollo(MyApp);

// export default (withRedux(createStore)(withReduxSaga(MyApp)))
// export default withRouter(withWrappers);
//export default withRouter(withRedux(createStore)(withReduxSaga(MyApp)))
export default withWrappers;
