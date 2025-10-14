'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  name: string;
  avatarUrl?: string;
  onSuggestedPrompt: (prompt: string) => void;
  showInputInCenter?: boolean;
  inputComponent?: React.ReactNode;
}

const SUGGESTED_PROMPTS = [
  "Tell me about your latest project.",
  "What are your strongest technical skills?",
  "Summarize your resume.",
  "Why are you passionate about software engineering?",
];

export function WelcomeScreen({ name, avatarUrl, onSuggestedPrompt, showInputInCenter, inputComponent }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <Avatar className="h-20 w-20 mb-6">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback className="text-2xl">{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl font-semibold text-gray-50 mb-2 text-center">
        Hello, I'm {name}.
      </h1>

      <p className="text-gray-400 mb-8 text-center max-w-md">
        You can ask me anything about my interests, skills, projects, or work experience. How can I help?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl w-full mb-8">
        {SUGGESTED_PROMPTS.map((prompt, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-auto py-4 px-6 text-left whitespace-normal border-gray-700 hover:bg-gray-800 hover:border-gray-600 text-gray-200 rounded-2xl transition-all"
            onClick={() => onSuggestedPrompt(prompt)}
          >
            {prompt}
          </Button>
        ))}
      </div>

      {showInputInCenter && inputComponent && (
        <div className="w-full max-w-3xl">
          {inputComponent}
        </div>
      )}
    </div>
  );
}
