import React from "react";
import './App.css';
import {Menu} from "./components/Menu";
import  {Route,BrowserRouter} from "react-router-dom";
import {Pages} from "./pages/Pages";
import {AddPage} from "./pages/AddPage";
import {EditPage} from "./pages/EditPage";
import {Branches} from "./pages/Branches";
import {AddBranch} from "./pages/AddBranch";

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
                      <Route path="/pages/editPage" render={()=><EditPage/>}/>
                      <Route exact path="/branches/" render={()=><Branches/>}/>
                      <Route path="/branches/addBranch" render={()=><AddBranch/>}/>
                  </div>
              </div>
          </BrowserRouter>
      </div>

  );
}

export default App;
