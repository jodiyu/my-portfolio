# CS Portfolio

A simple and elegant Computer Science portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features a dynamic weather integration that changes the About page's background color based on current weather conditions.

## Features

- **Header Navigation**: Clean header with your name and three tab navigation (About, Projects, Contact)
- **About Section**: Short bio with relevant courses and experience
- **Projects Section**: Clickable project cards with descriptions and technologies
- **Contact Section**: Email, LinkedIn, and GitHub links
- **Weather Integration**: Real-time weather display with dynamic background colors that change based on weather conditions

## Weather Colors

The About page background changes based on the current weather:
- ☀️ **Clear**: Warm yellow-orange gradient
- ☁️ **Clouds**: Cool gray gradient
- 🌧️ **Rain**: Blue-indigo gradient
- ⛈️ **Thunderstorm**: Purple-gray gradient
- ❄️ **Snow**: Light blue-cyan gradient
- 🌫️ **Fog/Mist**: Slate gray gradient
- 🌤️ **Haze**: Amber-yellow gradient

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get OpenWeather API Key

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Go to your [API keys section](https://home.openweathermap.org/api_keys)
3. Generate a new API key (or copy your default key)

### 3. Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and replace `your_api_key_here` with your actual OpenWeather API key:
```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_actual_api_key_here
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio.

## Customization

### Personal Information

Edit the following files to add your information:

- **Name**: Update in `/app/components/Header.tsx`
- **About Section**: Edit `/app/components/About/About.tsx`
  - Update bio, courses, and experience
- **Projects**: Edit `/app/components/Projects/Projects.tsx`
  - Update project titles, descriptions, links, and technologies
- **Contact**: Edit `/app/components/Contact/Contact.tsx`
  - Update email, LinkedIn, and GitHub links

### Default City

To change the default city for weather display, edit line 8 in `/app/components/About/About.tsx`:

```typescript
const [city, setCity] = useState("Your City Here");
```

## Project Structure

```
app/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── About/
│   │   └── About.tsx       # About section with weather
│   ├── Projects/
│   │   └── Projects.tsx    # Projects section
│   └── Contact/
│       └── Contact.tsx     # Contact section
├── utils/
│   └── weather.ts          # Weather API utilities
├── globals.css
├── layout.tsx
└── page.tsx                # Main page
```

## Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **OpenWeather API** - Weather data

## Deployment

This project can be easily deployed to [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add your `NEXT_PUBLIC_OPENWEATHER_API_KEY` to the environment variables in Vercel
4. Deploy!

## License

MIT

