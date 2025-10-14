'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { ChatMessage } from './ChatMessage';
import { TypingIndicator } from './TypingIndicator';
import { WelcomeScreen } from './WelcomeScreen';
import { useEffect, useRef } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface ChatContainerProps {
  messages: Message[];
  isLoading: boolean;
  name: string;
  avatarUrl?: string;
  onSuggestedPrompt: (prompt: string) => void;
  showInputInCenter?: boolean;
  inputComponent?: React.ReactNode;
}

export function ChatContainer({
  messages,
  isLoading,
  name,
  avatarUrl,
  onSuggestedPrompt,
  showInputInCenter,
  inputComponent,
}: ChatContainerProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  if (messages.length === 0 && !isLoading) {
    return (
      <WelcomeScreen
        name={name}
        avatarUrl={avatarUrl}
        onSuggestedPrompt={onSuggestedPrompt}
        showInputInCenter={showInputInCenter}
        inputComponent={inputComponent}
      />
    );
  }

  return (
    <ScrollArea className="flex-1 px-4 pt-6 pb-4" ref={scrollRef}>
      <div className="max-w-3xl mx-auto">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            role={message.role}
            content={message.content}
            avatarUrl={avatarUrl}
          />
        ))}
        {isLoading && <TypingIndicator avatarUrl={avatarUrl} />}
      </div>
    </ScrollArea>
  );
}
