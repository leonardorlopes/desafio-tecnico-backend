import mongoose from 'mongoose';

export async function mongoDbConnect() {
  try {
    mongoose.set("strictQuery", false);
    const connString = process.env.DATABASE_CONN_STRING
    await mongoose.connect(connString ? connString : '')
  } catch (error) {
    console.log("Error to connect to database:", error);
  }
}

mongoose.connection.on("connected", () => {
  console.log("Mongodb connected to:", mongoose.connection.db.databaseName);
});

mongoose.connection.on("error", (error) => {
  console.error("Mongodb error to connect", error);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongodb disconnected");
});