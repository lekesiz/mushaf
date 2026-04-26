'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, User, Loader2, BookOpen, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  'Arkadaşım beni kıskandırıyor, ne yapmalıyım?',
  'Ailemle anlaşamıyorum, Kur\'an ne diyor?',
  'Sınav kaygısı yaşıyorum, nasıl sakinleşebilirim?',
  'Yalnız hissediyorum, Allah\'a nasıl yaklaşabilirim?',
  'Kötü alışkanlıklarımdan nasıl kurtulabilirim?',
  'Bir arkadaşım bana yalan söyledi, ne yapmalıyım?',
];

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
}

export function ChatModal({ open, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      // Karşılama mesajı
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          content:
            'Selam! Ben Mushaf Asistanı\'yım. 🌿\n\nGünlük hayatında karşılaştığın sorulara ve sorunlara yalnızca Kur\'an-ı Kerim\'den cevap vermeye çalışıyorum.\n\nAklına takılan her şeyi sorabilirsin — aile, arkadaşlık, okul, duygular, korkular... Kur\'an\'ın ışığında birlikte düşünelim.',
        },
      ]);
    }
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    };

    const newMessages = [...messages.filter((m) => m.id !== 'welcome'), userMessage];
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Bir hata oluştu');
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'Üzgünüm, şu an cevap veremiyorum. Lütfen biraz sonra tekrar dene. 🙏',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-x-4 bottom-4 top-4 z-50 mx-auto flex max-w-2xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:inset-x-auto sm:left-1/2 sm:right-auto sm:-translate-x-1/2 sm:w-full"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-100 bg-gradient-to-r from-emerald-50 to-teal-50 px-5 py-4 dark:border-slate-800 dark:from-emerald-950/40 dark:to-teal-950/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500 shadow-md shadow-emerald-200 dark:shadow-emerald-900">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-slate-900 dark:text-white">
                  Mushaf Asistanı
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Kur'an'dan günlük hayat rehberi
                </p>
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 dark:bg-emerald-900/50">
                <Sparkles className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">
                  Kur'an odaklı
                </span>
              </div>
              <button
                onClick={onClose}
                className="ml-1 flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Avatar */}
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl ${
                        msg.role === 'assistant'
                          ? 'bg-emerald-100 dark:bg-emerald-900/50'
                          : 'bg-slate-100 dark:bg-slate-800'
                      }`}
                    >
                      {msg.role === 'assistant' ? (
                        <Bot className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <User className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                      )}
                    </div>

                    {/* Bubble */}
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === 'assistant'
                          ? 'rounded-tl-sm bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-200'
                          : 'rounded-tr-sm bg-emerald-500 text-white'
                      }`}
                    >
                      {formatMessage(msg.content)}
                    </div>
                  </motion.div>
                ))}

                {/* Loading indicator */}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                      <Bot className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm bg-slate-50 px-4 py-3 dark:bg-slate-800">
                      <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        Kur'an'dan cevap aranıyor...
                      </span>
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions — sadece başlangıçta göster */}
              {messages.length <= 1 && !loading && (
                <div className="mt-4">
                  <p className="mb-3 text-xs font-medium text-slate-400 dark:text-slate-500">
                    Örnek sorular:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(q)}
                        className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:bg-emerald-900/50"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-slate-100 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900 sm:px-5">
              <div className="flex items-end gap-3">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Sorunuzu yazın... (Enter ile gönder)"
                  rows={1}
                  className="flex-1 resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-emerald-600 dark:focus:ring-emerald-900/30"
                  style={{ maxHeight: '120px' }}
                  onInput={(e) => {
                    const el = e.currentTarget;
                    el.style.height = 'auto';
                    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
                  }}
                  disabled={loading}
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-200 transition-all hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-40 dark:shadow-emerald-900"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-xs text-slate-400 dark:text-slate-500">
                Cevaplar yalnızca Kur'an-ı Kerim'e dayanmaktadır · Dini konularda uzman görüşü alınız
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
