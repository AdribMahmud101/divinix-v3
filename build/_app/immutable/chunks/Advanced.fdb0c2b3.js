import{s as Ml,n as Nl,r as H}from"./scheduler.0545783f.js";import{S as Ll,i as Rl,g as i,s as x,h as u,j as _,F as w,c as k,f,k as l,a as E,x as a,H as y,A as C,O as D}from"./index.3f9f9994.js";function Fl(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Hl(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Tl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","1"),l(t,"step","0.05"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","1"),l(r,"step","0.05"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].temperature),a(e,p),a(e,h),a(h,r),y(r,n[0].temperature),v||(b=[C(t,"change",n[4]),C(t,"input",n[4]),C(r,"input",n[5])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].temperature),o[0]&1&&D(r.value)!==c[0].temperature&&y(r,c[0].temperature)},d(c){c&&f(e),v=!1,H(b)}}}function Kl(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Zl(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Pl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","2"),l(t,"step","1"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","2"),l(r,"step","1"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].mirostat),a(e,p),a(e,h),a(h,r),y(r,n[0].mirostat),v||(b=[C(t,"change",n[7]),C(t,"input",n[7]),C(r,"input",n[8])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].mirostat),o[0]&1&&D(r.value)!==c[0].mirostat&&y(r,c[0].mirostat)},d(c){c&&f(e),v=!1,H(b)}}}function Gl(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Jl(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Ul(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","1"),l(t,"step","0.05"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","1"),l(r,"step","0.05"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].mirostat_eta),a(e,p),a(e,h),a(h,r),y(r,n[0].mirostat_eta),v||(b=[C(t,"change",n[10]),C(t,"input",n[10]),C(r,"input",n[11])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].mirostat_eta),o[0]&1&&D(r.value)!==c[0].mirostat_eta&&y(r,c[0].mirostat_eta)},d(c){c&&f(e),v=!1,H(b)}}}function Ql(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Wl(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Sl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","10"),l(t,"step","0.5"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","10"),l(r,"step","0.5"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].mirostat_tau),a(e,p),a(e,h),a(h,r),y(r,n[0].mirostat_tau),v||(b=[C(t,"change",n[13]),C(t,"input",n[13]),C(r,"input",n[14])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].mirostat_tau),o[0]&1&&D(r.value)!==c[0].mirostat_tau&&y(r,c[0].mirostat_tau)},d(c){c&&f(e),v=!1,H(b)}}}function Xl(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Yl(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function jl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","100"),l(t,"step","0.5"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","100"),l(r,"step","0.5"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].top_k),a(e,p),a(e,h),a(h,r),y(r,n[0].top_k),v||(b=[C(t,"change",n[16]),C(t,"input",n[16]),C(r,"input",n[17])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].top_k),o[0]&1&&D(r.value)!==c[0].top_k&&y(r,c[0].top_k)},d(c){c&&f(e),v=!1,H(b)}}}function $l(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function ts(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Al(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","1"),l(t,"step","0.05"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","1"),l(r,"step","0.05"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].top_p),a(e,p),a(e,h),a(h,r),y(r,n[0].top_p),v||(b=[C(t,"change",n[19]),C(t,"input",n[19]),C(r,"input",n[20])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].top_p),o[0]&1&&D(r.value)!==c[0].top_p&&y(r,c[0].top_p)},d(c){c&&f(e),v=!1,H(b)}}}function es(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function ls(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function zl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","2"),l(t,"step","0.05"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","2"),l(r,"step","0.05"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].repeat_penalty),a(e,p),a(e,h),a(h,r),y(r,n[0].repeat_penalty),v||(b=[C(t,"change",n[22]),C(t,"input",n[22]),C(r,"input",n[23])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].repeat_penalty),o[0]&1&&D(r.value)!==c[0].repeat_penalty&&y(r,c[0].repeat_penalty)},d(c){c&&f(e),v=!1,H(b)}}}function ss(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function ns(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Ol(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","-1"),l(t,"max","128"),l(t,"step","1"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","-1"),l(r,"max","128"),l(r,"step","1"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].repeat_last_n),a(e,p),a(e,h),a(h,r),y(r,n[0].repeat_last_n),v||(b=[C(t,"change",n[25]),C(t,"input",n[25]),C(r,"input",n[26])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].repeat_last_n),o[0]&1&&D(r.value)!==c[0].repeat_last_n&&y(r,c[0].repeat_last_n)},d(c){c&&f(e),v=!1,H(b)}}}function rs(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function as(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function Bl(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","0"),l(t,"max","2"),l(t,"step","0.05"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","0"),l(r,"max","2"),l(r,"step","0.05"),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].tfs_z),a(e,p),a(e,h),a(h,r),y(r,n[0].tfs_z),v||(b=[C(t,"change",n[28]),C(t,"input",n[28]),C(r,"input",n[29])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].tfs_z),o[0]&1&&D(r.value)!==c[0].tfs_z&&y(r,c[0].tfs_z)},d(c){c&&f(e),v=!1,H(b)}}}function is(n){let e,s="Custom";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-3v6m8g"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function us(n){let e,s="Default";return{c(){e=i("span"),e.textContent=s,this.h()},l(t){e=u(t,"SPAN",{class:!0,"data-svelte-h":!0}),w(e)!=="svelte-h5d9m4"&&(e.textContent=s),this.h()},h(){l(e,"class","ml-2 self-center")},m(t,p){E(t,e,p)},d(t){t&&f(e)}}}function ql(n){let e,s,t,p,h,r,v,b;return{c(){e=i("div"),s=i("div"),t=i("input"),p=x(),h=i("div"),r=i("input"),this.h()},l(c){e=u(c,"DIV",{class:!0});var o=_(e);s=u(o,"DIV",{class:!0});var g=_(s);t=u(g,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0,class:!0}),g.forEach(f),p=k(o),h=u(o,"DIV",{class:!0});var I=_(h);r=u(I,"INPUT",{type:!0,class:!0,min:!0,max:!0,step:!0}),I.forEach(f),o.forEach(f),this.h()},h(){l(t,"id","steps-range"),l(t,"type","range"),l(t,"min","1"),l(t,"max","16000"),l(t,"step","1"),l(t,"class","w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"),l(s,"class","flex-1"),l(r,"type","number"),l(r,"class","bg-transparent text-center w-14"),l(r,"min","1"),l(r,"max","16000"),l(r,"step","1"),l(h,"class",""),l(e,"class","flex mt-0.5 space-x-2")},m(c,o){E(c,e,o),a(e,s),a(s,t),y(t,n[0].num_ctx),a(e,p),a(e,h),a(h,r),y(r,n[0].num_ctx),v||(b=[C(t,"change",n[31]),C(t,"input",n[31]),C(r,"input",n[32])],v=!0)},p(c,o){o[0]&1&&y(t,c[0].num_ctx),o[0]&1&&D(r.value)!==c[0].num_ctx&&y(r,c[0].num_ctx)},d(c){c&&f(e),v=!1,H(b)}}}function os(n){let e,s,t,p,h="Seed",r,v,b,c,o,g,I,Kt="Stop Sequence",Ot,Ct,B,Bt,q,K,Q,Zt="Temperature",qt,M,Mt,Lt,L,Z,W,Gt="Mirostat",Rt,R,Ft,Ht,F,G,J,We="Mirostat Eta",we,X,Ee,Ve,Y,gt,Tt,Xe="Mirostat Tau",Ne,$,Te,Pe,tt,It,Pt,Ye="Top K",Ue,et,Se,je,lt,Dt,Ut,$e="Top P",Ae,st,ze,Oe,nt,wt,St,tl="Repeat Penalty",Be,rt,qe,Me,at,Et,jt,el="Repeat Last N",Le,it,Re,Fe,ut,Vt,At,ll="Tfs Z",He,ot,Ke,Ze,ct,Nt,zt,sl="Context Length",Ge,ft,Je,Qe,nl;function rl(d,m){return d[0].temperature===""?Hl:Fl}let Jt=rl(n),pt=Jt(n),V=n[0].temperature!==""&&Tl(n);function al(d,m){return d[0].mirostat===""?Zl:Kl}let Qt=al(n),dt=Qt(n),N=n[0].mirostat!==""&&Pl(n);function il(d,m){return d[0].mirostat_eta===""?Jl:Gl}let Wt=il(n),_t=Wt(n),T=n[0].mirostat_eta!==""&&Ul(n);function ul(d,m){return d[0].mirostat_tau===""?Wl:Ql}let Xt=ul(n),ht=Xt(n),P=n[0].mirostat_tau!==""&&Sl(n);function ol(d,m){return d[0].top_k===""?Yl:Xl}let Yt=ol(n),mt=Yt(n),U=n[0].top_k!==""&&jl(n);function cl(d,m){return d[0].top_p===""?ts:$l}let $t=cl(n),vt=$t(n),S=n[0].top_p!==""&&Al(n);function fl(d,m){return d[0].repeat_penalty===""?ls:es}let te=fl(n),bt=te(n),j=n[0].repeat_penalty!==""&&zl(n);function pl(d,m){return d[0].repeat_last_n===""?ns:ss}let ee=pl(n),yt=ee(n),A=n[0].repeat_last_n!==""&&Ol(n);function dl(d,m){return d[0].tfs_z===""?as:rs}let le=dl(n),xt=le(n),z=n[0].tfs_z!==""&&Bl(n);function _l(d,m){return d[0].num_ctx===""?us:is}let se=_l(n),kt=se(n),O=n[0].num_ctx!==""&&ql(n);return{c(){e=i("div"),s=i("div"),t=i("div"),p=i("div"),p.textContent=h,r=x(),v=i("div"),b=i("input"),c=x(),o=i("div"),g=i("div"),I=i("div"),I.textContent=Kt,Ot=x(),Ct=i("div"),B=i("input"),Bt=x(),q=i("div"),K=i("div"),Q=i("div"),Q.textContent=Zt,qt=x(),M=i("button"),pt.c(),Mt=x(),V&&V.c(),Lt=x(),L=i("div"),Z=i("div"),W=i("div"),W.textContent=Gt,Rt=x(),R=i("button"),dt.c(),Ft=x(),N&&N.c(),Ht=x(),F=i("div"),G=i("div"),J=i("div"),J.textContent=We,we=x(),X=i("button"),_t.c(),Ee=x(),T&&T.c(),Ve=x(),Y=i("div"),gt=i("div"),Tt=i("div"),Tt.textContent=Xe,Ne=x(),$=i("button"),ht.c(),Te=x(),P&&P.c(),Pe=x(),tt=i("div"),It=i("div"),Pt=i("div"),Pt.textContent=Ye,Ue=x(),et=i("button"),mt.c(),Se=x(),U&&U.c(),je=x(),lt=i("div"),Dt=i("div"),Ut=i("div"),Ut.textContent=$e,Ae=x(),st=i("button"),vt.c(),ze=x(),S&&S.c(),Oe=x(),nt=i("div"),wt=i("div"),St=i("div"),St.textContent=tl,Be=x(),rt=i("button"),bt.c(),qe=x(),j&&j.c(),Me=x(),at=i("div"),Et=i("div"),jt=i("div"),jt.textContent=el,Le=x(),it=i("button"),yt.c(),Re=x(),A&&A.c(),Fe=x(),ut=i("div"),Vt=i("div"),At=i("div"),At.textContent=ll,He=x(),ot=i("button"),xt.c(),Ke=x(),z&&z.c(),Ze=x(),ct=i("div"),Nt=i("div"),zt=i("div"),zt.textContent=sl,Ge=x(),ft=i("button"),kt.c(),Je=x(),O&&O.c(),this.h()},l(d){e=u(d,"DIV",{class:!0});var m=_(e);s=u(m,"DIV",{});var hl=_(s);t=u(hl,"DIV",{class:!0});var ne=_(t);p=u(ne,"DIV",{class:!0,"data-svelte-h":!0}),w(p)!=="svelte-1jky8mw"&&(p.textContent=h),r=k(ne),v=u(ne,"DIV",{class:!0});var ml=_(v);b=u(ml,"INPUT",{class:!0,type:!0,placeholder:!0,autocomplete:!0,min:!0}),ml.forEach(f),ne.forEach(f),hl.forEach(f),c=k(m),o=u(m,"DIV",{});var vl=_(o);g=u(vl,"DIV",{class:!0});var re=_(g);I=u(re,"DIV",{class:!0,"data-svelte-h":!0}),w(I)!=="svelte-1hck2lw"&&(I.textContent=Kt),Ot=k(re),Ct=u(re,"DIV",{class:!0});var bl=_(Ct);B=u(bl,"INPUT",{class:!0,type:!0,placeholder:!0,autocomplete:!0}),bl.forEach(f),re.forEach(f),vl.forEach(f),Bt=k(m),q=u(m,"DIV",{class:!0});var ae=_(q);K=u(ae,"DIV",{class:!0});var ie=_(K);Q=u(ie,"DIV",{class:!0,"data-svelte-h":!0}),w(Q)!=="svelte-18yywtn"&&(Q.textContent=Zt),qt=k(ie),M=u(ie,"BUTTON",{class:!0,type:!0});var yl=_(M);pt.l(yl),yl.forEach(f),ie.forEach(f),Mt=k(ae),V&&V.l(ae),ae.forEach(f),Lt=k(m),L=u(m,"DIV",{class:!0});var ue=_(L);Z=u(ue,"DIV",{class:!0});var oe=_(Z);W=u(oe,"DIV",{class:!0,"data-svelte-h":!0}),w(W)!=="svelte-jkwjcg"&&(W.textContent=Gt),Rt=k(oe),R=u(oe,"BUTTON",{class:!0,type:!0});var xl=_(R);dt.l(xl),xl.forEach(f),oe.forEach(f),Ft=k(ue),N&&N.l(ue),ue.forEach(f),Ht=k(m),F=u(m,"DIV",{class:!0});var ce=_(F);G=u(ce,"DIV",{class:!0});var fe=_(G);J=u(fe,"DIV",{class:!0,"data-svelte-h":!0}),w(J)!=="svelte-srwhco"&&(J.textContent=We),we=k(fe),X=u(fe,"BUTTON",{class:!0,type:!0});var kl=_(X);_t.l(kl),kl.forEach(f),fe.forEach(f),Ee=k(ce),T&&T.l(ce),ce.forEach(f),Ve=k(m),Y=u(m,"DIV",{class:!0});var pe=_(Y);gt=u(pe,"DIV",{class:!0});var de=_(gt);Tt=u(de,"DIV",{class:!0,"data-svelte-h":!0}),w(Tt)!=="svelte-98k4mu"&&(Tt.textContent=Xe),Ne=k(de),$=u(de,"BUTTON",{class:!0,type:!0});var Cl=_($);ht.l(Cl),Cl.forEach(f),de.forEach(f),Te=k(pe),P&&P.l(pe),pe.forEach(f),Pe=k(m),tt=u(m,"DIV",{class:!0});var _e=_(tt);It=u(_e,"DIV",{class:!0});var he=_(It);Pt=u(he,"DIV",{class:!0,"data-svelte-h":!0}),w(Pt)!=="svelte-5skfjv"&&(Pt.textContent=Ye),Ue=k(he),et=u(he,"BUTTON",{class:!0,type:!0});var gl=_(et);mt.l(gl),gl.forEach(f),he.forEach(f),Se=k(_e),U&&U.l(_e),_e.forEach(f),je=k(m),lt=u(m,"DIV",{class:!0});var me=_(lt);Dt=u(me,"DIV",{class:!0});var ve=_(Dt);Ut=u(ve,"DIV",{class:!0,"data-svelte-h":!0}),w(Ut)!=="svelte-1p13ibw"&&(Ut.textContent=$e),Ae=k(ve),st=u(ve,"BUTTON",{class:!0,type:!0});var Il=_(st);vt.l(Il),Il.forEach(f),ve.forEach(f),ze=k(me),S&&S.l(me),me.forEach(f),Oe=k(m),nt=u(m,"DIV",{class:!0});var be=_(nt);wt=u(be,"DIV",{class:!0});var ye=_(wt);St=u(ye,"DIV",{class:!0,"data-svelte-h":!0}),w(St)!=="svelte-2nayd"&&(St.textContent=tl),Be=k(ye),rt=u(ye,"BUTTON",{class:!0,type:!0});var Dl=_(rt);bt.l(Dl),Dl.forEach(f),ye.forEach(f),qe=k(be),j&&j.l(be),be.forEach(f),Me=k(m),at=u(m,"DIV",{class:!0});var xe=_(at);Et=u(xe,"DIV",{class:!0});var ke=_(Et);jt=u(ke,"DIV",{class:!0,"data-svelte-h":!0}),w(jt)!=="svelte-uck4pk"&&(jt.textContent=el),Le=k(ke),it=u(ke,"BUTTON",{class:!0,type:!0});var wl=_(it);yt.l(wl),wl.forEach(f),ke.forEach(f),Re=k(xe),A&&A.l(xe),xe.forEach(f),Fe=k(m),ut=u(m,"DIV",{class:!0});var Ce=_(ut);Vt=u(Ce,"DIV",{class:!0});var ge=_(Vt);At=u(ge,"DIV",{class:!0,"data-svelte-h":!0}),w(At)!=="svelte-1s0plti"&&(At.textContent=ll),He=k(ge),ot=u(ge,"BUTTON",{class:!0,type:!0});var El=_(ot);xt.l(El),El.forEach(f),ge.forEach(f),Ke=k(Ce),z&&z.l(Ce),Ce.forEach(f),Ze=k(m),ct=u(m,"DIV",{class:!0});var Ie=_(ct);Nt=u(Ie,"DIV",{class:!0});var De=_(Nt);zt=u(De,"DIV",{class:!0,"data-svelte-h":!0}),w(zt)!=="svelte-b6itfy"&&(zt.textContent=sl),Ge=k(De),ft=u(De,"BUTTON",{class:!0,type:!0});var Vl=_(ft);kt.l(Vl),Vl.forEach(f),De.forEach(f),Je=k(Ie),O&&O.l(Ie),Ie.forEach(f),m.forEach(f),this.h()},h(){l(p,"class","w-20 text-xs font-medium self-center"),l(b,"class","w-full rounded py-1.5 px-4 text-sm dark:text-gray-300 dark:bg-gray-800 outline-none border border-gray-100 dark:border-gray-600"),l(b,"type","number"),l(b,"placeholder","Enter Seed"),l(b,"autocomplete","off"),l(b,"min","0"),l(v,"class","flex-1 self-center"),l(t,"class","py-0.5 flex w-full justify-between"),l(I,"class","w-20 text-xs font-medium self-center"),l(B,"class","w-full rounded py-1.5 px-4 text-sm dark:text-gray-300 dark:bg-gray-800 outline-none border border-gray-100 dark:border-gray-600"),l(B,"type","text"),l(B,"placeholder","Enter Stop Sequence"),l(B,"autocomplete","off"),l(Ct,"class","flex-1 self-center"),l(g,"class","py-0.5 flex w-full justify-between"),l(Q,"class","self-center text-xs font-medium"),l(M,"class","p-1 px-3 text-xs flex rounded transition"),l(M,"type","button"),l(K,"class","flex w-full justify-between"),l(q,"class","py-0.5 w-full justify-between"),l(W,"class","self-center text-xs font-medium"),l(R,"class","p-1 px-3 text-xs flex rounded transition"),l(R,"type","button"),l(Z,"class","flex w-full justify-between"),l(L,"class","py-0.5 w-full justify-between"),l(J,"class","self-center text-xs font-medium"),l(X,"class","p-1 px-3 text-xs flex rounded transition"),l(X,"type","button"),l(G,"class","flex w-full justify-between"),l(F,"class","py-0.5 w-full justify-between"),l(Tt,"class","self-center text-xs font-medium"),l($,"class","p-1 px-3 text-xs flex rounded transition"),l($,"type","button"),l(gt,"class","flex w-full justify-between"),l(Y,"class","py-0.5 w-full justify-between"),l(Pt,"class","self-center text-xs font-medium"),l(et,"class","p-1 px-3 text-xs flex rounded transition"),l(et,"type","button"),l(It,"class","flex w-full justify-between"),l(tt,"class","py-0.5 w-full justify-between"),l(Ut,"class","self-center text-xs font-medium"),l(st,"class","p-1 px-3 text-xs flex rounded transition"),l(st,"type","button"),l(Dt,"class","flex w-full justify-between"),l(lt,"class","py-0.5 w-full justify-between"),l(St,"class","self-center text-xs font-medium"),l(rt,"class","p-1 px-3 text-xs flex rounded transition"),l(rt,"type","button"),l(wt,"class","flex w-full justify-between"),l(nt,"class","py-0.5 w-full justify-between"),l(jt,"class","self-center text-xs font-medium"),l(it,"class","p-1 px-3 text-xs flex rounded transition"),l(it,"type","button"),l(Et,"class","flex w-full justify-between"),l(at,"class","py-0.5 w-full justify-between"),l(At,"class","self-center text-xs font-medium"),l(ot,"class","p-1 px-3 text-xs flex rounded transition"),l(ot,"type","button"),l(Vt,"class","flex w-full justify-between"),l(ut,"class","py-0.5 w-full justify-between"),l(zt,"class","self-center text-xs font-medium"),l(ft,"class","p-1 px-3 text-xs flex rounded transition"),l(ft,"type","button"),l(Nt,"class","flex w-full justify-between"),l(ct,"class","py-0.5 w-full justify-between"),l(e,"class","space-y-3 text-xs")},m(d,m){E(d,e,m),a(e,s),a(s,t),a(t,p),a(t,r),a(t,v),a(v,b),y(b,n[0].seed),a(e,c),a(e,o),a(o,g),a(g,I),a(g,Ot),a(g,Ct),a(Ct,B),y(B,n[0].stop),a(e,Bt),a(e,q),a(q,K),a(K,Q),a(K,qt),a(K,M),pt.m(M,null),a(q,Mt),V&&V.m(q,null),a(e,Lt),a(e,L),a(L,Z),a(Z,W),a(Z,Rt),a(Z,R),dt.m(R,null),a(L,Ft),N&&N.m(L,null),a(e,Ht),a(e,F),a(F,G),a(G,J),a(G,we),a(G,X),_t.m(X,null),a(F,Ee),T&&T.m(F,null),a(e,Ve),a(e,Y),a(Y,gt),a(gt,Tt),a(gt,Ne),a(gt,$),ht.m($,null),a(Y,Te),P&&P.m(Y,null),a(e,Pe),a(e,tt),a(tt,It),a(It,Pt),a(It,Ue),a(It,et),mt.m(et,null),a(tt,Se),U&&U.m(tt,null),a(e,je),a(e,lt),a(lt,Dt),a(Dt,Ut),a(Dt,Ae),a(Dt,st),vt.m(st,null),a(lt,ze),S&&S.m(lt,null),a(e,Oe),a(e,nt),a(nt,wt),a(wt,St),a(wt,Be),a(wt,rt),bt.m(rt,null),a(nt,qe),j&&j.m(nt,null),a(e,Me),a(e,at),a(at,Et),a(Et,jt),a(Et,Le),a(Et,it),yt.m(it,null),a(at,Re),A&&A.m(at,null),a(e,Fe),a(e,ut),a(ut,Vt),a(Vt,At),a(Vt,He),a(Vt,ot),xt.m(ot,null),a(ut,Ke),z&&z.m(ut,null),a(e,Ze),a(e,ct),a(ct,Nt),a(Nt,zt),a(Nt,Ge),a(Nt,ft),kt.m(ft,null),a(ct,Je),O&&O.m(ct,null),Qe||(nl=[C(b,"input",n[1]),C(B,"input",n[2]),C(M,"click",n[3]),C(R,"click",n[6]),C(X,"click",n[9]),C($,"click",n[12]),C(et,"click",n[15]),C(st,"click",n[18]),C(rt,"click",n[21]),C(it,"click",n[24]),C(ot,"click",n[27]),C(ft,"click",n[30])],Qe=!0)},p(d,m){m[0]&1&&D(b.value)!==d[0].seed&&y(b,d[0].seed),m[0]&1&&B.value!==d[0].stop&&y(B,d[0].stop),Jt!==(Jt=rl(d))&&(pt.d(1),pt=Jt(d),pt&&(pt.c(),pt.m(M,null))),d[0].temperature!==""?V?V.p(d,m):(V=Tl(d),V.c(),V.m(q,null)):V&&(V.d(1),V=null),Qt!==(Qt=al(d))&&(dt.d(1),dt=Qt(d),dt&&(dt.c(),dt.m(R,null))),d[0].mirostat!==""?N?N.p(d,m):(N=Pl(d),N.c(),N.m(L,null)):N&&(N.d(1),N=null),Wt!==(Wt=il(d))&&(_t.d(1),_t=Wt(d),_t&&(_t.c(),_t.m(X,null))),d[0].mirostat_eta!==""?T?T.p(d,m):(T=Ul(d),T.c(),T.m(F,null)):T&&(T.d(1),T=null),Xt!==(Xt=ul(d))&&(ht.d(1),ht=Xt(d),ht&&(ht.c(),ht.m($,null))),d[0].mirostat_tau!==""?P?P.p(d,m):(P=Sl(d),P.c(),P.m(Y,null)):P&&(P.d(1),P=null),Yt!==(Yt=ol(d))&&(mt.d(1),mt=Yt(d),mt&&(mt.c(),mt.m(et,null))),d[0].top_k!==""?U?U.p(d,m):(U=jl(d),U.c(),U.m(tt,null)):U&&(U.d(1),U=null),$t!==($t=cl(d))&&(vt.d(1),vt=$t(d),vt&&(vt.c(),vt.m(st,null))),d[0].top_p!==""?S?S.p(d,m):(S=Al(d),S.c(),S.m(lt,null)):S&&(S.d(1),S=null),te!==(te=fl(d))&&(bt.d(1),bt=te(d),bt&&(bt.c(),bt.m(rt,null))),d[0].repeat_penalty!==""?j?j.p(d,m):(j=zl(d),j.c(),j.m(nt,null)):j&&(j.d(1),j=null),ee!==(ee=pl(d))&&(yt.d(1),yt=ee(d),yt&&(yt.c(),yt.m(it,null))),d[0].repeat_last_n!==""?A?A.p(d,m):(A=Ol(d),A.c(),A.m(at,null)):A&&(A.d(1),A=null),le!==(le=dl(d))&&(xt.d(1),xt=le(d),xt&&(xt.c(),xt.m(ot,null))),d[0].tfs_z!==""?z?z.p(d,m):(z=Bl(d),z.c(),z.m(ut,null)):z&&(z.d(1),z=null),se!==(se=_l(d))&&(kt.d(1),kt=se(d),kt&&(kt.c(),kt.m(ft,null))),d[0].num_ctx!==""?O?O.p(d,m):(O=ql(d),O.c(),O.m(ct,null)):O&&(O.d(1),O=null)},i:Nl,o:Nl,d(d){d&&f(e),pt.d(),V&&V.d(),dt.d(),N&&N.d(),_t.d(),T&&T.d(),ht.d(),P&&P.d(),mt.d(),U&&U.d(),vt.d(),S&&S.d(),bt.d(),j&&j.d(),yt.d(),A&&A.d(),xt.d(),z&&z.d(),kt.d(),O&&O.d(),Qe=!1,H(nl)}}}function cs(n,e,s){let{options:t={seed:0,stop:"",temperature:"",repeat_penalty:"",repeat_last_n:"",mirostat:"",mirostat_eta:"",mirostat_tau:"",top_k:"",top_p:"",tfs_z:"",num_ctx:""}}=e;function p(){t.seed=D(this.value),s(0,t)}function h(){t.stop=this.value,s(0,t)}const r=()=>{s(0,t.temperature=t.temperature===""?.8:"",t)};function v(){t.temperature=D(this.value),s(0,t)}function b(){t.temperature=D(this.value),s(0,t)}const c=()=>{s(0,t.mirostat=t.mirostat===""?0:"",t)};function o(){t.mirostat=D(this.value),s(0,t)}function g(){t.mirostat=D(this.value),s(0,t)}const I=()=>{s(0,t.mirostat_eta=t.mirostat_eta===""?.1:"",t)};function Kt(){t.mirostat_eta=D(this.value),s(0,t)}function Ot(){t.mirostat_eta=D(this.value),s(0,t)}const Ct=()=>{s(0,t.mirostat_tau=t.mirostat_tau===""?5:"",t)};function B(){t.mirostat_tau=D(this.value),s(0,t)}function Bt(){t.mirostat_tau=D(this.value),s(0,t)}const q=()=>{s(0,t.top_k=t.top_k===""?40:"",t)};function K(){t.top_k=D(this.value),s(0,t)}function Q(){t.top_k=D(this.value),s(0,t)}const Zt=()=>{s(0,t.top_p=t.top_p===""?.9:"",t)};function qt(){t.top_p=D(this.value),s(0,t)}function M(){t.top_p=D(this.value),s(0,t)}const Mt=()=>{s(0,t.repeat_penalty=t.repeat_penalty===""?1.1:"",t)};function Lt(){t.repeat_penalty=D(this.value),s(0,t)}function L(){t.repeat_penalty=D(this.value),s(0,t)}const Z=()=>{s(0,t.repeat_last_n=t.repeat_last_n===""?64:"",t)};function W(){t.repeat_last_n=D(this.value),s(0,t)}function Gt(){t.repeat_last_n=D(this.value),s(0,t)}const Rt=()=>{s(0,t.tfs_z=t.tfs_z===""?1:"",t)};function R(){t.tfs_z=D(this.value),s(0,t)}function Ft(){t.tfs_z=D(this.value),s(0,t)}const Ht=()=>{s(0,t.num_ctx=t.num_ctx===""?2048:"",t)};function F(){t.num_ctx=D(this.value),s(0,t)}function G(){t.num_ctx=D(this.value),s(0,t)}return n.$$set=J=>{"options"in J&&s(0,t=J.options)},[t,p,h,r,v,b,c,o,g,I,Kt,Ot,Ct,B,Bt,q,K,Q,Zt,qt,M,Mt,Lt,L,Z,W,Gt,Rt,R,Ft,Ht,F,G]}class ds extends Ll{constructor(e){super(),Rl(this,e,cs,os,Ml,{options:0},null,[-1,-1])}}export{ds as A};
