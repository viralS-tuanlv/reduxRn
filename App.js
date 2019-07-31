import React from 'react';
import {StyleSheet, View} from 'react-native';
import Main from './src/Main';
import {Provider} from 'react-redux';
import stores from './src/store';

export default class App extends React.Component {
    render() {
        return (
            <Provider store = {stores}>
                <View style={styles.container}>
                    <Main/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
