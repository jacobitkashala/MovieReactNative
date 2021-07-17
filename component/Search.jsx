import React, { Component } from 'react';


import { getFilmsFromApiWithSearchedText } from "../API/TMD";
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList,
    Text,
    ActivityIndicator
} from 'react-native';
//import dataFilms from '../data/dataFilms';
import FilmItem from './FilmItem'

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            searchedText: "",
            isLoading: false,
        }
    }

    _loadFilms() {
        let searchedText = this.state.searchedText;
        if (searchedText.length > 0) {
            // Seulement si le texte recherché n'est pas vide
            this.setState({ isLoading: true })
            getFilmsFromApiWithSearchedText(searchedText)
                .then(data => {
                    console.log(data);
                    this.setState({
                        films: data.results,
                        isLoading: false
                    })
                })

        }
    }

    _searchTextInputChanged(text) {

        this.setState({ searchedText: text })
    }

    _displayLoading() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='x-large' />
                </View>
            )
        }
    }

    render() {
        const films = this.state.films;
        console.log(this.state.isLoading)
        return (
            <View style={styles.main_container}>
                <TextInput
                    style={styles.textinput}
                    placeholder="Titre du film"
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    onSubmitEditing={() => this._loadFilms()}
                />
                <Button title="Recherche"
                    onPress={() => this._loadFilms()} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => (item.id.toString())}
                    renderItem={(item) => (<FilmItem film={item} />)}
                />
                {this._displayLoading()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 30,
    }
    , textinput: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 5,
        paddingTop: 20,
        fontSize: "1.5rem",
        borderRadius: 15,
        outlineColor: "initial",
        outlineStyle: "none",
        outlineWidth: "initial",

    },
    btnrecherche: {
        marginLeft: 5,
        marginRight: 5,
        with: 50,
        height: 50
    },
    loading_container: {
        // backgroundColor: "#fff",
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        // alignItems: 'center',
        // justifyContent: 'center'
    }
});