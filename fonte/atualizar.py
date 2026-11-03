#!/usr/bin/env python3
"""Regrava o index.html a partir dos arquivos da pasta fonte/.

Uso (na raiz do repositório):   python3 -I fonte/atualizar.py

O index.html é um "pacote" único. Este script troca só o miolo (a página: head.html + markup.html + logic.js),
mantendo fontes, ícones e bibliotecas que já estão no pacote.
"""
import json, re, os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTE = os.path.join(RAIZ, 'fonte')
LER = lambda n: open(os.path.join(FONTE, n), encoding='utf-8').read()
LOGO_UUID = '552723aa-cb77-48c9-bb00-2226fceeef20'   # ícone do Hub (aba do navegador)
SUPA_UUID = '172cf468-e562-442b-9f6c-cbedd9763e63'   # supabase-js embutido no pacote

head, markup, logic = LER('head.html'), LER('markup.html'), LER('logic.js')
imgs = json.load(open(os.path.join(FONTE, 'orgimgs.json'), encoding='utf-8'))
for k in ('1', '30'):
    marca = "'__ORG%s_IMG__'" % k
    assert logic.count(marca) == 1, marca
    logic = logic.replace(marca, json.dumps(imgs[k]))

extra = ('\n<title>Hub SCPMA</title>\n<link rel="icon" type="image/png" href="' + LOGO_UUID + '">\n'
         '<script src="' + SUPA_UUID + '"></script>\n')
assert head.count('<helmet>\n') == 1
pagina = head.replace('<helmet>\n', '<helmet>' + extra, 1) + markup + logic + '</body></html>'
tpl = json.dumps(pagina, ensure_ascii=False).replace('</', '<\\u002F')

caminho = os.path.join(RAIZ, 'index.html')
html = open(caminho, encoding='utf-8').read()
m = re.search(r'(<script type="__bundler/template">)(.*?)(</script>)', html, re.S)
assert m, 'bloco da página não encontrado no index.html'
open(caminho, 'w', encoding='utf-8').write(html[:m.start(2)] + '\n' + tpl + '\n  ' + html[m.end(2):])
print('index.html atualizado (%d bytes)' % os.path.getsize(caminho))
