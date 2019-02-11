---
layout: single-work
title: Vault
category: works
permalink: "/works/vault.html"
description: A centralised data repository for the public officers
thumbnail: "/img/works_vault/works_vault_thumbnail.png"
locked: false
hero: "/img/works_vault/works_vault_hero.png"
owner: GovTech Singapore
platform: Web
year: 2018 - Present
role: Lead Designer. User Research, Prototyping, Wireframing, User Testing, User Interface Design
published: true
---

# The Problem #
  Imagine John, a policy officer, who needs to make amendments to a policy. He would like to know how this policy amendment can affect the citizens of different income group, employment status, family background etc. He will need to gather these data from IRAS, CPF, MOM and so on. However, most government agencies have their own IT systems, databases and processes around sharing of data. This makes getting data from government agencies for analysis and policy review challenging.

  For this project, I am tasked to improve the data sharing process within the whole of government.
  The data sharing experience largely involves 2 parties, the data requestor and the data owner/approver. The data requestor takes about 3 to 6 months to eventually get hold of the data from the data owner/approver. Our goal is to streamline this process so that it reduces to below 10 working days.

# The Solution #
  A whole of government data repository that stores pre-processed, most frequently requested data sets with these main features.

  - Upload and download of data
  - Hashing of identifiable data
  - Data request and approval process
  - Audit trial of the user to make sure user can be traced back if data is mishandled.

How did we arrive at this solution? I will cover the highlights of the journey from discovery. The product is currently going through development.

# My Role #
Lead Designer. User Research, Prototyping, Wireframing, User Testing, User Interface Design

# The Team #
5 people (i.e. 1 Product Manager, 3 Developers and 1 Designer) We also worked with public servants and policy owners in the data department of the various agencies.

# User Research #
The product manager and I interviewed 11 teams (roughly 40+ people) across the government to understand what is their job functions, their current workflow around data request, governance and sharing. Here are some of the questions we prepared.

  <div><img class="shadow" src="/img/works_vault/vault_interview.png"></div>

After interviewing 40+ people, I mapped out the journey and came up with the following personas.

# Data Requestor's Journey #

 This is how the requestor's journey looks like. There is a lot of frustration in the request phase.

  <div><img class="shadow" src="/img/works_vault/vault_requestor_customerjourney.svg"></div>

# Data Approver's Journey #
And this is how the approver's journey looks like. They do not want to stall the process but they need to fully understand why and what the requestor wants before they can undertake the risk of releasing the data.
  <div><img class="shadow" src="/img/works_vault/vault_approver_customerjourney.svg"></div>

# Personas #

I came up with these 4 personas after distilling the interviewees' processes, job functions, concerns and goals.

<div class="main-carousel" data-flickity='{ "freeScroll": true, "lazyLoad": true }'>
  <div class="carousel-cell"><img class="shadow" data-flickity-lazyload="/img/works_vault/vault_persona_dataanalyst.svg"></div>
  <div class="carousel-cell"><img class="shadow" data-flickity-lazyload="/img/works_vault/vault_persona_datamanager.svg"></div>
  <div class="carousel-cell"><img class="shadow" data-flickity-lazyload="/img/works_vault/vault_persona_datascientist.svg"></div>
  <div class="carousel-cell"><img class="shadow" data-flickity-lazyload="/img/works_vault/vault_persona_policyofficer.svg"></div>
</div>


# Major Insights #
- Data is usually requested as a project team, not by a single user.
- Data request has to go through the approval of multiple layers including requestor's supervisors and various people in the owner agency.
- By having a searchable repository, discovery of how and what data exists can already alleviate much of the frustration.
- Another opportunity will be standardising the request and approval process so that each agency do not need to create and maintain their own.

# Mock Up #
  Based on the research, I came up with a mock up of a data repository system that lets data requestors discover, request and download data and the data owners to upload, approve and track data usage. Below is the flow of the system.
  <div><img class="shadow" src="/img/works_vault/vault_mockupflow.png"></div>

# Vault Design System #
I developed the design system for Vault so that the UI components can look consistent across the screen.
<div><img class="shadow" src="/img/works_vault/vault_designsystem.png"></div>
