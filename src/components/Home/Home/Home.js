import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import Experts from '../Experts/Experts';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;