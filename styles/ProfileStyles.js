<<<<<<< HEAD
import { StyleSheet } from "react-native";

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  SafeAreaView: {
    flex: 1,
    marginTop: 115,
  },
  MainTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  userId: {
    color: "#aaa",
    fontSize: 14,
  },
  body: {
    width: "100%",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  sectionContent: {
    color: "#ccc",
    fontSize: 16,
    marginBottom: 10,
  },
  subContainer: {
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 80,
    backgroundColor: "#694f8f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    alignItems: "center",
    fontSize: 20,
  },
});

export default profileStyles;
=======
// import { StyleSheet, Dimensions } from "react-native";

// const windowWidth = Dimensions.get("window").width;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#1e1e1e',
//         padding: 20,
//         alignItems: 'center',
//     },
//     header: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     profileImage: {
//         width: 100,
//         height: 100,
//         borderRadius: 50,
//         borderWidth: 2,
//         borderColor: '#fff',
//     },
//     username: {
//         color: '#fff',
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginTop: 10,
//     },
//     userId: {
//         color: '#aaa',
//         fontSize: 14,
//     },
//     body: {
//         width: '100%',
//     },
//     sectionTitle: {
//         color: '#fff',
//         fontSize: 18,
//         fontWeight: 'bold',
//         marginTop: 10,
//     },
//     sectionContent: {
//         color: '#ccc',
//         fontSize: 16,
//         marginBottom: 10,
//     },
// });


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 20,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    username: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userId: {
        color: '#aaa',
        fontSize: 14,
    },
    body: {
        width: '100%',
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    sectionContent: {
        color: '#ccc',
        fontSize: 16,
        marginBottom: 10,
    },
});

export default styles;
>>>>>>> a0f5b63 (first commit)
