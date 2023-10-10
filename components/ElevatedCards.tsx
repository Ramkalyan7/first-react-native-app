import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={[styles.card, styles.elevated]}>
            <Text>One</Text>
          </View>
          <View style={[styles.card, styles.elevated]}>
            <Text>Two</Text>
          </View>
          <View style={[styles.card, styles.elevated]}>
            <Text>Three</Text>
          </View>
          <View style={[styles.card, styles.elevated]}>
            <Text>Four</Text>
          </View>
          <View style={[styles.card, styles.elevated]}>
            <Text>Five</Text>
          </View>
          <View style={[styles.card, styles.elevated]}>
            <Text>Six</Text>
          </View>
        </View>
      </ScrollView>
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
  elevated: {
    backgroundColor: "gray",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});
