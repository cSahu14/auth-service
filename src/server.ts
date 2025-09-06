import app from "./app.js";
import { Config } from "./config/index.js";

const startServer = () => {
    const PORT = Config.PORT;
    try {
        app.listen(PORT, () => console.log(`Listening to port: ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
