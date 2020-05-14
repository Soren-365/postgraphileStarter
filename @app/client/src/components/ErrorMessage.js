import PropTypes from 'prop-types'
import React from 'react'

const ErrorMessage = ({ message }) => (
    <aside>
        {message}
        <style jsx>{`
            aside {
                padding: 1.5em;
                font-size: 14px;
                color: white;
                background-color: red;
            }
        `}</style>
    </aside>
)

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default ErrorMessage
