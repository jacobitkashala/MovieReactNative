//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import { Text, View, Button } from 'react-native';
import Home from './components/Search';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Detail from './components/DetailFilm';
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }
// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
// }

const Stack = createStackNavigator();
// function app2() {

//   return (
//     // <Search />
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Accueil" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }
export default function app() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Accueil" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

