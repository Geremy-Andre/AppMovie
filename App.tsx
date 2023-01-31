import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';


const App=()=> {
  return (
      <SafeAreaProvider style={{paddingTop:30}}>
        <NavigationContainer>
          <Navigation/>
        </NavigationContainer>
      </SafeAreaProvider>
      
    
    
    
  );
}


export default App;