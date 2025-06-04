import { Text, StyleSheet, StatusBar, View } from "react-native";
import HorizontalRule from "./HorizontalRule";

export default function PageHeading(heading: String) {
  return (
    <View style={styles.heading}>
      <Text style={styles.text}>{heading}</Text>
      <HorizontalRule />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  heading: {
    top: StatusBar.currentHeight,
    position: "relative",
    flex: 1,
    alignItems: "center",
  },
});
