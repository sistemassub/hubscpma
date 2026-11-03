// Teste do Hub com um Supabase simulado (a rede deste ambiente não alcança o Supabase real).
const { chromium } = require('/opt/node-tools/node_modules/playwright');
const path = require('path');
const OUT = process.argv[2], SHOTS = process.argv[3];

const users = [
  { nome_usuario: 'giovanna.cintra', nome_completo: 'Giovanna Silva Cintra', unidade: 'SCPMA', nivel_acesso: 'admin', senha_criada: true, pode_aprovar_ferias: false },
  { nome_usuario: 'jeovah.silva', nome_completo: 'Jeovah Quintino da Silva', nome_organograma: 'Jeovah Renomeado Silva', unidade: 'GEMONIT', nivel_acesso: 'usuario', senha_criada: false, pode_aprovar_ferias: false },
  { nome_usuario: 'paulo.scalco', nome_completo: 'Paulo Scalco', unidade: 'SCPMA', nivel_acesso: 'admin', senha_criada: true, pode_aprovar_ferias: true },
];
const t = new Date(); const iso = d => d.toISOString().slice(0, 10);
const plus = n => { const d = new Date(t); d.setDate(d.getDate() + n); return iso(d); };
let nextId = 100;
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
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
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
    if (p === '/rest/v1/rpc/agenda_login_status') { const b = JSON.parse(req.postData() || '{}'); const x = users.find(y => y.nome_usuario === b.p_usuario); return json(x ? [{ existe: true, senha_criada: x.senha_criada }] : [{ existe: false, senha_criada: false }]); }
    if (p === '/rest/v1/rpc/agenda_admin_reset_senha') return json('Hub1a2b3c45');
    if (p === '/rest/v1/rpc/agenda_admin_contas') return json([{ nome_usuario: 'giovanna.cintra', id: '11111111-1111-1111-1111-111111111111' }, { nome_usuario: 'jeovah.silva', id: '22222222-2222-2222-2222-222222222222' }]);
    if (p.startsWith('/rest/v1/rpc/')) { writes.push(['RPC', p, '', req.postData()]); return json([{ nome_usuario: 'jeovah.silva' }]); }
    const table = p.replace('/rest/v1/', '');
    if (m !== 'GET' && m !== 'HEAD') {
      const body = req.postData() ? JSON.parse(req.postData()) : null;
      writes.push([m, table, u.search, body]);
      if (table === 'eventos' && m === 'POST') { const rows = (Array.isArray(body) ? body : [body]).map(r => ({ ...r, id: nextId++, removido_em: null })); eventos.push(...rows); return json(rows, 201); }
      if (table === 'eventos' && m === 'PATCH') { const id = +(u.searchParams.get('id') || '').replace('eq.', ''); const ev = eventos.find(e => e.id === id); if (ev) Object.assign(ev, body); return json([ev]); }
      return json(Array.isArray(body) ? body : [body || {}], 201);
    }
    if (table === 'evento_convidados' && m === 'GET') return json(u.searchParams.get('evento_id') === 'eq.5' ? [{ nome_usuario: 'jeovah.silva' }, { nome_usuario: 'paulo.scalco' }, { nome_usuario: 'giovanna.cintra' }] : []);
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
  const shot = async n => page.screenshot({ path: SHOTS + '/m-' + n + '.png' });
  await page.goto('file://' + OUT); await page.waitForTimeout(2500); await shot('01-login');
  await page.fill('input[placeholder="nome.sobrenome"]', 'giovanna.cintra'); await page.fill('input[placeholder="••••••••"]', 'senha123');
  await page.locator('button').filter({ hasText: /^Entrar$/ }).click(); await page.waitForTimeout(1500); await shot('02-inicio');
  const w = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
  console.log('largura página:', JSON.stringify(w));
  await page.getByText('Ver calendário →').click(); await page.waitForTimeout(500); await shot('03-calendario');
  console.log('largura calendário:', await page.evaluate(() => document.documentElement.scrollWidth));
  console.log('excede:', JSON.stringify(await page.evaluate(() => [...document.querySelectorAll('.hub-main *')].filter(el => el.getBoundingClientRect().right > 392 && el.getBoundingClientRect().width < 500).slice(0, 6).map(el => el.tagName + ' ' + (el.getAttribute('style') || '').slice(0, 90) + ' | ' + (el.innerText || '').slice(0, 30).replace(/\n/g, ' ')))));
  await page.getByText('Lista', { exact: true }).first().click(); await page.waitForTimeout(400); await shot('04-lista');
  await page.getByRole('button', { name: /Novo evento/ }).click(); await page.waitForTimeout(400); await shot('05-novo-evento');
  await page.locator('button[title="Fechar"]').click().catch(() => {}); await page.waitForTimeout(200);
  await page.keyboard.press('Escape').catch(() => {});
  console.log('largura lista:', await page.evaluate(() => document.documentElement.scrollWidth));
  await page.reload(); await page.waitForTimeout(2500);
  await page.locator('.hub-menu-btn').click(); await page.waitForTimeout(400); await shot('06-menu');
  await page.locator('aside').first().getByText('Colegiados', { exact: true }).click(); await page.waitForTimeout(900); await shot('07-colegiados');
  console.log('largura colegiados:', await page.evaluate(() => document.documentElement.scrollWidth));
  await page.locator('.hub-menu-btn').click(); await page.waitForTimeout(300); await page.locator('aside').first().getByText('Usuários', { exact: true }).click(); await page.waitForTimeout(600); await shot('08-usuarios');
  console.log('largura usuários:', await page.evaluate(() => document.documentElement.scrollWidth));
  await page.locator('.hub-menu-btn').click(); await page.waitForTimeout(300); await page.locator('aside').first().getByText('Relatórios', { exact: true }).click(); await page.waitForTimeout(600); await shot('09-relatorios');
  console.log('largura relatórios:', await page.evaluate(() => document.documentElement.scrollWidth));
  console.log('ERROS:', errors.length ? errors : 'nenhum');
  await browser.close();
})().catch(e => { console.error('FALHA NO TESTE:', e); process.exit(1); });
