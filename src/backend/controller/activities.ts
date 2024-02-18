import { Day } from "@prisma/client";
import prisma from "../db/prisma";
import { Event } from "electron";
import type { FullCategory } from "types/activity";

export async function getCategoriesForDay(
  event: Event,
  day: Day,
): Promise<FullCategory[]> {
  const activities = prisma.category.findMany({
    include: {
      activities: {
        include: {
          dayActivities: {
            where: {
              dayId: day.id,
            },
          },
        },
      },
    },
  });

  return activities;
}

export async function toggleDayActivity(
  event: Event,
  dayActivityId: number,
  newDone: boolean,
) {
  await prisma.dayActivities.update({
    where: {
      id: dayActivityId,
    },
    data: {
      done: newDone,
    },
  });

  return true;
}
