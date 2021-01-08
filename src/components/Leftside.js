import React, {Component} from "react";
import {Link} from 'react-router-dom';


class Leftside extends React.Component{
    render(){
        return(
          
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
    
      <Link to="/" className="brand-link"> 
      <img src="assets/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}}/>
      <span className="brand-text font-weight-light">MEVADA OTOMASYON</span>
      </Link>

    {/* <!-- Sidebar --> */}
    <div className="sidebar os-host os-theme-light os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-scrollbar-vertical-hidden os-host-transition">
        <div className="os-resize-observer-host observed">
            <div className="os-resize-observer" style={{left: '0px', right:'auto' }}>
                </div></div>
        <div className="os-size-auto-observer observed" style={{height:'calc(100% + 1px)', float: 'left'}}>
            <div className="os-resize-observer"></div></div>
            <div className="os-content-glue" style={{margin: '0px -8px'}}>
                </div><div className="os-padding">
                    <div className="os-viewport os-viewport-native-scrollbars-invisible">
                    <div className="os-content" style={{padding: '0px 8px', height: '100%' ,width:'100%'}}>
      {/* <!-- Sidebar user panel (optional) --> */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="assets/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image"/>
        </div>
        <div className="info">
          <a href="#" className="d-block">Ebru Kara</a>
        </div>
      </div>

      {/* <!-- SidebarSearch Form --> */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
        <div className="sidebar-search-results">
            <div className="list-group"><a href="#" className="list-group-item">
        <div className="search-title">
          <b className="text-light"></b>N<b className="text-light"></b>o<b className="text-light"></b> <b className="text-light"></b>e<b className="text-light"></b>l<b className="text-light"></b>e<b className="text-light"></b>m<b className="text-light"></b>e<b className="text-light"></b>n<b className="text-light"></b>t<b className="text-light"></b> <b className="text-light"></b>f<b className="text-light"></b>o<b className="text-light"></b>u<b className="text-light"></b>n<b className="text-light"></b>d<b className="text-light"></b>!<b className="text-light"></b>
        </div>
        <div className="search-path">
          
        </div>
      </a></div></div>
      </div>

     {/*  <!-- Sidebar Menu --> */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-user-alt"></i>
              <p>
                PERSONEL
                
              </p>
            </a>
            <ul className="nav nav-treeview" style={{display:'block'}}>
              <li className="nav-item">
                  <Link to="./PersonelTakip" className="nav-link active">
                  <i className="fas fa-users nav-icon"></i>
                  <p>Personel Takip</p>
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="./PersonelListe" className="nav-link">
                  <i className="far fa-list-alt nav-icon"></i>
                  <p>Personel Listesi</p>
                  </Link>
              </li>
             
            </ul>
            </li>


        </ul>
      </nav>

      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
          <li className="nav-item menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-user-lock"></i>
              <p>
                YÖNETİCİ
                <i className="right  menu-open"></i>
              </p>
            </a>
            <ul className="nav nav-treeview" style={{display:'block'}}>
              
              <li className="nav-item">
                  <Link to="./PersonelEkle"className="nav-link" >
                  <i className="fas fa-user-plus nav-icon"></i>
                  <p>Personel Ekle</p>
                  </Link>
              </li>
            
              <li className="nav-item">
                  <Link to="./Kullaniciİslem" className="nav-link">
                  <i className="fas fa-user-cog nav-icon"></i>
                  <p>Kullanıcı İşlemleri</p>
                  </Link>
              </li>
              <li className="nav-item">
            
                  <Link to="./Giris" className="nav-link" >
                  <i className="fas fa-sign-in-alt nav-icon"></i>
                  <p>Giriş</p>
                  </Link>
              </li>
              <li className="nav-item">
               
                  <Link to="./Cikis"className="nav-link" >
                  <i className="fas fa-sign-out-alt nav-icon"></i>
                  <p>Çıkış</p>
                  </Link>
              </li>
            </ul>
          </li>
            </ul>
          
        

      </nav>
        
      {/* <!-- /.sidebar-menu --> */}
    </div>
    </div>
    </div>
    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
        <div className="os-scrollbar-track">
            <div className="os-scrollbar-handle" style={{width: '100%', transform: 'translate(0px, 0px)'}}></div>
            </div>
            </div>
            <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-unusable os-scrollbar-auto-hidden">
                <div className="os-scrollbar-track">
                    <div className="os-scrollbar-handle" style={{height: '100%', transform: 'translate(0px, 0px)'}}>
                        </div></div></div><div className="os-scrollbar-corner"></div></div>
    {/* <!-- /.sidebar --> */}
  </aside>



            
        )
    }
    

}
export default Leftside