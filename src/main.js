import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

// Remove the views setup as it's not supported
// app.views('views');

// Use send() instead of render()
app.get('/', (request, response) => {
    response.send('<html><head><title>Home</title></head><body><h1>Welcome Home</h1></body></html>');
});

// If you need to serve JSON:
app.get('/api', (request, response) => {
    response.json({ message: 'Hello from API', status: 'success' });
});

export default async (context) => await app.attach(context);
