import React from 'react'

import Document, {
    Head,
    Html,
    Main,
    NextScript,
    DocumentContext
} from 'next/document'

class NextSite extends Document {
    public static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    public render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/assets/favicon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, user-scalable=yes"
                    />
                    <meta name="description" content="my99n's personal site" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NextSite