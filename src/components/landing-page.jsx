import { Shield, Phone, Mail, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "À Propos", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    (<div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-[#003366] text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Shield className="w-8 h-8" />
              <h1 className="text-xl font-bold">Planète Sécurité Services</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              {menuItems.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-gray-300">
                  {item.name}
                </a>
              ))}
            </nav>
            <button className="md:hidden" onClick={toggleMenu}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav
            className="md:hidden absolute top-full left-0 right-0 bg-[#003366] border-t border-white/20">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 hover:bg-[#004488]"
                onClick={toggleMenu}>
                {item.name}
              </a>
            ))}
          </nav>
        )}
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <Shield className="w-12 h-12" />
                <h1 className="text-3xl lg:text-4xl font-bold">Planète Sécurité Services</h1>
              </div>
              <p className="text-xl lg:text-2xl">
                Protéger votre Tranquillité d'esprit avec Planète Sécurité Services
              </p>
              <Button className="bg-white text-[#003366] hover:bg-gray-100">
                Contactez-nous
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="flex-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-01%20at%2015.45.21(2)-d1ytA4QFEe30MTbLcSMknhpFwrdwfK.jpeg"
                alt="PSS Logo"
                className="w-full max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </header>
      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12">Nos Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Gardiennage",
              "Protection rapprochée",
              "Escorte et transfert de valeurs",
              "Sécurité Evenementielle",
            ].map((service) => (
              <Card key={service} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 mb-4 text-[#003366]" />
                  <h3 className="font-semibold text-lg mb-2">{service}</h3>
                  <Button variant="link" className="text-[#003366] p-0">
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-16" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">À Propos de PSS</h2>
            <p className="text-gray-600 mb-6">
              Planète Sécurité Service (PSS) est une entreprise spécialisée dans le domaine de la sûreté et de la sécurité.
              Fondée sur des valeurs d'intégrité, de professionnalisme et d'innovation, PSS offre une gamme complète
              de services de sécurité pour répondre aux besoins variés de sa clientèle.
            </p>
            <p className="text-gray-600">
              L'entreprise emploie des agents de sécurité qualifiés et expérimentés, formés pour faire face à toutes
              les situations d'urgence et assurer la tranquillité d'esprit de ses clients.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-[#003366] text-white py-16" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Contactez-nous</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:78 1500813" className="hover:underline">78 1500813</a>
                <span className="mx-2">-</span>
                <a href="tel:77 5206738" className="hover:underline">77 5206738</a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:planetesecuriteservice@gmail.com"
                  className="hover:underline">
                  planetesecuriteservice@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Le Numéro 1 de la Sécurité Privée</p>
        </div>
      </footer>
    </div>)
  );
}