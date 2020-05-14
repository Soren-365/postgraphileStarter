// import gql from 'graphql-tag';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { Users } from 'src/typescript/Users';
// import Nav from './nav';
import { H2 } from '@blueprintjs/core'
import React from 'react'
import { connect } from 'react-redux'

interface News {
    title: string
    props: any
}

class News extends React.PureComponent<News> {
    constructor({ props }) {
        super(props)
    }

    public render() {
        console.log('News: props:', this.props.title)
        return (
            <>
                <H2>{this.props.title}</H2>
            </>
        )
    }
}
export default connect((state) => state)(News)
