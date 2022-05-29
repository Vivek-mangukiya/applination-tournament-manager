import "./App.css";
// import Header from './components/header/Header';
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import React, { useContext, useEffect } from "react";
import App2 from "./App2";
import StripeState from "./context/stripe/StripeState";
import TournamentState from "./context/tournaments/tournamentsState";

function App() {
  // const authContext = useContext(AuthContext);
  // const {sidebarMax} = authContext;
  // jwt.verify(localStorage.getItem('token'), 'secret', (err, decode) => {
  //   if (err) {
  //     console.log(err);
  //     // setErrValue(true);
  //     //<Redirect to={{ pathname: '/', state: { from: props.location } }} />
  //   } else {
  //     //setErrValue(false);
  //     //<Component {...props} />
  //   }
  // });
  return (
    <AuthState>
      <EventState>
        <PoolsState>
          <TemplateListState>
            <TemplateDivisionState>
              <TemplatePoolsState>
                <TemplatePointsState>
                  <PlayerProfileState>
                    <ActiveHistoryState>
                      <NewManagerProfileState>
                        <RegState>
                          <DashboardState>
                            <ScoresState>
                              <TournamentState>
                                <BracketState>
                                  <StripeState>
                                    <Router>
                                      <App2 />
                                    </Router>
                                  </StripeState>
                                </BracketState>
                              </TournamentState>
                            </ScoresState>
                          </DashboardState>
                        </RegState>
                      </NewManagerProfileState>
                    </ActiveHistoryState>
                  </PlayerProfileState>
                </TemplatePointsState>
              </TemplatePoolsState>
            </TemplateDivisionState>
          </TemplateListState>
        </PoolsState>
      </EventState>
    </AuthState>
  );
}

export default App;
