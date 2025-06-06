import React from 'react';
import { Link } from 'react-router-dom';

export default function Accueil() {
  return (
    <div className="min-h-screen bg-white font-body text-gray-700">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-heading text-gray-800">
              <span className="text-pink-300">Z'</span>Hair No
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link to="/" className="text-pink-300 font-medium">Accueil</Link></li>
                <li><Link to="/services" className="text-gray-700 hover:text-pink-300 transition">Services</Link></li>
                <li><Link to="/contact" className="text-gray-700 hover:text-pink-300 transition">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-700 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-image h-96 md:h-screen/2 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 200, 220, 0.3), rgba(248, 200, 220, 0.3)), 
                            url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-6">
          <h1 className="text-4xl md:text-6xl font-heading text-white mb-6">
            Bienvenue chez <span className="text-pink-300">Z'Hair No</span>
          </h1>
          <Link
            to="/reservation"
            className="inline-block bg-white hover:bg-gray-100 text-pink-300 py-3 px-8 rounded-full transition duration-300 text-lg font-medium"
          >
            Réserver un rendez-vous <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-16 text-center max-w-3xl">
        <h2 className="text-3xl font-heading text-gray-800 mb-6">L'art de la coiffure moderne</h2>
        <p className="text-lg text-gray-600 mb-8">
          Chez Z'Hair No, nous conjuguons expertise technique et créativité pour sublimer votre beauté naturelle.
          Dans notre espace lumineux et épuré, nous vous proposons une expérience capillaire sur mesure avec des produits d'exception.
        </p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-all">
            <div className="text-pink-300 mb-4">
              <i className="fas fa-award text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading mb-3">Stylistes expérimentés</h3>
            <p className="text-gray-600">Notre équipe de professionnels formés aux dernières techniques prendra soin de vos cheveux.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-all">
            <div className="text-pink-300 mb-4">
              <i className="fas fa-heart text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading mb-3">Ambiance chaleureuse</h3>
            <p className="text-gray-600">Un cadre élégant et convivial pour une pause beauté ressourçante.</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm hover:-translate-y-1 transition-all">
            <div className="text-pink-300 mb-4">
              <i className="fas fa-leaf text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading mb-3">Produits naturels</h3>
            <p className="text-gray-600">Nous utilisons exclusivement des produits capillaires naturels et respectueux.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-heading text-gray-800 mb-4">
                <span className="text-pink-300">Z'</span>Hair No
              </h3>
              <p className="text-gray-600 mb-4">Votre salon de coiffure élégant et moderne.</p>
              <p className="text-gray-600">
                <i className="fas fa-envelope mr-2 text-pink-300"></i> contact@z_hairno.ca
              </p>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-pink-300 font-medium">Accueil</Link></li>
                <li><Link to="/services" className="text-gray-600 hover:text-pink-300 transition">Services</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-pink-300 transition">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-600 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Nous suivre</h4>
              <div className="flex space-x-4">
                <button type="button" aria-label="Facebook" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-facebook-f text-xl"></i>
                </button>
                <button type="button" aria-label="Instagram" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-instagram text-xl"></i>
                </button>
                <button type="button" aria-label="Pinterest" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-pinterest-p text-xl"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            &copy; 2025 Z'Hair No. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
