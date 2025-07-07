// Auto search API integration for live information
export interface SearchAPIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export const callSearchAPI = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch('https://at41rv-api-owner.vercel.app/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini-search-preview',
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: SearchAPIResponse = await response.json();
    return data.choices[0]?.message?.content || 'Sorry, I could not get live information at the moment.';
  } catch (error) {
    console.error('Error calling search API:', error);
    return 'Sorry, I could not access live information right now.';
  }
};

// Function to detect if a query needs live information
export const needsLiveInfo = (query: string): boolean => {
  const liveKeywords = [
    'news', 'latest', 'current', 'today', 'now', 'recent', 'breaking',
    'weather', 'temperature', 'forecast', 'climate',
    'stock', 'price', 'market', 'crypto', 'bitcoin',
    'score', 'match', 'game', 'sports', 'live',
    'update', 'happening', 'event', 'trending',
    'time', 'date', 'when', 'schedule',
    'traffic', 'flight', 'status'
  ];
  
  const queryLower = query.toLowerCase();
  return liveKeywords.some(keyword => queryLower.includes(keyword));
};

// Enhanced prompt for search API
export const enhancePromptWithSearch = (originalPrompt: string, context: string): string => {
  return `${context}\n\nUser query: ${originalPrompt}\n\nPlease provide a comprehensive response that includes any relevant live information, current data, or recent updates related to this query.`;
};