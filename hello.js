export default function Hello(app) {
    app.get('/hello', (req, res) => {
        res.send('Life is awesome');
    });

    app.get('/', (req, res) => {
        res.send('Welcome to Happiness!');
    });
}