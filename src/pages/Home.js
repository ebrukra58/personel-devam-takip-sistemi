import React, {Component} from "react";


class Home extends React.Component{
    
    render(){
        
        return(
    <div className="login-page" cz-shortcut-listen="true" style={{minHeight: '496.391px' }}>
    <div className="login-box">
        <div className="login-logo">
            <a href="../../index2.html"><b>MEVADA</b> PDKS</a>
        </div>
       
        <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Mevada PDKS'ye hoş geldiniz! 
            Oturumunuzu başlatmak için "GİRİŞ" butonuna tıklayınız. </p>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">Giriş</button>
                </div>
            
                </div>
          
        
            </div>
            
        </div>
    </div>
 

            )
        }   
    }


    
export default Home