import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    render() {
        if (typeof window === 'undefined') {
            console.log('document render on Server')
        } else {
            console.log('document render on Client')
        }
        return (
            <html>
                <Head></Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
