import { Link, useLocation } from 'react-router-dom';
import { Home, Users, MessageSquare, User, Compass } from 'lucide-react';

export default function BottomBar() {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: <Home />, label: '首页' },
    { path: '/match', icon: <Users />, label: '匹配' },
    { path: '/chat', icon: <MessageSquare />, label: '聊天' },
    { path: '/local', icon: <Compass />, label: '附近' },
    { path: '/profile', icon: <User />, label: '我的' },
  ];

  return (
    <footer className="bg-white shadow-lg fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-3 px-4 ${location.pathname === item.path ? 'text-purple-600' : 'text-gray-500'}`}
            >
              <div className={`${location.pathname === item.path ? 'text-purple-600' : 'text-gray-500'}`}>
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}