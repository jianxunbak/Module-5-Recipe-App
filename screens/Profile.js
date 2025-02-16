// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import styles from '../Styles/ProfileStyles';

// const Profile = () => {
//     const user = {
//         username: 'Faizal | SE8',
//         id: 'joyful_avocado_99353',
//         email: 'faizal@example.com',
//         memberSince: '19 Aug 2024',
//         about: 'Software Engineer | Tech Enthusiast',
//         profilePic: 'https://via.placeholder.com/100', // Replace with actual image URL
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.header}>
//                 <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
//                 <Text style={styles.username}>{user.username}</Text>
//                 <Text style={styles.userId}>{user.id}</Text>
//             </View>
//             <View style={styles.body}>
//                 <Text style={styles.sectionTitle}>Email</Text>
//                 <Text style={styles.sectionContent}>{user.email}</Text>

//                 <Text style={styles.sectionTitle}>Member Since</Text>
//                 <Text style={styles.sectionContent}>{user.memberSince}</Text>

//                 <Text style={styles.sectionTitle}>About Me</Text>
//                 <Text style={styles.sectionContent}>{user.about}</Text>
//             </View>
//         </View>
//     );
// };

// export default Profile;

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProfileStyles';

const Profile = ({ route = {} }) => {
    const defaultUser = {
        username: 'Faizal | SE8',
        id: 'joyful_avocado_99353',
        email: 'faizal@example.com',
        memberSince: '19 Aug 2024',
        about: 'Software Engineer | Tech Enthusiast',
        profilePic: 'https://via.placeholder.com/100',
    };

    const user = route?.params?.userData || defaultUser;
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: user.profilePic }} style={styles.profileImage} />
                <Text style={styles.username}>{user.username}</Text>
                <Text style={styles.userId}>{user.id}</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.sectionTitle}>Email</Text>
                <Text style={styles.sectionContent}>{user.email}</Text>

                <Text style={styles.sectionTitle}>Member Since</Text>
                <Text style={styles.sectionContent}>{user.memberSince}</Text>

                <Text style={styles.sectionTitle}>About Me</Text>
                <Text style={styles.sectionContent}>{user.about}</Text>
            </View>
        </View>
    );
};

export default Profile;

