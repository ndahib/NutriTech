import "@/app/styles/bienvenue-section.css";
import Image from "next/image";
export default function Values() {
    return (
        <div className="nurtritech-values">
        <div className="value">
            <Image src="/home.svg" alt="nurtritech-values" width={43} height={43}/>
            <div>
                <span className="value-span" >Adaptation nutritionnelle</span>
                <p>Nutrition équilibrée.</p>
            </div>
        </div>
        <div className="value">
            <Image src="/performance.svg" alt="nurtritech-values" width={43} height={43}/>
            <div>
                <span className="value-span">Performance optimisée.</span>
                <p>Optimisation agricole.</p>
            </div>
        </div>
        <div className="value">
            <Image src="/souplesse.svg" alt="nurtritech-values" width={43} height={43}/>
            <div>
                <span className="value-span">Souplesse et proximite</span>
                <p>Soutien personnalisé.</p>
            </div>
        </div>
    </div>
    );
}