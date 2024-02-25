import prisma from "backend/db/prisma";
import type { Day } from "@prisma/client";
import type { Event } from "electron";
import type { FullMood } from "types/mood";

export async function getDayMoods(event: Event, day: Day): Promise<FullMood[]> {
  const moods = prisma.mood.findMany({
    include: {
      dayMoods: {
        where: {
          dayId: day.id,
        },
      },
    },
  });

  return moods;
}
