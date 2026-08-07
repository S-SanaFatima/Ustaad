import os
import re

src_dir = r"e:\devsynx\New folder\src"

page_titles = []

# 1. Audit routes.config.ts
routes_file = os.path.join(src_dir, 'routes.config.ts')
with open(routes_file, 'r', encoding='utf-8') as f:
    content = f.read()

for m in re.finditer(r'title:\s*["\']([^"\']+)["\']', content):
    t = m.group(1)
    page_titles.append(('routes.config.ts', t, len(t)))

# 2. Audit SEOHead title props in app files
app_dir = os.path.join(src_dir, 'app')
for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                c = f.read()
            for m in re.finditer(r'SEOHead[^>]*title=["\']([^"\']+)["\']', c):
                t = m.group(1)
                rel = os.path.relpath(filepath, src_dir)
                page_titles.append((rel, t, len(t)))

print(f"Total page title tags audited: {len(page_titles)}\n")

over_limit = [p for p in page_titles if p[2] > 60]
print(f"Page titles OVER 60 chars: {len(over_limit)}\n")
for file, title, length in over_limit:
    print(f"[{length} chars] {file}: '{title}'")
