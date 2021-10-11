
const initialState = { favoriteFilm: [] };

export default function logloFavorite(state = initialState, action) {

    switch (action.type) {
        case 'TOOGLE_FAVORITE':
            const favoriteFilmIndex = state.favoriteFilm.findIndex(item => item.id === action.value.id);

            if (favoriteFilmIndex !== -1) {
                //suppresion
                return {
                    ...state,
                    favoriteFilm: state.favoriteFilm.filter(index => index !== favoriteFilmIndex)
                }

            } else {
                //ajout
                return {
                    ...state,
                    favoriteFilm: [...state.favoriteFilm, action.value]
                }
            }
            return state;
        default:
            return state;

    }
}
