'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import QuickActions from '@/components/QuickActions'
import Footer from '@/components/Footer'
import WaitlistConfirmation from '@/components/WaitlistConfirmation'
export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [showWaitlistConfirmation, setShowWaitlistConfirmation] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string

    if (email) {
      setUserEmail(email)
      setShowWaitlistConfirmation(true)
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email)
    }
  }

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist-signup')
    if (waitlistSection) {
      waitlistSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-20 py-8">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 leading-tight">
              Your everyday <span className="text-blue-500">calm companion</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              For tantrums, meltdowns, and big feelings.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              CalmPal helps parents manage toddler tantrums with confidence, calm,
              and community support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={scrollToWaitlist}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join the Waitlist
              </button>
             
            </div>

            <div className="flex items-center space-x-2 pt-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-500">Join 1,000+ parents already on the waitlist</span>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 via-orange-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                       
                <Image src="/image.png" alt="" width={600} height={450}/>
               
              
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="text-center mb-16 bg-white rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Tired of tantrums taking over your day?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            You&apos;re not alone. Every parent faces those overwhelming moments when nothing
            seems to work. CalmPal transforms chaos into calm with expert-backed tools, real-time
            guidance, and a supportive community that truly understands your journey.
          </p>
        </section>

        {/* Everything in One App Section */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
            Everything you need in one app
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Tools designed by child psychology experts for real parenting moments
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* SOS Calming Assistant */}
            <div className="group bg-blue-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-all duration-300">SOS Calming Assistant</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Instant, step-by-step guidance when tantrums strike.
                Get personalized strategies based on your child&apos;s age and triggers.
              </p>
            </div>

            {/* Mood & Tantrum Tracker */}
            <div className="group bg-yellow-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-yellow-100">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-yellow-700 transition-all duration-300">Mood & Tantrum Tracker</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Spot patterns and triggers over time. Understanding
                leads to prevention and better responses.
              </p>
            </div>

            {/* Avatar Coach */}
            <div className="group bg-orange-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-orange-100">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-orange-700 transition-all duration-300">Avatar Coach</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Help kids name and manage big emotions with
                friendly, interactive characters they&apos;ll love.
              </p>
            </div>

            {/* Daily Routine Builder */}
            <div className="group bg-green-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-green-100">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-all duration-300">Daily Routine Builder</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Create predictable, calming routines that reduce
                meltdowns before they start.
              </p>
            </div>

            {/* Expert Tips Library */}
            <div className="group bg-purple-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-purple-100">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-purple-700 transition-all duration-300">Expert Tips Library</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Trusted advice from child psychologists, organized by
                age and situation.
              </p>
            </div>

            {/* Ask the Nest Community */}
            <div className="group bg-blue-50 rounded-2xl p-8 text-left hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:bg-blue-100">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-700 transition-all duration-300">&ldquo;Ask the Nest&rdquo; Community</h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-all duration-300">
                Connect with parents who get it. Share experiences
                and get support 24/7.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <QuickActions onSectionChange={setActiveSection} />



        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-12 text-center leading-tight">
            You&apos;re not alone in this journey
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-yellow-600 font-bold text-lg">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Sarah M.</h4>
                  <p className="text-sm text-gray-600">Mom of twins, age 3</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Finally, an app that actually helps in the moment! The SOS feature talked me through our worst grocery store meltdown.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold text-lg">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Marcus T.</h4>
                  <p className="text-sm text-gray-600">First-time dad</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;The community feature is a lifesaver. Knowing other parents go through this too makes such a difference.&rdquo;
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">L</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lisa K.</h4>
                  <p className="text-sm text-gray-600">Mom of 2, preschool teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;I love how the tracking helped me see patterns. Now I can prevent most tantrums before they start!&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="waitlist-signup" className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent mb-8 leading-tight">
              Ready to find your calm?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the CalmPal waitlist and be among the first to access our early release.
              <br />
              <span className="text-gray-700 font-semibold">Parenting doesn&apos;t have to feel overwhelming.</span>
            </p>
          </div>

          <div className="relative z-10">
            <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-8 py-5 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-lg font-medium bg-white/80 backdrop-blur-sm shadow-lg"
              />
              <button type="submit" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform whitespace-nowrap">
                Join Waitlist
              </button>
            </form>

            <p className="text-base text-gray-600 mt-6 font-medium">
              No spam, just helpful parenting tips and early access updates.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Waitlist Confirmation Modal */}
      <WaitlistConfirmation
        isOpen={showWaitlistConfirmation}
        onClose={() => setShowWaitlistConfirmation(false)}
        email={userEmail}
      />
    </div>
  )
}
