import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Wordle-anche app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wordle-anche/i);
  expect(linkElement).toBeInTheDocument();
});

test('allows the user to input a guess', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter your guess');
  fireEvent.change(inputElement, { target: { value: 'apple' } });
  expect(inputElement.value).toBe('apple');
});

test('displays the submitted guess', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText('Enter your guess');
  const submitButton = screen.getByText('Submit');
  
  fireEvent.change(inputElement, { target: { value: 'apple' } });
  fireEvent.click(submitButton);
  
  const submittedGuess = screen.getByText('Submitted Guess: apple');
  expect(submittedGuess).toBeInTheDocument();
});

test('displays the correct answer', () => {
  render(<App />);
  const correctAnswer = 'banana'; // Replace with the actual correct answer
  const inputElement = screen.getByPlaceholderText('Enter your guess');
  const submitButton = screen.getByText('Submit');
  
  fireEvent.change(inputElement, { target: { value: correctAnswer } });
  fireEvent.click(submitButton);
  
  const answerElement = screen.getByText(`Correct Answer: ${correctAnswer}`);
  expect(answerElement).toBeInTheDocument();
});

test('displays a win message when the correct answer is submitted', () => {
  render(<App />);
  const correctAnswer = 'grape'; // Replace with the actual correct answer
  const inputElement = screen.getByPlaceholderText('Enter your guess');
  const submitButton = screen.getByText('Submit');
  
  fireEvent.change(inputElement, { target: { value: correctAnswer } });
  fireEvent.click(submitButton);
  
  const winMessage = screen.getByText('Congratulations! You guessed the correct word.');
  expect(winMessage).toBeInTheDocument();
});
