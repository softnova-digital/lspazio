
'use client';

import React, { useEffect, useState } from 'react';

declare global {
    interface Window {
        initRevSlider: () => void;
    }
}

export default function Hero() {
    const [mountKey, setMountKey] = useState<number>(0);

    // Effect 1: Trigger the strict pristine DOM render
    useEffect(() => {
        setMountKey(Math.random());
    }, []);

    // Effect 2: Initialize the slider only when the pristine DOM is ready
    useEffect(() => {
        if (mountKey === 0) return;

        let timer: NodeJS.Timeout;

        const tryInit = () => {
            if (typeof window.initRevSlider === 'function') {
                window.initRevSlider();
            } else {
                timer = setTimeout(tryInit, 100);
            }
        };

        tryInit();

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [mountKey]);

    return (
        <div
            key={mountKey}
            className="slider-section"
            dangerouslySetInnerHTML={{
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
            ` }}
        />
    );
}
