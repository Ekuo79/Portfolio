# Portfolio Chatbot Customization Guide

## Quick Start

Your portfolio chatbot is ready to use! Here's how to customize it with your information.

## Personalization

Open `app/page.tsx` and update these values (around line 29-36):

```typescript
const name = "Your Name";  // Replace with your actual name
const avatarUrl = undefined;  // Optional: Add URL to your profile picture
const links = {
  linkedin: "https://linkedin.com/in/yourprofile",  // Your LinkedIn profile
  github: "https://github.com/yourprofile",          // Your GitHub profile
  email: "your.email@example.com",                   // Your email
  resume: "/resume.pdf",                             // Path to your resume file
};
```

## Connecting to AI Backend

The chatbot currently uses placeholder responses. To connect to a real AI assistant:

1. **Option 1: OpenAI API**
   - Get an API key from OpenAI
   - Replace the placeholder logic in `handleSendMessage` function (line 58-108)

2. **Option 2: Anthropic Claude**
   - Get an API key from Anthropic
   - Use the Claude API to process messages

3. **Option 3: Custom Backend**
   - Create your own API endpoint
   - Send messages to your backend with your professional information

## Adding Your Avatar

Place your profile picture in the `public` folder:
- Example: `public/avatar.jpg`
- Update `avatarUrl` to: `"/avatar.jpg"`

## Adding Your Resume

1. Place your resume PDF in the `public` folder
2. The download link is already configured in the sidebar

## Features Included

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark Theme**: Professional dark mode interface
- **Chat History**: Multiple conversation support
- **Markdown Support**: Renders formatted text, code blocks, and links
- **Typing Indicator**: Shows when AI is thinking
- **Suggested Prompts**: Pre-filled questions to guide visitors

## Color Customization

The design uses a carefully chosen dark theme palette:
- Main Background: `#111827` (gray-900)
- Sidebar/AI Bubbles: `#1F2937` (gray-800)
- User Bubbles: `#374151` (gray-700)
- Accent Color: `#3B82F6` (blue-500)

To customize colors, update the Tailwind classes in the component files.
