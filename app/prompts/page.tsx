import { Header } from '../components/Header';

export default function PromptsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Prompts</h1>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">No prompts yet. Create your first prompt to get started.</p>
        </div>
      </main>
    </div>
  );
} 