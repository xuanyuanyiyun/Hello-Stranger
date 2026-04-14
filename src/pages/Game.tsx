import { useState } from 'react';
import { Gamepad, Users, Award, Gift, Trophy, Mic, MessageSquare, Play, Clock, Star, Plus, User } from 'lucide-react';

export default function Game() {
  const [activeTab, setActiveTab] = useState('room');

  const tabs = [
    { id: 'room', label: '语音派对房', icon: <Mic className="h-5 w-5" /> },
    { id: 'game', label: '社交推理游戏', icon: <Gamepad className="h-5 w-5" /> },
    { id: 'task', label: '任务成就', icon: <Award className="h-5 w-5" /> }
  ];

  const voiceRooms = [
    {
      id: 1,
      name: '音乐分享',
      type: '音乐',
      participants: 12,
      maxParticipants: 20,
      host: '音乐达人',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=music%20room%20interface&image_size=landscape_4_3'
    },
    {
      id: 2,
      name: '电影讨论',
      type: '电影',
      participants: 8,
      maxParticipants: 15,
      host: '电影爱好者',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=movie%20discussion%20room&image_size=landscape_4_3'
    },
    {
      id: 3,
      name: '游戏开黑',
      type: '游戏',
      participants: 5,
      maxParticipants: 10,
      host: '游戏大神',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=game%20room%20interface&image_size=landscape_4_3'
    }
  ];

  const socialGames = [
    {
      id: 1,
      name: '海龟汤',
      description: '团队解谜推理游戏',
      participants: 6,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mystery%20game%20interface&image_size=landscape_4_3'
    },
    {
      id: 2,
      name: '剧本杀',
      description: '轻量级线上剧本杀',
      participants: 4,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=script%20kill%20game&image_size=landscape_4_3'
    },
    {
      id: 3,
      name: '狼人杀',
      description: '简化版狼人杀',
      participants: 8,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=werewolf%20game%20interface&image_size=landscape_4_3'
    }
  ];

  const tasks = [
    {
      id: 1,
      name: '每日签到',
      description: '连续签到7天',
      progress: 3,
      total: 7,
      reward: '50金币',
      status: 'in_progress'
    },
    {
      id: 2,
      name: '首次匹配',
      description: '完成第一次成功匹配',
      progress: 1,
      total: 1,
      reward: '100金币',
      status: 'completed'
    },
    {
      id: 3,
      name: '社交达人',
      description: '一天内发送50条消息',
      progress: 25,
      total: 50,
      reward: '150金币',
      status: 'in_progress'
    }
  ];

  const achievements = [
    {
      id: 1,
      name: '初来乍到',
      description: '完成注册并完善个人资料',
      unlocked: true,
      date: '2026-04-01'
    },
    {
      id: 2,
      name: '匹配成功',
      description: '完成第一次成功匹配',
      unlocked: true,
      date: '2026-04-05'
    },
    {
      id: 3,
      name: '社交新星',
      description: '连续7天活跃',
      unlocked: false,
      date: null
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">游戏化社交</h1>

      {/* 标签页 */}
      <div className="bg-white rounded-xl shadow-sm p-1 mb-6 flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex-1 flex items-center justify-center py-3 px-4 rounded-lg ${activeTab === tab.id ? 'bg-purple-100 text-purple-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="mr-2">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* 语音派对房 */}
      {activeTab === 'room' && (
        <div className="space-y-4">
          {voiceRooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <img src={room.avatar} alt={room.name} className="w-1/3 h-32 object-cover" />
                <div className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800">{room.name}</h3>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                      {room.type}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <Users className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">
                      {room.participants}/{room.maxParticipants} 人
                    </span>
                    <span className="mx-2">•</span>
                    <User className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">{room.host}</span>
                  </div>
                  <button className="mt-3 bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm w-full">
                    加入房间
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center text-purple-600 border border-dashed border-purple-300">
            <Plus className="h-5 w-5 mr-2" />
            创建房间
          </button>
        </div>
      )}

      {/* 社交推理游戏 */}
      {activeTab === 'game' && (
        <div className="space-y-4">
          {socialGames.map((game) => (
            <div key={game.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <img src={game.image} alt={game.name} className="w-1/3 h-32 object-cover" />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-gray-800">{game.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{game.description}</p>
                  <div className="flex items-center mt-3">
                    <Users className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">{game.participants} 人参与</span>
                  </div>
                  <button className="mt-3 bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm w-full">
                    开始游戏
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 任务成就 */}
      {activeTab === 'task' && (
        <div className="space-y-6">
          {/* 任务列表 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">每日任务</h2>
            <div className="space-y-4">
              {tasks.map((task) => (
                <div key={task.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-800">{task.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                      <div className="flex items-center mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-purple-600 h-2 rounded-full" 
                            style={{ width: `${(task.progress / task.total) * 100}%` }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm text-gray-600">
                          {task.progress}/{task.total}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">
                        {task.reward}
                      </span>
                      {task.status === 'completed' && (
                        <span className="block mt-2 text-green-600 text-sm">已完成</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 成就列表 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">成就徽章</h2>
            <div className="grid grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`rounded-lg p-3 ${achievement.unlocked ? 'bg-purple-50' : 'bg-gray-50'}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${achievement.unlocked ? 'bg-purple-100 text-purple-600' : 'bg-gray-200 text-gray-400'}`}>
                    <Trophy className="h-6 w-6" />
                  </div>
                  <h3 className={`font-medium text-sm ${achievement.unlocked ? 'text-gray-800' : 'text-gray-400'}`}>
                    {achievement.name}
                  </h3>
                  {achievement.unlocked && (
                    <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

