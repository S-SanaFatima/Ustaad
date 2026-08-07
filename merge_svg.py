import re

with open('src/app/BiologyTutorAbuDhabiPage.tsx', 'r', encoding='utf-8') as f:
    current_content = f.read()

with open('src/app/BiologyTutorAbuDhabiPage.user.tsx', 'r', encoding='utf-8') as f:
    user_content = f.read()

# Extract the SVG logic from current file
start_idx = current_content.find('{/* ── 3-D MATH VISUAL: Full background on desktop, mobile at bottom */}')
end_idx = current_content.find('{/* ── TEXT BLOCK — centered by parent flex ── */}')

if start_idx == -1 or end_idx == -1:
    print('Could not find SVG logic')
    exit(1)

svg_logic = current_content[start_idx:end_idx]

# In the user content, find the BioGrid line and replace it
user_content = re.sub(
    r'(<section className="relative -mt-16 overflow-hidden bg-\[#0a1f3d\] flex flex-col items-center justify-center md:min-h-\[75vh\]">\s*)<BioGrid />',
    r'\1' + svg_logic.replace('\\', '\\\\'),
    user_content
)

with open('src/app/BiologyTutorAbuDhabiPage.tsx', 'w', encoding='utf-8') as f:
    f.write(user_content)

print('Successfully merged user code with custom DNA SVG')
