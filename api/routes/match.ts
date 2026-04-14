/**
 * This is a match API route demo.
 * Handle user matching, recommendation, etc.
 */
import { Router, type Request, type Response } from 'express'
import supabase from '../supabase'

const router = Router()

/**
 * Get Recommended Matches
 * GET /api/match/recommend
 */
router.get('/recommend', async (req: Request, res: Response): Promise<void> => {
  try {
    // 模拟推荐匹配数据
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
    ]

    res.status(200).json({ data: recommendedUsers })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * Scene-based Matching
 * POST /api/match/scene
 */
router.post('/scene', async (req: Request, res: Response): Promise<void> => {
  try {
    const { scene, filters } = req.body

    if (!scene) {
      res.status(400).json({ error: 'Missing scene parameter' })
      return
    }

    // 模拟场景搭子匹配数据
    const matchedUsers = [
      {
        id: 1,
        name: '场景匹配用户1',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square',
        age: 22,
        distance: '1.5km',
        matchRate: 92,
        interests: ['学习', '阅读', '健身'],
        description: `寻找${scene}搭子`
      },
      {
        id: 2,
        name: '场景匹配用户2',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square',
        age: 21,
        distance: '2.0km',
        matchRate: 88,
        interests: ['学习', '音乐', '旅行'],
        description: `寻找${scene}搭子`
      }
    ]

    res.status(200).json({ data: matchedUsers })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * Interest-based Matching
 * POST /api/match/interest
 */
router.post('/interest', async (req: Request, res: Response): Promise<void> => {
  try {
    const { interests } = req.body

    if (!interests || !Array.isArray(interests)) {
      res.status(400).json({ error: 'Missing interests parameter' })
      return
    }

    // 模拟兴趣匹配数据
    const matchedUsers = [
      {
        id: 1,
        name: '兴趣匹配用户1',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square',
        age: 23,
        distance: '1.8km',
        matchRate: 94,
        interests: [...interests, '音乐', '旅行'],
        description: '兴趣相投的朋友'
      },
      {
        id: 2,
        name: '兴趣匹配用户2',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20asian%20person%20profile%20photo&image_size=square',
        age: 22,
        distance: '2.2km',
        matchRate: 90,
        interests: [...interests, '健身', '电影'],
        description: '兴趣相投的朋友'
      }
    ]

    res.status(200).json({ data: matchedUsers })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * Get Match History
 * GET /api/match/history
 */
router.get('/history', async (req: Request, res: Response): Promise<void> => {
  try {
    // 模拟匹配历史数据
    const matchHistory = [
      {
        id: 1,
        userId: 1,
        targetUserId: 2,
        matchType: '场景搭子',
        matchScore: 95,
        status: 'success',
        createdAt: '2026-04-10T10:00:00Z'
      },
      {
        id: 2,
        userId: 1,
        targetUserId: 3,
        matchType: '兴趣匹配',
        matchScore: 90,
        status: 'success',
        createdAt: '2026-04-08T15:30:00Z'
      }
    ]

    res.status(200).json({ data: matchHistory })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router