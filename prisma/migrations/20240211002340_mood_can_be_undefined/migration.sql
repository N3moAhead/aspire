-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DayMoods" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dayId" INTEGER NOT NULL,
    "value" INTEGER,
    "moodId" INTEGER NOT NULL,
    CONSTRAINT "DayMoods_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DayMoods_moodId_fkey" FOREIGN KEY ("moodId") REFERENCES "Mood" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DayMoods" ("dayId", "id", "moodId", "value") SELECT "dayId", "id", "moodId", "value" FROM "DayMoods";
DROP TABLE "DayMoods";
ALTER TABLE "new_DayMoods" RENAME TO "DayMoods";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
