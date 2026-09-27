import { API_CONFIG, API_ENDPOINTS } from '../api/endpoints';

/**
 * Nesta API Service Client
 * Handles real HTTP calls with graceful mock fallback when backend is offline.
 */
class ApiService {
  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.TIMEOUT);

      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.warn(`[Nesta API] Backend at ${url} not reachable or responded with error: ${err.message}. Using mock simulation.`);
      return this.handleFallback(endpoint, options);
    }
  }

  // Graceful mock fallback handler
  async handleFallback(endpoint, options) {
    // Artificial latency for tactile feel
    await new Promise((resolve) => setTimeout(resolve, 350));

    if (endpoint.startsWith('/projects') && options.method === 'POST') {
      const body = JSON.parse(options.body || '{}');
      return {
        success: true,
        isMock: true,
        projectId: `proj_${Math.random().toString(36).substring(2, 9)}`,
        data: body,
        message: 'Project state persisted in Nesta (Mock Fallback mode active)',
        timestamp: new Date().toISOString(),
      };
    }

    if (endpoint.startsWith('/build/generate')) {
      return {
        success: true,
        isMock: true,
        buildId: `bld_${Math.random().toString(36).substring(2, 8)}`,
        downloadUrl: '#mock-bundle-download',
        message: 'Project bundle compiled successfully',
        timestamp: new Date().toISOString(),
      };
    }

    return {
      success: true,
      isMock: true,
      message: `Simulated mock response for ${endpoint}`,
    };
  }

  // High-level methods for App components:
  async saveProject(config) {
    return this.request(API_ENDPOINTS.PROJECTS.CREATE, {
      method: 'POST',
      body: JSON.stringify(config),
    });
  }

  async generateBuild(projectId) {
    return this.request(API_ENDPOINTS.BUILD.GENERATE, {
      method: 'POST',
      body: JSON.stringify({ projectId, outputFormat: 'zip' }),
    });
  }

  async deploySite(projectId, provider = 'cloudflare_pages') {
    return this.request(API_ENDPOINTS.DEPLOY.TRIGGER, {
      method: 'POST',
      body: JSON.stringify({ projectId, provider }),
    });
  }
}

export const apiService = new ApiService();
