import { Code, H1, H2, Pre } from '@blueprintjs/core'
import Link from 'next/link'
import { connect } from 'react-redux'

import Clock from './clock'

function Page({
    error,
    lastUpdate,
    light,
    linkTo,
    NavigateTo,
    placeholderData,
    title,
}) {
    return (
        <div className="sub_container">
            <div className="flex_containers one">
                <H1>{title}</H1>
            </div>

            <div className="flex_containers two">
                <Clock lastUpdate={lastUpdate} light={light} />
                <nav>
                    <Link href={linkTo}>
                        <a>Navigate: {NavigateTo}</a>
                    </Link>
                </nav>
            </div>

            <div className="flex_containers three">
                <H2>Some Graphql Data here:</H2>
                {placeholderData && (
                    <Pre>
                        <Code>{JSON.stringify(placeholderData, null, 2)}</Code>
                    </Pre>
                )}
                {error && (
                    <p style={{ color: 'red' }}>Error: {error.message}</p>
                )}
            </div>

            <style jsx>{`
                .sub_container {
                    width: 1300px;
                    margin: 0px calc((100% - 1300px) / 2) 0px auto;
                    display: flex;
                    justify-content: space-between;
                }

                .flex_containers {
                    width: 400px;
                }
            `}</style>
        </div>
    )
}

export default connect((state) => state)(Page)
