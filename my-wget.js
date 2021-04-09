const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async() => {
    try {
        const response = await axios.get('https://hardfork-support.netlify.app/')
        await fsPromises.writeFile('index.html', response.data)
    } catch (e) {
        console.log(e.message)
    }
}
const size = async() => {
    try {
        const response = await axios.get('https://hardfork-support.netlify.app/')
        const size = response.headers['content-length']
        await fsPromises.writeFile('index.html', `Size of page web : ${size}`)
        console.log(`Size of page web : ${size}`)
    } catch (e) {
        console.log(e.message)
    }
}
size()
main()