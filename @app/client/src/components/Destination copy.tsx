// import gql from 'graphql-tag';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { Users } from 'src/typescript/Users';
// import Nav from './nav';
import { H1 } from '@blueprintjs/core'
import React from 'react'
import { connect } from 'react-redux'

import ExampleDropDown from './exampledropdown'
import ResourceDescription from './resourceComponents/resourceDescription'
import RouterHistory from './routerHistory'

type DestinationProps = {
    title: string
    props: any
}

class Destination extends React.PureComponent<DestinationProps> {
    // constructor({ title, props }) {
    //   super({ title, props });
    //   //   console.log('Destination: constructor: props, title:', [props, title]);
    // }

    public render() {
        //   console.log('Destination: this.props:', this.props);
        return (
            <>
                <div className="resource_container">
                    <div className="info_bar">
                        <div className="router_history">
                            <RouterHistory />
                        </div>
                        <div className="resource_settings"> </div>
                    </div>
                    <div className="resource_container2">
                        <div className="presentation_container">
                            <div className="topbar">
                                <H1>{this.props.title}</H1>
                                <ExampleDropDown />
                            </div>
                            <div className="description">
                                <ResourceDescription
                                    text={' THIS IS SOME TEXT RIGHT HERE'}
                                />
                            </div>
                            <div className="external-info"></div>
                            <div className="gallery"></div>
                            <div className="past-business-statistics"></div>
                        </div>
                        <div className="resourceInfo_container">
                            <div className="generalInfo_container">
                                <div className="buttons"></div>
                                <div className="map"></div>
                            </div>
                            <div className="priceInfo_container"></div>
                            <div className="associateInfo_container"></div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .resource_container {
                        width: 100%;
                        height: calc(100vh - 50px);
                        display: grid;
                        grid-template-rows: 30px 1fr;
                    }

                    .resource_container2 {
                        width: 100%;
                        display: grid;
                        grid-template-columns: 3fr 1fr;
                    }

                    .presentation_container {
                        display: grid;
                        grid-template-columns: 1fr 1.618fr 1fr;
                        grid-template-rows: 1fr 1fr 1.43fr;
                        grid-template-areas:
                            'topbar topbar topbar'
                            'description description external-info'
                            'gallery past-business-statistics external-info';
                    }

                    .resourceInfo_container {
                        display: grid;
                        border: 1px solid grey;

                        grid-template-rows: 2fr 1fr 5fr;
                    }

                    .generalInfo_container {
                        display: grid;
                        border: 1px solid grey;

                        grid-template-rows: 2fr 3fr;
                        grid-template-areas:
                            'buttons'
                            'map';
                    }

                    .priceInfo_container {
                        display: grid;
                        border: 1px solid grey;

                        grid: ;
                    }

                    .associateInfo_container {
                        display: grid;
                        border: 1px solid grey;

                        grid: ;
                    }

                    .buttons {
                        border: 1px solid grey;
                        grid-area: buttons;
                    }

                    .map {
                        border: 1px solid grey;
                        grid-area: map;
                    }
                    .info_bar {
                        width: 100vw;
                        height: 34px;
                        display: flex;
                        position: relative;
                    }
                    .router_history {
                        margin-top: -20px;
                        z-index: -10;
                    }
                    .resource_settings {
                        margin-top: -18px;
                        z-index: -10;
                    }

                    .topbar {
                        border: 1px solid grey;
                        grid-area: topbar;
                    }

                    .description {
                        border: 1px solid grey;
                        grid-area: description;
                    }

                    .external-info {
                        border: 1px solid grey;
                        grid-area: external-info;
                    }

                    .gallery {
                        border: 1px solid grey;
                        grid-area: gallery;
                    }

                    .past-business-statistics {
                        border: 1px solid grey;
                        grid-area: past-business-statistics;
                    }
                `}</style>
            </>
        )
    }
}
export default connect((state) => state)(Destination)
