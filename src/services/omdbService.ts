import { OMDB_URL, API_KEY } from '../config';
import { MovieResult} from '../models';
import axios from 'axios';

export const getMovie = async(title: string): Promise<MovieResult> => {
    try {
        const PARAMS = `t=${title}`;
        const response = await axios.get(`${OMDB_URL}/?apikey=${API_KEY}&${PARAMS}`, {headers: {'Content-Type': 'application/json'}});
        return response.data;
    } catch(err) {
        console.log('Error: \n', err)
        throw err;
    }
}

export const getMovieList = async(title: string, page?: number): Promise<MovieResult> => {
    try {
        const PARAMS = `s=${title}`;
        const response = await axios.get(`${OMDB_URL}/?apikey=${API_KEY}&${PARAMS}&page=${page}`, {headers: {'Content-Type': 'application/json'}});
        return response.data;
    } catch(err) {
        console.log('Error: \n', err)
        throw err;
    }
}