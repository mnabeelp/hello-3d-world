/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { FunctionComponent } from "react"

const Card: FunctionComponent = ({ children }) => (
    <div className="w-full md:w-1/2 lg:w-1/3">
        <div
            css={css`
                border-width: 1px;
                border-color: #673ab7;
                margin: 10px;
                background-color: #17212b;
                padding: 10px;
                border-radius: 20px;
            `}
        >
            {children}
        </div>
    </div>
)

class Layout extends React.Component {
    static Side: FunctionComponent = ({ children }) => <Card>{children}</Card>
    static Main: FunctionComponent = ({ children }) => (
        <div
            css={css`
                height: 100vh;
            `}
            className="w-full md:w-1/2 lg:w-2/3"
        >
            {children}
        </div>
    )

    render() {
        return (
            <div
                css={css`
                    background-color: #17212b;
                    padding: 5px;
                `}
                className="sm:flex"
            >
                {this.props.children}
            </div>
        )
    }
}

export default Layout