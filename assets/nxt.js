const NXT=(()=>{const K="nxt-2026";
const reveal=b=>{const s=atob(b);let o="";for(let i=0;i<s.length;i++)o+=String.fromCharCode(s.charCodeAt(i)^K.charCodeAt(i%K.length));return o;};
const digest=async s=>new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(s)));
const hex=a=>[...a].map(x=>x.toString(16).padStart(2,"0")).join("");
async function unlock(input,table){const h=hex(await digest("nxt26:"+input));const ct=table[h];if(!ct)return null;
const k=await digest("key:"+input);const b=Uint8Array.from(atob(ct),c=>c.charCodeAt(0));return new TextDecoder().decode(b.map((c,i)=>c^k[i%32]));}
const wait=ms=>new Promise(r=>setTimeout(r,ms));
return {reveal,unlock,digest,hex,wait};})();
