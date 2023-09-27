import React, { ReactNode } from "react";

type TooltipTriggerProps = {
    children: ReactNode;
};

export default function TooltipTrigger({ children }: TooltipTriggerProps) {
    return <div className="flex items-center peer">{children}</div>;
}
