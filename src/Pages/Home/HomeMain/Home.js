import React from 'react';
import InfoCards from '../../../Components/InfoCard/InfoCards';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Appointment></Appointment>
        </>
    );
};

export default Home;