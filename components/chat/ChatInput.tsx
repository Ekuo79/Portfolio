'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import { useState, KeyboardEvent, useRef, useEffect } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ onSend, disabled, placeholder = "Ask a question..." }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const MAX_CHARS = 500; // Maximum characters allowed

  useEffect(() => {
    // This effect auto-resizes the textarea height based on its content
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset height to recalculate
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);

  const handleSend = () => {
    if (message.trim() && !disabled && message.length <= MAX_CHARS) {
      onSend(message.trim());
      setMessage('');
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMessage = e.target.value;
    // Only update if under character limit
    if (newMessage.length <= MAX_CHARS) {
      setMessage(newMessage);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    // Send message on Enter, but allow new lines with Shift+Enter
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const remainingChars = MAX_CHARS - message.length;

  return (
    <div className="px-4 pb-6 pt-4">
      <div className="max-w-3xl mx-auto flex items-end gap-3">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="min-h-[80px] max-h-[300px] text-base bg-gray-800 border-gray-700 text-gray-50 placeholder:text-gray-400 resize-none rounded-3xl py-5 px-6 shadow-lg overflow-y-hidden flex-1"
          rows={1}
        />
        <div className="flex flex-col items-center gap-2 pb-3">
          {message.length > 0 && (
            <div className="text-xs">
              <span className={
                remainingChars < 20 ? 'text-red-400' :
                remainingChars < 50 ? 'text-yellow-400' :
                'text-gray-500'
              }>
                {message.length}/{MAX_CHARS}
              </span>
            </div>
          )}
          <Button
            onClick={handleSend}
            disabled={!message.trim() || disabled}
            size="icon"
            className="h-12 w-12 rounded-full bg-blue-500 hover:bg-blue-600 transition-all disabled:opacity-30 shrink-0"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}