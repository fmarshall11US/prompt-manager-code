import { Header } from './components/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Manage Your Prompts with Ease
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Organize, store, and access your prompts all in one place. Perfect for content creators, developers, and AI enthusiasts.
          </p>
          <Link 
            href="/prompts" 
            className="inline-block bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </main>
    </div>
  );
}
