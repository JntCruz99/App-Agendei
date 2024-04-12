import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        flex: 1,
        backgroundColor: '#E1E5E4',
        paddingVertical: 13,
        width: '100%',
        borderRadius: 20,
        paddingLeft: 13,
        fontSize: 15,
        borderColor: 'transparent',
        borderWidth: 0,
        textDecorationLine:'none'
    },
    inputContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderColor: '#ECECEC',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: '#E1E5E4',
        marginTop: 16,
    },
    icon: {
        height: 25, 
        width: 25, 
        marginRight: 17,
        alignItems: 'center'
    }


});