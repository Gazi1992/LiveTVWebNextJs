export const FOCUSED_MOVIE = 'FOCUSED_MOVIE';

export const setFocusedMovie = (movie) => {
    return { type: FOCUSED_MOVIE, data: movie }
}