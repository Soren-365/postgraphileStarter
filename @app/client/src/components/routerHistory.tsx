// import gql from 'graphql-tag';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { Users } from 'src/typescript/Users';
// import Nav from './nav';
import {
    Boundary,
    Breadcrumbs,
    Card,
    IBreadcrumbProps,
    InputGroup,
} from '@blueprintjs/core'
import React from 'react'
import { connect } from 'react-redux'

// import  { withRouter} from 'next/router'
// import { WithRouterProps } from 'next/dist/client/with-router';
// import { WithRouterProps } from 'next/dist/client/with-router';
// import routerLogger from '../src/router_logger/routerlogger'

export interface IBreadcrumbsExampleState {
    collapseFrom: Boundary
    renderCurrentAsInput: boolean
}

interface RouterHistoryProps {
    width: number
}

const ITEMS3: IBreadcrumbProps[] = [
    { icon: 'folder-close', text: '/resources', href: '/resources' },
    { icon: 'folder-close', text: '/resources', href: '/resources' },
    { icon: 'folder-close', text: '/resources', href: '/resources' },
    { icon: 'folder-close', text: '/resources', href: '/resources' },
    { icon: 'folder-close', text: '/resources', href: '/resources' },
    { icon: 'folder-close', text: '/resources', href: '/resources' },
]

class RouterHistoryComponent extends React.PureComponent<
    RouterHistoryProps,
    IBreadcrumbsExampleState
> {
    public state: IBreadcrumbsExampleState = {
        collapseFrom: Boundary.START,
        renderCurrentAsInput: false,
    }

    public render() {
        //     console.log("routerHistory: router:", this.props.router)

        //     const routerLog = routerLogger()
        // console.log("routerHistory: routerLog:", routerLog)

        // const BreadcrumbHistory = []
        // console.log("from...to,",[routerLog.length-30, routerLog.length])
        // routerLog.slice( Math.max(0,(routerLog.length-30)), routerLog.length).forEach((currentValue, index, arr) => {   BreadcrumbHistory[index] = {icon: 'folder-close', text: `${currentValue.url}`, href: `${currentValue.url}`+ '?' +`${currentValue.query}`};  })

        // const ITEMS2: IBreadcrumbProps[] = BreadcrumbHistory

        // console.log("routerHIstory: theese are the item arrays:",[ITEMS, ITEMS3])

        // const options = (
        //   <>
        //     <H5>Props</H5>
        //     <RadioGroup
        //       name="collapseFrom"
        //       inline={true}
        //       label="Collapse from"
        //       onChange={this.handleChangeCollapse}
        //       options={COLLAPSE_FROM_RADIOS}
        //       selectedValue={this.state.collapseFrom.toString()}
        //     />
        //     <Checkbox
        //       name="renderCurrent"
        //       label="Render current breadcrumb as input"
        //       onChange={this.handleChangeRenderCurrentAsInput}
        //       checked={this.state.renderCurrentAsInput}
        //     />
        //     <H5>Example</H5>
        //     <Label>Width</Label>
        //     <Slider
        //       labelRenderer={this.renderLabel}
        //       labelStepSize={50}
        //       max={100}
        //       onChange={this.handleChangeWidth}
        //       showTrackFill={false}
        //       value={this.state.width}
        //     />
        //   </>
        // );

        const { collapseFrom, renderCurrentAsInput } = this.state
        const width = window.outerWidth * 0.75

        return (
            <>
                <Card elevation={0} style={{ width: `${width}px` }}>
                    <Breadcrumbs
                        collapseFrom={collapseFrom}
                        items={ITEMS3}
                        currentBreadcrumbRenderer={
                            renderCurrentAsInput
                                ? this.renderBreadcrumbInput
                                : undefined
                        }
                    />
                </Card>
            </>
        )
    }

    private renderBreadcrumbInput = ({ text }: IBreadcrumbProps) => {
        return (
            <BreadcrumbInput
                defaultValue={typeof text === 'string' ? text : undefined}
            />
        )
    }
}

/* tslint:disable max-classes-per-file */
class BreadcrumbInput extends React.PureComponent<
    IBreadcrumbProps & { defaultValue: string | undefined }
> {
    public state = {
        text: this.props.defaultValue ?? '',
    }

    public render() {
        const { text } = this.state
        return (
            <InputGroup
                placeholder="rename me"
                value={text}
                onChange={this.handleChange}
            />
        )
    }

    private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            text: (event.target as HTMLInputElement).value,
        })
    }
}

export default connect((state) => state)(RouterHistoryComponent)
