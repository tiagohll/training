import Header from "@/components/Header";
import { Card } from "@/components/ui/Card";

export default function Home() {
    return (
        <>
            <Header />
            <section>
                <Card.Root url="/v1/arms">
                    <Card.Content>
                        <Card.Icon>exercise</Card.Icon>
                        <div className="flex flex-col items-start">
                            <Card.Title>Focus in arms</Card.Title>
                            <Card.Description>
                                Este treino tem como objetivo melhorar os meus
                                braços.
                            </Card.Description>
                        </div>
                    </Card.Content>
                </Card.Root>
            </section>
        </>
    );
}
