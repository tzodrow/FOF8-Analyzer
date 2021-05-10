import './App.css';
import { Stack, StackItem } from '@fluentui/react';
import { LeftNav } from './LeftNav';
import { Route, Switch } from 'react-router';
import { UploadPage } from './Pages/UploadPage';
import DraftPage from './Pages/DraftPage';
import { DraftBoardPage } from './Pages/DraftBoardPage';

function App() {
  
  return (
    <Stack horizontal>
      <StackItem grow={'inherit'} disableShrink align={'start'}>
        <LeftNav />
      </StackItem>
      <StackItem grow>
        <Switch>
          <Route path={"/upload"} render={() => <UploadPage />}>
          </Route>
          <Route path={"/draft"} render={() => (<DraftPage />)}>
          </Route>
          <Route path={"/draftBoard"} render={() => <DraftBoardPage />}>
          </Route>
          <Route path={"/"}>
            <div>Welcome!</div>
          </Route>
        </Switch>
      </StackItem>
    </Stack>
  );
}

export default App;
