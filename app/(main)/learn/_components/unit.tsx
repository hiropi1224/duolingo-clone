import { LessonButton } from "~/app/(main)/learn/_components/lesson-button";
import { UnitBanner } from "~/app/(main)/learn/_components/unit-banner";
import { lessons, units } from "~/db/schema";

type Props = {
  // id: number;
  // order: number;
  title: string;
  description: string;
  lessons: (typeof lessons.$inferSelect & {
    completed: boolean;
  })[];
  activeLesson:
    | (typeof lessons.$inferSelect & {
        unit: typeof units.$inferSelect;
      })
    | undefined;
  activeLessonPercentage: number;
};

export function Unit({
  // id,
  // order,
  title,
  description,
  lessons,
  activeLesson,
  activeLessonPercentage,
}: Props) {
  return (
    <>
      <UnitBanner title={title} description={description} />
      <div className="relative flex flex-col items-center">
        {lessons.map((lesson, index) => {
          const isCurrent = lesson.id === activeLesson?.id;
          const isLocked = !lesson.completed && !isCurrent;

          return (
            <LessonButton
              key={lesson.id}
              id={lesson.id}
              index={index}
              totalCount={lessons.length - 1}
              locked={isLocked}
              current={isCurrent}
              percentage={activeLessonPercentage}
            />
          );
        })}
      </div>
    </>
  );
}
