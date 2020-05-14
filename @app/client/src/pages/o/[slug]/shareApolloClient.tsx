import withApollo from 'lib/with-apollo'
import { NextPageContext } from 'next'
import React from 'react'

// import { withRouter } from 'next/router'
import News from '../components/News'
import Root from '../components/Root'

// import { Button, Intent, Spinner } from '@blueprintjs/core';

interface Props {}

class NewsPage extends React.PureComponent<Props> {
  
    // componentDidMount() {
    //   // this.props.store.dispatch(startClock())
    // }
    // using JSX:

    render() {
        if (typeof window === 'undefined') {
            console.log('news: news.tsx render on Server')
        } else {
            console.log('news: news.tsx render on Client')
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
        )
    }
}

export default withApollo(NewsPage)
