import React, {ReactNode} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = (): ReactNode => {
  return (
    <SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export default App;
