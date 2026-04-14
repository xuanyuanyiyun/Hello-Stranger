import { useState } from 'react';
import { Settings as SettingsIcon, User, Lock, Bell, Notifications, Shield, Privacy, HelpCircle, LogOut, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';

export default function Settings() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [privacy, setPrivacy] = useState(true);

  const settingsSections = [
    {
      title: '账号设置',
      items: [
        { icon: <User className="h-5 w-5" />, label: '个人资料', path: '/profile' },
        { icon: <Lock className="h-5 w-5" />, label: '账号安全', path: '#' },
        { icon: <Bell className="h-5 w-5" />, label: '通知设置', path: '#' }
      ]
    },
    {
      title: '应用设置',
      items: [
        { 
          icon: <Notifications className="h-5 w-5" />, 
          label: '推送通知', 
          type: 'toggle', 
          value: notifications, 
          onChange: setNotifications 
        },
        { 
          icon: <Shield className="h-5 w-5" />, 
          label: '深色模式', 
          type: 'toggle', 
          value: darkMode, 
          onChange: setDarkMode 
        },
        { 
          icon: <Privacy className="h-5 w-5" />, 
          label: '隐私保护', 
          type: 'toggle', 
          value: privacy, 
          onChange: setPrivacy 
        }
      ]
    },
    {
      title: '其他',
      items: [
        { icon: <HelpCircle className="h-5 w-5" />, label: '帮助中心', path: '#' },
        { icon: <SettingsIcon className="h-5 w-5" />, label: '关于我们', path: '#' },
        { icon: <LogOut className="h-5 w-5" />, label: '退出登录', path: '/login' }
      ]
    }
  ];

  return (
    <div className="pt-20 pb-20">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">设置</h1>

      <div className="space-y-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm">
            <div className="px-4 py-3 border-b border-gray-100">
              <h2 className="text-sm font-medium text-gray-500">{section.title}</h2>
            </div>
            <div>
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="px-4 py-3 border-b border-gray-100 last:border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="text-gray-600 mr-3">
                        {item.icon}
                      </div>
                      <span className="text-gray-800">{item.label}</span>
                    </div>
                    {item.type === 'toggle' ? (
                      <button 
                        className={`w-12 h-6 rounded-full flex items-center ${item.value ? 'bg-purple-600 justify-end' : 'bg-gray-300 justify-start'}`}
                        onClick={() => item.onChange(!item.value)}
                      >
                        <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
                      </button>
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}