import { getMovie, getMovieList } from '../services/omdbService';
const SEARCH = 'fan';
const ERR_SEARCH = 'asdfasdfadsf';

describe('test if getMovie returns successfully', () => {
  test('getMovie', async () => {
    const response = await getMovie(SEARCH);
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('Response');
    expect(response.Response).toEqual('True');
  });
  test('getMovieList', async () => {
    const response = await getMovieList(SEARCH);
    expect(response).toHaveProperty('Response');
    expect(response.Response).toEqual('True');
    expect(response).toHaveProperty('Search');
    expect(response.Search).toBeInstanceOf(Array);
  });
  test('getMovie', async () => {
    const response = await getMovie(ERR_SEARCH);
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('Response');
    expect(response.Response).toEqual('False');
    expect(response).toHaveProperty('Error');
    expect(response.Error).toEqual('Movie not found!');
  });
  test('getMovieList', async () => {
    const response = await getMovieList(ERR_SEARCH);
    expect(response).toBeInstanceOf(Object);
    expect(response).toHaveProperty('Response');
    expect(response.Response).toEqual('False');
    expect(response).toHaveProperty('Error');
    expect(response.Error).toEqual('Movie not found!');
  });
});
