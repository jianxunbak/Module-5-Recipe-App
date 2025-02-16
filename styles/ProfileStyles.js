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
