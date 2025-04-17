import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

// app.use(app.static('public'));
app.views('views');
// make sure to add correct content-types.
app.get('/', (request, response) => response.binary('index.html'));
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

export default async (context) => await app.attach(context);
