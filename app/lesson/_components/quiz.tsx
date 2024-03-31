"use client";

import { useState } from "react";

import { QuestionBubble } from "~/app/lesson/_components/question-bubble";
import { challengeOptions, challenges } from "~/db/schema";

import { Challenge } from "./challenge";
import { Header } from "./header";

type Props = {
  initialLessonId: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  initialHearts: number;
  initialPercentage: number;
  userSubscription: any; // TODO: Replace with subscription DB type
};

export function Quiz({
  initialLessonId,
  initialLessonChallenges,
  initialHearts,
  initialPercentage,
  userSubscription,
}: Props) {
  const [hearts, setHearts] = useState(initialHearts);
  const [percentage, setPercentage] = useState(initialPercentage);
  const [challenges] = useState(initialLessonChallenges);
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex(
      (challenge) => !challenge.completed
    );

    return uncompletedIndex === -1 ? 0 : uncompletedIndex;
  });

  const challenge = challenges[activeIndex];
  const options = challenge?.challengeOptions ?? [];

  const title =
    challenge.type === "ASSIST"
      ? "Select the correct meaning"
      : challenge.question;

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="flex h-full items-center justify-center">
          <div className="flex w-full flex-col gap-y-12 px-6 lg:min-h-[350px] lg:w-[600px] lg:px-0">
            <h1 className="text-center text-lg font-bold text-neutral-700 lg:text-start lg:text-3xl">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={() => {}}
                status="none"
                selectedOption={undefined}
                disabled={false}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
