import { useState } from 'react';
import { MessageSquare, Video, Mic, Send, Plus, Bot, Sparkles, Heart, ThumbsUp, Paperclip } from 'lucide-react';

export default function Chat() {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');
  const [showAIAssistant, setShowAIAssistant] = useState(false);

  const chats = [
    {
      id: 1,
      name: '小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo&image_size=square',
      lastMessage: '好的，周末一起打球！',
      lastMessageTime: '10:30',
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      name: '小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      lastMessage: '最近有什么好看的书推荐吗？',
      lastMessageTime: '昨天',
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 3,
      name: '小李',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo%20glasses&image_size=square',
      lastMessage: '健身计划发给你了',
      lastMessageTime: '2天前',
      unreadCount: 0,
      isOnline: true
    }
  ];

  const messages = [
    { id: 1, sender: 'other', content: '你好！最近怎么样？', time: '10:00' },
    { id: 2, sender: 'me', content: '挺好的，谢谢关心！', time: '10:01' },
    { id: 3, sender: 'other', content: '周末有空一起打球吗？', time: '10:05' },
    { id: 4, sender: 'me', content: '好啊，几点？', time: '10:06' },
    { id: 5, sender: 'other', content: '下午2点怎么样？', time: '10:08' },
    { id: 6, sender: 'other', content: '好的，周末一起打球！', time: '10:30' }
  ];

  const aiSuggestions = [
    '你最近在忙什么呢？',
    '听说最近有部新电影不错，你看过吗？',
    '你平时喜欢做什么运动？',
    '最近天气挺好的，有没有什么出游计划？'
  ];

  return (
    <div className="pt-20 pb-20 h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        {/* 聊天列表 */}
        <div className="w-64 border-r border-gray-200 bg-white">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">消息</h2>
          </div>
          <div className="overflow-y-auto h-full">
            {chats.map((chat) => (
              <div 
                key={chat.id}
                className={`p-3 border-b border-gray-100 cursor-pointer ${activeChat === chat.id ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
                onClick={() => setActiveChat(chat.id)}
              >
                <div className="flex items-center">
                  <div className="relative">
                    <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover" />
                    {chat.isOnline && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                    )}
                  </div>
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-gray-800">{chat.name}</h3>
                      <span className="text-xs text-gray-500">{chat.lastMessageTime}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      {chat.unreadCount > 0 && (
                        <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 聊天内容 */}
        <div className="flex-1 flex flex-col bg-gray-50">
          {/* 聊天头部 */}
          <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img 
                  src={chats.find(c => c.id === activeChat)?.avatar} 
                  alt={chats.find(c => c.id === activeChat)?.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                {chats.find(c => c.id === activeChat)?.isOnline && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-semibold text-gray-800">{chats.find(c => c.id === activeChat)?.name}</h3>
                <p className="text-xs text-gray-500">{chats.find(c => c.id === activeChat)?.isOnline ? '在线' : '离线'}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Mic className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 消息列表 */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[70%] ${msg.sender === 'me' ? 'bg-purple-100 text-purple-800' : 'bg-white text-gray-800'} rounded-lg p-3 shadow-sm`}>
                  <p>{msg.content}</p>
                  <span className="text-xs text-gray-500 mt-1 block text-right">{msg.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* AI破冰助手 */}
          {showAIAssistant && (
            <div className="bg-white border-t border-gray-200 p-3">
              <div className="flex items-center mb-2">
                <Bot className="h-4 w-4 text-purple-600 mr-2" />
                <h4 className="font-medium text-gray-800">AI破冰助手</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiSuggestions.map((suggestion, index) => (
                  <button key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 消息输入框 */}
          <div className="bg-white border-t border-gray-200 p-3">
            <div className="flex items-center">
              <button 
                className="p-2 text-gray-600 hover:text-purple-600 transition-colors"
                onClick={() => setShowAIAssistant(!showAIAssistant)}
              >
                <Sparkles className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Plus className="h-5 w-5" />
              </button>
              <input
                type="text"
                placeholder="输入消息..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="p-2 text-gray-600 hover:text-purple-600 transition-colors">
                <Paperclip className="h-5 w-5" />
              </button>
              <button className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="flex justify-center mt-2 space-x-4">
              <button className="flex items-center text-sm text-gray-600 hover:text-purple-600 transition-colors">
                <Heart className="h-4 w-4 mr-1" />
                表情
              </button>
              <button className="flex items-center text-sm text-gray-600 hover:text-purple-600 transition-colors">
                <ThumbsUp className="h-4 w-4 mr-1" />
                快捷回复
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}