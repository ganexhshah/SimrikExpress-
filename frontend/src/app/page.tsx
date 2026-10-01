import React from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TripAdvisorSection from "@/components/home/TripAdvisorSection";
import AboutSection from "@/components/home/AboutSection";
import AffordablePackagesSection from "@/components/home/AffordablePackagesSection";
import ExploreTrekkingSection from "@/components/home/ExploreTrekkingSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import NepaliPeopleBanner from "@/components/home/NepaliPeopleBanner";
import ExclusiveOffersSection from "@/components/home/ExclusiveOffersSection";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0B6E8E] selection:text-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <TripAdvisorSection />
        <AboutSection />
        <AffordablePackagesSection />
        <ExploreTrekkingSection />
        <WhyChooseUsSection />
        <NepaliPeopleBanner />
        <ExclusiveOffersSection />
      </main>

      <Footer />
    </div>
  );
}
