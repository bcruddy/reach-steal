const express = require('express'),
    urlCleaner = require('express-url-cleaner'),
    noSlash = require('no-slash'),
    path = require('path');

const app = express();

app
.use(urlCleaner())
.use(noSlash())
.use('/assets', express.static(path.join(__dirname, '..', 'dist')))
.use('/assets', express.static(path.join(__dirname, '..', 'public')))
.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));
})
.use('*', (req, res) => {
    res.status(404).json({code: 404, message: 'Route not found.'});
});

// abstract this out into a separate file
const port = process.env.PORT || 3009;
app.listen(port, () => {
    console.log(`reach-steal listening on ${port}`);
});
