export default async function handler(req, res) {
  // Chỉ cho phép POST
  if (req.method !== "POST") {
    return res.status(405).json({
      ok: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      contact,
      phone,
      email,
      country,
      platform,
      monthlySpend,
      usage,
      note,
    } = req.body;

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Check ENV
    if (!BOT_TOKEN || !CHAT_ID) {
      return res.status(500).json({
        ok: false,
        message: "Missing Telegram ENV variables",
      });
    }

    const text = `
🔥 NEW BMCard LEAD

👤 Name: ${name || "-"}
💬 Contact: ${contact || "-"}
📞 Phone: ${phone || "-"}
📧 Email: ${email || "-"}
🌍 Country: ${country || "-"}

📢 Platform: ${platform || "-"}
💰 Monthly Spend: ${monthlySpend || "-"}
🧩 Usage: ${usage || "-"}

📝 Note:
${note || "-"}
`;

    // Send Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      }
    );

    const telegramData = await telegramResponse.json();

    // Telegram lỗi
    if (!telegramData.ok) {
      return res.status(500).json({
        ok: false,
        telegramError: telegramData,
      });
    }

    // Thành công
    return res.status(200).json({
      ok: true,
      message: "Lead sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message,
    });
  }
}