import axios from 'axios'

export default {

    getAllStates() {
        return axios.get('/api/states').then(response => {
            return response.data
        })
    },

    getOneState(stateName) {
        return axios.get(`/api/state/${stateName}`).then(response => {
            return response.data
        })
    },

    setVisited(stateName, visited) {

        // body of API request. key = visited, value = 'visited' parameter passed to function
        let requestData = {visited: visited}

        return axios.patch(`/api/states/${stateName}`, requestData).then(response => {
            // if successful, response data returned by API route is 'ok' and 200
            // axios checks status code
            return response.data
        })
    }

}