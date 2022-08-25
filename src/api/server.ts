const TEMP_TOKEN = 'b15a1a3c7507a3f7b47e1c3e7788d86b5dd81c3ddb227843'
const baseURL = 'https://neo-carventory.herokuapp.com/api'

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

    create: async (data: any={}) => {
        const response = await fetch(`${baseURL}/cars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${TEMP_TOKEN}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return response.json()
    },

    update: async(id:string, data: any={}) => {
        const response = await fetch(`${baseURL}/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${TEMP_TOKEN}`
            },
            body: JSON.stringify(data)
        })
    },

    delete: async(id:string) => {
        const response = await fetch(`${baseURL}/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${TEMP_TOKEN}`
            }
        })
    }
    
}
