'use client';

import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, Github, Linkedin, Mail, X, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Chat {
  id: string;
  title: string;
  timestamp: Date | string;
}

interface SidebarProps {
  chats: Chat[];
  currentChatId: string | null;
  onNewChat: () => void;
  onSelectChat: (chatId: string) => void;
  onDeleteChat: (chatId: string) => void;
  name: string;
  links: {
    linkedin?: string;
    github?: string;
    email?: string;
    resume?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({
  chats,
  currentChatId,
  onNewChat,
  onSelectChat,
  onDeleteChat,
  name,
  links,
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-50 w-[280px] bg-gray-800 flex flex-col border-r border-gray-700 transform transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <Button onClick={onNewChat} className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
            <Plus className="h-4 w-4 mr-2" />
            New Chat
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2 text-gray-400 hover:text-gray-200"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {chats.length === 0 ? (
              <p className="text-gray-500 text-sm text-center py-8">No chat history</p>
            ) : (
              chats.map((chat) => (
                <div key={chat.id} className="relative group">
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-left font-normal h-auto py-3 px-3 pr-10 rounded-xl transition-all",
                      currentChatId === chat.id
                        ? "bg-gray-700 text-gray-50"
                        : "text-gray-300 hover:bg-gray-700 hover:text-gray-50"
                    )}
                    onClick={() => {
                      onSelectChat(chat.id);
                      onClose();
                    }}
                  >
                    <div className="truncate">{chat.title}</div>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-red-400 hover:bg-gray-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteChat(chat.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-gray-700 space-y-3">
          <div className="text-gray-50 font-medium">{name}</div>
          <div className="flex gap-2">
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {links.email && (
              <a
                href={`mailto:${links.email}`}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
