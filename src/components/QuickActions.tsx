import Image from "next/image"
interface QuickActionsProps {
  onSectionChange: (section: string) => void
}

export default function QuickActions({ onSectionChange }: QuickActionsProps) {
  const screenshots = [
    {
      id: 'screenshot1',
      title: 'SOS Mode',
      description: 'Tantrum happening now',
      image: '/18f141944323aeecbc85ca1ff21fe891.jpg',
      width: 200,
      height: 60,
    },
    {
      id: 'screenshot2',
      title: 'Parent Calm',
      description: 'Quick breathing',
      image: '/61418ce04dac60de73b9dc87a47ac2a9.jpg',
     width: 200,
      height: 60,
    },
    {
      id: 'screenshot3',
      title: 'Prevention Tips',
      description: 'Avoid meltdowns',
      image: '/abcf723f9882bc2eae5a21abc1e5e46c.jpg',
     width: 200,
      height: 60,
    }
  ]

  return (
    <section className="mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 text-center leading-tight">
        See CalmPal in action
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium text-center">
        Simple, intuitive design that works when you need it most
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {screenshots.map((screenshot, index) => (
          <div
            key={screenshot.id}
            className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
          >
            {/* App Screenshot */}
            <div className="relative bg-gray-50 p-8 flex items-center justify-center">
              <div className="relative w-full max-w-xs">
                <Image
                  src={screenshot.image}
                  alt={`${screenshot.title} - ${screenshot.description}`}
                  className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                  width={screenshot.width}
                  height={screenshot.height}
               />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex items-center justify-center">
                  <button
                    onClick={() => onSectionChange(screenshot.id)}
                    className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-sm text-gray-800 px-6 py-3 rounded-full font-medium shadow-xl transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 hover:bg-white hover:scale-110"
                  >
                    View Demo
                  </button>
                </div>

                {/* Animated border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-500"></div>
              </div>
            </div>

            
          </div>
        ))}
      </div>
    </section>
  )
}
