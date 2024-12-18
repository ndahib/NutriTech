import "@/app/styles/vidieo-section.css";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function Button({ children, className, ...props } : ButtonProps) {
    return (
        <button style={{
            backgroundColor: "var(--primary-color)",
            color: "white",
            opacity: 1,
            borderRadius: "10px",
            width: "150px",
            height: "48px",
            border: "none"
        }} 
            className={className} {...props}>
            {children}
        </button>
    );
}

export default function VideoSection()
{
    return (
        <section className="video-section">
            <video autoPlay muted loop preload="auto" id="bg-video">
                <source src="/loop.mp4" type="video/mp4"/>
                Votre navigateur ne supporte pas la balise video.
            </video>
      <div className="video-content">
        <div className="video-text">
          <h2 className="video-text2">
            L&apos;agriculture compte pour l&apos;avenir du d veloppement
          </h2>
          <div className="d-flex gap-4 justify-content-center">
            <Button className="bg-green-600 hover:bg-green-700">
              qui some nous?
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Nos valeurs
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Nos Produis
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              Nos Partenaires
            </Button>
          </div>
        </div>
      </div>
        </section>
    );
}
