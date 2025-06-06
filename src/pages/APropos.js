import React from 'react';
import { Link } from 'react-router-dom';

export default function APropos() {
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
                <li><Link to="/apropos" className="text-pink-300 font-medium">À Propos / Horaires</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">À Propos de Nous</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Intérieur élégant du salon Z'Hair No avec miroirs et fauteuils de coiffure"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Chez Z'Hair No, notre mission est de vous offrir une expérience de coiffure élégante, relaxante et personnalisée.
                Notre équipe de stylistes passionnés met tout en œuvre pour révéler votre beauté naturelle dans un cadre chaleureux et moderne.
              </p>
              <div className="border-l-4 border-pink-300 pl-4 py-2">
                <p className="text-xl font-heading italic text-gray-700">"Votre style, notre passion."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>

        {/* Hours Section */}
        <section className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">Horaires d'ouverture</h2>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <table className="w-full border-separate" style={{ borderSpacing: "0 1rem" }}>
              <tbody>
                <tr className="text-gray-700">
                  <td className="py-3 pr-4 font-medium">Lundi – Vendredi</td>
                  <td className="py-3 pl-4 text-right">09:00 – 18:00</td>
                </tr>
                <tr className="text-gray-700">
                  <td className="py-3 pr-4 font-medium">Samedi</td>
                  <td className="py-3 pl-4 text-right">10:00 – 16:00</td>
                </tr>
                <tr className="text-gray-400">
                  <td className="py-3 pr-4 font-medium">Dimanche</td>
                  <td className="py-3 pl-4 text-right">Fermé</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-8 text-center">
              <Link
                to="/reservation"
                className="inline-block bg-pink-300 hover:bg-accent text-white py-3 px-8 rounded-full transition duration-300"
              >
                Réserver un rendez-vous
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          Conçu par Didier
        </div>
      </footer>
    </div>
  );
}
