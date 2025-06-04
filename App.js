import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import BottomBar from "./components/BottomBar";
import PageHeading from "./components/PageHeading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./app/tabs/Settings";
import HomeScreen from "./app/tabs";
// export default function App() {
//   return (
//     <NavigationContainer>
//       <View style={styles.container}>
//         <BottomBar />
//         {PageHeading("Home")}
//         <StatusBar style="auto" />
//       </View>
//     </NavigationContainer>
//   );
// }

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    position: "absolute",
    bottom: "2%",
    height: "10%",
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: { width: "30%", color: "#000", fontFamily: "sans-serif" },
});

export default App;
