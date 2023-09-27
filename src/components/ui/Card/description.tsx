import { ReactNode } from "react";

type CardDescriptionProps = {
    children: ReactNode;
};

export default function CardDescription({ children }: CardDescriptionProps) {
    return <p className="text-zinc-400 text-start">{children}</p>;
}
