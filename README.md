# Web 寵物生態係

- 提升流浪動物領養率減少棄養
- 專案未來會持續面向社群及開源的道路發展
- 歡迎大家提出想法幫助我們實現更完善的寵物系統

[點擊我👈 歡迎加入我們社群討論逐步完善這個生態](https://discord.gg/qbRNJWzg)

## 目標發展

- [ ] 社群溝通平台.
- [ ] 會員管理系統.
- [ ] 寵物基本資料系統.
- [ ] 看診紀錄系統.
- [ ] 疫苗接種紀錄系統.
- [ ] 診所預約系統.
- [ ] 全系統訊息通知系統.

## tailwindcss
使用tailwindcss語法快速建構layout及樣式
Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

使用此指令產出CSS 加上--watch觀測產出完成時間
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch

## firebase hosting
修正重整後找不到路徑問題
fix reload
firebase.json 中 hosting 內添加

```
"rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ]
```
參考來源
https://stackoverflow.com/questions/51231060/firebase-hosting-page-not-found-error-on-empty-cache-and-hard-reload

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
