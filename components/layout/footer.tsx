import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-3xl mb-4">EGC</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Engineering Group Company - A multi-disciplinary architectural practice dedicated to creating exceptional
              spaces that honor heritage and embrace innovation.
            </p>
            <div className="text-sm text-primary-foreground/60">Established 1998 | Benghazi, Libya</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#founders"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Co-Founders
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Architectural Design</li>
              <li>Urban Planning</li>
              <li>Project Management</li>
              <li>Heritage Restoration</li>
              <li>Interior Design</li>
              <li>Consultation</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© {currentYear} Engineering Group Company. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
