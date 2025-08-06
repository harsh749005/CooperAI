const PERPLEXITY_API_KEY = process.env.EXPO_PUBLIC_PERPLEXITY_API_KEY;

export const getPerplexityResponse = async (message) => {
  try {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${PERPLEXITY_API_KEY}`, // Replace with real key
      },
      body: JSON.stringify({
        messages: [
          { role: "user", content: message }
        ],
        model: "sonar", // or whatever model Perplexity uses
        return_images :true
      }),
    });

    // ✅ Add this check before parsing JSON
    const text = await response.text();
    console.log("Raw response text:", text); // Helpful for debugging

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = JSON.parse(text);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching from Perplexity API:", error);
    return "Sorry, I couldn't understand that.";
  }
};
