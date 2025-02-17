import { CameraView, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CameraStyle from "../styles/CameraStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as MediaLibrary from "expo-media-library";

export default CameraScreen = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

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
  return (
    <View style={CameraStyle.container}>
      <CameraView
        style={CameraStyle.camera}
        facing={facing}
        ref={cameraRef}
        photo={true}
      ></CameraView>
      <View style={CameraStyle.cameraContainer}>
        <TouchableOpacity onPress={toggleCameraFacing}>
          <MaterialIcons name="flip-camera-android" size={50} color={"white"} />
          {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto}>
          <Ionicons name="radio-button-on" size={80} color={"white"} />
          {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleCameraFacing}>
          <MaterialIcons name="flip-camera-android" size={50} color={"white"} />
          {/* <Text style={CameraStyle.text}>Flip Camera</Text> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};
