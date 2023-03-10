import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';

function ContentWrapper({ totalProductos, totalUsuarios, totalCategorias }){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop 
                    totalProductos={totalProductos}
                    totalUsuarios={totalUsuarios}
                    totalCategorias={totalCategorias}
                    />
                    <ContentRowCenter />
                    <Chart />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;