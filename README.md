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

    ```
    gatsby develop
    ```

    If you donot have installed gatsby cli globally, use following command to start development server
    
    ```shell
    npm run develop
    ```

3.  **Open the code and start customizing!**

    - Your site is now running at http://localhost:8000 
    - View GraphiQL, an in-browser IDE, to explore your site's data and
schema at http://localhost:8000/___graphql

>Tip: If you’re seeing unexpected behavior (like maybe your local development server isn’t picking up your new changes), you can run `gatsby clean` from the command line to delete the cache and start fresh on your next build. <br> <br>Don’t have the Gatsby CLI globally installed? Try running `npx gatsby clean` instead.

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

Learn Gatsby
- **Gatsby Tutorial**
  -  [Tutorial: Learn how Gatsby works][gatsbytutorial]

[htmlcourse]:       https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5
[csscourse]:        https://www.freecodecamp.org/learn/responsive-web-design/#basic-css
[javascriptcourse]: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript
[reactcourse]:      https://www.freecodecamp.org/learn/front-end-development-libraries/#react
[graphqltutorial]:  https://www.howtographql.com/
[gatsbytutorial]:   https://www.gatsbyjs.com/docs/tutorial/
</details>