import {
  Image,
  Linking,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function FancyCard() {
  function alert(name: string) {
    Linking.openURL("https://en.wikipedia.org/wiki/" + name);
  }

  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <TouchableOpacity onPress={() => alert("Taj Mahal")}>
        <View style={[styles.card, styles.cardFancy]}>
          <Image
            source={require("../assets/taj-mahal.jpg")}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Taj Mahal</Text>
            <Text style={styles.cardSubtitle}>Agra, India</Text>
            {/* description */}
            <Text style={styles.cardDescription}>
              The Taj Mahal is an ivory-white marble mausoleum on the southern
              bank of the river Yamuna in the Indian city of Agra.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    alignSelf: "center",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    fontWeight: "bold",
    margin: 8,
    width: 300,
    height: 300,
    color: "white",
  },
  cardFancy: {
    backgroundColor: "white",
    overflow: "hidden",
  },
  cardImage: {
    width: 300,
    height: 300,
    borderRadius: 4,
  },
  cardBody: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 300,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "white",
  },
  cardDescription: {
    fontSize: 14,
    color: "white",
    marginTop: 10,
  },
});
