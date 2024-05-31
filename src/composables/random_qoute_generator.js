import { ref } from "vue";

export const quotes = ref([
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    meaning:
      "This quote by Steve Jobs emphasizes the importance of passion in achieving great results. When you love what you do, it's easier to put in the effort required to excel.",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    meaning:
      "This quote by Theodore Roosevelt suggests that self-belief is a crucial part of achieving any goal. If you believe in your abilities, you've already overcome half the challenge.",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    meaning:
      "This quote by John Lennon is a reminder that sometimes, the best things in life happen unexpectedly. It's important to stay open and flexible to life's surprises.",
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
    meaning:
      "This quote by Franklin D. Roosevelt suggests that our doubts and fears can limit our potential. By overcoming these doubts, we can achieve our full potential.",
  },
  {
    text: "Go confidently in the direction of your dreams! Live the life you've imagined.",
    author: "Henry David Thoreau",
    meaning:
      "This quote by Henry David Thoreau encourages us to have confidence in our dreams and to actively work towards them. It's a call to live the life we've imagined, rather than settling for less.",
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    meaning:
      "This quote emphasizes that every long journey begins with a first step, no matter how small. It encourages taking the first step towards achieving a large or difficult goal.",
  },
]);

export const currentquote = ref({ text: "", author: "", meaning: "" });
export function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  currentquote.value = quotes.value[randomIndex];
}
export default function useQuotes() {
  return {
    quotes,
    currentquote,
    getRandomQuote,
  };
}
