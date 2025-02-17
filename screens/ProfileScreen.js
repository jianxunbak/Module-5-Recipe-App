import React from "react";
import { View, Text } from "react-native";

import { Button } from "react-native-paper";
import { styles } from "../styles/styles";

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProfileStyles';


const ProfileScreen = () => {
  const defaultUser = {
    username: 'Faizal | SE8',
    id: 'joyful_avocado_99353',
    email: 'faizal@example.com',
    memberSince: '19 Aug 2024',
    about: 'Software Engineer | Tech Enthusiast',
    profilePic: 'https://via.placeholder.com/100',
  };
  const [user, setUser] = useState({
    username: defaultUser.username,
    id: defaultUser.id,
    email: defaultUser.email,
    memberSince: defaultUser.memberSince,
    about: defaultUser.about,
    profilePic: defaultUser.profilePic,
  });
};

const handleInputChange = (field, value) => {
  setUser((prevUser) => ({
    ...prevUser,
    [field]: value,
  }));
};

const user = route?.params?.userData || defaultUser;

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
      <TextInput
        style={styles.usernameInput}
        value={user.username}
        onChangeText={(text) => handleInputChange("username", text)}
        placeholder="Enter your username"
      />
      <TextInput
        style={styles.userIdInput}
        value={user.id}
        onChangeText={(text) => handleInputChange("id", text)}
        placeholder="Enter your user ID"
      />
    </View>
    <View style={styles.body}>
      <Text style={styles.sectionTitle}>Email</Text>
      <TextInput
        style={styles.textInput}
        value={user.email}
        onChangeText={(text) => handleInputChange("email", text)}
        placeholder="Enter your email"
      />

      <Text style={styles.sectionTitle}>Member Since</Text>
      <TextInput
        style={styles.textInput}
        value={user.memberSince}
        onChangeText={(text) => handleInputChange("memberSince", text)}
        placeholder="Enter membership date"
      />

      <Text style={styles.sectionTitle}>About Me</Text>
      <TextInput
        style={styles.textInput}
        value={user.about}
        onChangeText={(text) => handleInputChange("about", text)}
        placeholder="Tell us about yourself"
      />

      <Text style={styles.sectionTitle}>Profile Picture URL</Text>
      <TextInput
        style={styles.textInput}
        value={user.profilePic}
        onChangeText={(text) => handleInputChange("profilePic", text)}
        placeholder="Enter profile picture URL"
      />
    </View>

    {/* Optional Save Button */}
    <Button
      title="Save Changes"
      onPress={() => {
        // You can handle saving logic here
        console.log('User data saved:', user);
      }}
    />
  </View>
);


export default ProfileScreen;


