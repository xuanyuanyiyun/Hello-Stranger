import { useState } from 'react';
import { BookOpen, Utensils, Activity, Users, Brain, Gamepad, Filter, MapPin, Star } from 'lucide-react';

export default function Match() {
  const [activeTab, setActiveTab] = useState('scene');

  const tabs = [
    { id: 'scene', label: '场景搭子', icon: <Users className="h-5 w-5" /> },
    { id: 'ai', label: 'AI智能匹配', icon: <Brain className="h-5 w-5" /> },
    { id: 'game', label: '兴趣匹配游戏', icon: <Gamepad className="h-5 w-5" /> }
  ];

  const sceneCategories = [
    {
      id: 'study',
      title: '学习搭子',
      icon: <BookOpen className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600',
      options: ['同专业同学', '学习计划同步', '难题互助', '虚拟自习室', '资料共享']
    },
    {
      id: 'life',
      title: '生活搭子',
      icon: <Utensils className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600',
      options: ['饭搭子', '运动搭子', '通勤搭子']
    },
    {
      id: 'interest',
      title: '兴趣搭子',
      icon: <Star className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600',
      options: ['垂直兴趣圈', '活动组局', '技能交换', '同城漫游']
    }
  ];

  const aiMatchFactors = [
    { name: '地理位置', weight: 30, description: '距离越近权重越高' },
    { name: '兴趣重合', weight: 25, description: '共同兴趣数量与深度' },
    { name: '信用评分', weight: 20, description: '互助信用+社交信用' },
    { name: '行为相似', weight: 15, description: '在线时间、互动模式' },
    { name: '需求匹配', weight: 10, description: '当前需求与对方能力' }
  ];

  const matchGames = [
    {
      id: 1,
      title: '电波同频',
      description: '通过选择题匹配相似兴趣用户',
      participants: 128,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=social%20matching%20game%20interface&image_size=landscape_4_3'
    },
    {
      id: 2,
      title: '默契考验',
      description: '双人答题测试默契度',
      participants: 96,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=quiz%20game%20interface&image_size=landscape_4_3'
    },
    {
      id: 3,
      title: '兴趣图谱',
      description: '可视化展示双方兴趣重合度',
      participants: 84,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interest%20graph%20visualization&image_size=landscape_4_3'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">智能匹配中心</h1>

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

      {/* 场景搭子匹配 */}
      {activeTab === 'scene' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">场景分类</h2>
              <button className="flex items-center text-sm text-purple-600">
                <Filter className="h-4 w-4 mr-1" />
                筛选
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {sceneCategories.map((category) => (
                <div key={category.id} className="bg-gray-50 rounded-lg p-4">
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-3`}>
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <div className="space-y-2">
                    {category.options.map((option, index) => (
                      <button key={index} className="w-full text-left text-sm text-gray-600 hover:text-purple-600 transition-colors py-1">
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 推荐匹配 */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">推荐搭子</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square`} 
                    alt="用户头像" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">用户{item}</h3>
                      <span className="text-sm text-green-600">{item * 0.5}km</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full mr-2">
                        匹配度 {90 - item * 2}%
                      </div>
                      <span className="text-xs text-gray-600">{sceneCategories[item % 3].title}</span>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                    匹配
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* AI智能匹配 */}
      {activeTab === 'ai' && (
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">匹配算法</h2>
            <div className="space-y-3">
              {aiMatchFactors.map((factor, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">{factor.name}</span>
                    <span className="text-sm text-gray-600">{factor.weight}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" 
                      style={{ width: `${factor.weight}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">AI推荐</h2>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <img 
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square`} 
                    alt="用户头像" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-800">AI推荐用户{item}</h3>
                      <span className="text-sm text-purple-600">AI匹配</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full mr-2">
                        匹配度 {95 - item * 3}%
                      </div>
                      <span className="text-xs text-gray-600">基于行为数据</span>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                    匹配
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 兴趣匹配游戏 */}
      {activeTab === 'game' && (
        <div className="space-y-4">
          {matchGames.map((game) => (
            <div key={game.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <img src={game.image} alt={game.title} className="w-1/3 h-32 object-cover" />
                <div className="p-4 flex-1">
                  <h3 className="font-semibold text-gray-800">{game.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{game.description}</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-sm text-gray-600">{game.participants} 人参与</span>
                    <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm">
                      开始
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}