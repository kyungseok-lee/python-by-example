import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all categories
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  // Get all examples
  app.get("/api/examples", async (req, res) => {
    try {
      const examples = await storage.getExamples();
      res.json(examples);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch examples" });
    }
  });

  // Get examples by category
  app.get("/api/categories/:id/examples", async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const examples = await storage.getExamplesByCategory(categoryId);
      res.json(examples);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch examples for category" });
    }
  });

  // Get example by slug
  app.get("/api/examples/:slug", async (req, res) => {
    try {
      const example = await storage.getExampleBySlug(req.params.slug);
      if (!example) {
        return res.status(404).json({ message: "Example not found" });
      }
      res.json(example);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch example" });
    }
  });

  // Search examples
  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
      const examples = await storage.searchExamples(query);
      res.json(examples);
    } catch (error) {
      res.status(500).json({ message: "Failed to search examples" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
