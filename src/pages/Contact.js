import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
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
                <li><Link to="/" className="text-gray-700 hover:text-pink-300 transition">Accueil</Link></li>
                <li><Link to="/services" className="text-gray-700 hover:text-pink-300 transition">Services</Link></li>
                <li><Link to="/contact" className="text-pink-300 font-medium">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-700 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner with Pink Gradient */}
      <section className="bg-gradient-to-r from-[#f8c8dc] to-[#f3e5e5] py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading text-gray-800 mb-4">Contactez-nous</h1>
          <p className="text-lg">Nous sommes là pour vous aider !</p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-heading text-gray-800 mb-6">Envoyez-nous un message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Nom complet</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Votre nom" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Adresse courriel</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="votre@email.com" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Sujet</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300">
                  <option>Sélectionnez un sujet</option>
                  <option>Rendez-vous</option>
                  <option>Question sur les services</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Votre message..."></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-300 hover:bg-accent text-white py-3 px-6 rounded transition duration-300">
                Envoyer <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-heading text-gray-800 mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-pink-300 mr-4 mt-1">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Adresse</h3>
                    <p className="text-gray-600">123 Rue de la Beauté<br />Montréal, QC H3B 2Y5</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-300 mr-4 mt-1">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">(514) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-300 mr-4 mt-1">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@z_hairno.ca</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-pink-300 mr-4 mt-1">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Heures d'ouverture</h3>
                    <p className="text-gray-600">Lundi-Vendredi: 9h-18h<br />Samedi: 9h-16h<br />Dimanche: Fermé</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div style={{ height: "300px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.048493383716!2d-73.5699876844406!3d45.50373497910138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Z'Hair No location"
                ></iframe>
              </div>
            </div>
          </div>
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
                <li><Link to="/services" className="text-gray-600 hover:text-pink-300 transition">Services</Link></li>
                <li><Link to="/contact" className="text-pink-300 font-medium">Contact</Link></li>
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
