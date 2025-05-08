import { z } from 'zod';

// Role Enum
const RoleEnum = z.enum(["USER", "ADMIN"]); // 根据你的 Prisma schema 中 Role 枚举的定义来写

// Profile Schema
export const ProfileSchema = z.object({
  bio: z.string()
});

// User Schema
export const UserSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  role: RoleEnum.default("USER"),
  posts: z.array(z.unknown()).optional().nullable(),
  profile: ProfileSchema.optional(),
});

export type createUserDto = z.infer<typeof UserSchema>;
