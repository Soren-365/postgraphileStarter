import { NextPageContext } from 'next'
import React from 'react'

// import { withRouter } from 'next/router'
import Resources from '../components/Resources'
import RootCall from '../components/Root'

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class ResourcesPage extends React.PureComponent<Props> {
    static async getInitialProps(props: NextPageContext) {
        console.log('resources: getInitialProps:', props)
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
            console.log('resources: resources.tsx render on Server')
        } else {
            console.log('resources: resources.tsx render on Client')
        }
        return (
            <div>
                <div className="hero">
                    {/* <Spinner intent={Intent.PRIMARY} /> */}
                    <RootCall
                        passthroughpage={Resources}
                        title="Resources here..."
                    />
                </div>
                <style jsx>{`
                    .title {
                        margin-top: 0px;
                    }
                `}</style>
            </div>
        )
    }
}

export default ResourcesPage
