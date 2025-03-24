import React from "react";
import { 
  View, Text, TextInput, Image, FlatList, TouchableOpacity, StyleSheet 
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Sample Random Messages
const messages = [
  { id: "1", name: "John Doe", message: "Hey! How are you?", time: "2h ago" },
  { id: "2", name: "Jane Smith", message: "Let's catch up soon!", time: "1d ago" },
  { id: "3", name: "David Brown", message: "Did you check the update?", time: "5m ago" },
  { id: "4", name: "Emily White", message: "Good morning!", time: "3h ago" },
  { id: "5", name: "Michael Johnson", message: "See you at the game!", time: "6d ago" },
];

const MessagesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/draft-icon.png")} style={styles.draftIcon} />
          <Image source={require("../assets/delete-icon.png")} style={styles.deleteIcon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search messages..." 
          placeholderTextColor="#999" 
          style={styles.searchBar} 
        />
      </View>

      {/* Messages List */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.messageItem}>
            <View style={styles.messageContent}>
              <Text style={styles.messageName}>{item.name}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
            <Text style={styles.messageTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/home-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("PostDetails")}>
          <Image source={require("../assets/community-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Post")}>
          <Image source={require("../assets/create-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/messaging-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Opportunities")}>
          <Image source={require("../assets/opportunities-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "DM Sans",
    fontWeight: "bold",
    color: "black",
  },
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    right: 10,
    alignItems: "center",
  },
  draftIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  deleteIcon: {
    width: 43,
    height: 72,
  },
  searchContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  searchBar: {
    fontSize: 16,
    color: "black",
  },
  messageItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  messageText: {
    fontSize: 14,
    color: "gray",
  },
  messageTime: {
    fontSize: 12,
    color: "gray",
    alignSelf: "center",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 15,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  navIcon: {
    width: 30,
    height: 30,
  },
});

export default MessagesScreen;
