import React, { useState } from 'react';
import { MapPin, Mail, Phone, Calendar, Clock, Users, Award, Camera, X } from 'lucide-react';

// --- Helper Data ---
// This data is now updated with the information you provided.
const directors = [
  { name: 'Chandra Sekhar Kancheti', title: 'President and Director', imageUrl: 'Chandra Sekhar.jpeg', bio: null },
  { name: 'Ashwini Kancheti', title: 'Director', imageUrl: 'Ashwini.jpeg', bio: null },
  { name: 'Mamatha Nalla', title: 'Director', imageUrl: 'Mamatha.jpeg', bio: null },
  { name: 'Naga Ramgopal Yannam', title: 'Director', imageUrl: 'Naga Ramgopal.jpeg', bio: null },
  { name: 'Vinay Medavarapu', title: 'Director', imageUrl: 'Vinay.jpg', bio: null },
  { 
    name: 'Praveen Pataparla', 
    title: 'Director', 
    imageUrl: 'Praveen Pataparla.jpg', 
    bio: "Praveen Pataparla is an accomplished commercial banker and business advisor with nearly two decades of international experience across the financial services landscape. He has successfully developed and managed client portfolios with revenues of up to $100 million, earning a reputation as a trusted advisor to businesses at every stage — from startups to large-scale enterprises.\n\nPraveen’s core expertise lies in trade finance, commercial lending, and financial controls, with a deep understanding of how banks evaluate loan applications and financial statements. His ability to translate complex financial data into actionable strategies has helped countless businesses secure the capital they need for growth and stability.\n\nIn addition to his technical knowledge, Praveen is known for his strengths in prospecting, lead generation, negotiation, and relationship management. These skills have consistently positioned him as a top performer in the commercial banking space, both in client acquisition and retention.\n\nAs a financial strategist, Praveen is passionate about helping businesses build sustainable financial frameworks. He regularly advises on funding options, financial planning, and improving creditworthiness — empowering leaders to make informed, strategic decisions.\n\nWith a global perspective and a hands-on approach, Praveen continues to be a driving force in shaping success stories across the financial landscape."
  },
];

const galleryItems = [
  { type: 'photo', src: 'https://placehold.co/600x400/FFC107/FFFFFF?text=Ugadi+Photo+1', alt: 'Ugadi Celebrations' },
  { type: 'photo', src: 'https://placehold.co/600x400/FFC107/FFFFFF?text=Ugadi+Photo+2', alt: 'Ugadi Celebrations' },
  { type: 'photo', src: 'https://placehold.co/600x400/FFC107/FFFFFF?text=Ugadi+Photo+3', alt: 'Ugadi Celebrations' },
  { type: 'photo', src: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Sankranti+Photo+1', alt: 'Sankranti Gathering' },
  { type: 'photo', src: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Sankranti+Photo+2', alt: 'Sankranti Gathering' },
  { type: 'photo', src: 'https://placehold.co/600x400/E91E63/FFFFFF?text=Sankranti+Photo+3', alt: 'Sankranti Gathering' },
  { type: 'video', videoId: 'dQw4w9WgXcQ', title: 'Cultural Dance Performance #1' },
  { type: 'video', videoId: '3JZ_D3pSS4U', title: 'Cultural Dance Performance #2' },
];

const upcomingEvents = [
  {
    title: 'Sri Lakshmi Narasimha Swamy Kalyanam',
    date: 'Saturday, August 23, 2025',
    time: '9:00 AM - 3:00 PM',
    venue: 'Hindu Temple & Cultural Center of Windsor',
    description: 'Details will be provided soon. Please join us for this auspicious occasion.',
  },
];

// --- Social Media Icons (SVGs) ---
const FacebookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const YouTubeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>;


// --- Reusable Components ---

const NavLink = ({ page, activePage, setPage, children }) => (
  <button
    onClick={() => setPage(page)}
    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
      activePage === page
        ? 'bg-amber-500 text-white shadow-md'
        : 'text-gray-700 hover:bg-amber-100 hover:text-amber-800'
    }`}
  >
    {children}
  </button>
);

const Header = ({ activePage, setPage }) => (
  <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
           <img src="Windsor Telugu Association logo.jpg" alt="Windsor Telugu Association Logo" className="h-14 w-14"/>
          <span className="text-lg md:text-xl font-bold text-gray-800 tracking-tight">
            Windsor Telugu Association
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLink page="home" activePage={activePage} setPage={setPage}>Home</NavLink>
          <NavLink page="about" activePage={activePage} setPage={setPage}>About Us</NavLink>
          <NavLink page="gallery" activePage={activePage} setPage={setPage}>Gallery</NavLink>
          <NavLink page="events" activePage={activePage} setPage={setPage}>Upcoming Events</NavLink>
        </nav>
        <div className="md:hidden">
            <select 
                onChange={(e) => setPage(e.target.value)} 
                value={activePage}
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm rounded-md"
            >
                <option value="home">Home</option>
                <option value="about">About Us</option>
                <option value="gallery">Gallery</option>
                <option value="events">Upcoming Events</option>
            </select>
        </div>
      </div>
    </div>
  </header>
);

const Footer = () => (
    <footer className="bg-stone-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-lg font-bold text-amber-400 mb-4">Windsor Telugu Association</h3>
                    <p className="text-stone-300 text-sm">A non-profit organization dedicated to preserving and promoting Telugu culture, language, and heritage in the Windsor-Essex community.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-amber-400 mb-4">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <MapPin size={16} className="text-amber-400"/>
                            <span>2115 Pelissier Street, Windsor, ON</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <Mail size={16} className="text-amber-400"/>
                            <a href="mailto:info@manawindsor.ca" className="hover:text-amber-300">info@manawindsor.ca</a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start space-x-2">
                            <Phone size={16} className="text-amber-400"/>
                            <a href="tel:+1-647-717-1118" className="hover:text-amber-300">(647) 717-1118</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-amber-400 mb-4">Follow Us</h3>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://www.facebook.com/share/1FbC8PWyRZ/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400"><FacebookIcon /></a>
                        <a href="https://www.instagram.com/manawindsortelugu?igsh=MW12eGQ3b3FpdW83cg==" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400"><InstagramIcon /></a>
                        <a href="http://www.youtube.com/@manawindsor" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-amber-400"><YouTubeIcon /></a>
                    </div>
                </div>
            </div>
            <div className="mt-12 border-t border-stone-700 pt-6 text-center text-sm text-stone-400">
                <p>&copy; {new Date().getFullYear()} Windsor Telugu Association. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

const PageTitle = ({ title, subtitle }) => (
    <div className="bg-amber-50 py-12 text-center">
        <h1 className="text-4xl font-bold text-amber-800 tracking-tight">{title}</h1>
        <p className="mt-2 text-lg text-gray-600">{subtitle}</p>
    </div>
);

const BioModal = ({ director, onClose }) => {
    if (!director) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-6 relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700">
                        <X size={24} />
                    </button>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <img 
                            src={director.imageUrl} 
                            alt={`Portrait of ${director.name}`} 
                            className="w-32 h-32 rounded-full shadow-lg object-cover flex-shrink-0"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400/FFC107/FFFFFF?text=WTA'; }}
                        />
                        <div className="text-center sm:text-left">
                            <h2 className="text-2xl font-bold text-amber-800">{director.name}</h2>
                            <p className="text-md text-amber-700 font-semibold">{director.title}</p>
                        </div>
                    </div>
                    <div className="mt-6 prose prose-sm max-w-none text-gray-600 whitespace-pre-wrap">
                        {director.bio}
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- Page Components ---

const HomePage = ({ setPage }) => (
    <div>
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] bg-cover bg-center" style={{backgroundImage: "url('Windsor Telugu Association Banner.jpg')"}}>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                <div className="text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">Preserving Culture, Building Community</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Welcome to the Windsor Telugu Association, your home for Telugu culture, language, and traditions.</p>
                    <button onClick={() => setPage('events')} className="mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-transform transform hover:scale-105 shadow-lg">
                        View Upcoming Events
                    </button>
                </div>
            </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="prose lg:prose-lg max-w-none text-gray-700">
                        <h2 className="text-3xl font-bold text-amber-800">About Our Association</h2>
                        <p>The Windsor Telugu Association (WTA) is a vibrant, non-profit organization established to serve the Telugu-speaking community in the Windsor-Essex region. Our mission is to create a home away from home by celebrating our rich cultural heritage and fostering a strong sense of community.</p>
                        <p>From celebrating major festivals like Ugadi and Sankranti to organizing cultural workshops, language classes, and community support initiatives, we strive to bring people together and pass on our traditions to the next generation.</p>
                    </div>
                    <div>
                        <img src="https://placehold.co/600x400/FFF0E5/333?text=Community+Gathering" alt="Community gathering" className="rounded-lg shadow-xl"/>
                    </div>
                </div>
            </div>
        </section>

        {/* Key Areas Section */}
        <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-amber-800">What We Do</h2>
                    <p className="mt-2 text-lg text-gray-600">Our efforts are focused on three key areas.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <Calendar size={48} className="mx-auto text-amber-500 mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">Cultural Events</h3>
                        <p className="mt-2 text-gray-600">We host vibrant celebrations for major Telugu festivals, bringing our traditions to life with music, dance, and food.</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <Users size={48} className="mx-auto text-amber-500 mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">Community Support</h3>
                        <p className="mt-2 text-gray-600">We provide a support network for newcomers and long-time residents, fostering connections and offering help where needed.</p>
                    </div>
                    <div className="p-8 bg-white rounded-lg shadow-lg">
                        <Award size={48} className="mx-auto text-amber-500 mb-4"/>
                        <h3 className="text-xl font-semibold text-gray-800">Heritage Promotion</h3>
                        <p className="mt-2 text-gray-600">Through workshops and classes, we are committed to promoting the Telugu language and arts for future generations.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

const AboutPage = ({ setSelectedDirector }) => (
    <div>
        <PageTitle title="About Us" subtitle="Our Mission, Our Vision, Our Team" />
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="prose max-w-none text-gray-700">
                        <h3 className="text-2xl font-bold text-amber-800">Our Mission</h3>
                        <p>To preserve, promote, and celebrate the rich cultural and linguistic heritage of the Telugu people in the Windsor-Essex region. We aim to build a cohesive and supportive community by organizing cultural and educational events, fostering social connections, and providing a platform for artistic expression.</p>
                    </div>
                    <div className="prose max-w-none text-gray-700">
                        <h3 className="text-2xl font-bold text-amber-800">Our Vision</h3>
                        <p>To be the central hub for the Telugu community in Windsor, creating a vibrant cultural ecosystem where traditions are cherished, community bonds are strengthened, and future generations are inspired to embrace their heritage with pride and enthusiasm.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 bg-amber-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-amber-800">Meet Our Directors</h2>
                    <p className="mt-2 text-lg text-gray-600">The dedicated team leading our association.</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {directors.map((director) => (
                        <div key={director.name} className="text-center flex flex-col items-center">
                            <img 
                                src={director.imageUrl} 
                                alt={`Portrait of ${director.name}`} 
                                className="w-32 h-32 mx-auto rounded-full shadow-lg object-cover"
                                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400/FFC107/FFFFFF?text=WTA'; }}
                            />
                            <h4 className="mt-4 text-lg font-semibold text-gray-800">{director.name}</h4>
                            <p className="text-sm text-amber-700">{director.title}</p>
                            {director.bio && (
                                <button onClick={() => setSelectedDirector(director)} className="mt-2 text-sm text-blue-600 hover:underline">
                                    Read Bio
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const GalleryPage = () => (
    <div>
        <PageTitle title="Event Gallery" subtitle="Cherishing the moments we've shared together." />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9">
                        {item.type === 'photo' ? (
                            <>
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-lg font-bold">{item.alt}</h3>
                                </div>
                            </>
                        ) : (
                            <div className="relative w-full h-full">
                                <img src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`} alt={item.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4">
                                    <Camera size={48} className="mb-2"/>
                                    <h3 className="text-lg font-bold text-center">{item.title}</h3>
                                    <p className="text-sm">(Video)</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
             <p className="text-center mt-8 text-gray-600">Please provide your photos and video links to update the gallery!</p>
        </div>
    </div>
);

const EventsPage = () => (
    <div>
        <PageTitle title="Upcoming Events" subtitle="Join us for our next community gathering!" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto space-y-12">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map((event, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-amber-500 text-white p-6 flex flex-col justify-center items-center text-center">
                                <p className="text-5xl font-bold">{event.date.split(' ')[2].replace(',', '')}</p>
                                <p className="text-xl font-semibold">{event.date.split(' ')[1].slice(0, 3).toUpperCase()}</p>
                                <p className="text-lg">{event.date.split(',')[2].trim()}</p>
                                <p className="text-sm mt-1">{event.date.split(',')[0]}</p>
                            </div>
                            <div className="p-6 md:w-2/3">
                                <h3 className="text-2xl font-bold text-amber-800">{event.title}</h3>
                                <div className="flex flex-wrap items-center text-gray-600 mt-2 space-x-4 text-sm">
                                    <span className="flex items-center"><Clock size={14} className="mr-1.5"/> {event.time}</span>
                                    <span className="flex items-center"><MapPin size={14} className="mr-1.5"/> {event.venue}</span>
                                </div>
                                <p className="mt-4 text-gray-700">{event.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-700">No upcoming events scheduled.</h3>
                        <p className="mt-2 text-gray-500">Please check back soon for future announcements!</p>
                    </div>
                )}
            </div>
        </div>
    </div>
);


// --- Main App Component ---
export default function App() {
    const [activePage, setPage] = useState('home');
    const [selectedDirector, setSelectedDirector] = useState(null);

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage setPage={setPage} />;
            case 'about':
                return <AboutPage setSelectedDirector={setSelectedDirector} />;
            case 'gallery':
                return <GalleryPage />;
            case 'events':
                return <EventsPage />;
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <Header activePage={activePage} setPage={setPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
            <BioModal director={selectedDirector} onClose={() => setSelectedDirector(null)} />
        </div>
    );
}
