import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Pink</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Purple</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Deep</Text>
        </View>
      </View>
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
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  card: {
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    fontWeight: "bold",
    margin: 8,
    width: 100,
    height: 100,
    color: "white",
  },
  cardOne: {
    backgroundColor: "#EF5353",
  },
  cardTwo: {
    backgroundColor: "#EC407A",
  },
  cardThree: {
    backgroundColor: "#AB47BC",
  },
  cardFour: {
    backgroundColor: "#7E57C2",
  },
});
