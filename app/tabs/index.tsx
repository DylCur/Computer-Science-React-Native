import { Button, StyleSheet, Text, Image } from "react-native";
import theme from "../../constants/colours";
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import ChartScreen from "./charts";
import SettingsScreen from "./Settings";
import HomeScreen from "./home";

const renderScene = SceneMap({
  first: HomeScreen,
  second: ChartScreen,
  third: SettingsScreen,
});

const routes = [
  { key: "first", title: "Home" },
  { key: "second", title: "Graphs" },
  { key: "third", title: "Charts" },
];

const TabManager = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      tabBarPosition="bottom"
      style={{ marginTop: "5%", marginBottom: "3%" }}
    />
  );
};

const statistics = StyleSheet.create({
  stats: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "#CAD6BC",
    borderRadius: 40,
    minHeight: "30%",
    minWidth: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
});

const header = StyleSheet.create({
  header: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    maxHeight: "7%",
    margin: 0,
  },
  text: {
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  bar: {
    width: "100%",
    // position: "relative",
    marginTop: 0,
    marginBottom: "2%",
    // height: "5%",
    padding: 0,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  page: {
    height: "100%",
  },

  other: {
    height: "85%",
  },
});

export default TabManager;
