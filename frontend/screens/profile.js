import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const sections = [
  { title: "About Me", icon: "user" },
  { title: "Certificates", icon: "certificate" },
  { title: "Education", icon: "graduation-cap" },
  { title: "Skills", icon: "tools" },
  { title: "Language", icon: "language" },
  { title: "Appreciation", icon: "award" },
];

const ProfileScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
      
      {/* ✅ Athelink Fancy Image */}
      <Image 
        source={require("../assets/athelink-fancy.png")} 
        style={{ width: "100%", height: 60, resizeMode: "contain", marginVertical: 10 }} 
      />

      {/* Profile Image Section */}
      <View style={{ height: "25%", alignItems: "center", justifyContent: "center" }}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image
          style={{ width: 150, height: 150, borderRadius: 75 }}
        />
      </View>
     
      {/* Info Sections */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
        {sections.map((section, index) => (
          <TouchableOpacity key={index} style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "white",
            padding: 15,
            marginVertical: 10,
            borderRadius: 10,
            elevation: 3,
          }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5 name={section.icon} size={24} color="#333" style={{ marginRight: 15 }} />
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>{section.title}</Text>
            </View>
            <MaterialIcons name="add" size={24} color="#333" />
          </TouchableOpacity>
        ))}
      </View>
      
    </ScrollView>
  );
};

export default ProfileScreen;
