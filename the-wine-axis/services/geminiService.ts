
import { GoogleGenAI, Type } from "@google/genai";

// Initialization helper to ensure the API key is accessible from process.env
const getAIClient = () => {
  // Use process.env.API_KEY directly when initializing the client as per guidelines
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const generateSEOKeywords = async (description: string) => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate 10 relevant SEO keywords for this personal brand description: ${description}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            keywords: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          }
        }
      }
    });
    
    // Access response.text property directly as it returns the extracted string output
    if (!response.text) return ["Tech", "Engineering", "Design", "Innovation"];
    
    const data = JSON.parse(response.text.trim());
    return (data.keywords as string[]) || ["Tech", "Engineering", "Design", "Innovation"];
  } catch (error) {
    console.warn("SEO Generation failed, using fallbacks:", error);
    return ["Tech", "Engineering", "Design", "Innovation"];
  }
};