(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/sections/ProjectsGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const categories = [
    {
        filter: '*',
        label: 'All'
    },
    {
        filter: 'cat-1',
        label: 'House'
    },
    {
        filter: 'cat-2',
        label: 'Building'
    },
    {
        filter: 'cat-3',
        label: 'Office'
    },
    {
        filter: 'cat-4',
        label: 'Garden'
    },
    {
        filter: 'cat-5',
        label: 'Interior'
    }
];
const projects = [
    {
        id: 1,
        img: '/images/gallery/pic1.jpg',
        title: 'House',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-1'
    },
    {
        id: 2,
        img: '/images/gallery/pic2.jpg',
        title: 'Building',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-2'
    },
    {
        id: 3,
        img: '/images/gallery/pic3.jpg',
        title: 'Office',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-3'
    },
    {
        id: 4,
        img: '/images/gallery/pic4.jpg',
        title: 'Garden',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-4'
    },
    {
        id: 5,
        img: '/images/gallery/pic5.jpg',
        title: 'Interior',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-5'
    },
    {
        id: 6,
        img: '/images/gallery/pic6.jpg',
        title: 'Home',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-4'
    },
    {
        id: 7,
        img: '/images/gallery/pic7.jpg',
        title: 'Building',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-3'
    },
    {
        id: 8,
        img: '/images/gallery/pic8.jpg',
        title: 'Bathroom',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-2'
    },
    {
        id: 9,
        img: '/images/gallery/pic9.jpg',
        title: 'Appartment',
        desc: 'Which is worse, that everyone has his price, or that the price is always so low.',
        category: 'cat-1'
    }
];
function ProjectsGrid() {
    _s();
    const [activeFilter, setActiveFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('*');
    const filteredProjects = activeFilter === '*' ? projects : projects.filter((project)=>project.category === activeFilter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "section-full p-t80 p-b50 bg-gray",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "filter-wrap p-b30",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "masonry-filter link-style text-uppercase d-flex justify-content-center p-0",
                        style: {
                            listStyle: 'none',
                            margin: 0
                        },
                        children: categories.map((cat, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: activeFilter === cat.filter ? 'active' : '',
                                style: {
                                    margin: '0 10px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    onClick: (e)=>{
                                        e.preventDefault();
                                        setActiveFilter(cat.filter);
                                    },
                                    className: activeFilter === cat.filter ? 'text-primary' : 'text-dark',
                                    style: {
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        padding: '5px 10px',
                                        display: 'inline-block'
                                    },
                                    children: cat.label
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                    lineNumber: 43,
                                    columnNumber: 33
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                lineNumber: 42,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsGrid.tsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    layout: true,
                    className: "row",
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: filteredProjects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                layout: true,
                                initial: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 0.9
                                },
                                transition: {
                                    duration: 0.3
                                },
                                className: "col-lg-4 col-md-6 col-sm-12 m-b30",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "project-img-effect-1",
                                    style: {
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: project.img,
                                            alt: project.title,
                                            className: "img-fluid w-100"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                            lineNumber: 71,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wt-info",
                                            style: {
                                                position: 'absolute',
                                                bottom: '20px',
                                                left: '20px',
                                                right: '20px',
                                                zIndex: 2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "wt-tilte text-white m-b10 m-t0",
                                                    children: project.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white mb-0",
                                                    children: project.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                                    lineNumber: 74,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                backgroundColor: 'rgba(0,0,0,0.5)',
                                                zIndex: 1,
                                                opacity: 0,
                                                transition: '0.3s'
                                            },
                                            className: "overlay-bg-hover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                            lineNumber: 76,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/project-detail",
                                            style: {
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                zIndex: 3
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                            lineNumber: 77,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                    lineNumber: 70,
                                    columnNumber: 33
                                }, this)
                            }, project.id, false, {
                                fileName: "[project]/components/sections/ProjectsGrid.tsx",
                                lineNumber: 61,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsGrid.tsx",
                        lineNumber: 59,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ProjectsGrid.tsx",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ProjectsGrid.tsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ProjectsGrid.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(ProjectsGrid, "at/ilYWDGbCZzNDpWYC4AGpauRA=");
_c = ProjectsGrid;
var _c;
__turbopack_context__.k.register(_c, "ProjectsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_sections_ProjectsGrid_tsx_06eca996._.js.map