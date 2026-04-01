export interface BlogPostSection {
  type: "paragraph" | "heading" | "list" | "video";
  content: string;
  items?: string[];
  videoId?: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  summary: string;
  url: string;
  category: string;
  readTime?: string;
  author?: string;
  content?: BlogPostSection[];
  youtubeVideoId?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Is Your Child on the Spectrum? Recognizing 10 Early Symptoms and Signs of Autism",
    slug: "is-your-child-on-the-spectrum-recognizing-10-early-symptoms-and-signs-of-autism",
    date: "December 3, 2025",
    summary: "If you notice that your child is experiencing delays or is behaving differently from kids, as a parent you may be thinking to yourself, does my child have autism? It can be so hard to know what is 'normal'...",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-your-child-on-the-spectrum-recognizing-10-early-symptoms-and-signs-of-autism/",
    category: "Early Signs",
    author: "Hunter Grillo",
    youtubeVideoId: "nL1N8duBEPQ",
    content: [
      { type: "paragraph", content: "If you notice that your child is experiencing delays or is behaving differently from kids, as a parent you may be thinking to yourself, does my child have autism? It can be so hard to know what is \"normal\" and what could indicate an Autism Spectrum Disorder. Luckily, there are symptoms and signs of autism that parents should look out for. With enough awareness, parents can help their autistic children receive early intervention treatment. These early warning signs include sensory issues, repetitive movements, delayed communication skills, difficulties making eye contact or maintaining conversations with others, and social isolation." },
      { type: "heading", content: "When Do the First Signs of Autism Appear?" },
      { type: "paragraph", content: "Signs of autism become noticeable around 18 months of age. Typically, parents begin to notice if their child starts missing speech milestones or if they're not picking up on social cues as well as their peers or siblings. Children as early as 6 months can start to show symptoms of autism. Let's talk about 10 early signs of autism to look out for:" },
      { type: "heading", content: "1. Avoids Eye Contact" },
      { type: "paragraph", content: "Avoiding eye contact is very common in autism. If you notice your baby is not making eye contact by 6 months of age, this may be a sign of autism. Avoiding eye contact gets carried into adulthood sometimes, so you may notice autistic people of all ages engage in this behaviour. The reason for not making eye contact is different for each person. Understanding social cues from a person's eyes can be challenging for an autistic person. This can be overwhelming and make them feel uncomfortable." },
      { type: "heading", content: "2. Lacks Response to Other's Voices" },
      { type: "paragraph", content: "If you notice your child doesn't respond to or look at someone when they're being spoken to, this may be a sign of autism. Many parents assume this behaviour is associated with their child having hearing issues. Over time, it becomes clearer that the child can hear fine and instead their behavior has more to do with being withdrawn." },
      { type: "heading", content: "3. Hand Flapping" },
      { type: "paragraph", content: "One of the many signs of autism is stimming. Stimming is when a person repeats the same action over and over again. An example of this is hand flapping. Autistic children do this as a form of stimming, which is calming for them. Sometimes, autistic children also flap their hands when they get very excited or feel other strong emotions, like stress." },
      { type: "heading", content: "4. Frequently Walking on Tip Toes" },
      { type: "paragraph", content: "Another type of stimming is frequently walking on tip toes. Instead of walking on their entire foot, they prefer to walk on their tippy toes. If the child has sensory issues, they may feel uncomfortable putting all their weight on the surface of the floor. Both Occupational Therapists and Physical Therapists are qualified to develop strategies to help reduce toe walking." },
      { type: "heading", content: "5. Trouble Controlling Emotions" },
      { type: "paragraph", content: "For an autistic person, tantrum behaviors can be more intense and last for long periods of time. Usually, the fussiness isn't a result of not getting access to a toy or treat, rather it can be happening because of the bright and loud conditions of the public space, which can lead to them experiencing a sensory overload. A typical tantrum lasts only a few minutes, while a sensory tantrum can last hours." },
      { type: "heading", content: "6. Aggressive Behaviour" },
      { type: "paragraph", content: "Aggressive behavior is another indicator of autism. Autistic children can be more aggressive than others and sometimes there's no clear reason as to why they behave like this. It's important that interventions, like Applied Behaviour Analysis (ABA), target aggressive behaviour as early as possible, to prevent injury to themselves and others." },
      { type: "heading", content: "7. Rigid Play" },
      { type: "paragraph", content: "You may notice that your child plays a little differently than their peers. They prefer to play with their toys in a certain way and may repeat the same play actions over and over again. For example, you may notice your child lines up all their toys in a row, or repeatedly spins them." },
      { type: "heading", content: "8. Issues with Food and Textures" },
      { type: "paragraph", content: "Problems with food, textures or clothes is also common for autistic people. Being a picky eater is something an autistic child may experience due to their sensory related issues. These sensory issues relate to the taste, smell, texture, and look of the food item. Clothes can also be an issue—sometimes they don't like the feeling of the material rubbing against their skin." },
      { type: "heading", content: "9. Delayed Speech" },
      { type: "paragraph", content: "Lack of speech and communication are big signs of autism. It is not uncommon for autistic children to miss speech milestones. Autistic children sometimes develop speech later than their peers. By the age of 3, if your child has not started speaking yet, start paying attention to potential speech delays." },
      { type: "heading", content: "10. Repeating Words and Phrases" },
      { type: "paragraph", content: "Another common sign of autism in speech is when the child repeats words and phrases over and over again. This is called echolalia, meaning the echoing of words. This sometimes happens because it's a form of stimming and helps them feel calm." },
      { type: "heading", content: "How Do I Know if My Child has Autism?" },
      { type: "paragraph", content: "There are many early symptoms and signs of autism for parents to recognize. The sooner these signs of autism are recognized, the better. With intervention, autistic children can learn skills to develop independence and self-care. Parents should consult their pediatrician for more information on diagnosis and treatment options. If you would like to learn more about ABA therapy, Speech Therapy, and Occupational Therapy, please contact Side by Side Therapy to set up a no-charge consultation." }
    ]
  },
  {
    title: "The Importance of Finding the Best Therapy For Autism",
    slug: "the-importance-of-finding-the-best-therapy-for-autism",
    date: "November 17, 2025",
    summary: "The goal of autism therapy is to help the child develop academic skills, communication and social skills, increase independence, and learn daily living skills. There are many different interventions that have been developed to aid in this process.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/the-importance-of-finding-the-best-therapy-for-autism-is-it-aba-therapy-speech-therapy-a-combination-or-another-therapy-all-together/",
    category: "Therapy Options",
    author: "Hunter Grillo",
    content: [
      { type: "paragraph", content: "The goal of autism therapy is to help the child develop academic skills, communication and social skills, increase independence, and learn daily living skills. Choosing an evidence-based treatment is important. There are several types of evidence-based therapies used to treat Autism Spectrum Disorder (ASD): Occupational Therapy (OT), ABA (Applied Behavior Analysis), Speech-Language Pathology (SLP) and Physical Therapy (PT)." },
      { type: "heading", content: "What is Applied Behaviour Analysis (ABA)?" },
      { type: "paragraph", content: "ABA Therapy is the science of learning and motivation and is one of the most effective therapies for autism. It helps us understand how behavior works and how it is affected by the environment. The goal is to increase desired behaviors and to decrease interfering behaviors. ABA focuses on enhancing a variety of skills, including language, social skills, attention and learner readiness skills." },
      { type: "heading", content: "How Much ABA Therapy Does My Child Need?" },
      { type: "paragraph", content: "How many hours of therapy an autistic child receives depends on their skill level and areas of need. If they decide your child needs more of a Focused ABA approach, then the therapy ranges from 5-15 hours a week. On the other hand, if the child needs to focus on a variety of skills, they might suggest a comprehensive ABA approach, which is over 20 hours of therapy a week." },
      { type: "heading", content: "What is Speech-Language Pathology (SLP)?" },
      { type: "paragraph", content: "Communication is challenging for autistic children. Speech-Language Pathology (SLP) helps reduce communication issues. Speech therapy helps your child improve their language and speech skills." },
      { type: "list", content: "Speech therapists address 5 main areas:", items: ["Receptive language", "Expressive language", "Speech (articulation)", "Pragmatics (social skills)", "Feeding and swallowing"] },
      { type: "heading", content: "What is Occupational Therapy (OT)?" },
      { type: "paragraph", content: "Occupational therapy for autism can help make everyday routines a little easier. It teaches people skills that improve their leisure, productive, and self-care skills. An occupational therapist works with your child on improving many different skills such as printing, fine and gross motor skills, sleep hygiene, self-care, attention and focus, and feeding skills." },
      { type: "heading", content: "What is Physical Therapy (PT)?" },
      { type: "paragraph", content: "Some autistic children have motor skill challenges. Physical therapists help improve gross motor skills, balance, coordination, and physical fitness. They can address challenges like low muscle tone, poor balance, and difficulty with activities like running, jumping, or climbing." }
    ]
  },
  {
    title: "Speech Therapy – Alternative and Augmentative Communication (AAC): A Powerful Tool",
    slug: "speech-therapy-aac",
    date: "August 30, 2025",
    summary: "Autism Spectrum Disorder (ASD) affects a great number of children and often these children have difficulty communicating. In addition to having an applied behaviour analysis team, these children benefit from speech therapy.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/speech-therapy-aac/",
    category: "Speech Therapy",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Autism Spectrum Disorder (ASD) affects a great number of children and often these children have difficulty communicating. In addition to having an applied behaviour analysis team, these children benefit from speech therapy. This by no means should suggest that these children understand less. Rather, they just have difficulty expressing what they understand." },
      { type: "heading", content: "How can Speech Therapy help?" },
      { type: "paragraph", content: "Being the parent of an ASD child can be very stressful and overwhelming. It is important to know that there is help. Communication and language development have been helped by numerous tools and programs. These are known as Alternative and Augmentative Communication (AAC) systems." },
      { type: "paragraph", content: "AAC is a way to provide your ASD child with the ability to relay their thoughts and needs through alternative ways that include the use of pictures, gestures, sign language, visual aids or speech-output devices such as an iPad or Tablet." },
      { type: "heading", content: "Unaided and Aided Systems in Speech Therapy" },
      { type: "paragraph", content: "Unaided systems don't require the use of any equipment. Gestures, facial expressions, body language and sign language are some examples. Aided systems use tools or materials and can be either low-tech or high-tech." },
      { type: "heading", content: "Low-Tech: Picture Exchange Communication Systems (PECS)" },
      { type: "paragraph", content: "PECS is a tool to aid in communication with non-verbal ASD children. Pictures of desired objects are exchanged as a way of communicating. When a child wants something, they would hand a picture of the desired item to their communication partner in exchange for the desired object." },
      { type: "heading", content: "High-Tech: Speech Generating Devices (SGDs)" },
      { type: "paragraph", content: "These are hand-held electronic devices that when a child presses a button or flips a switch, the device will play pre-recorded words or phrases. These SGDs allow non-verbal people to communicate electronically. Examples include TouchChat HD with WordPower and Proloquo2Go." }
    ]
  },
  {
    title: "How to Toilet Train your Autistic Child (Part 2)",
    slug: "how-to-toilet-train-your-autistic-child-part-2",
    date: "August 16, 2025",
    summary: "In this second post on how to toilet train your autistic child, you'll learn about: day vs night time training, urine vs bowel training and how to leverage reinforcement.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-toilet-train-your-autistic-child-part-2/",
    category: "Parent Tips",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "In this second post on how to toilet train your autistic child, you'll learn about: day vs night time training, urine vs bowel training and how to leverage reinforcement." },
      { type: "heading", content: "Day vs Nighttime Toilet Training" },
      { type: "paragraph", content: "Many children, especially boys, continue to have nighttime accidents for years after they've become daytime trained. Often nighttime training isn't possible because the child's body isn't waking up when they have to pee." },
      { type: "list", content: "Some strategies to avoid nighttime accidents:", items: ["Avoid beverages 2 hours before bed", "Make one or two bathroom trips before putting your child to sleep", "Gently wake your child to take them to pee before you go to bed yourself"] },
      { type: "heading", content: "How to use Reinforcement to Toilet Train your child" },
      { type: "paragraph", content: "Use reinforcement for successful attempts. Choose something that your child really values. It should be something you can provide quickly and immediately. Keep it small and simple so you can provide it every time there is success. Reinforcement is a powerful ABA strategy that helps build new habits." }
    ]
  },
  {
    title: "Toilet Training Tips from ABA Therapy (Part 1)",
    slug: "toilet-training-tips-from-aba-therapy-part-1",
    date: "August 9, 2025",
    summary: "Many children struggle with toilet training. Autistic kids can have a difficult time making the transition from diapers to the toilet. ABA Therapy offers several tried and tested strategies for training children.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/toilet-training-tips-from-aba-therapy-part-1/",
    category: "ABA Therapy",
    readTime: "4 minutes",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Many children struggle with toilet training. Autistic kids can have a difficult time making the transition from diapers to the toilet. ABA Therapy offers several tried and tested strategies for training children." },
      { type: "heading", content: "Toilet Training Readiness Signs" },
      { type: "list", content: "Children will engage in specific behaviours when they're ready:", items: ["Wanting to be changed if wet or soiled", "Always going to a specific place to have bowel movements", "Touching/pulling on diapers", "Asking questions about the toilet", "Curiosity, wanting to watch others use the toilet"] },
      { type: "heading", content: "2 Approaches to Training: Schedule Training and Intensive Training" },
      { type: "paragraph", content: "Schedule Training is when you set a specific schedule for your child to try to use the bathroom. Intensive Training is a boot camp approach typically done over a few days where you spend almost all your time in and near the bathroom." }
    ]
  },
  {
    title: "Pairing in ABA Therapy",
    slug: "pairing-in-aba-therapy",
    date: "August 7, 2025",
    summary: "To an uninformed observer, pairing in ABA therapy is a waste of time and resources. However, this could not be farther from the truth! Pairing is a vital component of all ABA therapy programs.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/pairing-in-aba-therapy/",
    category: "ABA Therapy",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "To an uninformed observer, pairing in ABA therapy is a waste of time and resources. However, this could not be farther from the truth! Pairing is a vital component of all ABA therapy programs." },
      { type: "heading", content: "What is pairing?" },
      { type: "paragraph", content: "In plain English, pairing happens when you've matched yourself with the learner's favourite things. Each person has a favourite colour, a favourite song and favourite food. We also have preferences for people and are more likely to cooperate with someone we like." },
      { type: "heading", content: "How to do pairing in ABA therapy?" },
      { type: "paragraph", content: "The first step is to identify the highly preferred reinforcers. Gather the learner's favourite things and provide free access to them. Observe which items the learner spends the most time with. Once identified, engage the learner with them. The goal is to have the learner WANT to come to you." },
      { type: "heading", content: "How long does pairing take?" },
      { type: "paragraph", content: "Pairing is not just a one-time event. It's an ongoing process throughout the therapeutic relationship. Initially, it may take several sessions before a child is comfortable with a new therapist. Maintaining rapport requires continued attention to the relationship." }
    ]
  },
  {
    title: "ABA Therapy: Behaviours and Consequences",
    slug: "antecedents-behaviours-and-consequences-in-aba-therapy",
    date: "July 31, 2025",
    summary: "One of the most important principles in ABA Therapy is the three-term contingency or antecedents, behaviours and consequences. Whenever we change behaviour, we have to look at the function of the behaviour.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/antecedents-behaviours-and-consequences-in-aba-therapy/",
    category: "ABA Therapy",
    readTime: "4 minutes",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "One of the most important principles in ABA Therapy is the three-term contingency or antecedents, behaviours and consequences. Whenever we change behaviour, we have to look at the function of the behaviour." },
      { type: "heading", content: "What is the Three-Term Contingency?" },
      { type: "list", content: "Each behaviour has 3 parts:", items: ["Antecedent — What happens before the behaviour (the trigger)", "Behaviour — The observable action", "Consequence — What happens after the behaviour"] },
      { type: "heading", content: "Antecedents" },
      { type: "paragraph", content: "What happens before the behaviour. This is the signal that the behaviour should happen. Antecedents cue the person that reinforcement is available if they engage in a behaviour. They can be either explicit (giving an instruction) or implicit (how the space is laid out)." },
      { type: "heading", content: "Behaviours" },
      { type: "paragraph", content: "The observable, measurable action the person does. In ABA, we focus on behaviours we can see and measure. This ensures objectivity and allows us to track progress over time." },
      { type: "heading", content: "Consequences" },
      { type: "paragraph", content: "What happens immediately after the behaviour. Consequences can either increase or decrease the likelihood of a behaviour occurring again. Reinforcement increases behaviour, while punishment decreases it. In modern ABA, we primarily focus on positive reinforcement strategies." }
    ]
  },
  {
    title: "Why is Occupational Therapy Used for Treating Autism?",
    slug: "why-is-occupational-therapy-used-for-treating-autism",
    date: "July 19, 2025",
    summary: "Many people wonder why occupational therapy is used for treating autism. Every day, you do meaningful activities. They bring you happiness, satisfaction and a sense of accomplishment.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/why-is-occupational-therapy-used-for-treating-autism/",
    category: "Occupational Therapy",
    readTime: "5 minutes",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Many people wonder why occupational therapy is used for treating autism. Every day, you do meaningful activities. They are integral parts of our lives. OTs help with professional and personal concerns if you are unable to perform daily tasks due to injury, illness, or disability." },
      { type: "heading", content: "What is Autism Spectrum Disorder (ASD)?" },
      { type: "paragraph", content: "Autism Spectrum Disorder is the most prevalent neurodevelopmental disorder. It affects about 500,000 people around the world. Autism diagnosis most often occurs in childhood. ASD can impact every area of a person's life and each case is unique." },
      { type: "heading", content: "Benefits of Occupational Therapy for Autism" },
      { type: "list", content: "OT can help with:", items: ["Sensory processing and integration", "Fine and gross motor skills", "Self-care and daily living skills", "Social participation", "Visual-motor integration", "Handwriting and school readiness"] },
      { type: "paragraph", content: "Occupational therapists for autistic children can be a great help to teachers and parents working with this population. We recommend starting occupational therapy in important early childhood years because it helps children develop more functional skills that they will need later on in life." }
    ]
  },
  {
    title: "Should My Toddler See a Speech Therapist?",
    slug: "should-my-toddler-see-a-speech-therapist",
    date: "July 11, 2025",
    summary: "Many new parents aren't confident in their child's milestone mastery. They often wonder 'Should my toddler see a speech therapist?' In their first two years, children accomplish many things.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/should-my-toddler-see-a-speech-therapist/",
    category: "Speech Therapy",
    readTime: "4 minutes",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Many new parents aren't confident in their child's milestone mastery. They often wonder 'Should my toddler see a speech therapist?' Your child should be able to say their first words by the age of 1, and should know 20 words by the age of 18 months. Don't panic if your child falls short of these goals." },
      { type: "heading", content: "When should my child see a Speech Therapist?" },
      { type: "paragraph", content: "If your child is not meeting speech milestones by expected ages, it may be time to consult a speech therapist. Early intervention is key to helping children develop strong communication skills." },
      { type: "heading", content: "What does a Speech Therapist do?" },
      { type: "paragraph", content: "A speech therapist helps your child develop their communication skills, including speech sounds, vocabulary, sentence formation, and social communication. They use play-based techniques to make therapy engaging and fun for young children." }
    ]
  },
  {
    title: "Can Parents Do ABA Therapy?",
    slug: "can-parents-do-aba-therapy",
    date: "July 5, 2025",
    summary: "Traditionally, trained professionals deliver Applied Behaviour Analysis (ABA). As a result of the COVID-19 pandemic and the skyrocketing costs of therapy, parents do ABA therapy more frequently.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/can-parents-do-aba-therapy/",
    category: "Parent Tips",
    readTime: "3 minutes",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Traditionally, trained professionals deliver Applied Behaviour Analysis (ABA). As a result of the COVID-19 pandemic and the skyrocketing costs of therapy, parents do ABA therapy more frequently." },
      { type: "heading", content: "What is ABA Therapy anyway?" },
      { type: "paragraph", content: "ABA is the science of learning and motivation. The goal of all ABA programs is to make meaningful changes to a person's behaviour to help increase independence. Using assessment tools, the BCBA determines where the gaps are in the client's learning and designs a program to fill those gaps." },
      { type: "heading", content: "Can Parents Really Do ABA?" },
      { type: "paragraph", content: "Yes! Parent Coaching is becoming more common. Parents can learn the principles of ABA and implement strategies at home under the guidance of a BCBA. This approach empowers families and helps generalize skills across settings." },
      { type: "heading", content: "Benefits of Parent-Delivered ABA" },
      { type: "list", content: "Parent coaching offers several advantages:", items: ["More therapy hours at a lower cost", "Skills are practiced in natural environments", "Parents become empowered advocates", "Better generalization of skills", "Stronger parent-child relationship"] }
    ]
  },
  {
    title: "How Does Virtual ABA Therapy Work?",
    slug: "how-does-virtual-aba-therapy-work",
    date: "June 27, 2025",
    summary: "With the end of the pandemic in sight, a lot of people are wondering if virtual ABA therapy will remain a therapy option. This post will explain what virtual ABA therapy is, how it works and some things to consider.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-does-virtual-aba-therapy-work/",
    category: "ABA Therapy",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "With the end of the pandemic in sight, a lot of people are wondering if virtual ABA therapy will remain a therapy option. This post will explain what virtual ABA therapy is, how it works and some things to consider before registering your child." },
      { type: "heading", content: "What is Virtual ABA Therapy?" },
      { type: "paragraph", content: "Simply put, virtual ABA therapy is ABA therapy where the sessions occur with the therapist in one location and the client in another and they're both using a computer to communicate. The principles of ABA therapy don't change when you're virtual." },
      { type: "heading", content: "How does virtual ABA therapy work?" },
      { type: "paragraph", content: "For some children, virtual therapy will look very similar to in person therapy. If the child is working on academic tasks, the sessions would be the same. However, if the child has difficulty attending, the therapist might need an in person supporter to prompt the child." },
      { type: "heading", content: "Things to Consider" },
      { type: "list", content: "Before starting virtual ABA:", items: ["Your child's ability to attend to a screen", "Whether an in-person support person is available", "Technical requirements (reliable internet, camera, etc.)", "Which skills are appropriate for virtual delivery", "Your child's age and developmental level"] }
    ]
  },
  {
    title: "What Kind of Therapy Does a Child with Autism Need?",
    slug: "what-kind-of-therapy-does-a-child-with-autism-need",
    date: "June 21, 2025",
    summary: "Many parents of children recently diagnosed with autism ask themselves this question. This blog covers therapy options and guidelines for what to avoid when picking a therapy model and provider.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-kind-of-therapy-does-a-child-with-autism-need/",
    category: "Therapy Options",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Many parents of children recently diagnosed with autism ask themselves \"What kind of therapy does a child with autism need?\" This blog will cover therapy options and some guidelines for what to avoid when picking a therapy model and provider." },
      { type: "heading", content: "What kind of therapy does a child with autism need?" },
      { type: "paragraph", content: "There are many evidence based therapies for autistic children. Applied Behaviour Analysis, Speech-Language Pathology and Occupational Therapy are 3 options. Each child is different and will need an individualized therapy program." },
      { type: "heading", content: "Applied Behaviour Analysis (ABA)" },
      { type: "paragraph", content: "ABA is a scientific discipline that focuses on analysis and evaluation of social and environmental shifts to produce meaningful changes in a person's life." },
      { type: "heading", content: "Speech-Language Pathology" },
      { type: "paragraph", content: "SLPs help with communication challenges including expressive and receptive language, articulation, pragmatics, and feeding." },
      { type: "heading", content: "Occupational Therapy" },
      { type: "paragraph", content: "OTs help with sensory processing, fine motor skills, self-care, and daily living skills that support independence." }
    ]
  },
  {
    title: "What Makes ABA Effective?",
    slug: "what-makes-aba-effective",
    date: "June 13, 2025",
    summary: "Many families ask 'What makes ABA effective?' when they're starting their autism therapy journey. This post describes a number of factors that make ABA an evidence-based approach.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-makes-aba-effective/",
    category: "ABA Therapy",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Many families ask \"What makes ABA effective?\" when they're starting their autism therapy journey. This post will describe a number of the factors and things that make ABA an evidence based approach." },
      { type: "heading", content: "Why is ABA an Effective Intervention Method for Autism?" },
      { type: "paragraph", content: "Autism is a neurological condition that is often diagnosed in children under 5 years. There is no cure for autism. However, there are evidence based interventions like Applied Behaviour Analysis (ABA) that can help autistics learn necessary skills." },
      { type: "paragraph", content: "The autistic child's specific needs should be at the forefront of an ABA program. The therapist chooses the targets and programs based on the child's current skills. Teaching procedures are specific to the learner." },
      { type: "heading", content: "Key Factors That Make ABA Effective" },
      { type: "list", content: "ABA is effective because of:", items: ["Individualized programming based on assessment", "Data-driven decision making", "Use of positive reinforcement", "Systematic teaching procedures", "Ongoing evaluation and adjustment", "Evidence-based strategies", "Family involvement and training"] }
    ]
  },
  {
    title: "What Can An OT Do For My Autistic Child?",
    slug: "what-can-an-ot-do-for-my-autistic-child",
    date: "May 30, 2025",
    summary: "Is your child autistic? Did their doctor recommend occupational therapy? Read on to find out what an OT can do for an autistic child.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-can-an-ot-do-for-my-autistic-child/",
    category: "Occupational Therapy"
  },
  {
    title: "What Does Masking Autism Mean?",
    slug: "what-does-masking-autism-mean",
    date: "May 17, 2025",
    summary: "Camouflaging or masking in autism has far reaching effects on the person. In this post you'll discover what masking is, what effects it has, why it is damaging and how to avoid it.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-does-masking-autism-mean/",
    category: "Understanding Autism",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "Camouflaging or masking in autism has far reaching effects on the person. In this post you'll discover what masking is, what effects it has on the person, why it is damaging and how to avoid it." },
      { type: "heading", content: "What is masking in autism?" },
      { type: "paragraph", content: "Masking is when an autistic person behaves in a way that is unnatural to them in an effort to seem more 'neurotypical'. People fear things that are different. Many autistics describe masking to fit in." },
      { type: "paragraph", content: "There are 4 times more autistic males than females. Recently, there has been a lot of discussion if autism is really more common in males or if females are more skilled at masking their symptoms. Female autistics are often diagnosed at later ages." },
      { type: "heading", content: "Why is masking harmful?" },
      { type: "paragraph", content: "Masking leads to exhaustion, anxiety, depression, loss of identity, and delayed diagnosis. When autistic people constantly suppress their natural behaviors, it takes a significant toll on their mental health." },
      { type: "heading", content: "How to support unmasking" },
      { type: "paragraph", content: "Create safe environments where autistic people can be themselves. Celebrate neurodiversity. Educate others about autism. Focus on acceptance rather than conformity." }
    ]
  },
  {
    title: "Early Intervention in Autism Treatment",
    slug: "early-intervention-in-autism-treatment",
    date: "May 10, 2025",
    summary: "There is a lot of hype around early intervention in autism treatment. This deep dive into early intervention will help you understand the goal, how and where to access it, and why it's important.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/early-intervention-in-autism-treatment/",
    category: "Early Intervention",
    author: "Lindsey Malc",
    content: [
      { type: "paragraph", content: "There is a lot of hype around early intervention in autism treatment. This deep dive into early intervention will help you understand the goal, how and where to access it, why it's important and more." },
      { type: "heading", content: "What is early intervention in autism treatment?" },
      { type: "paragraph", content: "Intervention or therapy that happens before a child enters school. Parents and caregivers work with therapists to learn skills and strategies that will help their child. Services can take many forms (in home, in daycare, in clinic)." },
      { type: "heading", content: "Why is early intervention important?" },
      { type: "paragraph", content: "The brain is most plastic in the first few years of life. Early intervention takes advantage of this neuroplasticity to help children develop foundational skills. Research consistently shows that children who receive early intervention have better outcomes across all domains of development." }
    ]
  },
  {
    title: "Autism Severity Levels (DSM-5)",
    slug: "autism-severity-levels-in-2021",
    date: "May 3, 2025",
    summary: "When your child gets an Autism Spectrum Disorder diagnosis there is an avalanche of information. What do the autism severity levels mean?",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-severity-levels-in-2021/",
    category: "Understanding Autism",
    readTime: "4 minutes"
  },
  {
    title: "Challenging Behaviours in Autism Treatment",
    slug: "challenging-behaviours-in-autism-treatment",
    date: "April 26, 2025",
    summary: "This blog discusses challenging behaviours: why language matters when describing behaviour, behaviour as communication, functions of behaviour, replacements and safety.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/challenging-behaviours-in-autism-treatment/",
    category: "Behaviour",
    readTime: "3 minutes"
  },
  {
    title: "Autoclitics: 4 Things to Know",
    slug: "autoclitics-4-things-to-know-in-2021",
    date: "April 19, 2025",
    summary: "This is the last blog in our series about Skinner's verbal behaviour. If you haven't already, you should read the other posts about Manding, Echoics, Tacts and Intraverbals.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autoclitics-4-things-to-know-in-2021/",
    category: "Verbal Behaviour"
  },
  {
    title: "Intraverbals: 4 Things To Know",
    slug: "intraverbals-4-things-to-know",
    date: "April 10, 2025",
    summary: "This week's post continues the series on Skinner's Verbal Behaviour. If you haven't already, you should read the other posts about Manding, Echoics and Tacts.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/intraverbals-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Tacting: 4 Things To Know",
    slug: "tacting-4-things-to-know",
    date: "April 1, 2025",
    summary: "This week's post continues the series on Skinner's Verbal Behaviour. This post will tackle Tacts and tacting.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/tacting-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Echoics: 4 Things to Know",
    slug: "echoics-4-things-to-know",
    date: "March 23, 2025",
    summary: "This post continues the series about Skinner's Verbal Behaviour. Last week we spoke about Mands and their value in improving a person's quality of life. This week we'll talk about Echoics!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/echoics-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "Manding: 4 Things to Know",
    slug: "manding-4-things-to-know",
    date: "March 14, 2025",
    summary: "Last week I introduced Skinner's Verbal Behaviour. This week we're going to focus on the first verbal operant: mands. Another word for mand is request.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/manding-4-things-to-know/",
    category: "Verbal Behaviour"
  },
  {
    title: "What is Skinner's Verbal Behaviour?",
    slug: "what-is-skinners-verbal-behaviour",
    date: "March 8, 2025",
    summary: "B.F. Skinner created Verbal Behaviour. Read this short introduction to learn more about what he developed and how it can help autistics.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-skinners-verbal-behaviour/",
    category: "Verbal Behaviour"
  },
  {
    title: "What is Stimming in Autism?",
    slug: "what-is-stimming-in-autism",
    date: "February 28, 2025",
    summary: "One of the clinical indicators of autism is repeating the same actions over and over again (AKA: stims or stimming). Stimming in autism is movements or other behaviours that are either calming or alerting.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-stimming-in-autism/",
    category: "Understanding Autism"
  },
  {
    title: "Top 5 Picky Eating Strategies",
    slug: "top-5-picky-eating-strategies",
    date: "February 21, 2025",
    summary: "Autistic children are often picky eaters. Once you've figured out the reason your child is picky you can use these picky eating strategies.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/top-5-picky-eating-strategies/",
    category: "Parent Tips",
    readTime: "3 minutes"
  },
  {
    title: "What is Parent Coaching?",
    slug: "what-is-parent-coaching",
    date: "February 14, 2025",
    summary: "Parent coaching is an excellent way to learn ABA strategies and techniques to become empowered to help your child yourself!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-parent-coaching/",
    category: "Parent Tips"
  },
  {
    title: "Is There a Cure for Autism? Part 2",
    slug: "is-there-a-cure-for-autism-part-2",
    date: "February 7, 2025",
    summary: "In last week's post we discussed that some parents are searching for a cure for autism. This week we'll be looking at IF there should even be a cure.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-there-a-cure-for-autism-part-2/",
    category: "Understanding Autism"
  },
  {
    title: "Is There a Cure for Autism? Part 1",
    slug: "is-there-a-cure-for-autism-part-1",
    date: "February 1, 2025",
    summary: "'Is there a cure for Autism?' 'How long will my child have to be in therapy?' Each week I speak with parents, most of who have newly diagnosed children.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/is-there-a-cure-for-autism-part-1/",
    category: "Understanding Autism"
  },
  {
    title: "How and When To Tell a Child They're Autistic",
    slug: "how-and-when-to-tell-a-child-theyre-autistic",
    date: "January 25, 2025",
    summary: "Many parents are unsure of when or how to tell a child they're autistic. It can be a very sensitive subject and without some thought it can be a tricky conversation to navigate.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-and-when-to-tell-a-child-theyre-autistic/",
    category: "Parent Tips"
  },
  {
    title: "Strategies Used in ABA: Top 5!",
    slug: "strategies-used-in-aba-top-5",
    date: "January 18, 2025",
    summary: "There are MANY ABA strategies that are effective for teaching learners new skills. Here are my top 5 favourite!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/strategies-used-in-aba-top-5/",
    category: "ABA Therapy"
  },
  {
    title: "Top 5 Myths about ABA",
    slug: "top-5-myths-about-aba",
    date: "January 11, 2025",
    summary: "There are many myths about ABA. Here are the top 5 myths debunked! Connect with Side by Side Therapy for more information about how we help!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/top-5-myths-about-aba/",
    category: "ABA Therapy"
  },
  {
    title: "What is Reinforcement in ABA?",
    slug: "what-is-reinforcement-in-aba",
    date: "January 4, 2025",
    summary: "When you're new to ABA it can be very daunting. There are many acronyms and words with unusual meanings. In this post we'll discuss reinforcement in ABA and how you can use it to increase behaviour.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-reinforcement-in-aba/",
    category: "ABA Therapy"
  },
  {
    title: "How to Choose an ABA Provider",
    slug: "how-to-choose-an-aba-provider",
    date: "December 28, 2024",
    summary: "This post describes the elements you need to consider when you choose an ABA provider for your child. As soon as you get an Autism diagnosis the first place you turn is likely Google.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-choose-an-aba-provider/",
    category: "ABA Therapy"
  },
  {
    title: "How to Get Your Child to Cooperate!",
    slug: "how-to-get-your-child-to-cooperate",
    date: "December 21, 2024",
    summary: "Robert Schramm has developed these 7 steps to get your child to cooperate. In applied behaviour analysis, cooperation or compliance is one of the first things we work to establish.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-get-your-child-to-cooperate/",
    category: "Parent Tips"
  },
  {
    title: "Ontario Autism Program Announcement",
    slug: "ontario-autism-program-announcement",
    date: "December 14, 2024",
    summary: "On Friday December 11th, 2020, the province published an announcement about the rollout of the newest variation of the Ontario Autism Program.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/ontario-autism-program-announcement/",
    category: "Ontario Autism Program"
  },
  {
    title: "Red Flags for Autism: 8 Behaviours to Look For",
    slug: "red-flags-for-autism-8-behaviours-to-look-for",
    date: "December 7, 2024",
    summary: "Each child develops at their own pace. However, there are general guidelines, called milestones, that are used in monitoring if your child is progressing. When a child doesn't meet their milestones, it can be a red flag for autism.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/red-flags-for-autism-8-behaviours-to-look-for/",
    category: "Early Signs"
  },
  {
    title: "How To Get An Autism Diagnosis",
    slug: "how-to-get-an-autism-diagnosis",
    date: "November 30, 2024",
    summary: "Families with concerns about their child's development will wonder where to go. Read on to find out where you can go in Ontario for help.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-get-an-autism-diagnosis/",
    category: "Diagnosis",
    readTime: "3 minutes"
  },
  {
    title: "Why is ABA Therapy So Expensive?",
    slug: "why-is-aba-therapy-so-expensive",
    date: "November 23, 2024",
    summary: "Why is ABA Therapy so expensive? Read on to find out more about some of the barriers in Ontario that make therapy unaffordable.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/why-is-aba-therapy-so-expensive/",
    category: "ABA Therapy",
    readTime: "3 minutes"
  },
  {
    title: "Autism in Ontario: What Funding is Available?",
    slug: "autism-in-ontario-what-funding-is-available",
    date: "November 16, 2024",
    summary: "Autism is expensive. Utilize these funds to help offset the extraordinary costs associated with raising your child.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-in-ontario-what-funding-is-available/",
    category: "Ontario Autism Program"
  },
  {
    title: "How to Use Visual Schedules to Reduce Challenging Behaviour",
    slug: "how-to-use-visual-schedules-to-reduce-challenging-behaviour",
    date: "November 9, 2024",
    summary: "Children thrive on predictability and structure. Using visual schedules is an excellent way to support your child in many settings.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-use-visual-schedules-to-reduce-challenging-behaviour/",
    category: "Behaviour"
  },
  {
    title: "What is Social Communication?",
    slug: "what-is-social-communication",
    date: "November 2, 2024",
    summary: "Autistic children have difficulty with social communication. This blog post explains what social communication is and how to address it.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-social-communication/",
    category: "Speech Therapy"
  },
  {
    title: "Early Autism Diagnosis: Key to Successful Intervention",
    slug: "early-autism-diagnosis-key-to-successful-intervention",
    date: "October 25, 2024",
    summary: "There are many ways that receiving an early autism diagnosis will benefit your child and family (having a treatment plan is just one!)",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/early-autism-diagnosis-key-to-successful-intervention/",
    category: "Diagnosis"
  },
  {
    title: "Things You Need To Know About Language Delays",
    slug: "things-you-need-to-know-about-language-delays",
    date: "October 19, 2024",
    summary: "Many children with autism also have language delays. Read about how your S-LP can address these challenges and why it's important to!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/things-you-need-to-know-about-language-delays/",
    category: "Speech Therapy",
    readTime: "3 minutes"
  },
  {
    title: "How To Choose A Speech-Language Pathologist",
    slug: "how-to-choose-a-speech-language-pathologist",
    date: "October 12, 2024",
    summary: "It can be very difficult to know how to choose a Speech-Language Pathologist. Ask these questions before you sign up with a new clinician.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-choose-a-speech-language-pathologist/",
    category: "Speech Therapy",
    readTime: "3 minutes"
  },
  {
    title: "Autistic Teenagers and Adults Getting Jobs",
    slug: "autistic-teenagers-and-adults-getting-jobs",
    date: "October 5, 2024",
    summary: "An autism diagnosis should not stop anyone from being a productive person and bringing their contribution to society. Both autistic teenagers and adults can get jobs.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autistic-teenagers-and-adults-getting-jobs/",
    category: "Life Skills",
    readTime: "2 minutes"
  },
  {
    title: "Speech Therapy in Autism Treatment",
    slug: "speech-therapy-in-autism-treatment",
    date: "September 28, 2024",
    summary: "Learn how speech therapy in autism treatment can be key to helping your child communicate and learn. All areas of communication can be addressed.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/speech-therapy-in-autism-treatment/",
    category: "Speech Therapy",
    readTime: "2 minutes"
  },
  {
    title: "The 5 Benefits of Outdoor Play",
    slug: "the-benefits-of-outdoor-play",
    date: "September 20, 2024",
    summary: "Most children love playing outside but few recognize the benefits of outdoor play. Learn why you should encourage your child to play outside!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/the-benefits-of-outdoor-play/",
    category: "Parent Tips",
    readTime: "2 minutes"
  },
  {
    title: "How to Build a Good Relationship with Your Child's Teacher",
    slug: "how-to-build-a-good-relationship-with-your-childs-teacher",
    date: "September 13, 2024",
    summary: "There are specific things you can do to help build the relationship you have with your child's teacher to set them up for success.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-build-a-good-relationship-with-your-childs-teacher/",
    category: "School",
    readTime: "3 minutes"
  },
  {
    title: "What is Sensory Processing Disorder?",
    slug: "what-is-sensory-processing-disorder",
    date: "September 6, 2024",
    summary: "Many children and adults have Sensory Processing Disorder. Read on to learn what the signs are and who can help!",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/what-is-sensory-processing-disorder/",
    category: "Occupational Therapy"
  },
  {
    title: "How To Pick The Right Autism Therapy: 8 Questions",
    slug: "how-to-pick-the-right-autism-therapy-8-questions",
    date: "August 23, 2024",
    summary: "Knowing which direction to move when looking for autism therapy can be tricky. Here are 8 questions to ask potential therapy providers.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/how-to-pick-the-right-autism-therapy-8-questions/",
    category: "Therapy Options",
    readTime: "4 minutes"
  },
  {
    title: "IBI and ABA: What's the Difference?",
    slug: "ibi-and-aba-whats-the-difference",
    date: "August 16, 2024",
    summary: "Learn about the differences between Intensive Behavioural Intervention (IBI) and Applied Behaviour Analysis (ABA) therapy approaches.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/ibi-and-aba-whats-the-difference/",
    category: "ABA Therapy",
    readTime: "3 minutes"
  },
  {
    title: "Early Start Denver Model (ESDM): Unleash Potential!",
    slug: "early-start-denver-model-esdm-unleash-potential",
    date: "August 9, 2024",
    summary: "The brain has a unique property called neuroplasticity. Children under 5 have the easiest time with neuroplasticity. Even with an autism diagnosis, significant life-changing gains are possible through early intervention using the Early Start Denver Model.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/early-start-denver-model-esdm-unleash-potential/",
    category: "Early Intervention",
    readTime: "4 minutes"
  },
  {
    title: "Autism: What's More Important — Equality or Equity?",
    slug: "autism-equality-equity",
    date: "April 13, 2024",
    summary: "Equality and equity are often understood as synonymous, but they are very different. This post explores the importance of equity over equality when supporting autistic individuals, including modifications and accommodations.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-equality-equity/",
    category: "Understanding Autism",
    readTime: "6 minutes"
  },
  {
    title: "Autism and Memory: Amazing Superpowers of a Child with Autism",
    slug: "autism-memory",
    date: "April 7, 2024",
    summary: "Guest post by Dr. Tracy Alloway exploring the working memory profile of children with autism, how their brains develop differently, and the unique strengths that can give them advantages in certain areas.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/autism-memory/",
    category: "Understanding Autism",
    readTime: "4 minutes"
  },
  {
    title: "Applied Behaviour Analysis: 59 Terms Translated",
    slug: "applied-behaviour-analysis-translated",
    date: "January 20, 2024",
    summary: "There are so many terms and acronyms in the world of applied behaviour analysis. This comprehensive glossary translates 59 common ABA terms and phrases for easy understanding by parents and caregivers.",
    url: "https://www.sidebysidetherapy.ca/autism-spectrum-disorder/applied-behaviour-analysis-translated/",
    category: "ABA Therapy",
    readTime: "7 minutes"
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug: string, category: string, limit = 3): BlogPost[] => {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
};
