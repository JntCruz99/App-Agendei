import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerGrid: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop:50
    },
    containerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        paddingBottom: 25
    },
    text: {
        marginTop: 5,
        color: '#717F7F',
        textAlign: 'center'
    },
    img: {
        height: 62,
        width: 62,
    },
    imgContainer: {
        backgroundColor: '#E1E5E4',
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
});