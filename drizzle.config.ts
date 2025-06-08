import { config } from "dotenv"; // Import dotenv to load environment variables
import { defineConfig } from "drizzle-kit"; // Import defineConfig from drizzle-kit
import { resolve } from "path";

// Get absolute path to .env.local
const envPath = resolve(process.cwd(), '.env.local');
console.log('Looking for .env.local at:', envPath);

// Load environment variables from the .env.local file
const result = config({ path: envPath });
console.log('Dotenv config result:', result);

// Retrieve the database connection string from process.env
const connectionString = process.env.DATABASE_URL;
console.log('Connection string found:', connectionString ? 'Yes' : 'No');

// Validate that the DATABASE_URL is set
if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set. Please check your .env.local file.");
}

// Export the configuration object for Drizzle Kit
export default defineConfig({
  /**
   * Specifies the directory containing your Drizzle schema files.
   * Drizzle Kit will watch this directory for changes.
   */
  schema: "./db/schema",

  /**
   * Specifies the directory where Drizzle Kit will output the
   * generated SQL migration files.
   */
  out: "./db/migrations",

  /**
   * Specifies the database dialect. For PostgreSQL (used by Supabase),
   * this should be "postgresql".
   */
  dialect: "postgresql",

  /**
   * Provides the database credentials needed for Drizzle Kit to connect
   * to the database, primarily for introspection during migration generation.
   */
  dbCredentials: {
    url: connectionString,
  }
});