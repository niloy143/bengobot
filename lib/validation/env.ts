import { z } from 'zod'

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(32),
  OPENAI_API_KEY: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
})

export type EnvVars = z.infer<typeof envSchema>

let envVars: EnvVars

export function validateEnv(): EnvVars {
  if (envVars) return envVars

  try {
    envVars = envSchema.parse(process.env)
    return envVars
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map(err => `${err.path.join('.')}: ${err.message}`)
      throw new Error(`Environment validation failed:\n${errorMessages.join('\n')}`)
    }
    throw error
  }
}

// Export individual validated env vars for convenience
export const env = validateEnv()