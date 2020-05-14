import { Button, Classes, H2, H4, InputGroup } from "@blueprintjs/core";
import Link from 'next/link'
import React, { setState } from 'react'
import { connect } from 'react-redux'

import {
    login,
    login_,
    logout,
    logout_,
} from '../src/redux/actions/api/accountCreators'

// IMPLEMENT VALIDATION FOR EMAIL. ALSO case insensitivity (convert to minor case as default)
//

function loggedin() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        if (ca[i] === " Troian=") {
          //  console.log("cookie says logged in")
            return true
        }
    }
    return false
}

class AuthLogin extends React.Component {
    // static async getInitialProps({ props }: NextPageContext) {
    //   }
    constructor(props) {
        super(props)
        this.state = { render: true, loggedIn: true, email: "", password: "" }

        if (typeof window !== 'undefined') {
            if (!loggedin()) {
                this.state.loggedIn = false;
                console.log("cookie says NOT logged in")
            }
        }
    }
    // this.handleemailChange = this.handleemailChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    handleEmailChange = event => {
        this.setState({ email: event.target.value });

    }

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });

    }

    handleKeyPress = (event) => {
        if ((event.key === 'Enter') && (this.state.password !== '')) {
            this.setState({ render: false })
            document.cookie = " Troian="
            const { email, password } = this.state
            this.props.login({ email, password }) //({ email, password})
            this.props.login_({ email })
            setTimeout(() => this.setState({ render: true }), 70)
        }
    }

    handleLogIn = (event) => {
        document.cookie = " Troian="

console.log("Cookie TROIAN was created")

        const { email, password } = this.state
        this.setState({ render: false })
        this.props.login({ email, password }) //({ email, password})
        this.props.login_({ email })
        setTimeout(() => this.setState({ render: true }), 70)
        event.preventDefault();
    }


    handleLogOut = (event) => {
        document.cookie = " Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

console.log("Cookie TROIAN was DELETED")
        const { email, password } = this.state
        this.props.logout()
        this.setState({ buttonClicked: true });
        event.preventDefault();
        this.setState({ loggedIn: false })
    }

    Error() {
        if (this.state.buttonClicked && this.props.account.status === fetchStates.error) {
            return <div>{this.props.account.message}</div>
        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }



    render() {
    //    console.log("In AuthLogIn render(): reduxStore LoggedIn?:", !this.state.loggedIn)
        return (
            <>
                {(!this.props.account.loggedIn && this.state.render) &&
                    (
                        <div className={"flex justify-between items-center"}>
                        <div />
                        <form className="pt-40">
                            <h2 className="">Log In</h2>
                            <div className="">
                                <div className="grid gap-10 pt-10 pb-2 grid-rows-2">
                                    <div className="">
                                        <label>email </label>
                                        <InputGroup
                                            value={this.state.email}
                                            type="text"
                                            large={true}
                                            placeholder="email"
                                            onChange={this.handleEmailChange}
                                        />
                                    </div>
                                    <div className="">
                                        <label>Password </label>
                                        <InputGroup
                                            value={this.state.password}
                                            onKeyPress={this.handleKeyPress}
                                            type="password"
                                            placeholder="password"
                                            large={true}
                                            onChange={this.handlePasswordChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-left mt-8">
                                <Button
                                    intent="primary"
                                    type="button"
                                    onClick={this.handleLogIn}
                                >
                                    Log In
                                </Button>
                            </div>
                            <div className="pt-8">
                                You need an account? click{' '}
                                <Link href="/auth-signup">
                                    <a className="text-blue-600 underline">
                                        here
                                    </a>
                                </Link>
                            </div>
                            <div className="pt-4">
                                Forgot password? click{' '}
                                <Link href="/password-reset">
                                    <a className="text-blue-600 underline">
                                        here
                                    </a>
                                </Link>
                            </div>
                        </form>
                        <div />
                    </div>
                )}

                {this.props.account.loggedIn && this.state.render && (
                    <div className="flex justify-between items-center pt-40">
                        <div />
                        <form className="">
                            <h2 className="pb-8">You are logged In</h2>

                            <Button
                                intent="primary"
                                type="button"
                                onClick={this.handleLogOut}
                            >
                                Log Out
                            </Button>
                        </form>
                        <div />
                    </div>
                )}
            </>
        )
    }
}

const mapDispatchToProps = {
    login,
    login_,
    logout_,
    logout,
}

export default connect(
    ({ account }) => ({ account }),
    mapDispatchToProps
)(AuthLogin)
