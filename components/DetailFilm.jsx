import React, {
    useState,
    useEffect
} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import {
    AiOutlineHeart,
    AiTwotoneHeart
} from "react-icons/ai";
import moment from 'moment';
import numeral from 'numeral';
import { connect } from 'react-redux';
import { getImageFromApi } from "../API/TMD";
import { getFilmDetailFromApi } from "../API/TMD";

function DetailFilm({ route, favoriteFilm, dispatch }) {
    const [isLoading, setIsLoading] = useState(true);
    const [dataFilm, setDataFilm] = useState(undefined);
    const [dataFavorieFilms, setDataFavorieFilms] = useState([])
    const [isfavorieFilms, setIsFavorieFilms] = useState(false)

    console.log(favoriteFilm);

    useEffect(() => {
        getFilmDetailFromApi(route.params.filmId)
            .then(data => {
                setDataFilm(data)
            })
        setIsLoading(false)
    }, []
    )

    function _toggleFavori() {
        const action = { type: "TOGGLE_FAVORIE", value: dataFilm };
        dispatch(action);
        //favoriteFilm = [...dataFilm]
        console.log(action.value.id)

        setIsFavorieFilms(currenValue => !currenValue)
    }

    function _displayFavoriteImage() {
        let findindex = dataFavorieFilms.findIndex(item => item.id === dataFilm.id)
        console.log(findindex)
        if (isfavorieFilms) {
            return (<AiTwotoneHeart style={{ fontSize: 30 }} onClick={() => _toggleFavori()} />)
        } else {
            return (<AiOutlineHeart style={{ fontSize: 30 }} onClick={() => _toggleFavori()} />)

        }
    }

    function _displayMovie() {
        if (dataFilm !== undefined) {
            // console.log(dataFilm);
            return (
                <ScrollView style={styles.scrollview_container}>
                    {/* <Text>{getImageFromApi(dataFilm.backdrop_path)}</Text> */}
                    <Image
                        style={styles.image}
                        source={{ uri: getImageFromApi(dataFilm.backdrop_path) }}
                    />
                    <TouchableOpacity style={styles.favori_contenaire}>
                        {_displayFavoriteImage()}
                    </TouchableOpacity>


                    <Text style={styles.title_text}> {dataFilm.title}</Text>

                    <Text style={styles.description_text}> {dataFilm.overview}</Text>
                    <Text style={styles.default_text}> Budget:{numeral(dataFilm.budget).format('0,0[.]00 $')}</Text>
                    <Text style={styles.default_text}> Date de sortie:{moment(new Date(dataFilm.release_date)).format('DD/MM/YYYY')}</Text>
                    <Text style={styles.default_text}> Vote average:{dataFilm.vote_average}</Text>
                    <Text style={styles.default_text}> vote count:{dataFilm.vote_count}</Text>
                </ScrollView>
            )
        }
    }
    function _displayLoading() {
        if (isLoading) {
            return (
                <View style={styles.loading_container}>
                    <ActivityIndicator size='x-large' />
                </View>
            )
        }
    }
    return (
        <View style={styles.main_container}>
            {_displayMovie()}
            {_displayLoading()}
        </View>

    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollview_container: {
        flex: 1
    },
    image: {
        height: 169,
        margin: 5
    },
    favori_contenaire: {
        alignItems: "center"
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 35,
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#000000',
        textAlign: 'center'
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666',
        margin: 5,
        marginBottom: 15
    },
    default_text: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
    }
})

const mapStateToProps = (state) => ({ favoriteFilm: state.favoriteFilm })

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(DetailFilm)