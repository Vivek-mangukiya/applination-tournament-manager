import React, { useContext } from "react";
// import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Profile from "./screens/profile/Profile";
import ActiveHistoryState from "./context/profileActiveHistory/ActiveHistoryState";
import NewEventProfile from "./screens/new_event/NewEventProfile";
import TemplateDivision from "./screens/template_division/TemplateDivision";
import Scores from "./screens/scores/Scores";
import TemplatePoints from "./screens/template_points/TemplatePoints";
import TemplatePools from "./screens/template_pools/TemplatePools";
import EventState from "./context/event/EventState";
import AuthState from "./context/auth/AuthState";

//jai
import RegState from "./context/registration/RegState";
//jai test
// test for develop
import ManagerList from "../src/components/ManagerListComponent";
import DashBoard from "../src/components/DashboardComponent";
import MasterForm from "./components/WizardFormComponent";
import FooterComponent from "./components/FooterComponent";
import RegEventComponent from "./components/RegEventComponent";
import RegEventEditComponent from "./components/RegEventEditComponent";
import RegEventTeamView from "./components/RegEventTeamViewComponent";
// import NewEventProfile from './components/NewEventProfile'
import PlayerListComponent from "./components/PlayerListComponent";
import EventsListComponent from "./components/EventsListComponent";
import RegListComponent from "./components/RegListComponent";
import PoolForm from "./components/PoolFormComponent";
import PointsForm from "./components/PointsFormComponent";
import TemplateListComponent from "./components/TemplatesListForm";
import TemplateFormComponent from "./components/TemplateFormComponent";
import PlayerProfileCancel from "./components/PlayerProfileCancel";
import ScoresListComponent from "./components/ScoresListComponent";
// import SideBar from './screens/sidebar/Sidebar'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Header from './screens/header/Header';
import EventFormatSaved from "./components/EventFormatSaved";
import DashBoardManager from "./components/DashboardManager";
import DashBoardPlayers from "./components/DashboardPlayers";
import DashBoardEvents from "./components/DashboardEvents";
import DashBoardReg from "./components/DashboardReg";
import DashBoardTemplate from "./components/DashboardTemplate";
import SignIn from "./screens/signIn/SignIn";
import Members from "./screens/members/Members";
import Payments from "./screens/payments/Payments";
import Settings from "./screens/settings/Settings";
import { Fragment } from "react";
import HookTemplate from "./components/HookTemplate";
import NewManagerProfile from "./screens/manager/NewManagerProfile";
import PrivateRoute from "./PrivateRoute";
import NewManagerProfileEdit from "./screens/manager/NewManagerProfileEdit";
import NewManagerProfileState from "./context/newManagerProfile/NewManagerProfileState";
import ProfileEdit from "./screens/profile/ProfileEdit";
import PlayerProfileState from "./context/playerProfile/PlayerProfileState";
import NewProfile from "./screens/profile/NewProfile";
import EventProfileSaved from "./screens/new_event/EventProfileSaved";
import TemplateDivisionSaved from "./components/TemplateDivisionSaved";
import TemplateDivisionEdit from "./components/TemplateDivisionEdit";
import EventFormatEdit from "./components/EventFormatEdit";
import TemplateDivisionSavedMain from "./screens/template_division/TemplateDivisionSavedMain";
import TemplateDivisionState from "./context/templateDivision/TemplateDivisionState";
import TemplateListState from "./context/templateList/TemplateListState";
import TemplatePoolsSaved from "./screens/template_pools/TemplatePoolsSaved";
import TemplatePointsSaved from "./screens/template_points/TemplatePointsSaved";
import ManagerNone from "./components/ManagerNone";
import PlayerNone from "./components/PlayerNone";
import EventNone from "./components/EventNone";
import RegNone from "./components/RegNone";
import ScoreNone from "./components/ScoreNone";
import TemplateNone from "./components/TemplateNone";
import MembershipNone from "./components/MembershipNone";
import PaymentNone from "./components/PaymentNone";
// import EventFormatEdit from './components/EventFormatEdit';
// import TemplateDivisionSavedMain from './screens/template_division/TemplateDivisionSavedMain';
// import TemplateDivisionState from './context/templateDivision/TemplateDivisionState';
// import TemplateListState from './context/templateList/TemplateListState';
// import TemplatePoolsSaved from './screens/template_pools/TemplatePoolsSaved';
// import TemplatePointsSaved from './screens/template_points/TemplatePointsSaved';
import NewManagerProfileCreated from "./screens/manager/NewManagerProfileCreated";
import NewEventProfileEdit from "./screens/new_event/NewEventProfileEdit";
import CompleteProfile from "./components/CompleteProfile";
import PoolsScreen from "./screens/pools/PoolsScreen";
import PoolsSummary from "./screens/pools/PoolsSummary";
import DashboardState from "./context/dashboard/DashboardState";
import TemplateEdit from "./components/TemplateEdit";
import Example from "./components/Example";
import TemplateSaved from "./components/TemplateSaved";
import TemplateDuplicate from "./components/TemplateDuplicate";
import TemplatePoolsState from "./context/template_pool/TemplatePoolsState";
import Roadmap from "./screens/roadmap/Roadmap";
import TemplatePointsUpdate from "./screens/template_points/TemplatePointsUpdate";
import TemplatePointsState from "./context/template_points/TemplatePointsState";
import TemplatePoolsUpdate from "./screens/template_pools/TemplatePoolsUpdate";
import ScoresState from "./context/scores/ScoresState";
import ScoresEdit from "./screens/scores/ScoresEdit";
import PoolsState from "./context/pools/PoolsState";
import Bracket from "./screens/bracket/Bracket";
import ScorePoolMainPage from "./screens/pools/ScorePoolMainPage";
import DashboardScores from "./components/DashboardScores";
import BracketState from "./context/bracket/BracketState";
import AuthContext from "./context/auth/authContext";
import BracketDivisionEdit from "./screens/bracket/BracketDivisionEdit";
import { useState } from "react";
import jwt from "jsonwebtoken";
import ForgetPassword from "./screens/signIn/ForgetPassword";
import CompleteProfileInfo from "./screens/complete_profile/CompleteProfileInfo";
import CompleteProfileEdit from "./screens/complete_profile/CompleteProfileEdit";
import Header from "./components/header/Header";
import StripeKeyPage from "./screens/stripe/StripeKeyPage";
import NewEventProfileDuplicate from "./screens/new_event/NewEventProfileDuplicate";
import TemplatePoolsSame from "./screens/template_pools/TemplatePoolsSame";
import TemplatePoolsDifferent from "./screens/template_pools/TemplatePoolsDifferent";
import { TermsAndConditions } from "./screens/TermsAndConditions/TermsAndConditions";
import { PrivacyPolicy } from "./screens/PrivacyPolicy/PrivacyPolicy";
import Tournaments from "./screens/tournaments/Tournaments";
import LiveScore from "./screens/liveSccore/liveSccore";
import UploadedFiles from "./screens/uploadedFiles/uploadedFiles";
import { ToastContainer } from "react-toastify";

const App2 = () => {
  const authContext = useContext(AuthContext);
  const { sidebarMax, logout } = authContext;
  const isAuthenticated = localStorage.getItem("authenticated");
  // if (localStorage.token) {
  //   jwt.verify(
  //     localStorage.getItem('token'),
  //     'N8IYoBg5UHeZUAhCXsuVkS0WOSgPcVkje0AFY37sHkEJ2O9eABudUU5o7y6JP0qi',
  //     (err, decode) => {
  //       if (err) {
  //         logout();
  //       }
  //       else{
  //         console.log("Executed");
  //       }
  //     }
  //   );
  // }

  return (
    <Fragment>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Route exact path="/" component={SignIn} />
      <Route exact path="/forgotPassword" component={ForgetPassword} />
      <Route exact path="/terms-and-condition" component={TermsAndConditions} />
      <Route exact path="/streaming/:match_id/:set" component={LiveScore} />
      <Route exact path="/privacy-policy" component={PrivacyPolicy} />
      {!window.location.href.includes("streaming") && (
        <div className="App">
          {/* <Header /> */}
          <Sidebar />
          <div id="app-content" style={sidebarMax ? {} : { marginLeft: 89 }}>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={DashBoard} />
              {/* new manager profile */}
              <PrivateRoute
                exact
                path="/newManagerProfileSaved/:id"
                component={NewManagerProfile}
              />
              <PrivateRoute
                exact
                path="/newManagerProfileEdit/:id"
                component={NewManagerProfileEdit}
              />
              <PrivateRoute exact path="/managers" component={ManagerList} />
              <PrivateRoute exact path="/members" component={Members} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <PrivateRoute
                exact
                path="/newEventProfile"
                component={NewEventProfile}
              />
              <PrivateRoute
                exact
                path="/registration"
                component={RegEventComponent}
              />
              <PrivateRoute
                exact
                path="/templateDivision"
                component={TemplateDivision}
              />
              <PrivateRoute exact path="/scores/:id" component={Scores} />
              <PrivateRoute
                exact
                path="/templatePoints/:spots/:templateName"
                component={TemplatePoints}
              />
              <PrivateRoute
                exact
                path="/templatePointsUpdate/:points_id"
                component={TemplatePointsUpdate}
              />
              <PrivateRoute
                exact
                path="/templatePools/:teams/:pools/:courts/:templateName/:status"
                component={TemplatePoolsDifferent}
              />
              <PrivateRoute
                exact
                path="/templatePools/:teams/:pools/:courts/:templateName"
                component={TemplatePoolsSame}
              />
              <PrivateRoute
                exact
                path="/templatePoolsUpdate/:teams/:pools/:courts/:pool_id"
                component={TemplatePoolsUpdate}
              />
              {/* Payments route */}
              <PrivateRoute exact path="/payments" component={Payments} />
              {/* Settings Route*/}
              <PrivateRoute exact path="/settings" component={Settings} />

              {/* jai */}
              {/* <Route exact path="/ManagerTable" component={ManagerList} /> */}
              {/* <Route exact path="/Dashboard" component={DashBoard} /> */}
              <PrivateRoute exact path="/DivisionForm" component={MasterForm} />
              <PrivateRoute exact path="/Footer" component={FooterComponent} />
              <PrivateRoute
                exact
                path="/RegEvent/:id"
                component={RegEventComponent}
              />
              <PrivateRoute
                exact
                path="/RegEventEdit/:id/:some?"
                component={RegEventEditComponent}
              />
              <PrivateRoute
                exact
                path="/RegEventTeam/:id/:division_id/:waiting/:event_id"
                component={RegEventTeamView}
              />
              <PrivateRoute
                exact
                path="/NewEventProfile"
                component={NewEventProfile}
              />
              <PrivateRoute
                exact
                path="/PlayerTable"
                component={PlayerListComponent}
              />
              <PrivateRoute
                exact
                path="/EventsTable"
                component={EventsListComponent}
              />
              <PrivateRoute
                exact
                path="/RegTable"
                component={RegListComponent}
              />
              <PrivateRoute exact path="/PoolForm" component={PoolForm} />
              <PrivateRoute exact path="/PointsForm" component={PointsForm} />
              <PrivateRoute
                exact
                path="/TemplateTable"
                component={TemplateListComponent}
              />
              <PrivateRoute
                exact
                path="/TemplateForm"
                component={TemplateFormComponent}
              />
              <PrivateRoute
                exact
                path="/DivisionFormCancel"
                component={PlayerProfileCancel}
              />
              <PrivateRoute
                exact
                path="/ScoresTable"
                component={ScoresListComponent}
              />
              <PrivateRoute
                exact
                path="/EventFormatSaved"
                component={EventFormatSaved}
              />
              <PrivateRoute
                exact
                path="/TemplateDivisionSaved"
                component={TemplateDivisionSaved}
              />
              <PrivateRoute
                exact
                path="/TemplateDivisionEdit/:id"
                component={TemplateDivisionEdit}
              />
              <PrivateRoute
                exact
                path="/DashboardManager"
                component={DashBoardManager}
              />
              <PrivateRoute
                exact
                path="/DashboardPlayers"
                component={DashBoardPlayers}
              />
              <PrivateRoute
                exact
                path="/DashboardEvents"
                component={DashBoardEvents}
              />
              <PrivateRoute
                exact
                path="/DashboardReg"
                component={DashBoardReg}
              />
              <PrivateRoute
                exact
                path="/DashboardTemplate"
                component={DashBoardTemplate}
              />
              <PrivateRoute exact path="/Hook" component={HookTemplate} />
              <PrivateRoute exact path="/profileEdit" component={ProfileEdit} />
              <PrivateRoute exact path="/newProfile" component={NewProfile} />
              <PrivateRoute
                exact
                path="/eventProfileSaved/:id"
                component={EventProfileSaved}
              />
              <PrivateRoute
                exact
                path="/EventFormatEdit"
                component={EventFormatEdit}
              />
              <PrivateRoute
                exact
                path="/templateDivisionSavedMain/:id"
                component={TemplateDivisionSavedMain}
              />
              <PrivateRoute
                exact
                path="/templatePoolsSaved/:pool_id"
                component={TemplatePoolsSaved}
              />
              <PrivateRoute
                exact
                path="/templatePointsSaved/:points_id"
                component={TemplatePointsSaved}
              />
              <PrivateRoute exact path="/ManagerNone" component={ManagerNone} />
              <PrivateRoute exact path="/PlayerNone" component={PlayerNone} />
              <PrivateRoute exact path="/EventNone" component={EventNone} />
              <PrivateRoute exact path="/ScoreNone" component={ScoreNone} />
              <PrivateRoute
                exact
                path="/TemplateNone"
                component={TemplateNone}
              />
              <PrivateRoute
                exact
                path="/MembershipNone"
                component={MembershipNone}
              />
              <PrivateRoute exact path="/RegNone" component={RegNone} />
              <PrivateRoute exact path="/PaymentNone" component={PaymentNone} />
              <PrivateRoute
                exact
                path="/newManagerProfileCreated"
                component={NewManagerProfileCreated}
              />
              <PrivateRoute
                exact
                path="/eventProfileEdit/:id"
                component={NewEventProfileEdit}
              />
              <PrivateRoute
                exact
                path="/eventProfileDuplicate/:id"
                component={NewEventProfileDuplicate}
              />
              <PrivateRoute
                exact
                path="/completeProfile"
                component={CompleteProfile}
              />

              <PrivateRoute
                exact
                path="/header"
                component={(propData) => <Header {...propData} />}
              />

              <PrivateRoute
                exact
                path="/completeProfileInfo"
                component={CompleteProfileInfo}
              />
              <PrivateRoute
                exact
                path="/completeProfileEdit"
                component={CompleteProfileEdit}
              />
              <PrivateRoute exact path="/pools/:id" component={PoolsScreen} />
              <PrivateRoute
                exact
                path="/poolsSummary"
                component={PoolsSummary}
              />
              <PrivateRoute exact path="/example" component={Example} />
              <PrivateRoute
                exact
                path="/templateSaved/:id"
                component={TemplateSaved}
              />
              <PrivateRoute
                exact
                path="/templateDivisionDuplicate/:id"
                component={TemplateDuplicate}
              />
              <PrivateRoute
                exact
                path="/templateEdit/:id"
                component={TemplateEdit}
              />
              <PrivateRoute exact path="/roadmap" component={Roadmap} />
              <PrivateRoute
                exact
                path="/scoresEdit/:id"
                component={ScoresEdit}
              />
              <PrivateRoute exact path="/bracket/:id" component={Bracket} />
              <PrivateRoute
                exact
                path="/scorepoolhomepage"
                component={ScorePoolMainPage}
              />
              <PrivateRoute
                exact
                path="/DashboardScores"
                component={DashboardScores}
              />
              <PrivateRoute
                exact
                path="/DashboardReports"
                component={Tournaments}
              />
              <PrivateRoute
                exact
                path="/Guidelines"
                component={UploadedFiles}
              />
              <PrivateRoute
                exact
                path="/bracketDivisionEdit/:id"
                component={BracketDivisionEdit}
              />
              <PrivateRoute exact path="/stripe" component={StripeKeyPage} />
            </Switch>
          </div>
        </div>
      )}
      {/* : (
        <Redirect to={"/"} />
      ) */}
    </Fragment>
  );
};

export default App2;
