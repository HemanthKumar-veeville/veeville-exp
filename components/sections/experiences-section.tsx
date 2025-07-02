"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, MapPin, Users, Star, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperiencesSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Experiences" },
    { id: "adventure", name: "Adventure" },
    { id: "luxury", name: "Luxury" },
    { id: "cultural", name: "Cultural" },
    { id: "wellness", name: "Wellness" },
  ];

  const experiences = [
    {
      id: 1,
      title: "Himalayan Expedition",
      category: "adventure",
      description: "Embark on a breathtaking journey through the majestic Himalayas with expert guides.",
      image: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$2,499",
      duration: "7 days",
      location: "Nepal",
      rating: 4.9,
      participants: "8-12",
      featured: true,
    },
    {
      id: 2,
      title: "Luxury Safari Experience",
      category: "luxury",
      description: "Experience the African wilderness in ultimate comfort with premium accommodations.",
      image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$4,999",
      duration: "10 days",
      location: "Kenya",
      rating: 5.0,
      participants: "4-8",
      featured: true,
    },
    {
      id: 3,
      title: "Cultural Immersion Japan",
      category: "cultural",
      description: "Discover authentic Japanese culture through traditional ceremonies and local experiences.",
      image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$1,899",
      duration: "5 days",
      location: "Japan",
      rating: 4.8,
      participants: "6-10",
      featured: false,
    },
    {
      id: 4,
      title: "Wellness Retreat Bali",
      category: "wellness",
      description: "Rejuvenate your mind and body in the serene landscapes of Bali.",
      image: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$1,299",
      duration: "6 days",
      location: "Indonesia",
      rating: 4.7,
      participants: "10-15",
      featured: false,
    },
    {
      id: 5,
      title: "Arctic Aurora Adventure",
      category: "adventure",
      description: "Witness the magical Northern Lights in the pristine Arctic wilderness.",
      image: "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$3,299",
      duration: "8 days",
      location: "Iceland",
      rating: 4.9,
      participants: "6-12",
      featured: true,
    },
    {
      id: 6,
      title: "Mediterranean Yacht Charter",
      category: "luxury",
      description: "Sail through crystal-clear waters and explore hidden Mediterranean gems.",
      image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      price: "$5,999",
      duration: "12 days",
      location: "Greece",
      rating: 5.0,
      participants: "2-8",
      featured: false,
    },
  ];

  const filteredExperiences = activeCategory === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeCategory);

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            Our Experiences
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curated <span className="text-blue-600">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover extraordinary adventures crafted to create lasting memories. 
            Each experience is carefully designed to exceed your expectations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300",
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-gray-600 hover:text-blue-600 hover:border-blue-300"
              )}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <Card
              key={experience.id}
              className={cn(
                "group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2",
                experience.featured && "ring-2 ring-blue-200"
              )}
            >
              <div className="relative overflow-hidden">
                {experience.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    Featured
                  </Badge>
                )}
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {experience.category.charAt(0).toUpperCase() + experience.category.slice(1)}
                  </Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{experience.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {experience.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {experience.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {experience.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {experience.participants} people
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      {experience.price}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">per person</span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white group/btn"
                  >
                    Book Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 text-blue-600 border-blue-300 hover:bg-blue-50 group"
          >
            View All Experiences
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}