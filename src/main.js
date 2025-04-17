import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

app.use(app.static('public'));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

export default async (context) => await app.attach(context);
