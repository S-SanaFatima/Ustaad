import os
import re

root = os.path.join(os.path.dirname(__file__), '..', 'src')
subtext = 'No commitment. Cancel anytime.'

text_replacements = [
    '✦ No Commitment · Cancel Anytime',
    '✦ No Commitment  ·  Cancel Anytime',
    '✦ First lesson free. No commitment.',
    '✦ No commitment, cancel anytime.',
    'Free Trial • No Commitment',
    'Free Trial · No Commitment',
    'First lesson free. No commitment.',
    'Free trial. No commitment.',
    'Free trial. No commitment. IGCSE, GCSE, and A-Level supported.',
    'Thirty focused minutes with an IGCSE tutor, plus a written summary of your child\'s exam-readiness.',
    "Stuck? Send it, we'll explain it.",
    'Stuck on a topic? Send it across.',
]

prop_patterns = [
    re.compile(r'\s*trustText="[^"]*"\s*'),
    re.compile(r'\s*subtext1="[^"]*"\s*'),
]

for dirpath, _, files in os.walk(root):
    for f in files:
        if not f.endswith('.tsx'):
            continue
        path = os.path.join(dirpath, f)
        with open(path, 'r', encoding='utf-8') as fh:
            content = fh.read()
        orig = content
        for old in text_replacements:
            content = content.replace(old, subtext)
        for pat in prop_patterns:
            content = pat.sub(' ', content)
        content = re.sub(r'(<HeroCTABlock[^>]*)\s+>', r'\1>', content)
        content = re.sub(r'(<FinalCTA[^>]*)\s+>', r'\1>', content)
        if content != orig:
            with open(path, 'w', encoding='utf-8', newline='') as fh:
                fh.write(content)
            print('updated', os.path.relpath(path, root))
