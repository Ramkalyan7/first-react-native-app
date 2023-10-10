import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      recordID: "1",
      givenName: "John",
      familyName: "Doe",
      phoneNumbers: [
        {
          label: "mobile",
          number: "555-555-5555",
        },
      ],
    },
    {
      recordID: "2",
      givenName: "Jane",
      familyName: "Doe",
      phoneNumbers: [
        {
          label: "mobile",
          number: "555-555-5556",
        },
      ],
    },
    {
      recordID: "3",
      givenName: "Bob",
      familyName: "Smith",
      phoneNumbers: [
        {
          label: "mobile",
          number: "555-555-5557",
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {contacts.map((contact) => (
          <View style={styles.contactContainer} key={contact.recordID}>
            <Image
              style={styles.avatarImage}
              source={require("../assets/avatar.jpg")}
            />
            <View>
              <Text style={styles.contactName}>
                {contact.givenName} {contact.familyName}
              </Text>
              {contact.phoneNumbers.map((phoneNumber) => (
                <Text style={styles.contactNum} key={phoneNumber.number}>
                  {phoneNumber.number}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  container: {},
  scrollView: {},
  contactContainer: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    borderRadius: 4,
  },
  avatarImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  contactName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contactNum: {
    fontSize: 16,
  },
});
