import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    e.target.reset();
  };

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
                <li><Link to="/contact" className="text-gray-700 hover:text-pink-300 transition">Contact</Link></li>
                <li><Link to="/apropos" className="text-gray-700 hover:text-pink-300 transition">À Propos / Horaires</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading text-gray-800 mb-4">Réserver un rendez-vous</h1>
            <p className="text-gray-600">Remplissez le formulaire ci-dessous pour réserver votre créneau</p>
          </div>

          {/* Booking Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 mb-2">Nom complet</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Votre nom complet" required />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 mb-2">Adresse courriel</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="votre@email.com" required />
              </div>

              {/* Phone */}
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 mb-2">Numéro de téléphone</label>
                <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="(123) 456-7890" required />
              </div>

              {/* Service Selection */}
              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 mb-2">Choisir un service</label>
                <select id="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" required>
                  <option value="" disabled selected>Sélectionnez un service</option>
                  <option value="coupe-femme">Coupe femme (à partir de 45€)</option>
                  <option value="coupe-homme">Coupe homme (à partir de 35€)</option>
                  <option value="coloration">Coloration (à partir de 65€)</option>
                  <option value="brushing">Brushing (à partir de 40€)</option>
                  <option value="soins">Soins capillaires (à partir de 50€)</option>
                  <option value="meches">Mèches & Balayage (à partir de 75€)</option>
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
                  <input type="date" id="date" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" required />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">Heure</label>
                  <select id="time" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" required>
                    <option value="" disabled selected>Sélectionnez une heure</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </select>
                </div>
              </div>

              {/* Comments */}
              <div className="mb-8">
                <label htmlFor="comments" className="block text-gray-700 mb-2">Commentaires (optionnel)</label>
                <textarea id="comments" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300" placeholder="Avez-vous des demandes particulières ?"></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="w-full bg-pink-300 hover:bg-accent text-white py-4 px-6 rounded-lg transition duration-300 font-medium">
                Confirmer la réservation <i className="fas fa-check ml-2"></i>
              </button>
            </form>

            {/* Confirmation Message */}
            {submitted && (
              <div className="mt-8 p-6 bg-green-50 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-2xl mr-3"></i>
                  <div>
                    <h3 className="font-medium text-lg">Réservation confirmée !</h3>
                    <p className="mt-1">Nous avons bien reçu votre demande de rendez-vous. Vous recevrez une confirmation par email sous peu.</p>
                  </div>
                </div>
              </div>
            )}
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
