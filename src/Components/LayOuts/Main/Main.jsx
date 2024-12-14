import React from 'react';
import HomeContainer from '../../Pages/Home/HomeContainer';
import Navbars from '../../Navbars/Navbars';
import Footer from '../../Footer/Footer';


const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <HomeContainer></HomeContainer>
            <Footer></Footer>
        </div>
    );
};

export default Main;