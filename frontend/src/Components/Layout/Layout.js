import React from 'react';
import Footer from '../Footer/Footer';
import Appbar from '../Header/Appbar';

const Layout = (props) => {
    return (
        <div>
            <Appbar />
            {props.children}
            <Footer />

        </div>

    );
};

export default Layout;