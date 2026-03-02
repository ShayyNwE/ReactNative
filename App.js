import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import { GoalsProvider } from './src/context/GoalsContext';

export default function App() {
  return (
    <>
      <GoalsProvider>
        <HomeScreen />
        <StatusBar style="light" />
      </GoalsProvider>
    </>
  );
}