import { Prisma } from "@prisma/client";

export type FullMood = Prisma.MoodGetPayload<{
  include: {
    dayMoods: true;
  };
}>;
