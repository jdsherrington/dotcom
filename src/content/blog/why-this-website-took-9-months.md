---
layout: ../../layouts/BlogPostLayout.astro
title: "Why This Website Took Me 9 Months to Build"
date: 2025-06-03
description: "A reflection and critical examination of the creative process, staying focused, and potential pitfalls when developing a personal website."
author: "Jordan Sherrington"
imageAlt: "Why this website took me 9 months to build"
tags: ["astro", "web development", "design", "reflection"]
wordCount: 2135
---

I write this post with a mixture of shame, pride, and relief; my personal website is complete. At least, as complete as it currently needs to be. The title of this post might sound absurd to some; surely just grab a template for whichever framework you've chosen and tweak it as needed, right?

Not exactly. I wanted to explore and reflect upon some of the decisions that led me to this point, as well as some regrets and lessons learned. Hopefully this can help you in some way, without needing to spend nearly a year just to establish your own web presence.

Before diving into the journey, a quick note on the technical aspect: this website was built using the Astro web framework, chosen for its content-first architecture and build-time rendering. AI assistance was minimal, primarily for generating boilerplate, grasping specific concepts, or brainstorming solutions to tough technical challenges.

---

## The Pursuit of Perfect

First of all, this must be said; no matter how you build your website, whether it be through a platform like Wix or Framer, or a fully DIY solution like Astro or Next.js, a universal principle applies. If you have any degree of creative vision as to the design or distinctiveness of your website, you need to learn to settle for the Good in some areas instead of chasing the Perfect for 9 months.

This website has undergone several redesigns before it was even functional. There's really no excuse for this, besides unchecked perfectionism and a lack of a hard deadline. Building this way, I came to a better understanding of myself, my own creative process, and valuable lessons to learn from. The best place to start, I suppose, is the beginning.

## The Beginning

In September 2024, I made my first commit on this project. It was essentially just an Astro starter project with some basic boilerplate, but I had a vision for what I wanted; a blog page for my writings, a projects page to show prospective clients or employers what I've worked on, and a page dedicated to resources I find cool or useful. Pretty basic, I figured. As it turns out, the bulk of my time was spent on **presentation**, and deciding how exactly I wanted to portray myself. For me, this site wasn't just to be defined by the content, but also for it's visual identity. The problem was, I couldn't quite decide on a visual identity that resonated with me.

At first, I went for more of an Apple/iOS type of aesthetic; rounded corners, smooth eased animations, frosted glass everything. But as I finished implementing the mechanism that loads markdown files as rendered blog posts, I ended up feeling like the visual design was quite ordinary and uninspired; aping Apple felt like low-hanging fruit. There's nothing wrong with that at all, but for myself, I wanted a distinctive look, so I started to tweak and noodle, for quite a long time.

## Lost in the Details

Eventually, I found that most of the time I was working on the website, it was to fix seemingly minor details; two borders being misaligned, or the h1 text being too big on the blog post cards, or an animation not fading out quite right. Ridiculous from the outside, and I had a degree of self-awareness about that fact, but at the time it seemed vital to me. I knew that the little things, the things you don't immediately notice, are what create friction if they're not done right. How could I not spend time tweaking these elements to technical perfection, when in my mind they were as much an indicator of my attention to detail as the features of the website itself?

Then, my daughter was born.

This definitely threw me off my routine a bit, as is to be expected for anyone when their first child comes along, but also lit a fire under me; if I were to be hired as a software developer in this day and age, I needed to impress, and I needed my web presence to do most of the talking. I also knew that the earlier I finished my website, the sooner I could move on to more substantive projects that showed my technical skills. Despite knowing this, I was still dissatisfied with the visual identity, and continued tweaking, exploring different ideas, hoping to find something that would resonate with me.

## Sharpening the Saw

As I frittered away at the details, I also found myself getting caught falling down other rabbitholes. For example, I wasn't quite happy with my development environment, and decided I needed to get my Neovim, Tmux (now Zellij), and Linux configuration in an optimal state. While I could tell at the time that this wasn't conducive to finishing the website, I found that the niggling issues were actually slowing down my workflow in some ways.

Once that was dealt with, I started to look into ergonomic keyboards as a preventative measure against injury, and ended up building my own Corne 40-key split keyboard, which led to a great deal of slowdown in my typing speed.

It wasn't like I was trying to avoid working on the website, I was just seeking to optimise my workflow. This can easily become "procrastination through preparation", or otherwise just perfectionism. In my case, this is likely more accurate than I would like. I ended up switching back to my traditional keyboard so that I could finish my website as quickly as possible.

## Becoming Inspired

I had realised something; I was designing based on my nebulous impression of what blog/portfolio websites were meant to look like, instead of seeking direct inspiration from more established designers online. I started to browse X/Twitter more intently, following web designers and looking more closely at what they were sharing, and I found two sources of inspiration to draw from.

### 2052 Surfers

The first thing to really catch my eye was the clean, elegant design of the interface in the short film 2052 Surfers. Not having seen the film myself, I instead came across this interface design through X/Twitter, and immediately sought out more examples. Below I've included a few of the images that helped inform the direction I wanted to go for my website:

<img src="https://images.squarespace-cdn.com/content/v1/63e0365f1614c663d202d307/146710de-6895-476f-ae80-bac13aa4a41c/2.jpg" alt="2052 Surfers Dark Interface"/>

_The dark version of the interface; I ended up using the same gradient for the dark mode of my website._

<img src="https://images.squarespace-cdn.com/content/v1/63e0365f1614c663d202d307/89d2ee89-fe50-404f-9481-815c33b96b7f/20.jpg" alt="2052 Surfers Light Interface"/>

_The light version of the same interface; I used a similar contrast for my light mode, and was enamoured with the blend of complex technical detail with an overall minimalist aesthetic._

Full credit to GMUNK and Nicholas Lopardo, [click here for more information and screenshots from the project.](https://www.nicolaslopardo.com/2052-surfers)

As I began to redesign my website to aspire to the same sleek, minimal design found in this interface, I found another resource that greatly impressed me.

### The Monospace Web

Through this project, what I rediscovered was a love of basic, stripped back, terminal-based interfaces. The simplicity and raw utility appealed to me greatly, and inspired me as much as the 2052 Surfers interface design.

<img src="https://pbs.twimg.com/media/GWEfrPuWUAEZHhv.png:large" alt="The Monospace Web"/>

At first I tried to fork the repo to build upon it, but I found that the foundation was just too different from what I had built so far. After spending a week trying to implement the same methods of snapping all elements to a terminal-like grid, I ran into technical challenges that would have forced me to rewrite the bulk of my website. Instead, I chose to simply be inspired by the minimalist and functional design, and this brought my website to where it is now.

## Why Shame?

At the start of this post, I wrote that I feel a mixture of shame, pride, and relief. I wanted to explain these feeling further; as time stretched on, I would have periods of intense effort; 5 or more hours a day working on the website after I finished work, stretching into the night. Just as easily, I would feel disillusioned with my progress and didn't work on the website at all for a week or two. My sense of shame came from my, what I felt, inability to work to a deadline or produce quality work in a timely manner. I felt shame that it had taken me 9 months to simply publish my website. How could I ever compete in the software developer market when this is what I have to show for 9 months of effort? Am I even cut out for this?

The more I dwelled on it, the more merciful I became on myself. I considered everything I had worked on during this project that felt at the time like procrastination, and I had the realization that my effort was not in vain; each technical challenge that stumped me, I learned from and eventually overcame. The sort of difficulties I had implementing certain design ideas led me to a deeper understanding of how browsers render content, and the time I took to get things done honed my skills and my sense of "is this really worth my time". I realised I was subconsciously comparing myself to highly experienced developers on social media, and this realization allowed me to detach from these toxic feelings and be kinder to myself.

## Why Pride?

Instead of shame, I instead look at my effort and progress with a sense of accomplishment; sure there are more productive and less productive ways to spend your time building a project, but the only way to sharpen your intuition for this is to just do it. Do the work. Resist the urge to start up a video game, close the YouTube video playing on your second monitor. Any amount of progress you make puts you ahead of your past self.

I am under no delusion that I am some highly skilled designer or developer. What I know I am, is a fast learner and highly motivated. I know I can put in the work instead of choosing the easy path. I have no overblown sense of pride in my work, but I aspire to be better with everything I do and I can take pride in an accomplishment, even if it's as simple as putting myself out there through a long-overdue website.

## Why Relief?

With the shadow of this website no longer hanging over me, I'm free to pursue any project I want to. It's a nice feeling, one I haven't felt in a long time. It's my hope that I can align my own desires with the desires of the market, so that I can provide maximum value wherever I am. At the same time, I know I need to be building as much experience as I can working with real tools and solving interesting problems, and so I think for my next project I'd like to build a fully-featured web app that targets a particular problem. As for what that is, I'm not quite sure yet, but I'll be sharing more about the tech stack I'm looking at and the thinking that went into any decision I make.

## Key Takeaways

If I were to share some key insights about building a personal website from the last 9 months to try and help others falling into the same pitfalls that I did, I think I'd land on the following:

- **Build your functionality first.** Get the actual content working. Only when the website is fully functional should you focus on the visual design.
- **Find inspiration as quickly as possible.** Don't wait until you're stuck and struggling for motivation. This could be through social media, Behance, Pinterest, or any other webdev inspiration websites. There are a lot of them and they aren't hard to find. Find a number of them that appeal to you and convey a visual style that you identify with, and copy elements from them to create your own vision. If it would be useful, you can create a mockup on Figma prior to building your website, which will save a lot of time.
- **Learn when to let go.** Sometimes good enough is good enough. Other times, a fine attention to detail is required. Learn the difference between the two, and use the vision you've established to stay on track.
- **Sharpen your tools as little as required, and no more.** Decide what is absolutely necessary and what is superfluous. Be honest with yourself.
- **Go easy on yourself.** Sometimes, life gets in the way, and that's okay. Not everyone learns at the same pace, not everything is as easy as social media makes it seem. Be generous to yourself and just do the work when you're able.
