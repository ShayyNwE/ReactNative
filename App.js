import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/HomeScreen';
import { GoalsProvider } from './src/context/GoalsContext';

export default function App() {
  return (
    <>
      <GoalsProvider>
        <SafeAreaProvider>
          <HomeScreen />
          <StatusBar style="light" />
        </SafeAreaProvider>
      </GoalsProvider>
    </>
  );
}