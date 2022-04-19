import React from 'react';
import { Helmet } from 'react-helmet-async';
import LoadTitle from '../Shared/LoadTitle/LoadTitle';
import './About.css'

const About = () => {
    return (
        <div>
            <LoadTitle title='About-page'></LoadTitle>
            <h1>This is about page</h1>
        </div>
    );
};

export default About;