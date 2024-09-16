'use client'

import {useState} from 'react'

export default function Button() {

  const [message, setMessage] = useState('')

  const motivationalSentenceParts = {
    start: [
      "Success starts when you",
      "Growth happens when you",
      "Change begins when you",
      "Your journey to greatness begins when you",
      "You will find success when you",
      "Progress happens when you",
      "The key to self-improvement is when you",
      "The path to greatness opens when you",
      "You can become unstoppable when you",
      "You will grow faster when you"
    ],
    middle: [
      "embrace challenges with courage,",
      "commit to daily improvement,",
      "push beyond your comfort zone,",
      "stay consistent in your efforts,",
      "believe in your own potential,",
      "take small but meaningful steps,",
      "focus on learning from failures,",
      "remain dedicated to your goals,",
      "overcome self-doubt with action,",
      "turn obstacles into opportunities,"
    ],
    end: [
      "and never look back.",
      "and watch yourself transform.",
      "and see progress unfold.",
      "and greatness will follow.",
      "and reach heights you never imagined.",
      "and success will come naturally.",
      "and achieve what you once thought impossible.",
      "and your life will change for the better.",
      "and inspire others around you.",
      "and become the best version of yourself."
    ]
  };
  
  const getMessage = () => {
    const start = motivationalSentenceParts.start[Math.floor(Math.random() * motivationalSentenceParts.start.length)];
    const middle = motivationalSentenceParts.middle[Math.floor(Math.random() * motivationalSentenceParts.middle.length)];
    const end = motivationalSentenceParts.end[Math.floor(Math.random() * motivationalSentenceParts.end.length)];

    return `${start} ${middle} ${end}`
  }

  const displayMessage = () => {
    setMessage(getMessage())
  }
  return (
    <>
      <div className="bg-blue-300 text-center">
        <button className="bg-slate-500" onClick={displayMessage}>CLICK HERE!</button>
        {message && (
          <p className="mt-4 text-lg font-semibold text-gray-800">{message}</p>
        )}
      </div>
    </>
  );
}
