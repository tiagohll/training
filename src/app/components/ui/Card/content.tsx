import { ReactNode } from "react";

type CardContentProps = {
    children: ReactNode;
};

export default function CardContent({ children }: CardContentProps) {
    return (
        <div className="flex items-center justify-start w-full gap-3">
            {children}
        </div>
    );
}
