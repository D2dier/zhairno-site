import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div className="min-h-screen bg-white font-body text-gray-700">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-heading text-gray-800">
              <span className="text-pink-300">Z'</span>Hair No
            </div>
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li><Link to="/" className="text-gray-700 hover:text-pink-300 transition">Accueil</Link></li>
                <li><Link to="/services" className="text-pink-300 font-medium">Services</Link></li>
                <li><Link to="/contact" className="text-gray-700 hover:text-pink-300 transition">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-700 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner with Gradient Pink */}
      <section className="bg-gradient-to-r from-[#f8c8dc] to-[#f3e5e5] py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading text-gray-800 mb-4">Nos Services</h1>
          <p className="text-lg">Découvrez notre expertise capillaire</p>
        </div>
      </section>

      {/* Services Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Each Service Card */}
          {[
            {
              title: "Coupe Femme",
              description: "Une coupe personnalisée selon votre morphologie et vos envies, avec conseils d'entretien.",
              icon: "fa-cut",
              price: "À partir de 45€"
            },
            {
              title: "Coupe Homme",
              description: "Coupe moderne ou classique avec finitions au rasoir pour un résultat impeccable.",
              icon: "fa-male",
              price: "À partir de 35€"
            },
            {
              title: "Coloration",
              description: "Coloration professionnelle avec produits de qualité pour un résultat éclatant.",
              icon: "fa-paint-brush",
              price: "À partir de 65€"
            },
            {
              title: "Brushing",
              description: "Mise en forme et brushing professionnel pour une chevelure brillante et soyeuse.",
              icon: "fa-wind",
              price: "À partir de 40€"
            },
            {
              title: "Soins capillaires",
              description: "Soins nutritifs et réparateurs adaptés à votre type de cheveux pour une beauté naturelle.",
              icon: "fa-spa",
              price: "À partir de 50€"
            },
            {
              title: "Mèches & Balayage",
              description: "Effet soleil naturel avec des techniques de pose précises pour un résultat lumineux.",
              icon: "fa-magic",
              price: "À partir de 75€"
            },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
              <div className="rounded-full flex items-center justify-center mx-auto mb-4 bg-[#f8c8dc] w-[60px] h-[60px]">
                <i className={`fas ${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-heading text-center mb-3">{service.title}</h3>
              <p className="text-gray-600 text-center mb-4">{service.description}</p>
              <p className="text-pink-300 font-medium text-center">{service.price}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link to="/reservation" className="inline-block bg-pink-300 hover:bg-accent text-white py-3 px-8 rounded-full transition duration-300 text-lg">
            Réserver un rendez-vous <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </main>

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
                <li><Link to="/" className="text-gray-600 hover:text-pink-300 transition">Accueil</Link></li>
                <li><Link to="/services" className="text-pink-300 font-medium">Services</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-pink-300 transition">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-600 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-4">Nous suivre</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-300 transition">
                  <i className="fab fa-pinterest-p text-xl"></i>
                </a>
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
