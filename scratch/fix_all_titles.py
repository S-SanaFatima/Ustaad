import os
import re

app_dir = r"e:\devsynx\New folder\src\app"

# Mapping of old title strings in app files to new trimmed titles (<= 60 chars)
app_title_replacements = {
    'Curriculum Tutoring UAE | British, American & IB Tutors Online | Ustaad': 'Curriculum Tutoring UAE | British, IB & American | Ustaad', # 58
    'British Curriculum Tutors UAE | IGCSE, GCSE, A-Level | Ustaad': 'British Curriculum Tutors UAE | IGCSE & A-Level | Ustaad', # 56
    'A-Level Tutors UAE | Private A-Level Tutoring Dubai & Abu Dhabi | Ustaad': 'A-Level Tutors UAE | Dubai & Abu Dhabi | Ustaad', # 48
    'IB Curriculum Tutors UAE | IB MYP & Diploma Tutoring Dubai & Abu Dhabi | Ustaad': 'IB Curriculum Tutors UAE | MYP & DP Tutoring | Ustaad', # 53
    'MYP Tutors UAE | IB Middle Years Programme Tutoring Dubai & Abu Dhabi | Ustaad': 'MYP Tutors UAE | IB Middle Years Programme | Ustaad', # 52
    'DP Standard Level Tutors UAE | IB SL Tutoring Dubai & Abu Dhabi | Ustaad': 'IB DP Standard Level (SL) Tutors UAE | Ustaad', # 45
    'DP Higher Level Tutors UAE | IB HL Tutoring Dubai & Abu Dhabi | Ustaad': 'IB DP Higher Level (HL) Tutors UAE | Ustaad', # 43
    'American Curriculum Tutors UAE | Middle School, High School, AP | Ustaad': 'American Curriculum Tutors UAE | K-12 & AP | Ustaad', # 51
    'AP Tutors UAE | AP Exam Preparation Dubai & Abu Dhabi | Ustaad': 'AP Tutors UAE | AP Exam Prep Dubai & Abu Dhabi | Ustaad', # 55
    'Middle School Tutors UAE | Grades 6–8 Private Tutoring Dubai | Ustaad': 'Middle School Tutors UAE | Grades 6–8 Tutoring | Ustaad', # 55
    'High School Tutors UAE | Grades 9–12 Private Tutoring Dubai | Ustaad': 'High School Tutors UAE | Grades 9–12 Tutoring | Ustaad', # 55
    'Maths Tutors UAE | IGCSE, A-Level, IB, AP Mathematics | Ustaad': 'Maths Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad', # 51
    'Business Studies Tutors UAE | IGCSE, A-Level, IB Business | Ustaad': 'Business Studies Tutors UAE | IGCSE, A-Level & IB | Ustaad', # 58
    'Accounting Tutors UAE | IGCSE, A-Level Accounting | Ustaad': 'Accounting Tutors UAE | IGCSE & A-Level | Ustaad', # 49
    'Finance Tutors UAE | A-Level, IB, University Finance | Ustaad': 'Finance Tutors UAE | A-Level, IB & University | Ustaad', # 54
    'Statistics Tutors UAE | IGCSE, A-Level, IB, AP Statistics | Ustaad': 'Statistics Tutors UAE | IGCSE, A-Level, IB & AP | Ustaad', # 51
    'Engineering Tutors UAE | IGCSE, A-Level, BTEC Engineering | Ustaad': 'Engineering Tutors UAE | A-Level & University | Ustaad', # 54
    'Middle School Science Tutors UAE | Grades 6-8 American Curriculum | Ustaad': 'Middle School Science Tutors UAE | Grades 6-8 | Ustaad', # 54
    'Exam Preparation Tutors UAE | IGCSE, A-Level, IB Exam Prep | Ustaad': 'Exam Preparation Tutors UAE | IGCSE, A-Level, IB | Ustaad', # 57
    'Why IGCSE Maths Students Lose Marks After Hours of Revision | Ustaad UAE': 'Why IGCSE Maths Students Lose Marks After Revision | Ustaad', # 59
    'Your Child Understands Physics. So Why Are the Marks Still Low? | Ustaad': 'Why Physics Understanding Does Not Mean High Marks | Ustaad', # 57
    'Why Students Forget Chemistry So Quickly (And How Parents Can Help) | Ustaad': 'Why Students Forget Chemistry So Quickly | Ustaad', # 52
    'Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB Chemistry | Ustaad': 'Chemistry Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad', # 56
    'Biology Tutor Abu Dhabi | IGCSE, A-Level, IB Biology — Ustaad': 'Biology Tutor Abu Dhabi | IGCSE, A-Level & IB | Ustaad', # 54
    'IGCSE Tutor Abu Dhabi | All Subjects, Cambridge & Edexcel — Ustaad': 'IGCSE Tutor Abu Dhabi | Cambridge & Edexcel | Ustaad', # 52
    'Hours of Revision, Still Low Marks: The Real Reason Why IGCSE Maths Students Suffer': 'Why IGCSE Maths Students Suffer Low Marks | Ustaad', # 50
    'Why Students Forget Chemistry So Quickly (And How Parents Can Help)': 'Why Students Forget Chemistry So Quickly | Ustaad', # 52
    'Your Child Understands Physics. So Why Are the Marks Still Low?': 'Why Physics Understanding Does Not Mean High Marks | Ustaad', # 57
}

for root, dirs, files in os.walk(app_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            modified = False
            for old, new in app_title_replacements.items():
                if old in content:
                    content = content.replace(old, new)
                    modified = True
            
            if modified:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                print(f"Updated {file}")

print("App files title tags updated.")
