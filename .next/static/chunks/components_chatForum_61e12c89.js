(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_chatForum_61e12c89.js", {

"[project]/components/chatForum.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// import { useUser } from '@clerk/nextjs';
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Chat$2f$hooks$2f$useCreateChatClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/Chat/hooks/useCreateChatClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Chat$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/Chat/Chat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Channel$2f$Channel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/Channel/Channel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$ChannelHeader$2f$ChannelHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/ChannelHeader/ChannelHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$MessageInput$2f$MessageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/MessageInput/MessageInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$MessageList$2f$MessageList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/MessageList/MessageList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Thread$2f$Thread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/Thread/Thread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Window$2f$Window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/stream-chat-react/dist/components/Window/Window.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ChatForum = ({ clerkUser, slug })=>{
    _s();
    const apiKey = 'qcv4vtkd8rj5';
    const userId = clerkUser.id;
    const userName = clerkUser.name;
    const userToken = clerkUser.token;
    const user = {
        id: userId,
        name: userName,
        image: `https://getstream.io/random_png/?name=${userName}`
    };
    const [channel, setChannel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Chat$2f$hooks$2f$useCreateChatClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateChatClient"])({
        apiKey,
        tokenOrProvider: userToken,
        userData: user
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatForum.useEffect": ()=>{
            if (!client) return;
            const channel = client.channel('messaging', slug, {
                image: 'https://getstream.io/random_png/?name=react',
                name: slug.toUpperCase() + " Discussion",
                members: [
                    userId
                ]
            });
            setChannel(channel);
        }
    }["ChatForum.useEffect"], [
        client
    ]);
    if (!client) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: "Setting up client & connection..."
    }, void 0, false, {
        fileName: "[project]/components/chatForum.js",
        lineNumber: 40,
        columnNumber: 23
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Chat$2f$Chat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chat"], {
        client: client,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Channel$2f$Channel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Channel"], {
            channel: channel,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Window$2f$Window$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Window"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$ChannelHeader$2f$ChannelHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChannelHeader"], {}, void 0, false, {
                            fileName: "[project]/components/chatForum.js",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$MessageList$2f$MessageList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageList"], {}, void 0, false, {
                            fileName: "[project]/components/chatForum.js",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$MessageInput$2f$MessageInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageInput"], {}, void 0, false, {
                            fileName: "[project]/components/chatForum.js",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/chatForum.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Thread$2f$Thread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thread"], {}, void 0, false, {
                    fileName: "[project]/components/chatForum.js",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/chatForum.js",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/chatForum.js",
        lineNumber: 43,
        columnNumber: 5
    }, this);
};
_s(ChatForum, "AbDboHgldMtsl8kmk6ebf0WGM9s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$stream$2d$chat$2d$react$2f$dist$2f$components$2f$Chat$2f$hooks$2f$useCreateChatClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateChatClient"]
    ];
});
_c = ChatForum;
const __TURBOPACK__default__export__ = ChatForum;
var _c;
__turbopack_context__.k.register(_c, "ChatForum");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_chatForum_61e12c89.js.map