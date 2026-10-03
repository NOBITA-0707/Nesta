export const BACKEND_CATEGORIES = ['All', 'Node.js', 'Python', 'Go', 'Java', 'Rust'];

export const BACKEND_OPTIONS = [
  {
    id: 'express',
    name: 'Express.js',
    version: '4.21.0',
    tagline: 'Fast, unopinionated, minimalist web framework for Node.js.',
    category: 'Node.js',
    badge: 'Industry Standard',
    accentColor: '#339933',
    popularity: 98,
    stats: {
      stars: '64k',
      bundleSize: 'Minimal',
      buildSpeed: 'Instant',
      seoScore: 'N/A',
    },
    renderingMode: 'REST / Middleware Chain',
    description: 'Nesta scaffolds Express with CORS, Helmet, Morgan logging, and modular route controllers.',
    keyFeatures: [
      'Robust middleware routing system',
      'High performance JSON payload parsing',
      'Seamless database integrations (Prisma/Mongoose)',
      'Easy deployment to any Node.js compatible environment'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'controllers/', type: 'dir', desc: 'Route logic' },
        { name: 'routes/', type: 'dir', desc: 'API endpoints' },
        { name: 'index.js', type: 'file', desc: 'Server entry point' }
      ]},
      { name: 'package.json', type: 'file', desc: 'Backend dependencies' }
    ],
    sampleCode: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend Engine Online', engine: 'Express' });
});

app.listen(3000, () => console.log('Express Server Running on port 3000'));`,
    bestFor: 'General purpose REST APIs, microservices, and backend for frontend (BFF) architectures.'
  },
  {
    id: 'springboot',
    name: 'Spring Boot 3',
    version: '3.3.4',
    tagline: 'Enterprise-grade Java framework for building robust, stand-alone microservices.',
    category: 'Java',
    badge: 'Enterprise Leader',
    accentColor: '#6DB33F',
    popularity: 97,
    stats: {
      stars: '75k',
      bundleSize: 'JAR / Native',
      buildSpeed: '~3s (Maven)',
      seoScore: 'N/A',
    },
    renderingMode: 'JVM / Spring Web MVC Controller',
    description: 'Nesta scaffolds Spring Boot 3 with Spring Web, Spring Data JPA, H2/PostgreSQL database abstraction, and Maven configuration.',
    keyFeatures: [
      'Comprehensive enterprise ecosystem and security (Spring Security)',
      'Dependency injection and auto-configuration',
      'GraalVM Native Image support for sub-second boot times',
      'Production-ready metrics and health endpoints via Actuator'
    ],
    fileStructure: [
      { name: 'src/main/java/com/nesta/app/', type: 'dir', children: [
        { name: 'controller/', type: 'dir', desc: 'REST Controllers' },
        { name: 'model/', type: 'dir', desc: 'JPA Entities' },
        { name: 'Application.java', type: 'file', desc: 'Main entry point' }
      ]},
      { name: 'pom.xml', type: 'file', desc: 'Maven build configuration' }
    ],
    sampleCode: `package com.nesta.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public Map<String, String> getHealth() {
        return Map.of(
            "status", "Backend Engine Online",
            "engine", "Spring Boot 3"
        );
    }
}`,
    bestFor: 'Mission-critical enterprise backend systems, financial applications, and high-concurrency microservices.'
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    version: '0.110.0',
    tagline: 'High performance, easy to learn, fast to code, ready for production.',
    category: 'Python',
    badge: 'Modern Python',
    accentColor: '#009688',
    popularity: 95,
    stats: {
      stars: '70k',
      bundleSize: 'N/A',
      buildSpeed: 'Instant',
      seoScore: 'N/A',
    },
    renderingMode: 'Async ASGI / REST API',
    description: 'Nesta scaffolds FastAPI with Pydantic schemas, async endpoints, and automatic OpenAPI documentation.',
    keyFeatures: [
      'Automatic Swagger UI / Redoc documentation',
      'Validation powered by Pydantic',
      'Native Async/Await support',
      'Performance on par with NodeJS and Go'
    ],
    fileStructure: [
      { name: 'app/', type: 'dir', children: [
        { name: 'routers/', type: 'dir', desc: 'Endpoint groups' },
        { name: 'models/', type: 'dir', desc: 'Pydantic schemas' },
        { name: 'main.py', type: 'file', desc: 'FastAPI instance' }
      ]},
      { name: 'requirements.txt', type: 'file', desc: 'Python dependencies' }
    ],
    sampleCode: `from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class HealthResponse(BaseModel):
    status: str
    engine: str

@app.get("/api/health", response_model=HealthResponse)
async def get_health():
    return {"status": "Backend Engine Online", "engine": "FastAPI"}`,
    bestFor: 'AI/ML integrations, data-heavy pipelines, and modern robust REST APIs.'
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    version: '10.3.0',
    tagline: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    category: 'Node.js',
    badge: 'Enterprise Architecture',
    accentColor: '#E0234E',
    popularity: 90,
    stats: {
      stars: '62k',
      bundleSize: 'Modular',
      buildSpeed: '~2s (tsc)',
      seoScore: 'N/A',
    },
    renderingMode: 'Controller & Injectables',
    description: 'Nesta provides a fully typed NestJS scaffold with modules, controllers, and dependency injection out of the box.',
    keyFeatures: [
      'Angular-like architecture for the backend',
      'Built-in Dependency Injection container',
      'First-class TypeScript support',
      'Easy GraphQL or microservices integration'
    ],
    fileStructure: [
      { name: 'src/', type: 'dir', children: [
        { name: 'app.module.ts', type: 'file', desc: 'Root module' },
        { name: 'app.controller.ts', type: 'file', desc: 'Root controller' },
        { name: 'main.ts', type: 'file', desc: 'NestFactory creation' }
      ]},
      { name: 'nest-cli.json', type: 'file', desc: 'CLI Configuration' }
    ],
    sampleCode: `import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('health')
  getHealth() {
    return { status: 'Backend Engine Online', engine: 'NestJS' };
  }
}`,
    bestFor: 'Large enterprise teams, complex monolithic backends, and highly scalable microservices.'
  },
  {
    id: 'gofiber',
    name: 'Go Fiber',
    version: '2.52.0',
    tagline: 'An Express-inspired web framework written in Go.',
    category: 'Go',
    badge: 'Ultra Fast',
    accentColor: '#00ADD8',
    popularity: 85,
    stats: {
      stars: '32k',
      bundleSize: 'Compiled',
      buildSpeed: '< 1s',
      seoScore: 'N/A',
    },
    renderingMode: 'Compiled Binary API',
    description: 'Nesta wires up a high-performance Go Fiber app, featuring near zero memory footprint and extreme throughput.',
    keyFeatures: [
      'Built on Fasthttp, the fastest HTTP engine for Go',
      'Express-like routing and middleware',
      'Extremely low memory footprint',
      'Compiles to a single binary executable'
    ],
    fileStructure: [
      { name: 'cmd/', type: 'dir', children: [
        { name: 'api/', type: 'dir', desc: 'Main package' },
        { name: 'main.go', type: 'file', desc: 'Fiber entry point' }
      ]},
      { name: 'go.mod', type: 'file', desc: 'Go modules' }
    ],
    sampleCode: `package main

import "github.com/gofiber/fiber/v2"

func main() {
    app := fiber.New()

    app.Get("/api/health", func(c *fiber.Ctx) error {
        return c.JSON(fiber.Map{
            "status": "Backend Engine Online",
            "engine": "Go Fiber",
        })
    })

    app.Listen(":3000")
}`,
    bestFor: 'High throughput, low latency microservices, and resource-constrained environments.'
  }
];

export function registerCustomBackend(newOption) {
  const exists = BACKEND_OPTIONS.find((item) => item.id === newOption.id);
  if (!exists) {
    BACKEND_OPTIONS.push(newOption);
  }
  return BACKEND_OPTIONS;
}
