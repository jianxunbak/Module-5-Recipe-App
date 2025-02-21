import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import profileStyles from "../styles/ProfileStyles";
import { useCallback } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { useUser } from "../Context/UserContext";

const ProfileScreen = () => {
  const { user, setUser } = useUser();
  const { navigate } = useNavigation();

  return (
    <SafeAreaView style={profileStyles.SafeAreaView}>
      <View style={profileStyles.container}>
        <Text style={profileStyles.MainTitle}>Profile</Text>
        <View style={profileStyles.body}>
          <View style={profileStyles.subContainer}>
            <Image
              source={{ uri: user.profilePic }}
              style={profileStyles.profileImage}
            />
          </View>

          <View style={profileStyles.subContainer}>
            <Text style={profileStyles.sectionTitle}>Username</Text>
            <Text style={profileStyles.textInput}>{user.username}</Text>
          </View>

          <View style={profileStyles.subContainer}>
            <Text style={profileStyles.sectionTitle}>Profile ID</Text>
            <Text style={profileStyles.textInput}>{user.id}</Text>
          </View>
          <View style={profileStyles.subContainer}>
            <Text style={profileStyles.sectionTitle}>Email</Text>
            <Text style={profileStyles.textInput}>{user.email}</Text>
          </View>
          <View style={profileStyles.subContainer}>
            <Text style={profileStyles.sectionTitle}>Member Since</Text>
            <Text style={profileStyles.textInput}>{user.memberSince}</Text>
          </View>
          <View style={profileStyles.subContainer}>
            <Text style={profileStyles.sectionTitle}>About Me</Text>
            <Text style={profileStyles.textInput}>{user.about}</Text>
          </View>
          <TouchableOpacity
            style={profileStyles.button}
            onPress={() => {
              navigate("editProfile");
            }}
          >
            <Text style={profileStyles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
