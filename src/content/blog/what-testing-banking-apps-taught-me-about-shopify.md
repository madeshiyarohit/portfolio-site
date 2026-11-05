---
title: What testing banking apps taught me about building Shopify stores
seoTitle: "What Testing Banking Apps Taught Me About Shopify"
description: Before I built Shopify stores, I tested banking and healthcare software at Deloitte. Here are the testing habits that carry over to an online store.
date: 2026-11-04
updated: 2026-11-06
cover: /Assets/rohit-madeshiya-shopify-developer-at-work.webp
coverAlt: Rohit Madeshiya testing a Shopify store at a desk
tags: [Testing, Behind the Scenes]
featured: true
draft: false
---

Before I ever touched a Shopify theme, my job was to break things.

At Deloitte I tested banking and healthcare applications: the kind of software where a missed bug isn't just embarrassing. It can mean a failed payment, a wrong account balance or a patient record that doesn't load when a doctor needs it. You learn very quickly that "it works on my screen" means nothing.

When I moved into building Shopify stores, those testing habits came with me. Here are the ones that matter most for an online store.

## "Happy path" thinking is how stores break

Most stores are built and checked along the *happy path*: open the homepage, click a product, add to cart, check out. Everything works, so the store goes live.

Real customers don't behave like that. They:

- open your store on a four-year-old Android phone on patchy mobile data,
- add three items, remove one, then change the quantity of another,
- paste a discount code with a space at the end,
- hit the back button in the middle of checkout,
- come back two days later with the same cart.

In testing, these are called *edge cases*. In e-commerce, they're normal behavior. Every one of them is a moment where a customer can get confused or give up.

## Write down what "working" means

Writing test cases was part of my job as a tester, and the same idea works for a store launch. Nothing fancy, just plain sentences:

> "A customer on mobile can add a product in size M, apply the code WELCOME10, and see the discounted total before paying."

When "working" is written down, you can actually check it, and so can the client. It turns a vague "looks fine" into a clear yes or no.

## Test on real devices, not just a resized browser

Shrinking a desktop browser window is not the same as using a phone. Real devices have different fonts, keyboards popping up over forms, slower processors and smaller tap targets. A proper check covers at least one iPhone, one Android phone, a tablet and a desktop browser.

The bugs you find this way are often small. A button hidden behind the keyboard. A menu that won't close. A product image that loads slowly. Small things, but each one can cost you a customer.

## Treat the checkout like a bank transfer

In banking software, critical journeys like payments get especially careful testing. A Shopify checkout deserves the same care. Before launch, check:

1. Every payment method the store offers, with a test order. Shopify's [test mode or Bogus Gateway](https://help.shopify.com/manual/checkout-settings/test-orders) comes first, then a real order for anything those can't cover.
2. Shipping rates for different regions and cart sizes.
3. Discount codes, including expired and invalid ones.
4. Taxes on the final total.
5. The order confirmation email, on both phone and desktop.

If something is going to go wrong, I want it to go wrong for me, not for your first customer.

## Log it, fix it, check it again

The last habit is the least glamorous: every issue should be written down, fixed and then **re-tested**. Fixing one thing on a website can easily break another, so "I fixed it" isn't the end. "I checked it again and it works" is.

## Why this matters for your store

You don't need to care about any of this as a store owner. You just need a store that works on launch day and keeps working after. That's the whole point. I build Shopify stores and test them like a QA engineer, so trying to break a store before your customers do is part of the job.

If you're about to launch and want a second pair of eyes on your store, [let's talk](/contact/).
