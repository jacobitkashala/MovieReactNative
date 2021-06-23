import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList,
    Text,
    ActivityIndicator
} from 'react-native';
import {
    getFilmsFromApiWithSearchedText,

} from "../API/TMD";
import FilmItem from './FilmItem';
// import data from '../data/dataFilms';


export default class Search extends Component {

    constructor(props) {
        super(props);
        this.page = 0;
        this.totalPages = 0;
        this.state = {
            films: [],
            searchedText: "",
            isLoading: false
        }
    }

    _loadFilms() {
        if (this.state.searchedText.length > 0) {
            let isDispo = this.state.films.length === 0 ? false : true;
            this.setState({ isLoading: isDispo });
            // this.state.isLoading = isDispo;
            getFilmsFromApiWithSearchedText(this.state.searchedText, this.page + 1).
                then(data => {
                    this.page = data.page,
                        this.totalPages = data.total_pages,
                        this.setState({
                            films: [...this.state.films, ...data.results],
                            isLoading: true
                        })
                })

        }

    }
    _searchTextInputChanged(text) {
        this.setState({ searchedText: text })
        //this._loadFilms();
    }
    _searchFilms() {
        // Ici on va remettre à zéro les films de notre state
        this.page = 0
        this.totalPages = 0
        this.setState({
            films: []
        }, () => {
            console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
            this._loadFilms()
        })

    }

    _displayLoading() {
        if (!this.state.isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            )
        } else return null
    }
    render() {
        const films = this.state.films;
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film"
                    onChangeText={(text) => { this._searchTextInputChanged(text) }}
                    onSubmitEditing={() => { this._searchFilms() }}
                />
                <Button title="Recherche" onPress={() => { this._searchFilms() }} />
                <FlatList
                    data={films}
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (this.page > this.totalPages) {
                            this._loadFilms();
                        }
                    }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => <FilmItem film={item} />}
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
        borderWidth: 1,
        borderColor: '#000',
        paddingLeft: 5,
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});