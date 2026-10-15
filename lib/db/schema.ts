import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core"

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  message: text("message").notNull(),
  branch: text("branch"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
})
