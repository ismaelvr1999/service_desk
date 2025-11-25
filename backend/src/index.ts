import container from "@container/register";
import app from "./app";

(async () => {
    const PORT = container.resolve("port"); 
    app.listen(PORT, async () => {
        console.log(`Server listening in port ${PORT} `);
        return
    });
})();