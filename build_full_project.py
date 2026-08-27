import os

def write(rel, content):
    p = os.path.join(os.getcwd(), rel)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print('Created:', rel)
