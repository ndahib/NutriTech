import React from 'react'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div>
            <Image
              src="/nutritech.webp"
              alt="Petratools"
              className="mb-4"
              width={208}
              height={124}
            />
            <p className="small">
            Rue Abdelmoumen Residence Central Parc Immeuble M 8eme Etage \ Bureau N°56 - Mohammedia (M)

            Tél: +212 5 23 31 30 92

            Email: Contact@nutritechagro.com
            </p>
          </div>
          
          <div>
            <h3 className="fw-bold mb-3">À propos de notre entreprise</h3>
            <ul className="list-unstyled small">
              <li>Qui sommes nous ?</li>
              <li>Catalogue</li>
              <li>Obtenez l&apos;application</li>
            </ul>
          </div>

          <div>
            <h3 className="fw-bold mb-3">Decouvrir nos produits</h3>
            <ul className="list-unstyled small">
              <li>Engrais solide</li>
              <li>Engrais speciaux hydrosoluble</li>
              <li>Biostimulants</li>
            </ul>
          </div>

          <div>
            <h3 className="fw-bold mb-3">Ne ratez rien !</h3>
            <p className="small mb-2">
              Inscrivez-vous   notre newsletter pour b n ficier de 15% de remise sur votre commande !
            </p>
            <div className="d-flex gap-2">
            </div>
            <div className="d-flex gap-4 mt-4">
              <Facebook className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Instagram className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-top border-secondary">
        <div className="container py-3">
          <p className="small">
            Copyright © 2023 Petratools. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
