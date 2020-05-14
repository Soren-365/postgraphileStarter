import { H1 } from '@blueprintjs/core'
import { NextPage } from 'next'
import React from 'react'
import { connect } from 'react-redux'

// import { tickClock } from '../src/redux/actions/actionCreators';
import OtherPage from '../components/OtherPage'

interface Props {}

const Page: NextPage<Props> = () => (
    <div>
        <div className="hero">
            <H1 className="title">
                Next.js + Tailwindcss + Redux + Saga + Apollo
            </H1>
            <OtherPage title="Other Page" linkTo="/" NavigateTo="Index Page" />
        </div>
    </div>
)

Page.getInitialProps = async (props) => {
    console.log('props', props)
    //     store.dispatch(tickClock(isServer))
    //     return { isServer }
    // }
}

// Page.componentDidMount() {
//   //  this.props.dispatch(startClock())
//   }

export default connect()(Page)
