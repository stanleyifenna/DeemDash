import React from 'react';
// import Footer from './Footer';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function Layout({children}) {
    return (
        <>
         <div>
             <main>
                <Sidebar />
                <Topbar /> 
                {children} 
               </main>
  
               {/* <Footer /> */}
         </div>
        </>
    )
}

export default Layout;
