import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const MainLayout = props => {
    return(
        <div>
            <Header/>
            <div className="main">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default MainLayout;