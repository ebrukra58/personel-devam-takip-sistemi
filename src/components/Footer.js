import React, {Component} from "react";

class Footer extends React.Component{
    render(){
        return(
            <div>
                <footer className="main-footer">
                    <strong>Copyright © 2014-2020 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
                                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                    <b>Version</b> 3.1.0-rc
                        </div>
                </footer>
            </div>
        )
    }
    

}
export default Footer