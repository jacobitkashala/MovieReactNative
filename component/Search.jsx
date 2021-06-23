import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Button,
    TextInput,
    FlatList,
    Text
} from 'react-native';
import { getFilmsFromApiWithSearchedText } from "../API/TMD";
import FilmItem from './FilmItem';
// import data from '../data/dataFilms';


export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = { fimls: [] }
    }

    _loadFilms() {
        getFilmsFromApiWithSearchedText("star").
            then(data => {
                //this.setState({ films: data.results })
                this.state.fimls= data.results;
               
            
                 this.forceUpdate();
                // console.log( this.films);
            })
    }

    render() {
        const films = this.state.fimls;
        console.log(this.state.fimls);
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film" />
                <Button title="Recherche" onPress={() => { this._loadFilms() }} />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={(item) => <FilmItem film={item} />}
                />
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