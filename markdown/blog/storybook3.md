---
title: Add Addons to React Storybook
author: Dileepa Chandima
date: 12/01/2023
category: TECH
tags: react, react-native, storybook, components
slug: add-addons-to-react-storybook
---

![img1](https://miro.medium.com/max/3836/1*icPmCZnonLfh6DupELut8A.png)

This is final story on developing Storybook component library for React project and here we are going to discuss about How to add addons to your project, Addons implement extra features for Storybooks to make your stories more useful.

If you are not having Storybook configured project please follow the articles before read this then you will have good knowledge on Storybook. It will be easy to understand Addons.

1.  [Getting started with Storybook](https://medium.com/@dilipchandima/getting-started-with-storybook-9d786526eb35)
2.  [Manual Configuration Storybook with React](https://medium.com/@dilipchandima/manual-configuration-storybook-with-react-c75d37a46a4a)

Basically, there are two types of addons, those are Decorators and Native Addons.

## Decorator Addons

Decorators are wrapper components or Storybook decorators that wrap a story. For example, let’s say we want to center a story rendered on the screen. For that, we can use a Decorator Addon. Please refere the [documentation](https://storybook.js.org/addons/introduction/#1-decorators) for more details and sample.

## Native Addons

Native addons use Storybook as a platform and interact with it. Native addons can add extra features beyond wrapping stories.For example, `storybook-actions`is such an addon. Please refere the [documentation](https://storybook.js.org/addons/introduction/#2-native-addons) for more details and sample.

Let’s start to add some basic addons to your existing storybook project. First we are going to add npm modules for `actions` ,`notes` ,`knobs` addons for that run the following command from your root project folder.

npm i --save-dev @storybook/addon-actions @storybook/addon-notes @storybook/addon-knobs

lets add `addons.js` file under your `storyconfig` folder and add the following code for import the register of each addon.

Now you have to add addons to your stories for that first import addons to your `index.js` file in `storybook` folder.

Now import addons successfully and we are going to use the addons in the existing stories. Then add the decorators to all stories in your project.

Finally Our `stories/index.js` file looks like this,

![img2](https://miro.medium.com/max/3836/1*icPmCZnonLfh6DupELut8A.png)

Final Storybook application

Now you can enjoy **Storybook** from developing your customized web application components.
