

# Add Full Article Content to Remaining Blog Posts

## Overview
41 blog posts currently only show summaries (no `content` array). This plan adds full article content fetched from sidebysidetherapy.ca to each one.

## Posts to Update (grouped by category)

**Verbal Behaviour Series (6 posts):**
- Autoclitics: 4 Things to Know
- Intraverbals: 4 Things To Know
- Tacting: 4 Things To Know
- Echoics: 4 Things to Know
- Manding: 4 Things to Know
- What is Skinner's Verbal Behaviour?

**ABA Therapy (7 posts):**
- Strategies Used in ABA: Top 5!
- Top 5 Myths about ABA
- What is Reinforcement in ABA?
- How to Choose an ABA Provider
- Why is ABA Therapy So Expensive?
- IBI and ABA: What's the Difference?
- Applied Behaviour Analysis: 59 Terms Translated

**Understanding Autism (4 posts):**
- What is Stimming in Autism?
- Is There a Cure for Autism? Part 1 & Part 2
- Autism: Equality or Equity?
- Autism and Memory

**Parent Tips (5 posts):**
- Top 5 Picky Eating Strategies
- What is Parent Coaching?
- How and When To Tell a Child They're Autistic
- How to Get Your Child to Cooperate!
- The 5 Benefits of Outdoor Play

**Occupational Therapy (2 posts):**
- What Can An OT Do For My Autistic Child?
- What is Sensory Processing Disorder?

**Speech Therapy (4 posts):**
- What is Social Communication?
- Things You Need To Know About Language Delays
- How To Choose A Speech-Language Pathologist
- Speech Therapy in Autism Treatment

**Diagnosis & Early Signs (4 posts):**
- How To Get An Autism Diagnosis
- Early Autism Diagnosis: Key to Successful Intervention
- Red Flags for Autism: 8 Behaviours to Look For
- Autism Severity Levels (DSM-5)

**Other (9 posts):**
- Challenging Behaviours in Autism Treatment
- Ontario Autism Program Announcement
- Autism in Ontario: What Funding is Available?
- How to Use Visual Schedules to Reduce Challenging Behaviour
- Autistic Teenagers and Adults Getting Jobs
- How to Build a Good Relationship with Your Child's Teacher
- How To Pick The Right Autism Therapy: 8 Questions
- Early Start Denver Model (ESDM)

## Technical Approach

**File modified:** `src/data/blogPosts.ts`

For each post:
1. Fetch the article from sidebysidetherapy.ca
2. Extract headings, paragraphs, and lists from the markdown content
3. Convert to `BlogPostSection[]` format (heading, paragraph, list types)
4. Add `author: "Lindsey Malc"` where missing (most posts are by Lindsey)
5. Add `readTime` estimates where missing

The content structure follows the existing pattern:
```ts
content: [
  { type: "paragraph", content: "..." },
  { type: "heading", content: "..." },
  { type: "list", content: "Label:", items: ["item1", "item2"] },
]
```

## Execution
This will be done in batches (fetching multiple articles at once) to populate all 41 posts. The file will grow significantly but all content is static data — no performance impact on the app since only one post loads at a time.

