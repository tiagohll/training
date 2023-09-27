type CardIconProps = {
    children: React.ReactNode;
};

export default function CardIcon({ children, ...rest }: CardIconProps) {
    return (
        <span className="material-symbols-rounded text-6xl" {...rest}>
            {children}
        </span>
    );
}
