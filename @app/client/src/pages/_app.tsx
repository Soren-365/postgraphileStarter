import "antd/dist/antd.less";
import "nprogress/nprogress.css";
import "../styles.less";

// import "../src/styles/tailwind.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { withApollo } from "@app/lib";
import { notification } from "antd";
import { ApolloClient } from "apollo-client";
import withReduxSaga from "next-redux-saga";
import withRedux from "next-redux-wrapper";
import App from "next/app";
import { Router, withRouter } from "next/router";
import NProgress from "nprogress";
import * as React from "react";
import { Provider } from "react-redux";

// import createStore from "../redux/basicStore";
import store from "../redux/basicStore";

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
  static async getInitialProps({ Component, ctx, ...props }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      console.log("props in MyApp", ...props);
    }

    return { pageProps };
  }

  componentDidMount() {
    // this.props.store.dispatch(
    //   route_history_update(
    //       router && router.Router && router.Router.pathname
    //   )
    // )
  }

  render() {
    const { Component, pageProps, apollo, store } = this.props;

    //     return (
    //       <ApolloProvider client={apollo}>
    //         <Component {...pageProps} />
    //       </ApolloProvider>
    //     );
    //   }
    // }

    return (
      <Provider store={store}>
        <ApolloProvider client={apollo}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Provider>
    );
  }
}

//  export const  apolloClientApp  =  MyApp.getInitialProps.apolloClientApp

//  export const  ctxApp  = MyApp.getInitialProps.ctxApp
const withWrappers = withRedux(store)(
  withReduxSaga(withApollo(withRouter(MyApp)))
);

// export default (withRedux(createStore)(withReduxSaga(MyApp)))
export default withWrappers;
//export default withRouter(withRedux(createStore)(withReduxSaga(MyApp)))
