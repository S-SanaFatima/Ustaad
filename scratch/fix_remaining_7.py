import os

routes_file = r"e:\devsynx\New folder\src\routes.config.ts"
with open(routes_file, 'r', encoding='utf-8') as f:
    content = f.read()

fixes = {
    'IGCSE Tutors UAE | Private IGCSE Tutoring Dubai & Abu Dhabi — Ustaad': 'IGCSE Tutors UAE | Cambridge & Edexcel | Ustaad',
    'GCSE Tutors UAE | Private GCSE Tutoring Dubai & Abu Dhabi — Ustaad': 'GCSE Tutors UAE | AQA, OCR & Pearson Edexcel | Ustaad',
    'IB Tutors UAE | IB MYP & DP Tutoring Dubai & Abu Dhabi — Ustaad': 'IB Curriculum Tutors UAE | IB MYP & Diploma | Ustaad',
    'IB MYP Tutors UAE | IB Middle Years Programme Tutoring Dubai — Ustaad': 'MYP Tutors UAE | IB Middle Years Programme | Ustaad',
    'IB DP SL Tutors UAE | IB Diploma Standard Level Tutoring Dubai — Ustaad': 'DP Standard Level Tutors UAE | IB SL Tutoring | Ustaad',
    'IB DP HL Tutors UAE | IB Diploma Higher Level Tutoring Dubai — Ustaad': 'DP Higher Level Tutors UAE | IB HL Tutoring | Ustaad',
    'American Curriculum Tutors UAE | AP, SAT Tutoring Dubai — Ustaad': 'American Curriculum Tutors UAE | K-12 & AP | Ustaad',
}

for old, new in fixes.items():
    if old in content:
        content = content.replace(old, new)
        print(f"Replaced '{old}' ({len(old)}) with '{new}' ({len(new)})")
    else:
        print(f"NOT FOUND: '{old}'")

with open(routes_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Finished fixing remaining 7 titles.")
