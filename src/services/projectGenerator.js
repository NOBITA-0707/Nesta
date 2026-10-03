import JSZip from 'jszip';

export async function generateProjectZip({ projectName, frontend, backend, template }) {
  const zip = new JSZip();
  const safeName = (projectName || 'nesta-app').toLowerCase().replace(/[^a-z0-9-_]/g, '-');
  const root = zip.folder(safeName);

  // 1. Root README.md
  root.file(
    'README.md',
    `# ${projectName || 'Nesta Generated App'}

Scaffolded with **Nesta App Builder** — High velocity web architecture.

## 🚀 Architecture Stack
- **Frontend Framework:** ${frontend?.name || 'React 19'} (${frontend?.category || 'Client SPA'})
- **Backend Engine:** ${backend?.name || 'Express.js'} (${backend?.category || 'Node.js'})
- **Themed UI Template:** ${template?.name || 'Nova SaaS Platform'} (${template?.category || 'SaaS'})

---

## 🛠️ Getting Started

### 1. Install Dependencies
\`\`\`bash
# Install frontend packages
npm install

# (Optional) If running backend in subfolder:
cd server && npm install && cd ..
\`\`\`

### 2. Configure Environment Variables
Create a \`.env\` file in the root directory:
\`\`\`env
VITE_API_URL=http://localhost:3000/api
VITE_PROJECT_NAME="${projectName || 'Nesta App'}"
PORT=3000
\`\`\`

### 3. Run Development Server
\`\`\`bash
# Start frontend
npm run dev

# In a separate terminal, start backend
npm run server
\`\`\`

---

## 📂 Project Structure
\`\`\`
├── src/
│   ├── components/         # ${template?.name || 'UI'} Components & Blocks
│   ├── templates/          # Themed layout & UI styles
│   ├── App.jsx             # Main Application Entry
│   └── main.jsx            # React root mount
├── server/
│   └── index.js            # ${backend?.name || 'Backend'} server endpoints
├── package.json
├── tailwind.config.js
└── vite.config.js
\`\`\`

Created on ${new Date().toLocaleDateString()} with Nesta.
`
  );

  // 2. package.json
  const packageJson = {
    name: safeName,
    private: true,
    version: '1.0.0',
    type: 'module',
    scripts: {
      dev: 'vite',
      build: 'vite build',
      preview: 'vite preview',
      server: 'node server/index.js'
    },
    dependencies: {
      react: '^19.0.0',
      'react-dom': '^19.0.0',
      'lucide-react': '^0.460.0'
    },
    devDependencies: {
      '@vitejs/plugin-react': '^4.3.0',
      autoprefixer: '^10.4.20',
      postcss: '^8.4.49',
      tailwindcss: '^3.4.15',
      vite: '^6.0.0'
    }
  };
  root.file('package.json', JSON.stringify(packageJson, null, 2));

  // 3. vite.config.js
  root.file(
    'vite.config.js',
    `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
});
`
  );

  // 4. tailwind.config.js
  root.file(
    'tailwind.config.js',
    `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '${template?.accentColor || '#FACC15'}',
      }
    },
  },
  plugins: [],
}
`
  );

  // 5. index.html
  root.file(
    'index.html',
    `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectName || 'Nesta App'} — ${template?.name || 'Web App'}</title>
  </head>
  <body class="bg-[#0f1117] text-white">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
  );

  // 6. Source folder & files
  const src = root.folder('src');

  src.file(
    'main.jsx',
    `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`
  );

  src.file(
    'index.css',
    `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #0f1117;
  color: #ffffff;
}
`
  );

  // App.jsx tailored to the chosen template
  src.file(
    'App.jsx',
    `import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Server, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#0d0f14] text-white flex flex-col font-sans">
      {/* Top Navigation */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-[#0d0f14]/80">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-black shadow-lg" style={{ backgroundColor: '${template?.accentColor || '#FACC15'}' }}>
            N
          </div>
          <span className="font-bold text-lg tracking-tight">${projectName || 'Nesta App'}</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono">${template?.name || 'Nova SaaS'}</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#specs" className="hover:text-white transition-colors">Stack Specs</a>
          <button className="px-4 py-1.5 rounded-xl font-bold text-xs text-black" style={{ backgroundColor: '${template?.accentColor || '#FACC15'}' }}>
            ${template?.demo?.primaryAction || 'Get Started'}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs mb-6 text-yellow-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>${frontend?.name || 'React 19'} + ${backend?.name || 'Express'} Architecture</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold max-w-3xl leading-tight mb-6">
          ${template?.demo?.heroHeading || 'Build and Scale Fast'}
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-8 leading-relaxed">
          ${template?.demo?.heroSubheading || 'Clean modular architecture scaffolded directly with Nesta.'}
        </p>

        <div className="flex items-center gap-4 mb-16">
          <button className="px-6 py-3 rounded-xl font-bold text-sm text-black flex items-center gap-2 shadow-xl hover:scale-105 transition-all" style={{ backgroundColor: '${template?.accentColor || '#FACC15'}' }}>
            <span>${template?.demo?.primaryAction || 'Explore Platform'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-5 py-3 rounded-xl font-medium text-sm text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
            ${template?.demo?.secondaryAction || 'Documentation'}
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          ${(template?.features || ['Instant Scaling', 'Secure Auth', 'Edge Ready']).map((feat, i) => `
          <div key={${i}} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all">
            <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-sm mb-4" style={{ color: '${template?.accentColor || '#FACC15'}' }}>
              ✓
            </div>
            <h3 className="font-bold text-white mb-2">${feat}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">Pre-configured with modern design tokens and optimized for production.</p>
          </div>
          `).join('')}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-xs text-slate-500">
        Built with Nesta App Builder • ${frontend?.name || 'Frontend'} + ${backend?.name || 'Backend'}
      </footer>
    </div>
  );
}
`
  );

  // 7. Backend Server Files
  const serverFolder = root.folder('server');

  if (backend?.id === 'fastapi') {
    serverFolder.file(
      'main.py',
      `from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="${projectName || 'Nesta App'} API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class HealthResponse(BaseModel):
    status: str
    engine: str
    project: str

@app.get("/api/health", response_model=HealthResponse)
async def health_check():
    return {
        "status": "Online",
        "engine": "FastAPI (Python)",
        "project": "${projectName || 'Nesta App'}"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=True)
`
    );
    serverFolder.file('requirements.txt', 'fastapi>=0.110.0\nuvicorn>=0.28.0\npydantic>=2.6.0\n');
  } else if (backend?.id === 'springboot') {
    serverFolder.file(
      'Application.java',
      `package com.nesta.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @GetMapping("/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "Online",
            "engine", "Spring Boot 3",
            "project", "${projectName || 'Nesta App'}"
        );
    }
}
`
    );
  } else if (backend?.id === 'gofiber') {
    serverFolder.file(
      'main.go',
      `package main

import (
    "github.com/gofiber/fiber/v2"
    "github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
    app := fiber.New()
    app.Use(cors.New())

    app.Get("/api/health", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "status":  "Online",
            "engine":  "Go Fiber",
            "project": "${projectName || 'Nesta App'}",
        })
    })

    app.Listen(":3000")
}
`
    );
    serverFolder.file('go.mod', `module nesta-app\n\ngo 1.22\n\nrequire github.com/gofiber/fiber/v2 v2.52.0\n`);
  } else {
    // Default Express / Node
    serverFolder.file(
      'index.js',
      `const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'Online',
    engine: '${backend?.name || 'Express.js'}',
    project: '${projectName || 'Nesta App'}',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(\`Server active on port \${PORT}\`);
});
`
    );
  }

  // Generate the zip content in browser
  const blob = await zip.generateAsync({ type: 'blob' });
  return { blob, filename: `${safeName}-source.zip` };
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
