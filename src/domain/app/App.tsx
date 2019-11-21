import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Page from '../page/Page';
import DebugPage from '../debugPage/DebugPage';
import HarborsPage from '../harbors/HarborsPageContainer';
import IndividualHarborPage from '../individualHarbor/IndividualHarborPageContainer';
import CustomersPage from '../customers/CustomerPageContainer';

const App: React.FC = () => {
  return (
    <Router>
      <Page>
        <Switch>
          <Route exact path="/" component={HarborsPage} />
          <Route path="/harbors/:id" component={IndividualHarborPage} />
          <Route path="/harbors" component={HarborsPage} />
          <Route path="/customers" component={CustomersPage} />
<<<<<<< HEAD
          <Route path="/debug" component={DebugPage} />
=======
>>>>>>> resync customer list page with other development
        </Switch>
      </Page>
    </Router>
  );
};

export default App;
