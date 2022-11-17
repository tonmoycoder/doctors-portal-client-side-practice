import React from 'react';
import banner from '../../../assets/images/chair.png';
import Button from '../../../Components/Button/Button';
import './Banner.css';

const Banner = () => {
  return (
    <div className="">
      <div className="hero pt-20 pb-40 hero_bg">
        <div className="px-3 hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="lg:w-1/2 rounded-lg shadow-2xl" alt="banner" />
          <div className="pr-9">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6 leading-7">
              Our Dental Services offers a comprehensive range of dental treatments and services to
              help you achieve and maintain optimal oral health. We provide preventive, restorative,
              and cosmetic dentistry services for patients of all ages. Our goal is to help you
              achieve and maintain a healthy, beautiful smile for a lifetime.
            </p>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
