import { Header } from "../../../components/Header/Header"
import { Footer } from "../../../components/Footer/Footer"
import ModalDetailCard from "../../../components/ModalDetailCard/ModalDetailCard";
import React from 'react';

type PropsTemplate = {
    children?: React.ReactNode
}

export  function TemplatePage(props: PropsTemplate) {
    return (
        <div className="container-main">
            <Header />
            {props.children}
            <Footer />
            <ModalDetailCard />
        </div>
    )
}