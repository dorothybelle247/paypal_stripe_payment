import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./css/styles.css"


import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Commonpayment from "./components/Commonpayment";
import Hero from "./components/Hero";


function App() {
  return (
    <div className="App">
     <Router>
       <Header/>
      
       <Hero/>

       <Slider/>
       <Main/>
       <Commonpayment/>

       <Switch>
         <Route exact path="/">
           {/* <Main/> */}
         </Route>
         <Route path="/slider">
         <Slider/>
         </Route>
         <Route path="/sidebar">
         <Sidebar/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
