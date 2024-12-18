import "@/app/styles/why-section.css";
import Image from "next/image";

interface AdvantageProps {
    title: string;
    description: string;
    icon: string;
}

function AdvantageComponent({ title, description, icon }: AdvantageProps) {
    return (
        <div className="value d-flex flex-row align-items-center">
            <Image src={icon} alt="advantage-icon" width={67} height={67} />
            <div className="component d-flex flex-column justify-content-center align-items-start">
                <span className="text-wrapper">{title}</span>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function WhySection() {
    const iconMap = {
        Proximité: "/proximity-icon.svg",
        Innovation: "/innovation-icon.svg",
        Durabilité: "/sustainability-icon.svg",
        Personnalisation: "/personalization-icon.svg",
        Suivi: "/tracking-icon.svg",
        Confiance: "/trust-icon.svg"
    };

    const advantages_left = [
        { title: "Proximité", description: "Satisfaction client au cœur de notre démarche.", icon: iconMap.Proximité },
        { title: "Innovation", description: "Solutions de nutrition de pointe adaptées aux besoins modernes.", icon: iconMap.Innovation },
        { title: "Durabilité", description: "Des produits respectueux de l'environnement et durables.", icon: iconMap.Durabilité }
    ];
    
    const advantages_right = [
        { title: "Personnalisation", description: "Solutions adaptées spécifiquement aux cultures.", icon: iconMap.Personnalisation },
        { title: "Suivi", description: "Suivi constant pour ajuster nos solutions aux besoins.", icon: iconMap.Suivi },
        { title: "Confiance", description: "Construire des relations durables basées sur la confiance.", icon: iconMap.Confiance }
    ];
    
    return (
        <div className="why-section">
            <div className="frame">
                <div className="text-wrapper">Caractéristiques</div>
                <div className="div">Pourquoi NutriTech ?</div>
                <p className="p">
                    Nutritech propose des solutions de nutrition personnalisées, alliant performance des cultures et respect de l&apos;écologie. Innovants et durables, nos produits répondent aux besoins des agriculteurs modernes pour maximiser rentabilité et pérennité.
                </p>
            </div>
            <div className="why-section-products d-flex justify-content-between align-items-center mt-5">
                <div className="our-values">
                    {advantages_left.map((advantage) => (
                        <AdvantageComponent               
                            key={advantage.title}
                            title={advantage.title}
                            description={advantage.description}
                            icon={advantage.icon}
                        />
                    ))}
                </div>
                <div className="produits">
                    <Image src="/produits.png" alt="products" width={430} height={425}/>
                </div>
                <div className="our-values">
                    {advantages_right.map((advantage) => (
                        <AdvantageComponent               
                            key={advantage.title}
                            title={advantage.title}
                            description={advantage.description}
                            icon={advantage.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

