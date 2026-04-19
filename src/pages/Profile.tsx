import { useState } from 'react';
import { User, Settings, CreditCard, BarChart2, Edit, Camera, Star, Award, Calendar, Activity, TrendingUp } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: '个人资料', icon: <User className="h-5 w-5" /> },
    { id: 'credit', label: '信用评分', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'report', label: '社交报告', icon: <BarChart2 className="h-5 w-5" /> }
  ];

  const userProfile = {
    name: '用户昵称',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square',
    bio: '喜欢旅行、读书和运动，希望认识更多志同道合的朋友',
    interests: ['旅行', '读书', '运动', '音乐', '美食'],
    skills: [
      { name: '摄影', level: '中级' },
      { name: '烹饪', level: '初级' },
      { name: '编程', level: '中级' }
    ],
    location: '北京市朝阳区',
    age: 25,
    gender: '男'
  };

  const creditScore = {
    score: 850,
    level: '优秀',
    factors: [
      { name: '行为信用', score: 90 },
      { name: '技能信用', score: 85 },
      { name: '社交信用', score: 80 }
    ]
  };

  const socialReport = {
    weekly: {
      messages: 120,
      matches: 5,
      activities: 3,
      hours: 15
    },
    trends: [
      { month: '1月', score: 75 },
      { month: '2月', score: 80 },
      { month: '3月', score: 85 },
      { month: '4月', score: 90 }
    ],
    suggestions: [
      '增加与不同兴趣用户的互动',
      '尝试参与更多线下活动',
      '提高消息回复速度'
    ]
  };

  return (
    <div className="pt-20 pb-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">个人中心</h1>

      {/* 个人信息头部 */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative">
              <img src={userProfile.avatar} alt={userProfile.name} className="w-20 h-20 rounded-full object-cover" />
              <button className="absolute bottom-0 right-0 bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">{userProfile.name}</h2>
              <p className="text-gray-600 mt-1">{userProfile.location} · {userProfile.age}岁 · {userProfile.gender}</p>
              <p className="text-sm text-gray-600 mt-2">{userProfile.bio}</p>
            </div>
          </div>
          <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
            <Edit className="h-4 w-4 mr-1" />
            编辑资料
          </button>
        </div>

        {/* 兴趣标签 */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">兴趣标签</h3>
          <div className="flex flex-wrap gap-2">
            {userProfile.interests.map((interest, index) => (
              <span key={index} className="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
                {interest}
              </span>
            ))}
          </div>
        </div>

        {/* 技能认证 */}
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">技能认证</h3>
          <div className="flex flex-wrap gap-3">
            {userProfile.skills.map((skill, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg px-3 py-2 flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-2" />
                <div>
                  <span className="font-medium text-gray-800">{skill.name}</span>
                  <span className="text-xs text-gray-500 ml-2">{skill.level}</span>
                </div>
              </div>
            ))}
            <button className="bg-gray-100 border border-dashed border-gray-300 rounded-lg px-3 py-2 flex items-center text-gray-600 hover:bg-gray-50 transition-colors">
              <Edit className="h-4 w-4 mr-2" />
              添加技能
            </button>
          </div>
        </div>
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

      {/* 信用评分 */}
      {activeTab === 'credit' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">信用评分</h2>
            <span className="text-sm text-gray-600">更新于 2026-04-14</span>
          </div>
          
          <div className="flex flex-col items-center mb-8">
            <div className="relative w-32 h-32">
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl font-bold text-purple-600">{creditScore.score}</span>
                  <p className="text-sm text-gray-600">{creditScore.level}</p>
                </div>
              </div>
              {/* 模拟进度环 */}
              <div className="absolute inset-0 rounded-full border-4 border-t-purple-600 border-r-purple-600 border-b-purple-600 border-l-gray-200 transform rotate-45"></div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-700">信用构成</h3>
            {creditScore.factors.map((factor, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600">{factor.name}</span>
                  <span className="text-sm font-medium text-gray-800">{factor.score}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2 rounded-full" 
                    style={{ width: `${factor.score}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h3 className="text-sm font-medium text-purple-800 mb-2">信用提升建议</h3>
            <ul className="text-sm text-purple-700 space-y-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                完成更多互助任务，提高行为信用
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                及时回复消息，保持良好的社交互动
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                参与技能认证，提升技能信用
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* 社交报告 */}
      {activeTab === 'report' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">社交报告</h2>
            <span className="text-sm text-gray-600">本周报告</span>
          </div>

          {/* 周度数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{socialReport.weekly.messages}</p>
              <p className="text-sm text-gray-600">消息数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{socialReport.weekly.matches}</p>
              <p className="text-sm text-gray-600">匹配数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{socialReport.weekly.activities}</p>
              <p className="text-sm text-gray-600">活动数</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="flex justify-center mb-2">
                <Activity className="h-6 w-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{socialReport.weekly.hours}</p>
              <p className="text-sm text-gray-600">在线时长</p>
            </div>
          </div>

          {/* 社交趋势 */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-700 mb-4">社交趋势</h3>
            <div className="h-40 bg-gray-50 rounded-lg p-4">
              {/* 模拟趋势图 */}
              <div className="flex justify-between items-end h-full">
                {socialReport.trends.map((trend, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="bg-gradient-to-t from-purple-600 to-indigo-600 rounded-t-lg" 
                      style={{ height: `${trend.score}%`, width: '30px' }}
                    ></div>
                    <span className="text-xs text-gray-600 mt-2">{trend.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 改进建议 */}
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-medium text-blue-800 mb-2 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              改进建议
            </h3>
            <ul className="text-sm text-blue-700 space-y-2">
              {socialReport.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

