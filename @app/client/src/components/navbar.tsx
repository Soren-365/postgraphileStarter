import {
  Alignment,
  Button,
  Classes,
  InputGroup,
  Menu,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Popover,
  Position,
  UL,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import Link from "next/link";
import Router from "next/router";
// import { useDispatch } from 'react-redux'
// const dispatch = useDispatch()
import * as React from "react";
import { connect } from "react-redux";

import { logout_ } from "../../src/redux/actions/actionCreators";
import withReduxSaga from "../../src/redux/withReduxSaga";

interface NavbarComponentProps {
  props: any;
  store?: any;
  account?: any;
  logout_?: any;
}

const NavbarComponent = class NavbarComponent extends React.Component<
  NavbarComponentProps
> {
  handleClick = () => {};

  handleLogOut = (event: { preventDefault: () => void }) => {
    this.props.logout_();
    // this.setState({ buttonClicked: true});
    event.preventDefault();
  };
  static defaultProps: { props: "Defaultprops" };

  public render() {
    return (
      <>
        {this.props.account.loggedIn && (
          <nav>
            <Navbar className="navbar h-12">
              <NavbarGroup
                className="navbar-group flex1"
                align={Alignment.LEFT}
              >
                <UL className="flex justify-evenly items-center pl-1 m-0 h-12 ">
                  <li className="">
                    <NavbarHeading className="text-xl   ">
                      <Link href={"/news"}>
                        <a className=" no-underline">{"News"}</a>
                      </Link>
                      <Popover
                        content={
                          <Menu large={true}>
                            <Menu.Item
                              icon={IconNames.PERSON}
                              text="tourists"
                            />
                          </Menu>
                        }
                        position={Position.TOP}
                      >
                        <Button
                          icon={IconNames.MENU}
                          minimal={true}
                          className="pb-2"
                        />
                      </Popover>
                    </NavbarHeading>
                  </li>
                  <li className="">
                    <NavbarHeading className="text-xl  ">
                      <Link href={"/resources"}>
                        <a className=" no-underline">{"Resources"}</a>
                      </Link>

                      <Popover
                        content={
                          <Menu large={true}>
                            <Menu.Item
                              textClassName="text-lg"
                              icon={IconNames.GLOBE}
                              onClick={() => Router.push("/destination")}
                              text="destination"
                            />
                            <Menu.Item
                              icon={IconNames.TIMELINE_EVENTS}
                              onClick={this.handleClick}
                              text="events"
                            />
                            <Menu.Item
                              icon={IconNames.DRIVE_TIME}
                              onClick={this.handleClick}
                              text="transport"
                            />
                            <Menu.Item
                              icon={IconNames.HOME}
                              onClick={this.handleClick}
                              text="accomodation"
                            />
                            <Menu.Item
                              icon={IconNames.USER}
                              onClick={this.handleClick}
                              text="hosts"
                            />
                            <Menu.Divider />
                            <Menu.Item
                              text="guides"
                              icon={IconNames.MAP}
                            ></Menu.Item>
                            <Menu.Item
                              icon={IconNames.TICK}
                              text="company trips"
                            />
                            <Menu.Divider />
                            <Menu.Item icon={IconNames.OFFICE} text="agencies">
                              <Menu.Item icon={IconNames.PLUS} text="New" />
                            </Menu.Item>
                            <Menu.Item
                              icon={IconNames.PERSON}
                              text="tourists"
                            />
                          </Menu>
                        }
                        position={Position.TOP}
                      >
                        <Button
                          icon={IconNames.MENU}
                          minimal={true}
                          className="pb-2"
                        />
                      </Popover>
                    </NavbarHeading>
                  </li>
                  <li className="">
                    <NavbarHeading className="text-xl   ">
                      <Link href={"/presentations"}>
                        <a className=" no-underline">{"Presentations"}</a>
                      </Link>
                      <Popover
                        content={
                          <Menu large={true}>
                            <Menu.Item
                              icon={IconNames.PERSON}
                              text="tourists"
                            />
                          </Menu>
                        }
                        position={Position.TOP}
                      >
                        <Button
                          icon={IconNames.MENU}
                          minimal={true}
                          className="pb-2"
                        />
                      </Popover>
                    </NavbarHeading>
                  </li>
                  <li className="li_corrector">
                    <NavbarHeading className="text-xl   ">
                      <Link href={"/publish"}>
                        <a className=" no-underline">{"Publish"}</a>
                      </Link>
                      <Popover
                        content={
                          <Menu large={true}>
                            <Menu.Item
                              icon={IconNames.PERSON}
                              text="tourists"
                            />
                          </Menu>
                        }
                        position={Position.TOP}
                      >
                        <Button
                          icon={IconNames.MENU}
                          minimal={true}
                          className="pb-2"
                        />
                      </Popover>
                    </NavbarHeading>
                  </li>
                </UL>
              </NavbarGroup>

              <NavbarGroup
                className="navbar-group flex2"
                align={Alignment.LEFT}
              >
                <NavbarDivider className=" invisible" />
                <NavbarDivider className=" invisible" />
                <InputGroup
                  type="search"
                  leftIcon="search"
                  placeholder="search..."
                />
              </NavbarGroup>

              <NavbarGroup
                className="navbar-group flex3 "
                align={Alignment.RIGHT}
              >
                <Button minimal={false} icon={IconNames.SHOPPING_CART} />
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon={IconNames.ENVELOPE} />
                <Button className={Classes.MINIMAL} icon={IconNames.CHAT} />
                <Button
                  className={Classes.MINIMAL}
                  disabled={true}
                  icon={IconNames.NEW_PERSON}
                />
                <Button
                  className={Classes.MINIMAL}
                  disabled={true}
                  icon={IconNames.STAR}
                />
                <Button
                  className={Classes.MINIMAL}
                  disabled={true}
                  icon={IconNames.ISSUE_NEW}
                />
                <Button className={Classes.MINIMAL} icon={IconNames.CONFIRM} />
                {/* <NavbarDivider className=" invisible" />
            <div className="w-4"></div>
            <NavbarDivider className=" invisible" />
            <span>Thursday 23/7/2020 - 08:25</span> */}
                <NavbarDivider />
                <Button className={Classes.MINIMAL} icon={IconNames.USER} />
                <Button
                  className={Classes.MINIMAL}
                  icon={IconNames.NOTIFICATIONS}
                />

                <Popover
                  content={
                    <Menu large={true}>
                      <Menu.Item text="guides" icon={IconNames.MAP}></Menu.Item>
                      <Menu.Item icon={IconNames.TICK} text="company trips" />
                      <Menu.Divider />
                      <Menu.Item icon={IconNames.OFFICE} text="agencies">
                        <Menu.Item icon={IconNames.PLUS} text="New" />
                      </Menu.Item>
                      <Menu.Item icon={IconNames.PERSON} text="tourists" />

                      <Menu.Divider />
                      <Menu.Item
                        icon={IconNames.USER}
                        onClick={this.handleLogOut}
                        text="Log Out"
                      />
                    </Menu>
                  }
                  position={Position.TOP}
                >
                  <Button
                    icon={IconNames.COG}
                    minimal={true}
                    className="pb-2"
                  />
                </Popover>
              </NavbarGroup>
            </Navbar>
          </nav>
        )}
        <style jsx>{`
          .navbar {
            display: flex;
          }

          .flex1 {
            flex: 1 1 30vw;
          }

          .flex2 {
            flex: 1 1 20vw;
          }

          .flex3 {
            flex: 1 1 30vw;
          }

          .invisible {
            opacity: 0;
          }

          .li_corrector {
            margin-bottom: 5px;
          }
        `}</style>
      </>
    );
  }
};
NavbarComponent.defaultProps = {
  props: "Defaultprops",
};

const mapDispatchToProps = {
  logout_,
};

export default withReduxSaga(
  connect(({ account }) => ({ account }), mapDispatchToProps)(NavbarComponent)
);

// const mapDispatchToProps = dispatch => {
//     return {
//         // dispatching plain actions
//         logout: () => dispatch({ type: 'LOGOUT_REQUEST' }),
//     }
// }

// export default connect(null, mapDispatchToProps)(NavbarComponent)
