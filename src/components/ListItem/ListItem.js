import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listItem = (props) => {
    return (
        <View style={styles.listItem} onPress={() => props.onItemPressed}>
            <Text>{props.placeName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
    }
});

export default listItem;