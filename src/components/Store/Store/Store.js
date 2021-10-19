import React from 'react';
import StoreItems from '../StoreItems/StoreItems';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Store = () => {
    return (
        <div>
            <Header></Header>
            <StoreItems></StoreItems>
            <Footer></Footer>
        </div>
    );
};

export default Store;