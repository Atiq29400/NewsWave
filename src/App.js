import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  const pageSize = 5;
  const apiKey = '9b83492d18094a4799a3c5c852044220';
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              category="general"
            />
          </Route>
          <Route exact path="/business">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pageSize={pageSize}
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="entertainment"
              pageSize={pageSize}
              category="entertainment"
            />
          </Route>
          <Route exact path="/general">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="general"
              pageSize={pageSize}
              category="general"
            />
          </Route>
          <Route exact path="/health">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pageSize={pageSize}
              category="health"
            />
          </Route>
          <Route exact path="/science">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pageSize={pageSize}
              category="science"
            />
          </Route>
          <Route exact path="/sports">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="sports"
              pageSize={pageSize}
              category="sports"
            />
          </Route>
          <Route exact path="/technology">
            <NavBar theme={theme} setTheme={setTheme} />
            <News
              theme={theme}
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pageSize={pageSize}
              category="technology"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
