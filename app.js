const example = require('example');
const app = express();
const PORT = process.env.PORT || 5000;




app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)
);

app.get('/example', (request, response) => {
    response.send("Hello, home!")
})