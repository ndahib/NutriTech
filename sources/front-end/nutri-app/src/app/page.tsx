/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   page.tsx                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: ndahib <ndahib@student.42.fr>              +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2024/12/17 10:25:58 by ndahib            #+#    #+#             */
/*   Updated: 2024/12/18 09:41:24 by ndahib           ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import styles from "./page.module.css";
import Layout from "./layout";
import Header from "./components/header";
import BienvenueSection from "./components/home/bienvenue-section";
import Values from "./components/home/values";
import WhySection from "./components/home/why-section";
import VideoSection from "./components/home/vidieo-section";
import ProductSection from "./components/home/product-section";
import ResponsableSection from "./components/home/responsables";
import Footer from "./components/home/footer-section";
export default function HomePage()
{
	return (
		<Layout>
			<Header/>
			<div className={styles.homeContainer}>
				<BienvenueSection/>
				<Values/>
			</div>
			<WhySection/>
			<VideoSection/>
			<ProductSection/>
			<ResponsableSection/>
			<Footer/>
		</Layout>
	);
}
