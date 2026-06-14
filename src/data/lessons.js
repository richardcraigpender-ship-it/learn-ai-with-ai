export const lessons = [
  {
    topicId: "what-is-ai",
    lessons: [
      {
        id: "ai-1",
        title: "What is AI, really?",
        type: "content",
        duration: 3,
        xp: 10,
        content: "AI is software designed to perform tasks that normally require human intelligence, such as understanding language, recognising patterns, and making decisions."
      },
      {
        id: "ai-2",
        title: "AI in your daily life",
        type: "content",
        duration: 4,
        xp: 10,
        content: "You already use AI every day—recommendations on Netflix, Google search results, voice assistants, and spam filters all rely on AI systems."
      },
      {
        id: "ai-3",
        title: "Types of AI",
        type: "content",
        duration: 5,
        xp: 10,
        content: "There are different types of AI: narrow AI (like chatbots), generative AI (like ChatGPT), and theoretical general AI which doesn’t yet exist."
      },
      {
        id: "ai-4",
        title: "Quick check",
        type: "quiz",
        xp: 10,
        question: "Which of these is an example of AI?",
        options: [
          "A calculator doing basic math",
          "Netflix recommending a show",
          "A light switch turning on",
          "A printed book"
        ],
        answer: 1
      }
    ]
  },

  {
    topicId: "prompting-basics",
    lessons: [
      {
        id: "prompt-1",
        title: "What is a prompt?",
        type: "content",
        duration: 3,
        xp: 10,
        content: "A prompt is the instruction or question you give to an AI. The quality of your prompt directly affects the quality of the response."
      },
      {
        id: "prompt-2",
        title: "Bad vs good prompts",
        type: "content",
        duration: 5,
        xp: 10,
        content: "Bad: 'Tell me about business.' Good: 'Explain how a small online business can increase sales using email marketing in simple terms.' Specific prompts get better results."
      },
      {
        id: "prompt-3",
        title: "The simple prompt formula",
        type: "content",
        duration: 5,
        xp: 10,
        content: "A strong prompt includes: role (who AI is), task (what you want), and context (extra detail). Example: 'You are a teacher. Explain photosynthesis to a 10-year-old using simple language.'"
      },
      {
        id: "prompt-4",
        title: "Try it yourself",
        type: "exercise",
        xp: 10,
        task: "Rewrite this prompt to improve it: 'Explain marketing.'"
      },
      {
        id: "prompt-5",
        title: "Quick check",
        type: "quiz",
        xp: 10,
        question: "What makes a prompt better?",
        options: [
          "Being as short as possible",
          "Being vague",
          "Adding clear detail and context",
          "Using complex words only"
        ],
        answer: 2
      }
    ]
  },

  {
    topicId: "ai-safety-basics",
    lessons: [
      {
        id: "safe-1",
        title: "Why AI safety matters",
        type: "content",
        duration: 4,
        xp: 10,
        content: "AI is powerful but not perfect. It can make mistakes, reflect bias, or produce misleading information, so using it responsibly is important."
      },
      {
        id: "safe-2",
        title: "AI can be wrong",
        type: "content",
        duration: 4,
        xp: 10,
        content: "AI does not 'know' things—it predicts answers. This means it can confidently give incorrect or outdated information."
      },
      {
        id: "safe-3",
        title: "Bias in AI",
        type: "content",
        duration: 5,
        xp: 10,
        content: "AI systems learn from data, and if that data contains bias, the AI can reflect or amplify it."
      },
      {
        id: "safe-4",
        title: "Safe usage habits",
        type: "content",
        duration: 5,
        xp: 10,
        content: "Always double-check important information, avoid sharing sensitive data, and treat AI as a helper—not a decision-maker."
      },
      {
        id: "safe-5",
        title: "Quick check",
        type: "quiz",
        xp: 10,
        question: "What is the safest way to use AI?",
        options: [
          "Trust everything it says",
          "Use it without checking",
          "Double-check important outputs",
          "Share personal data freely"
        ],
        answer: 2
      }
    ]
  }
];