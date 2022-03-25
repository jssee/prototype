import {  useState } from 'preact/hooks';
import {  ArrowDownIcon,  ArrowUpIcon } from '@radix-ui/react-icons';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <section class="flex h-screen items-center justify-center bg-gray-100">
      <div class="rounded border bg-white px-10 py-8">
        <h1 class="text-xl font-bold">Home</h1>
        <p>This is the home page.</p>
        <div class="flex items-center justify-between">
          <button
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white"
            onClick={() => setCount(count - 1)}
          >
            <ArrowDownIcon />
          </button>
          <output>Count: {count}</output>
          <button
            class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white"
            onClick={() => setCount(count + 1)}
          >
            <ArrowUpIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
