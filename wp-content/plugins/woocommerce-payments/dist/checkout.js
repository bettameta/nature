!function(e,t){for(var n in t)e[n]=t[n];t.__esModule&&Object.defineProperty(e,"__esModule",{value:!0})}(this,(()=>{"use strict";var e={371:(e,t,n)=>{n.r(t);var r=function(e){return("undefined"!=typeof wcpay_config?wcpay_config:wc.wcSettings.getSetting("woocommerce_payments_data"))[e]||null},o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};const i=function(){function e(e,t){this.options=e,this.stripe=null,this.request=t}return e.prototype.getStripe=function(){if(!this.stripe){var e=this.options,t=e.publishableKey,n=e.accountId;this.stripe=new Stripe(t,{stripeAccount:n})}return this.stripe},e.prototype.generatePaymentMethodRequest=function(e,t){void 0===t&&(t={});var n=this.getStripe();return new(function(){function r(){this.args=o(o({type:"card"},e),{billing_details:{address:{}}})}return r.prototype.prepareValue=function(e,n){if(void 0!==n&&0!==n.length||(n=t[e]),void 0!==n&&0<n.length)return n},r.prototype.setBillingDetail=function(e,t){var n=this.prepareValue(e,t);void 0!==n&&(this.args.billing_details[e]=n)},r.prototype.setAddressDetail=function(e,t){var n=this.prepareValue(e,t);void 0!==n&&(this.args.billing_details.address[e]=n)},r.prototype.send=function(){return n.createPaymentMethod(this.args).then((function(e){if(e.error)throw e.error;return e}))},r}())},e.prototype.confirmIntent=function(e,t){var n=this,o=e.match(/#wcpay-confirm-(pi|si):(.+):(.+):(.+)$/);if(!o)return!0;var i="si"===o[1],c=o[2],a=o[3];!function(e,t){if("undefined"!=typeof wcpay_config)wcpay_config[e]=t;else{var n=wc.wcSettings.getSetting("woocommerce_payments_data");n[e]=t,wc.wcSettings.setSetting("woocommerce_payments_data",n)}}("updateOrderStatusNonce",o[4]);var s=e.indexOf("order-pay"),u=-1<s,d=u&&e.substring(s).match(/\d+/);return d&&(c=d[0]),{request:(i?this.getStripe().confirmCardSetup(a):this.getStripe().confirmCardPayment(a)).then((function(e){var o=e.paymentIntent&&e.paymentIntent.id||e.setupIntent&&e.setupIntent.id||e.error&&e.error.payment_intent&&e.error.payment_intent.id||e.error.setup_intent&&e.error.setup_intent.id;return[n.request(r("ajaxUrl"),{action:"update_order_status",order_id:c,_ajax_nonce:r("updateOrderStatusNonce"),intent_id:o,payment_method_id:t||null}),e.error]})).then((function(e){var t=e[0],n=e[1];if(n)throw n;return t.then((function(e){var t=JSON.parse(e);if(t.error)throw t.error;return t.return_url}))})),isOrderPage:u}},e.prototype.setupIntent=function(e){var t=this;return this.request(r("ajaxUrl"),{action:"create_setup_intent","wcpay-payment-method":e,_ajax_nonce:r("createSetupIntentNonce")}).then((function(e){if(!e.success)throw e.data.error;return"succeeded"===e.data.status?e.data:t.getStripe().confirmCardSetup(e.data.client_secret).then((function(e){var t=e.setupIntent,n=e.error;if(n)throw n;return t}))}))},e}();var c="https://cdn.sift.com/s.js",a="https://js.stripe.com/v3",s={forter:function(e){var t=e.site_id;if(!document.querySelector('script[id="'+t+'"]')){var n=document.createElement("script");n.id=t,n.textContent="(function () {var eu = 'g68x4yj4t5;e6z1forxgiurqw1qhw2vq2(VQ(2vfulsw1mv';var siteId = \""+t+'";function t(t,e){for(var n=t.split(""),r=0;r<n.length;++r)n[r]=String.fromCharCode(n[r].charCodeAt(0)+e);return n.join("")}function e(e){return t(e,-v).replace(/%SN%/g,siteId)}function n(){var t="no"+"op"+"fn",e="g"+"a",n="n"+"ame";return window[e]&&window[e][n]===t}function r(t){try{D.ex=t,n()&&D.ex.indexOf(S.uB)===-1&&(D.ex+=S.uB),y(D)}catch(e){}}function o(t,e,n,r){function o(e){try{e.blockedURI===t&&(r(!0),i=!0,document.removeEventListener("securitypolicyviolation",o))}catch(n){document.removeEventListener("securitypolicyviolation",o)}}var i=!1;t="https://"+t,document.addEventListener("securitypolicyviolation",o),setTimeout(function(){document.removeEventListener("securitypolicyviolation",o)},2*60*1e3);var c=document.createElement("script");c.onerror=function(){if(!i)try{r(!1),i=!0}catch(t){}},c.onload=n,c.type="text/javascript",c.id="ftr__script",c.async=!0,c.src=t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(c,a)}function i(){I(S.uAL),setTimeout(c,w,S.uAL)}function c(t){try{var e=t===S.uDF?h:p,n=function(){try{b(),r(t+S.uS)}catch(e){}},c=function(e){try{b(),D.td=1*new Date-D.ts,r(e?t+S.uF+S.cP:t+S.uF),t===S.uDF&&i()}catch(n){r(S.eUoe)}};o(e,void 0,n,c)}catch(a){r(t+S.eTlu)}}var a={write:function(t,e,n,r){void 0===r&&(r=!0);var o,i;if(n?(o=new Date,o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toGMTString()):i="",!r)return void(document.cookie=escape(t)+"="+escape(e)+i+"; path=/");var c,a,u;if(u=location.host,1===u.split(".").length)document.cookie=escape(t)+"="+escape(e)+i+"; path=/";else{a=u.split("."),a.shift(),c="."+a.join("."),document.cookie=escape(t)+"="+escape(e)+i+"; path=/; domain="+c;var d=this.read(t);null!=d&&d==e||(c="."+u,document.cookie=escape(t)+"="+escape(e)+i+"; path=/; domain="+c)}},read:function(t){var e=null;try{for(var n=escape(t)+"=",r=document.cookie.split(";"),o=0;o<r.length;o++){for(var i=r[o];" "==i.charAt(0);)i=i.substring(1,i.length);0===i.indexOf(n)&&(e=unescape(i.substring(n.length,i.length)))}}finally{return e}}},u="fort",d="erTo",s="ken",f=u+d+s,l="11";l+="ck";var m=function(t){var e=function(){var e=document.createElement("link");return e.setAttribute("rel","pre"+"con"+"nect"),e.setAttribute("cros"+"sori"+"gin","anonymous"),e.onload=function(){document.head.removeChild(e)},e.onerror=function(t){document.head.removeChild(e)},e.setAttribute("href",t),document.head.appendChild(e),e};if(document.head){var n=e();setTimeout(function(){document.head.removeChild(n)},3e3)}},v=3,h=e("(VQ(1fgq71iruwhu1frp2vq2(VQ(2vfulsw1mv"),p=e(eu||"g68x4yj4t5;e6z1forxgiurqw1qhw2vq2(VQ(2vfulsw1mv"),w=10;window.ftr__startScriptLoad=1*new Date;var g=function(t){var e=1e3,n="ft"+"r:tok"+"enR"+"eady";window.ftr__tt&&clearTimeout(window.ftr__tt),window.ftr__tt=setTimeout(function(){try{delete window.ftr__tt,t+="_tt";var e=document.createEvent("Event");e.initEvent(n,!1,!1),e.detail=t,document.dispatchEvent(e)}catch(r){}},e)},y=function(t){var e=function(t){return t||""},n=e(t.id)+"_"+e(t.ts)+"_"+e(t.td)+"_"+e(t.ex)+"_"+e(l);a.write(f,n,1825,!0),g(n)},T=function(){var t=a.read(f)||"",e=t.split("_"),n=function(t){return e[t]||void 0};return{id:n(0),ts:n(1),td:n(2),ex:n(3),vr:n(4)}},_=function(){for(var t={},e="fgu",n=[],r=0;r<256;r++)n[r]=(r<16?"0":"")+r.toString(16);var o=function(t,e,r,o,i){var c=i?"-":"";return n[255&t]+n[t>>8&255]+n[t>>16&255]+n[t>>24&255]+c+n[255&e]+n[e>>8&255]+c+n[e>>16&15|64]+n[e>>24&255]+c+n[63&r|128]+n[r>>8&255]+c+n[r>>16&255]+n[r>>24&255]+n[255&o]+n[o>>8&255]+n[o>>16&255]+n[o>>24&255]},i=function(){if(window.Uint32Array&&window.crypto&&window.crypto.getRandomValues){var t=new window.Uint32Array(4);return window.crypto.getRandomValues(t),{d0:t[0],d1:t[1],d2:t[2],d3:t[3]}}return{d0:4294967296*Math.random()>>>0,d1:4294967296*Math.random()>>>0,d2:4294967296*Math.random()>>>0,d3:4294967296*Math.random()>>>0}},c=function(){var t="",e=function(t,e){for(var n="",r=t;r>0;--r)n+=e.charAt(1e3*Math.random()%e.length);return n};return t+=e(2,"0123456789"),t+=e(1,"123456789"),t+=e(8,"0123456789")};return t.safeGenerateNoDash=function(){try{var t=i();return o(t.d0,t.d1,t.d2,t.d3,!1)}catch(n){try{return e+c()}catch(n){}}},t.isValidNumericalToken=function(t){return t&&t.toString().length<=11&&t.length>=9&&parseInt(t,10).toString().length<=11&&parseInt(t,10).toString().length>=9},t.isValidUUIDToken=function(t){return t&&32===t.toString().length&&/^[a-z0-9]+$/.test(t)},t.isValidFGUToken=function(t){return 0==t.indexOf(e)&&t.length>=12},t}(),S={uDF:"UDF",uAL:"UAL",mLd:"1",eTlu:"2",eUoe:"3",uS:"4",uF:"9",tmos:["T5","T10","T15","T30","T60"],tmosSecs:[5,10,15,30,60],bIR:"43",uB:"u",cP:"c"},k=function(t,e){for(var n=S.tmos,r=0;r<n.length;r++)if(t+n[r]===e)return!0;return!1};try{var D=T();try{D.id&&(_.isValidNumericalToken(D.id)||_.isValidUUIDToken(D.id)||_.isValidFGUToken(D.id))?window.ftr__ncd=!1:(D.id=_.safeGenerateNoDash(),window.ftr__ncd=!0),D.ts=window.ftr__startScriptLoad,y(D);for(var x="for"+"ter"+".co"+"m",A="ht"+"tps://c"+"dn9."+x,U="ht"+"tps://"+D.id+"-"+siteId+".cd"+"n."+x,F="http"+"s://cd"+"n3."+x,L=[A,U,F],E=0;E<L.length;E++)m(L[E]);var V=new Array(S.tmosSecs.length),I=function(t){for(var e=0;e<S.tmosSecs.length;e++)V[e]=setTimeout(r,1e3*S.tmosSecs[e],t+S.tmos[e])},b=function(){for(var t=0;t<S.tmosSecs.length;t++)clearTimeout(V[t])};k(S.uDF,D.ex)?i():(I(S.uDF),setTimeout(c,w,S.uDF))}catch(C){r(S.mLd)}}catch(C){}})()',document.body.appendChild(n)}},sift:function(e){var t=e.beacon_key,n=e.session_id,r=e.user_id,o=window._sift=window._sift||[];if(o.push(["_setAccount",t]),o.push(["_setUserId",r]),o.push(["_setSessionId",n]),o.push(["_trackPageview"]),!document.querySelector('[src="'+c+'"]')){var i=document.createElement("script");i.src=c,i.async=!0,document.body.appendChild(i)}},stripe:function(){if(!document.querySelector('[src^="'+a+'"]')){var e=document.createElement("script");e.src=a,e.async=!0,document.body.appendChild(e)}}};jQuery((function(e){!function(e){for(var t in e){var n=s[t];n&&e[t]&&n(e[t])}}(r("fraudServices"));var t=r("publishableKey");if(t){var n=new i({publishableKey:t,accountId:r("accountId")},(function(e,t){return new Promise((function(n,r){jQuery.post(e,t).then(n).fail(r)}))})),o=n.getStripe().elements(),c={},a=o.create("card",{hidePostalCode:!0,classes:{base:"wcpay-card-mounted"}});e(document.body).on("updated_checkout",(function(){e("#wcpay-card-element").length&&!e("#wcpay-card-element").children().length&&(a.unmount(),a.mount("#wcpay-card-element"))})),(e("form#add_payment_method").length||e("form#order_review").length)&&a.mount("#wcpay-card-element"),a.addEventListener("change",(function(t){var n=e("#wcpay-errors");t.error?n.html('<ul class="woocommerce-error"><li /></ul>').find("li").text(t.error.message):n.empty()}));var u,d=function(e){e.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},l=function(t){var n='<ul class="woocommerce-error" role="alert">'+t+"</ul>",r=e(".woocommerce-notices-wrapper, form.checkout").first();if(r.length){e(".woocommerce-NoticeGroup-checkout, .woocommerce-error, .woocommerce-message").remove(),r.prepend('<div class="woocommerce-NoticeGroup woocommerce-NoticeGroup-checkout">'+n+"</div>"),r.find(".input-text, select, input:checkbox").trigger("validate").blur();var o=e(".woocommerce-NoticeGroup-checkout");o.length||(o=r),e.scroll_to_notices(o),e(document.body).trigger("checkout_error")}},p=function(t,r){n.setupIntent(r.id).then((function(n){t.append(e('<input type="hidden" />').attr("id","wcpay-setup-intent").attr("name","wcpay-setup-intent").val(n.id));var r=e.blockUI.defaults.ignoreIfBlocked;e.blockUI.defaults.ignoreIfBlocked=!0,t.removeClass("processing").submit(),e.blockUI.defaults.ignoreIfBlocked=r})).catch((function(e){u=null,t.removeClass("processing").unblock(),l(e.message)}))},m=function(t,n){var r=n.id;e("#wcpay-payment-method").val(r),t.removeClass("processing").submit()},f=function(t,r,o){if(!u){d(t);var i=n.generatePaymentMethodRequest({card:a},c);return o&&(i.setBillingDetail("name",(e("#billing_first_name").val()+" "+e("#billing_last_name").val()).trim()),i.setBillingDetail("email",e("#billing_email").val()),i.setBillingDetail("phone",e("#billing_phone").val()),i.setAddressDetail("city",e("#billing_city").val()),i.setAddressDetail("country",e("#billing_country").val()),i.setAddressDetail("line1",e("#billing_address_1").val()),i.setAddressDetail("line2",e("#billing_address_2").val()),i.setAddressDetail("postal_code",e("#billing_postcode").val()),i.setAddressDetail("state",e("#billing_state").val())),i.send().then((function(e){var n=e.paymentMethod;u=!0,r(t,n)})).catch((function(e){t.removeClass("processing").unblock(),l(e.message)})),!1}u=null},h=function(){var t=e("#wcpay-payment-method").val(),o=e("#wc-woocommerce_payments-new-payment-method").is(":checked"),i=n.confirmIntent(window.location.href,o?t:null);if(!0!==i){var c=i.request;i.isOrderPage&&(d(e("#order_review")),e("#payment").hide(500)),history.replaceState("",document.title,window.location.pathname+window.location.search),c.then((function(e){window.location=e})).catch((function(t){e("form.checkout").removeClass("processing").unblock(),e("#order_review").removeClass("processing").unblock(),e("#payment").show(500);var n=t.message;t instanceof Error&&(n=r("genericErrorMessage")),l(n)}))}};e("form.checkout").on("checkout_place_order_woocommerce_payments",(function(){if(!v())return f(e(this),m,!0)})),e("#order_review").on("submit",(function(){if(e("#payment_method_woocommerce_payments").is(":checked")&&!v())return f(e("#order_review"),m,!0)})),e("form#add_payment_method").on("submit",(function(){if(!e("#wcpay-setup-intent").val())return f(e("form#add_payment_method"),p,!1)})),h(),window.addEventListener("hashchange",(function(){window.location.hash.startsWith("#wcpay-confirm-")&&h()}))}function v(){return e("#wc-woocommerce_payments-payment-token-new").length&&!e("#wc-woocommerce_payments-payment-token-new").is(":checked")}}))}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}return n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(371)})());
//# sourceMappingURL=checkout.js.map