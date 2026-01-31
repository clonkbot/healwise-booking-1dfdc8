import { useState } from 'react'

interface Doctor {
  id: number
  name: string
  specialty: string
  rating: number
  reviews: number
  image: string
  about: string
  clinic: string
  hours: string
  experience: number
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sarah Williams',
    specialty: 'General Practitioner',
    rating: 4.8,
    reviews: 120,
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Sarah Williams has over 10 years of experience providing quality healthcare and patient-centered treatment. She specializes in preventive care and chronic disease management.',
    clinic: 'City Wellness Clinic, Jalingo',
    hours: '9:00 AM - 4:00 PM',
    experience: 10
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Michael Chen is a board-certified cardiologist with expertise in interventional cardiology and heart failure management.',
    clinic: 'Heart Care Center',
    hours: '8:00 AM - 3:00 PM',
    experience: 15
  },
  {
    id: 3,
    name: 'Dr. Emily Parker',
    specialty: 'Pediatrician',
    rating: 4.7,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Emily Parker is passionate about children\'s health and development. She provides comprehensive care from newborns to adolescents.',
    clinic: 'KidsCare Medical Center',
    hours: '10:00 AM - 5:00 PM',
    experience: 8
  },
  {
    id: 4,
    name: 'Dr. James Thompson',
    specialty: 'Dentist',
    rating: 4.6,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. James Thompson specializes in cosmetic and restorative dentistry, helping patients achieve their perfect smile.',
    clinic: 'Bright Smile Dental',
    hours: '9:00 AM - 6:00 PM',
    experience: 12
  },
  {
    id: 5,
    name: 'Dr. Amara Okonkwo',
    specialty: 'Ophthalmologist',
    rating: 4.9,
    reviews: 78,
    image: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400&h=400&fit=crop&crop=face',
    about: 'Dr. Amara Okonkwo is an expert in eye care, specializing in cataract surgery and vision correction procedures.',
    clinic: 'ClearVision Eye Center',
    hours: '8:30 AM - 4:30 PM',
    experience: 14
  }
]

const categories = ['All', 'General', 'Dental', 'Pediatrics', 'Eye', 'Heart']

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const handleBookAppointment = () => {
    setShowBookingModal(true)
  }

  const confirmBooking = () => {
    setBookingConfirmed(true)
    setTimeout(() => {
      setShowBookingModal(false)
      setBookingConfirmed(false)
      setSelectedDoctor(null)
    }, 2000)
  }

  if (selectedDoctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f8f7f4] to-[#f0ede8]">
        <div className="max-w-md mx-auto relative">
          {/* Doctor Detail View */}
          <div className="animate-fade-in-up">
            {/* Header */}
            <div className="relative h-72 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c6f]/20 to-transparent z-10" />
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-6 left-4 z-20 w-10 h-10 glass-card rounded-full flex items-center justify-center premium-shadow hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white/80 premium-shadow-lg">
                    <img src={selectedDoctor.image} alt={selectedDoctor.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#4a7c6f] to-[#3d6b5f] rounded-full flex items-center justify-center premium-shadow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 -mt-8 relative z-10">
              <div className="glass-card rounded-3xl premium-shadow-lg p-6">
                <div className="text-center mb-6">
                  <h1 className="font-display text-2xl text-gray-900 mb-1">{selectedDoctor.name}</h1>
                  <p className="text-[#4a7c6f] font-medium text-sm">{selectedDoctor.specialty}</p>
                  <div className="flex items-center justify-center gap-2 mt-3">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold text-gray-900">{selectedDoctor.rating}</span>
                    </div>
                    <span className="text-gray-400">·</span>
                    <span className="text-gray-500 text-sm">({selectedDoctor.reviews} reviews)</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-[#f8f7f4] rounded-2xl p-3 text-center">
                    <p className="text-2xl font-bold text-[#4a7c6f]">{selectedDoctor.experience}+</p>
                    <p className="text-xs text-gray-500">Years Exp.</p>
                  </div>
                  <div className="bg-[#f8f7f4] rounded-2xl p-3 text-center">
                    <p className="text-2xl font-bold text-[#4a7c6f]">{selectedDoctor.reviews}</p>
                    <p className="text-xs text-gray-500">Reviews</p>
                  </div>
                  <div className="bg-[#f8f7f4] rounded-2xl p-3 text-center">
                    <p className="text-2xl font-bold text-[#4a7c6f]">{selectedDoctor.rating}</p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="w-1 h-4 bg-[#4a7c6f] rounded-full"></span>
                      About
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{selectedDoctor.about}</p>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#f8f7f4] rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center premium-shadow">
                      <svg className="w-5 h-5 text-[#4a7c6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{selectedDoctor.clinic}</p>
                      <p className="text-gray-500 text-xs mt-0.5">Primary Location</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-[#f8f7f4] rounded-2xl">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center premium-shadow">
                      <svg className="w-5 h-5 text-[#4a7c6f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 text-sm">{selectedDoctor.hours}</p>
                      <p className="text-gray-500 text-xs mt-0.5">Working Hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <button
                onClick={handleBookAppointment}
                className="w-full btn-primary text-white font-semibold py-4 rounded-2xl mt-6 mb-8"
              >
                Book Appointment
              </button>
            </div>
          </div>

          {/* Booking Modal */}
          {showBookingModal && (
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-end justify-center">
              <div className="bg-white rounded-t-3xl w-full max-w-md p-6 animate-fade-in-up">
                {bookingConfirmed ? (
                  <div className="text-center py-8">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl text-gray-900 mb-2">Booking Confirmed!</h3>
                    <p className="text-gray-500">Your appointment has been scheduled</p>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
                    <h3 className="font-display text-xl text-gray-900 mb-6">Select Date & Time</h3>
                    
                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">Available Dates</p>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {[12, 13, 14, 15, 16].map((day, i) => (
                          <button
                            key={day}
                            className={`flex-shrink-0 w-16 py-3 rounded-xl border-2 transition-all ${
                              i === 0
                                ? 'border-[#4a7c6f] bg-[#4a7c6f]/5'
                                : 'border-gray-200 hover:border-[#4a7c6f]/50'
                            }`}
                          >
                            <p className="text-xs text-gray-500">Feb</p>
                            <p className={`font-bold ${i === 0 ? 'text-[#4a7c6f]' : 'text-gray-900'}`}>{day}</p>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-medium text-gray-700 mb-3">Available Times</p>
                      <div className="grid grid-cols-3 gap-2">
                        {['9:00 AM', '10:30 AM', '11:00 AM', '2:00 PM', '3:30 PM', '4:00 PM'].map((time, i) => (
                          <button
                            key={time}
                            className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                              i === 1
                                ? 'bg-[#4a7c6f] text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setShowBookingModal(false)}
                        className="flex-1 py-4 rounded-2xl border-2 border-gray-200 font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={confirmBooking}
                        className="flex-1 btn-primary text-white font-semibold py-4 rounded-2xl"
                      >
                        Confirm
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          
          {/* Footer */}
          <footer className="pb-6 text-center">
            <p className="text-xs text-gray-400">
              Requested by <span className="text-gray-500">@0xPaulius</span> · Built by <span className="text-gray-500">@clonkbot</span>
            </p>
          </footer>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f4] to-[#f0ede8]">
      <div className="max-w-md mx-auto px-5 pt-6 pb-24">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-fade-in-up">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#4a7c6f]/20 premium-shadow">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">{getGreeting()},</p>
              <h1 className="font-display text-xl text-gray-900">Racheal</h1>
            </div>
          </div>
          <button className="w-11 h-11 glass-card rounded-full flex items-center justify-center premium-shadow hover:scale-105 transition-transform relative">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full ring-2 ring-white" />
          </button>
        </header>

        {/* Search */}
        <div className="mb-6 animate-fade-in-up stagger-1">
          <div className="glass-card rounded-2xl premium-shadow p-1">
            <div className="flex items-center gap-3 px-4 py-3">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search doctors, clinics or symptoms"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
              />
              <button className="w-9 h-9 bg-[#4a7c6f] rounded-xl flex items-center justify-center hover:bg-[#3d6b5f] transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 animate-fade-in-up stagger-2">
          <h2 className="font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-chip px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'active'
                    : 'bg-white/80 text-gray-600 premium-shadow hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Upcoming Appointment */}
        <div className="mb-8 animate-fade-in-up stagger-3">
          <h2 className="font-semibold text-gray-900 mb-4">Upcoming Appointment</h2>
          <div className="glass-card rounded-3xl premium-shadow-lg p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#4a7c6f]/10 to-transparent rounded-bl-full" />
            <div className="flex gap-4">
              <div className="w-24 h-28 rounded-2xl overflow-hidden premium-shadow flex-shrink-0">
                <img
                  src={doctors[0].image}
                  alt={doctors[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-lg text-gray-900">{doctors[0].name}</h3>
                <p className="text-[#4a7c6f] text-sm font-medium mb-3">{doctors[0].specialty}</p>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Feb 12, 2026</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSelectedDoctor(doctors[0])}
              className="w-full btn-primary text-white font-semibold py-3.5 rounded-2xl mt-4"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Popular Doctors */}
        <div className="animate-fade-in-up stagger-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Popular Doctors</h2>
            <button className="text-sm text-[#4a7c6f] font-medium hover:underline">See all</button>
          </div>
          <div className="space-y-4">
            {doctors.map((doctor, index) => (
              <button
                key={doctor.id}
                onClick={() => setSelectedDoctor(doctor)}
                className="doctor-card w-full glass-card rounded-2xl premium-shadow p-4 flex items-center gap-4 text-left"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">{doctor.name}</h3>
                  <p className="text-[#4a7c6f] text-sm">{doctor.specialty}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
                    <span className="text-gray-400 text-sm">({doctor.reviews})</span>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 pt-6 border-t border-gray-200/50 text-center">
          <p className="text-xs text-gray-400">
            Requested by <span className="text-gray-500">@0xPaulius</span> · Built by <span className="text-gray-500">@clonkbot</span>
          </p>
        </footer>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40">
        <div className="max-w-md mx-auto px-5 pb-5">
          <div className="glass-card rounded-2xl premium-shadow-lg px-6 py-4">
            <div className="flex items-center justify-between">
              <button className="nav-item relative flex flex-col items-center gap-1 active">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </svg>
                <span className="text-xs font-medium">Home</span>
              </button>
              <button className="nav-item relative flex flex-col items-center gap-1 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
                <span className="text-xs font-medium">Records</span>
              </button>
              <button className="nav-item relative flex flex-col items-center gap-1 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium">Schedule</span>
              </button>
              <button className="nav-item relative flex flex-col items-center gap-1 text-gray-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-medium">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default App