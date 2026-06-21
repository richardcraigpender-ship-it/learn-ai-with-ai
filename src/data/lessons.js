export const lessons = [
  {
    topicId: "what-is-ai",
    lessons: [
      { id: "what-is-ai-1", order: 1, title: "What AI actually is", type: "content", duration: 4, xp: 10, objective: "Understand a simple, practical definition of AI.", content: `Artificial intelligence, or AI, is software that can do tasks that normally seem to require human intelligence. That includes recognising patterns, generating text, answering questions, making predictions, and helping with decisions.

AI does not think like a person. It does not have emotions, opinions, or human understanding. Instead, it works by learning patterns from large amounts of data and using those patterns to produce an output.

A simple way to think about AI is this: it is a system that has been trained to notice patterns and respond in useful ways.`.trim(), keyTakeaways: ["AI is software that performs tasks involving patterns, prediction, or generation.", "AI does not think like a human being.", "AI works by learning patterns from data."] },
      { id: "what-is-ai-2", order: 2, title: "Where AI shows up in everyday life", type: "content", duration: 4, xp: 10, objective: "Recognise familiar examples of AI in real life.", content: `You probably already use AI every day.

When a streaming app recommends a film, when your email filters spam, when your phone predicts the next word, or when a map app predicts traffic, AI is often involved. These systems use patterns from data to make useful suggestions or predictions.

This matters because AI is not just a future technology. It is already built into many tools people use for work, communication, shopping, learning, and entertainment.`.trim(), keyTakeaways: ["AI already appears in many everyday tools.", "Recommendation, prediction, and filtering are common AI uses.", "Understanding real examples makes AI easier to understand."] },
      { id: "what-is-ai-3", order: 3, title: "What AI can and cannot do", type: "content", duration: 5, xp: 10, objective: "Build a realistic view of AI strengths and limits.", content: `AI can be very useful, but it is not magical.

It is strong at tasks like summarising text, generating ideas, rewriting content, spotting patterns, and helping users work faster. But it can also make mistakes, misunderstand a question, reflect bias, or confidently give wrong information.

The smartest way to use AI is to treat it like a helpful assistant, not a perfect authority. The more important the task is, the more carefully the output should be checked.`.trim(), keyTakeaways: ["AI is powerful, but imperfect.", "AI can produce useful outputs and still be wrong.", "Important outputs should always be checked by a human."] },
      { id: "what-is-ai-4", order: 4, title: "Quick check: which one is AI?", type: "exercise", duration: 4, xp: 10, objective: "Reinforce the idea of what counts as an AI system.", question: "Which example best shows AI in action?", options: ["A paper notebook with handwritten notes", "A calculator doing fixed arithmetic", "A streaming app recommending what to watch next", "A wall clock showing the time"], answer: 2, explanation: "Recommendation systems use data patterns to predict what a user may want next, which is a common AI use case." }
    ]
  },
  {
    topicId: "prompting-basics",
    lessons: [
      { id: "prompting-basics-1", order: 1, title: "What a prompt really is", type: "content", duration: 4, xp: 10, objective: "Understand what a prompt is and why it affects the output.", content: `A prompt is the instruction or request you give to an AI tool.

If your prompt is vague, the result is often vague too. If your prompt is clear and specific, the result is usually much more useful.

Prompting is not about finding magic words. It is about communicating clearly so the AI understands what you want it to do.`.trim(), keyTakeaways: ["A prompt is the input you give to the AI.", "Better prompts usually lead to better outputs.", "Prompting is a practical communication skill."] },
      { id: "prompting-basics-2", order: 2, title: "The parts of a stronger prompt", type: "content", duration: 5, xp: 10, objective: "Learn the main building blocks of a useful prompt.", content: `A strong prompt often includes a few simple parts: the task, the context, the audience, and the format you want.

You can also give the AI a role, such as: "You are a tutor," "You are a marketing coach," or "You are a helpful assistant."

For example: "You are a study coach. Explain climate change to a 13-year-old in 5 bullet points."

That works well because it clearly explains the role, the task, the audience, and the format.`.trim(), keyTakeaways: ["Good prompts often include task, context, audience, and format.", "Role prompting can help shape tone and style.", "Specific instructions usually produce more useful answers."] },
      { id: "prompting-basics-3", order: 3, title: "How to improve weak prompts", type: "content", duration: 5, xp: 10, objective: "Learn how to turn vague prompts into stronger ones.", content: `Compare these two prompts:

Weak: "Tell me about exercise."

Better: "You are a health writer. Explain 3 mental health benefits of regular exercise for busy adults in under 150 words."

The second prompt works better because it is more specific. It tells the AI what role to take, what to focus on, who it is for, and how long the answer should be.

Prompting is often an improvement process. If the first answer is not good enough, refine the prompt and try again.`.trim(), keyTakeaways: ["Specific prompts beat vague prompts.", "Constraints can improve quality.", "Prompting often works best as an iterative process."] },
      { id: "prompting-basics-4", order: 4, title: "Quick check: choose the better prompt", type: "exercise", duration: 4, xp: 10, objective: "Spot the prompt with the clearest structure.", question: "Which prompt is most likely to produce the most useful result?", options: ["Tell me about business.", "Can you help me?", "Write something about social media.", "You are a marketing coach. Give me 3 Instagram ideas for a local bakery in bullet points."], answer: 3, explanation: "The strongest prompt gives the AI a role, a specific task, a clear context, and a preferred output format." }
    ]
  },
  {
    topicId: "ai-safety-basics",
    lessons: [
      { id: "ai-safety-basics-1", order: 1, title: "Why AI safety matters", type: "content", duration: 4, xp: 10, objective: "Understand why using AI responsibly matters.", content: `AI can be useful, creative, and fast, but it can also create problems if people trust it too quickly.

AI tools sometimes sound very confident even when they are wrong. They may produce misleading, biased, or unsafe information that looks polished and believable.

That is why AI safety matters. It helps users understand the risks and use AI in a more careful, responsible way.`.trim(), keyTakeaways: ["AI can sound confident even when it is wrong.", "Useful tools can still create harm if used carelessly.", "AI safety is about wise and responsible use."] },
      { id: "ai-safety-basics-2", order: 2, title: "Hallucinations, bias, and mistakes", type: "content", duration: 5, xp: 10, objective: "Learn the most common ways AI can go wrong.", content: `A hallucination is when an AI system produces false or invented information. For example, it may make up a fact, source, quote, or statistic.

Another issue is bias. Because AI is trained on human-created data, it can reflect unfair patterns or missing perspectives from that data.

AI can also misunderstand unclear prompts or give incomplete answers. This is why important uses of AI should always include checking and human judgement.`.trim(), keyTakeaways: ["Hallucinations are false or invented outputs.", "Bias can shape the fairness of AI responses.", "Human review is especially important for serious tasks."] },
      { id: "ai-safety-basics-3", order: 3, title: "Simple rules for safer AI use", type: "content", duration: 5, xp: 10, objective: "Practice safer habits when using AI tools.", content: `There are a few simple habits that make AI use much safer.

First, verify important facts such as names, dates, numbers, and sources. Second, avoid sharing private or sensitive information unless you fully understand the tool and trust its handling of data. Third, use AI as support for your thinking, not as a replacement for your judgement.

Safe AI use is mostly about caution, checking, and common sense.`.trim(), keyTakeaways: ["Check important facts before using them.", "Do not paste sensitive data into AI casually.", "Use AI as a helper, not as your final authority."] },
      { id: "ai-safety-basics-4", order: 4, title: "Quick check: safest next step", type: "exercise", duration: 4, xp: 10, objective: "Choose the safest response to AI-generated information.", question: "An AI tool gives you a polished answer with statistics for a work presentation. What is the safest next step?", options: ["Use it immediately because it sounds professional", "Check the facts and verify the sources before using it", "Assume it is accurate because the grammar is strong", "Share it with others before reviewing it"], answer: 1, explanation: "AI can sound convincing while still being wrong, so important information should be checked before use." }
    ]
  },
  {
    topicId: "how-ai-is-made",
    lessons: [
      { id: "how-ai-is-made-1", order: 1, title: "AI starts with data", type: "content", duration: 4, xp: 10, objective: "Understand the role of data in building AI systems.", content: `AI systems need data in order to learn patterns.

That data might include text, images, audio, numbers, or user behaviour. The system is trained on examples so it can learn relationships, patterns, and likely outputs.

You can think of training data like practice material. The quality, size, and balance of that data strongly affect how useful the AI becomes.`.trim(), keyTakeaways: ["AI systems learn from data.", "Training data can include many different types of information.", "Better data usually leads to better systems."] },
      { id: "how-ai-is-made-2", order: 2, title: "Training, models, and patterns", type: "content", duration: 5, xp: 10, objective: "Learn the basic idea of how AI training works.", content: `When people say an AI model has been trained, they mean it has processed large amounts of data to learn patterns.

A model is the system that results from that training process. It does not memorise everything perfectly. Instead, it learns probabilities and relationships that help it predict useful outputs.

For example, a language model learns which words often go together and how sentences are usually formed. That is why it can generate responses that sound natural.`.trim(), keyTakeaways: ["Training helps AI models learn patterns from data.", "A model is the result of the training process.", "Many AI systems work by predicting likely outputs."] },
      { id: "how-ai-is-made-3", order: 3, title: "Why AI is not perfect", type: "content", duration: 5, xp: 10, objective: "Understand why trained systems can still fail or behave unevenly.", content: `Even well-trained AI systems are not perfect.

If the data is incomplete, biased, old, or low quality, the model may learn the wrong patterns. Even with strong training, a model can still misunderstand a question or generate a poor answer.

This is why people test AI systems, improve them, and set guardrails around how they are used. Building AI is not just about making it powerful. It is also about making it reliable and safe enough for real use.`.trim(), keyTakeaways: ["AI quality depends heavily on training data.", "Models can still fail even after training.", "Testing and guardrails matter in real-world AI."] },
      { id: "how-ai-is-made-4", order: 4, title: "Quick check: what teaches AI?", type: "exercise", duration: 4, xp: 10, objective: "Reinforce the idea that AI systems learn from data and training.", question: "What is the main thing an AI system uses to learn patterns during training?", options: ["Luck", "Training data", "A human voice inside the computer", "Random guessing only"], answer: 1, explanation: "AI systems learn from training data, which gives them examples to find patterns and make predictions." }
    ]
  },
  {
    topicId: "how-ai-thinks",
    lessons: [
      { id: "how-ai-thinks-1", order: 1, title: "How AI predicts responses", type: "content", duration: 4, xp: 10, objective: "Understand that AI predicts outputs rather than thinking like a person.", content: `AI does not think like a human. It predicts likely next words, patterns, or outputs based on training. That is why it can sound confident even when it is wrong.`.trim(), keyTakeaways: ["AI predicts outputs rather than thinking like a person.", "Confidence does not always mean correctness.", "AI language often sounds natural because it learns patterns."] },
      { id: "how-ai-thinks-2", order: 2, title: "Why context changes the answer", type: "content", duration: 5, xp: 10, objective: "Learn how context shapes AI output.", content: `The same AI can give very different answers depending on the prompt. Context helps shape what the model should focus on. Clear context usually leads to more useful responses.`.trim(), keyTakeaways: ["Prompts guide AI output.", "Context improves relevance.", "Clear instructions usually help."] },
      { id: "how-ai-thinks-3", order: 3, title: "Strengths and limits", type: "content", duration: 5, xp: 10, objective: "Understand when AI is strong and when it is weak.", content: `AI is strong at pattern-based tasks, summarising, and generating ideas. It is weaker when it needs real-world judgement, verified facts, or deep understanding. That is why human review is still important.`.trim(), keyTakeaways: ["AI is useful for many pattern-based tasks.", "It is not perfect for judgment-heavy work.", "Human review still matters."] },
      { id: "how-ai-thinks-4", order: 4, title: "Quick check: what does AI do?", type: "exercise", duration: 4, xp: 10, objective: "Reinforce the basic model of AI behaviour.", question: "What is the best description of how AI works?", options: ["It thinks exactly like a human brain", "It predicts likely outputs from patterns", "It never makes mistakes", "It only copies what a human says"], answer: 1, explanation: "AI uses training patterns to generate responses rather than human-style thought." }
    ]
  },
  {
    topicId: "ai-everyday-tasks",
    lessons: [
      { id: "ai-everyday-tasks-1", order: 1, title: "AI for everyday planning", type: "content", duration: 4, xp: 10, objective: "See how AI can help with simple daily tasks.", content: `AI can help people plan, organise, and save time. It can suggest schedules, rewrite messages, brainstorm task lists, and help structure ideas.`.trim(), keyTakeaways: ["AI can support everyday planning.", "It is useful for organising ideas.", "Small tasks are a good place to start."] },
      { id: "ai-everyday-tasks-2", order: 2, title: "AI for communication", type: "content", duration: 5, xp: 10, objective: "Understand how AI can improve communication tasks.", content: `AI can help draft emails, simplify text, translate ideas into another tone, or turn rough notes into clearer messages. It still needs review, especially if the message is important.`.trim(), keyTakeaways: ["AI can help draft and rewrite communication.", "Tone and clarity are common uses.", "Review before sending important messages."] },
      { id: "ai-everyday-tasks-3", order: 3, title: "AI for learning and research", type: "content", duration: 5, xp: 10, objective: "Learn how AI can support study and research.", content: `AI can explain topics, summarise notes, quiz learners, and help break big subjects into smaller parts. It is best used as a guide, not as a replacement for proper study.`.trim(), keyTakeaways: ["AI can support learning.", "It can simplify large topics.", "It should not replace careful study."] },
      { id: "ai-everyday-tasks-4", order: 4, title: "Quick check: best everyday use", type: "exercise", duration: 4, xp: 10, objective: "Identify a practical everyday use for AI.", question: "Which is a good everyday use of AI?", options: ["Ignoring all human review forever", "Drafting a first version of an email", "Replacing all decision-making completely", "Guaranteeing perfect results every time"], answer: 1, explanation: "AI is often useful for drafting and organising, but it should still be reviewed by a person." }
    ]
  },
  {
    topicId: "ai-history",
    lessons: [
      { id: "ai-history-1", order: 1, title: "How AI ideas developed", type: "content", duration: 4, xp: 10, objective: "Understand that AI developed over time through research and experimentation.", content: `AI did not appear all at once. It developed through decades of research into logic, computing, statistics, and machine learning.`.trim(), keyTakeaways: ["AI has a long development history.", "It combines ideas from many fields.", "Modern AI builds on earlier research."] },
      { id: "ai-history-2", order: 2, title: "Major shifts in AI", type: "content", duration: 5, xp: 10, objective: "Learn the broad phases of AI development.", content: `AI has gone through periods of excitement, disappointment, and rapid improvement. New data, better computers, and improved methods helped AI become much more useful.`.trim(), keyTakeaways: ["AI has had many phases.", "Better computing helped AI grow.", "Progress often came in waves."] },
      { id: "ai-history-3", order: 3, title: "Why history matters now", type: "content", duration: 5, xp: 10, objective: "See why AI history helps us understand current tools.", content: `Knowing the history of AI helps people understand why modern systems are strong in some areas and weak in others. It also explains why safety, testing, and ethics are so important.`.trim(), keyTakeaways: ["History explains current AI strengths and limits.", "Modern AI builds on earlier breakthroughs.", "Ethics and safety are part of the story."] },
      { id: "ai-history-4", order: 4, title: "Quick check: why study history?", type: "exercise", duration: 4, xp: 10, objective: "Reinforce why the history of AI matters.", question: "Why is it useful to learn the history of AI?", options: ["Because it shows AI has never changed", "Because it explains how AI became what it is today", "Because it makes AI impossible to use", "Because it removes the need for safety"], answer: 1, explanation: "AI history helps explain how current tools developed and why their strengths and limits exist." }
    ]
  },
  {
    topicId: "ai-bias",
    lessons: [
      { id: "ai-bias-1", order: 1, title: "What bias means in AI", type: "content", duration: 4, xp: 10, objective: "Understand what bias is in AI systems.", content: `Bias in AI happens when outputs reflect unfair patterns from data or design. That can affect who is represented, how people are described, or which answers seem more likely.`.trim(), keyTakeaways: ["Bias can appear in AI outputs.", "Bias often comes from data or design choices.", "Fairness is an important part of AI."] },
      { id: "ai-bias-2", order: 2, title: "Where bias comes from", type: "content", duration: 5, xp: 10, objective: "Learn the common causes of bias in AI.", content: `Bias can come from incomplete data, historical inequality, poor assumptions, or design decisions. If the model learns from biased data, it may repeat those patterns.`.trim(), keyTakeaways: ["Bias can come from data and design.", "Historical patterns can carry into AI.", "Careful data choices matter."] },
      { id: "ai-bias-3", order: 3, title: "How to reduce harm", type: "content", duration: 5, xp: 10, objective: "Understand practical ways to reduce bias-related harm.", content: `Teams reduce harm by testing systems, improving datasets, reviewing outputs, and involving different perspectives. No system is perfect, so fairness work must be ongoing.`.trim(), keyTakeaways: ["Testing helps reduce bias-related harm.", "Diverse perspectives improve AI work.", "Fairness is an ongoing process."] },
      { id: "ai-bias-4", order: 4, title: "Quick check: where bias comes from", type: "exercise", duration: 4, xp: 10, objective: "Recognise a likely source of AI bias.", question: "What is a common source of bias in AI?", options: ["Perfectly balanced data only", "Human-created training data with unfair patterns", "The AI wanting to be unfair", "A lack of any code at all"], answer: 1, explanation: "If the training data reflects unfair patterns, the AI may learn and repeat them." }
    ]
  },
  {
    topicId: "ai-for-work",
    lessons: [
      { id: "ai-for-work-1", order: 1, title: "AI for productivity", type: "content", duration: 4, xp: 10, objective: "See how AI can improve workplace productivity.", content: `AI can help with planning, drafting, organising, and simplifying work tasks. It can save time when used for first drafts and routine structure.`.trim(), keyTakeaways: ["AI can improve productivity.", "It is useful for routine work.", "First drafts are a common use case."] },
      { id: "ai-for-work-2", order: 2, title: "AI for teams", type: "content", duration: 5, xp: 10, objective: "Understand how teams can use AI together.", content: `Teams can use AI to prepare meeting notes, brainstorm ideas, summarise documents, and support communication. The best results usually come when humans still review the output.`.trim(), keyTakeaways: ["Teams can use AI for shared work.", "Summaries and brainstorming are common team uses.", "Human review is still important."] },
      { id: "ai-for-work-3", order: 3, title: "Good workplace habits", type: "content", duration: 5, xp: 10, objective: "Learn safe and effective habits for using AI at work.", content: `At work, it helps to use AI for support, not for unchecked final decisions. Check facts, protect sensitive information, and make sure the output fits the situation.`.trim(), keyTakeaways: ["Use AI as support, not a final decision-maker.", "Check facts and protect sensitive data.", "Context matters at work."] },
      { id: "ai-for-work-4", order: 4, title: "Quick check: best workplace use", type: "exercise", duration: 4, xp: 10, objective: "Identify a smart use of AI at work.", question: "Which is a smart use of AI at work?", options: ["Using it to draft a meeting summary", "Letting it make all legal decisions alone", "Ignoring company policy and privacy rules", "Using it without checking sensitive facts"], answer: 0, explanation: "Drafting summaries is a practical productivity use, provided the result is reviewed." }
    ]
  },
  {
    topicId: "ai-for-creativity",
    lessons: [
      { id: "ai-for-creativity-1", order: 1, title: "AI as a creative partner", type: "content", duration: 4, xp: 10, objective: "See how AI can support creative work.", content: `AI can help people generate ideas, rough drafts, titles, outlines, and variations. It is often best used as a creative partner rather than a replacement for original thinking.`.trim(), keyTakeaways: ["AI can support creative work.", "Idea generation is a strong use case.", "It should assist creativity, not replace it."] },
      { id: "ai-for-creativity-2", order: 2, title: "Where AI helps creators", type: "content", duration: 5, xp: 10, objective: "Recognise creative tasks where AI is useful.", content: `Creators can use AI to brainstorm content, create variations, test headlines, and overcome blank-page moments. That can speed up early-stage thinking.`.trim(), keyTakeaways: ["AI helps with brainstorming.", "It can create variations and drafts.", "It is useful for getting started."] },
      { id: "ai-for-creativity-3", order: 3, title: "Keeping your own style", type: "content", duration: 5, xp: 10, objective: "Learn how to use AI without losing your own voice.", content: `The best creative work still needs a human point of view. Use AI for support, then edit the result so it sounds like you and fits your audience.`.trim(), keyTakeaways: ["Keep a human point of view.", "Edit AI output to match your voice.", "Style and audience still matter."] },
      { id: "ai-for-creativity-4", order: 4, title: "Quick check: best creative use", type: "exercise", duration: 4, xp: 10, objective: "Choose a good use of AI in creative work.", question: "Which is a good creative use of AI?", options: ["Brainstorming headline ideas", "Replacing all artistic decisions permanently", "Copying every generated result without editing", "Using it without any review"], answer: 0, explanation: "AI is excellent for brainstorming and variation, but the human still shapes the final result." }
    ]
  },
  {
    topicId: "prompting-for-study",
    lessons: [
      { id: "prompting-for-study-1", order: 1, title: "Using AI as a study helper", type: "content", duration: 4, xp: 10, objective: "Understand how AI can support learning.", content: `AI can help learners explain topics, create summaries, and generate study questions. Used well, it can make revision faster and more structured.`.trim(), keyTakeaways: ["AI can support study and revision.", "Summaries and explanations are useful study tasks.", "Structure helps learning."] },
      { id: "prompting-for-study-2", order: 2, title: "Making prompts study-friendly", type: "content", duration: 5, xp: 10, objective: "Learn how to ask AI for better study help.", content: `A strong study prompt should name the subject, the level, the format, and the goal. For example, you can ask for a simple explanation, a quiz, or a comparison table.`.trim(), keyTakeaways: ["Study prompts should be specific.", "Level and format help AI respond well.", "Quizzes and summaries are useful formats."] },
      { id: "prompting-for-study-3", order: 3, title: "Avoiding overreliance", type: "content", duration: 5, xp: 10, objective: "Understand how to avoid becoming too dependent on AI when studying.", content: `AI is helpful, but you still need to think for yourself. If you rely on it too much, you may miss the chance to practise memory, understanding, and problem solving.`.trim(), keyTakeaways: ["AI should support, not replace, learning.", "Thinking for yourself is still important.", "Balance speed with understanding."] },
      { id: "prompting-for-study-4", order: 4, title: "Quick check: best study prompt", type: "exercise", duration: 4, xp: 10, objective: "Choose the most useful study prompt.", question: "Which prompt is best for studying a topic?", options: ["Tell me everything about science.", "Explain photosynthesis like I am 12, then give me 3 quiz questions.", "Help me study.", "What should I know?"], answer: 1, explanation: "This prompt gives the subject, audience, explanation style, and practice questions." }
    ]
  },
  {
    topicId: "future-of-ai",
    lessons: [
      { id: "future-of-ai-1", order: 1, title: "Where AI is heading", type: "content", duration: 4, xp: 10, objective: "Understand the broad direction of AI development.", content: `AI will likely become more capable, more integrated into tools, and more widely used across everyday life. That makes it important to understand both opportunity and risk.`.trim(), keyTakeaways: ["AI is likely to become more common.", "New capability brings new responsibility.", "Learning the basics now is useful."] },
      { id: "future-of-ai-2", order: 2, title: "Opportunities and concerns", type: "content", duration: 5, xp: 10, objective: "Think about the positives and risks of future AI.", content: `The future of AI could bring faster work, better support tools, and new ways to learn and create. It could also increase concerns about fairness, misinformation, privacy, and job change.`.trim(), keyTakeaways: ["AI has major opportunities.", "It also raises important risks.", "Good policy and good habits will matter."] },
      { id: "future-of-ai-3", order: 3, title: "How to stay ready", type: "content", duration: 5, xp: 10, objective: "Learn how to stay prepared as AI changes.", content: `The best way to stay ready is to keep learning, stay curious, and build practical AI habits. People who understand prompting, checking, and safe use will be better prepared for change.`.trim(), keyTakeaways: ["Keep learning as AI changes.", "Practical habits are more useful than hype.", "Core AI literacy will stay valuable."] },
      { id: "future-of-ai-4", order: 4, title: "Quick check: best way to prepare", type: "exercise", duration: 4, xp: 10, objective: "Reinforce how to prepare for the future of AI.", question: "What is the best way to prepare for the future of AI?", options: ["Ignore AI completely", "Keep learning, practice prompting, and check outputs carefully", "Assume AI will always be perfect", "Wait until AI changes everything first"], answer: 1, explanation: "Staying curious, practical, and careful is the best preparation for a changing AI landscape." }
    ]
  }
];