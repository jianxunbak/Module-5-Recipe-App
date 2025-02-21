import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useIsLoadingAndEditing } from "../Context/IsLoadingAndEditingContext";
import { useUser } from "../Context/UserContext";
import EditProfileStyles from "../styles/EditProfileStyles";
import { useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import { ActivityIndicator } from "react-native-paper";

export default EditProfile = ({ route }) => {
  const navigate = useNavigation();
  const { isLoading, setIsLoading } = useIsLoadingAndEditing();
  const { user, setUser, editUser, setEditUser } = useUser();
  const { photo } = route.params || {};
  useEffect(() => {
    setEditUser(user);
  }, [user]);

  useEffect(() => {
    if (photo) {
      setEditUser((prevUserProfile) => ({
        ...prevUserProfile,
        profilePic: photo,
      }));
    }
  }, [photo]);

  const handleCancel = () => {
    setEditUser({
      username: "",
      id: "",
      email: "",
      memberSince: "",
      about: "",
      profilePic: "",
      password: "",
    });
    navigate.navigate("Profile");
  };

  const handleInput = (name, value) => {
    setEditUser((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  const handleEditProfile = () => {
    setIsLoading(true);
    setUser((prevUserProfile) => ({
      ...prevUserProfile,
      ...editUser,
    }));
    setIsLoading(false);
    navigate.navigate("Profile");
  };

  return (
    <SafeAreaView style={EditProfileStyles.SafeAreaView}>
      <View style={EditProfileStyles.container}>
        <Text style={EditProfileStyles.MainTitle}>Edit Profile</Text>
        {isLoading ? (
          <View>
            <Text>Editing Recipe...</Text>
            <ActivityIndicator animating={true} color="#6200ee" />
          </View>
        ) : (
          <View style={EditProfileStyles.body}>
            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>Profile Pic</Text>
              <View style={EditProfileStyles.inputSideButton}>
                <TextInput
                  style={EditProfileStyles.textInputWithButton}
                  value={editUser.profilePic}
                  onChangeText={(profilePic) => {
                    handleInput("profilePic", profilePic);
                  }}
                />
                <TouchableOpacity
                  style={EditProfileStyles.buttonAtInput}
                  onPress={() => {
                    navigate.navigate("Recipes", {
                      screen: "Camera",
                      params: { returnTo: "editProfile" },
                    });
                  }}
                >
                  <Text style={EditProfileStyles.buttonText}>
                    <Feather name="camera" size={20} color={"white"} />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>Username</Text>
              <TextInput
                style={EditProfileStyles.textInput}
                value={editUser.username}
                onChangeText={(username) => {
                  handleInput("username", username);
                }}
              />
            </View>

            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>Profile ID</Text>
              <TextInput
                style={EditProfileStyles.textInput}
                value={editUser.id}
                onChangeText={(id) => {
                  handleInput("id", id);
                }}
              />
            </View>
            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>Email</Text>
              <TextInput
                style={EditProfileStyles.textInput}
                value={editUser.email}
                onChangeText={(email) => {
                  handleInput("email", email);
                }}
              />
            </View>
            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>Member Since</Text>
              <TextInput
                style={EditProfileStyles.textInput}
                value={editUser.memberSince}
                onChangeText={(memberSince) => {
                  handleInput("memberSince", memberSince);
                }}
              />
            </View>
            <View style={EditProfileStyles.subContainer}>
              <Text style={EditProfileStyles.sectionTitle}>About Me</Text>
              <TextInput
                style={EditProfileStyles.textInput}
                value={editUser.about}
                onChangeText={(about) => {
                  handleInput("about", about);
                }}
              />
            </View>
            <View style={EditProfileStyles.buttons}>
              <TouchableOpacity
                style={EditProfileStyles.button}
                onPress={() => {
                  handleEditProfile();
                }}
              >
                <Text style={EditProfileStyles.buttonText}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={EditProfileStyles.button}
                onPress={() => {
                  handleCancel();
                }}
              >
                <Text style={EditProfileStyles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
