import "dotenv/config";
import app from "./app";
import sequelize from "./config/database";
import Event from "./models/event.model";
import TicketTier from "./models/ticketTier.model";
import Order from "./models/order.model";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully ✅");

    await sequelize.sync({ force : true });
    console.log("Database & models synced successfully ✅");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to database ❌", error);
  }
}

startServer();