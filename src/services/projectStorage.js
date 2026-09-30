const PROJECTS_STORAGE_KEY = 'nesta_user_projects';

export const projectStorage = {
  getProjects(userEmail = 'demo@nesta.dev') {
    try {
      const all = localStorage.getItem(PROJECTS_STORAGE_KEY);
      if (!all) {
        // Seed with sample initial projects for great first-time impression
        const defaultProjects = [
          {
            id: 'proj-1',
            name: 'Nova Analytics Cloud',
            userEmail: 'demo@nesta.dev',
            frontend: { id: 'react', name: 'React 19', category: 'Client SPA' },
            backend: { id: 'fastapi', name: 'FastAPI', category: 'Python' },
            template: { id: 'saas-nova', name: 'Nova SaaS Platform', category: 'SaaS & Tech', accentColor: '#FACC15' },
            status: 'Live',
            deployedPlatform: 'Vercel',
            liveUrl: 'https://nova-analytics.vercel.app',
            repoUrl: 'https://github.com/alexrivera/nova-analytics',
            createdAt: '2026-09-28T14:30:00.000Z',
            lastUpdated: '2 hours ago',
            views: '18.4k',
            health: '100%'
          },
          {
            id: 'proj-2',
            name: 'Krypton Treasury Engine',
            userEmail: 'demo@nesta.dev',
            frontend: { id: 'nextjs', name: 'Next.js 15', category: 'Fullstack SSR' },
            backend: { id: 'springboot', name: 'Spring Boot 3', category: 'Java' },
            template: { id: 'fintech-krypton', name: 'Krypton Pay & Banking', category: 'Fintech', accentColor: '#10B981' },
            status: 'Live',
            deployedPlatform: 'Railway',
            liveUrl: 'https://krypton-pay.up.railway.app',
            repoUrl: 'https://github.com/alexrivera/krypton-treasury',
            createdAt: '2026-09-25T09:15:00.000Z',
            lastUpdated: '1 day ago',
            views: '42.1k',
            health: '99.9%'
          }
        ];
        localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(defaultProjects));
        return defaultProjects.filter(p => p.userEmail.toLowerCase() === userEmail.toLowerCase());
      }
      const parsed = JSON.parse(all);
      return parsed.filter(p => p.userEmail?.toLowerCase() === userEmail.toLowerCase());
    } catch {
      return [];
    }
  },

  saveProject(project) {
    try {
      const all = JSON.parse(localStorage.getItem(PROJECTS_STORAGE_KEY) || '[]');
      const newProj = {
        id: project.id || 'proj-' + Date.now(),
        createdAt: new Date().toISOString(),
        lastUpdated: 'Just now',
        views: '1',
        health: '100%',
        ...project,
      };
      const existingIdx = all.findIndex(p => p.id === newProj.id);
      if (existingIdx >= 0) {
        all[existingIdx] = newProj;
      } else {
        all.unshift(newProj);
      }
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(all));
      return newProj;
    } catch (err) {
      console.error('Failed to save project:', err);
      return project;
    }
  },

  deleteProject(projectId) {
    try {
      const all = JSON.parse(localStorage.getItem(PROJECTS_STORAGE_KEY) || '[]');
      const filtered = all.filter(p => p.id !== projectId);
      localStorage.setItem(PROJECTS_STORAGE_KEY, JSON.stringify(filtered));
      return filtered;
    } catch (err) {
      console.error('Failed to delete project:', err);
      return [];
    }
  }
};
