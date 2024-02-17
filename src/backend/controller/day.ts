import dayjs, { Dayjs } from "dayjs";
import prisma from "../db/prisma";
import type { Day } from "@prisma/client";

/** Create a new day entry in the database */
export async function createDay(forDate?: Dayjs): Promise<Day> {
  const date = forDate?.startOf("day") || dayjs().startOf("day");

  const activities = await prisma.activity.findMany();
  const moods = await prisma.mood.findMany();

  const newDay = await prisma.day.create({
    data: {
      date: date.toDate(),
      dayActivities: {
        create: activities.map((activity) => ({
          done: false,
          activityId: activity.id,
        })),
      },
      dayMoods: {
        create: moods.map((mood) => ({
          moodId: mood.id,
        })),
      },
    },
  });

  return newDay;
}

/**
 * Get the current day from the database
 * If no day has been created yet a new day will be created.
 */
export async function getCurrentDay(): Promise<Day> {
  let currentDay: Day = await prisma.day.findUnique({
    where: { date: dayjs().startOf("day").toDate() },
  });

  if (!currentDay) {
    console.log("Day does not exist its getting created!");
    currentDay = await createDay();
  }

  return currentDay;
}
