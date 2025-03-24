import React from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

// Sample Opportunities
const opportunities = [
  {
    id: "1",
    teamName: "Elite Football Academy",
    inviteMessage: "U19 Trials - Looking for young talented players. Join us!",
  },
  {
    id: "2",
    teamName: "Pro Strikers FC",
    inviteMessage: "Men’s Team Trials - Open selection for all positions!",
  },
];

const OpportunitiesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* Top Section (White Background) */}
      <View style={styles.topSection}>
        <Image source={require("../assets/athelink-fancy.png")} style={styles.logo} />
        <Text style={styles.title}>Opportunities around</Text>
      </View>

      {/* Opportunities List */}
      {opportunities.length > 0 ? (
        <FlatList
          data={opportunities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.opportunityCard}>
              <Text style={styles.teamName}>{item.teamName}</Text>
              <Text style={styles.inviteMessage}>{item.inviteMessage}</Text>
            </View>
          )}
        />
      ) : (
        <View style={styles.noOpportunitiesContainer}>
          <Text style={styles.noOpportunitiesText}>No opportunities around</Text>
          <Text style={styles.motivationText}>
            No opportunities yet, keep grinding. The opportunities will be reserved for the future.
          </Text>
        </View>
      )}

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require("../assets/home-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PostDetails')}>
          <Image source={require("../assets/community-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
          <Image source={require("../assets/create-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/messaging-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Opportunities')}>
          <Image source={require("../assets/opportunities-icon.png")} style={styles.navIcon} />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AE251F", // Main Background Color
    alignItems: "center",
    paddingBottom: 70, // Space for bottom navigation
  },
  topSection: {
    width: "100%",
    backgroundColor: "white", // Top part in white
    alignItems: "center",
    paddingBottom: 15,
    paddingTop: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  logo: {
    width: "100%",
    height: 60,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "DM Sans",
    fontWeight: "bold",
    color: "#AE251F",
    width: 212,
    height: 26,
    textAlign: "center",
  },
  opportunityCard: {
    width: 335,
    height: 203,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#AE251F",
    marginBottom: 5,
  },
  inviteMessage: {
    fontSize: 14,
    color: "black",
  },
  noOpportunitiesContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  noOpportunitiesText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  motivationText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 30,
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

export default OpportunitiesScreen;
