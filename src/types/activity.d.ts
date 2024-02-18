import type { Prisma } from "@prisma/client";

export type FullCategory = Prisma.CategoryGetPayload<{
  include: {
    activities: {
      include: {
        dayActivities: true;
      };
    };
  };
}>;

export type FullActivity = Prisma.ActivityGetPayload<{
  include: {
    dayActivities: true;
  };
}>;
