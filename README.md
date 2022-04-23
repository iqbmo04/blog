[![Open in Remote - Containers](https://img.shields.io/static/v1?label=Remote%20-%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/mechdeveloper/blog)

If you already have VS Code and Docker installed, you can click the badge above or [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/mechdeveloper/blog) to get started. Clicking these links will cause VS Code to automatically install the Remote - Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.

# Blog Website

## 🚀 Quick start, run locally
1.  **Cone repo and install npm packages**

    ```shell
    git clone https://github.com/mechdeveloper/blog.git
    cd blog
    npm install
    ```

    > Note: This project uses VSCode devcontainer, It is recommended to clone this repo on WSL and Reopen the project folder in a Dev Container (Remote-Containers: Open Folder in Container...). For more details checkout [Developing inside a Container](https://code.visualstudio.com/docs/remote/containers)

2.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    npm run develop
    ```

3.  **Open the code and start customizing!**

    - Your site is now running at http://localhost:8000!
    - View GraphiQL, an in-browser IDE, to explore your site's data and
schema at http://localhost:8000/___graphql

---
<details>
  <summary align="left" style="color:yellow;"> 
    <font size="+1">
      Learn Fundamentals ...
    </font> 
  </summary>
  
## 👨‍💻 Learn some fundamentals for web development

Fundamentals
- **HTML** 
  - [Basic HTML and HTML5 course on freeCodeCamp][htmlcourse]
- **CSS**
  - [Basic CSS course on freeCodeCamp][csscourse]
- **JavaScript**
  - [Basic JavaScript course on freeCodeCamp][javascriptcourse]

Gatsby uses following technologies under the hood
- **React** 
  - [React course on freeCodeCamp][reactcourse]
- **GraphQL**
  - [How to GraphQL tutorial][graphqltutorial]

[htmlcourse]:       https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5
[csscourse]:        https://www.freecodecamp.org/learn/responsive-web-design/#basic-css
[javascriptcourse]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
[reactcourse]:      https://www.freecodecamp.org/learn/front-end-development-libraries/#react
[graphqltutorial]:  https://www.howtographql.com/

## 💡 Key Gatsby Concepts

### There are two main types of React components in a Gatsby site.

1. __page components__
    
    __Key React Concept: Writing a React component__

    `my-component.js`
    ```js
    // Step 1: Import React. This lets you use JSX inside your .js file.
    import * as React from 'react'
    
    /* Step 2: Define your component. Note that your
    component name should start with a capital letter. */
    const MyComponent = () => {
    return (
        <h1>Hi, welcome to my site!</h1>
    )
    }
    
    /* Step 3: Export your component so it
    can be used by other parts of your app. */
    export default MyComponent
    ```

    - Gatsby automatically creates pages for React components that are the default export of files in the `src/pages` directory.
    
    - If a user tries to visit the URL for a page that doesn’t actually exist, Gatsby will use the `src/pages/404.js` page component to display an error instead. 
    
    - Pages created in the `src/pages` directory use the name of the file as the route for the page.
    
    - For example, if you had a file called `src/pages/about.js`, you could access that page at `localhost:8000/about`.

2. __“building-block” components__
    
    __Key React Concept: Components with props__

    `src/components/greeting.js`
    ```js
    // Defining the <Greeting> component
    /* Use 
      <div>
        <Greeting name="Octocat">
        <Greeting name="Moby Dock">
        <Greeting name="Larry">
        <Greeting name="Bugdroid">
      </div>
    */
    const Greeting = (props) => {
      return (
        <p>Hi {props.name}!</p>
      )
    }
    ```

    - The `Link` component is an example of a __pre-built__ component that you can use in your site.
    
    - The Gatsby `Link` component provides a performance feature called __preloading__. This means that the resources for the linked page are requested when the link scrolls into view or when the mouse hovers on it. That way, when the user actually clicks on the link, the new page can load super quickly.
    
    - Use the `Link` component for linking between pages within your site. For external links to pages not created by your Gatsby site, use the regular HTML `<a>` tag.

### Create resuable components

__Key React Concept: Components with children__
  - In addition to the props that you can add to your components, React also creates certain props for your components automatically.
  
    One such prop is called `children`. When you render a component, the `children` prop will automatically be passed whatever content comes between the opening and closing tags for that component. This is helpful when you want to create a component that wraps some generic content.

    `src/pages/gallery.js`

    ```js
    import React from 'react'
    import Frame from '../components/frame'

    const GalleryPage = () => {
    return (
        <Frame>
        <p>This will be passed in as children</p>
        </Frame>
    )
    }

    export default GalleryPage
    ```

    `src/components/frame.js`

    ```js
    import React from 'react'

    const Frame = ({ children }) => {
    return (
        <div>
        <h1>This is the page title</h1>
        { children }
        </div>
    )
    }

    export default Frame
    ```

    Actual DOM elements will look something like this
    ```HTML
    <div>
        <h1>This is the page title</h1>
        <p>This will be passed in as children</p>
    </div>
    ```

### Style components with **CSS Modules**

With **CSS Modules** to style components the styles are scoped to components, which helps avoid class naming collisions between components. Gatsby is automatically configured to handle CSS Modules - no extra setup necessary!

__Key Styling Concept: CSS Modules__

- To define styles using CSS Modules, put your CSS in a file that ends with the file extension `.module.css`. This tells Gatsby that this CSS file should be processed as a CSS Module rather than plain CSS.

  Within your CSS file, create separate CSS classes for each element you want to style. For example:

  `src/components/my-component.module.css`

  ```css
  .title {
    color: blue;
    font-size: 3rem;
  }
  ```

  Then, in your component `.js` file, import each class separately and apply it to the corresponding React element:

  `src/components/my-component.js`

  ```js
  import * as React from 'react'
  import { title } from './my-component.module.css'

  const MyComponent = () => {
    return (
      <h1 className={title}>
        Super Sweet Title Page
      </h1>
    )
  }

  export default MyComponent
  ```

- If you open the developer console in your web browser and inspect the `<h1>` element, you’ll see that it has a long classname like `my-component-module---title---2lRF7`. That’s the class name generated by CSS Modules. It’s guaranteed to be unique across your site, even if you have another component that also has a `.title` class in its `.module.css` file. That’s one of the reasons CSS Modules are a popular styling approach: they let you write CSS that’s scoped to your components, so you don’t have to worry about selector name collisions between components.

## Add Features with Gatsby plugins

- Quickly add new functionality to your site without needing to build it from scratch yourself
- Use [Gatsby Plugin Library](https://www.gatsbyjs.com/plugins) to browse all available plugins.
- A __plugin__ is a separate npm package that you install to add extra features to your site.

__Key Gatsby Concept: Adding a plugin to your site__

1. __Install__ the plugin using npm.

    This will add the pluginas a dependency in your `package.json` and `package.lock.json` files.

    Depending on what plugin you’re using, there might be more dependencies that you also need to install. Check the specific plugin’s README in the plugin library for more details.

    ```bash
    npm install plugin-name
    ```
2. __Configure__ the plugin in your site’s `gatsby-config.js` file.
   
    ```js
    module.exports = {
      siteMetadata: {
        title: "My First Gatsby Site",
      },
      plugins: ["plugin-name"],
    };
    ```

    Some plugins require extra configuration options. In that case, you’ll add an object to the plugins array (instead of a string)

    ```js
    module.exports = {
      siteMetadata: {
        title: "My First Gatsby Site",
      },
      plugins: [
        {
          resolve: "plugin-name",
          options: {
            // Check the plugin README for what options go in here
          }
        },
      ]
    }
    ```

    >Note: After you make updates to your gatsby-config.js file, you’ll need to restart your gatsby develop process for your changes to be picked up.

3. __Use__ the plugin features in your site, as needed.

    - Now that you’ve set up the plugin, you can use it in your Gatsby site as needed. 
    
      The specifics of this step will be different based on what the plugin does. Sometimes, the plugin might have a component or function that you can import and use in your site. Other times, you might not need to do anything extra at all. Check the plugin’s README for more details.
    
    - import components * When needed, depending on plugin; check the README.
    
      ```js
      import React from "react"
      import * from "gatsby-plugin-name"
      ...
      ```

__Key Gatsby Concept 💡__

The `gatsby-config.js` file is a special file that Gatsby recognizes automatically. It’s where you add plugins and other site configuration.

After you update your `gatsby-config.js` file, your local development server has to restart in order to pick up the new changes. Sometimes it will restart itself automatically, but if you’re seeing unexpected behavior, try stopping and restarting it yourself.

## Query for Data with GraphQL

[How To GraphQL][graphqltutorial] is a free tutorial that teaches you the fundamentals.

</details>