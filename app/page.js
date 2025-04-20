import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 min-h-screen text-white">
    {/* Navbar */}
    <nav className="flex justify-between items-center p-6 bg-white bg-opacity-10 backdrop-blur-md">
      <h1 className="text-2xl font-bold">HiiCom</h1>
      <ul className="flex space-x-6">
        <li><a href="#features" className="hover:text-gray-300">Features</a></li>
        <li><a href="#pricing" className="hover:text-gray-300">Pricing</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
      <button className="bg-white text-blue-600 px-4 py-2 rounded-lg">Get Started</button>
    </nav>

    {/* Hero Section */}
    <section className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Connect. Chat. Collaborate.</h1>
      <p className="text-lg mb-6">The fastest and most secure way to stay connected.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
        Try for Free
      </button>
    </section>

    {/* Features Section */}
    <section id="features" className="py-20 px-10 bg-white text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Why Choose HiiCom?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-lg rounded-lg bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">🔒 Secure Messaging</h3>
          <p>End-to-end encryption keeps your chats private.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">⚡ Blazing Fast</h3>
          <p>Instant messaging with zero delays.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-blue-50">
          <h3 className="text-2xl font-semibold mb-2">🌍 Global Access</h3>
          <p>Chat from anywhere, anytime.</p>
        </div>
      </div>
    </section>

    {/* Pricing Section */}
    <section id="pricing" className="py-20 px-10 bg-gray-100 text-gray-900">
      <h2 className="text-4xl font-bold text-center mb-10">Simple Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-2">🎉 Free</h3>
          <p className="text-lg">$0/month</p>
          <p>Basic features with limited access.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white border-2 border-blue-600">
          <h3 className="text-2xl font-semibold mb-2">🚀 Pro</h3>
          <p className="text-lg">$9.99/month</p>
          <p>Premium features with unlimited access.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Subscribe</button>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white">
          <h3 className="text-2xl font-semibold mb-2">🏢 Enterprise</h3>
          <p className="text-lg">Custom Pricing</p>
          <p>Tailored solutions for businesses.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">Contact Us</button>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer id="contact" className="py-10 bg-gray-900 text-center">
      <p>&copy; 2025 HiiCom. All rights reserved.</p>
    </footer>
  </div>

  );
}

export const metadata= {
  title: 'Commnext',
  description: 'connect communities with ease',
}