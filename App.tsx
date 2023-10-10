import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import FlatCards from "./components/FlatCards";
import ElevatedCards from "./components/ElevatedCards";
import FancyCard from "./components/FancyCard";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
