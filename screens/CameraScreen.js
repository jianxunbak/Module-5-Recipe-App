import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect, useRef, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CameraStyle from "../styles/CameraStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

export default CameraScreen = ({ route }) => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [selectedImage, setSelectedImage] = useState(null);
  const cameraRef = useRef(null);
  const navigate = useNavigation();
  const { navigation } = useNavigation();

  const { returnTo } = route.params || {};

  if (!permission) {
    return;
  }
  if (!permission.granted) {
    return (
      <View style={CameraStyle.container}>
        <Text style={CameraStyle.message}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={CameraStyle.button}
        >
          <Text style={CameraStyle.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        alert("Photo saved to library");
      } catch (error) {
        console.error("Failed to take photo:", error);
        alert("failed to take photo");
      }
    }
  };

  const imagePicker = async () => {
    try {
      const results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images", "videos"],
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!results.canceled) {
        const selectedImageUri = results.assets[0].uri;
        console.log("print in camera screen");
        console.log(selectedImageUri);
        setSelectedImage(results.assets[0].uri);
        if (returnTo === "addRecipe") {
          navigate.navigate("Add Recipes", { photo: selectedImageUri });
        } else if (returnTo === "editRecipe") {
          navigate.navigate("Edit Recipes", {
            photo: selectedImageUri,
          });
        } else {
          console.log("nowhere to return to");
        }
      }
    } catch (error) {
      alert("failed to pick image");
      console.log("Error picking image: ", error);
    }
  };
  return (
    <SafeAreaView styles={CameraStyle.SafeAreaView}>
      <View style={CameraStyle.container}>
        <CameraView
          style={CameraStyle.camera}
          facing={facing}
          ref={cameraRef}
          photo={true}
        >
          <TouchableOpacity
            style={CameraStyle.backArrow}
            onPress={() => navigate.goBack()}
          >
            <Ionicons name="return-down-back" size={25} color={"black"} />
          </TouchableOpacity>
        </CameraView>
        <View style={CameraStyle.cameraContainer}>
          <TouchableOpacity
            onPress={() => {
              imagePicker();
            }}
          >
            <Ionicons name="albums" size={50} color={"white"} />
            {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto}>
            <Ionicons name="radio-button-on" size={80} color={"white"} />
            {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleCameraFacing}>
            <MaterialIcons
              name="flip-camera-android"
              size={50}
              color={"white"}
            />
            {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
