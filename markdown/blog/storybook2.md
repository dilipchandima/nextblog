---
title: Manual Configuration Storybook with React
author: Dileepa Chandima
date: 12/01/2023
category: TECH
tags: react, react-native, storybook, components
slug: manual-configuration-storybook-with-react
---

Hey guys, I’m going to discuss with you how to configure Storybook manually on your React component project. As we discussed the automatic configuration of the Storybook generates a set of boilerplate files on your component project You can do manual configuration for React.

I assumed that you already have a React project for your customized components and here we are going to add Storybook and create components independently to your main project So Let’s start the journey :)

Let’s add all the basic dependency to the project for setup Storybook. For that run the following command from your project folder to add the Storybook module.

npm i --save-dev @storybook/react

Now you have Storybook module in your project and Lets add other dependencies, Run following command on you terminal those will add `react-dom` as main dependency and `bable-core` , `bable-loader` as development dependancies.

npm i --save react react-dom  
npm i --save-dev babel-core  
npm i --save-dev babel-loader

Now you are ready code for you component Storybook Let’s begin with the configuration file. First Create a folder in your project root named `storyconfig` and add a new file `config.js` then you project structure is like following image.

![img1](https://miro.medium.com/max/1496/1*uMin-Z086d0WZ--uy6etHA.png)

folder structure

Now you have to add the configuration to `config.js` file. You have add the storybook stories file location to the configuration.

Now you have to add the run script to the `package.json` file for run the Storybook server. Add the following script to your file.

{  
 "scripts":  
 {  
 "storybook": "start-storybook -p 9001 -c .storybook"  
 }  
}

Congratulations, Now you finish all the configurations. Let’s Start the coding for your components :) for that create a folder in `src` called `storybook` and create `index.js` file for your stories. Then you folder structure looks like this,

![img2](https://miro.medium.com/max/1500/1*ZX6G1yBg7EX4C9Qw5QUlfw.png)

Let’s add some sample stories to your project. Add the following code to your `index.js` file in the `storybook` folder.

After adding some stories you can run the Storybook by following command, and you will see the Storybook on your browser. Now you can change components and write stories whenever you need to. You’ll see the changes in Storybook immediately since it uses Webpack’s hot module reloading.

npm run storybook

![img3](https://miro.medium.com/max/1380/1*kNGmQ5mppNg-9aI7rb60XQ.png)

Now you can enjoy **Storybook** from developing your customized web application components.
