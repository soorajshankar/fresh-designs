(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(424),module.exports=__webpack_require__(425)},342:function(module,exports){},425:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(273);module._StorybookPreserveDecorators=!0,Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(612)],module)}.call(this,__webpack_require__(426)(module))},612:function(module,exports,__webpack_require__){var map={"./stories/0-Welcome.stories.js":613,"./stories/1-Button.stories.js":620,"./stories/2-Card.stories.js":633};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=612},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(274),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome};var ToStorybook=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};ToStorybook.displayName="ToStorybook",ToStorybook.story={name:"to Storybook"},ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.js"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.js"})},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Text",(function(){return Text})),__webpack_require__.d(__webpack_exports__,"Emoji",(function(){return Emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(114),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61);__webpack_exports__.default={title:"Button",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button};var Text=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")};Text.displayName="Text";var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"),Emoji=function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},_ref)};Emoji.displayName="Emoji",Text.__docgenInfo={description:"",methods:[],displayName:"Text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"Text",docgenInfo:Text.__docgenInfo,path:"src/stories/1-Button.stories.js"}),Emoji.__docgenInfo={description:"",methods:[],displayName:"Emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"Emoji",docgenInfo:Emoji.__docgenInfo,path:"src/stories/1-Button.stories.js"})},633:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"DifferentTheme",(function(){return DifferentTheme})),__webpack_require__.d(__webpack_exports__,"CustomWidth",(function(){return CustomWidth})),__webpack_require__.d(__webpack_exports__,"Custom",(function(){return Custom})),__webpack_require__.d(__webpack_exports__,"LeftButton",(function(){return LeftButton}));__webpack_require__(26);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),styled_base_browser_esm=(__webpack_require__(114),__webpack_require__(62));var defaultTheme={pHead:"#ffffff",pSubHead:"#ffffffaa",pBG:"#1b262c",pAccent:"#3282b8"},Card=function(_ref){var _ref$title=_ref.title,title=void 0===_ref$title?"":_ref$title,_ref$subtitle=_ref.subtitle,subtitle=void 0===_ref$subtitle?"":_ref$subtitle,_ref$content=_ref.content,content=void 0===_ref$content?"":_ref$content,width=_ref.width,_ref$theme=_ref.theme,theme=void 0===_ref$theme?defaultTheme:_ref$theme,_ref$buttonText=_ref.buttonText,buttonText=void 0===_ref$buttonText?"Submit":_ref$buttonText,_ref$buttonDisabled=_ref.buttonDisabled,buttonDisabled=void 0!==_ref$buttonDisabled&&_ref$buttonDisabled,_ref$buttonPosition=_ref.buttonPosition,buttonPosition=void 0===_ref$buttonPosition?"right":_ref$buttonPosition,_ref$onButtonClick=_ref.onButtonClick,onButtonClick=void 0===_ref$onButtonClick?function(){return console.debug("Please pass a valid onButtonClick property to <Card />")}:_ref$onButtonClick,Title=Object(styled_base_browser_esm.a)("h1",{target:"e1scnm1y0",label:"Title"})("color:",defaultTheme.pHead,";margin:1rem 0 0.4rem 0;"),SubTitle=Object(styled_base_browser_esm.a)("h3",{target:"e1scnm1y1",label:"SubTitle"})("color:",theme.pSubHead,";font-weight:100;margin:0 0 0 0.1rem;align-self:flex-start;"),Button=Object(styled_base_browser_esm.a)("button",{target:"e1scnm1y2",label:"Button"})("width:fit-content;padding:0.5rem;margin:0.5rem 0;color:",theme.pHead,";background-color:",theme.pAccent,";border:1em;cursor:pointer;border-radius:0.3rem;&:hover{background-color:",theme.pHead,";color:",theme.pAccent,";}"),CardDiv=Object(styled_base_browser_esm.a)("div",{target:"e1scnm1y3",label:"CardDiv"})("flex:1 1 160px;background-color:",theme.pBG,';padding:10px;margin:10px;border-radius:1rem;display:flex;flex-direction:column;font-family:"Roboto";color:',theme.pHead,";font-size:0.8em;font-weight:100;min-height:10em;min-width:10em;",width&&"width:".concat(width),";"),footerAlign="left"===buttonPosition?"flex-start":"flex-end",Footer=Object(styled_base_browser_esm.a)("div",{target:"e1scnm1y4",label:"Footer"})("align-self:",footerAlign,";"),Container=Object(styled_base_browser_esm.a)("div",{target:"e1scnm1y5",label:"Container"})({name:"1moos2z",styles:"flex-grow:1;padding-top:inherit;margin-top:inherit;"});return react_default.a.createElement(CardDiv,null,react_default.a.createElement(Title,null,title),react_default.a.createElement(SubTitle,null,subtitle),react_default.a.createElement(Container,null,content),react_default.a.createElement(Footer,null,react_default.a.createElement(Button,{size:"small",onClick:onButtonClick,disabled:buttonDisabled},buttonText)))};Card.displayName="Card",Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{title:{defaultValue:{value:'""',computed:!1},required:!1},subtitle:{defaultValue:{value:'""',computed:!1},required:!1},content:{defaultValue:{value:'""',computed:!1},required:!1},theme:{defaultValue:{value:'{\n  pHead: "#ffffff",\n  pSubHead: "#ffffffaa",\n  pBG: "#1b262c",\n  pAccent: "#3282b8"\n}',computed:!1},required:!1},buttonText:{defaultValue:{value:'"Submit"',computed:!1},required:!1},buttonDisabled:{defaultValue:{value:"false",computed:!1},required:!1},buttonPosition:{defaultValue:{value:'"right"',computed:!1},required:!1},onButtonClick:{defaultValue:{value:'() =>\nconsole.debug("Please pass a valid onButtonClick property to <Card />")',computed:!1},required:!1}}};var components_Card=Card;function _extends(){return(_extends=Object.assign||function(target){for(var source,i=1;i<arguments.length;i++)for(var key in source=arguments[i])Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key]);return target}).apply(this,arguments)}"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card/index.js"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"src/components/Card/index.js"});__webpack_exports__.default={title:"Card",component:components_Card};var _2_Card_stories_ref=react_default.a.createElement(components_Card,{title:"Fresh Designs",subtitle:"a simple card component"}),Default=function(){return _2_Card_stories_ref};Default.displayName="Default";var _2_Card_stories_theme={pHead:"#ffffff",pSubHead:"#ffffffaa",pBG:"#230444",pAccent:"#90303d"},DifferentTheme=function(){return react_default.a.createElement(components_Card,_extends({title:"Different Theme",subtitle:"subtitle",content:"Your content here"},{theme:_2_Card_stories_theme}))};DifferentTheme.displayName="DifferentTheme";var _ref2=react_default.a.createElement(components_Card,{title:"Custom Width",subtitle:"width='max-content'",content:"Your content here Your content here Your content here Your content here Your content here ",width:"max-content"}),CustomWidth=function(){return _ref2};CustomWidth.displayName="CustomWidth";var _ref3=react_default.a.createElement(components_Card,{title:"Custom Width",subtitle:"width='max-content'",content:"Your content here Your content here Your content here Your content here Your content here ",width:"max-content"}),Custom=function(){return _ref3};Custom.displayName="Custom";var _ref4=react_default.a.createElement(components_Card,{title:"Custom Width",subtitle:"width='max-content'",content:"Your content here Your content here Your content here Your content here Your content here ",buttonPosition:"left"}),LeftButton=function(){return _ref4};LeftButton.displayName="LeftButton",Default.__docgenInfo={description:"",methods:[],displayName:"Default"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Card.stories.js"]={name:"Default",docgenInfo:Default.__docgenInfo,path:"src/stories/2-Card.stories.js"}),DifferentTheme.__docgenInfo={description:"",methods:[],displayName:"DifferentTheme"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Card.stories.js"]={name:"DifferentTheme",docgenInfo:DifferentTheme.__docgenInfo,path:"src/stories/2-Card.stories.js"}),CustomWidth.__docgenInfo={description:"",methods:[],displayName:"CustomWidth"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Card.stories.js"]={name:"CustomWidth",docgenInfo:CustomWidth.__docgenInfo,path:"src/stories/2-Card.stories.js"}),Custom.__docgenInfo={description:"",methods:[],displayName:"Custom"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Card.stories.js"]={name:"Custom",docgenInfo:Custom.__docgenInfo,path:"src/stories/2-Card.stories.js"}),LeftButton.__docgenInfo={description:"",methods:[],displayName:"LeftButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Card.stories.js"]={name:"LeftButton",docgenInfo:LeftButton.__docgenInfo,path:"src/stories/2-Card.stories.js"})}},[[277,1,2]]]);
//# sourceMappingURL=main.ad417d0b86b12f41217d.bundle.js.map