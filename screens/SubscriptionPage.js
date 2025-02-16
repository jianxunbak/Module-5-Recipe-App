import { styles } from "../styles/styles";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/SubscriptionStyles';

const SubscriptionPage = ({ navigation }) => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        memberSince: new Date().toDateString(),
        about: '',
        profilePic: null,
    });

    const pickImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            base64: false,
        });

        if (!result.canceled) {
            setUser({ ...user, profilePic: result.assets[0].uri });
        }
    };

    const handleSubmit = () => {
        console.log('User Subscribed:', user);
        navigation.navigate('Profile', { userData: user });
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Subscribe</Text>
            <TextInput
                style={styles.input}
                placeholder="Username/ID"
                value={user.username}
                onChangeText={(text) => setUser({ ...user, username: text })}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={user.email}
                onChangeText={(text) => setUser({ ...user, email: text })}
            />
            <Text style={styles.label}>Member Since: {user.memberSince}</Text>
            <TextInput
                style={styles.input}
                placeholder="About You"
                value={user.about}
                onChangeText={(text) => setUser({ ...user, about: text })}
            />
            <Button title="Take a Photo" onPress={pickImage} />
            {user.profilePic && <Image source={{ uri: user.profilePic }} style={styles.profileImage} />}
            <Button title="Submit" onPress={handleSubmit} />
        </ScrollView>
    );
};

export default SubscriptionPage;
