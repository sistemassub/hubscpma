# Hub SCPMA — código-fonte

O site publicado é o `index.html` da raiz (um pacote único). Esta pasta guarda os **arquivos de origem** dele,
para que qualquer pessoa (ou uma nova sessão do Claude) consiga continuar o trabalho.

## Arquivos
| Arquivo | O que é |
|---|---|
| `head.html` | fontes, estilos e as regras para celular (telas menores que 760 px) |
| `markup.html` | o layout: login, menu lateral, páginas, janelas (modais) |
| `logic.js` | toda a lógica: Supabase, permissões, organograma, agenda, férias, usuários, documentos, colegiados |
| `orgimgs.json` | fotos do Paulo e do Achilles (as demais vêm de links do Drive) |
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
- **Regras de permissão:** administrador edita tudo; aprovar férias/folgas só quem está em `aprovadores_ferias_escopo`
  para a unidade da pessoa; patrimônio, documentos e ASSPLAN só administrador.
- **Dados pessoais** (e-mail, celular, aniversário do organograma, CPF etc.) ficam só no banco e só aparecem após o login —
  **nunca** coloque esses dados no código deste repositório (ele é público).

## Para adicionar uma pessoa
1. Banco: inserir em `usuarios_autorizados` (nome_usuario, nome_completo, unidade, nivel_acesso) e em `organograma_contatos` (org_id, e-mail, telefone, aniversário).
2. `logic.js`: incluir a linha no vetor `ORG0` (id, id do superior, cargo, nome completo...), com o nome igual ao `nome_completo`.
3. Rodar `atualizar.py`, testar e publicar.
