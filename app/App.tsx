import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Errors from './Components/Errors';
import Navigation from './Components/Navigation';
import Control from './Pages/Control';
import Demo from './Pages/Demo';
import Home from './Pages/Home';
import { Pages } from './Tools';

const App = () => {
  const [page, setPage] = useState<Pages>(Pages.Home);
  const [display, setDisplay] = useState<JSX.Element | null>(null)

  useEffect(() => {
    switch(page) {
      case Pages.Home:
        setDisplay(<Home />);
        break;
      case Pages.Control:
        setDisplay(<Control />);
        break;
      case Pages.Design:
        setDisplay(<Demo />);
        break;
      default: 
        setDisplay(<Errors />);
        break;
    }
  }, [page])
  
  return (
    <View>
      <Navigation pages={page} setPages={setPage} />
      {display}
    </View>
  );
}

export default App;