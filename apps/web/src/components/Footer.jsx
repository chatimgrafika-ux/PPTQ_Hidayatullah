import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pondok Pesantren Hidayatullah Ternate</h3>
            <p className="leading-relaxed opacity-90 mb-4">
              Lembaga pendidikan Islam terpadu yang menggabungkan pendidikan agama dan umum untuk membentuk generasi Qur'ani yang berakhlak mulia.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed opacity-90">
                  Jl. Isnain Ibrahim, Kel. Gambesi. Ternate Selatan, Kota Ternate, Maluku Utara 97718
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="opacity-90">+62 82322995263</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="opacity-90">info@pptqhgambesi.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <div className="space-y-2">
              <Link to="/tentang-kami" className="block opacity-90 hover:opacity-100 transition-opacity">
                Tentang Kami
              </Link>
              <Link to="/ppdb" className="block opacity-90 hover:opacity-100 transition-opacity">
                Pendaftaran Santri Baru
              </Link>
              <Link to="/visi-misi" className="block opacity-90 hover:opacity-100 transition-opacity">
                Visi & Misi
              </Link>
              <Link to="/program-unggulan" className="block opacity-90 hover:opacity-100 transition-opacity">
                Program Unggulan
              </Link>
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="opacity-90">
            © {currentYear} Pondok Pesantren Hidayatullah Ternate. Hak cipta dilindungi.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="YouTube">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
