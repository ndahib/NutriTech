import { Star } from 'lucide-react'
import Image from 'next/image'

const responsables = [
  {
    name: "John",
    role: "Responsable commercial",
    comment: "Chef de vente au Maroc.",
    rating: 4,
    image: "/avatar1.svg?height=100&width=100"
  },
  {
    name: "Samia",
    role: "Chef de produit",
    comment: "chef de produit au Maroc.",
    rating: 5,
    image: "/avatar2.svg?height=100&width=100"
  },
  {
    name: "Maria",
    role: "Chef de vente",
    comment: "Chef de vente au Maroc.",
    rating: 3,
    image: "/avatar3.svg?height=100&width=100"
  }
]

export default function ResponsableSection() {
  return (
    <section className="container py-5">
      <div className="text-center mb-4">
        <h2 className="h2 font-weight-bold text-success">Nos responsables</h2>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {responsables.map((testimonial, index) => (
          <div key={index} className="col">
            <div className="card text-center h-100">
              <div className="card-body">
                <div className="d-flex justify-content-center mb-3">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="rounded-circle img-fluid"
                  />
                </div>
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text text-muted">{testimonial.role}</p>
                <div className="d-flex justify-content-center mb-2">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} className="text-warning" style={{ width: '16px', height: '16px' }} />
                  ))}
                </div>
                <p className="card-text text-muted">{testimonial.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
