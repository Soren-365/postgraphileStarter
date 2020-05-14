import { NextPageContext } from 'next'
import React from 'react'

// import { withRouter } from 'next/router'
import Presentations from '../components/Presentations'
import RootCall from '../components/Root'

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class PresentationsPage extends React.PureComponent<Props> {
    static async getInitialProps(props: NextPageContext) {
        console.log('presentation: getInitialProps:', props)
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
            console.log('presentation: presentation.tsx render on Server')
        } else {
            console.log('presentation: presentation.tsx render on Client')
        }
        return (
            <div>
                <div className="hero">
                    {/* <Spinner intent={Intent.PRIMARY} /> */}
                    <RootCall
                        passthroughpage={Presentations}
                        title="Creating presentations here"
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

export default PresentationsPage
