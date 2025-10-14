'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface TypingIndicatorProps {
  avatarUrl?: string;
}

export function TypingIndicator({ avatarUrl }: TypingIndicatorProps) {
  return (
    <div className="flex gap-3 mb-6">
      <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
        <AvatarImage src={avatarUrl} alt="AI Assistant" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="bg-gray-800 text-gray-50 rounded-3xl px-5 py-4">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
        </div>
      </div>
    </div>
  );
}
