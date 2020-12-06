import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Navigation from './Components/Navigation';
import PageError from './Errors/PageError';
import Control from './Pages/Control';
import Home from './Pages/Home';
import { Pages } from './Tools/Pages';

const App: React.FC = () => {
  const [page, setPage] = useState<Pages>(Pages.HOME);
  const [display, setDisplay] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (page) {
      case Pages.HOME:
        setDisplay((
          <Home />
        ));
        break;
      case Pages.CONTROL:
        setDisplay((
          <Control />
        ));
        break;
      default:
        setDisplay((
          <PageError />
        ));
        break;
    }
  }, [page]);

  return (
    <View>
      <Navigation page={page} setPage={setPage} />
      {
        display ? display : <PageError />
      }
    </View>
  );
};

export default App;