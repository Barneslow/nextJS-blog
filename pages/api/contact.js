import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    console.log("fire");
    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    let connectionString = `mongodb+srv://${process.env.mongodb_username_DEV}:${process.env.mongodb_password_DEV}@${process.env.mongodb_clustername_DEV}.96wzr8p.mongodb.net/${process.env.mongodb_database_DEV}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to the database" });
      return;
    }
    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Could not write data" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Stored message", message: newMessage });
  }
}
