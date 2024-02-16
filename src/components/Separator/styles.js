import {StyleSheet} from 'react-native';


import {colors} from '../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGray,
        marginVertical: 8
    },
    text: {
        fontWeight: '500',
        color: colors.blue
    }
})