import React, { useState } from "react";
import { 
  View, Text, Image, TouchableOpacity, StyleSheet, FlatList 
} from "react-native";
import { useNavigation } from '@react-navigation/native';  // ✅ Import navigation

import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Predefined Random Sports Tweets (No Database)
const sportsTweets = [
  { id: "1", userName: "Cristiano Ronaldo", userImage: "https://via.placeholder.com/40", content: "Hard work pays off! ⚽🔥", likes: 120, comments: 45, shares: 10 },
  { id: "2", userName: "Serena Williams", userImage: "https://via.placeholder.com/40", content: "Never give up, keep pushing! 🎾💪", likes: 98, comments: 30, shares: 5 },
  { id: "3", userName: "Virat Kohli", userImage: "https://via.placeholder.com/40", content: "Passion & dedication make a champion! 🏏", likes: 75, comments: 25, shares: 8 },
  { id: "4", userName: "Usain Bolt", userImage: "https://via.placeholder.com/40", content: "Speed is nothing without discipline! 🏃‍♂️⚡", likes: 150, comments: 60, shares: 20 },
  { id: "5", userName: "Lionel Messi", userImage: "https://via.placeholder.com/40", content: "Dream big, work hard! 🌟⚽", likes: 130, comments: 55, shares: 12 }
];

const PostDetails = () => {
    const navigation = useNavigation(); // ✅ Fix: Initialize navigation

  const [tweets, setTweets] = useState(sportsTweets);

  // Function to Like a Tweet
  const likeTweet = (tweetId) => {
    setTweets(tweets.map(tweet => 
      tweet.id === tweetId ? { ...tweet, likes: tweet.likes + 1 } : tweet
    ));
  };

  return (
    <View style={styles.container}>
      {/* Athelink Fancy Image */}
      <Image source={require("../assets/athelink-fancy.png")} style={styles.logo} />

      {/* List of Tweets */}
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tweetContainer}>
            {/* User Info */}
            <View style={styles.userInfo}>
              <Image source={{ uri: item.userImage }} style={styles.userImage} />
              <Text style={styles.userName}>{item.userName}</Text>
            </View>

            {/* Tweet Content */}
            <Text style={styles.tweetText}>{item.content}</Text>

            {/* Interaction Bar */}
            <View style={styles.interactionBar}>
              <TouchableOpacity onPress={() => likeTweet(item.id)} style={styles.iconWrapper}>
                <FontAwesome name="heart" size={20} color="#FF4D46" />
                <Text style={styles.iconText}>{item.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome name="comment" size={20} color="#FFFFFF" />
                <Text style={styles.iconText}>{item.comments}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconWrapper}>
                <FontAwesome name="share" size={20} color="#FFFFFF" />
                <Text style={styles.iconText}>{item.shares}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={28} color="black" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('PostDetails')}>
            <Ionicons name="people" size={28} color="black" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Post')}>
            <Ionicons name="add-circle" size={28} color="black" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
            <Ionicons name="chatbubbles" size={28} color="#AE251F" />
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => navigation.navigate('Opportunities')}>
            <Ionicons name="briefcase" size={28} color="black" />
        </TouchableOpacity>
    </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  logo: { width: "100%", height: 50, resizeMode: "contain", marginVertical: 10 },

  tweetContainer: { padding: 15, borderBottomWidth: 1, borderColor: "#ddd" },
  userInfo: { flexDirection: "row", alignItems: "center", marginBottom: 5 },
  userImage: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userName: { fontSize: 16, fontWeight: "bold" },

  tweetText: { fontSize: 14, color: "black", marginBottom: 10 },

  interactionBar: { flexDirection: "row", justifyContent: "space-around", paddingVertical: 10, backgroundColor: "#AE251F", borderRadius: 20 },
  iconWrapper: { flexDirection: "row", alignItems: "center" },
  iconText: { color: "#FFF", fontSize: 14, marginLeft: 5 },

  bottomNavigation: { flexDirection: "row", justifyContent: "space-around", position: "absolute", bottom: 0, width: "100%", backgroundColor: "#fff", paddingVertical: 10, borderTopWidth: 1, borderColor: "lightgray" }
});

export default PostDetails;
