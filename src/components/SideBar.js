import React from 'react';
import image from '../assets/images/logo-DH.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastProductInDb from './LastProductInDb';
import ContentRowMovies from './ContentRowMovies';
import SearchMovies from './SearchMovies';
import Chart from './Chart';
import ChartUser from './ChartUser';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar({ totalProductos, totalUsuarios, totalCategorias }){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Oh my apple!</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ChartUser">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de Usuarios</span></Link>
                </li>
                
                {/* <!-- Buscador -->
                <li className="nav-item nav-link">
                    <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-search"></i>
                        <span>Search a movie</span>
                    </Link>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper 
                    totalProductos={totalProductos}
                    totalUsuarios={totalUsuarios}
                    totalCategorias={totalCategorias}
                    />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route path="/ChartUser">
                    <ChartUser />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;