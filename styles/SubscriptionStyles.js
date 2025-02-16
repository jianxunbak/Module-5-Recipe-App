import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#1e1e1e',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    label: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 10,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
});

export default styles;

