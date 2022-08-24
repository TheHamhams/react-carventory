const TEMP_TOKEN = 'b15a1a3c7507a3f7b47e1c3e7788d86b5dd81c3ddb227843'
const baseURL = 'http://127.0.0.1:5000/api'

export const car_calls = {
    get: async () => {
        const response = await fetch(`${baseURL}/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${TEMP_TOKEN}`
            }
        })

        if (!response.ok) {
            throw new Error('Failed to fetch data from server')
        }

        // console.log(response.json())
        return await response.json()
    },

    
    
}
