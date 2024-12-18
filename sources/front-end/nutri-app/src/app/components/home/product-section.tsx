"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/styles/products-section.css";
import axios from "axios";
import React, { useEffect, useState, ButtonHTMLAttributes, ReactNode } from "react";
import Image from "next/image";
interface CarousselButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

interface Product {
    image: string;
    name: string;
    price: number;
    rating: number;
}

function CarousselButton({ children, ...props }: CarousselButtonProps) {
    return (
        <button {...props}>
            {children}
        </button>
    );
}

export default function ProductCollection() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://127.0.0.1:5000/products");
                setProducts(response.data || []);
            } catch (err) {
                console.error("Error fetching products:", err);
                setError("Failed to fetch products. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    if (error) {
        return <div className="text-danger">{error}</div>;
    }

    return (
        <section className="container py-5">
            <div className="pruduct-collection text-center mb-4">
                <span className="text-muted small">Categorie</span>
                <h2 className="h4 fw-bold text-success">Collection de produits</h2>
                <p className="text-muted mt-2">
                    Explorez une variété de produits agricoles de qualité, sélectionnés pour une agriculture durable et
                    responsable.
                </p>
            </div>

            <Carousel
                showArrows={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                infiniteLoop={true}
                centerMode={true}
                centerSlidePercentage={25}
                emulateTouch={true}
                swipeable={true}
                className="mx-auto"
                renderArrowPrev={(clickHandler, hasPrev) => (
                    <CarousselButton
                        onClick={clickHandler}
                        disabled={!hasPrev}
                        className="carousel-button position-absolute start-0 top-50 translate-middle-y z-3"
                    >
                        &lt;
                    </CarousselButton>
                )}
                renderArrowNext={(clickHandler, hasNext) => (
                    <CarousselButton
                        onClick={clickHandler}
                        disabled={!hasNext}
                        className="carousel-button position-absolute end-0 top-50 translate-middle-y z-3"
                    >
                        &gt;
                    </CarousselButton>
                )}
            >
                {products.map((product, index) => (
                    <div key={index} className="p-3">
                        <Image
                            src={product.image}
                            alt={product.name}
                            className="img-fluid mb-3"
							width={100}
							height={100}
                            style={{
                                aspectRatio: "1 / 1",
                                objectFit: "contain",
                            }}
                        />
                        <h3 className="product-name">{product.name}</h3>
                        <div className="product-details d-flex justify-content-between align-items-center mt-2">
                            <span className="fw-bold text-success">{product.price}$</span>
                            <div className="d-flex gap-1">
                                {Array.from({ length: Math.trunc(product.rating) })
                                    .fill(null)
                                    .map((_, i) => (
                                        <Star
                                            key={i}
                                            className="text-warning"
                                            style={{ width: "1rem", height: "1rem" }}
                                        />
                                    ))}
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    );
}
