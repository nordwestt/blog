---
layout: post
title:  "Open Day Badge"
author: thomas
categories: [ MachineLearning ]
tags: [ NeuralNetwork ]
image: assets/images/posts/open-day-badge/prototype-measurements.jpg
latitude: 44.198950
longitude: 12.395360
date: 2022-05-16
toc: true
---

# Smart Badge for University Open Day

Young people usually visit universities to find scout the places and see what their potential future university life might look like. 
For this reason, presenting them with work actually produced as a result of the degree could serve as a really helpful display of what they can expect to work with and produce.

## The Vision 🌟

Our team prototyped an open day badge for prospective students. The badge aims to be engaging and useful, whilst demonstrating the skills acquired throughout our degree. 
Equipped with an e-ink screen, microcontroller and batteries, this wearable badge connects with a custom-designed app to allow users to draw, write and upload pictures to it to show off.

## How Does It Work? 🤔

The mobile app converts the user's creation (text, drawing or picture) into a bitmap, which is transmitted to the badge over bluetooth. 
The badge then communicates with the e-ink display to make the creation appear on it. 

## Why This Solution? 🚀



Through iterative development, we team arrived at a functional prototype which met the minimum specifications laid out in the first semester. Lastly, extra functionality was added, to improve the appeal of the product.


The description given was purposefully open to interpretation, allowing freedom of choice
and the team’s creative input, with the primary project requirement that an open day
badge be produced by the end of the project. The driving project requirements can be
summarised here:
- Manufacturing cost of <£10 per unit.
- Must be useful, reusable and engaging.
- Must be a wearable badge.
- Should preferably have a social aspect to it.
- Should showcase engineering ingenuity and attract prospective engineering candi-
dates.


## Design and planning

### Brainstorming

Through discussion, the team agreed to proceed with the idea of a battery-powered display; to which, users could print their name (or other details such as email, role, title etc) and project their own drawings. The customisability of the device fulfills the project requirements of being entertaining, fun and useful, as the user can continue to operate the device in the future, or adapt the hardware for personal projects.
Multiple open day visitors can wear the badges and customise the displays to showcase
interesting drawings, fun quotes about themselves, jokes or any other text that can enhance the open day visit and act as an ’ice-breaker’. This aspect of the device fulfills the social feature of the project.

### Device Functionality and Research

To fulfill the functional requirements of a badge that can showcase text and drawings implies the requirement that the device includes a display that is user programmable or responsive to user inputs.
As the device shall be in a badge form-factor, the inclusion of wires during use would greatly impede usability. Therefore, means to facilitate user input are also required to interface with the badge (e.g. buttons with menu interface).

To enhance user experience, it was determined that it is preferable for the user to operate the
device wirelessly and update the display in real-time. Doing so allows the user to wear the
badge on their shirt while operating it, which eliminates the need for the badge to be hand-
held and controlled via physical buttons before being worn again. The inclusion of buttons
would potentially impede the operational workflow of the device, as it is important for the
user to be welcomed by a seam-less and straightforward user experience, with a simplistic
set of commands and features. Updating the display on-command allows for greater creative
control and further potential applications for the badge, which would be otherwise restricted
if the badge was operated purely on-board with buttons and (for example) pre-stored images
and text or an on-board, button-controlled user interface.
To complete the communication link between the badge and the user, the controlling node
was decided to be the user’s smartphone. Considering that the vast majority of likely users
will be teenage students or older, it is safe to assume that every potential user will own a
smartphone capable of connecting wirelessly to the badge. As smartphones pack processing
power capable of much more demanding tasks, all tasks related to connection and control
of the badge, as well as providing the user interface for text input and drawing, would be
offloaded to the smartphone device.
Therefore, the badge core functionality is limited to establishing a connection with the
smartphone, receiving data wirelessly and displaying the incoming image (which may show-
case text, drawings or other) to a display.
Other functional requirements of the badge include an onboard battery to allow the product
to operate as a standalone unit. A micro-controller is also included, in order to act as the
receiving node of the wireless connection and as an operator of the on-board display.