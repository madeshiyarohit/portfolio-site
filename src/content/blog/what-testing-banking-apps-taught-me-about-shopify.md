---
title: What testing banking apps taught me about building Shopify stores
seoTitle: "What Testing Banking Apps Taught Me About Shopify"
description: Before I built Shopify stores, I spent my days trying to break banking and healthcare software. Those habits now protect every store I launch.
date: 2026-11-02
cover: /Assets/rohit-madeshiya-shopify-developer-at-work.webp
coverAlt: Rohit Madeshiya testing a Shopify store at his desk
tags: [Testing, Behind the Scenes]
featured: true
draft: false
---

Before I ever touched a Shopify theme, my job was to break things.

At Deloitte I tested banking and healthcare applications: the kind of software where a missed bug isn't just embarrassing. It can mean a failed payment, a wrong account balance or a patient record that doesn't load when a doctor needs it. You learn very quickly that "it works on my screen" means nothing.

When I moved into building Shopify stores, I expected to leave that world behind. Instead, it turned out to be the most useful thing I brought with me.

## "Happy path" thinking is how stores break

Most stores are built and checked along the *happy path*: open the homepage, click a product, add to cart, check out. Everything works, so the store goes live.

Real customers don't behave like that. They:

- open your store on a four-year-old Android phone on patchy mobile data,
- add three items, remove one, then change the quantity of another,
- paste a discount code with a space at the end,
- hit the back button in the middle of checkout,
- come back two days later with the same cart.

In testing, we called these *edge cases*. In e-commerce, they're just Tuesday. Every one of them is a moment where a customer can get confused or give up.

## Write down what "working" means

One habit from my testing days I never dropped is writing short test cases before launch. Nothing fancy, just plain sentences:

> "A customer on mobile can add a product in size M, apply the code WELCOME10, and see the discounted total before paying."

When "working" is written down, you can actually check it, and so can the client. It turns a vague "looks fine" into a clear yes or no.

## Test on real devices, not just a resized browser

Shrinking a desktop browser window is not the same as using a phone. Real devices have different fonts, keyboards popping up over forms, slower processors and smaller tap targets. I always test on at least one iPhone, one Android phone, a tablet and a desktop browser before calling a store done.

The bugs you find this way are rarely dramatic. A button hidden behind the keyboard. A menu that won't close. A product image that loads slowly enough that people scroll past it. Small things, but they add up to lost sales.

## Treat the checkout like a bank transfer

In banking software, the money path is tested more than anything else. I treat a Shopify checkout the same way. Before launch, I check:

1. Every payment method the store offers, with a real test order.
2. Shipping rates for different regions and cart sizes.
3. Discount codes, including expired and invalid ones.
4. Taxes on the final total.
5. The order confirmation email, on both phone and desktop.

If something is going to go wrong, I want it to go wrong for me, not for your first customer.

## Log it, fix it, check it again

The last habit is the least glamorous: every issue gets written down, fixed and then **re-tested**. Fixing one thing on a website can easily break another, so "I fixed it" isn't the end. "I checked it again and it works" is.

## Why this matters for your store

You don't need to care about any of this as a store owner. You just need a store that works on launch day and keeps working after. That's the whole point. Building the store is half of my job; trying to break it before your customers do is the other half.

If you're about to launch and want a second pair of eyes on your store, [let's talk](/contact/).
