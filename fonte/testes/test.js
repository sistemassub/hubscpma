// Teste do Hub com um Supabase simulado (a rede deste ambiente não alcança o Supabase real).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const path = require('path');
const OUT = process.argv[2], SHOTS = process.argv[3];

const users = [
  { nome_usuario: 'giovanna.cintra', nome_completo: 'Giovanna Silva Cintra', unidade: 'SCPMA', nivel_acesso: 'admin', senha_criada: true, pode_aprovar_ferias: false },
  { nome_usuario: 'jeovah.silva', nome_completo: 'Jeovah Quintino da Silva', nome_organograma: 'Jeovah Renomeado Silva', unidade: 'GEMONIT', nivel_acesso: 'usuario', senha_criada: false, pode_aprovar_ferias: false },
  { nome_usuario: 'paulo.scalco', nome_completo: 'Paulo Scalco', unidade: 'SCPMA', nivel_acesso: 'admin', senha_criada: true, pode_aprovar_ferias: true },
  { nome_usuario: 'vinicius.chaer', nome_completo: 'Vinicius Mamede Salum Chaer', unidade: 'SMA', nivel_acesso: 'usuario', senha_criada: false, pode_aprovar_ferias: true },
];
const t = new Date(); const iso = d => d.toISOString().slice(0, 10);
const plus = n => { const d = new Date(t); d.setDate(d.getDate() + n); return iso(d); };
let nextId = 100;
const docPastas = [{ id: 1, pai_id: null, nome: 'Processos 2026', criado_em: new Date().toISOString() }];
const docArqs = [{ id: 1, pasta_id: 1, nome: 'Termo de recebimento.pdf', caminho: '1/1-termo.pdf', tamanho: 204800, tipo: 'application/pdf', criado_em: new Date().toISOString(), enviado_por: 'giovanna.cintra' }];
let docSeq = 10;
const eventos = [
  { id: 1, titulo: 'Reunião de alinhamento SCPMA', descricao: 'Pauta: metas do trimestre', data: plus(0), data_fim: plus(0), inicio: '09:00:00', fim: '10:30:00', local: 'Sala 3', categoria: 'eventos', prioridade: 'alta', status: 'pendente', repeticao: 'nenhuma', responsavel: 'Giovanna Silva Cintra', unidade_responsavel: 'SCPMA', publico_tipo: 'todos', removido_em: null },
  { id: 2, titulo: 'Curso de Monitoramento', descricao: '', data: plus(3), data_fim: plus(4), inicio: '14:00:00', fim: '17:00:00', local: 'Auditório', categoria: 'cursos', prioridade: 'media', status: 'pendente', repeticao: 'nenhuma', responsavel: 'Jeovah Quintino da Silva', unidade_responsavel: 'GEMONIT', publico_tipo: 'unidade', removido_em: null },
  { id: 3, titulo: 'Férias — Jeovah Quintino da Silva', descricao: '', data: plus(-1), data_fim: plus(5), inicio: '00:00:00', fim: '23:59:00', local: '—', categoria: 'ferias', prioridade: 'baixa', status: 'solicitada', repeticao: 'nenhuma', responsavel: 'Jeovah Quintino da Silva', unidade_responsavel: 'GEMONIT', publico_tipo: 'unidade', removido_em: null },
  { id: 5, titulo: 'Oficina com convidados', descricao: '', data: plus(1), data_fim: plus(1), inicio: '10:00:00', fim: '12:00:00', local: 'Sala 2', categoria: 'oficinas', prioridade: 'media', status: 'pendente', repeticao: 'nenhuma', responsavel: 'Giovanna Silva Cintra', unidade_responsavel: 'SCPMA', publico_tipo: 'lista', removido_em: null },
  { id: 4, titulo: 'Entrega de relatório cancelada', descricao: '', data: plus(2), data_fim: plus(2), inicio: '10:00:00', fim: '11:00:00', local: '', categoria: 'relatorio', prioridade: 'media', status: 'cancelado', repeticao: 'nenhuma', responsavel: '', unidade_responsavel: 'GAPPP', publico_tipo: 'unidade', removido_em: null },
];
const writes = [];
const session = email => ({ access_token: 'fake.jwt.token', token_type: 'bearer', expires_in: 3600, expires_at: Math.floor(Date.now() / 1000) + 3600, refresh_token: 'r',
  user: { id: '11111111-1111-1111-1111-111111111111', aud: 'authenticated', role: 'authenticated', email, user_metadata: {}, app_metadata: {}, created_at: new Date().toISOString() } });
let lastEmail = 'giovanna.cintra@scpma.local';

(async () => {
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }).catch(() => chromium.launch());
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  page.on('console', m => { if (m.type() === 'error' && !/ERR_|Failed to load|WebSocket|net::/.test(m.text())) errors.push('console: ' + m.text()); });
  page.on('dialog', d => d.accept());
  await page.route(/supabase\.co/, async route => {
    const req = route.request(), u = new URL(req.url()), p = u.pathname, m = req.method();
    const json = (b, s = 200) => route.fulfill({ status: s, contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify(b) });
    if (m === 'OPTIONS') return route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' } });
    if (p.startsWith('/auth/v1/token')) { const b = JSON.parse(req.postData() || '{}'); if (b.password !== 'senha123' && b.password !== 'senha1234') return json({ error: 'invalid_grant', error_description: 'Invalid login credentials' }, 400); lastEmail = b.email; return json(session(b.email)); }
    if (p.startsWith('/auth/v1/signup')) { const b = JSON.parse(req.postData() || '{}'); writes.push(['signup', b.email]); lastEmail = b.email; return json(session(b.email)); }
    if (p.startsWith('/auth/v1/user')) { if (m === 'PUT') writes.push(['PUTUSER', p, '', JSON.parse(req.postData() || '{}')]); return json(session(lastEmail).user); }
    if (p.startsWith('/auth/v1/logout')) return route.fulfill({ status: 204 });
    if (p.startsWith('/storage/v1/object/sign/')) return json({ signedURL: '/object/sign/documentos-admin/x.pdf?token=abc' });
    if (p.startsWith('/storage/v1/object/documentos-admin') && m === 'DELETE') { writes.push(['STORAGE-DEL', p, '', req.postData()]); return json([]); }
    if (p.startsWith('/storage/v1/object/documentos-admin/')) { writes.push(['STORAGE-UP', p, '', null]); return json({ Key: p }); }
    if (p === '/rest/v1/rpc/agenda_login_status') { const b = JSON.parse(req.postData() || '{}'); const x = users.find(y => y.nome_usuario === b.p_usuario); return json(x ? [{ existe: true, senha_criada: x.senha_criada }] : [{ existe: false, senha_criada: false }]); }
    if (p === '/rest/v1/rpc/agenda_admin_reset_senha') return json('Hub1a2b3c45');
    if (p === '/rest/v1/rpc/agenda_admin_contas') return json([{ nome_usuario: 'giovanna.cintra', id: '11111111-1111-1111-1111-111111111111' }, { nome_usuario: 'jeovah.silva', id: '22222222-2222-2222-2222-222222222222' }]);
    if (p.startsWith('/rest/v1/rpc/')) { writes.push(['RPC', p, '', req.postData()]); return json([{ nome_usuario: 'jeovah.silva' }]); }
    const table = p.replace('/rest/v1/', '');
    if (m !== 'GET' && m !== 'HEAD') {
      const body = req.postData() ? JSON.parse(req.postData()) : null;
      writes.push([m, table, u.search, body]);
      if (m === 'POST' && table === 'documentos_arquivos') { const r = { id: docSeq++, criado_em: new Date().toISOString(), ...body }; docArqs.push(r); return json([r], 201); }
      if (m === 'POST' && table === 'documentos_pastas') { const r = { id: docSeq++, criado_em: new Date().toISOString(), ...body }; docPastas.push(r); return json([r], 201); }
      if (m === 'DELETE' && table === 'documentos_arquivos') { const id = +(u.searchParams.get('id') || '').replace('eq.', ''); const i = docArqs.findIndex(x => x.id === id); if (i >= 0) docArqs.splice(i, 1); return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': '*' } }); }
      if (m === 'POST' && table === 'documentos_arquivos') { const r = { id: docSeq++, criado_em: new Date().toISOString(), ...body }; docArqs.push(r); return json([r], 201); }
      if (m === 'POST' && table === 'documentos_pastas') { const r = { id: docSeq++, criado_em: new Date().toISOString(), ...body }; docPastas.push(r); return json([r], 201); }
      if (m === 'DELETE' && table === 'documentos_arquivos') { const id = +(u.searchParams.get('id') || '').replace('eq.', ''); const i = docArqs.findIndex(x => x.id === id); if (i >= 0) docArqs.splice(i, 1); return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': '*' } }); }
      if (table === 'eventos' && m === 'POST') { const rows = (Array.isArray(body) ? body : [body]).map(r => ({ ...r, id: nextId++, removido_em: null })); eventos.push(...rows); return json(rows, 201); }
      if (table === 'eventos' && m === 'PATCH') { const id = +(u.searchParams.get('id') || '').replace('eq.', ''); const ev = eventos.find(e => e.id === id); if (ev) Object.assign(ev, body); return json([ev]); }
      return json(Array.isArray(body) ? body : [body || {}], 201);
    }
    if (table === 'evento_convidados' && m === 'GET') return json(u.searchParams.get('evento_id') === 'eq.5' ? [{ nome_usuario: 'jeovah.silva' }, { nome_usuario: 'paulo.scalco' }, { nome_usuario: 'giovanna.cintra' }] : []);
    if (table === 'documentos_pastas' && m === 'GET') return json(docPastas);
    if (table === 'documentos_arquivos' && m === 'GET') return json(docArqs);
    if (table === 'documentos_pastas' && m === 'POST') { const b = JSON.parse(req.postData() || '{}'); const r = { id: docSeq++, criado_em: new Date().toISOString(), ...b }; docPastas.push(r); writes.push(['POST', table, '', b]); return json([r], 201); }
    if (table === 'documentos_arquivos' && m === 'POST') { const b = JSON.parse(req.postData() || '{}'); const r = { id: docSeq++, criado_em: new Date().toISOString(), ...b }; docArqs.push(r); writes.push(['POST', table, '', b]); return json([r], 201); }
    if (table === 'documentos_arquivos' && m === 'DELETE') { const id = +(u.searchParams.get('id') || '').replace('eq.', ''); const i = docArqs.findIndex(x => x.id === id); if (i >= 0) docArqs.splice(i, 1); writes.push(['DELETE', table, u.search, null]); return route.fulfill({ status: 204, headers: { 'access-control-allow-origin': '*' } }); }
    if (table === 'patrimonio_itens' && m === 'GET') return json([{ id: 1, processo: '202500004062849', setor: 'ASSPLAN', equipamento: 'POSITIVO', numero: '3722767', responsavel: 'Giovanna', observacao: '' }, { id: 2, processo: '202500004062849', setor: 'GAPPP', equipamento: 'POSITIVO', numero: '3722772', responsavel: '', observacao: '' }]);
    if (table === 'colegiados' && m === 'GET') return json(require('./colegiados.json').map((x, i) => ({ id: i + 1, ...x })));
    if (table === 'organograma_contatos') return json(require('./contatos.json'));
    if (table === 'usuarios_autorizados') return json(users);
    if (table === 'aprovadores_ferias_escopo') return json(m === 'GET' ? [{ nome_usuario: 'paulo.scalco', unidade: 'SCPMA' }, { nome_usuario: 'giovanna.cintra', unidade: 'GEMONIT' }] : []);
    if (table === 'eventos') return json(eventos.filter(e => !e.removido_em));
    if (table === 'evento_presencas') return json([{ evento_id: 1, nome_usuario: 'paulo.scalco', resposta: 'confirmado' }, { evento_id: 5, nome_usuario: 'jeovah.silva', resposta: 'recusado' }]);
    if (table === 'notificacoes') return json([{ id: 9, dest_usuario: 'giovanna.cintra', tipo: 'convite', titulo: 'Confirme sua presença', mensagem: 'Você foi convidado(a) para "Reunião"', lida: false, evento_id: 1, criada_em: new Date().toISOString() }]);
    if (table === 'patrimonio') return json(u.searchParams.get('nome_usuario') === 'eq.giovanna.cintra' ? [{ tem_patrimonio: true, patrimonio: '998877' }] : []);
    if (table === 'perfis' && u.searchParams.get('id') === 'eq.22222222-2222-2222-2222-222222222222') return json([{ cargo: 'Analista', telefone: '62 1', cpf: '111.222.333-44' }]);
    if (table === 'perfis_publicos') return json([{ nome_usuario: 'jeovah.silva', cargo: 'Assistente de Gestão Administrativa', nome_completo: 'Jeovah Q. Silva', telefone: '62 9 0000-1111', data_nascimento: '', foto_url: 'https://x.supabase.co/storage/v1/object/public/fotos-perfil/2/avatar.png' }]);
    return json([]);
  });
  const shot = async n => page.screenshot({ path: path.join(SHOTS, n + '.png') });
  const clickText = async (txt, opts) => page.getByText(txt, { exact: true, ...(opts || {}) }).first().click();
  await page.goto('file://' + OUT);
  await page.waitForTimeout(2500);
  await shot('01-login');
  // primeiro acesso (jeovah, sem senha) -> pede confirmação
  await page.fill('input[placeholder="nome.sobrenome"]', 'jeovah.silva');
  await page.fill('input[placeholder="••••••••"]', 'senha123');
  await page.locator('button').filter({ hasText: /^(Entrar|Criar senha e entrar)$/ }).click();
  await page.waitForTimeout(500);
  await shot('02-primeiro-acesso');
  const hasConfirm = await page.locator('input[placeholder="Repita a senha"]').count();
  console.log('primeiro acesso mostra confirmação:', hasConfirm === 1);
  await page.fill('input[placeholder="••••••••"]', 'abcdefgh'); await page.fill('input[placeholder="Repita a senha"]', 'abcdefgh');
  await page.locator('button').filter({ hasText: /^(Entrar|Criar senha e entrar)$/ }).click(); await page.waitForTimeout(300);
  console.log('senha só letras recusada:', await page.getByText('pelo menos 8 caracteres, com letras e números').count() > 0);
  await page.getByText('← Voltar').click();
  // login normal (admin)
  await page.fill('input[placeholder="nome.sobrenome"]', 'giovanna.cintra');
  await page.fill('input[placeholder="••••••••"]', 'errada');
  await page.locator('button').filter({ hasText: /^(Entrar|Criar senha e entrar)$/ }).click();
  await page.waitForTimeout(800);
  console.log('senha errada ->', await page.getByText('Senha incorreta.').count() === 1);
  await page.fill('input[placeholder="••••••••"]', 'senha123');
  await page.locator('button').filter({ hasText: /^(Entrar|Criar senha e entrar)$/ }).click();
  await page.waitForTimeout(1500);
  await shot('03-inicio');
  console.log('saudação:', await page.locator('h1').first().innerText());
  // notificações
  await page.locator('button[title="Notificações"]').click(); await page.waitForTimeout(300); await shot('04-notificacoes');
  await page.locator('button[title="Notificações"]').click();
  // calendário e abrir evento
  await page.getByText('Ver calendário →').click(); await page.waitForTimeout(500); await shot('05-calendario');
  console.log('painel férias:', JSON.stringify(await page.getByText(/Férias até \d\d\/\d\d/).first().innerText().catch(() => 'NÃO ACHOU')));
  await page.getByText('Lista', { exact: true }).first().click(); await page.waitForTimeout(300);
  console.log('linha da lista:', JSON.stringify(await page.getByText(/^Confirmaram: /).first().innerText().catch(() => 'NÃO ACHOU')));
  await page.getByText('Oficina com convidados').first().click(); await page.waitForTimeout(600);
  await page.screenshot({ path: SHOTS + '/18-participantes.png' });
  console.log('quadro:', JSON.stringify(await page.getByText(/^(Confirmaram \(|Ninguém confirmou)/).first().innerText().catch(() => 'NÃO ACHOU')));
  console.log('participantes:', JSON.stringify(await page.getByText(/Participantes \(/).first().innerText().catch(() => 'NÃO ACHOU')), await page.getByText('Aguardando resposta').count(), await page.getByText('Não vai', { exact: true }).count(), await page.getByText('Vai participar', { exact: true }).count());
  await page.mouse.click(1420, 20); await page.waitForTimeout(200);
  await page.getByText('Calendário', { exact: true }).first().click(); await page.waitForTimeout(300);
  await page.getByText('Lista', { exact: true }).first().click(); await page.waitForTimeout(400); await shot('06-lista');
  const sumTxt = async () => (await page.getByText(/eventos? · \d+ em andamento/).first().innerText());
  console.log('lista mês atual:', await page.locator('span', { hasText: /^Outubro de 2026$/ }).count() > 0, '|', await sumTxt());
  await page.locator('button[title="Próximo mês"]').click(); await page.waitForTimeout(300);
  console.log('próximo mês:', await page.locator('span', { hasText: /^Novembro de 2026$/ }).count() > 0, '|', await sumTxt());
  await page.getByText('Ver todos', { exact: true }).click(); await page.waitForTimeout(300);
  console.log('ver todos:', await sumTxt());
  await page.getByText('Este mês', { exact: true }).last().click(); await page.waitForTimeout(300);
  await page.getByText('Férias — Jeovah Quintino da Silva').first().click(); await page.waitForTimeout(500); await shot('07-ferias-aprovar');
  await page.getByRole('button', { name: 'Aprovar' }).click(); await page.waitForTimeout(800);
  console.log('aprovação gravou:', JSON.stringify(writes.filter(w => w[1] === 'eventos' && w[0] === 'PATCH').map(w => w[3].status)));
  await page.mouse.click(1420, 20); await page.waitForTimeout(300);
  // novo evento
  await page.getByRole('button', { name: /Novo evento/ }).click(); await page.waitForTimeout(400);
  await page.fill('input[placeholder="Ex.: Curso de Planejamento"]', 'Teste de criação');
  await page.fill('input[placeholder="Sala, link ou endereço"]', 'Sala 9');
  await shot('08-novo-evento');
  await page.getByRole('button', { name: /Criar evento/ }).click(); await page.waitForTimeout(1200);
  const ins = writes.find(w => w[0] === 'POST' && w[1].startsWith('eventos'));
  console.log('insert evento:', JSON.stringify(ins && ins[3]));
  await shot('09-apos-criar');
  // usuários e perfil
  await page.evaluate(() => {});
  await page.locator('aside').first().hover(); await page.getByText('Usuários', { exact: true }).first().click(); await page.waitForTimeout(400); await shot('10-usuarios');
  await page.mouse.move(900, 400);
  await page.locator('aside').first().locator('button').filter({ hasText: 'Giovanna' }).first().click(); await page.waitForTimeout(500);
  await page.fill('input[placeholder="Nº de matrícula"]', '12345');
  await page.getByRole('button', { name: /Salvar alterações/ }).click(); await page.waitForTimeout(800); await shot('11-perfil');
  await page.fill('input[placeholder="Nova senha"]', 'novaSenha99'); await page.fill('input[placeholder="Repita a nova senha"]', 'novaSenha99');
  await page.getByRole('button', { name: /^Alterar senha$/ }).click(); await page.waitForTimeout(600);
  console.log('troca de senha:', JSON.stringify(writes.filter(w => w[0] === 'PUTUSER').map(w => !!w[3].password)), await page.getByText('Senha alterada.').count());
  const pf = writes.find(w => w[1].startsWith('perfis'));
  console.log('patrimonio proprio:', JSON.stringify(writes.filter(w => w[1].startsWith('patrimonio')).map(w => w[3])));
  console.log('perfil gravou:', JSON.stringify(pf && pf[3]));
  // admin: editar dados de outra pessoa
  await page.locator('aside').first().hover(); await page.getByText('Usuários', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(400);
  await page.getByText('Jeovah Quintino da Silva', { exact: true }).first().click(); await page.waitForTimeout(800);
  await page.screenshot({ path: SHOTS + '/13-editar-usuario.png' });
  await page.locator('label:has-text("Nome completo") input').last().fill('Jeovah Quintino da Silva Jr');
  await page.locator('label:has-text("Matrícula") input').last().fill('55555');
  await page.locator('label:has-text("Nº do patrimônio") input').last().fill('ABC-1');
  await page.locator('label:has-text("Possui notebook") input').check();
  await page.getByRole('button', { name: /^Salvar$/ }).click(); await page.waitForTimeout(800);
  console.log('admin perfil:', JSON.stringify(writes.filter(w => w[1].startsWith('perfis') && w[3] && w[3].id === '22222222-2222-2222-2222-222222222222').map(w => w[3])));
  console.log('rpc nome:', JSON.stringify(writes.filter(w => w[0] === 'RPC' && /set_nome/.test(w[1])).map(w => w[3])));
  console.log('admin patrimonio:', JSON.stringify(writes.filter(w => w[1].startsWith('patrimonio')).map(w => w[3])));
  await page.getByText('Paulo Scalco', { exact: true }).first().click(); await page.waitForTimeout(800);
  console.log('campos sem conta:', await page.locator('label:has-text("CPF") input').count());
  await page.screenshot({ path: SHOTS + '/14-sem-conta.png' });
  await page.getByRole('button', { name: 'Cancelar' }).click();
  await page.locator('label:has-text("Matrícula") input').count().then(n => console.log('modal fechado:', n));
  // pessoas
  await page.locator('aside').first().hover(); await page.getByText('Organograma', { exact: true }).first().click(); await page.waitForTimeout(500); await page.mouse.move(900, 400); await shot('12-organograma');
  console.log('organograma mostra nome corrigido:', await page.getByText('Jeovah Renomeado Silva').count() > 0);
  await page.getByText('Jeovah Renomeado Silva').first().scrollIntoViewIfNeeded(); await page.mouse.move(900,400); await page.waitForTimeout(300); await page.screenshot({ path: SHOTS + '/15-org-cargo.png' });
  console.log('linha abaixo do Jeovah:', await page.getByText('Jeovah Renomeado Silva').first().evaluate(el => el.nextElementSibling && el.nextElementSibling.innerText));
  await page.locator('aside').first().hover(); await page.getByText('Colegiados', { exact: true }).first().click(); await page.mouse.move(900,400); await page.waitForTimeout(400); await page.screenshot({ path: SHOTS + '/16-colegiados.png' });
  console.log('colegiados abre:', await page.locator('h1', { hasText: 'Colegiados' }).count());
  await page.waitForTimeout(800); await page.screenshot({ path: SHOTS + '/21-colegiados.png', fullPage: true });
  console.log('colegiados cards:', await page.getByText('Conselho Estadual da Mulher', { exact: true }).count(), '| contador:', await page.getByText(/^21 colegiados$/).count());
  await page.locator('aside button', { hasText: 'Jeovah Quintino Silva' }).first().click(); await page.waitForTimeout(300);
  console.log('filtro Jeovah:', await page.getByText(/de 21 colegiados/).first().innerText().catch(() => 'NÃO ACHOU'));
  const [pc] = await Promise.all([page.waitForEvent('popup', { timeout: 5000 }).catch(() => null), page.getByRole('button', { name: 'PDF' }).first().click()]);
  console.log('pdf colegiados linhas:', pc ? await pc.locator('tbody tr').count() : 'SEM POPUP'); if (pc) await pc.close();
  await page.locator('aside').first().hover(); await page.getByText('Organograma', { exact: true }).first().click(); await page.mouse.move(900,400); await page.waitForTimeout(400);
  console.log('aniversariantes de outubro:', await page.getByText(/06\/10|07\/10/).count());
  await page.getByText('Heuler Neves de Assis').first().click(); await page.waitForTimeout(300);
  console.log('cartão Heuler tem telefone:', await page.getByText('62 9 8436-5115').count() > 0, '| e-mail:', await page.getByText('heuler.assis@goias.gov.br').count() > 0, '| aniversário:', await page.getByText(/11 de Janeiro/i).count() > 0);
  await page.mouse.click(10, 450);
  await page.getByRole('button', { name: /Novo evento/ }).click(); await page.waitForTimeout(400);
  await page.fill('input[placeholder="Ex.: Curso de Planejamento"]', 'Reunião com pessoas escolhidas');
  await page.locator('label:has-text("Participantes") select').selectOption('lista'); await page.waitForTimeout(300);
  await page.fill('input[placeholder="Buscar por nome ou unidade"]', 'jeovah'); await page.waitForTimeout(200);
  await page.getByRole('button', { name: /Jeovah Quintino da Silva/ }).first().click(); await page.waitForTimeout(200);
  await page.screenshot({ path: SHOTS + '/17-escolher-pessoas.png' });
  const n0 = writes.length;
  await page.getByRole('button', { name: /Criar evento/ }).click(); await page.waitForTimeout(1200);
  const w = writes.slice(n0);
  console.log('evento lista:', JSON.stringify(w.filter(x => x[1].startsWith('eventos')).map(x => (Array.isArray(x[3]) ? x[3][0] : x[3]).publico_tipo)), '| convidados:', JSON.stringify(w.filter(x => x[1].startsWith('evento_convidados')).map(x => [x[0], x[3]])), '| convites:', JSON.stringify(w.filter(x => x[1].startsWith('notificacoes')).map(x => x[3].dest_usuario + ':' + x[3].tipo)));
  console.log('menu Conecta SIPOFE:', await page.locator('aside a', { hasText: 'Conecta SIPOFE' }).first().getAttribute('href'), '| Projetos no menu:', await page.locator('aside a', { hasText: 'Projetos SCPMA' }).first().getAttribute('href'), '| ordem:', JSON.stringify(await page.locator('aside a').allInnerTexts()));
  // ASSPLAN, exportações, reset e dados internos
  await page.locator('aside').first().hover(); await page.getByText('Usuários', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(400);
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 5000 }).catch(() => null), page.getByRole('button', { name: 'Excel' }).first().click()]);
  console.log('excel usuários:', dl ? dl.suggestedFilename() : 'SEM DOWNLOAD');
  const [pop] = await Promise.all([page.waitForEvent('popup', { timeout: 5000 }).catch(() => null), page.getByRole('button', { name: 'PDF' }).first().click()]);
  console.log('pdf usuários:', pop ? (await pop.locator('h1').innerText()) + ' | linhas ' + await pop.locator('tbody tr').count() : 'SEM POPUP'); if (pop) await pop.close();
  await page.locator('button[title="Redefinir senha"]').first().click(); await page.waitForTimeout(500);
  console.log('reset mostra senha:', await page.getByText('Hub1a2b3c45').count());
  await page.getByRole('button', { name: 'Fechar' }).click();
  await page.getByText('Patrimônios', { exact: true }).click(); await page.waitForTimeout(500);
  await page.screenshot({ path: SHOTS + '/19-assplan.png' });
  console.log('assplan itens:', await page.getByText('3722767').count(), await page.getByText(/Processo 202500004062849/).count());
  await page.getByRole('button', { name: /Novo item/ }).click(); await page.waitForTimeout(200);
  await page.locator('label:has-text("Setor") input').last().fill('gemonit'); await page.locator('label:has-text("Nº do patrimônio") input').last().fill('999');
  await page.getByRole('button', { name: /^Salvar$/ }).last().click(); await page.waitForTimeout(600);
  console.log('assplan salvou:', JSON.stringify(writes.filter(w => w[1].startsWith('patrimonio_itens')).map(w => [w[0], w[3] && w[3].setor, w[3] && w[3].numero])));
  await page.locator('aside').first().hover(); await page.getByText('Organograma', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(400);
  await page.getByText('Jeovah Renomeado Silva').first().click(); await page.waitForTimeout(800);
  console.log('dados internos no cartão:', await page.getByText('Dados internos · só administradores').count(), await page.getByText('111.222.333-44').count());
  await page.screenshot({ path: SHOTS + '/20-cartao-admin.png' });
  await page.mouse.click(10, 450);
  await page.locator('aside').first().hover(); await page.getByText('Relatórios', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(400);
  console.log('abas relatórios:', JSON.stringify(await page.locator('button', { hasText: /^(Todos|Eventos|Cursos|Férias|Workshop)$/ }).allInnerTexts()));
  await page.getByRole('button', { name: 'Férias', exact: true }).first().click(); await page.waitForTimeout(300);
  await page.screenshot({ path: SHOTS + '/22-relatorios-ferias.png' });
  await page.locator('aside').first().hover(); await page.getByText('Organograma', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(500);
  const vin = page.getByText('Vinicius Mamede Salum Chaer').first();
  console.log('organograma Vinicius:', await page.getByText('Vinicius Mamede Salum Chaer').count(), '| nota:', await page.getByText('Superintendente de Monitoramento (Substituindo Daiany)').count(), '| Daiany como chefe:', await page.getByText('Daiany de Oliveira Santos').count());
  await vin.scrollIntoViewIfNeeded(); await page.mouse.move(900, 400); await page.waitForTimeout(200); await page.screenshot({ path: SHOTS + '/23-vinicius.png' });
  // Documentos
  await page.locator('aside').first().hover(); await page.getByText('Usuários', { exact: true }).first().click(); await page.mouse.move(900, 400); await page.waitForTimeout(300);
  await page.getByText('Documentos e projetos', { exact: true }).first().click(); await page.waitForTimeout(600);
  console.log('docs abas+pasta:', await page.getByText('Processos 2026').count(), '| resumo:', await page.getByText(/1 item · 1 pasta/).count());
  await page.screenshot({ path: SHOTS + '/24-documentos.png' });
  await page.getByRole('button', { name: /Processos 2026/ }).first().click(); await page.waitForTimeout(400);
  console.log('dentro da pasta:', await page.getByText('Termo de recebimento.pdf').count());
  await page.getByRole('button', { name: /Nova pasta/ }).click(); await page.waitForTimeout(200);
  await page.fill('input[placeholder="Ex.: Processos 2026"]', 'Contratos'); await page.getByRole('button', { name: /^Salvar$/ }).last().click(); await page.waitForTimeout(600);
  console.log('subpasta criada:', JSON.stringify(writes.filter(w => w[1] === 'documentos_pastas' && w[0] === 'POST').map(w => [w[3].nome, w[3].pai_id])));
  // links
  await page.getByRole('button', { name: /Novo link/ }).click(); await page.waitForTimeout(200);
  await page.fill('input[placeholder="https://…"]', 'javascript:alert(1)'); await page.getByRole('button', { name: /^Adicionar$/ }).click(); await page.waitForTimeout(400);
  console.log('link inválido barrado:', await page.getByText(/endereço válido/).count() > 0, '| gravou:', writes.filter(w => w[1] === 'documentos_arquivos' && w[0] === 'POST' && w[3].tipo === 'link').length);
  await page.fill('input[placeholder="https://…"]', 'painel.exemplo.gov.br/projeto'); await page.fill('input[placeholder="Ex.: Painel do projeto"]', 'Painel do projeto');
  await page.getByRole('button', { name: /^Adicionar$/ }).click(); await page.waitForTimeout(600);
  console.log('link gravado:', JSON.stringify(writes.filter(w => w[1] === 'documentos_arquivos' && w[0] === 'POST' && w[3].tipo === 'link').map(w => [w[3].nome, w[3].url, w[3].caminho, w[3].pasta_id])));
  await page.evaluate(() => { window.__opened = []; window.__open0 = window.open; window.open = (u) => { window.__opened.push(u); return null; }; });
  await page.locator('button[title="Abrir"]').last().click(); await page.waitForTimeout(300);
  console.log('abrir link:', JSON.stringify(await page.evaluate(() => window.__opened)));
  await page.screenshot({ path: SHOTS + '/26-links.png' });
  await page.evaluate(() => { window.open = window.__open0 || window.open; });
  await page.locator('input[type="file"][accept*=".pdf"]').setInputFiles({ name: 'Ofício nº 12.pdf', mimeType: 'application/pdf', buffer: Buffer.from('%PDF-1.4 teste') }); await page.waitForTimeout(900);
  console.log('upload:', JSON.stringify(writes.filter(w => w[0] === 'STORAGE-UP').map(w => decodeURIComponent(w[1]).split('/').slice(-2).join('/').replace(/\d{10,}/, 'TS'))), '| registro:', JSON.stringify(writes.filter(w => w[1] === 'documentos_arquivos' && w[0] === 'POST').map(w => [w[3].nome, w[3].pasta_id, w[3].tamanho])));
  await page.evaluate(() => { window.__opened = []; window.__open0 = window.__open0 || window.open; window.open = (u, ...r) => { window.__opened.push(u); return null; }; });
  await page.locator('button[title="Abrir"]').last().click(); await page.waitForTimeout(400);
  console.log('url aberta:', JSON.stringify((await page.evaluate(() => window.__opened)).map(u => String(u).replace(/^https?:\/\/[^/]+/, '').slice(0, 70))));
  await page.evaluate(() => { window.open = window.__open0 || window.open; });
  const [pop2] = await Promise.all([page.waitForEvent('popup', { timeout: 4000 }).catch(() => null), page.locator('button[title="Abrir"]').last().click()]);
  console.log('abrir documento (link temporário):', pop2 ? 'abriu ' + (pop2.url().includes('token=') ? 'com token' : pop2.url()) : 'SEM JANELA'); if (pop2) await pop2.close();
  await page.screenshot({ path: SHOTS + '/25-pasta.png' });
  await page.locator('button[title="Excluir"]').first().click(); await page.waitForTimeout(600);
  console.log('excluiu arquivo:', JSON.stringify(writes.filter(w => w[0] === 'STORAGE-DEL').length), JSON.stringify(writes.filter(w => w[1] === 'documentos_arquivos' && w[0] === 'DELETE').length));
  await page.getByText('Usuários', { exact: true }).first().click().catch(() => {});
  console.log('ERROS:', errors.length ? errors : 'nenhum');
  await browser.close();
})().catch(e => { console.error('FALHA NO TESTE:', e); process.exit(1); });
