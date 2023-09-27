import { ReactNode } from "react";

type CardTitleProps = {
    children: ReactNode;
};

export default function CardTitle({ children }: CardTitleProps) {
    return <span className="font-bold text-xl">{children}</span>;
}
