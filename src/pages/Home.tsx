import { useState } from 'react';
import { Users, BookOpen, Utensils, Activity, MapPin, Star, ChevronRight } from 'lucide-react';

export default function Home() {
  // 模拟数据
  const recommendedUsers = [
    {
      id: 1,
      name: '小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo&image_size=square',
      age: 22,
      distance: '1.2km',
      matchRate: 95,
      interests: ['篮球', '音乐', '旅行'],
      description: '寻找运动搭子，周末一起打球'
    },
    {
      id: 2,
      name: '小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      age: 20,
      distance: '2.5km',
      matchRate: 90,
      interests: ['阅读', '电影', '咖啡'],
      description: '喜欢读书，希望找到同样爱阅读的朋友'
    },
    {
      id: 3,
      name: '小李',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo%20glasses&image_size=square',
      age: 23,
      distance: '3.1km',
      matchRate: 88,
      interests: ['编程', '游戏', '健身'],
      description: 'IT从业者，寻找健身伙伴'
    }
  ];

  const sceneTiles = [
    {
      id: 1,
      title: '学习搭子',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'bg-blue-100 text-blue-600',
      description: '同专业同学，一起学习'
    },
    {
      id: 2,
      title: '饭搭子',
      icon: <Utensils className="h-8 w-8" />,
      color: 'bg-orange-100 text-orange-600',
      description: '一起吃饭，分享美食'
    },
    {
      id: 3,
      title: '运动搭子',
      icon: <Activity className="h-8 w-8" />,
      color: 'bg-green-100 text-green-600',
      description: '健身、跑步、球类运动'
    },
    {
      id: 4,
      title: '兴趣搭子',
      icon: <Star className="h-8 w-8" />,
      color: 'bg-purple-100 text-purple-600',
      description: '基于共同兴趣的社交'
    }
  ];

  const nearbyEvents = [
    {
      id: 1,
      title: '周末读书会',
      time: '周六 14:00',
      location: '城市图书馆',
      participants: 12,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=book%20club%20meeting%20library&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: '篮球友谊赛',
      time: '周日 10:00',
      location: '体育中心',
      participants: 8,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=basketball%20game%20court&image_size=landscape_4_3'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      {/* 欢迎区域 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">你好，陌生人</h1>
        <p className="text-gray-600 mt-2">今天想找什么搭子？</p>
      </div>

      {/* 智能匹配推荐 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">智能推荐</h2>
          <button className="text-purple-600 text-sm flex items-center">
            查看更多 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          {recommendedUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{user.name}, {user.age}</h3>
                  <span className="text-sm text-green-600">{user.distance}</span>
                </div>
                <div className="flex items-center mt-1">
                  <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mr-2">
                    匹配度 {user.matchRate}%
                  </div>
                  <div className="flex space-x-1">
                    {user.interests.map((interest, index) => (
                      <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{user.description}</p>
              </div>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                匹配
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 场景搭子入口 */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">场景搭子</h2>
        <div className="grid grid-cols-2 gap-4">
          {sceneTiles.map((tile) => (
            <div key={tile.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center">
              <div className={`p-3 rounded-full ${tile.color} mr-4`}>
                {tile.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{tile.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{tile.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 活动推荐 */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">附近活动</h2>
          <button className="text-purple-600 text-sm flex items-center">
            查看更多 <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        <div className="space-y-4">
          {nearbyEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{event.location}</span>
                  <span className="mx-2">•</span>
                  <span>{event.time}</span>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-sm text-gray-600">{event.participants} 人参加</span>
                  <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm">
                    报名
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}