'use client';

import { useState, useCallback } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { ChatContainer } from '@/components/chat/ChatContainer';
import { ChatInput } from '@/components/chat/ChatInput';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface Chat {
  id: string;
  title: string;
  timestamp: Date | string;
  messages: Message[];
}

export default function Home() {
  const [chats, setChats] = useLocalStorage<Chat[]>('portfolio-chats', []);
  const [currentChatId, setCurrentChatId] = useLocalStorage<string | null>('portfolio-current-chat', null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const name = "Eric Kuo";
  const avatarUrl = undefined;
  const links = {
    linkedin: "https://www.linkedin.com/in/eric-kuo79",
    github: "https://github.com/Ekuo79",
    email: "ekuo3242@gmail.com",
    resume: "/resume.pdf",
  };

  const currentChat = chats.find((chat) => chat.id === currentChatId);
  const messages = currentChat?.messages || [];

  const handleNewChat = () => {
    const newChatId = `chat-${Date.now()}`;
    const newChat: Chat = {
      id: newChatId,
      title: 'New Chat',
      timestamp: new Date().toISOString(),
      messages: [],
    };
    setChats([newChat, ...chats]);
    setCurrentChatId(newChatId);
    setIsSidebarOpen(false);
  };

  const handleSelectChat = (chatId: string) => {
    setCurrentChatId(chatId);
  };

  const handleSendMessage = useCallback(async (content: string) => {
    let chatId = currentChatId;

    if (!chatId) {
      const newChatId = `chat-${Date.now()}`;
      const newChat: Chat = {
        id: newChatId,
        title: content.slice(0, 50),
        timestamp: new Date().toISOString(),
        messages: [],
      };
      setChats((prev) => [newChat, ...prev]);
      setCurrentChatId(newChatId);
      setIsSidebarOpen(false);
      chatId = newChatId;
    }

    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content,
    };

    setChats((prev) =>
      prev.map((chat) => {
        if (chat.id === chatId) {
          const updatedMessages = [...chat.messages, userMessage];
          return {
            ...chat,
            messages: updatedMessages,
            title: chat.messages.length === 0 ? content.slice(0, 50) : chat.title,
          };
        }
        return chat;
      })
    );

    setIsLoading(true);

    try {
      const allMessages = currentChat?.messages || [];
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...allMessages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();

      const assistantMessage: Message = {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: data.message,
      };

      setChats((prev) =>
        prev.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...chat.messages, assistantMessage],
            };
          }
          return chat;
        })
      );
    } catch (error) {
      console.error('Error getting response:', error);
      const errorMessage: Message = {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
      };

      setChats((prev) =>
        prev.map((chat) => {
          if (chat.id === chatId) {
            return {
              ...chat,
              messages: [...chat.messages, errorMessage],
            };
          }
          return chat;
        })
      );
    } finally {
      setIsLoading(false);
    }
  }, [currentChatId, chats]);

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar
        chats={chats}
        currentChatId={currentChatId}
        onNewChat={handleNewChat}
        onSelectChat={handleSelectChat}
        name={name}
        links={links}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="md:hidden flex items-center gap-3 p-4 border-b border-gray-700 bg-gray-800">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-400 hover:text-gray-200 rounded-xl"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-gray-50 font-medium">Portfolio Assistant</h1>
        </header>

        <ChatContainer
          messages={messages}
          isLoading={isLoading}
          name={name}
          avatarUrl={avatarUrl}
          onSuggestedPrompt={handleSendMessage}
          showInputInCenter={messages.length === 0}
          inputComponent={
            <ChatInput
              onSend={handleSendMessage}
              disabled={isLoading}
              placeholder={`Ask a question about ${name}...`}
            />
          }
        />

        {messages.length > 0 && (
          <ChatInput
            onSend={handleSendMessage}
            disabled={isLoading}
            placeholder={`Ask a question about ${name}...`}
          />
        )}
      </div>
    </div>
  );
}
