"use client";
import { useState } from 'react';
import { Brain, Heart, MessageCircle, Share2, Users, TrendingUp, Image, Video, Menu, X, Sparkles, Globe } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Mind Mesh</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <a href="/login" className="text-slate-300 hover:text-white transition-colors font-medium">Log In</a>
              <a href="/register" className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all font-medium">
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="/login" className="block text-slate-300 hover:text-white">Log In</a>
              <a href="/register" className="block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-center">
                Sign Up
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-purple-950/30 to-slate-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-lg mb-6 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Join millions of creative minds
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Share ideas,
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> connect minds</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Mind Mesh is where creative people share their thoughts, discover inspiring content, and build meaningful connections with a community that thinks like you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/register" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-xl hover:shadow-purple-500/50 transition-all font-semibold text-lg">
                  Join Mind Mesh
                </a>
                <a href="#explore" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-700 text-slate-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all font-semibold text-lg">
                  Explore
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                Free forever. No credit card required.
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/mm.png" 
                  alt="Mind Mesh Hero"
                  className="w-64 h-64 md:w-[380px] md:h-[380px] rounded-full object-cover border-4 border-blue-500/40 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="explore" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Express yourself, your way
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Share your thoughts through text, images, videos, and more
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="h-10 w-10" />,
                title: "Share Your Thoughts",
                description: "Post updates, start discussions, and engage with a community that values authentic conversation",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Image className="h-10 w-10" />,
                title: "Visual Stories",
                description: "Share photos, create galleries, and showcase your creative work to inspire others",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                icon: <Users className="h-10 w-10" />,
                title: "Build Your Network",
                description: "Connect with like-minded people, follow creators you admire, and grow your community",
                gradient: "from-orange-500 to-red-500"
              },
              {
                icon: <TrendingUp className="h-10 w-10" />,
                title: "Discover Trending",
                description: "Stay on top of what's popular, explore trending topics, and join the conversation",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                icon: <Video className="h-10 w-10" />,
                title: "Video Content",
                description: "Share video clips, create vlogs, and express yourself through dynamic multimedia",
                gradient: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Globe className="h-10 w-10" />,
                title: "Global Community",
                description: "Connect with people from around the world and discover diverse perspectives",
                gradient: "from-teal-500 to-blue-500"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to join the community?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Create your account and start sharing your ideas today
          </p>
          <a href="/register" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all font-bold text-xl">
            Get Started Free
          </a>
          <p className="mt-6 text-sm text-slate-500">
            Already have an account? <a href="/login" className="text-blue-400 hover:underline font-medium">Log in</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg">Mind Mesh</span>
              </div>
              <p className="text-sm">
                Where ideas connect and communities thrive.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Explore</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Trending</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guidelines</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Mind Mesh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}