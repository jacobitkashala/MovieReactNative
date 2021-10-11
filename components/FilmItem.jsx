import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { getImageFromApi } from "../API/TMD";

export default class FilmItem extends Component {

    render() {
        //console.log(this.props)
        const film = this.props.film.item;
        const displayDetailForFilm = this.props.displayDetailForFilm;
        //
        return (
            <View style={styles.main_container}
            >
                <Image
                    style={styles.image}
                    source={{ uri: getImageFromApi(film.poster_path) }}
                    onClick={() => displayDetailForFilm(film.id)}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>{film.title}</Text>
                        <Text style={styles.vote_text}>{film.popularity}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} >{film.overview}</Text>
                        {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date_text}>{film.release_date}</Text>
                    </View>
                </View>
            </View>
        )

    }
}
// Components/FilmItem.js

const styles = StyleSheet.create({
    main_container: {
        margin: 0,
        flexDirection: 'row',

    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray',
        cursor: 'pointer'
    },
    content_container: {
        flex: 1,
        margin: 3
    },
    header_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'start'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: "1rem",
        marginRight: 10,

    },
    vote_text: {
        fontWeight: 'bold',
        fontSize: "1.3rem",
        color: '#666666'
    },
    // description_container: {
    //     flex: 7
    // },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_container: {
        flex: 1
    },
    date_text: {
        textAlign: 'left',
        fontSize: 14
    }
})
