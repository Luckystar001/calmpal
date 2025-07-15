import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="CalmPal Logo"
              width={100}
              height={32}
              className="h-8 w-auto"
            />
            <p className="text-sm text-gray-500">Your everyday calm companion</p>
          </div>

          {/* Footer Links */}
          <div className="flex items-center space-x-8">
            <a href="#privacy" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Terms
            </a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
