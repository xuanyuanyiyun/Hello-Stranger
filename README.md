# 你好陌生人 APP

一款基于智能匹配的社交应用，帮助用户找到志同道合的搭子，建立真实的社交网络。

## 项目简介

"你好陌生人"是一款专注于场景化社交的移动应用，通过AI智能匹配算法，为用户推荐最适合的社交搭子。无论是学习、生活、运动还是兴趣爱好，都能找到合适的伙伴。

## 核心功能

### 1. 智能匹配中心
- **场景搭子匹配**：学习搭子、生活搭子、兴趣搭子
- **AI智能匹配引擎**：基于行为数据、情绪状态、多维度匹配权重

### 2. AI社交赋能系统
- **AI破冰助手**：智能开场白生成、话题推荐、沟通质量分析
- **社交能力训练**：社交场景模拟、社交课程体系、个性化社交报告

### 3. 游戏化社交场景
- **轻游戏互动**：语音派对房、社交推理游戏、兴趣匹配游戏
- **任务成就系统**：社交任务、成长等级、虚拟经济

### 4. 视频化真实社交
- **视频验证与互动**：轻视频验证、AR增强互动、直播式社交

### 5. 本地化深度服务
- **LBS精准服务**：超本地社交圈、线下活动整合、本地商家合作

### 6. 互助社区生态系统
- **多层次互助体系**：即时求助系统、技能交换市场、资源共享网络
- **社区治理体系**：信用评价系统、社区自治机制、安全与保障

### 7. 智能安全与隐私保护
- **多层安全防护**：身份验证体系、实时风险监控、隐私保护系统

### 8. 数据分析与个性化服务
- **智能分析系统**：社交行为分析、个性化推荐、可视化报告

## 技术栈

### 前端
- React 18 + TypeScript
- Tailwind CSS
- Zustand (状态管理)
- React Router DOM
- Lucide React (图标库)

### 后端
- Express.js
- Supabase (认证和数据库)
- JWT 认证
- RESTful API

### 开发工具
- Vite (构建工具)
- ESLint (代码质量)
- Nodemon (开发服务器)
- Concurrently (并行运行前端和后端)

## 安装与运行

### 前提条件
- Node.js 18+
- npm 或 yarn

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

这将启动两个服务器：
- 前端服务器：http://localhost:5173/
- 后端服务器：http://localhost:3001/

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
├── api/              # 后端API
│   ├── routes/       # API路由
│   ├── app.ts        # Express应用
│   ├── server.ts     # 服务器入口
│   └── supabase.ts   # Supabase配置
├── src/              # 前端代码
│   ├── components/   # 组件
│   ├── pages/        # 页面
│   ├── hooks/        # 自定义hooks
│   ├── lib/          # 工具函数
│   ├── App.tsx       # 应用入口
│   └── main.tsx      # 渲染入口
├── public/           # 静态资源
├── .trae/            # 项目文档
├── package.json      # 项目配置
└── README.md         # 项目说明
```

## 核心页面

- **首页**：智能匹配推荐、场景搭子入口、附近活动
- **匹配中心**：场景匹配、AI匹配、兴趣匹配游戏
- **聊天**：即时消息、AI破冰助手
- **社区**：求助、技能交换、资源共享
- **游戏**：语音派对房、社交推理游戏、任务成就
- **本地**：附近用户、线下活动、本地商家
- **个人资料**：用户信息、信用评分、社交报告
- **设置**：账号设置、应用设置、隐私设置

## API接口

### 认证API
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/logout` - 用户登出
- `GET /api/auth/user` - 获取用户信息

### 匹配API
- `GET /api/match/recommend` - 获取推荐用户
- `POST /api/match/scene` - 场景匹配
- `POST /api/match/interest` - 兴趣匹配
- `GET /api/match/history` - 获取匹配历史

### 安全API
- `POST /api/security/verify` - 身份验证
- `POST /api/security/privacy` - 更新隐私设置
- `POST /api/security/report` - 举报可疑活动
- `GET /api/security/status` - 获取安全状态

### AI API
- `POST /api/ai/icebreaker` - 生成破冰开场白
- `POST /api/ai/topic` - 推荐对话话题
- `POST /api/ai/analysis` - 分析沟通质量
- `POST /api/ai/match` - AI匹配用户

## 开发指南

### 代码规范
- 使用TypeScript类型定义
- 遵循ESLint规则
- 组件命名采用PascalCase
- 变量和函数命名采用camelCase

### 提交规范
- 提交信息使用中文描述
- 功能开发使用`feat:`前缀
-  bug修复使用`fix:`前缀
- 代码优化使用`refactor:`前缀

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系项目团队。

---

**你好陌生人，找到你的专属搭子！**