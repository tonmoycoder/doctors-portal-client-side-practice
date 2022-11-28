import React from 'react';
import InfoCards from '../../../Components/InfoCard/InfoCards';
// import Test from '../../../Components/Test/Test';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            {/* <Test></Test> */}
        </>
    );
};

export default Home;