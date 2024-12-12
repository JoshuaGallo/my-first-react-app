import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/submit", async (req, res) => {
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/17274076/2i5mxn8/";

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    if (response.ok) {
      res.status(200).send("Webhook sent successfully!");
    } else {
      res.status(500).send("Failed to send webhook");
    }
  } catch (error) {
    console.error("Error sending webhook:", error);
    res.status(500).send("Error sending webhook");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
