import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  bio: z.string().max(160, "Bio must be at most 160 characters long").optional(),
  location: z.string().max(30, "Location must be at most 30 characters long").optional(),
  website: z.string().url("Please enter a valid URL").optional(),
  avatar: z.string().url("Avatar must be a valid URL").optional(),
  cover: z.string().url("Cover photo must be a valid URL").optional(),
});

export type UpdateUserInput = z.infer<typeof updateUserSchema>;
