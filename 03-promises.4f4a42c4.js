function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o(`✅ Fulfilled promise ${e} in ${t}ms`):r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n,step:o,amount:r}}=t.currentTarget;let u=Number(n.value);for(let t=0;t<r.value;t+=1)l(t,u).then((({position:t,delayCounter:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delayCounter:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),u+=Number(o.value)}));
//# sourceMappingURL=03-promises.4f4a42c4.js.map
