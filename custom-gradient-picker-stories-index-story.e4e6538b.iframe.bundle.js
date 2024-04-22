(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[5175],{"./node_modules/gradient-parser/build/node.js":(__unused_webpack_module,exports)=>{var GradientParser={};GradientParser.parse=function(){var tokens={linearGradient:/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,repeatingLinearGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,radialGradient:/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,repeatingRadialGradient:/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,sideOrCorner:/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,extentKeywords:/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,positionKeywords:/^(left|center|right|top|bottom)/i,pixelValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,percentageValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,emValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,angleValue:/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,startCall:/^\(/,endCall:/^\)/,comma:/^,/,hexColor:/^\#([0-9a-fA-F]+)/,literalColor:/^([a-zA-Z]+)/,rgbColor:/^rgb/i,rgbaColor:/^rgba/i,number:/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/},input="";function error(msg){var err=new Error(input+": "+msg);throw err.source=input,err}function getAST(){var ast=function matchListDefinitions(){return matchListing(matchDefinition)}();return input.length>0&&error("Invalid input not EOF"),ast}function matchDefinition(){return matchGradient("linear-gradient",tokens.linearGradient,matchLinearOrientation)||matchGradient("repeating-linear-gradient",tokens.repeatingLinearGradient,matchLinearOrientation)||matchGradient("radial-gradient",tokens.radialGradient,matchListRadialOrientations)||matchGradient("repeating-radial-gradient",tokens.repeatingRadialGradient,matchListRadialOrientations)}function matchGradient(gradientType,pattern,orientationMatcher){return matchCall(pattern,(function(captures){var orientation=orientationMatcher();return orientation&&(scan(tokens.comma)||error("Missing comma before color stops")),{type:gradientType,orientation,colorStops:matchListing(matchColorStop)}}))}function matchCall(pattern,callback){var captures=scan(pattern);if(captures)return scan(tokens.startCall)||error("Missing ("),result=callback(captures),scan(tokens.endCall)||error("Missing )"),result}function matchLinearOrientation(){return function matchSideOrCorner(){return match("directional",tokens.sideOrCorner,1)}()||function matchAngle(){return match("angular",tokens.angleValue,1)}()}function matchListRadialOrientations(){var radialOrientations,lookaheadCache,radialOrientation=matchRadialOrientation();return radialOrientation&&((radialOrientations=[]).push(radialOrientation),lookaheadCache=input,scan(tokens.comma)&&((radialOrientation=matchRadialOrientation())?radialOrientations.push(radialOrientation):input=lookaheadCache)),radialOrientations}function matchRadialOrientation(){var radialType=function matchCircle(){var circle=match("shape",/^(circle)/i,0);circle&&(circle.style=matchLength()||matchExtentKeyword());return circle}()||function matchEllipse(){var ellipse=match("shape",/^(ellipse)/i,0);ellipse&&(ellipse.style=matchDistance()||matchExtentKeyword());return ellipse}();if(radialType)radialType.at=function matchAtPosition(){if(match("position",/^at/,0)){var positioning=matchPositioning();return positioning||error("Missing positioning value"),positioning}}();else{var defaultPosition=matchPositioning();defaultPosition&&(radialType={type:"default-radial",at:defaultPosition})}return radialType}function matchExtentKeyword(){return match("extent-keyword",tokens.extentKeywords,1)}function matchPositioning(){var location=function matchCoordinates(){return{x:matchDistance(),y:matchDistance()}}();if(location.x||location.y)return{type:"position",value:location}}function matchListing(matcher){var captures=matcher(),result=[];if(captures)for(result.push(captures);scan(tokens.comma);)(captures=matcher())?result.push(captures):error("One extra comma");return result}function matchColorStop(){var color=function matchColor(){return function matchHexColor(){return match("hex",tokens.hexColor,1)}()||function matchRGBAColor(){return matchCall(tokens.rgbaColor,(function(){return{type:"rgba",value:matchListing(matchNumber)}}))}()||function matchRGBColor(){return matchCall(tokens.rgbColor,(function(){return{type:"rgb",value:matchListing(matchNumber)}}))}()||function matchLiteralColor(){return match("literal",tokens.literalColor,0)}()}();return color||error("Expected color definition"),color.length=matchDistance(),color}function matchNumber(){return scan(tokens.number)[1]}function matchDistance(){return match("%",tokens.percentageValue,1)||function matchPositionKeyword(){return match("position-keyword",tokens.positionKeywords,1)}()||matchLength()}function matchLength(){return match("px",tokens.pixelValue,1)||match("em",tokens.emValue,1)}function match(type,pattern,captureIndex){var captures=scan(pattern);if(captures)return{type,value:captures[captureIndex]}}function scan(regexp){var captures,blankCaptures;return(blankCaptures=/^[\n\r\t\s]+/.exec(input))&&consume(blankCaptures[0].length),(captures=regexp.exec(input))&&consume(captures[0].length),captures}function consume(size){input=input.substr(size)}return function(code){return input=code.toString(),getAST()}}(),exports.parse=(GradientParser||{}).parse},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var getRandomValues;__webpack_require__.d(__webpack_exports__,{Z:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/components/src/custom-gradient-picker/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/custom-gradient-picker/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/CustomGradientPicker",component:___WEBPACK_IMPORTED_MODULE_1__.Z,parameters:{sourceLink:"packages/components/src/custom-gradient-picker",actions:{argTypesRegex:"^on.*"},controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},CustomGradientPickerWithState=({onChange,...props})=>{const[gradient,setGradient]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{...props,value:gradient,onChange:newGradient=>{setGradient(newGradient),onChange(newGradient)}})};CustomGradientPickerWithState.displayName="CustomGradientPickerWithState";const Default=CustomGradientPickerWithState.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  onChange,\n  ...props\n}) => {\n  const [gradient, setGradient] = useState<string>();\n  return <CustomGradientPicker {...props} value={gradient} onChange={newGradient => {\n    setGradient(newGradient);\n    onChange(newGradient);\n  }} />;\n}",...Default.parameters?.docs?.source}}}}}]);