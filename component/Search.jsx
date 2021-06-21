import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList,
    Text
} from 'react-native';
import {getFilmsFromApiWithSearchedText} from "../API/TMD"

export default class Search extends Component {


    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").then(data => console.log(data));
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film" />
                <Button title="Recherche" onPress={() => { }} />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30,
    },
    textinput: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 5,
    }
});