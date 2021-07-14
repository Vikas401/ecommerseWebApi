import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header/Header';
import MainLayout from './Component/MainLayout/MainLayout';
import Registration from './Component/Resistration/Resistration';
import './default.scss';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" render={() => (
         <MainLayout>
           <Homepage/>
         </MainLayout>
       )}/>
       <Route path="/registration" render={() => (
         <MainLayout>
           <Registration/>
         </MainLayout>
       )}/>
     </Switch>
    </div>
  );
}

export default App; 
