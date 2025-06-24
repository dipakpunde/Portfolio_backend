import app from "./app.js";

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on https://portfolio-backend-six-orpin.vercel.app/`);
})