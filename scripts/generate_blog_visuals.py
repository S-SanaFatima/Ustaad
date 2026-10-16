import os
import textwrap
from PIL import Image, ImageDraw, ImageFont

font_dir = os.path.join(os.environ.get('WINDIR', 'C:\\Windows'), 'Fonts')
f_title = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 38)
f_sub = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 20)
f_card_title = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 22)
f_card_body = ImageFont.truetype(os.path.join(font_dir, 'segoeui.ttf'), 17)
f_tag = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 14)
f_footer = ImageFont.truetype(os.path.join(font_dir, 'segoeuib.ttf'), 15)

# --- 1. RESTART PROTOCOL (1376 x 768) ---
img = Image.new('RGB', (1376, 768), '#f8fafd')
draw = ImageDraw.Draw(img)

# Top banner
draw.rectangle([0, 0, 1376, 135], fill='#0a1f3d')
draw.text((80, 25), 'USTAAD UAE · PSYCHOLOGY OF LEARNING', fill='#C7A24A', font=f_tag)
draw.text((80, 50), 'The 4-Step Restart Routine', fill='#ffffff', font=f_title)
draw.text((80, 95), 'How UAE students can break weeks of revision inertia without dramatic overhauls', fill='#94a3b8', font=f_sub)

steps = [
    ('STEP 01', 'Isolate One Task', 'Pick the single smallest overdue item. Leave the rest of the backlog untouched so the pile stops triggering working-memory freeze.'),
    ('STEP 02', '15-Minute Timer', 'Set a visible timer and give yourself permission to do a rough, imperfect first attempt. A messy start always beats no start.'),
    ('STEP 03', 'Log Two Lines', 'Write down what was done and which question felt hardest. The difficult obstacle is useful information, never a verdict.'),
    ('STEP 04', 'Set Next Trigger', 'Decide tomorrow\'s starting point before leaving the desk using an If-Then plan (e.g., "If it is 4:30 pm, then I write 3 recall questions").')
]

card_w = 285
card_h = 475
start_x = 75
gap = 26
y = 175

for i, (num, title, body) in enumerate(steps):
    x = start_x + i * (card_w + gap)
    draw.rounded_rectangle([x, y, x + card_w, y + card_h], radius=16, fill='#ffffff', outline='#e2e8f0', width=2)
    # Header tag
    draw.rounded_rectangle([x + 18, y + 22, x + 105, y + 50], radius=8, fill='#0f4a9b')
    draw.text((x + 28, y + 27), num, fill='#ffffff', font=f_tag)
    # Title
    draw.text((x + 18, y + 68), title, fill='#0a1f3d', font=f_card_title)
    draw.line([x + 18, y + 105, x + card_w - 18, y + 105], fill='#f1f5f9', width=2)
    
    # Body text
    lines = textwrap.wrap(body, width=25)
    line_y = y + 125
    for line in lines:
        draw.text((x + 18, line_y), line, fill='#475569', font=f_card_body)
        line_y += 26

# Bottom banner
draw.rounded_rectangle([75, 680, 1301, 730], radius=10, fill='#0f4a9b')
draw.text((100, 693), 'CORE PRINCIPLE: Action produces motivation, not the other way around. Shrink the threshold to start.', fill='#ffffff', font=f_footer)

out1 = 'public/images/blogs/ten-minute-restart-routine-protocol.webp'
img.save(out1, 'WEBP', quality=90)
print('Generated:', out1)


# --- 2. UAE 8-10 SUBJECT WORKLOAD MATRIX (1376 x 768) ---
img2 = Image.new('RGB', (1376, 768), '#f8fafd')
draw2 = ImageDraw.Draw(img2)

# Top banner
draw2.rectangle([0, 0, 1376, 135], fill='#0a1f3d')
draw2.text((80, 25), 'USTAAD UAE · PARENT & STUDENT GUIDANCE', fill='#C7A24A', font=f_tag)
draw2.text((80, 50), 'The UAE Factor: Why the Revision Pile Feels Bigger', fill='#ffffff', font=f_title)
draw2.text((80, 95), 'Understanding the structural pressures unique to British, IB, and American school students in the UAE', fill='#94a3b8', font=f_sub)

columns = [
    ('PRESSURE 01', '8 to 10 Subjects at Once', 'IGCSE and MYP curricula require simultaneous mastery of multiple subjects. When a student cannot decide where to begin, the brain defaults to avoidance.', '#0f4a9b'),
    ('PRESSURE 02', 'Multiple Board Frameworks', 'Navigating Cambridge, Edexcel, and IB mark schemes with differing command words and criteria raises cognitive friction for independent revision.', '#0a3a79'),
    ('PRESSURE 03', 'Compressed Evening Windows', 'Long school bus commutes across Dubai and Abu Dhabi, combined with extracurriculars, leave short study windows with heightened pressure to "use them well".', '#062953'),
    ('THE SOLUTION', 'Division of Ownership', 'Parents own the routines and low-friction environment (quiet space, phones parked away). The student owns the actual recall tasks and study output.', '#C7A24A')
]

for i, (tag, title, body, color) in enumerate(columns):
    x = start_x + i * (card_w + gap)
    is_solution = (i == 3)
    card_bg = '#fdfbf7' if is_solution else '#ffffff'
    border_col = '#C7A24A' if is_solution else '#e2e8f0'
    
    draw2.rounded_rectangle([x, y, x + card_w, y + card_h], radius=16, fill=card_bg, outline=border_col, width=2)
    # Header tag
    draw2.rounded_rectangle([x + 18, y + 22, x + 130, y + 50], radius=8, fill=color)
    draw2.text((x + 24, y + 27), tag, fill='#ffffff', font=f_tag)
    # Title (wrap to ensure no text overflows card)
    title_lines = textwrap.wrap(title, width=17)
    curr_ty = y + 65
    for tl in title_lines:
        draw2.text((x + 18, curr_ty), tl, fill='#0a1f3d', font=f_card_title)
        curr_ty += 28
    
    div_y = max(curr_ty + 10, y + 128)
    draw2.line([x + 18, div_y, x + card_w - 18, div_y], fill='#f1f5f9', width=2)
    
    # Body text
    lines = textwrap.wrap(body, width=25)
    line_y = div_y + 18
    for line in lines:
        draw2.text((x + 18, line_y), line, fill='#475569', font=f_card_body)
        line_y += 26

draw2.rounded_rectangle([75, 680, 1301, 730], radius=10, fill='#0a1f3d')
draw2.text((100, 693), 'TAKEAWAY FOR PARENTS: Freezing in front of a long subject list is not poor work ethic; it is a lack of a clear first step.', fill='#ffffff', font=f_footer)

out2 = 'public/images/blogs/uae-student-curriculum-load-breakdown.webp'
img2.save(out2, 'WEBP', quality=90)
print('Generated:', out2)
