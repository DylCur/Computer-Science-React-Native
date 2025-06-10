import { Button, StyleSheet, Text, Image, View } from "react-native";
import theme from "../../constants/colours";

function HomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.other}>
        {/* Other content */}
        <View style={header.header}>
          <Text style={header.text}>Welcome back, Janeth!</Text>
        </View>

        <View style={statistics.stats}>
          <View style={statistics.bubble}>
            <Text>Tiktok Usage</Text>
            <Text style={theme.good_text}>Down 30%</Text>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri: "https://cdn.shopify.com/s/files/1/0070/7032/files/tiktok2_5381bbf7-d33d-4c31-9cbd-6dad2ef3b2ce.png?v=1734596856",
              }}
            />
            <Text>Over the last 4 weeks</Text>
          </View>
          <View style={statistics.bubble}>
            <Text>Instagram Usage</Text>
            <Text style={theme.good_text}>Down 21%</Text>
            <Image
              style={{ width: 60, height: 60 }}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png",
              }}
            />
            <Text>Over the last 4 weeks</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

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
    marginTop: "10%",
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
    height: "100%",
  },
});

export default HomeScreen;
