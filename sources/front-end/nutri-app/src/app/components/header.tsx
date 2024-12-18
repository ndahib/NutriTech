import Image from "next/image";
import '@/app/styles/header-style.css';
import Link from "next/link";

export default function Header(){
    const iconItem = ["/search-icon.png", "/user-icon.png", "/store-icon.png"];
    return (
        <header className="text-white fixed top-0 left-0 right-0" style={{ backgroundColor: "#F8F7F1" }} >
            <div className="my-header mx-w-7xl mx-auto d-flex align-items-center justify-content-between">
                <Link href="/">
                <Image
                        alt="navBar Icon"
                        src="/menu.png"
                        width={25}
                        height={17.5}
                        decoding="async"
                        data-nimg="1"
                        className="navBar-icon"/>
                </Link>
                <Link href="/">
                    <Image 
                    alt = "Nutritech Logo"
                    loading="lazy"
                    width={123}
                    height={67}
                    decoding="async"
                    data-nimg="1"
                    src="/nutritech_green.webp"
                    className="nutritech-logo">
                    </Image>
                </Link>
                <div className="nutritech-nav d-flex justify-content-between m-0 p-0">
                    {iconItem.map((item) => (
                        <Image
                          key={item}
                          src={item}
                          alt={item.split('/').pop()?.split('.')[0].replace(/-/g, ' ') || ''}
                          className="header-icon px-0"
                          width={25}
                          height={25}
                        />
                    ))}
                </div>
            </div>
        </header>
    );
}
