import axios from 'axios'

// json-server --watch db.json --port 3001
const api = axios.create({
	baseURL: 'http://localhost:3001/'
})

export const loadGenres = () => api.get('genres')
export const saveSeries = (newSeries) => api.post('series', newSeries)
export const updateSeries = (series) => api.put('series/'+series.id, series)
export const loadSeries = () => api.get('series')
export const loadSeriesByGenre = (genre) => api.get('series?genre=' + genre)
export const deleteSeries = (id) => api.delete('series/' + id)
export const loadSeriesById = (id) => api.get('series/' + id)

const apis = {
	loadGenres,
	saveSeries,
	updateSeries,
	loadSeries,
	loadSeriesByGenre,
	deleteSeries,
	loadSeriesById
}
export default apis