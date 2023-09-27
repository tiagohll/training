import Link from "next/link";
import { Tooltip } from "../ui/Tooltip";

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full p-2 px-15">
            <div className="flex items-center gap-1">
                <Link
                    href="https://tiagohll.vercel.app/"
                    className="text-2xl font-bold z-10"
                >
                    tiago
                </Link>
                <Link
                    href="https://workout.tiagohll.vercel.app/"
                    className="text-sm font-medium z-10 text-zinc-400 max-w-[120px]"
                >
                    .workout-projects
                </Link>
            </div>

            <div className="flex gap-2 items-center">
                <Tooltip.Root>
                    <Tooltip.Trigger>
                        <Link
                            href="/photos"
                            className="rounded flex items-center text-center gap-1 duration-300 break-words font-medium h-9 px-4 font-base bg-zinc-700 hover:bg-zinc-800 hover:scale-105"
                        >
                            <span className="material-symbols-outlined">
                                photo_library
                            </span>
                            <span>Fotos</span>
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content position="bottom">Fotos</Tooltip.Content>
                </Tooltip.Root>

                <Tooltip.Root>
                    <Tooltip.Trigger>
                        <Link
                            href="/workouts"
                            className="rounded flex items-center text-center gap-1 duration-300 break-words font-medium h-9 px-4 font-base bg-zinc-700 hover:bg-zinc-800 hover:scale-105"
                        >
                            <span className="material-symbols-rounded">
                                exercise
                            </span>
                            <span>Treinos</span>
                        </Link>
                    </Tooltip.Trigger>
                    <Tooltip.Content position="bottom">Treinos</Tooltip.Content>
                </Tooltip.Root>
            </div>
        </div>
    );
}
