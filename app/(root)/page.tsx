import Banner from "@/components/Banner";
import Collections from "@/components/Collections";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductsList";
import { Separator } from "@/components/Separator";
import "../globals.css";
import Herosection from "@/components/Herosection";
import FeatureSection from "@/components/FeatureSection";
import FAQ from "@/components/FAQ";

export default function Home() {
    return (
        <>
            <Banner />
            <Collections />
            <Herosection />
            <ProductList />
            <FeatureSection />
            <FAQ />
            <Footer />
        </>
    );
}

export const dynamic = "force-dynamic";
