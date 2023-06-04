import { Header } from "../../../components/Header/Header"
import { Footer } from "../../../components/Footer/Footer"
import React from 'react';

type PropsTemplate = {
    children?: React.ReactNode
}

export function TemplatePage(props: PropsTemplate) {
    return (
        <div className="container-main">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}