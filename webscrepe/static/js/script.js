// (() => {
//   var ir = Object.create;
//   var ke = Object.defineProperty;
//   var sr = Object.getOwnPropertyDescriptor;
//   var ar = Object.getOwnPropertyNames;
//   var rr = Object.getPrototypeOf,
//     or = Object.prototype.hasOwnProperty;
//   var z = (m, t) => () => (m && (t = m(m = 0)), t);
//   var Ie = (m, t) => () => (t || m((t = {
//     exports: {}
//   }).exports, t), t.exports),
//     Z = (m, t) => {
//       for (var e in t) ke(m, e, {
//         get: t[e],
//         enumerable: !0
//       })
//     },
//     nr = (m, t, e, i) => {
//       if (t && typeof t == "object" || typeof t == "function")
//         for (let s of ar(t)) !or.call(m, s) && s !== e && ke(m, s, {
//           get: () => t[s],
//           enumerable: !(i = sr(t, s)) || i.enumerable
//         });
//       return m
//     };
//   var Se = (m, t, e) => (e = m != null ? ir(rr(m)) : {}, nr(t || !m || !m.__esModule ? ke(e, "default", {
//     value: m,
//     enumerable: !0
//   }) : e, m));
//   var N, T = z(() => {
//     N = {
//       library: "",
//       cli: "76ddc409bc134b4d80fbcee83380d4c99a950f6b",
//       widgetBuilder: "4e56fb54"
//     }
//   });
//   var V, B = z(() => {
//     V = {
//       "0": {
//         GENERAL: {
//           translations: {
//             "[GO]": "GO",
//             "[INFORMER_BACK_BUTTON_BANNER_TEXT]": "More stories to check out before you go",
//             "[INFORMER_BTN_DISCOVER_MORE]": "Discover More",
//             "[INFORMER_BUTTON_MORE]": "More",
//             "[INFORMER_CLOSE_AD_BUTTON]": "Close Ad",
//             "[INFORMER_CTA_LEARN_MORE]": "Read more",
//             "[INFORMER_DSA_ICON_TITLE]": "Widget Context Menu",
//             "[INFORMER_NEXT_UP_TITLE_TRANDING]": "Trending",
//             "[INFORMER_OPEN_BUTTON]": "Open",
//             "[INFORMER_READ_FULL_ARTICLE]": "Read Full Article",
//             "[INFORMER_RECOMMENDED_FOR_YOU]": "Recommended for you",
//             "[INFORMER_VIDEO_CLICK_TEXT]": "Learn more",
//             "[LS_CAB_SITE_BLOCK_ANTIFRAUD_SUBJECT_V2]": "Your website %s has been blocked (%s)",
//             "[LS_INFORMERS_CLOSE_BUTTON]": "Close",
//             "[LS_INFORMERS_MOBILEMODAL_GO]": "Go",
//             "[LS_INFORMERS_WIDGET_MOBILE_CONTINUE]": "Continue",
//             "[WIDGET_TITLE_CHECK_THIS_OUT]": "Check This Out",
//             "[WIDGET_TITLE_INTERESTING]": "Interesting in network",
//             "[WIDGET_TITLE_INTERESTING_FOR_YOU]": "Interesting For You",
//             "[WIDGET_TITLE_MORE_COOL_STUFF]": "More Cool Stuff",
//             "[WIDGET_TITLE_MORE_FROM_AROUND_THE_WEB]": "More From Around The Web",
//             "[WIDGET_TITLE_NONE]": "",
//             "[WIDGET_TITLE_PARTNERS_NEWS]": "Partner News",
//             "[WIDGET_TITLE_POPULAR]": "Popular in network",
//             "[WIDGET_TITLE_PROMOTED_CONTENT]": "Promoted Content",
//             "[WIDGET_TITLE_SMI]": "In other media",
//             "[WIDGET_TITLE_SPONSORED_CONTENT]": "Sponsored Content",
//             "[WIDGET_TITLE_SUGGESTED_NEWS]": "Suggested News",
//             "[WIDGET_TITLE_YOU_MAY_LIKE]": "You may like"
//           },
//           forbiddenPatterns: ["make cl[i1!]ck", "(cl[i!1]ck|cl[i!1]que|kl[i!1]kone|shtyp|kl[i!1]k|kl[i!1]kn[i!1]\u0435e) ((on|[i!1]n the) )?(h[e3]re|me|please|ads|to|en cualqu[i!1]er anunc[i!1]o|qu\u1EA3ng c\xE1o|na [i!1]megen|nje nga reklamat|no an\xFAnc[i!1]o|reklamen|em alguma propaganda|[i!1]klan atan|below banner)", "pres[i1!]ona \u0441ualqu[i1!]er [i1!]magen", "toca la pr[i1!]mera [i1!]magen ", "(cl[i!1]ck|cl[i!1]que|kl[i!1]kone|shtyp|kl[i!1]k|kl[i!1]kn[i!1]\u0435e) ((on|[i!1]n the) )?([i!1]zpod)", "adclick", "criteo.com", "cdn.geozo.com", "taboola", "trck.tracking505.com"]
//         },
//         METADATA: {
//           hashCommitsData: {
//             library: "",
//             cli: "76ddc409bc134b4d80fbcee83380d4c99a950f6b",
//             widgetBuilder: "4e56fb54"
//           },
//           compileTimestamp: 1739371452
//         },
//         ASSETS: {
//           customAdLinkConfig: {},
//           adLinkBlock: {
//             adskeeper: `<div class="mgheader"><span class="mghead">%WIDGET_TITLE%</span><div class="mg_addad%id"><a href="//widgets.adskeeper.com/%utm%id" target="_blank"><img src="//cdn.adskeeper.co.uk/images/adskeeper_svg.svg" width="71" height="16" alt /></a></div></div><style>.mghead {line-height: 20px;vertical-align: middle;font-weight: 700;font-size: 14px;text-transform: uppercase;text-align: left;font-family: Verdana, sans-serif;color: #4555a7;display: block;margin: 0 0 0px 5px;float: left;}.mgheader {display: table !Important;width: 100% !important;}div.mg_addad%id {text-align: right;opacity: 0.5;margin-right: 10px;display: inline-block;float: right;}div.mg_addad%id:hover {opacity: 1}div.mg_addad%id a {color: #000000;font: normal 10px Myriad Pro;text-decoration: none;}div.mg_addad%id img {margin: 0px -5px 0px 0px;border: 0px;float: none;padding: 0px;}</style>`
//           },
//           scaleInfoHtml: `<!doctype html><html><head><meta charset="utf-8"><style>html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code,del, dfn, em, img, ins, kbd, q, s, samp,small, strike, strong, sub, sup, tt, var,b, u, i, center,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, canvas, details, embed,figure, figcaption, footer, header, hgroup,menu, nav, output, ruby, section, summary,time, mark, audio, video {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}/* HTML5 display-role reset for older browsers */article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section {display: block;}body {line-height: 1;}ol, ul {list-style: none;}blockquote, q {quotes: none;}blockquote:before, blockquote:after,q:before, q:after {content: '';content: none;}table {border-collapse: collapse;border-spacing: 0;}</style></head><body><div id="test">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolor impedit nobis quo ratione temporibus. Accusantium adipisci animi cupiditate eligendi hic modi officiis perspiciatis provident tenetur, vero voluptate voluptatem.</div><script>window.addEventListener('load', function() {if (window.innerWidth !== 0) {window.parent.postMessage({id: 'scaleInfo',scale_metric_1: document.getElementById('test').offsetHeight,scale_metric_2: (window.outerWidth / window.innerWidth) * 100,scale_metric_3: (window.parent.outerWidth / window.parent.innerWidth) * 100,},'*');}});<\/script></body></html>`
//         },
//         WIDGET: {
//           debug: !1,
//           iframe: "",
//           changeIframeSize: !1,
//           widgetClickZones: "[]",
//           widgetReplica: !1,
//           activateDelay: 2e3,
//           clickableDelay: 0,
//           sendDimensions: !0,
//           _constructor: '{"cols":"1","font":"arial","kind":"wages","rows":"1","type":"in-article","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"theme":"#000000","width":0,"button":1,"mcdesc":{"styles":{"font":"verdana","color":"#666666","display":"none","fontSize":11,"fontStyle":"normal","textAlign":"left","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"width":"200","height":"250","margin":"7","borderColor":"#e9e9e9","borderStyle":"solid","borderWidth":1,"borderRadius":"8"}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":492,"size-height":"328"},"mcprice":{"show":"true","styles":{"font":"verdana","color":"#2a3a7b","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":"#ffffff"}},"mctitle":{"styles":{"color":"#ffffff","fontSize":16,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","text-transform":"uppercase","textDecoration":"none"}},"subType":"in-article-card-media","mcdomain":{"styles":{"font":"arial","color":"#7f7f7f","display":"block","fontSize":"13","fontStyle":"normal","textAlign":"left","fontWeight":"normal","textDecoration":"none"}},"isToaster":1,"colsMobile":1,"isDragDown":1,"imageFormat":19,"imageShadow":"","textPosition":"right","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"widgetFormatId":9,"passageFrequency":60,"teaserCardShadow":"0","teaserFixedWidth":"0","imageScaleOnHover":"","interstitialAfter":3,"is_show_ad_marker":0,"frequencyOfDisplay":"30","widgetTitleSettings":{"styles":{"font":"arial","color":"#2b397b","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"notificationPosition":"top","toasterInactivityTime":8,"widgetTypeDescription":1,"activateAdsAfterScroll":"0.00"}',
//           subType: "in-article-card-media",
//           widgetIframeAutoSize: "",
//           globalSettings: '{"capping_observer_threshold":"0.5","current_language":"en","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10","ia_page_view_timeout":"180","ia_page_imp_timeout":"180","widget_intentiq_refresh_millis":"43200000","retention_tool_widget_utm":"utm_mgid_push","except_ads_limit":"150","capping_observer_time":"","widget_consent_wait_time_ms":"30","widget_consent_outdated_time":"168"}',
//           widgetAccidentalClicks: "wages",
//           afShortEnabled: !0,
//           loggerEnabled: !1,
//           enableSource: !1,
//           hasNewsPart: !1,
//           newsPartUid: 0,
//           hasGoodsPart: !0,
//           checkAnura: !1,
//           anuraValue: 0,
//           disableCookies: !1,
//           adLink: 1,
//           adLinkHref: "",
//           adBlockChangeStyles: !0,
//           widgetTitle: "[WIDGET_TITLE_PROMOTED_CONTENT]",
//           adblockIntegration: !1,
//           availableLangs: '["es","vi","it","hi","pl","ru","uk"]',
//           useConstructor: !1,
//           popup: !1,
//           type: "in-article",
//           mobileDoubleclickDelay: 0,
//           desktopDoubleclickDelay: 0,
//           markWagesAdInIntExchange: !1,
//           projectName: "adskeeper",
//           newsPartIdPartner: 0,
//           newsPartAcStatsEnabled: !1,
//           newsPartKind: "",
//           widgetUseConstructor: !1,
//           useInNewsRanker: !1,
//           widgetLngId: 7,
//           widgetCountersDisabled: 0,
//           widgetClientSiteId: 973367,
//           autoCreativeCounterDomain: "counter.mgid.com",
//           siteId: 973367,
//           modulePrefix: "AdskeeperC",
//           informerPrefix: "Adskeeper",
//           countersDomain: "c.adskeeper.com",
//           currentSubnet: 2,
//           topMargin: 0,
//           popupText: "One more before you go",
//           cdnDomain: "cdn.adskeeper.com",
//           mobileApp: !1,
//           usePlaceReservation: !0,
//           subnets: '{"2":{"id":2,"informer_prefix":"Adskeeper","mirror":"adskeeper.com","mirrorName":"adskeeper","imageDomain":"adskeeper.com","dashboardDomain":"dashboard.adskeeper.co.uk","utm":"?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=","advSrcId":37100}}',
//           exposeSubnets: !1,
//           childWidgets: "[]",
//           allowMultipleWidgets: !0,
//           widgetMirror: "adskeeper",
//           widgetDomain: "satta-king-fixed-no.in",
//           customFuncBlocks: "[]",
//           widgetAutorefresh: !1,
//           widgetReturnedRefresh: 0,
//           widgetPaginator: !1,
//           imageFormat: 19,
//           elastic: !1,
//           unlimited: !1,
//           doubleclickParameters: "null",
//           dfpWidth: 0,
//           dfpHeight: 0,
//           popupFrequency: 15,
//           elasticPageCount: 2,
//           countNews: 1,
//           blankImage: `data:image/svg+xml,%3Csvg
//             xmlns="http://www.w3.org/2000/svg"
//             width="492" height="328"
//             viewBox="0 0 492 328"
//             %3E%3C/svg%3E`,
//           isResponsive: !1,
//           mobileCountNews: "[]",
//           childFuncBlocks: "[]",
//           childProperties: "[]",
//           customGradient: "",
//           shadowDom: !0,
//           sspPerformancePercentage: 10,
//           templateStyles: ".mgbox {width:100%;max-width:1400px;padding:0;position:relative;margin:0 auto;border:none;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;line-height:100%;box-sizing:border-box;white-space:normal;}.mgline {position:relative;overflow:hidden;border:none;min-width:180px;width:99%;max-width:99%;box-sizing:border-box;margin:10px 0.5%;display:block;padding:0 8px 8px;}.mgline-cover-link {height:calc(100% - 50px);width:100%;display:block;position:absolute;text-decoration:none;cursor:pointer;z-index:99;}.mgline-inner {position:relative;max-width:452px;margin:0 auto;border-radius:10px;transition:box-shadow 0.3s ease;box-shadow:0 2px 4px rgba(0, 0, 0, 0.15);background-color:#ffffff;}.mgline:hover .mgline-inner {box-shadow:3px 3px 8px rgba(0, 0, 0, 0.15);}.mgline:hover .mgimg-block .mgimage {transform:scale(1.2);-ms-transform:scale(1.2);-webkit-transform:scale(1.2);}.mgline:hover .mcmore-link {text-decoration:underline;}.mgline .image-with-text {width:100%;max-width:492px;margin:0 auto;}.mgline .text-elements {width:100%;padding:10px 10px 0;box-sizing:border-box;font-family:Helvetica, sans-serif;}.mgline .text_on_hover {box-sizing:border-box;padding-bottom:52px;}.mgline .mgimg-block {width:100%;overflow:hidden;border:none;border-radius:10px 10px 0 0;transform:translateZ(0);-webkit-transform:translateZ(0);mask-image:-webkit-radial-gradient(circle, #ffffff, #000000);-webkit-mask-image:-webkit-radial-gradient(circle, #ffffff, #000000);}.mgline .mgimg-block a {display:block;}.mgline .mgimg-block .mgimage {width:100% !important;height:auto !important;object-fit:cover;max-width:492px;max-height:328px;display:block;opacity:1 !important;transform:scale(1);-ms-transform:scale(1);-webkit-transform:scale(1);transition:transform 0.6s ease;}.mgline .image-container {position:relative;}img.mcimgad {position:absolute;bottom:0;left:0;z-index:10;}.mctitle {margin-bottom:10px;text-align:left;}.mctitle-link {font-weight:bold;font-size:16px;line-height:16px;font-family:Arial, sans-serif;font-style:normal;text-decoration:none;color:rgba(1, 1, 1, 0.8);-webkit-text-fill-color:rgba(1, 1, 1, 0.8);}.mghead {font-family:Arial, sans-serif;font-weight:700;color:#3f3f3f;}.mcmore {text-align:left;}.mcmore-link {display:inline-block;margin-bottom:5px;color:#3267e8;-webkit-text-fill-color:#3267e8;font-weight:400;font-style:normal;font-size:14px;text-decoration:none;}.mgbottom_media {display:flex;padding:18px 0;box-sizing:border-box;position:absolute;width:90%;left:10px;bottom:0;}.mgbottom_media:after {content:\\'\\';width:100%;height:1px;background:#dfe3e8;position:absolute;left:0;top:0;}.mgbottom_media a {text-decoration:none;}.mgbtn_media {display:flex;align-items:center;justify-content:center;margin-right:3%;}.mgbtn_media path {fill:#8e9298;}.mgbtn_media-like {pointer-events:none;opacity:1;transition:opacity 0.3s ease;}.mgbtn_media-like:hover {opacity:0.7;}.mgmedia__metrics-icon {word-break:normal;display:block;height:15px;width:15px;max-height:15px;max-width:15px;margin-right:5px;}.mgmedia__metrics-value {color:#676767;font-weight:500;line-height:1;font-family:Arial, sans-serif;font-size:14px;}@media (max-width:580px) {.mgline {width:98%;margin:1%;max-width:98%;}}",
//           adBlockTemplateStyles: "",
//           cookieMatchingDomain: "cm.adskeeper.com",
//           widgetTemplate: '<div class="mgbox card-media"><!--advertPrefix-->{foreach}<div class="mgline">{if $banner}{$banner}{/if}{if $teaser}<div class="mgline-inner"><a class="allink mgline-cover-link" {$target}{$href}></a><div class="image-with-text"><div class="mcimg mgimg-block"><a {$target}{$href} ><div class="image-container"><img class="mcimg mgimage" {$src} /></div></a></div><div class="text-elements"><div class="text_on_hover"><div class="mctitle"><a class="mctitle-link" {$target}{$href}>{$title}</a></div><div class="mcmore"><a class="mcmore-link" {$target}{$href}></a></div></div></div></div><div class="mgbottom_media"><div class="mgbtn_media mgbtn_media-like"><svg class="mgmedia__metrics-icon cusel-exception" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path class="cusel-exception" d="M53.333,224C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64c12.011,0,23.061-4.053,32-10.795V224H53.333z" fill="#8e9298"></path></g></g><g><g><path class="cusel-exception" d="M512,304c0-12.821-5.077-24.768-13.888-33.579c9.963-10.901,15.04-25.515,13.653-40.725c-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819,16.981-56.149,16.981-85.333c0-46.272-39.317-85.333-64-85.333c-22.165,0-37.995,12.48-38.677,12.992c-2.517,2.027-3.989,5.099-3.989,8.341v72.341l-61.44,133.099l-2.56,1.301v228.651C188.032,475.584,210.005,480,224,480h195.819c23.232,0,43.563-15.659,48.341-37.269c2.453-11.115,1.024-22.315-3.861-32.043c15.765-7.936,26.368-24.171,26.368-42.688c0-7.552-1.728-14.784-5.013-21.333C501.419,338.731,512,322.496,512,304z" fill="#8e9298"></path></g></g></svg><div class="mgmedia__metrics-value">285</div></div><a class="mgbtn_media mgbtn_media-comment" {$target}{$href}><svg class="mgmedia__metrics-icon cusel-exception" viewBox="0 0 511.096 511.096" xmlns="http://www.w3.org/2000/svg"><g id="Speech_Bubble_48_"><g><path class="cusel-exception" d="m74.414 480.548h-36.214l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-59.127-38.802-88.554-95.014-88.554-153.944 0-108.719 99.923-219.203 256.414-219.203 165.785 0 254.682 101.666 254.682 209.678 0 108.724-89.836 210.322-254.682 210.322-28.877 0-59.01-3.855-85.913-10.928-25.467 26.121-59.973 40.928-96.087 40.928z" fill="#8e9298"></path></g></g></svg><div class="mgmedia__metrics-value">74</div></a><a class="mgbtn_media mgbtn_media-share" {$target}{$href}><svg class="mgmedia__metrics-icon cusel-exception" viewBox="0 -22 512 511" xmlns="http://www.w3.org/2000/svg"><path class="cusel-exception" d="m512 233.820312-212.777344-233.320312v139.203125h-45.238281c-140.273437 0-253.984375 113.710937-253.984375 253.984375v73.769531l20.09375-22.019531c68.316406-74.851562 164.980469-117.5 266.324219-117.5h12.804687v139.203125zm0 0" fill="#8e9298"></path></svg><div class="mgmedia__metrics-value">249</div></a></div></div>{/if}</div>{/foreach}</div>',
//           isLoggerEnabled: !1,
//           titleBreak: 0,
//           titleLimit: 75,
//           informerTitleDotsFlag: 1,
//           disableCaps: 0,
//           descBreak: 0,
//           descLimit: 75,
//           hasVideoPart: !1,
//           noFollow: !0,
//           useDefaultJs: !1,
//           blocksDomainAddressJs: "adskeeper.com",
//           sourceName: "",
//           disableResizeImageAfterLoad: !1,
//           adTypes: "pg,r",
//           enabledCooperationTypes: '["wages"]',
//           createIntExchange: !1,
//           sspSanctionsEnabled: !1,
//           cooperationTypes: '["wages"]',
//           newsPartPagesCount: 0,
//           goodsPartPagesCount: 20,
//           codePaginatorEnabled: !0,
//           adblockTemplate: "",
//           activeChilds: "[]",
//           imageSizeAttributes: 'width="492" height="328"',
//           servicerDomain: "servicer.adskeeper.com",
//           debugInfoOn: !1,
//           useLazyLoad: !0,
//           onTranzPage: !1,
//           widgetEnabled: !0,
//           branchName: "main",
//           autoPlacementStatus: "off",
//           staticRootDomain: "",
//           sendScaleInfo: !0,
//           libraryVersion: "1.11.247",
//           adblockEmulation: !1,
//           autoplacementSelector: "",
//           widgetPerformanceMetric: !1,
//           shadowDomClosed: !1,
//           refreshAdsTime: 45,
//           refreshAdsBy: 0,
//           additionalWidgets: "[]",
//           useApiRefresh: !1,
//           videoCfg: "{}",
//           customWidgetLib: "",
//           spaEnabled: !1,
//           passageFrequency: 60,
//           cookieStoragePrefix: "Adskeeper",
//           useHoneypot: !1,
//           disableCwvOptimization: !1,
//           disableBannerSafeframe: !1,
//           gptEnabled: !1,
//           gptOptions: "{}",
//           gptUnitId: {
//             low: 0,
//             high: 0,
//             unsigned: !1
//           },
//           retentionToolEnabled: !1,
//           collectWidgetReports: !1,
//           ampSpaSupport: !0,
//           backButtonOptions: "null",
//           retentionToolScriptLink: "",
//           retentionToolLoadFromWidgets: !1,
//           immediateRollout: !1,
//           requestsLimitOptions: "{}",
//           id5Enabled: !0,
//           externalAnalytics: "[]",
//           bannersEnabled: !0,
//           originTrialTokens: '[{"name":"X-Requested-With Trial. servicer.adskeeper.com","token":"A1\\/H1ERBHqzkuXenR3VzmZmUjYgLXL2rdHivEDc\\/me3vPiPyTY18biJ+WP1jQOv5n+Bs8z\\/QClTOuJBUst0MEQUAAACEeyJvcmlnaW4iOiJodHRwczovL3NlcnZpY2VyLmFkc2tlZXBlci5jb206NDQzIiwiZmVhdHVyZSI6IldlYlZpZXdYUmVxdWVzdGVkV2l0aERlcHJlY2F0aW9uIiwiZXhwaXJ5IjoxNzE5NTMyNzk5LCJpc1RoaXJkUGFydHkiOnRydWV9","conditions":["webview"]},{"name":"X-Requested-With Trial. c.adskeeper.com","token":"A7FqvOKFHNgNgFjjYj+W40B0HKkA3G+yzT\\/JRgvAuF6jpMA+3RETxbrzJbywDNqrZzHhx+1SzhEwxDzQAeAZxw8AAAB9eyJvcmlnaW4iOiJodHRwczovL2MuYWRza2VlcGVyLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=","conditions":["webview"]}]',
//           useTimePerformance: !1,
//           waitConsentEnabled: !1,
//           usePixelate: !0,
//           clientId: 871137,
//           readMoreButtonOptions: "{}",
//           backfillData: "{}",
//           useScrollClick: !1,
//           iframeDomain: "mg.adskeeper.com",
//           crossDomainStorageEnabled: !1,
//           customStylesEnabled: !1,
//           loggingConsentEnabled: !0,
//           flippEnabled: !1,
//           blurEnabled: !1,
//           gradientEnabled: !1,
//           refreshTeaserAfterClick: !0,
//           loadVisibleWidgetDisabled: !1,
//           supportDarkTheme: !1,
//           darkThemeSelector: "",
//           bidmaticEnabled: !1,
//           bidmaticOptions: "{}",
//           ampLimitAdsEnabled: !1,
//           clicktrackingEnabled: !1,
//           clicktrackingMacros: "${CLICK_URL}",
//           collectTopicsDisabled: !1,
//           autocreativeCampaignId: 0,
//           omidEnabled: !1,
//           newTabEnabled: !1,
//           newTabOptions: "{}",
//           swipeUpEnabled: !1,
//           swipeUpOptions: "{}",
//           lazyCustomMargin: 0,
//           nextUpCustomFuncEnabled: !1,
//           pixelateImpressions: 0,
//           nextUpEnabled: !1,
//           nextUpOptions: "{}",
//           isNextUpAddWidget: !1,
//           assertiveEnabled: !1,
//           defractalEnabled: !1
//         },
//         SITE: {
//           id: 973367,
//           cdnDomain: "cdn.adskeeper.com",
//           crossDomainStorageEnabled: !1
//         },
//         BLOCKS: {
//           ConstructorBlock: !1,
//           SendDimensionsBlock: !0,
//           VersionControlBlock: !1,
//           InternalExchangeBlock: !1,
//           RetentionToolBlock: !1,
//           BlurBlock: !1,
//           GradientBlock: !1,
//           ColorBlock: !1,
//           PaginatorBlock: !1,
//           AutoRefreshInformerBlock: 0,
//           RefreshTeaserAfterClickBlock: !0,
//           IframeSizeChangerBlock: !1,
//           RejectBlock: !0,
//           ViewabilityRefreshBlock: !1,
//           OriginTrialsBlock: !0,
//           RenderClassicBlock: !0,
//           RenderSchematicBlock: !1,
//           ResponsiveBlock: !1,
//           ElasticBlock: !1,
//           ScaleInfoBlock: !0,
//           AntifraudBlock: !0,
//           HoneypotBlock: !1,
//           LazyLoadBlock: !0,
//           FillCardLikesBlock: !0,
//           ExternalApiBlock: !1,
//           ImpactBlock: !1,
//           InArticleAutoplacement: !1,
//           AccidentalClicksBlock: !0,
//           ActivateDelayBlock: 2e3,
//           OnTransitPageBlock: !1,
//           GoogleGptBlock: !1,
//           ImpactBlocks: !1,
//           MobileExitBlock: !1,
//           PassageBlock: !1,
//           InterstitialBlock: !1,
//           PopupBlock: !1,
//           CollectWidgetReportsBlock: !1,
//           ExternalAnalyticsBlock: !1,
//           RtbBlock: !0,
//           FlippBlock: !1,
//           ID5Block: !0,
//           widgetUseConstructor: !1,
//           CarouselWidgetSuperBlock: !1,
//           CarouselWidgetBlock: !1,
//           InSiteNotificationBlock: !1,
//           BackfillBlock: !1,
//           MobileWidgetBlock: !1,
//           VideoLibrary: !1,
//           DarkThemeBlock: !1,
//           BidmaticBlock: !1,
//           BrowserTopicsBlock: !0,
//           OmidBlock: !1,
//           NewTabBlock: !1,
//           SwipeUpBlock: !1,
//           NextUpBlock: !1,
//           AssertiveBlock: !1,
//           DefractalBlock: !1
//         }
//       },
//       "1648626": {
//         WIDGET: {
//           id: 1648626,
//           activateDelay: 6e3,
//           clickableDelay: 1,
//           _constructor: '{"cols":"1","font":"arial","kind":"wages","rows":"1","type":"under-article-widget","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"price":false,"theme":"#000000","width":"100%","button":1,"mcdesc":{"styles":{"font":"arial","color":"#444444","display":"none","fontSize":11,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"width":"200","height":"250","margin":"7","borderColor":"#bfbfbf","borderStyle":"solid","borderWidth":1,"borderRadius":"8"}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":492,"size-height":328},"mcprice":{"show":"true","styles":{"font":"arial","color":"#222222","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":"#ffffff"}},"mctitle":{"styles":{"color":"#ffffff","fontSize":17,"fontStyle":"normal","textAlign":"center","fontWeight":"bold","text-transform":"uppercase","textDecoration":"none"}},"subType":"under-article-widget-card-media","mcdomain":{"styles":{"font":"arial","color":"#159417","display":"none","fontSize":12,"fontStyle":"italic","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"isToaster":1,"colsMobile":1,"isDragDown":1,"previewImg":"https:\\/\\/cdn.adskeeper.com\\/images\\/draw-widget-preview.jpg","imageFormat":19,"imageShadow":"","textPosition":"bottom","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"widgetFormatId":1,"mobileWidgetImg":"https:\\/\\/cdn.adskeeper.com\\/images\\/mobile-widget-preview-adskeeper.png","passageFrequency":60,"teaserCardShadow":"0","teaserFixedWidth":"0","imageScaleOnHover":"","interstitialAfter":3,"is_show_ad_marker":0,"frequencyOfDisplay":"30","widgetTitleSettings":{"styles":{"font":"arial","color":"#3f3f3f","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"notificationPosition":"top","toasterInactivityTime":8,"widgetTypeDescription":1,"activateAdsAfterScroll":"0.00"}',
//           subType: "under-article-widget-card-media",
//           goodsPartUid: 57979491,
//           widgetTitle: "[WIDGET_TITLE_INTERESTING_FOR_YOU]",
//           type: "under-article-widget",
//           I: "AdskeeperInfC1648626",
//           customBanners: '{"1648626":[]}',
//           crossId: 1648626,
//           widgetPathES5: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648626.es5.js",
//           widgetPathES6: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648626.es6.js",
//           publisherId: 57979491
//         },
//         BLOCKS: {
//           ActivateDelayBlock: 6e3
//         }
//       },
//       "1648657": {
//         WIDGET: {
//           id: 1648657,
//           goodsPartUid: 57979522,
//           I: "AdskeeperInfC1648657",
//           customBanners: '{"1648657":[]}',
//           crossId: 1648657,
//           widgetPathES5: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648657.es5.js",
//           widgetPathES6: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648657.es6.js",
//           publisherId: 57979522
//         }
//       },
//       "1648807": {
//         WIDGET: {
//           id: 1648807,
//           goodsPartUid: 57979672,
//           I: "AdskeeperInfC1648807",
//           customFuncBlocks: '["af6259-cheq"]',
//           customBanners: '{"1648807":[]}',
//           crossId: 1648807,
//           widgetPathES5: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648807.es5.js",
//           widgetPathES6: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1648807.es6.js",
//           publisherId: 57979672
//         }
//       },
//       "1697842": {
//         WIDGET: {
//           id: 1697842,
//           goodsPartUid: 58028428,
//           widgetTitle: "[WIDGET_TITLE_YOU_MAY_LIKE]",
//           I: "AdskeeperInfC1697842",
//           doubleclickParameters: '{"1":{"borderTop":{"max":1,"min":0,"percent":100}},"2":{"borderLeft":{"max":1,"min":0,"percent":100}},"3":{"borderRight":{"max":1,"min":0,"percent":100}},"4":{"borderBottom":{"max":1,"min":0,"percent":100}}}',
//           customBanners: '{"1697842":[]}',
//           crossId: 1697842,
//           widgetPathES5: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1697842.es5.js",
//           widgetPathES6: "https://jsc.adskeeper.com/s/a/satta-king-fixed-no.in.1697842.es6.js",
//           publisherId: 58028428
//         }
//       }
//     }
//   });
//   var A, K = z(() => {
//     T();
//     B();
//     A = class {
//       constructor(t) {
//         this.app = t
//       }
//       addHook(t, e, i = 0, s = !1) {
//         if (this.app.widgetParams.WIDGET.useConstructor) this.app[t].push(r => {
//           try {
//             r = r || [], e.apply(this, r)
//           } catch { }
//         });
//         else {
//           let r = i !== 0;
//           this.app[t].push(p => {
//             let u = this.name || this.constructor.name,
//               d = [];
//             return d.push(this.app.lifeCycleBlock.execute(`${t} hook ${u}`, f => {
//               try {
//                 r ? (p = p || [], p.push(f), e.apply(this, p)) : (e.apply(this, p), f())
//               } catch (b) {
//                 this.app.log(`${t} hook ${u}:`, "error", b), this.app.debugBlock.sendData(b.message), f()
//               }
//             }, 0, !1, !0)), r && i !== 999999 && d.push(this.app.lifeCycleBlock.execute("", f => {
//               f()
//             }, i, s, !0)), Promise.race(d)
//           })
//         }
//       }
//     }
//   });
//   var $, F, Ft, It, Ut, xt = z(() => {
//     T();
//     B();
//     (function (m) {
//       m.Teaser = "teaser", m.Banner = "banner", m.Gpt = "gpt"
//     })($ || ($ = {}));
//     (function (m) {
//       m.Wages = "w", m.Exchange = "e", m.InternalExchange = "i", m.Video = "v", m.DirectPublisherDemand = "dpd", m.Azerion = "azerion"
//     })(F || (F = {}));
//     (function (m) {
//       m.Desktop = "desktop", m.Mobile = "mobile", m.Tablet = "tablet", m.SmartTV = "smarttv"
//     })(Ft || (Ft = {}));
//     (function (m) {
//       m[m.MG = 0] = "MG", m[m.L = 1] = "L", m[m.AK = 2] = "AK", m[m.IM = 3] = "IM"
//     })(It || (It = {}));
//     (function (m) {
//       m.Storage = "storage", m.Cmp = "cmp"
//     })(Ut || (Ut = {}))
//   });

//   function At(m, t) {
//     async function e(...i) {
//       await jt.acquireStorage(() => {
//         m.call(this, ...i)
//       }), typeof i[i.length - 1] == "function" && i[i.length - 1]()
//     }
//     return e
//   }
//   var Ht, pt, Pe, jt, wt, Nr, bt, ee = z(() => {
//     T();
//     B();
//     (function (m) {
//       m.ping = "ping", m.get = "get", m.set = "set", m.lock = "lock", m.unlock = "unlock"
//     })(Ht || (Ht = {}));
//     (function (m) {
//       m.local = "local", m.session = "session", m.page = "page"
//     })(pt || (pt = {}));
//     Pe = class {
//       constructor() {
//         if (this.callbacks = {}, this.pingIntervalId = null, this.internalStore = {}, this.isCrossDomainStorageEnabled()) {
//           let t = document.createElement("iframe");
//           t.src = "https://cdn.adskeeper.com/widgets/storage.html", t.style.display = "none", document.body.appendChild(t), this.frame = t.contentWindow, this.internalStore[pt.local] = {}, this.internalStore[pt.session] = {}, this.internalStore[pt.page] = {}, window.addEventListener("message", e => {
//             if (typeof e.data._mgstorage < "u") {
//               let i = e.data._mgstorage;
//               i.error && console.error(i.error), this.callbacks[i.eventId](i)
//             }
//           })
//         } else this.internalStore[pt.local] = localStorage, this.internalStore[pt.session] = sessionStorage, this.internalStore[pt.page] = window
//       }
//       async waitForFrame() {
//         return new Promise(t => {
//           this.pingIntervalId = setInterval(() => {
//             let e = this.getEventId();
//             this.callbacks[e] = () => {
//               clearInterval(this.pingIntervalId), t()
//             }, this.request({
//               eventId: e,
//               srcId: "widget",
//               action: Ht.ping
//             })
//           }, 100)
//         })
//       }
//       async get(t, e, i) {
//         return new Promise(s => {
//           let r = this.getEventId();
//           this.callbacks[r] = p => {
//             s(p.data)
//           }, this.request({
//             eventId: r,
//             engine: e,
//             srcId: "widget",
//             action: Ht.get,
//             lockId: t,
//             key: i
//           })
//         })
//       }
//       async set(t, e, i, s) {
//         return new Promise(r => {
//           let p = this.getEventId();
//           this.callbacks[p] = () => {
//             r()
//           }, this.request({
//             eventId: p,
//             engine: e,
//             srcId: "widget",
//             action: Ht.set,
//             lockId: t,
//             key: i,
//             val: s
//           })
//         })
//       }
//       async lock() {
//         return new Promise(t => {
//           let e = this.getEventId();
//           this.callbacks[e] = i => {
//             t(i.data)
//           }, this.request({
//             eventId: e,
//             srcId: "widget",
//             action: Ht.lock
//           })
//         })
//       }
//       async unlock(t) {
//         return new Promise(e => {
//           let i = this.getEventId();
//           this.callbacks[i] = s => {
//             e(s)
//           }, this.request({
//             eventId: i,
//             srcId: "widget",
//             action: Ht.unlock,
//             lockId: t
//           })
//         })
//       }
//       async fetch(t) {
//         this.internalStore[pt.local] = JSON.parse(await this.get(t, pt.local, this.getStorageKey())) ?? {}, this.internalStore[pt.session] = JSON.parse(await this.get(t, pt.session, this.getStorageKey())) ?? {}, this.internalStore[pt.page] = JSON.parse(await this.get(t, pt.page, this.getStorageKey())) ?? {}
//       }
//       async flush(t) {
//         await this.set(t, pt.local, this.getStorageKey(), JSON.stringify(this.internalStore[pt.local])), await this.set(t, pt.session, this.getStorageKey(), JSON.stringify(this.internalStore[pt.session])), await this.set(t, pt.page, this.getStorageKey(), JSON.stringify(this.internalStore[pt.page])), this.internalStore[pt.local] = {}, this.internalStore[pt.session] = {}, this.internalStore[pt.page] = {}, await this.unlock(t)
//       }
//       getStorageKey() {
//         return "storage973367"
//       }
//       isCrossDomainStorageEnabled() {
//         return !1
//       }
//       engine(t) {
//         return {
//           getItem: e => {
//             let i = this.internalStore[t][e] ?? null;
//             return i === "undefined" && (i = null), i
//           },
//           setItem: (e, i) => {
//             this.internalStore[t][e] = i
//           },
//           removeItem: e => {
//             delete this.internalStore[t][e]
//           }
//         }
//       }
//       async acquireStorage(t) {
//         try {
//           if (this.isCrossDomainStorageEnabled()) {
//             let e = await this.lock();
//             await this.fetch(e), t(), await this.flush(e)
//           } else t()
//         } catch (e) {
//           console.error(e)
//         }
//       }
//       getEventId() {
//         return ("0000000000" + Math.round(Math.random() * 1e10).toString(16)).slice(-10)
//       }
//       request(t) {
//         this.frame.postMessage({
//           _mgstorage: t
//         }, "*")
//       }
//     }, jt = new Pe, wt = jt.engine(pt.local), Nr = jt.engine(pt.session), bt = jt.engine(pt.page)
//   });
//   var Mi = {};
//   Z(Mi, {
//     VideoMetricsBlock: () => De
//   });
//   var De, Ni = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     De = class extends A {
//       constructor(t) {
//         super(t), this.name = "VideoMetricsBlock", this.userAgent = this.app.context.navigator?.userAgent || "", this.exceptionAgentList = ["Zalo iOS"], this.videoType = "video/mp4", this.isMetricsCollected = !1, this.collectMetrics()
//       }
//       waitForCollectMetrics() {
//         let t, i = new Date().getTime();
//         return new Promise(s => {
//           t = setInterval(() => {
//             if (new Date().getTime() - i >= 1e3) {
//               this.app.videoMetricsParams = {
//                 mp4: 0,
//                 ap: 0
//               }, clearInterval(t), this.app.log(`${this.name}: too long Video Promise resolving process.`), s();
//               return
//             }
//             this.isMetricsCollected && (clearInterval(t), s())
//           }, 10)
//         })
//       }
//       collectMetrics() {
//         let t = {
//           mp4: 0,
//           ap: 0
//         },
//           e = () => {
//             this.isMetricsCollected = !0, this.app.videoMetricsParams = {
//               ...t
//             };
//             try {
//               this.app.context.sessionStorage && this.app.context.sessionStorage.setItem("_mgVideoMetricsParams", JSON.stringify(t))
//             } catch { }
//           };
//         if (this.isIosWebview() && (this.isExceptionAgent() || this.app.widgetParams.WIDGET.currentSubnet === It.IM)) {
//           e();
//           return
//         }
//         try {
//           let i = new Blob([new Uint8Array([0, 0, 0, 28, 102, 116, 121, 112, 105, 115, 111, 109, 0, 0, 2, 0, 105, 115, 111, 109, 105, 115, 111, 50, 109, 112, 52, 49, 0, 0, 0, 8, 102, 114, 101, 101, 0, 0, 2, 239, 109, 100, 97, 116, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 33, 16, 5, 32, 164, 27, 255, 192, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 55, 167, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 112, 0, 0, 2, 194, 109, 111, 111, 118, 0, 0, 0, 108, 109, 118, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 232, 0, 0, 0, 47, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 236, 116, 114, 97, 107, 0, 0, 0, 92, 116, 107, 104, 100, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 101, 100, 116, 115, 0, 0, 0, 28, 101, 108, 115, 116, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 47, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 100, 109, 100, 105, 97, 0, 0, 0, 32, 109, 100, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172, 68, 0, 0, 8, 0, 85, 196, 0, 0, 0, 0, 0, 45, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0, 0, 0, 1, 15, 109, 105, 110, 102, 0, 0, 0, 16, 115, 109, 104, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 100, 105, 110, 102, 0, 0, 0, 28, 100, 114, 101, 102, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1, 0, 0, 0, 211, 115, 116, 98, 108, 0, 0, 0, 103, 115, 116, 115, 100, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 87, 109, 112, 52, 97, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 16, 0, 0, 0, 0, 172, 68, 0, 0, 0, 0, 0, 51, 101, 115, 100, 115, 0, 0, 0, 0, 3, 128, 128, 128, 34, 0, 2, 0, 4, 128, 128, 128, 20, 64, 21, 0, 0, 0, 0, 1, 244, 0, 0, 1, 243, 249, 5, 128, 128, 128, 2, 18, 16, 6, 128, 128, 128, 1, 2, 0, 0, 0, 24, 115, 116, 116, 115, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 4, 0, 0, 0, 0, 28, 115, 116, 115, 99, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 28, 115, 116, 115, 122, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 115, 0, 0, 1, 116, 0, 0, 0, 20, 115, 116, 99, 111, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 44, 0, 0, 0, 98, 117, 100, 116, 97, 0, 0, 0, 90, 109, 101, 116, 97, 0, 0, 0, 0, 0, 0, 0, 33, 104, 100, 108, 114, 0, 0, 0, 0, 0, 0, 0, 0, 109, 100, 105, 114, 97, 112, 112, 108, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 105, 108, 115, 116, 0, 0, 0, 37, 169, 116, 111, 111, 0, 0, 0, 29, 100, 97, 116, 97, 0, 0, 0, 1, 0, 0, 0, 0, 76, 97, 118, 102, 53, 54, 46, 52, 48, 46, 49, 48, 49])], {
//             type: this.videoType
//           }),
//             s = this.app.context.document.createElement("video");
//           if (s.muted = !0, s.autoplay = !0, s.loop = !0, s.setAttribute("playsinline", ""), s.setAttribute("webkit-playsinline", ""), s.src = URL.createObjectURL(i), typeof s.canPlayType < "u") {
//             let p = s.canPlayType(this.videoType);
//             (p == "maybe" || p == "probably") && (t.mp4 = 1)
//           }
//           let r = s.play();
//           typeof r < "u" ? r.then(() => {
//             t.ap = 1, s.src = "", typeof s.remove < "u" && s.remove(), e()
//           }).catch(p => {
//             t.ap = 0, s.src = "", typeof s.remove < "u" && s.remove(), e()
//           }) : (t.ap = 0, s.src = "", typeof s.remove < "u" && s.remove(), e())
//         } catch {
//           t.mp4 = 0, t.ap = 0, e()
//         }
//       }
//       isIosWebview() {
//         return /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(this.userAgent)
//       }
//       isExceptionAgent() {
//         return this.exceptionAgentList.some(t => this.userAgent.indexOf(t) !== -1)
//       }
//     }
//   });
//   var Vi = {};
//   Z(Vi, {
//     NavigatorAgentDataBlock: () => Ee
//   });
//   var qt, Ee, Fi = z(() => {
//     T();
//     B();
//     K();
//     (function (m) {
//       m.architecture = "scua", m.bitness = "scub", m.brands = "scu", m.fullVersionList = "scufvl", m.mobile = "scum", m.model = "scumd", m.platform = "scup", m.platformVersion = "scupv", m.uaFullVersion = "scufv", m.wow64 = "scuw"
//     })(qt || (qt = {}));
//     Ee = class extends A {
//       constructor(t) {
//         super(t), this.name = "NavigatorAgentDataBlock", this.isDataCollected = !1, this.collectUserAgentData()
//       }
//       waitForUserAgentData() {
//         let t, i = new Date().getTime();
//         return new Promise(s => {
//           t = setInterval(() => {
//             if (new Date().getTime() - i >= 1e3) {
//               this.app.userAgentDataParams = null, clearInterval(t), this.app.log(`${this.name}: too long collecting data process.`), s();
//               return
//             }
//             this.isDataCollected && (clearInterval(t), s())
//           }, 10)
//         })
//       }
//       collectUserAgentData() {
//         this.app.context.navigator.userAgentData.getHighEntropyValues(Object.keys(qt)).then(t => {
//           let e = {};
//           Object.keys(t).forEach(i => {
//             let s = t[i];
//             if (typeof s == "boolean" && (e[qt[i]] = `${encodeURIComponent(s ? "?1" : "?0")}`), typeof s == "string" && s.length && (e[qt[i]] = `${encodeURIComponent('"' + s + '"')}`), Array.isArray(s) && s.length) {
//               let r = s.reduce((p, u, d, f) => p + `"${u.brand}";v="${u.version}"${d !== f.length - 1 ? ", " : ""}`, "");
//               e[qt[i]] = `${encodeURIComponent(r)}`
//             }
//           }), this.isDataCollected = !0, this.app.userAgentDataParams = {
//             ...e
//           };
//           try {
//             this.app.context.sessionStorage && this.app.context.sessionStorage.setItem("_mgAgentDataParams", JSON.stringify(e))
//           } catch { }
//         }).catch(t => {
//           this.isDataCollected = !0, this.app.userAgentDataParams = null
//         })
//       }
//     }
//   });
//   var ji = {};
//   Z(ji, {
//     AmpRenderBlock: () => Ce
//   });
//   var Ce, qi = z(() => {
//     T();
//     B();
//     K();
//     Ce = class extends A {
//       constructor(t) {
//         super(t), this.name = "AmpRenderBlock", this.addHook("afterPreRenderNewsHooks", this.ampRenderStart), this.addHook("afterLoadNewsHooks", this.ampResizeHook), this.app.widgetParams.WIDGET.ampSpaSupport && (this.ampPageView(), this.addHook("beforePrepareCappingDataHooks", this.ampPageImp, 1e4))
//       }
//       ampRenderStart() {
//         this.ampResizedHeight = this.app.precalcRect.height, this.app.context.context.renderStart({
//           width: this.app.precalcRect.width,
//           height: this.app.precalcRect.height
//         })
//       }
//       ampPageView() {
//         typeof this.app.context.context.computeInMasterFrame < "u" && this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageViewAmp" + this.app.widgetParams.WIDGET.siteId, t => {
//           let e = this.app.context.context.pageViewId,
//             i = localStorage.getItem("_mgPageViewAmpId" + this.app.widgetParams.WIDGET.siteId) ? localStorage.getItem("_mgPageViewAmpId" + this.app.widgetParams.WIDGET.siteId) : "";
//           if (e === i) {
//             let s = this.app.getMostTopWindow();
//             s["_mgPageView" + this.app.widgetParams.WIDGET.siteId] = s["_mgPageView" + this.app.widgetParams.WIDGET.siteId] || [], s["_mgPageView" + this.app.widgetParams.WIDGET.siteId].push(s.location.pathname), s["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] = s["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] || [], s["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId].push(s.location.pathname), this.app.initServicerRequest = !1
//           }
//           localStorage.setItem("_mgPageViewAmpId" + this.app.widgetParams.WIDGET.siteId, e), t()
//         }, () => { })
//       }
//       ampPageImp(t) {
//         typeof this.app.context.context.computeInMasterFrame < "u" ? this.app.context.context.computeInMasterFrame(this.app.context, "_mgPageImpAmp" + this.app.widgetParams.WIDGET.siteId, e => {
//           let i = this.app.context.context.pageViewId,
//             s = localStorage.getItem("_mgPageImpAmpId" + this.app.widgetParams.WIDGET.siteId) ? localStorage.getItem("_mgPageImpAmpId" + this.app.widgetParams.WIDGET.siteId) : "";
//           if (i === s) {
//             let r = this.app.getMostTopWindow();
//             r["_mgPageImp" + this.app.widgetParams.WIDGET.siteId] = r["_mgPageImp" + this.app.widgetParams.WIDGET.siteId] || [], r["_mgPageImp" + this.app.widgetParams.WIDGET.siteId].push(r.location.pathname)
//           }
//           localStorage.setItem("_mgPageImpAmpId" + this.app.widgetParams.WIDGET.siteId, i), e()
//         }, () => { }) : t()
//       }
//       askAmpForResize() {
//         let t = Math.ceil(this.app.root.getBoundingClientRect().height),
//           e = this.app.precalcRect.width;
//         this.app.context.context.requestResize(e, t).then(() => {
//           this.app.ampResizeDenied = !1, this.ampResizedHeight = t
//         }, () => {
//           this.app.ampResizeDenied = !0
//         })
//       }
//       ampResizeHook() {
//         typeof this.ampResizeInterval > "u" && (this.ampResizeInterval = setInterval(() => {
//           let t = Math.ceil(this.app.root.getBoundingClientRect().height);
//           typeof this.app.ampResizeDenied < "u" && this.app.ampResizeDenied ? this.askAmpForResize() : t !== this.ampResizedHeight && this.askAmpForResize()
//         }, 100))
//       }
//     }
//   });
//   var zi = {};
//   Z(zi, {
//     MgqBlock: () => Jt
//   });
//   var Jt, Te = z(() => {
//     T();
//     B();
//     K();
//     Jt = class extends A {
//       constructor(t) {
//         super(t), this.isLongCheck = !1, this.name = "MgqBlock", this.worker = this.createWorker(), this.init()
//       }
//       init() {
//         this.app.context._mgq = this.app.context._mgq || [], typeof this.app.context._mgqp > "u" && (this.app.context._mgqp = this.worker, this.app.context._mgqt = new Date().getTime(), this.worker())
//       }
//       createWorker() {
//         return () => {
//           let t = this.app.context._mgq.length,
//             e = this.app.context._mgq.slice(0),
//             i = 0;
//           for (let s = 0; s < t; s++) {
//             let r = e[s],
//               p = this.app.context,
//               u = r[0];
//             if (r[0].indexOf(".") > 0 && (p = p[r[0].split(".")[0]], u = r[0].split(".")[1]), typeof p[u] == "function" && u !== "MgSensorInvoke") {
//               try {
//                 p[u].apply(p, r.slice(1))
//               } catch (d) {
//                 this.app.log("mgq error:", "error", d), this.app.debugBlock.sendData(`mgq error: ${d.message}`)
//               }
//               this.app.context._mgq.splice(s - i, 1), i++
//             }
//           }
//           this.app.context._mgqi || (this.app.context._mgqi = this.app.context.setInterval(() => {
//             this.worker()
//           }, 5)), this.isLongCheck || new Date().getTime() - this.app.context._mgqt > 1e4 && (this.isLongCheck = !0, this.app.context.clearInterval(this.app.context._mgqi), this.app.context._mgqi = this.app.context.setInterval(() => {
//             this.worker()
//           }, 100))
//         }
//       }
//     }
//   });
//   var $i = {};
//   Z($i, {
//     UtilsBlock: () => Be
//   });
//   var Be, Ui = z(() => {
//     T();
//     B();
//     K();
//     Be = class extends A {
//       constructor(t) {
//         super(t), this.name = "UtilsBlock"
//       }
//       getScroll() {
//         let t = this.app.getMostTopWindow();
//         return {
//           top: t.document.body.scrollTop || t.document.documentElement.scrollTop || 0,
//           left: t.document.body.scrollLeft || t.document.documentElement.scrollLeft || 0
//         }
//       }
//       getViewportSize() {
//         let t = this.app.getMostTopWindow();
//         return {
//           width: t.innerWidth || t.document.documentElement.clientWidth,
//           height: t.innerHeight || t.document.documentElement.clientHeight
//         }
//       }
//       getRect(t, e) {
//         let i = t.getBoundingClientRect(),
//           s = {
//             top: i.top,
//             bottom: i.bottom,
//             left: i.left,
//             right: i.right,
//             height: i.height ? i.height : i.bottom - i.top,
//             width: i.width ? i.width : i.right - i.left
//           };
//         if (this.app.context.self !== this.app.context.top) {
//           let r = this.getFrame();
//           if (r) {
//             let p = r.getBoundingClientRect();
//             s.top += p.top, s.bottom += p.top, s.left += p.left, s.right += p.left
//           }
//         }
//         if (e) {
//           let r = this.getScroll();
//           s.top += r.top, s.bottom += r.top, s.left += r.left, s.right += r.left
//         }
//         return s
//       }
//       getFrame() {
//         let t;
//         try {
//           let e;
//           for (let i = this.app.context; i.frameElement; i = i.parent) e = i.frameElement;
//           t = e
//         } catch {
//           t = null
//         }
//         return t
//       }
//       elementViewportIntersection(t) {
//         let e = this.getRect(t, !0),
//           i = this.getViewportSize(),
//           s = this.getScroll();
//         for (let f in e) e.hasOwnProperty(f) && (e[f] = Math.floor(e[f]));
//         i.top = s.top, i.bottom = s.top + i.height, i.left = s.left, i.right = s.left + i.width;
//         let r = e.width * e.height;
//         if (!r) return 0;
//         if (this.app.omidBlock && this.app.omidBlock.getLastOmidData()) {
//           let f = this.app.omidBlock.getLastOmidData(),
//             b = {
//               left: 0,
//               right: f.viewport.width,
//               top: 0,
//               bottom: f.viewport.height
//             },
//             k = {
//               left: f.adView.geometry.x,
//               right: f.adView.geometry.x + f.adView.geometry.width,
//               top: f.adView.geometry.y,
//               bottom: f.adView.geometry.y + f.adView.geometry.height
//             },
//             S = this.rectangleIntersection(b, k),
//             y = {
//               left: f.adView.onScreenGeometry.x,
//               right: f.adView.onScreenGeometry.x + f.adView.onScreenGeometry.width,
//               top: f.adView.onScreenGeometry.y,
//               bottom: f.adView.onScreenGeometry.y + f.adView.onScreenGeometry.height
//             },
//             D = this.rectangleIntersection(S, y),
//             v = {
//               left: e.left - s.left + f.adView.geometry.x,
//               right: e.right - s.left + f.adView.geometry.x,
//               top: e.top - s.top + f.adView.geometry.y,
//               bottom: e.bottom - s.top + f.adView.geometry.y
//             },
//             I = this.rectangleIntersection(D, v),
//             L = (v.bottom - v.top) * (v.right - v.left),
//             j = I.width * I.height;
//           return f.adView.onScreenGeometry.obstructions.forEach(Y => {
//             let tt = {
//               left: Y.x,
//               top: Y.y,
//               right: Y.x + Y.width,
//               bottom: Y.y + Y.height
//             },
//               ht = this.rectangleIntersection(tt, I),
//               Pt = ht.width * ht.height;
//             j -= Pt
//           }), j / L
//         }
//         let p = Math.max(0, Math.min(e.right, i.right) - Math.max(e.left, i.left)),
//           u = Math.max(0, Math.min(e.bottom, i.bottom) - Math.max(e.top, i.top));
//         return p * u / r
//       }
//       rectangleIntersection(t, e) {
//         let i = {};
//         return i.top = Math.max(t.top, e.top), i.left = Math.max(t.left, e.left), i.bottom = Math.min(t.bottom, e.bottom), i.right = Math.min(t.right, e.right), i.width = i.right - i.left, i.height = i.bottom - i.top, i.top < i.bottom && i.left < i.right ? i : {
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           width: 0,
//           height: 0
//         }
//       }
//       getLeavePageValue() {
//         let e = ["hidden", "mozHidden", "msHidden", "webkitHidden"].filter(s => typeof this.app.context.document[s] < "u")[0],
//           i = e === "hidden" ? "visibilitychange" : e.replace("Hidden", "") + "visibilitychange";
//         return {
//           hidden: e,
//           visibilityChange: i
//         }
//       }
//     }
//   });
//   var Ji = Ie(ie => {
//     "use strict";
//     T();
//     B();
//     Object.defineProperty(ie, "__esModule", {
//       value: !0
//     });
//     ie.ConsentsBlock = void 0;
//     var hr = function () {
//       function m(t, e, i) {
//         e === void 0 && (e = 30), i === void 0 && (i = !1);
//         var s;
//         this.hasStorageConsentTCFv2 = !1, this.app = t, this.consentTimeout = e, this.isWaitConsent = i, this.app.requestParams = this.app.requestParams || {}, this.topWindow = this.app.getMostTopWindow(), this.actualizeStorageConsentTCFv2(), this.isWaitConsent && !this.hasStorageConsentTCFv2 && (this.consentTimeout = Number((s = this.app.globalSettings) === null || s === void 0 ? void 0 : s.widget_consent_wait_time_ms) || 300, this.app.requestParams.nocmp = 1)
//       }
//       return m.prototype.actualizeStorageConsentTCFv2 = function () {
//         var t, e = Number((t = this.app.globalSettings) === null || t === void 0 ? void 0 : t.widget_consent_outdated_time) || 168;
//         try {
//           if (this.app.context.localStorage && !this.app.isOurIframe) {
//             var i = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "{}");
//             i?.timestamp && new Date().getTime() - i.timestamp < e * 60 * 60 * 1e3 ? this.hasStorageConsentTCFv2 = !0 : this.app.context.localStorage.removeItem("MG_tcfv2Data")
//           }
//         } catch {
//           this.app.log("ConsentsAdapter - localStorage not found.")
//         }
//       }, m.prototype.initTCFv2Proxy = function () {
//         if (typeof this.app.context.__tcfapi == "function") return;
//         this.isSearchingLocator = !0;
//         for (var t = this.app.context, e, i = {}; t;) {
//           try {
//             if (t.frames.__tcfapiLocator) {
//               e = t;
//               break
//             }
//           } catch (r) {
//             this.app.log(r, "warn", r)
//           }
//           if (t === this.app.context.top) break;
//           t = t.parent
//         }
//         if (this.isSearchingLocator = !1, !e) return;
//         this.app.context.__tcfapi = function (r, p, u, d) {
//           var f = Math.random() + "",
//             b = {
//               __tcfapiCall: {
//                 command: r,
//                 parameter: d,
//                 version: p,
//                 callId: f
//               }
//             };
//           i[f] = u, e.postMessage(b, "*")
//         };

//         function s(r) {
//           var p = {};
//           try {
//             p = typeof r.data == "string" ? JSON.parse(r.data) : r.data
//           } catch (d) {
//             this.app.log(d, "warn", d)
//           }
//           var u = p ? p.__tcfapiReturn : null;
//           u && typeof i[u.callId] == "function" && i[u.callId](u.returnValue, u.success)
//         }
//         this.app.context.addEventListener("message", s.bind(this), !1)
//       }, m.prototype.tcfv2Api = function (t) {
//         var e = this,
//           i = new Date().getTime(),
//           s;
//         return new Promise(function (r, p) {
//           var u = function () {
//             e.app.tcfv2Enabled = !0, e.app.requestParams.tcfV2 = 1;
//             try {
//               var d = function (f, b) {
//                 if (b && (f.eventStatus === "tcloaded" || f.eventStatus === "useractioncomplete")) {
//                   var k = new Date().getTime();
//                   e.app.tcfv2Data = f, e.app.context.localStorage && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_tcfv2Data") : (f.timestamp = k, e.app.context.localStorage.setItem("MG_tcfv2Data", JSON.stringify(f)))), e.app.log("Consents. TCFv2 API done."), e.app.startServicerTime && e.app.sendConsentLog(k), e.app.waitConsentResolver && e.app.waitConsentResolver(), t && setTimeout(function () {
//                     t()
//                   }, 0), r()
//                 } else b && !f.gdprApplies && (t && setTimeout(function () {
//                   t()
//                 }, 0), r()), e.app.log("Consents. TCFv2 API paused.")
//               };
//               e.app.context.__tcfapi("addEventListener", 2, d)
//             } catch (f) {
//               e.app.log("Consents. TCFv2 API fail."), t && setTimeout(function () {
//                 t()
//               }, 0), p(f)
//             }
//           };
//           e.initTCFv2Proxy(), typeof e.app.context.__tcfapi == "function" ? u() : s = setInterval(function () {
//             if (new Date().getTime() - i >= e.consentTimeout * 1e3) {
//               clearInterval(s), e.app.log("Consents. TCFv2 API not found. Limit time end."), t && setTimeout(function () {
//                 t()
//               }, 0), r();
//               return
//             }
//             e.isSearchingLocator || e.initTCFv2Proxy(), typeof e.app.context.__tcfapi == "function" && (clearInterval(s), u())
//           }, 500)
//         })
//       }, m.prototype.gdprApi = function (t) {
//         var e = this;
//         return new Promise(function (i, s) {
//           if (typeof e.topWindow.__cmp == "function") {
//             e.app.cmpEnabled = !0, e.app.requestParams.tcfV1 = 1;
//             try {
//               e.topWindow.__cmp("getConsentData", null, function (r) {
//                 e.app.consentData = r, e.app.context.localStorage && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_ConsentData") : e.app.context.localStorage.setItem("MG_ConsentData", JSON.stringify(r))), e.app.log("Consents. TCFv1 API done."), t && setTimeout(function () {
//                   t()
//                 }, 0), i()
//               })
//             } catch (r) {
//               t && setTimeout(function () {
//                 t()
//               }, 0), s(r)
//             }
//           } else t && setTimeout(function () {
//             t()
//           }, 0), i()
//         })
//       }, m.prototype.ccpaApi = function (t) {
//         var e = this;
//         return new Promise(function (i, s) {
//           if (typeof e.topWindow.__uspapi == "function") {
//             e.app.uspEnabled = !0;
//             try {
//               e.topWindow.__uspapi("getUSPData", 1, function (r, p) {
//                 p ? (e.app.uspString = r.uspString || "", e.app.context.localStorage && e.app.uspString !== "" && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_uspString") : e.app.context.localStorage.setItem("MG_uspString", e.app.uspString)), e.app.log("Consents. CCPA API done.")) : e.app.log("Consents. CCPA API fail."), t && setTimeout(function () {
//                   t()
//                 }, 0), i()
//               })
//             } catch (r) {
//               t && setTimeout(function () {
//                 t()
//               }, 0), s(r)
//             }
//           } else t && setTimeout(function () {
//             t()
//           }, 0), i()
//         })
//       }, m.prototype.getGdprData = function () {
//         var t, e, i, s, r = null;
//         if ((this.app.cmpEnabled || this.app.tcfv2Enabled || this.app.isAmp()) && (this.app.isAmp() && this.app.context.context.initialConsentValue ? r = {
//           gdpr_consent: this.app.context.context.initialConsentValue,
//           gdpr: 1
//         } : !((t = this.app) === null || t === void 0) && t.tcfv2Data && typeof ((e = this.app.tcfv2Data) === null || e === void 0 ? void 0 : e.tcString) < "u" ? (r = {
//           gdpr_consent: this.app.tcfv2Data.tcString,
//           gdpr: typeof this.app.tcfv2Data.gdprApplies < "u" ? +this.app.tcfv2Data.gdprApplies : ""
//         }, this.app.consentOrigin = "cmp") : !((i = this.app) === null || i === void 0) && i.consentData && typeof ((s = this.app.consentData) === null || s === void 0 ? void 0 : s.consentData) < "u" && (r = {
//           gdpr_consent: this.app.consentData.consentData,
//           gdpr: typeof this.app.consentData.gdprApplies < "u" ? +this.app.consentData.gdprApplies : ""
//         })), r === null) try {
//           if (this.app.context.localStorage && !this.app.isOurIframe) {
//             var p = null;
//             p = JSON.parse(this.app.context.localStorage.getItem("MG_ConsentData") || "null"), p !== null && typeof p.consentData < "u" && (r = {
//               gdpr_consent: p.consentData,
//               gdpr: typeof p.gdprApplies < "u" ? +p.gdprApplies : ""
//             }), p = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "null"), p !== null && typeof p.tcString < "u" && (r = {
//               gdpr_consent: p.tcString,
//               gdpr: typeof p.gdprApplies < "u" ? +p.gdprApplies : ""
//             }, this.app.consentOrigin = "storage")
//           }
//         } catch (u) {
//           this.app.log("getGdprData -> " + u.message)
//         }
//         return r
//       }, m.prototype.getUspData = function () {
//         var t = null;
//         if (this.app.uspEnabled && this.app.uspString != "" && typeof this.app.uspString < "u") t = {
//           us_privacy: this.app.uspString
//         };
//         else try {
//           if (this.app.context.localStorage && !this.app.isOurIframe) {
//             var e = this.app.context.localStorage.getItem("MG_uspString");
//             e != null && e != "" && typeof e < "u" && (t = {
//               us_privacy: e
//             })
//           }
//         } catch (i) {
//           this.app.log("getUspData -> " + i.message)
//         }
//         return t
//       }, m.prototype.getConsentData = function () {
//         var t = {},
//           e = this.getGdprData(),
//           i = this.getUspData();
//         return e != null && Object.keys(e).forEach(function (s) {
//           return t[s] = e[s]
//         }), i != null && Object.keys(i).forEach(function (s) {
//           return t[s] = i[s]
//         }), Object.keys(t).length > 0 ? t : null
//       }, m.prototype.fetchConsents = function () {
//         var t = this;
//         return Promise.allSettled([this.tcfv2Api(), this.gdprApi(), this.ccpaApi()]).then(function () {
//           return t.getConsentData()
//         })
//       }, m
//     }();
//     ie.ConsentsBlock = hr
//   });
//   var Zi = {};
//   Z(Zi, {
//     ConsentsBlock: () => We
//   });
//   var Ki, We, Xi = z(() => {
//     T();
//     B();
//     K();
//     Ki = Se(Ji()), We = class extends A {
//       constructor(t) {
//         super(t), this.consentTimeout = 30, this.isWidgetLoaded = !1, this.name = "ConsentsBlock", this.isWidgetObservable = !this.app.widgetParams.WIDGET.loadVisibleWidgetDisabled && this.app.iframePlacementType < 2, this.isWaitConsent = this.getWaitConsent(), this.consentsAdapter = new Ki.ConsentsBlock(t, this.consentTimeout, this.isWaitConsent), this.addHook("beforeInitHooks", this.consentsAdapter.tcfv2Api.bind(this.consentsAdapter), 50), this.addHook("beforeInitHooks", this.consentsAdapter.gdprApi.bind(this.consentsAdapter), 50), this.addHook("beforeInitHooks", this.consentsAdapter.ccpaApi.bind(this.consentsAdapter), 50)
//       }
//       getWaitConsent() {
//         return this.app.isAmp() ? !1 : this.app.isShowedUpFormat || this.app.widgetParams.WIDGET.newTabEnabled || this.app.widgetParams.WIDGET.swipeUpEnabled || this.app.widgetParams.WIDGET.nextUpCustomFuncEnabled || this.app.widgetParams.WIDGET.nextUpEnabled ? (this.app.requestParams.cmpreason = "wp", !1) : this.app.widgetParams.WIDGET.waitConsentEnabled ? this.isWidgetObservable && this.app.root ? (this.app.root.style.minHeight = "1px", this.app.root.style.width = "100%", this.app.utils.elementViewportIntersection(this.app.root) > 0 ? (this.app.requestParams.cmpreason = "wvz", !1) : !0) : !0 : !1
//       }
//       observeWidget() {
//         this.viewInterval = setInterval(() => {
//           this.app.utils.elementViewportIntersection(this.app.root) > 0 && (clearInterval(this.viewInterval), this.loadWidget(!0))
//         }, 150)
//       }
//       loadWidget(t = !1) {
//         this.isWidgetLoaded || (this.isWidgetLoaded = !0, this.viewInterval && clearInterval(this.viewInterval), typeof this.app.requestParams.nocmp < "u" && delete this.app.requestParams.nocmp, t && (this.app.log(`${this.name}: waiting for consents is complete, widget in viewable zone.`), this.app.requestParams.cmpreason = "wvzs"), this.app.injectScript(!1))
//       }
//       getConsentData() {
//         let t = this.consentsAdapter.getConsentData();
//         return (!t || !t.gdpr) && typeof this.app.context._mgGdprApplies < "u" && (t = t || {}, t.gdpr = this.app.context._mgGdprApplies), (!t || !t.gdpr_consent) && typeof this.app.context._mgConsentData < "u" && (t = t || {}, t.gdpr_consent = this.app.context._mgConsentData), t
//       }
//       waitConsent(t) {
//         this.waitConsentResolve().then(() => {
//           this.app.log(`${this.name}: waiting for consents is complete, consents received.`), this.loadWidget()
//         }), this.isWidgetObservable && this.observeWidget(), setTimeout(() => {
//           this.app.log(`${this.name}: waiting for consents is complete, limit time end.`), this.loadWidget()
//         }, t * 1e3)
//       }
//       async waitConsentResolve() {
//         return new Promise(t => {
//           this.app.waitConsentResolver = t
//         })
//       }
//     }
//   });
//   var Yi = {};
//   Z(Yi, {
//     RequestBlock: () => Le
//   });
//   var Le, Qi = z(() => {
//     T();
//     B();
//     K();
//     Le = class extends A {
//       pixel(t, e, i, s) {
//         this._send(t, e, i, s, (r, p) => {
//           this._imgRequest(r, p)
//         })
//       }
//       beacon(t, e, i, s) {
//         this._send(t, e, i, s, (r, p, u) => {
//           if (typeof navigator.sendBeacon == "function") try {
//             navigator.sendBeacon(p), this.app.log(`Request beacon ${r} started`)
//           } catch (d) {
//             this.app.log(`Request beacon ${r} error: `, "error", d), this._imgRequest(r, p)
//           } else this._imgRequest(r, p)
//         })
//       }
//       beaconBlob(t, e, i, s) {
//         this._send(t, e, {}, s, (r, p, u) => {
//           if (typeof navigator.sendBeacon == "function") try {
//             navigator.sendBeacon(p, i), this.app.log(`Request beaconBlob ${r} started`)
//           } catch (d) {
//             this.app.log(`Request beaconBlob ${r} error: `, "error", d), this._xhrRequest(r, p, "POST", i)
//           } else this._xhrRequest(r, p, "POST", i)
//         })
//       }
//       script(t, e, i, s) {
//         this._send(t, e, i, s, (r, p) => {
//           let u = this.app.context.document.createElement("SCRIPT");
//           u.src = p, u.type = "text/javascript", u.charset = "utf-8", u.async = !0, s.onerror && (u.onerror = s.onerror), s.dest ? (s.dest.appendChild(u), this.app.log(`Request script ${r} started`)) : this.app.log(`Request script ${r} failed - options.dest is undefined!`, "warn")
//         })
//       }
//       _prepareUrl(t, e) {
//         this.app.consentDataParams = this.app.consentsBlock.getConsentData(), this.app.consentDataParams && t.indexOf("/vz") == -1 && Object.keys(this.app.consentDataParams).forEach(s => {
//           let r = this.app.consentDataParams[s];
//           t.indexOf(s) === -1 && (e[s] = `${s}=${r}`)
//         });
//         let i = [];
//         for (let s of Object.keys(e)) (e[s][0] === "?" || e[s][0] === "&") && (e[s] = e[s].substring(1)), i.push(e[s]);
//         return i.length && (t.slice(-1) !== "?" && t.slice(-1) !== "&" && (t += t.indexOf("?") === -1 ? "?" : "&"), t += i.join("&")), t
//       }
//       _send(t, e, i, s, r) {
//         if (s.unique) {
//           if (this.app.context._mgRequests = this.app.context._mgRequests || {}, this.app.context._mgRequests[t]) {
//             this.app.log(`Request ${t} stopped - already defined on page`, "warn");
//             return
//           }
//           this.app.context._mgRequests[t] = !0
//         }
//         e = this._prepareUrl(e, i), r(t, e, s)
//       }
//       _imgRequest(t, e) {
//         let i = this.app.context.document.createElement("IMG");
//         i.referrerPolicy = "strict-origin-when-cross-origin", i.src = e, i.onerror = () => this.app.log(`Request image ${t} load error`, "error"), this.app.log(`Request image ${t} started`)
//       }
//       _xhrRequest(t, e, i, s) {
//         let r = new XMLHttpRequest;
//         r.open(i, e, !0), r.onerror = () => this.app.log(`Request XHR ${t} load error`), r.send(s), this.app.log(`Request image ${t} started`)
//       }
//     }
//   });
//   var ts = {};
//   Z(ts, {
//     ContextBlock: () => Ae
//   });
//   var Ae, es = z(() => {
//     T();
//     B();
//     K();
//     Ae = class extends A {
//       constructor(t) {
//         super(t), this.topmostWindowAccessible = null, this.name = "ContextBlock"
//       }
//       getTopmostWindowAccessible() {
//         if (!this.topmostWindowAccessible) try {
//           for (let t = this.app.context; t.document && (this.topmostWindowAccessible = t, t != t.top); t = t.parent);
//         } catch { }
//         return this.topmostWindowAccessible
//       }
//       parseUrl(t) {
//         let e = document.createElement("A");
//         e.href = t;
//         let i = e.search.replace(/^\?/, "").split("&"),
//           s = [];
//         for (let p of i)
//           if (p !== "") {
//             let u = p.split("=");
//             s.push({
//               key: u[0],
//               value: typeof u[1] < "u" ? u[1] : ""
//             })
//           } let r = e.pathname;
//         return r === "" && (r = "/"), r.charAt(0) !== "/" && (r = "/" + e.pathname), {
//           protocol: e.protocol,
//           host: e.host,
//           pathname: r,
//           search: e.search,
//           hash: e.hash,
//           parsedParams: s
//         }
//       }
//       composeUrl(t) {
//         return t.protocol + "//" + t.host + t.pathname + t.search + t.hash
//       }
//       stripAmpParts(t) {
//         let e = t,
//           i = this.parseUrl(t),
//           s = "cdn.ampproject.org";
//         if (i.host.indexOf(s) > 0 && i.host.indexOf(s) === i.host.length - s.length) {
//           let r = i.pathname.split("/");
//           if (typeof r[1] < "u" && (r[1] === "c" || r[1] === "v" || r[1] === "wp")) {
//             let p = !1;
//             typeof r[2] < "u" && r[2] === "s" && (p = !0), e = (p ? "https" : "http") + "://";
//             let u = 0;
//             for (let d of r) d !== "" && d !== "c" && d !== "v" && d !== "wp" && d !== "s" && (e += (u++ !== 0 ? "/" : "") + d);
//             e += i.search + i.hash
//           } else if (typeof r[1] > "u" || r[1] === "") {
//             let p = new RegExp(`.${s}/?$`);
//             e = e.replace(p, "").replace(/^0-/, "").replace(/-0$/, "").replace(/-+/g, u => u.length === 2 ? "-" : u.length === 1 ? "." : u)
//           }
//         }
//         return e
//       }
//       contextUriSanitize(t) {
//         if (t) {
//           t = this.stripAmpParts(t);
//           let e = this.parseUrl(t);
//           this.app.context._mgCanonicalUri = this.composeUrl(e)
//         }
//         return this.app.context._mgCanonicalUri
//       }
//       contextUriParse() {
//         if (!this.app.context._mgCanonicalUri) {
//           this.app.context._mgCanonicalUri = "";
//           try {
//             let t = this.getTopmostWindowAccessible(),
//               e = "",
//               i = t.document.querySelector('meta[property="og:url"]');
//             if (i && i.getAttribute("content") && i.getAttribute("content").indexOf("http") !== -1) e = i.getAttribute("content");
//             else {
//               let s = t.document.querySelector("link[rel='canonical']");
//               s && s.getAttribute("href") && s.getAttribute("href").indexOf("http") !== -1 && (e = s.getAttribute("href"))
//             }
//             if (e === "") {
//               switch (this.app.iframePlacementType) {
//                 case 0:
//                   e = this.app.pageUrl;
//                   break;
//                 case 1:
//                   e = this.app.pageUrl;
//                   break;
//                 case 2:
//                   e = this.app.refererUrl;
//                   break;
//                 case 3:
//                   try {
//                     e = this.app.context.context.canonicalUrl
//                   } catch { }
//                   e || (e = this.app.pageUrl !== "" ? this.app.pageUrl : this.app.refererUrl);
//                   break
//               }
//               this.contextUriSanitize(e)
//             } else this.app.context._mgCanonicalUri = e
//           } catch { }
//         }
//         return this.app.context._mgBackfillCxurl || this.app.context._mgCanonicalUri
//       }
//     }
//   });
//   var is = {};
//   Z(is, {
//     PageViewPixelBlock: () => _e
//   });
//   var _e, ss = z(() => {
//     T();
//     B();
//     K();
//     _e = class extends A {
//       constructor(t) {
//         super(t), this.name = "PageViewPixelBlock", this.sendPageViewPixel()
//       }
//       sendPageViewPixel() {
//         this.w = this.app.getMostTopWindow();
//         let t = this.w.location.pathname;
//         this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] = this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] || [];
//         let e = this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId],
//           i = Number(this.app.globalSettings?.ia_page_view_timeout) || 180,
//           s = 0,
//           r = 0;
//         try {
//           this.app.context.localStorage && (s = Number(this.app.context.localStorage.getItem("_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId)), r = Number(this.app.context.localStorage.getItem("_mgPvidTime")), new Date().getTime() - r > i * 1e3 && this.app.context.localStorage.setItem("_mgPvid", this.app.generatePvid()))
//         } catch { }
//         if (new Date().getTime() - s > i * 1e3 && Array.isArray(e) && e.indexOf(t) === -1) {
//           e.push(t);
//           let p = this.getPageViewPixelParams(),
//             u = {};
//           for (let d in p) p[d] && (u[d] = `${d}=${p[d]}`);
//           this.app.initServicerRequest && this.app.request.pixel("pageView", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/pv/", u, {})
//         }
//         this.app.initServicerRequest = !1
//       }
//       getPageDataParams() {
//         let t = {};
//         this.setPageData();
//         try {
//           if (!sessionStorage.MG_Session_lastUpdate || Number(sessionStorage.MG_Session_lastUpdate) + 30 * 60 * 1e3 < Date.now()) {
//             let e = this.app.contextBlock.stripAmpParts(this.app.refererUrl)?.match(/:\/\/([^\/:]+)/i);
//             sessionStorage.MG_Session_pr = e && e[1] ? e[1] : "", sessionStorage.MG_Session_lu = this.app.pageUrl
//           }
//           sessionStorage.MG_Session_lastUpdate = Date.now(), sessionStorage && sessionStorage.MG_Session_pr && (t.pr = encodeURIComponent(sessionStorage.MG_Session_pr)), sessionStorage && sessionStorage.MG_Session_lu && (t.lu = encodeURIComponent(sessionStorage.MG_Session_lu))
//         } catch { }
//         return t.cbuster = this.app.getCbusterParameter(), t.pvid = this.app.pvid, this.app.context["isFBIA" + this.app.widgetParams.WIDGET.id] ? t.implVersion = 14 : (this.app.versionWidget && (t.implVersion = this.app.versionWidget), this.app.isAmp() && (t.implVersion = 12), this.app.isAmp() && this.app.isSingleJS && (t.implVersion = 18), typeof this.app.context._mgBackfillImplVersion < "u" && (t.implVersion = Number(this.app.context._mgBackfillImplVersion))), t.cxurl = encodeURIComponent(this.app.contextBlock.contextUriParse()), t
//       }
//       setPageData() {
//         this.app.pageView = 0;
//         let t = !1;
//         try {
//           t = !!this.app.context["isFBIA" + this.app.widgetParams.WIDGET.id] && !!this.app.context.localStorage
//         } catch { }
//         if (this.app.pvid || (this.app.pvid = this.app.generatePvid()), t) {
//           let e = this.app.context.localStorage.getItem("_mgPageView" + this.app.widgetParams.WIDGET.siteId),
//             i = Number(this.app.globalSettings.ia_page_view_timeout) || 180;
//           (!e || new Date().getTime() - parseInt(e) > i * 1e3) && !this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageView" + this.app.widgetParams.WIDGET.siteId, new Date().getTime().toString()), this.app.pageView = 1), this.app.initServicerRequest && (this.app.context.localStorage.setItem("_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId, new Date().getTime().toString()), this.app.context.localStorage.setItem("_mgPvidTime", new Date().getTime().toString()), this.app.pageView = 1);
//           let s = this.app.context.localStorage.getItem("_mgPvid");
//           s && (this.app.pvid = s)
//         } else {
//           let e = this.w.location.pathname;
//           this.w["_mgPageView" + this.app.widgetParams.WIDGET.siteId] = this.w["_mgPageView" + this.app.widgetParams.WIDGET.siteId] || [];
//           let i = this.w["_mgPageView" + this.app.widgetParams.WIDGET.siteId];
//           this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] = this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId] || [];
//           let s = this.w["_mgPageViewEndPoint" + this.app.widgetParams.WIDGET.siteId];
//           this.w._mgPvidList = this.w._mgPvidList || [];
//           let r = this.w._mgPvidList;
//           Array.isArray(i) && i.indexOf(e) === -1 && !this.app.initServicerRequest && (i.push(e), this.app.pageView = 1), Array.isArray(s) && s.indexOf(e) === -1 && this.app.initServicerRequest && (s.push(e), this.app.pageView = 1), typeof this.w._mgPvid < "u" && (this.app.pvid = this.w._mgPvid), Array.isArray(r) && r.indexOf(e) === -1 && (r.push(e), this.app.pvid = this.app.generatePvid(), this.w._mgPvid = this.app.pvid)
//         }
//       }
//       getPageViewPixelParams() {
//         let t = {
//           ...this.getPageDataParams(),
//           site: this.app.widgetParams.WIDGET.widgetClientSiteId,
//           cid: this.app.id,
//           i: 1
//         },
//           e = this.app.getUserAgentDataParams();
//         return e && (t = {
//           ...t,
//           ...e
//         }), t
//       }
//     }
//   });
//   var as = {};
//   Z(as, {
//     MainBlock: () => Ge
//   });
//   var Ge, rs = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     Ge = class extends A {
//       constructor(t) {
//         super(t), this.cappingRealShowTime = 0, this.widgetRealShowTime = 0, this.name = "MainBlock", this.addHook("beforeInitHooks", () => {
//           this.app.addEvent(this.app.root, "mousemove", e => {
//             this.app.root.mouseX = e.pageX - this.app.root.offsetLeft, this.app.root.mouseY = e.pageY - this.app.root.offsetTop
//           })
//         }), this.setAppFunctions(), this.addHook("afterPrepareCappingDataHooks", () => {
//           this.cappingRealShowTime = this.app.getCurrentTimestamp()
//         }), this.addHook("observerWidgetHooks", (e, i) => {
//           e && i >= .01 && (this.widgetRealShowTime = this.app.getCurrentTimestamp())
//         }), this.addHook("afterLoadNewsHooks", () => {
//           this.fixWrongExternalImages(), this.app.widgetParams.WIDGET.type === "header-widget" && this.fixHeaderWidgetHeight()
//         }), this.addHook("afterInitHooks", this.sendBannerInfoListener), this.addHook("afterPrepareCappingDataHooks", this.renderLazyBanners), this.addHook("afterLoadNewsHooks", this.setAltToImages), this.addHook("afterLoadNewsHooks", this.fixBackfillDomainPlacement)
//       }
//       setAppFunctions() {
//         this.app.extractClass = t => {
//           if (t && typeof t.className < "u") {
//             let e = t.className.replace(/\s/g, ".").split(".")[0];
//             if (e) return e.replace(`${this.app.widgetParams.WIDGET.id}`, "")
//           }
//           return ""
//         }, this.app.getCurrentTimestamp = () => Math.floor(Date.now() / 1e3), this.app.prepareNiceHref = (t, e, i) => {
//           let s = "",
//             r = this.app.clickTracking,
//             p = this.app.teaserData[t];
//           if (!(!p || p?.type !== $.Teaser)) {
//             if (this.app.isAzerionTeaser(null, t) && (r = ""), p.coopType !== F.InternalExchange && p.sdl == 1) {
//               if (s = r, p.dl !== "") s += p.dl;
//               else {
//                 let u = decodeURIComponent(p.source.replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")).toLowerCase(),
//                   d = decodeURIComponent(p.title.replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")).replace(/\s/g, "_");
//                 s += this.app.webProtocol + "//" + (u ? u + "/" : "") + d
//               }
//               r.length && s.indexOf(r) !== -1 && (s = r + encodeURIComponent(s.replace(r, "")))
//             } else s = this.app.prepareHref(t, e, i);
//             return s
//           }
//         }, this.app.prepareHref = (t, e, i) => {
//           let s = "",
//             r = "",
//             p = this.app.clickTracking,
//             u = this.app.teaserData[t],
//             d = this.app.getQueryParameterByName("dc"),
//             f = this.getClickZone();
//           if (this.app.isAzerionTeaser(null, t) && (p = ""), i && this.app.context._mgExternalLinkChanger === 1) {
//             let b = i.search;
//             if (s = i.protocol + "//" + i.hostname + i.pathname, b.length) {
//               b = b.replace("?", "");
//               let k = b.split("&");
//               for (let S = 0; S < k.length; S++) {
//                 let y = k[S].split("=");
//                 y[0] != "k" && y[0] != "dc" && (s += (S == 0 ? "?" : "&") + k[S])
//               }
//             }
//           } else s = p + this.app.webProtocol, u ? u.link && (/^http[s]?:/.test(u.link) ? s = p + u.link : u.coopType === F.InternalExchange ? s = p + this.app.intExchangeProtocol + u.link : s = p + this.app.webProtocol + u.link) : s = "#";
//           if (this.app.clickableDelay && this.app.activateDelayBlock && this.app.activateDelayBlock.isWagesLink(i) && (r = "dc=1"), r = d ? "dc=" + parseInt(d) : r, r = f !== "" && r === "" ? "dc=" + f : r, r.length && (s += (s.indexOf("?") >= 0 ? "&" : "?") + r), this.app.transitParamsInit) {
//             let b = this.app.getQueryParameterByName("extclckid");
//             b && /[\&\?]extclckid\=/.test(s) === !1 && (s += (s.indexOf("?") >= 0 ? "&" : "?") + "extclckid=" + b)
//           }
//           if (u && u.coopType !== F.InternalExchange && u.coopType !== F.Azerion && (this.app.antifraudBlock?.getAntifraudParams && (s += this.app.getAntifraudQueryParameter(s, e, i)), this.cappingRealShowTime && /[\&\?]crst\=/.test(s) === !1 && (s += (s.indexOf("?") >= 0 ? "&" : "?") + "crst=" + this.cappingRealShowTime), this.widgetRealShowTime && /[\&\?]wrst\=/.test(s) === !1 && (s += (s.indexOf("?") >= 0 ? "&" : "?") + "wrst=" + this.widgetRealShowTime)), this.app.context.transitType && /[\&\?]trt\=/.test(s) === !1 && (s += (s.indexOf("?") >= 0 ? "&" : "?") + "trt=" + this.app.context.transitType), p.length && s.indexOf(p) !== -1 && (s = p + encodeURIComponent(s.replace(p, ""))), i && /[\&\?]wct\=/.test(s) === !1 && this.getParameterFromLink(i, "wct") && (s += (s.indexOf("?") === -1 ? "?" : "&") + this.getParameterFromLink(i, "wct")), u && u.coopType !== F.InternalExchange && u.coopType !== F.DirectPublisherDemand && u.coopType !== F.Azerion) {
//             if (e?.type === "click") {
//               let k = e.target,
//                 S = "." + this.app.extractClass(k),
//                 y = k.tagName;
//               if (y === "A") {
//                 let D = k.parentNode;
//                 y = D.tagName, S = "." + this.app.extractClass(D)
//               }
//               s += (s.indexOf("?") >= 0 ? "&" : "?") + "ce=" + y + S
//             }
//             let b = this.app.getMuid();
//             b.length && s.indexOf("muid") < 0 && (s += (s.indexOf("?") >= 0 ? "&" : "?") + "muid=" + b)
//           }
//           return this.app.context.transitThrownParams && this.app.context.transitThrownParams.forEach(b => {
//             let k = this.app.getQueryParameterByName(b);
//             k && k.length > 0 && (s = this.replaceUrlParam(s, b, k))
//           }), s
//         }, this.app.getAntifraudQueryParameter = (t, e, i) => {
//           let s = this.app.antifraudBlock.getAntifraudParams(e, i);
//           if (s) {
//             let r = this.app.id;
//             return (t.indexOf("?") >= 0 ? "&" : "?") + "k=" + r + "f" + s
//           }
//           return ""
//         }, this.app.getTranslation = t => {
//           let e = this.app.widgetParams.GENERAL.translations;
//           return t.search(/^\[\S*\]$/g) === 0 ? e[t] ? e[t] : "" : t
//         }, this.app.getParentLink = t => {
//           for (; t && t.tagName !== "BODY";) {
//             if (t.tagName === "A") return t;
//             t = t.parentElement
//           }
//           return null
//         }, this.app.getParentElWithClass = (t, e) => {
//           try {
//             for (; t && t.tagName !== "BODY";) {
//               if (t.classList.contains(e)) return t;
//               t = t.parentElement
//             }
//           } catch {
//             return null
//           }
//           return null
//         }, this.app.findClosest = (t, e) => {
//           let i;
//           for (; t.parentNode;) {
//             i = t.parentNode.querySelectorAll(e);
//             for (let s = 0; s < i.length; s++)
//               if (t.isEqualNode(i[s])) return i[s];
//             t = t.parentNode
//           }
//           return null
//         }, this.app.htmlToElement = t => {
//           let e = document.createElement("div");
//           return e.innerHTML = t, e.firstChild
//         }, this.app.concatUniqueArray = (t, e) => t.concat(e.filter(i => t.indexOf(i) < 0)), this.app.getExceptTeasersIds = t => {
//           let e = Number(this.app.globalSettings?.except_ads_limit) || 150,
//             i = this.app.context.document?.mgExceptIds?.[t] || [],
//             s = [],
//             r = [];
//           switch (t) {
//             case F.Wages:
//               s = this.app.context._mgExceptAds || [], r = this.app.exceptAdsList;
//               break;
//             case F.InternalExchange:
//               s = this.app.context._mgIntExchangeNews || [];
//               break;
//             case F.Exchange:
//               s = this.app.context._mgExchangeNews || [], r = this.app.exceptExchangeList;
//               break
//           }
//           return s.length && (r = this.app.concatUniqueArray(r, s)), i.length && (r = this.app.concatUniqueArray(r, i)), r.length > e && (r = r.slice(r.length - e)), r
//         }, this.app.tox64String = (t, e) => {
//           e = e || !1;
//           let i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
//             s = "",
//             r, p, u, d, f, b, k, S = 0;
//           for (; S < t.length;) r = t.charCodeAt(S++), p = t.charCodeAt(S++), u = t.charCodeAt(S++), d = r >> 2, f = (r & 3) << 4 | p >> 4, b = isNaN(p) ? 64 : (p & 15) << 2 | u >> 6, k = isNaN(u) ? 64 : u & 63, s += i.charAt(d) + i.charAt(f) + i.charAt(b) + i.charAt(k);
//           return e === !0 && (s = s.replace("+", "-").replace("/", "_").replace("=", "*")), s
//         }, this.app.hangNiceLinkListener = (t, e) => {
//           if (this.app.loadedDefault) return;
//           let i = t.getAttribute("data-hash");
//           return this.app.teaserData[i] && this.app.teaserData[i].type === $.Teaser && this.app.teaserData[i].sdl && (this.app.teaserData[i].sdl = 0), t[this.app.hrefAttr] = this.app.prepareHref(i, e, t), !0
//         }, this.app.eventsHangNiceLinkListener = t => {
//           t || (t = this.app.context.event);
//           let e = t.target || t.srcElement;
//           e.tagName != "A" && (e = this.app.getParentLink(e), e === null) || e.hasAttribute("data-hash") && this.app.hangNiceLinkListener(e, t)
//         }, this.app.isHiddenElement = t => {
//           for (; t.tagName !== "BODY";) {
//             if (t.style.position !== "fixed" && t.offsetParent || t.style.visibility === "hidden" || t.style.display === "none") return !0;
//             t = t.parentNode
//           }
//           return !1
//         }, this.app.random = (t, e) => Math.floor(t + Math.random() * (e - t + 1)), this.app.isTouchDevice = () => "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0, this.app.getExpectedCountNews = () => {
//           let t = this.app.widgetParams.WIDGET.countNews,
//             e = JSON.parse(this.app.widgetParams.WIDGET.mobileCountNews);
//           if (this.app.isMobile() && typeof e.mobile < "u" && (t = e.mobile), this.app.widgetParams.WIDGET.adblockIntegration && this.app.adBlockDetect()) {
//             for (let i in this.app.childWidgetsData)
//               if (this.app.childWidgetsData.hasOwnProperty(i) && this.app.childWidgetsData[i].isAdblockChild) {
//                 t = this.app.childWidgetsData[i].childCountNews;
//                 break
//               }
//           }
//           return t
//         }, this.app.isPassiveSupported = () => {
//           if (typeof this.app.passiveIsSupported < "u") return this.app.passiveIsSupported;
//           this.app.passiveIsSupported = !1;
//           try {
//             window.addEventListener("test", null, Object.defineProperty({}, "passive", {
//               get: function () {
//                 this.app.passiveIsSupported = !0
//               }
//             }))
//           } catch { }
//           return this.app.passiveIsSupported
//         }, this.app.getWidgetValue = (t, e) => {
//           let i = JSON.parse(this.app.widgetParams.WIDGET.childProperties);
//           return this.app.originalId !== this.app.id && typeof i[this.app.id]?.[t] < "u" ? i[this.app.id][t] : e
//         }, this.app.isEnabledDoubleClick = () => typeof this.app.servicerData.dcb < "u"
//       }
//       fixWrongExternalImages() {
//         let t = this.app.root.getElementsByClassName("mg-wrong-image");
//         if (t.length > 0 && this.app.debugBlock.sendData("Wrong external images count: " + t.length), t.length)
//           for (let e = 0; e < t.length; e++) {
//             let i = t[e],
//               s = i.src;
//             i.src = this.app.blankImage, setTimeout(() => {
//               let r = i.getBoundingClientRect();
//               i.classList.add("mg-wrongImage" + e), i.src = s, this.app.stylesheetsBlock.add("wrongImage" + e, ".mg-wrongImage" + e + " { width: " + r.width + `px !important;
// height: ` + r.height + `px !important;
// object-fit: cover;
// -o-object-fit: cover;
// object-position: top;
// -o-object-position: top;
//  }`), this.app.debugBlock.sendData("fixWrongExternalImages. " + JSON.stringify(r))
//             }, 50)
//           }
//       }
//       fixHeaderWidgetHeight() {
//         let t = "M" + this.app.widgetParams.WIDGET.siteId + "ScriptRootC" + this.app.widgetParams.WIDGET.id,
//           e = this.app.context.document.getElementById(t);
//         e || (e = this.app.getRoot()), e && e.setAttribute("style", "min-height:auto !important;")
//       }
//       getClickZone() {
//         let t = JSON.parse(this.app.widgetParams.WIDGET.widgetClickZones);
//         if (t.length === 0 || !t.top || !t.left || !t.right || !t.bottom) return "";
//         let e = this.app.root.offsetHeight,
//           i = this.app.root.offsetWidth,
//           s = this.app.root.mouseX,
//           r = this.app.root.mouseY,
//           p = {
//             top: e / 100 * t.top,
//             left: i / 100 * t.left,
//             right: i - i / 100 * t.right,
//             bottom: e / 100 * t.bottom
//           },
//           u = r <= p.top ? 0 : r >= p.bottom ? 2 : 1,
//           d = s <= p.left ? 0 : s >= p.right ? 2 : 1;
//         return [
//           [2, 3, 4],
//           [5, "", 6],
//           [7, 8, 9]
//         ][u][d]
//       }
//       getParameterFromLink(t, e) {
//         let i = t?.search;
//         if (i === "") return null;
//         let s = i.replace("?", "").split("&");
//         for (let r = 0; r < s.length; r++)
//           if (s[r].split("=")[0] === e) return s[r];
//         return null
//       }
//       replaceUrlParam(t, e, i) {
//         let s = new RegExp("\\b(" + e + "=).*?(&|#|$)");
//         return i === null ? t : t.search(s) >= 0 ? t.replace(s, "$1" + i + "$2") : (t = t.replace(/[?#]$/, ""), t + (t.indexOf("?") > 0 ? "&" : "?") + e + "=" + i)
//       }
//       renderLazyBanners(t) {
//         this.app.root && this.app.teaserData[t].type === "banner" && this.app.renderBanners(!1, this.app.teaserData[t].iteration)
//       }
//       fixBackfillDomainPlacement() {
//         if (typeof this.app.context._mgIsBackfillBanner < "u") {
//           let t = this.app.root.querySelector(".mcdomain");
//           if (!t) return;
//           typeof this.app.context._mgBackfillStyles < "u" && !this.app.widgetParams.WIDGET.customStylesEnabled ? this.app.context._mgBackfillStyles.indexOf(".mcdomain-top") === -1 && this.app.root.querySelector(".mctitle")?.insertAdjacentElement("afterend", t) : t.style.display = "block"
//         }
//       }
//       setAltToImages() {
//         if (this.app.root) {
//           let t = this.app.root.getElementsByTagName("img");
//           for (let e = 0; e < t.length; e++) t[e].getAttribute("alt") === null && t[e].setAttribute("alt", "")
//         }
//       }
//       sendBannerInfoListener() {
//         try {
//           this.app.context.addEventListener("message", ({
//             data: t
//           }) => {
//             if (t && t.type === "_mgBannerInfo") {
//               let e = this.app.root.querySelector(`#${t.id}`);
//               if (!e) return;
//               let i = this.app.teaserData[e.dataset.hash],
//                 s = Math.round(e.parentElement.getBoundingClientRect().width),
//                 r = Math.round(this.app.root.querySelector(".mgbox").getBoundingClientRect().width);
//               if (t.isEmpty && (e.style.display = "none", e.parentElement.style.display = "none"), t.height && (e.style.height = t.height + "px", i.type === $.Banner)) {
//                 let p = s >= .95 * r && s <= r ? 650 : this.app.preRenderTeaserSizes[i.iteration - 1].height + 50;
//                 e.style.maxHeight = p + "px"
//               }
//               t.width && i.type === $.Banner && (e.style.width = t.width + "px", e.style.maxWidth = s + "px")
//             }
//           }, !1)
//         } catch { }
//       }
//     }
//   });
//   var os = {};
//   Z(os, {
//     ResponseParserBlock: () => Oe
//   });
//   var Oe, ns = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     Oe = class extends A {
//       getParsedTeaserData(t, e) {
//         let i = this.getServicerTeaser(t),
//           s = (1 - parseFloat(i.price) / parseFloat(i.priceold)) * 100;
//         return s <= 1 || s > 100 ? (i.priceold = "", i.discount = "") : i.discount = s ? `${Math.floor(s)}%` : "", e === 1 && i.other?.type === F.Azerion && (this.app.widgetCappingEnabled = !0), {
//           type: $.Teaser,
//           hash: i.hash,
//           id: i.id,
//           source: i.source,
//           title: i.title,
//           desc: i.desc,
//           price: i.price,
//           priceold: i.priceold,
//           discount: i.discount,
//           category: i.other.category,
//           catId: i.other?.catId || null,
//           icat: i.other?.icat || null,
//           cta: i.other.cta ?? "",
//           cdt: i.other.cdt ?? "",
//           img: i.other.i ? this.app.htmlEntities(i.other.i) : this.app.blankImage,
//           link: i.other.l ?? "",
//           mirror: i.mirror,
//           extd: i.other.extd,
//           coopType: i.other.type ?? null,
//           mediaType: i.other["media-type"],
//           sdl: this.app.deviceType !== Ft.Desktop ? 0 : i.other.sdl,
//           dl: i.other.dl,
//           clicktrackers: i.other.clicktrackers ?? [],
//           imp: i.other.imp ?? [],
//           impt: i.other.impt ?? [],
//           jst: i.other.jst ?? [],
//           iteration: e,
//           page: this.app.pagesServicerData.length,
//           cdomain: i.other.cdomain || null,
//           ccid: i.other.ccid || null,
//           ch: i.other.ch || null,
//           isViewed: !1,
//           dsa_link: i.other.dsa_link || null,
//           bidPrice: i.other.b ? parseFloat(i.other.b) : 0,
//           requestId: i.other?.tri || null,
//           nextUpIteration: i.other?.nextUpIteration || null
//         }
//       }
//       getServicerTeaser(t) {
//         return {
//           source: this.app.htmlEntities(t[0]),
//           id: this.app.htmlEntities(t[1]),
//           title: t[3] ? this.app.prepareTitle(t[3]) : "",
//           desc: t[4] ? this.app.prepareDesc(t[4]) : "",
//           mirror: this.app.widgetParams.WIDGET.widgetMirror,
//           key: t[6],
//           price: t[7] ? this.app.htmlEntities(t[7]).replace(",00", "").replace(new RegExp("[^0-9,]"), "") : "",
//           priceold: t[8] ? this.app.htmlEntities(t[8]).replace(",00", "").replace(new RegExp("[^0-9,]"), "") : "",
//           discount: "",
//           other: t[10] ? t[10] : {},
//           hash: t[9]
//         }
//       }
//       getParsedBannerData(t, e) {
//         (this.app.widgetParams.WIDGET.type === "in-article" && this.app.widgetParams.WIDGET.autoPlacementStatus !== "off" || this.app.widgetParams.WIDGET.type === "in-article" && this.app.widgetParams.WIDGET.autoPlacementStatus === "off" && this.app.widgetParams.WIDGET.subType !== "in-article-carousel-super") && (t.rs = !0);
//         let s = "mgBanner_" + this.app.widgetParams.WIDGET.id + "_" + this.app.pagesServicerData.length + "_" + e;
//         return {
//           type: $.Banner,
//           id: s,
//           hash: t.h,
//           coopType: F.Wages,
//           imp: t.imp ?? [],
//           page: this.app.pagesServicerData.length,
//           iteration: e,
//           impt: t.impt ?? [],
//           jst: t.jst ?? [],
//           html: t.html,
//           width: t.width ?? 0,
//           height: t.height ?? 0,
//           rs: t.rs ?? !1,
//           useSecureIframe: !1,
//           clickUrl: t.clickUrl,
//           isViewed: !1
//         }
//       }
//       getCustomBannerData(t, e) {
//         e === 1 && (this.app.widgetCappingEnabled = !0), this.app.consentDataParams && (typeof this.app.consentDataParams.gdpr < "u" && typeof this.app.consentDataParams.gdpr_consent < "u" && (t = t.replace(/\${GDPR}/g, String(this.app.consentDataParams.gdpr)).replace(/\${GDPR_CONSENT}/g, this.app.consentDataParams.gdpr_consent)), typeof this.app.consentDataParams.us_privacy < "u" && (t = t.replace(/\${CCPA}/g, this.app.consentDataParams.us_privacy)));
//         let i = "mgBanner_" + this.app.widgetParams.WIDGET.id + "_" + this.app.pagesServicerData.length + "_" + e;
//         return {
//           type: $.Banner,
//           hash: "",
//           coopType: F.Wages,
//           imp: [],
//           page: this.app.pagesServicerData.length,
//           iteration: e,
//           impt: [],
//           jst: [],
//           html: t,
//           id: i,
//           width: 0,
//           height: 0,
//           rs: !1,
//           useSecureIframe: !this.app.widgetParams.WIDGET.disableBannerSafeframe,
//           clickUrl: "",
//           isViewed: !1,
//           isCustomBanner: !0
//         }
//       }
//       getParsedGptData(t, e) {
//         let i = this.app.getWidgetValue("gptOptions", null);
//         i && (this.app.gptOptions = i);
//         let s = "mgGpt_" + this.app.widgetParams.WIDGET.id + "_" + this.app.pagesServicerData.length + "_" + e,
//           r = Object.keys(this.app.preRenderTeaserSizes).filter(d => this.app.preRenderTeaserSizes[d].position === e).map(d => this.app.preRenderTeaserSizes[d])[0],
//           p = t?.price ? this.formatPrice(t.price) : null,
//           u = this.app.gptOptions?.price ? "d" + this.formatPrice(this.app.gptOptions.price) : null;
//         return e === 1 && (this.app.widgetCappingEnabled = !0), {
//           id: s,
//           type: $.Gpt,
//           hash: "",
//           coopType: F.Wages,
//           page: this.app.pagesServicerData.length,
//           iteration: e,
//           imp: [],
//           impt: [],
//           jst: [],
//           width: r?.width || 0,
//           height: r?.height || 0,
//           afrd: this.app.servicerData.afrd || 0,
//           divId: this.app.gptOptions.divId,
//           slot: this.app.gptOptions.slot,
//           lazy: this.app.gptOptions?.lazy || null,
//           backfill: this.app.gptOptions?.backfill || null,
//           lineItemFlow: this.app.gptOptions?.lineItemFlow || !1,
//           isRendered: !1,
//           isViewed: !1,
//           slotPrice: p || u,
//           loadAfterActivity: this.app.gptOptions?.loadAfterActivity || !1,
//           loggingEnabled: this.app.gptOptions?.loggingEnabled || !1,
//           refreshTime: this.app.gptOptions?.refreshTime || null,
//           loadBackfillImmediately: this.app.gptOptions?.loadBackfillImmediately || !1,
//           googleLazyEnabled: this.app.gptOptions?.googleLazyEnabled || !1,
//           googleLazyOptions: this.app.gptOptions?.googleLazyOptions || null
//         }
//       }
//       getAdUnitsFromJson(t) {
//         let e = [];
//         return Array.isArray(t) && t.forEach((i, s) => {
//           let r = s + 1;
//           if ("gpt" in i) {
//             let p = this.getParsedGptData(i, r);
//             e.push(p)
//           } else if ("html" in i) {
//             let p = this.getParsedBannerData(i, r);
//             e.push(p)
//           } else if (this.app.customBanners[this.app.id]?.[r]?.length > 0) {
//             let p = this.getCustomBannerData(this.app.customBanners[this.app.id][r], r);
//             e.push(p)
//           } else {
//             let p = this.getParsedTeaserData(i, r);
//             e.push(p)
//           }
//         }), e
//       }
//       fillAdUnitsData(t) {
//         t.forEach(e => {
//           switch (e.type) {
//             case $.Teaser:
//               this.fillTeaserData(e);
//               break;
//             case $.Banner:
//               this.fillBannerData(e);
//               break;
//             case $.Gpt:
//               this.fillGptData(e);
//               break
//           }
//         })
//       }
//       fillTeaserData(t) {
//         this.app.teaserData[t.hash] = t, t.coopType === F.InternalExchange && this.app.context._mgIntExchangeNews.indexOf(t.id) === -1 && this.app.context._mgIntExchangeNews.push(t.id), t.coopType === F.Wages && t.extd !== 1 && (this.app.exceptAdsList.indexOf(t.id) === -1 && this.app.exceptAdsList.push(t.id), (this.app.widgetParams.WIDGET.isNextUpAddWidget || this.app.widgetParams.WIDGET.nextUpEnabled) && this.app.context._mgExceptAds.indexOf(t.id) === -1 && this.app.context._mgExceptAds.push(t.id)), t.coopType === F.Exchange && this.app.exceptExchangeList.indexOf(t.id) === -1 && this.app.exceptExchangeList.push(t.id)
//       }
//       fillBannerData(t) {
//         this.app.teaserData[t.hash || t.id] = t, this.app.banners[t.id] = t
//       }
//       fillGptData(t) {
//         this.app.teaserData[t.id] = t
//       }
//       formatPrice(t) {
//         return parseFloat(String(t)).toFixed(2)
//       }
//     }
//   });
//   var ps = {};
//   Z(ps, {
//     CookieBlock: () => Re
//   });
//   var Re, cs = z(() => {
//     T();
//     B();
//     K();
//     Re = class extends A {
//       constructor(t) {
//         super(t), this.name = "CookieBlock", this.cookieStorage = {}, this.storageName = this.app.widgetParams.WIDGET.cookieStoragePrefix + "Storage" + (this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "PageOffset"] ? this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "PageOffset"] : "")
//       }
//       getCookieValue() {
//         if (this.app.widgetParams.WIDGET.disableCookies) return {};
//         try {
//           let t = this.app.context.document.cookie?.match(new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")),
//             e = {};
//           return t && (e = JSON.parse(decodeURIComponent(t[1]))), e
//         } catch { }
//       }
//       getCookie() {
//         let t = this.getCookieValue();
//         typeof t["C" + this.app.widgetParams.WIDGET.id] < "u" ? this.cookieStorage = t["C" + this.app.widgetParams.WIDGET.id] : this.cookieStorage = {}
//       }
//       setCookie(t) {
//         if (!this.app.widgetParams.WIDGET.disableCookies) {
//           let e = t || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString(),
//             i = this.app.isAmp() ? ";domain=.ampproject.net;expires=" + e + ";SameSite=None;Secure" : ";path=/",
//             s = this.getCookieValue();
//           Object.keys(this.cookieStorage).length && (s["C" + this.app.widgetParams.WIDGET.id] = this.cookieStorage);
//           try {
//             if (Object.keys(s).length) {
//               let r = encodeURIComponent(JSON.stringify(s));
//               this.app.context.document.cookie = this.storageName + "=" + r + i
//             }
//           } catch { }
//         }
//       }
//     }
//   });
//   var hs = {};
//   Z(hs, {
//     StylesheetsBlock: () => He
//   });
//   var He, ls = z(() => {
//     T();
//     B();
//     K();
//     He = class extends A {
//       constructor(t) {
//         super(t), this.name = "StylesheetsBlock", this.isIE = typeof Proxy > "u", this.stylesDom = {}, this.isIE || (this.stylesDom = new Proxy(this.stylesDom, {
//           set: (e, i, s) => {
//             let r = s.container,
//               p = s.style;
//             return e[i] && delete this.stylesDom[i], this.inject(p, i, r), e[i] = s, !0
//           },
//           has: (e, i) => this.app.root.querySelector("style#" + i) === null && typeof e[i] < "u" ? !1 : typeof e[i] < "u",
//           deleteProperty: (e, i) => (this.removeFromDom(i), delete e[i], !0)
//         }))
//       }
//       add(t, e, i = null) {
//         t += "_" + this.app.uniqId, !(!this.isIE && typeof i > "u" && t in this.stylesDom) && (e = e.replace(/((@media|@supports not) \([^(]*\) {)/g, "$1}"), e = e.replace(/((?:^|}|,|;)\s*)((?:\w+)?\.(?:mc|mg|row)[\-\w]+)/g, "$1" + this.app.getMainCssSelector() + " $2"), e = e.replace(/(((@media|@supports not) \([^(]*\) \{)\})/g, "$2"), e = e.replace(/video-cdn\.(.+)\/mgPlayer/g, this.app.currentSubnetDomain), e.length && (this.isIE ? (this.removeFromDom(t), this.inject(e, t, i)) : this.stylesDom[t] = {
//           style: e,
//           container: i
//         }))
//       }
//       remove(t) {
//         t += "_" + this.app.uniqId, !this.isIE && t in this.stylesDom ? delete this.stylesDom[t] : this.removeFromDom(t)
//       }
//       removeFromDom(t) {
//         let e = this.app.root.querySelector("#" + t);
//         e && e.parentNode.removeChild(e)
//       }
//       inject(t, e, i) {
//         if (i) {
//           let s = i;
//           if (s.className = this.app.widgetParams.WIDGET.modulePrefix + this.app.widgetParams.WIDGET.id, s.styleSheet) s.styleSheet.cssText = t;
//           else {
//             for (; s.firstChild;) s.removeChild(s.firstChild);
//             s.appendChild(this.app.context.document.createTextNode(t))
//           }
//         } else {
//           let s = this.app.context.document.createElement("style");
//           s.setAttribute("id", e), s.className = this.app.widgetParams.WIDGET.modulePrefix + this.app.widgetParams.WIDGET.id, s.type = "text/css", (typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root).appendChild(s), s.styleSheet ? s.styleSheet.cssText = t : s.appendChild(this.app.context.document.createTextNode(t))
//         }
//       }
//     }
//   });
//   var ds = {};
//   Z(ds, {
//     AdvertLinkBlock: () => Me,
//     AdvertLinkSettings: () => zt
//   });
//   var zt, Me, us = z(() => {
//     T();
//     B();
//     K();
//     (function (m) {
//       m[m.Off = 0] = "Off", m[m.LogoAndTitle = 1] = "LogoAndTitle", m[m.OnlyTitle = 2] = "OnlyTitle", m[m.OnlyLogo = 3] = "OnlyLogo"
//     })(zt || (zt = {}));
//     Me = class extends A {
//       constructor(t) {
//         super(t), this.name = "AdvertLinkBlock", this.addHook("beforeLoadNewsHooks", this.refreshAdvertLink)
//       }
//       parseAdvertLink(t) {
//         let e = "<!--advertPrefix-->",
//           i = t.indexOf(e) > t.length / 2;
//         return i && this.removeElements(this.app.root.getElementsByClassName("mg_addad" + this.app.id)), (i || this.app.countLoadBlocks === 0) && (t.indexOf(e) >= 0 ? t = t.replace(e, this.app.tickerPrefix) : t = this.app.tickerPrefix + t), t
//       }
//       refreshAdvertLink() {
//         let t = this.getAdvertLinkValue(),
//           e = !1,
//           i = this.app.widgetParams.WIDGET.adBlockChangeStyles;
//         if (this.app.widgetParams.WIDGET.adblockIntegration && (e = this.app.adBlockDetect()), t || e && i) try {
//           let s = this.getAdLinkBlock()?.replace(/%id/g, String(this.app.id)),
//             r = "";
//           e ? r = this.app.getTranslation("[WIDGET_TITLE_PROMOTED_CONTENT]") : r = this.app.getTranslation(this.app.widgetParams.WIDGET.widgetTitle);
//           let p = navigator.language.substr(0, 2),
//             u = this.app.widgetParams.WIDGET.availableLangs.indexOf(p) !== -1 ? p : "";
//           this.app.widgetParams.WIDGET.useConstructor && (r = this.app.context.widgetConstructor.getWidgetTitle()), s = s.replace("%WIDGET_TITLE%", r), s = s.replace("%lang/", u.length ? u + "/" : ""), s = s.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"), s = s.replace('src="//', 'src="' + this.app.webProtocol + "//"), s = s.replace('href="//', 'href="' + this.app.webProtocol + "//");
//           let d = this.app.widgetParams.WIDGET.adLinkHref;
//           if (!d.length) {
//             d = this.app.subnetMirrorsUtm;
//             let b = this.app.context.document.location?.hostname;
//             if (this.app.context !== this.app.context.top) {
//               let k = this.app.context.document.referrer?.match(/:\/\/(.[^/]+)/);
//               k !== null && (b = k[1])
//             }
//             d = d.replace("{domain}", b)
//           }
//           this.app.tickerPrefix = s.replace(/%utm/, d);
//           let f = document.createElement("div");
//           if (e && i) f.innerHTML = this.app.tickerPrefix;
//           else {
//             if (t === zt.LogoAndTitle) return;
//             f.innerHTML = this.app.tickerPrefix, t === zt.OnlyTitle && this.removeElements(f.getElementsByClassName("mg_addad" + this.app.id)), t === zt.OnlyLogo && (this.removeElements(f.getElementsByClassName("mghead")), this.removeElements(f.getElementsByClassName("mghead" + this.app.id)))
//           }
//           this.app.tickerPrefix = f.innerHTML
//         } catch { } else this.app.tickerPrefix = ""
//       }
//       getAdvertLinkValue() {
//         return Number(this.app.widgetParams.WIDGET.adLink)
//       }
//       removeElements(t) {
//         for (let e = 0; e < t.length; e++) t[e].parentNode.removeChild(t[e])
//       }
//       getAdLinkBlock() {
//         let t = this.app.widgetParams.WIDGET.useConstructor ? this.app.context.widgetConstructor.getWidgetType() : this.app.widgetParams.WIDGET.type,
//           e = this.app.widgetParams.WIDGET.useConstructor ? this.app.context.widgetConstructor.getWidgetSubType() : this.app.widgetParams.WIDGET.subType,
//           i = this.app.widgetParams.WIDGET.widgetMirror,
//           s = this.app.widgetParams.ASSETS.customAdLinkConfig;
//         typeof s < "u" && typeof s[t] < "u" && (typeof s[t]["*"] < "u" && (i = s[t]["*"]), typeof s[t][e] < "u" && (i = s[t][e]));
//         let r = this.app.widgetParams.ASSETS.adLinkBlock;
//         return typeof r[i] > "u" && (i = this.app.widgetParams.WIDGET.widgetMirror), r[i]
//       }
//     }
//   });
//   var fs = {};
//   Z(fs, {
//     SendDimensionsBlock: () => Ve
//   });
//   var Ne, Ve, gs = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     Ne = {
//       title: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum",
//       domain: "Lorem ipsum dolor",
//       description: "Lorem ipsum dolor sit amet Lorem ipsum"
//     }, Ve = class extends A {
//       constructor(t) {
//         super(t), this.childMarginFixPixels = 1, this.adblockMinWidgetWidth = 500, this.adblockMaxPercentage = 0, this.bannerWidth = 300, this.bannerHeight = 250, this.bannerMinHeight = 220, this.name = "SendDimensionsBlock", this.isAdblock = this.app.widgetParams.WIDGET.adblockIntegration && this.app.adBlockDetect(), this.isBannerMacros = this.app.templateText.indexOf("$banner") !== -1 || this.app.templateText.indexOf('data-template-schema="banner"') !== -1, this.isBannerAllowed = this.app.widgetParams.WIDGET.bannersEnabled && this.isBannerMacros && !this.isAdblock, this.bannerStretchHeight = this.app.isMobile() ? 280 : this.bannerHeight, this.storageKey = `${(this.isAdblock ? "_mgAdbDimsData" : "_mgDimsData") + this.app.widgetParams.WIDGET.id}`, this.isPlaceReservation = this.app.widgetParams.WIDGET.usePlaceReservation && !this.app.isShowedUpFormat, this.styleAppliedPromise = new Promise(e => {
//           this.styleAppliedResolver = e
//         }), this.checkStorageDimsData()
//       }
//       waitForStyleApplied() {
//         return this.styleAppliedPromise
//       }
//       checkStylesApplied() {
//         let t, e = null,
//           i = () => {
//             if (e = this.app.root?.getElementsByClassName("mgbox")[0], e && e.dataset.noWaitStyles === "true") {
//               this.styleAppliedResolver();
//               return
//             }
//             if (e && this.app.context.getComputedStyle(e).textAlign === "center") {
//               clearInterval(t), this.styleAppliedResolver();
//               return
//             }
//           };
//         i(), t = setInterval(() => {
//           i()
//         }, 50)
//       }
//       calcPreRenderingBlock() {
//         this.app.precalcRect = {}, this.app.preRenderTeaserSizes = {}, this.app.preRenderImageSizes = {}, this.teasers = [].slice.call(this.app.root.getElementsByClassName("mgline")), this.isAdblock && this.reformatForAdblock(), typeof this.app.iframeSizeChangerBlock?.initIframeSizeChange == "function" && this.app.iframeSizeChangerBlock.initIframeSizeChange();
//         let t = this.app.root.getBoundingClientRect();
//         this.app.precalcRect.width = Math.ceil(t.width ? t.width : t.right - t.left), this.app.precalcRect.height = Math.ceil(t.height ? t.height : t.bottom - t.top) - this.childMarginFixPixels, this.app.requestParams.w = this.app.precalcRect.width, this.app.requestParams.h = this.app.precalcRect.height;
//         for (let e = 0; e < this.teasers.length; e++) {
//           let i = e + 1,
//             s = this.teasers[e];
//           this.calcPrerenderTeaserSizes(s, i)
//         }
//         if (this.isBannerAllowed) {
//           let e = Object.keys(this.app.preRenderTeaserSizes).map(p => this.app.preRenderTeaserSizes[p]);
//           e.every(p => p.height >= this.bannerHeight && p.width >= this.bannerWidth) && (this.app.requestParams.ident_p = !0);
//           let i = e.reduce((p, u) => {
//             let d = `${u.width}x${u.height}`,
//               f = p[d] || [];
//             return {
//               ...p,
//               [d]: [...f, u.position]
//             }
//           }, {});
//           this.app.requestParams.sz = Object.keys(i).join(";"), this.app.requestParams.szp = Object.keys(i).map(p => i[p]).join(";");
//           let s = e[0].top,
//             r = e.reduce((p, u) => {
//               let d = u.top + (s < 0 ? -s : 0),
//                 f = p[d] || [];
//               return {
//                 ...p,
//                 [d]: [...f, u.position]
//               }
//             }, {});
//           this.app.requestParams.szl = Object.keys(r).map(p => r[p]).join(";")
//         }
//         this.updateStorageDimsData(), this.cleanAfterPrerender(), this.performAfterPrerender()
//       }
//       cleanAfterPrerender() {
//         this.app.root = this.app.realRoot;
//         let t = "preRenderingBlock" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId,
//           e = this.app.root;
//         this.app.root.parentNode.id === t && this.app.root.parentNode.parentNode != null && (e = this.app.root.parentNode.parentNode), e.querySelector("#" + t) !== null && e.removeChild(e.querySelector("#" + t)), this.app.loadedType = "", this.app.countLoadBlocks = this.app.countLoadBlocksContainer, this.app.template = "", delete this.app.teaserData[""]
//       }
//       performAfterPrerender() {
//         this.app.root.style.overflow = "visible", this.app.root.style.visibility = "visible", this.isPlaceReservation && (this.app.root.style.width = this.app.precalcRect.width + "px", this.app.root.style.height = this.app.precalcRect.height + "px"), this.addHook("afterLoadNewsHooks", () => {
//           this.app.widgetParams.WIDGET.type === "banner" && Math.ceil(this.app.root.querySelector(".mgbox")?.getBoundingClientRect().width) > this.app.precalcRect.width && (this.app.root.style.overflow = "hidden"), this.isPlaceReservation && (this.app.root.style.width = "auto", this.app.root.style.height = "auto"), this.adblockMaxPercentage > 0 && this.changeWidgetWidth()
//         })
//       }
//       checkStorageDimsData() {
//         try {
//           if (this.app.context.localStorage) {
//             let t = null,
//               e = this.app.getLct(1739371452),
//               i = N.widgetBuilder,
//               s = Math.ceil(this.app.getRoot().getBoundingClientRect().width),
//               r = JSON.parse(this.app.context.localStorage.getItem(this.storageKey) || "[]").filter(p => p.rootWidth === s ? p.lct === e && p.hashCommit === i ? (t = p, !0) : !1 : !0);
//             t && (this.app.precalcRect = t.precalcRect, this.app.preRenderTeaserSizes = t.preRenderTeaserSizes, this.app.preRenderImageSizes = t.preRenderImageSizes, t.adblockMaxPercentage && (this.adblockMaxPercentage = t.adblockMaxPercentage), Object.keys(t.requestParams).forEach(p => {
//               this.app.requestParams[p] = t.requestParams[p]
//             }), this.addHook("beforeInitHooks", this.performAfterPrerender)), this.app.context.localStorage.setItem(this.storageKey, JSON.stringify(r))
//           }
//         } catch { }
//       }
//       updateStorageDimsData() {
//         let t = ["w", "h", "ident_p", "sz", "szp", "szl", "limitads"],
//           e = {};
//         e.requestParams = {}, e.precalcRect = this.app.precalcRect, e.preRenderTeaserSizes = this.app.preRenderTeaserSizes, e.preRenderImageSizes = this.app.preRenderImageSizes, e.lct = this.app.getLct(1739371452), e.hashCommit = N.widgetBuilder, e.rootWidth = Math.ceil(this.app.getRoot().getBoundingClientRect().width), this.adblockMaxPercentage > 0 && (e.adblockMaxPercentage = this.adblockMaxPercentage), Object.keys(this.app.requestParams).forEach(i => {
//           t.indexOf(i) !== -1 && (e.requestParams[i] = this.app.requestParams[i])
//         });
//         try {
//           if (this.app.context.localStorage) {
//             let i = JSON.parse(this.app.context.localStorage.getItem(this.storageKey) || "[]");
//             i.push(e), this.app.context.localStorage.setItem(this.storageKey, JSON.stringify(i))
//           }
//         } catch { }
//       }
//       preparePrerenderData(t) {
//         let e = this.app.context.document.createElement("div"),
//           i = this.app.context.document.createElement("div"),
//           s = t || this.app.getExpectedCountNews(),
//           r = [],
//           p = "preRenderingBlock" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId;
//         if (e.id = p, e.style.visibility = "hidden", i.id = this.app.root.id, i.style.padding = `${this.childMarginFixPixels}px 0 0 0`, i.style.margin = `-${this.childMarginFixPixels}px auto 0 auto`, e.appendChild(i), this.app.loadedType = "goods", this.app.realRoot = this.app.root, this.app.countLoadBlocksContainer = this.app.countLoadBlocks, this.app.root.appendChild(e), this.app.root = i, this.app.isShowedUpFormat && this.app.widgetParams.WIDGET.type !== "mobile-widget") {
//           let u = `#${p} {position: fixed;bottom: -150%;left: -150%;width: 100%;
//         opacity: 0;}#${p} div.mgbox {position: relative !important;}`;
//           this.app.stylesheetsBlock.add("preRender", u), this.app.widgetParams.WIDGET.popup && (this.app.widgetParams.WIDGET.type === "mobile-exit" ? this.app.mobileExitBlock.updateWrapperWidth(e) : this.app.popupBlock.updateWrapperStyles(e))
//         }
//         for (let u = 1; u <= s; u++) r.push({
//           type: $.Teaser,
//           coopType: F.Wages,
//           hash: "",
//           id: u.toString(),
//           source: Ne.domain,
//           title: Ne.title,
//           desc: Ne.description,
//           img: this.app.blankImage,
//           price: "",
//           priceold: "",
//           discount: "",
//           iteration: u,
//           imp: [],
//           impt: [],
//           clicktrackers: [],
//           jst: [],
//           category: "",
//           catId: null,
//           icat: null,
//           cdt: "",
//           cta: "",
//           dl: "",
//           extd: 0,
//           link: "",
//           mediaType: "",
//           mirror: "",
//           page: 1,
//           sdl: 0,
//           dsa_link: null,
//           bidPrice: 0,
//           requestId: null,
//           nextUpIteration: null
//         });
//         return this.app.teaserData[""] = r[0], r
//       }
//       prerenderNews(t) {
//         if (this.app.root && t) {
//           this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = ""), this.app.advertLinkBlock.refreshAdvertLink(), t = this.app.advertLinkBlock.parseAdvertLink(t), this.addPreRenderTemplate(t);
//           let e = this.app.root.getElementsByTagName("a");
//           for (let i = 0; i < e.length; i++) e[i].rel = "sponsored nofollow noopener"
//         }
//       }
//       addPreRenderTemplate(t) {
//         this.app.root.insertAdjacentHTML("beforeend", this.app.preTemplate + t + this.app.postTemplate)
//       }
//       calcPrerenderTeaserSizes(t, e) {
//         let i = t.getBoundingClientRect(),
//           s = Math.ceil(t?.clientHeight || (i.height ? i.height : i.bottom - i.top)),
//           r = Math.ceil(t?.clientWidth || (i.width ? i.width : i.right - i.left)),
//           p = t.querySelector("img.mcimg");
//         if (p && this.calcPrerenderImageSizes(p, e), this.isNeedRecalcTeaserHeight(r, s, e)) {
//           let u = !1;
//           this.teasers[e - 1].innerHTML = `<div style="min-width: ${this.bannerWidth}px; min-height: ${this.bannerStretchHeight}px;"></div>`;
//           let d = this.teasers[e - 1].getBoundingClientRect(),
//             f = this.app.root.getBoundingClientRect();
//           if (d.width >= this.bannerWidth && d.height >= this.bannerStretchHeight) {
//             u = !0;
//             let b = this.app.root.parentNode;
//             for (; b && typeof b.tagName < "u" && b.tagName !== "BODY";) {
//               let k = b.getBoundingClientRect();
//               if (k.width < f.width || k.height < f.height) {
//                 u = !1;
//                 break
//               } else b = b.parentNode
//             }
//           }
//           u && (s = this.bannerStretchHeight)
//         }
//         this.app.preRenderTeaserSizes[e - 1] = {
//           height: s,
//           width: r,
//           position: e,
//           top: Math.floor(i.top)
//         }
//       }
//       isNeedRecalcTeaserHeight(t, e, i) {
//         return this.isBannerAllowed && t >= this.bannerWidth && e >= this.bannerMinHeight && e < this.bannerStretchHeight
//       }
//       calcPrerenderImageSizes(t, e) {
//         let i = t.getBoundingClientRect();
//         if (i.height === 0 || i.width === 0) {
//           let s = "#preRenderingBlock" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId;
//           if (this.app.realRoot.querySelector(s) !== null) {
//             let r = this.app.realRoot.querySelector(s);
//             r.style.clear = "both", i = t.getBoundingClientRect()
//           }
//         }
//         this.app.preRenderImageSizes[e - 1] = {
//           height: i.height,
//           width: i.width
//         }
//       }
//       reformatForAdblock() {
//         if (this.app.isMobile()) {
//           for (let t = this.teasers.length; t > 1; t--) {
//             let e = this.teasers[t - 1];
//             if (this.app.root.getBoundingClientRect().height > this.app.context.screen.height && e && e.parentNode) e.parentNode.removeChild(e);
//             else break
//           }
//           this.teasers = [].slice.call(this.app.root.getElementsByClassName("mgline")), this.app.requestParams.limitads = this.teasers.length
//         } else {
//           let t = "",
//             e = 0;
//           for (let i in this.app.childWidgetsData)
//             if (this.app.childWidgetsData.hasOwnProperty(i) && this.app.childWidgetsData[i].isAdblockChild) {
//               t = this.app.childWidgetsData[i].childSubtype;
//               break
//             } t === "under-article-widget-adblock" || t === "in-article-adblock" ? e = 25 : t === "header-widget-adblock" && (e = 15), t && t.indexOf("adblock") !== -1 && e > 0 && (this.adblockMaxPercentage = e)
//         }
//       }
//       changeWidgetWidth() {
//         let t = this.app.root.querySelector(".mgbox"),
//           e = t.offsetWidth,
//           i = t.offsetHeight,
//           s = e * i,
//           r = this.app.context.innerWidth * this.app.context.innerHeight;
//         if (s / r * 100 > this.adblockMaxPercentage && e > this.adblockMinWidgetWidth) {
//           let u = r * this.adblockMaxPercentage / 100,
//             d = s - u,
//             f = e - e * (d / s / 2),
//             b = f >= this.adblockMinWidgetWidth ? Math.floor(f) : this.adblockMinWidgetWidth;
//           t.style.maxWidth = b + "px"
//         }
//       }
//     }
//   });
//   var ms = {};
//   Z(ms, {
//     InternalExchangeLoggerBlock: () => Fe
//   });
//   var Fe, xs = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     Fe = class extends A {
//       constructor(t) {
//         super(t), this.name = "InternalExchangeLoggerBlock", this.app.internalExchangeLoggerHandler = this.clickHandler.bind(this), this.addHook("afterLoadNewsHooks", this.init)
//       }
//       init() {
//         this.app.addClickHandler(this.app.clickHandlerList.internalExchangeLogger.handler, this.app.clickHandlerList.internalExchangeLogger.priority)
//       }
//       clickHandler(t, e) {
//         if (typeof e.button < "u" && e.button !== 0) return !0;
//         let i = t.getAttribute("data-hash"),
//           s = this.app.teaserData[i];
//         if (s && s.coopType == F.InternalExchange) {
//           let r = {};
//           r.cid = `cid=${this.app.id}`, r.tid = `tid=${s.id}`, r.h = `h=${i}`, typeof this.app.servicerData.isBot < "u" && (r.bot = `bot=${this.app.servicerData.isBot}`), typeof this.app.servicerData.tt < "u" && (r.tt = `tt=${this.app.servicerData.tt}`), typeof this.app.servicerData.ts < "u" && (r.ts = `ts=${this.app.servicerData.ts}`), typeof this.app.servicerData.psid < "u" && (r.psid = `psid=${this.app.servicerData.psid}`), typeof this.app.servicerData.dt < "u" && (r.dt = `dt=${this.app.servicerData.dt}`);
//           let p = t.parentElement.tagName,
//             u = "." + this.app.extractClass(t.parentElement);
//           r.ce = `ce=${p}${u}`, this.app.request.pixel("internalExchangeLogger", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/clie", r, {})
//         }
//         return !0
//       }
//     }
//   });
//   var ws = {};
//   Z(ws, {
//     RefreshTeaserAfterClickBlock: () => je
//   });
//   var je, ys = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     je = class extends A {
//       constructor(t) {
//         super(t), this.name = "RefreshTeaserAfterClickBlock", this.addHook("afterLoadNewsHooks", this.init)
//       }
//       init() {
//         this.app.getWidgetValue("refreshTeaserAfterClick", this.app.widgetParams.WIDGET.refreshTeaserAfterClick) && typeof this.app.refreshNewsHandler > "u" && (this.app.refreshNewsHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.refreshNews.handler, this.app.clickHandlerList.refreshNews.priority))
//       }
//       onClick(t, e) {
//         if (typeof e.button < "u" && e.button !== 0) return !0;
//         let i = t.getAttribute("data-hash"),
//           s = this.app.teaserData[i];
//         return s && s.type === $.Teaser && (s.coopType === F.Wages && s.extd !== 1 || s.coopType === F.Exchange) && (this.app.widgetParams.WIDGET.isNextUpAddWidget && (this.app.getRoot().dataset.disableStart = "false", this.app.requestParams.rtb_disabled = 1), this.app.refreshedElement = this.findParentMgline(t), this.app.refreshedElement.dataset.pos || (this.app.refreshedElement.dataset.pos = String(s.iteration)), this.app.requestParams.limitads = 1, this.app.requestParams.pos = Number(this.app.refreshedElement.dataset.pos), this.app.collectExceptParams(), this.app.injectScript(!1, 1)), !0
//       }
//       findParentMgline(t) {
//         for (;
//           (t = t.parentElement) && !t.classList.contains("mgline"););
//         return t
//       }
//     }
//   });
//   var bs = {};
//   Z(bs, {
//     RejectBlock: () => qe
//   });
//   var qe, vs = z(() => {
//     T();
//     B();
//     K();
//     qe = class extends A {
//       constructor(t) {
//         super(t), this.isRejectNeeded = !1, this.name = "RejectBlock", this.app.isInsertedRejectStyles = !1, this.app[this.app.widgetParams.WIDGET.informerPrefix + "Reject"] = () => {
//           this.isRejectNeeded = !0
//         }, this.addHook("afterLoadNewsHooks", this.initReject)
//       }
//       initReject() {
//         this.isRejectNeeded && this.reject()
//       }
//       reject() {
//         let t = this.app.root.querySelectorAll(".mgline");
//         for (let e = 0; e < t.length; e++) {
//           let i = t[e],
//             s = i.querySelector(".close-informer"),
//             r = i.querySelector("div.mcimg"),
//             p = i.className.match(/teaser-([0-9]+)/),
//             u = i.className.match(/type-(w|e|i)/);
//           if (!s && r && i.className.indexOf("dsp") <= 0 && p && u && u[1] !== "i") {
//             let f = this.buildCloseBtn(p, u);
//             this.app.widgetParams.WIDGET.type === "in-site-notification" ? i.querySelector(".image-container")?.appendChild(f) : this.app.widgetParams.WIDGET.subType === "in-article-card-media" || this.app.widgetParams.WIDGET.subType === "under-article-widget-card-media" ? i.querySelector(".mgline-inner")?.appendChild(f) : i.querySelector(".image-with-text")?.appendChild(f)
//           }
//         }
//         this.initRejectStyles()
//       }
//       buildCloseBtn(t, e) {
//         let i = this.app.subnetDashboardDomain + "/publisher/blocked",
//           s = this.app.context.document.createElement("a");
//         return s.className = "close-informer", s.href = i + "/teaser/" + t[1] + "/widget/" + (e[1] === "w" ? this.app.widgetParams.WIDGET.goodsPartUid + "/type/goods" : this.app.widgetParams.WIDGET.newsPartUid + "/type/news"), s.target = "_blank", s.style.top = "2px", s.style.right = "3px", this.app.widgetParams.WIDGET.noFollow && (s.rel = "sponsored nofollow"), s
//       }
//       initRejectStyles() {
//         if (this.app.isInsertedRejectStyles) return;
//         this.app.stylesheetsBlock.add("reject", `
// div.mgline a.close-informer {
// width: 14px !important;
// height: 14px !important;
// background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");
// display: block;
// opacity: 0;
// position: absolute;
// right: 2px;
// top: 2px;
// z-index: 149999;
// cursor: pointer;
// -moz-transition: all 0.3s ease-out;
// -o-transition: all 0.3s ease-out;
// -webkit-transition: all 0.3s ease-out;
// -ms-transition: all 0.3s ease-out;
// transition: all 0.3s ease-out;
// }
// .mgline a.close-informer:hover {
// opacity: 1;
// }
// .mgline .image-with-text img.mcimgad {
// -moz-transition: all 0.3s ease-out;
// -o-transition: all 0.3s ease-out;
// -webkit-transition: all 0.3s ease-out;
// -ms-transition: all 0.3s ease-out;
// transition: all 0.3s ease-out;
// }
// div.mcimg {
// position: relative;
// }
// div.image-with-price {
// position: relative;
// }
// .mgline .image-container {
// width: auto;
// margin: 0 auto;
// position: relative;
// }`), this.app.isInsertedRejectStyles = !0
//       }
//     }
//   });
//   var ks = {};
//   Z(ks, {
//     DSAIconBlock: () => ze
//   });
//   var ze, Is = z(() => {
//     T();
//     B();
//     K();
//     ze = class extends A {
//       constructor(t) {
//         super(t), this.isStylesAppended = !1, this.iconSize = 16, this.name = "DSAIconBlock", this.isMobile = this.app.isMobile() || this.app.isTablet(), this.nonClickZone = this.isMobile ? 9 : 5, this.addHook("afterLoadNewsHooks", this.init)
//       }
//       init() {
//         let t = this.app.root.querySelectorAll(".mgline");
//         for (let e = 0; e < t.length; e++) {
//           let i = t[e];
//           if (typeof i.dataset.dsa < "u" || i.classList.contains("type-v")) continue;
//           let s = i.getAttribute("data-i"),
//             r = this.app.teaserData[s];
//           if (r && r.dsa_link) {
//             i.dataset.dsa = "true";
//             let p = this.buildIcon(r.dsa_link),
//               u = i.querySelector(".image-with-text");
//             if (this.app.widgetParams.WIDGET.type === "in-site-notification" || this.app.widgetParams.WIDGET.type === "banner" || this.app.widgetParams.WIDGET.isNextUpAddWidget ? u = i.querySelector(".image-container") : (this.app.widgetParams.WIDGET.subType === "in-article-card-media" || this.app.widgetParams.WIDGET.subType === "under-article-widget-card-media") && (u = i.querySelector(".mgline-inner")), u) {
//               let d = !!i.querySelector(".close-informer");
//               u.style.position = "relative", u.appendChild(p), this.appendStyles(d)
//             }
//           }
//         }
//       }
//       buildIcon(t) {
//         let e = this.app.context.document.createElement("div"),
//           i = this.app.context.document.createElement("a"),
//           s = `<svg class="mgdsa-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
//       viewBox="0 0 18 18" fill="none"><rect width="18" height="18" fill="white"/><g clip-path="url(#clip0_49_159)">
//       <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9C1.5 13.14 4.86 16.5 9 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86
//         13.14 1.5 9 1.5ZM9 15C5.6925 15 3 12.3075 3 9C3 5.6925 5.6925 3 9 3C12.3075 3 15 5.6925 15 9C15 12.3075
//         12.3075 15 9 15Z" fill="#737373"/>
//         <path d="M9.65019 11.8586L9.6502 8.21708H7.47609V9.35846H8.50881L8.50881 13L10.6829 13V11.8586H9.65019Z"
//         fill="#737373"/>
//         <path d="M10 6C10 6.55228 9.55229 7 9 7C8.44772 7 8 6.55228 8 6C8 5.44772 8.44772 5 9 5C9.55229 5 10
//         5.44772 10 6Z" fill="#737373"/></g><defs><clipPath id="clip0_49_159">
//         <rect width="16" height="16" fill="white" transform="translate(1 1)"/></clipPath></defs></svg>`;
//         return e.classList.add("mgdsa-container"), i.classList.add("mgdsa-link"), i.href = t, i.target = "_blank", i.title = this.app.getTranslation("[INFORMER_DSA_ICON_TITLE]"), this.app.widgetParams.WIDGET.noFollow && (i.rel = "sponsored nofollow"), i.innerHTML = s, e.appendChild(i), e
//       }
//       appendStyles(t) {
//         if (this.isStylesAppended) return;
//         let e = `.mgdsa-container {display: flex;justify-content: flex-end;
//       width: ${this.iconSize + this.nonClickZone}px;height: ${this.iconSize + this.nonClickZone}px;
//       position: absolute;right: 0px;top: ${t ? "18px" : "0px"};
//       z-index: 2147483646;opacity: ${this.isMobile ? 1 : 0};
//       transition: opacity 0.3s ease-out;}.mgdsa-link {display: block;max-width: ${this.iconSize}px;
//       max-height: ${this.iconSize}px;text-decoration: none;outline: none;border: none;cursor: pointer;}
//       .mgdsa-icon {width: ${this.iconSize}px;height: ${this.iconSize}px;max-width: ${this.iconSize}px;
//       max-height: ${this.iconSize}px;display: block;}`;
//         this.isMobile ? e += `.mgdsa-link {padding: 0 0 ${this.nonClickZone}px ${this.nonClickZone}px;
//         box-sizing: content-box;}` : e += ".mgline:hover .mgdsa-container {opacity: 1;}", this.app.stylesheetsBlock.add("dsa-icon", e), this.isStylesAppended = !0
//       }
//     }
//   });
//   var Ss = {};
//   Z(Ss, {
//     TeaserHoverBlock: () => $e
//   });
//   var $e, Ps = z(() => {
//     T();
//     B();
//     K();
//     $e = class extends A {
//       constructor(t) {
//         super(t), this.name = "TeaserHoverBlock", this.addHook("afterLoadNewsHooks", this.init)
//       }
//       init() {
//         let t = this.app.root.querySelectorAll(".mgline");
//         for (let e = 0; e < t.length; e++) {
//           let i = t[e],
//             s = {
//               mgline: i,
//               advIcon: i.querySelector("img.mcimgad"),
//               rejectIcon: i.querySelector(".close-informer")
//             };
//           this.teaserHover(s)
//         }
//       }
//       teaserHover(t) {
//         let {
//           mgline: e,
//           advIcon: i,
//           rejectIcon: s
//         } = t, r = {
//           advIcon: {
//             el: i,
//             positionLimits: this.iconPositionLimits(i, s)
//           },
//           rejectIcon: {
//             el: s
//           }
//         };
//         this.app.isTouchDevice() ? e.addEventListener("click", () => {
//           s && this.moveIconsForward(r)
//         }) : e.addEventListener("mouseenter", () => {
//           s && this.moveIconsForward(r)
//         }), e.addEventListener("mouseleave", () => {
//           s && this.moveIconsBack(r)
//         })
//       }
//       iconPositionLimits(t, e) {
//         let i = this.getIconCurrentPosition(t),
//           s = this.getIconCurrentPosition(e);
//         return !t || !e ? {
//           initial: null,
//           ending: null
//         } : {
//           initial: i.right,
//           ending: i.right + e.offsetWidth + s.right
//         }
//       }
//       moveIconsForward(t) {
//         this.isAdvIconOnTop(t.advIcon.el) && this.changeIconPosition(t.advIcon, "mouseenter"), t.rejectIcon.el && (t.rejectIcon.el.style.opacity = "0.7")
//       }
//       moveIconsBack(t) {
//         this.isAdvIconOnTop(t.advIcon.el) && this.changeIconPosition(t.advIcon, "mouseleave"), t.rejectIcon.el && (t.rejectIcon.el.style.opacity = "0")
//       }
//       changeIconPosition(t, e) {
//         let i = t.positionLimits.initial,
//           s = t.positionLimits.ending;
//         t.el && (e === "mouseenter" && s !== null && (t.el.style.right = s + "px"), e === "mouseleave" && i !== null && (t.el.style.right = i + "px"))
//       }
//       getIconCurrentPosition(t) {
//         let e = t ? this.app.context.getComputedStyle(t) : null;
//         return {
//           right: e ? parseInt(e.right.replace("px", "")) : null,
//           top: e ? parseInt(e.top.replace("px", "")) : null
//         }
//       }
//       isAdvIconOnTop(t) {
//         if (t) {
//           let e = +this.app.context.getComputedStyle(t).top.replace("px", "");
//           return e >= 0 && e <= 5
//         }
//       }
//     }
//   });
//   var Es = {};
//   Z(Es, {
//     InAppParamsBlock: () => Ue
//   });
//   var Ds, Ue, Cs = z(() => {
//     T();
//     B();
//     K();
//     Ds = ["mgBundle", "mgStoreurl", "mgIfa", "gdpr", "gdprConsent", "usPrivacy", "gdprApplies", "consentData", "uspString", "mgContenturl", "mgIfatype", "mgUserlat"], Ue = class extends A {
//       constructor(t) {
//         super(t), this.name = "InAppParamsBlock", this.addHook("afterInitHooks", () => {
//           this.rootContainer = this.app.getRoot();
//           for (let e in this.rootContainer.dataset)
//             if (Ds.indexOf(e) !== -1) {
//               this.setMgDataAttributes();
//               break
//             }
//         })
//       }
//       setMgDataAttributes() {
//         let t = ["${BUNDLE}", "${STORE_URL}", "%%ADVERTISING_IDENTIFIER_PLAIN%%", "${GDPR}", "${GDPR_CONSENT_358}", "${CCPA}", "%%PATTERN:url%%", "%%ADVERTISING_IDENTIFIER_TYPE%%", "%%ADVERTISING_IDENTIFIER_IS_LAT%%"];
//         for (let e in this.rootContainer.dataset)
//           if (Ds.indexOf(e) !== -1) {
//             let i = this.rootContainer.dataset[e];
//             if (t.indexOf(i) !== -1) continue;
//             e === "gdpr" || e === "gdprApplies" ? this.app.requestParams.gdpr = Number(i) || 1 : e === "gdprConsent" || e === "consentData" ? this.app.requestParams.gdpr_consent = i : e === "usPrivacy" || e === "uspString" ? this.app.requestParams.us_privacy = i : this.app.requestParams[e] = i
//           }
//       }
//     }
//   });
//   var Ts = {};
//   Z(Ts, {
//     CountersBlock: () => Je
//   });
//   var Je, Bs = z(() => {
//     T();
//     B();
//     K();
//     Je = class extends A {
//       constructor(t) {
//         super(t), this.impTrackCapping = {}, this.name = "CountersBlock", this.addHook("afterLoadNewsHooks", this.countersLoad), this.addHook("afterLoadNewsHooks", this.parseImpTracker), this.addHook("afterPrepareCappingDataHooks", this.sendImpTrackCapping), this.addHook("afterPrepareCappingDataHooks", this.sendJsTrackers)
//       }
//       countersLoad() {
//         let t = this.app.widgetParams.WIDGET.newsPartIdPartner;
//         if (Number(this.app.id) !== Number(this.app.widgetParams.WIDGET.id)) {
//           let e = this.app.childWidgetsData[this.app.id];
//           t = e ? e.newsWidgetIdPartner : null
//         }
//         if (this.app.widgetParams.WIDGET.autocreativeCampaignId && (t = this.app.widgetParams.WIDGET.autocreativeCampaignId), !this.app.widgetParams.WIDGET.widgetUseConstructor && (this.app.widgetParams.WIDGET.hasNewsPart && this.app.widgetParams.WIDGET.newsPartAcStatsEnabled && this.app.widgetParams.WIDGET.newsPartKind === "exchange" && this.app.widgetParams.WIDGET.useInNewsRanker || this.app.widgetParams.WIDGET.autocreativeCampaignId)) {
//           let e = {},
//             i = this.app.context.document.referrer.replace(/&/g, "%26");
//           this.app.isAmp() && (i = this.app.context.context.canonicalUrl), e.id = "id=" + this.app.widgetParams.WIDGET.widgetClientSiteId, e.pid = "pid=" + t, e.referer = "referer=" + i, typeof this.app.contextBlock.contextUriParse == "function" && (e.cxurl = "cxurl=" + this.app.contextBlock.contextUriParse()), this.app.context.self !== this.app.context.top && (e.iframe = "iframe=1"), typeof this.app.servicerData.h2 < "u" && (e.h2 = "h2=" + this.app.servicerData.h2), e.cbuster = "cbuster=" + this.app.getCbusterParameter(), this.app.request.pixel("autoCounter", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.autoCreativeCounterDomain + "/autocreative/counter.php", e, {
//             unique: !0
//           })
//         }
//       }
//       parseImpTracker() {
//         if (this.app.widgetParams.WIDGET.widgetCountersDisabled === 1) return;
//         let t = Object.keys(this.app.teaserData);
//         for (let e in t)
//           if (Array.isArray(this.app.teaserData[t[e]].impt))
//             for (let i = 0; i < this.app.teaserData[t[e]].impt.length; i++) {
//               let s = this.app.teaserData[t[e]].impt[i];
//               typeof s.completed < "u" || (s.only_viewable === 1 ? (typeof this.impTrackCapping[t[e]] > "u" && (this.impTrackCapping[t[e]] = []), this.impTrackCapping[t[e]].push(s)) : (s.type === "i" && this.sendCustomCounter(s), s.type === "j" && (s.iframe === 1 ? this.sendIframeTracker(t[e], s, i) : this.sendInlineTracker(t[e], s))), s.completed = 1)
//             }
//       }
//       sendImpTrackCapping(t) {
//         if (!(typeof this.impTrackCapping[t] > "u"))
//           for (let e = 0; e < this.impTrackCapping[t].length; e++) {
//             let i = this.impTrackCapping[t][e];
//             i.type === "i" && this.sendCustomCounter(i), i.type === "j" && (i.iframe === 1 ? this.sendIframeTracker(t, i, e) : this.sendInlineTracker(t, i))
//           }
//       }
//       sendCustomCounter(t) {
//         let e = t.code || t.link;
//         this.app.request.pixel("widgetCustomCounter", e, {
//           mgbuster: "mgbuster=" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
//         }, {})
//       }
//       sendIframeTracker(t, e, i) {
//         let r = "<script>window.onerror = function() { return true; };<\/script>" + (e.code || `<script src="${e.link}"><\/script>`),
//           p = this.app.context.document.createElement("iframe");
//         p.style.display = "none", this.app.renderInSafeIframe(p, `${t}_${i}`, r), this.app.root.appendChild(p)
//       }
//       sendInlineTracker(t, e) {
//         let i = this.getMglineByHash(t);
//         if (i)
//           if (e.code) {
//             i.insertAdjacentHTML("beforeend", e.code);
//             let s = i.childNodes;
//             for (let r = 0; r < s.length; r++)
//               if (s[r] instanceof HTMLScriptElement) {
//                 let p = s[r];
//                 i.removeChild(p), this.appendScript(i, p.src)
//               }
//           } else this.appendScript(i, e.link)
//       }
//       appendScript(t, e) {
//         let i = this.app.context.document.createElement("script");
//         i.src = e, t.appendChild(i)
//       }
//       getMglineByHash(t) {
//         let e = this.app.root.getElementsByClassName("mgline");
//         for (let i = 0; i < e.length; i++)
//           if (e[i].getAttribute("data-i") === t) return e[i];
//         return null
//       }
//       sendJsTrackers(t) {
//         if (Array.isArray(this.app.teaserData[t].jst))
//           for (let e = 0; e < this.app.teaserData[t].jst.length; e++) {
//             let i = "<script>window.onerror = function() { return true; };<\/script>";
//             i += this.app.teaserData[t].jst[e];
//             let s = this.app.context.document.createElement("iframe");
//             s.style.display = "none", this.app.renderInSafeIframe(s, `${t}_${e}`, i), this.app.root.appendChild(s)
//           }
//       }
//     }
//   });
//   var Ws = {};
//   Z(Ws, {
//     SubnetsBlock: () => Ke
//   });
//   var Ke, Ls = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     Ke = class extends A {
//       constructor(t) {
//         super(t), this.name = "SubnetsBlock", this.addHook("afterInitHooks", this.init)
//       }
//       init() {
//         let t = [this.app.widgetParams.WIDGET.id];
//         this.childWidgets = JSON.parse(this.app.widgetParams.WIDGET.childWidgets);
//         let e = JSON.parse(this.app.widgetParams.WIDGET.childFuncBlocks);
//         this.childFuncBlockList = [];
//         for (let r in this.childWidgets) this.childWidgets.hasOwnProperty(r) && t.push(this.childWidgets[r].childId);
//         for (let r in e)
//           if (e.hasOwnProperty(r)) {
//             this.childFuncBlockList[r] = this.childFuncBlockList[r] || [];
//             for (let p in e[r]) e[r].hasOwnProperty(p) && this.childFuncBlockList[r].push(e[r][p].split("/").pop())
//           } let i = JSON.parse(this.app.widgetParams.WIDGET.subnets),
//             s = this.app.uniqId !== "" && this.app.widgetParams.WIDGET.allowMultipleWidgets ? "_" + this.app.uniqId : "";
//         t.forEach(r => {
//           this.app.context["mgReject" + r] = this.app[this.app.widgetParams.WIDGET.informerPrefix + "Reject"], this.app.context["mgLoadAds" + r + s] = (u, d) => {
//             this.loadAds(u, d, r)
//           };
//           let p = this.app.getRoot()?.dataset.instanceId;
//           p && (this.app.context["mgLoadAdsManual_" + p] = (u, d, f) => {
//             let b = this.app.getSingleJsController(this.app.widgetParams.WIDGET.siteId);
//             if (b && typeof b.widgetParams[u] < "u") {
//               let k = b.widgetParams[u].WIDGET;
//               k || (k = b.widgetParams[0].WIDGET), f.t = k.widgetTemplate.replace(/[\r\n]/g, ""), f.css = k.templateStyles.replace(/\\'/g, "'")
//             }
//             this.loadAds(d, f, u)
//           }), this.app.context["_mgConsentWait" + r + s] = u => {
//             this.app.consentsBlock.waitConsent(u), typeof this.app.context["_mgGPT" + r] < "u" && delete this.app.context["_mgGPT" + r]
//           };
//           for (let u in i)
//             if (i.hasOwnProperty(u)) {
//               let d = i[u];
//               d.id !== It.L && (this.app.context[d.informer_prefix + "CReject" + r] = this.app[this.app.widgetParams.WIDGET.informerPrefix + "Reject"], this.app.context[d.informer_prefix + "LoadGoods" + r + s] = (f, b) => {
//                 this.loadAds(f, b, r)
//               })
//             }
//         })
//       }
//       loadAds(t, e, i) {
//         if (window.performance?.mark("ssp_response", {
//           detail: {
//             _mgwidget: this.app.widgetParams.WIDGET.id
//           }
//         }), this.app.widgetParams.WIDGET.loggingConsentEnabled && !this.app.tcfv2Data && !this.app.startServicerTime && (this.app.startServicerTime = new Date().getTime()), this.app.id = i, this.app.loadedType = "goods", this.app.servicerAds = t, this.app.originalId !== this.app.id && !this.app.widgetParams.WIDGET.isNextUpAddWidget) {
//           if (typeof this.childFuncBlockList[this.app.id] < "u") {
//             let s = this.childFuncBlockList[this.app.id];
//             this.executeFuncBlock(s)
//           }
//           if (typeof this.childWidgets[this.app.id] < "u" && typeof this.childWidgets[this.app.id].customFuncBlocks < "u") {
//             let s = this.childWidgets[this.app.id].customFuncBlocks;
//             this.executeFuncBlock(s)
//           }
//         }
//         this.app.lifeCycleBlock.render(t, e)
//       }
//       executeFuncBlock(t) {
//         for (let e in t)
//           if (t.hasOwnProperty(e)) {
//             let i = t[e],
//               s = i.replace(/[-_]/g, "").replace(/./, r => r.toUpperCase()) + "Block";
//             try {
//               this.app[s] = new window[`${this.app.widgetParams.WIDGET.I}`].childFuncBlocks[i](this.app)
//             } catch (r) {
//               this.app.log(`SubnetsBlock - ${i} error:`, "error", r)
//             }
//           }
//       }
//     }
//   });
//   var As = {};
//   Z(As, {
//     ScrollTimeDoubleClickBlock: () => Ze
//   });
//   var Ze, _s = z(() => {
//     T();
//     B();
//     K();
//     Ze = class extends A {
//       constructor(t) {
//         super(t), this.lastScrollTime = 0, this.lastClickTime = 0, this.name = "ScrollTimeDoubleClickBlock", this.app.getWidgetValue("useScrollClick", this.app.widgetParams.WIDGET.useScrollClick) && (this.app.addEvent(this.app.context, "scroll", () => this.onContextScrollEvent()), this.app.scrollTimeDoubleClickHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.scrollTimeDoubleClick.handler, this.app.clickHandlerList.scrollTimeDoubleClick.priority))
//       }
//       onClick(t, e) {
//         return this.app.isAzerionTeaser(t) ? !0 : (this.onContextClickEvent(), this.app.doubleClickType = "scrollTime", this.lastScrollTime <= this.lastClickTime && this.lastClickTime - this.lastScrollTime <= .5 ? (this.app.doubleClickHandler(t), e.preventDefault(), this.app.linksBlocked = !0, !1) : (this.app.linksBlocked = !1, !0))
//       }
//       onContextScrollEvent() {
//         this.lastScrollTime = this.app.getCurrentTimestamp()
//       }
//       onContextClickEvent() {
//         this.lastClickTime = this.app.getCurrentTimestamp()
//       }
//     }
//   });
//   var Os = {};
//   Z(Os, {
//     SmartDoubleClickBlock: () => Xe
//   });
//   var Gs, lr, dr, Xe, Rs = z(() => {
//     T();
//     B();
//     K();
//     Gs = 1, lr = 100, dr = {
//       undefined: -1,
//       desktop: 1,
//       mobile: 2,
//       tablet: 3,
//       smarttv: 4
//     }, Xe = class extends A {
//       constructor(t) {
//         super(t), this.name = "SmartDoubleClickBlock", this.app.isDisabledBySmartDoubleClick = !1, this.addHook("afterInitHooks", this.init)
//       }
//       init() {
//         this.groups = this.app.getWidgetValue("doubleclickParameters", JSON.parse(this.app.widgetParams.WIDGET.doubleclickParameters)), !(!this.groups || !this.app.isEnabledDoubleClick()) && (this.doubleClickCheckId = 0, this.loadedTime = this.app.getCurrentTimestamp(), this.handlers = this.getHandlers(), this.app.onSmartDoubleClickHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.onSmartDoubleClick.handler, this.app.clickHandlerList.onSmartDoubleClick.priority))
//       }
//       getGroupPercent(t, e, i) {
//         let s = 0,
//           r = e.getBoundingClientRect();
//         for (let p in this.handlers) {
//           if (!this.handlers[p]) continue;
//           let u = this.handlers[p](t, i, r);
//           if (u === !1) return !1;
//           s += u
//         }
//         return s / Object.keys(t).length
//       }
//       getGroupElementPercent(t, e, i) {
//         return t.hasOwnProperty(e) ? t[e].hasOwnProperty("value") && i === t[e].value || t[e].hasOwnProperty("min") && i >= t[e].min && i <= t[e].max ? t[e].percent : !1 : 0
//       }
//       getDoubleClickPercent(t, e) {
//         for (let i in this.groups) {
//           if (!this.groups[i]) continue;
//           let s = this.getGroupPercent(this.groups[i], t, e);
//           if (s !== !1) return this.doubleClickCheckId = i, s
//         }
//         return this.doubleClickCheckId = 0, Gs - 1
//       }
//       onClick(t, e) {
//         if (this.app.isAzerionTeaser(t)) return !0;
//         let i = this.app.random(Gs, lr);
//         return this.app.doubleClickPercent = Number(this.getDoubleClickPercent(t, e)), this.app.isDisabledBySmartDoubleClick = this.app.doubleClickPercent < i, this.app.doubleClickCheckId = this.app.isDisabledBySmartDoubleClick ? 0 : this.doubleClickCheckId, !0
//       }
//       getHandlers() {
//         return [t => this.getGroupElementPercent(t, "device", dr[this.app.deviceType] || ""), t => this.getGroupElementPercent(t, "browser", this.app.browserId), t => this.getGroupElementPercent(t, "click_time", this.app.getCurrentTimestamp() - this.loadedTime), t => this.getGroupElementPercent(t, "width", this.app.root.offsetWidth), t => this.getGroupElementPercent(t, "height", this.app.root.offsetHeight), t => this.getGroupElementPercent(t, "click_y", this.app.root.mouseY), t => this.getGroupElementPercent(t, "click_x", this.app.root.mouseX), t => this.getGroupElementPercent(t, "hw_ratio", this.app.root.offsetHeight / this.app.root.offsetWidth), (t, e) => this.getGroupElementPercent(t, "borderTop", e.offsetY), (t, e) => this.getGroupElementPercent(t, "borderLeft", e.offsetX), (t, e, i) => this.getGroupElementPercent(t, "borderRight", i.width - e.offsetX), (t, e, i) => this.getGroupElementPercent(t, "borderBottom", i.height - e.offsetY), t => this.getGroupElementPercent(t, "research", 1)]
//       }
//     }
//   });
//   var Hs = {};
//   Z(Hs, {
//     MobileDoubleClickBlock: () => Ye
//   });
//   var Ye, Ms = z(() => {
//     T();
//     B();
//     K();
//     Ye = class extends A {
//       constructor(t) {
//         super(t), this.name = "MobileDoubleClickBlock", ("ontouchstart" in window || navigator.maxTouchPoints > 0) && (this.addHook("afterSendCappingHooks", this.init), this.addHook("beforeInitHooks", () => {
//           this.informerId = this.app.root.getAttribute("id")
//         }))
//       }
//       init() {
//         this.app.isEnabledDoubleClick() && (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3), this.app.stylesheetsBlock.add("doubleclickMobile", this.getStyles()), this.app.showDoubleClickButton = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.showMobileDoubleClick.handler, this.app.clickHandlerList.showMobileDoubleClick.priority))
//       }
//       onClick(t, e) {
//         if (this.app.isDisabledBySmartDoubleClick || typeof e.button < "u" && e.button !== 0 || this.app.isAzerionTeaser(t)) return !0;
//         this.app.doubleClickType = "mobile", this.app.linksBlocked = !1;
//         let i = t;
//         if (this.app.widgetParams.WIDGET.mobileApp) {
//           if (this.app.doubleClickHandler(i), i.className.indexOf("mgbuybox") === -1) {
//             for (; i.tagName !== "A" && i.id !== this.informerId;)
//               if (i = i.parentElement, i.id === this.informerId) return !1;
//             try {
//               for (; i.className.indexOf("mgline") === -1;) i = i.parentElement
//             } catch {
//               return !1
//             }
//             let s = i;
//             s.dataset.clicked !== "1" && (e.preventDefault(), this.app.linksBlocked = !0), s.dataset.clicked = "1";
//             let r = s.querySelector(".mgfree"),
//               p = s.querySelector(".mgbuybox");
//             r.style.opacity = "0", p.style.opacity = "1", p.style.opacity = "1", p.style.zIndex = "9999", setTimeout(() => {
//               r.style.opacity = "1", p.style.opacity = "0", s.dataset.clicked = "0", p.style.zIndex = "-9999"
//             }, 1e4)
//           }
//         } else {
//           let s = new Date().getTime() / 1e3,
//             r = this.app.getWidgetValue("mobileDoubleclickDelay", this.app.widgetParams.WIDGET.mobileDoubleclickDelay);
//           if (i.className !== this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id && (r === 0 || s - this.app.doubleClickTimeLoaded < r)) {
//             for (this.app.doubleClickHandler(i), this.app.linksBlocked = !0, e.preventDefault(); i.tagName !== "A" && i.id !== this.informerId;)
//               if (i = i.parentElement, i.id === this.informerId) return;
//             let p = e.target;
//             for (; !p.classList.contains("mgline");) p = p.parentElement;
//             let u = this.app.context.document.createElement("div");
//             u.className = this.app.widgetParams.WIDGET.modulePrefix + "DLayout" + this.app.widgetParams.WIDGET.id, u.style.zIndex = "100000";
//             let d = this.createLinkGo(i, p, r);
//             u.appendChild(d);
//             let f = p.querySelector(".mgline-inner");
//             f ? f.appendChild(u) : p.appendChild(u), setTimeout(() => {
//               u.parentNode.removeChild(u)
//             }, 1e4)
//           } else return this.app.doubleClickHandler(i, !0), !0
//         }
//       }
//       createLinkGo(t, e, i) {
//         let s = this.app.context.document.createElement("a");
//         s.innerHTML = this.app.getTranslation("[GO]");
//         let r = t.getAttribute(this.app.hrefAttr);
//         typeof r == "string" && (r = r + (r.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), s.href = r;
//         let p = e.querySelector("a")?.getAttribute("data-hash");
//         p && s.setAttribute("data-hash", p);
//         let u = 80,
//           d = 80,
//           f = (1 - u / e.offsetHeight) / 2 * 100,
//           b = e.offsetWidth / d * .98;
//         s.style.top = f + "%";
//         let k = b > 1 ? (1 - d / e.offsetWidth) / 2 * 100 : 0;
//         return s.style.left = k + "%", e.offsetHeight <= 100 && (b = .5), b < 1 && (s.style.transform = "scale3d(" + b + "," + b + "," + b + ")", s.style.webkitTransform = "scale3d(" + b + "," + b + "," + b + ")", s.style.transformOrigin = "left", s.style.webkitTransformOrigin = "left"), s.target = "_blank", s.className = this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id, setTimeout(() => {
//           b = b < 1 ? b : 1, s.style.transform = "scale3d(" + b + "," + b + "," + b + ")", s.style.webkitTransform = "scale3d(" + b + "," + b + "," + b + ")"
//         }, i), s
//       }
//       getStyles() {
//         return "." + this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id + '{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.' + this.app.widgetParams.WIDGET.modulePrefix + "DLayout" + this.app.widgetParams.WIDGET.id + "{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#" + this.app.widgetParams.WIDGET.modulePrefix + "Composite" + this.app.widgetParams.WIDGET.id + " .mgline {position:relative}"
//       }
//     }
//   });
//   var Ns = {};
//   Z(Ns, {
//     DesktopDoubleClickBlock: () => Qe
//   });
//   var Qe, Vs = z(() => {
//     T();
//     B();
//     K();
//     Qe = class extends A {
//       constructor(t) {
//         super(t), this.name = "DesktopDoubleClickBlock";
//         let e = "ontouchstart" in window || navigator.maxTouchPoints > 0,
//           i = "addEventListener" in window.document;
//         !e && i && (this.addHook("afterSendCappingHooks", this.init), this.addHook("beforeInitHooks", () => {
//           this.informerId = this.app.root.getAttribute("id")
//         }))
//       }
//       init() {
//         this.app.isEnabledDoubleClick() && (this.app.doubleClickTimeLoaded || (this.app.doubleClickTimeLoaded = new Date().getTime() / 1e3), this.app.stylesheetsBlock.add("desktopDoubleClick", this.getStyles()), this.app.showDesktopDoubleClickButton = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.showDesktopDoubleClick.handler, this.app.clickHandlerList.showDesktopDoubleClick.priority))
//       }
//       onClick(t, e) {
//         if (this.app.isDisabledBySmartDoubleClick || typeof e.button < "u" && e.button !== 0 || this.app.isAzerionTeaser(t)) return !0;
//         this.app.doubleClickType = "desktop", this.app.linksBlocked = !1;
//         let i = t,
//           s = new Date().getTime() / 1e3,
//           r = this.app.getWidgetValue("desktopDoubleclickDelay", this.app.widgetParams.WIDGET.desktopDoubleclickDelay);
//         if (i.className !== this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id && (r === 0 || s - this.app.doubleClickTimeLoaded < r)) {
//           for (this.app.doubleClickHandler(i), e.preventDefault(), this.app.linksBlocked = !0; i.tagName !== "A" && i.id !== this.informerId;)
//             if (i = i.parentElement, i.id === this.informerId) return !1;
//           let p = e.target;
//           try {
//             for (; !p.classList.contains("mgline");) p = p.parentElement
//           } catch {
//             return !1
//           }
//           let u = this.app.context.document.createElement("div");
//           u.className = this.app.widgetParams.WIDGET.modulePrefix + "DLayout" + this.app.widgetParams.WIDGET.id, u.style.zIndex = "100000";
//           let d = this.createLinkGo(i, p, e);
//           u.appendChild(d);
//           let f = p.querySelector(".mgline-inner");
//           f ? f.appendChild(u) : p.appendChild(u), setTimeout(() => {
//             u.parentNode.removeChild(u)
//           }, 1e4)
//         } else return this.app.doubleClickHandler(i, !0), !0
//       }
//       createLinkGo(t, e, i) {
//         let s = this.app.context.document.createElement("a");
//         s.innerHTML = this.app.getTranslation("[GO]");
//         let r = t.getAttribute(this.app.hrefAttr);
//         typeof r == "string" && (r = r + (r.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), s.href = r;
//         let p = e.querySelector("a")?.getAttribute("data-hash");
//         p && s.setAttribute("data-hash", p);
//         let u = e.offsetHeight,
//           d = u / 3 + 2,
//           f = d;
//         s.style.width = d - 2 + "px", s.style.lineHeight = d - 2 + "px", s.style.height = "33.33%", e.offsetHeight <= 100 && (f = 80, d = 80, s.style.width = "80px", s.style.lineHeight = "78px", s.style.height = "80px");
//         let b = (1 - d / e.offsetHeight) / 2 * 100;
//         i.clientY - e.getBoundingClientRect().top < u / 2 ? b = (1 - 2 * d / u) * 100 / 4 + 50 : b = (1 - 2 * d / u) * 100 / 4, e.offsetHeight <= 100 && (b = -34), s.style.top = b + "%";
//         let S = e.offsetWidth / f * .98,
//           y = S > 1 ? (1 - f / e.offsetWidth) / 2 * 100 : 0;
//         return e.offsetHeight <= 100 && (y = 45.5), s.style.left = y + "%", parseFloat(s.style.width) <= 50 && (s.style.font = "normal 500 12px/" + s.style.width + ' "Sans", sans-serif'), e.offsetHeight <= 100 && (S = .5), S < 1 && (s.style.transform = "scale3d(" + S + "," + S + "," + S + ")", s.style.webkitTransform = "scale3d(" + S + "," + S + "," + S + ")", s.style.transformOrigin = "left", s.style.webkitTransformOrigin = "left"), s.target = "_blank", s.className = this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id, setTimeout(() => {
//           S = S < 1 ? S : 1, s.style.transform = "scale3d(" + S + "," + S + "," + S + ")", s.style.webkitTransform = "scale3d(" + S + "," + S + "," + S + ")"
//         }, 500), s
//       }
//       getStyles() {
//         return "." + this.app.widgetParams.WIDGET.modulePrefix + "DButton" + this.app.widgetParams.WIDGET.id + '{display:       inline-block;width:         170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);text-align:    center;padding:    0 10px;text-shadow:   none;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}.' + this.app.widgetParams.WIDGET.modulePrefix + "DLayout" + this.app.widgetParams.WIDGET.id + "{height: 100%;width: 100%;position: absolute;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 100;}#" + this.app.widgetParams.WIDGET.modulePrefix + "Composite" + this.app.widgetParams.WIDGET.id + " .mgline {position:relative}"
//       }
//     }
//   });
//   var Fs = {};
//   Z(Fs, {
//     SspDoubleClickBlock: () => ti
//   });
//   var ti, js = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     ti = class extends A {
//       constructor(t) {
//         super(t), this.servicerDoubleClickStatus = !1, this.name = "SspDoubleClickBlock", this.addHook("afterSendCappingHooks", this.onCapping), this.addHook("afterInjectScriptHooks", this.init), this.app.doubleClickType = "ssp", this.app.hashTimer = []
//       }
//       init() {
//         this.app.stylesheetsBlock.add("ssp_doubleclick", this.getStyles());
//         let t = setInterval(() => {
//           if (this.servicerDoubleClickStatus) {
//             clearInterval(t);
//             return
//           } !this.app.isEnabledDoubleClick() && typeof this.app.servicerData.dc < "u" && this.app.root.querySelectorAll("a[data-hash]").length && (this.app.sspDoubleClickHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.sspDoubleClick.handler, this.app.clickHandlerList.sspDoubleClick.priority), this.servicerDoubleClickStatus = !0)
//         }, 100)
//       }
//       onClick(t, e) {
//         if (typeof e.button < "u" && e.button !== 0 || this.app.isAzerionTeaser(t)) return !0;
//         let i = t.getAttribute("data-hash"),
//           s = new Date().getTime();
//         return i in this.app.hashTimer && s - this.app.hashTimer[i] > this.app.servicerData.dc || this.app.teaserData[i].coopType !== F.Wages || t.className === this.app.widgetParams.WIDGET.informerPrefix + "DButton" + this.app.widgetParams.WIDGET.id ? (this.app.doubleClickHandler(t, !0), !0) : (this.app.doubleClickHandler(t), e.preventDefault(), this.showButton(t), !1)
//       }
//       showButton(t) {
//         let e = this.app.context.document.createElement("div");
//         e.classList.add(this.app.widgetParams.WIDGET.informerPrefix + "DLayout" + this.app.widgetParams.WIDGET.id);
//         let i = t.closest(".mgline");
//         i !== null && i.appendChild(e);
//         let s = this.app.context.document.createElement("a");
//         s.classList.add(this.app.widgetParams.WIDGET.informerPrefix + "DButton" + this.app.widgetParams.WIDGET.id);
//         let r = t.getAttribute("href");
//         typeof r == "string" && (r = r + (r.indexOf("?") >= 0 ? "&" : "?") + "wct=" + this.app.doubleClickType), s.href = r, s.setAttribute("data-hash", t.getAttribute("data-hash"));
//         let p = this.app.widgetParams.WIDGET.currentSubnet !== It.MG ? 50 : 80,
//           u = this.app.widgetParams.WIDGET.currentSubnet !== It.MG ? 170 : 80,
//           d = (1 - p / i.offsetHeight) / 2 * 100,
//           f = i.offsetWidth / u * .98;
//         s.style.backgroundImage = "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)", s.style.backgroundPosition = "center", s.style.top = d + "%";
//         let b = f > 1 ? (1 - u / i.offsetWidth) / 2 * 100 : 0;
//         this.app.widgetParams.WIDGET.currentSubnet === It.MG && (s.style.left = b + "%"), f < 1 && (s.style.transform = "scale3d(" + f + "," + f + "," + f + ")", s.style.webkitTransform = "scale3d(" + f + "," + f + "," + f + ")", s.style.transformOrigin = "left", s.style.webkitTransformOrigin = "left"), s.target = "_blank", e.appendChild(s), setTimeout(() => {
//           this.app.widgetParams.WIDGET.currentSubnet !== It.MG ? (s.style.left = b + "%", s.style.opacity = "1") : (f = f < 1 ? f : 1, s.style.transform = "scale3d(" + f + "," + f + "," + f + ")", s.style.webkitTransform = "scale3d(" + f + "," + f + "," + f + ")")
//         }, 10), setTimeout(() => {
//           e.parentNode.removeChild(e)
//         }, 1e4)
//       }
//       onCapping() {
//         if (typeof this.app.sspDoubleClickHash < "u")
//           for (let t = 0; t < this.app.sspDoubleClickHash.length; t++) typeof this.app.hashTimer[this.app.sspDoubleClickHash[t]] > "u" && (this.app.hashTimer[this.app.sspDoubleClickHash[t]] = new Date().getTime())
//       }
//       getStyles() {
//         let t = {
//           0: {
//             borderColor: "#0a1b53",
//             gradient: "#2b3c84, #0c1b52",
//             fontColor: "#fff"
//           },
//           2: {
//             borderColor: "#010101",
//             gradient: "#111312, #010101",
//             fontColor: "#fff"
//           },
//           3: {
//             borderColor: "#F36729",
//             gradient: "#F79220, #F26B29",
//             fontColor: "#fff"
//           }
//         },
//           e = typeof t[this.app.widgetParams.WIDGET.currentSubnet] < "u" ? t[this.app.widgetParams.WIDGET.currentSubnet] : t[0],
//           i = "." + this.app.widgetParams.WIDGET.informerPrefix + "DButton" + this.app.widgetParams.WIDGET.id + "{display:       inline-block;";
//         return this.app.widgetParams.WIDGET.currentSubnet !== It.MG ? i += "width:         168px;height:        48px;background:    -moz-linear-gradient(" + e.gradient + ");background:    -o-linear-gradient(" + e.gradient + ");background:    -webkit-linear-gradient(" + e.gradient + ");background:    linear-gradient(" + e.gradient + ");border:        1px solid " + e.borderColor + ";color:         " + e.fontColor + ' !important;font:          normal 700 21px/48px "Zapf Dingbats", sans-serif;opacity: 0;left: -100%;' : i += 'width:     170px !important;height:        50px !important;line-height:        50px !important;background-color: RGBA(0,0,0,0);border:        1px solid white;border-radius:        3px;color:         white !important;font:          normal 500 18px/50px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);', i += "text-align:    center;position: absolute;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;margin: auto !important;text-decoration: none !important;transition:all 1s;}." + this.app.widgetParams.WIDGET.informerPrefix + "DLayout" + this.app.widgetParams.WIDGET.id + "{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#" + this.app.widgetParams.WIDGET.informerPrefix + "Composite" + this.app.widgetParams.WIDGET.id + " .mgline {position:relative}", i
//       }
//     }
//   });
//   var qs = {};
//   Z(qs, {
//     ExternalCountersBlock: () => ei
//   });
//   var ei, zs = z(() => {
//     T();
//     B();
//     K();
//     ei = class extends A {
//       constructor(t) {
//         super(t), this.name = "ExternalCountersBlock", this.app.externalCountersLinkHandler = this.externalCountersLinkHandler.bind(this), this.handleExternalCountersListener()
//       }
//       externalCountersLinkHandler(t, e) {
//         if (typeof e.button < "u" && e.button !== 0) return !0;
//         let i = t.getAttribute("data-hash"),
//           s = this.app.teaserData[i];
//         if (s && Array.isArray(s.clicktrackers)) {
//           let r = s.clicktrackers;
//           if (r.length)
//             for (let p = 0; p < r.length; p++) this.app.request.pixel(`clickTracker ${i} - ${r[p]}`, r[p], {}, {})
//         }
//         return !0
//       }
//       handleExternalCountersListener() {
//         this.app.addClickHandler(this.app.clickHandlerList.externalCountersLink.handler, this.app.clickHandlerList.externalCountersLink.priority)
//       }
//     }
//   });
//   var $s = {};
//   Z($s, {
//     VideoTeasersBlock: () => ii
//   });
//   var ii, Us = z(() => {
//     T();
//     B();
//     K();
//     ii = class extends A {
//       constructor(t) {
//         super(t), this.name = "VideoTeasersBlock", this.siteBody = this.app.getMostTopWindow().document.body, this.playVideos = this.playVideos.bind(this), this.addHook("beforeLoadNewsHooks", this.setVideoStyles), this.addHook("afterLoadNewsHooks", this.playVideos)
//       }
//       setVideoStyles() {
//         let t = this.app.widgetParams.WIDGET.templateStyles;
//         this.app.widgetParams.WIDGET.adblockIntegration && this.app.adBlockDetect() && (t = this.app.adBlockStyles), t = t.split("img.mcimg {").filter((e, i) => i !== 0).map(e => e.substring(0, e.indexOf("}"))).join("").trim(), this.app.stylesheetsBlock.add("new-mcvideo-styles", `.mgline video.mcvideo {${t}}`)
//       }
//       playVideos() {
//         let t = this.app.root.getElementsByClassName("mcvideo");
//         for (let e = 0; e < t.length; e++) {
//           let i = t[e],
//             s = () => {
//               if (i.classList.contains("played")) this.siteBody.removeEventListener("pointerdown", s);
//               else {
//                 let r = i.play();
//                 typeof r < "u" && r.catch(p => {
//                   this.app.log("_playVideosHandler. Error: ", "error", p), i.controls = !0
//                 })
//               }
//             };
//           this.siteBody.addEventListener("pointerdown", s, !1)
//         }
//       }
//     }
//   });
//   var Js = {};
//   Z(Js, {
//     OriginTrialsBlock: () => si
//   });
//   var si, Ks = z(() => {
//     T();
//     B();
//     K();
//     si = class extends A {
//       constructor(t) {
//         super(t), this.name = "OriginTrialsBlock", this.addHook("beforeInitHooks", this.initOriginTrials)
//       }
//       initOriginTrials() {
//         JSON.parse(this.app.widgetParams.WIDGET.originTrialTokens).forEach(e => {
//           if (e.conditions.indexOf("webview") !== -1 && !this.app.isChromeWebView()) return;
//           let i = this.app.context.document.createElement("META");
//           i.httpEquiv = "origin-trial", i.content = e.token, this.app.context.document.head.appendChild(i), this.app.log("Origin Trial Token inserted: " + e.name)
//         })
//       }
//     }
//   });
//   var Zs = {};
//   Z(Zs, {
//     CalculateSessionsBlock: () => fr
//   });
//   var ur, se, fr, Xs = z(() => {
//     T();
//     B();
//     K();
//     ee();
//     ur = function (m, t, e) {
//       for (var i = arguments.length > 2, s = 0; s < t.length; s++) e = i ? t[s].call(m, e) : t[s].call(m);
//       return i ? e : void 0
//     }, se = function (m, t, e, i, s, r) {
//       function p(L) {
//         if (L !== void 0 && typeof L != "function") throw new TypeError("Function expected");
//         return L
//       }
//       for (var u = i.kind, d = u === "getter" ? "get" : u === "setter" ? "set" : "value", f = !t && m ? i.static ? m : m.prototype : null, b = t || (f ? Object.getOwnPropertyDescriptor(f, i.name) : {}), k, S = !1, y = e.length - 1; y >= 0; y--) {
//         var D = {};
//         for (var v in i) D[v] = v === "access" ? {} : i[v];
//         for (var v in i.access) D.access[v] = i.access[v];
//         D.addInitializer = function (L) {
//           if (S) throw new TypeError("Cannot add initializers after decoration has completed");
//           r.push(p(L || null))
//         };
//         var I = (0, e[y])(u === "accessor" ? {
//           get: b.get,
//           set: b.set
//         } : b[d], D);
//         if (u === "accessor") {
//           if (I === void 0) continue;
//           if (I === null || typeof I != "object") throw new TypeError("Object expected");
//           (k = p(I.get)) && (b.get = k), (k = p(I.set)) && (b.set = k), (k = p(I.init)) && s.unshift(k)
//         } else (k = p(I)) && (u === "field" ? s.unshift(k) : b[d] = k)
//       }
//       f && Object.defineProperty(f, i.name, b), S = !0
//     }, fr = (() => {
//       var m;
//       let t = A,
//         e = [],
//         i, s, r, p;
//       return m = class extends t {
//         constructor(d) {
//           super(d), this.topWindow = ur(this, e), this.expirationLimit = 30 * 24 * 60 * 60 * 1e3, this.weekLimit = 7 * 24 * 60 * 60 * 1e3, this.sessionLimit = 30 * 60 * 1e3, this.storageKeys = {
//             sessionsList: "_mgSessionsTimeList",
//             sessionsNumber: "_mgSessionsNumber",
//             sessionId: "_mgSessionId",
//             sessionPage: "_mgSessionPagesNumber",
//             sessionTeasersData: "_mgSessionTeasersData"
//           }, this.pagesKey = "_mgSessionPages", this.name = "CalculateSessionsBlock", this.init()
//         }
//         init() {
//           this.topWindow = this.app.getMostTopWindow();
//           try {
//             this.topWindow.localStorage && (this.app.countSessionClicksHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.countSessionClicks.handler, this.app.clickHandlerList.countSessionClicks.priority), this.addHook("beforeInjectScriptHooks", this.calculateSessions, 1e3, !0), this.addHook("beforeInjectScriptHooks", this.sendSessions, 1e3, !0), this.addHook("beforeLoadNewsHooks", this.savedSessions, 1e3, !0), this.addHook("afterPrepareCappingDataHooks", this.setTeaserImps, 1e3, !0))
//           } catch (d) {
//             this.app.log(`${this.name} no localStorage found`, "error", d)
//           }
//         }
//         calculateSessions() {
//           let d = this.topWindow.location.pathname;
//           this.app.isAmp() && this.app.context.context.location && (d = this.app.context.context.location);
//           let f = this.getCurrentTime();
//           if (this.sessionPage = Number(bt.getItem(this.storageKeys.sessionPage)) || Number(wt.getItem(this.storageKeys.sessionPage)) || 0, this.sessionsList = (JSON.parse(bt.getItem(this.storageKeys.sessionsList) || "false") || JSON.parse(wt.getItem(this.storageKeys.sessionsList) || "false") || []).filter(b => f - b < this.expirationLimit), bt.setItem(this.pagesKey, bt.getItem(this.pagesKey) || "[]"), bt.getItem(this.pagesKey).indexOf(d) === -1) {
//             let b = JSON.parse(bt.getItem(this.pagesKey));
//             b.push(d), bt.setItem(this.pagesKey, JSON.stringify(b)), this.sessionPage = this.sessionPage + 1
//           }
//           if (this.sessionsList.length) {
//             let b = this.sessionsList[this.sessionsList.length - 1];
//             f - b < this.sessionLimit ? (this.sessionsList[this.sessionsList.length - 1] = f, this.sessionId = bt.getItem(this.storageKeys.sessionId) || wt.getItem(this.storageKeys.sessionId) || this.generateSessionId()) : (this.sessionId = this.generateSessionId(), this.sessionsList = [...this.sessionsList, f], bt.setItem(this.pagesKey, JSON.stringify([d])), this.sessionPage = 1)
//           } else this.sessionId = this.generateSessionId(), this.sessionsList = [f], bt.setItem(this.pagesKey, JSON.stringify([d])), this.sessionPage = 1;
//           this.sessionsByWeek = this.sessionsList.filter(b => f - b < this.weekLimit), bt.setItem(this.storageKeys.sessionId, this.sessionId), bt.setItem(this.storageKeys.sessionPage, this.sessionPage.toString()), bt.setItem(this.storageKeys.sessionsList, JSON.stringify(this.sessionsList))
//         }
//         sendSessions() {
//           if (this.app.requestParams.sessionId = this.sessionId, this.app.requestParams.sessionPage = this.sessionPage, this.app.requestParams.sessionNumberWeek = this.sessionsByWeek.length, this.sessionsList.length === 1) this.app.requestParams.sessionNumber = 1;
//           else if (this.sessionsList.length >= 2) {
//             let d = this.sessionsList[this.sessionsList.length - 1],
//               f = this.sessionsList[this.sessionsList.length - 2],
//               b = Math.floor((d - f) / 6e4);
//             this.app.requestParams.sessionNumber = this.sessionsList.length, this.app.requestParams.timeBetweenSessions = b
//           }
//           if (this.sessionTeasersData = JSON.parse(wt.getItem(this.storageKeys.sessionTeasersData) || "[]"), this.sessionTeasersData.length) {
//             let d = this.sessionTeasersData.map(f => `${f.catId},${f.imps || 0}${f.clicks ? "," + f.clicks : ""}`);
//             this.app.requestParams.sessionCats = d.join(";")
//           }
//         }
//         savedSessions() {
//           this.app.servicerData.consent ? (wt.setItem(this.storageKeys.sessionId, this.sessionId), wt.setItem(this.storageKeys.sessionPage, this.sessionPage.toString()), wt.setItem(this.storageKeys.sessionsList, JSON.stringify(this.sessionsList)), this.app.widgetParams.WIDGET.retentionToolEnabled && wt.setItem(this.storageKeys.sessionsNumber, this.sessionsByWeek.length.toString())) : Object.keys(this.storageKeys).forEach(d => {
//             wt.removeItem(this.storageKeys[d])
//           })
//         }
//         generateSessionId() {
//           return wt.removeItem(this.storageKeys.sessionTeasersData), Math.round(Date.now() / 1e3).toString(16) + "-" + ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
//         }
//         getCurrentTime() {
//           return new Date().getTime()
//         }
//         setTeaserImps(d) {
//           this.updateTeaserData(d, "imps")
//         }
//         onClick(d, f) {
//           let b = d.getAttribute("data-hash");
//           return this.updateTeaserData(b, "clicks"), !0
//         }
//         updateTeaserData(d, f) {
//           if (this.app.servicerData.consent && this.app.teaserData[d].catId) {
//             let b = this.app.teaserData[d].catId;
//             this.sessionTeasersData = JSON.parse(wt.getItem(this.storageKeys.sessionTeasersData) || "[]"), this.sessionTeasersData.some(k => k.catId === b) ? this.sessionTeasersData = this.sessionTeasersData.map(k => k.catId === b ? {
//               ...k,
//               [f]: (k[f] || 0) + 1
//             } : k) : this.sessionTeasersData.push({
//               catId: b,
//               [f]: 1
//             }), wt.setItem(this.storageKeys.sessionTeasersData, JSON.stringify(this.sessionTeasersData))
//           }
//         }
//         getSessionId() {
//           return this.sessionId || null
//         }
//       }, (() => {
//         let u = typeof Symbol == "function" && Symbol.metadata ? Object.create(t[Symbol.metadata] ?? null) : void 0;
//         i = [At], s = [At], r = [At], p = [At], se(m, null, i, {
//           kind: "method",
//           name: "calculateSessions",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "calculateSessions" in d,
//             get: d => d.calculateSessions
//           },
//           metadata: u
//         }, null, e), se(m, null, s, {
//           kind: "method",
//           name: "sendSessions",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "sendSessions" in d,
//             get: d => d.sendSessions
//           },
//           metadata: u
//         }, null, e), se(m, null, r, {
//           kind: "method",
//           name: "savedSessions",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "savedSessions" in d,
//             get: d => d.savedSessions
//           },
//           metadata: u
//         }, null, e), se(m, null, p, {
//           kind: "method",
//           name: "updateTeaserData",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "updateTeaserData" in d,
//             get: d => d.updateTeaserData
//           },
//           metadata: u
//         }, null, e), u && Object.defineProperty(m, Symbol.metadata, {
//           enumerable: !0,
//           configurable: !0,
//           writable: !0,
//           value: u
//         })
//       })(), m
//     })()
//   });
//   var Ys = {};
//   Z(Ys, {
//     CalculateViewrateBlock: () => ai
//   });
//   var ai, Qs = z(() => {
//     T();
//     B();
//     K();
//     ai = class extends A {
//       constructor(t) {
//         super(t), this.weekLimit = 7 * 24 * 60 * 60 * 1e3, this.storageKey = "_mgViewrate" + this.app.widgetParams.WIDGET.id, this.name = "CalculateViewrateBlock", this.app.isAmp() || this.init()
//       }
//       init() {
//         this.topWindow = this.app.getMostTopWindow(), this.currentViewrateId = this.app.generateHash();
//         let t = new Date().getTime();
//         try {
//           if (this.topWindow.localStorage) {
//             this.viewrateDataList = (this.topWindow[this.storageKey] || JSON.parse(this.topWindow.localStorage[this.storageKey] || "false") || []).filter(i => t - i.st < this.weekLimit);
//             let e = {
//               id: this.currentViewrateId,
//               st: t,
//               v: 0,
//               r: 0
//             };
//             this.viewrateDataList.push(e), this.addHook("afterSendCappingHooks", this.updateViewrates), this.addHook("beforeInjectScriptHooks", this.sendViewrates), this.addHook("afterLoadNewsHooks", this.savedViewrates), this.topWindow.addEventListener("beforeunload", () => {
//               this.clearEmptyViewrates()
//             })
//           }
//         } catch (e) {
//           this.app.log(`${this.name} no localStorage found`, "error", e)
//         }
//       }
//       updateViewrates() {
//         let {
//           views: t,
//           renders: e
//         } = this.app.getViewrateParams();
//         this.viewrateDataList = this.viewrateDataList.map(i => i.id === this.currentViewrateId ? {
//           ...i,
//           v: t,
//           r: e
//         } : i), this.savedViewrates()
//       }
//       sendViewrates() {
//         let {
//           v: t,
//           r: e
//         } = this.viewrateDataList.reduce((i, s) => (i.v = s.v + i.v, i.r = s.r + i.r, i), {
//           v: 0,
//           r: 0
//         });
//         t > 0 && e > 0 && (this.app.requestParams.viewrate_1w = `${t},${e}`)
//       }
//       savedViewrates() {
//         this.topWindow[this.storageKey] = this.viewrateDataList, this.app.servicerData.consent ? this.topWindow.localStorage[this.storageKey] = JSON.stringify(this.viewrateDataList) : this.topWindow.localStorage.removeItem(this.storageKey)
//       }
//       clearEmptyViewrates() {
//         if (this.topWindow.localStorage[this.storageKey]) {
//           let t = JSON.parse(this.topWindow.localStorage[this.storageKey]).filter(e => e.v > 0 && e.r > 0);
//           this.topWindow.localStorage[this.storageKey] = JSON.stringify(t)
//         }
//       }
//     }
//   });
//   var ta = {};
//   Z(ta, {
//     SharedIdBlock: () => mr
//   });
//   var gr, ae, mr, ea = z(() => {
//     T();
//     B();
//     K();
//     ee();
//     gr = function (m, t, e) {
//       for (var i = arguments.length > 2, s = 0; s < t.length; s++) e = i ? t[s].call(m, e) : t[s].call(m);
//       return i ? e : void 0
//     }, ae = function (m, t, e, i, s, r) {
//       function p(L) {
//         if (L !== void 0 && typeof L != "function") throw new TypeError("Function expected");
//         return L
//       }
//       for (var u = i.kind, d = u === "getter" ? "get" : u === "setter" ? "set" : "value", f = !t && m ? i.static ? m : m.prototype : null, b = t || (f ? Object.getOwnPropertyDescriptor(f, i.name) : {}), k, S = !1, y = e.length - 1; y >= 0; y--) {
//         var D = {};
//         for (var v in i) D[v] = v === "access" ? {} : i[v];
//         for (var v in i.access) D.access[v] = i.access[v];
//         D.addInitializer = function (L) {
//           if (S) throw new TypeError("Cannot add initializers after decoration has completed");
//           r.push(p(L || null))
//         };
//         var I = (0, e[y])(u === "accessor" ? {
//           get: b.get,
//           set: b.set
//         } : b[d], D);
//         if (u === "accessor") {
//           if (I === void 0) continue;
//           if (I === null || typeof I != "object") throw new TypeError("Object expected");
//           (k = p(I.get)) && (b.get = k), (k = p(I.set)) && (b.set = k), (k = p(I.init)) && s.unshift(k)
//         } else (k = p(I)) && (u === "field" ? s.unshift(k) : b[d] = k)
//       }
//       f && Object.defineProperty(f, i.name, b), S = !0
//     }, mr = (() => {
//       var m;
//       let t = A,
//         e = [],
//         i, s, r, p;
//       return m = class extends t {
//         constructor(d) {
//           super(d), this.waitLimit = (gr(this, e), 90 * 1e3), this.sharedId = "", this.storageKey = "_mgSharedId", this.name = "SharedIdBlock", this.init()
//         }
//         init() {
//           try {
//             this.app.context.localStorage && (this.detectSharedId(), this.addHook("beforeInjectScriptHooks", this.sendSharedId, 1e3, !0))
//           } catch (d) {
//             this.app.log(`${this.name} no localStorage found`, "error", d)
//           }
//         }
//         detectSharedId() {
//           let d, f = new Date().getTime();
//           this.findSharedId(), d = setInterval(() => {
//             if (new Date().getTime() - f >= this.waitLimit) {
//               clearInterval(d), this.savedSharedId();
//               return
//             }
//             this.findSharedId()
//           }, 200), this.app.context.addEventListener("beforeunload", () => {
//             this.savedSharedId()
//           })
//         }
//         findSharedId() {
//           if (!this.sharedId.length) try {
//             let d = bt.getItem("pbjs");
//             if (d && typeof d?.getUserIds == "function") {
//               let f = d.getUserIds();
//               if (f && Object.keys(f).length) {
//                 let b = f.pubcid || f.sharedid?.id || "";
//                 b.length && (this.sharedId = b)
//               }
//             }
//           } catch (d) {
//             this.app.log(`${this.name} no pbjs found`, "error", d)
//           }
//         }
//         sendSharedId() {
//           if (this.sharedId.length) this.app.requestParams.sharedId = this.sharedId;
//           else {
//             let d = wt.getItem(this.storageKey);
//             d && d.length && (this.app.requestParams.sharedId = d)
//           }
//         }
//         savedSharedId() {
//           this.app.servicerData.consent ? this.sharedId.length && wt.setItem(this.storageKey, this.sharedId) : wt.removeItem(this.storageKey)
//         }
//       }, (() => {
//         let u = typeof Symbol == "function" && Symbol.metadata ? Object.create(t[Symbol.metadata] ?? null) : void 0;
//         i = [At], s = [At], r = [At], p = [At], ae(m, null, i, {
//           kind: "method",
//           name: "detectSharedId",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "detectSharedId" in d,
//             get: d => d.detectSharedId
//           },
//           metadata: u
//         }, null, e), ae(m, null, s, {
//           kind: "method",
//           name: "findSharedId",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "findSharedId" in d,
//             get: d => d.findSharedId
//           },
//           metadata: u
//         }, null, e), ae(m, null, r, {
//           kind: "method",
//           name: "sendSharedId",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "sendSharedId" in d,
//             get: d => d.sendSharedId
//           },
//           metadata: u
//         }, null, e), ae(m, null, p, {
//           kind: "method",
//           name: "savedSharedId",
//           static: !1,
//           private: !1,
//           access: {
//             has: d => "savedSharedId" in d,
//             get: d => d.savedSharedId
//           },
//           metadata: u
//         }, null, e), u && Object.defineProperty(m, Symbol.metadata, {
//           enumerable: !0,
//           configurable: !0,
//           writable: !0,
//           value: u
//         })
//       })(), m
//     })()
//   });
//   var ia = {};
//   Z(ia, {
//     RenderClassicBlock: () => ri
//   });
//   var ri, sa = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     ri = class extends A {
//       constructor(t) {
//         super(t), this.name = "RenderClassicBlock", this.expressionMap = {
//           "||": e => {
//             for (let i in e)
//               if (this.expressionParser(e[i])) return !0;
//             return !1
//           },
//           "&&": e => {
//             for (let i in e)
//               if (!this.expressionParser(e[i])) return !1;
//             return !0
//           },
//           "==": e => this.expressionParser(e[0]) == this.expressionParser(e[1]),
//           "!=": e => this.expressionParser(e[0]) != this.expressionParser(e[1]),
//           "+": e => this.expressionParser(e[0]) + this.expressionParser(e[1]),
//           "-": e => this.expressionParser(e[0]) - this.expressionParser(e[1]),
//           "*": e => this.expressionParser(e[0]) * this.expressionParser(e[1]),
//           "/": e => this.expressionParser(e[0]) / this.expressionParser(e[1]),
//           "%": e => this.expressionParser(e[0]) % this.expressionParser(e[1])
//         }
//       }
//       setRawTemplate(t) {
//         this.templateText = t
//       }
//       getHtml(t) {
//         if (t.length === 0) {
//           this.app.isAmp() && this.app.context.context.noContentAvailable();
//           return
//         }
//         let e = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(this.templateText);
//         if (!e) return;
//         let i = typeof e[1] < "u" ? e[1] : "";
//         for (let s = 0; s < t.length; s++) {
//           let r = this.renderItem(t[s], e[2]);
//           i += typeof r < "u" ? r : ""
//         }
//         return i += typeof e[3] < "u" ? e[3] : "", i
//       }
//       expressionParser(t) {
//         for (let e in this.expressionMap)
//           if (t.indexOf(e) !== -1) return this.expressionMap[e](t.split(e));
//         return (t || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "")
//       }
//       renderItem(t, e) {
//         let i = [];
//         i.push("teaser-" + t.id);
//         let s = "";
//         if (t.type == $.Banner) {
//           let d = t,
//             f = "100%";
//           d.width != 0 ? f = d.width + "px" : typeof this.app.preRenderTeaserSizes[d.iteration - 1] < "u" && (f = this.app.preRenderTeaserSizes[d.iteration - 1].width + "px");
//           let b = "100%";
//           d.height != 0 ? b = d.height + "px" : typeof this.app.preRenderTeaserSizes[d.iteration - 1] < "u" && (b = this.app.preRenderTeaserSizes[d.iteration - 1].height + "px");
//           let k = "width: " + f + "; height: " + b + "; border: 0px; margin: auto; overflow: hidden; position: relative;z-index: 1;";
//           s = '<iframe id="' + d.id + '" data-hash="' + (d.hash || d.id) + '" scrolling="no" style="' + k + '"></iframe>', i.push("mgline-banner"), this.app.stylesheetsBlock.add("mgline-banner", `.mgline-banner {  display: inline-flex;
//   overflow: hidden;
//   height: auto;
//   background: initial;
//   }`)
//         }
//         t.type == $.Teaser && t.link.match(/[\?|&]u=/) != null && i.push("dsp"), t.coopType != null && (i.push("type-" + t.coopType), t.coopType == F.Video && i.push("vrline"), t.type === $.Teaser && t.extd == 1 && t.coopType === F.Wages && i.push("extd")), t.type === $.Gpt && (i.push("mgline-gpt"), this.app.stylesheetsBlock.add(`style-${t.id}`, `.mgbox .teaser-${t.id} {
//         width: ${t.width ? t.width + "px" : "100%"};
//         height: ${t.height ? t.height + "px" : "auto"};
//         overflow: hidden;
//       }`));
//         let r = d => d && d.indexOf("//") === 0 ? this.app.webProtocol + d : d,
//           p = t.coopType != F.Video ? this.app.hrefAttr + '="' + this.app.prepareNiceHref(t.hash) + '" data-hash="' + t.hash + '"' : "";
//         t.hash == "" && (p = `onclick="return false" ${this.app.hrefAttr}="#"`);
//         let u = [
//           [/\{\*.*?\*\}/, ""],
//           [/\{\$href\}/g, p],
//           [/\{\$pmc_item\}/, this.app.id],
//           [/\{\$hash\}/g, t.hash],
//           [/\{\$target\}/g, t.coopType == F.InternalExchange || typeof this.app.servicerData.ats < "u" && this.app.servicerData.ats ? 'target="_top"' : 'target="_blank"'],
//           [/(class\=\".*?)(mgline)([^\"]*\")/, "$1$2 " + i.join(" ") + '$3 data-i="' + (t.hash || t.id) + '"' + (t.icat ? ' data-cat="' + t.icat + '"' : "") + (t.requestId ? ' id="' + t.requestId + '"' : "")],
//           [/(class\=\'.*?)(mgline)([^\']*\')/, "$1$2 " + i.join(" ") + '$3 data-i="' + (t.hash || t.id) + '"' + (t.icat ? ' data-cat="' + t.icat + '"' : "") + (t.requestId ? ' id="' + t.requestId + '"' : "")],
//           [/\{\$source\}/g, t.type == $.Teaser ? t.source : ""],
//           [/\{\$src\}/g, this.app.widgetParams.WIDGET.imageSizeAttributes + ' data-i="' + ($.Teaser ? t.id : "") + '" data-src="' + r($.Teaser ? t.img : "") + '" nopin="nopin"' + (($.Teaser ? t.extd : 0) == 1 ? "" : " crossOrigin")],
//           [/\{\$title\}/g, this.app.htmlEntities($.Teaser ? t.title : "")],
//           [/\{\$desc\}/g, this.app.htmlEntities($.Teaser ? t.desc : "")],
//           [/\{\$iteration\}/g, t.iteration],
//           [/\$iteration/g, t.iteration],
//           [/this\.iteration/g, t.iteration],
//           [/\{\$price\}/g, $.Teaser ? t.price : ""],
//           [/\{\$priceold\}/g, $.Teaser ? t.priceold : ""],
//           [/\{\$discount\}/g, $.Teaser ? t.discount : ""],
//           [/\{if \$price\}/g, "{if '' != " + ($.Teaser && t.price ? t.price : "''") + "}"],
//           [/\{if !\$price\}/g, "{if '' == " + ($.Teaser && t.price ? t.price : "''") + "}"],
//           [/\{if \$priceold\}/g, "{if '' != " + ($.Teaser && t.priceold ? t.priceold : "''") + "}"],
//           [/\{if \$price != " "\}/g, "{if " + ($.Teaser && t.price ? t.price : "''").trim().length + " != 0}"],
//           [/\{if \$price == " "\}/g, "{if " + ($.Teaser && t.price ? t.price : "''").trim().length + " == 0}"],
//           [/\$priceold/g, $.Teaser ? t.priceold : ""],
//           [/\$price/g, $.Teaser ? t.price : ""],
//           [/\{\$banner\}/g, s],
//           [/\{if \$teaser\}/g, "{if '' == '" + s + "'}"],
//           [/\{if \$banner\}/g, "{if '' != '" + s + "'}"],
//           [/\{\$category\}/g, $.Teaser ? t.category : ""],
//           [/\{\$cta\}/g, $.Teaser ? t.cta : ""],
//           [/\{if \$cta\}/g, "{if '" + ($.Teaser && t.cta ? t.cta : "''") + "' != ''}"],
//           [/\{if !\$cta\}/g, "{if '" + ($.Teaser && t.cta ? t.cta : "''") + "' != ''}"],
//           [/\{\$disclaimer\}/g, $.Teaser ? t.cdt : ""],
//           [/\{if \$disclaimer\}/g, "{if '" + ($.Teaser && t.cdt ? t.cdt : "''") + "' != ''}"],
//           [/\{if !\$disclaimer\}/g, "{if '" + ($.Teaser && t.cdt ? t.cdt : "''") + "' != ''}"],
//           [/\{\$sourceName\}/g, this.app.sourceName]
//         ];
//         for (let d = 0; d < u.length; d++) e = e.replace(u[d][0], u[d][1]);
//         for (e = e.replace(/\r?\n/g, ""); ;) {
//           let d = e,
//             f = /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g;
//           if (e = e.replace(f, (b, k, S) => this.expressionParser(k) ? S : ""), d == e) break
//         }
//         if (t.type == $.Teaser && (t.mediaType == "video" || t.img.match(/\.mp4/))) {
//           let f = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(e),
//             b = f ? f[1] + "px;" : "100%;",
//             k = f ? f[2] + "px;" : "100%;";
//           e = e.replace(/<img( class="mcimg[^>]+)/, '<video autoplay loop muted webkit-playsinline playsinline class="mcvideo" $1'), this.app.stylesheetsBlock.add("video", `video.mcvideo { border-style: solid;
//   border-color: #ffffff;
//   border-width: 0;
//   width: 100%;
//   height: auto;
//   max-width: ` + b + `
//   max-height: ` + k + `
//   box-sizing: border-box;
//   display: block; }`)
//         }
//         if (t.type == $.Teaser && t.extd === 1 && this.app.preRenderImageSizes[t.iteration - 1]) {
//           let d = this.app.preRenderImageSizes[t.iteration - 1].width,
//             f = this.app.preRenderImageSizes[t.iteration - 1].height;
//           if (f == 0 || d == 0) this.app.debugBlock.sendData("Wrong external image size! Using fallback"), e = e.replace(/<img( class="mcimg")/, '<img class="mcimg mg-wrong-image"');
//           else {
//             let b = {
//               width: d + "px !important",
//               height: f + "px !important",
//               "object-fit": "cover",
//               "-o-object-fit": "cover",
//               "object-position": "top",
//               "-o-object-position": "top"
//             },
//               k = "";
//             Object.keys(b).forEach(S => {
//               k += S + ":" + b[S] + ";"
//             }), e = e.replace(/<img( class="mcimg")/, '<img class="mcimg" style="' + k + '"')
//           }
//         }
//         return e
//       }
//     }
//   });
//   var aa = {};
//   Z(aa, {
//     RenderSchematicBlock: () => oi
//   });
//   var Wt, oi, ra = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     (function (m) {
//       m.Link = "link", m.Image = "image", m.Title = "title", m.Source = "source", m.Description = "desc", m.Price = "price", m.PriceOld = "priceold", m.Discount = "discount", m.Category = "category", m.Cta = "cta", m.Disclaimer = "disclaimer", m.SourceName = "sourceName", m.AzerionType = "azeriontype"
//     })(Wt || (Wt = {}));
//     oi = class extends A {
//       constructor(t) {
//         super(t), this.name = "RenderSchematicBlock"
//       }
//       setRawTemplate(t) {
//         this.templateText = t
//       }
//       getHtml(t) {
//         if (!t.length) return this.app.isAmp() && this.app.context.context.noContentAvailable(), "";
//         this.range = this.app.context.document.createRange(), this.range.selectNode(this.app.context.document.body);
//         let e = this.range.createContextualFragment(this.templateText),
//           i = e.querySelector('[data-template-schema="widget"]'),
//           s = e.querySelector('[data-template-schema="teaser"]'),
//           r = e.querySelector('[data-template-schema="banner"]');
//         if (!i) return this.app.log(`${this.name}: provide template for widget using schema.`), "";
//         let p = i.querySelectorAll('[data-template-type="container"]'),
//           u = {},
//           d = p[0];
//         if (p.length > 1)
//           for (let f = 0; f < p.length; f++) p[f].dataset.templateContainerPlaces.split(",").map(Number).forEach(k => {
//             u[k] = p[f]
//           });
//         t.forEach((f, b) => {
//           let k;
//           if (p.length > 1) {
//             let S = b + 1;
//             typeof u[S] < "u" && (d = u[S])
//           }
//           f.type === $.Banner && r && (k = this.renderBanner(f, r)), f.type === $.Teaser && s && (k = this.renderTeaser(f, s)), f.type === $.Gpt && s && (k = this.renderGpt(f, s)), k && d.appendChild(k)
//         });
//         for (let f = 0; f < p.length; f++) p[f].dataset.inline === "true" && p[f].replaceWith(...Array.from(p[f].childNodes));
//         return i.innerHTML
//       }
//       renderBanner(t, e) {
//         let i = this.range.createContextualFragment(e.innerHTML),
//           s = i.querySelector(".mgline"),
//           r = this.app.context.document.createElement("iframe"),
//           p = "100%",
//           u = "100%";
//         return t.width !== 0 ? p = t.width + "px" : typeof this.app.preRenderTeaserSizes[t.iteration - 1] < "u" && (p = this.app.preRenderTeaserSizes[t.iteration - 1].width + "px"), t.height !== 0 ? u = t.height + "px" : typeof this.app.preRenderTeaserSizes[t.iteration - 1] < "u" && (u = this.app.preRenderTeaserSizes[t.iteration - 1].height + "px"), r.id = t.id, r.dataset.hash = t.hash || t.id, r.scrolling = "no", r.style.width = p, r.style.height = u, r.style.border = "0px", r.style.margin = "auto", r.style.overflow = "hidden", r.style.position = "relative", r.style.zIndex = "1", this.addClasses(t, s), this.setConditionClassName(t, i), s.appendChild(r), this.app.stylesheetsBlock.add("mgline-banner", `.mgline-banner {  display: inline-flex;
//   overflow: hidden;
//   height: auto;
//   background: initial;
//   }`), i
//       }
//       renderTeaser(t, e) {
//         let i = e.innerHTML;
//         if (i.indexOf("{{type}}") || i.indexOf("{{source}}")) {
//           let p = "";
//           t.coopType === F.Wages || t.coopType === F.Azerion ? p = "ad" : t.coopType === F.InternalExchange && (p = "article"), i = i.replace(/{{type}}/g, p).replace(/{{source}}/g, t.source)
//         }
//         let s = this.range.createContextualFragment(i),
//           r = s.querySelector(".mgline");
//         return this.addClasses(t, r), this.setConditionTemplate(t, s), this.setConstructorTemplate(s), this.setConditionClassName(t, s), this.setMacrosTemplate(t, s), s
//       }
//       renderGpt(t, e) {
//         let i = this.range.createContextualFragment(e.innerHTML),
//           s = i.querySelector(".mgline");
//         return s.innerHTML = "", this.app.stylesheetsBlock.add(`style-${t.id}`, `.mgbox .teaser-${t.id} {
//       width: ${t.width ? t.width + "px" : "100%"};
//       height: ${t.height ? t.height + "px" : "auto"};
//       overflow: hidden;
//     }`), this.addClasses(t, s), this.setConditionClassName(t, i), i
//       }
//       setConditionTemplate(t, e) {
//         let i = e.querySelector("[data-template-condition]");
//         if (i) {
//           let s = i.dataset.templateCondition.trim();
//           if (s.indexOf("=") === -1) {
//             let r = s.indexOf("!") === -1,
//               p = s.replace("!", ""),
//               u = typeof t[p] == "string" && t[p].trim().length > 0 || typeof t[p] == "number";
//             r === u && i.insertAdjacentHTML("beforebegin", i.innerHTML)
//           } else {
//             let r = s.split("="),
//               p = t[r[0]],
//               u = r[1].split(",");
//             for (let d = 0; d < u.length; d++)
//               if (p === u[d]) {
//                 i.insertAdjacentHTML("beforebegin", i.innerHTML);
//                 break
//               }
//           }
//           i.parentNode.removeChild(i), this.setConditionTemplate(t, e)
//         } else return
//       }
//       setConstructorTemplate(t) {
//         let e = t.querySelector("[data-constructor-condition]");
//         if (e) {
//           if (this.app.widgetParams.WIDGET.widgetUseConstructor) e.insertAdjacentHTML("beforebegin", e.innerHTML);
//           else {
//             let i = e.dataset.constructorCondition.trim(),
//               s = !1;
//             switch (i) {
//               case "mcprice":
//                 s = this.app.widgetConstructorData.mcprice.show === "true";
//                 break;
//               case "mcdomain":
//                 s = this.app.widgetConstructorData.mcdomain.styles.display === "block";
//                 break;
//               case "mcdesc":
//                 s = this.app.widgetConstructorData.mcdesc.styles.display === "block";
//                 break
//             }
//             s && e.insertAdjacentHTML("beforebegin", e.innerHTML)
//           }
//           e.parentNode.removeChild(e), this.setConstructorTemplate(t)
//         } else return
//       }
//       setConditionClassName(t, e) {
//         let i = e.querySelectorAll("[data-class-condition]");
//         Array.prototype.forEach.call(i, s => {
//           let [r, p] = s.dataset.classCondition.split(";"), u = r.indexOf("!") === -1, d = r.replace("!", "").trim(), f = typeof t[d] == "string" && t[d].trim().length > 0 || typeof t[d] == "number";
//           if (p.indexOf("blur") !== -1) {
//             let b = r.split(".").filter(k => k.split(":")[1]?.split(",").indexOf(String(t.iteration)) !== -1)[0]?.split(":")[0]?.trim();
//             b && s.classList.add(`${p.trim()}-${b}`)
//           } else u === f && (d === "iteration" ? s.classList.add(`${p.trim()}-${t[d]}`) : s.classList.add(p.trim()))
//         })
//       }
//       setMacrosTemplate(t, e) {
//         let i = e.querySelectorAll("[data-template-macros]"),
//           s = Object.keys(Wt);
//         Array.prototype.forEach.call(i, r => {
//           let p = r.dataset.templateMacros.split(",");
//           for (let u = 0; u < p.length; u++) {
//             let d = p[u].trim();
//             if (!s.some(f => Wt[f] === d)) {
//               this.app.log(`${this.name}: wrong macros - ${d}, provide correct macros.`);
//               continue
//             }
//             switch (d) {
//               case Wt.Link:
//                 t.coopType !== F.Video && t.hash?.length && (r.setAttribute(this.app.hrefAttr, this.app.prepareNiceHref(t.hash)), r.dataset.hash = t.hash), t.hash?.length || (r.setAttribute(this.app.hrefAttr, "#"), r.setAttribute("onclick", "return false")), t.coopType === F.InternalExchange || this.app.servicerData?.ats ? r.setAttribute("target", "_top") : r.setAttribute("target", "_blank");
//                 break;
//               case Wt.Image:
//                 if (r.dataset.src = this.createWebLink(t.img), r.dataset.i = t.id, this.app.widgetParams.WIDGET.imageSizeAttributes.split(" ").forEach(b => {
//                   let [k, S] = b.split("=");
//                   r.setAttribute(k, S.replace(/"/g, ""))
//                 }), r.setAttribute("nopin", "nopin"), t.extd !== 1 && r.setAttribute("crossOrigin", ""), t.extd === 1 && this.app.preRenderImageSizes[t.iteration - 1]) {
//                   let b = this.app.preRenderImageSizes[t.iteration - 1].width,
//                     k = this.app.preRenderImageSizes[t.iteration - 1].height;
//                   if (k === 0 || b === 0) this.app.debugBlock.sendData("Wrong external image size! Using fallback"), r.classList.add("mg-wrong-image");
//                   else {
//                     let S = `width: ${b}px !important;
//                   height: ${k}px !important;
//                   object-fit: cover;
//                   -o-object-fit: cover;
//                   object-position: top;
//                   -o-object-position: top;
//                 `;
//                     r.style.cssText += S
//                   }
//                 }
//                 if (t.mediaType === "video" || t.img.match(/\.mp4/)) {
//                   let b = r.getAttribute("width"),
//                     k = r.getAttribute("height"),
//                     S = b ? b + "px;" : "100%;",
//                     y = k ? k + "px;" : "100%;",
//                     D = this.app.context.document.createElement("video");
//                   D.dataset.src = this.createWebLink(t.img), D.dataset.i = t.id, D.setAttribute("width", b), D.setAttribute("height", k), D.classList.add("mcvideo"), D.autoplay = !0, D.loop = !0, D.setAttribute("muted", ""), D.setAttribute("playsinline", ""), D.setAttribute("webkit-playsinline", ""), r.parentElement.replaceChild(D, r), this.app.stylesheetsBlock.add("video", `video.mcvideo { border-style: solid;
//   border-color: #ffffff;
//   border-width: 0;
//   width: 100%;
//   height: auto;
//   max-width: ` + S + `
//   max-height: ` + y + `
//   box-sizing: border-box;
//   display: block; }`)
//                 }
//                 break;
//               case Wt.Title:
//                 r.innerHTML = this.app.htmlEntities(t.title);
//                 break;
//               case Wt.Description:
//                 r.innerHTML = this.app.htmlEntities(t.desc);
//                 break;
//               case Wt.Disclaimer:
//                 r.innerHTML = t.cdt ?? "";
//                 break;
//               case Wt.SourceName:
//                 r.innerHTML = this.app.sourceName ?? "";
//                 break;
//               case Wt.Cta:
//                 let f = this.app.widgetParams.WIDGET.widgetUseConstructor ? this.app.getTranslation("[INFORMER_VIDEO_CLICK_TEXT]") : t.cta;
//                 r.insertAdjacentText("afterbegin", f);
//                 break;
//               default:
//                 r.innerHTML = t[d] ?? "";
//                 break
//             }
//           }
//         })
//       }
//       addClasses(t, e) {
//         e.classList.add("teaser-" + t.id), e.dataset.i = t.hash || t.id, t.icat && (e.dataset.cat = t.icat), t.requestId && (e.id = t.requestId), t.coopType && e.classList.add("type-" + t.coopType), typeof t.link == "string" && t.link.match(/[\?|&]u=/) !== null && e.classList.add("dsp"), t.coopType === F.Video && e.classList.add("vrline"), t.type === $.Teaser && t.extd == 1 && t.coopType === F.Wages && e.classList.add("extd"), t.type === $.Gpt && e.classList.add("mgline-gpt")
//       }
//       createWebLink(t) {
//         return t && t.indexOf("//") === 0 ? this.app.webProtocol + t : t
//       }
//     }
//   });
//   var oa = {};
//   Z(oa, {
//     ScaleInfoBlock: () => ni
//   });
//   var ni, na = z(() => {
//     T();
//     B();
//     K();
//     ni = class extends A {
//       constructor(t) {
//         super(t), this.name = "ScaleInfoBlock", this.addHook("afterInitHooks", this.calculateScaleInfo, 50)
//       }
//       calculateScaleInfo(t) {
//         let e = this.app.context.document.createElement("iframe");
//         e.id = "scaleInfo", e.style.display = "block", e.style.visibility = "hidden", e.style.width = "500px", e.style.height = "100px", e.style.position = "fixed", e.style.bottom = "0", e.style.left = "-200%", e.style.zIndex = "-1", this.app.context.document.body.appendChild(e);
//         let i = s => {
//           s.data?.id === "scaleInfo" && (this.app.requestParams.scale_metric_1 = s.data.scale_metric_1.toFixed(2), this.app.requestParams.scale_metric_2 = s.data.scale_metric_2.toFixed(2), this.app.requestParams.scale_metric_3 = s.data.scale_metric_3.toFixed(2), this.app.context.document.body.removeChild(e), this.app.context.removeEventListener("message", i, !1), t())
//         };
//         this.app.context.addEventListener("message", i, !1), e.contentWindow.document.open(), e.contentWindow.document.write(this.app.widgetParams.ASSETS.scaleInfoHtml), e.contentWindow.document.close()
//       }
//     }
//   });
//   var pa = {};
//   Z(pa, {
//     BrowserTopicsBlock: () => pi
//   });
//   var pi, ca = z(() => {
//     T();
//     B();
//     K();
//     pi = class extends A {
//       constructor(t) {
//         super(t), this.name = "BrowserTopicsBlock", this.addHook("beforeInitHooks", this.init, 50)
//       }
//       init() {
//         try {
//           this.isFeatureAvailable() && this.getTopics()
//         } catch (t) {
//           this.app.log(`${this.name} received topics Failed`, "error", t)
//         }
//       }
//       isFeatureAvailable() {
//         return "browsingTopics" in this.app.context.document && this.app.context.document?.featurePolicy?.allowsFeature("browsing-topics")
//       }
//       getTopics() {
//         this.app.context.document.browsingTopics().then(t => {
//           t.length && (this.app.requestParams.topics = t.map(({
//             topic: e
//           }) => e).join(","))
//         })
//       }
//     }
//   });
//   var Gt, ha = z(() => {
//     T();
//     B();
//     Gt = function (m, t) {
//       var e = {},
//         i = e.lib = {},
//         s = function () { },
//         r = i.Base = {
//           extend: function (y) {
//             s.prototype = this;
//             var D = new s;
//             return y && D.mixIn(y), D.hasOwnProperty("init") || (D.init = function () {
//               D.$super.init.apply(this, arguments)
//             }), D.init.prototype = D, D.$super = this, D
//           },
//           create: function () {
//             var y = this.extend();
//             return y.init.apply(y, arguments), y
//           },
//           init: function () { },
//           mixIn: function (y) {
//             for (var D in y) y.hasOwnProperty(D) && (this[D] = y[D]);
//             y.hasOwnProperty("toString") && (this.toString = y.toString)
//           },
//           clone: function () {
//             return this.init.prototype.extend(this)
//           }
//         },
//         p = i.WordArray = r.extend({
//           init: function (y, D) {
//             y = this.words = y || [], this.sigBytes = D != t ? D : 4 * y.length
//           },
//           toString: function (y) {
//             return (y || d).stringify(this)
//           },
//           concat: function (y) {
//             var D = this.words,
//               v = y.words,
//               I = this.sigBytes;
//             if (y = y.sigBytes, this.clamp(), I % 4)
//               for (var L = 0; L < y; L++) D[I + L >>> 2] |= (v[L >>> 2] >>> 24 - 8 * (L % 4) & 255) << 24 - 8 * ((I + L) % 4);
//             else if (65535 < v.length)
//               for (L = 0; L < y; L += 4) D[I + L >>> 2] = v[L >>> 2];
//             else D.push.apply(D, v);
//             return this.sigBytes += y, this
//           },
//           clamp: function () {
//             var y = this.words,
//               D = this.sigBytes;
//             y[D >>> 2] &= 4294967295 << 32 - 8 * (D % 4), y.length = m.ceil(D / 4)
//           },
//           clone: function () {
//             var y = r.clone.call(this);
//             return y.words = this.words.slice(0), y
//           },
//           random: function (y) {
//             for (var D = [], v = 0; v < y; v += 4) D.push(4294967296 * m.random() | 0);
//             return new p.init(D, y)
//           }
//         }),
//         u = e.enc = {},
//         d = u.Hex = {
//           stringify: function (y) {
//             var D = y.words;
//             y = y.sigBytes;
//             for (var v = [], I = 0; I < y; I++) {
//               var L = D[I >>> 2] >>> 24 - 8 * (I % 4) & 255;
//               v.push((L >>> 4).toString(16)), v.push((L & 15).toString(16))
//             }
//             return v.join("")
//           },
//           parse: function (y) {
//             for (var D = y.length, v = [], I = 0; I < D; I += 2) v[I >>> 3] |= parseInt(y.substr(I, 2), 16) << 24 - 4 * (I % 8);
//             return new p.init(v, D / 2)
//           }
//         },
//         f = u.Latin1 = {
//           stringify: function (y) {
//             var D = y.words;
//             y = y.sigBytes;
//             for (var v = [], I = 0; I < y; I++) v.push(String.fromCharCode(D[I >>> 2] >>> 24 - 8 * (I % 4) & 255));
//             return v.join("")
//           },
//           parse: function (y) {
//             for (var D = y.length, v = [], I = 0; I < D; I++) v[I >>> 2] |= (y.charCodeAt(I) & 255) << 24 - 8 * (I % 4);
//             return new p.init(v, D)
//           }
//         },
//         b = u.Utf8 = {
//           stringify: function (y) {
//             try {
//               return decodeURIComponent(escape(f.stringify(y)))
//             } catch {
//               throw Error("Malformed UTF-8 data")
//             }
//           },
//           parse: function (y) {
//             return f.parse(unescape(encodeURIComponent(y)))
//           }
//         },
//         k = i.BufferedBlockAlgorithm = r.extend({
//           reset: function () {
//             this._data = new p.init, this._nDataBytes = 0
//           },
//           _append: function (y) {
//             typeof y == "string" && (y = b.parse(y)), this._data.concat(y), this._nDataBytes += y.sigBytes
//           },
//           _process: function (y) {
//             var D = this._data,
//               v = D.words,
//               I = D.sigBytes,
//               L = this.blockSize,
//               j = I / (4 * L),
//               j = y ? m.ceil(j) : m.max((j | 0) - this._minBufferSize, 0);
//             if (y = j * L, I = m.min(4 * y, I), y) {
//               for (var Y = 0; Y < y; Y += L) this._doProcessBlock(v, Y);
//               Y = v.splice(0, y), D.sigBytes -= I
//             }
//             return new p.init(Y, I)
//           },
//           clone: function () {
//             var y = r.clone.call(this);
//             return y._data = this._data.clone(), y
//           },
//           _minBufferSize: 0
//         });
//       i.Hasher = k.extend({
//         cfg: r.extend(),
//         init: function (y) {
//           this.cfg = this.cfg.extend(y), this.reset()
//         },
//         reset: function () {
//           k.reset.call(this), this._doReset()
//         },
//         update: function (y) {
//           return this._append(y), this._process(), this
//         },
//         finalize: function (y) {
//           return y && this._append(y), this._doFinalize()
//         },
//         blockSize: 16,
//         _createHelper: function (y) {
//           return function (D, v) {
//             return new y.init(v).finalize(D)
//           }
//         },
//         _createHmacHelper: function (y) {
//           return function (D, v) {
//             return new S.HMAC.init(y, v).finalize(D)
//           }
//         }
//       });
//       var S = e.algo = {};
//       return e
//     }(Math);
//     (function () {
//       var m = Gt,
//         t = m.lib.WordArray;
//       m.enc.Base64 = {
//         stringify: function (e) {
//           var i = e.words,
//             s = e.sigBytes,
//             r = this._map;
//           e.clamp(), e = [];
//           for (var p = 0; p < s; p += 3)
//             for (var u = (i[p >>> 2] >>> 24 - 8 * (p % 4) & 255) << 16 | (i[p + 1 >>> 2] >>> 24 - 8 * ((p + 1) % 4) & 255) << 8 | i[p + 2 >>> 2] >>> 24 - 8 * ((p + 2) % 4) & 255, d = 0; 4 > d && p + .75 * d < s; d++) e.push(r.charAt(u >>> 6 * (3 - d) & 63));
//           if (i = r.charAt(64))
//             for (; e.length % 4;) e.push(i);
//           return e.join("")
//         },
//         parse: function (e) {
//           var i = e.length,
//             s = this._map,
//             r = s.charAt(64);
//           r && (r = e.indexOf(r), r != -1 && (i = r));
//           for (var r = [], p = 0, u = 0; u < i; u++)
//             if (u % 4) {
//               var d = s.indexOf(e.charAt(u - 1)) << 2 * (u % 4),
//                 f = s.indexOf(e.charAt(u)) >>> 6 - 2 * (u % 4);
//               r[p >>> 2] |= (d | f) << 24 - 8 * (p % 4), p++
//             } return t.create(r, p)
//         },
//         _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
//       }
//     })();
//     (function (m) {
//       function t(k, S, y, D, v, I, L) {
//         return k = k + (S & y | ~S & D) + v + L, (k << I | k >>> 32 - I) + S
//       }

//       function e(k, S, y, D, v, I, L) {
//         return k = k + (S & D | y & ~D) + v + L, (k << I | k >>> 32 - I) + S
//       }

//       function i(k, S, y, D, v, I, L) {
//         return k = k + (S ^ y ^ D) + v + L, (k << I | k >>> 32 - I) + S
//       }

//       function s(k, S, y, D, v, I, L) {
//         return k = k + (y ^ (S | ~D)) + v + L, (k << I | k >>> 32 - I) + S
//       }
//       for (var r = Gt, d = r.lib, p = d.WordArray, u = d.Hasher, d = r.algo, f = [], b = 0; 64 > b; b++) f[b] = 4294967296 * m.abs(m.sin(b + 1)) | 0;
//       d = d.MD5 = u.extend({
//         _doReset: function () {
//           this._hash = new p.init([1732584193, 4023233417, 2562383102, 271733878])
//         },
//         _doProcessBlock: function (k, S) {
//           for (var y = 0; 16 > y; y++) {
//             var D = S + y,
//               v = k[D];
//             k[D] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360
//           }
//           var y = this._hash.words,
//             D = k[S + 0],
//             v = k[S + 1],
//             I = k[S + 2],
//             L = k[S + 3],
//             j = k[S + 4],
//             Y = k[S + 5],
//             tt = k[S + 6],
//             ht = k[S + 7],
//             Pt = k[S + 8],
//             et = k[S + 9],
//             X = k[S + 10],
//             st = k[S + 11],
//             ft = k[S + 12],
//             at = k[S + 13],
//             Q = k[S + 14],
//             ut = k[S + 15],
//             _ = y[0],
//             R = y[1],
//             W = y[2],
//             G = y[3],
//             _ = t(_, R, W, G, D, 7, f[0]),
//             G = t(G, _, R, W, v, 12, f[1]),
//             W = t(W, G, _, R, I, 17, f[2]),
//             R = t(R, W, G, _, L, 22, f[3]),
//             _ = t(_, R, W, G, j, 7, f[4]),
//             G = t(G, _, R, W, Y, 12, f[5]),
//             W = t(W, G, _, R, tt, 17, f[6]),
//             R = t(R, W, G, _, ht, 22, f[7]),
//             _ = t(_, R, W, G, Pt, 7, f[8]),
//             G = t(G, _, R, W, et, 12, f[9]),
//             W = t(W, G, _, R, X, 17, f[10]),
//             R = t(R, W, G, _, st, 22, f[11]),
//             _ = t(_, R, W, G, ft, 7, f[12]),
//             G = t(G, _, R, W, at, 12, f[13]),
//             W = t(W, G, _, R, Q, 17, f[14]),
//             R = t(R, W, G, _, ut, 22, f[15]),
//             _ = e(_, R, W, G, v, 5, f[16]),
//             G = e(G, _, R, W, tt, 9, f[17]),
//             W = e(W, G, _, R, st, 14, f[18]),
//             R = e(R, W, G, _, D, 20, f[19]),
//             _ = e(_, R, W, G, Y, 5, f[20]),
//             G = e(G, _, R, W, X, 9, f[21]),
//             W = e(W, G, _, R, ut, 14, f[22]),
//             R = e(R, W, G, _, j, 20, f[23]),
//             _ = e(_, R, W, G, et, 5, f[24]),
//             G = e(G, _, R, W, Q, 9, f[25]),
//             W = e(W, G, _, R, L, 14, f[26]),
//             R = e(R, W, G, _, Pt, 20, f[27]),
//             _ = e(_, R, W, G, at, 5, f[28]),
//             G = e(G, _, R, W, I, 9, f[29]),
//             W = e(W, G, _, R, ht, 14, f[30]),
//             R = e(R, W, G, _, ft, 20, f[31]),
//             _ = i(_, R, W, G, Y, 4, f[32]),
//             G = i(G, _, R, W, Pt, 11, f[33]),
//             W = i(W, G, _, R, st, 16, f[34]),
//             R = i(R, W, G, _, Q, 23, f[35]),
//             _ = i(_, R, W, G, v, 4, f[36]),
//             G = i(G, _, R, W, j, 11, f[37]),
//             W = i(W, G, _, R, ht, 16, f[38]),
//             R = i(R, W, G, _, X, 23, f[39]),
//             _ = i(_, R, W, G, at, 4, f[40]),
//             G = i(G, _, R, W, D, 11, f[41]),
//             W = i(W, G, _, R, L, 16, f[42]),
//             R = i(R, W, G, _, tt, 23, f[43]),
//             _ = i(_, R, W, G, et, 4, f[44]),
//             G = i(G, _, R, W, ft, 11, f[45]),
//             W = i(W, G, _, R, ut, 16, f[46]),
//             R = i(R, W, G, _, I, 23, f[47]),
//             _ = s(_, R, W, G, D, 6, f[48]),
//             G = s(G, _, R, W, ht, 10, f[49]),
//             W = s(W, G, _, R, Q, 15, f[50]),
//             R = s(R, W, G, _, Y, 21, f[51]),
//             _ = s(_, R, W, G, ft, 6, f[52]),
//             G = s(G, _, R, W, L, 10, f[53]),
//             W = s(W, G, _, R, X, 15, f[54]),
//             R = s(R, W, G, _, v, 21, f[55]),
//             _ = s(_, R, W, G, Pt, 6, f[56]),
//             G = s(G, _, R, W, ut, 10, f[57]),
//             W = s(W, G, _, R, tt, 15, f[58]),
//             R = s(R, W, G, _, at, 21, f[59]),
//             _ = s(_, R, W, G, j, 6, f[60]),
//             G = s(G, _, R, W, st, 10, f[61]),
//             W = s(W, G, _, R, I, 15, f[62]),
//             R = s(R, W, G, _, et, 21, f[63]);
//           y[0] = y[0] + _ | 0, y[1] = y[1] + R | 0, y[2] = y[2] + W | 0, y[3] = y[3] + G | 0
//         },
//         _doFinalize: function () {
//           var k = this._data,
//             S = k.words,
//             y = 8 * this._nDataBytes,
//             D = 8 * k.sigBytes;
//           S[D >>> 5] |= 128 << 24 - D % 32;
//           var v = m.floor(y / 4294967296);
//           for (S[(D + 64 >>> 9 << 4) + 15] = (v << 8 | v >>> 24) & 16711935 | (v << 24 | v >>> 8) & 4278255360, S[(D + 64 >>> 9 << 4) + 14] = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, k.sigBytes = 4 * (S.length + 1), this._process(), k = this._hash, S = k.words, y = 0; 4 > y; y++) D = S[y], S[y] = (D << 8 | D >>> 24) & 16711935 | (D << 24 | D >>> 8) & 4278255360;
//           return k
//         },
//         clone: function () {
//           var k = u.clone.call(this);
//           return k._hash = this._hash.clone(), k
//         }
//       }), r.MD5 = u._createHelper(d), r.HmacMD5 = u._createHmacHelper(d)
//     })(Math);
//     (function () {
//       var m = Gt,
//         i = m.lib,
//         t = i.Base,
//         e = i.WordArray,
//         i = m.algo,
//         s = i.EvpKDF = t.extend({
//           cfg: t.extend({
//             keySize: 4,
//             hasher: i.MD5,
//             iterations: 1
//           }),
//           init: function (r) {
//             this.cfg = this.cfg.extend(r)
//           },
//           compute: function (r, p) {
//             for (var k = this.cfg, u = k.hasher.create(), d = e.create(), f = d.words, b = k.keySize, k = k.iterations; f.length < b;) {
//               S && u.update(S);
//               var S = u.update(r).finalize(p);
//               u.reset();
//               for (var y = 1; y < k; y++) S = u.finalize(S), u.reset();
//               d.concat(S)
//             }
//             return d.sigBytes = 4 * b, d
//           }
//         });
//       m.EvpKDF = function (r, p, u) {
//         return s.create(u).compute(r, p)
//       }
//     })();
//     Gt.lib.Cipher || function (m) {
//       var y = Gt,
//         t = y.lib,
//         e = t.Base,
//         i = t.WordArray,
//         s = t.BufferedBlockAlgorithm,
//         r = y.enc.Base64,
//         p = y.algo.EvpKDF,
//         u = t.Cipher = s.extend({
//           cfg: e.extend(),
//           createEncryptor: function (v, I) {
//             return this.create(this._ENC_XFORM_MODE, v, I)
//           },
//           createDecryptor: function (v, I) {
//             return this.create(this._DEC_XFORM_MODE, v, I)
//           },
//           init: function (v, I, L) {
//             this.cfg = this.cfg.extend(L), this._xformMode = v, this._key = I, this.reset()
//           },
//           reset: function () {
//             s.reset.call(this), this._doReset()
//           },
//           process: function (v) {
//             return this._append(v), this._process()
//           },
//           finalize: function (v) {
//             return v && this._append(v), this._doFinalize()
//           },
//           keySize: 4,
//           ivSize: 4,
//           _ENC_XFORM_MODE: 1,
//           _DEC_XFORM_MODE: 2,
//           _createHelper: function (v) {
//             return {
//               encrypt: function (I, L, j) {
//                 return (typeof L == "string" ? D : S).encrypt(v, I, L, j)
//               },
//               decrypt: function (I, L, j) {
//                 return (typeof L == "string" ? D : S).decrypt(v, I, L, j)
//               }
//             }
//           }
//         });
//       t.StreamCipher = u.extend({
//         _doFinalize: function () {
//           return this._process(!0)
//         },
//         blockSize: 1
//       });
//       var k = y.mode = {},
//         d = function (v, I, L) {
//           var j = this._iv;
//           j ? this._iv = m : j = this._prevBlock;
//           for (var Y = 0; Y < L; Y++) v[I + Y] ^= j[Y]
//         },
//         f = (t.BlockCipherMode = e.extend({
//           createEncryptor: function (v, I) {
//             return this.Encryptor.create(v, I)
//           },
//           createDecryptor: function (v, I) {
//             return this.Decryptor.create(v, I)
//           },
//           init: function (v, I) {
//             this._cipher = v, this._iv = I
//           }
//         })).extend();
//       f.Encryptor = f.extend({
//         processBlock: function (v, I) {
//           var L = this._cipher,
//             j = L.blockSize;
//           d.call(this, v, I, j), L.encryptBlock(v, I), this._prevBlock = v.slice(I, I + j)
//         }
//       }), f.Decryptor = f.extend({
//         processBlock: function (v, I) {
//           var L = this._cipher,
//             j = L.blockSize,
//             Y = v.slice(I, I + j);
//           L.decryptBlock(v, I), d.call(this, v, I, j), this._prevBlock = Y
//         }
//       }), k = k.CBC = f, f = (y.pad = {}).Pkcs7 = {
//         pad: function (v, I) {
//           for (var L = 4 * I, L = L - v.sigBytes % L, j = L << 24 | L << 16 | L << 8 | L, Y = [], tt = 0; tt < L; tt += 4) Y.push(j);
//           L = i.create(Y, L), v.concat(L)
//         },
//         unpad: function (v) {
//           v.sigBytes -= v.words[v.sigBytes - 1 >>> 2] & 255
//         }
//       }, t.BlockCipher = u.extend({
//         cfg: u.cfg.extend({
//           mode: k,
//           padding: f
//         }),
//         reset: function () {
//           u.reset.call(this);
//           var I = this.cfg,
//             v = I.iv,
//             I = I.mode;
//           if (this._xformMode == this._ENC_XFORM_MODE) var L = I.createEncryptor;
//           else L = I.createDecryptor, this._minBufferSize = 1;
//           this._mode = L.call(I, this, v && v.words)
//         },
//         _doProcessBlock: function (v, I) {
//           this._mode.processBlock(v, I)
//         },
//         _doFinalize: function () {
//           var v = this.cfg.padding;
//           if (this._xformMode == this._ENC_XFORM_MODE) {
//             v.pad(this._data, this.blockSize);
//             var I = this._process(!0)
//           } else I = this._process(!0), v.unpad(I);
//           return I
//         },
//         blockSize: 4
//       });
//       var b = t.CipherParams = e.extend({
//         init: function (v) {
//           this.mixIn(v)
//         },
//         toString: function (v) {
//           return (v || this.formatter).stringify(this)
//         }
//       }),
//         k = (y.format = {}).OpenSSL = {
//           stringify: function (v) {
//             var I = v.ciphertext;
//             return v = v.salt, (v ? i.create([1398893684, 1701076831]).concat(v).concat(I) : I).toString(r)
//           },
//           parse: function (v) {
//             v = r.parse(v);
//             var I = v.words;
//             if (I[0] == 1398893684 && I[1] == 1701076831) {
//               var L = i.create(I.slice(2, 4));
//               I.splice(0, 4), v.sigBytes -= 16
//             }
//             return b.create({
//               ciphertext: v,
//               salt: L
//             })
//           }
//         },
//         S = t.SerializableCipher = e.extend({
//           cfg: e.extend({
//             format: k
//           }),
//           encrypt: function (v, I, L, j) {
//             j = this.cfg.extend(j);
//             var Y = v.createEncryptor(L, j);
//             return I = Y.finalize(I), Y = Y.cfg, b.create({
//               ciphertext: I,
//               key: L,
//               iv: Y.iv,
//               algorithm: v,
//               mode: Y.mode,
//               padding: Y.padding,
//               blockSize: v.blockSize,
//               formatter: j.format
//             })
//           },
//           decrypt: function (v, I, L, j) {
//             return j = this.cfg.extend(j), I = this._parse(I, j.format), v.createDecryptor(L, j).finalize(I.ciphertext)
//           },
//           _parse: function (v, I) {
//             return typeof v == "string" ? I.parse(v, this) : v
//           }
//         }),
//         y = (y.kdf = {}).OpenSSL = {
//           execute: function (v, I, L, j) {
//             return j || (j = i.random(8)), v = p.create({
//               keySize: I + L
//             }).compute(v, j), L = i.create(v.words.slice(I), 4 * L), v.sigBytes = 4 * I, b.create({
//               key: v,
//               iv: L,
//               salt: j
//             })
//           }
//         },
//         D = t.PasswordBasedCipher = S.extend({
//           cfg: S.cfg.extend({
//             kdf: y
//           }),
//           encrypt: function (v, I, L, j) {
//             return j = this.cfg.extend(j), L = j.kdf.execute(L, v.keySize, v.ivSize), j.iv = L.iv, v = S.encrypt.call(this, v, I, L.key, j), v.mixIn(L), v
//           },
//           decrypt: function (v, I, L, j) {
//             return j = this.cfg.extend(j), I = this._parse(I, j.format), L = j.kdf.execute(L, v.keySize, v.ivSize, I.salt), j.iv = L.iv, S.decrypt.call(this, v, I, L.key, j)
//           }
//         })
//     }();
//     (function () {
//       for (var m = Gt, t = m.lib.BlockCipher, Pt = m.algo, e = [], i = [], s = [], r = [], p = [], u = [], d = [], f = [], b = [], k = [], S = [], y = 0; 256 > y; y++) S[y] = 128 > y ? y << 1 : y << 1 ^ 283;
//       for (var D = 0, v = 0, y = 0; 256 > y; y++) {
//         var I = v ^ v << 1 ^ v << 2 ^ v << 3 ^ v << 4,
//           I = I >>> 8 ^ I & 255 ^ 99;
//         e[D] = I, i[I] = D;
//         var L = S[D],
//           j = S[L],
//           Y = S[j],
//           tt = 257 * S[I] ^ 16843008 * I;
//         s[D] = tt << 24 | tt >>> 8, r[D] = tt << 16 | tt >>> 16, p[D] = tt << 8 | tt >>> 24, u[D] = tt, tt = 16843009 * Y ^ 65537 * j ^ 257 * L ^ 16843008 * D, d[I] = tt << 24 | tt >>> 8, f[I] = tt << 16 | tt >>> 16, b[I] = tt << 8 | tt >>> 24, k[I] = tt, D ? (D = L ^ S[S[S[Y ^ L]]], v ^= S[S[v]]) : D = v = 1
//       }
//       var ht = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
//         Pt = Pt.AES = t.extend({
//           _doReset: function () {
//             for (var st = this._key, et = st.words, X = st.sigBytes / 4, st = 4 * ((this._nRounds = X + 6) + 1), ft = this._keySchedule = [], at = 0; at < st; at++)
//               if (at < X) ft[at] = et[at];
//               else {
//                 var Q = ft[at - 1];
//                 at % X ? 6 < X && at % X == 4 && (Q = e[Q >>> 24] << 24 | e[Q >>> 16 & 255] << 16 | e[Q >>> 8 & 255] << 8 | e[Q & 255]) : (Q = Q << 8 | Q >>> 24, Q = e[Q >>> 24] << 24 | e[Q >>> 16 & 255] << 16 | e[Q >>> 8 & 255] << 8 | e[Q & 255], Q ^= ht[at / X | 0] << 24), ft[at] = ft[at - X] ^ Q
//               } for (et = this._invKeySchedule = [], X = 0; X < st; X++) at = st - X, Q = X % 4 ? ft[at] : ft[at - 4], et[X] = 4 > X || 4 >= at ? Q : d[e[Q >>> 24]] ^ f[e[Q >>> 16 & 255]] ^ b[e[Q >>> 8 & 255]] ^ k[e[Q & 255]]
//           },
//           encryptBlock: function (et, X) {
//             this._doCryptBlock(et, X, this._keySchedule, s, r, p, u, e)
//           },
//           decryptBlock: function (et, X) {
//             var st = et[X + 1];
//             et[X + 1] = et[X + 3], et[X + 3] = st, this._doCryptBlock(et, X, this._invKeySchedule, d, f, b, k, i), st = et[X + 1], et[X + 1] = et[X + 3], et[X + 3] = st
//           },
//           _doCryptBlock: function (et, X, st, ft, at, Q, ut, _) {
//             for (var G = this._nRounds, Et = et[X] ^ st[0], Ct = et[X + 1] ^ st[1], Tt = et[X + 2] ^ st[2], lt = et[X + 3] ^ st[3], W = 4, R = 1; R < G; R++) var Ot = ft[Et >>> 24] ^ at[Ct >>> 16 & 255] ^ Q[Tt >>> 8 & 255] ^ ut[lt & 255] ^ st[W++],
//               vt = ft[Ct >>> 24] ^ at[Tt >>> 16 & 255] ^ Q[lt >>> 8 & 255] ^ ut[Et & 255] ^ st[W++],
//               Dt = ft[Tt >>> 24] ^ at[lt >>> 16 & 255] ^ Q[Et >>> 8 & 255] ^ ut[Ct & 255] ^ st[W++],
//               lt = ft[lt >>> 24] ^ at[Et >>> 16 & 255] ^ Q[Ct >>> 8 & 255] ^ ut[Tt & 255] ^ st[W++],
//               Et = Ot,
//               Ct = vt,
//               Tt = Dt;
//             Ot = (_[Et >>> 24] << 24 | _[Ct >>> 16 & 255] << 16 | _[Tt >>> 8 & 255] << 8 | _[lt & 255]) ^ st[W++], vt = (_[Ct >>> 24] << 24 | _[Tt >>> 16 & 255] << 16 | _[lt >>> 8 & 255] << 8 | _[Et & 255]) ^ st[W++], Dt = (_[Tt >>> 24] << 24 | _[lt >>> 16 & 255] << 16 | _[Et >>> 8 & 255] << 8 | _[Ct & 255]) ^ st[W++], lt = (_[lt >>> 24] << 24 | _[Et >>> 16 & 255] << 16 | _[Ct >>> 8 & 255] << 8 | _[Tt & 255]) ^ st[W++], et[X] = Ot, et[X + 1] = vt, et[X + 2] = Dt, et[X + 3] = lt
//           },
//           keySize: 8
//         });
//       m.AES = t._createHelper(Pt)
//     })()
//   });
//   var la = {};
//   Z(la, {
//     AntifraudStatisticsBlock: () => ui
//   });
//   var ci, Mt, Lt, hi, li, di, ui, da = z(() => {
//     T();
//     B();
//     ha();
//     K();
//     ci = class {
//       constructor() {
//         this.mousePositions = [], this.lineSegments = [], this.lineIndex = 0, this.scrollActive = !1
//       }
//       isLinear() {
//         return this.calculateTotalLength() < 10 ? !1 : this.lineSegments.every(t => {
//           let e = this.mousePositions.slice(t.start, t.end + 1);
//           return this.checkLinear(e)
//         })
//       }
//       reset() {
//         this.mousePositions = [], this.lineSegments = [], this.lineIndex = 0, this.scrollActive = !1
//       }
//       onMouseMoveHandler(t) {
//         this.scrollActive || (this.mousePositions.push({
//           x: t.clientX,
//           y: t.clientY
//         }), this.mousePositions.length > 2 && this.checkForNewLineSegment())
//       }
//       onScrollHandler() {
//         this.scrollActive = !0
//       }
//       onScrollEndHandler() {
//         this.scrollActive = !1
//       }
//       checkForNewLineSegment() {
//         let t = this.mousePositions[this.mousePositions.length - 2],
//           e = this.mousePositions[this.mousePositions.length - 1],
//           i = (e.y - t.y) / (e.x - t.x);
//         if (this.lineSegments[this.lineIndex]) {
//           let s = this.mousePositions[this.lineSegments[this.lineIndex].start],
//             r = (t.y - s.y) / (t.x - s.x);
//           Math.abs(i - r) > 5 ? (this.lineSegments[this.lineIndex].end = this.mousePositions.length - 2, this.lineSegments.push({
//             start: this.mousePositions.length - 1
//           }), this.lineIndex++) : this.lineSegments[this.lineIndex].end = this.mousePositions.length - 1
//         } else this.lineSegments.push({
//           start: 0,
//           end: this.mousePositions.length - 1
//         })
//       }
//       checkLinear(t) {
//         if (t.length < 2) return !0;
//         let e = 3,
//           [i, s] = [t[0].x, t[0].y],
//           [r, p] = [t[t.length - 1].x, t[t.length - 1].y];
//         for (let u = 1; u < t.length - 1; u++) {
//           let [d, f] = [t[u].x, t[u].y];
//           if (Math.abs((p - s) * d - (r - i) * f + r * s - p * i) / Math.sqrt(Math.pow(p - s, 2) + Math.pow(r - i, 2)) > e) return !1
//         }
//         return !0
//       }
//       calculateTotalLength() {
//         let t = 0;
//         for (let e = 1; e < this.mousePositions.length; e++) {
//           let i = this.mousePositions[e - 1],
//             s = this.mousePositions[e],
//             r = Math.sqrt(Math.pow(s.x - i.x, 2) + Math.pow(s.y - i.y, 2));
//           t += r
//         }
//         return t
//       }
//     }, Mt = class {
//       static getClosestDistanceInSquare(t, e) {
//         let i = t.x - e.left,
//           s = t.y - e.top,
//           r = e.width - i,
//           p = e.height - s;
//         return Math.min(i, s, r, p)
//       }
//       static getInnerElementPercent(t, e) {
//         let i = t.getBoundingClientRect(),
//           s = Math.abs(i.width * i.height),
//           r = i.width,
//           p = i.height;
//         i.top < 0 && (p += i.top), i.left < 0 && (r += i.left);
//         let u = i.top + i.height;
//         e.height < u && (p -= u - e.height);
//         let d = i.left + i.width;
//         return e.width < d && (r -= d - e.width), p = p > 0 ? p : 0, r = r > 0 ? r : 0, r * p * 100 / s
//       }
//       static findImageElementOfTeaser(t) {
//         return t.querySelector("img.mcimg")
//       }
//       static getViewportSize() {
//         return {
//           width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
//           height: Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
//         }
//       }
//       static isElementMatches(t, e) {
//         return t.matches ? t.matches(e) : t.msMatchesSelector ? t.msMatchesSelector(e) : !1
//       }
//     };
//     (function (m) {
//       m.Undefined = "undefined", m.Click = "click", m.Close = "close", m.Like = "like", m.DsaIconClick = "dsaIconClick", m.IntExchange = "int_exchange"
//     })(Lt || (Lt = {}));
//     hi = class {
//       constructor() {
//         this.action = Lt.Undefined, this.isTabActive = !0, this.clickTime = 0, this.lastScrollTime = 0, this.lastPageResizeTime = 0, this.widgetCoordinateX = 0, this.widgetCoordinateY = 0, this.tapRadiusX = 0, this.tapRadiusY = 0, this.isHidden = !1, this.clickToBorderDistance = 0, this.teaserCoordinateX = 0, this.teaserCoordinateY = 0, this.teaserWidth = 0, this.teaserHeight = 0, this.imageWidth = 0, this.imageHeight = 0, this.teaserViewportPercent = 0, this.widgetOnLoadDisposition = !1, this.clickCoordinateX = 0, this.clickCoordinateY = 0, this.compileTime = 1739371452, this.forbiddenPatternMatches = 0, this.widgetType = "", this.isLinear = !1, this.isPixalateTriggered = !1, this.isWidgetOverlapped = !1, this.isRefreshedTeaserClicked = !1, this.muidn = "", this.referrer = "", this.primaryReferrer = "", this.snapShot = "", this.deepSession = -1
//       }
//     }, li = class {
//       constructor(t, e, i = []) {
//         this.app = t, this.parameters = e, this.forbiddenPatterns = i, this.linearMovementDetector = new ci
//       }
//       onWidgetLoadEvent() {
//         let t = this.app.root.getBoundingClientRect();
//         this.initialWidgetCoordinates = {
//           x: t.left + window.scrollX,
//           y: t.top + window.scrollY
//         }, this.setForbiddenPatternMatches()
//       }
//       onContextFocusEvent() {
//         this.parameters.isTabActive = !0, this.setForbiddenPatternMatches()
//       }
//       onContextBlurEvent() {
//         this.parameters.isTabActive = !1, this.setForbiddenPatternMatches()
//       }
//       async onWidgetClickEvent(t, e, i) {
//         this.setWidgetCoordinates(), this.setForbiddenPatternMatches(), this.setClickCoordinates(i), this.setWidgetType(), this.setPrimaryReferrer(), this.setDeepSession(), this.setSnapShot(), this.parameters.action = t, this.parameters.clickTime = this.app.getCurrentTimestamp(), this.parameters.widgetOnLoadDisposition = this.getWidgetDisposition(), this.parameters.referrer = this.app.refererUrl, this.parameters.muidn = this.app.servicerData.muidn;
//         let s = this.app.findClosest(e, "div[data-i]");
//         if (s) {
//           let r = s.getBoundingClientRect();
//           this.parameters.isHidden = !s.offsetParent, this.parameters.teaserCoordinateX = r.left, this.parameters.teaserCoordinateY = r.top, this.parameters.teaserWidth = r.width, this.parameters.teaserHeight = r.height, this.parameters.teaserViewportPercent = Mt.getInnerElementPercent(s, Mt.getViewportSize()), this.parameters.isLinear = this.linearMovementDetector.isLinear(), "clientX" in i && "clientY" in i && (this.parameters.clickToBorderDistance = Mt.getClosestDistanceInSquare({
//             x: i.clientX,
//             y: i.clientY
//           }, r));
//           let p = Mt.findImageElementOfTeaser(s);
//           p && this.setImageProperties(p)
//         }
//       }
//       setForbiddenPatternMatches() {
//         if (typeof this.app.context.document == "object" && typeof this.app.context.document.documentElement == "object") {
//           let t = this.countPatternMatchesInElement(this.app.context.document.documentElement, this.forbiddenPatterns);
//           this.parameters.forbiddenPatternMatches < t && (this.parameters.forbiddenPatternMatches = t)
//         }
//       }
//       onContextMouseMoveEvent(t) {
//         if (this.app.getCurrentTimestamp() - this.loadTimestamp > 10) {
//           this.linearMovementDetector.reset();
//           return
//         }
//         this.linearMovementDetector.onMouseMoveHandler(t)
//       }
//       onContextScrollEvent() {
//         this.parameters.lastScrollTime = this.app.getCurrentTimestamp(), this.linearMovementDetector.onScrollHandler(), this.scrollEndHandler && clearTimeout(this.scrollEndHandler), this.scrollEndHandler = setTimeout(() => {
//           this.linearMovementDetector.onScrollEndHandler()
//         }, 150)
//       }
//       onContextResizeEvent() {
//         this.parameters.lastPageResizeTime = this.app.getCurrentTimestamp()
//       }
//       onRootTouchEndEvent(t) {
//         let e = t.changedTouches.item(0);
//         e && (this.parameters.tapRadiusX = e.radiusX, this.parameters.tapRadiusY = e.radiusY)
//       }
//       setWidgetCoordinates() {
//         let t = this.app.root.getBoundingClientRect();
//         this.parameters.widgetCoordinateX = t.left, this.parameters.widgetCoordinateY = t.top
//       }
//       setImageProperties(t) {
//         let e = t.getBoundingClientRect();
//         this.parameters.imageWidth = e.width, this.parameters.imageHeight = e.height
//       }
//       getWidgetDisposition() {
//         return this.parameters.widgetCoordinateX + window.scrollX !== this.initialWidgetCoordinates.x || this.parameters.widgetCoordinateY + window.scrollY !== this.initialWidgetCoordinates.y
//       }
//       setClickCoordinates(t) {
//         "clientX" in t && "clientY" in t ? (this.parameters.clickCoordinateX = t.clientX, this.parameters.clickCoordinateY = t.clientY) : t.touches && t.touches[0] && (this.parameters.clickCoordinateX = t.touches[0].clientX, this.parameters.clickCoordinateY = t.touches[0].clientY)
//       }
//       setWidgetType() {
//         switch (!0) {
//           case this.app.getWidgetValue("hasGoodsPart", this.app.widgetParams.WIDGET.hasGoodsPart):
//             this.parameters.widgetType = "goods";
//             break;
//           case this.app.getWidgetValue("hasNewsPart", this.app.widgetParams.WIDGET.hasNewsPart):
//             this.parameters.widgetType = "news";
//             break;
//           case this.app.getWidgetValue("hasVideoPart", this.app.widgetParams.WIDGET.hasVideoPart):
//             this.parameters.widgetType = "video";
//             break;
//           default:
//             this.parameters.widgetType = "exchange"
//         }
//       }
//       countPatternMatchesInElement(t, e) {
//         let i = t.outerHTML;
//         return e.reduce((s, r) => {
//           try {
//             let p = new RegExp(r, "gi"),
//               u = i.match(p);
//             if (u) return s + u.length
//           } catch (p) {
//             this.app.log(`Error processing pattern "${r}": ${p.message}`)
//           }
//           return s
//         }, 0)
//       }
//       setPrimaryReferrer() {
//         this.app.context.localStorage.getItem("svspr") != null && (this.parameters.primaryReferrer = this.app.context.localStorage.getItem("svspr"))
//       }
//       setDeepSession() {
//         this.app.context.localStorage.getItem("svsds") != null && (this.parameters.deepSession = Number(this.app.context.localStorage.getItem("svsds")))
//       }
//       setSnapShot() {
//         this.app.context.localStorage.getItem("mgSnapShot") != null && (this.parameters.snapShot = this.app.context.localStorage.getItem("mgSnapShot"))
//       }
//     }, di = class {
//       constructor(t, e, i, s) {
//         this.protocol = t, this.parameters = e, this.client = i, this.app = s
//       }
//       send(t, e) {
//         let i = btoa(JSON.stringify({
//           rid: e,
//           showHash: t,
//           parameters: this.getEncodedParameters(t, e)
//         })),
//           s = new Blob([i]);
//         this.client.beaconBlob("antifraud-event-hash", this.protocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/aws", s, {})
//       }
//       getEncodedParameters(t, e) {
//         let i = {
//           stringify: function (s) {
//             let r = {
//               ct: btoa(s.ciphertext.toString())
//             };
//             return s.iv && (r.iv = s.iv.toString()), s.salt && (r.s = btoa(s.salt.toString()) + Math.random().toString(36).slice(-2)), JSON.stringify(r).replace(/\s/g, "")
//           }
//         };
//         return btoa(Gt.AES.encrypt(JSON.stringify(this.parameters), t + e, {
//           format: i
//         }).toString())
//       }
//     }, ui = class m extends A {
//       constructor(t) {
//         super(t), this.name = "AntifraudStatisticsBlock", this.parameters = new hi, this.statistics = new di(this.app.webProtocol, this.parameters, this.app.request, this.app), this.eventHandler = new li(this.app, this.parameters, Object.keys(this.app.widgetParams.GENERAL.forbiddenPatterns).length ? this.app.widgetParams.GENERAL.forbiddenPatterns : []), this.addHook("afterLoadNewsHooks", this.initAntifraudStatistics.bind(this)), this.app.onAntifraudStatisticsClickHandler = this.clickHandler.bind(this), this.app.addClickHandler(this.app.clickHandlerList.onAntifraudStatisticsClick.handler, this.app.clickHandlerList.onAntifraudStatisticsClick.priority)
//       }
//       setPixalateTriggered() {
//         this.parameters.isPixalateTriggered = !0
//       }
//       setIsWidgetOverlapped(t) {
//         this.parameters.isWidgetOverlapped = t
//       }
//       setIsRefreshedTeaserClicked(t) {
//         this.parameters.isRefreshedTeaserClicked = t
//       }
//       initAntifraudStatistics() {
//         this.eventHandler.onWidgetLoadEvent(), this.app.addEvent(this.app.context, "focus", () => this.eventHandler.onContextFocusEvent()), this.app.addEvent(this.app.context, "blur", () => this.eventHandler.onContextBlurEvent()), this.app.addEvent(this.app.context, "scroll", () => this.eventHandler.onContextScrollEvent()), this.app.addEvent(this.app.context, "resize", () => this.eventHandler.onContextResizeEvent()), this.app.addEvent(this.app.context, "mousemove", e => this.eventHandler.onContextMouseMoveEvent(e)), this.app.addEvent(this.app.root, "touchend", e => this.eventHandler.onRootTouchEndEvent(e));
//         let t = this.app.root.querySelector("a[data-hash]")?.getAttribute("data-hash");
//         t && (this.addElementAction(".mgclose-btn", Lt.Close, t), this.addElementAction(".mg-close-button", Lt.Close, t), this.addElementAction(".mg-close-action", Lt.Close, t), this.addElementAction(".mgbtn_media-like", Lt.Like, t), this.addElementAction(".mgdsa-icon", Lt.DsaIconClick, t), this.app.widgetParams.WIDGET.type === "mobile-widget" && this.app.root && this.app.addEvent(this.app.root.parentElement, "click", e => {
//           Mt.isElementMatches(e.target, "#adwidget-close-action") && this.actionHandler(Lt.Close, e, t)
//         }))
//       }
//       clickHandler(t, e) {
//         return this.app.findClosest(t, ".type-i") != null ? this.actionHandler(Lt.IntExchange, e, t.getAttribute("data-hash")) : this.actionHandler(Lt.Click, e, t.getAttribute("data-hash")), !0
//       }
//       addElementAction(t, e, i) {
//         let s = this.app.root.querySelector(t);
//         s && this.app.addEvent(s, "click", r => {
//           this.actionHandler(e, r, i)
//         })
//       }
//       actionHandler(t, e, i) {
//         this.eventHandler.onWidgetClickEvent(t, this.app.root, e).catch(s => {
//           this.app.log(`Click Handler name: ${m.name} action: ${t}, error: `, "error", s)
//         }).finally(() => {
//           typeof e.button < "u" && e.button === 0 && this.statistics.send(i, this.app.servicerData.rid)
//         })
//       }
//     }
//   });
//   var fa = Ie((kp, ua) => {
//     T();
//     B();

//     function M(m, t) {
//       var e = re();
//       return M = function (i, s) {
//         i = i - 173;
//         var r = e[i];
//         return r
//       }, M(m, t)
//     } (function (m, t) {
//       for (var e = M, i = m(); ;) try {
//         var s = parseInt(e(463)) / 1 + -parseInt(e(756)) / 2 * (-parseInt(e(980)) / 3) + parseInt(e(894)) / 4 * (parseInt(e(651)) / 5) + -parseInt(e(486)) / 6 * (parseInt(e(221)) / 7) + -parseInt(e(438)) / 8 + parseInt(e(972)) / 9 * (-parseInt(e(490)) / 10) + parseInt(e(206)) / 11;
//         if (s === t) break;
//         i.push(i.shift())
//       } catch {
//         i.push(i.shift())
//       }
//     })(re, 846878);
//     (function () {
//       var m = {
//         494: function (s, r) {
//           var p;
//           p = function (u) {
//             var d = M;
//             u.version = d(911), u[d(937)] = function (f, b) {
//               var k = d,
//                 S = 1,
//                 y = 0,
//                 D = f.length,
//                 v = 0;
//               k(461) == typeof b && (S = 65535 & b, y = b >>> 16);
//               for (var I = 0; I < D;) {
//                 for (v = Math[k(410)](D - I, 2654) + I; I < v; I++) y += S += 255 & f[k(770)](I);
//                 S = 15 * (S >>> 16) + (65535 & S), y = 15 * (y >>> 16) + (65535 & y)
//               }
//               return y % 65521 << 16 | S % 65521
//             }, u[d(427)] = function (f, b) {
//               var k = d,
//                 S = 1,
//                 y = 0,
//                 D = f[k(794)],
//                 v = 0;
//               typeof b == "number" && (S = 65535 & b, y = b >>> 16 & 65535);
//               for (var I = 0; I < D;) {
//                 for (v = Math.min(D - I, 2654) + I; I < v; I++) y += S += 255 & f[I];
//                 S = 15 * (S >>> 16) + (65535 & S), y = 15 * (y >>> 16) + (65535 & y)
//               }
//               return y % 65521 << 16 | S % 65521
//             }, u[d(667)] = function (f, b) {
//               var k = d,
//                 S = 1,
//                 y = 0,
//                 D = f[k(794)],
//                 v = 0,
//                 I = 0,
//                 L = 0;
//               k(461) == typeof b && (S = 65535 & b, y = b >>> 16);
//               for (var j = 0; j < D;) {
//                 for (v = Math.min(D - j, 2918); v > 0;)(I = f.charCodeAt(j++)) < 128 ? S += I : I < 2048 ? (y += S += 192 | I >> 6 & 31, --v, S += 128 | 63 & I) : I >= 55296 && I < 57344 ? (y += S += 240 | (I = 64 + (1023 & I)) >> 8 & 7, --v, y += S += 128 | I >> 2 & 63, --v, y += S += 128 | (L = 1023 & f[k(770)](j++)) >> 6 & 15 | (3 & I) << 4, --v, S += 128 | 63 & L) : (y += S += 224 | I >> 12 & 15, --v, y += S += 128 | I >> 6 & 63, --v, S += 128 | 63 & I), y += S, --v;
//                 S = 15 * (S >>> 16) + (65535 & S), y = 15 * (y >>> 16) + (65535 & y)
//               }
//               return y % 65521 << 16 | S % 65521
//             }
//           }, p(typeof DO_NOT_EXPORT_ADLER > "u" ? r : {})
//         }
//       },
//         t = {};

//       function e(s) {
//         var r = M,
//           p = t[s];
//         if (p !== void 0) return p[r(778)];
//         var u = t[s] = {
//           exports: {}
//         };
//         return m[s](u, u.exports, e), u[r(778)]
//       }
//       e.n = function (s) {
//         var r = M,
//           p = s && s[r(869)] ? function () {
//             var u = r;
//             return s[u(950)]
//           } : function () {
//             return s
//           };
//         return e.d(p, {
//           a: p
//         }), p
//       }, e.d = function (s, r) {
//         var p = M;
//         for (var u in r) e.o(r, u) && !e.o(s, u) && Object[p(957)](s, u, {
//           enumerable: !0,
//           get: r[u]
//         })
//       }, e.o = function (s, r) {
//         var p = M;
//         return Object[p(880)][p(701)].call(s, r)
//       }, e.r = function (s) {
//         var r = M;
//         r(380) != typeof Symbol && Symbol[r(900)] && Object[r(957)](s, Symbol[r(900)], {
//           value: "Module"
//         }), Object.defineProperty(s, "__esModule", {
//           value: !0
//         })
//       };
//       var i = {};
//       (function () {
//         "use strict";
//         var s = M;
//         e.r(i), e.d(i, {
//           AntiFraud: function () {
//             return L
//           },
//           Anura: function () {
//             return Oi
//           },
//           AnuraStatus: function () {
//             return be
//           },
//           Application: function () {
//             return er
//           },
//           BaseConfiguration: function () {
//             return j
//           },
//           EventMask: function () {
//             return v
//           },
//           Pixalate: function () {
//             return Ri
//           },
//           Snapshot: function () {
//             return Xa
//           }
//         });
//         var r, p = e(494),
//           u = e.n(p),
//           d = function () {
//             var n = M;

//             function c() { }
//             return c[n(963)] = function (a) {
//               var o = n;
//               if (a === null || isNaN(a) || a === "") return "";
//               var l = "";
//               a < 0 && (l = ",", a *= -1);
//               for (var h = parseInt(String(a), 10)[o(886)](8), w = Math[o(675)](h.length / 2), E = 0; E < w; E++) {
//                 var P = h.substr(2 * E, 2);
//                 l += c[o(502)](P)
//               }
//               return l
//             }, c[n(252)] = function (a) {
//               var o = n;
//               a = a[o(886)](), a = unescape(encodeURIComponent(a));
//               for (var l, h, w, E, P, g, x, C = o(932), O = "", H = 0; H < a[o(794)];) E = (l = a[o(770)](H++)) >> 2, P = (3 & l) << 4 | (h = a[o(770)](H++)) >> 4, w = a[o(770)](H++), g = isNaN(h) ? 64 : (15 & h) << 2 | w >> 6, x = isNaN(w) ? 64 : 63 & w, O += C[o(253)](E) + C[o(253)](P) + C[o(253)](g) + C[o(253)](x);
//               return O
//             }, c[n(879)] = function (a) {
//               var o = n;
//               return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_"[o(274)](a, 1)
//             }, c.oct2chr = function (a) {
//               return {
//                 "00": "A",
//                 "01": "B",
//                 "02": "C",
//                 "03": "D",
//                 "04": "E",
//                 "05": "F",
//                 "06": "G",
//                 "07": "H",
//                 10: "I",
//                 11: "J",
//                 12: "K",
//                 13: "L",
//                 14: "M",
//                 15: "N",
//                 16: "O",
//                 17: "P",
//                 20: "Q",
//                 21: "R",
//                 22: "S",
//                 23: "T",
//                 24: "U",
//                 25: "V",
//                 26: "W",
//                 27: "X",
//                 30: "Y",
//                 31: "Z",
//                 32: "a",
//                 33: "b",
//                 34: "c",
//                 35: "d",
//                 36: "e",
//                 37: ".",
//                 40: "g",
//                 41: "h",
//                 42: "i",
//                 43: "j",
//                 44: "k",
//                 45: "l",
//                 46: "m",
//                 47: "n",
//                 50: "o",
//                 51: "p",
//                 52: "q",
//                 53: "r",
//                 54: "s",
//                 55: "t",
//                 56: "u",
//                 57: "v",
//                 60: "0",
//                 61: "1",
//                 62: "2",
//                 63: "3",
//                 64: "4",
//                 65: "5",
//                 66: "6",
//                 67: "7",
//                 70: "8",
//                 71: "9",
//                 72: "w",
//                 73: "x",
//                 74: "y",
//                 75: "z",
//                 76: "-",
//                 77: "_",
//                 0: "!",
//                 1: "*",
//                 2: ";",
//                 3: ":",
//                 4: "=",
//                 5: "+",
//                 6: "$",
//                 7: "~"
//               }[a]
//             }, c[n(476)] = function (a) {
//               var o = n;
//               return u()[o(667)](a) >>> 0
//             }, c
//           }(),
//           f = function () {
//             var n = M;

//             function c() { }
//             return c[n(173)] = function (a) {
//               var o = n,
//                 l = [];
//               for (var h in a) l[o(728)](h + "=" + a[h]);
//               return l.join("&")
//             }, c
//           }(),
//           b = function () {
//             function n() { }
//             return n.trimString = function (c, a, o) {
//               var l = M;
//               o === void 0 && (o = !1);
//               var h = c[l(794)];
//               if (h <= a) return c;
//               var w = o ? h - a : 0,
//                 E = o ? h : a;
//               return c[l(508)](w, E)
//             }, n
//           }(),
//           k = function () {
//             var n = M;

//             function c() { }
//             return c[n(741)] = function (a, o, l) {
//               var h = n;
//               a[h(670)] ? a[h(670)](o, l, !1) : a[h(480)]("on" + o, l)
//             }, c.removeEvent = function (a, o, l) {
//               var h = n;
//               a[h(358)] ? a[h(358)](o, l, !1) : a[h(457)]("on" + o, l)
//             }, c
//           }(),
//           S = function () {
//             var n = M;

//             function c(a) {
//               var o = M;
//               this.config = a, this[o(526)] = null, this[o(784)] = a[o(784)]
//             }
//             return c.prototype.isSessionStorageEnabled = function () {
//               var a = M,
//                 o = null;
//               if ("sessionStorage" in this[a(784)]) try {
//                 this[a(784)][a(700)].setItem("svs", 1), o = this[a(784)].sessionStorage.getItem("svs")
//               } catch { }
//               return o ? 1 : 0
//             }, c.prototype[n(696)] = function () {
//               var a = n,
//                 o = 0;
//               return (this.context[a(906)] || this.context.opr !== void 0) && (o += 1), (this[a(784)].opera && this[a(784)][a(906)].buildNumber || this.context[a(769)] !== void 0) && (o += 2), (this[a(784)].document[a(311)] || this[a(784)][a(222)]) && (o += 4), this.context[a(631)] && !this[a(784)][a(595)][a(390)] && this[a(784)][a(828)] === void 0 || (o += 8), this[a(784)][a(309)] && (o += 16), this[a(784)][a(561)] !== void 0 && (o += 32), this[a(784)][a(849)] || (o += 64), o
//             }, c[n(880)][n(450)] = function () {
//               var a = n;
//               return this.context[a(595)][a(329)]() ? 1 : 0
//             }, c[n(880)].isFlashEnabled = function () {
//               var a = n,
//                 o = 0,
//                 l = this[a(784)][a(595)][a(665)];
//               if (l !== void 0 && a(533) === l?.[a(270)]) o = 1;
//               else if (this[a(784)][a(893)] !== void 0) try {
//                 new ActiveXObject(a(781)) && (o = 1)
//               } catch { }
//               return o
//             }, c[n(880)].isCookieEnabled = function () {
//               var a = n;
//               return this[a(784)][a(595)][a(338)] ? 1 : 0
//             }, c.prototype.isLocalStorageEnabled = function () {
//               var a = n,
//                 o = null;
//               if (a(583) in this[a(784)]) try {
//                 this[a(784)][a(583)][a(565)](a(491), 1), o = this.context[a(583)][a(332)](a(491))
//               } catch { }
//               return o ? 1 : 0
//             }, c[n(880)][n(524)] = function () {
//               var a = n,
//                 o = 0;
//               return this[a(450)]() && (o += 1), this.isFlashEnabled() && (o += 2), this.isCookieEnabled() && (o += 4), this.isLocalStorageEnabled() && (o += 8), this.isSessionStorageEnabled() && (o += 16), this.isTouchStart() && (o += 32), o
//             }, c[n(880)][n(961)] = function () {
//               var a = n;
//               return this[a(784)][a(474)] !== void 0
//             }, c[n(880)][n(807)] = function (a) {
//               var o = n,
//                 l = -32768,
//                 h = {
//                   top: l,
//                   bottom: l,
//                   left: l,
//                   right: l,
//                   height: l,
//                   width: l
//                 };
//               try {
//                 h = a[o(840)]()
//               } catch {
//                 return h
//               }
//               var w = {
//                 top: h[o(878)],
//                 bottom: h[o(324)],
//                 left: h[o(959)],
//                 right: h[o(655)],
//                 height: h[o(630)] ? h[o(630)] : h[o(324)] - h.top,
//                 width: h[o(723)] ? h[o(723)] : h[o(655)] - h[o(959)]
//               };
//               if (this[o(784)].self !== this[o(784)][o(878)]) {
//                 var E = this.getFrameElement();
//                 if (E) {
//                   var P = E[o(840)]();
//                   w[o(878)] += P[o(878)], w[o(324)] += P[o(878)], w.left += P[o(959)], w[o(655)] += P[o(959)]
//                 }
//               }
//               return w
//             }, c.prototype[n(471)] = function () {
//               var a = n;
//               if (this[a(526)] === void 0) try {
//                 var o = void 0,
//                   l = void 0;
//                 for (l = (o = this.context).frameElement; o[a(682)]; o = o.parent) l = o[a(682)];
//                 this.topIFrame = l
//               } catch {
//                 this[a(526)] = null
//               }
//               return this[a(526)]
//             }, c.prototype[n(835)] = function (a) {
//               var o = n,
//                 l = 0,
//                 h = 0;
//               return o(929) in a && o(375) in a ? (l = a[o(929)], h = a[o(375)]) : o(201) in a && a[o(201)] && a[o(201)][0] && (l = a.touches[0][o(929)], h = a[o(201)][0][o(375)]), {
//                 x: l,
//                 y: h
//               }
//             }, c[n(880)].getCoordinatesClickOfPage = function (a) {
//               var o = n,
//                 l = 0,
//                 h = 0;
//               return a || (a = this[o(784)][o(890)]), o(914) in a && "pageY" in a ? (l = a[o(914)], h = a[o(714)]) : "touches" in a && a.touches && a[o(201)][0] ? (l = a[o(201)][0][o(914)], h = a[o(201)][0].pageY) : o(929) in a && o(375) in a && (l = a.clientX + (this.context.document[o(855)].scrollLeft || this[o(784)][o(717)][o(934)][o(582)]) - this[o(784)][o(717)][o(855)][o(969)], h = a[o(375)] + (this[o(784)][o(717)][o(855)].scrollTop || this.context[o(717)].body[o(848)]) - this[o(784)][o(717)].documentElement[o(668)]), {
//                 x: l,
//                 y: h
//               }
//             }, c.prototype.getCoordsElementOfPage = function (a) {
//               var o = n,
//                 l = 0,
//                 h = 0;
//               do l += a[o(229)], h += a[o(641)], a = a.offsetParent; while (a);
//               return {
//                 x: l,
//                 y: h
//               }
//             }, c[n(880)][n(773)] = function (a) {
//               var o = n,
//                 l = -32768,
//                 h = l,
//                 w = l;
//               return o(929) in a && o(375) in a ? (h = a[o(929)], w = a[o(375)]) : "touches" in a && a[o(201)] && a.touches[0] && (h = a.touches[0].clientX, w = a[o(201)][0][o(375)]), {
//                 x: h,
//                 y: w
//               }
//             }, c.prototype[n(921)] = function (a) {
//               var o = n;
//               if (this[o(784)][o(949)]) {
//                 var l = !0,
//                   h = 0;
//                 k[o(741)](this[o(784)], o(327), function () {
//                   var w = o;
//                   l && (h++, l = !1, setTimeout(function () {
//                     l = !0
//                   }, 1e3)), a(h[w(886)]())
//                 })
//               } else a("-1")
//             }, c[n(880)][n(791)] = function (a) {
//               var o = n,
//                 l = -32768,
//                 h = l,
//                 w = l;
//               return a || (a = this[o(784)][o(890)]), o(914) in a && "pageY" in a ? (h = a[o(914)], w = a[o(714)]) : "touches" in a && a[o(201)] && a[o(201)][0] ? (h = a[o(201)][0][o(914)], w = a.touches[0][o(714)]) : o(929) in a && o(375) in a && (h = a[o(929)] + (this.context[o(717)][o(855)][o(582)] || this[o(784)].document[o(934)][o(582)]) - this[o(784)][o(717)].documentElement.clientLeft, w = a[o(375)] + (this.context[o(717)].documentElement[o(848)] || this[o(784)].document[o(934)].scrollTop) - this[o(784)][o(717)].documentElement[o(668)]), {
//                 x: h,
//                 y: w
//               }
//             }, c.prototype[n(534)] = function (a) {
//               for (var o = n; a[o(825)] && a[o(825)][o(383)] === 1;) a = a.firstChild;
//               for (; a[o(506)] && a !== this[o(784)][o(717)].body;) {
//                 if (parseFloat(this[o(784)][o(184)](a)[o(240)](o(310))) <= .2) return 1;
//                 a = a[o(506)]
//               }
//               return a !== null && a !== this[o(784)][o(717)][o(934)] && a.getRootNode() instanceof ShadowRoot ? (a = a.getRootNode().host, this[o(534)](a)) : 0
//             }, c.prototype[n(249)] = function () {
//               var a = n,
//                 o = 1;
//               return this[a(784)][a(595)][a(230)] !== void 0 && (o = this[a(784)][a(595)].onLine ? 1 : 0), o
//             }, c[n(880)][n(710)] = function (a) {
//               var o = n;
//               this[o(784)].navigator[o(812)] && this[o(784)].navigator[o(812)]()[o(301)](function (l) {
//                 var h = o;
//                 a(+l[h(743)], 100 * l[h(941)])
//               })
//             }, c[n(880)][n(403)] = function () {
//               var a = n,
//                 o = this.context[a(717)].createElement(a(752));
//               return o.getContext && o.getContext("2d") ? 1 : 0
//             }, c.prototype[n(591)] = function () {
//               var a = n,
//                 o = 0;
//               return this[a(784)].screenX !== void 0 && (o = Math.abs(this.context[a(200)])), o
//             }, c[n(880)].getScreenY = function () {
//               var a = n,
//                 o = 0;
//               return this[a(784)][a(231)] !== void 0 && (o = Math[a(802)](this.context[a(231)])), o
//             }, c.prototype[n(552)] = function (a) {
//               for (var o = n, l = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/, h = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/, w = this[o(847)].root[o(556)](o(678)), E = this[o(847)].root[o(556)](o(399)), P = [], g = 0; g < w.length; g++) P.push(w[g]);
//               for (g = 0; g < E[o(794)]; g++) P[o(728)](E[g]);
//               for (g = 0; g < P[o(794)]; g++) {
//                 var x = l[o(510)](P[g].src);
//                 x || (x = h[o(510)](P[g][o(455)])), k.addEvent(P[g], o(456), a)
//               }
//             }, c[n(880)][n(768)] = function () {
//               var a = n,
//                 o = 0;
//               return this.context.navigator[a(247)] !== void 0 && (o = this[a(784)][a(595)][a(247)]), o
//             }, c.prototype.getPlugins = function () {
//               var a = n,
//                 o = "";
//               if (this.context[a(595)][a(665)] !== void 0) {
//                 for (var l = this.context.navigator[a(665)], h = [], w = 0; w < l[a(794)]; w++) h[a(728)](l[w][a(744)]);
//                 o = b[a(628)](h[a(207)]("|").replace(/\s/g, ""), 300)
//               }
//               return o
//             }, c[n(880)].getNetwrokInformation = function () {
//               var a = n,
//                 o = {
//                   networkInformationType: a(833),
//                   networkInformationEffectiveType: a(833),
//                   networkInformationSaveData: 0
//                 };
//               try {
//                 var l = this.context[a(595)][a(319)] || this[a(784)][a(595)].mozConnection || this[a(784)][a(595)][a(645)];
//                 l.type !== void 0 && (o.networkInformationType = l[a(814)]), l[a(293)] !== void 0 && (o[a(648)] = l.effectiveType), l[a(739)] !== void 0 && (o[a(405)] = l[a(739)] ? 1 : 0)
//               } catch { }
//               return o
//             }, c[n(880)][n(539)] = function () {
//               return new Promise(function (a) {
//                 for (var o = M, l = performance[o(571)](), h = new Array(5e3), w = 0; w < 5e3; w++) h[w] = Math.random();
//                 h[o(746)]();
//                 var E = performance[o(571)]();
//                 a(Math[o(758)](E - l))
//               })
//             }, c.prototype[n(218)] = function () {
//               var a = n;
//               return this[a(183)]() && (o = this[a(784)][a(583)].getItem(a(321))) !== null ? o : "";
//               var o
//             }, c.prototype[n(871)] = function (a, o) {
//               var l = n;
//               if (!this[l(183)]()) return o;
//               var h = this.context[l(583)].getItem(a);
//               return this[l(784)][l(583)].removeItem(a), h ?? o
//             }, c[n(880)][n(567)] = function (a, o) {
//               var l = n;
//               if (!this[l(183)]()) return o;
//               var h = this[l(784)][l(583)][l(332)](a);
//               return this.context[l(583)][l(860)](a), h ? parseInt(h) : o
//             }, c
//           }(),
//           y = function () {
//             var n = M;

//             function c() {
//               var a = M;
//               this[a(627)] = [], this[a(468)] = []
//             }
//             return c[n(880)][n(323)] = function (a, o) {
//               var l = n;
//               return this.referrers.push(a), this.sizes[l(728)](o), this
//             }, c[n(880)][n(446)] = function () {
//               var a = n,
//                 o = this[a(468)][a(763)](function (P, g) {
//                   return P + g
//                 }, 0);
//               if (this.referrers.reduce(function (P, g) {
//                 return P + g.length
//               }, 0) <= o) return this[a(627)];
//               for (var l = this.initializeBufferAndDomains(), h = l[0], w = l[1], E = l[2]; this[a(705)](h););
//               return this[a(973)](h, w, E), h
//             }, c[n(880)].initializeBufferAndDomains = function () {
//               for (var a = n, o = [], l = [], h = [], w = 0; w < this[a(627)].length; w++) {
//                 var E = this[a(627)][w][a(794)] >= 8 ? this.referrers[w].indexOf("/", 8) : -1;
//                 E === -1 ? (o[w] = this.referrers[w], this[a(627)][w] = "") : (o[w] = this.referrers[w][a(274)](0, E), this[a(627)][w] = this[a(627)][w].substr(E)), this[a(468)][w] -= o[w][a(794)]
//               }
//               return l[a(728)].apply(l, o), l[0] === l[1] ? h[0] = "++" : l[0] === l[2] && (h[0] = "::"), l[1] === l[2] && (h[1] = ";;"), [o, l, h]
//             }, c[n(880)][n(705)] = function (a) {
//               for (var o = n, l = Array(this.referrers.length).fill(!1), h = !1, w = 0; w < this[o(627)][o(794)]; w++)
//                 if (l[w] || this.referrers[w].length) l[w] || (h = !0, a[w] += this.referrers[w][0], this.referrers[w] = this.referrers[w][o(794)] !== 1 ? this[o(627)][w][o(274)](1) : "", this[o(468)][w]--, this[o(468)][w] || (l[w] = !0));
//                 else {
//                   l[w] = !0;
//                   var E = this[o(468)][w];
//                   this[o(468)][w] = 0;
//                   var P = l[o(737)](!1);
//                   P !== -1 && (this[o(468)][P] += E)
//                 } return h
//             }, c[n(880)][n(973)] = function (a, o, l) {
//               var h = n;
//               for (var w in l) h(642) != typeof a[w] && (a[w] = ""), a[w] = a[w].split(o[w])[h(207)](l[w])
//             }, c
//           }();

//         function D(n) {
//           var c = M;
//           return D = c(625) == typeof Symbol && c(493) == typeof Symbol[c(185)] ? function (a) {
//             return typeof a
//           } : function (a) {
//             var o = c;
//             return a && o(625) == typeof Symbol && a.constructor === Symbol && a !== Symbol[o(880)] ? o(493) : typeof a
//           }, D(n)
//         } (function (n) {
//           var c = M;
//           n[c(832)] = c(832), n[c(765)] = c(765), n[c(820)] = c(820), n.EQUALS = "EQUALS", n.NOT_EQUALS = c(284), n[c(930)] = c(930), n[c(537)] = "LESS_THAN", n.INCLUDES = c(656), n.EXCLUDES = c(220), n[c(519)] = "IS_NULL", n.IS_NOT_NULL = c(435), n[c(347)] = "IS_TRUE", n[c(706)] = c(706), n[c(589)] = c(589), n[c(718)] = c(718), n.IS_STRING = c(507), n[c(593)] = "IS_NUMBER"
//         })(r || (r = {}));
//         var v, I = function () {
//           function n(c) {
//             var a = M;
//             this[a(847)] = c
//           }
//           return n.prototype.isValid = function () {
//             var c = M,
//               a = this,
//               o = {
//                 isValid: !0,
//                 isDebugPropertyTriggered: !1
//               };
//             return o[c(821)] = this.config[c(637)][c(448)](function (l) {
//               var h = c,
//                 w, E = l[h(744)],
//                 P = l[h(465)],
//                 g = l[h(805)],
//                 x = l[h(674)];
//               if (x !== void 0 && x) return o.isDebugPropertyTriggered = !0, !0;
//               var C = (E = E[h(359)](/^window\./, ""))[h(441)](".")[h(763)](function (O, H) {
//                 return O ? O[H] : void 0
//               }, a[h(847)][h(784)]);
//               switch (P) {
//                 case r[h(832)]:
//                   return C !== void 0;
//                 case r[h(765)]:
//                   return C === void 0;
//                 case r.REGEX_MATCH:
//                   return new RegExp(g).test(String(C));
//                 case r[h(883)]:
//                   return C === g;
//                 case r[h(284)]:
//                   return C !== g;
//                 case r[h(930)]:
//                   return C > g;
//                 case r[h(537)]:
//                   return C < g;
//                 case r.INCLUDES:
//                   return C[h(523)](g);
//                 case r.EXCLUDES:
//                   return !C[h(523)](g);
//                 case r[h(519)]:
//                   return C === null;
//                 case r.IS_NOT_NULL:
//                   return C !== null;
//                 case r[h(347)]:
//                   return C === !0;
//                 case r[h(706)]:
//                   return C === !1;
//                 case r.IS_ARRAY:
//                   return Array[h(979)](C);
//                 case r[h(718)]:
//                   return h(533) === D(C) && C !== null;
//                 case r.IS_STRING:
//                   return h(642) == typeof C;
//                 case r[h(593)]:
//                   return h(461) == typeof C;
//                 default:
//                   return (w = a[h(847)].logger) === null || w === void 0 || w[h(314)](h(538)[h(180)](P)), !1
//               }
//             }), o
//           }, n
//         }();
//         (function (n) {
//           var c = M;
//           n[n.MouseUp = 0] = c(562), n[n[c(304)] = 1] = "MouseOver", n[n.MouseMove = 2] = c(391), n[n.TouchStart = 4] = "TouchStart", n[n[c(248)] = 8] = c(248), n[n[c(569)] = 16] = c(569), n[n[c(806)] = 32] = "Focus"
//         })(v || (v = {}));
//         var L = function () {
//           var n = M;

//           function c(a) {
//             var o = M;
//             this[o(847)] = a, this.miliSecondsFromScroll = null, this[o(447)] = "", this.afReferrer = "", this[o(601)] = "", this[o(297)] = 0, this[o(846)] = 0, this.afImgLoaded = 0, this.afCoords = "", this[o(909)] = "", this.afDeviceOrientation = "", this[o(430)] = 0, this[o(673)] = "", this[o(300)] = 0, this.afCharging = -1, this[o(882)] = -1, this[o(767)] = o(276), this.afTimePerformance = -1, this[o(564)] = v[o(562)], this.isBrowserValid = !0, this[o(294)] = !1, this.isWidgetResized = !1, this[o(368)] = new S(a), this.browserValidator = new I(a)
//           }
//           return c[n(880)].initialize = function () {
//             var a = n,
//               o = this;
//             this[a(847)][a(367)][a(181)](), this[a(621)](), this[a(824)](), this[a(590)](), this[a(846)] = new Date()[a(922)](), this[a(430)] = this[a(368)][a(696)](), this[a(300)] = this[a(368)].getBrowserFlag(), this[a(673)] = this[a(368)].getPlugins();
//             try {
//               var l = this.browserValidator[a(821)]();
//               this[a(560)] = l[a(821)], this[a(294)] = l[a(313)]
//             } catch {
//               this[a(560)] = !1
//             }
//             this[a(847)].useTimePerformance && this[a(368)][a(539)]()[a(301)](function (h) {
//               var w = a;
//               o[w(348)] = h
//             }), this.setEvents()
//           }, c[n(880)].generateHash = function (a, o, l) {
//             var h = n;
//             l === void 0 && (l = "");
//             var w = new Date,
//               E = this[h(368)][h(773)](a),
//               P = this[h(368)].isTransparent(o);
//             return this[h(302)](o), this[h(977)](a, o), c.encodeParameters({
//               1: d[h(963)](this[h(560)] ? 1 : 0),
//               2: d[h(963)](this[h(294)] ? 1 : 0),
//               3: d[h(963)](this[h(846)]),
//               4: d.compressNumber(w.getTime()),
//               5: d.x64String(this[h(368)].getSnapShot()),
//               7: d[h(252)](E.x + "|" + E.y),
//               8: d.compressNumber(c[h(282)](o, "wct") ? 1 : 0),
//               9: "",
//               10: d.compressNumber(this[h(384)]),
//               11: "",
//               12: d[h(963)](this[h(775)] ? 1 : 0),
//               13: "",
//               14: d[h(963)](this[h(368)][h(567)]("isTriggeredBeforeunloadEvent", -1)),
//               15: d[h(963)](this.domExtractor[h(567)](h(842), -1)),
//               16: "",
//               17: d.compressNumber(this[h(430)]),
//               18: d[h(963)](this[h(564)]),
//               19: this[h(601)],
//               20: this.afReferrer,
//               21: this[h(447)],
//               22: d[h(963)](this[h(297)]),
//               23: d.x64String(this[h(909)]),
//               24: d[h(252)](this[h(680)]),
//               25: d[h(963)](this.afTimePerformance),
//               27: d[h(963)](this[h(847)].iframePlacementType),
//               28: d[h(879)](this[h(368)][h(524)]()),
//               29: d.x64String(this[h(360)]),
//               30: d[h(963)](this[h(847)].context[h(749)].width),
//               31: d.compressNumber(this.config[h(784)][h(749)][h(630)]),
//               33: "",
//               34: d[h(963)](P),
//               35: d[h(252)](this.config[h(784)][h(595)][h(897)]),
//               36: d.x64String(this[h(673)]),
//               37: d[h(963)](this[h(368)].getNumberValueFromLocalStorage(h(179), 0)),
//               38: d[h(252)](this[h(847)][h(784)][h(595)][h(896)]),
//               39: d[h(252)](-w[h(257)]()),
//               40: d.x64String(this[h(419)] + "|" + this[h(882)]),
//               41: d[h(252)](this[h(847)].context[h(749)].availWidth + "|" + this[h(847)][h(784)][h(749)][h(887)]),
//               42: d[h(252)](this[h(767)]),
//               43: d[h(963)](this[h(368)][h(591)]()),
//               44: d.compressNumber(this[h(368)].getScreenY()),
//               45: d[h(963)](this.afBrowserHookMask),
//               46: d[h(963)](d[h(476)](l)),
//               47: "",
//               48: d[h(963)](this[h(368)][h(249)]())
//             })
//           }, c[n(880)][n(532)] = function (a) {
//             var o = n;
//             this[o(564)] = a | this[o(564)]
//           }, c.prototype[n(193)] = function () {
//             var a = n,
//               o = this;
//             this[a(368)][a(552)](function () {
//               var l = a;
//               o[l(352)] || (o[l(352)] = new Date()[l(922)]())
//             })
//           }, c[n(880)][n(940)] = function (a) {
//             var o = n;
//             a === void 0 && (a = !1), this[o(775)] = a
//           }, c.prototype.setEvents = function () {
//             var a = n,
//               o = this;
//             k[a(741)](this.config[a(784)].document, "scroll", function (l) {
//               var h = a;
//               l || (l = o[h(847)][h(784)][h(890)]), o.config[h(784)][h(228)](o[h(877)]), o[h(877)] = o[h(847)][h(784)][h(605)](function () {
//                 var w = h;
//                 o[w(384)] === null && (o.miliSecondsFromScroll = 0), o[w(384)]++
//               }, 100)
//             }), this[a(368)][a(921)](function (l) {
//               var h = a;
//               o[h(680)] = l
//             }), this[a(368)][a(710)](function (l, h) {
//               var w = a;
//               o[w(419)] = l, o.afLevel = h
//             })
//           }, c[n(880)][n(590)] = function () {
//             var a = n,
//               o = this[a(368)][a(174)]();
//             this[a(767)] = [o.networkInformationType, o[a(648)], o[a(405)]][a(207)]("|")
//           }, c[n(880)][n(977)] = function (a, o) {
//             var l = n,
//               h = this[l(368)][l(791)](a),
//               w = this[l(368)].getCoordsElementOfPage(o);
//             this[l(909)] = [h.x, h.y, w.x, w.y][l(473)](function (E) {
//               return parseInt(E)
//             }).join("|")
//           }, c.prototype[n(302)] = function (a) {
//             var o = n,
//               l = this[o(368)][o(807)](a);
//             this[o(360)] = [l[o(630)], l.width, l[o(959)], l[o(878)]][o(473)](function (h) {
//               return parseInt(h)
//             }).join("|")
//           }, c[n(880)][n(621)] = function () {
//             var a = n,
//               o = this[a(847)].context[a(583)][a(332)](a(671));
//             o === null ? (this.afPrimaryReferrer = b[a(628)](this[a(847)][a(784)].document[a(838)], 500), this[a(847)][a(784)][a(583)][a(565)](a(671), this.afPrimaryReferrer)) : this[a(447)] = o, this[a(847)].context[a(701)](a(406)) ? this[a(643)] = this[a(847)][a(784)][a(406)] : this[a(643)] = this[a(847)][a(784)].document.referrer, this[a(601)] = this[a(847)].context[a(717)].location[a(864)];
//             var l = new y,
//               h = this[a(847)][a(926)] ? [70, 50, 50] : [300, 300, 300],
//               w = l[a(323)](this.afPrimaryReferrer, h[0])[a(323)](this[a(643)], h[1])[a(323)](this[a(601)], h[2])[a(446)]();
//             this[a(447)] = d[a(252)](b[a(628)](w[0], 256)), this[a(643)] = d[a(252)](b[a(628)](w[1], 256)), this[a(601)] = d[a(252)](b[a(628)](w[2], 256))
//           }, c[n(880)].setDeepSession = function () {
//             var a = n,
//               o = this[a(847)][a(784)][a(583)][a(332)]("svsds");
//             if (o !== null) {
//               this.afDeepSession = Number(o);
//               var l = this[a(847)][a(469)] + a(417);
//               this[a(847)][a(784)][l] === void 0 && (this[a(297)]++, this[a(847)][a(784)][l] = !0)
//             } else this[a(297)] = 1;
//             this[a(847)][a(784)][a(583)].setItem("svsds", this[a(297)][a(886)]())
//           }, c[n(282)] = function (a, o) {
//             var l = n,
//               h = a[l(554)];
//             if (h === "") return null;
//             for (var w = h[l(359)]("?", "")[l(441)]("&"), E = 0; E < w[l(794)]; E++)
//               if (w[E][l(441)]("=")[0] === o) return w[E];
//             return null
//           }, c[n(811)] = function (a) {
//             var o = n,
//               l = "";
//             for (var h in a) l += parseInt(h) === 1 ? "c" : "f", a[o(701)](h) && (l += a[h]);
//             var w = d[o(963)](d[o(476)](l));
//             return encodeURIComponent(l + "(" + w)
//           }, c
//         }(),
//           j = function (n) {
//             var c = M;
//             this.id = n.id, this[c(469)] = n[c(469)], this.logger = n[c(942)], this.cookieStorage = n[c(367)], this[c(784)] = n[c(784)] || window, this.root = n.root || window.document, this[c(926)] = n[c(926)] || !1, this[c(608)] = n[c(608)] || 0, this.useTimePerformance = n.useTimePerformance || !1, this[c(637)] = n[c(637)] || []
//           },
//           Y = function () {
//             var n = M;
//             return Y = Object.assign || function (c) {
//               for (var a = M, o, l = 1, h = arguments[a(794)]; l < h; l++)
//                 for (var w in o = arguments[l]) Object[a(880)][a(701)][a(713)](o, w) && (c[w] = o[w]);
//               return c
//             }, Y[n(924)](this, arguments)
//           };

//         function tt(n, c, a, o) {
//           return new (a || (a = Promise))(function (l, h) {
//             var w = M;

//             function E(x) {
//               try {
//                 g(o.next(x))
//               } catch (C) {
//                 h(C)
//               }
//             }

//             function P(x) {
//               var C = M;
//               try {
//                 g(o[C(939)](x))
//               } catch (O) {
//                 h(O)
//               }
//             }

//             function g(x) {
//               var C = M,
//                 O;
//               x[C(509)] ? l(x[C(823)]) : (O = x[C(823)], O instanceof a ? O : new a(function (H) {
//                 H(O)
//               })).then(E, P)
//             }
//             g((o = o[w(924)](n, c || []))[w(751)]())
//           })
//         }

//         function ht(n, c) {
//           var a = M,
//             o, l, h, w, E = {
//               label: 0,
//               sent: function () {
//                 if (1 & h[0]) throw h[1];
//                 return h[1]
//               },
//               trys: [],
//               ops: []
//             };
//           return w = {
//             next: P(0),
//             throw: P(1),
//             return: P(2)
//           }, typeof Symbol == "function" && (w[Symbol[a(185)]] = function () {
//             return this
//           }), w;

//           function P(g) {
//             return function (x) {
//               return function (C) {
//                 var O = M;
//                 if (o) throw new TypeError(O(541));
//                 for (; w && (w = 0, C[0] && (E = 0)), E;) try {
//                   if (o = 1, l && (h = 2 & C[0] ? l[O(920)] : C[0] ? l[O(939)] || ((h = l.return) && h[O(713)](l), 0) : l[O(751)]) && !(h = h[O(713)](l, C[1])).done) return h;
//                   switch (l = 0, h && (C = [2 & C[0], h[O(823)]]), C[0]) {
//                     case 0:
//                     case 1:
//                       h = C;
//                       break;
//                     case 4:
//                       return E[O(658)]++, {
//                         value: C[1],
//                         done: !1
//                       };
//                     case 5:
//                       E[O(658)]++, l = C[1], C = [0];
//                       continue;
//                     case 7:
//                       C = E[O(387)].pop(), E[O(629)][O(334)]();
//                       continue;
//                     default:
//                       if (!((h = (h = E[O(629)])[O(794)] > 0 && h[h.length - 1]) || C[0] !== 6 && C[0] !== 2)) {
//                         E = 0;
//                         continue
//                       }
//                       if (C[0] === 3 && (!h || C[1] > h[0] && C[1] < h[3])) {
//                         E[O(658)] = C[1];
//                         break
//                       }
//                       if (C[0] === 6 && E[O(658)] < h[1]) {
//                         E.label = h[1], h = C;
//                         break
//                       }
//                       if (h && E.label < h[2]) {
//                         E[O(658)] = h[2], E[O(387)][O(728)](C);
//                         break
//                       }
//                       h[2] && E[O(387)].pop(), E.trys.pop();
//                       continue
//                   }
//                   C = c[O(713)](n, E)
//                 } catch (H) {
//                   C = [6, H], l = 0
//                 } finally {
//                     o = h = 0
//                   }
//                 if (5 & C[0]) throw C[1];
//                 return {
//                   value: C[0] ? C[1] : void 0,
//                   done: !0
//                 }
//               }([g, x])
//             }
//           }
//         }

//         function Pt(n, c, a) {
//           var o = M;
//           if (a || arguments[o(794)] === 2)
//             for (var l, h = 0, w = c.length; h < w; h++) !l && h in c || (l || (l = Array[o(880)].slice[o(713)](c, 0, h)), l[h] = c[h]);
//           return n.concat(l || Array[o(880)][o(579)][o(713)](c))
//         }
//         Object[s(224)], Object[s(224)], s(625) == typeof SuppressedError && SuppressedError;

//         function et(n, c) {
//           return new Promise(function (a) {
//             return setTimeout(a, n, c)
//           })
//         }

//         function X(n) {
//           var c = s;
//           return !!n && c(625) == typeof n[c(301)]
//         }

//         function st(n, c) {
//           try {
//             var a = n();
//             X(a) ? a.then(function (o) {
//               return c(!0, o)
//             }, function (o) {
//               return c(!1, o)
//             }) : c(!0, a)
//           } catch (o) {
//             c(!1, o)
//           }
//         }

//         function ft(n, c, a) {
//           return a === void 0 && (a = 16), tt(this, void 0, void 0, function () {
//             var o, l, h, w;
//             return ht(this, function (E) {
//               var P = M;
//               switch (E[P(658)]) {
//                 case 0:
//                   o = Array(n[P(794)]), l = Date[P(571)](), h = 0, E[P(658)] = 1;
//                 case 1:
//                   return h < n.length ? (o[h] = c(n[h], h), (w = Date[P(571)]()) >= l + a ? (l = w, [4, et(0)]) : [3, 3]) : [3, 4];
//                 case 2:
//                   E[P(884)](), E[P(658)] = 3;
//                 case 3:
//                   return ++h, [3, 1];
//                 case 4:
//                   return [2, o]
//               }
//             })
//           })
//         }

//         function at(n) {
//           var c = s;
//           n[c(301)](void 0, function () { })
//         }

//         function Q(n, c) {
//           n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
//           var a = [0, 0, 0, 0];
//           return a[3] += n[3] + c[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += n[2] + c[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += n[1] + c[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += n[0] + c[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
//         }

//         function ut(n, c) {
//           n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]], c = [c[0] >>> 16, 65535 & c[0], c[1] >>> 16, 65535 & c[1]];
//           var a = [0, 0, 0, 0];
//           return a[3] += n[3] * c[3], a[2] += a[3] >>> 16, a[3] &= 65535, a[2] += n[2] * c[3], a[1] += a[2] >>> 16, a[2] &= 65535, a[2] += n[3] * c[2], a[1] += a[2] >>> 16, a[2] &= 65535, a[1] += n[1] * c[3], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += n[2] * c[2], a[0] += a[1] >>> 16, a[1] &= 65535, a[1] += n[3] * c[1], a[0] += a[1] >>> 16, a[1] &= 65535, a[0] += n[0] * c[3] + n[1] * c[2] + n[2] * c[1] + n[3] * c[0], a[0] &= 65535, [a[0] << 16 | a[1], a[2] << 16 | a[3]]
//         }

//         function _(n, c) {
//           return (c %= 64) == 32 ? [n[1], n[0]] : c < 32 ? [n[0] << c | n[1] >>> 32 - c, n[1] << c | n[0] >>> 32 - c] : (c -= 32, [n[1] << c | n[0] >>> 32 - c, n[0] << c | n[1] >>> 32 - c])
//         }

//         function G(n, c) {
//           return (c %= 64) == 0 ? n : c < 32 ? [n[0] << c | n[1] >>> 32 - c, n[1] << c] : [n[1] << c - 32, 0]
//         }

//         function W(n, c) {
//           return [n[0] ^ c[0], n[1] ^ c[1]]
//         }

//         function R(n) {
//           return n = W(n, [0, n[0] >>> 1]), n = W(n = ut(n, [4283543511, 3981806797]), [0, n[0] >>> 1]), W(n = ut(n, [3301882366, 444984403]), [0, n[0] >>> 1])
//         }

//         function Ot(n) {
//           return parseInt(n)
//         }

//         function vt(n) {
//           return parseFloat(n)
//         }

//         function Dt(n, c) {
//           var a = s;
//           return a(461) == typeof n && isNaN(n) ? c : n
//         }

//         function lt(n) {
//           return n.reduce(function (c, a) {
//             return c + (a ? 1 : 0)
//           }, 0)
//         }

//         function Et(n, c) {
//           var a = s;
//           if (c === void 0 && (c = 1), Math.abs(c) >= 1) return Math.round(n / c) * c;
//           var o = 1 / c;
//           return Math[a(758)](n * o) / o
//         }

//         function Ct(n) {
//           var c = s;
//           return n && c(533) == typeof n && c(182) in n ? n : {
//             message: n
//           }
//         }

//         function Tt(n, c, a) {
//           var o = s,
//             l = Object[o(217)](n).filter(function (w) {
//               return ! function (E, P) {
//                 for (var g = 0, x = E.length; g < x; ++g)
//                   if (E[g] === P) return !0;
//                 return !1
//               }(a, w)
//             }),
//             h = ft(l, function (w) {
//               return function (E, P) {
//                 var g = new Promise(function (x) {
//                   var C = M,
//                     O = Date[C(571)]();
//                   st(E[C(401)](null, P), function () {
//                     for (var H = C, J = [], U = 0; U < arguments[H(794)]; U++) J[U] = arguments[U];
//                     var ot = Date[H(571)]() - O;
//                     if (!J[0]) return x(function () {
//                       return {
//                         error: Ct(J[1]),
//                         duration: ot
//                       }
//                     });
//                     var it = J[1];
//                     if (function (ct) {
//                       var nt = H;
//                       return nt(625) != typeof ct
//                     }(it)) return x(function () {
//                       return {
//                         value: it,
//                         duration: ot
//                       }
//                     });
//                     x(function () {
//                       return new Promise(function (ct) {
//                         var nt = M,
//                           dt = Date[nt(571)]();
//                         st(it, function () {
//                           for (var gt = nt, mt = [], Bt = 0; Bt < arguments[gt(794)]; Bt++) mt[Bt] = arguments[Bt];
//                           var Rt = ot + Date.now() - dt;
//                           if (!mt[0]) return ct({
//                             error: Ct(mt[1]),
//                             duration: Rt
//                           });
//                           ct({
//                             value: mt[1],
//                             duration: Rt
//                           })
//                         })
//                       })
//                     })
//                   })
//                 });
//                 return at(g),
//                   function () {
//                     var x = M;
//                     return g[x(301)](function (C) {
//                       return C()
//                     })
//                   }
//               }(n[w], c)
//             });
//           return at(h),
//             function () {
//               return tt(this, void 0, void 0, function () {
//                 var w, E, P, g;
//                 return ht(this, function (x) {
//                   var C = M;
//                   switch (x[C(658)]) {
//                     case 0:
//                       return [4, h];
//                     case 1:
//                       return [4, ft(x[C(884)](), function (O) {
//                         var H = O();
//                         return at(H), H
//                       })];
//                     case 2:
//                       return w = x.sent(), [4, Promise[C(311)](w)];
//                     case 3:
//                       for (E = x[C(884)](), P = {}, g = 0; g < l[C(794)]; ++g) P[l[g]] = E[g];
//                       return [2, P]
//                   }
//                 })
//               })
//             }
//         }

//         function Si() {
//           var n = s,
//             c = window,
//             a = navigator;
//           return lt([n(912) in c, n(905) in c, n(614) in c, "msMaxTouchPoints" in a, "msPointerEnabled" in a]) >= 4
//         }

//         function ue() {
//           var n = s,
//             c = window,
//             a = navigator;
//           return lt(["webkitPersistentStorage" in a, n(373) in a, a.vendor[n(737)](n(947)) === 0, n(607) in c, n(661) in c, "webkitMediaStream" in c, n(273) in c]) >= 5
//         }

//         function $t() {
//           var n = s,
//             c = window,
//             a = navigator;
//           return lt([n(481) in c, n(839) in c, n(715) in c, a[n(260)].indexOf(n(626)) === 0, n(923) in a, "WebKitMediaKeys" in c]) >= 4
//         }

//         function fe() {
//           var n = s,
//             c = window;
//           return lt([n(617) in c, !(n(858) in c), !("ongestureend" in c), !("standalone" in navigator)]) >= 3
//         }

//         function Fa() {
//           var n = s,
//             c = document;
//           return (c[n(412)] || c.msExitFullscreen || c.mozCancelFullScreen || c[n(535)]).call(c)
//         }

//         function Pi() {
//           var n = s,
//             c = ue(),
//             a = function () {
//               var l = M,
//                 h, w, E = window;
//               return lt([l(819) in navigator, "MozAppearance" in ((w = (h = document[l(855)]) === null || h === void 0 ? void 0 : h.style) !== null && w !== void 0 ? w : {}), l(202) in E, "mozInnerScreenX" in E, l(271) in E, l(234) in E]) >= 4
//             }();
//           if (!c && !a) return !1;
//           var o = window;
//           return lt(["onorientationchange" in o, n(786) in o, c && !(n(196) in o), a && /android/i[n(199)](navigator.appVersion)]) >= 2
//         }

//         function Di(n) {
//           var c = s,
//             a = new Error(n);
//           return a[c(744)] = n, a
//         }

//         function Ei(n, c, a) {
//           var o, l, h;
//           return a === void 0 && (a = 50), tt(this, void 0, void 0, function () {
//             var w, E;
//             return ht(this, function (P) {
//               var g = M;
//               switch (P[g(658)]) {
//                 case 0:
//                   w = document, P[g(658)] = 1;
//                 case 1:
//                   return w[g(934)] ? [3, 3] : [4, et(a)];
//                 case 2:
//                   return P.sent(), [3, 1];
//                 case 3:
//                   E = w[g(745)](g(639)), P[g(658)] = 4;
//                 case 4:
//                   return P[g(629)][g(728)]([4, , 10, 11]), [4, new Promise(function (x, C) {
//                     var O = g,
//                       H = !1,
//                       J = function () {
//                         H = !0, x()
//                       };
//                     E.onload = J, E.onerror = function (it) {
//                       H = !0, C(it)
//                     };
//                     var U = E[O(362)];
//                     U[O(599)]("display", "block", "important"), U.position = O(785), U[O(878)] = "0", U[O(959)] = "0", U[O(581)] = O(563), c && O(295) in E ? E.srcdoc = c : E[O(455)] = O(213), w[O(934)][O(945)](E);
//                     var ot = function () {
//                       var it = O,
//                         ct, nt;
//                       H || (it(694) === ((nt = (ct = E.contentWindow) === null || ct === void 0 ? void 0 : ct[it(717)]) === null || nt === void 0 ? void 0 : nt[it(861)]) ? J() : setTimeout(ot, 10))
//                     };
//                     ot()
//                   })];
//                 case 5:
//                   P[g(884)](), P[g(658)] = 6;
//                 case 6:
//                   return !((l = (o = E[g(580)]) === null || o === void 0 ? void 0 : o[g(717)]) === null || l === void 0) && l.body ? [3, 8] : [4, et(a)];
//                 case 7:
//                   return P[g(884)](), [3, 6];
//                 case 8:
//                   return [4, n(E, E.contentWindow)];
//                 case 9:
//                   return [2, P[g(884)]()];
//                 case 10:
//                   return (h = E[g(506)]) === null || h === void 0 || h[g(836)](E), [7];
//                 case 11:
//                   return [2]
//               }
//             })
//           })
//         }

//         function ja(n) {
//           for (var c = s, a = function (x) {
//             for (var C = M, O, H, J = "Unexpected syntax '".concat(x, "'"), U = /^\s*([a-z-]*)(.*)$/i[C(510)](x), ot = U[1] || void 0, it = {}, ct = /([.:#][\w-]+|\[.+?\])/gi, nt = function (Bt, Rt) {
//               var Yt = C;
//               it[Bt] = it[Bt] || [], it[Bt][Yt(728)](Rt)
//             }; ;) {
//               var dt = ct.exec(U[2]);
//               if (!dt) break;
//               var gt = dt[0];
//               switch (gt[0]) {
//                 case ".":
//                   nt(C(761), gt[C(579)](1));
//                   break;
//                 case "#":
//                   nt("id", gt[C(579)](1));
//                   break;
//                 case "[":
//                   var mt = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/[C(510)](gt);
//                   if (!mt) throw new Error(J);
//                   nt(mt[1], (H = (O = mt[4]) !== null && O !== void 0 ? O : mt[5]) !== null && H !== void 0 ? H : "");
//                   break;
//                 default:
//                   throw new Error(J)
//               }
//             }
//             return [ot, it]
//           }(n), o = a[0], l = a[1], h = document.createElement(o ?? c(261)), w = 0, E = Object[c(217)](l); w < E[c(794)]; w++) {
//             var P = E[w],
//               g = l[P].join(" ");
//             c(362) === P ? qa(h.style, g) : h.setAttribute(P, g)
//           }
//           return h
//         }

//         function qa(n, c) {
//           for (var a = s, o = 0, l = c[a(441)](";"); o < l[a(794)]; o++) {
//             var h = l[o],
//               w = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(h);
//             if (w) {
//               var E = w[1],
//                 P = w[2],
//                 g = w[4];
//               n[a(599)](E, P, g || "")
//             }
//           }
//         }
//         var Nt = [s(195), "sans-serif", s(729)],
//           Ci = [s(341), s(889), s(720), "Arabic Typesetting", "Arial Unicode MS", s(638), "BankGothic Md BT", "Batang", s(335), s(754), s(543), s(753), s(623), "EUROSTILE", s(815), "Futura Bk BT", "Futura Md BT", s(772), "Gill Sans", s(392), s(369), "Helvetica Neue", "Humanst521 BT", s(841), s(434), "Levenim MT", s(372), s(477), "Menlo", "MS Mincho", "MS Outlook", s(250), s(277), s(361), s(851), s(521), s(175), s(278), s(505), "Monotype Corsiva", "PMingLiU", s(721), "SCRIPTINA", s(664), s(733), s(191), "Small Fonts", s(652), s(422), s(404), "Vrinda", s(333)];

//         function ge(n) {
//           var c = s;
//           return n[c(692)]()
//         }
//         var Xt, me;

//         function xe() {
//           var n = s,
//             c = screen;
//           return [Dt(vt(c[n(374)]), null), Dt(vt(c.width) - vt(c[n(281)]) - Dt(vt(c[n(428)]), 0), null), Dt(vt(c[n(630)]) - vt(c[n(887)]) - Dt(vt(c.availTop), 0), null), Dt(vt(c.availLeft), null)]
//         }

//         function we(n) {
//           for (var c = 0; c < 4; ++c)
//             if (n[c]) return !1;
//           return !0
//         }

//         function za(n) {
//           var c;
//           return tt(this, void 0, void 0, function () {
//             var a, o, l, h, w, E, P;
//             return ht(this, function (g) {
//               var x = M;
//               switch (g[x(658)]) {
//                 case 0:
//                   for (a = document, o = a[x(745)](x(261)), l = new Array(n.length), h = {}, Ti(o), P = 0; P < n[x(794)]; ++P)(w = ja(n[P]))[x(325)] === "DIALOG" && w.show(), Ti(E = a[x(745)](x(261))), E[x(945)](w), o.appendChild(E), l[P] = w;
//                   g[x(658)] = 1;
//                 case 1:
//                   return a[x(934)] ? [3, 3] : [4, et(50)];
//                 case 2:
//                   return g[x(884)](), [3, 1];
//                 case 3:
//                   a.body[x(945)](o);
//                   try {
//                     for (P = 0; P < n[x(794)]; ++P) l[P][x(188)] || (h[n[P]] = !0)
//                   } finally {
//                     (c = o.parentNode) === null || c === void 0 || c[x(836)](o)
//                   }
//                   return [2, h]
//               }
//             })
//           })
//         }

//         function Ti(n) {
//           var c = s;
//           n[c(362)].setProperty(c(659), c(305), "important")
//         }

//         function Bi(n) {
//           var c = s;
//           return matchMedia(c(619)[c(180)](n, ")")).matches
//         }

//         function Wi(n) {
//           var c = s;
//           return matchMedia("(forced-colors: "[c(180)](n, ")")).matches
//         }

//         function Vt(n) {
//           var c = s;
//           return matchMedia(c(854)[c(180)](n, ")")).matches
//         }

//         function Li(n) {
//           var c = s;
//           return matchMedia(c(620)[c(180)](n, ")")).matches
//         }

//         function Ai(n) {
//           var c = s;
//           return matchMedia(c(555)[c(180)](n, ")"))[c(684)]
//         }
//         var rt = Math,
//           kt = function () {
//             return 0
//           },
//           ye = {
//             default: [],
//             apple: [{
//               font: s(364)
//             }],
//             serif: [{
//               fontFamily: "serif"
//             }],
//             sans: [{
//               fontFamily: s(829)
//             }],
//             mono: [{
//               fontFamily: s(195)
//             }],
//             min: [{
//               fontSize: s(210)
//             }],
//             system: [{
//               fontFamily: s(194)
//             }]
//           },
//           $a = {
//             fonts: function () {
//               return Ei(function (n, c) {
//                 var a = M,
//                   o = c[a(717)],
//                   l = o.body;
//                 l[a(362)][a(244)] = a(289);
//                 var h = o[a(745)](a(261)),
//                   w = {},
//                   E = {},
//                   P = function (O) {
//                     var H = a,
//                       J = o[H(745)](H(322)),
//                       U = J[H(362)];
//                     return U[H(913)] = H(785), U[H(878)] = "0", U[H(959)] = "0", U[H(236)] = O, J[H(653)] = H(687), h[H(945)](J), J
//                   },
//                   g = Nt[a(473)](P),
//                   x = function () {
//                     for (var O = a, H = {}, J = function (it) {
//                       var ct = M;
//                       H[it] = Nt[ct(473)](function (nt) {
//                         return function (dt, gt) {
//                           var mt = M;
//                           return P("'"[mt(180)](dt, "',")[mt(180)](gt))
//                         }(it, nt)
//                       })
//                     }, U = 0, ot = Ci; U < ot[O(794)]; U++) J(ot[U]);
//                     return H
//                   }();
//                 l[a(945)](h);
//                 for (var C = 0; C < Nt[a(794)]; C++) w[Nt[C]] = g[C][a(783)], E[Nt[C]] = g[C].offsetHeight;
//                 return Ci.filter(function (O) {
//                   var H = a;
//                   return J = x[O], Nt[H(624)](function (U, ot) {
//                     var it = H;
//                     return J[ot][it(783)] !== w[U] || J[ot][it(610)] !== E[U]
//                   });
//                   var J
//                 })
//               })
//             },
//             domBlockers: function (n) {
//               var c = s,
//                 a = (n === void 0 ? {} : n)[c(176)];
//               return tt(this, void 0, void 0, function () {
//                 var o, l, h, w, E;
//                 return ht(this, function (P) {
//                   var g = M;
//                   switch (P[g(658)]) {
//                     case 0:
//                       return $t() || Pi() ? (x = atob, o = {
//                         abpIndo: ["#Iklan-Melayang", g(801), g(371), g(862), x(g(777))],
//                         abpvn: [g(938), g(575), x(g(810)), '[id^="bn_bottom_fixed_"]', g(803)],
//                         adBlockFinland: [g(393), x(g(388)), g(576), x(g(735)), x(g(795))],
//                         adBlockPersian: [g(381), g(291), g(852), g(494), x("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
//                         adBlockWarningRemoval: [g(346), g(843), g(209), x("LmhlYWRlci1ibG9ja2VkLWFk"), x(g(512))],
//                         adGuardAnnoyances: [g(269), g(225), g(251), g(672), g(872)],
//                         adGuardBase: [".BetterJsPopOverlay", x(g(650)), x(g(198)), x("I2NhbXBhaWduLWJhbm5lcg=="), x(g(485))],
//                         adGuardChinese: [x(g(736)), x(g(268)), g(495), x(g(351)), x(g(712))],
//                         adGuardFrench: ["#pavePub", x("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), g(264), ".widgetadv", x(g(263))],
//                         adGuardGerman: [g(724)],
//                         adGuardJapanese: [g(267), x(g(907)), x("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), x("LmFkZ29vZ2xl"), x("Ll9faXNib29zdFJldHVybkFk")],
//                         adGuardMobile: [x(g(197)), x("LmFtcF9hZA=="), g(797), g(466), x(g(956))],
//                         adGuardRussian: [x(g(831)), x(g(306)), g(420), x(g(834)), g(299)],
//                         adGuardSocial: [x(g(316)), x(g(780)), g(866), "#inlineShare", g(730)],
//                         adGuardSpanishPortuguese: [g(453), g(266), "#publiEspecial", "#queTooltip", g(711)],
//                         adGuardTrackingProtection: [g(451), x("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), x(g(899)), x(g(788)), g(395)],
//                         adGuardTurkish: ["#backkapat", x(g(527)), x(g(813)), x(g(577)), x(g(727))],
//                         bulgarian: [x(g(738)), g(574), g(408), g(632)],
//                         easyList: [g(613), x(g(646)), x(g(315)), ".textad_headline", x(g(239))],
//                         easyListChina: [x(g(285)), x("LmZyb250cGFnZUFkdk0="), g(782), "#aafoot.top_box", g(594)],
//                         easyListCookie: [g(952), ".cc-CookieWarning", g(686), x("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
//                         easyListCzechSlovak: [g(211), x(g(444)), x("LnJla2xhbWEtbWVnYWJvYXJk"), g(307), x(g(970))],
//                         easyListDutch: [x("I2FkdmVydGVudGll"), x(g(978)), g(776), x("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), g(779)],
//                         easyListGermany: [g(719), x(g(968)), x(g(892)), x("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), x(g(799))],
//                         easyListItaly: [x(g(489)), g(312), x(g(663)), x("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), x(g(960))],
//                         easyListLithuania: [x(g(394)), x("LnJla2xhbW9zX251b3JvZG9z"), x("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), x(g(585)), x("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
//                         estonian: [x(g(609))],
//                         fanboyAnnoyances: [g(688), ".navigate-to-top", g(487), g(256), g(421)],
//                         fanboyAntiFacebook: [g(603)],
//                         fanboyEnhancedTrackers: [g(764), g(669), g(549), g(275), g(822)],
//                         fanboySocial: [g(483), g(416), "#social_follow", g(903), g(953)],
//                         frellwitSwedish: [x(g(400)), x(g(385)), g(808), x(g(366)), g(265)],
//                         greekAdBlock: [x(g(498)), x(g(573)), x("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), g(703), "TABLE.advright"],
//                         hungarian: ["#cemp_doboz", g(370), x(g(572)), x(g(499)), g(382)],
//                         iDontCareAboutCookies: [g(415), g(475), g(187), "#cookies-policy-sticky", g(868)],
//                         icelandicAbp: [x("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
//                         latvian: [x("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), x("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
//                         listKr: [x(g(967)), x(g(760)), x(g(442)), x(g(296)), g(227)],
//                         listeAr: [x(g(208)), g(787), x(g(677)), x(g(205)), x(g(482))],
//                         listeFr: [x(g(192)), x(g(216)), x(g(398)), g(431), g(827)],
//                         officialPolish: [g(697), x(g(365)), x(g(635)), x(g(396)), x(g(757))],
//                         ro: [x("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), x(g(286)), x("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), x(g(644)), g(254)],
//                         ruAd: [x("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), x(g(660)), x("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), g(931), g(633)],
//                         thaiAds: ["a[href*=macau-uta-popup]", x(g(796)), x(g(873)), g(497), g(708)],
//                         webAnnoyancesUltralist: [g(722), g(386), x(g(272)), g(219), g(409)]
//                       }, l = Object[g(217)](o), [4, za((E = [])[g(180)][g(924)](E, l[g(473)](function (C) {
//                         return o[C]
//                       })))]) : [2, void 0];
//                     case 1:
//                       return h = P[g(884)](), a && function (C, O) {
//                         for (var H = g, J = "DOM blockers debug:\n```", U = 0, ot = Object[H(217)](C); U < ot.length; U++) {
//                           var it = ot[U];
//                           J += `
// ` [H(180)](it, ":");
//                           for (var ct = 0, nt = C[it]; ct < nt[H(794)]; ct++) {
//                             var dt = nt[ct];
//                             J += `
//   `.concat(O[dt] ? "\u{1F6AB}" : "\u27A1\uFE0F", " ")[H(180)](dt)
//                           }
//                         }
//                         console[H(904)](""[H(180)](J, H(246)))
//                       }(o, h), (w = l[g(443)](function (C) {
//                         var O = g,
//                           H = o[C];
//                         return lt(H[O(473)](function (J) {
//                           return h[J]
//                         })) > .6 * H[O(794)]
//                       }))[g(746)](), [2, w]
//                   }
//                   var x
//                 })
//               })
//             },
//             fontPreferences: function () {
//               return n === void 0 && (n = 4e3), Ei(function (c, a) {
//                 var o = M,
//                   l = a[o(717)],
//                   h = l[o(934)],
//                   w = h[o(362)];
//                 w[o(723)] = ""[o(180)](n, "px"), w.webkitTextSizeAdjust = w[o(918)] = o(411), ue() ? h[o(362)][o(478)] = ""[o(180)](1 / a.devicePixelRatio) : $t() && (h.style[o(478)] = o(376));
//                 var E = l[o(745)](o(261));
//                 return E.textContent = Pt([], Array(n / 20 | 0), !0)[o(473)](function () {
//                   var P = o;
//                   return P(863)
//                 })[o(207)](" "), h[o(945)](E),
//                   function (P, g) {
//                     for (var x = o, C = {}, O = {}, H = 0, J = Object[x(217)](ye); H < J[x(794)]; H++) {
//                       var U = J[H],
//                         ot = ye[U],
//                         it = ot[0],
//                         ct = it === void 0 ? {} : it,
//                         nt = ot[1],
//                         dt = nt === void 0 ? x(337) : nt,
//                         gt = P[x(745)](x(322));
//                       gt[x(653)] = dt, gt[x(362)][x(870)] = x(695);
//                       for (var mt = 0, Bt = Object[x(217)](ct); mt < Bt[x(794)]; mt++) {
//                         var Rt = Bt[mt],
//                           Yt = ct[Rt];
//                         Yt !== void 0 && (gt.style[Rt] = Yt)
//                       }
//                       C[U] = gt, g.appendChild(P[x(745)]("br")), g[x(945)](gt)
//                     }
//                     for (var ve = 0, Hi = Object[x(217)](ye); ve < Hi[x(794)]; ve++) O[U = Hi[ve]] = C[U].getBoundingClientRect()[x(723)];
//                     return O
//                   }(l, h)
//               }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
//               var n
//             },
//             audio: function () {
//               var n = s,
//                 c = window,
//                 a = c[n(948)] || c[n(936)];
//               if (!a) return -2;
//               if ($t() && !fe() && ! function () {
//                 var x = n,
//                   C = window;
//                 return lt([x(350) in C, x(255) in C, x(518) in C, x(336) in C]) >= 3
//               }()) return -1;
//               var o = new a(1, 5e3, 44100),
//                 l = o[n(515)]();
//               l[n(814)] = n(470), l.frequency[n(823)] = 1e4;
//               var h = o[n(559)]();
//               h[n(283)].value = -50, h[n(615)][n(823)] = 40, h[n(496)][n(823)] = 12, h.attack[n(823)] = 0, h.release.value = .25, l[n(976)](h), h[n(976)](o[n(966)]), l[n(462)](0);
//               var w = function (x) {
//                 var C = function () { };
//                 return [new Promise(function (O, H) {
//                   var J = M,
//                     U = !1,
//                     ot = 0,
//                     it = 0;
//                   x[J(568)] = function (dt) {
//                     var gt = J;
//                     return O(dt[gt(587)])
//                   };
//                   var ct = function () {
//                     setTimeout(function () {
//                       var dt = M;
//                       return H(Di(dt(679)))
//                     }, Math.min(500, it + 5e3 - Date.now()))
//                   },
//                     nt = function () {
//                       var dt = J;
//                       try {
//                         var gt = x[dt(245)]();
//                         switch (X(gt) && at(gt), x[dt(488)]) {
//                           case dt(546):
//                             it = Date[dt(571)](), U && ct();
//                             break;
//                           case dt(792):
//                             document[dt(563)] || ot++, U && ot >= 3 ? H(Di(dt(792))) : setTimeout(nt, 500)
//                         }
//                       } catch (mt) {
//                         H(mt)
//                       }
//                     };
//                   nt(), C = function () {
//                     U || (U = !0, it > 0 && ct())
//                   }
//                 }), C]
//               }(o),
//                 E = w[0],
//                 P = w[1],
//                 g = E[n(301)](function (x) {
//                   var C = n;
//                   return function (O) {
//                     for (var H = M, J = 0, U = 0; U < O.length; ++U) J += Math[H(802)](O[U]);
//                     return J
//                   }(x[C(525)](0)[C(492)](4500))
//                 }, function (x) {
//                   var C = n;
//                   if (x[C(744)] === "timeout" || C(792) === x.name) return -3;
//                   throw x
//                 });
//               return at(g),
//                 function () {
//                   return P(), g
//                 }
//             },
//             screenFrame: function () {
//               var n = this,
//                 c = function () {
//                   var a = this;
//                   return function () {
//                     if (me === void 0) {
//                       var o = function () {
//                         var l = xe();
//                         we(l) ? me = setTimeout(o, 2500) : (Xt = l, me = void 0)
//                       };
//                       o()
//                     }
//                   }(),
//                     function () {
//                       return tt(a, void 0, void 0, function () {
//                         var o;
//                         return ht(this, function (l) {
//                           var h = M;
//                           switch (l[h(658)]) {
//                             case 0:
//                               return we(o = xe()) ? Xt ? [2, Pt([], Xt, !0)] : (w = document)[h(522)] || w.msFullscreenElement || w[h(606)] || w[h(290)] ? [4, Fa()] : [3, 2] : [3, 2];
//                             case 1:
//                               l[h(884)](), o = xe(), l[h(658)] = 2;
//                             case 2:
//                               return we(o) || (Xt = o), [2, o]
//                           }
//                           var w
//                         })
//                       })
//                     }
//                 }();
//               return function () {
//                 return tt(n, void 0, void 0, function () {
//                   var a, o;
//                   return ht(this, function (l) {
//                     var h = M;
//                     switch (l[h(658)]) {
//                       case 0:
//                         return [4, c()];
//                       case 1:
//                         return a = l[h(884)](), [2, [(o = function (w) {
//                           return w === null ? null : Et(w, 10)
//                         })(a[0]), o(a[1]), o(a[2]), o(a[3])]]
//                     }
//                   })
//                 })
//               }
//             },
//             osCpu: function () {
//               var n = s;
//               return navigator[n(328)]
//             },
//             languages: function () {
//               var n = s,
//                 c, a = navigator,
//                 o = [],
//                 l = a[n(867)] || a.userLanguage || a[n(916)] || a.systemLanguage;
//               if (l !== void 0 && o[n(728)]([l]), Array[n(979)](a[n(604)])) ue() && lt([!(n(865) in (c = window)), n(826) in c, "" + c[n(178)] == n(793), "" + c[n(330)] == n(946)]) >= 3 || o.push(a[n(604)]);
//               else if (n(642) == typeof a[n(604)]) {
//                 var h = a[n(604)];
//                 h && o.push(h[n(441)](","))
//               }
//               return o
//             },
//             colorDepth: function () {
//               var n = s;
//               return window[n(749)][n(919)]
//             },
//             deviceMemory: function () {
//               var n = s;
//               return Dt(vt(navigator[n(326)]), void 0)
//             },
//             screenResolution: function () {
//               var n = s,
//                 c = screen,
//                 a = function (l) {
//                   return Dt(Ot(l), null)
//                 },
//                 o = [a(c.width), a(c[n(630)])];
//               return o.sort().reverse(), o
//             },
//             hardwareConcurrency: function () {
//               var n = s;
//               return Dt(Ot(navigator[n(247)]), void 0)
//             },
//             timezone: function () {
//               var n = s,
//                 c, a = (c = window[n(178)]) === null || c === void 0 ? void 0 : c[n(354)];
//               if (a) {
//                 var o = new a()[n(830)]().timeZone;
//                 if (o) return o
//               }
//               var l, h = (l = new Date()[n(432)](), -Math[n(418)](vt(new Date(l, 0, 1)[n(257)]()), vt(new Date(l, 6, 1)[n(257)]())));
//               return n(955)[n(180)](h >= 0 ? "+" : "")[n(180)](Math[n(802)](h))
//             },
//             sessionStorage: function () {
//               var n = s;
//               try {
//                 return !!window[n(700)]
//               } catch {
//                 return !0
//               }
//             },
//             localStorage: function () {
//               var n = s;
//               try {
//                 return !!window[n(583)]
//               } catch {
//                 return !0
//               }
//             },
//             indexedDB: function () {
//               var n = s,
//                 c, a;
//               if (!(Si() || (c = window, a = navigator, lt([n(874) in c, n(222) in c, n(885) in a, n(597) in a]) >= 3 && !Si()))) try {
//                 return !!window[n(292)]
//               } catch {
//                 return !0
//               }
//             },
//             openDatabase: function () {
//               return !!window.openDatabase
//             },
//             cpuClass: function () {
//               var n = s;
//               return navigator[n(818)]
//             },
//             platform: function () {
//               var n = s,
//                 c = navigator.platform;
//               return c === "MacIntel" && $t() && !fe() ? function () {
//                 var a = M;
//                 if (a(288) === navigator[a(896)]) return !0;
//                 var o = screen,
//                   l = o[a(723)] / o.height;
//                 return lt([a(702) in window, !!Element.prototype[a(238)], l > .65 && l < 1.53]) >= 2
//               }() ? n(288) : n(596) : c
//             },
//             plugins: function () {
//               var n = s,
//                 c = navigator[n(665)];
//               if (c) {
//                 for (var a = [], o = 0; o < c[n(794)]; ++o) {
//                   var l = c[o];
//                   if (l) {
//                     for (var h = [], w = 0; w < l.length; ++w) {
//                       var E = l[w];
//                       h[n(728)]({
//                         type: E[n(814)],
//                         suffixes: E.suffixes
//                       })
//                     }
//                     a.push({
//                       name: l[n(744)],
//                       description: l.description,
//                       mimeTypes: h
//                     })
//                   }
//                 }
//                 return a
//               }
//             },
//             canvas: function () {
//               var n = s,
//                 c, a, o = !1,
//                 l = function () {
//                   var P = M,
//                     g = document[P(745)]("canvas");
//                   return g[P(723)] = 1, g[P(630)] = 1, [g, g.getContext("2d")]
//                 }(),
//                 h = l[0],
//                 w = l[1];
//               if (function (P, g) {
//                 return !(!g || !P.toDataURL)
//               }(h, w)) {
//                 o = function (P) {
//                   var g = M;
//                   return P[g(349)](0, 0, 10, 10), P[g(349)](2, 2, 6, 6), !P[g(928)](5, 5, g(548))
//                 }(w),
//                   function (P, g) {
//                     var x = M;
//                     P[x(723)] = 240, P[x(630)] = 60, g[x(501)] = x(339), g.fillStyle = x(908), g[x(318)](100, 1, 62, 20), g[x(964)] = "#069", g[x(449)] = '11pt "Times New Roman"';
//                     var C = x(636)[x(180)](String[x(657)](55357, 56835));
//                     g.fillText(C, 2, 15), g[x(964)] = "rgba(102, 204, 0, 0.2)", g.font = "18pt Arial", g[x(397)](C, 4, 45)
//                   }(h, w);
//                 var E = ge(h);
//                 E !== ge(h) ? c = a = n(545) : (a = E, function (P, g) {
//                   var x = n;
//                   P[x(723)] = 122, P[x(630)] = 110, g.globalCompositeOperation = x(676);
//                   for (var C = 0, O = [
//                     [x(459), 40, 40],
//                     [x(592), 80, 40],
//                     [x(356), 60, 80]
//                   ]; C < O[x(794)]; C++) {
//                     var H = O[C],
//                       J = H[0],
//                       U = H[1],
//                       ot = H[2];
//                     g[x(964)] = J, g[x(762)](), g[x(915)](U, ot, 40, 0, 2 * Math.PI, !0), g[x(817)](), g[x(958)]()
//                   }
//                   g[x(964)] = x(698), g[x(915)](60, 60, 60, 0, 2 * Math.PI, !0), g[x(915)](60, 60, 20, 0, 2 * Math.PI, !0), g[x(958)](x(548))
//                 }(h, w), c = ge(h))
//               } else c = a = "";
//               return {
//                 winding: o,
//                 geometry: c,
//                 text: a
//               }
//             },
//             touchSupport: function () {
//               var n = s,
//                 c, a = navigator,
//                 o = 0;
//               a.maxTouchPoints !== void 0 ? o = Ot(a[n(654)]) : a[n(681)] !== void 0 && (o = a[n(681)]);
//               try {
//                 document[n(479)](n(800)), c = !0
//               } catch {
//                 c = !1
//               }
//               return {
//                 maxTouchPoints: o,
//                 touchEvent: c,
//                 touchStart: n(474) in window
//               }
//             },
//             vendor: function () {
//               return navigator.vendor || ""
//             },
//             vendorFlavors: function () {
//               for (var n = s, c = [], a = 0, o = [n(309), "safari", n(186), n(943), "yandex", n(331), n(816), n(588), n(755), n(204), "oprt", n(550), n(857), n(634), n(974)]; a < o[n(794)]; a++) {
//                 var l = o[a],
//                   h = window[l];
//                 h && typeof h == "object" && c[n(728)](l)
//               }
//               return c[n(746)]()
//             },
//             cookiesEnabled: function () {
//               var n = s,
//                 c = document;
//               try {
//                 c[n(243)] = n(529);
//                 var a = c[n(243)][n(737)](n(531)) !== -1;
//                 return c.cookie = n(214), a
//               } catch {
//                 return !1
//               }
//             },
//             colorGamut: function () {
//               for (var n = s, c = 0, a = ["rec2020", "p3", n(189)]; c < a.length; c++) {
//                 var o = a[c];
//                 if (matchMedia(n(716)[n(180)](o, ")")).matches) return o
//               }
//             },
//             invertedColors: function () {
//               var n = s;
//               return !!Bi(n(379)) || !Bi(n(411)) && void 0
//             },
//             forcedColors: function () {
//               var n = s;
//               return !!Wi(n(798)) || !Wi(n(411)) && void 0
//             },
//             monochrome: function () {
//               var n = s;
//               if (matchMedia(n(262))[n(684)]) {
//                 for (var c = 0; c <= 100; ++c)
//                   if (matchMedia(n(944)[n(180)](c, ")"))[n(684)]) return c;
//                 throw new Error(n(407))
//               }
//             },
//             contrast: function () {
//               var n = s;
//               return Vt(n(732)) ? 0 : Vt(n(975)) || Vt("more") ? 1 : Vt(n(258)) || Vt(n(618)) ? -1 : Vt(n(640)) ? 10 : void 0
//             },
//             reducedMotion: function () {
//               var n = s;
//               return !!Li(n(763)) || !Li(n(732)) && void 0
//             },
//             hdr: function () {
//               var n = s;
//               return !!Ai(n(975)) || !Ai(n(598)) && void 0
//             },
//             math: function () {
//               var n = s,
//                 c, a = rt[n(340)] || kt,
//                 o = rt[n(935)] || kt,
//                 l = rt[n(241)] || kt,
//                 h = rt[n(353)] || kt,
//                 w = rt[n(544)] || kt,
//                 E = rt[n(377)] || kt,
//                 P = rt[n(586)] || kt,
//                 g = rt[n(662)] || kt,
//                 x = rt[n(910)] || kt,
//                 C = rt[n(402)] || kt,
//                 O = rt[n(965)] || kt,
//                 H = rt[n(611)] || kt,
//                 J = rt[n(357)] || kt,
//                 U = rt[n(962)] || kt,
//                 ot = rt[n(547)] || kt;
//               return {
//                 acos: a(.12312423423423424),
//                 acosh: o(1e308),
//                 acoshPf: (c = 1e154, rt[n(904)](c + rt[n(726)](c * c - 1))),
//                 asin: l(.12312423423423424),
//                 asinh: h(1),
//                 asinhPf: rt[n(904)](1 + rt[n(726)](2)),
//                 atanh: w(.5),
//                 atanhPf: rt[n(904)](3) / 2,
//                 atan: E(.5),
//                 sin: P(-1e300),
//                 sinh: g(1),
//                 sinhPf: rt[n(357)](1) - 1 / rt.exp(1) / 2,
//                 cos: x(10.000000000123),
//                 cosh: C(1),
//                 coshPf: (rt[n(357)](1) + 1 / rt[n(357)](1)) / 2,
//                 tan: O(-1e300),
//                 tanh: H(1),
//                 tanhPf: (rt.exp(2) - 1) / (rt.exp(2) + 1),
//                 exp: J(1),
//                 expm1: U(1),
//                 expm1Pf: rt[n(357)](1) - 1,
//                 log1p: ot(10),
//                 log1pPf: rt[n(904)](11),
//                 powPI: rt[n(530)](rt.PI, -100)
//               }
//             },
//             videoCard: function () {
//               var n = s,
//                 c, a = document[n(745)](n(752)),
//                 o = (c = a[n(553)](n(709))) !== null && c !== void 0 ? c : a[n(553)](n(742));
//               if (o && n(837) in o) {
//                 var l = o[n(837)](n(484));
//                 if (l) return {
//                   vendor: (o[n(622)](l[n(528)]) || "").toString(),
//                   renderer: (o.getParameter(l.UNMASKED_RENDERER_WEBGL) || "")[n(886)]()
//                 }
//               }
//             },
//             pdfViewerEnabled: function () {
//               var n = s;
//               return navigator[n(345)]
//             },
//             architecture: function () {
//               var n = new Float32Array(1),
//                 c = new Uint8Array(n.buffer);
//               return n[0] = 1 / 0, n[0] = n[0] - n[0], c[3]
//             }
//           },
//           Ua = "";

//         function _i(n) {
//           var c = s;
//           return JSON[c(584)](n, function (a, o) {
//             var l = c;
//             return o instanceof Error ? Y({
//               name: (h = o).name,
//               message: h[l(182)],
//               stack: (w = h[l(612)]) === null || w === void 0 ? void 0 : w.split(`
// `)
//             }, h) : o;
//             var h, w
//           }, 2)
//         }

//         function Gi(n) {
//           return function (c, a) {
//             var o = M;
//             a = a || 0;
//             var l, h = (c = c || "")[o(794)] % 16,
//               w = c.length - h,
//               E = [0, a],
//               P = [0, a],
//               g = [0, 0],
//               x = [0, 0],
//               C = [2277735313, 289559509],
//               O = [1291169091, 658871167];
//             for (l = 0; l < w; l += 16) g = [255 & c[o(770)](l + 4) | (255 & c[o(770)](l + 5)) << 8 | (255 & c.charCodeAt(l + 6)) << 16 | (255 & c.charCodeAt(l + 7)) << 24, 255 & c[o(770)](l) | (255 & c[o(770)](l + 1)) << 8 | (255 & c.charCodeAt(l + 2)) << 16 | (255 & c[o(770)](l + 3)) << 24], x = [255 & c[o(770)](l + 12) | (255 & c[o(770)](l + 13)) << 8 | (255 & c[o(770)](l + 14)) << 16 | (255 & c[o(770)](l + 15)) << 24, 255 & c.charCodeAt(l + 8) | (255 & c[o(770)](l + 9)) << 8 | (255 & c[o(770)](l + 10)) << 16 | (255 & c[o(770)](l + 11)) << 24], g = _(g = ut(g, C), 31), E = Q(E = _(E = W(E, g = ut(g, O)), 27), P), E = Q(ut(E, [0, 5]), [0, 1390208809]), x = _(x = ut(x, O), 33), P = Q(P = _(P = W(P, x = ut(x, C)), 31), E), P = Q(ut(P, [0, 5]), [0, 944331445]);
//             switch (g = [0, 0], x = [0, 0], h) {
//               case 15:
//                 x = W(x, G([0, c.charCodeAt(l + 14)], 48));
//               case 14:
//                 x = W(x, G([0, c[o(770)](l + 13)], 40));
//               case 13:
//                 x = W(x, G([0, c[o(770)](l + 12)], 32));
//               case 12:
//                 x = W(x, G([0, c[o(770)](l + 11)], 24));
//               case 11:
//                 x = W(x, G([0, c[o(770)](l + 10)], 16));
//               case 10:
//                 x = W(x, G([0, c.charCodeAt(l + 9)], 8));
//               case 9:
//                 x = ut(x = W(x, [0, c.charCodeAt(l + 8)]), O), P = W(P, x = ut(x = _(x, 33), C));
//               case 8:
//                 g = W(g, G([0, c[o(770)](l + 7)], 56));
//               case 7:
//                 g = W(g, G([0, c.charCodeAt(l + 6)], 48));
//               case 6:
//                 g = W(g, G([0, c[o(770)](l + 5)], 40));
//               case 5:
//                 g = W(g, G([0, c[o(770)](l + 4)], 32));
//               case 4:
//                 g = W(g, G([0, c[o(770)](l + 3)], 24));
//               case 3:
//                 g = W(g, G([0, c[o(770)](l + 2)], 16));
//               case 2:
//                 g = W(g, G([0, c[o(770)](l + 1)], 8));
//               case 1:
//                 g = ut(g = W(g, [0, c[o(770)](l)]), C), E = W(E, g = ut(g = _(g, 31), O))
//             }
//             return E = Q(E = W(E, [0, c[o(794)]]), P = W(P, [0, c.length])), P = Q(P, E), E = Q(E = R(E), P = R(P)), P = Q(P, E), (o(500) + (E[0] >>> 0).toString(16)).slice(-8) + (o(500) + (E[1] >>> 0)[o(886)](16))[o(579)](-8) + (o(500) + (P[0] >>> 0)[o(886)](16))[o(579)](-8) + ("00000000" + (P[1] >>> 0)[o(886)](16)).slice(-8)
//           }(function (c) {
//             for (var a = M, o = "", l = 0, h = Object.keys(c)[a(746)](); l < h[a(794)]; l++) {
//               var w = h[l],
//                 E = c[w],
//                 P = E[a(898)] ? a(898) : JSON[a(584)](E[a(823)]);
//               o += ""[a(180)](o ? "|" : "")[a(180)](w.replace(/([:|\\])/g, "\\$1"), ":")[a(180)](P)
//             }
//             return o
//           }(n))
//         }

//         function Ja(n) {
//           return n === void 0 && (n = 50),
//             function (c, a) {
//               var o = M;
//               a === void 0 && (a = 1 / 0);
//               var l = window[o(891)];
//               return l ? new Promise(function (h) {
//                 return l.call(window, function () {
//                   return h()
//                 }, {
//                   timeout: a
//                 })
//               }) : et(Math[o(410)](c, a))
//             }(n, 2 * n)
//         }

//         function Ka(n, c) {
//           var a = Date.now();
//           return {
//             get: function (o) {
//               return tt(this, void 0, void 0, function () {
//                 var l, h, w;
//                 return ht(this, function (E) {
//                   var P = M;
//                   switch (E[P(658)]) {
//                     case 0:
//                       return l = Date[P(571)](), [4, n()];
//                     case 1:
//                       return h = E[P(884)](), w = function (g) {
//                         var x = P,
//                           C, O = function (H) {
//                             var J = M,
//                               U = function (it) {
//                                 var ct = M;
//                                 if (Pi()) return .4;
//                                 if ($t()) return fe() ? .5 : .3;
//                                 var nt = it[ct(896)][ct(823)] || "";
//                                 return /^Win/.test(nt) ? .6 : /^Mac/.test(nt) ? .5 : .7
//                               }(H),
//                               ot = function (it) {
//                                 return Et(.99 + .01 * it, 1e-4)
//                               }(U);
//                             return {
//                               score: U,
//                               comment: Ua[J(359)](/\$/g, ""[J(180)](ot))
//                             }
//                           }(g);
//                         return {
//                           get visitorId() {
//                             var H = M;
//                             return C === void 0 && (C = Gi(this[H(437)])), C
//                           },
//                           set visitorId(H) {
//                             C = H
//                           },
//                           confidence: O,
//                           components: g,
//                           version: x(856)
//                         }
//                       }(h), (c || o?.[P(176)]) && console[P(904)](P(344)[P(180)](w.version, P(460)).concat(navigator[P(897)], `
// timeBetweenLoadAndGet: `)[P(180)](l - a, P(414)).concat(w[P(699)], P(413))[P(180)](_i(h), P(246))), [2, w]
//                   }
//                 })
//               })
//             }
//           }
//         }
//         var be, Za = {
//           load: function (n) {
//             var c = s,
//               a = n === void 0 ? {} : n,
//               o = a[c(691)],
//               l = a[c(176)],
//               h = a[c(888)],
//               w = h === void 0 || h;
//             return tt(this, void 0, void 0, function () {
//               return ht(this, function (E) {
//                 var P = M;
//                 switch (E[P(658)]) {
//                   case 0:
//                     return w && (void 0)(), [4, Ja(o)];
//                   case 1:
//                     return E[P(884)](), [2, Ka(Tt($a, {
//                       debug: l
//                     }, []), l)]
//                 }
//               })
//             })
//           },
//           hashComponents: Gi,
//           componentsToDebugString: _i
//         },
//           Xa = function () {
//             var n = s;

//             function c() { }
//             return c[n(725)] = function () {
//               return tt(this, void 0, void 0, function () {
//                 return ht(this, function (a) {
//                   var o = M;
//                   switch (a[o(658)]) {
//                     case 0:
//                       return [4, Za[o(456)]({
//                         monitoring: !1
//                       })];
//                     case 1:
//                       return [2, a[o(884)]()[o(426)]()]
//                   }
//                 })
//               })
//             }, c
//           }();
//         (function (n) {
//           var c = s;
//           n.Good = "good", n[c(226)] = "bad", n[c(343)] = c(578)
//         })(be || (be = {}));
//         var Ya = function () {
//           var n = s;

//           function c(a) {
//             var o = M;
//             this[o(847)] = a, this[o(259)] = null, this[o(536)] = null, this[o(847)].context = this[o(847)][o(784)] || window, this[o(847)].instance = this.config[o(513)] || 890857896
//           }
//           return c[n(880)].send = function (a) {
//             return tt(this, arguments, void 0, function (o, l, h) {
//               var w = this;
//               return l === void 0 && (l = ""), h === void 0 && (h = !0), ht(this, function (E) {
//                 return [2, new Promise(function (P, g) {
//                   var x = M;
//                   if (w[x(536)] && h) return P(w[x(536)]);
//                   var C = {
//                     instance: w.config.instance,
//                     source: o
//                   },
//                     O = w[x(847)][x(616)] + x(731);
//                   C[x(472)] = O, w.config.context[O] = function (J) {
//                     var U = x;
//                     return J.getError() || !J[U(734)]() && !J[U(458)]() ? g(new Error(U(424) + J.getError())) : P(J)
//                   }, l !== "" && (C[x(750)] = l);
//                   var H = f[x(173)](C) + "&" + new Date().getTime();
//                   w[x(551)](H).catch(g)
//                 }).then(function (P) {
//                   var g = M;
//                   return w[g(536)] = P, P
//                 })]
//               })
//             })
//           }, c[n(880)][n(242)] = function (a) {
//             return tt(this, void 0, void 0, function () {
//               var o, l, h, w = this;
//               return ht(this, function (E) {
//                 var P = M;
//                 return this[P(259)] ? [2, this[P(259)]] : (o = {
//                   instance: this[P(847)][P(513)]
//                 }, (l = a[P(734)]()) && (o.id = encodeURIComponent(l)), (h = a[P(458)]()) && (o.exid = encodeURIComponent(h)), [2, new Promise(function (g, x) {
//                   var C = P,
//                     O = new XMLHttpRequest;
//                   O[C(190)](C(433), c.RESULT_URL, !0), O[C(789)](C(308), C(690)), O[C(511)] = function () {
//                     var H = C,
//                       J;
//                     try {
//                       J = JSON[H(425)](this.response)
//                     } catch {
//                       return void x(new Error(H(790) + this[H(600)]))
//                     }
//                     J[H(536)] ? g(J[H(536)]) : x(new Error(H(439) + this[H(600)]))
//                   }, O[C(429)](f[C(173)](o))
//                 })[P(301)](function (g) {
//                   var x = P;
//                   return w[x(259)] = g, g
//                 })])
//               })
//             })
//           }, c[n(880)].loadScript = function (a) {
//             var o = this;
//             return new Promise(function (l, h) {
//               var w = M,
//                 E = o[w(847)][w(784)][w(717)][w(745)](w(666));
//               E.type = w(771), E[w(378)] = !0, E.src = c[w(971)] + "?" + a, E.onload = function () {
//                 return l()
//               }, E.onerror = function () {
//                 var P = w;
//                 return h(new Error(P(707)))
//               }, o[w(847)][w(784)][w(717)][w(934)][w(945)](E)
//             })
//           }, c[n(971)] = n(933), c[n(298)] = n(389), c
//         }(),
//           Oi = Ya,
//           Ri = function () {
//             var n = s;

//             function c(a) {
//               var o = M;
//               this[o(847)] = a, this.config[o(784)] = this.config.context || window
//             }
//             return c[n(880)][n(429)] = function (a) {
//               var o = n,
//                 l = this[o(847)].context[o(717)][o(745)](o(237)),
//                 h = {
//                   clid: c.MGID,
//                   paid: c.MGID,
//                   avid: c[o(540)],
//                   caid: c.DEFAULT,
//                   plid: a.plid,
//                   publisherId: a[o(925)],
//                   siteId: a[o(445)],
//                   kv1: a.kv1,
//                   kv2: window[o(766)][o(864)],
//                   kv3: a.kv3,
//                   kv4: c[o(540)],
//                   kv5: a.kv5,
//                   kv6: a[o(740)] || c.AFRD_CLICK,
//                   kv7: a.kv7,
//                   kv11: a[o(683)],
//                   kv12: a[o(423)],
//                   kv24: this[o(759)]() ? c[o(647)] : c.PLATFORM_DESKTOP,
//                   kv27: encodeURIComponent(navigator.userAgent),
//                   cb: Math[o(693)](new Date()[o(922)]() / 1e3)
//                 },
//                 w = f[o(173)](h);
//               l[o(455)] = c[o(504)] + "?" + w, this[o(847)].context.document[o(934)][o(945)](l)
//             }, c[n(880)][n(759)] = function () {
//               var a = n,
//                 o = navigator[a(897)];
//               return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i[a(199)](o)
//             }, c.URL = n(235), c[n(520)] = n(503), c[n(540)] = "-", c[n(647)] = n(901), c.PLATFORM_DESKTOP = n(570), c[n(212)] = "afrd_click", c
//           }(),
//           Qa = function () {
//             var n = s;

//             function c(a) {
//               this.context = a
//             }
//             return c[n(880)].beacon = function (a, o) {
//               var l = n;
//               l(625) == typeof navigator[l(845)] ? this[l(845)](a, o) : this[l(649)](a, o)
//             }, c.prototype[n(649)] = function (a, o) {
//               var l = n;
//               this[l(784)].createElement(l(678))[l(455)] = a + "?" + f[l(173)](o)
//             }, c[n(880)].sendBeacon = function (a, o) {
//               var l = n;
//               try {
//                 navigator[l(845)](a + "?" + f.buildQueryParams(o))
//               } catch {
//                 this[l(649)](a, o)
//               }
//             }, c
//           }(),
//           tr = function () {
//             var n = s;

//             function c(a) {
//               var o = M;
//               this[o(367)] = {}, this.context = a[o(784)] || window, this.id = a.id;
//               var l = a.storagePrefix || o(951),
//                 h = a[o(844)] || o(436),
//                 w = this[o(784)][h + o(355)] ? this[o(784)][h + o(355)] : "";
//               this[o(602)] = l + o(467) + w
//             }
//             return c.prototype[n(181)] = function () {
//               var a = n,
//                 o = this[a(853)]();
//               o[this.id] !== void 0 ? this.cookieStorage = o[this.id] : this[a(367)] = {}
//             }, c[n(880)][n(303)] = function () {
//               var a = n,
//                 o = this.getCookieValue();
//               o[this.id] = this[a(367)];
//               var l = encodeURIComponent(JSON[a(584)](o));
//               this[a(784)][a(717)][a(243)] = this[a(602)] + "=" + l + a(320)
//             }, c[n(880)][n(853)] = function () {
//               var a = n,
//                 o = this.context.document[a(243)][a(363)](new RegExp("(?:^|; )" + this[a(602)] + a(747))),
//                 l = {};
//               if (o) try {
//                 l = JSON.parse(decodeURIComponent(o[1]))
//               } catch { }
//               return l
//             }, c
//           }(),
//           er = function () {
//             var n = s;

//             function c(a) {
//               var o = M;
//               this[o(516)] = a, this[o(464)] = "", this[o(881)] = [], this[o(927)] = new L(new j({
//                 id: c.id,
//                 modulePrefix: c[o(469)],
//                 cookieStorage: new tr({
//                   id: c.id,
//                   context: window
//                 }),
//                 browserProperties: a[o(637)]
//               })), this[o(774)] = new Oi({
//                 widgetPrefix: c[o(469)],
//                 context: window
//               }), this.request = new Qa(window[o(717)]), this[o(876)] = new Ri({
//                 context: window
//               })
//             }
//             return c[n(880)][n(452)] = function () {
//               var a = n;
//               this[a(516)][a(704)] && this[a(516)].sendAnuraAtLoad && this.sendAnura(this[a(516)].showHash), this[a(516)][a(809)] && Object[a(217)](this.options[a(809)])[a(794)] > 0 && this[a(876)].send(this[a(516)][a(809)]), this[a(927)][a(454)](), this[a(804)]()
//             }, c[n(880)][n(895)] = function (a, o) {
//               var l = n,
//                 h = o[l(864)][l(737)](l(917)),
//                 w = o[l(864)][l(737)](l(558)),
//                 E = o.href[l(737)]("?");
//               h !== -1 ? o[l(864)] = o[l(864)].substr(0, h) : w !== -1 && (o[l(864)] = o[l(864)][l(274)](0, w)), this[l(464)] = o[l(864)], this[l(689)] = o, o[l(864)] += h === -1 && E !== -1 ? "&" : "?";
//               var P = this[l(927)][l(566)](a, o, this[l(516)][l(233)]);
//               o.href += "k=" + this[l(516)][l(557)] + "f" + P, this[l(287)](o, l(902))
//             }, c.prototype[n(804)] = function () {
//               var a = n,
//                 o = this;
//               this[a(203)](document.getElementsByTagName("a")), setTimeout(function () {
//                 var l = a;
//                 return o[l(804)]()
//               }, 750)
//             }, c[n(880)][n(203)] = function (a) {
//               for (var o = n, l = /(ghits|[prt]+news|nr)/i, h = 0; h < a[o(794)]; h++) {
//                 var w = a[h];
//                 this[o(881)][o(737)](w) === -1 && l[o(199)](w[o(864)]) && (this[o(881)].push(w), this[o(859)](w, "mousedown", v[o(569)]), this[o(859)](w, o(954), v[o(562)]), this.bindEvent(w, o(685), v.MouseOver), this[o(859)](w, o(223), v[o(391)]), this[o(859)](w, "touchstart", v[o(177)]), this[o(859)](w, "touchend", v[o(248)]), this[o(859)](w, o(440), v[o(806)]))
//               }
//               this[o(927)].setWidgetEvents()
//             }, c.prototype[n(859)] = function (a, o, l) {
//               var h = n,
//                 w = this;
//               k[h(741)](a, o, function (E) {
//                 var P = h;
//                 return w[P(317)](E, a, l)
//               })
//             }, c[n(880)][n(317)] = function (a, o, l) {
//               var h = n,
//                 w = this;
//               if (this.bindAntiFraudParams(a, o), this[h(927)][h(532)](l), l === v.MouseUp) {
//                 if (this[h(516)][h(704)]) {
//                   var E = o[h(875)](h(542)) || this[h(516)].showHash;
//                   this[h(517)](E)
//                 }
//                 setTimeout(function () {
//                   var P = h;
//                   return w[P(748)]()
//                 }, 100)
//               }
//             }, c.prototype[n(287)] = function (a, o) {
//               var l = n,
//                 h = document[l(479)](l(514));
//               h.initEvent(o, !0, !1), h[l(232)] = Date[l(571)](), a[l(280)](h)
//             }, c[n(880)][n(748)] = function () {
//               var a = n;
//               this[a(464)] && this.afActiveEl && (this[a(689)].href = this.afRealHref)
//             }, c.prototype[n(517)] = function (a) {
//               return tt(this, void 0, void 0, function () {
//                 var o, l;
//                 return ht(this, function (h) {
//                   var w = M;
//                   switch (h[w(658)]) {
//                     case 0:
//                       return [4, this[w(774)][w(429)](this[w(516)][w(850)], this[w(516)].publisherSource)];
//                     case 1:
//                       return o = h[w(884)](), [4, this[w(774)].fetchStatus(o)];
//                     case 2:
//                       return l = h[w(884)](), this.request.beacon(this[w(516)][w(215)] + "/anura", {
//                         composite: this.options[w(557)],
//                         result: l,
//                         showHash: a
//                       }), [2]
//                   }
//                 })
//               })
//             }, c[n(469)] = n(279), c.id = n(342), c
//           }()
//       })(), ua.exports = i
//     })();

//     function re() {
//       var m = ["tanh", "stack", ".yb-floorad", "msIndexedDB", "knee", "widgetPrefix", "safari", "less", "(inverted-colors: ", "(prefers-reduced-motion: ", "setReferrers", "getParameter", "Clarendon", "some", "function", "Apple", "referrers", "trimString", "trys", "height", "btoa", "#xenium_hot_offers", ".yandex-rtb-block", "UCShellJava", "YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ==", "Cwm fjordbank gly ", "browserProperties", "AvantGarde Bk BT", "iframe", "forced", "offsetTop", "string", "afReferrer", "YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd", "webkitConnection", "LndpZGdldF9wb19hZHNfd2lkZ2V0", "PLATFORM_MOBILE", "networkInformationEffectiveType", "sendImage", "I2FkXzMwMFgyNTA=", "15pCWene", "Staccato222 BT", "textContent", "maxTouchPoints", "right", "INCLUDES", "fromCharCode", "label", "display", "YVtocmVmKj0iLy91dGltZy5ydS8iXQ==", "BatteryManager", "sinh", "YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd", "Segoe UI Light", "plugins", "script", "str", "clientTop", "#issuem-leaky-paywall-articles-zero-remaining-nag", "addEventListener", "svspr", ".as-oil", "afPlugins", "is_debug", "ceil", "multiply", "YVtocmVmKj0iLmFmbGFtLmluZm8iXQ==", "IMG", "timeout", "afDeviceOrientation", "msMaxTouchPoints", "frameElement", "kv11", "matches", "mouseover", "[data-cookie-number]", "mmMwWLliI0O&1", "#ac-lre-player", "afActiveEl", "application/x-www-form-urlencoded", "delayFallback", "toDataURL", "floor", "complete", "nowrap", "getBrowserFlag", "#ceneo-placeholder-ceneo-12", "#f9c", "visitorId", "sessionStorage", "hasOwnProperty", "MediaSource", "DIV.agores300", "anuraEnabled", "processReferrers", "IS_FALSE", "Failed to load script", ".img-kosana", "webgl", "generateBatteryInfo", ".cnt-publi", "YVtocmVmKj0iLjE5NTZobC5jb20vIl0=", "call", "pageY", "Counter", "(color-gamut: ", "document", "IS_OBJECT", "#SSpotIMPopSlider", "Agency FB", "Pristina", "#mod-social-share-2", "width", 'aside[data-portal-id="leaderboard"]', "generate", "sqrt", "YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==", "push", "serif", ".popup-social", "AnuraCallback", "no-preference", "Serifa", "getId", "YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd", "LlppX2FkX2FfSA==", "indexOf", "dGQjZnJlZW5ldF90YWJsZV9hZHM=", "saveData", "kv6", "addEvent", "experimental-webgl", "charging", "name", "createElement", "sort", "=([^;]*)", "reWriteHref", "screen", "campaign", "next", "canvas", "Century Gothic", "Calibri", "__edgeTrackingPreventionStatistics", "528qjxDge", "ZGl2I3NrYXBpZWNfYWQ=", "round", "isMobile", "I2xpdmVyZUFkV3JhcHBlcg==", "class", "beginPath", "reduce", ".open.pushModal", "MUST_NOT_EXIST", "location", "networkInformation", "getHardwareConcurrency", "opr", "charCodeAt", "text/javascript", "GOTHAM", "getCoordsClickOfWindow", "anura", "isWidgetResized", ".adstekst", "I0JveC1CYW5uZXItYWRz", "exports", "#semilo-lrectangle", "YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0=", "ShockwaveFlash.ShockwaveFlash", "#taotaole", "offsetWidth", "context", "absolute", "orientation", ".right-and-left-sponsers", "YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ==", "setRequestHeader", "Anura response cannot parse: ", "getCoordsClickOfPage", "suspended", "[object Intl]", "length", "YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd", "I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA==", 'amp-embed[type="24smi"]', "active", "YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=", "TouchEvent", "#Kolom-Iklan-728", "abs", "#pmadv", "initAntiFraud", "rule_value", "Focus", "getRectOfElement", "article.category-samarbete", "pixalateData", "LmNsb3NlLWFkcw==", "encodeParameters", "getBattery", "YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0=", "type", "Franklin Gothic", "__ybro", "closePath", "cpuClass", "buildID", "REGEX_MATCH", "isValid", ".BlockNag__Card", "value", "setDeepSession", "firstChild", "RTCEncodedAudioFrame", 'div[id^="crt-"][data-criteo-id]', "clearImmediate", "sans-serif", "resolvedOptions", "YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0=", "MUST_EXIST", "unknown", "ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd", "getCoordinatesClickOfWindow", "removeChild", "getExtension", "referrer", "CSSPrimitiveValue", "getBoundingClientRect", "Leelawadee", "isSupportBlurEvent", ".adblocker-root", "informerPrefix", "sendBeacon", "afMgLoaded", "config", "scrollTop", "external", "source", "MYRIAD PRO", 'TABLE[width="140px"]', "getCookieValue", "(prefers-contrast: ", "documentElement", "3.4.2", "ucweb", "DeviceMotionEvent", "bindEvent", "removeItem", "readyState", '[title="ALIENBOLA" i]', "word", "href", "MediaSettingsRange", ".etsy-tweet", "language", "#stickyCookieBar", "__esModule", "whiteSpace", "getStringValueFromLocalStorage", '[data-cypress="soft-push-notification-modal"]', "LmFkczMwMHM=", "msWriteProfilerMark", "getAttribute", "pixalate", "timerFromScroll", "top", "dec2chr", "prototype", "links", "afLevel", "EQUALS", "sent", "msLaunchUri", "toString", "availHeight", "monitoring", "ARNO PRO", "event", "requestIdleCallback", "I3dlcmJ1bmdza3k=", "ActiveXObject", "443480dImHqI", "bindAntiFraudParams", "platform", "userAgent", "error", "YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0=", "toStringTag", "Mobile_Web", "generated", ".article-sharer", "log", "msSetImmediate", "opera", "YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0=", "#f60", "afCoordsClickAndLinkOfPage", "cos", "1.3.1", "MSCSSMatrix", "position", "pageX", "arc", "browserLanguage", "?k=", "textSizeAdjust", "colorDepth", "return", "getDeviceOrientation", "getTime", "getStorageUpdates", "apply", "publisherId", "afShortEnabled", "app", "isPointInPath", "clientX", "GREATER_THAN", "#pgeldiz", "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=", "https://script.anura.io/request.js", "body", "acosh", "webkitOfflineAudioContext", "bstr", ".quangcao", "throw", "setIsWidgetResize", "level", "logger", "__gCrWeb", "(max-monochrome: ", "appendChild", "[object Reflect]", "Google", "OfflineAudioContext", "DeviceOrientationEvent", "default", "Mgid", ".ezmob-footer", ".community__social-desc", "mouseup", "UTC", "I2FkX2ludmlld19hcmVh", "defineProperty", "fill", "left", "YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==", "isTouchStart", "expm1", "compressNumber", "fillStyle", "tan", "destination", "YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0=", "LnNwb25zb3JsaW5rZ3J1ZW4=", "clientLeft", "W2lkXj0ic2tsaWtSZWtsYW1hIl0=", "REQUEST_URL", "8408619wSOvZq", "applyReplacements", "puffinDevice", "high", "connect", "setCoordsClickAndLinkOfPage", "I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw==", "isArray", "15558ZAyaPw", "buildQueryParams", "getNetwrokInformation", "Meiryo UI", "debug", "TouchStart", "Intl", "callToActionClicked", "concat", "getCookie", "message", "isLocalStorageEnabled", "getComputedStyle", "iterator", "__crWeb", ".o--cookies--container", "offsetParent", "srgb", "open", "SimHei", "YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ==", "setWidgetEvents", "system-ui", "monospace", "SharedWorker", "YW1wLWF1dG8tYWRz", "I2Jhbm5lcmZsb2F0MjI=", "test", "screenX", "touches", "onmozfullscreenchange", "bindEvents", "webkit", "YVtocmVmKj0iYm9vcmFxLm9yZyJd", "12896554ryChvQ", "join", "LmdlbWluaUxCMUFk", ".wp_adblock_detect", "1px", "#onlajny-stickers", "AFRD_CLICK", "about:blank", "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", "sensorDomain", "I2FkY29udGFpbmVyX3JlY2hlcmNoZQ==", "keys", "getSnapShot", ".zergnet-recommend", "EXCLUDES", "8977416rqvIbF", "MSStream", "mousemove", "create", "#cookieconsentdiv", "Bad", ".revenue_unit_item.dable", "clearInterval", "offsetLeft", "onLine", "screenY", "timeG", "showHash", "CanvasCaptureMediaStream", "https://adrta.com/i", "fontFamily", "img", "webkitRequestFullscreen", "LnNwb25zb3JlZC10ZXh0LWxpbmtz", "getPropertyValue", "asin", "fetchStatus", "cookie", "fontSize", "startRendering", "\n```", "hardwareConcurrency", "TouchEnd", "isOnLine", "MS Reference Specialty", 'div[class^="app_gdpr"]', "x64String", "charAt", 'a[href^="/url/"]', "RTCPeerConnectionIceEvent", ".newsletter_holder", "getTimezoneOffset", "low", "status", "vendor", "div", "(min-monochrome: 0)", "LmFkc19iYW4=", ".mobile_adhesion", "ul.adsmodern", "#Publicidade", "#kauli_yad_1", "YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd", ".hs-sosyal", "Shockwave Flash", "CSSMozDocumentRule", "LmN0cGwtZnVsbGJhbm5lcg==", "webkitSpeechGrammar", "substr", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', "unknown|unknown|0", "MS UI Gothic", "Microsoft Uighur", "Transit", "dispatchEvent", "availWidth", "getParameterFromLink", "threshold", "NOT_EQUALS", "LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ==", "YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd", "dispatchAntifraudHashEvent", "iPad", "48px", "webkitFullscreenElement", ".kadr", "indexedDB", "effectiveType", "isDebugBrowserPropertyTriggered", "srcdoc", "aW5zLmZhc3R2aWV3LWFk", "afDeepSession", "RESULT_URL", "#psyduckpockeball", "afBrowserHookMask", "then", "setCoords", "setCookie", "MouseOver", "block", "LnJlY2xhbWE=", ".sklik", "Content-type", "chrome", "opacity", "all", ".sb-box-pubbliredazionale", "isDebugPropertyTriggered", "sendData", "LnRyYWZmaWNqdW5reS1hZA==", "YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0=", "handleLinkEvent", "fillRect", "connection", ";path=/", "mgSnapShot", "span", "add", "bottom", "tagName", "deviceMemory", "deviceorientation", "oscpu", "javaEnabled", "Reflect", "__yb", "getItem", "ZWAdobeF", "pop", "Bitstream Vera Sans Mono", "ontransitioncancel", "mmMwWLliI0fiflO&1", "cookieEnabled", "alphabetic", "acos", "sans-serif-thin", "206", "Warn", "Copy the text below to get the debug data:\n\n```\nversion: ", "pdfViewerEnabled", "#adblock-honeypot", "IS_TRUE", "afTimePerformance", "rect", "DOMRectList", "YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd", "afImgLoaded", "asinh", "DateTimeFormat", "PageOffset", "#ff2", "exp", "removeEventListener", "replace", "afCoords", "MT Extra", "style", "match", "-apple-system-body", "W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd", "ZGl2LmhvbGlkQWRz", "cookieStorage", "domExtractor", "Haettenschweiler", ".optimonk-iframe-container", "#SidebarIklan-wrapper", "Lucida Bright", "webkitTemporaryStorage", "availTop", "clientY", "reset", "atan", "async", "inverted", "undefined", "#navbar_notice_50", "#hirdetesek_box", "nodeType", "miliSecondsFromScroll", "YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ==", "#social-tools", "ops", "LnNwb25zb3JpdA==", "https://script.anura.io/result.json", "msPointerEnabled", "MouseMove", "HELV", ".mainostila", "LnJla2xhbW9zX3RhcnBhcw==", "#top100counter", "YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ==", "fillText", "YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0=", "VIDEO", "YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ==", "bind", "cosh", "isSupportHtml5", "Univers CE 55 Medium", "networkInformationSaveData", "referer", "Too high value", ".lapni-pop-over", ".yt.btn-link.btn-md.btn", "min", "none", "exitFullscreen", `
// components: `, `
// visitorId: `, '.alert-info[data-block-track*="CookieNotice"]', "#meteored_share", "SvsdsFlag", "max", "afCharging", 'div[id^="smi2adblock"]', "#back-top", "TRAJAN PRO", "kv12", "Anura response error: ", "parse", "get", "buf", "availLeft", "send", "afBrowserFlag", ".site-pub-interstitiel", "getFullYear", "POST", "Letter Gothic", "IS_NOT_NULL", "MarketGid", "components", "6547464YaBkxK", "Anura response wrong schema: ", "focus", "split", "YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ==", "filter", "I3Jla2xhbW5pLWJveA==", "siteId", "pack", "afPrimaryReferrer", "every", "font", "isJavaEnabled", "#qoo-counter", "run", "#barraPublicidade", "initialize", "src", "load", "detachEvent", "getExId", "#f2f", `
// userAgent: `, "number", "start", "1007962aUjgiG", "afRealHref", "rule", "#mgid_iframe1", "Storage", "sizes", "modulePrefix", "triangle", "getFrameElement", "callback", "map", "ontouchstart", ".ModuleTemplateCookieIndicator", "adler32", "Lucida Sans", "zoom", "createEvent", "attachEvent", "ApplePayError", "YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd", "#FollowUs", "WEBGL_debug_renderer_info", "I0FkLUNvbnRlbnQ=", "6xooWun", "#subscribe_popup", "state", "LmJveF9hZHZfYW5udW5jaQ==", "10uotCGg", "svs", "subarray", "symbol", "#divAgahi", "#widget-quan", "ratio", ".bumq", "QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd", "W2NsYXNzKj0iR29vZ2xlQWRzIl0=", "00000000", "textBaseline", "oct2chr", "mgid", "URL", "Minion Pro", "parentNode", "IS_STRING", "substring", "done", "exec", "onload", "I2FkX2Jsb2NrZXI=", "instance", "Events", "createOscillator", "options", "sendAnura", "SVGGeometryElement", "IS_NULL", "MGID", "Marlett", "fullscreenElement", "includes", "groupBitParams", "getChannelData", "topIFrame", "I3Jla2xhbWk=", "UNMASKED_VENDOR_WEBGL", "cookietest=1; SameSite=Strict;", "pow", "cookietest=", "addEventBit", "object", "isTransparent", "webkitExitFullscreen", "result", "LESS_THAN", "Unknown rule: ", "getTimePerformance", "DEFAULT", "Generator is already executing.", "data-hash", "Century", "atanh", "unstable", "running", "log1p", "evenodd", "#sovrn_container", "samsungAr", "loadScript", "onAnyImageLoaded", "getContext", "search", "(dynamic-range: ", "getElementsByTagName", "composite", "&k=", "createDynamicsCompressor", "isBrowserValid", "mozInnerScreenX", "MouseUp", "hidden", "eventMask", "setItem", "generateHash", "getNumberValueFromLocalStorage", "oncomplete", "MouseDown", "Desktop", "now", "LmFkX19tYWlu", "QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ==", "#ea_intext_div", "#mobileCatfish", ".ylamainos", "YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd", "warn", "slice", "contentWindow", "visibility", "scrollLeft", "localStorage", "stringify", "aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd", "sin", "renderedBuffer", "__firefox__", "IS_ARRAY", "setNetworkInformation", "getScreenX", "#2ff", "IS_NUMBER", ".cfa_popup", "navigator", "iPhone", "msSaveBlob", "standard", "setProperty", "response", "afHref", "storageName", ".util-bar-module-firefly-visible", "languages", "setInterval", "mozFullScreenElement", "webkitResolveLocalFileSystemURL", "iframePlacementType", "QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==", "offsetHeight"];
//       return re = function () {
//         return m
//       }, re()
//     }
//   });
//   var ga = {};
//   Z(ga, {
//     AntifraudBlock: () => Kt
//   });
//   var yt, Kt, ma = z(() => {
//     T();
//     B();
//     K();
//     yt = Se(fa());
//     xt();
//     Kt = class m extends A {
//       constructor(t) {
//         super(t), this.anuraRequestHasBeenSent = !1, this.pixalateRequestHasBeenSent = !1, this.pixalateImpressionRequestHasBeenSent = !1, this.doSaveResizeWidget = !1, this.name = "AntifraudBlock", this.addHook("beforeInitHooks", this.beforeInitHook.bind(this)), this.addHook("afterLoadNewsHooks", this.afterLoadNewsHook.bind(this)), this.addHook("afterInitHooks", this.afterInitHook.bind(this)), this.addHook("afterSendCappingHooks", this.afterSendCappingHooks.bind(this))
//       }
//       getAntifraudParams(t, e) {
//         if (this.app.allowReturnParams === !1) return "";
//         e = e || this.app.context.document.createElement("A"), t = t || this.app.context.document.createEvent("MouseEvent");
//         let i = e["data-hash"] || e.getAttribute("data-hash") || "";
//         return this.antifraud.generateHash(t, e, i)
//       }
//       async sendAnuraRequest(t, e) {
//         this.anuraRequestHasBeenSent = !0;
//         let i = await this.anura.send(String(this.getSourceId(t)), e),
//           s = await this.anura.fetchStatus(i),
//           r = {
//             composite: this.app.getWidgetValue("id", this.app.getWidgetValue("id", this.app.widgetParams.WIDGET.id)),
//             result: s,
//             showHash: t
//           };
//         return this.app.request.beacon(`anura#${t}#${e}`, "https://" + this.app.getWidgetValue("countersDomain", this.app.widgetParams.WIDGET.countersDomain) + "/anura", [`composite=${r.composite}`, `result=${r.result}`, `showHash=${r.showHash}`], {
//           unique: !0
//         }), s
//       }
//       beforeInitHook() {
//         this.initSnapShot();
//         let t = this.app.getWidgetValue("id", this.app.widgetParams.WIDGET.id),
//           e = this.app.getWidgetValue("informerPrefix", this.app.widgetParams.WIDGET.informerPrefix),
//           i = this.app.getWidgetValue("loggerEnabled", this.app.widgetParams.WIDGET.loggerEnabled) ? this.app.context[e + "InfC" + t + "Logger"] : null,
//           s = new yt.BaseConfiguration({
//             logger: i,
//             afShortEnabled: !!this.app.getWidgetValue("afShortEnabled", this.app.widgetParams.WIDGET.afShortEnabled),
//             modulePrefix: this.app.getWidgetValue("modulePrefix", this.app.widgetParams.WIDGET.modulePrefix),
//             id: this.app.id.toString(),
//             context: this.app.context,
//             root: this.app.root,
//             iframePlacementType: this.app.iframePlacementType,
//             cookieStorage: this.app.cookieBlock,
//             useTimePerformance: this.app.getWidgetValue("useTimePerformance", this.app.widgetParams.WIDGET.useTimePerformance),
//             browserProperties: this.app.servicerData.brp || []
//           });
//         this.antifraud = new yt.AntiFraud(s), this.anura = new yt.Anura({
//           widgetPrefix: e + "InfC" + t,
//           context: this.app.context
//         }), this.pixalate = new yt.Pixalate({
//           context: this.app.context
//         }), this.app.allowReturnParams = !1, this.app.addEvent(this.app.context, "beforeunload", this.linkBeforeunloadHandler.bind(this)), this.setIsBlurEventSupported(this.app.root), this.setTransitionType()
//       }
//       afterLoadNewsHook() {
//         let t = this.app.root;
//         this.app.addEvent(t, "mousedown", this.linkMouseDownHandler.bind(this)), this.app.addEvent(t, "mouseup", this.linkClickHandler.bind(this)), this.app.addEvent(t, "mouseover", this.linkMouseOverHandler.bind(this)), this.app.addEvent(t, "mousemove", this.linkMouseMoveHandler.bind(this)), this.app.addEvent(t, "touchstart", this.linkTouchStartHandler.bind(this)), this.app.addEvent(t, "touchend", this.linkTouchEndHandler.bind(this));
//         let e = t.querySelector("a[data-hash]");
//         e && this.app.addEvent(e, "focus", this.linkFocusHandler.bind(this)), this.antifraud.setWidgetEvents()
//       }
//       afterSendCappingHooks() {
//         let t = this.app.root,
//           e = this.app.getWidgetValue("pixelateImpressions", this.app.widgetParams.WIDGET.pixelateImpressions);
//         if (e !== 0 && e >= this.app.random(1, 100)) {
//           let i = !1,
//             s = t.querySelectorAll(".mgline"),
//             r = s.length ? s[0] : null;
//           if (r) {
//             let p = r.querySelector("a");
//             if (i = p.href.includes("/ghits/"), i && !this.pixalateImpressionRequestHasBeenSent) {
//               let u = p.getAttribute("data-hash");
//               this.sendPixalateRequest(r, this.getQueryParam(p, "pubsrcid"), u, m.AFRD_IMPRESSION)
//             }
//           }
//         }
//         setTimeout(() => {
//           typeof ResizeObserver < "u" && new ResizeObserver(() => {
//             this.doSaveResizeWidget ? this.antifraud.setIsWidgetResize(!0) : this.doSaveResizeWidget = !0
//           }).observe(t)
//         }, 1e3)
//       }
//       afterInitHook() {
//         this.antifraud.initialize()
//       }
//       async initSnapShot() {
//         if (this.app.context.localStorage) {
//           let t = Math.round(new Date().getTime() / 1e3),
//             e = Number(this.app.context.localStorage.getItem("mgSnapShotExpired"));
//           if ((e === null || t > e) && (this.app.context.localStorage.removeItem("mgSnapShot"), this.app.context.localStorage.removeItem("mgSnapShotExpired")), this.app.context.localStorage.getItem("mgSnapShot") === null) {
//             let i = (await yt.Snapshot.generate()).visitorId,
//               s = Math.round(new Date().getTime() / 1e3 + 3 * 24 * 60 * 60);
//             this.app.context.localStorage.setItem("mgSnapShot", i), this.app.context.localStorage.setItem("mgSnapShotExpired", s.toString())
//           }
//         }
//       }
//       linkClickHandler(t) {
//         let e = this.handleEvent(t, 0);
//         if (e) {
//           let i = e.getAttribute("data-hash");
//           this.app.teaserData[i] && [F.Wages, F.Exchange].indexOf(this.app.teaserData[i].coopType) > -1 && this.addIntegrations(i, e), this.app.antifraudStatisticsBlock.setIsWidgetOverlapped(this.isWidgetOverlapped(e));
//           let r = e.parentElement;
//           r && r.className === "mglbtn" && this.app.context.localStorage.setItem("callToActionClicked", "1"), this.handleUpdatedTeaserClick(e), setTimeout(() => {
//             this.app.allowReturnParams = !1, this.reWriteHref(t, e)
//           }, 100)
//         }
//       }
//       linkMouseOverHandler(t) {
//         this.handleEvent(t, yt.EventMask.MouseOver)
//       }
//       linkMouseMoveHandler(t) {
//         this.handleEvent(t, yt.EventMask.MouseMove)
//       }
//       linkTouchStartHandler(t) {
//         this.handleEvent(t, yt.EventMask.TouchStart)
//       }
//       linkTouchEndHandler(t) {
//         this.handleEvent(t, yt.EventMask.TouchEnd)
//       }
//       linkMouseDownHandler(t) {
//         this.handleEvent(t, yt.EventMask.MouseDown)
//       }
//       linkFocusHandler(t) {
//         this.handleEvent(t, yt.EventMask.Focus)
//       }
//       handleEvent(t, e) {
//         t || (t = this.app.context.event), t.target || (t.target = t.srcElement), this.app.allowReturnParams = !0;
//         let i = t.target;
//         return i.tagName !== "A" && (i = this.app.getParentLink(i), !i) || !i.hasAttribute("data-hash") ? null : (this.antifraud.addEventBit(e), this.reWriteHref(t, i), i)
//       }
//       reWriteHref(t, e) {
//         t || (t = this.app.context.event);
//         let i = e["data-hash"] || e.getAttribute("data-hash");
//         i && (e[this.app.hrefAttr] = this.app.prepareNiceHref(i, t, e))
//       }
//       addIntegrations(t, e) {
//         if ((this.app.servicerData.anura || 0) > this.app.random(1, 100) && !this.anuraRequestHasBeenSent && this.sendAnuraRequest(t, this.getQueryParam(e, "pubsrcid")).catch(i => {
//           this.app.log("Anura request failed", "warn", i)
//         }), this.app.getWidgetValue("usePixelate", this.app.widgetParams.WIDGET.usePixelate) && !this.pixalateRequestHasBeenSent) {
//           let i = !1,
//             s = this.app.findClosest(e, "div[data-i]");
//           s && (i = s.querySelector("a").href.indexOf("/ghits/") !== -1), i && this.sentShowHash !== t && this.sendPixalateRequest(s, this.getQueryParam(e, "pubsrcid"), t, m.AFRD_CLICK)
//         }
//       }
//       sendPixalateRequest(t, e, i, s) {
//         let r = this.app.getMuid(),
//           p = 0,
//           u = 0,
//           d = 0;
//         if (t) {
//           let f = t.getAttribute("data-i"),
//             b = t.querySelector(".image-with-text");
//           if (b && (p = Math.floor(b.offsetWidth), u = Math.floor(b.offsetHeight)), f === i) {
//             let k = t.querySelectorAll("[data-i]");
//             for (let S = 0; S < k.length; S++) {
//               let y = k[S];
//               if (i !== y.getAttribute("data-i")) {
//                 d = parseInt(y.getAttribute("data-i"));
//                 break
//               }
//             }
//           } else d = parseInt(f)
//         }
//         this.pixalate.send({
//           plid: d,
//           publisherId: this.app.getWidgetValue("publisherId", this.app.widgetParams.WIDGET.publisherId),
//           siteId: this.app.getWidgetValue("siteId", this.app.widgetParams.WIDGET.siteId),
//           kv1: p + "x" + u,
//           kv3: r,
//           kv5: e,
//           kv6: s,
//           kv7: this.app.getWidgetValue("clientId", this.app.widgetParams.WIDGET.clientId),
//           kv11: i,
//           kv12: this.app.servicerData.rid
//         }), s === m.AFRD_CLICK && (this.pixalateRequestHasBeenSent = !0, this.sentShowHash = i, this.app.antifraudStatisticsBlock.setPixalateTriggered()), s === m.AFRD_IMPRESSION && (this.pixalateImpressionRequestHasBeenSent = !0)
//       }
//       getSourceId(t) {
//         let e = this.app.getWidgetValue("hasNewsPart", this.app.widgetParams.WIDGET.hasNewsPart) ? "ni" + this.app.getWidgetValue("newsPartUid", this.app.widgetParams.WIDGET.newsPartUid) : "ni",
//           i = this.app.getWidgetValue("hasGoodsPart", this.app.widgetParams.WIDGET.hasGoodsPart) ? this.app.getWidgetValue("goodsPartUid", this.app.widgetParams.WIDGET.goodsPartUid) : "";
//         return this.app.teaserData[t].coopType === F.Exchange ? e : i
//       }
//       getQueryParam(t, e) {
//         let i = t.search.substring(1).split("&"),
//           s = "";
//         for (let r = 0; r < i.length; r++) {
//           let p = i[r].split("=");
//           if (p[0] === e) {
//             s = decodeURIComponent(p[1]);
//             break
//           }
//         }
//         return s
//       }
//       linkBeforeunloadHandler(t) {
//         this.app.context.localStorage.setItem("isTriggeredBeforeunloadEvent", "1")
//       }
//       setIsBlurEventSupported(t) {
//         if (t) {
//           let e = "onblur",
//             i = e in t;
//           i || (t.setAttribute(e, "return;"), i = typeof t[e] == "function"), e in document.documentElement || t.removeAttribute(e), this.app.context.localStorage.setItem("isSupportBlurEvent", i ? "1" : "0")
//         }
//       }
//       setTransitionType() {
//         if (performance.getEntriesByType("navigation")) {
//           let t = performance.getEntriesByType("navigation")[0];
//           t && this.app.context.localStorage.setItem("transitionType", t.entryType)
//         }
//       }
//       isWidgetOverlapped(t) {
//         let e = t.getBoundingClientRect(),
//           i = [{
//             x: e.left,
//             y: e.top
//           }, {
//             x: e.right,
//             y: e.top
//           }, {
//             x: e.left,
//             y: e.bottom
//           }, {
//             x: e.right,
//             y: e.bottom
//           }, {
//             x: e.left + e.width / 2,
//             y: e.top + e.height / 2
//           }];
//         for (let s of i) {
//           let r = document.elementFromPoint(s.x, s.y);
//           if (r && r !== t && !t.contains(r) && r !== document.body && r !== document.documentElement) return !0
//         }
//         return !1
//       }
//       handleUpdatedTeaserClick(t) {
//         let e = t.getAttribute("data-refreshed");
//         this.app.antifraudStatisticsBlock.setIsRefreshedTeaserClicked(!!e)
//       }
//     };
//     Kt.AFRD_CLICK = "afrd_click";
//     Kt.AFRD_IMPRESSION = "afrd_imp"
//   });
//   var xa = {};
//   Z(xa, {
//     LazyLoadBlock: () => fi
//   });
//   var fi, wa = z(() => {
//     T();
//     B();
//     K();
//     fi = class extends A {
//       constructor(t) {
//         super(t), this.name = "LazyLoadBlock"
//       }
//       waitForVisibility() {
//         return new Promise(t => {
//           if (this.app.context.IntersectionObserver) {
//             let e = (this.app.widgetParams.WIDGET.lazyCustomMargin > 0 ? this.app.widgetParams.WIDGET.lazyCustomMargin : this.app.globalSettings.widget_lazy_load_margin) || 100,
//               i = new IntersectionObserver(s => {
//                 s.forEach(r => {
//                   r.isIntersecting && (this.app.log(`${this.name}. Margin: ${e}. Starting load widget...`), i.unobserve(r.target), i.disconnect(), t())
//                 })
//               }, {
//                 threshold: [0],
//                 rootMargin: `${e}px`
//               });
//             i.observe(this.app.isShadowRoot() ? this.app.root.parentNode.host : this.app.root)
//           } else t()
//         })
//       }
//     }
//   });
//   var ya = {};
//   Z(ya, {
//     FillCardLikesBlock: () => gi
//   });
//   var gi, ba = z(() => {
//     T();
//     B();
//     K();
//     gi = class extends A {
//       constructor(t) {
//         super(t), this.name = "FillCardLikesBlock", this.addHook("afterLoadNewsHooks", this.fillCardLikes)
//       }
//       fillCardLikes() {
//         let t = this.app.root.querySelectorAll(".mgbottom_media");
//         this.app.root.querySelectorAll(".card-media").length && (this.setTitleMaxHeight(), this.setMoreBtnText(), this.app.context.addEventListener("resize", () => {
//           this.setTitleMaxHeight()
//         }));
//         for (let i = 0; i < t.length; i++) {
//           let s = this.app.random(50, 900),
//             r = t[i],
//             p = r.querySelectorAll(".mgmedia__metrics-value"),
//             u = r.querySelector(".mgbtn_media"),
//             d = p[0],
//             f = p[1],
//             b = p[2],
//             k = () => {
//               d.textContent = String(s + 1);
//               let S = u.querySelectorAll("svg path");
//               for (let y = 0; y < S.length; y++) S[y].style.fill = "#000";
//               u.style.cursor = "default", u.style.pointerEvents = "none", u.classList.add("mgbtn_media-active"), u.removeEventListener("click", k, !1)
//             };
//           d && (d.textContent = String(s)), f && (f.textContent = String(Math.round(s / 4))), b && (b.textContent = String(Math.round(s / 3))), u.style.cursor = "pointer", u.style.pointerEvents = "initial", u.addEventListener("click", k, !1)
//         }
//       }
//       setTitleMaxHeight() {
//         let t = this.app.root.querySelectorAll(".mctitle");
//         if (t.length) {
//           let e = this.findMaxHeight(t);
//           for (let i = 0; i <= t.length - 1; i++) t[i].style.minHeight = e
//         }
//       }
//       findMaxHeight(t) {
//         let e = [];
//         for (let s = 0; s <= t.length - 1; s++) {
//           let r = t[s].querySelector(".mctitle-link").offsetHeight;
//           e.push(r)
//         }
//         return Math.max.apply(null, e) + "px"
//       }
//       setMoreBtnText() {
//         let t = this.app.root.querySelectorAll(".mcmore a");
//         if (t.length)
//           for (let e = 0; e <= t.length - 1; e++) t[e].innerHTML = this.app.getTranslation("[INFORMER_BUTTON_MORE]") + "..."
//       }
//     }
//   });
//   var va = {};
//   Z(va, {
//     AccidentalClicksBlock: () => mi
//   });
//   var mi, ka = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     mi = class extends A {
//       constructor(t) {
//         super(t), this.name = "AccidentalClicksBlock", this.app.accidentalClicksHandler = this.onClick.bind(this), this.app.addClickHandler(this.app.clickHandlerList.accidentalClicks.handler, this.app.clickHandlerList.accidentalClicks.priority), this.accidentalClicksDelay = (parseInt(this.app.globalSettings.accidental_clicks_delay) || 5) * 1e3, this.accidentalClicksDisableTypes = this.app.widgetParams.WIDGET.widgetAccidentalClicks.split(","), this.teasersClickTimes = {}
//       }
//       onClick(t, e) {
//         if (e.button === 2) return !0;
//         let i = t.getAttribute("data-hash"),
//           s = new Date().getTime();
//         if (this.app.isEnabledDoubleClick() || typeof this.app.servicerData.dc < "u" && i in this.app.hashTimer && s - this.app.hashTimer[i] < this.app.servicerData.dc) return !0;
//         switch (this.app.teaserData[i].coopType) {
//           case F.Wages:
//             if (this.accidentalClicksDisableTypes.indexOf("wages") == -1) return !0;
//             break;
//           case F.Exchange:
//             if (this.accidentalClicksDisableTypes.indexOf("exchange") == -1) return !0;
//             break;
//           case F.InternalExchange:
//             if (this.accidentalClicksDisableTypes.indexOf("int_exchange") == -1) return !0;
//             break;
//           default:
//             return !0
//         }
//         return this.teasersClickTimes.hasOwnProperty(i) ? new Date().getTime() - this.teasersClickTimes[i] <= this.accidentalClicksDelay ? (e.preventDefault(), this.app.doubleClickType = "accidental", this.app.doubleClickHandler(t), !1) : (this.teasersClickTimes[i] = new Date().getTime(), !0) : (this.teasersClickTimes[i] = new Date().getTime(), !0)
//       }
//     }
//   });
//   var Ia = {};
//   Z(Ia, {
//     ActivateDelayBlock: () => xi
//   });
//   var xi, Sa = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     xi = class extends A {
//       constructor(t) {
//         super(t), this.name = "ActivateDelayBlock", this.app.clickableDelay = !1, this.eventDisabled = !1, this.addHook("afterLoadNewsHooks", this.init), this.app.activateDelayLinkHandler = this.onClick.bind(this)
//       }
//       isCloseLink(t) {
//         return t.classList.contains("mg-close-button-div-inner")
//       }
//       isWagesLink(t) {
//         if (!t) return !1;
//         let e = t.getAttribute("data-hash");
//         return this.app.teaserData[e] && this.app.teaserData[e].coopType === F.Wages
//       }
//       init() {
//         if (this.isInited) return;
//         this.isInited = !0;
//         let t = Number(this.app.widgetParams.WIDGET.activateDelay);
//         this.app.widgetParams.WIDGET.clickableDelay && (this.app.clickableDelay = !0), this.app.addClickHandler(this.app.clickHandlerList.activateDelayLink.handler, this.app.clickHandlerList.activateDelayLink.priority), this.app.context.setTimeout(() => {
//           this.eventDisabled = !0, this.app.linksBlocked = !1, this.app.clickableDelay = !1
//         }, t)
//       }
//       onClick(t, e) {
//         return this.eventDisabled || this.app.clickableDelay && this.isWagesLink(t) || this.isCloseLink(t) || typeof this.app.servicerData.dc < "u" || this.app.isAzerionTeaser(t) ? !0 : (this.app.doubleClickType = "delay", this.app.doubleClickHandler(t), this.app.linksBlocked = !0, e.preventDefault(), !1)
//       }
//     }
//   });
//   var Pa = {};
//   Z(Pa, {
//     HideDescriptionBlock: () => wi
//   });
//   var wi, Da = z(() => {
//     T();
//     B();
//     K();
//     wi = class extends A {
//       constructor(t) {
//         super(t), this.name = "HideDescriptionBlock", typeof this.app.afterAutoplacementHooks < "u" && this.app.widgetConstructorData.autoplacement !== "off" ? this.addHook("afterAutoplacementHooks", this.hideDescription) : this.addHook("afterLoadNewsHooks", this.hideDescription)
//       }
//       hideDescription() {
//         let t = this.app.root.querySelector(".mcdesc");
//         if (!t) return;
//         let e = this.app.root.querySelector(".mcdesc > a"),
//           i = this.app.root.querySelector(".mglbtn"),
//           s = this.app.root.querySelector(".mglbtn > a"),
//           r = this.app.root.querySelector("div.mcimg"),
//           p = this.app.root.querySelector(".image-with-text"),
//           u = e.scrollHeight - e.clientHeight,
//           d = i.clientWidth,
//           f = r.clientWidth,
//           b = p.clientWidth,
//           k = b - f - 15 - d - 15;
//         s && k < 0 && (b !== f ? s.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>" : i.clientHeight > 75 && (s.innerHTML = this.app.getTranslation("[INFORMER_CTA_LEARN_MORE]") + "<span></span>"), d < 135 && (s.innerHTML = "<span></span>")), u > 1 && (t.style.display = "none")
//       }
//     }
//   });
//   var Ea = {};
//   Z(Ea, {
//     CollectViewDataBlock: () => yi
//   });
//   var St, yi, Ca = z(() => {
//     T();
//     B();
//     xt();
//     K();
//     (function (m) {
//       m.widgetOutOfSight = "widget_out_of_sight", m.leavePage = "user_change_tab_or_close_site", m.widgetOverLimitTime = "widget_over_limit_time", m.siteOverLimitTime = "site_over_limit_time", m.newWidgetPage = "new_widget_page", m.newSitePage = "new_site_page"
//     })(St || (St = {}));
//     yi = class extends A {
//       constructor(t) {
//         super(t), this.keyHash = "_mgUniqueHash", this.keyUserPages = "_mgUserPages", this.timeOutLimit = 30, this.viewMinTime = 1, this.widget = {
//           isVisible: !1,
//           isStartView: !1,
//           startingViewTime: 0,
//           requestsList: []
//         }, this.teasersList = [], this.teasersVisibleList = [], this.acceptableTeaserTypes = [`type-${F.Wages}`, `type-${F.Azerion}`, `type-${F.InternalExchange}`, "mgline-banner"], this.acceptableSiteEvents = [St.leavePage, St.newSitePage, St.siteOverLimitTime], this.name = "CollectViewDataBlock", !this.app.isAmp() && !this.app.isIframe() && typeof this.app.context.IntersectionObserver == "function" && this.init()
//       }
//       init() {
//         if (this.currentPath = this.app.context.document.location.pathname, typeof this.app.context[this.keyUserPages] > "u") {
//           this.app.context[this.keyUserPages] = [];
//           let t = Math.round(this.app.context.performance?.timeOrigin) || this.app.context.performance.timing.navigationStart,
//             e = {
//               pathname: this.currentPath,
//               href: this.app.context.document.location.href,
//               startingViewTime: t,
//               isOverLimitTime: !1
//             };
//           this.app.context[this.keyUserPages].push(e)
//         }
//         setInterval(() => {
//           this.detectUrlChanged(), this.detectTimeOverLimit()
//         }, 1e3), this.setupLeavePageEvents(), this.addHook("afterLoadNewsHooks", this.startObserving)
//       }
//       detectUrlChanged() {
//         if (this.currentPath !== this.app.context.document.location.pathname) {
//           this.sendAnalyticsData(St.newSitePage), this.currentPath = this.app.context.document.location.pathname;
//           let t = this.getCurrentPage();
//           if (!t) {
//             let e = {
//               pathname: this.currentPath,
//               href: this.app.context.document.location.href,
//               startingViewTime: new Date().getTime(),
//               isOverLimitTime: !1
//             };
//             this.app.context[this.keyUserPages].push(e)
//           }
//           t && t.startingViewTime === 0 && this.updateCurrentUserPage({
//             startingViewTime: new Date().getTime(),
//             href: this.app.context.document.location.href
//           })
//         }
//       }
//       detectTimeOverLimit() {
//         let t = this.getCurrentPage();
//         t && !t.isOverLimitTime && t.startingViewTime > 0 && this.isTimeOverLimit(new Date().getTime() - t.startingViewTime) && (this.updateCurrentUserPage({
//           isOverLimitTime: !0
//         }), this.sendAnalyticsData(St.siteOverLimitTime)), this.widget.isStartView && this.isTimeOverLimit(new Date().getTime() - this.widget.startingViewTime) && this.sendAnalyticsData(St.widgetOverLimitTime)
//       }
//       setupLeavePageEvents() {
//         let {
//           hidden: t,
//           visibilityChange: e
//         } = this.app.utils.getLeavePageValue();
//         this.app.context.document.addEventListener(e, () => {
//           if (this.app.context.document[t] && this.sendAnalyticsData(St.leavePage), this.widget.isVisible && !this.app.context.document[t] && this.restartTeasersViewTime(), !this.app.context.document[t]) {
//             let i = this.getCurrentPage();
//             i && i.startingViewTime === 0 && this.updateCurrentUserPage({
//               startingViewTime: new Date().getTime()
//             })
//           }
//         }), this.app.context.addEventListener("beforeunload", () => {
//           this.sendAnalyticsData(St.leavePage)
//         })
//       }
//       startObserving() {
//         let t = {
//           page: this.app.pagesServicerData.length,
//           requestId: this.app.servicerData.rid
//         };
//         this.widget.requestsList.push(t);
//         let e = typeof this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] < "u";
//         e && this.widget.isStartView && this.app.widgetParams.WIDGET.type !== "in-site-notification" && (this.sendAnalyticsData(St.newWidgetPage), this.teasersVisibleList.length ? this.restartTeasersViewTime() : (this.widget.isStartView = !0, this.widget.startingViewTime = new Date().getTime())), e || (this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId] = this.app.generateHash(), this.addHook("observerTeasersHooks", this.teasersObserving), ["mobile-widget", "in-site-notification", "passage", "interstitial"].indexOf(this.app.widgetParams.WIDGET.type) === -1 && this.addHook("observerWidgetHooks", this.widgetObserving))
//       }
//       teasersObserving(t, e, i, s, r) {
//         let p, u;
//         if (s && r && (p = r + "-" + s, u = this.teasersList.filter(d => d.order === p)[0]), i === 0 && p && u && u.isVisible && (this.teasersList = this.teasersList.map(d => {
//           if (d.order === p) {
//             let f = new Date().getTime() - d.startingViewTime,
//               b = d.viewTime ? d.viewTime + f : f;
//             return {
//               ...d,
//               viewTime: b,
//               isVisible: !1,
//               startingViewTime: 0
//             }
//           } else return d
//         })), i > .5 && (this.app.widgetParams.WIDGET.type !== "mobile-widget" || this.app.widgetParams.WIDGET.type === "mobile-widget" && this.app.root.parentElement.className.indexOf("mg-show") >= 0)) {
//           if (this.widget.isVisible = !0, this.widget.isStartView || (this.widget.isStartView = !0, this.widget.startingViewTime = new Date().getTime()), !u && p && t && s && r) {
//             let d = {
//               order: p,
//               iteration: s,
//               page: r,
//               isVisible: !0,
//               startingViewTime: new Date().getTime(),
//               viewTime: 0,
//               requestId: this.widget.requestsList.filter(f => f.page === r)[0]?.requestId,
//               showHash: t.dataset.i || "",
//               className: t.className
//             };
//             this.teasersList.push(d)
//           }
//           u && !u.isVisible && p && (this.teasersList = this.teasersList.map(d => d.order === p ? {
//             ...d,
//             isVisible: !0,
//             startingViewTime: new Date().getTime()
//           } : d))
//         }
//         this.teasersList.length && this.teasersList.every(d => !d.isVisible) && (["mobile-widget", "passage", "interstitial"].indexOf(this.app.widgetParams.WIDGET.type) !== -1 || this.app.widgetParams.WIDGET.type === "in-site-notification" && this.app.isClosedInSiteWidget) && (this.sendAnalyticsData(St.widgetOutOfSight), this.widget.isVisible = !1)
//       }
//       widgetObserving(t, e) {
//         typeof t < "u" && !t && (this.sendAnalyticsData(St.widgetOutOfSight), this.widget.isVisible = !1)
//       }
//       sendAnalyticsData(t) {
//         let e;
//         if (this.widget.isStartView) {
//           let r = new Date().getTime() - this.widget.startingViewTime;
//           this.isTimeMoreMinLimit(r) && (e = e || {}, e.widgetData = this.preparedWidgetData(t)), this.widget.isStartView = !1, this.widget.startingViewTime = 0
//         }
//         if (this.teasersList.some(r => r.viewTime > 0 || r.isVisible)) {
//           this.teasersVisibleList = this.teasersList.filter(p => p.isVisible);
//           let r = this.preparedTeasersData();
//           r.length && (e = e || {}, e.teasersData = r), this.resetTeasersViewTime()
//         }
//         let i = this.getCurrentPage(),
//           s = this.acceptableSiteEvents.some(r => r === t);
//         if (i && s && i.startingViewTime > 0) {
//           let r = new Date().getTime() - i.startingViewTime;
//           this.isTimeMoreMinLimit(r) && (e = e || {}, e.userData = this.preparedUserData(i)), this.updateCurrentUserPage({
//             startingViewTime: 0
//           })
//         }
//         if (e && Object.keys(e).length && this.isMuidn()) {
//           let {
//             tt: r,
//             dt: p,
//             brid: u
//           } = this.app.servicerData, {
//             implVersion: d
//           } = this.app.pageViewPixelBlock?.getPageDataParams() || {};
//           e.eventName = t, e.muidn = this.app.getMuid(), d && (e.implVersion = d), r && (e.trafficType = r), p && (e.device = p), u && (e.browserId = u);
//           let f = new Blob([JSON.stringify(e)], {
//             type: "text/plain"
//           });
//           this.app.request.beaconBlob("visibility", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/vz", f, {})
//         }
//       }
//       preparedWidgetData(t) {
//         let e = this.app.calculateSessionsBlock.getSessionId(),
//           i = {
//             compositeId: this.app.id,
//             uniqueHash: this.app.context[this.keyHash + this.app.id + "_" + this.app.uniqId],
//             visibleTime: new Date().getTime() - this.widget.startingViewTime
//           };
//         e && (i.sessionId = e);
//         let s = this.teasersList.filter(r => r.viewTime > 0 || r.isVisible).map(r => r.requestId).filter((r, p, u) => u.indexOf(r) === p);
//         return t === St.newWidgetPage ? (i.uuid = this.widget.requestsList[this.widget.requestsList.length - 2]?.requestId, s.length >= 2 && (i.firstUuid = this.widget.requestsList[0]?.requestId), i) : (s.length === 1 ? i.uuid = s[0] : s.length >= 2 ? (i.uuid = this.widget.requestsList[this.widget.requestsList.length - 1]?.requestId, i.firstUuid = this.widget.requestsList[0]?.requestId) : i.uuid = this.app.servicerData.rid, i)
//       }
//       preparedTeasersData() {
//         return this.teasersList.map(t => {
//           if (t.isVisible) {
//             let e = new Date().getTime() - t.startingViewTime,
//               i = t.viewTime ? t.viewTime + e : e;
//             return {
//               ...t,
//               viewTime: i
//             }
//           } else return t
//         }).filter(t => this.isTimeMoreMinLimit(t.viewTime) && this.acceptableTeaserTypes.some(e => t.className.indexOf(e) !== -1) && t.showHash.length && t.showHash !== "undefined").map(t => ({
//           compositeId: this.app.id,
//           showHash: t.showHash,
//           uuid: t.requestId,
//           visibleTime: t.viewTime
//         }))
//       }
//       preparedUserData(t) {
//         let e = new Date().getTime() - t.startingViewTime;
//         return {
//           pageViewId: this.getPvid(),
//           pageUrl: t.href,
//           visibleTime: e
//         }
//       }
//       resetTeasersViewTime() {
//         this.teasersList = this.teasersList.map(t => ({
//           ...t,
//           viewTime: 0,
//           isVisible: !1,
//           startingViewTime: 0
//         }))
//       }
//       restartTeasersViewTime() {
//         this.teasersVisibleList.forEach(t => {
//           this.teasersObserving(null, !0, 1, t.iteration, t.page)
//         }), this.teasersVisibleList = []
//       }
//       updateCurrentUserPage(t) {
//         this.app.context[this.keyUserPages] = this.app.context[this.keyUserPages].map(e => e.pathname === this.currentPath ? {
//           ...e,
//           ...t
//         } : e)
//       }
//       isMuidn() {
//         return !!this.app.getMuid().length
//       }
//       isTimeOverLimit(t) {
//         return t > this.timeOutLimit * 6e4
//       }
//       isTimeMoreMinLimit(t) {
//         return t > this.viewMinTime * 1e3
//       }
//       getCurrentPage() {
//         return this.app.context[this.keyUserPages].filter(t => t.pathname === this.currentPath)[0]
//       }
//       getPvid() {
//         let t = "";
//         try {
//           t = this.app.pvid || this.app.context._mgPvid || this.app.context.localStorage.getItem("_mgPvid") || ""
//         } catch { }
//         return t
//       }
//     }
//   });
//   var Ta = {};
//   Z(Ta, {
//     RtbBlock: () => bi
//   });
//   var bi, Ba = z(() => {
//     T();
//     B();
//     K();
//     bi = class extends A {
//       constructor(t) {
//         super(t), this.name = "RtbBlock", this.addHook("afterLoadNewsHooks", this.cmPixelLoad)
//       }
//       cmPixelLoad() {
//         if (!this.app.context["i.js.loaded"] && this.app.cookieMatchingDomain.length) {
//           this.app.context["i.js.loaded"] = !0;
//           let t = this.app.webProtocol + "//" + this.app.cookieMatchingDomain + "/i.js?",
//             e = typeof this.app.realRoot < "u" ? this.app.realRoot : this.app.root,
//             i = {},
//             s = this.app.getMuid();
//           s.length && (i.muid = s), i.cbuster = this.app.getCbusterParameter(), t += Object.keys(i).map(p => p + "=" + encodeURIComponent(i[p])).join("&");
//           let r = {
//             charset: "utf-8",
//             onerror: () => {
//               this.app.context["i.js.loaded"] = !1;
//               let p = `${this.name} failed to load i.js`;
//               this.app.log(p), this.app.debugBlock.sendData(p)
//             },
//             dest: e.parentNode
//           };
//           this.app.request.script("i.js", t, {}, r)
//         }
//       }
//     }
//   });
//   var Wa = {};
//   Z(Wa, {
//     ObserverBlock: () => vi
//   });
//   var vi, La = z(() => {
//     T();
//     B();
//     K();
//     vi = class extends A {
//       constructor(t) {
//         super(t), this.name = "ObserverBlock", this.addHook("afterLoadNewsHooks", this.initWidgetObserver)
//       }
//       initWidgetObserver() {
//         if (this.app.context.IntersectionObserver) {
//           this.app.widgetObserver = new IntersectionObserver(e => {
//             e.forEach(i => {
//               let s = i.isIntersecting ? "shown" : "hidden";
//               if (i.target == this.app.root) this.app.log(`Observer. Widget ${s}. Ratio: ${i.intersectionRatio}`), this.app.lifeCycleBlock.processHooks("observerWidgetHooks", [i.isIntersecting, i.intersectionRatio]);
//               else
//                 for (let r = 0; r < this.app.observerTeasersHooks.length; r++) {
//                   let p = 1,
//                     u = 1;
//                   try {
//                     (i.target instanceof HTMLElement || i.target instanceof HTMLDivElement) && (p = this.app.teaserData[i.target.dataset.i].iteration, u = this.app.teaserData[i.target.dataset.i].page)
//                   } catch { }
//                   this.app.log(`Observer. Teaser[${u}, ${p}] ${s}. 
//                 Ratio: ${i.intersectionRatio}`), this.app.lifeCycleBlock.processHooks("observerTeasersHooks", [i.target, i.isIntersecting, i.intersectionRatio, p, u])
//                 }
//             })
//           }, {
//             threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
//           }), this.app.widgetObserver.observe(this.app.root);
//           let t = [].slice.call(this.app.root.getElementsByClassName("mgline"));
//           for (let e of t) e.dataset.observingStart || (e.dataset.observingStart = "0", e.dataset.observingTime = "0", this.app.widgetObserver.observe(e))
//         }
//       }
//     }
//   });
//   var Aa = {};
//   Z(Aa, {
//     RefactoredMonitorBlock: () => ki
//   });
//   var ki, _a = z(() => {
//     T();
//     B();
//     K();
//     xt();
//     ki = class extends A {
//       constructor(t) {
//         super(t), this.regAllowedHash = /([A-Za-z0-9\-_\*]{64})/, this.teasersDataList = [], this.firstByType = {}, this.monitorDispatcher = null, this.baseUrl = `${this.app.webProtocol}//${this.app.widgetParams.WIDGET.countersDomain}/`, this.impressionTracked = !1, this.name = "RefactoredMonitorBlock", this.addHook("afterLoadNewsHooks", this.init)
//       }
//       init() {
//         this.monitorDispatcher || (this.versionCapping = typeof this.app.context.IntersectionObserver == "function" && !this.app.omidBlock ? 3 : 2, this.thresholdRatio = Number(this.app.globalSettings.capping_observer_threshold) || .5, this.thresholdTime = Number(this.app.globalSettings.capping_observer_time) || 1e3, this.versionCapping === 3 ? this.initMonitorByObserver() : this.initMonitorByTimeout())
//       }
//       initMonitorByObserver() {
//         this.monitorDispatcher = this.debounce(() => this.prepareCappingData()), this.addHook("observerTeasersHooks", this.teaserObserver)
//       }
//       initMonitorByTimeout() {
//         let t = () => {
//           let e = this.app.root.getElementsByClassName("mgline");
//           for (let i = 0; i < e.length; i++) {
//             let s = e[i];
//             if (s.dataset.observingStart || (s.dataset.observingStart = "0", s.dataset.observingTime = "0"), this.isAllowedMonitorTeaser(s)) {
//               let r = this.app.utils.elementViewportIntersection(s),
//                 p = this.getTeaserObservingTime(s, r);
//               p >= this.thresholdTime && this.setTeaserShowed(s, p)
//             }
//           }
//           this.prepareCappingData(), this.monitorDispatcher()
//         };
//         this.monitorDispatcher = () => setTimeout(t, this.thresholdTime), this.monitorDispatcher()
//       }
//       teaserObserver(t, e, i, s, r) {
//         if (this.isAllowedMonitorTeaser(t)) {
//           let p = this.getTeaserObservingTime(t, i);
//           p >= this.thresholdTime ? (this.setTeaserShowed(t, p), this.monitorDispatcher()) : Number(t.dataset.observingStart) > 0 && setTimeout(() => {
//             this.checkTeaserShowed(t)
//           }, this.thresholdTime)
//         }
//       }
//       isAllowedMonitorTeaser(t) {
//         return !t.dataset.showed
//       }
//       getTeaserObservingTime(t, e) {
//         let i = Number(t.dataset.observingStart),
//           s = Number(t.dataset.observingTime);
//         return e >= this.thresholdRatio ? i === 0 ? t.dataset.observingStart = String(new Date().getTime()) : t.dataset.observingTime = String(new Date().getTime() - i + s) : (t.dataset.observingTime = "0", t.dataset.observingStart = "0"), Number(t.dataset.observingTime)
//       }
//       checkTeaserShowed(t) {
//         let e = Number(t.dataset.observingStart);
//         if (!t.dataset.showed && e > 0) {
//           let i = new Date().getTime() - e + Number(t.dataset.observingTime);
//           i >= this.thresholdTime && (this.setTeaserShowed(t, i), this.monitorDispatcher())
//         }
//       }
//       setTeaserShowed(t, e) {
//         t.dataset.showed = "1", t.dataset.observingTime = String(e), this.teasersDataList.push(this.getTeaserCappingData(t))
//       }
//       getTeaserCappingData(t) {
//         let e = this.app.utils.getRect(t, !0),
//           i = t.dataset.i;
//         return {
//           width: Math.round(e.width),
//           height: Math.round(e.height),
//           atf: e.top < this.app.utils.getViewportSize().height,
//           align: this.getTeaserAlign(e),
//           desc: this.isTeaserElementVisible(t, "mcdesc"),
//           price: this.isTeaserElementVisible(t, "mcprice"),
//           domain: this.isTeaserElementVisible(t, "mcdomain"),
//           hash: i,
//           coopType: this.app.teaserData[i].coopType,
//           isSend: !1
//         }
//       }
//       prepareCappingData() {
//         if (this.teasersDataList.some(t => !t.isSend)) {
//           this.app.lifeCycleBlock.processHooks("beforePrepareCappingDataHooks");
//           let t = [],
//             e = {},
//             i = "",
//             s = null;
//           this.teasersDataList.forEach(r => {
//             let p = r.hash;
//             if (!r.isSend && (r.isSend = !0, this.app.teaserData[p].isViewed = !0, i.length || (i = p), this.regAllowedHash.exec(p))) {
//               let u = r.coopType;
//               if (u !== F.Azerion) {
//                 let d = this.getTeaserPrefix(r);
//                 t.push("v=" + d + p), this.firstByType[u] || (this.firstByType[u] = 1, e["f" + u] = 1)
//               }
//               if (this.app.widgetParams.WIDGET.widgetCountersDisabled !== 1) {
//                 let d = this.app.teaserData[p].imp;
//                 for (let f of d) this.app.countersBlock.sendCustomCounter(f)
//               }
//               u === F.Wages && this.app.sspDoubleClickHash.push(p), this.app.lifeCycleBlock.processHooks("afterPrepareCappingDataHooks", [p]), window.performance?.mark("mgid_teaser_impression_" + this.app.teaserData[p].iteration, {
//                 detail: {
//                   _mgwidget: this.app.id
//                 }
//               })
//             }
//           }), this.app.pagesServicerData.length && i.length && this.app.teaserData[i] && (s = this.app.pagesServicerData.filter(r => r.page === this.app.teaserData[i].page)[0]?.servicerData), (typeof this.app.context._mgwcapping > "u" || this.app.context._mgwcapping.indexOf(this.app.id) === -1) && (this.app.widgetCappingEnabled ? (this.sendWidgetCappingData(s), this.app.lifeCycleBlock.processHooks("afterSendCappingHooks")) : e.f = 1), this.app.context._mgwcapping = this.app.context._mgwcapping || [], this.app.context._mgwcapping.push(this.app.id), t.length && this.sendTeaserCappingData(t, e, s)
//         }
//       }
//       getTeaserPrefix(t) {
//         return t.width + "|" + t.height + "|" + ((t.desc ? 1 : 0) + (t.price ? 2 : 0) + (t.domain ? 4 : 0) + (t.atf ? 8 : 0) + (t.align === "right" ? 16 : 0) + (t.align === "left" ? 32 : 0)) + "|"
//       }
//       sendWidgetCappingData(t) {
//         let e = this.app.getUserAgentDataParams(),
//           {
//             cbuster: i,
//             cxurl: s,
//             lu: r,
//             pr: p
//           } = this.app.pageViewPixelBlock.getPageDataParams(),
//           {
//             h2: u,
//             tt: d,
//             ts: f,
//             psid: b,
//             iv: k,
//             adv_src_id: S
//           } = t || {},
//           y = {
//             cid: this.app.id,
//             pageImp: this.getPageImpParam(),
//             cbuster: i,
//             cxurl: s,
//             lu: r,
//             pr: p,
//             h2: u,
//             tt: d,
//             ts: f,
//             psid: b,
//             iv: k,
//             adv_src_id: S
//           };
//         e && (y = {
//           ...y,
//           ...e
//         }), this.sendWidgetPerformanceMetric(), this.app.request.pixel("widgetCapping", `${this.baseUrl}w?${this.getParamsByString(y)}`, {}, {})
//       }
//       sendTeaserCappingData(t, e, i) {
//         let s = this.app.getMuid(),
//           {
//             h2: r,
//             rid: p,
//             tt: u,
//             ts: d,
//             psid: f,
//             iv: b
//           } = i || {},
//           {
//             views: k,
//             renders: S
//           } = this.app.getViewrateParams(),
//           y = this.app.getUserAgentDataParams();
//         e = {
//           ...e,
//           cid: this.app.id,
//           cbuster: this.app.getCbusterParameter(),
//           pageImp: this.getPageImpParam(),
//           pvid: this.app.pvid,
//           pv: this.versionCapping,
//           h2: r,
//           rid: p,
//           tt: u,
//           ts: d,
//           psid: f,
//           iv: b,
//           completion: `${k},${S}`
//         }, s.length && (e.muidn = s), y && (e = {
//           ...e,
//           ...y
//         }), this.app.request.pixel("capping", `${this.baseUrl}c?${t.join("&")}&${this.getParamsByString(e)}`, {}, {}), this.sendWidgetPerformanceMetric(), this.app.lifeCycleBlock.processHooks("afterSendCappingHooks")
//       }
//       getTeaserAlign(t) {
//         let e = this.app.context.document.body.scrollWidth;
//         return t.right < .3 * e ? "left" : t.left >= .7 * e ? "right" : "center"
//       }
//       isTeaserElementVisible(t, e) {
//         let i = t.getElementsByClassName(e);
//         if (i.length) {
//           let s = i[0].getBoundingClientRect();
//           return !(s.right - s.left === 0 || s.bottom - s.top === 0)
//         } else return !1
//       }
//       getPageImpParam() {
//         let t = 0;
//         if (this.app.context["isFBIA" + this.app.widgetParams.WIDGET.id] && this.app.context.localStorage) {
//           let e = this.app.context.localStorage.getItem("_mgPageImp" + this.app.widgetParams.WIDGET.siteId),
//             i = Number(this.app.globalSettings.ia_page_imp_timeout) || 180;
//           (!e || new Date().getTime() - Number(e) > i * 1e3) && (this.app.context.localStorage.setItem("_mgPageImp" + this.app.widgetParams.WIDGET.siteId, String(new Date().getTime())), t = 1)
//         } else {
//           let e = this.app.getMostTopWindow(),
//             i = e.location.pathname;
//           e["_mgPageImp" + this.app.widgetParams.WIDGET.siteId] = e["_mgPageImp" + this.app.widgetParams.WIDGET.siteId] || [];
//           let s = e["_mgPageImp" + this.app.widgetParams.WIDGET.siteId];
//           Array.isArray(s) && s.indexOf(i) === -1 && (s.push(i), t = 1)
//         }
//         return t
//       }
//       debounce(t, e = 200) {
//         let i;
//         return (...s) => {
//           clearTimeout(i), i = setTimeout(() => {
//             t.apply(this, s)
//           }, e)
//         }
//       }
//       getParamsByString(t) {
//         return Object.keys(t).filter(e => typeof t[e] < "u" && (typeof t[e] == "string" ? !!t[e].length : !0)).map(e => `${e}=${t[e]}`).join("&")
//       }
//       sendWidgetPerformanceMetric() {
//         if (!this.impressionTracked && (this.impressionTracked = !0, window.performance?.mark("widget_impression", {
//           detail: {
//             _mgwidget: this.app.id
//           }
//         }), typeof this.app.context._mgBackfillParentId < "u")) {
//           let t = this.app.context._mgBackfillParentId,
//             e = this.app.context._mgBackfillPlacement;
//           window.performance?.mark("backfill_impression_" + e, {
//             detail: {
//               _mgwidget: t
//             }
//           })
//         }
//       }
//     }
//   });
//   var oe, Ga = z(() => {
//     T();
//     B();
//     K();
//     oe = class extends A {
//       constructor(t) {
//         super(t), this.addHook("afterInitHooks", this.init)
//       }
//       init() {
//         if (!this.initCheck()) return;
//         this.check() || this.addHook("afterLoadNewsHooks", this.load);
//         let t = this.getData();
//         t !== "" && (this.app.requestParams[this.paramName] = encodeURIComponent(t))
//       }
//       initCheck() {
//         return !0
//       }
//     }
//   });
//   var Oa = {};
//   Z(Oa, {
//     ID5Block: () => Ii
//   });
//   var Ii, Ra = z(() => {
//     T();
//     B();
//     Ga();
//     xt();
//     Ii = class extends oe {
//       constructor(t) {
//         super(t), this.storageKey = "_mgID5", this.name = "ID5Block", this.paramName = "id5", this.refreshTime = 36e5
//       }
//       id5Init() {
//         let t = "https://cdn.id5-sync.com/api/1.0/id5-api.js",
//           e = this.app.context.document.createElement("script");
//         e.async = !0, e.type = "text/javascript", e.src = t, this.app.root.parentNode.insertBefore(e, this.app.root);
//         let i = 0,
//           s = setInterval(() => {
//             i++, i > 20 && clearInterval(s), typeof this.app.context.ID5 < "u" && this.app.context.ID5.loaded === !0 && (clearInterval(s), this.app.context.ID5.init(this.id5Params())?.onAvailable(this.id5Callback.bind(this)))
//           }, 100)
//       }
//       id5Params() {
//         return {
//           partnerId: 231,
//           refreshInSeconds: 15
//         }
//       }
//       id5Callback(t) {
//         let e = t.getUserId();
//         if (typeof e < "u" && e != 0)
//           if (this.app.context._mgID5Exists = !0, this.app.isAmp()) {
//             let i = this.refreshTime / 36e5,
//               s = new Date(new Date().setHours(new Date().getHours() + i)).toUTCString();
//             this.app.cookieBlock.cookieStorage[this.storageKey] = e, this.app.cookieBlock.setCookie(s)
//           } else this.app.context.localStorage.setItem(this.storageKey, JSON.stringify({
//             time: new Date().getTime(),
//             data: e
//           }))
//       }
//       check() {
//         let t = !0;
//         if (this.app.isAmp()) this.app.cookieBlock.getCookie(), (this.app.cookieBlock.cookieStorage[this.storageKey] || "").length || (t = !1);
//         else {
//           let e = this.app.context.localStorage.getItem(this.storageKey);
//           if (e) {
//             let i = JSON.parse(e);
//             new Date().getTime() - i.time > this.refreshTime && (t = !1)
//           } else t = !1
//         }
//         return t
//       }
//       getData() {
//         let t = "";
//         if (this.app.isAmp()) this.app.cookieBlock.getCookie(), t = this.app.cookieBlock.cookieStorage[this.storageKey] || "";
//         else {
//           let e = this.app.context.localStorage.getItem(this.storageKey);
//           e && (t = JSON.parse(e).data)
//         }
//         return t
//       }
//       load() {
//         typeof this.app.context._mgID5Exists > "u" && this.id5Init()
//       }
//       initCheck() {
//         return this.app.currentSubnet === It.MG
//       }
//     }
//   });
//   var ne, Ha = z(() => {
//     T();
//     B();
//     K();
//     ne = class extends A {
//       constructor(m) {
//         super(m), this.name = "AntiFraudCheqIntegration", this.topWindow = this.app.getMostTopWindow(), this.addHook("afterInjectScriptHooks", this.addScript)
//       }
//       addScript() {
//         let m = this.app.context.document.createElement("script");
//         m.type = "text/javascript", m.async = !0, m.src = "https://euob.protoroundprince.com/sxp/i/3722bf47acc26f7ee54e3617bac683c5.js", m.setAttribute("data-ch", "mgidad"), m.setAttribute("data-uvid", this.app.id.toString()), m.setAttribute("class", "ct_clicktrue_76045"), this.topWindow.document.head.appendChild(m)
//       }
//     }
//   });
//   var xr = {};
//   var Ma = z(() => {
//     T();
//     B();
//     Ha();
//     window.AdskeeperInfC1648807 = window.AdskeeperInfC1648807 || {};
//     window.AdskeeperInfC1648807.parentCustomFuncBlocks = window.AdskeeperInfC1648807.parentCustomFuncBlocks || {};
//     window.AdskeeperInfC1648807.parentCustomFuncBlocks["af6259-cheq"] = ne
//   });
//   var Na = Ie(() => {
//     T();
//     B()
//   });
//   T();
//   B();
//   T();
//   B();
//   T();
//   B();
//   T();
//   B();
//   K();
//   var Qt = class extends A {
//     constructor(t) {
//       super(t), this.isDebugEnabled = !1, this.isProfilerEnabled = !1, this.app.log = this.log.bind(this), this.app.time = this.time.bind(this), this.app.timeEnd = this.timeEnd.bind(this)
//     }
//     initDebugger() {
//       this.isDebugEnabled = this.app.getQueryParameterByName("mgwdebug") === "1" || this.app.widgetParams.WIDGET.debug, this.isProfilerEnabled = this.app.getQueryParameterByName("mgwprofile") === "1" || this.app.widgetParams.WIDGET.debug, this.app.widgetParams.WIDGET.loggerEnabled && (this.app.context.addEventListener("error", t => {
//         (t.filename === this.app.widgetParams.WIDGET.widgetPathES6 || t.filename === this.app.widgetParams.WIDGET.widgetPathES5) && this.sendData(t.message)
//       }), this.app.context.addEventListener("unhandledrejection", t => {
//         (t.reason?.stack.indexOf(this.app.widgetParams.WIDGET.widgetPathES6) > 0 || t.reason?.stack.indexOf(this.app.widgetParams.WIDGET.widgetPathES5) > 0) && this.sendData(t.reason.stack)
//       }))
//     }
//     log(t, e = "log", i = null) {
//       if (this.isDebugEnabled) {
//         let r = ["log", "info", "warn", "error"].indexOf(e) !== -1 ? e : "log";
//         typeof console[r] != "function" && (r = "log"), i && i.stack && i.message ? console[r](`WIDGET_${this.app.widgetParams.WIDGET.id}_${this.app.uniqId}`, t, i.stack) : console[r](`WIDGET_${this.app.widgetParams.WIDGET.id}_${this.app.uniqId}`, t)
//       }
//     }
//     time(t) {
//       this.isProfilerEnabled && typeof console.time == "function" && console.time(`WIDGET_${this.app.widgetParams.WIDGET.id}_${this.app.uniqId} ${t}`)
//     }
//     timeEnd(t) {
//       this.isProfilerEnabled && typeof console.timeEnd == "function" && console.timeEnd(`WIDGET_${this.app.widgetParams.WIDGET.id}_${this.app.uniqId} ${t}`)
//     }
//     sendData(t) {
//       this.app.widgetParams.WIDGET.loggerEnabled && this.app.request.pixel("logger", `https://${this.app.widgetParams.WIDGET.countersDomain}/widget-log?id=${this.app.widgetParams.WIDGET.id}&d=` + encodeURIComponent(t) + "&ts=" + new Date().getTime(), {}, {})
//     }
//   };
//   xt();
//   T();
//   B();
//   var _t = class {
//     constructor() {
//       this.isMobileResult = null, this.agent = navigator.userAgent || navigator.vendor || window.opera || ""
//     }
//     isMobile() {
//       if (this.isMobileResult === null) {
//         let t = !1;
//         (function (e) {
//           (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
//         })(this.agent), this.isMobileResult = t
//       }
//       return this.isMobileResult
//     }
//     isTablet() {
//       return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(this.agent.toLowerCase())
//     }
//     isIosFBWebview() {
//       let t = this.agent.toLowerCase();
//       return t.indexOf("apple") > -1 && t.indexOf("iphone") > -1 && t.indexOf("webkit") > -1 && (t.indexOf("fban") > -1 || t.indexOf("fbav") > -1) && t.indexOf("safari") === -1 && t.indexOf("firefox") === -1 && t.indexOf("chrome") === -1
//     }
//     isFBAndroid() {
//       return (this.agent.indexOf("FBAN") > -1 || this.agent.indexOf("FBAV") > -1) && this.agent.indexOf("Android") > -1
//     }
//     isChromeWebView() {
//       let t = ["WebView", "Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})", "Linux; U; Android"],
//         e = new RegExp("(" + t.join("|") + ")", "ig");
//       return !!this.agent.match(e)
//     }
//     isObject(t) {
//       return t !== null && t.constructor === Object
//     }
//     isSupportES6() {
//       try {
//         return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"), !0
//       } catch {
//         return !1
//       }
//     }
//     generateHash() {
//       return Date.now().toString(36) + Math.random().toString(36).substring(2)
//     }
//     getSingleJsController(t) {
//       return (window._mgc?.controllers || [])?.filter(e => e.siteId === t)[0]?.controller
//     }
//     isLoadWithAbTest(t) {
//       let e = Number(t),
//         i = Math.random(),
//         s = (100 - e) / 2 / 100;
//       return i > s && i < 1 - s
//     }
//     isAdblockDetected() {
//       if (typeof window._mgAdbDetected > "u") {
//         let t = ["banner_ad", "sponsored_ad"],
//           e = document.body || document.documentElement,
//           i = p => {
//             let u = document.createElement("div");
//             return u.className = p, u.style.setProperty("display", "block", "important"), u.style.setProperty("padding", "1px", "important"), u.style.visibility = "hidden", u.style.position = "absolute", u.innerHTML = ".", e.appendChild(u), u
//           },
//           s = p => !p.offsetHeight,
//           r = p => {
//             let u = null;
//             for (let d = 0; d < p.length; d++) {
//               u = i(p[d]);
//               let f = s(u);
//               if (e.removeChild(u), f) return !0
//             }
//             return !1
//           };
//         window._mgAdbDetected = r(t)
//       }
//       return window._mgAdbDetected
//     }
//   };
//   var te = class m extends _t {
//     constructor(t, e, i, s, r, p, u) {
//       if (super(), this.BaseBlockClass = m, this.app = this, this.widgetParams = u, this.context = e, this.blankImage = this.app.widgetParams.WIDGET.blankImage, this.enabledCooperationTypes = JSON.parse(this.app.widgetParams.WIDGET.cooperationTypes), this.root = this.context.document.getElementById(t), this.debugBlock = new Qt(this), this.lifeCycleLoadResolver = null, this.waitConsentResolver = null, this.rootId = t, this.containerId = s, this.uniqId = r, this.fallbackMode = i, this.page = 1, this.adlink = "", this.template = "", this.templateContent = null, this.id = this.app.widgetParams.WIDGET.id, this.originalId = this.app.widgetParams.WIDGET.id, this.pvid = "", this.muid = "", this.afterPreRenderNewsHooks = [], this.beforeInjectScriptHooks = [], this.beforeLoadNewsHooks = [], this.afterLoadNewsHooks = [], this.afterInjectScriptHooks = [], this.beforePrepareCappingDataHooks = [], this.afterPrepareCappingDataHooks = [], this.afterSendCappingHooks = [], this.beforeInitHooks = [], this.afterInitHooks = [], this.observerWidgetHooks = [], this.observerTeasersHooks = [], this.blocksAddress = "", this.tickerPrefix = "", this.countLoadBlocks = 0, this.preTemplate = "", this.postTemplate = "", this.banners = {}, this.loadedDefault = !1, this.teaserData = {}, this.servicerData = {}, this.servicerAds = [], this.pagesServicerData = [], this.childWidgetsData = JSON.parse(this.app.widgetParams.WIDGET.childWidgets), this.versionWidget = p, this.sspPerformance = this.app.widgetParams.WIDGET.sspPerformancePercentage >= Math.ceil(Math.random() * 100), this.doubleClickType = "", this.doubleClickCheckId = 0, this.doubleClickPercent = 0, this.precalcRect = null, this.preRenderTeaserSizes = null, this.preRenderImageSizes = null, this.isSingleJS = this.versionWidget === 17 && typeof this.context._mgc < "u", this.widgetConstructorData = JSON.parse(this.app.widgetParams.WIDGET._constructor), typeof this.widgetConstructorData.mctitle < "u" && typeof this.widgetConstructorData.mctitle.styles < "u" && typeof this.widgetConstructorData.mctitle.styles.fontSize < "u" ? this.autoSizeTitle = Number(this.widgetConstructorData.mctitle.styles.fontSize) : this.autoSizeTitle = 0, this.globalSettings = JSON.parse(this.app.widgetParams.WIDGET.globalSettings), this.customBanners = this.app.widgetParams.WIDGET.isNextUpAddWidget ? {} : JSON.parse(this.app.widgetParams.WIDGET.customBanners), this.initServicerRequest = !0, this.exceptAdsList = [], this.exceptExchangeList = [], this.context._mgIntExchangeNews = this.context._mgIntExchangeNews || [], this.context._mgExceptAds = this.context._mgExceptAds || [], this.clickHandlers = [], this.sspDoubleClickHash = [], this.requestParams = {}, this.userAgentDataParams = null, this.consentDataParams = null, this.videoMetricsParams = null, this.webProtocol = "https:", this.clickHandlerList = {
//         onSiteNotificationClick: {
//           handler: "onSiteNotificationHandler",
//           priority: 8
//         },
//         onSmartDoubleClick: {
//           handler: "onSmartDoubleClickHandler",
//           priority: 10
//         },
//         onAntifraudStatisticsClick: {
//           handler: "onAntifraudStatisticsClickHandler",
//           priority: 15
//         },
//         sspDoubleClick: {
//           handler: "sspDoubleClickHandler",
//           priority: 20
//         },
//         scrollTimeDoubleClick: {
//           handler: "scrollTimeDoubleClickHandler",
//           priority: 21
//         },
//         activateDelayLink: {
//           handler: "activateDelayLinkHandler",
//           priority: 30
//         },
//         accidentalClicks: {
//           handler: "accidentalClicksHandler",
//           priority: 50
//         },
//         returnedRefreshClick: {
//           handler: "returnedRefreshClickHandler",
//           priority: 120
//         },
//         showDesktopDoubleClick: {
//           handler: "showDesktopDoubleClickButton",
//           priority: 150
//         },
//         showMobileDoubleClick: {
//           handler: "showDoubleClickButton",
//           priority: 150
//         },
//         externalCountersLink: {
//           handler: "externalCountersLinkHandler",
//           priority: 180
//         },
//         internalExchangeLogger: {
//           handler: "internalExchangeLoggerHandler",
//           priority: 180
//         },
//         hangNiceLinkListener: {
//           handler: "hangNiceLinkListener",
//           priority: 200
//         },
//         countSessionClicks: {
//           handler: "countSessionClicksHandler",
//           priority: 250
//         },
//         closeWidgetClick: {
//           handler: "closeWidget",
//           priority: 600
//         },
//         refreshNews: {
//           handler: "refreshNewsHandler",
//           priority: 700
//         }
//       }, this.context.self !== this.context.top) {
//         let d = this.context.document.referrer.split("/");
//         this.intExchangeProtocol = d[0].indexOf("http") == 0 ? d[0] : "https:"
//       } else {
//         let d = this.context.document.location.protocol;
//         this.intExchangeProtocol = d.indexOf("http") == 0 ? d : "https:"
//       }
//       this.sourceName = "", this.setTemplate(this.app.widgetParams.WIDGET.widgetTemplate.replace(/[\r\n]/g, "")), this.setStyles(this.app.widgetParams.WIDGET.templateStyles.replace(/\\'/g, "'")), this.servicerDomain = this.app.widgetParams.WIDGET.servicerDomain, this.adBlockStyles = this.app.widgetParams.WIDGET.adBlockTemplateStyles.replace(/\((\'|\")?\/\//g, "($1https://"), this.clickTracking = "", this.loadedType = "", this.parentCustomFuncBlocks = {}, this.childFuncBlocks = {}, this.browserId = -1, this.deviceType = Ft.Desktop, this.hrefAttr = "href", this.enabledCooperationTypes = JSON.parse(this.app.widgetParams.WIDGET.cooperationTypes), this.consentData = null, this.cmpEnabled = !1, this.uspString = "", this.uspEnabled = !1, this.tcfv2Data = null, this.tcfv2Enabled = !1, this.consentOrigin = null, this.cookieMatchingDomain = this.app.widgetParams.WIDGET.cookieMatchingDomain ? this.app.widgetParams.WIDGET.cookieMatchingDomain : "", this.iframePlacementType = 0, this.networkInformationType = "unknown", this.networkInformationEffectiveType = "unknown", this.networkInformationSaveData = 0, this.pageUrl = "", this.refererUrl = "", this.refererParam = "", this.adblockDetectResult = null, this.adBlockStatement = !1, this.gptOptions = JSON.parse(this.app.widgetParams.WIDGET.gptOptions || "{}"), this.backfillData = JSON.parse(this.app.widgetParams.WIDGET.backfillData || "{}"), this.isOurIframe = this.context.document.location.hostname === this.app.widgetParams.WIDGET.iframeDomain, this.refreshedElement = null, this.startServicerTime = null, this.widgetCappingEnabled = this.app.widgetParams.WIDGET.flippEnabled, this.isShowedUpFormat = this.app.widgetParams.WIDGET.popup || this.app.widgetParams.WIDGET.isNextUpAddWidget || ["mobile-widget", "in-site-notification", "passage", "interstitial"].indexOf(this.app.widgetParams.WIDGET.type) !== -1, this.sendBannerInfoScript = `<script>
//       var mgLastSendHeight = 0;
//       var mgLastSendWidth = 0;
//       function mgSendInfo() {
//         var data = {
//           type: '_mgBannerInfo',
//           height: mgLastSendHeight,
//           width: mgLastSendWidth,
//           id: window['_mgBannerId']
//         };
//         window.parent.postMessage(data, '*');
//       }
//       var mgResizeObserver = new ResizeObserver(function(entries) {
//         for (var i = 0; i < entries.length; i++) {
//           var entry = entries[i];
//           var newHeight = Math.round(entry.contentRect.height);
//           if (newHeight >= 50 && newHeight !== mgLastSendHeight) {
//             mgLastSendHeight = newHeight;
//             mgLastSendWidth = Math.round(entry.contentRect.width);
//             mgSendInfo();
//           }
//         }
//       });
//       mgResizeObserver.observe(document.body);
//     <\/script>`, this.setRefererData(), this.setSubnetData()
//     }
//     setSubnetData() {
//       let e = JSON.parse(this.app.widgetParams.WIDGET.subnets)[this.app.widgetParams.WIDGET.currentSubnet];
//       this.app.currentSubnet = this.app.widgetParams.WIDGET.currentSubnet, this.app.currentSubnetDomain = e.mirror, this.app.subnetMirrorsImage = e.imageDomain, this.app.subnetMirrorsUtm = e.utm, this.app.subnetDashboardDomain = this.app.webProtocol + "//" + e.dashboardDomain
//     }
//     setRefererData() {
//       let t = this.app.isIframe(),
//         e = !0,
//         i = !1,
//         s = this.app.context,
//         r = this.app.context;
//       if (t)
//         for (; ;) {
//           try {
//             s.frameElement && s.frameElement.src != "" && (e = !1), s.document.body
//           } catch {
//             s = r, i = !0, e = !1;
//             break
//           }
//           if (s == s.parent) break;
//           r = s, s = s.parent
//         }
//       try {
//         this.app.isAmp() ? (this.app.iframePlacementType = 3, this.app.pageUrl = typeof this.app.context.context.sourceUrl < "u" ? this.app.context.context.sourceUrl : "", this.app.refererUrl = typeof this.app.context.context.referrer < "u" ? this.app.context.context.referrer : "", this.app.pageUrl != "" ? this.app.refererParam = this.app.pageUrl : this.app.refererParam = this.app.refererUrl) : (this.app.pageUrl = s.document.location.href, this.app.refererUrl = s.document.referrer || "", this.app.refererParam = this.app.refererUrl, t && !e && (i ? this.app.iframePlacementType = 2 : (this.app.refererParam = this.app.pageUrl, this.app.iframePlacementType = 1)))
//       } catch {
//         this.app.iframePlacementType = 2
//       }
//       typeof this.app.context._mgBackfillRef < "u" && (this.app.refererParam = this.app.context._mgBackfillRef)
//     }
//     getQueryParameterByName(t) {
//       t = t.replace(/[\[\]]/g, "\\$&");
//       let i = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(this.app.context.location.href);
//       return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
//     }
//     setStyles(t) {
//       this.app.styles = t.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//")
//     }
//     setTemplate(t) {
//       t = t.replace(/^\s*[\r\n]|\s{2,}/gm, ""), t = t.replace(/\((\'|\")?\/\//g, "($1" + this.app.webProtocol + "//"), t = t.replace('src="//', 'src="' + this.app.webProtocol + "//"), this.app.templateText = t.replace('href="//', 'href="' + this.app.webProtocol + "//")
//     }
//     cutString(t, e, i) {
//       if (t.length <= e) return t;
//       let s = [];
//       s = t.split(" ");
//       let r = s[0] + " ",
//         p;
//       for (let u = 1; u < s.length; u++) {
//         if (p = r + s[u], p.length > e) return r + (typeof i > "u" || i ? "..." : "");
//         r += s[u] + " "
//       }
//       return t
//     }
//     parseString(t, e) {
//       let i = [],
//         s, r = "";
//       for (i = t.split(" "), s = 0; s < i.length; s++) i[s].length > e && i[s].search(/&\w+;/) < 0 ? r += i[s].substr(0, e) + " " + i[s].substr(e) + " " : r += i[s] + " ";
//       return r
//     }
//     prepareTitle(t) {
//       return this.app.widgetParams.WIDGET.titleBreak && (t = this.app.parseString(t, this.app.widgetParams.WIDGET.titleBreak)), this.app.widgetParams.WIDGET.titleLimit && (t = this.app.cutString(t, this.app.widgetParams.WIDGET.titleLimit, this.app.widgetParams.WIDGET.informerTitleDotsFlag)), this.app.widgetParams.WIDGET.disableCaps && (t = t.replace(/[\!\s\t\n\r\0\x0B]+$/g, "").replace(/([Ð-Ð¯ÐA-Z]{2,})/g, (e, i, s, r) => !s || r.substring(parseInt(s - 2)).match(/^[!|?|.|,|-]\s/g) ? e.replace(i.substring(1), i.substring(1).toLowerCase()) : e.toLowerCase())), t
//     }
//     prepareDesc(t) {
//       return this.app.widgetParams.WIDGET.descBreak && (t = this.app.parseString(t, this.app.widgetParams.WIDGET.descBreak)), this.app.widgetParams.WIDGET.descLimit && (t = this.app.cutString(t, this.app.widgetParams.WIDGET.descLimit, 1)), t
//     }
//     hidePreloadDiv() {
//       this.app.fallbackMode ? this.app.fallbackMode && this.app.countLoadBlocks === 0 && (this.app.root.innerHTML = "", this.app.context.document.getElementById("M" + this.app.widgetParams.WIDGET.siteId + "PreloadC" + this.app.widgetParams.WIDGET.id) && (this.app.context.document.getElementById("M" + this.app.widgetParams.WIDGET.siteId + "PreloadC" + this.app.widgetParams.WIDGET.id).style.display = "none")) : [this.app.widgetParams.WIDGET.informerPrefix + "PreloadC" + this.app.containerId, "M" + this.app.widgetParams.WIDGET.siteId + "PreloadC" + this.app.containerId, this.app.widgetParams.WIDGET.informerPrefix + "PreloadN" + this.app.containerId, "M" + this.app.widgetParams.WIDGET.siteId + "PreloadN" + this.app.containerId].every(e => {
//         let i = this.app.context.document.getElementById(e);
//         return i ? (i.style.display = "none", !1) : !0
//       })
//     }
//     loadNewsPrestart(t, e) {
//       if (this.app.hidePreloadDiv(), typeof t < "u") {
//         this.app.servicerData = t;
//         let i = {
//           page: this.app.pagesServicerData.length + 1,
//           servicerData: this.app.servicerData,
//           teasersCount: e
//         };
//         if (this.app.pagesServicerData.push(i), typeof t.dt < "u" && (this.app.deviceType = t.dt), typeof t.brid < "u" && (this.app.browserId = t.brid), typeof this.app.context._mgServicerFiltersData < "u" && (typeof t.dt < "u" && (this.app.context._mgServicerFiltersData.device = t.dt), typeof t.tt < "u" && (this.app.context._mgServicerFiltersData.trafficType = t.tt), typeof t.ts < "u" && (this.app.context._mgServicerFiltersData.trafficSource = t.ts)), this.app.widgetParams.WIDGET.hasVideoPart && typeof this.app.servicerData.lib < "u" && this.app.servicerData.config && this.app.servicerData.config.formats && this.preloadVideoWidgetResources(), typeof this.app.servicerData < "u" && typeof this.app.servicerData.css < "u" && (this.app.styles = this.app.servicerData.css, this.app.stylesheetsBlock.add("split_style", this.app.servicerData.css), this.app.stylesheetsBlock.remove("main")), typeof this.app.servicerData < "u" && typeof this.app.servicerData.t < "u" && this.app.servicerData.t !== "") {
//           let s = this.app.servicerData.t.replace(/\r?\n/g, "");
//           this.app.setTemplate(s)
//         }
//       }
//     }
//     preloadVideoWidgetResources() {
//       let t = this.app.servicerData.dt ? this.app.servicerData.dt : "desktop",
//         e = this.app.servicerData.config.formats.filter(i => i.device === t)[0];
//       if (e) {
//         let {
//           protocol: i
//         } = this.context.document.location, s = i.indexOf("http") !== -1 ? `${i}//` : "https://", r = this.app.widgetParams.WIDGET.staticRootDomain ? this.app.widgetParams.WIDGET.staticRootDomain : this.app.currentSubnetDomain, p = `mgStyles${this.id}`;
//         if (e.styleUrl) {
//           let u = e.styleUrl.replace("{{DOMAIN}}", this.app.currentSubnetDomain).replace(/^(https?:\/\/|\/\/)/, `${s}`);
//           this.appendWidgetPreloadDom(u, p, !0)
//         } (typeof e.playerType > "u" || e.playerType === "mgplayer") && this.appendWidgetPreloadDom(`${s}video-native.${r}/mgPlayer/img/mgPlayer_v2_sprite.svg`)
//       }
//     }
//     appendWidgetPreloadDom(t, e = "", i = !1) {
//       let s = this.context.document.createElement("link");
//       s.setAttribute("href", t);
//       let r = t.split(".").pop();
//       r === "css" && (s.setAttribute("type", "text/css"), s.setAttribute("rel", "stylesheet")), r === "svg" && s.setAttribute("type", "image/svg+xml"), e && s.setAttribute("id", e), i && (s.onload = () => {
//         s.setAttribute("data-loaded", "true")
//       }), this.app.isShadowRoot() ? (this.app.root.getRootNode().appendChild(s), this.context.document.head.appendChild(s.cloneNode(!0))) : this.context.document.head.appendChild(s)
//     }
//     addVideoLib() {
//       if (this.app.widgetParams.WIDGET.hasVideoPart && typeof this.app.servicerData.lib < "u") {
//         let t = this.app.widgetParams.WIDGET.libraryVersion !== this.app.servicerData.lib ? `${this.app.widgetParams.WIDGET.libraryVersion}<${this.app.servicerData.lib}` : "",
//           e = JSON.parse(this.app.widgetParams.WIDGET.videoCfg),
//           i = {
//             lib: this.getActiveChilds().length === 0 ? this.app.widgetParams.WIDGET.libraryVersion : this.app.servicerData.lib,
//             servLib: t,
//             cid: this.app.id,
//             sid: this.app.widgetParams.WIDGET.siteId,
//             config: typeof this.app.servicerData.config < "u" ? this.app.servicerData.config : e,
//             vr_playlist: typeof this.app.servicerData.vr_playlist < "u" ? this.app.servicerData.vr_playlist : [],
//             template: "",
//             styles: "",
//             paramsData: {
//               isSmart: this.app.widgetParams.WIDGET.type === "smart"
//             },
//             cxurl: this.app.contextBlock.contextUriParse(),
//             subnetDomain: this.app.currentSubnetDomain,
//             countersDomain: this.app.widgetParams.WIDGET.countersDomain,
//             lang: this.app.servicerData.sl,
//             sd: this.app.servicerData.sd,
//             cappingData: {
//               dt: this.app.servicerData.dt,
//               ts: this.app.servicerData.ts,
//               tt: this.app.servicerData.tt,
//               h2: this.app.servicerData.h2,
//               iv: this.app.servicerData.iv,
//               psid: this.app.servicerData.psid,
//               isBot: this.app.servicerData.isBot,
//               subnet: this.app.currentSubnet,
//               lang: this.app.globalSettings.current_language,
//               advsrcid: this.app.servicerData.adv_src_id
//             },
//             rootElement: this.app.root,
//             scriptRoot: this.getRoot(),
//             hasBackfill: !!this.app.backfillData.video,
//             backfillCallback: () => {
//               this.app.backfillBlock.renderBackfill()
//             },
//             backfillDestructor: () => {
//               this.app.backfillBlock.destroyBackfill()
//             },
//             tcfExpirationDate: Number(this.app.globalSettings?.widget_consent_outdated_time) || 168,
//             backfillPrice: this.servicerData.backfillPrice
//           };
//         this.app.root.className.indexOf("_mgw_" + this.app.widgetParams.WIDGET.id) === -1 && (this.app.root.className += (this.app.root.className.length === 0 ? "" : " ") + "_mgw_" + this.app.widgetParams.WIDGET.id), this.app.root.className.indexOf("_mgVideoBlock_" + this.app.widgetParams.WIDGET.id) === -1 && (this.app.root.className += (this.app.root.className.length === 0 ? "" : " ") + "_mgVideoBlock_" + this.app.widgetParams.WIDGET.id), setTimeout(() => {
//           if (this.app.servicerData.config?.testWidgetLib) {
//             this.app.context._mgq = this.app.context._mgq || [];
//             let s = !0,
//               r = this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.cdnDomain + "/js/wglibs/mgWidget_" + this.app.servicerData.lib + (s ? ".es6" : ".es5") + ".js";
//             if (this.app.servicerData.config?.testWidgetLib) {
//               let u = this.app.servicerData.config.testWidgetLib.match(/mgWidget_(debug_)?(VID\d+)/);
//               u !== null && (i.lib = u[2]);
//               let d = this.app.servicerData.config.testWidgetLib;
//               d.indexOf(".es") === -1 && (d = d.replace(".js", s ? ".es6.js" : ".es5.js")), r = d + "?r=" + encodeURIComponent(this.app.pageUrl)
//             }
//             let p = this.app.context.document.createElement("script");
//             p.type = "text/javascript", p.charset = "utf-8", p.async = !0, p.src = r, this.app.context.document.head.appendChild(p), this.app.context._mgq.push(["_mgload", i]), this.startMgqwp()
//           } else this.videoWidgetsLib.loadLibrary(i)
//         }, 0)
//       }
//     }
//     loadNews(t) {
//       if (this.app.addVideoLib(), t.length > 0) {
//         let e = this.app.getRenderer(this.app.templateText).getHtml(t);
//         if (this.app.root && e) {
//           if (e = this.app.advertLinkBlock.parseAdvertLink(e), this.app.fallbackMode && this.app.countLoadBlocks == 0 && (this.app.root.innerHTML = ""), this.app.templateContent = this.app.context.document.createElement("template"), this.app.templateContent.innerHTML = "<div>" + this.app.preTemplate + e + this.app.postTemplate + "</div>", typeof this.app.templateContent.content > "u") {
//             let p = this.app.templateContent,
//               u = document.createDocumentFragment(),
//               d = p.childNodes;
//             for (let f = 0; f < d.length; f++) u.appendChild(d[f].cloneNode(!0));
//             this.app.templateContent.content = u
//           }
//           this.app.templateContent = this.app.templateContent.content.firstChild;
//           let i = this.app.templateContent.querySelectorAll(".mgline-gpt");
//           if (i.length)
//             for (let p = 0; p < i.length; p++) i[p].innerHTML = "";
//           if (this.app.refreshedElement) {
//             this.app.templateContent = this.app.templateContent.querySelector(".mgline");
//             let p = this.app.templateContent.getElementsByTagName("a");
//             for (let u = 0; u < p.length; u++) p[u].setAttribute("data-refreshed", "true")
//           }
//           let s = this.app.templateContent.querySelectorAll("img.mcimg");
//           if (s.length > 0)
//             for (let p = 0; p < s.length; p++) {
//               let u = s[p];
//               u.src = s[p].getAttribute("data-src"), u.setAttribute("alt", "")
//             }
//           let r = this.app.templateContent.querySelectorAll("video.mcvideo");
//           if (r.length > 0)
//             for (let p = 0; p < r.length; p++) {
//               let u = r[p];
//               u.onplay = function () {
//                 u.classList.add("played")
//               }, u.removeAttribute("nopin"), u.removeAttribute("crossorigin"), u.src = u.getAttribute("data-src"), typeof u.childNodes[0] < "u" && u.parentElement.appendChild(u.childNodes[0])
//             }
//           this.app.addTemplate(this.app.templateContent), this.app.renderBanners(!0, null)
//         }
//       } else {
//         if (typeof this.app.context._mgIsCustomBanner < "u") try {
//           let e = {
//             type: "_mgBannerInfo",
//             isEmpty: !0,
//             id: this.app.context._mgBannerId
//           };
//           this.app.context.parent.postMessage(e, "*")
//         } catch { }
//         if (this.app.root && this.app.countLoadBlocks == 0) {
//           this.app.root.innerHTML = "";
//           return
//         }
//       }
//       this.app.servicerData && this.app.servicerData.muidn && this.app.servicerData.pvid && this.app.pvid.length && this.app.servicerData.pvid == this.app.pvid && this.app.setMuidn(this.app.servicerData.muidn), this.app.setPage(), this.app.addNofollowLink(), this.app.countLoadBlocks++
//     }
//     addNofollowLink() {
//       let t = this.app.root.getElementsByTagName("a");
//       for (let e = 0; e < t.length; e++) {
//         let i = t[e],
//           s = this.app.teaserData[i.dataset.hash];
//         this.app.widgetParams.WIDGET.noFollow && (!s || s.coopType !== F.InternalExchange) && (i.rel = "sponsored nofollow noopener")
//       }
//     }
//     addTemplate(t) {
//       this.app.refreshedElement ? (this.app.refreshedElement.parentNode.replaceChild(t, this.app.refreshedElement), this.app.refreshedElement.classList.forEach(e => {
//         e.indexOf("mgiteration") !== -1 && t.classList.replace("mgiteration-1", e)
//       }), t.dataset.pos = this.app.refreshedElement.dataset.pos, (typeof this.app.requestParams.limitads < "u" || typeof this.app.requestParams.pos < "u") && (delete this.app.requestParams.limitads, delete this.app.requestParams.pos), this.app.widgetParams.WIDGET.isNextUpAddWidget && (this.app.getRoot().dataset.disableStart = "true", delete this.app.requestParams.rtb_disabled), this.app.refreshedElement = null) : this.app.root.appendChild(t)
//     }
//     getViewportHeight() {
//       let t = this.app.context.document,
//         e = this.app.context,
//         i = "documentElement",
//         s = "clientHeight",
//         r = "clientWidth",
//         p = "innerHeight",
//         u = "innerWidth",
//         d = "scrollHeight",
//         f = "scrollWidth",
//         b = "offsetHeight",
//         k = "offsetWidth",
//         S = "offsetLeft",
//         y = "offsetTop",
//         D = "scrollTop",
//         v = "scrollLeft";
//       return this.app.isAmp() ? typeof e["intersectionRect" + this.app.widgetParams.WIDGET.id + "_" + this.uniqId] < "u" ? {
//         c: e["intersectionRect" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId].height,
//         s: e["intersectionRect" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId].y
//       } : {
//         c: e["intersectionRect" + this.app.widgetParams.WIDGET.id].height,
//         s: e["intersectionRect" + this.app.widgetParams.WIDGET.id].y
//       } : e[u] ? {
//         c: e[p],
//         s: e.pageYOffset
//       } : t[i] && t[i][r] ? {
//         c: t[i][s],
//         s: t[i][D]
//       } : t.body[r] ? {
//         c: t.body[s],
//         s: t.body[D]
//       } : 0
//     }
//     renderBanners(t, e) {
//       for (let i in this.app.banners)
//         if (this.app.banners[i].rs != t) {
//           if (!t) {
//             if (this.app.banners[i].iteration != e) continue;
//             this.app.banners[i].rs = !1
//           }
//           if (this.app.banners[i].isRendered === !0) continue;
//           let s = this.app.root.querySelector("#" + i),
//             r = this.app.banners[i].html,
//             p = !1;
//           if (this.app.banners[i].clickUrl && r.indexOf("${CLICK_PIXEL}") !== -1) {
//             let b = this.app.allowReturnParams;
//             this.app.allowReturnParams = !0, r = r.replace(/\${CLICK_PIXEL}/g, this.app.banners[i].clickUrl + this.app.getAntifraudQueryParameter(this.app.banners[i].clickUrl)), p = !0, this.app.allowReturnParams = b
//           }
//           r.indexOf("{page_url}") !== -1 && (r = r.replace(/{page_url}/g, this.app.pageUrl)), r.indexOf("{referrer_url}") !== -1 && (r = r.replace(/{referrer_url}/g, this.app.refererUrl));
//           let u = this.app.banners[i].isCustomBanner,
//             d = this.app.isSingleJS && u && r.indexOf("_mgwidget") !== -1,
//             f = '<!DOCTYPE html><html><body style="margin: 0;"><script>var _mgBannerId = "' + this.app.banners[i].id + '";<\/script>' + (u ? "<script>var _mgIsCustomBanner = true;<\/script>" + this.app.getBackfillParamsByString() : "") + (typeof ResizeObserver < "u" ? this.app.sendBannerInfoScript : "") + r + "</body></html>";
//           if (!this.app.banners[i].useSecureIframe || d ? (s.contentWindow.document.open(), s.contentWindow.document.write(f), s.contentWindow.document.close()) : this.app.renderInSafeIframe(s, `banner_${i}`, f), this.app.widgetParams.WIDGET.type === "carousel-super" && (s.parentNode.style.cssText = "width: " + this.app.banners[i].width + "px !important"), d) {
//             let b = this.app.getSingleJsController(this.app.widgetParams.WIDGET.widgetClientSiteId);
//             b && b.loadBackfill(s)
//           }
//           this.app.banners[i].isRendered = !0, p || (b => {
//             s.contentWindow.document.body.addEventListener("click", k => {
//               let S = k.target,
//                 y = !1;
//               for (; S.parentElement;)
//                 if (S.tagName === "A") {
//                   y = !0;
//                   break
//                 } else S = S.parentElement;
//               y && this.app.request.pixel("bannerClickTracker", this.app.banners[b].clickUrl, {
//                 k: this.app.getAntifraudQueryParameter(this.app.banners[b].clickUrl)
//               }, {})
//             }, !0)
//           })(i)
//         }
//     }
//     renderInSafeIframe(t, e, i) {
//       t.sandbox.add("allow-scripts"), t.sandbox.add("allow-popups");
//       let s = this.app.context.location.href.indexOf("admin.") === -1 && this.app.context.location.href.indexOf("dashboard.") === -1 && this.app.context.location.href.indexOf("panel.") === -1;
//       this.app.widgetParams.WIDGET.customBanners.length > 0 && s && t.sandbox.add("allow-same-origin"), "srcdoc" in t ? t.srcdoc = i : (t.src = this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.cdnDomain + `/widgets/framehost.html#${e}`, this.app.context.addEventListener("message", r => {
//         r.origin === this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.cdnDomain && r.data === `loaded #${e}` && t.contentWindow.postMessage(i, "*")
//       }, !1))
//     }
//     getPageCount() {
//       let t = this.app.widgetParams.WIDGET.newsPartPagesCount,
//         e = this.app.widgetParams.WIDGET.goodsPartPagesCount;
//       return t && e ? Math.min(t, e) : t || e
//     }
//     countPage() {
//       let t = 1,
//         e = 0;
//       if (this.app.isAmp()) this.app.cookieBlock.getCookie(), t = Number(this.app.cookieBlock.cookieStorage.page || 1), e = Number(this.app.cookieBlock.cookieStorage.time || 0);
//       else try {
//         this.app.context.localStorage && (t = Number(this.app.context.localStorage.getItem("_mgPage" + this.app.widgetParams.WIDGET.id) || 1), e = Number(this.app.context.localStorage.getItem("_mgPageTime" + this.app.widgetParams.WIDGET.id) || 0))
//       } catch { }
//       let i = this.app.getPageCount(),
//         s = this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "PageOffset"] ? parseInt(this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "PageOffset"]) : 0;
//       if (t < i && t > 0 ? this.app.page = t + 1 : (t > i - 1 || t < 1) && (this.app.page = 1 + s), new Date().getTime() - e >= 6e5 && (this.app.page = 1 + s), this.app.widgetParams.WIDGET.codePaginatorEnabled && !this.app.widgetParams.WIDGET.widgetPaginator && !this.app.page && (this.app.page = 1), this.app.pageUnlim = this.app.page - 1, this.app.widgetParams.WIDGET.disableCookies) {
//         let r = new Date;
//         this.app.page = r.getSeconds() % i + 1
//       } else if (!this.app.context.document.cookie) {
//         let r = new Date;
//         this.app.page = r.getSeconds() % i + 1
//       }
//     }
//     setPage() {
//       if (this.app.isAmp()) this.app.cookieBlock.cookieStorage.page = this.app.page, this.app.cookieBlock.cookieStorage.time = new Date().getTime().toString(), this.app.cookieBlock.setCookie();
//       else try {
//         this.app.context.localStorage && (this.app.context.localStorage.setItem("_mgPage" + this.app.widgetParams.WIDGET.id, String(this.app.page)), this.app.context.localStorage.setItem("_mgPageTime" + this.app.widgetParams.WIDGET.id, String(new Date().getTime())))
//       } catch { }
//     }
//     setMuidn(t) {
//       if (this.app.muid = t, this.app.isAmp()) this.app.cookieBlock.cookieStorage.muidn = t, this.app.cookieBlock.setCookie();
//       else try {
//         this.app.context.localStorage && this.app.context.localStorage.setItem("mgMuidn", t)
//       } catch { }
//     }
//     init() {
//       if (typeof JSON != "object" && (this.app.hidePreloadDiv(), this.app.log("Unsupported browser", "error"), this.app.debugBlock.sendData("Unsupported browser")), this.app.canUseShadowDom()) {
//         let t = this.app.root;
//         try {
//           t.parentNode.attachShadow({
//             mode: this.app.widgetParams.WIDGET.shadowDomClosed ? "closed" : "open"
//           }).appendChild(t)
//         } catch (e) {
//           this.app.log("Shadow DOM can't be attached: ", "error", e)
//         }
//       }
//       if (this.app.root) {
//         if (this.app.countPage(), this.app.addClickHandler(this.app.clickHandlerList.hangNiceLinkListener.handler, this.app.clickHandlerList.hangNiceLinkListener.priority), this.app.addEvent(this.app.root, "mouseup", this.app.eventsHangNiceLinkListener), this.app.addEvent(this.app.root, "contextmenu", this.app.eventsHangNiceLinkListener), this.app.addEvent(this.app.root, "touchstart", this.app.eventsHangNiceLinkListener), this.app.blocksAddress = this.app.webProtocol + "//" + this.app.servicerDomain + "/", this.app.widgetParams.WIDGET.useDefaultJs) {
//           this.app.context["mgDefaultComposite" + this.app.widgetParams.WIDGET.id] = () => {
//             this.app.defaultComposite(this.app.widgetParams.WIDGET.id)
//           }, this.app.context["mgDefaultComposite" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId] = () => {
//             this.app.defaultComposite(this.app.widgetParams.WIDGET.id)
//           }, this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "DefaultComposite" + this.app.widgetParams.WIDGET.id] = () => {
//             this.app.defaultComposite(this.app.widgetParams.WIDGET.id)
//           }, this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "DefaultComposite" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId] = () => {
//             this.app.defaultComposite(this.app.widgetParams.WIDGET.id)
//           };
//           for (let i in this.app.childWidgetsData)
//             if (this.app.childWidgetsData.hasOwnProperty(i)) {
//               let s = this.app.childWidgetsData[i].childId;
//               this.app.context["mgDefaultComposite" + s] = () => {
//                 this.app.defaultComposite(s)
//               }, this.app.context["mgDefaultComposite" + s + "_" + this.app.uniqId] = () => {
//                 this.app.defaultComposite(s)
//               }, this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "DefaultComposite" + s] = () => {
//                 this.app.defaultComposite(s)
//               }, this.app.context[this.app.widgetParams.WIDGET.informerPrefix + "DefaultComposite" + s + "_" + this.app.uniqId] = () => {
//                 this.app.defaultComposite(s)
//               }
//             }
//         }
//         let t = this.app.getRoot();
//         if (this.app.widgetParams.WIDGET.clicktrackingEnabled) {
//           let i = t.dataset.clickTracking,
//             s = this.app.context.MGClickTracking;
//           i && i.indexOf("CLICK_URL") === -1 ? this.app.clickTracking = i : s && s.indexOf("CLICK_URL") === -1 && (this.app.clickTracking = s)
//         }
//         if (this.app.adblockDetectResult === null && (this.app.adblockDetectResult = this.app.isAdblockDetected()), this.app.widgetParams.WIDGET.adblockIntegration && (this.app.adBlockStatement = this.app.adBlockDetect()), this.app.adBlockStatement && (t.classList.add("eyeo"), this.app.rtbDisabled = 1), this.app.adBlockStatement && this.app.widgetParams.WIDGET.adBlockChangeStyles && this.app.setTemplate(this.app.widgetParams.WIDGET.adblockTemplate.replace(/[\r\n]/g, "")), this.app.context.onClickExcludes = this.app.context.onClickExcludes || [], this.app.context.onClickExcludes.push(this.app.root), this.app.widgetParams.WIDGET.enableSource) {
//           let i = t.dataset.srcId,
//             s = this.app.context[this.app.widgetParams.WIDGET.sourceName];
//           this.app.isSourceNameSatisfy(i) ? this.app.sourceName = i : this.app.isSourceNameSatisfy(s) && (this.app.sourceName = s), this.app.adBlockStatement && (this.app.sourceName = "eyeo")
//         } !this.app.widgetParams.WIDGET.useConstructor && this.app.widgetParams.WIDGET.disableResizeImageAfterLoad && (this.app.stylesheetsBlock.add("resizeImage", this.app.getMainCssSelector() + " img.mcimg {max-width: 0px;}"), this.app.stylesheetsBlock.add("resizeTitle", this.app.getMainCssSelector() + " .mctitle a { font-size: 0px}"));
//         let e = ".mgbox {text-align: center;}";
//         this.app.adBlockStatement && this.app.widgetParams.WIDGET.adBlockChangeStyles ? this.app.stylesheetsBlock.add("adBlockMain", this.app.adBlockStyles + e) : typeof this.app.context._mgBackfillStyles < "u" && !this.app.widgetParams.WIDGET.customStylesEnabled ? this.app.setBackfillStyles() : this.app.stylesheetsBlock.add("main", this.app.styles + e), this.app.addEvent(this.app.root, "click", this.app.widgetClickHandler), this.app.addEvent(this.app.root, "auxclick", this.app.widgetClickHandler)
//       }
//     }
//     isSourceNameSatisfy(t) {
//       return !!t && (typeof t == "string" || typeof t == "number") && t !== "${PUBLISHER_ID}"
//     }
//     setBackfillStyles() {
//       let t = this.app.context._mgBackfillStyles,
//         e = `.mgbox {text-align: center; padding: 0 !important;margin: 0 auto !important;
//       width: 100% !important;
//       max-width: 100% !important;border: none !important;}.mgbox:first-of-type {padding: 0 !important;}
//       .mgbox .mgline {width: 100% !important;max-width: 100% !important;height: auto !important;
//       padding: 0 !important;margin: 0 !important;box-shadow: none !important;border-radius: 0 !important;
//       background: none !important;}.mgline .mcdesc {display: none !important;}`;
//       this.app.isMobile() || (t = t.replace("@media (max-width: 480px)", "@media (min-width: 480px)")), t.indexOf(".mgtobottom .mcdomain") !== -1 && (t = t.replace(".mgtobottom .mcdomain", ".mcdomain"), t = t.replace(".mgtobottom .mcdomain a", ".mcdomain a")), this.app.stylesheetsBlock.add("backfillMain", t + e)
//     }
//     resetPage() {
//       this.app.page = 1
//     }
//     getMostTopWindow() {
//       let t = this.app.context;
//       for (; t != t.parent;) try {
//         let e = t.parent.document.body;
//         t = t.parent
//       } catch {
//         break
//       }
//       return t
//     }
//     getDevicePixelRatio() {
//       let t = 1;
//       return typeof this.app.context.devicePixelRatio < "u" ? t = this.app.context.devicePixelRatio : typeof this.app.context.screen.systemXDPI < "u" && typeof this.app.context.screen.logicalXDPI < "u" && this.app.context.screen.systemXDPI > this.app.context.screen.logicalXDPI && (t = this.app.context.screen.systemXDPI / this.app.context.screen.logicalXDPI), t % 1 === 0 || (t = t.toFixed(3)), t
//     }
//     getCbusterParameter() {
//       return this.app.context.MG_CacheBuster || new Date().getTime() + "" + Math.floor(Math.random() * 1e9 + 1)
//     }
//     async injectScript(t, e) {
//       this.app.time("processHooks(beforeInjectScriptHooks)"), await this.lifeCycleBlock.processHooks("beforeInjectScriptHooks", null), this.app.timeEnd("processHooks(beforeInjectScriptHooks)"), this.app.injectionScriptMethod(t, e)
//     }
//     createServicerScriptElement(t, e) {
//       let i = this.app.context.document.createElement("script"),
//         s = `${this.app.widgetParams.WIDGET.informerPrefix}C${this.app.widgetParams.WIDGET.id}DisableStart`,
//         r = `mgDisableStart${this.app.widgetParams.WIDGET.id}`,
//         p = typeof this.app.context[s] < "u" || typeof this.app.context[r] < "u" || this.app.getRoot().dataset.disableStart === "true";
//       i.type = p ? "text/plain" : "text/javascript", i.charset = "utf-8", i.referrerPolicy = "strict-origin-when-cross-origin";
//       let u = this.app.widgetParams.WIDGET.id;
//       if (this.app.adBlockStatement && Object.keys(this.app.childWidgetsData).some(f => {
//         let b = this.app.childWidgetsData[f];
//         if (b.showMonetizationEnabled === 1 && typeof b.childId < "u") return u = b.childId, this.app.requestParams.src_cid = this.app.originalId, !0
//       }), this.app.widgetParams.WIDGET.ampLimitAdsEnabled) try {
//         if (this.app.context.localStorage) {
//           let f = this.app.context.localStorage.getItem("_mgPageAmp" + this.app.widgetParams.WIDGET.id);
//           e = f ? Number(f) + 1 : 1, this.app.context.localStorage.setItem("_mgPageAmp" + this.app.widgetParams.WIDGET.id, String(e))
//         }
//       } catch { }
//       let d = t ? "fs/" : "";
//       return i.src = this.app.blocksAddress + d + u + "/" + e, i
//     }
//     getMuid() {
//       if (!this.app.muid.length) {
//         let t = "";
//         if (this.app.isAmp()) this.app.cookieBlock.getCookie(), t = this.app.cookieBlock.cookieStorage.muidn || "";
//         else try {
//           this.app.context.localStorage && (t = this.app.context.localStorage.getItem("mgMuidn"))
//         } catch { }
//         typeof t == "string" && t.length && (this.app.muid = t)
//       }
//       return this.app.muid
//     }
//     getArticlePublishedTime() {
//       let t = "",
//         e = this.app.getMostTopWindow(),
//         i = e.document.querySelector('meta[property="article:published_time"]') || e.document.querySelector('meta[property="og:article:published_time"]');
//       if (i && (t = i.getAttribute("content")?.trim() || ""), !t.length) try {
//         let s = JSON.parse(e.document.querySelector('script[type="application/ld+json"]')?.textContent.trim() || "{}");
//         if (Object.keys(s)?.length) {
//           let r = "dateModified",
//             p = u => {
//               for (let d in u)
//                 if (u.hasOwnProperty(d)) {
//                   let f = u[d];
//                   if (d === r) return f;
//                   if (typeof f == "object") {
//                     let b = p(f);
//                     if (b) return b
//                   }
//                 }
//             };
//           t = p(s)?.trim() || ""
//         }
//       } catch (s) {
//         this.app.log("getArticlePublishedTime - Failed", "error", s)
//       }
//       return t
//     }
//     injectionScriptMethod(t, e) {
//       let i = this.app.createServicerScriptElement(t, this.app.page);
//       this.app.requestParams = {
//         ...this.app.requestParams,
//         ...this.app.pageViewPixelBlock.getPageDataParams()
//       };
//       let s = this.app.getUserAgentDataParams();
//       s && (this.app.requestParams = {
//         ...this.app.requestParams,
//         ...s
//       });
//       let r = this.app.getVideoMetricsParams();
//       if (r && (this.app.requestParams = {
//         ...this.app.requestParams,
//         ...r
//       }), this.app.consentDataParams = this.app.consentsBlock.getConsentData(), this.app.consentDataParams && (this.app.requestParams = {
//         ...this.app.requestParams,
//         ...this.app.consentDataParams
//       }), this.app.consentOrigin !== null && (this.app.requestParams.consentOrigin = this.app.consentOrigin), this.app.consentOrigin === Ut.Cmp) typeof this.app.requestParams.consentStrLen < "u" && delete this.app.requestParams.consentStrLen, typeof this.app.requestParams.consentTimestamp < "u" && delete this.app.requestParams.consentTimestamp;
//       else try {
//         let D = this.app.context.localStorage.getItem("MG_tcfv2Data");
//         this.app.requestParams.consentStrLen = D ? D.length : 0, D && (this.app.requestParams.consentTimestamp = JSON.parse(D || "{}")?.timestamp || 0)
//       } catch { }
//       typeof this.app.context["_mgRMB" + this.app.widgetParams.WIDGET.widgetClientSiteId] < "u" && (this.app.requestParams.rmb = 1);
//       let p = this.app.getMostTopWindow()["_mgBrowsi" + this.app.widgetParams.WIDGET.widgetClientSiteId];
//       if (typeof p == "number" && (this.app.requestParams.browsi = p), this.app.adBlockStatement && (this.app.requestParams.adb = 1, typeof this.app.rtbDisabled < "u" && (this.app.requestParams.rtb_disabled = this.app.rtbDisabled)), this.app.widgetParams.WIDGET.adblockIntegration && this.app.widgetParams.WIDGET.adTypes && this.app.adBlockStatement && (this.app.requestParams.ad = "pg,r"), (this.app.widgetParams.WIDGET.adblockEmulation || this.app.adblockDetectResult) && (this.app.requestParams.eyeo = 1), typeof this.app.context.MGi < "u" && (this.app.requestParams.iso = this.app.context.MGi, this.app.requestParams.token = this.app.context._mgToken), typeof this.app.context._mgPreview < "u" || this.app.getRoot().dataset.preview) {
//         let v = JSON.parse(this.app.widgetParams.WIDGET.subnets)[this.app.widgetParams.WIDGET.currentSubnet];
//         this.app.requestParams.advsrcid = v.advSrcId, this.app.requestParams.token = this.app.context._mgToken || this.app.getRoot().dataset.token
//       }
//       if (this.app.widgetParams.WIDGET.enableSource && this.app.sourceName && (this.app.requestParams.src_id = this.app.sourceName), typeof this.app.context["ampOptions" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId] < "u") try {
//         let D = JSON.parse(this.app.context["ampOptions" + this.app.widgetParams.WIDGET.id + "_" + this.app.uniqId].replace(/'/g, '"')),
//           {
//             srcId: v,
//             limitAds: I
//           } = D || {};
//         v && v !== "${PUBLISHER_ID}" && (this.app.requestParams.src_id = v), I && I !== "${LIMIT_ADS}" && (this.app.requestParams.limitads = I)
//       } catch { }
//       if (JSON.parse(this.app.widgetParams.WIDGET.enabledCooperationTypes).indexOf("int_exchange") >= 0 || this.app.widgetParams.WIDGET.createIntExchange) {
//         let D = this.app.context.document.querySelector('meta[property="og:title"]');
//         if (this.app.context !== this.app.context.top) try {
//           D = this.app.context.parent.document.querySelector('meta[property="og:title"]')
//         } catch { }
//         D && (this.app.requestParams.ogtitle = encodeURIComponent(D.getAttribute("content")))
//       }
//       this.app.uniqId !== "" && this.app.widgetParams.WIDGET.allowMultipleWidgets && (this.app.requestParams.uniqId = this.app.uniqId), this.app.getActiveChilds().length && (this.app.requestParams.childs = this.app.getActiveChilds().join(",")), e && (this.app.requestParams.rsh = e, this.app.requestParams.initial_composite = this.app.id, e === 2 && this.app.collectExceptParams(), typeof this.app.requestParams.cmpreason < "u" && delete this.app.requestParams.cmpreason, typeof this.app.requestParams.nocmp < "u" && delete this.app.requestParams.nocmp), (Array.isArray(this.app.context._mgExceptAds) && this.app.context._mgExceptAds.length || Array.isArray(this.app.context._mgExchangeNews) && this.app.context._mgExchangeNews.length || Array.isArray(this.app.context._mgIntExchangeNews) && this.app.context._mgIntExchangeNews.length || typeof this.app.context.document.mgExceptIds < "u") && this.app.collectExceptParams(), this.app.gptOptions?.backfill && !this.app.adBlockStatement && typeof this.app.context["_mgGPT" + this.app.widgetParams.WIDGET.id] > "u" ? (this.app.context["_mgGPT" + this.app.widgetParams.WIDGET.id] = !0, this.app.requestParams.gptbid = this.app.gptOptions.backfill) : typeof this.app.requestParams.gptbid < "u" && delete this.app.requestParams.gptbid, typeof this.app.context.MG_setRequestNonPersonalizedAds < "u" && this.app.context.MG_setRequestNonPersonalizedAds == 1 && (this.app.requestParams.npa = 1);
//       try {
//         let D = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
//         typeof D.type < "u" && (this.app.networkInformationType = D.type, this.app.requestParams.nit = this.app.networkInformationType), typeof D.effectiveType < "u" && (this.app.networkInformationEffectiveType = D.effectiveType, this.app.requestParams.niet = this.app.networkInformationEffectiveType), typeof D.saveData < "u" && (this.app.networkInformationSaveData = D.saveData ? 1 : 0, this.app.requestParams.nisd = D.saveData)
//       } catch { }
//       this.app.widgetParams.WIDGET.sspSanctionsEnabled && (this.app.requestParams.afp = this.app.context.navigator.platform.toLowerCase()), typeof this.app.context[`_mgSingleJS${this.app.widgetParams.WIDGET.widgetClientSiteId}`] < "u" && (this.app.requestParams.jsp = this.app.context[`_mgSingleJS${this.app.widgetParams.WIDGET.widgetClientSiteId}`]), this.app.requestParams.pv = 5, this.app.requestParams.lct = this.app.getLct(1739371452), this.app.requestParams.jsv = "es6", this.app.requestParams.pageView = this.app.pageView, this.app.requestParams.dpr = this.app.getDevicePixelRatio(), this.app.requestParams.ref = encodeURIComponent(this.app.contextBlock.stripAmpParts(this.app.refererParam)), this.app.requestParams.hashCommit = N.widgetBuilder, this.app.iframePlacementType !== 0 && (this.app.requestParams.iframe = this.app.iframePlacementType);
//       let u = this.app.getMuid();
//       u.length && (this.app.requestParams.muid = u);
//       let d = this.app.getArticlePublishedTime();
//       d.length && (this.app.requestParams.apt = encodeURIComponent(d));
//       let f = this.app.context?.performance.getEntriesByType?.("navigation")[0]?.responseEnd,
//         b = this.app.context?.performance.now?.(),
//         k = Math.round(b - f);
//       typeof k == "number" && !isNaN(k) && (this.app.requestParams.tfre = k);
//       let S = [];
//       for (let D in this.app.requestParams) this.app.requestParams.hasOwnProperty(D) && S.push(`${D}=${this.app.requestParams[D]}`);
//       if (typeof this.app.globalSettings.retention_tool_widget_utm == "string" && this.app.globalSettings.retention_tool_widget_utm.length && !this.app.isAmp()) {
//         let D = this.app.globalSettings.retention_tool_widget_utm,
//           I = (this.app.pageUrl || this.app.context.location.href || "").split("&").filter(L => L.indexOf(D) !== -1).slice(0, 1).join("");
//         I = I.substring(I.indexOf(D)), I && S.push(I)
//       }
//       let y = i.src;
//       y.indexOf("?") == -1 ? y += "?" : y += "&", y += S.join("&"), i.src = y, this.app.sspPerformance && typeof this.app.context.performance.getEntries < "u" && (i.onload = () => {
//         this.app.context.performance.getEntries().map(D => {
//           if (D.name === y) {
//             let v = Math.ceil(D.responseEnd - D.startTime);
//             this.app.request.pixel("widgetSspPerformance", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/widget-ssp-performance", {
//               time: `time=${v}`
//             }, {})
//           }
//         })
//       }), window.performance?.mark("ssp_request_start", {
//         detail: {
//           _mgwidget: this.app.widgetParams.WIDGET.id
//         }
//       }), this.app.context.document.head.appendChild(i), i.onerror = () => {
//         this.app.isAdblock = !0
//       }
//     }
//     collectExceptParams() {
//       let t = this.app.getExceptTeasersIds(F.Wages),
//         e = this.app.getExceptTeasersIds(F.InternalExchange),
//         i = this.app.getExceptTeasersIds(F.Exchange);
//       t.length && (this.app.requestParams.except_ads = t.join(",")), e.length && (this.app.requestParams.exclude_int_exchange = e.join(",")), i.length && (this.app.requestParams.exclude_news = i.join(","))
//     }
//     sendConsentLog(t) {
//       let e = this.app.calculateSessionsBlock.getSessionId(),
//         i = {
//           widget: `widget=${this.app.id}`,
//           pvId: `pv_id=${this.app.pvid}`,
//           diffTime: `diff_time=${Math.ceil((t - this.app.startServicerTime) / 1e3)}`,
//           storage: `storage=${this.app.requestParams.consentOrigin === Ut.Storage ? 1 : 0}`
//         };
//       e && (i.sessionId = `session_id=${e}`), this.app.request.pixel(`loggingConsent${this.app.id}`, this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/consent-log", i, {
//         unique: !0
//       })
//     }
//     getActiveChilds() {
//       return JSON.parse(this.app.widgetParams.WIDGET.activeChilds)
//     }
//     addClickHandler(t, e) {
//       this.app.clickHandlers.push({
//         handler: t,
//         priority: e
//       }), this.app.clickHandlers.sort(function (i, s) {
//         return i.priority < s.priority ? -1 : 1
//       })
//     }
//     widgetClickHandler(t) {
//       t || (t = this.app.context.event), t.target || (t.target = t.srcElement);
//       let e = t.target;
//       if (e.tagName !== "A") {
//         e = this.app.getParentLink(e);
//         let i = !1;
//         if ("which" in t ? i = t.which === 3 : "button" in t && (i = t.button === 2), !e && !i) {
//           let s = this.app.getParentElWithClass(t.target, "text-elements");
//           if (s) {
//             let r = t.target.getElementsByTagName("A");
//             r[0] ? e = r[0] : (r = s.getElementsByTagName("A"), r[0] && (e = r[0]))
//           }
//           if (e) {
//             e.click();
//             return
//           }
//         }
//       }
//       if (e && !(!e.hasAttribute("data-hash") && !e.classList.contains("mg-close-action")))
//         for (let i = 0; i < this.app.clickHandlers.length; i++) try {
//           if (!this[this.app.clickHandlers[i].handler](e, t)) return
//         } catch (s) {
//           this.app.log("Click Handler name: " + this.app.clickHandlers[i].handler + ", error: ", "error", s)
//         }
//     }
//     start() {
//       this.app.root && this.app.countLoadBlocks == 0 && this.app.injectScript(!1)
//     }
//     defaultComposite(t) {
//       if (this.app.widgetParams.WIDGET.useDefaultJs) {
//         this.app.loadedDefault = !0, this.app.hidePreloadDiv();
//         let e = this.app.context.document.createElement("script");
//         e.type = "text/javascript", e.charset = "utf-8", e.src = this.app.webProtocol + "//jsc." + this.app.widgetParams.WIDGET.blocksDomainAddressJs + "/" + t + ".js", this.app.root.parentNode.appendChild(e), this.app.context["_mgDefaultJs" + t] = this.app.context["_mgDefaultJs" + t] || [], this.app.context["_mgDefaultJs" + t].push(this.app.root.id)
//       }
//     }
//     addEvent(t, e, i) {
//       let s = i.bind(this);
//       return (e === "touchstart" || e === "touchmove") && this.app.isPassiveSupported() ? t.addEventListener(e, s, {
//         passive: !0
//       }) : t.addEventListener(e, s, !1), s
//     }
//     removeEvent(t, e, i) {
//       t.removeEventListener(e, i, !1)
//     }
//     getMainCssSelector() {
//       return "#" + (this.app.realRoot ? this.app.realRoot.id : this.app.root.id)
//     }
//     doubleClickHandler(t, e = !1) {
//       let i = t.getAttribute("data-hash"),
//         s = t.getAttribute("href"),
//         r = {
//           checkId: "checkId=" + this.app.doubleClickCheckId,
//           cid: "cid=" + this.app.getWidgetValue("id", this.app.widgetParams.WIDGET.id),
//           gb_uid: "gb_uid=" + this.app.getWidgetValue("goodsPartUid", this.app.widgetParams.WIDGET.goodsPartUid),
//           h2: "h2=" + this.app.servicerData.h2,
//           hash: "hash=" + i,
//           percent: "percent=" + this.app.doubleClickPercent,
//           type: "type=" + this.app.doubleClickType,
//           url: "url=" + encodeURIComponent(s),
//           uuid: "uuid=" + this.app.servicerData.rid
//         };
//       e && (r.isOut = "isOut=" + Number(e)), this.app.request.pixel("doubleclick", this.app.webProtocol + "//" + this.app.widgetParams.WIDGET.countersDomain + "/doubleclick", r, {})
//     }
//     isAzerionTeaser(t, e) {
//       let i = this.app.teaserData[e || t?.getAttribute("data-hash")];
//       return !!(i && i.type === $.Teaser && i.coopType === F.Azerion)
//     }
//     adBlockDetect() {
//       return this.app.widgetParams.WIDGET.adblockIntegration && this.app.widgetParams.WIDGET.adblockEmulation ? !0 : (this.app.adblockDetectResult === null && (this.app.adblockDetectResult = this.app.isAdblockDetected()), this.app.adblockDetectResult)
//     }
//     isShadowRoot() {
//       try {
//         return typeof this.app.root.getRootNode < "u" && !!this.app.root.getRootNode().host
//       } catch {
//         return !1
//       }
//     }
//     canUseShadowDom() {
//       let t = this.app.root.parentNode;
//       return !!(this.app.widgetParams.WIDGET.shadowDom && t && (t.id?.indexOf("ScriptRoot") > 0 || t.dataset?.type === "_mgwidget") && typeof t.attachShadow == "function")
//     }
//     getRoot() {
//       return this.app.isShadowRoot() ? this.app.root.getRootNode().host : this.app.root.parentElement
//     }
//     generatePvid() {
//       return new Date().getTime().toString(16) + (Math.round(Math.random() * 1e9) + 2147483648).toString(16)
//     }
//     getLct(t) {
//       return t - t % 60
//     }
//     isAmp() {
//       return typeof this.app.context.context < "u" && typeof this.app.context.context.data < "u" && typeof this.app.context.context.data.widget < "u" ? !0 : typeof this.app.context["boundingClientRect" + this.app.widgetParams.WIDGET.id] < "u" && typeof this.app.context["intersectionRect" + this.app.widgetParams.WIDGET.id] < "u"
//     }
//     isIframe() {
//       try {
//         return this.app.context.self !== this.app.context.top
//       } catch {
//         return !0
//       }
//     }
//     startMgqwp() {
//       typeof this.context._mgwqp < "u" ? setTimeout(() => {
//         this.context._mgwqp()
//       }, 0) : setTimeout(() => {
//         this.startMgqwp()
//       }, 50)
//     }
//     htmlEntities(t) {
//       return String(typeof t < "u" ? t : "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
//     }
//     getRenderer(t) {
//       return t.indexOf("data-template-schema") === -1 ? this.app.renderClassicBlock : this.app.renderSchematicBlock
//     }
//     getViewrateParams() {
//       let t = Object.keys(this.app.teaserData).filter(s => this.app.teaserData[s].isViewed),
//         e = t.length,
//         i = t.map(s => this.app.teaserData[s].page).filter((s, r, p) => p.indexOf(s) === r).reduce((s, r) => s + this.app.pagesServicerData.filter(p => p.page === r)[0]?.teasersCount, 0);
//       return {
//         views: e,
//         renders: i
//       }
//     }
//     getUserAgentDataParams() {
//       if (this.app.userAgentDataParams) return this.app.userAgentDataParams;
//       try {
//         if (this.app.context.sessionStorage) return JSON.parse(this.app.context.sessionStorage.getItem("_mgAgentDataParams"))
//       } catch {
//         return null
//       }
//       return null
//     }
//     getVideoMetricsParams() {
//       if (this.app.videoMetricsParams) return this.app.videoMetricsParams;
//       try {
//         if (this.app.context.sessionStorage) return JSON.parse(this.app.context.sessionStorage.getItem("_mgVideoMetricsParams"))
//       } catch {
//         return null
//       }
//       return null
//     }
//     buildSingleJSBackfillDiv(t) {
//       let e = document.createElement("div"),
//         i = this.app.getRoot().dataset;
//       return e.dataset.widgetId = String(t), Object.keys(i).forEach(s => {
//         s !== "uid" && s !== "widgetId" && (e.dataset[s] = i[s])
//       }), e
//     }
//     getBackfillParamsByString() {
//       let t = this.app.getExceptTeasersIds(F.Wages),
//         e = this.app.getExceptTeasersIds(F.InternalExchange),
//         i = this.app.getExceptTeasersIds(F.Exchange),
//         {
//           cxurl: s,
//           ref: r,
//           implVersion: p
//         } = this.app.requestParams,
//         {
//           gdpr_consent: u,
//           gdpr: d
//         } = this.app.consentsBlock.getConsentData() || {};
//       return "<script>var _mgExceptAds = [" + t + "];var _mgIntExchangeNews = [" + e + "];var _mgExchangeNews = [" + i + '];var _mgBackfillCxurl = "' + decodeURIComponent(s) + '";var _mgBackfillRef = "' + decodeURIComponent(r) + '";<\/script>' + (this.app.isAmp() ? "<script>var _mgBackfillImplVersion = " + p + ";<\/script>" : "") + (this.app.isAmp() && u ? "<script>var _mgGdprApplies = " + d + '; var _mgConsentData = "' + u + '";<\/script>' : "")
//     }
//   };
//   T();
//   B();
//   ee();
//   var pe;
//   (function (m) {
//     m.Init = "init", m.Render = "render"
//   })(pe || (pe = {}));
//   var ce = class {
//     constructor(t) {
//       this.app = t, this.app.debugBlock.initDebugger(), this.app.lifeCycleBlock = this, this.stage = null, this.workInProgress = !1, this.isUserAgentDataAvailable = typeof this.app.context?.navigator?.userAgentData?.getHighEntropyValues == "function", this.isAdBlockDetect = this.app.widgetParams.WIDGET.adblockIntegration && this.app.adBlockDetect(), this.workersAvailable = typeof Worker < "u";
//       try {
//         let e = new Worker(window.URL.createObjectURL(new Blob([], {
//           type: "text/javascript"
//         })))
//       } catch {
//         this.workersAvailable = !1
//       }
//       if (this.workersAvailable) {
//         let e = new Blob([`self.onmessage = function(e) { 
//               if (e.data.timeout === 0) { self.postMessage({ eventId: e.data.eventId }); }
//               else { setTimeout(function() { self.postMessage({ eventId: e.data.eventId }); }, e.data.timeout); }
//             }`], {
//           type: "text/javascript"
//         });
//         this.worker = new Worker(window.URL.createObjectURL(e)), this.workerCallbacks = {}, this.worker.addEventListener("message", i => {
//           this.workerCallbacks[i.data.eventId](), delete this.workerCallbacks[i.data.eventId]
//         })
//       }
//     }
//     async run() {
//       this.stage = pe.Init, this.workInProgress = !0, this.app.time("run()");
//       try {
//         if (typeof this.app.context[`_mgPauseBackfill_${this.app.widgetParams.WIDGET.id}`] < "u" && (this.app.time("waitForLoadBackfill()"), await this.waitForLoadBackfill(), this.app.timeEnd("waitForLoadBackfill()")), this.app.getVideoMetricsParams() === null && (this.app.time("initVideoMetricsBlock"), await this.execute("", async () => {
//           this.app.videoMetricsBlock = new (await Promise.resolve().then(() => (Ni(), Mi))).VideoMetricsBlock(this.app)
//         }), this.app.timeEnd("initVideoMetricsBlock")), this.isUserAgentDataAvailable && this.app.getUserAgentDataParams() === null && (this.app.time("initNavigatorAgentDataBlock"), await this.execute("", async () => {
//           this.app.navigatorAgentDataBlock = new (await Promise.resolve().then(() => (Fi(), Vi))).NavigatorAgentDataBlock(this.app)
//         }), this.app.timeEnd("initNavigatorAgentDataBlock")), this.app.isAmp() && (this.app.time("initAmpRenderBlock"), await this.execute("", async () => {
//           this.app.ampRenderBlock = new (await Promise.resolve().then(() => (qi(), ji))).AmpRenderBlock(this.app)
//         }), this.app.timeEnd("initAmpRenderBlock")), this.isUserAgentDataAvailable && this.app.getUserAgentDataParams() === null && (this.app.time("app.navigatorAgentDataBlock.waitForUserAgentData()"), await this.app.navigatorAgentDataBlock.waitForUserAgentData(), this.app.timeEnd("app.navigatorAgentDataBlock.waitForUserAgentData()")), this.app.time("initBlocks()"), await this.initBlocks(), this.app.timeEnd("initBlocks()"), this.app.rootId === "TempRootId" && (this.app.time("waitWidgetLoad()"), await this.waitWidgetLoad(), this.app.timeEnd("waitWidgetLoad()")), this.app.time("processHooks(beforeInitHooks)"), await this.processHooks("beforeInitHooks", null), this.app.timeEnd("processHooks(beforeInitHooks)"), await this.execute("app.init()", () => {
//           this.app.init()
//         }), this.app.time("processHooks(afterInitHooks)"), await this.processHooks("afterInitHooks", null), this.app.timeEnd("processHooks(afterInitHooks)"), this.app.widgetParams.WIDGET.newTabEnabled && (this.app.time("app.newTabBlock.waitForActivity()"), await this.app.newTabBlock.waitForActivity(), this.app.timeEnd("app.newTabBlock.waitForActivity()")), this.app.widgetParams.WIDGET.useLazyLoad && (this.app.time("app.lazyLoadBlock.waitForVisibility()"), await this.app.lazyLoadBlock.waitForVisibility(), this.app.timeEnd("app.lazyLoadBlock.waitForVisibility()")), this.app.widgetParams.WIDGET.type === "passage" && (this.app.time("app.passageBlock.waitForPassageResolve()"), await this.app.passageBlock.waitForPassageResolve(), this.app.timeEnd("app.passageBlock.waitForPassageResolve()")), this.app.widgetParams.WIDGET.type === "interstitial" && (this.app.time("app.interstitialBlock.waitForPassageResolve()"), await this.app.interstitialBlock.waitForPassageResolve(), this.app.timeEnd("app.interstitialBlock.waitForPassageResolve()")), this.app.widgetParams.WIDGET.popup && (this.app.time("app.popupBlock.waitForPopup()"), await this.app.popupBlock.waitForPopup(), this.app.timeEnd("app.popupBlock.waitForPopup()")), this.app.widgetParams.WIDGET.type === "mobile-widget" && (this.app.time("app.mobileWidgetBlock.waitForMobileWidget()"), await this.app.mobileWidgetBlock.waitForMobileWidget(), this.app.timeEnd("app.mobileWidgetBlock.waitForMobileWidget()")), this.app.widgetParams.WIDGET.type === "in-site-notification" && (this.app.time("app.inSiteNotificationBlock.waitForInSiteWidget()"), await this.app.inSiteNotificationBlock.waitForInSiteWidget(), this.app.timeEnd("app.inSiteNotificationBlock.waitForInSiteWidget()")), this.app.widgetParams.WIDGET.swipeUpEnabled && (this.app.time("app.swipeUpBlock.waitForSwipeUpResolve()"), await this.app.swipeUpBlock.waitForSwipeUpResolve(), this.app.timeEnd("app.swipeUpBlock.waitForSwipeUpResolve()")), this.app.widgetParams.WIDGET.sendDimensions && this.app.precalcRect === null) {
//           let t = await this.execute("app.preparePrerenderData()", () => this.app.sendDimensions.preparePrerenderData()),
//             e = await this.execute("app.templateFunc()", () => {
//               let i = this.app.getRenderer(this.app.templateText);
//               return i.setRawTemplate(this.app.templateText), i.getHtml(t)
//             });
//           await this.execute("app.prerenderNews()", () => {
//             this.app.sendDimensions.prerenderNews(e), this.app.sendDimensions.checkStylesApplied()
//           }), await this.app.sendDimensions.waitForStyleApplied(), await this.execute("app.calcPreRenderingBlock()", () => {
//             this.app.sendDimensions.calcPreRenderingBlock()
//           }, 50)
//         }
//         this.app.time("processHooks(afterPreRenderNewsHooks)"), await this.processHooks("afterPreRenderNewsHooks", null), this.app.timeEnd("processHooks(afterPreRenderNewsHooks)"), this.app.getVideoMetricsParams() === null && (this.app.time("app.videoMetricsBlock.waitForCollectMetrics()"), await this.app.videoMetricsBlock.waitForCollectMetrics(), this.app.timeEnd("app.videoMetricsBlock.waitForCollectMetrics()")), await this.execute("app.injectScript()", () => {
//           this.app.injectScript(!1)
//         }), this.app.initServicerRequest || (this.app.time("processHooks(afterInjectScriptHooks)"), await this.processHooks("afterInjectScriptHooks", null), this.app.timeEnd("processHooks(afterInjectScriptHooks)"))
//       } catch (t) {
//         this.app.log("", "error", t)
//       }
//       this.workInProgress = !1, this.app.timeEnd("run()")
//     }
//     async render(t, e) {
//       await this.waitForFree(), this.stage = pe.Render, this.workInProgress = !0, this.app.time("render()");
//       try {
//         await this.execute("loadNewsPrestart()", () => {
//           this.app.loadNewsPrestart(e, t?.length)
//         });
//         let i = this.app.responseParser.getAdUnitsFromJson(t);
//         this.app.responseParser.fillAdUnitsData(i), this.app.time("processHooks(beforeLoadNewsHooks)"), await this.processHooks("beforeLoadNewsHooks", [t, e]), this.app.timeEnd("processHooks(beforeLoadNewsHooks)"), await this.execute("app.loadNews()", () => {
//           this.app.getRenderer(this.app.templateText).setRawTemplate(this.app.templateText), this.app.loadNews(i)
//         }), this.app.time("processHooks(afterLoadNewsHooks)"), await this.processHooks("afterLoadNewsHooks", null), this.app.timeEnd("processHooks(afterLoadNewsHooks)")
//       } catch (i) {
//         this.app.log("", "error", i)
//       }
//       window.performance?.mark("render_finish", {
//         detail: {
//           _mgwidget: this.app.widgetParams.WIDGET.id
//         }
//       }), this.workInProgress = !1, this.app.timeEnd("render()")
//     }
//     async initBlocks() {
//       if (await this.execute("", async () => {
//         this.app.mgqBlock = new (await Promise.resolve().then(() => (Te(), zi))).MgqBlock(this.app)
//       }), this.app.widgetParams.WIDGET.crossDomainStorageEnabled && await this.execute("", async () => {
//         await jt.waitForFrame()
//       }), await this.execute("", async () => {
//         this.app.utils = new (await Promise.resolve().then(() => (Ui(), $i))).UtilsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.consentsBlock = new (await Promise.resolve().then(() => (Xi(), Zi))).ConsentsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.request = new (await Promise.resolve().then(() => (Qi(), Yi))).RequestBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.contextBlock = new (await Promise.resolve().then(() => (es(), ts))).ContextBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.pageViewPixelBlock = new (await Promise.resolve().then(() => (ss(), is))).PageViewPixelBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.main = new (await Promise.resolve().then(() => (rs(), as))).MainBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.responseParser = new (await Promise.resolve().then(() => (ns(), os))).ResponseParserBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.cookieBlock = new (await Promise.resolve().then(() => (cs(), ps))).CookieBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.stylesheetsBlock = new (await Promise.resolve().then(() => (ls(), hs))).StylesheetsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.advertLinkBlock = new (await Promise.resolve().then(() => (us(), ds))).AdvertLinkBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.SendDimensionsBlock && await this.execute("", async () => {
//         this.app.sendDimensions = new (await Promise.resolve().then(() => (gs(), fs))).SendDimensionsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.InternalExchangeLogger = new (await Promise.resolve().then(() => (xs(), ms))).InternalExchangeLoggerBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.RefreshTeaserAfterClickBlock && await this.execute("", async () => {
//         this.app.refreshTeaserAfterClickBlock = new (await Promise.resolve().then(() => (ys(), ws))).RefreshTeaserAfterClickBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.RejectBlock && await this.execute("", async () => {
//         this.app.rejectBlock = new (await Promise.resolve().then(() => (vs(), bs))).RejectBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.dsaIconBlock = new (await Promise.resolve().then(() => (Is(), ks))).DSAIconBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.teaserHoverBlock = new (await Promise.resolve().then(() => (Ps(), Ss))).TeaserHoverBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.inAppParamsBlock = new (await Promise.resolve().then(() => (Cs(), Es))).InAppParamsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.countersBlock = new (await Promise.resolve().then(() => (Bs(), Ts))).CountersBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.subnetsBlock = new (await Promise.resolve().then(() => (Ls(), Ws))).SubnetsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.scrollTimeDoubleClickBlock = new (await Promise.resolve().then(() => (_s(), As))).ScrollTimeDoubleClickBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.smartDoubleClickBlock = new (await Promise.resolve().then(() => (Rs(), Os))).SmartDoubleClickBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.mobileDoubleClickBlock = new (await Promise.resolve().then(() => (Ms(), Hs))).MobileDoubleClickBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.desktopDoubleClickBlock = new (await Promise.resolve().then(() => (Vs(), Ns))).DesktopDoubleClickBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.sspDoubleClickBlock = new (await Promise.resolve().then(() => (js(), Fs))).SspDoubleClickBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.externalCountersBlock = new (await Promise.resolve().then(() => (zs(), qs))).ExternalCountersBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.videoTeasersBlock = new (await Promise.resolve().then(() => (Us(), $s))).VideoTeasersBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.OriginTrialsBlock && await this.execute("", async () => {
//         this.app.originTrialsBlock = new (await Promise.resolve().then(() => (Ks(), Js))).OriginTrialsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.calculateSessionsBlock = new (await Promise.resolve().then(() => (Xs(), Zs))).CalculateSessionsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.calculateViewrateBlock = new (await Promise.resolve().then(() => (Qs(), Ys))).CalculateViewrateBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.sharedIdBlock = new (await Promise.resolve().then(() => (ea(), ta))).SharedIdBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.RenderClassicBlock && await this.execute("", async () => {
//         this.app.renderClassicBlock = new (await Promise.resolve().then(() => (sa(), ia))).RenderClassicBlock(this.app)
//       }), this.app.widgetParams.WIDGET.isNextUpAddWidget && await this.execute("", async () => {
//         this.app.renderSchematicBlock = new (await Promise.resolve().then(() => (ra(), aa))).RenderSchematicBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.ScaleInfoBlock && await this.execute("", async () => {
//         this.app.scaleInfoBlock = new (await Promise.resolve().then(() => (na(), oa))).ScaleInfoBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.BrowserTopicsBlock && await this.execute("", async () => {
//         this.app.browserTopicsBlock = new (await Promise.resolve().then(() => (ca(), pa))).BrowserTopicsBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.AntifraudBlock && (await this.execute("", async () => {
//         this.app.antifraudStatisticsBlock = new (await Promise.resolve().then(() => (da(), la))).AntifraudStatisticsBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.antifraudBlock = new (await Promise.resolve().then(() => (ma(), ga))).AntifraudBlock(this.app)
//       })), this.app.widgetParams.WIDGET.BLOCKS.LazyLoadBlock && await this.execute("", async () => {
//         this.app.lazyLoadBlock = new (await Promise.resolve().then(() => (wa(), xa))).LazyLoadBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.FillCardLikesBlock && await this.execute("", async () => {
//         this.app.fillCardLikesBlock = new (await Promise.resolve().then(() => (ba(), ya))).FillCardLikesBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.AccidentalClicksBlock && await this.execute("", async () => {
//         this.app.accidentalClicksBlock = new (await Promise.resolve().then(() => (ka(), va))).AccidentalClicksBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.ActivateDelayBlock && await this.execute("", async () => {
//         this.app.activateDelayBlock = new (await Promise.resolve().then(() => (Sa(), Ia))).ActivateDelayBlock(this.app)
//       }), this.isAdBlockDetect) {
//         for (let t in this.app.childWidgetsData)
//           if (this.app.childWidgetsData.hasOwnProperty(t)) {
//             let e = this.app.childWidgetsData[t].isAdblockChild,
//               i = this.app.childWidgetsData[t].childSubtype;
//             if (e && i === "in-article-adblock") {
//               await this.execute("", async () => {
//                 this.app.hideDescriptionBlock = new (await Promise.resolve().then(() => (Da(), Pa))).HideDescriptionBlock(this.app)
//               });
//               break
//             }
//           }
//       }
//       await this.execute("", async () => {
//         this.app.collectViewDataBlock = new (await Promise.resolve().then(() => (Ca(), Ea))).CollectViewDataBlock(this.app)
//       }), this.app.widgetParams.WIDGET.BLOCKS.RtbBlock && await this.execute("", async () => {
//         this.app.rtbBlock = new (await Promise.resolve().then(() => (Ba(), Ta))).RtbBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.observerBlock = new (await Promise.resolve().then(() => (La(), Wa))).ObserverBlock(this.app)
//       }), await this.execute("", async () => {
//         this.app.refactoredMonitorBlock = new (await Promise.resolve().then(() => (_a(), Aa))).RefactoredMonitorBlock(this.app)
//       });
//       try {
//         this.app.context.localStorage && this.app.widgetParams.WIDGET.BLOCKS.ID5Block && await this.execute("ID5Block", async () => {
//           this.app.id5Block = new (await Promise.resolve().then(() => (Ra(), Oa))).ID5Block(this.app)
//         })
//       } catch { }
//       try {
//         await Promise.resolve().then(() => (Ma(), xr)), await Promise.resolve().then(() => Se(Na())), await this.initializeCustomFuncBlocks()
//       } catch (t) {
//         this.app.log("LifeCycleBlock - Initialize Custom Func Blocks error:", "error", t)
//       }
//     }
//     async initializeCustomFuncBlocks() {
//       let t = window[`${this.app.widgetParams.WIDGET.I}`].parentCustomFuncBlocks || {};
//       for (let e in t)
//         if (t.hasOwnProperty(e)) {
//           let i = e.replace(/[-_]/g, "").replace(/./, r => r.toUpperCase()) + "Block",
//             s = `Custom func block - ${e}`;
//           await this.execute(s, r => {
//             try {
//               this.app[i] = new t[e](this.app), r()
//             } catch (p) {
//               this.app.log(`LifeCycleBlock - ${s} error:`, "error", p), this.app.debugBlock.sendData(p.message), r()
//             }
//           }, 0, !1, !0)
//         }
//     }
//     async processHooks(t, e) {
//       let i = this.app[t];
//       for (let s = 0; s < i.length; s++) {
//         let r = i[s];
//         try {
//           await r(e)
//         } catch (p) {
//           this.app.log(`LifeCycleBlock - ${t} hook ${r} failed`, "error", p)
//         }
//       }
//     }
//     async execute(t, e, i = 0, s = !1, r = !1) {
//       t && typeof this.app.time == "function" && this.app.time(t);
//       let p = navigator.userAgent.toLowerCase(),
//         u = this.app.widgetParams.WIDGET.disableCwvOptimization || this.app.isAmp() || !(p.indexOf("chrome") > -1 && navigator.vendor.toLowerCase().indexOf("google") > -1) || p.indexOf("fbav") > -1 || p.indexOf("fban") > -1;
//       return new Promise(d => {
//         if (u && !s) r ? e(d) : d(e());
//         else if (this.app.context.scheduler) this.app.context.scheduler.postTask(() => {
//           r ? e(d) : d(e())
//         }, {
//           delay: i
//         });
//         else if (this.workersAvailable) {
//           let f = ("0000000000" + Math.round(Math.random() * 1e10).toString(16)).slice(-10);
//           this.workerCallbacks[f] = () => {
//             r ? e(d) : d(e())
//           }, this.worker.postMessage({
//             eventId: f,
//             timeout: i
//           })
//         } else setTimeout(() => {
//           r ? e(d) : d(e())
//         }, i)
//       }).finally(() => {
//         t && typeof this.app.timeEnd == "function" && this.app.timeEnd(t)
//       })
//     }
//     async waitForFree() {
//       return new Promise(t => {
//         (function e() {
//           this.workInProgress ? this.execute("", () => {
//             e.bind(this)()
//           }, 50, !0) : t()
//         }).bind(this)()
//       })
//     }
//     async waitWidgetLoad() {
//       return new Promise(t => {
//         this.app.lifeCycleLoadResolver = t
//       })
//     }
//     async waitForLoadBackfill() {
//       return new Promise(t => {
//         let e = i => {
//           let s = `_mgLoadBackfill_${this.app.widgetParams.WIDGET.id}`;
//           i.data === s && typeof this.app.context[s] > "u" && (this.app.context[s] = !0, this.app.context.removeEventListener("message", e, !1), this.app.context.parent.postMessage(s, "*"), t())
//         };
//         this.app.context.addEventListener("message", e, !1)
//       })
//     }
//   };
//   T();
//   B();
//   T();
//   B();
//   var Zt;
//   (function (m) {
//     m.es5 = "es5", m.es6 = "es6"
//   })(Zt || (Zt = {}));
//   var he = class {
//     constructor(t, e) {
//       if (this.additionalWidgets = t, this.urlType = e, this.additionalWidgets.length)
//         for (let i = 0; i < this.additionalWidgets.length; i++) setTimeout(() => {
//           this.init(this.additionalWidgets[i])
//         }, 0)
//     }
//     init(t) {
//       let e = t.widgetDivId ? this.createWidgetDiv(t.id, t.widgetDivId) : null,
//         i = this.createWidgetScript(t.urls[this.urlType]),
//         s = t.insertTo || "before";
//       this.waitForElement(t.searchSelector).then(r => {
//         t.widgetDivId && this.insertWidgetBlock(r, e, s), window.performance?.mark("main_script_start_load", {
//           detail: {
//             _mgwidget: t.id
//           }
//         }), this.insertWidgetScript(i)
//       })
//     }
//     createWidgetDiv(t, e) {
//       let i = document.createElement("div"),
//         s = document.createElement("div"),
//         r = e;
//       return i.classList.add(`${r}-additional`), s.id = r, i.appendChild(s), i
//     }
//     createWidgetScript(t) {
//       let e = document.createElement("script");
//       return e.src = t, e.async = !0, e.crossOrigin = "anonymous", e
//     }
//     insertWidgetBlock(t, e, i) {
//       switch (i) {
//         case "into":
//           t.appendChild(e);
//           break;
//         case "before":
//           t.parentElement.insertBefore(e, t);
//           break;
//         case "after":
//           t.insertAdjacentElement("afterend", e);
//           break
//       }
//     }
//     insertWidgetScript(t) {
//       document.head ? document.head.appendChild(t) : document.body.appendChild(t)
//     }
//     waitForElement(t) {
//       return new Promise(e => {
//         if (document.querySelector(t)) return e(document.querySelector(t));
//         let i = new MutationObserver(() => {
//           document.querySelector(t) && (e(document.querySelector(t)), i.disconnect())
//         });
//         i.observe(document, {
//           childList: !0,
//           subtree: !0
//         })
//       })
//     }
//   };
//   var q;
//   (function (m) {
//     m.startedPage = "mg-started-page", m.additionalPage = "mg-additional-page", m.container = "mg-additional-container", m.header = "mg-additional-header", m.headerAdded = "mg-header-added", m.popup = "mg-additional-popup", m.popupInner = "mg-additional-popup-inner", m.popupText = "mg-additional-popup-text", m.popupTriangle = "mg-additional-popup-triangle", m.popupCloseBtn = "mg-additional-popup-close-btn", m.popupAdded = "mg-popup-added", m.popupShowed = "mg-popup-showed", m.popupClosed = "mg-popup-closed", m.crossButtonContainer = "mg-additional-cross-button", m.crossButton = "mg-cross-button"
//   })(q || (q = {}));
//   var le = class extends _t {
//     constructor(t) {
//       if (super(), this.startedPage = "_mgStartedPage", this.additionalPage = "_mgAdditionalPage", this.storageStartUrl = "_mgStartUrl", this.storagePopupCloseTime = "_mgPopupCloseTime", this.storagePagesList = "_mgStartPagesList", this.servicerFiltersData = "_mgServicerFiltersData", this.name = "BackButtonBlock", this.options = t, typeof window[this.servicerFiltersData] > "u") {
//         window[this.servicerFiltersData] = {}, this.widgetId = Number(this.options.widget_id), this.widgetContainerSelector = `M${this.options.siteId}ScriptRootC${this.widgetId}-additional`, this.hasFilters = !!this.options?.filters?.length, this.isAggressiveMode = this.options?.aggressive_mode, this.initialEvent = typeof onpointerdown > "u" ? "click" : "pointerdown", this.pointerHandler = this.pointerHandler.bind(this);
//         try {
//           typeof sessionStorage < "u" && (this.hasFilters ? this.checkFilters() : this.start())
//         } catch (e) {
//           console.log(`${this.name}: sessionStorage not available.`, e)
//         }
//       }
//     }
//     checkGeoFilters() {
//       let t = this.options?.filters?.filter(i => i.type === "exclude_countries")[0]?.value,
//         e = this.options.singleJsUrl || (this.isSupportES6() ? this.options.widgetPathES6 : this.options.widgetPathES5);
//       return new Promise(i => {
//         t && t.length ? typeof fetch == "function" && typeof e == "string" && fetch(e, {
//           method: "HEAD",
//           cache: "force-cache"
//         }).then(s => {
//           let r = s.headers?.get("X-Cntry")?.toLowerCase();
//           r ? t.some(p => p.toLowerCase() === r) ? console.log(`${this.name}: the block didn't pass GEO filtering conditions.`) : i() : console.log(`${this.name}: header X-Cntry didn't found.`)
//         }).catch(s => {
//           console.log(`${this.name}: fetch error.`, s)
//         }) : i()
//       })
//     }
//     checkDeviceFilters() {
//       let t, e = this.options?.filters?.filter(i => i.type === "device")[0]?.value;
//       return new Promise(i => {
//         e && e.length ? t = setInterval(() => {
//           if (typeof window[this.servicerFiltersData].device < "u") {
//             clearInterval(t);
//             let s = window[this.servicerFiltersData].device.toLowerCase();
//             e.some(r => r.toLowerCase() === s) ? i() : console.log(`${this.name}: the block didn't pass Device filtering conditions.`)
//           }
//         }, 250) : i()
//       })
//     }
//     checkTrafficSourceFilters() {
//       let t, e = this.options?.filters?.filter(i => i.type === "traffic_source")[0]?.value;
//       return new Promise(i => {
//         e && e.length ? t = setInterval(() => {
//           if (typeof window[this.servicerFiltersData].trafficSource < "u") {
//             clearInterval(t);
//             let s = window[this.servicerFiltersData].trafficSource.toLowerCase();
//             e.some(r => r.toLowerCase().indexOf(s) !== -1) ? i() : console.log(`${this.name}: the block didn't pass Traffic Source filtering conditions.`)
//           }
//         }, 250) : i()
//       })
//     }
//     checkTrafficTypeFilters() {
//       let t, e = this.options?.filters?.filter(i => i.type === "traffic_type")[0]?.value;
//       return new Promise(i => {
//         e && e.length ? t = setInterval(() => {
//           if (typeof window[this.servicerFiltersData].trafficType < "u") {
//             clearInterval(t);
//             let s = window[this.servicerFiltersData].trafficType.toLowerCase();
//             e.some(r => r.toLowerCase() === s) ? i() : console.log(`${this.name}: the block didn't pass Traffic Type filtering conditions.`)
//           }
//         }, 250) : i()
//       })
//     }
//     checkFilters() {
//       Promise.all([this.checkGeoFilters(), this.checkDeviceFilters(), this.checkTrafficSourceFilters(), this.checkTrafficTypeFilters()]).then(() => {
//         this.start()
//       })
//     }
//     start() {
//       let t, i = new Date().getTime(),
//         s = null;
//       if (window?.performance?.getEntriesByType("navigation")?.length ? s = window.performance.getEntriesByType("navigation")[0] : window?.performance?.timing && (s = window.performance.timing), s?.loadEventEnd && s.loadEventEnd > 0) {
//         this.startEvents();
//         return
//       }
//       t = setInterval(() => {
//         if (new Date().getTime() - i >= 42e4) {
//           clearInterval(t), console.log(`${this.name}: didn't load, too long site page loading process.`);
//           return
//         }
//         s?.loadEventEnd && s.loadEventEnd > 0 && (clearInterval(t), this.startEvents())
//       }, 150)
//     }
//     startEvents() {
//       this.siteBody = document.body || document.documentElement;
//       let t = history.state,
//         e = this.getStartedUrl(),
//         i = document.location.href;
//       (this.isAggressiveMode ? this.hasStoragePage(i) : e === i) && this.isObject(t) && t.hasOwnProperty(this.additionalPage) && typeof window[this.additionalPage] > "u" && (window[this.additionalPage] = !0, this.buildAdditionalPage(), this.showAdditionalPage()), this.siteBody.addEventListener(this.initialEvent, this.pointerHandler), window.addEventListener("popstate", this.popstateHandler.bind(this))
//     }
//     pointerHandler() {
//       this.siteBody.removeEventListener(this.initialEvent, this.pointerHandler);
//       let t = document.location.href;
//       this.isAggressiveMode ? this.hasStoragePage(t) || (this.setStoragePage(t), this.pushHistoryState()) : this.getStartedUrl() || (this.setStartedUrl(t), this.pushHistoryState())
//     }
//     popstateHandler(t) {
//       let e = t.target?.history?.state || t.state,
//         i = this.getStartedUrl(),
//         s = document.location.href,
//         r = e === null || e === "" || this.isObject(e) && !e.hasOwnProperty(this.startedPage) && !e.hasOwnProperty("flowcards"),
//         p = this.isAggressiveMode ? this.hasStoragePage(s) : i === s;
//       if (p && r && typeof window[this.additionalPage] > "u") {
//         window[this.additionalPage] = !0, this.replaceHistoryState(), this.buildAdditionalPage(), this.showAdditionalPage();
//         return
//       }
//       this.isObject(e) && (!p && !e.hasOwnProperty(this.additionalPage) && !e.hasOwnProperty(this.startedPage) && this.showRegularPage(), e.hasOwnProperty(this.startedPage) && this.showStartedPage(), e.hasOwnProperty(this.additionalPage) && this.showAdditionalPage())
//     }
//     pushHistoryState() {
//       let t = history.state,
//         e = {
//           [this.startedPage]: !0
//         },
//         i = document.location;
//       if (t === null || t === "") (this.isIosFBWebview() || this.isFBAndroid()) && !i.hash ? history.pushState(e, "", i.href + "#" + this.generateHash()) : history.pushState(e, "", "");
//       else if (this.isObject(t)) {
//         let s = {
//           ...t,
//           ...e
//         };
//         (this.isIosFBWebview() || this.isFBAndroid()) && !i.hash ? history.pushState(s, "", i.href + "#" + this.generateHash()) : history.pushState(s, "", "")
//       } else console.log(`${this.name}: client also uses history.state and its not an object, so module will not work.`)
//     }
//     replaceHistoryState() {
//       let t = history.state,
//         e = {
//           [this.additionalPage]: !0
//         };
//       t === null || t === "" ? history.replaceState(e, "", "") : this.isObject(t) ? history.replaceState({
//         ...t,
//         ...e
//       }, "", "") : console.log(`${this.name}: client also uses history.state and its not an object, so module will not work.`)
//     }
//     buildAdditionalPage() {
//       let t = this.options?.display?.some(r => r.type === "header"),
//         e = this.options?.display?.some(r => r.type === "banner"),
//         i = this.options?.cross_button || !1,
//         s = document.createElement("div");
//       s.classList.add(q.container), s.style.display = "none", this.siteBody.appendChild(s), this.styles = `
//       body.${q.additionalPage} > *:not(.${q.container}),
//       html.${q.additionalPage} > *:not(.${q.container}) {
//         display: none !important;
//       }
//       body.${q.additionalPage} .${q.container},
//       html.${q.additionalPage} .${q.container} {
//         display: block !important;
//       }
//       body.${q.startedPage} .${q.container},
//       html.${q.startedPage} .${q.container} {
//         display: none !important;
//       }
//       body.${q.additionalPage},
//       html.${q.additionalPage} {
//         padding-top: 0 !important;
//         margin-top: 0 !important;
//         transform: none !important;
//       }
//       .${q.container} {display: none;margin: 0 auto;box-sizing: border-box;
//         padding: 15px 10px;width: 100%;max-width: 1100px;background: #fff;}
//     `, t && this.insertHeader(s), i && this.insertCrossButton(s), e && this.insertPopup(s), (i || e) && this.changeSize(s), this.addingStyles(s), this.addingWidget(s)
//     }
//     insertHeader(t) {
//       let e = this.options.display.filter(s => s.type === "header")[0]?.options?.selector || "header",
//         i = document.querySelector(e);
//       if (i) {
//         let s = getComputedStyle(i),
//           r = i.cloneNode(!0);
//         r.classList.add(q.header), t.classList.add(q.headerAdded), t.appendChild(r), this.styles = this.styles + `.${q.container}.${q.headerAdded} {padding: 0 !important;}
//         .${q.header} {margin-bottom: 10px !important;z-index: 9999999 !important;}
//         .${q.container}.${q.headerAdded} div[class=${this.widgetContainerSelector}] {
//         padding: 0 10px;box-sizing: border-box;}`, !this.isMobile() && !this.isTablet() && (t.style.maxWidth = s.width), s.position === "fixed" && (r.style.maxWidth = "100%", r.style.top = "0px", r.style.zIndex = "9999999", t.style.setProperty("padding-top", s.height, "important"))
//       }
//     }
//     insertCrossButton(t) {
//       let i = document.createElement("div");
//       i.classList.add(q.crossButtonContainer);
//       let s = document.createElement("div");
//       s.classList.add(q.crossButton), s.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" 
//       xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" 
//       width="27px" height="27px" viewBox="0 0 43 40" enable-background="new 0 0 43 40" 
//       xml:space="preserve"><path fill="#4C4C4C" d="M21.5,2c-9.941,0-18,8.06-18,18.001c0,9.941,8.059,18,
//       18,18s18-8.059,18-18C39.5,10.059,31.441,2,21.5,2z"></path><path fill="#FFFFFF" d="M30.076,24.07c0.564,
//       0.564,0.564,1.482,0,2.047l-2.459,2.459c-0.564,0.564-1.48,0.564-2.047,0l-4.07-4.07  
//       l-4.07,4.07c-0.566,0.564-1.482,0.564-2.051,0l-2.455-2.459c-0.566-0.564-0.566-1.482,
//       0-2.047l4.07-4.07l-4.07-4.071  c-0.566-0.565-0.566-1.482,0-2.049l2.455-2.455c0.568-0.566,
//       1.484-0.566,2.051,0l4.07,4.07l4.07-4.07  c0.566-0.566,1.482-0.566,2.047,0l2.459,2.455c0.564,
//       0.566,0.564,1.483,0,2.049L26.006,20L30.076,24.07z"></path></svg>`, this.styles = this.styles + `.${q.crossButtonContainer} {display: block !important;
//       margin: 10px auto !important;} .${q.crossButton} {display: block !important;
//       width: 27px !important;height: 27px !important;max-width: 27px !important;
//       max-height: 27px !important;cursor: pointer;border-radius: 50%;overflow: hidden;
//       margin-left: auto;} .${q.crossButton} svg {max-width: 27px !important; 
//       max-height: 27px !important;}`, t.appendChild(i), i.appendChild(s), s.addEventListener("click", () => {
//         history.back(), this.showStartedPage()
//       })
//     }
//     insertPopup(t) {
//       let e = localStorage.getItem(this.storagePopupCloseTime),
//         i = 24 * 60 * 60 * 1e3,
//         s = e && new Date().getTime() - Number(e) >= i;
//       if (!e || s) {
//         let r = this.options.display.filter(k => k.type === "banner")[0]?.options,
//           p = r?.bg_color || "#0279f5",
//           u = r?.text_color || "#ffffff",
//           d = r?.text || this.getTranslation("[INFORMER_BACK_BUTTON_BANNER_TEXT]"),
//           f = document.createElement("div");
//         f.classList.add(q.popup), t.classList.add(q.popupAdded), f.innerHTML = `<div class="${q.popupInner}">
//         <div class="${q.popupText}">${d}</div><div class="${q.popupTriangle}"></div>
//         <div class="${q.popupCloseBtn}"><svg width="11" height="11" viewBox="0 0 11 11">
//         <path fill="${u}" fill-rule="evenodd" d="M10.34.038L5.5 4.878.66.038.038.66l4.84 
//         4.84-4.84 4.84.622.622 4.84-4.84 4.84 4.84.622-.622-4.84-4.84 4.84-4.84z"></path></svg></div></div>`, t.appendChild(f), this.styles = this.styles + `.${q.popup} {display: block;margin: 0 auto;width: 100%;
//         height: 50px;overflow: hidden;position: relative;z-index: 999999;}
//         .${q.popupInner} {position: relative;display: flex;align-items: center;
//         justify-content: space-between;margin: 0 auto;width: 100%;height: 40px;text-align: center;
//         transition: all 0.7s ease;opacity: 0;transform: translateY(-150px);background: ${p};}
//         .${q.popup}.${q.popupShowed} .${q.popupInner} {transform: translateY(0px);
//         opacity: 1;}.${q.popup}.${q.popupClosed} .${q.popupInner} {
//         display: none;}.${q.popup}.${q.popupClosed} {z-index: -1;}
//         .${q.popupText} {box-sizing: border-box;padding: 10px;width: 100%;height: 100%;
//         display: flex;align-items: center;justify-content: center;font-family: Helvetica, Arial, sans-serif;
//         font-size: 16px;line-height: 1;font-weight: 400;color: ${u};}
//         .${q.popupTriangle} {display: block;position: absolute;bottom: -10px;left: 50%;
//         transform: translateX(-50%);width: 0;height: 0;border-left: 12px solid transparent;
//         border-right: 12px solid transparent;border-top: 12px solid;color: ${p};}
//         .${q.popupCloseBtn} {display: flex;align-items: center;justify-content: center;
//         width: 15px;height: 15px;margin-right: 10px;color: ${u};cursor: pointer;}
//         .${q.container}.${q.popupAdded} div[class=${this.widgetContainerSelector}] {
//         margin-top: -40px;}@media (max-width: 480px) {.${q.popupText} {font-size: 13px;}}`;
//         let b = document.querySelector(`.${q.popupCloseBtn}`);
//         b && b.addEventListener("click", () => {
//           f.classList.add(q.popupClosed), localStorage.setItem(this.storagePopupCloseTime, String(new Date().getTime()))
//         })
//       }
//     }
//     changeSize(t) {
//       let e = t.querySelector(`.${q.popup}`),
//         i = t.querySelector(`.${q.crossButtonContainer}`),
//         s, r = 90 * 1e3,
//         p = new Date().getTime();
//       s = setInterval(() => {
//         if (new Date().getTime() - p >= r) {
//           clearInterval(s), console.log(`${this.name}: additional Smart widget didn't load.`);
//           return
//         }
//         let u = t.querySelector(`div[class=${this.widgetContainerSelector}]`);
//         if (u && u.children.length) {
//           let d = u.children[0],
//             f, b;
//           if (d.shadowRoot && d.shadowRoot.children.length ? f = d.shadowRoot.children : d.children.length && (f = d.children), f?.length && [].slice.call(f).forEach(k => {
//             k.getElementsByClassName("mgbox")[0] && (b = k.getElementsByClassName("mgbox")[0])
//           }), b) {
//             clearInterval(s);
//             let k = getComputedStyle(b).width;
//             e && (e.style.maxWidth = k, e.classList.add(q.popupShowed)), i && (i.style.maxWidth = k), window.addEventListener("resize", () => {
//               e && (e.style.maxWidth = getComputedStyle(b).width), i && (i.style.maxWidth = getComputedStyle(b).width)
//             })
//           }
//         }
//       }, 150)
//     }
//     addingStyles(t) {
//       let e = document.createElement("style");
//       e.setAttribute("id", "mgAdditionalStyles"), e.appendChild(document.createTextNode(this.styles)), t.appendChild(e)
//     }
//     addingWidget(t) {
//       if (this.options.singleJsUrl) {
//         let e = this.getSingleJsController(this.options.siteId),
//           i = document.createElement("div"),
//           s = document.createElement("div");
//         s.dataset.type = "_mgwidget", s.dataset.widgetId = String(this.widgetId), i.classList.add(this.widgetContainerSelector), i.appendChild(s), t.appendChild(i), e && e.load()
//       } else new he([{
//         id: this.widgetId,
//         urls: {
//           es5: this.options.widgetPathES5.split(".").map((e, i, s) => i === s.length - 3 ? this.widgetId : e).join("."),
//           es6: this.options.widgetPathES6.split(".").map((e, i, s) => i === s.length - 3 ? this.widgetId : e).join(".")
//         },
//         widgetDivId: `M${this.options.siteId}ScriptRootC${this.widgetId}`,
//         searchSelector: `.${q.container}`,
//         insertTo: "into"
//       }], this.isSupportES6() ? Zt.es6 : Zt.es5)
//     }
//     showAdditionalPage() {
//       this.siteBody.classList.remove(q.startedPage), this.siteBody.classList.add(q.additionalPage)
//     }
//     showStartedPage() {
//       this.siteBody.classList.remove(q.additionalPage), this.siteBody.classList.add(q.startedPage)
//     }
//     showRegularPage() {
//       this.siteBody.classList.remove(q.startedPage), this.siteBody.classList.remove(q.additionalPage)
//     }
//     getStartedUrl() {
//       return sessionStorage.getItem(this.storageStartUrl)
//     }
//     setStartedUrl(t) {
//       sessionStorage.setItem(this.storageStartUrl, t)
//     }
//     hasStoragePage(t) {
//       return (JSON.parse(sessionStorage.getItem(this.storagePagesList)) || []).some(i => i === t)
//     }
//     setStoragePage(t) {
//       let e = JSON.parse(sessionStorage.getItem(this.storagePagesList)) || [];
//       e.push(t), sessionStorage.setItem(this.storagePagesList, JSON.stringify(e))
//     }
//     getTranslation(t) {
//       let e = this.options.translations;
//       return t.search(/^\[\S*\]$/g) === 0 ? e[t] ? e[t] : "" : t
//     }
//   };
//   T();
//   B();
//   var de = class {
//     constructor(t) {
//       this.observerNeeded = !1, this.isSingleJsScriptChecked = !1, this.supportsEs6 = t, this.widgetParams = V, this.widgetOptions = {}, JSON.parse('[{"id":1648626,"searchSelector":"","insertTo":"into"},{"id":1648657,"searchSelector":"","insertTo":"into"},{"id":1648807,"searchSelector":"","insertTo":"into"},{"id":1697842,"searchSelector":"","insertTo":"into"}]').forEach(e => {
//         this.widgetOptions[e.id] = e, e.searchSelector.length && (this.observerNeeded = !0)
//       }), this.loadBrowsi(), this.observerNeeded && (this.observe(), setInterval(() => {
//         this.observe()
//       }, 1e3)), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => {
//         this.checkAndLoadInitialWidgets()
//       }) : this.checkAndLoadInitialWidgets()
//     }
//     load() {
//       this.checkSingleJsScript();
//       let t = window.document.querySelectorAll('div[data-type="_mgwidget"]');
//       [].slice.call(t).forEach(e => {
//         typeof e.dataset.uid < "u" || this.loadWidget(e, window)
//       })
//     }
//     checkAndLoadInitialWidgets() {
//       let t, i = new Date().getTime();
//       this.load(), t = setInterval(() => {
//         if (new Date().getTime() - i >= 18e4) {
//           clearInterval(t);
//           return
//         }
//         this.load()
//       }, 1e3)
//     }
//     loadWidget(t, e) {
//       let i = Number(t.dataset.widgetId),
//         s = this.widgetOptions[i];
//       if (s) {
//         if (!this.isUrlMatched(s)) return;
//         let r = JSON.parse(JSON.stringify(this.widgetParams[0]));
//         for (let y of Object.keys(this.widgetParams[i]))
//           for (let D of Object.keys(this.widgetParams[i][y])) r[y] = r[y] || {}, r[y][D] = this.widgetParams[i][y][D];
//         r.WIDGET.BLOCKS = r.BLOCKS;
//         let p = this.isNextUpAddWidget(r.WIDGET, t);
//         if (!this.canLoadCurrentWidget(r.WIDGET) && !p) return;
//         window.performance?.mark("main_script_start_load", {
//           detail: {
//             _mgwidget: i
//           }
//         });
//         let u = this.getUID(),
//           d = `mgw${i}_${u}`;
//         if (t.dataset.uid = u, s.searchSelector.length && (r.WIDGET.enableSource && !t.dataset.srcId && (t.dataset.srcId = "${PUBLISHER_ID}"), r.WIDGET.clicktrackingEnabled && !t.dataset.clickTracking && (t.dataset.clickTracking = r.WIDGET.clicktrackingMacros), r.WIDGET.type === "header-widget")) {
//           let y = r.WIDGET.subType,
//             D = document.createElement("style");
//           D.innerHTML = `
//             div[data-widget-id="${i}"] {
//               min-height: ${y === "header-widget-square" ? 350 : 300}px;
//             }
//           `, t.insertAdjacentElement("beforebegin", D)
//         }
//         let f = document.createElement("div");
//         f.id = d, t.appendChild(f), p ? this.prepareNextUpAddWidgetParams(r) : this.loadBackButton(r.WIDGET, r.GENERAL.translations), window.performance?.mark("main_script_start_work", {
//           detail: {
//             _mgwidget: i
//           }
//         });
//         let b = new te(d, e, !1, d, u, 17, r),
//           k = new ce(b),
//           S = window[r.WIDGET.I];
//         S ? window[r.WIDGET.I] = Object.assign({}, b, S) : window[r.WIDGET.I] = b, k.run()
//       }
//     }
//     loadBrowsi() { }
//     loadBackButton(t, e) {
//       if (t.backButtonOptions && t.backButtonOptions !== "null" && t.backButtonOptions !== "{}" && t.backButtonOptions !== "[]") {
//         let i = JSON.parse(t.backButtonOptions);
//         i.siteId = 973367, i.translations = e, i.singleJsUrl = "https://jsc.adskeeper.com/site/973367.js", new le(i)
//       }
//     }
//     loadBackfill(t) {
//       let e = t.contentDocument.querySelector('div[data-type="_mgwidget"]'),
//         i = t.contentWindow;
//       e && this.loadWidget(e, i)
//     }
//     observe() {
//       let t = 0;
//       Object.keys(this.widgetOptions).forEach(e => {
//         let i = this.widgetOptions[e];
//         if (i.searchSelector === "") return;
//         let s = document.querySelectorAll(i.searchSelector);
//         [].slice.call(s).forEach(r => {
//           if (i.insertTo === "into" && !r.querySelector('div[data-type="_mgwidget"]') || i.insertTo !== "into" && !r.parentElement.querySelector('div[data-type="_mgwidget"][data-widget-id="' + i.id.toString() + '"]')) {
//             let p = document.createElement("DIV");
//             switch (p.dataset.type = "_mgwidget", p.dataset.widgetId = i.id.toString(), i.insertTo) {
//               case "into":
//                 r.appendChild(p);
//                 break;
//               case "before":
//                 r.parentElement.insertBefore(p, r);
//                 break;
//               case "after":
//                 r.insertAdjacentElement("afterend", p);
//                 break
//             }
//             t++
//           }
//         })
//       }), t > 0 && this.load()
//     }
//     getUID() {
//       return ("00000" + Math.round(Math.random() * 1e5).toString(16)).slice(-5)
//     }
//     checkSingleJsScript() {
//       if (this.isSingleJsScriptChecked) return;
//       this.isSingleJsScriptChecked = !0;
//       let t = "https://jsc.adskeeper.com/site/973367.js".split("//")[1],
//         e = document?.currentScript?.src?.split("//")[1],
//         i = document.head.querySelector(`script[src$="${t}"]`),
//         s = document.querySelector("body")?.querySelector(`script[src$="${t}"]`);
//       window._mgSingleJS973367 = i ? "head" : s ? "body" : "other", e !== t && !i && typeof window._mgDisableInstallWarning > "u" && console.warn(`JS code is not integrated correctly, place script - "${t}" in the head of your website`)
//     }
//     isUrlMatched(t) {
//       let e = !0,
//         i = window.location.href,
//         s = t.urlRulesPatterns || [],
//         r = (window.document.querySelector('meta[property="article:section"]') || window.document.querySelector('meta[property="og:article:section"]'))?.getAttribute("content")?.trim() || "";
//       switch (t.urlRulesMode) {
//         case "only":
//           e = s.some(p => r === p || i.match(p));
//           break;
//         case "except":
//           e = s.every(p => r !== p && !i.match(p));
//           break
//       }
//       return e
//     }
//     canLoadCurrentWidget(t) {
//       let e = !0,
//         i = `mg_loaded_${t.siteId}_${t.id}`;
//       return typeof window[i] < "u" && !t.allowMultipleWidgets && (e = !1), e && (window[i] = !0, t.widgetEnabled || (e = !1)), e
//     }
//     isNextUpAddWidget(t, e) {
//       return e.dataset.nextUp === "true" && typeof window["_mgNextUpAddData" + t.id] < "u"
//     }
//     prepareNextUpAddWidgetParams(t) {
//       let e = ["elastic", "flippEnabled", "hasVideoPart", "useLazyLoad", "sendDimensions"],
//         i = ["AutoRefreshInformerBlock", "BidmaticBlock", "BrowsiBlock", "ElasticBlock", "FlippBlock", "GoogleGptBlock", "InArticleAutoplacement", "LazyLoadBlock", "PaginatorBlock", "ViewabilityRefreshBlock", "VideoLibrary"];
//       t.WIDGET.isNextUpAddWidget = !0, t.WIDGET.BLOCKS.NextUpBlock = !0, t.WIDGET.BLOCKS.RenderSchematicBlock = !0, e.forEach(s => {
//         t.WIDGET[s] = !1
//       }), i.forEach(s => {
//         t.WIDGET.BLOCKS[s] = !1
//       })
//     }
//   };
//   Te();
//   T();
//   B();
//   var Va;
//   (function (m) {
//     m.load = "load", m.impression = "impression", m.click = "click"
//   })(Va || (Va = {}));
//   T();
//   B();
//   (function () {
//     let m = e();
//     if (window._mgc && (window._mgc.controllers || []).some(p => p.siteId === 973367)) {
//       console.warn("Multiple _mgc widget codes encountered! Please, make sure that there is only one implementation code is placed in HEAD for siteId: 973367.");
//       return
//     }
//     window._mgc = window._mgc || {
//       controllers: [],
//       load: () => {
//         window._mgc.controllers.forEach(p => p.controller.load())
//       }
//     }, window._mgc.controllers.push({
//       siteId: 973367,
//       controller: new de(m)
//     }), new Jt({
//       context: window,
//       log: p => {
//         console.log(p)
//       },
//       debugBlock: {
//         sendData: () => { }
//       }
//     });
//     let t = ["https://servicer.adskeeper.com"];
//     for (let p = 0; p < t.length; p++) i(t[p]);

//     function e() {
//       try {
//         return new Function("async (x = 0) => x; try {const x=window?.x;} catch {};"), !0
//       } catch {
//         return !1
//       }
//     }

//     function i(p) {
//       let u = document.createElement("link");
//       u.rel = "preconnect", u.href = p, document.head ? document.head.appendChild(u) : document.body.appendChild(u)
//     }

//     function s() { }

//     function r() { }
//   })();
// })();