import { Button, Classes, H2, InputGroup } from "@blueprintjs/core";
import { withRouter } from 'next/router'
import React from 'react' //{ setState }
import { connect } from 'react-redux'

import { passwordReset } from '../src/redux/actions/api/accountCreators'

// type PasswordResetProps = { title: string; props: object; state: any; router: any };
// type MyState = { render: boolean; email: string; password: string; url: string; message: string; buttonClicked: boolean };
// <PasswordResetProps, MyState>
class PasswordReset extends React.Component {
    // static async getInitialProps({ props }: NextPageContext) {
    //   }

    constructor(props) {
        super(props)
        console.group('password-reset.js: props', props)
        this.state = {
            render: true,
            email: '',
            password: 'you',
            url: 'default',
            message: '',
            buttonClicked: false,
        }
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit(event){
        //console.log('this.props : ', this.props);
        this.setState({
            buttonClicked: true,
            message:
                'We sent you an email. Check your mailbox for a password reset link',
        })

        //console.log('this.state:',this.state);
        console.log(' password-reset.js: calling paswordReset:')

        this.props.passwordReset({ email: this.state.email })
        event.preventDefault()
    }

    componentDidMount() {
        console.log('password-reset.js:  router:', this.props.router)
        const { pid } = this.props.router.query

        this.setState({ url: pid })
    }

    Error() {
        // if (this.state.buttonClicked && this.props.account.status === fetchStates.error) {
        //         return <div>{this.props.account.message}</div>
        //     }
    }

    render() {
        return (
            <div className={`${Classes} flex justify-between items-center`}>
                <div />
                <form className="">
                    <H2 className="">Reset Password{this.props.title}</H2>
                    <div className="">
                        <div className="pt-8 pb-8">
                            <div className="">
                                <InputGroup
                                    value={this.state.email}
                                    type="text"
                                    placeholder="Your Email"
                                    large={true}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                        </div>
                    </div>
                    <Button intent="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>

                    <div className="sent-message mt-4">
                        <span className="text-s">{this.state.message}</span>
                    </div>
                </form>

                <style jsx>{`
                    .sent-message {
                        width: 200px;
                    }
                `}</style>
                <div />
            </div>
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
    passwordReset,
}

export default withRouter(
    connect((state) => state, mapDispatchToProps)(PasswordReset)
)
