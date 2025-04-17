import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

app.views('views');
// make sure to add correct content-types.
app.get('/', (request, response) => response.binary('index.html'));


export default async (context) => await app.attach(context);
