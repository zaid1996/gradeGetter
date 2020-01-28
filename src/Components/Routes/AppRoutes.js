import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AboutUs from '../AboutUs'

class AppRoutes extends Component {
    state = {  }
    render() { 
        return ( 
            <BrowserRouter>
                <Switch>
              <Route path="/aboutUs" component={AboutUs} />
          </Switch>
          </BrowserRouter>
            
        );
    }
}
 
export default AppRoutes;
