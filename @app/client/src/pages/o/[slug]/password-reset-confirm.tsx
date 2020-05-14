import { Button, Classes, H4, InputGroup } from "@blueprintjs/core";
import Router, { withRouter } from 'next/router';
import React from 'react'; //{ setState }
import { connect } from 'react-redux';

import { passwordResetConfirm } from '../src/redux/actions/api/accountCreators';

// type PasswordResetProps = { title: string; props: object; state: any; router: any };
// type MyState = { render: boolean; email: string; password: string; url: string; message: string; buttonClicked: boolean };
// <PasswordResetProps, MyState>

interface PasswordResetConfirm {
  props;
}

type PasswordResetConfirmState = {
  render: boolean;
  emailHash: string;
  password: string;
  url: string;
  input: string;
  input2: string;
  message: string;
  buttonClicked: boolean;
};

class PasswordResetConfirm extends React.Component<PasswordResetConfirm, PasswordResetConfirmState> {
  // static async getInitialProps({ props }: NextPageContext) {
  //   }

  constructor({ props }) {
    super(props);
    console.log('password-reset-confirm.js:', props);
    this.state = { render: true, emailHash: '', password: 'you', url: 'default', input: '', input2: '', message: '', buttonClicked: false };
  }

  handleChange = event => {
    this.setState({ input: event.target.value });
    console.log('handleChange1', event.target.value);
  };

  handleChange2 = event => {
    this.setState({ input2: event.target.value });
    console.log('handleChange2', event.target.value);
    console.log('props:', this.props);
  };

  handleSubmit = () => {
    console.log('router:', this.props.router);

    console.log('In paswordResetConfirm');
    const emailHash = this.props.router.query.u;
    console.log('password-reset-confirm.js: emailHash', emailHash);
    const password = this.state.input;
    console.log('password-reset-confirm.js: password', password);

    if (this.state.input === this.state.input2) {
      this.props.passwordResetConfirm({ emailHash: emailHash, password: password });
      this.setState({ message: 'waiting for confirmation...' });
    } else {
      this.setState({ message: 'passwords must match!' });
    }
  };

  componentDidUpdate() {}

  Error() {}

  render() {
    const confirmationRecieved = this.props.account.newpassConfirmed;
    const confirmationRequested = this.props.account.newpassRequested;
    console.log('password-reset-confirm: Render');
    return (
      <React.Fragment>
        {confirmationRecieved && confirmationRequested && (
          <div className={`${Classes} flex justify-between items-center`}>
                        <div>
                            <form className="">
                                <H4 className="">
                                    {this.props.account.message}
                                </H4>
                                <div className="">
                                    <div className="grid gap-2  pb-8">
                                        <div className="flex">
                                            <div className="text-l font-bold"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex justify-left m-2">
                                        <button
                                            className="btn-auth mr-8"
                                            type="button"
                                            onClick={() => {
                                                document.cookie =
                                                    ' Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/'
                                                Router.push({
                                                    pathname: '/auth-login',
                                                    query: {
                                                        password: this.props
                                                            .account.message,
                                                    },
                                                })
                                            }}
                                        >
                                            Go to LogIn
                                        </button>
                                    </div>
                                </div>
                                <div className="sent-message mt-4"></div>
                            </form>
                        </div>
                    </div>
                )}

                {!(confirmationRecieved && confirmationRequested) && (
                    <div className="flex justify-between items-center pt-40">
                        <div />
                        <form className="">
                            <div className="grid gap-4 pb-8">
                                <H4 className="">New Password:</H4>
                                <InputGroup
                                    value={this.state.input}
                                    type="password"
                                    large={true}
                                    onChange={this.handleChange}
                                />
                                <div />
                                <div />
                                <H4 className="">Confirm Password:</H4>
                                <InputGroup
                                    value={this.state.input2}
                                    type="password"
                                    large={true}
                                    onChange={this.handleChange2}
                                />
                                <div />
                                <div />
                                <Button
                                    intent="primary"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </Button>
                                <div className="sent-message mt-4">
                                    <span className="text-lg">
                                        {this.state.message}
                                    </span>
                                </div>
                            </div>

                            <div className="flex">
                                <div className="flex justify-left m-2">
                                    <button
                                        className="btn-auth mr-8"
                                        type="button"
                                        onClick={() => {
                                            document.cookie =
                                                ' Troian=; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/'
                                            Router.push({
                                                pathname: '/auth-login',
                                                query: {
                                                    password: this.props.account
                                                        .message,
                                                },
                                            })
                                        }}
                                    >
                                        Go to LogIn
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div />
                    </div>
                )}
                <style jsx>{`
                    .sent-message {
                        width: 200px;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

// interface LinkDispatchProps {
//   signup: function,
//   login: function,
//   logout: function,
//   passwordReset: function
// }

const mapDispatchToProps = {
    passwordResetConfirm,
}

export default withRouter(
    connect((state) => state, mapDispatchToProps)(PasswordResetConfirm)
)
