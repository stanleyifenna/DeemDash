import React from 'react';
import Layout from '../Globals/Layout';
import HomeSection from './HomeSection';
import HomeSection2 from './HomeSection2';
import Chart from './Chart';



function Home() {
    return (
        <Layout>
           <HomeSection />
           <Chart />
           <HomeSection2 />
        </Layout>
    )
}

export default Home;