import{j as e}from"./index-DCXYSGMa.js";const i=["BCA","GCIA","ACS","CIS","CAD","GAAA","GWAA","RIS","YASM","MAMO","BWA","ARIS","ADPS","LISA","BCAL","AAES","AAAS","UASA","BISA"],l=({school:s})=>e.jsxs("div",{className:"shrink-0 flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full",style:{background:"rgba(255,255,255,0.55)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",border:"1px solid rgba(255,255,255,0.9)",boxShadow:"0 2px 12px rgba(15,74,155,0.08), inset 0 1px 0 rgba(255,255,255,0.8)"},children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full shrink-0",style:{background:"linear-gradient(135deg,#0f4a9b,#4A7EC7)"}}),e.jsx("span",{className:"text-[12px] sm:text-[13px] font-bold text-[#1a2f5a] tracking-wide",children:s})]});function n({header:s,schools:r=i}){return e.jsx("section",{className:"py-7 sm:py-9 lg:py-12 relative",style:{background:"linear-gradient(135deg, #f8faff 0%, #eef2fb 50%, #f4f7ff 100%)"},children:e.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[s,e.jsxs("div",{className:"relative",children:[e.jsx("style",{children:`
            @keyframes ustaad-marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .ustaad-marquee {
              animation: ustaad-marquee 25s linear infinite;
            }
          `}),e.jsxs("div",{className:"flex w-full overflow-hidden py-3",children:[e.jsx("div",{className:"flex shrink-0 ustaad-marquee gap-4 items-center pr-4 min-w-full",children:r.map(a=>e.jsx(l,{school:a},a))}),e.jsx("div",{"aria-hidden":"true",className:"flex shrink-0 ustaad-marquee gap-4 items-center pr-4 min-w-full",children:r.map(a=>e.jsx(l,{school:a},`${a}-2`))})]})]})]})})}export{n as S};
