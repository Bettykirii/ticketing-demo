import "dotenv/config";
import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully ✅");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to database ❌", error);
  }
}

startServer();