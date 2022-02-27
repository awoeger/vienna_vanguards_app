import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Appstyles from './App.scss';

export default function App() {
  return (
    <View style={Appstyles.container}>
      <Text style={Appstyles.text}>Hello my sexy Quidcrush</Text>
      <StatusBar style="auto" />
    </View>
  );
}
