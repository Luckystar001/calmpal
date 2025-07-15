interface WaitlistConfirmationProps {
  isOpen: boolean
  onClose: () => void
  email: string
}

export default function WaitlistConfirmation({ isOpen, onClose, email }: WaitlistConfirmationProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">🎉 Welcome to CalmPal — You&apos;re In!</h2>
          <p className="text-sm text-gray-600">Confirmation sent to <span className="font-medium text-blue-600">{email}</span></p>
        </div>

        {/* Main Message */}
        <div className="space-y-3 mb-5">
          <p className="text-sm text-gray-700 leading-relaxed">
            Thanks for signing up! You&apos;re officially on the waitlist for CalmPal — the mobile app helping parents turn meltdowns into moments of calm.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            We&apos;re so excited to have you with us! You&apos;ll be the first to:
          </p>

          <ul className="space-y-2 ml-3">
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Get early access to the app</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Test new features</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">Join our CalmPal parenting village</span>
            </li>
          </ul>

          <p className="text-sm text-gray-700 leading-relaxed">
            Keep an eye on your inbox — we&apos;ll send updates and sneak peeks as we prepare for launch.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed">
            Until then, breathe easy… help is on the way. 💜
          </p>

          <p className="text-sm text-gray-700 font-medium">
            Warmly,<br />
            The CalmPal Team
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={onClose}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl text-sm"
          >
            Got it, thanks!
          </button>
          <button
            onClick={() => {
              // Share functionality could be added here
              if (navigator.share) {
                navigator.share({
                  title: 'CalmPal - Your everyday calm companion',
                  text: 'Check out CalmPal - helping parents manage toddler tantrums with confidence!',
                  url: window.location.href
                })
              }
            }}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 text-sm"
          >
            Share with friends
          </button>
        </div>
      </div>
    </div>
  )
}
