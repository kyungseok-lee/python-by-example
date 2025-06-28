import { pgTable, text, serial, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  nameKo: text("name_ko").notNull(),
  description: text("description"),
  color: text("color").notNull(), // For the category indicator dot
  order: integer("order").notNull().default(0),
});

export const examples = pgTable("examples", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  titleKo: text("title_ko").notNull(),
  description: text("description").notNull(),
  code: text("code").notNull(),
  explanation: text("explanation").notNull(),
  additionalExamples: json("additional_examples").$type<Array<{
    title: string;
    code: string;
  }>>(),
  categoryId: integer("category_id").references(() => categories.id),
  order: integer("order").notNull().default(0),
  prevSlug: text("prev_slug"),
  nextSlug: text("next_slug"),
});

export const insertCategorySchema = createInsertSchema(categories).omit({
  id: true,
});

export const insertExampleSchema = createInsertSchema(examples).omit({
  id: true,
});

export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

export type InsertExample = z.infer<typeof insertExampleSchema>;
export type Example = typeof examples.$inferSelect;
