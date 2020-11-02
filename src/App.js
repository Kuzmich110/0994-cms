import React from "react";
import './App.css';
import {Menu} from "./components/Menu";
import  {Route,BrowserRouter} from "react-router-dom";
import {Pages} from "./pages/Pages";
import {AddPage} from "./pages/AddPage";
import {EditPage} from "./pages/EditPage";
import {Branches} from "./pages/Branches";
import {AddBranch} from "./pages/AddBranch";
import {cmsPath} from "./config";

function App() {
  return (
      <div className="container-fluid">
          <BrowserRouter>
              <div className="row">
                  <Menu/>
                  <div className="col-9">
                      <Route exact path={cmsPath+"/"} render={()=>"CMS"}/>
                      <Route exact path={cmsPath+"/pages/"} render={()=><Pages/>}/>
                      <Route path={cmsPath+"/pages/addPage"} render={()=><AddPage/>}/>
                      <Route path={cmsPath+"/pages/editPage"} render={()=><EditPage/>}/>
                      <Route exact path={cmsPath+"/branches/"} render={()=><Branches/>}/>
                      <Route path={cmsPath+"/branches/addBranch"} render={()=><AddBranch/>}/>
                  </div>
              </div>
          </BrowserRouter>
      </div>

  );
}

export default App;
