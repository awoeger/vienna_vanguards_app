import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Appstyles from './App.scss';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';

export default function App() {
  return (
    <View style={Appstyles.container}>
      <Text style={Appstyles.text}>Hey hey </Text>
      <GameEngine entities={entities()} style={Appstyles.gameEngine}></GameEngine>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
