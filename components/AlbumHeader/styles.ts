import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 

    container: {
        alignItems: 'center'
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        margin: 10
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    creator: {
        color: 'lightgrey',
        margin: 10,
        fontSize: 20
},
    likes: {
        color: 'lightgrey',
        margin: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 60,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'lightgrey',
        fontWeight: 'bold',
        fontSize: 24
    }

})

export default styles;