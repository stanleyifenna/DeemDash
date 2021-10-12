import React from 'react';
import 'antd/dist/antd.css'; 
import { Layout } from 'antd';

const {  Footer } = Layout;

function Foter() {
    return (
        <div>
         <Layout>
    
           <Footer style={{ textAlign: 'center' }}>DeemPay ©2021</Footer>
         </Layout>
        </div>
    )
}

export default Foter
