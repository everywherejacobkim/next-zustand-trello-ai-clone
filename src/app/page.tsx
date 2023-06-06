import Header from '@/components/header';
import AIPrompt from '@/components/prompt/AIPrompt';
import Board from '@/components/board';

const lists = [
  {
    id: 'list-1',
    title: 'To Do',
    cards: [
      { id: 'card-1', title: 'Task 1' },
      { id: 'card-2', title: 'Task 2' },
    ],
  },
  {
    id: 'list-2',
    title: 'In Progress',
    cards: [
      { id: 'card-3', title: 'Task 3' },
      { id: 'card-4', title: 'Task 4' },
    ],
  },
  {
    id: 'list-3',
    title: 'Done',
    cards: [
      { id: 'card-5', title: 'Task 5' },
      { id: 'card-6', title: 'Task 6' },
    ],
  },
];


export default function Home() {
  return (
    <main>
      <Header />
      <AIPrompt />
      <Board lists={lists} />
    </main>
  )
}
