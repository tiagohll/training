import Link from "next/link";
import { ReactNode } from "react";

interface CardRootProps {
    children: ReactNode;
    url: string;
}

export default function CardRoot({ children, url }: CardRootProps) {
    return (
        <Link
            href={url}
            className="flex flex-col w-1/6 p-3 bg-gray-900 rounded items-center justify-center"
        >
            {children}
        </Link>
    );
}
