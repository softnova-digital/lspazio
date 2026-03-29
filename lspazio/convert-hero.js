const fs = require('fs');

const htmlContent = fs.readFileSync('../archmvz-architecture-interior-2026-01-06-09-56-51-utc/html/index.html', 'utf8');

// Extract slider section
const startIndex = htmlContent.indexOf('<div id="welcome_wrapper"');
const endIndex = htmlContent.indexOf('<!--SLIDER-SOCIAL-RIGHT END-->');

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find slider boundaries.");
    process.exit(1);
}

// Get the raw HTML
let sliderHtml = htmlContent.substring(startIndex, endIndex + '<!--SLIDER-SOCIAL-RIGHT END-->'.length);

// Escape backticks and standard JSX conversions
sliderHtml = sliderHtml.replace(/`/g, '\\`');

const jsxContent = `
'use client';

import React, { useEffect } from 'react';

export default function Hero() {
    // The JavaScript tags in layout.tsx will load the necessary plugins
    // the rev-script-1.js is loaded with defer and will auto-initialize 
    // the slider once the DOM is ready.
    
    // We use dangerouslySetInnerHTML to perfectly preserve all the custom 
    // string-based style attributes and nested tags exactly as the 
    // Revolution Slider jQuery plugin expects them, avoiding React hydration
    // or string-style parsing errors.
    
    return (
        <div 
            className="slider-section" 
            dangerouslySetInnerHTML={{ __html: \`
                ${sliderHtml}
            \` }} 
        />
    );
}
`;

fs.writeFileSync('./components/sections/Hero.tsx', jsxContent);
console.log("Hero.tsx successfully regenerated with exact HTML template.");
