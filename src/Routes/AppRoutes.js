import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AboutUs from '../Components/AboutUs/'
import ContactUs from '../Components/ContactUs/'
import FAQ from '../Components/FAQ/'
import OurFeatures from '../Components/OurFeatures/'
import OurTeam from '../Components/OurTeam/'
import Privacy from '../Components/Privacy/'
import Refund from '../Components/Refund/'
import Terms from '../Components/Terms/'
import Footer from '../Components/Footer'
import Blog from '../Components/Blog'
import Article from '../Components/Blog/Article'
import TryIt from '../Components/TryIt'
import NewPassword from '../Components/NewPassword'
import ForgetPassword from '../Components/ForgetPassword'
import SelectGrade from '../Components/SelectGrade'
import SignIn from '../Components/SignIn'
import Home from '../Components/Home'
import TutorHome from '../Components/TutorLandingPage'
import DemoStep1 from '../Components/DemoStep1'
import DemoStep2 from '../Components/DemoStep2'
import SideNav from '../Components/SideNav'
import TopNav from '../Components/TopNav'
import RatePlan from '../Components/StudentDashboard/RatePlan'
import Payment from '../Components/StudentDashboard/Payment'
import AutoChargeSettings from '../Components/StudentDashboard/AutoChargeSettings';
import AllAboutResult from '../Components/AllAboutResult'
import ChoosePayment from '../Components/ChoosePayment'
import ClientsAreSaying from '../Components/ClientsAreSaying'
import Profile from '../Components/Profile'
import TimeAndDate from '../Components/TimeAndDate'
class AppRoutes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/features" component={OurFeatures} />
        <Route exact path="/team" component={OurTeam} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/refund" component={Refund} />
        <Route exact path="/terms" component={Terms} />
        {/* <Route exact path="/footer" component={Footer} /> */}
        <Route exact path="/blog" component={Blog}/>
        <Route exact path="/article" component={Article}/>
        <Route exact path="/tryIt" component={TryIt}/>
        <Route exact path="/newPassword" component={NewPassword}/>
        <Route exact path="/forgetPassword" component={ForgetPassword}/>
        <Route exact path="/signIn" component={SignIn}/>
        <Route exact path="/selectGrade" component={SelectGrade}/>
        <Route exact path="/tutorHome" component={TutorHome}/>
        <Route exact path="/demoStep1" component={DemoStep1}/>
        <Route exact path="/demoStep2" component={DemoStep2}/>
        <Route exact path="/demoStep3" component={DemoStep1}/>
        <Route exact path="/sideNav" component={SideNav}/>
        <Route exact path="/navs" component={TopNav}/>
        <Route exact path="/ratePlan" component={RatePlan}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/autoChargeSettings" component={AutoChargeSettings}/>
        <Route exact path="/allAboutResult" component={AllAboutResult}/>
        <Route exact path="/choosePayment" component={ChoosePayment}/>
        <Route exact path="/clientsAreSaying" component={ClientsAreSaying}/>
        <Route exact path="/Profile" component={Profile}/>
        <Route exact path="/timeAndDate" component={TimeAndDate}/>

        </Switch>
    );

  }
}

export default AppRoutes;
