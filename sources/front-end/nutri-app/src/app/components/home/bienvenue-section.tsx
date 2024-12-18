import Image from "next/image";
import "@/app/styles/bienvenue-section.css";


export default function BienvenueSection({ 
    imageSrc = "/grape.png", 
    imageAlt = "grapes background", 
    mainText = "Bienvenue", 
    subText = "chez NutriTech", 
    buttonText = "Shop now", 
    circleSrc1 = "/circle.png", 
    circleSrc2 = "/circle_bold.png" 
}) {
    return (
        <section className="bienvenue-section">
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={1440}
                height={625.12}
                quality={100}
                priority={true}
                style={{ objectFit: 'cover' }}
                className="bienvenue-image"
            />
            <div className="bienvenue-content">
                <div className="bienvenue-text-container">
                    <span className="bienvenue-text">{mainText}</span>
                    <span className="bienvenue-text2">{subText}</span>
                    <button>{buttonText}</button>
                </div>
                <div className="bienvenue-circles">
                    <Image src={circleSrc1} alt="circle" width={80} height={55} />
                    <Image src={circleSrc2} alt="circle" width={80} height={55} />
                </div>
            </div>
        </section>
    );
}