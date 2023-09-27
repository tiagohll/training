import React, { ReactNode } from "react";

type TooltipRootProps = {
    children: ReactNode;
};

export default function TooltipRoot({ children }: TooltipRootProps) {
    return <div className="relative">{children}</div>;
}
