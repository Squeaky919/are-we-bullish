const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'are_we_bullish.html'))
})

app.listen(5000, () => console.log('Server is running on port 5000...'))
