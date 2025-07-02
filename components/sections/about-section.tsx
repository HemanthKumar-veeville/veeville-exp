"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Award, 
  Users, 
  Globe, 
  Heart, 
  Shield, 
  Zap,
  CheckCircle 
} from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about creating unforgettable experiences that touch hearts and inspire souls."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Your safety and satisfaction are our top priorities. We maintain the highest standards in everything we do."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly innovate to bring you unique experiences that push the boundaries of adventure."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local hidden gems to international destinations, we offer experiences across the globe."
    }
  ];

  const achievements = [
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Countries Covered" },
    { number: "1000+", label: "Experiences Created" },
    { number: "15+", label: "Years of Excellence" }
  ];

  const features = [
    "Expert local guides and partners",
    "24/7 customer support",
    "Sustainable tourism practices",
    "Customizable experience packages",
    "Premium safety standards",
    "Authentic cultural immersion"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            About Veeville
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting <span className="text-blue-600">Extraordinary</span> Moments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we've been dedicated to creating life-changing experiences 
            that connect people with the world's most incredible destinations and cultures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Journey, Our Expertise
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Veeville Experiences, we believe that travel is more than just visiting places—it's about 
              creating connections, discovering new perspectives, and building memories that last a lifetime. 
              Our team of passionate travel experts works tirelessly to curate experiences that go beyond 
              the ordinary.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white group"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team planning experiences"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Client Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and ensure every experience exceeds expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-12">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100 text-lg">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}