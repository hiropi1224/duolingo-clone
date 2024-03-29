"use client";

import { Card } from "~/app/(main)/courses/_components/card";
import { courses } from "~/db/schema";

type Props = {
  courses: (typeof courses.$inferSelect)[];
  activeCourseId: number;
};

export function List({ courses, activeCourseId }: Props) {
  return (
    <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={() => {}}
          disabled={false}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
}
