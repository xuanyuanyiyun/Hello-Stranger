import { useState } from 'react';
import { Heart, Search, Calendar, Book, Utensils, Activity, Car, Music, Camera, Gamepad } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('推荐');

  const tabs = ['推荐', '学习', '生活', '兴趣'];

  const recommendedUsers = [
    {
      id: 1,
      name: '小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20man%20headshot%20friendly%20smile&image_size=square',
      age: 22,
      distance: '1.2km',
      interests: ['健身', '摄影', '旅行'],
      matchRate: 95,
    },
    {
      id: 2,
      name: '小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20woman%20headshot%20friendly%20smile&image_size=square',
      age: 20,
      distance: '2.5km',
      interests: ['读书', '音乐', '电影'],
      matchRate: 88,
    },
    {
      id: 3,
      name: '小刚',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20man%20headshot%20glasses%20friendly&image_size=square',
      age: 23,
      distance: '3.1km',
      interests: ['编程', '游戏', '篮球'],
      matchRate: 92,
    },
  ];

  const sceneEntrances = [
    { icon: <Book />, label: '学习搭子', color: 'bg-blue-100 text-blue-600' },
    { icon: <Utensils />, label: '饭搭子', color: 'bg-orange-100 text-orange-600' },
    { icon: <Activity />, label: '运动搭子', color: 'bg-green-100 text-green-600' },
    { icon: <Car />, label: '通勤搭子', color: 'bg-purple-100 text-purple-600' },
    { icon: <Music />, label: '音乐搭子', color: 'bg-pink-100 text-pink-600' },
    { icon: <Camera />, label: '摄影搭子', color: 'bg-yellow-100 text-yellow-600' },
    { icon: <Gamepad />, label: '游戏搭子', color: 'bg-indigo-100 text-indigo-600' },
    { icon: <Calendar />, label: '活动搭子', color: 'bg-red-100 text-red-600' },
  ];

  const nearbyEvents = [
    {
      id: 1,
      title: '周末读书会',
      time: '周六 14:00',
      location: '咖啡馆',
      participants: 12,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=book%20club%20meeting%20cozy%20cafe&image_size=landscape_4_3',
    },
    {
      id: 2,
      title: '户外徒步',
      time: '周日 09:00',
      location: '森林公园',
      participants: 8,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hiking%20group%20outdoor%20nature&image_size=landscape_4_3',
    },
    {
      id: 3,
      title: '摄影交流',
      time: '周五 19:00',
      location: '艺术区',
      participants: 15,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=photography%20workshop%20art%20district&image_size=landscape_4_3',
    },
  ];

  return (
    <div className="pt-16 pb-20">
      {/* 顶部标签 */}
      <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${activeTab === tab ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 智能匹配推荐 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">智能推荐</h2>
          <button className="text-sm text-purple-600 flex items-center">
            更多 <Search className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4">
          {recommendedUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center">
              <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full object-cover" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <h3 className="font-medium text-gray-800">{user.name}</h3>
                    <span className="ml-2 text-xs text-gray-500">{user.age}岁</span>
                    <span className="ml-2 text-xs text-gray-400">{user.distance}</span>
                  </div>
                  <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                    匹配度 {user.matchRate}%
                  </div>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {user.interests.map((interest, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 场景搭子入口 */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">场景搭子</h2>
        <div className="grid grid-cols-4 gap-4">
          {sceneEntrances.map((scene, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full ${scene.color} flex items-center justify-center mb-2`}>
                {scene.icon}
              </div>
              <span className="text-xs text-gray-600">{scene.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 活动推荐 */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">附近活动</h2>
          <button className="text-sm text-purple-600 flex items-center">
            更多 <Calendar className="ml-1 h-4 w-4" />
          </button>
        </div>
        <div className="space-y-4">
          {nearbyEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">{event.title}</h3>
                <div className="flex items-center text-xs text-gray-500 mb-2">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>{event.time}</span>
                  <span className="mx-2">•</span>
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{event.participants}人参与</span>
                  <button className="text-sm text-purple-600 font-medium">立即报名</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}