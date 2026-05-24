"use client";

import React, { useState } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { chatAssistant } from '@/ai/flows/chat-flow';
import { cn } from '@/lib/utils';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', content: string }[]>([
    { role: 'model', content: 'Protocol initiated. How can ZN Synergies assist your global operations today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatAssistant({ message: userMsg, history: messages });
      setMessages(prev => [...prev, { role: 'model', content: response.response }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', content: 'Connection timeout. Please re-establish protocol.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 bg-black border border-white/20 shadow-2xl flex flex-col h-[500px] animate-in slide-in-from-bottom-4 duration-500">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
            <span className="text-[10px] uppercase tracking-[0.3em] font-black">AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
              <X size={16} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={cn(
                "max-w-[85%] text-xs leading-relaxed",
                m.role === 'user' ? "ml-auto text-right text-white" : "mr-auto text-white/50"
              )}>
                <div className={cn(
                  "p-4 border",
                  m.role === 'user' ? "bg-white text-black border-white" : "border-white/10 bg-white/5"
                )}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="mr-auto text-white/30 animate-pulse flex items-center gap-2">
                <Loader2 size={12} className="animate-spin" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Processing...</span>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black">
            <div className="flex gap-2">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inquire..."
                className="bg-white/5 border-white/10 h-10 rounded-none text-xs"
              />
              <Button onClick={handleSend} disabled={isLoading} className="bg-white text-black h-10 px-4 rounded-none">
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
