import { NextPageContext } from "next";
import React from "react";

// import { withRouter } from 'next/router'
import Destination from "../../../components/Destination";
import RootCall from "../../../components/Root";

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class DestinationResource extends React.PureComponent<Props> {
  // static async getInitialProps({ ...props }) {
  //     // console.log("component", Component)
  //     ///  console.log("ctx", ctx)
  //       console.log("props destination()", props)
  //       const { apolloClient, ctx } = props

  // }

  // componentDidMount() {
  //   // this.props.store.dispatch(startClock())
  // }
  // using JSX:

  render() {
    //    console.log('state destination.tsx', this.state);
    //    console.log('props destination.tsx', this.props);

    if (typeof window === "undefined") {
      //     console.log('Destination: destination.tsx render on Server')
    } else {
      //      console.log('Destination: destination.tsx render on Client')
    }
    return (
      <div>
        <div className="hero">
          {/* <Spinner intent={Intent.PRIMARY} /> */}
          <RootCall passthroughpage={Destination} title="Destination here..." />
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

export default DestinationResource;
