import React, { setState } from 'react'
import { connect } from 'react-redux'
import {
    signupWithInvite,
    login,
    login_,
    logout_,
    logout,
} from '../src/redux/actions/api/accountCreators'
import Link from 'next/link'
import { Button, Classes, H2, H4, InputGroup } from "@blueprintjs/core";
import Router from 'next/router';
// IMPLEMENT VALIDATION FOR EMAIL. ALSO case insensitivity (convert to minor case as default)
//

function loggedin() {
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    if (ca[i] === ' Troian=') {
      console.log('cookie says logged in');
      return true;
    }
  }
  return false;
}

class AuthSignupWithInviteWithInvite extends React.Component {
  // static async getInitialProps({ props }: NextPageContext) {
  //   }
  constructor(props) {
    super(props);
    this.state = { render: true, loggedIn: true, email: '', password: '' };

    if (typeof window !== 'undefined') {
      if (!loggedin()) {
        this.state.loggedIn = false;
        console.log('cookie says NOT logged in');
      }
    }
  }
  // this.handleemailChange = this.handleemailChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleKeyPress = event => {
    if (event.key === 'Enter' && this.state.password !== '') {
      this.setState({ render: false });
      document.cookie = ' Troian=';
      const { email, password } = this.state;
      const atAgency = 1;
      const isAdmin = false;
      this.props.signupWithInvite({ email, password, atAgency, isAdmin });
      this.props.login_({ email });
      setTimeout(() => this.setState({ render: true }), 70);
    }
  };

  handleSignUp = event => {
    document.cookie = ' Troian=';
    const { email, password } = this.state;
    const atAgency = 1;
    const isAdmin = false;
    this.props.signupWithInvite({ email, password, atAgency, isAdmin });
    this.props.login_({ email });
    this.setState({ buttonClicked: true });
    event.preventDefault();
  };

  handleLogOut = event => {
    document.cookie = ' Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';
    const { email, password } = this.state;
    this.props.logout();
    this.setState({ buttonClicked: true });
    event.preventDefault();
    this.setState({ loggedIn: false });
  };

  Error() {
    if (this.state.buttonClicked && this.props.account.status === fetchStates.error) {
      return <div>{this.props.account.message}</div>;
    }
  }

  UNSAFE_componentWillMount() {
    if (typeof window !== 'undefined') {
      this.setState({ render: false });
      setTimeout(() => this.setState({ render: true }), 70);
    }
  }

  componentDidMount() {
    window.addEventListener('onKeyUp', this.handleKeyEvent);
  }

  render() {
    return (
      <>
        {!this.state.loggedIn && this.state.render && (
          <div className={`${Classes} flex justify-between items-center`}>
                        <div />
                        <form className={Classes.40}>
                            <h2 className="">Sign Up</h2>
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
                                    onClick={this.handleSignUp}
                                >
                                    Sign Up
                                </Button>
                            </div>
                            <div className="pt-8">
                                Do you have an Account already? then log in{' '}
                                <Link href="/auth-login">
                                    <a className="text-blue-600 underline">
                                        here
                                    </a>
                                </Link>
                            </div>
                        </form>
                        <div />
                    </div>

                    //         <div class="shadow-lg flex flex-col-reverse sm:flex-row">
                    //         <div class="w-full bg-white p-4">
                    //           <div class="text-grey-darker">
                    //             <h2>Login</h2>
                    //             <p class="mt-2 text-xs text-grey">Lorem ipsum dolor sit amet</p>
                    //           </div>

                    //           <form>
                    //             <div class="mt-3">
                    //             <span class="flex bg-grey-lighter items-center">
                    //               <i class="material-icons text-grey-light">person</i>
                    //               <input class="bg-grey-lighter p-2 w-full" type="text" placeholder="username"/>
                    //             </span>

                    //               <span class="flex bg-grey-lighter items-center mt-2">
                    //               <i class="material-icons text-grey-light">lock</i>
                    //               <input class="bg-grey-lighter p-2 w-full" type="text" placeholder="Password"/>
                    //             </span>
                    //             </div>
                    //             <div class="flex justify-between items-center mt-4">
                    //               <button class="bg-blue hover:bg-blue-light px-4 py-2 text-white">Login</button>
                    //               <a href="#" class="text-xs underline-none text-blue-light hover:text-blue-dark">Forgot password?</a>
                    //             </div>
                    //           </form>

                    //         </div>
                    //         <div class="w-full bg-blue p-4 text-white text-center flex flex-col justify-center ">

                    //           <h4>Sign up Now</h4>
                    //           <p class="text-sm mt-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                    //             eget </p>
                    //           <button class="bg-blue-darker mx-auto hover:bg-blue-dark mt-4 text-white text-sm px-4 py-2 w-3/5">
                    //             Register
                    //           </button>

                    //         </div>
                    //   </div>
                )}

                {this.state.loggedIn && this.state.render && (
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
    signupWithInvite,
    login,
    login_,
    logout_,
    logout,
}

export default connect(
    ({ account }) => ({ account }),
    mapDispatchToProps
)(AuthSignupWithInvite)
