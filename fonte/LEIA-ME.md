# Hub SCPMA — código-fonte

O site publicado é o `index.html` da raiz (um pacote único). Esta pasta guarda os **arquivos de origem** dele,
para que qualquer pessoa (ou uma nova sessão do Claude) consiga continuar o trabalho.

## Arquivos
| Arquivo | O que é |
|---|---|
| `head.html` | fontes, estilos e as regras para celular (telas menores que 760 px) |
| `markup.html` | o layout: login, menu lateral, páginas, janelas (modais) |
| `logic.js` | toda a lógica: Supabase, permissões, organograma, agenda, férias, usuários, documentos, colegiados |
| `logo.png` | ícone da aba do navegador |
| `atualizar.py` | regrava o `index.html` a partir dos arquivos acima |
| `testes/` | testes no Chromium com um Supabase simulado (`test.js` completo, `mobile.js` para celular) |

## Como alterar o site
1. Edite `markup.html` e/ou `logic.js` (e `head.html` para estilo).
2. Na raiz do repositório: `python3 -I fonte/atualizar.py` — o `index.html` é regravado.
3. Teste: `node fonte/testes/test.js $PWD/index.html <pasta-de-prints>` (precisa do Playwright com Chromium).
4. Commit, pull request e merge na `main`; o GitHub Pages publica sozinho.
   Se a publicação travar: Settings → Pages → trocar a branch para *None* e voltar para *main*.

Para provar que a pasta está completa: rodar `atualizar.py` sem editar nada deixa o `index.html` idêntico.

## Banco de dados (Supabase, projeto `wlixkuxembfiotbmyrgk`)
O Hub guarda dados no Supabase; o código aqui só usa a chave **pública** (publishable), que é feita para ficar no site.
A proteção está no banco (RLS), não no código:
- **Login:** e-mails sintéticos `usuario@scpma.local`; só entra quem está em `usuarios_autorizados`.
- **Tabelas principais:** `usuarios_autorizados`, `usuario_unidades`, `aprovadores_ferias_escopo`, `eventos`,
  `evento_convidados`, `evento_presencas` (com aprovação do superior), `notificacoes`, `perfis`, `organograma_contatos`,
  `patrimonio`, `patrimonio_itens`, `colegiados`, `documentos_pastas`, `documentos_arquivos`.
- **Funções:** `agenda_is_admin`, `agenda_usuario_ok`, `agenda_publico_evento`, `agenda_aprovar_presenca`,
  `agenda_admin_set_nivel`, `agenda_admin_set_nome`, `agenda_admin_reset_senha`, `agenda_login_status`.
- **Arquivos (Storage):** `fotos-perfil` (público), `anexos-eventos` e `documentos-admin` (privados).
- **Regras de permissão:** administrador edita tudo; patrimônio, documentos e ASSPLAN só administrador.
- **Aprovação de férias e folgas (hierarquia):** aprova quem é chefe da pessoa (direto ou acima, tabela
  `hierarquia_superiores`) **ou** quem tem a unidade dela em `aprovadores_ferias_escopo` (substitutos da chefia).
  Ninguém aprova a si mesmo nem quem está acima dele ou no mesmo nível. A regra fica na função
  `agenda_pode_aprovar_pessoa`, usada por `agenda_aprovar_presenca` e pelo gatilho de férias; o site repete a mesma
  regra só para decidir onde mostrar os botões. A superintendente titular e o substituto da SMA estão cadastrados como "mesmo nível" (um acima do outro).
  A coluna `usuarios_autorizados.pode_aprovar_ferias` é só informativa e se atualiza sozinha a partir do escopo.
- **Prazos e datas (antigo "Calendário de datas · SCPMA"):** camada própria do Calendário, separada dos eventos
  (não entra na Lista de eventos, relatórios nem convites). Tabela `prazos` (categoria geceg/enc/mensal/ind/outro, título,
  data, data_fim, quem, etapa, obs) — todos os logados leem, só administradores criam/editam. Calculados no `logic.js`
  (não ficam no banco): feriados (nacionais, Goiânia e pontos facultativos), a contagem de dias úteis e os envios
  recorrentes (`PZ_REC`: 10º dia útil = monitoramento mensal; último dia útil = indicadores). Pontos facultativos de decreto
  que não se repetem todo ano (ex.: 30/12/2026) vão em `PF_DECRETO`, no `logic.js`. As escolhas de filtro e
  "pontos facultativos não são dias úteis" ficam salvas no navegador de cada pessoa.
- **Portarias (portal do PPA):** aba Usuários → Portarias (só administradores). Tabela `portarias` (nome, data, órgão, ementa,
  arquivo_url, publicado) e PDFs no Storage `portarias` (público). A página https://ppa.go.gov.br/elementor-200795/ usa o código de
  `fonte/portal-ppa/portarias-widget.html` (colado uma vez no widget HTML do Elementor), que lê as portarias publicadas direto
  do banco com a chave pública; se o banco não responder, mostra as linhas fixas que estão no próprio código.
  Ao escolher o PDF no Hub, ele é lido no navegador (pdf.js 3.11.174, carregado do cdnjs só nessa hora) e `portariaDoTexto`
  preenche nome, data, órgão (completa a sigla com órgãos já usados) e ementa (resumida por `ementaResumida` a partir do
  Art. 1º, no padrão do portal: "Fica aprovada a … do Plano Plurianual – PPA para o quadriênio …, referente à <órgão>, conforme Anexo desta Portaria."). Teste: `PDFJS_DIR=<pdfjs-dist>/package`
  em ambiente sem internet; o PDF de exemplo é `testes/portaria-exemplo.pdf` (portaria pública).
- **Portarias dos colegiados:** aba Colegiados → Portarias. Tabela `colegiado_portarias` (colegiado_id, nome, data, ementa,
  arquivo_caminho) e PDFs no Storage **privado** `colegiados-portarias` (abre por link temporário, só com login); todos os logados
  consultam, só administradores cadastram. Não são publicadas em lugar nenhum.
- **Nada do Hub é público:** todas as tabelas exigem login (sem permissão para `anon`). Única exceção intencional: as portarias do
  PPA marcadas como publicadas (tabela `portarias` e Storage `portarias`), lidas pelo portal do PPA.
- **Navegação:** menu = Início · Calendário · Unidades (agenda: Lista | Por unidade) · Central (Unidades · Organograma · Diretório) ·
  Colegiados · Usuários. Relatórios e a página de Férias saíram do menu; quem está de férias aparece na Visão Geral (Início).
- **Banco de horas da semaninha:** `banco_horas_lancamentos` (horas em minutos; coluna `banco` = '52h' ou '8h', um valor por
  pessoa e bancão, gravado pela função `agenda_bh_definir`; o Total é a soma e não é editável),
  `banco_horas_areas` ("atualizado até" de SCPMA, SMA e SUPLAN) e `banco_horas_editores` (quem lança em cada área:
  um assessor por superintendência). A área vem da unidade da pessoa (`agenda_area_de`).
  Cada lançamento só é visto pela própria pessoa (caixinha no Perfil) e por quem lança naquela área
  (aba "Banco de horas" em Usuários); administradores não veem por serem administradores.
- **Perfis no organograma:** a visão `perfis_publicos` roda com as permissões de quem consulta (`security_invoker`) e lê da
  função `agenda_perfis_publicos()`, que só entrega nome, cargo, unidade, contato, aniversário e foto, e só para usuários autorizados.
- **Dados pessoais** (e-mail, celular, aniversário do organograma, CPF etc.) ficam só no banco e só aparecem após o login —
  **nunca** coloque esses dados no código deste repositório (ele é público).

## Organograma (nomes, cargos, fotos)
Não ficam no código (o repositório é público): estão na tabela `organograma` (id, superior_id, cargo, nome, foto, substitui, nota,
ordem), lida só depois do login. Substituição de chefia: no registro de quem substitui, `substitui` = id da chefia e `nota` = texto
exibido abaixo do nome. Os testes usam um organograma fictício (`testes/organograma.json`).

## Para adicionar uma pessoa
1. Banco: inserir em `usuarios_autorizados` (nome_usuario, nome_completo, unidade, nivel_acesso), em `organograma_contatos` (org_id, e-mail, telefone, aniversário)
   e em `hierarquia_superiores` (nome_usuario, superior = nome_usuario do chefe; uma linha por chefe). Se a pessoa for chefe, incluir também
   a(s) unidade(s) dela em `aprovadores_ferias_escopo`.
2. Banco: incluir a pessoa na tabela `organograma` (id novo, superior_id, cargo, nome igual ao `nome_completo`, foto, ordem) — não é preciso mexer no código.
3. Não é preciso publicar o site: a pessoa aparece no Hub no próximo login.
