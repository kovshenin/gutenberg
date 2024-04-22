"use strict";(globalThis.webpackChunkgutenberg=globalThis.webpackChunkgutenberg||[]).push([[8896],{"./packages/block-editor/src/components/block-draggable/draggable-chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>BlockDraggableChip});__webpack_require__("./node_modules/react/index.js");var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/i18n/build-module/index.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/build-module/flex/flex/component.js"),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/flex/flex-item/component.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/icons/build-module/library/drag-handle.js"),_block_icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/block-editor/src/components/block-icon/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockDraggableChip({count,icon,isPattern,fadeWhenDisabled}){const patternLabel=isPattern&&(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Pattern");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"block-editor-block-draggable-chip-wrapper",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"block-editor-block-draggable-chip","data-testid":"block-draggable-chip",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Z,{justify:"center",className:"block-editor-block-draggable-chip__content",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{children:icon?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{icon}):patternLabel||(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.gB)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__._n)("%d block","%d blocks",count),count)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_block_icon__WEBPACK_IMPORTED_MODULE_5__.Z,{icon:_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__.Z})}),fadeWhenDisabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{className:"block-editor-block-draggable-chip__disabled",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"block-editor-block-draggable-chip__disabled-icon"})})]})})})}BlockDraggableChip.displayName="BlockDraggableChip",BlockDraggableChip.__docgenInfo={description:"",methods:[],displayName:"BlockDraggableChip"}},"./packages/block-editor/src/components/block-icon/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_wordpress_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/build-module/icon/index.js"),_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/icons/build-module/library/block-default.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function BlockIcon({icon,showColors=!1,className,context}){"block-default"===icon?.src&&(icon={src:_wordpress_icons__WEBPACK_IMPORTED_MODULE_3__.Z});const renderedIcon=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Z,{icon:icon&&icon.src?icon.src:icon,context}),style=showColors?{backgroundColor:icon&&icon.background,color:icon&&icon.foreground}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{style,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("block-editor-block-icon",className,{"has-colors":showColors}),children:renderedIcon})}BlockIcon.displayName="BlockIcon";const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(BlockIcon);BlockIcon.__docgenInfo={description:"",methods:[],displayName:"BlockIcon",props:{showColors:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/block-editor/src/components/block-list/use-block-props/use-block-refs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LT:()=>useBlockRefProvider,qT:()=>useBlockElement,tI:()=>useBlockRef});var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/compose/build-module/hooks/use-ref-effect/index.js"),_provider_block_refs_provider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/components/provider/block-refs-provider.js");function useBlockRefProvider(clientId){const{refs,callbacks}=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider_block_refs_provider__WEBPACK_IMPORTED_MODULE_1__.N),ref=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>(refs.set(ref,clientId),()=>{refs.delete(ref)})),[clientId]),(0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.Z)((element=>{ref.current=element,callbacks.forEach(((id,setElement)=>{clientId===id&&setElement(element)}))}),[clientId])}function useBlockRef(clientId){const{refs}=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider_block_refs_provider__WEBPACK_IMPORTED_MODULE_1__.N),freshClientId=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();return freshClientId.current=clientId,(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({get current(){let element=null;for(const[ref,id]of refs.entries())id===freshClientId.current&&ref.current&&(element=ref.current);return element}})),[])}function useBlockElement(clientId){const{callbacks}=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider_block_refs_provider__WEBPACK_IMPORTED_MODULE_1__.N),ref=useBlockRef(clientId),[element,setElement]=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);return(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)((()=>{if(clientId)return callbacks.set(setElement,clientId),()=>{callbacks.delete(setElement)}}),[clientId]),ref.current||element}},"./packages/block-editor/src/components/provider/block-refs-provider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>BlockRefs,m:()=>BlockRefsProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BlockRefs=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({refs:new Map,callbacks:new Map});function BlockRefsProvider({children}){const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({refs:new Map,callbacks:new Map})),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BlockRefs.Provider,{value,children})}BlockRefsProvider.displayName="BlockRefsProvider",BlockRefsProvider.__docgenInfo={description:"",methods:[],displayName:"BlockRefsProvider"}},"./packages/block-editor/src/components/provider/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{jC:()=>ExperimentalBlockEditorProvider});var react=__webpack_require__("./node_modules/react/index.js"),use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),slot_fill=__webpack_require__("./packages/components/build-module/slot-fill/index.js"),with_registry=__webpack_require__("./packages/data/build-module/components/with-registry/index.js"),build_module_registry=__webpack_require__("./packages/data/build-module/registry.js"),context=__webpack_require__("./packages/data/build-module/components/registry-provider/context.js"),create_higher_order_component=__webpack_require__("./packages/compose/build-module/utils/create-higher-order-component/index.js"),store=__webpack_require__("./packages/block-editor/src/store/index.js"),constants=__webpack_require__("./packages/block-editor/src/store/constants.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const with_registry_provider=(0,create_higher_order_component.o)((WrappedComponent=>(0,with_registry.Z)((({useSubRegistry=!0,registry,...props})=>{if(!useSubRegistry)return(0,jsx_runtime.jsx)(WrappedComponent,{registry,...props});const[subRegistry,setSubRegistry]=(0,react.useState)(null);return(0,react.useEffect)((()=>{const newRegistry=(0,build_module_registry.p)({},registry);newRegistry.registerStore(constants.G,store.i),setSubRegistry(newRegistry)}),[registry]),subRegistry?(0,jsx_runtime.jsx)(context.ZP,{value:subRegistry,children:(0,jsx_runtime.jsx)(WrappedComponent,{registry:subRegistry,...props})}):null}))),"withRegistryProvider");var use_block_sync=__webpack_require__("./packages/block-editor/src/components/provider/use-block-sync.js"),block_refs_provider=__webpack_require__("./packages/block-editor/src/components/provider/block-refs-provider.js"),lock_unlock=__webpack_require__("./packages/block-editor/src/lock-unlock.js"),build_module=__webpack_require__("./packages/keyboard-shortcuts/build-module/index.js"),i18n_build_module=__webpack_require__("./packages/i18n/build-module/index.js");function KeyboardShortcuts(){return null}KeyboardShortcuts.Register=function KeyboardShortcutsRegister(){const{registerShortcut}=(0,use_dispatch.Z)(build_module.h);return(0,react.useEffect)((()=>{registerShortcut({name:"core/block-editor/duplicate",category:"block",description:(0,i18n_build_module.__)("Duplicate the selected block(s)."),keyCombination:{modifier:"primaryShift",character:"d"}}),registerShortcut({name:"core/block-editor/remove",category:"block",description:(0,i18n_build_module.__)("Remove the selected block(s)."),keyCombination:{modifier:"access",character:"z"}}),registerShortcut({name:"core/block-editor/insert-before",category:"block",description:(0,i18n_build_module.__)("Insert a new block before the selected block(s)."),keyCombination:{modifier:"primaryAlt",character:"t"}}),registerShortcut({name:"core/block-editor/insert-after",category:"block",description:(0,i18n_build_module.__)("Insert a new block after the selected block(s)."),keyCombination:{modifier:"primaryAlt",character:"y"}}),registerShortcut({name:"core/block-editor/delete-multi-selection",category:"block",description:(0,i18n_build_module.__)("Delete selection."),keyCombination:{character:"del"},aliases:[{character:"backspace"}]}),registerShortcut({name:"core/block-editor/select-all",category:"selection",description:(0,i18n_build_module.__)("Select all text when typing. Press again to select all blocks."),keyCombination:{modifier:"primary",character:"a"}}),registerShortcut({name:"core/block-editor/unselect",category:"selection",description:(0,i18n_build_module.__)("Clear selection."),keyCombination:{character:"escape"}}),registerShortcut({name:"core/block-editor/multi-text-selection",category:"selection",description:(0,i18n_build_module.__)("Select text across multiple blocks."),keyCombination:{modifier:"shift",character:"arrow"}}),registerShortcut({name:"core/block-editor/focus-toolbar",category:"global",description:(0,i18n_build_module.__)("Navigate to the nearest toolbar."),keyCombination:{modifier:"alt",character:"F10"}}),registerShortcut({name:"core/block-editor/move-up",category:"block",description:(0,i18n_build_module.__)("Move the selected block(s) up."),keyCombination:{modifier:"secondary",character:"t"}}),registerShortcut({name:"core/block-editor/move-down",category:"block",description:(0,i18n_build_module.__)("Move the selected block(s) down."),keyCombination:{modifier:"secondary",character:"y"}}),registerShortcut({name:"core/block-editor/collapse-list-view",category:"list-view",description:(0,i18n_build_module.__)("Collapse all other items."),keyCombination:{modifier:"alt",character:"l"}})}),[registerShortcut]),null};const keyboard_shortcuts=KeyboardShortcuts,ExperimentalBlockEditorProvider=with_registry_provider((props=>{const{children,settings,stripExperimentalSettings=!1}=props,{__experimentalUpdateSettings}=(0,lock_unlock.U)((0,use_dispatch.Z)(store.h));return(0,react.useEffect)((()=>{__experimentalUpdateSettings({...settings,__internalIsInitialized:!0},{stripExperimentalSettings,reset:!0})}),[settings,stripExperimentalSettings,__experimentalUpdateSettings]),(0,use_block_sync.Z)(props),(0,jsx_runtime.jsxs)(slot_fill.zt,{passthrough:!0,children:[!settings?.__unstableIsPreviewMode&&(0,jsx_runtime.jsx)(keyboard_shortcuts.Register,{}),(0,jsx_runtime.jsx)(block_refs_provider.m,{children})]})})),BlockEditorProvider=props=>(0,jsx_runtime.jsx)(ExperimentalBlockEditorProvider,{...props,stripExperimentalSettings:!0,children:props.children});BlockEditorProvider.displayName="BlockEditorProvider";ExperimentalBlockEditorProvider.__docgenInfo={description:"@typedef {import('@wordpress/data').WPDataRegistry} WPDataRegistry",methods:[],displayName:"ExperimentalBlockEditorProvider"},BlockEditorProvider.__docgenInfo={description:"",methods:[],displayName:"BlockEditorProvider"}},"./packages/block-editor/src/components/provider/use-block-sync.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useBlockSync});var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/data/build-module/components/registry-provider/use-registry.js"),_wordpress_data__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/blocks/build-module/index.js"),_store__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/block-editor/src/store/index.js"),_store_undo_ignore__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/block-editor/src/store/undo-ignore.js");const noop=()=>{};function useBlockSync({clientId=null,value:controlledBlocks,selection:controlledSelection,onChange=noop,onInput=noop}){const registry=(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.Z)(),{resetBlocks,resetSelection,replaceInnerBlocks,setHasControlledInnerBlocks,__unstableMarkNextChangeAsNotPersistent}=registry.dispatch(_store__WEBPACK_IMPORTED_MODULE_1__.h),{getBlockName,getBlocks,getSelectionStart,getSelectionEnd}=registry.select(_store__WEBPACK_IMPORTED_MODULE_1__.h),isControlled=(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.Z)((select=>!clientId||select(_store__WEBPACK_IMPORTED_MODULE_1__.h).areInnerBlocksControlled(clientId)),[clientId]),pendingChanges=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)({incoming:null,outgoing:[]}),subscribed=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(!1),setControlledBlocks=()=>{controlledBlocks&&(__unstableMarkNextChangeAsNotPersistent(),clientId?registry.batch((()=>{setHasControlledInnerBlocks(clientId,!0);const storeBlocks=controlledBlocks.map((block=>(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.Wm)(block)));subscribed.current&&(pendingChanges.current.incoming=storeBlocks),__unstableMarkNextChangeAsNotPersistent(),replaceInnerBlocks(clientId,storeBlocks)})):(subscribed.current&&(pendingChanges.current.incoming=controlledBlocks),resetBlocks(controlledBlocks)))},onInputRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(onInput),onChangeRef=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useRef)(onChange);(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{onInputRef.current=onInput,onChangeRef.current=onChange}),[onInput,onChange]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{pendingChanges.current.outgoing.includes(controlledBlocks)?pendingChanges.current.outgoing[pendingChanges.current.outgoing.length-1]===controlledBlocks&&(pendingChanges.current.outgoing=[]):getBlocks(clientId)!==controlledBlocks&&(pendingChanges.current.outgoing=[],setControlledBlocks(),controlledSelection&&resetSelection(controlledSelection.selectionStart,controlledSelection.selectionEnd,controlledSelection.initialPosition))}),[controlledBlocks,clientId]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{isControlled||(pendingChanges.current.outgoing=[],setControlledBlocks())}),[isControlled]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>{const{getSelectedBlocksInitialCaretPosition,isLastBlockChangePersistent,__unstableIsLastBlockChangeIgnored,areInnerBlocksControlled}=registry.select(_store__WEBPACK_IMPORTED_MODULE_1__.h);let blocks=getBlocks(clientId),isPersistent=isLastBlockChangePersistent(),previousAreBlocksDifferent=!1;subscribed.current=!0;const unsubscribe=registry.subscribe((()=>{if(null!==clientId&&null===getBlockName(clientId))return;if(!(!clientId||areInnerBlocksControlled(clientId)))return;const newIsPersistent=isLastBlockChangePersistent(),newBlocks=getBlocks(clientId),areBlocksDifferent=newBlocks!==blocks;if(blocks=newBlocks,areBlocksDifferent&&(pendingChanges.current.incoming||__unstableIsLastBlockChangeIgnored()))return pendingChanges.current.incoming=null,void(isPersistent=newIsPersistent);if(areBlocksDifferent||previousAreBlocksDifferent&&!areBlocksDifferent&&newIsPersistent&&!isPersistent){isPersistent=newIsPersistent,pendingChanges.current.outgoing.push(blocks);const updateParent=isPersistent?onChangeRef.current:onInputRef.current,undoIgnore=_store_undo_ignore__WEBPACK_IMPORTED_MODULE_5__.t.has(blocks);undoIgnore&&_store_undo_ignore__WEBPACK_IMPORTED_MODULE_5__.t.delete(blocks),updateParent(blocks,{selection:{selectionStart:getSelectionStart(),selectionEnd:getSelectionEnd(),initialPosition:getSelectedBlocksInitialCaretPosition()},undoIgnore})}previousAreBlocksDifferent=areBlocksDifferent}),_store__WEBPACK_IMPORTED_MODULE_1__.h);return()=>{subscribed.current=!1,unsubscribe()}}),[registry,clientId]),(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)((()=>()=>{__unstableMarkNextChangeAsNotPersistent(),clientId?(setHasControlledInnerBlocks(clientId,!1),__unstableMarkNextChangeAsNotPersistent(),replaceInnerBlocks(clientId,[])):resetBlocks([])}),[])}},"./packages/block-editor/src/components/use-block-drop-zone/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZP:()=>useBlockDropZone,wv:()=>isDropTargetValid});var use_registry=__webpack_require__("./packages/data/build-module/components/registry-provider/use-registry.js"),use_select=__webpack_require__("./packages/data/build-module/components/use-select/index.js"),use_dispatch=__webpack_require__("./packages/data/build-module/components/use-dispatch/use-dispatch.js"),react=__webpack_require__("./node_modules/react/index.js"),use_throttle=__webpack_require__("./packages/compose/build-module/hooks/use-throttle/index.js"),use_drop_zone=__webpack_require__("./packages/compose/build-module/hooks/use-drop-zone/index.js"),build_module=__webpack_require__("./packages/i18n/build-module/index.js"),blocks_build_module=__webpack_require__("./packages/blocks/build-module/index.js"),data_transfer=__webpack_require__("./packages/dom/build-module/data-transfer.js"),store=__webpack_require__("./packages/block-editor/src/store/index.js");function onBlockDrop(targetRootClientId,targetBlockIndex,getBlockIndex,getClientIdsOfDescendants,moveBlocks,insertOrReplaceBlocks,clearSelectedBlock,operation,getBlock){return event=>{const{srcRootClientId:sourceRootClientId,srcClientIds:sourceClientIds,type:dropType,blocks}=function parseDropEvent(event){let result={srcRootClientId:null,srcClientIds:null,srcIndex:null,type:null,blocks:null};if(!event.dataTransfer)return result;try{result=Object.assign(result,JSON.parse(event.dataTransfer.getData("wp-blocks")))}catch(err){return result}return result}(event);if("inserter"===dropType){clearSelectedBlock();const blocksToInsert=blocks.map((block=>(0,blocks_build_module.Wm)(block)));insertOrReplaceBlocks(blocksToInsert,!0,null)}if("block"===dropType){const sourceBlockIndex=getBlockIndex(sourceClientIds[0]);if(sourceRootClientId===targetRootClientId&&sourceBlockIndex===targetBlockIndex)return;if(sourceClientIds.includes(targetRootClientId)||getClientIdsOfDescendants(sourceClientIds).some((id=>id===targetRootClientId)))return;if("group"===operation){const blocksToInsert=sourceClientIds.map((clientId=>getBlock(clientId)));return void insertOrReplaceBlocks(blocksToInsert,!0,null,sourceClientIds)}const isAtSameLevel=sourceRootClientId===targetRootClientId,draggedBlockCount=sourceClientIds.length;moveBlocks(sourceClientIds,sourceRootClientId,isAtSameLevel&&sourceBlockIndex<targetBlockIndex?targetBlockIndex-draggedBlockCount:targetBlockIndex)}}}function useOnBlockDrop(targetRootClientId,targetBlockIndex,options={}){const{operation="insert",nearestSide="right"}=options,{canInsertBlockType,getBlockIndex,getClientIdsOfDescendants,getBlockOrder,getBlocksByClientId,getSettings,getBlock,isGroupable}=(0,use_select.Z)(store.h),{getGroupingBlockName}=(0,use_select.Z)(blocks_build_module.h),{insertBlocks,moveBlocksToPosition,updateBlockAttributes,clearSelectedBlock,replaceBlocks,removeBlocks}=(0,use_dispatch.Z)(store.h),registry=(0,use_registry.Z)(),insertOrReplaceBlocks=(0,react.useCallback)(((blocks,updateSelection=!0,initialPosition=0,clientIdsToReplace=[])=>{Array.isArray(blocks)||(blocks=[blocks]);const clientId=getBlockOrder(targetRootClientId)[targetBlockIndex],blocksClientIds=blocks.map((block=>block.clientId)),areGroupableBlocks=isGroupable([...blocksClientIds,clientId]);if("replace"===operation)replaceBlocks(clientId,blocks,void 0,initialPosition);else if("group"===operation&&areGroupableBlocks){const targetBlock=getBlock(clientId);"left"===nearestSide?blocks.push(targetBlock):blocks.unshift(targetBlock);const groupInnerBlocks=blocks.map((block=>(0,blocks_build_module.j4)(block.name,block.attributes,block.innerBlocks))),areAllImages=blocks.every((block=>"core/image"===block.name)),galleryBlock=canInsertBlockType("core/gallery",targetRootClientId),wrappedBlocks=(0,blocks_build_module.j4)(areAllImages&&galleryBlock?"core/gallery":getGroupingBlockName(),{layout:{type:"flex",flexWrap:areAllImages&&galleryBlock?null:"nowrap"}},groupInnerBlocks);replaceBlocks([clientId,...clientIdsToReplace],wrappedBlocks,void 0,initialPosition)}else insertBlocks(blocks,targetBlockIndex,targetRootClientId,updateSelection,initialPosition)}),[getBlockOrder,targetRootClientId,targetBlockIndex,isGroupable,operation,replaceBlocks,getBlock,nearestSide,canInsertBlockType,getGroupingBlockName,insertBlocks]),moveBlocks=(0,react.useCallback)(((sourceClientIds,sourceRootClientId,insertIndex)=>{if("replace"===operation){const sourceBlocks=getBlocksByClientId(sourceClientIds),targetBlockClientId=getBlockOrder(targetRootClientId)[targetBlockIndex];registry.batch((()=>{removeBlocks(sourceClientIds,!1),replaceBlocks(targetBlockClientId,sourceBlocks,void 0,0)}))}else moveBlocksToPosition(sourceClientIds,sourceRootClientId,targetRootClientId,insertIndex)}),[operation,getBlockOrder,getBlocksByClientId,moveBlocksToPosition,registry,removeBlocks,replaceBlocks,targetBlockIndex,targetRootClientId]),_onDrop=onBlockDrop(targetRootClientId,targetBlockIndex,getBlockIndex,getClientIdsOfDescendants,moveBlocks,insertOrReplaceBlocks,clearSelectedBlock,operation,getBlock),_onFilesDrop=function onFilesDrop(targetRootClientId,getSettings,updateBlockAttributes,canInsertBlockType,insertOrReplaceBlocks){return files=>{if(!getSettings().mediaUpload)return;const transformation=(0,blocks_build_module.MC)((0,blocks_build_module.Xn)("from"),(transform=>"files"===transform.type&&canInsertBlockType(transform.blockName,targetRootClientId)&&transform.isMatch(files)));if(transformation){const blocks=transformation.transform(files,updateBlockAttributes);insertOrReplaceBlocks(blocks)}}}(targetRootClientId,getSettings,updateBlockAttributes,canInsertBlockType,insertOrReplaceBlocks),_onHTMLDrop=function onHTMLDrop(insertOrReplaceBlocks){return HTML=>{const blocks=(0,blocks_build_module.ag)({HTML,mode:"BLOCKS"});blocks.length&&insertOrReplaceBlocks(blocks)}}(insertOrReplaceBlocks);return event=>{const files=(0,data_transfer.f)(event.dataTransfer),html=event.dataTransfer.getData("text/html");html?_onHTMLDrop(html):files.length?_onFilesDrop(files):_onDrop(event)}}function getDistanceToNearestEdge(point,rect,allowedEdges=["top","bottom","left","right"]){let candidateDistance,candidateEdge;return allowedEdges.forEach((edge=>{const distance=function getDistanceFromPointToEdge(point,rect,edge){const isHorizontal="top"===edge||"bottom"===edge,{x,y}=point,pointLateralPosition=isHorizontal?x:y,pointForwardPosition=isHorizontal?y:x,edgeStart=isHorizontal?rect.left:rect.top,edgeEnd=isHorizontal?rect.right:rect.bottom,edgeForwardPosition=rect[edge];let edgeLateralPosition;return edgeLateralPosition=pointLateralPosition>=edgeStart&&pointLateralPosition<=edgeEnd?pointLateralPosition:pointLateralPosition<edgeEnd?edgeStart:edgeEnd,Math.sqrt((pointLateralPosition-edgeLateralPosition)**2+(pointForwardPosition-edgeForwardPosition)**2)}(point,rect,edge);(void 0===candidateDistance||distance<candidateDistance)&&(candidateDistance=distance,candidateEdge=edge)})),[candidateDistance,candidateEdge]}var lock_unlock=__webpack_require__("./packages/block-editor/src/lock-unlock.js");const THRESHOLD_DISTANCE=30,MINIMUM_HEIGHT_FOR_THRESHOLD=120,MINIMUM_WIDTH_FOR_THRESHOLD=120;function isDropTargetValid(getBlockType,allowedBlocks,draggedBlockNames,targetBlockName){let areBlocksAllowed=!0;if(allowedBlocks){const allowedBlockNames=allowedBlocks?.map((({name})=>name));areBlocksAllowed=draggedBlockNames.every((name=>allowedBlockNames?.includes(name)))}const targetMatchesDraggedBlockParents=draggedBlockNames.map((name=>getBlockType(name))).every((block=>{const[allowedParentName]=block?.parent||[];return!allowedParentName||allowedParentName===targetBlockName}));return areBlocksAllowed&&targetMatchesDraggedBlockParents}function useBlockDropZone({dropZoneElement,rootClientId:targetRootClientId="",parentClientId:parentBlockClientId="",isDisabled=!1}={}){const registry=(0,use_registry.Z)(),[dropTarget,setDropTarget]=(0,react.useState)({index:null,operation:"insert"}),{getBlockType}=(0,use_select.Z)(blocks_build_module.h),{getBlockListSettings,getBlocks,getBlockIndex,getDraggedBlockClientIds,getBlockNamesByClientId,getAllowedBlocks,isDragging}=(0,lock_unlock.U)((0,use_select.Z)(store.h)),{showInsertionPoint,hideInsertionPoint,startDragging,stopDragging}=(0,lock_unlock.U)((0,use_dispatch.Z)(store.h)),onBlockDrop=useOnBlockDrop("before"===dropTarget.operation||"after"===dropTarget.operation?parentBlockClientId:targetRootClientId,dropTarget.index,{operation:dropTarget.operation,nearestSide:dropTarget.nearestSide}),throttled=(0,use_throttle.Z)((0,react.useCallback)(((event,ownerDocument)=>{isDragging()||startDragging();const allowedBlocks=getAllowedBlocks(targetRootClientId),targetBlockName=getBlockNamesByClientId([targetRootClientId])[0],draggedBlockNames=getBlockNamesByClientId(getDraggedBlockClientIds());if(!isDropTargetValid(getBlockType,allowedBlocks,draggedBlockNames,targetBlockName))return;const blocks=getBlocks(targetRootClientId);if(0===blocks.length)return void registry.batch((()=>{setDropTarget({index:0,operation:"insert"}),showInsertionPoint(targetRootClientId,0,{operation:"insert"})}));const blocksData=blocks.map((block=>{const clientId=block.clientId;return{isUnmodifiedDefaultBlock:(0,blocks_build_module.ZP)(block),getBoundingClientRect:()=>ownerDocument.getElementById(`block-${clientId}`).getBoundingClientRect(),blockIndex:getBlockIndex(clientId),blockOrientation:getBlockListSettings(clientId)?.orientation}})),[targetIndex,operation,nearestSide]=function getDropTargetPosition(blocksData,position,orientation="vertical",options={}){const allowedEdges="horizontal"===orientation?["left","right"]:["top","bottom"];let nearestIndex=0,insertPosition="before",minDistance=1/0,targetBlockIndex=null,nearestSide="right";const{dropZoneElement,parentBlockOrientation,rootBlockIndex=0}=options;if(dropZoneElement&&"horizontal"!==parentBlockOrientation){const rect=dropZoneElement.getBoundingClientRect(),[distance,edge]=getDistanceToNearestEdge(position,rect,["top","bottom"]);if(rect.height>MINIMUM_HEIGHT_FOR_THRESHOLD&&distance<THRESHOLD_DISTANCE){if("top"===edge)return[rootBlockIndex,"before"];if("bottom"===edge)return[rootBlockIndex+1,"after"]}}const isRightToLeft=(0,build_module.dZ)();if(dropZoneElement&&"horizontal"===parentBlockOrientation){const rect=dropZoneElement.getBoundingClientRect(),[distance,edge]=getDistanceToNearestEdge(position,rect,["left","right"]);if(rect.width>MINIMUM_WIDTH_FOR_THRESHOLD&&distance<THRESHOLD_DISTANCE){if(isRightToLeft&&"right"===edge||!isRightToLeft&&"left"===edge)return[rootBlockIndex,"before"];if(isRightToLeft&&"left"===edge||!isRightToLeft&&"right"===edge)return[rootBlockIndex+1,"after"]}}blocksData.forEach((({isUnmodifiedDefaultBlock,getBoundingClientRect,blockIndex,blockOrientation})=>{const rect=getBoundingClientRect();let[distance,edge]=getDistanceToNearestEdge(position,rect,allowedEdges);const[sideDistance,sideEdge]=getDistanceToNearestEdge(position,rect,["left","right"]),isPointInsideRect=function isPointContainedByRect(point,rect){return rect.left<=point.x&&rect.right>=point.x&&rect.top<=point.y&&rect.bottom>=point.y}(position,rect);isUnmodifiedDefaultBlock&&isPointInsideRect?distance=0:"vertical"===orientation&&"horizontal"!==blockOrientation&&(isPointInsideRect&&sideDistance<THRESHOLD_DISTANCE||!isPointInsideRect&&function isPointWithinTopAndBottomBoundariesOfRect(point,rect){return rect.top<=point.y&&rect.bottom>=point.y}(position,rect))&&(targetBlockIndex=blockIndex,nearestSide=sideEdge),distance<minDistance&&(insertPosition="bottom"===edge||!isRightToLeft&&"right"===edge||isRightToLeft&&"left"===edge?"after":"before",minDistance=distance,nearestIndex=blockIndex)}));const adjacentIndex=nearestIndex+("after"===insertPosition?1:-1),isNearestBlockUnmodifiedDefaultBlock=!!blocksData[nearestIndex]?.isUnmodifiedDefaultBlock,isAdjacentBlockUnmodifiedDefaultBlock=!!blocksData[adjacentIndex]?.isUnmodifiedDefaultBlock;if(null!==targetBlockIndex)return[targetBlockIndex,"group",nearestSide];if(!isNearestBlockUnmodifiedDefaultBlock&&!isAdjacentBlockUnmodifiedDefaultBlock)return["after"===insertPosition?nearestIndex+1:nearestIndex,"insert"];return[isNearestBlockUnmodifiedDefaultBlock?nearestIndex:adjacentIndex,"replace"]}(blocksData,{x:event.clientX,y:event.clientY},getBlockListSettings(targetRootClientId)?.orientation,{dropZoneElement,parentBlockClientId,parentBlockOrientation:parentBlockClientId?getBlockListSettings(parentBlockClientId)?.orientation:void 0,rootBlockIndex:getBlockIndex(targetRootClientId)});registry.batch((()=>{setDropTarget({index:targetIndex,operation,nearestSide});const insertionPointClientId=["before","after"].includes(operation)?parentBlockClientId:targetRootClientId;showInsertionPoint(insertionPointClientId,targetIndex,{operation,nearestSide})}))}),[getAllowedBlocks,targetRootClientId,getBlockNamesByClientId,getDraggedBlockClientIds,getBlockType,getBlocks,getBlockListSettings,dropZoneElement,parentBlockClientId,getBlockIndex,registry,showInsertionPoint,isDragging,startDragging]),200);return(0,use_drop_zone.Z)({dropZoneElement,isDisabled,onDrop:onBlockDrop,onDragOver(event){throttled(event,event.currentTarget.ownerDocument)},onDragLeave(){throttled.cancel(),hideInsertionPoint()},onDragEnd(){throttled.cancel(),stopDragging(),hideInsertionPoint()}})}}}]);