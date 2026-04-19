/**
 * This is a user authentication API route demo.
 * Handle user registration, login, token management, etc.
 */
import { Router, type Request, type Response } from 'express'
import supabase from '../supabase'

const router = Router()

/**
 * User Registration
 * POST /api/auth/register
 */
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name, phone } = req.body

    if (!email || !password || !name) {
      res.status(400).json({ error: 'Missing required fields' })
      return
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          phone,
        },
      },
    })

    if (error) {
      res.status(400).json({ error: error.message })
      return
    }

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * User Login
 * POST /api/auth/login
 */
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.status(400).json({ error: 'Missing email or password' })
      return
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      res.status(401).json({ error: error.message })
      return
    }

    res.status(200).json({ data })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * User Logout
 * POST /api/auth/logout
 */
router.post('/logout', async (req: Request, res: Response): Promise<void> => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) {
      res.status(400).json({ error: error.message })
      return
    }

    res.status(200).json({ message: 'Logged out successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

/**
 * Get Current User
 * GET /api/auth/user
 */
router.get('/user', async (req: Request, res: Response): Promise<void> => {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      res.status(401).json({ error: error.message })
      return
    }

    res.status(200).json({ user })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
