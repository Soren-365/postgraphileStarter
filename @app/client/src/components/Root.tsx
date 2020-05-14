import React, { useEffect } from 'react'
import { shallowEqual, useDispatch,useSelector } from 'react-redux'

import { fetchAuthenticated } from '../src/redux/actions/api/accountCreators'
import AuthLogin from './AuthLogin'
// import { getUser } from '../src/redux/calls/getUser';

interface RootProps {
    passthroughpage: React.ElementType
    title: string
}

// type PassThroughPageProps = {
// props: any;
// account: object;
// title: string;
// }

const Root: React.StatelessComponent<RootProps> = ({
    title,
    passthroughpage,
}) => {
    const { loggedIn, status } = useSelector(
        (state) => state.account,
        shallowEqual
    )

    const dispatch = useDispatch()

    useEffect(() => {
        if (!status && loggedIn !== true) {
            dispatch(fetchAuthenticated())
            // dispatch(getUser());
        }
    })

    // {
    //   console.log('passthroughpage', fetchAuthenticated);
    // }
    //  UNSAFE_componentWillMount() {
    //    }
    //  const PassThroughPage = props.PassThroughPage
    //  console.log("Root: props:",props)
    //  console.log("Root: PassThroughPage:",PassThroughPage)

    const PassThroughPage = passthroughpage
    return <>{loggedIn ? <PassThroughPage title={title} /> : <AuthLogin />}</>
}

export default Root
