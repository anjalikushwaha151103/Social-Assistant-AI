const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

/**
 * Service to handle Gemini AI calls.
 * Uses Gemini 1.5 Flash for speed and cost-efficiency (free tier).
 */
const geminiService = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-lite-latest',
      generationConfig: {
        responseMimeType: "application/json",
      }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};

module.exports = { geminiService };
