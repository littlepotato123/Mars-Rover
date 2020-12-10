import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Config from 'react-native-config';
import Navigation from './Components/Navigation';
import PageError from './Errors/PageError';
import Control from './Pages/Control/Control';
import Data from './Pages/Data/Data';
import Docs from './Pages/Docs/Docs';
import { Pages } from './Tools';

const App: React.FC = () => {
  const [page, setPage] = useState<Pages>(Pages.DATA);
  const [display, setDisplay] = useState<JSX.Element | null>(null);

  useEffect(() => {
    console.log(Config);
    switch(page) {
      case Pages.DATA:
        setDisplay(<Data />)
        break;
      case Pages.CONTROL:
        setDisplay(<Control />);
        break;
      case Pages.DOCS:
        setDisplay(<Docs />);
        break;
      default:
        setDisplay(null);
        break;
    }
  }, [page])

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