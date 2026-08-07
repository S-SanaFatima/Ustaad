import re

with open('src/app/BiologyTutorAbuDhabiPage.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

def add_hover(match):
    cls = match.group(1)
    if 'hover:-translate-y' not in cls:
        cls += ' transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0f4a9b]/30'
    return f'className="{cls}"'

content = re.sub(
    r'className="(bg-white p-6 rounded-xl border border-\[#e2e6ec\] shadow-\[0_2px_8px_rgba\(0,0,0,0\.04\)\] flex flex-col justify-between)"',
    add_hover,
    content
)

content = re.sub(
    r'className="(bg-\[#f8f9fb\] p-6 rounded-xl border border-\[#e2e6ec\] hover:border-\[#0f4a9b\]/30 transition duration-350)"',
    lambda m: f'className="{m.group(1).replace("hover:border-[#0f4a9b]/30 transition duration-350", "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0f4a9b]/30")}"',
    content
)

content = re.sub(
    r'className="(bg-white p-6 rounded-xl border border-\[#e2e6ec\] shadow-\[0_2px_8px_rgba\(0,0,0,0\.04\)\])"',
    add_hover,
    content
)

content = re.sub(
    r'className="(p-6 rounded-xl border border-white/10 shadow-lg flex flex-col justify-between)"',
    lambda m: f'className="{m.group(1)} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(255,255,255,0.12)] hover:border-white/30"',
    content
)

content = re.sub(
    r'className="(bg-\[#f8f9fb\] p-6 rounded-xl border border-\[#e2e6ec\] flex flex-col justify-between)"',
    add_hover,
    content
)

content = re.sub(
    r'hover:-translate-y-0\.5"',
    r'hover:-translate-y-1.5 hover:shadow-xl hover:border-[#0f4a9b]/30"',
    content
)

with open('src/app/BiologyTutorAbuDhabiPage.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Hover effects added.')
