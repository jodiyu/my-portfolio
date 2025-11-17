export interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  name: string;
}

// Cache configuration
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds
let weatherCache: {
  data: WeatherData | null;
  timestamp: number;
  city: string;
} | null = null;

export async function fetchWeather(city: string = 'San Francisco'): Promise<WeatherData | null> {
  // Check if we have valid cached data for this city
  const now = Date.now();
  if (
    weatherCache &&
    weatherCache.city === city &&
    weatherCache.data &&
    now - weatherCache.timestamp < CACHE_DURATION
  ) {
    console.log('Using cached weather data');
    return weatherCache.data;
  }

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  
  if (!apiKey) {
    console.error('OpenWeather API key is not set');
    return null;
  }

  try {
    console.log('Fetching fresh weather data from API');
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=imperial&appid=${apiKey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data: WeatherData = await response.json();
    
    // Update cache
    weatherCache = {
      data,
      timestamp: now,
      city,
    };

    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

export function getWeatherColor(weatherCondition: string): string {
  const condition = weatherCondition.toLowerCase();
  
  // Weather colors based on emotional associations
  // Clear: joy (yellow) + excitement (gold) + optimism (spring green)
  // Clouds: disappointment (dark red) + sadness (blue) + nervousness (steel blue)
  // Rain: sadness (blue) + grief (dark slate) + relief (pale green)
  // Drizzle: curiosity (turquoise) + realization (sky blue) + calmness
  // Thunderstorm: fear (purple) + anger (red) + nervousness (steel blue)
  // Snow: joy (yellow/white) + surprise (orange) + realization (sky blue)
  // Mist: curiosity (turquoise) + nervousness (steel blue) + mystery
  // Fog: grief (dark slate) + nervousness (steel blue) + confusion
  // Haze: embarrassment (tomato) + annoyance (light salmon) + desire (orange-red)
  
const colorMap: { [key: string]: string } = {
  clear: 'bg-gradient-to-br from-[rgba(135,206,250,0.25)] via-[rgba(144,238,144,0.2)] to-[rgba(173,216,230,0.2)] dark:from-[rgba(135,206,250,0.3)] dark:via-[rgba(144,238,144,0.25)] dark:to-[rgba(173,216,230,0.25)]',
  clouds: 'bg-gradient-to-br from-[rgba(180,50,50,0.15)] via-[rgba(100,149,237,0.2)] to-[rgba(95,158,160,0.2)] dark:from-[rgba(180,50,50,0.25)] dark:via-[rgba(100,149,237,0.25)] dark:to-[rgba(95,158,160,0.3)]',
  rain: 'bg-gradient-to-br from-[rgba(100,149,237,0.2)] via-[rgba(60,79,79,0.25)] to-[rgba(144,238,144,0.15)] dark:from-[rgba(100,149,237,0.3)] dark:via-[rgba(60,79,79,0.35)] dark:to-[rgba(144,238,144,0.2)]',
  drizzle: 'bg-gradient-to-br from-[rgba(64,224,208,0.2)] via-[rgba(135,206,250,0.25)] to-[rgba(70,130,180,0.15)] dark:from-[rgba(64,224,208,0.3)] dark:via-[rgba(135,206,250,0.35)] dark:to-[rgba(70,130,180,0.25)]',
  thunderstorm: 'bg-gradient-to-br from-[rgba(138,43,226,0.25)] via-[rgba(220,20,60,0.2)] to-[rgba(70,130,180,0.25)] dark:from-[rgba(138,43,226,0.35)] dark:via-[rgba(220,20,60,0.3)] dark:to-[rgba(70,130,180,0.3)]',
  snow: 'bg-gradient-to-br from-[rgba(255,250,250,0.35)] via-[rgba(255,200,120,0.15)] to-[rgba(135,206,250,0.2)] dark:from-[rgba(255,250,250,0.15)] dark:via-[rgba(255,200,120,0.25)] dark:to-[rgba(135,206,250,0.3)]',
  mist: 'bg-gradient-to-br from-[rgba(64,224,208,0.15)] via-[rgba(95,158,160,0.2)] to-[rgba(135,206,250,0.15)] dark:from-[rgba(64,224,208,0.25)] dark:via-[rgba(95,158,160,0.3)] dark:to-[rgba(135,206,250,0.2)]',
  fog: 'bg-gradient-to-br from-[rgba(60,79,79,0.2)] via-[rgba(95,158,160,0.25)] to-[rgba(180,50,50,0.15)] dark:from-[rgba(60,79,79,0.3)] dark:via-[rgba(95,158,160,0.35)] dark:to-[rgba(180,50,50,0.25)]',
  haze: 'bg-gradient-to-br from-[rgba(255,140,105,0.2)] via-[rgba(255,180,150,0.25)] to-[rgba(255,100,50,0.2)] dark:from-[rgba(255,140,105,0.3)] dark:via-[rgba(255,180,150,0.35)] dark:to-[rgba(255,100,50,0.25)]',
};


  // Return matching color or default soft gradient
  for (const [key, value] of Object.entries(colorMap)) {
    if (condition.includes(key)) {
      return value;
    }
  }

  return 'bg-gradient-to-br from-[rgba(152,251,152,0.2)] via-[rgba(135,206,235,0.2)] to-[rgba(255,222,173,0.2)] dark:from-[rgba(152,251,152,0.25)] dark:via-[rgba(135,206,235,0.25)] dark:to-[rgba(255,222,173,0.25)]';
}

export function getOverlayColors(weatherCondition: string): {
  header: string;
  container: string;
  badge: string;
} {
  const condition = weatherCondition.toLowerCase();
  
  // Dynamic overlay colors that complement each weather background
  const overlayMap: { [key: string]: { header: string; container: string; badge: string } } = {
  clear: {
    header: 'bg-[rgba(135,206,250,0.2)] dark:bg-[rgba(135,206,250,0.25)]', // soft sky blue
    container: 'bg-[rgba(176,224,230,0.15)] dark:bg-[rgba(176,224,230,0.2)]', // muted powder blue
    badge: 'bg-[rgba(173,216,230,0.25)] dark:bg-[rgba(173,216,230,0.3)]', // light blue accent
  },
  clouds: {
    header: 'bg-[rgba(100,149,237,0.18)] dark:bg-[rgba(100,149,237,0.22)]',
    container: 'bg-[rgba(70,130,180,0.15)] dark:bg-[rgba(70,130,180,0.2)]',
    badge: 'bg-[rgba(139,69,69,0.22)] dark:bg-[rgba(139,69,69,0.26)]',
  },
  rain: {
    header: 'bg-[rgba(60,79,79,0.18)] dark:bg-[rgba(60,79,79,0.22)]',
    container: 'bg-[rgba(70,130,180,0.15)] dark:bg-[rgba(70,130,180,0.18)]',
    badge: 'bg-[rgba(152,251,152,0.22)] dark:bg-[rgba(152,251,152,0.26)]',
  },
  drizzle: {
    header: 'bg-[rgba(135,206,235,0.15)] dark:bg-[rgba(135,206,235,0.2)]',
    container: 'bg-[rgba(64,224,208,0.15)] dark:bg-[rgba(64,224,208,0.18)]',
    badge: 'bg-[rgba(70,130,180,0.22)] dark:bg-[rgba(70,130,180,0.26)]',
  },
  thunderstorm: {
    header: 'bg-[rgba(138,43,226,0.2)] dark:bg-[rgba(138,43,226,0.25)]',
    container: 'bg-[rgba(220,20,60,0.15)] dark:bg-[rgba(220,20,60,0.18)]',
    badge: 'bg-[rgba(70,130,180,0.25)] dark:bg-[rgba(70,130,180,0.3)]',
  },
  snow: {
    header: 'bg-[rgba(255,250,250,0.15)] dark:bg-[rgba(255,250,250,0.2)]',
    container: 'bg-[rgba(240,248,255,0.2)] dark:bg-[rgba(240,248,255,0.15)]',
    badge: 'bg-[rgba(135,206,235,0.22)] dark:bg-[rgba(135,206,235,0.26)]',
  },
  mist: {
    header: 'bg-[rgba(95,158,160,0.18)] dark:bg-[rgba(95,158,160,0.22)]',
    container: 'bg-[rgba(64,224,208,0.15)] dark:bg-[rgba(64,224,208,0.18)]',
    badge: 'bg-[rgba(135,206,235,0.22)] dark:bg-[rgba(135,206,235,0.26)]',
  },
  fog: {
    header: 'bg-[rgba(60,79,79,0.18)] dark:bg-[rgba(60,79,79,0.22)]',
    container: 'bg-[rgba(70,130,180,0.15)] dark:bg-[rgba(70,130,180,0.18)]',
    badge: 'bg-[rgba(139,69,69,0.22)] dark:bg-[rgba(139,69,69,0.26)]',
  },
  haze: {
    header: 'bg-[rgba(255,140,105,0.15)] dark:bg-[rgba(255,140,105,0.2)]',
    container: 'bg-[rgba(255,99,71,0.12)] dark:bg-[rgba(255,99,71,0.15)]',
    badge: 'bg-[rgba(255,69,0,0.22)] dark:bg-[rgba(255,69,0,0.26)]',
  },
};


  // Return matching overlay colors or default
  for (const [key, value] of Object.entries(overlayMap)) {
    if (condition.includes(key)) {
      return value;
    }
  }

  // Default overlay colors (calm, neutral emotions)
  return {
    header: 'bg-[rgba(152,251,152,0.15)] dark:bg-[rgba(152,251,152,0.2)]',
    container: 'bg-[rgba(135,206,235,0.12)] dark:bg-[rgba(135,206,235,0.15)]',
    badge: 'bg-[rgba(255,222,173,0.25)] dark:bg-[rgba(255,222,173,0.28)]',
  };
}
