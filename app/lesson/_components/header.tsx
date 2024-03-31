import { Infinity, X } from "lucide-react";
import Image from "next/image";

import { Progress } from "~/components/ui/progress";
import { useExitModal } from "~/store/use-exit-modal";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};

export function Header({ hearts, percentage, hasActiveSubscription }: Props) {
  const { open } = useExitModal();

  return (
    <header className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <X
        onClick={open}
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          src="/heart.svg"
          alt="Heart"
          height={28}
          width={28}
          className="mr-2"
        />
        {hasActiveSubscription ? (
          <Infinity className="size-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </header>
  );
}