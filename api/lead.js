export default async function handler(req, res) {
if (req.method !== "POST") {
return res.status(405).json({ ok: false });
}

try {
const data = req.body;

```
const message = `
```

🔥 NEW BMCard LEAD

👤 Name: ${data.name}
📱 Contact: ${data.contact}
☎️ Phone: ${data.phone}
📧 Email: ${data.email}
🌍 Country: ${data.country}
📣 Platform: ${data.platform}
💰 Monthly Spend: ${data.monthlySpend}
🏢 Usage: ${data.usage}

📝 Note:
${data.note || "N/A"}
`;

```
const telegramRes = await fetch(
  `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    }),
  }
);

if (!telegramRes.ok) {
  return res.status(500).json({
    ok: false,
    error: "Telegram send failed",
  });
}

return res.status(200).json({
  ok: true,
});
```

} catch (error) {
return res.status(500).json({
ok: false,
error: error.message,
});
}
}
