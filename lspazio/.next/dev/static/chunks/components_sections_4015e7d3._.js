(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sections/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function Hero() {
    _s();
    const [mountKey, setMountKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Effect 1: Trigger the strict pristine DOM render
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setMountKey(Math.random());
        }
    }["Hero.useEffect"], []);
    // Effect 2: Initialize the slider only when the pristine DOM is ready
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            if (mountKey === 0) return;
            let timer;
            const tryInit = {
                "Hero.useEffect.tryInit": ()=>{
                    if (typeof window.initRevSlider === 'function') {
                        window.initRevSlider();
                    } else {
                        timer = setTimeout(tryInit, 100);
                    }
                }
            }["Hero.useEffect.tryInit"];
            tryInit();
            return ({
                "Hero.useEffect": ()=>{
                    if (timer) clearTimeout(timer);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        mountKey
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "slider-section",
        dangerouslySetInnerHTML: {
            __html: `
                <div id="welcome_wrapper" class="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style="background:#eeeeee;padding:0px;">
                        <div id="welcome" class="rev_slider fullscreenbanner" style="display:none;" data-version="5.4.3.1">
                            <ul>

                                <!-- SLIDE 1 -->
                                <li data-index="rs-901" 
                                data-transition="slidevertical" 
                                data-slotamount="default" 
                                data-hideafterloop="0" 
                                data-hideslideonmobile="off"  
                                data-easein="default" 
                                data-easeout="default" 
                                data-masterspeed="default"  
                                data-thumb="images/main-slider/slider1/slide1.jpg"  
                                data-rotate="0"  
                                
                                data-fsmasterspeed="300" 
                                data-fsslotamount="7" 
                                data-saveperformance="off"  
                                data-title="Click" 
                                data-param1="" 
                                data-description="">
                                    <!-- MAIN IMAGE -->
                                    <img src="images/main-slider/slider1/slide1.jpg"  alt=""  data-lazyload="images/main-slider/slider1/slide1.jpg" data-bgposition="center center" 
                                    data-bgfit="cover" data-bgparallax="4" class="rev-slidebg" data-no-retina>
        
                                    <!-- LAYER NR. 0 [ for overlay ] -->
                                    <div class="tp-caption tp-shape tp-shapewrapper " 
                                        id="slide-901-layer-0" 
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="shape" 
                                        data-basealign="slide" 
                                        data-responsive_offset="off" 
                                        data-responsive="off"
                                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index: 1;background-color:rgba(0, 0, 0, 0.3);border-color:rgba(0, 0, 0, 0);border-width:0px;"> 
                                    </div>
          
                                     <!-- LAYER NR. 2 [Number] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-901-layer-2"						
                                        data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['300','180','180','180']" 
                                        data-fontsize="['300','200','200','80']"
                                        data-lineheight="['66','66','48','38']"                             
                                        data-width="['800','800','800','800']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                       style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 900;
                                        color:rgba(0,0,0,0);">
                                        <span class="slider-text-outline" style="font-family: 'Oswald', sans-serif; text-transform:uppercase;">01</span>
                                    </div>                             
                                    
                                    <!-- LAYER NR. 3 [ Small title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-901-layer-3" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"  
                                        data-fontsize="['24','24','24','24']"
                                        data-lineheight="['34','34','34','34']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;text-transform:uppercase;">
                                            <span class="text-white" style="letter-spacing:20px;">We Make Sure</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 4 [ large title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-901-layer-4" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"  
                                        data-fontsize="['72','72','38','28']"
                                        data-lineheight="['82','82','48','38']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;">
                                            <span class="text-white">Classic & Modern</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 5 [ More About button ] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-901-layer-5"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-width="['300','300','300','300']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index:13; text-transform:uppercase;">
                                            <a href="about-1.html" class="rev-slider-custom-btn" style="font-family: 'Oswald', sans-serif;">More About</a>
                                    </div>
                                    
                                    <!-- LAYER NR. 5-line [ More About button Line ] -->
                                    <div class="tp-caption tp-resizeme bg-green" 	
                                        id="slide-901-layer-5-line"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[1,1,1,1]"
                                        data-paddingright="[30,30,30,30]"
                                        data-paddingbottom="[1,1,1,1]"
                                        data-paddingleft="[30,30,30,30]"
                                        
                                        style="z-index:13;">
                                    </div>                            
                                    
                                    <!-- LAYER NR. 6 [ Right block ] -->
                                    <div class="tp-caption rev-btn  tp-resizeme bg-secondry" 
                                        id="901-layer-6" 
                                        data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"                     
                                        data-type="text" 
                                        data-visibility="['on','off','off','off']"
                                        data-responsive_offset="off" 
                    
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        
                                        data-textAlign="['right','right','right','right']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"            
                                        style="z-index: 0; width:6000px;height:100vh; background-image:url(images/main-slider/slider1/right-bg.png); display:block; background-position:left center;background-repeat:no-repeat">
                                    </div>
        
                                   <!-- LAYER NR. 7 [ Right part middle image ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-901-layer-7" 
                                        data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"  
                                        data-width="['400','400','96%','96%']"
                                        data-height="['none','auto','none','none']"
                                        data-visibility="['on','on','off','off']"
                                    
                                        data-type="image" 
                                        data-responsive_offset="on" 
                                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                                       
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        border-width:0px;">
                                        <img src="images/main-slider/slider1/img-1.jpg" alt="">
                                    </div>                                       
                                                                                                 
                                </li>
                                
                                <!-- SLIDE 2 -->
                                <li data-index="rs-902" 
                                data-transition="slidevertical" 
                                data-slotamount="default" 
                                data-hideafterloop="0" 
                                data-hideslideonmobile="off"  
                                data-easein="default" 
                                data-easeout="default" 
                                data-masterspeed="default"  
                                data-thumb="images/main-slider/slider1/slide1.jpg"  
                                data-rotate="0"  
                                data-fsmasterspeed="300" 
                                data-fsslotamount="7" 
                                data-saveperformance="off"  
                                data-title="Click" 
                                data-param1="" 
                                data-description="">
                                    <!-- MAIN IMAGE -->
                                    <img src="images/main-slider/slider1/slide2.jpg"  alt=""  data-lazyload="images/main-slider/slider1/slide2.jpg" data-bgposition="center center" 
                                    data-bgfit="cover" data-bgparallax="4" class="rev-slidebg" data-no-retina>
        
                                    <!-- LAYER NR. 0 [ for overlay ] -->
                                    <div class="tp-caption tp-shape tp-shapewrapper " 
                                        id="slide-902-layer-0" 
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="shape" 
                                        data-basealign="slide" 
                                        data-responsive_offset="off" 
                                        data-responsive="off"
                                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index: 1;background-color:rgba(0, 0, 0, 0.3);border-color:rgba(0, 0, 0, 0);border-width:0px;"> 
                                    </div>
          
                                     <!-- LAYER NR. 2 [Number] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-902-layer-2"						
                                        data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['300','180','180','180']" 
                                        data-fontsize="['300','200','200','80']"
                                        data-lineheight="['66','66','48','38']"                             
                                        data-width="['800','800','800','800']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                       style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 900;
                                        color:rgba(0,0,0,0);">
                                        <span class="slider-text-outline" style="font-family: 'Oswald', sans-serif; text-transform:uppercase;">02</span>
                                    </div>                             
                                    
                                    <!-- LAYER NR. 3 [ Small title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-902-layer-3" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"  
                                        data-fontsize="['24','24','24','24']"
                                        data-lineheight="['34','34','34','34']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;text-transform:uppercase;">
                                            <span class="text-white" style="letter-spacing:20px;">We Make Sure</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 4 [ large title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-902-layer-4" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"  
                                        data-fontsize="['72','72','38','28']"
                                        data-lineheight="['82','82','48','38']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;">
                                            <span class="text-white">Classic & Modern</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 5 [ More About button ] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-902-layer-5"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-width="['300','300','300','300']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index:13; text-transform:uppercase;">
                                            <a href="about-1.html" class="rev-slider-custom-btn" style="font-family: 'Oswald', sans-serif;">More About</a>
                                    </div>
                                    
                                    <!-- LAYER NR. 5-line [ More About button Line ] -->
                                    <div class="tp-caption tp-resizeme bg-green" 	
                                        id="slide-902-layer-5-line"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[1,1,1,1]"
                                        data-paddingright="[30,30,30,30]"
                                        data-paddingbottom="[1,1,1,1]"
                                        data-paddingleft="[30,30,30,30]"
                                        
                                        style="z-index:13;">
                                    </div>                            
                                    
                                    <!-- LAYER NR. 6 [ Right block ] -->
                                    <div class="tp-caption rev-btn  tp-resizeme bg-secondry" 
                                        id="902-layer-6" 
                                        data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"                     
                                        data-type="text" 
                                        data-visibility="['on','off','off','off']"
                                        data-responsive_offset="off" 
                    
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        
                                        data-textAlign="['right','right','right','right']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"            
                                        style="z-index: 0; width:6000px;height:100vh; background-image:url(images/main-slider/slider1/right-bg.png); display:block; background-position:left center;background-repeat:no-repeat">
                                    </div>
        
                                   <!-- LAYER NR. 7 [ Right part middle image ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-902-layer-7" 
                                        data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"  
                                        data-width="['400','400','96%','96%']"
                                        data-height="['none','auto','none','none']"
                                        data-visibility="['on','on','off','off']"
                                    
                                        data-type="image" 
                                        data-responsive_offset="on" 
                                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                                       
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        border-width:0px;">
                                        <img src="images/main-slider/slider1/img-2.jpg" alt="">
                                    </div>                                       
                                                                                                 
                                </li>
                                
                                <!-- SLIDE 3 -->
                                <li data-index="rs-903" 
                                data-transition="slidevertical" 
                                data-slotamount="default" 
                                data-hideafterloop="0" 
                                data-hideslideonmobile="off"  
                                data-easein="default" 
                                data-easeout="default" 
                                data-masterspeed="default"  
                                data-thumb="images/main-slider/slider1/slide1.jpg"  
                                data-rotate="0"  
                                data-fsmasterspeed="300" 
                                data-fsslotamount="7" 
                                data-saveperformance="off"  
                                data-title="Click" 
                                data-param1="" 
                                data-description="">
                                    <!-- MAIN IMAGE -->
                                    <img src="images/main-slider/slider1/slide3.jpg"  alt=""  data-lazyload="images/main-slider/slider1/slide3.jpg" data-bgposition="center center" 
                                    data-bgfit="cover" data-bgparallax="4" class="rev-slidebg" data-no-retina>
        
                                    <!-- LAYER NR. 0 [ for overlay ] -->
                                    <div class="tp-caption tp-shape tp-shapewrapper " 
                                        id="slide-903-layer-0" 
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"
                                        data-type="shape" 
                                        data-basealign="slide" 
                                        data-responsive_offset="off" 
                                        data-responsive="off"
                                        data-frames='[
                                        {"from":"opacity:0;","speed":1000,"to":"o:1;","delay":0,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"opacity:0;","ease":"Power4.easeOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index: 1;background-color:rgba(0, 0, 0, 0.3);border-color:rgba(0, 0, 0, 0);border-width:0px;"> 
                                    </div>
          
                                     <!-- LAYER NR. 2 [Number] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-903-layer-2"						
                                        data-x="['left','left','left','left']" data-hoffset="['30','30','30','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['300','180','180','180']" 
                                        data-fontsize="['300','200','200','80']"
                                        data-lineheight="['66','66','48','38']"                             
                                        data-width="['800','800','800','800']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                       style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 900;
                                        color:rgba(0,0,0,0);">
                                        <span class="slider-text-outline" style="font-family: 'Oswald', sans-serif; text-transform:uppercase;">03</span>
                                    </div>                             
                                    
                                    <!-- LAYER NR. 3 [ Small title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-903-layer-3" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['540','340','340','270']"  
                                        data-fontsize="['24','24','24','24']"
                                        data-lineheight="['34','34','34','34']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":1500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;text-transform:uppercase;">
                                            <span class="text-white" style="letter-spacing:20px;">We Make Sure</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 4 [ large title ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-903-layer-4" 
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['580','390','390','330']"  
                                        data-fontsize="['72','72','38','28']"
                                        data-lineheight="['82','82','48','38']"
                                        data-width="['700','700','96%','96%']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                    
                                        data-type="text" 
                                        data-responsive_offset="on" 
                                        data-frames='[
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        font-weight: 400;
                                        color:#fff;
                                        border-width:0px;">
                                        <div style="font-family: 'Oswald', sans-serif;">
                                            <span class="text-white">Classic & Modern</span><br>
                                        </div>
                                    
                                    </div>
                                    
                                    <!-- LAYER NR. 5 [ More About button ] -->
                                    <div class="tp-caption tp-resizeme" 	
                                        id="slide-903-layer-5"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['700','490','490','400']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-width="['300','300','300','300']"
                                        data-height="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                        
                                        style="z-index:13; text-transform:uppercase;">
                                            <a href="about-1.html" class="rev-slider-custom-btn" style="font-family: 'Oswald', sans-serif;">More About</a>
                                    </div>
                                    
                                    <!-- LAYER NR. 5-line [ More About button Line ] -->
                                    <div class="tp-caption tp-resizeme bg-green" 	
                                        id="slide-903-layer-5-line"						
                                        data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" 
                
                                        data-y="['top','top','top','top']" data-voffset="['710','500','500','410']"  
                                        data-lineheight="['none','none','none','none']"
                                        data-whitespace="['normal','normal','normal','normal']"
                                        
                                        data-type="text" 
                                        data-responsive_offset="on"
                                        data-frames='[ 
                                        {"from":"y:100px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2500,"ease":"Power4.easeOut"},
                                        {"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}
                                        ]'
                                        data-textAlign="['left','left','left','left']"
                                        data-paddingtop="[1,1,1,1]"
                                        data-paddingright="[30,30,30,30]"
                                        data-paddingbottom="[1,1,1,1]"
                                        data-paddingleft="[30,30,30,30]"
                                        
                                        style="z-index:13;">
                                    </div>                            
                                    
                                    <!-- LAYER NR. 6 [ Right block ] -->
                                    <div class="tp-caption rev-btn  tp-resizeme bg-secondry" 
                                        id="903-layer-6" 
                                        data-x="['left','right','right','right']" data-hoffset="['1060','0','0','0']" 
                                        data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                        data-width="full"
                                        data-height="full"
                                        data-whitespace="nowrap"                     
                                        data-type="text" 
                                        data-visibility="['on','off','off','off']"
                                        data-responsive_offset="off" 
                    
                                        data-frames='[{"from":"y:[-0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","speed":0,"to":"o:1;","delay":0,"ease":"Power3.easeInOut"},
                                        {"delay":"wait","speed":0,"to":"y:[-0%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power1.easeIn"}]'
                                        
                                        data-textAlign="['right','right','right','right']"
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"            
                                        style="z-index: 0; width:6000px;height:100vh; background-image:url(images/main-slider/slider1/right-bg.png); display:block; background-position:left center;background-repeat:no-repeat">
                                    </div>
        
                                   <!-- LAYER NR. 7 [ Right part middle image ] -->
                                    <div class="tp-caption   tp-resizeme" 
                                        id="slide-903-layer-7" 
                                        data-x="['right','right','right','right']" data-hoffset="['100','80','40','40']" 
                                        data-y="['top','top','top','top']" data-voffset="['140','140','140','270']"  
                                        data-width="['400','400','96%','96%']"
                                        data-height="['none','auto','none','none']"
                                        data-visibility="['on','on','off','off']"
                                    
                                        data-type="image" 
                                        data-responsive_offset="on" 
                                        data-frames='[{"from":"x:200px(R);opacity:0;","speed":2000,"to":"o:1;","delay":2000,"ease":"Power4.easeOut"},{"delay":"wait","speed":1000,"to":"y:-50px;opacity:0;","ease":"Power2.easeInOut"}]'
                                       
                                        data-paddingtop="[0,0,0,0]"
                                        data-paddingright="[0,0,0,0]"
                                        data-paddingbottom="[0,0,0,0]"
                                        data-paddingleft="[0,0,0,0]"
                                    
                                        style="z-index: 13; 
                                        white-space: normal; 
                                        border-width:0px;">
                                        <img src="images/main-slider/slider1/img-3.jpg" alt="">
                                    </div>                                       
                                                                                                 
                                </li>                                                             
                                
                                                           
                            </ul>
                            <div class="tp-bannertimer tp-bottom" style="visibility: hidden !important;"></div>	
                        </div>
                    </div>
                    <!-- SLIDER END -->
                    
                    <!--SLIDER-SOCIAL-RIGHT START-->
                        <div class="slider-social-right">
                            <ul>
                                <li><a href="https://www.facebook.com/"><span><i class="fa-brands fa-facebook-f"></i></span>facebook</a></li>
                                <li><a href="https://x.com/"><span><i class="fa-brands fa-x-twitter"></i></span>Twitter</a></li>
                                <li><a href="https://www.instagram.com"><span><i class="fa-brands fa-instagram"></i></span>Instagram</a></li>
                            </ul>
                        </div>
                    <!--SLIDER-SOCIAL-RIGHT END-->
            `
        }
    }, mountKey, false, {
        fileName: "[project]/components/sections/Hero.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_s(Hero, "3GiXhCXAwGENfsvMhI126a07i8A=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/AboutSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b80 bg-gray overflow-hide",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "arc-home-about-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "arc-home-left-content bg-gray",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "m-t0 wt-tilte-light",
                                            children: "Design, followed by Form & Function."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 15,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "m-t0 wt-title",
                                            children: "Exploring the Quality Ways through Design."
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 16,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "We are uncompetitor in architectural solutions Friendly neighbour there that power.Keep away Architecture who try to Ambitions people do that really "
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 17,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about",
                                            className: "site-button-link",
                                            children: "Read More"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 18,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/AboutSection.tsx",
                                    lineNumber: 14,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 13,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/AboutSection.tsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "arc-home-about-right portfolio-wrap",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-md-6 col-sm-6 masonry-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "arc-about-year text-uppercase text-right m-b20",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "arc-about-year-pic",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/about/s-1.jpg",
                                                            alt: "About"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "arc-about-year-info",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "title-small",
                                                                children: [
                                                                    "working ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                                                        lineNumber: 32,
                                                                        columnNumber: 87
                                                                    }, this),
                                                                    "experience"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                                lineNumber: 32,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "wt-title m-tb0",
                                                                children: "Year"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                                lineNumber: 33,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-outline",
                                                                children: "12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                                lineNumber: 34,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/AboutSection.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                lineNumber: 27,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 26,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-md-6 col-sm-6 masonry-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wt-media m-b20 img-reflection",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/about/l-2.jpg",
                                                    alt: "About"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/AboutSection.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                lineNumber: 40,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 39,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-md-6 col-sm-6 masonry-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wt-media m-b20 img-reflection",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/about/l-1.jpg",
                                                    alt: "About"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/AboutSection.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                lineNumber: 46,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 45,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "col-md-6 col-sm-6 masonry-item",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wt-media m-b20 img-reflection",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/about/s-3.jpg",
                                                    alt: "About"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/AboutSection.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 45
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/AboutSection.tsx",
                                                lineNumber: 52,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.tsx",
                                            lineNumber: 51,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/AboutSection.tsx",
                                    lineNumber: 25,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.tsx",
                                lineNumber: 24,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/AboutSection.tsx",
                            lineNumber: 23,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/AboutSection.tsx",
                    lineNumber: 11,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/AboutSection.tsx",
                lineNumber: 10,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/AboutSection.tsx",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/AboutSection.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ProjectsSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-client] (ecmascript) <export default as Pagination>");
'use client';
;
;
;
;
;
;
;
function ProjectsSection() {
    const projects = [
        {
            title: 'Architecture design',
            img: '/images/gallery/pic1.jpg'
        },
        {
            title: 'Interior design',
            img: '/images/gallery/pic2.jpg'
        },
        {
            title: 'Landscap design',
            img: '/images/gallery/pic3.jpg'
        },
        {
            title: 'Floor design',
            img: '/images/gallery/pic4.jpg'
        },
        {
            title: 'Roof top design',
            img: '/images/gallery/pic5.jpg'
        },
        {
            title: 'Decorations',
            img: '/images/gallery/pic6.jpg'
        },
        {
            title: 'Architecture design',
            img: '/images/gallery/pic7.jpg'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b80 bg-secondry",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wt-tilte-main bdr-r-3 bdr-primary bdr-solid text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "wt-small-title",
                                    children: "All Projects"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                    lineNumber: 27,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "m-b5",
                                    children: "Our Latest Projects"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                            lineNumber: 26,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "title-right-detail text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ProjectsSection.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 24,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-content",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "projects-slider-two",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"]
                            ],
                            spaceBetween: 30,
                            slidesPerView: 1,
                            navigation: true,
                            breakpoints: {
                                640: {
                                    slidesPerView: 2
                                },
                                1024: {
                                    slidesPerView: 3
                                },
                                1280: {
                                    slidesPerView: 4
                                }
                            },
                            className: "projects-carousel-two",
                            children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "projects-two-info text-white",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "wt-tilte m-t0",
                                                    "data-title": `0${index + 1}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/projects",
                                                        className: "text-white",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 104
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "wt-media img-reflection",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: project.img,
                                                        alt: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                        lineNumber: 57,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                                            lineNumber: 53,
                                            columnNumber: 41
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                                        lineNumber: 52,
                                        columnNumber: 37
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ProjectsSection.tsx",
                            lineNumber: 38,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection.tsx",
                        lineNumber: 37,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ProjectsSection.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/ProjectsSection.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ProjectsSection.tsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
}
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/ServicesSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function ServicesSection() {
    const services = [
        {
            id: 'A',
            title: 'Architecture design',
            icon: 'flaticon-mansion'
        },
        {
            id: 'S',
            title: 'smart Interior design',
            icon: 'flaticon-stair'
        },
        {
            id: 'R',
            title: 'Residential design',
            icon: 'flaticon-apartment'
        },
        {
            id: 'L',
            title: 'landscape design',
            icon: 'flaticon-photo'
        },
        {
            id: 'P',
            title: 'Plans and Projects',
            icon: 'flaticon-sketch'
        },
        {
            id: 'K',
            title: 'Kitchen design',
            icon: 'flaticon-kitchen'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b50 bg-gray",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wt-tilte-main bdr-r-3 bdr-primary bdr-solid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "wt-small-title",
                                    children: "Work service"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ServicesSection.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "m-b5",
                                    children: "Our great provided"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ServicesSection.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ServicesSection.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "title-right-detail",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ServicesSection.tsx",
                            lineNumber: 24,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ServicesSection.tsx",
                    lineNumber: 19,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-4 col-md-6 col-sm-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wt-icon-box-wraper m-b30 p-lr30 p-tb25 data-title-large v-icon-effect block-bg-hover bg-white",
                                "data-title": service.id,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-content m-b30",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "wt-tilte-large m-t0",
                                                "data-title": service.id,
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: "Lorem Ipsum is simply dummy text of the printing and type."
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                                lineNumber: 34,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "site-button-link",
                                                children: "Read More"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                                lineNumber: 35,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/ServicesSection.tsx",
                                        lineNumber: 32,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "icon-xl inline-icon",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "icon-cell",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: `${service.icon} v-icon`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                                lineNumber: 38,
                                                columnNumber: 65
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ServicesSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/ServicesSection.tsx",
                                        lineNumber: 37,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/ServicesSection.tsx",
                                lineNumber: 31,
                                columnNumber: 29
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/sections/ServicesSection.tsx",
                            lineNumber: 30,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/ServicesSection.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ServicesSection.tsx",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ServicesSection.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_c = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/BlogSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function BlogSection() {
    const blogs = [
        {
            date: '25',
            month: 'Aug 2026',
            author: 'Admin',
            comments: 5,
            title: 'Never mess with a Man',
            text: 'There are many variations of passages of Lorem Ipsum available.'
        },
        {
            date: '30',
            month: 'Aug 2026',
            author: 'Admin',
            comments: 5,
            title: 'Never mess with a Man',
            text: 'There are many variations of passages of Lorem Ipsum available.'
        },
        {
            date: '05',
            month: 'Sep 2026',
            author: 'Admin',
            comments: 5,
            title: 'Never mess with a Man',
            text: 'There are many variations of passages of Lorem Ipsum available.'
        },
        {
            date: '22',
            month: 'Aug 2026',
            author: 'Admin',
            comments: 5,
            title: 'Never mess with a Man',
            text: 'There are many variations of passages of Lorem Ipsum available.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b50 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wt-tilte-main bdr-r-3 bdr-primary bdr-solid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "wt-small-title",
                                    children: "Blog Section"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                    lineNumber: 19,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "m-b5",
                                    children: "Our Latest Blog"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                    lineNumber: 20,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/BlogSection.tsx",
                            lineNumber: 18,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "title-right-detail",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/BlogSection.tsx",
                                lineNumber: 23,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/BlogSection.tsx",
                            lineNumber: 22,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/BlogSection.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row equal-wraper",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6 col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "latest-blog-3-pattern",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "blog-post latest-blog-3 overlay-wraper post-overlay large-date bg-cover bg-no-repeat bg-top-center",
                                    style: {
                                        backgroundImage: 'url(/images/blog/large-blog.jpg)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overlay-main opacity-05 bg-black"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wt-post-info p-a30 text-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "post-overlay-position",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "post-content-outer bdr-l-8 bdr-solid bdr-primary p-a15",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "wt-post-meta",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "post-date",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                    children: "26"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 37,
                                                                                    columnNumber: 79
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: "Aug 2025"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 37,
                                                                                    columnNumber: 98
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 37,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "post-author",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fa-regular fa-user"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 38,
                                                                                    columnNumber: 81
                                                                                }, this),
                                                                                "By ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/blog",
                                                                                    children: "Admin"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 38,
                                                                                    columnNumber: 122
                                                                                }, this),
                                                                                " "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 38,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: "post-comment",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                    className: "fa-regular fa-comments"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 39,
                                                                                    columnNumber: 82
                                                                                }, this),
                                                                                " ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                    href: "/blog",
                                                                                    children: "2 comment"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 39,
                                                                                    columnNumber: 125
                                                                                }, this),
                                                                                " "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 39,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "wt-post-title",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "post-title",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/blog",
                                                                        className: "text-white text-capitalize",
                                                                        children: "Hampden-Sydney College in Virginia, looked up one of the more obscure latin words"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 43,
                                                                        columnNumber: 76
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 43,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                                lineNumber: 42,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "wt-post-readmore",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: "/blog",
                                                                    className: "site-button-link white",
                                                                    children: "Read More"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 46,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                        lineNumber: 34,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "blog-social-icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "social-tooltips-outer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://www.pinterest.com",
                                                                        className: "fa-brands fa-pinterest-p",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "social-tooltips",
                                                                            children: "Pinterest"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 51,
                                                                            columnNumber: 159
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 51,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 51,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://web.whatsapp.com/",
                                                                        className: "fa-brands fa-whatsapp",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "social-tooltips",
                                                                            children: "Whatsapp"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 52,
                                                                            columnNumber: 156
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 52,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 52,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://www.facebook.com/",
                                                                        className: "fa-brands fa-facebook-f",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "social-tooltips",
                                                                            children: "Facebook"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 53,
                                                                            columnNumber: 158
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 53,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 53,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://x.com/",
                                                                        className: "fa-brands fa-x-twitter",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "social-tooltips",
                                                                            children: "Twitter"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 54,
                                                                            columnNumber: 146
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 54,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 54,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "https://www.linkedin.com/",
                                                                        className: "fa-brands fa-linkedin-in",
                                                                        target: "_blank",
                                                                        rel: "noreferrer",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "social-tooltips",
                                                                            children: "Linkedin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 55,
                                                                            columnNumber: 159
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                                        lineNumber: 55,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                            lineNumber: 50,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                lineNumber: 33,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                            lineNumber: 32,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                    lineNumber: 30,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/BlogSection.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/BlogSection.tsx",
                            lineNumber: 28,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-xl-6 col-lg-6 col-md-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row latest-blog-2-outer m-t30",
                                children: blogs.map((blog, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-6 col-md-6 col-sm-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "blog-post latest-blog-2 mid-size-date bdr-1 bdr-solid bdr-gray p-a20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "wt-post-info",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "wt-post-meta",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "post-date",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: [
                                                                                blog.date,
                                                                                " "
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 73,
                                                                            columnNumber: 79
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: blog.month
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 73,
                                                                            columnNumber: 109
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 73,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "post-author",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-regular fa-user"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 81
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/blog",
                                                                            children: [
                                                                                "By ",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: blog.author
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                                    lineNumber: 74,
                                                                                    columnNumber: 141
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 74,
                                                                            columnNumber: 119
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 74,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "post-comment",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: "fa-regular fa-comments"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 82
                                                                        }, this),
                                                                        " ",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: "/blog",
                                                                            children: [
                                                                                blog.comments,
                                                                                " Comment"
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                                            lineNumber: 75,
                                                                            columnNumber: 125
                                                                        }, this),
                                                                        " "
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/BlogSection.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "wt-post-title",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "post-title",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: "/blog",
                                                                children: blog.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 76
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                            lineNumber: 79,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "wt-post-text",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: blog.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                                            lineNumber: 82,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/BlogSection.tsx",
                                                lineNumber: 70,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/BlogSection.tsx",
                                            lineNumber: 69,
                                            columnNumber: 37
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/components/sections/BlogSection.tsx",
                                        lineNumber: 68,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/sections/BlogSection.tsx",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/BlogSection.tsx",
                            lineNumber: 65,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/BlogSection.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/BlogSection.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/BlogSection.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
_c = BlogSection;
var _c;
__turbopack_context__.k.register(_c, "BlogSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/free-mode.mjs [app-client] (ecmascript) <export default as FreeMode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/thumbs.mjs [app-client] (ecmascript) <export default as Thumbs>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function Testimonials() {
    _s();
    const [thumbsSwiper, setThumbsSwiper] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const testimonials = [
        {
            name: 'Poul Anderson',
            position: 'Architect',
            img: '/images/testimonials/pic1.jpg',
            text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.'
        },
        {
            name: 'Poul Anderson',
            position: 'Architect',
            img: '/images/testimonials/pic2.jpg',
            text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.'
        },
        {
            name: 'Poul Anderson',
            position: 'Architect',
            img: '/images/testimonials/pic3.jpg',
            text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.'
        },
        {
            name: 'Poul Anderson',
            position: 'Architect',
            img: '/images/testimonials/pic4.jpg',
            text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.'
        },
        {
            name: 'Poul Anderson',
            position: 'Architect',
            img: '/images/testimonials/pic5.jpg',
            text: '“Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-tb80 testimonial-slider-outer bg-white bg-cover bg-left-center",
        style: {
            backgroundImage: 'url(/images/background/bg-1.jpg)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wt-tilte-main bdr-r-3 bdr-primary bdr-solid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "wt-small-title",
                                    children: "Best Clients"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "m-b5",
                                    children: "Our Client says"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                    lineNumber: 29,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/Testimonials.tsx",
                            lineNumber: 27,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "title-right-detail",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/Testimonials.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Testimonials.tsx",
                            lineNumber: 31,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Testimonials.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "testimonial-slider",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            spaceBetween: 10,
                            navigation: true,
                            thumbs: {
                                swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
                            },
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"]
                            ],
                            className: "owl-theme",
                            children: testimonials.map((test, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "testimonial-slider-content clearfix",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "testimonial-1 clearfix",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimonial-text",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-paragraph",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "quote-left"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                                                        lineNumber: 51,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        children: test.text
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                                                        lineNumber: 52,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                                lineNumber: 50,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-detail",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "testimonial-name m-b5",
                                                                    children: test.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                                                    lineNumber: 55,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "testimonial-detail",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "testimonial-position",
                                                                    children: test.position
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                                                    lineNumber: 58,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                                lineNumber: 57,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "testimonial-pic-block",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "testimonial-pic",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: test.img,
                                                                alt: test.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                                lineNumber: 63,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/Testimonials.tsx",
                                                            lineNumber: 62,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                lineNumber: 48,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Testimonials.tsx",
                                            lineNumber: 47,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                        lineNumber: 46,
                                        columnNumber: 33
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                    lineNumber: 45,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Testimonials.tsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                            onSwiper: setThumbsSwiper,
                            spaceBetween: 10,
                            slidesPerView: 5,
                            freeMode: true,
                            watchSlidesProgress: true,
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$free$2d$mode$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FreeMode$3e$__["FreeMode"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$thumbs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thumbs$3e$__["Thumbs"]
                            ],
                            className: "testimonial-1-thumb",
                            style: {
                                marginTop: '20px'
                            },
                            children: [
                                1,
                                2,
                                3,
                                4,
                                5
                            ].map((num, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "item",
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wt-media",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: `/images/testimonials/small/${num}.jpg`,
                                                alt: `Thumbnail ${num}`
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/Testimonials.tsx",
                                                lineNumber: 87,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/Testimonials.tsx",
                                            lineNumber: 86,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/Testimonials.tsx",
                                        lineNumber: 85,
                                        columnNumber: 33
                                    }, this)
                                }, idx, false, {
                                    fileName: "[project]/components/sections/Testimonials.tsx",
                                    lineNumber: 84,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/Testimonials.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/Testimonials.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/Testimonials.tsx",
            lineNumber: 25,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/Testimonials.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(Testimonials, "1Z+6QtiyskARjDnvU2QN05OOC/c=");
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/TeamSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TeamSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TeamSection() {
    const team = [
        {
            name: 'Taminm Alows',
            position: 'Architect',
            img: '/images/our-team1/pic1.jpg'
        },
        {
            name: 'Michael Evens',
            position: 'Architect',
            img: '/images/our-team1/pic2.jpg'
        },
        {
            name: 'Pamela Smith',
            position: 'Architect',
            img: '/images/our-team1/pic3.jpg'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b50 bg-white our-team-two",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-head clearfix",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wt-tilte-main bdr-r-3 bdr-primary bdr-solid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    className: "wt-small-title",
                                    children: "Our Experts"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                    lineNumber: 17,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "m-b5",
                                    children: "Our Best Team"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                    lineNumber: 18,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/TeamSection.tsx",
                            lineNumber: 16,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "title-right-detail",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "We are uncompetitor in architectural solutions Friendly neighbour there that power. Keep away Architecture who try to Ambitions people do that really great."
                            }, void 0, false, {
                                fileName: "[project]/components/sections/TeamSection.tsx",
                                lineNumber: 21,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/TeamSection.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/TeamSection.tsx",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "section-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: team.map((member, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-4 col-md-6 col-sm-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wt-team-arc2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wt-media",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: member.img,
                                                    alt: member.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "team-social-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "team-social-icon",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://www.pinterest.com",
                                                                    className: "fa-brands fa-pinterest-p",
                                                                    target: "_blank",
                                                                    rel: "noreferrer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                                    lineNumber: 34,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                                lineNumber: 34,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://web.whatsapp.com",
                                                                    className: "fa-brands fa-whatsapp",
                                                                    target: "_blank",
                                                                    rel: "noreferrer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                                    lineNumber: 35,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                                lineNumber: 35,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://www.facebook.com",
                                                                    className: "fa-brands fa-facebook-f",
                                                                    target: "_blank",
                                                                    rel: "noreferrer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                                    lineNumber: 36,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://x.com",
                                                                    className: "fa-brands fa-x-twitter",
                                                                    target: "_blank",
                                                                    rel: "noreferrer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                                    lineNumber: 37,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: "https://www.linkedin.com",
                                                                    className: "fa-brands fa-linkedin-in",
                                                                    target: "_blank",
                                                                    rel: "noreferrer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                                    lineNumber: 38,
                                                                    columnNumber: 53
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                                lineNumber: 38,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/sections/TeamSection.tsx",
                                                        lineNumber: 33,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/TeamSection.tsx",
                                            lineNumber: 30,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wt-info bg-white p-a30",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "team-detail text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "m-t0",
                                                        children: member.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/TeamSection.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: member.position
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/TeamSection.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/TeamSection.tsx",
                                                lineNumber: 44,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/TeamSection.tsx",
                                            lineNumber: 43,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/TeamSection.tsx",
                                    lineNumber: 29,
                                    columnNumber: 33
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/components/sections/TeamSection.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/TeamSection.tsx",
                        lineNumber: 26,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/TeamSection.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/TeamSection.tsx",
            lineNumber: 14,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/TeamSection.tsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = TeamSection;
var _c;
__turbopack_context__.k.register(_c, "TeamSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sections/PartnerSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PartnerSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
function PartnerSection() {
    const partners = [
        '/images/client-logo/w1.png',
        '/images/client-logo/w2.png',
        '/images/client-logo/w3.png',
        '/images/client-logo/w4.png',
        '/images/client-logo/w5.png',
        '/images/client-logo/w6.png',
        '/images/client-logo/w1.png',
        '/images/client-logo/w2.png'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b50 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-content client-logo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "row justify-content-center",
                    children: partners.map((logo, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-6 col-sm-4 col-md-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "#",
                                className: "wt-img-effect client-logo-media shadow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: logo,
                                    alt: `Client logo ${idx}`
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PartnerSection.tsx",
                                    lineNumber: 26,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PartnerSection.tsx",
                                lineNumber: 25,
                                columnNumber: 33
                            }, this)
                        }, idx, false, {
                            fileName: "[project]/components/sections/PartnerSection.tsx",
                            lineNumber: 24,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/PartnerSection.tsx",
                    lineNumber: 22,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/PartnerSection.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/sections/PartnerSection.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/PartnerSection.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_c = PartnerSection;
var _c;
__turbopack_context__.k.register(_c, "PartnerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_sections_4015e7d3._.js.map