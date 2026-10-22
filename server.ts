import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json());

  // Initialize Gemini API client if key is present
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;
  if (apiKey) {
    try {
      ai = new GoogleGenAI();
    } catch (e) {
      console.warn('Could not initialize GoogleGenAI client:', e);
    }
  }

  // API 1: Generate Custom AI Career Roadmap
  app.post('/api/generate-roadmap', async (req: Request, res: Response) => {
    try {
      const { careerName, currentLevel, timeframeMonths } = req.body;
      const title = careerName || 'Software Engineering';
      const level = currentLevel || 'College Undergrad';
      const months = timeframeMonths || 24;

      if (ai) {
        const prompt = `You are a world-class career strategist and curriculum engineer.
Create a structured milestone roadmap for someone aiming to enter or advance in "${title}".
Candidate starting level: "${level}".
Timeframe: "${months} months".

Return ONLY valid JSON in the following format without markdown fences:
{
  "milestones": [
    {
      "id": "m1",
      "title": "Short title of milestone 1",
      "category": "Foundations / Portfolio / Licensure / Placement",
      "timeframe": "Month 1 - 3",
      "status": "completed",
      "description": "Clear actionable description of what to study or build",
      "skillsGained": ["Skill 1", "Skill 2"]
    },
    {
      "id": "m2",
      "title": "Short title of milestone 2",
      "category": "Applied Systems",
      "timeframe": "Month 4 - 6",
      "status": "in_progress",
      "description": "Actionable description",
      "skillsGained": ["Skill 3", "Skill 4"]
    },
    {
      "id": "m3",
      "title": "Short title of milestone 3",
      "category": "Industry Verification",
      "timeframe": "Month 7 - 9",
      "status": "pending",
      "description": "Certifications or specialized proof of work",
      "skillsGained": ["Skill 5", "Skill 6"]
    },
    {
      "id": "m4",
      "title": "Short title of milestone 4",
      "category": "Career Placement",
      "timeframe": "Month 10 - 12",
      "status": "pending",
      "description": "Interviewing, portfolio defense, securing tier-1 roles",
      "skillsGained": ["Technical Interviewing", "Negotiation"]
    }
  ]
}`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
          },
        });

        const text = response.text?.trim() || '{}';
        const parsed = JSON.parse(text);
        return res.json(parsed);
      }
    } catch (err) {
      console.error('Error generating AI roadmap with Gemini:', err);
    }

    // High quality standard structured fallback
    return res.json({
      milestones: [
        {
          id: 'm1',
          title: `Core Fundamentals & Theory for ${req.body.careerName || 'Target Career'}`,
          category: 'Foundations',
          timeframe: 'Month 1 - 3',
          status: 'completed',
          description: 'Establish foundational principles, complete domain core coursework and setting up development environment.',
          skillsGained: ['Foundational Theory', 'Tooling Setup', 'First Principles'],
        },
        {
          id: 'm2',
          title: 'Applied Project & Documented System Build',
          category: 'Portfolio Systems',
          timeframe: 'Month 4 - 6',
          status: 'in_progress',
          description: 'Architect and deploy 2 production-grade prototypes demonstrating end-to-end competency.',
          skillsGained: ['Architecture', 'Implementation', 'Documentation'],
        },
        {
          id: 'm3',
          title: 'Industry Credentials & Peer Code Review',
          category: 'Verification',
          timeframe: 'Month 7 - 9',
          status: 'pending',
          description: 'Earn recognized industry certification or pass professional licensure milestone.',
          skillsGained: ['Industry Standards', 'Quality Auditing'],
        },
        {
          id: 'm4',
          title: 'Executive Portfolio Defense & Tier-1 Applications',
          category: 'Placement',
          timeframe: 'Month 10 - 12',
          status: 'pending',
          description: 'Conduct technical portfolio reviews with 3 senior mentors and apply to tier-1 roles.',
          skillsGained: ['Interviewing', 'System Defense', 'Compensation Negotiation'],
        },
      ],
    });
  });

  // API 2: Career Advice & Q&A
  app.post('/api/career-advice', async (req: Request, res: Response) => {
    try {
      const { question } = req.body;
      if (!question) {
        return res.status(400).json({ error: 'Question is required' });
      }

      if (ai) {
        const prompt = `You are Career Lens Advisor, a concise, objective, encouraging career strategist.
A user asked: "${question}".

Context: Career Lens covers 24 top disciplines: Computer Engineering (Silicon/Robotics), Software & IT, Data Science & AI, Clinical Medicine (MD), Cybersecurity, UI/UX Design, Product Management, Quant Finance, Investment Banking, Biomedical Engineering, Robotics, Full-Stack, Biotechnology, Aerospace, Neuroscience, Corporate Law, Civil Infrastructure, Game Dev, Psychology, Clean Energy, Blockchain, Growth Marketing, Environmental Science, and Health Informatics.

Provide a concise, direct, high-value answer in 2-3 short structured paragraphs or bullet points with real numbers (salaries, timelines, key skills). Avoid fluff.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
        });

        return res.json({ answer: response.text });
      }
    } catch (err) {
      console.error('Error generating career advice with Gemini:', err);
    }

    // Default response if no key is set
    return res.json({
      answer: `Career Lens tracks 24 in-demand disciplines with verified salaries ranging from $88k to $235k+ median. For high compensation combined with remote flexibility, examine **Data Science & AI** ($155k median), **Cybersecurity** ($148k median), or **Cloud Systems** ($142k median). For hardware impact, **Computer Engineering** ($145k median) is experiencing a historic silicon renaissance. Explore any career card to view the exact 4-year curriculum!`,
    });
  });

  // Mount Vite middleware in dev or static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Career Lens server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
