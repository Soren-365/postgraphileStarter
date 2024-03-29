import { NextPageContext } from "next";
import React from "react";

// import { withRouter } from 'next/router'
import News from "../../../components/News";
import Root from "../../../components/Root";
// import { withSecApollo } from "@app/lib";

import { withSecApollo } from "@app/lib";
//import withApollo from "../../../lib/with-apollo";

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class NewsPage extends React.PureComponent<Props> {
  static async getInitialProps(props: NextPageContext) {
    //   console.log('news: getInitialProps', props)
    // const { store, isServer } = ctx;
    // store.dispatch(tickClock(isServer));
    // if (!store.getState().placeholderData) {
    //   // store.dispatch(loadData())
    // }
    // return { isServer };
  }

  // componentDidMount() {
  //   // this.props.store.dispatch(startClock())
  // }
  // using JSX:

  render() {
    if (typeof window === "undefined") {
      console.log("news: news.tsx render on Server");
    } else {
      console.log("news: news.tsx render on Client");
    }
    return (
      <div>
        <div className="hero">
          {/* <Spinner intent={Intent.PRIMARY} /> */}
          <Root passthroughpage={News} title="Welcome!" />
        </div>
        <style jsx>{`
          .title {
            margin-top: 0px;
          }
        `}</style>
      </div>
    );
  }
}

export default withSecApollo(NewsPage);
