import { useState } from 'react';
import { HelpCircle, Briefcase, Share2, Plus, MapPin, Clock, User, Star } from 'lucide-react';

export default function Community() {
  const [activeTab, setActiveTab] = useState('help');

  const tabs = [
    { id: 'help', label: '求助', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'skill', label: '技能交换', icon: <Briefcase className="h-5 w-5" /> },
    { id: 'resource', label: '资源共享', icon: <Share2 className="h-5 w-5" /> }
  ];

  const helpRequests = [
    {
      id: 1,
      title: '需要帮忙取快递',
      description: '今天下午不在家，需要有人帮忙取一下快递，放在门口即可',
      location: '朝阳区望京SOHO',
      time: '2小时前',
      user: '张三',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo&image_size=square',
      category: '日常帮助'
    },
    {
      id: 2,
      title: '数学题求助',
      description: '高等数学微积分部分的题目不太懂，希望有人能讲解一下',
      location: '海淀区清华大学',
      time: '4小时前',
      user: '李四',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      category: '技能求助'
    }
  ];

  const skillOffers = [
    {
      id: 1,
      title: '摄影教学',
      description: '专业摄影师，提供基础摄影技巧教学，包括构图、光线等',
      price: '50元/小时',
      user: '王五',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo%20glasses&image_size=square',
      rating: 4.8
    },
    {
      id: 2,
      title: '英语口语练习',
      description: '美国留学归来，提供英语口语练习和纠正发音',
      price: '30元/小时',
      user: '赵六',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      rating: 4.5
    }
  ];

  const resources = [
    {
      id: 1,
      title: '闲置书籍',
      description: '一些闲置的计算机科学书籍，包括编程、算法等',
      location: '西城区西单',
      user: '孙七',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo&image_size=square',
      type: '物品共享'
    },
    {
      id: 2,
      title: '共享工作空间',
      description: '家里有一个空房间，可以作为临时工作空间使用',
      location: '丰台区丽泽桥',
      user: '周八',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      type: '空间共享'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">互助社区</h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
          <Plus className="h-4 w-4 mr-1" />
          发布
        </button>
      </div>

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

      {/* 求助 */}
      {activeTab === 'help' && (
        <div className="space-y-4">
          {helpRequests.map((request) => (
            <div key={request.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <img src={request.avatar} alt={request.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-800">{request.title}</h3>
                      <span className="ml-2 bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded-full">
                        {request.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                    <div className="flex items-center mt-3 text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{request.location}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{request.time}</span>
                      <span className="mx-2">•</span>
                      <User className="h-3 w-3 mr-1" />
                      <span>{request.user}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                  帮助
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 技能交换 */}
      {activeTab === 'skill' && (
        <div className="space-y-4">
          {skillOffers.map((skill) => (
            <div key={skill.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <img src={skill.avatar} alt={skill.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-800">{skill.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{skill.description}</p>
                    <div className="flex items-center mt-3">
                      <span className="text-purple-600 font-medium">{skill.price}</span>
                      <div className="ml-4 flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-1" />
                        <span className="text-sm text-gray-600">{skill.rating}</span>
                      </div>
                      <span className="ml-4 text-xs text-gray-500">{skill.user}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                  联系
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 资源共享 */}
      {activeTab === 'resource' && (
        <div className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex justify-between items-start">
                <div className="flex items-start">
                  <img src={resource.avatar} alt={resource.user} className="w-10 h-10 rounded-full object-cover" />
                  <div className="ml-3">
                    <div className="flex items-center">
                      <h3 className="font-semibold text-gray-800">{resource.title}</h3>
                      <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-0.5 rounded-full">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                    <div className="flex items-center mt-3 text-xs text-gray-500">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{resource.location}</span>
                      <span className="mx-2">•</span>
                      <User className="h-3 w-3 mr-1" />
                      <span>{resource.user}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                  借用
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

