



import './App.css';
import Home from './pages/Home';
import PersonelEkle from './pages/PersonelEkle';
import Kullaniciİslem from './pages/Kullaniciİslem';

import PersonelListe from './pages/PersonelListe';
import PersonelTakip from './pages/PersonelTakip';
import Giris from './pages/Giris';
import Cikis from './pages/Cikis';
import Header from './components/Header';
import Footer from './components/Footer';
import Leftside from './components/Leftside';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="hold-transition sidebar-mini layout-fixed" >
      
      <Router>
          <Header/>
          <Leftside/>
          <Switch>
            <Route exact  path="/" component={Home} />
            <Route exact  path="/PersonelEkle" component={PersonelEkle} />
           
            <Route exact  path="/PersonelListe" component={PersonelListe} />
            <Route exact  path="/PersonelTakip" component={PersonelTakip} />
            <Route exact  path="/Kullaniciİslem" component={Kullaniciİslem} />
            <Route exact  path="/Giris" component={Giris} />
            <Route exact  path="/Cikis" component={Cikis} />
          </Switch>
          <Footer/>
      </Router>
        
     
    </div>
    
  );
}

export default App;
