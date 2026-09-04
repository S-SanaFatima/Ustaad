import os
import re

root = os.path.join(os.path.dirname(__file__), '..', 'src', 'app')
subtext = 'No commitment. Cancel anytime.'
subtext_jsx_light = f'<p className="text-xs text-gray-500 font-medium">{subtext}</p>'
subtext_jsx_dark = f'<p className="text-xs text-white/60 font-medium">{subtext}</p>'

blog_files = [
    f for f in os.listdir(root)
    if f.endswith('Blog.tsx') or f.endswith('BlogsPage.tsx')
]

for fname in blog_files:
    path = os.path.join(root, fname)
    with open(path, 'r', encoding='utf-8') as fh:
        content = fh.read()
    orig = content

    # Single centered gold button (mid-article)
    content = content.replace(
        'className="my-5 flex justify-center"',
        'className="my-5 flex flex-col items-center gap-1.5"',
    )
    content = re.sub(
        r'(className="my-5 flex flex-col items-center gap-1\.5">\s*'
        r'<a href="/contact#form"[^>]*>\s*'
        r'(?:Book Your Free Trial|Book Your Free IGCSE Assessment)\s*'
        r'</a>)(\s*</div>)',
        lambda m: m.group(1) + f'\n              {subtext_jsx_light}' + m.group(2)
        if subtext not in m.group(0) else m.group(0),
        content,
        flags=re.DOTALL,
    )

    # Bottom dual-button CTA on dark gradient backgrounds
    content = re.sub(
        r'(<div className="flex flex-col sm:flex-row justify-center gap-3">\s*)'
        r'(<a href="/contact#form"[^>]*>\s*'
        r'(?:Book Your Free Trial|Book Your Free IGCSE Assessment)[^<]*'
        r'</a>)',
        lambda m: (
            m.group(1).replace('gap-3">', 'items-center sm:items-start gap-3">')
            + '<div className="flex flex-col items-center gap-1.5">\n                '
            + m.group(2).strip()
            + f'\n                {subtext_jsx_dark}\n              </div>'
        )
        if 'No commitment. Cancel anytime.' not in m.group(0) else m.group(0),
        content,
        flags=re.DOTALL,
    )

    # Inline flex-wrap pair (light background)
    content = re.sub(
        r'(<div className="flex flex-wrap gap-3">\s*)'
        r'(<a href="/contact#form"[^>]*>\s*'
        r'Book Your Free Trial\s*'
        r'</a>)',
        lambda m: (
            m.group(1)
            + '<div className="flex flex-col items-start gap-1">\n                '
            + m.group(2).strip()
            + f'\n                {subtext_jsx_light}\n              </div>'
        )
        if 'No commitment. Cancel anytime.' not in m.group(0) else m.group(0),
        content,
        flags=re.DOTALL,
    )

    if content != orig:
        with open(path, 'w', encoding='utf-8', newline='') as fh:
            fh.write(content)
        print('updated', fname)
