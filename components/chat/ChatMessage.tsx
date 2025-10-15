'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  avatarUrl?: string;
}

export function ChatMessage({ role, content, avatarUrl }: ChatMessageProps) {
  // Check if content mentions Minnie or dog
  const shouldShowMinnieImage = role === 'assistant' &&
    (content.toLowerCase().includes('minnie') ||
     content.toLowerCase().includes('dog'));

  if (role === 'user') {
    return (
      <div className="flex justify-end mb-6">
        <div className="bg-gray-700 text-gray-50 rounded-3xl px-5 py-3 max-w-[80%] break-words">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 mb-6">
      <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
        <AvatarImage src={avatarUrl} alt="AI Assistant" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
      <div className="bg-gray-800 text-gray-50 rounded-3xl px-5 py-3 max-w-[80%] prose prose-invert prose-sm max-w-none">
        <ReactMarkdown
          components={{
            code(props) {
              const { node, className, children, ...rest } = props;
              const match = /language-(\w+)/.exec(className || '');
              const isInline = !match;

              return !isInline ? (
                <CodeBlock language={match[1]} code={String(children).replace(/\n$/, '')} />
              ) : (
                <code className="bg-gray-900 px-1.5 py-0.5 rounded text-sm" {...rest}>
                  {children}
                </code>
              );
            },
            a({ children, href, ...props }) {
              return (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 underline"
                  {...props}
                >
                  {children}
                </a>
              );
            },
            ul({ children, ...props }) {
              return (
                <ul className="list-disc list-outside ml-4 my-2 space-y-1" {...props}>
                  {children}
                </ul>
              );
            },
            ol({ children, ...props }) {
              return (
                <ol className="list-decimal list-outside ml-4 my-2 space-y-1" {...props}>
                  {children}
                </ol>
              );
            },
            li({ children, ...props }) {
              return (
                <li className="text-gray-50" {...props}>
                  {children}
                </li>
              );
            },
            h1({ children, ...props }) {
              return (
                <h1 className="text-xl font-bold mt-4 mb-2" {...props}>
                  {children}
                </h1>
              );
            },
            h2({ children, ...props }) {
              return (
                <h2 className="text-lg font-bold mt-3 mb-2" {...props}>
                  {children}
                </h2>
              );
            },
            h3({ children, ...props }) {
              return (
                <h3 className="text-base font-semibold mt-2 mb-1" {...props}>
                  {children}
                </h3>
              );
            },
            p({ children, ...props }) {
              return (
                <p className="my-2" {...props}>
                  {children}
                </p>
              );
            },
            strong({ children, ...props }) {
              return (
                <strong className="font-semibold text-gray-100" {...props}>
                  {children}
                </strong>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
        {shouldShowMinnieImage && (
          <div className="mt-3">
            <img
              src="/minnie.png"
              alt="Minnie the dog"
              className="rounded-2xl max-w-full h-auto max-h-64 object-cover"
            />
            <p className="text-xs text-gray-400 mt-1">Minnie!</p>
          </div>
        )}
      </div>
    </div>
  );
}

function CodeBlock({ language, code }: { language: string; code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
        onClick={handleCopy}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
      <SyntaxHighlighter
        language={language}
        style={oneDark}
        customStyle={{
          margin: 0,
          borderRadius: '1rem',
          fontSize: '0.875rem',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
