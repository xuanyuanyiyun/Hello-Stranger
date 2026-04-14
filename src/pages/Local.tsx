import { useState } from 'react';
import { Map, Calendar, Store, MapPin, Clock, Users, Star, Filter, Plus } from 'lucide-react';

export default function Local() {
  const [activeTab, setActiveTab] = useState('nearby');

  const tabs = [
    { id: 'nearby', label: '附近用户', icon: <Map className="h-5 w-5" /> },
    { id: 'event', label: '线下活动', icon: <Calendar className="h-5 w-5" /> },
    { id: 'business', label: '本地商家', icon: <Store className="h-5 w-5" /> }
  ];

  const nearbyUsers = [
    {
      id: 1,
      name: '小明',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo&image_size=square',
      distance: '500m',
      interest: '篮球',
      status: '在线'
    },
    {
      id: 2,
      name: '小红',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20woman%20profile%20photo&image_size=square',
      distance: '800m',
      interest: '阅读',
      status: '在线'
    },
    {
      id: 3,
      name: '小李',
      avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20man%20profile%20photo%20glasses&image_size=square',
      distance: '1.2km',
      interest: '编程',
      status: '离线'
    }
  ];

  const events = [
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
    },
    {
      id: 3,
      title: '咖啡品鉴会',
      time: '周五 19:00',
      location: '星巴克咖啡',
      participants: 6,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coffee%20tasting%20event&image_size=landscape_4_3'
    }
  ];

  const businesses = [
    {
      id: 1,
      name: '星巴克咖啡',
      address: '朝阳区建国路88号',
      distance: '500m',
      rating: 4.8,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=starbucks%20coffee%20shop&image_size=landscape_4_3',
      offer: '买一送一'
    },
    {
      id: 2,
      name: '肯德基',
      address: '朝阳区望京SOHO',
      distance: '800m',
      rating: 4.5,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=kfc%20restaurant&image_size=landscape_4_3',
      offer: '套餐优惠'
    },
    {
      id: 3,
      name: '万达影城',
      address: '朝阳区万达广场',
      distance: '1.2km',
      rating: 4.6,
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=movie%20theater&image_size=landscape_4_3',
      offer: '会员折扣'
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">本地化服务</h1>
        <button className="flex items-center text-purple-600 hover:text-purple-700 transition-colors">
          <Filter className="h-4 w-4 mr-1" />
          筛选
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

      {/* 附近用户 */}
      {activeTab === 'nearby' && (
        <div className="space-y-4">
          {nearbyUsers.map((user) => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center">
              <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">{user.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${user.status === '在线' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                    {user.status}
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <MapPin className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-sm text-gray-600">{user.distance}</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm text-gray-600">兴趣：{user.interest}</span>
                </div>
              </div>
              <button className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-sm">
                匹配
              </button>
            </div>
          ))}
        </div>
      )}

      {/* 线下活动 */}
      {activeTab === 'event' && (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <div className="flex items-center mt-2 text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{event.time}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-sm text-gray-600">{event.participants} 人参加</span>
                  <button className="bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm">
                    报名
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button className="bg-white rounded-xl shadow-sm p-4 flex items-center justify-center text-purple-600 border border-dashed border-purple-300">
            <Plus className="h-5 w-5 mr-2" />
            创建活动
          </button>
        </div>
      )}

      {/* 本地商家 */}
      {activeTab === 'business' && (
        <div className="space-y-4">
          {businesses.map((business) => (
            <div key={business.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="flex">
                <img src={business.image} alt={business.name} className="w-1/3 h-32 object-cover" />
                <div className="p-4 flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800">{business.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-gray-600">{business.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{business.address}</p>
                  <div className="flex items-center mt-2">
                    <MapPin className="h-4 w-4 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-600">{business.distance}</span>
                  </div>
                  {business.offer && (
                    <div className="mt-2 bg-orange-100 text-orange-800 text-xs px-2 py-0.5 rounded-full inline-block">
                      {business.offer}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

