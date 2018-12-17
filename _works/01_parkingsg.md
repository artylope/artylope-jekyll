---
layout: single-work
title: Parking.sg
category: works
permalink: "/works/parkingsg.html"
description: Getting rid of the paper parking coupons with a mobile app
thumbnail: "/img/works_parking/works_parking_thumbnail.png"
locked: false
hero: "/img/works_parking/works_parking_hero.png"
owner: GovTech Singapore
platform: iOS, Android
year: 2016 - Present
role: Lead Designer. User Research, Prototyping, Wireframing, User Testing, User Interface Design, Trial Set Up, Product Strategy, Product Management
published: true
---

# The Problem #
  Motorists in Singapore have to tear pre-paid paper coupons to pay for parking in some public car parks. Motorists need to tear many pieces if they were to park for a long period of time. If they want to extend parking, they will have to run back to their vehicle to tear more coupons. It is an outdated and cumbersome solution.

  We wanted to develop a digital parking system that can replace the paper coupons, to give citizens the convenience of being able to pay for parking easily and extend parking remotely.

  <div><img src="/img/works_parking/parking_problem.png"></div>
###### what staying over at a friend's place will make of your car's dashboard ######

# The Solution #
  In October 2017, we released Parking.sg, a mobile app that allows motorists in Singapore pay for parking charges at all coupon-based public car parks. The app has these 3 main features.

  <div><img src="/img/works_parking/parking_features.png"></div>

  How did we arrive at this solution? I will cover the highlights of the journey from discovery to production.

# My Role #
Lead Designer. User Research, Prototyping, Wireframing, User Flows, User Testing, User Interface Design, Trial Set Up, Product Strategy, Product Management

# The Team #
8 people in total, 3-4 at any one time (i.e. 1 Product Manager, 2 Developers and 1 Designer) We also worked with public servants in car park operations at the various government agencies. I did most of the design work. Sarah Salim, a fellow designer, polished the visual design.

# Development Timeline
10 months from prototype to full public launch in Oct 2017. Ongoing iteration and development there after.

# Interviewing the users #
In late 2016, during the discovery phase, I prepared the following interview questions and interviewed several people who drive and uses the parking coupons. These are what they say, think and do.

<div class="main-carousel" data-flickity='{ "freeScroll": true, "lazyLoad": true }'>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_userinterviewguide.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_user1.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_user2.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_user3.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_user4.png"></div>
</div>


# Mapping out the user journey #
With that information, I plotted this customer journey map to visualise the highlights and pain points of a motorist's parking journey. Looking for parking and paying for parking create the most hassle for the user. And that is what we want to solve.
<div><img src="/img/works_parking/parking_customerjourney.png"></div>

# What are the other cities doing about this problem? #
Many cities have tried to address the parking problem. Some of these are initiated by the local governments, while others are solutions from the carpark owners. I collected the screenshots and compared the features that these solutions have.

<div class="main-carousel" data-flickity='{ "freeScroll": true, "lazyLoad": true }'>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_competitiveanalysis.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_us_parker.png"></div>
  <div class="carousel-cell"><img data-flickity-lazyload="/img/works_parking/parking_uk_paybyphone.png"></div>
</div>

# Ethnography Study with Enforcement Officer #
To help us understand how we can design the system to integrate with the existing enforcement process, we walked the ground with the enforcement officer. She shows us the electronic handheld device (EHT) that she uses to check for season parking information. She also uses it to issue summon. Since she already has this device, we need to find a way to send the real-time digital parking data to her.
<div><img src="/img/works_parking/parking_ethnographystudy.png"></div>
###### The development team walked the grounds with the enforcement officer. ######

# Prototype and Guerilla Testing #
With all the discovery and learnings from above, I made a prototype in Sketch and InVision and brought it out for some users testing based on designed tasks scenarios. The following mock up is a few iterations after these testings.
<div><img style="max-width:360px;" src="/img/works_parking/parking_mockup.gif"></div>
###### Prototype done in Sketch and InVision ######

Based on the design, we made a working prototype with a simple backend so that we can work with URA and HDB (the agencies that manages car parks) to do real parking sessions with actual users at a real carparks. We also made an enforcer app and trained enforcers to use it so that they can enforce the cars that are paid digitally.
<div><img style="max-width:360px;" src="/img/works_parking/parking_enforcerapp.png"></div>
###### Enforcer App will be updated with the digitally parked car in real time. ######

# Identifying Feature Priorities #
During developmemt, we used the following Effort vs Benefit matrix to help us determine what to focus on in the next few months leading to the first major trial with users.
<div><img src="/img/works_parking/parking_featurepriority.svg"></div>
###### Plotting all features on a 2x2 matrix to help determine what to focus on. ######

# Key Product Decisions #
<ol>
  <li>No user accounts <br> User accounts are tedious to build and has very little value add in the case of the parking app. We realise early on that the product can be designed without user accounts. Sure, we lose the ability to track parking history on different phones, or possibly the potential of e-wallets, but for an app that we hope can have high adoption, we need to reduce the barrier of entry.
</li>
<br>
<li> Block-Refund Charging Mechanism <br>
<div><img src="/img/works_parking/parking_blockcharging.svg"></div>
We wanted to implement a charging mechanism that is fair to the user. User should only pay for what they park, unlike the parking coupons that charge users in 30 minutes block. There are 2 ways that this can be done. As illustrated below, the block-refund design gives user the benefit of per-minute charging without incurring administrative overheads due to infinite charging that might happen in the start-stop design.
</li>
</ol>

# User Interface Design #

There are a few key concepts for the interface design.

1. Parking is the only main action. <br> This makes side menu a good solution for navigation vs the bottom tabs menu. User is only presented with the screen to start parking. Everything else is hidden in the side menu.
2. Main call-to-action button is always at the bottom.<br> This creates consistency and users do not need to think too much what they are required of. If there is a secondary action, it will be displayed as a link so as not to distract the user.
3. The triangular Duration-Time-Cost Structure <br> This is an important visual model about how the parking rates are charged that is repeated in many screens.
4. All transient screens are modals screens. <br>  This subconsciously reminds the user that they have yet to complete their current action. This is especially important as our screens looks simple and similar due to the triangular Duration-Time-Cost Structure and a call-to-action button that repeats itself across screen which encourages change-blindness.

<div><img src="/img/works_parking/parking_flow.svg"></div>
###### Parking Screen Flow ######

# Official Launch #
We conducted multiple user trials from May to September with few thousand users and worked out any issues the app and operations have. Parking.sg is launched in Oct 2017. It is available on iOS and Android.

# Reception #
By November 2018, Parking.sg is the top government app with 900k iOS and Android App downloads and **8 million parking sessions** and has an average ratings of **4.1 stars** on Apple App Store and Google Play Store. About **70% of the entire car population in Singapore** have parked using the Parking.sg app.
