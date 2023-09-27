import { ReactNode } from "react";

type TooltipContentProps = {
    children: ReactNode;
    position: "top" | "right" | "bottom" | "left";
};

export default function TooltipContent({
    children,
    position,
}: TooltipContentProps) {
    return (
        <>
            <span
                className={`z-[999] my-1 absolute hidden peer-hover:inline-block opacity-in bg-black text-sm font-medium p-2 whitespace-nowrap rounded duration-200 ${
                    position == "top"
                        ? "left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]"
                        : ""
                } ${
                    position == "bottom"
                        ? "left-1/2 -translate-x-1/2 top-[calc(100%+5px)]"
                        : ""
                }
            ${
                position == "left"
                    ? "tp-1/2 -translate-y-1/2 right-[calc(100%+5px)]"
                    : ""
            }
            ${
                position == "right"
                    ? "top-1/2 -translate-y-1/2 left-[calc(100%+5px)]"
                    : ""
            }`}
            >
                {children}
            </span>
            <span
                className={`z-[999] my-1 absolute hidden peer-hover:inline-block peer-hover:opacity-in border-[5px] ${
                    position == "top"
                        ? "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-black"
                        : ""
                } ${
                    position == "bottom"
                        ? "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-black"
                        : ""
                }
                ${
                    position == "left"
                        ? "tp-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-black"
                        : ""
                }
                ${
                    position == "right"
                        ? "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-black"
                        : ""
                }`}
            />
        </>
    );
}
