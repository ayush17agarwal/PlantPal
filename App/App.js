import React from 'react';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from "./Components/Navigation/TabNav";


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <TabNav/>
    </NavigationContainer>     
  );
};

export default App;
