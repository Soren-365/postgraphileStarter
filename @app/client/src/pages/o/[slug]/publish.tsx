import { NextPageContext } from 'next'
import React from 'react'

// import { withRouter } from 'next/router'
import Publish from '../components/Publish'
import RootCall from '../components/Root'

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class PublishPage extends React.PureComponent<Props> {
    static async getInitialProps(props: NextPageContext) {
        console.log('publish: getInitialProps:', props)
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
        if (typeof window === 'undefined') {
            console.log('publish: publish.tsx render on Server')
        } else {
            console.log('publish:  publish.tsx render on Client')
        }
        return (
            <div>
                {/* <Spinner intent={Intent.PRIMARY} /> */}
                <RootCall
                    passthroughpage={Publish}
                    title="Publishing is here"
                />

                <style jsx>{`
                    .title {
                        margin-top: 0px;
                    }
                `}</style>
            </div>
        )
    }
}

export default PublishPage
