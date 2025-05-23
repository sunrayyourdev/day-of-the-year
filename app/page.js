import Image from "next/image";

export default function Home() {
  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 1);
  const dayOfYear = Math.floor((today - startOfYear) / (1000 * 60 * 60 * 24)) + 1;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-xl font-semibold mb-4">Day of the Year</h1>
      <span className="text-8xl font-bold">{dayOfYear}</span>
      <span className="text-lg mt-2 text-gray-500">{today.toLocaleDateString('en-SG')}</span>
    </main>
  );
}
