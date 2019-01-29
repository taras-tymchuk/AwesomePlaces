import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const placeInput = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder='An awesome place'
                value={props.placeName}
                onChangeText={props.onChange}
            />
            <Button
                style={styles.placeButton}
                title='Add'
                onPress={props.onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    placeInput: {
        width: '70%',
    },
    placeButton: {
        width: '30%',
    },
});

export default placeInput;