import React from "react";
import './App.css';
import {Menu} from "./components/Menu";
import  {Route,BrowserRouter} from "react-router-dom";
import {Pages} from "./pages/Pages";
import {AddPage} from "./pages/AddPage";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <div className="row">
                  <Menu/>
                  <div className="col-9">
                      <Route exact path="/" render={()=>"CMS"}/>
                      <Route exact path="/pages/" render={()=><Pages/>}/>
                      <Route path="/pages/addPage" render={()=><AddPage/>}/>
                  </div>
              </div>
          </BrowserRouter>
      </div>

  );
}

export default App;
