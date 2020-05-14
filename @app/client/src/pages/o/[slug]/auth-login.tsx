import { NextPageContext } from 'next'
import React from 'react'

// import { withRouter } from 'next/router'
import AuthLoginComponent from '../components/AuthLogin'
// import { connect } from 'react-redux'
// import { tickClock } from '../src/redux/actions/actionCreators';
import withApollo from '../lib/with-apollo'
import withReduxSaga from '../src/redux/withReduxSaga'

interface Props {}

class AuthLogin extends React.Component<Props> {
    static async getInitialProps(pathname: NextPageContext) {
        console.log('AuthLogin:  pathname:', pathname)
        // const { store, isServer } = ctx;
        // store.dispatch(tickClock(isServer));

        // if (!store.getState().placeholderData) {
        //   // store.dispatch(loadData())
        // }

        // return { isServer };
    }

    componentDidMount() {
        // this.props.store.dispatch(startClock())
    }

    render() {
        if (typeof window === 'undefined') {
            console.log('AuthLogin: auth.tsx render on Server')
        } else {
            console.log('AuthLogin: auth.tsx render on Client')
        }
        return (
            <div>
                <div className="hero">
                    <AuthLoginComponent />
                </div>
            </div>
        )
    }
}

export default withReduxSaga(withApollo(AuthLogin))
