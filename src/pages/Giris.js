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
            <p className="login-box-msg">Oturumunuzu başlatmak için giriş yapınız.</p>

            <form action="../../index3.html" method="post">
                <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email"/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                    </div>
                </div>
                </div>
                <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"/>
                <div className="input-group-append">
                    <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <div className="icheck-primary">
                        <input type="checkbox" id="remember"/>
                        <label for="remember">
                            Beni Hatırla
                        </label>
                    </div>
                </div>
                
                <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Giriş</button>
                </div>
            
                </div>
            </form> 
            {/*  
            <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div>
            */}

            <p className="mb-1">
                <a href="forgot-password.html">Şifremi Unuttum</a>
            </p>
            <p className="mb-0">
                <a href="register.html" className="text-center">Kayıt Ol</a>
            </p>
            </div>
            
        </div>
    </div>
</div>  

            )
        }   
    }


    
export default Home