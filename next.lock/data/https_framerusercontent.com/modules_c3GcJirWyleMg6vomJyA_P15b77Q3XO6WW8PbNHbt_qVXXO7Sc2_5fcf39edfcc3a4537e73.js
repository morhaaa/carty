// Generated by Framer (f92ac27)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,addPropertyControls,ControlType,cx,getFonts,RichText,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{Icon as Phosphor}from"https://framerusercontent.com/modules/tYScH7LTqUtz5KUaUAYP/1Ug7Oa5QuxbjTOPEhCOW/Phosphor.js";import*as sharedStyle from"https://framerusercontent.com/modules/tpf1qsMt6qY68lGRGlNz/oV8t5aLSJBPUS031dyBO/bYf7b73wA.js";import*as sharedStyle3 from"https://framerusercontent.com/modules/giEU47NQiqPUPXzhosYj/Xs5tIQT2deiGUyx9k5kj/KfdEFPFFe.js";import*as sharedStyle2 from"https://framerusercontent.com/modules/2HvJfrJPw4HOloWcFctI/0Ce9k7uM6f2f6YIy2Wzb/l6qNW1TBq.js";import*as sharedStyle1 from"https://framerusercontent.com/modules/vV05csi8yupgFNsN3hPd/2RI2KYLXOZUKx0Scy7HV/stylesPresetHeading2.js";const PhosphorFonts=getFonts(Phosphor);const cycleOrder=["HBUQyzmXM","ElXDFMfh_","l9niAUydL","HJC3KlF8x"];const variantClassNames={ElXDFMfh_:"framer-v-ba4rv5",HBUQyzmXM:"framer-v-2gfqi0",HJC3KlF8x:"framer-v-1oa3qml",l9niAUydL:"framer-v-1ih8r9f"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={"Variant 4":"HJC3KlF8x",Free:"HBUQyzmXM",Pro:"l9niAUydL",Starter:"ElXDFMfh_"};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="HBUQyzmXM",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"HBUQyzmXM",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const isDisplayed1=()=>{if(baseVariant==="ElXDFMfh_")return true;return false;};const isDisplayed2=()=>{if(baseVariant==="ElXDFMfh_")return true;return false;};const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-6J5W1",sharedStyle.className,sharedStyle1.className,sharedStyle2.className,sharedStyle3.className,classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-2gfqi0",className),"data-border":true,"data-framer-name":"Free",layoutDependency:layoutDependency,layoutId:"HBUQyzmXM",ref:ref,style:{"--border-bottom-width":"1px","--border-color":"rgba(255, 255, 255, 0.5)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backdropFilter:"blur(40px)",backgroundColor:"rgba(255, 255, 255, 0.6)",borderBottomLeftRadius:25,borderBottomRightRadius:25,borderTopLeftRadius:25,borderTopRightRadius:25,boxShadow:"0px 1.6733156776526186px 1.6733156776526186px 0px rgba(0, 0, 0, 0.00418), 0px 3.984206390969505px 3.984206390969505px 0px rgba(0, 0, 0, 0.00996), 0px 7.259321882820145px 7.259321882820145px 0px rgba(0, 0, 0, 0.01815), 0px 12.068385491961365px 12.068385491961365px 0px rgba(0, 0, 0, 0.03017), 0px 19.50049274209897px 19.50049274209897px 0px rgba(0, 0, 0, 0.04875), 0px 31.901418213351462px 31.901418213351462px 0px rgba(0, 0, 0, 0.07975), 0px 54.96035212570371px 54.96035212570371px 0px rgba(0, 0, 0, 0.1374), 0px 100px 100px 0px rgba(0, 0, 0, 0.25)",WebkitBackdropFilter:"blur(40px)",...style},transition:transition,variants:{ElXDFMfh_:{"--border-color":"rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(0, 0, 0, 0.4)"},HJC3KlF8x:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backgroundColor:"rgba(0, 0, 0, 0.9)"},l9niAUydL:{"--border-bottom-width":"0px","--border-left-width":"0px","--border-right-width":"0px","--border-top-width":"0px",backgroundColor:"rgba(0, 0, 0, 0.9)"}},...addPropertyOverrides({ElXDFMfh_:{"data-framer-name":"Starter"},HJC3KlF8x:{"data-framer-name":"Variant 4"},l9niAUydL:{"data-framer-name":"Pro"}},baseVariant,gestureVariant),children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-fuu4xe-container",layoutDependency:layoutDependency,layoutId:"JX_LMjDRJ-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Pen",id:"JX_LMjDRJ",layoutId:"JX_LMjDRJ",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)",iconSelection:"Circle"},HJC3KlF8x:{color:"rgb(255, 255, 255)",iconSelection:"Cloud"},l9niAUydL:{color:"rgb(255, 255, 255)",iconSelection:"Cloud"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Free plan"})})}),className:"framer-qybxwi",layoutDependency:layoutDependency,layoutId:"Rw5cmUJyA",style:{"--extracted-1w3ko1f":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Basic plan"})})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Pro plan"})})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Pro plan"})})})}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.h2,{className:"framer-styles-preset-1m9bzi2","data-styles-preset":"stylesPresetHeading2",style:{"--framer-text-color":"var(--extracted-1of0zx5)"},children:"$0/mo"})}),className:"framer-5fq1xp",layoutDependency:layoutDependency,layoutId:"yrQyJy1EE",style:{"--extracted-1of0zx5":"rgb(0, 0, 0)","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1of0zx5":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-1of0zx5":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-1of0zx5":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.h2,{className:"framer-styles-preset-1m9bzi2","data-styles-preset":"stylesPresetHeading2",style:{"--framer-text-color":"var(--extracted-1of0zx5)"},children:"$7/mo"})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.h2,{className:"framer-styles-preset-1m9bzi2","data-styles-preset":"stylesPresetHeading2",style:{"--framer-text-color":"var(--extracted-1of0zx5)"},children:"$12/mo"})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.h2,{className:"framer-styles-preset-1m9bzi2","data-styles-preset":"stylesPresetHeading2",style:{"--framer-text-color":"var(--extracted-1of0zx5)"},children:"$12/mo"})})}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-biqh54","data-border":true,layoutDependency:layoutDependency,layoutId:"FKzNl8pPa",style:{"--border-bottom-width":"1px","--border-color":"rgba(0, 0, 0, 0.1)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgba(0, 0, 0, 0.1)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20},transition:transition,variants:{ElXDFMfh_:{"--border-color":"rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.1)"},HJC3KlF8x:{"--border-color":"rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.1)"},l9niAUydL:{"--border-color":"rgba(255, 255, 255, 0.1)",backgroundColor:"rgba(255, 255, 255, 0.1)"}},children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-605wog","data-styles-preset":"l6qNW1TBq",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Up to 3 projects"})})}),className:"framer-1q51kj9",layoutDependency:layoutDependency,layoutId:"xMDF2H4df",style:{"--extracted-1w3ko1f":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-605wog","data-styles-preset":"l6qNW1TBq",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Billed yearly"})})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-605wog","data-styles-preset":"l6qNW1TBq",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Billed yearly"})})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-605wog","data-styles-preset":"l6qNW1TBq",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Billed yearly"})})})}},baseVariant,gestureVariant)}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ncc9iy-container",layoutDependency:layoutDependency,layoutId:"LPQWCTaND-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Info",id:"LPQWCTaND",layoutId:"LPQWCTaND",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)",iconSelection:"ToggleLeft"},HJC3KlF8x:{color:"rgb(255, 255, 255)",iconSelection:"ToggleLeft"},l9niAUydL:{color:"rgb(255, 255, 255)",iconSelection:"ToggleLeft"}},baseVariant,gestureVariant)})})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1fsymuk",layoutDependency:layoutDependency,layoutId:"vnDYbDcRB",transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-kmmg08",layoutDependency:layoutDependency,layoutId:"xs6JYW1sK",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-133isgz-container",layoutDependency:layoutDependency,layoutId:"oICRtrkNU-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Globe",id:"oICRtrkNU",layoutId:"oICRtrkNU",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)"},HJC3KlF8x:{color:"rgb(255, 255, 255)"},l9niAUydL:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 1 card Visa"})}),className:"framer-1xjvcpg",layoutDependency:layoutDependency,layoutId:"PkQ2k8sXA",style:{"--extracted-r6o4lv":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-r6o4lv":"rgb(255, 250, 250)"},HJC3KlF8x:{"--extracted-r6o4lv":"rgb(255, 250, 250)"},l9niAUydL:{"--extracted-r6o4lv":"rgb(255, 250, 250)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"1 Premium Visa"})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 1 Black VIsa"})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 1 Black VIsa"})})}},baseVariant,gestureVariant)})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-5evosn",layoutDependency:layoutDependency,layoutId:"wuwVOuPWZ",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1u4rjtd-container",layoutDependency:layoutDependency,layoutId:"LX6dGritB-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Lock",id:"LX6dGritB",layoutId:"LX6dGritB",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)"},HJC3KlF8x:{color:"rgb(255, 255, 255)"},l9niAUydL:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Password protect"})})}),className:"framer-1e9k22s",layoutDependency:layoutDependency,layoutId:"vmqhOizKH",style:{"--extracted-1w3ko1f":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-181y1s0",layoutDependency:layoutDependency,layoutId:"fyp2SbSZI",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-nqd42k-container",layoutDependency:layoutDependency,layoutId:"F3V4ynRe4-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Books",id:"F3V4ynRe4",layoutId:"F3V4ynRe4",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)"},HJC3KlF8x:{color:"rgb(255, 255, 255)"},l9niAUydL:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"10GB bandwidth"})})}),className:"framer-1voef8z",layoutDependency:layoutDependency,layoutId:"psGKl6UMy",style:{"--extracted-1w3ko1f":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1w3ko1f":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-r6o4lv":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-r6o4lv":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"15GB bandwidth"})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"15GB bandwidth"})})}},baseVariant,gestureVariant)})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1wsvute",layoutDependency:layoutDependency,layoutId:"M6jn5dz8C",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-rdybhy-container",layoutDependency:layoutDependency,layoutId:"xBtvxQZ_C-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Stack",id:"xBtvxQZ_C",layoutId:"xBtvxQZ_C",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)"},HJC3KlF8x:{color:"rgb(255, 255, 255)"},l9niAUydL:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"1 Virtual card"})}),className:"framer-k9m33e",layoutDependency:layoutDependency,layoutId:"oovYE_XsT",style:{"--extracted-r6o4lv":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-r6o4lv":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-r6o4lv":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-r6o4lv":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"5 Virtual card"})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"Illimited Virtual card"})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:"Illimited Virtual card"})})}},baseVariant,gestureVariant)})]}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-c6hzw4",layoutDependency:layoutDependency,layoutId:"WksYSfh6B",transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-4u8bi-container",layoutDependency:layoutDependency,layoutId:"qKROLouvS-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(0, 0, 0)",height:"100%",iconSearch:"House",iconSelection:"Person",id:"qKROLouvS",layoutId:"qKROLouvS",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(255, 255, 255)"},HJC3KlF8x:{color:"rgb(255, 255, 255)"},l9niAUydL:{color:"rgb(255, 255, 255)"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 1$ for transaction"})}),className:"framer-1t17bja",layoutDependency:layoutDependency,layoutId:"XHrv3crqG",style:{"--extracted-r6o4lv":"rgb(0, 0, 0)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-r6o4lv":"rgb(255, 255, 255)"},HJC3KlF8x:{"--extracted-r6o4lv":"rgb(255, 255, 255)"},l9niAUydL:{"--extracted-r6o4lv":"rgb(255, 255, 255)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 0$ for transaction"})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 0$ for transaction"})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-kqguaa","data-styles-preset":"KfdEFPFFe",style:{"--framer-text-color":"var(--extracted-r6o4lv)"},children:" 0$ for transaction"})})}},baseVariant,gestureVariant)})]})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-q15qlz",layoutDependency:layoutDependency,layoutId:"UhLbjpP9w",style:{backgroundColor:"rgba(255, 255, 255, 0.1)"},transition:transition}),/*#__PURE__*/ _jsxs(motion.div,{className:"framer-4udfv4","data-framer-name":"Button",layoutDependency:layoutDependency,layoutId:"OUJOKB_Yc",style:{backdropFilter:"blur(30px)",backgroundColor:"rgb(0, 0, 0)",borderBottomLeftRadius:24,borderBottomRightRadius:0,borderTopLeftRadius:24,borderTopRightRadius:24,WebkitBackdropFilter:"blur(30px)"},transition:transition,variants:{ElXDFMfh_:{backgroundColor:"rgb(255, 255, 255)"},HJC3KlF8x:{backgroundColor:"rgb(255, 255, 255)"},l9niAUydL:{backgroundColor:"rgb(255, 255, 255)"}},children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-155rhg6-container",layoutDependency:layoutDependency,layoutId:"oWoteHc9K-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"House",iconSelection:"Pen",id:"oWoteHc9K",layoutId:"oWoteHc9K",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%",...addPropertyOverrides({ElXDFMfh_:{color:"rgb(0, 0, 0)",iconSelection:"CreditCard"},HJC3KlF8x:{color:"rgb(0, 0, 0)",iconSelection:"CreditCard"},l9niAUydL:{color:"rgb(0, 0, 0)",iconSelection:"CreditCard"}},baseVariant,gestureVariant)})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",style:{"--framer-text-alignment":"center"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Try for free"})})}),className:"framer-s0i337",layoutDependency:layoutDependency,layoutId:"SWWclcuQR",style:{"--extracted-1w3ko1f":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,variants:{ElXDFMfh_:{"--extracted-1w3ko1f":"rgb(0, 0, 0)"},HJC3KlF8x:{"--extracted-1w3ko1f":"rgb(0, 0, 0)"},l9niAUydL:{"--extracted-1w3ko1f":"rgb(0, 0, 0)"}},verticalAlignment:"top",withExternalLayout:true,...addPropertyOverrides({ElXDFMfh_:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",style:{"--framer-text-alignment":"center"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Subscribe"})})})},HJC3KlF8x:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",style:{"--framer-text-alignment":"center"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Subscribe"})})})},l9niAUydL:{children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",style:{"--framer-text-alignment":"center"},children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Subscribe"})})})}},baseVariant,gestureVariant)})]}),isDisplayed1()&&/*#__PURE__*/ _jsxs(motion.div,{className:"framer-bmyn8v","data-border":true,layoutDependency:layoutDependency,layoutId:"J1BSJ5LQ3",style:{"--border-bottom-width":"1px","--border-color":"rgba(255, 255, 255, 0.1)","--border-left-width":"1px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderBottomLeftRadius:20,borderBottomRightRadius:20,borderTopLeftRadius:20,borderTopRightRadius:20},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-1qnzzsk-container",layoutDependency:layoutDependency,layoutId:"G9ZTkjBdF-container",transition:transition,children:/*#__PURE__*/ _jsx(Phosphor,{color:"rgb(255, 255, 255)",height:"100%",iconSearch:"House",iconSelection:"Medal",id:"G9ZTkjBdF",layoutId:"G9ZTkjBdF",mirrored:false,selectByList:true,style:{height:"100%",width:"100%"},weight:"duotone",width:"100%"})}),/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{className:"framer-styles-preset-9us7yb","data-styles-preset":"bYf7b73wA",children:/*#__PURE__*/ _jsx(motion.span,{style:{"--framer-text-color":"var(--extracted-1w3ko1f)"},children:"Popular"})})}),className:"framer-2x7p2x",layoutDependency:layoutDependency,layoutId:"qgMBnycCR",style:{"--extracted-1w3ko1f":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transition:transition,verticalAlignment:"top",withExternalLayout:true})]}),isDisplayed2()&&/*#__PURE__*/ _jsx(motion.div,{className:"framer-of91a4",layoutDependency:layoutDependency,layoutId:"gOjrPEURN",style:{backgroundColor:"rgba(255, 255, 255, 0.1)"},transition:transition})]})})});});const css=['.framer-6J5W1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-6J5W1 * { box-sizing: border-box; }",".framer-6J5W1 .framer-vagud0 { display: block; }",".framer-6J5W1 .framer-2gfqi0 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 20px 20px 20px 20px; position: relative; width: 360px; }",".framer-6J5W1 .framer-fuu4xe-container { flex: none; height: 32px; position: relative; width: 32px; }",".framer-6J5W1 .framer-qybxwi, .framer-6J5W1 .framer-5fq1xp, .framer-6J5W1 .framer-1q51kj9, .framer-6J5W1 .framer-1xjvcpg, .framer-6J5W1 .framer-1e9k22s, .framer-6J5W1 .framer-1voef8z, .framer-6J5W1 .framer-k9m33e, .framer-6J5W1 .framer-1t17bja, .framer-6J5W1 .framer-s0i337, .framer-6J5W1 .framer-2x7p2x { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",".framer-6J5W1 .framer-biqh54, .framer-6J5W1 .framer-bmyn8v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 16px 4px 8px; position: relative; width: min-content; }",".framer-6J5W1 .framer-1ncc9iy-container, .framer-6J5W1 .framer-1qnzzsk-container { flex: none; height: 16px; position: relative; width: 16px; }",".framer-6J5W1 .framer-1fsymuk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-6J5W1 .framer-kmmg08, .framer-6J5W1 .framer-5evosn, .framer-6J5W1 .framer-181y1s0, .framer-6J5W1 .framer-1wsvute, .framer-6J5W1 .framer-c6hzw4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }",".framer-6J5W1 .framer-133isgz-container, .framer-6J5W1 .framer-1u4rjtd-container, .framer-6J5W1 .framer-nqd42k-container, .framer-6J5W1 .framer-rdybhy-container, .framer-6J5W1 .framer-4u8bi-container { flex: none; height: 24px; position: relative; width: 24px; }",".framer-6J5W1 .framer-q15qlz, .framer-6J5W1 .framer-of91a4 { flex: none; height: 1px; overflow: visible; position: relative; width: 50%; }",".framer-6J5W1 .framer-4udfv4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 16px; height: min-content; justify-content: center; max-width: 240px; overflow: visible; padding: 10px 10px 10px 10px; position: relative; width: 100%; }",".framer-6J5W1 .framer-155rhg6-container { flex: none; height: 30px; position: relative; width: 30px; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-6J5W1 .framer-2gfqi0, .framer-6J5W1 .framer-biqh54, .framer-6J5W1 .framer-1fsymuk, .framer-6J5W1 .framer-kmmg08, .framer-6J5W1 .framer-5evosn, .framer-6J5W1 .framer-181y1s0, .framer-6J5W1 .framer-1wsvute, .framer-6J5W1 .framer-c6hzw4, .framer-6J5W1 .framer-4udfv4, .framer-6J5W1 .framer-bmyn8v { gap: 0px; } .framer-6J5W1 .framer-2gfqi0 > *, .framer-6J5W1 .framer-1fsymuk > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-6J5W1 .framer-2gfqi0 > :first-child, .framer-6J5W1 .framer-1fsymuk > :first-child { margin-top: 0px; } .framer-6J5W1 .framer-2gfqi0 > :last-child, .framer-6J5W1 .framer-1fsymuk > :last-child { margin-bottom: 0px; } .framer-6J5W1 .framer-biqh54 > *, .framer-6J5W1 .framer-kmmg08 > *, .framer-6J5W1 .framer-5evosn > *, .framer-6J5W1 .framer-181y1s0 > *, .framer-6J5W1 .framer-1wsvute > *, .framer-6J5W1 .framer-c6hzw4 > *, .framer-6J5W1 .framer-bmyn8v > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-6J5W1 .framer-biqh54 > :first-child, .framer-6J5W1 .framer-kmmg08 > :first-child, .framer-6J5W1 .framer-5evosn > :first-child, .framer-6J5W1 .framer-181y1s0 > :first-child, .framer-6J5W1 .framer-1wsvute > :first-child, .framer-6J5W1 .framer-c6hzw4 > :first-child, .framer-6J5W1 .framer-4udfv4 > :first-child, .framer-6J5W1 .framer-bmyn8v > :first-child { margin-left: 0px; } .framer-6J5W1 .framer-biqh54 > :last-child, .framer-6J5W1 .framer-kmmg08 > :last-child, .framer-6J5W1 .framer-5evosn > :last-child, .framer-6J5W1 .framer-181y1s0 > :last-child, .framer-6J5W1 .framer-1wsvute > :last-child, .framer-6J5W1 .framer-c6hzw4 > :last-child, .framer-6J5W1 .framer-4udfv4 > :last-child, .framer-6J5W1 .framer-bmyn8v > :last-child { margin-right: 0px; } .framer-6J5W1 .framer-4udfv4 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } }",".framer-6J5W1.framer-v-ba4rv5 .framer-2gfqi0 { padding: 20px 20px 68px 20px; }",".framer-6J5W1.framer-v-ba4rv5 .framer-fuu4xe-container { order: 2; }",".framer-6J5W1.framer-v-ba4rv5 .framer-qybxwi { order: 3; }",".framer-6J5W1.framer-v-ba4rv5 .framer-5fq1xp { order: 4; }",".framer-6J5W1.framer-v-ba4rv5 .framer-biqh54 { order: 5; }",".framer-6J5W1.framer-v-ba4rv5 .framer-1fsymuk { order: 6; }",".framer-6J5W1.framer-v-ba4rv5 .framer-133isgz-container, .framer-6J5W1.framer-v-ba4rv5 .framer-bmyn8v { order: 0; }",".framer-6J5W1.framer-v-ba4rv5 .framer-1xjvcpg, .framer-6J5W1.framer-v-ba4rv5 .framer-of91a4 { order: 1; }",".framer-6J5W1.framer-v-ba4rv5 .framer-q15qlz { order: 7; }",".framer-6J5W1.framer-v-ba4rv5 .framer-4udfv4 { order: 8; }",...sharedStyle.css,...sharedStyle1.css,...sharedStyle2.css,...sharedStyle3.css];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 461
 * @framerIntrinsicWidth 360
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ElXDFMfh_":{"layout":["fixed","auto"]},"l9niAUydL":{"layout":["fixed","auto"]},"HJC3KlF8x":{"layout":["fixed","auto"]}}}
 */ const FramerqVXXO7Sc2=withCSS(Component,css);export default FramerqVXXO7Sc2;FramerqVXXO7Sc2.displayName="Pricing Card";FramerqVXXO7Sc2.defaultProps={height:461,width:360};addPropertyControls(FramerqVXXO7Sc2,{variant:{options:["HBUQyzmXM","ElXDFMfh_","l9niAUydL","HJC3KlF8x"],optionTitles:["Free","Starter","Pro","Variant 4"],title:"Variant",type:ControlType.Enum}});addFonts(FramerqVXXO7Sc2,[...PhosphorFonts,...sharedStyle.fonts,...sharedStyle1.fonts,...sharedStyle2.fonts,...sharedStyle3.fonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerqVXXO7Sc2","slots":[],"annotations":{"framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"auto\"]},\"ElXDFMfh_\":{\"layout\":[\"fixed\",\"auto\"]},\"l9niAUydL\":{\"layout\":[\"fixed\",\"auto\"]},\"HJC3KlF8x\":{\"layout\":[\"fixed\",\"auto\"]}}}","framerIntrinsicWidth":"360","framerIntrinsicHeight":"461"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./qVXXO7Sc2.map