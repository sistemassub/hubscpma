<script type="text/x-dc" data-dc-script="">
// Fotos embutidas viram blob: (o ";" de um data: URI quebra o style dos avatares)
const blobUrl = s => { try { const i = s.indexOf(','), bin = atob(s.slice(i + 1)), u = new Uint8Array(bin.length); for (let k = 0; k < bin.length; k++) u[k] = bin.charCodeAt(k); return URL.createObjectURL(new Blob([u], { type: s.slice(5, s.indexOf(';')) })); } catch (e) { return ''; } };
const RES = id => blobUrl(({ org1: '__ORG1_IMG__', org30: '__ORG30_IMG__' })[id]);
// Organograma: e-mail, celular e aniversário NÃO ficam no código (repositório público); vêm da tabela organograma_contatos após o login
const ORG0 = [[1,null,"Subsecretário de Planejamento, Monitoramento e Avaliação","Paulo Scalco","","","fotos/org-1.jpg",""],[2,1,"Assessora de Normas, Governança e Gestão de Planejamento","Luice Ferreira","","","https://drive.google.com/thumbnail?id=1y8PK4f1Xk-R2nJhuOzzWqc3Dz39CUGA5&sz=w200",""],[16,2,"Assessora Executiva","Adriana Freitas","","","https://drive.google.com/thumbnail?id=10tLCxGkYvYjNJF4toDSg5Hce5bxLgDDP&sz=w200",""],[4,2,"Assessora de Marketing","Giovanna Silva Cintra","","","https://drive.google.com/thumbnail?id=1iEA-ICfdIPFqgg0-NylcgwcCpiCYz12A&sz=w200",""],[5,2,"Assessora Administrativa","Cristina Gomes Ribeiro","","","https://drive.google.com/thumbnail?id=1AbgCXZ3bVtH7-UDXmX1FeDU6KNDxKlb4&sz=w200",""],[3,2,"Assessora Executiva","Karine Martins de Oliveira","","","https://drive.google.com/thumbnail?id=1b7zsVoE27fH9Wi78vKOvbb0oZOj8OK0k&sz=w200",""],[35,30,"Gerência de Avaliação de Programas e Políticas Públicas","Rhayneman Rogério Macedo","","","",""],[6,1,"Superintendente de Planejamento","Vagner Bruno","","","https://drive.google.com/thumbnail?id=1RgR4om29gPGy432Xq9R9Y_9XvnjH1r-H&sz=w200",""],[7,6,"Assessora de Planejamento","Heloisa de Sousa Bastos","","","https://drive.google.com/thumbnail?id=1JQimWTILj-0REz4FsfBT2HAX9nx8Qg-k&sz=w200",""],[8,6,"Assessora de Planejamento","Sablina Lemes Valim","","","",""],[9,6,"Gerente de Planejamento","Armando Melo","","","https://drive.google.com/thumbnail?id=129JIVu9fcJyehDDCxi7bi3pItKdcV5qm&sz=w200",""],[10,9,"Gerência de Planejamento","Raquel Rezende","","","https://drive.google.com/thumbnail?id=13yJgMfFb8vXZqN3B3SC1pm5-xvRdWSit&sz=w200",""],[11,9,"Gerência de Planejamento","Antônio Alan de Freitas","","","https://drive.google.com/thumbnail?id=1n6rxwToWpDHeOzh7oMQf7U3kUeW8Tj20&sz=w200",""],[12,9,"Gerência de Planejamento","Ana Paula De Carvalho Ferreira","","","https://drive.google.com/thumbnail?id=1nI1WrVHWjguw8CgN1mB6FpO7SVLCqqiZ&sz=w200",""],[13,9,"Gerência de Planejamento","Camila Rocha","","","https://drive.google.com/thumbnail?id=14K0QjahKMWdX7orQYzblHdU94w3SHe4p&sz=w200",""],[14,6,"Gerente de Políticas de médio e longo prazo","Evelyn Cruvinel","","","https://drive.google.com/thumbnail?id=1pWwaLW0JPZcWWs1vOPjEKw4KMlIxwDU6&sz=w200",""],[15,14,"Gerências de Políticas de médio e longo prazo","Eduardo Mesquita","","","https://drive.google.com/thumbnail?id=1WiZMFua1aHXWkZpT6GQBQLcTSZrrUnBi&sz=w200",""],[17,14,"Gerências de Políticas de médio e longo prazo","Polyana Pamela","","","https://drive.google.com/thumbnail?id=1HraQSSCB7dY9MtiBDKW7S81dsHoALrFs&sz=w200",""],[18,1,"Superintendente de Monitoramento","Daiany de Oliveira Santos","","","https://drive.google.com/thumbnail?id=1Y5p6RiuzawPn_UROl1H28TD3kO4B1KKn&sz=w200",""],[19,18,"Assessor de Monitoramento","Otávio Wudson Cordeiro Cintra","","","https://drive.google.com/thumbnail?id=1Yiem81XH4qX6Am00YTS2z3zF3PgOBFHR&sz=w200",""],[20,18,"Gerente de Monitoramento","Cassiano Brito","","","https://drive.google.com/thumbnail?id=1PBc6Omy8U93BUUd-7RsVL7oGkFUD3GhN&sz=w200",""],[21,20,"Gerência de Monitoramento","Jeovah Quintino da Silva","","","https://drive.google.com/thumbnail?id=1brrIN4mqN_WsoLacTPwUZ3KM1YupVGz2&sz=w200",""],[22,20,"Gerência de Monitoramento","Rita de Cassia","","","https://drive.google.com/thumbnail?id=1l-hp2ew8lf7oY3QGDI5QbcH8ExPtBCsO&sz=w200",""],[23,20,"Gerência de Monitoramento","Karine Duarte Brandão","","","https://drive.google.com/thumbnail?id=1hZvQEWBCKG5l-ZJMsXmcJ9cNUFlqTi9M&sz=w200",""],[24,30,"Gerência de Avaliação de Programas e Políticas Públicas","Henrique Mesquita Tonha","","","https://drive.google.com/thumbnail?id=1s5g_YWTLq372lomABigLBDBYQlbcoiES&sz=w200",""],[25,20,"Gerência de Monitoramento","Cleiton Moraes","","","https://drive.google.com/thumbnail?id=1nzr-l9ao1Wc9mFbCMmwd2bkgU0p1A_NJ&sz=w200",""],[26,20,"Gerência de Monitoramento","Lívia Almeida Maroclo","","","https://drive.google.com/thumbnail?id=1g390WlNUX33AWSTzJF_AztgoeNMY4_Ao&sz=w200",""],[27,20,"Gerência de Monitoramento","Marcela Cortez","","","https://drive.google.com/thumbnail?id=1ySFwDNGfnF9xKkESDNJi2_4S7Clo6XEB&sz=w200",""],[28,20,"Gerência de Monitoramento","Nancy Santana","","","https://drive.google.com/thumbnail?id=1KF-CYlG5wDuI2g5LWN9JoAPj0Ar1epra&sz=w200",""],[29,20,"Gerência de Monitoramento","Heuler Neves de Assis","","","https://drive.google.com/thumbnail?id=1jNLahPggK1p_hVoNeDz7nhROt9LWuDlC&sz=w200",""],[30,18,"Gerente de Avaliação de Programas e Políticas Públicas","Achilles Mascarenhas Carvalho","","","fotos/org-30.png",""],[31,30,"Gerência de Avaliação de Programas e Políticas Públicas","Izael Julio Silva","","","https://drive.google.com/thumbnail?id=1oBtDlxQSGMgsw7hLDgBJ6RnPUmUEofDi&sz=w200",""],[32,9,"Gerência de Planejamento","Fernanda Araújo Vieira","","","",""],[33,30,"Gerência de Avaliação de Programas e Políticas Públicas","Iduardo Donizet Gomes Júnior","","","",""],[34,20,"Gerência de Monitoramento","Luciana Vieira da Silva","","","",""],[36,9,"Gerência de Planejamento","Karen Quezia de Oliveira","","","",""],[37,18,"Superintendente de Monitoramento","Vinicius Mamede Salum Chaer","","","",""],[38,6,"Assessora de Planejamento","Simone Alves dos Santos Jorge","","","",""],[39,2,"Assessor de Inovação","Marcos Vinicius Branquinho Xavier","","","",""]];
// Substituições no organograma: quem aparece no lugar da chefia, com a nota abaixo do nome
const SUBSTITUI = { 18: { por: 37, nota: 'Superintendente de Monitoramento (Substituindo Daiany)' } };
const SUBST_IDS = new Set(Object.values(SUBSTITUI).map(x => x.por));
const ORG = ORG0.map(o => o[0] === 1 ? o.slice(0, 6).concat(RES("org1"), o.slice(7)) : o[0] === 30 ? o.slice(0, 6).concat(RES("org30"), o.slice(7)) : o);
const UNITS = { scpma:['SCPMA','#0b4f9c'], sma:['SMA','#1f9d4c'], gemonit:['GEMONIT','#5b8fd6'], gappp:['GAPPP','#c99a00'], suplan:['SUPLAN','#7cc576'], geplan:['GEPLAN','#0f7a5c'], gpmlp:['GPMLP','#0b2b55'] };
const UNIT_ROOT = { 9:'geplan', 14:'gpmlp', 6:'suplan', 20:'gemonit', 30:'gappp', 18:'sma' };
const UNIT_FULL = { scpma:'Subsecretaria Central de Planejamento, Monitoramento e Avaliação', sma:'Superintendência de Monitoramento', gemonit:'Gerência de Monitoramento', gappp:'Gerência de Avaliação de Programas e Políticas Públicas', suplan:'Superintendência de Planejamento', geplan:'Gerência de Planejamento', gpmlp:'Gerência de Políticas de Médio e Longo Prazo' };
const UNIT_HEAD = { scpma:1, sma:18, gemonit:20, gappp:30, suplan:6, geplan:9, gpmlp:14 };
const CATS = [['eventos','Eventos'],['cursos','Cursos'],['workshop','Workshop'],['oficinas','Oficinas'],['monitoramento','Monitoramento'],['relatorio','Relatório de entregas'],['ferias','Férias'],['indicadores','Indicadores']];
const CAT_ICON = { eventos:'ph-calendar-star', cursos:'ph-graduation-cap', workshop:'ph-chalkboard-teacher', oficinas:'ph-wrench', monitoramento:'ph-chart-line-up', relatorio:'ph-file-text', ferias:'ph-umbrella', indicadores:'ph-chart-bar' };
const ST = { nao_iniciado:['Não iniciado','#f2f5f4','#3d4943'], em_andamento:['Em andamento','#fdf1c4','#7a5d00'], concluido:['Concluído','#dcf2e3','#146c35'], cancelado:['Cancelado','#fbe1e1','#b42318'] };
const FST = { Solicitada:['#fdf1c4','#7a5d00'], Aprovada:['#dcf2e3','#146c35'], Cancelada:['#f2f5f4','#3d4943'], Recusada:['#fbe1e1','#b42318'] };
const PRIO = [['alta','Alta'],['media','Média'],['baixa','Baixa']];
const todayIso = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
let TODAY = todayIso();
const MONTHS = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
const WD = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'];
const WDF = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
const pad = n => String(n).padStart(2, '0');
const iso = (y, m, d) => y + '-' + pad(m + 1) + '-' + pad(d);
const dt = s => new Date(s + 'T12:00:00');
const isoOf = d => iso(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (s, n) => isoOf(new Date(dt(s).getTime() + n * 864e5));
const diff = (a, b) => Math.round((dt(b) - dt(a)) / 864e5);
const dm = s => s.slice(8, 10) + '/' + s.slice(5, 7);
const longDate = s => (+s.slice(8, 10)) + ' de ' + MONTHS[+s.slice(5, 7) - 1];
const ini = n => { const p = n.split(' ').filter(w => w.length > 2); return (p[0][0] + (p[p.length - 1] || p[0])[0]).toUpperCase(); };
const unitOf = id => { let cur = ORG.find(o => o[0] === id); while (cur) { if (UNIT_ROOT[cur[0]]) return UNIT_ROOT[cur[0]]; cur = ORG.find(o => o[0] === cur[1]); } return 'scpma'; };
const rel = n => n === 0 ? 'hoje' : n === 1 ? 'amanhã' : n < 0 ? 'há ' + (-n) + ' dias' : 'em ' + n + ' dias';
const bdayLong = b => b ? (+b.slice(0, 2)) + ' de ' + MONTHS[+b.slice(3, 5) - 1] : '';
const hideImg = e => { e.target.style.display = 'none'; };

// ============ Integração Supabase ============
const SUPA_URL = 'https://wlixkuxembfiotbmyrgk.supabase.co';
const SUPA_KEY = 'sb_publishable_5kJA97mc8eDIbLdiEMiu0A_yoLrxx1_';
// O login é por NOME DE USUÁRIO, mas o Supabase Auth exige e-mail: usamos um e-mail sintético estável.
const AUTH_EMAIL_DOMAIN = 'scpma.local';
const authEmail = u => String(u).trim().toLowerCase() + '@' + AUTH_EMAIL_DOMAIN;
const ANEXOS_BUCKET = 'anexos-eventos';
const DOCS_BUCKET = 'documentos-admin';
// só aceita endereços http(s); sem esquema, assume https://
const toUrl = v => { v = String(v || '').trim(); if (!v) return ''; if (!/^[a-z][a-z0-9+.-]*:/i.test(v)) v = 'https://' + v; return /^https?:\/\/[^\s]+$/i.test(v) ? v : ''; };
const UNIT_BY_NAME = { SCPMA:'scpma', SMA:'sma', GEMONIT:'gemonit', GAPPP:'gappp', SUPLAN:'suplan', GEPLAN:'geplan', GPMLP:'gpmlp' };
const toUnitId = v => { if (!v) return 'scpma'; const x = String(v).trim(); return UNITS[x.toLowerCase()] ? x.toLowerCase() : (UNIT_BY_NAME[x.toUpperCase()] || 'scpma'); };
const toUnitName = id => UNITS[toUnitId(id)][0];
const RSVP_CATS = ['eventos', 'cursos', 'workshop', 'oficinas'];
// Status de férias: banco (minúsculo) <-> tela
const FST_DB = { solicitada:'Solicitada', aprovada:'Aprovada', cancelado:'Cancelada', recusada:'Recusada' };
const FST_UI = { Solicitada:'solicitada', Aprovada:'aprovada', Cancelada:'cancelado', Recusada:'recusada' };
const PART_DB = { unidade:'unidade', todas:'todos', eu:'lista', lista:'lista' };
const PART_UI = { unidade:'unidade', todos:'todas', lista:'lista' };
const normName = s => (s || '').trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ');
const sameName = (a, b) => { const x = normName(a).split(' '), z = normName(b).split(' '); return !!x[0] && (x.join(' ') === z.join(' ') || (x[0] === z[0] && x[x.length - 1] === z[z.length - 1])); };
const personFromTitle = t => String(t || '').replace(/^\s*(f[ée]rias|licen[çc]a[^-–—]*)\s*[-–—:]\s*/i, '').replace(/\s*\(.*\)\s*$/, '').trim();

// Linha da tabela "eventos" -> evento da tela
const rowToEv = r => {
  const cat = r.categoria || 'eventos', unit = toUnitId(r.unidade_responsavel);
  const t1 = String(r.inicio || '').slice(0, 5), t2 = String(r.fim || '').slice(0, 5);
  const allDay = (!t1 || t1 === '00:00') && (!t2 || t2 === '23:59');
  const ev = { id: r.id, title: r.titulo || '', desc: r.descricao || '', unit, cat, prio: r.prioridade || 'media', rep: r.repeticao || 'nenhuma',
    start: r.data, end: (r.data_fim && r.data_fim > r.data) ? r.data_fim : r.data, t1: allDay ? '' : t1, t2: allDay ? '' : t2,
    loc: r.local === '—' ? '' : (r.local || ''), resp: r.responsavel || '', part: PART_UI[r.publico_tipo] || 'unidade', dbStatus: r.status, exige: !!r.exige_aprovacao };
  if (cat === 'ferias') {
    ev.fst = FST_DB[r.status] || 'Solicitada';
    ev.person = r.responsavel || personFromTitle(r.titulo);
    ev.kind = /licen/i.test(r.titulo || '') ? 'Licença' : 'Férias';
    if (ev.fst === 'Cancelada' || ev.fst === 'Recusada') ev.status = 'cancelado';
  } else if (r.status === 'cancelado' || r.status === 'concluido') ev.status = r.status;
  return ev;
};
// Formulário da tela -> linha da tabela "eventos"
const formToRow = (fm, prev) => {
  const isF = fm.cat === 'ferias';
  let status;
  if (isF) status = prev && prev.cat === 'ferias' ? (FST_UI[prev.fst] || 'solicitada') : 'solicitada';
  else status = fm.cancel ? 'cancelado' : fm.done ? 'concluido' : 'pendente';
  return { titulo: fm.title.trim(), descricao: fm.desc || '', data: fm.d1, data_fim: fm.d2 < fm.d1 ? fm.d1 : fm.d2,
    inicio: fm.t1 || '00:00', fim: fm.t2 || '23:59', local: fm.loc || '', categoria: fm.cat, prioridade: fm.prio || 'media', status,
    repeticao: fm.rep || 'nenhuma', responsavel: fm.resp || '', unidade_responsavel: toUnitName(fm.unit), cor: UNITS[toUnitId(fm.unit)][1],
    publico_tipo: PART_DB[fm.part] || 'unidade', exige_aprovacao: !isF && !!fm.exige };
};
const recurrence = (d1, d2, rep) => {
  const span = Math.max(0, diff(d1, d2 < d1 ? d1 : d2));
  const addMonths = (s, n) => { const x = dt(s); x.setMonth(x.getMonth() + n); return isoOf(x); };
  let starts = [d1];
  if (rep === 'diaria') starts = Array.from({ length: 30 }, (_, i) => addDays(d1, i));
  else if (rep === 'semanal') starts = Array.from({ length: 12 }, (_, i) => addDays(d1, i * 7));
  else if (rep === 'mensal') starts = Array.from({ length: 12 }, (_, i) => addMonths(d1, i));
  return starts.map(s => ({ d1: s, d2: addDays(s, span) }));
};
// Pareia pessoa do organograma <-> usuário (e-mail institucional, tolerando letras repetidas, ou nome)
const squeeze = s => String(s || '').toLowerCase().replace(/(.)\1+/g, '$1');
const orgFor = (usuario, nome) => { const u = String(usuario || '').toLowerCase(), pre = o => o[4] ? o[4].split('@')[0].toLowerCase() : '';
  return ORG.find(o => pre(o) === u) || ORG.find(o => pre(o) && squeeze(pre(o)) === squeeze(u)) || (nome ? ORG.find(o => sameName(o[3], nome)) : null) || null; };
// Só endereços http(s) vão para o banco (blob:/data: valem apenas neste navegador)
const storableUrl = u => /^https?:/i.test(u || '') ? u : '';
const errMsg = e => String((e && (e.message || e.details || e.error_description)) || e || 'erro desconhecido').slice(0, 160);

class Component extends DCLogic {
  state = { logged: false, lu: '', lp: '', lp2: '', lstep: 'login', showPw: false, remember: true, lmsg: '', view: 'inicio', agTab: 'cal', calMode: 'mes', ym: [+TODAY.slice(0, 4), +TODAY.slice(5, 7) - 1], day: TODAY, calUnits: [],
    per: 'mes', lym: [+TODAY.slice(0, 4), +TODAY.slice(5, 7) - 1], from: '', to: '', fCat: 'all', fSt: 'all', fFst: 'all', fPrio: 'all', lUnits: [], asc: true,
    uSel: 'scpma', uCat: 'all', pTab: 'unidades', q: '', unitF: 'all', person: null,
    events: [], modal: false, editId: null, viewId: null, f: null, err: false, files: [],
    prof: { cargo: '', tel: '', bday: '', mat: '', pc: '', arm: '', cpf: '', foto: '' }, profSaved: '', rail: false, nivelF: 'all',
    me: null, users: [], feriasScope: {},
    online: false, connecting: true, busy: false, backendProblem: '', publicProfiles: {}, presencas: {}, presencaCounts: {}, myNextId: '', myNextDone: false,
    notifs: [], notifOpen: false, toast: null, toastErr: false, saving: false, uEdit: null, myPat: null, publicByUser: {}, convEv: {}, presencaQuem: {}, np1: '', np2: '', pwBusy: false, usrTab: 'usuarios', patItens: [], patLoaded: false, patEdit: null, patQ: '', personAdm: {}, resetInfo: null, colItens: [], colLoaded: false, colQ: '', colPessoa: '', colMine: false, colEdit: null,
    docPastas: [], docArqs: [], docLoaded: false, docPasta: null, docQ: '', docBusy: false, docFolderEdit: null, docFileEdit: null, docLinkEdit: null };

  componentDidMount() {
    document.title = 'Hub SCPMA';
    this._tick = setInterval(() => { const t = todayIso(); if (t !== TODAY) { TODAY = t; this.forceUpdate(); } }, 60000);
    this.initBackend();
  }
  componentWillUnmount() { clearInterval(this._tick); clearTimeout(this._tt); this.unsubscribeRealtime(); }

  notify(msg, err) { clearTimeout(this._tt); this.setState({ toast: msg, toastErr: !!err }); this._tt = setTimeout(() => this.setState({ toast: null }), err ? 8000 : 3000); }

  // ===== Camada de dados (Supabase) =====
  sb() {
    if (this._sbTried) return this._sb;
    if (!window.supabase) return null;
    this._sbTried = true;
    try { this._sb = window.supabase.createClient(SUPA_URL, SUPA_KEY); } catch (e) { console.warn('[Hub] Falha ao criar cliente Supabase:', e); }
    return this._sb;
  }
  async ensureSb() { for (let i = 0; i < 150 && !window.supabase; i++) await new Promise(r => setTimeout(r, 100)); return this.sb(); }
  async initBackend() {
    const sb = await this.ensureSb();
    if (!sb) { this.setState({ connecting: false, online: false, backendProblem: 'A biblioteca do banco de dados não carregou (internet instável ou bloqueio de rede).' }); return; }
    try {
      const { error: pingErr } = await sb.rpc('agenda_login_status', { p_usuario: '' });
      if (pingErr) throw pingErr;
      // "Manter conectado" desmarcado: a sessão vale só enquanto esta aba estiver aberta
      let keep = true; try { keep = localStorage.getItem('hubscpma.noremember') !== '1' || sessionStorage.getItem('hubscpma.alive') === '1'; } catch (e) {}
      const { data } = await sb.auth.getSession();
      if (data && data.session) { if (keep) await this.resumeSession(data.session); else await sb.auth.signOut().catch(() => {}); }
      this.setState({ connecting: false, online: true });
    } catch (e) {
      console.warn('[Hub] Não foi possível conectar ao Supabase:', e);
      this.setState({ connecting: false, online: false, backendProblem: 'Sem conexão com o banco de dados (' + errMsg(e) + ').' });
    }
  }
  async loadUsers(sb) {
    sb = sb || this.sb();
    const { data, error } = await sb.from('usuarios_autorizados').select('nome_usuario,nome_completo,nome_organograma,unidade,nivel_acesso,senha_criada,pode_aprovar_ferias');
    if (error) throw error;
    const known = new Set((data || []).map(r => String(r.nome_usuario).toLowerCase()));
    const isUnit = v => typeof v === 'string' && !!UNIT_BY_NAME[v.trim().toUpperCase()];
    // usuario_unidades: 2ª fonte de acesso às unidades (colunas detectadas automaticamente)
    const uu = {};
    try {
      const r = await sb.from('usuario_unidades').select('*');
      if (!r.error && r.data) r.data.forEach(row => {
        let key = row.nome_usuario || row.usuario || null;
        if (!key) for (const v of Object.values(row)) if (typeof v === 'string' && known.has(v.toLowerCase())) { key = v; break; }
        let un = isUnit(row.unidade) ? row.unidade : isUnit(row.sigla) ? row.sigla : null;
        if (!un) for (const v of Object.values(row)) if (isUnit(v)) { un = v; break; }
        if (key && un) (uu[String(key).toLowerCase()] = uu[String(key).toLowerCase()] || []).push(un);
      });
    } catch (e) {}
    const users = (data || []).map(r => {
      const admin = r.nivel_acesso === 'admin', units = new Set();
      if (r.unidade) units.add(toUnitName(r.unidade));
      (uu[String(r.nome_usuario).toLowerCase()] || []).forEach(u => units.add(toUnitName(u)));
      return { nome: r.nome_completo || r.nome_usuario, usuario: r.nome_usuario, acesso: admin ? 'Todas as unidades' : ([...units].join(', ') || 'SCPMA'), nivel: admin ? 'admin' : 'editor', unid: r.unidade ? toUnitName(r.unidade) : '', senhaCriada: !!r.senha_criada, nomeOrg: (r.nome_organograma || '').trim() };
    }).sort((a, b) => a.nome.localeCompare(b.nome, 'pt'));
    if (users.length) this.setState(st => ({ users, me: st.me ? (users.find(x => x.usuario === st.me.usuario) || st.me) : st.me }));
    await this.loadFeriasScope(sb);
  }
  async loadFeriasScope(sb) {
    try {
      const { data, error } = await (sb || this.sb()).from('aprovadores_ferias_escopo').select('nome_usuario,unidade');
      if (error) throw error;
      const map = {}; (data || []).forEach(r => { const k = String(r.nome_usuario).toLowerCase(); (map[k] = map[k] || []).push(String(r.unidade).trim().toUpperCase()); });
      this.setState({ feriasScope: map });
    } catch (e) { console.warn('[Hub] Erro ao carregar escopo de férias:', errMsg(e)); }
  }
  async loadEvents() {
    const sb = this.sb(); if (!sb) return 'fail';
    // O Supabase devolve no máximo 1000 linhas por consulta: busca em páginas.
    const PAGE = 1000;
    const fetchAll = async () => {
      let all = [];
      for (let from = 0; ; from += PAGE) {
        const { data, error } = await sb.from('eventos').select('*').is('removido_em', null)
          .order('data', { ascending: true }).order('inicio', { ascending: true }).order('id', { ascending: true }).range(from, from + PAGE - 1);
        if (error) return { error };
        all = all.concat(data || []);
        if (!data || data.length < PAGE) break;
      }
      return { data: all };
    };
    let res = await fetchAll();
    if (res.error) { try { await sb.auth.refreshSession(); } catch (e) {} res = await fetchAll(); }
    if (res.error) {
      const er = res.error, auth = er.status === 401 || er.code === 'PGRST301' || /jwt/i.test(String(er.message || ''));
      console.warn('[Hub] Erro ao carregar eventos:', errMsg(er));
      if (!auth) this.notify('Não foi possível carregar os eventos. Atualize a página (F5) e tente de novo.', true);
      return auth ? 'auth' : 'fail';
    }
    const evsNew = res.data.map(rowToEv);
    this.setState({ events: evsNew });
    this.loadPresencaCounts();
    this.computeMyNext(evsNew);
    return 'ok';
  }
  async loadPresencaCounts() {
    try {
      const { data, error } = await this.sb().from('evento_presencas').select('evento_id,resposta,nome_usuario');
      if (error) throw error;
      const m = {}, quem = {}; (data || []).forEach(r => { if (r.resposta === 'confirmado') { m[r.evento_id] = (m[r.evento_id] || 0) + 1; (quem[r.evento_id] = quem[r.evento_id] || []).push(r.nome_usuario); } });
      this.setState({ presencaCounts: m, presencaQuem: quem });
    } catch (e) { console.warn('[Hub] Erro ao contar presenças:', errMsg(e)); }
  }
  // "Próximo evento" do início: o primeiro da agenda DE QUEM ESTÁ LOGADO (confirmou, ou é do público do evento e não recusou).
  // Eventos que exigem aprovação (folga semaninha) só entram quando a pessoa confirmou e o superior não recusou.
  async computeMyNext(evs, tent) {
    if (this._mnBusy) { this._mnAgain = evs || true; return; }
    const c = this.cu();
    if (!c) { if ((tent || 0) < 8) setTimeout(() => this.computeMyNext(evs, (tent || 0) + 1), 600); return; }
    this._mnBusy = true;
    try {
      const { data, error } = await this.sb().from('evento_presencas').select('evento_id,resposta,aprovacao').eq('nome_usuario', c.usuario); if (error) throw error;
      const resp = {}; (data || []).forEach(r => { resp[r.evento_id] = r; });
      const cand = (Array.isArray(evs) ? evs : this.state.events).filter(e => e.cat !== 'ferias' && e.end >= TODAY && e.status !== 'cancelado' && e.status !== 'concluido').sort((a, b) => (a.start || TODAY).localeCompare(b.start || TODAY));
      let pick = '', tries = 0;
      for (const e of cand) {
        const r = resp[e.id];
        if (r && r.resposta !== 'confirmado') continue;
        if (r && r.resposta === 'confirmado') { if (e.exige && r.aprovacao === 'recusada') continue; pick = e.id; break; }
        if (e.exige) continue;
        if (++tries > 20) break;
        if ((await this.publicoDoEvento(e.id)).includes(c.usuario)) { pick = e.id; break; }
      }
      this.setState({ myNextId: pick, myNextDone: true });
    } catch (e) { console.warn('[Hub] Erro ao calcular seu próximo evento:', errMsg(e)); }
    finally { this._mnBusy = false; if (this._mnAgain) { const a = this._mnAgain; this._mnAgain = null; this.computeMyNext(Array.isArray(a) ? a : undefined); } }
  }
  async loadPresencas(id) {
    try { const { data, error } = await this.sb().from('evento_presencas').select('nome_usuario,resposta,aprovacao').eq('evento_id', id); if (error) throw error; this.setState(s => ({ presencas: { ...s.presencas, [id]: data || [] } })); }
    catch (e) { console.warn('[Hub] Erro ao carregar presenças:', errMsg(e)); }
  }
  findUser(usuario) { const u = String(usuario || '').trim().toLowerCase(); return this.state.users.find(x => x.usuario.toLowerCase() === u); }
  async resumeSession(session) {
    try { await this.loadUsers(); } catch (e) { console.warn('[Hub] Erro ao carregar usuários:', errMsg(e)); }
    const sv = this.findUser(((session.user && session.user.email) || '').split('@')[0]);
    if (!sv) return;
    const st = await this.loadEvents();
    await this.loadOrgContacts();
    if (st === 'auth') { await this.sb().auth.signOut().catch(() => {}); this.setState({ lmsg: 'err:Sua sessão expirou. Entre novamente com seu usuário e senha.' }); return; }
    this.enter(sv);
  }
  async afterLogin(sv) {
    try { if (this.state.remember) localStorage.removeItem('hubscpma.noremember'); else { localStorage.setItem('hubscpma.noremember', '1'); sessionStorage.setItem('hubscpma.alive', '1'); } } catch (e) {}
    await this.loadEvents();
    await this.loadOrgContacts();
    this.enter(sv);
  }
  // Contatos do organograma (só para quem fez login): preenche e-mail, celular e aniversário no ORG
  async loadOrgContacts() {
    try {
      const { data, error } = await this.sb().from('organograma_contatos').select('org_id,email,telefone,aniversario');
      if (error) throw error;
      (data || []).forEach(r => { const o = ORG.find(x => x[0] === r.org_id); if (o) { o[4] = r.email || ''; o[5] = r.telefone || ''; o[7] = r.aniversario || ''; } });
      this.setState({ orgContactsAt: Date.now() });
    } catch (e) { console.warn('[Hub] Erro ao carregar contatos do organograma:', errMsg(e)); }
  }
  clearOrgContacts() { ORG.forEach(o => { o[4] = ''; o[5] = ''; o[7] = ''; }); }
  enter(sv) {
    this.setState({ me: sv, logged: true, view: 'inicio', lp: '', lp2: '', lstep: 'login', lmsg: '', busy: false, uSel: this.cu(sv).unit });
    this.postLogin(sv);
  }
  async postLogin(sv) {
    await this.loadFeriasScope(); // a tabela de aprovadores só é legível depois do login
    await this.loadProfile(sv);
    await this.loadPublicProfiles();
    await this.loadNotifs(sv);
    await this.generateReminders(sv);
    this.subscribeRealtime();
  }
  subscribeRealtime() {
    const sb = this.sb(); if (!sb || this._rt) return;
    try {
      const reload = () => { clearTimeout(this._rtD); this._rtD = setTimeout(() => this.loadEvents(), 250); };
      this._rt = sb.channel('hub-scpma-rt')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'eventos' }, reload)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'evento_presencas' }, () => { this.loadPresencaCounts(); if (this.state.viewId) this.loadPresencas(this.state.viewId); })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'notificacoes' }, () => this.loadNotifs())
        .on('postgres_changes', { event: '*', schema: 'public', table: 'perfis' }, () => { clearTimeout(this._rtP); this._rtP = setTimeout(() => this.loadPublicProfiles(), 300); })
        .subscribe();
    } catch (e) { console.warn('[Hub] Realtime indisponível:', errMsg(e)); }
  }
  unsubscribeRealtime() { try { if (this._rt && this.sb()) this.sb().removeChannel(this._rt); } catch (e) {} this._rt = null; }

  // ===== Login =====
  async doLogin() {
    const s = this.state;
    if (s.busy) return;
    const lu = s.lu.trim().split('@')[0].toLowerCase();
    if (!lu) return this.setState({ lmsg: 'err:Informe seu usuário.' });
    if (s.connecting) return this.setState({ lmsg: 'err:Conectando ao banco de dados… aguarde alguns segundos e tente de novo.' });
    if (!s.online) return this.setState({ lmsg: 'err:' + (s.backendProblem || 'Sem conexão com o banco de dados.') + ' Verifique a internet/VPN e atualize a página (Ctrl+F5).' });
    const sb = this.sb();
    // A lista de usuários só é lida depois do login; antes, o banco responde apenas se este usuário existe
    let stt = null;
    try { const { data, error } = await sb.rpc('agenda_login_status', { p_usuario: lu }); if (error) throw error; stt = (data || [])[0] || null; }
    catch (e) { return this.setState({ lmsg: 'err:Erro ao verificar o usuário: ' + errMsg(e) }); }
    if (!stt || !stt.existe) return this.setState({ lmsg: 'err:Usuário não encontrado. Verifique com o administrador.' });
    const sv = { usuario: lu, senhaCriada: !!stt.senha_criada };
    const entrar = async () => {
      await this.loadUsers();
      const me = this.findUser(lu);
      if (!me) { await sb.auth.signOut().catch(() => {}); this.setState({ busy: false, lmsg: 'err:Não foi possível carregar seus dados de acesso. Tente novamente.' }); return false; }
      await this.afterLogin(me);
      return true;
    };
    if (!sv.senhaCriada && s.lstep !== 'create') return this.setState({ lstep: 'create', lp2: '', lmsg: 'ok:Primeiro acesso: escolha uma senha com pelo menos 8 caracteres, contendo letras e números, e repita-a para confirmar.' });
    if (s.lstep === 'create') {
      // Regras iguais às do Supabase Auth (mínimo 8, letras e números)
      if ((s.lp || '').length < 8 || !/[A-Za-z]/.test(s.lp) || !/\d/.test(s.lp)) return this.setState({ lmsg: 'err:A senha deve ter pelo menos 8 caracteres, com letras e números.' });
      if (s.lp !== s.lp2) return this.setState({ lmsg: 'err:As senhas não conferem.' });
      this.setState({ busy: true, lmsg: '' });
      try {
        const email = authEmail(sv.usuario);
        const { data, error } = await sb.auth.signUp({ email, password: s.lp, options: { data: { nome_usuario: sv.usuario } } });
        if (error) return this.setState({ busy: false, lmsg: 'err:' + (/password/i.test(error.message) ? 'Senha fora das regras: use pelo menos 8 caracteres, com letras e números.' : /database error|não autorizado/i.test(error.message) ? 'Este usuário não está autorizado a criar conta. Fale com um administrador.' : error.message) });
        try { await sb.from('usuarios_autorizados').update({ senha_criada: true }).eq('nome_usuario', sv.usuario); } catch (e) { console.warn('[Hub] senha_criada não atualizado:', e); }
        if (!data.session) {
          const r = await sb.auth.signInWithPassword({ email, password: s.lp });
          if (r.error) return this.setState({ busy: false, lmsg: 'err:Senha criada, mas o e-mail exige confirmação. Desative "Confirm email" no Supabase.' });
        }
        if (await entrar()) this.notify('Senha criada. Bem-vindo(a)!');
      } catch (e) { this.setState({ busy: false, lmsg: 'err:Erro ao criar senha: ' + errMsg(e) }); }
      return;
    }
    if (!s.lp) return this.setState({ lmsg: 'err:Informe sua senha.' });
    this.setState({ busy: true, lmsg: '' });
    try {
      const { error } = await sb.auth.signInWithPassword({ email: authEmail(sv.usuario), password: s.lp });
      if (error) return this.setState({ busy: false, lmsg: 'err:Senha incorreta.' });
      await entrar();
    } catch (e) { this.setState({ busy: false, lmsg: 'err:Erro ao entrar: ' + errMsg(e) }); }
  }
  doLogout() {
    this.unsubscribeRealtime();
    const sb = this.sb(); if (sb) sb.auth.signOut().catch(() => {});
    try { sessionStorage.removeItem('hubscpma.alive'); } catch (e) {}
    this.clearOrgContacts();
    this.setState({ logged: false, me: null, users: [], events: [], notifs: [], myNextId: '', myNextDone: false, lu: '', lp: '', lp2: '', lstep: 'login', lmsg: '', busy: false, modal: false, viewId: null, person: null, notifOpen: false });
  }

  // ===== Permissões =====
  cu(sv) {
    sv = sv || this.state.me;
    if (!sv) return null;
    const admin = sv.nivel === 'admin';
    const home = sv.acesso === 'Todas as unidades' ? ['scpma'] : sv.acesso.split(',').map(x => UNIT_BY_NAME[x.trim().toUpperCase()]).filter(Boolean);
    let editUnits;
    if (admin || sv.acesso === 'Todas as unidades') editUnits = 'all';
    else if (sv.nivel === 'viewer') editUnits = [];
    else {
      // Só o "hub" do grupo (SMA, SUPLAN) libera as gerências abaixo dele.
      const set = new Set(home);
      [['sma', 'gemonit', 'gappp'], ['suplan', 'geplan', 'gpmlp']].forEach(g => { if (set.has(g[0])) g.forEach(u => set.add(u)); });
      editUnits = [...set];
    }
    const feriasUnits = (this.state.feriasScope[String(sv.usuario).toLowerCase()] || []);
    const op = orgFor(sv.usuario, sv.nome);
    return { name: sv.nome, usuario: sv.usuario, admin, editUnits, feriasUnits, unit: home[0] || 'scpma', org: op || null,
      canCreate: editUnits === 'all' || editUnits.length > 0 };
  }
  canEdit(e) { const c = this.cu(); return !!c && (c.editUnits === 'all' || c.editUnits.includes(e.unit)); }
  // Aprovar/recusar férias: só quem está em aprovadores_ferias_escopo para a unidade (ser administrador não basta)
  canApprove(e) { const c = this.cu(); return !!c && e.cat === 'ferias' && c.feriasUnits.includes(UNITS[e.unit][0]); }

  // ===== Perfil =====
  async loadProfile(sv) {
    const c = this.cu(sv), o = c && c.org;
    const prof = { cargo: o ? o[2] : '', tel: o ? o[5] : '', bday: o ? o[7] : '', mat: '', pc: '', arm: '', cpf: '', foto: o ? o[6] : '' };
    this.setState({ prof, profSaved: '', myPat: null });
    if (c && c.admin) this.loadPatrimonio(c.usuario).then(myPat => this.setState({ myPat })).catch(e => console.warn('[Hub] Erro ao carregar patrimônio:', errMsg(e)));
    try {
      const { data: u } = await this.sb().auth.getUser(); if (!u || !u.user) return;
      const { data } = await this.sb().from('perfis').select('cargo,cpf,matricula,data_nascimento,nome_computador,armario,telefone,foto_url,atualizado_em').eq('id', u.user.id).maybeSingle();
      if (!data) return;
      const pick = (v, d) => (v != null && v !== '') ? v : d;
      this.setState({ prof: { cargo: pick(data.cargo, prof.cargo), tel: pick(data.telefone, prof.tel), bday: pick(data.data_nascimento, prof.bday), mat: pick(data.matricula, ''), pc: pick(data.nome_computador, ''), arm: pick(data.armario, ''), cpf: pick(data.cpf, ''), foto: pick(data.foto_url, prof.foto) },
        profSaved: data.atualizado_em ? 'Última atualização: ' + new Date(data.atualizado_em).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' }) : '' });
    } catch (e) { console.warn('[Hub] Erro ao carregar perfil:', errMsg(e)); }
  }
  async saveProfile(extra) {
    const c = this.cu(); if (!c) return;
    const p = this.state.prof;
    const row = { nome_completo: c.name, unidade_lotacao: UNITS[c.unit][0], email: c.org ? c.org[4] : '', cargo: p.cargo || '', telefone: p.tel || '', data_nascimento: p.bday || '', matricula: p.mat || '', nome_computador: p.pc || '', armario: p.arm || '', cpf: p.cpf || '', foto_url: storableUrl(p.foto), ...(extra || {}), atualizado_em: new Date().toISOString() };
    try {
      const { data: u } = await this.sb().auth.getUser(); if (!u || !u.user) throw new Error('sessão expirada');
      const { error } = await this.sb().from('perfis').upsert({ id: u.user.id, ...row }, { onConflict: 'id' });
      if (error) throw error;
      if (!extra && c.admin && this.state.myPat) await this.savePatrimonio(c.usuario, this.state.myPat);
      this.setState({ profSaved: 'Salvo agora · ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) });
      this.loadPublicProfiles();
      if (!extra) this.notify('Perfil salvo.');
    } catch (e) { console.warn('[Hub] Erro ao salvar perfil:', e); this.notify('Erro ao salvar no banco: ' + errMsg(e), true); }
  }
  async uploadPhoto(file) {
    try {
      const { data: u } = await this.sb().auth.getUser(); if (!u || !u.user) throw new Error('sessão expirada');
      const path = u.user.id + '/avatar.' + ((file.name.split('.').pop() || 'jpg').toLowerCase());
      const { error } = await this.sb().storage.from('fotos-perfil').upload(path, file, { upsert: true, contentType: file.type });
      if (error) throw error;
      const { data: pub } = this.sb().storage.from('fotos-perfil').getPublicUrl(path);
      const url = pub && pub.publicUrl ? pub.publicUrl + '?t=' + Date.now() : '';
      if (url) { this.setState(st => ({ prof: { ...st.prof, foto: url } })); await this.saveProfile({ foto_url: url }); this.notify('Foto atualizada.'); }
    } catch (e) { console.warn('[Hub] Upload de foto falhou:', e); this.notify('Não foi possível enviar a foto: ' + errMsg(e), true); }
  }
  async loadPublicProfiles() {
    try {
      const { data, error } = await this.sb().from('perfis_publicos').select('*');
      if (error) throw error;
      const map = {}, byUser = {}; (data || []).forEach(r => { const row = { ...r, data_nascimento: r.data_nascimento || r.aniversario || '' }; if (r.nome_completo) map[normName(r.nome_completo)] = row; if (r.nome_usuario) byUser[String(r.nome_usuario).toLowerCase()] = row; });
      this.setState({ publicProfiles: map, publicByUser: byUser });
    } catch (e) { console.warn('[Hub] Erro ao carregar perfis públicos:', errMsg(e)); }
  }
  publicProfileFor(name) {
    const pp = this.state.publicProfiles, k = normName(name);
    if (pp[k]) return pp[k];
    const hit = Object.keys(pp).find(x => sameName(x, name));
    return hit ? pp[hit] : null;
  }

  // ===== Notificações =====
  async loadNotifs(sv) {
    const c = this.cu(sv); if (!c) return;
    try { const { data, error } = await this.sb().from('notificacoes').select('*').eq('dest_usuario', c.usuario).order('criada_em', { ascending: false }).limit(60); if (error) throw error; this.setState({ notifs: data || [] }); }
    catch (e) { console.warn('[Hub] Erro ao carregar notificações:', errMsg(e)); }
  }
  async pushNotif(dest, tipo, titulo, mensagem, eventoId) {
    try { await this.sb().from('notificacoes').insert({ dest_usuario: dest, evento_id: eventoId || null, tipo, titulo, mensagem: mensagem || null }); }
    catch (e) { console.warn('[Hub] Erro ao criar notificação:', errMsg(e)); }
  }
  async publicoDoEvento(id) {
    try { const { data, error } = await this.sb().rpc('agenda_publico_evento', { p_evento_id: id }); if (error) throw error; return (data || []).map(r => r.nome_usuario); }
    catch (e) { console.warn('[Hub] Erro ao resolver público:', errMsg(e)); return []; }
  }
  async generateReminders(sv) {
    const c = this.cu(sv); if (!c) return;
    const now = Date.now(), HORIZON = 30 * 864e5;
    const existing = new Set(this.state.notifs.filter(n => n.tipo === 'lembrete').map(n => n.evento_id));
    let created = 0;
    for (const e of this.state.events) {
      if (e.status === 'cancelado') continue;
      if (!(c.editUnits === 'all' || c.editUnits.includes(e.unit) || e.unit === c.unit || (e.resp && sameName(e.resp, c.name)))) continue;
      const ts = new Date(e.start + 'T' + (e.t1 || '00:00') + ':00').getTime();
      if (isNaN(ts) || ts < now || ts - now > HORIZON || existing.has(e.id)) continue;
      const d = ts - now, days = Math.max(1, Math.round(d / 864e5));
      const label = d <= 3600e3 ? 'em menos de 1 hora' : d <= 864e5 ? 'em menos de 24 horas' : d <= 2 * 864e5 ? 'amanhã' : 'em ' + days + ' dias';
      existing.add(e.id); created++;
      await this.pushNotif(c.usuario, 'lembrete', 'Lembrete: ' + e.title, 'Começa ' + label + ' — ' + longDate(e.start) + (e.t1 ? ' às ' + e.t1 : ''), e.id);
    }
    if (created) this.loadNotifs(sv);
  }
  async markAllRead() {
    const c = this.cu(); if (!c) return;
    this.setState(s => ({ notifs: s.notifs.map(n => ({ ...n, lida: true })) }));
    try { await this.sb().from('notificacoes').update({ lida: true }).eq('dest_usuario', c.usuario).eq('lida', false); } catch (e) {}
  }

  // ===== Eventos =====
  blank(d) { const c = this.cu() || {}; return { title: '', desc: '', unit: c.unit || 'scpma', cat: 'eventos', part: 'unidade', d1: d || TODAY, t1: '09:00', d2: d || TODAY, t2: '10:00', rep: 'nenhuma', resp: c.name || '', loc: '', prio: 'media', done: false, cancel: false, exige: false, convidados: [], pq: '' }; }
  download(name, text, type) { const b = new Blob([text], { type }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; document.body.appendChild(a); a.click(); a.remove(); }
  openNew(d, cat) {
    const c = this.cu(); if (!c || !c.canCreate) return this.notify('Seu perfil é apenas de visualização.', true);
    const f = { ...this.blank(d) };
    if (cat === 'ferias') Object.assign(f, { cat: 'ferias', title: 'Férias — ' + c.name, t1: '', t2: '', prio: 'baixa' });
    this.setState({ modal: true, editId: null, viewId: null, err: false, files: [], f });
  }
  openEdit(e) {
    if (!this.canEdit(e)) return this.notify('Você não tem permissão para editar eventos desta unidade.', true);
    this._convOrig = [];
    this.setState({ modal: true, editId: e.id, viewId: null, err: false, files: [], f: { ...this.blank(), title: e.title, desc: e.desc || '', unit: e.unit, cat: e.cat, prio: e.prio || 'media', d1: e.start || TODAY, t1: e.t1 || '', d2: e.end, t2: e.t2 || '', loc: e.loc || '', resp: e.resp || e.person || '', rep: e.rep || 'nenhuma', part: e.part || 'unidade', exige: !!e.exige, done: e.status === 'concluido', cancel: e.status === 'cancelado' && e.cat !== 'ferias' } });
      // Pessoas escolhidas: carrega a lista salva do evento
    if (e.part === 'lista') this.sb().from('evento_convidados').select('nome_usuario').eq('evento_id', e.id).then(({ data }) => {
      const list = (data || []).map(r => r.nome_usuario); this._convOrig = list;
      this.setState(st => st.f && st.editId === e.id ? { f: { ...st.f, convidados: list } } : null);
    });
  }
  openView(e) { this.setState({ viewId: e.id }); this.loadPresencas(e.id); if (e.part === 'lista') this.loadConvidadosEv(e.id); }
  // Pessoas escolhidas do evento (aparecem na janela do evento, com a resposta de cada uma)
  async loadConvidadosEv(id) {
    try { const { data, error } = await this.sb().from('evento_convidados').select('nome_usuario').eq('evento_id', id); if (error) throw error; this.setState(st => ({ convEv: { ...st.convEv, [id]: (data || []).map(r => r.nome_usuario) } })); }
    catch (e) { console.warn('[Hub] Erro ao carregar participantes:', errMsg(e)); }
  }
  async saveEvent(keepOpen) {
    const s = this.state, fm = s.f || this.blank();
    if (!fm.title.trim()) return this.setState({ err: true });
    if (s.saving) return;
    if (fm.part === 'lista' && !(fm.convidados || []).length) return this.notify('Escolha ao menos uma pessoa em Participantes.', true);
    const editing = s.editId, prev = editing ? s.events.find(x => x.id === editing) : null, c = this.cu();
    if (!this.canEdit({ unit: fm.unit })) return this.notify('Você não pode criar ou editar eventos da unidade ' + UNITS[fm.unit][0] + '.', true);
    const sb = this.sb();
    this.setState({ saving: true });
    try {
      let eventId = editing, ids = editing ? [editing] : [];
      if (editing) {
        const { error } = await sb.from('eventos').update({ ...formToRow(fm, prev), atualizado_em: new Date().toISOString() }).eq('id', editing);
        if (error) throw error;
      } else {
        const { data: u } = await sb.auth.getUser();
        const uid = u && u.user ? u.user.id : null;
        const rows = recurrence(fm.d1, fm.d2, fm.rep).map(o => ({ ...formToRow({ ...fm, d1: o.d1, d2: o.d2 }, null), criado_por: uid }));
        const { data: ins, error } = await sb.from('eventos').insert(rows).select();
        if (error) throw error;
        eventId = ins[0].id; ids = ins.map(r => r.id);
      }
      await this.uploadAttachments(eventId, s.files.map(x => x.file).filter(Boolean));
      if (fm.part === 'lista') for (const id of ids) await this.syncConvidados(id, fm.convidados);
      // Público calculado no banco (agenda_publico_evento): unidade + grupo, todas as unidades ou pessoas escolhidas
      const novos = editing && fm.part === 'lista' ? fm.convidados.filter(u => !(this._convOrig || []).includes(u)) : [];
      try {
        const pub = await this.publicoDoEvento(eventId);
        for (const nome of pub) {
          if (c && nome === c.usuario) continue;
          if (editing && novos.includes(nome) && RSVP_CATS.includes(fm.cat)) await this.pushNotif(nome, 'convite', 'Confirme sua presença', 'Você foi adicionado(a) a "' + fm.title.trim() + '" — confirme sua presença', eventId);
          else if (!editing && RSVP_CATS.includes(fm.cat)) await this.pushNotif(nome, 'convite', 'Confirme sua presença', 'Você foi convidado(a) para "' + fm.title.trim() + '" — confirme sua presença', eventId);
          else if (editing) await this.pushNotif(nome, 'alteracao', 'Evento alterado', '"' + fm.title.trim() + '" foi atualizado', eventId);
        }
      } catch (e) { console.warn('[Hub] Notificações do evento falharam:', e); }
      await this.loadEvents();
      const d = dt(fm.d1);
      this.setState(st => ({ saving: false, modal: keepOpen, editId: null, files: [], f: keepOpen ? { ...fm, title: fm.title + ' (cópia)' } : null,
        // continua na mesma página; no calendário, vai para o mês do evento
        ...(st.view === 'agenda' && st.agTab === 'cal' ? { day: fm.d1, ym: [d.getFullYear(), d.getMonth()] } : {}) }));
      this.notify(editing ? 'Evento atualizado.' : 'Evento criado com sucesso.');
    } catch (e) { console.warn('[Hub] Erro ao salvar evento:', e); this.setState({ saving: false }); this.notify('Erro ao salvar: ' + errMsg(e), true); }
  }
  async uploadAttachments(eventId, files) {
    if (!eventId || !files.length) return;
    const sb = this.sb();
    for (const f of files) {
      try {
        const path = eventId + '/' + Date.now() + '-' + f.name;
        const up = await sb.storage.from(ANEXOS_BUCKET).upload(path, f, { upsert: false });
        if (up.error) { console.warn('[Hub] Upload de anexo falhou:', up.error.message); this.notify('Anexo "' + f.name + '" não foi enviado: ' + up.error.message, true); continue; }
        const pub = sb.storage.from(ANEXOS_BUCKET).getPublicUrl(path);
        await sb.from('anexos').insert({ evento_id: eventId, nome: f.name, caminho: path, url: pub.data ? pub.data.publicUrl : null });
      } catch (e) { console.warn('[Hub] Erro ao anexar arquivo:', e); }
    }
  }
  async syncConvidados(eventId, list) {
    try {
      await this.sb().from('evento_convidados').delete().eq('evento_id', eventId);
      if (list.length) { const { error } = await this.sb().from('evento_convidados').insert(list.map(n => ({ evento_id: eventId, nome_usuario: n }))); if (error) throw error; }
    } catch (e) { console.warn('[Hub] Erro ao salvar participantes:', errMsg(e)); }
  }
  async dup(e) {
    if (!this.canEdit(e)) return;
    try {
      const { data: u } = await this.sb().auth.getUser();
      const fm = { title: e.title + ' (cópia)', desc: e.desc, unit: e.unit, cat: e.cat, prio: e.prio, rep: 'nenhuma', d1: e.start, d2: e.end, t1: e.t1, t2: e.t2, loc: e.loc, resp: e.resp || e.person, part: e.part, exige: !!e.exige, done: e.status === 'concluido', cancel: e.status === 'cancelado' && e.cat !== 'ferias' };
      const { error } = await this.sb().from('eventos').insert({ ...formToRow(fm, e), criado_por: u && u.user ? u.user.id : null });
      if (error) throw error;
      await this.loadEvents(); this.setState({ viewId: null }); this.notify('Evento duplicado.');
    } catch (x) { console.warn('[Hub] Erro ao duplicar:', x); this.notify('Erro ao duplicar: ' + errMsg(x), true); }
  }
  async del(e) {
    if (!this.canEdit(e) || !confirm('Excluir "' + e.title + '"?')) return;
    try {
      const { error } = await this.sb().from('eventos').update({ removido_em: new Date().toISOString() }).eq('id', e.id);
      if (error) throw error;
      this.setState({ viewId: null }); await this.loadEvents(); this.notify('Evento excluído.');
    } catch (x) { console.warn('[Hub] Erro ao excluir:', x); this.notify('Erro ao excluir: ' + errMsg(x), true); }
  }
  async setFerias(e, fst) {
    if (!this.canApprove(e)) return;
    try {
      const { error } = await this.sb().from('eventos').update({ status: FST_UI[fst], atualizado_em: new Date().toISOString() }).eq('id', e.id);
      if (error) throw error;
      const alvo = this.state.users.find(u => sameName(u.nome, e.person || e.resp));
      if (alvo) await this.pushNotif(alvo.usuario, 'ferias', 'Férias ' + fst.toLowerCase(), 'Sua solicitação "' + e.title + '" foi ' + fst.toLowerCase() + '.', e.id);
      await this.loadEvents(); this.notify('Férias ' + fst.toLowerCase() + '.');
    } catch (x) { console.warn('[Hub] Erro ao atualizar férias:', x); this.notify('Erro ao atualizar férias: ' + errMsg(x), true); }
  }
  // Folga que exige aprovação: o superior (quem aprova férias da unidade da pessoa) decide por servidor
  canApprovePessoa(usuario) { const c = this.cu(), p = this.state.users.find(x => x.usuario === usuario); return !!c && !!p && !!p.unid && c.feriasUnits.includes(p.unid); }
  async setAprovacao(e, usuario, decisao) {
    if (!this.canApprovePessoa(usuario)) return;
    try {
      const { error } = await this.sb().rpc('agenda_aprovar_presenca', { p_evento: e.id, p_usuario: usuario, p_decisao: decisao });
      if (error) throw error;
      await this.loadPresencas(e.id);
      const txt = decisao === 'aprovada' ? 'aprovada' : 'recusada';
      await this.pushNotif(usuario, 'ferias', 'Participação ' + txt, 'Sua participação em "' + e.title + '" foi ' + txt + '.', e.id);
      this.notify('Participação ' + txt + '.');
    } catch (x) { console.warn('[Hub] Erro ao decidir participação:', x); this.notify('Erro: ' + errMsg(x), true); }
  }
  async rsvp(e, resposta) {
    const c = this.cu(); if (!c) return;
    try {
      const { data: u } = await this.sb().auth.getUser();
      const { error } = await this.sb().from('evento_presencas').upsert({ evento_id: e.id, usuario_id: u.user.id, nome_usuario: c.usuario, resposta, respondido_em: new Date().toISOString() }, { onConflict: 'evento_id,usuario_id' });
      if (error) throw error;
      await this.loadPresencas(e.id); this.loadPresencaCounts(); this.computeMyNext();
      const alvo = e.resp ? this.state.users.find(x => sameName(x.nome, e.resp)) : null;
      if (alvo && alvo.usuario !== c.usuario) await this.pushNotif(alvo.usuario, 'presenca', resposta === 'confirmado' ? 'Presença confirmada' : 'Presença recusada', c.name + (resposta === 'confirmado' ? ' confirmou' : ' recusou') + ' presença em "' + e.title + '"', e.id);
      this.notify(resposta === 'confirmado' ? 'Presença confirmada.' : 'Presença recusada.');
    } catch (x) { console.warn('[Hub] Erro no RSVP:', x); this.notify('Erro ao registrar presença: ' + errMsg(x), true); }
  }

  // ===== Exportações (Excel = CSV que o Excel abre; PDF = página de impressão em tabela) =====
  exportCsv(name, head, rows) {
    const cell = v => '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    this.download(name + '.csv', '﻿' + [head].concat(rows).map(r => r.map(cell).join(';')).join('\r\n'), 'text/csv;charset=utf-8');
  }
  exportPdf(title, sub, head, rows) {
    const esc = v => String(v == null ? '' : v).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const w = window.open('', '_blank');
    if (!w) return this.notify('O navegador bloqueou a janela do PDF. Permita pop-ups para este site.', true);
    w.document.write('<!doctype html><html><head><meta charset="utf-8"><title>' + esc(title) + '</title><style>body{font-family:Arial,sans-serif;margin:24px;color:#122019}h1{font-size:18px;margin:0 0 4px}p{margin:0 0 14px;color:#5f6b65;font-size:12px}table{border-collapse:collapse;width:100%;font-size:11px}th,td{border:1px solid #d5dcd8;padding:5px 7px;text-align:left;vertical-align:top}th{background:#0b3d7a;color:#fff}tr:nth-child(even) td{background:#f6f8f7}@page{size:landscape;margin:12mm}</style></head><body>'
      + '<h1>' + esc(title) + '</h1><p>' + esc(sub) + ' · ' + rows.length + ' registro(s) · Gerado em ' + new Date().toLocaleString('pt-BR') + ' · Hub SCPMA</p>'
      + '<table><thead><tr>' + head.map(h => '<th>' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' + rows.map(r => '<tr>' + r.map(c => '<td>' + esc(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table>'
      + '<script>window.onload=function(){setTimeout(function(){window.print()},250)}<\/script></body></html>');
    w.document.close();
  }

  // ===== Colegiados =====
  async loadColegiados() {
    try { const { data, error } = await this.sb().from('colegiados').select('*').order('ordem').order('id'); if (error) throw error; this.setState({ colItens: data || [], colLoaded: true }); }
    catch (e) { console.warn('[Hub] Erro ao carregar colegiados:', e); this.setState({ colLoaded: true }); this.notify('Não foi possível carregar os colegiados: ' + errMsg(e), true); }
  }
  async saveColegiado() {
    const it = this.state.colEdit; if (!it) return;
    if (!(it.nome || '').trim()) return this.notify('Informe o nome do colegiado.', true);
    const sei = toUrl(it.processo_sei);
    if ((it.processo_sei || '').trim() && !sei) return this.notify('O link do processo SEI precisa ser um endereço da internet (http:// ou https://).', true);
    const c = this.cu(), lines = v => String(v || '').split('\n').map(x => x.trim()).filter(Boolean).join('\n');
    const row = { nome: it.nome.trim(), sigla: (it.sigla || '').trim(), titulares: lines(it.titulares), suplentes: lines(it.suplentes), processo_sei: sei, observacoes: (it.observacoes || '').trim(),
      ordem: +it.ordem || ((this.state.colItens || []).length + 1), atualizado_em: new Date().toISOString(), atualizado_por: c ? c.usuario : null };
    try {
      const { error } = await (it.id ? this.sb().from('colegiados').update(row).eq('id', it.id) : this.sb().from('colegiados').insert(row));
      if (error) throw error;
      this.setState({ colEdit: null }); await this.loadColegiados(); this.notify(it.id ? 'Colegiado atualizado.' : 'Colegiado adicionado.');
    } catch (e) { console.warn('[Hub] Erro ao salvar colegiado:', e); this.notify('Erro ao salvar: ' + errMsg(e), true); }
  }
  async delColegiado(it) {
    if (!confirm('Excluir o colegiado "' + it.nome + '"?')) return;
    try { const { error } = await this.sb().from('colegiados').delete().eq('id', it.id); if (error) throw error; await this.loadColegiados(); this.notify('Colegiado excluído.'); }
    catch (e) { this.notify('Erro ao excluir: ' + errMsg(e), true); }
  }

  // ===== Documentos (aba em Usuários) — pastas e arquivos, só administradores =====
  async loadDocs() {
    try {
      const [p, a] = await Promise.all([this.sb().from('documentos_pastas').select('*').order('nome'), this.sb().from('documentos_arquivos').select('*').order('nome')]);
      if (p.error) throw p.error; if (a.error) throw a.error;
      this.setState({ docPastas: p.data || [], docArqs: a.data || [], docLoaded: true });
    } catch (e) { console.warn('[Hub] Erro ao carregar documentos:', e); this.setState({ docLoaded: true }); this.notify('Não foi possível carregar os documentos: ' + errMsg(e), true); }
  }
  async saveDocPasta() {
    const f = this.state.docFolderEdit; if (!f) return;
    const nome = (f.nome || '').trim(); if (!nome) return this.notify('Informe o nome da pasta.', true);
    const c = this.cu();
    try {
      const { error } = await (f.id ? this.sb().from('documentos_pastas').update({ nome }).eq('id', f.id) : this.sb().from('documentos_pastas').insert({ nome, pai_id: this.state.docPasta || null, criado_por: c ? c.usuario : null }));
      if (error) throw error;
      this.setState({ docFolderEdit: null }); await this.loadDocs(); this.notify(f.id ? 'Pasta renomeada.' : 'Pasta criada.');
    } catch (e) { console.warn('[Hub] Erro ao salvar pasta:', e); this.notify('Erro ao salvar a pasta: ' + errMsg(e), true); }
  }
  docDescendentes(id) { const ps = this.state.docPastas; const ids = [id]; for (let i = 0; i < ids.length; i++) ps.filter(p => p.pai_id === ids[i]).forEach(p => ids.push(p.id)); return ids; }
  async delDocPasta(p) {
    const ids = this.docDescendentes(p.id), arqs = this.state.docArqs.filter(a => ids.includes(a.pasta_id));
    if (!confirm('Excluir a pasta "' + p.nome + '"' + (ids.length > 1 ? ', as subpastas' : '') + (arqs.length ? ' e ' + arqs.length + ' item(ns)' : '') + '?\n\nIsso não pode ser desfeito.')) return;
    try {
      const comArquivo = arqs.filter(a => a.caminho);
      if (comArquivo.length) { const { error } = await this.sb().storage.from(DOCS_BUCKET).remove(comArquivo.map(a => a.caminho)); if (error) throw error; }
      const { error } = await this.sb().from('documentos_pastas').delete().eq('id', p.id); if (error) throw error;
      if (ids.includes(this.state.docPasta)) this.setState({ docPasta: p.pai_id || null });
      await this.loadDocs(); this.notify('Pasta excluída.');
    } catch (e) { console.warn('[Hub] Erro ao excluir pasta:', e); this.notify('Erro ao excluir a pasta: ' + errMsg(e), true); }
  }
  async uploadDocs(files) {
    const c = this.cu(), pasta = this.state.docPasta || null;
    if (!files.length) return;
    this.setState({ docBusy: true });
    let ok = 0;
    for (const f of files) {
      if (f.size > 50 * 1024 * 1024) { this.notify('"' + f.name + '" passa de 50 MB e não foi enviado.', true); continue; }
      try {
        const seguro = f.name.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9._-]+/g, '_');
        const caminho = (pasta || 'raiz') + '/' + Date.now() + '-' + seguro;
        const up = await this.sb().storage.from(DOCS_BUCKET).upload(caminho, f, { upsert: false, contentType: f.type || 'application/octet-stream' });
        if (up.error) throw up.error;
        const { error } = await this.sb().from('documentos_arquivos').insert({ pasta_id: pasta, nome: f.name, caminho, tamanho: f.size, tipo: f.type || '', enviado_por: c ? c.usuario : null });
        if (error) { await this.sb().storage.from(DOCS_BUCKET).remove([caminho]); throw error; }
        ok++;
      } catch (e) { console.warn('[Hub] Erro ao enviar documento:', e); this.notify('Não foi possível enviar "' + f.name + '": ' + errMsg(e), true); }
    }
    this.setState({ docBusy: false }); await this.loadDocs();
    if (ok) this.notify(ok === 1 ? 'Documento enviado.' : ok + ' documentos enviados.');
  }
  async openDoc(a) {
    if (a.url) { window.open(a.url, '_blank', 'noopener'); return; }
    try {
      const { data, error } = await this.sb().storage.from(DOCS_BUCKET).createSignedUrl(a.caminho, 300);
      if (error) throw error;
      window.open(data.signedUrl, '_blank', 'noopener');
    } catch (e) { console.warn('[Hub] Erro ao abrir documento:', e); this.notify('Não foi possível abrir o documento: ' + errMsg(e), true); }
  }
  async saveDocArq() {
    const f = this.state.docFileEdit; if (!f) return;
    const nome = (f.nome || '').trim(); if (!nome) return this.notify('Informe o nome.', true);
    const upd = { nome, pasta_id: f.pasta_id ? +f.pasta_id : null };
    if (f.isLink) { const u = toUrl(f.url); if (!u) return this.notify('Informe um endereço válido (começando com http:// ou https://).', true); upd.url = u; }
    try {
      const { error } = await this.sb().from('documentos_arquivos').update(upd).eq('id', f.id); if (error) throw error;
      this.setState({ docFileEdit: null }); await this.loadDocs(); this.notify('Documento atualizado.');
    } catch (e) { this.notify('Erro ao salvar: ' + errMsg(e), true); }
  }
  async saveDocLink() {
    const f = this.state.docLinkEdit; if (!f) return;
    const url = toUrl(f.url), nome = (f.nome || '').trim() || (url ? url.replace(/^https?:\/\//, '').split('/')[0] : '');
    if (!url) return this.notify('Informe um endereço válido (começando com http:// ou https://).', true);
    const c = this.cu();
    try {
      const { error } = await this.sb().from('documentos_arquivos').insert({ pasta_id: this.state.docPasta || null, nome, url, caminho: '', tamanho: 0, tipo: 'link', enviado_por: c ? c.usuario : null });
      if (error) throw error;
      this.setState({ docLinkEdit: null }); await this.loadDocs(); this.notify('Link adicionado.');
    } catch (e) { console.warn('[Hub] Erro ao salvar link:', e); this.notify('Erro ao salvar o link: ' + errMsg(e), true); }
  }
  async delDocArq(a) {
    if (!confirm('Excluir ' + (a.url ? 'o link' : 'o documento') + ' "' + a.nome + '"?\n\nIsso não pode ser desfeito.')) return;
    try {
      if (a.caminho) { const r = await this.sb().storage.from(DOCS_BUCKET).remove([a.caminho]); if (r.error) throw r.error; }
      const { error } = await this.sb().from('documentos_arquivos').delete().eq('id', a.id); if (error) throw error;
      await this.loadDocs(); this.notify('Documento excluído.');
    } catch (e) { console.warn('[Hub] Erro ao excluir documento:', e); this.notify('Erro ao excluir: ' + errMsg(e), true); }
  }

  // ===== Patrimônio dos computadores (aba ASSPLAN) — só administradores =====
  async loadPatItens() {
    try { const { data, error } = await this.sb().from('patrimonio_itens').select('*').order('processo').order('setor').order('id'); if (error) throw error; this.setState({ patItens: data || [], patLoaded: true }); }
    catch (e) { console.warn('[Hub] Erro ao carregar patrimônio:', e); this.notify('Não foi possível carregar o patrimônio: ' + errMsg(e), true); }
  }
  async savePatItem() {
    const it = this.state.patEdit; if (!it) return;
    if (!(it.numero || '').trim()) return this.notify('Informe o número do patrimônio.', true);
    const c = this.cu();
    const row = { processo: (it.processo || '').trim(), setor: (it.setor || '').trim().toUpperCase(), equipamento: (it.equipamento || '').trim().toUpperCase(), numero: (it.numero || '').trim(), responsavel: (it.responsavel || '').trim(), observacao: (it.observacao || '').trim(), atualizado_em: new Date().toISOString(), atualizado_por: c ? c.usuario : null };
    try {
      const q = it.id ? this.sb().from('patrimonio_itens').update(row).eq('id', it.id) : this.sb().from('patrimonio_itens').insert(row);
      const { error } = await q; if (error) throw error;
      this.setState({ patEdit: null }); await this.loadPatItens(); this.notify(it.id ? 'Item atualizado.' : 'Item adicionado.');
    } catch (e) { console.warn('[Hub] Erro ao salvar patrimônio:', e); this.notify('Erro ao salvar: ' + errMsg(e), true); }
  }
  async delPatItem(it) {
    if (!confirm('Excluir o patrimônio ' + it.numero + ' (' + it.setor + ')?')) return;
    try { const { error } = await this.sb().from('patrimonio_itens').delete().eq('id', it.id); if (error) throw error; await this.loadPatItens(); this.notify('Item excluído.'); }
    catch (e) { this.notify('Erro ao excluir: ' + errMsg(e), true); }
  }

  // ===== Organograma: dados completos da pessoa para administradores =====
  async loadPersonAdmin(orgId) {
    const c = this.cu(); if (!c || !c.admin) return;
    const u = this.state.users.find(x => { const o = orgFor(x.usuario, x.nome); return o && o[0] === orgId; });
    if (!u) return this.setState(st => ({ personAdm: { ...st.personAdm, [orgId]: { semUsuario: true } } }));
    try {
      if (!this._contas) { const { data, error } = await this.sb().rpc('agenda_admin_contas'); if (error) throw error; this._contas = {}; (data || []).forEach(r => { this._contas[String(r.nome_usuario).toLowerCase()] = r.id; }); }
      const id = this._contas[u.usuario.toLowerCase()];
      let pf = null;
      if (id) { const { data } = await this.sb().from('perfis').select('cargo,cpf,matricula,nome_computador,armario,telefone,email,data_nascimento').eq('id', id).maybeSingle(); pf = data; }
      const pat = await this.loadPatrimonio(u.usuario);
      this.setState(st => ({ personAdm: { ...st.personAdm, [orgId]: { usuario: u.usuario, nivel: u.nivel, acesso: u.acesso, pf: pf || {}, pat } } }));
    } catch (e) { console.warn('[Hub] Erro ao carregar dados da pessoa:', errMsg(e)); }
  }

  // ===== Trocar a própria senha (Meu perfil) =====
  async changePassword() {
    const { np1, np2 } = this.state;
    if ((np1 || '').length < 8 || !/[A-Za-z]/.test(np1) || !/\d/.test(np1)) return this.notify('A nova senha deve ter pelo menos 8 caracteres, com letras e números.', true);
    if (np1 !== np2) return this.notify('As senhas não conferem.', true);
    this.setState({ pwBusy: true });
    try {
      const { error } = await this.sb().auth.updateUser({ password: np1 });
      if (error) throw error;
      this.setState({ np1: '', np2: '', pwBusy: false });
      this.notify('Senha alterada.');
    } catch (e) { this.setState({ pwBusy: false }); this.notify('Não foi possível alterar a senha: ' + (/same|different/i.test(errMsg(e)) ? 'a nova senha precisa ser diferente da atual.' : errMsg(e)), true); }
  }

  // ===== Administradores: dados de outras pessoas e patrimônio =====
  async loadPatrimonio(usuario) {
    const { data, error } = await this.sb().from('patrimonio').select('tem_patrimonio,patrimonio').eq('nome_usuario', usuario).maybeSingle();
    if (error) throw error;
    return { tem: !!(data && data.tem_patrimonio), num: (data && data.patrimonio) || '' };
  }
  async savePatrimonio(usuario, pat) {
    const c = this.cu();
    const { error } = await this.sb().from('patrimonio').upsert({ nome_usuario: usuario, tem_patrimonio: !!pat.tem, patrimonio: pat.num || '', atualizado_em: new Date().toISOString(), atualizado_por: c ? c.usuario : null }, { onConflict: 'nome_usuario' });
    if (error) throw error;
  }
  async openUserEdit(u) {
    const c = this.cu(); if (!c || !c.admin) return;
    const o = orgFor(u.usuario, u.nome), pub = this.state.publicByUser[u.usuario.toLowerCase()] || {};
    const base = { nome: u.nome, cargo: o ? o[2] : '', tel: o ? o[5] : '', email: o ? o[4] : '', bday: o ? o[7] : '', cpf: '', mat: '', pc: '', arm: '' };
    const foto0 = pub.foto_url || (o ? o[6] : '') || '';
    this.setState({ uEdit: { usuario: u.usuario, nome: u.nome, acesso: u.acesso, loading: true, hasAccount: false, id: null, f: base, foto: foto0, pat: { tem: false, num: '' }, saving: false, uploading: false } });
    try {
      if (!this._contas) { const { data, error } = await this.sb().rpc('agenda_admin_contas'); if (error) throw error; this._contas = {}; (data || []).forEach(r => { this._contas[String(r.nome_usuario).toLowerCase()] = r.id; }); }
      const id = this._contas[u.usuario.toLowerCase()] || null;
      let f = base, foto = foto0;
      if (id) {
        const { data, error } = await this.sb().from('perfis').select('cargo,telefone,email,data_nascimento,cpf,matricula,nome_computador,armario,foto_url').eq('id', id).maybeSingle();
        if (error) throw error;
        const pick = (v, d) => (v != null && v !== '') ? v : d;
        if (data) { f = { nome: u.nome, cargo: pick(data.cargo, base.cargo), tel: pick(data.telefone, base.tel), email: pick(data.email, base.email), bday: pick(data.data_nascimento, base.bday), cpf: data.cpf || '', mat: data.matricula || '', pc: data.nome_computador || '', arm: data.armario || '' }; foto = pick(data.foto_url, foto0); }
      }
      const pat = await this.loadPatrimonio(u.usuario);
      this.setState(st => st.uEdit && st.uEdit.usuario === u.usuario ? { uEdit: { ...st.uEdit, loading: false, hasAccount: !!id, id, f, foto, pat } } : null);
    } catch (e) { console.warn('[Hub] Erro ao abrir dados do usuário:', e); this.setState({ uEdit: null }); this.notify('Não foi possível abrir os dados: ' + errMsg(e), true); }
  }
  async uploadUserPhoto(file) {
    const ue = this.state.uEdit; if (!ue || !ue.id) return;
    this.setState({ uEdit: { ...ue, uploading: true } });
    try {
      const path = ue.id + '/avatar.' + ((file.name.split('.').pop() || 'jpg').toLowerCase());
      const { error } = await this.sb().storage.from('fotos-perfil').upload(path, file, { upsert: true, contentType: file.type });
      if (error) throw error;
      const { data: pub } = this.sb().storage.from('fotos-perfil').getPublicUrl(path);
      const url = pub && pub.publicUrl ? pub.publicUrl + '?t=' + Date.now() : '';
      this.setState(st => st.uEdit ? { uEdit: { ...st.uEdit, foto: url, uploading: false } } : null);
    } catch (e) { console.warn('[Hub] Upload de foto falhou:', e); this.setState(st => st.uEdit ? { uEdit: { ...st.uEdit, uploading: false } } : null); this.notify('Não foi possível enviar a foto: ' + errMsg(e), true); }
  }
  async saveUserEdit() {
    const ue = this.state.uEdit; if (!ue || ue.saving || ue.uploading) return;
    const nome = (ue.f.nome || '').trim();
    if (nome.length < 3) return this.notify('Informe o nome completo.', true);
    this.setState({ uEdit: { ...ue, saving: true } });
    try {
      if (nome !== ue.nome) { const { error } = await this.sb().rpc('agenda_admin_set_nome', { p_usuario: ue.usuario, p_nome: nome }); if (error) throw error; }
      if (ue.hasAccount) {
        const f = ue.f;
        const { error } = await this.sb().from('perfis').upsert({ id: ue.id, nome_completo: nome, cargo: f.cargo || '', telefone: f.tel || '', email: f.email || '', data_nascimento: f.bday || '', cpf: f.cpf || '', matricula: f.mat || '', nome_computador: f.pc || '', armario: f.arm || '', foto_url: storableUrl(ue.foto), atualizado_em: new Date().toISOString() }, { onConflict: 'id' });
        if (error) throw error;
      }
      await this.savePatrimonio(ue.usuario, ue.pat);
      this.setState({ uEdit: null });
      await this.loadUsers();
      this.loadPublicProfiles();
      if (this.state.me && ue.usuario === this.state.me.usuario) this.loadProfile(this.state.me);
      this.notify('Dados de ' + nome.split(' ')[0] + ' salvos.');
    } catch (e) { console.warn('[Hub] Erro ao salvar dados do usuário:', e); this.setState(st => ({ uEdit: st.uEdit ? { ...st.uEdit, saving: false } : null })); this.notify('Erro ao salvar: ' + errMsg(e), true); }
  }

  // ===== Usuários (administração) =====
  async setNivel(usuario, nivel) {
    try {
      const { error } = await this.sb().rpc('agenda_admin_set_nivel', { p_usuario: usuario, p_nivel: nivel === 'admin' ? 'admin' : 'usuario' });
      if (error) throw error;
      await this.loadUsers(); this.notify('Nível de acesso atualizado.');
    } catch (e) { console.warn('[Hub] Erro ao atualizar nível:', e); this.notify('Erro ao atualizar nível: ' + errMsg(e), true); }
  }
  // Redefinir senha sem apagar a conta: o banco gera uma senha provisória (o perfil da pessoa é preservado)
  async resetPassword(usuario, nome) {
    if (!confirm('Redefinir a senha de ' + nome + '?\n\nSerá gerada uma senha provisória; a pessoa troca depois em "Meu perfil". Os dados do perfil são mantidos.')) return;
    try {
      const { data, error } = await this.sb().rpc('agenda_admin_reset_senha', { p_usuario: usuario });
      if (error) throw error;
      this.setState({ resetInfo: { nome, usuario, senha: data } });
    } catch (e) { console.warn('[Hub] Erro ao redefinir senha:', e); this.notify('Erro ao redefinir senha: ' + errMsg(e), true); }
  }
  renderVals() {
    const s = this.state, view = s.view;
    const set = o => () => this.setState(o);
    const prevent = fn => e => { e && e.preventDefault && e.preventDefault(); fn(); };
    const all = s.events;
    const eS = e => e.start || TODAY;
    const covers = (e, d) => eS(e) <= d && e.end >= d;
    const isFer = e => e.cat === 'ferias';
    const status = e => e.status === 'cancelado' ? 'cancelado' : e.status === 'concluido' ? 'concluido' : e.end < TODAY ? 'concluido' : covers(e, TODAY) ? 'em_andamento' : 'nao_iniciado';
    const evs = all.filter(e => !isFer(e)), fers = all.filter(e => isFer(e) && e.status !== 'cancelado');
    const catName = id => CATS.find(c => c[0] === id)[1];

    const me = this.cu();
    const myName = me ? me.name : '';
    // Dados do organograma, sobrepostos pelo perfil que cada servidor salvou (view perfis_publicos)
    // orgUser: pessoa do organograma -> usuário; orgNome: nome corrigido por um administrador
    const orgUser = {}, orgNome = {}; s.users.forEach(x => { const o = orgFor(x.usuario, x.nome); if (o && !orgUser[o[0]]) { orgUser[o[0]] = x.usuario.toLowerCase(); if (x.nomeOrg) orgNome[o[0]] = x.nomeOrg; } });
    const P = o => { const u = unitOf(o[0]), nm = orgNome[o[0]] || o[3]; const pf = (orgUser[o[0]] && s.publicByUser[orgUser[o[0]]]) || this.publicProfileFor(o[3]) || {};
      const img = pf.foto_url || o[6], tel = pf.telefone || o[5], bday = /^\d{2}\/\d{2}/.test(pf.data_nascimento || '') ? pf.data_nascimento.slice(0, 5) : o[7];
      const sub = Object.values(SUBSTITUI).find(x => x.por === o[0]);
      return { id: o[0], name: nm, role: sub ? sub.nota : ((pf.cargo || '').trim() || o[2]), email: o[4], mailto: 'mailto:' + o[4], tel, img, hasImg: !!img, bgImg: img ? 'url("' + img + '")' : 'none', bday, d: bday, initials: ini(nm), unitId: u, unit: UNITS[u][0], color: UNITS[u][1], short: nm.split(' ').slice(0, 3).join(' '), open: () => { this.setState({ person: o[0] }); this.loadPersonAdmin(o[0]); }, hideImg }; };
    const people = ORG.map(P);
    const byId = id => people.find(p => p.id === id);
    // chefia exibida (considera substituições, ex.: Vinicius no lugar da Daiany)
    const headOf = id => byId((SUBSTITUI[id] || {}).por || id);

    const goView = (v, extra) => prevent(() => this.setState({ view: v, rail: false, ...(extra || {}) }));
    const navDef = [
      ['', [['Início','ph-house',['inicio']],['Calendário','ph-calendar-blank',['agenda','cal']],['Lista de eventos','ph-list-bullets',['agenda','lista']],['Todas as unidades','ph-stack',['agenda','unidade']]]],
      ['Pessoas', [['Servidores e unidades','ph-users-three',['pessoas','unidades']],['Organograma','ph-tree-structure',['pessoas','org']],['Colegiados','ph-users-four',['colegiados']]]],
      ['Gestão', [['Relatórios','ph-chart-bar',['relatorios']],['Usuários','ph-user',['usuarios']]]],
      ['Atalhos externos', [['Portal SIPOFE','ph-monitor',null,'https://goiasgovbr.sharepoint.com/sites/SIPOFE'],['Conecta SIPOFE','ph-address-book',null,'https://sistemassub.github.io/contatossipofe/#home'],['Projetos SCPMA','ph-kanban',null,'https://projetoscpma.netlify.app/']]],
    ];
    const isOn = t => !!t && t[0] === view && (!t[1] || (view === 'agenda' ? s.agTab === t[1] : view === 'pessoas' ? (s.pTab === t[1] || (t[1] === 'unidades' && s.pTab === 'diretorio')) : true));
    const navGroups = navDef.map(([label, items], gi) => ({ label: label || ' ', pt: gi ? '10px' : '0', labelOp: s.rail && label ? 1 : 0,
      items: items.map(([lb, ic, t, url]) => { const on = isOn(t); return { label: lb, icon: 'ph-duotone ' + ic, href: url || '#', target: url ? '_blank' : '_self',
        go: t ? goView(t[0], t[1] ? (t[0] === 'agenda' ? { agTab: t[1] } : { pTab: t[1] }) : {}) : () => {}, bg: on ? '#f5c518' : 'transparent', color: on ? '#0b3d7a' : '#c9d8ec' }; }) }));
    const v = { colegiados: view === 'colegiados', inicio: view === 'inicio', agenda: view === 'agenda', pessoas: view === 'pessoas', relatorios: view === 'relatorios', usuarios: view === 'usuarios', ferias: view === 'ferias', perfil: view === 'perfil' };

    const firstNames = us => us.map(x => { const n = (s.users.find(y => y.usuario === x) || { nome: x }).nome.split(' '); return n[0] + (n.length > 1 ? ' ' + n[n.length - 1] : ''); });
    const evRow = e => { const st = ST[status(e)]; const u = UNITS[e.unit]; const canEdit = this.canEdit(e); const qc = (s.presencaQuem || {})[e.id] || [];
      return { id: e.id, title: e.title, t1: e.t1 || 'Dia todo', t2: e.t2 || '', icon: 'ph-duotone ' + CAT_ICON[e.cat], color: u[1], unit: u[0], cat: catName(e.cat),
        loc: e.loc || '', hasLoc: !!e.loc, resp: e.resp || e.person || '', hasResp: !!(e.resp || e.person), fst: e.fst || '', hasFst: !!e.fst, fstBg: e.fst ? FST[e.fst][0] : '', fstFg: e.fst ? FST[e.fst][1] : '',
        st: st[0], stBg: st[1], stFg: st[2], meta: [u[0], catName(e.cat), e.loc || e.person || ''].filter(Boolean).join(' · '), tag: e.fst || st[0], tagBg: e.fst ? FST[e.fst][0] : st[1], tagFg: e.fst ? FST[e.fst][1] : st[2], view: () => this.openView(e), edit: () => this.openEdit(e), dup: () => this.dup(e), del: () => this.del(e), canEdit,
        hasConf: qc.length > 0, conf: 'Confirmaram: ' + firstNames(qc).join(', ') }; };
    const groupBy = (list, asc = true) => { const mp = {}; list.forEach(e => { const k = eS(e); (mp[k] = mp[k] || []).push(e); });
      return Object.keys(mp).sort((a, b) => asc ? a.localeCompare(b) : b.localeCompare(a)).map(k => ({ label: longDate(k), wd: WDF[dt(k).getDay()], rows: mp[k].sort((a, b) => (a.t1 || '').localeCompare(b.t1 || '')).map(evRow) })); };

    // ---------- Início
    const ferNow = fers.filter(e => covers(e, TODAY));
    const nextE = s.myNextDone ? (evs.find(e => e.id === s.myNextId) || null) : null;
    const todayEv = evs.filter(e => covers(e, TODAY)).length;
    const hl = todayEv ? { pre: 'Você tem ', main: todayEv + (todayEv > 1 ? ' compromissos' : ' compromisso'), post: ' hoje.' }
      : { pre: 'Agenda livre hoje. ', main: nextE ? nextE.title : '', post: nextE ? ' ' + (eS(nextE) <= TODAY ? 'está em andamento' : rel(diff(TODAY, eS(nextE)))) + '.' : '' };
    const nextEv = nextE ? { title: nextE.title, meta: WD[dt(eS(nextE)).getDay()] + ', ' + dm(eS(nextE)) + (nextE.end > eS(nextE) ? ' – ' + dm(nextE.end) : '') + (nextE.t1 ? ' · ' + nextE.t1 + '–' + nextE.t2 : '') + (nextE.loc ? ' · ' + nextE.loc : ''), rel: eS(nextE) <= TODAY ? 'em andamento' : rel(diff(TODAY, eS(nextE))), dot: ' · ' } : { title: s.myNextDone ? 'Nenhum evento na sua agenda' : 'Carregando…', meta: s.myNextDone ? 'Confirme presença nos eventos para vê-los aqui' : '', rel: '', dot: '' };
    const upcoming = all.filter(e => e.start && e.start >= TODAY && status(e) !== 'cancelado').sort((a, b) => a.start.localeCompare(b.start)).slice(0, 5).map((e, i) => { const hot = i === 0;
      return { dow: WD[dt(e.start).getDay()], dm: dm(e.start), day: e.start.slice(8, 10), mon: MONTHS[+e.start.slice(5, 7) - 1].slice(0, 3), title: e.title, unit: UNITS[e.unit][0], color: hot ? '#fff' : UNITS[e.unit][1],
        range: e.end !== e.start ? 'até ' + dm(e.end) : (e.t1 ? e.t1 + '–' + e.t2 : 'Dia todo'), rel: rel(diff(TODAY, e.start)),
        bg: hot ? '#1f9d4c' : '#fff', fg: hot ? '#fff' : '#122019', border: hot ? '#1f9d4c' : '#e4e8e6', sub: hot ? '#dcf2e3' : '#7a867f' }; });
    const ferRow = e => { const now = covers(e, TODAY); return { name: e.person || e.title, unit: UNITS[e.unit][0], kind: e.kind || 'Férias',
      period: e.start ? (e.start === e.end ? dm(e.start) : dm(e.start) + ' – ' + dm(e.end)) : 'até ' + dm(e.end), rel: now ? 'agora' : rel(diff(TODAY, e.start)),
      badgeBg: now ? '#fdf1c4' : '#e7eef8', badgeFg: now ? '#7a5d00' : '#0b4f9c' }; };
    const ferSorted = fers.filter(e => e.end >= TODAY).sort((a, b) => eS(a).localeCompare(eS(b)));
    const feriasRows = ferSorted.slice(0, 6).map(ferRow);
    const links = [['SIPOFE','Portal da Rede de Planejamento (SharePoint)','ph-share-network','#1f9d4c','#fff','https://goiasgovbr.sharepoint.com/sites/SIPOFE'],['Projetos SCPMA','Acompanhamento dos projetos da SCPMA','ph-kanban','#0b4f9c','#fff','https://projetoscpma.netlify.app/'],['Portal do Aluno','Cursos e capacitações','ph-graduation-cap','#f5c518','#0b3d7a','https://sgc.escoladegoverno.go.gov.br/'],['SEI','Sistema Eletrônico de Informações','ph-files','#0b3d7a','#fff','https://sei.go.gov.br/']]
      .map(([name, desc, ic, bg, fg, url]) => ({ name, desc: url ? desc : desc + ' · link em breve', icon: 'ph-duotone ' + ic, bg, fg, url, hasUrl: !!url, noUrl: !url }));
    const curMon = TODAY.slice(5, 7), curMonName = MONTHS[+curMon - 1];
    const aniv = people.filter(p => p.bday && p.bday.slice(3, 5) === curMon).sort((a, b) => a.bday.localeCompare(b.bday));

    // ---------- Agenda
    const agT = { cal: ['Calendário', 'Navegue pelos meses e visualizações'], lista: ['Lista de eventos', 'Busque e filtre compromissos'], unidade: ['Todas as unidades', 'Selecione uma unidade para visualizar sua agenda'] };
    const ag = { title: agT[s.agTab][0], sub: agT[s.agTab][1], isCal: s.agTab === 'cal', isLista: s.agTab === 'lista', isUnidade: s.agTab === 'unidade',
      tabs: [['cal','Calendário','ph-calendar-blank'],['lista','Lista','ph-list-bullets'],['unidade','Por unidade','ph-stack']].map(([id, name, ic]) => { const on = s.agTab === id; return { name, icon: 'ph-duotone ' + ic, pick: set({ agTab: id }), bg: on ? '#1f9d4c' : 'transparent', fg: on ? '#fff' : '#3d4943', fw: on ? '600' : '500' }; }) };
    const [y, m] = s.ym;
    const unitOk = (e, arr) => !arr.length || arr.includes(e.unit);
    const calAll = all.filter(e => unitOk(e, s.calUnits));
    const toggle = (key, id) => () => this.setState(st => { const a = st[key]; return { [key]: a.includes(id) ? a.filter(x => x !== id) : a.concat(id) }; });
    const chipsFor = key => Object.entries(UNITS).map(([id, [name, color]]) => { const on = s[key].includes(id); return { name, color, pick: toggle(key, id), bg: on ? '#e7eef8' : 'transparent', fg: on ? '#0b3d7a' : '#5f6b65', fw: on ? '600' : '500' }; });
    const off = (new Date(y, m, 1).getDay() + 6) % 7, nd = new Date(y, m + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < off; i++) cells.push({ n: '', ev: [], vis: 'hidden', bg: 'transparent', outline: 'none', numBg: 'transparent', numFg: '#122019', pick: () => {} });
    for (let n = 1; n <= nd; n++) {
      const d = iso(y, m, n), wk = (off + n - 1) % 7 >= 5;
      const list = calAll.filter(e => !isFer(e) && covers(e, d)).map(e => ({ title: e.title, color: UNITS[e.unit][1], icon: 'ph-fill ph-circle' }))
        .concat(calAll.filter(e => isFer(e) && e.status !== 'cancelado' && covers(e, d)).map(e => ({ title: (e.person || e.title).split(' ')[0] + ' — ' + (e.kind || 'Férias').toLowerCase(), color: UNITS[e.unit][1], icon: 'ph-fill ph-umbrella' })));
      const shown = list.slice(0, 2); if (list.length > 2) shown.push({ title: '+' + (list.length - 2) + ' mais', color: 'transparent', icon: 'ph-fill ph-circle' });
      cells.push({ n, ev: shown, vis: 'visible', pick: set({ day: d }), bg: wk ? '#f6f8f7' : '#fff', outline: d === s.day ? '2px solid #0b4f9c' : 'none',
        numBg: d === TODAY ? '#1f9d4c' : 'transparent', numFg: d === TODAY ? '#fff' : wk ? '#7a867f' : '#122019' });
    }
    const selEv = calAll.filter(e => !isFer(e) && covers(e, s.day)).map(e => ({ title: e.title, time: e.t1 ? e.t1 + '–' + e.t2 : 'Dia todo', unit: UNITS[e.unit][0], color: UNITS[e.unit][1], loc: e.loc || '—', view: () => this.openView(e) }));
    const selFer = calAll.filter(e => isFer(e) && e.status !== 'cancelado' && covers(e, s.day)).map(e => ({ name: e.person || e.title, unit: UNITS[e.unit][0], until: (e.kind || 'Férias') + ' até ' + dm(e.end) + (e.end.slice(0, 4) !== s.day.slice(0, 4) ? '/' + e.end.slice(0, 4) : '') }));
    const sd = dt(s.day);
    const sel = { n: sd.getDate(), label: s.day === TODAY ? 'Hoje' : WDF[sd.getDay()], sub: 'de ' + MONTHS[sd.getMonth()].toLowerCase() + ' · ' + (selEv.length === 1 ? '1 evento' : selEv.length + ' eventos'), ev: selEv, empty: !selEv.length, fer: selFer, hasFer: selFer.length > 0 };
    const shift = k => () => { if (s.calMode === 'semana') { const nx = addDays(s.day, 7 * k), d = dt(nx); this.setState({ day: nx, ym: [d.getFullYear(), d.getMonth()] }); } else { const d = new Date(y, m + k, 1); this.setState({ ym: [d.getFullYear(), d.getMonth()], day: isoOf(d) }); } };
    const monday = addDays(s.day, -((sd.getDay() + 6) % 7)), sunday = addDays(monday, 6);
    const week = [0,1,2,3,4,5,6].map(i => { const d = addDays(monday, i), t = d === TODAY;
      const ev = calAll.filter(e => covers(e, d)).sort((a, b) => (a.t1 || '').localeCompare(b.t1 || '')).map(e => ({ title: e.title, time: e.t1 ? e.t1 + '–' + e.t2 : 'Dia todo', color: UNITS[e.unit][1], unit: UNITS[e.unit][0], view: () => this.openView(e), bg: t ? '#fff' : UNITS[e.unit][1] + '1f' }));
      return { dow: WD[dt(d).getDay()].toUpperCase(), num: +d.slice(8, 10), ev, empty: !ev.length, bg: t ? '#1f9d4c' : '#fff', fg: t ? '#fff' : '#122019', sub: t ? '#dcf2e3' : '#7a867f', border: t ? '#1f9d4c' : '#e4e8e6' }; });
    const weekTitle = (+monday.slice(8, 10)) + (monday.slice(5, 7) !== sunday.slice(5, 7) ? ' de ' + MONTHS[+monday.slice(5, 7) - 1].toLowerCase() : '') + ' – ' + (+sunday.slice(8, 10)) + ' de ' + MONTHS[+sunday.slice(5, 7) - 1].toLowerCase();
    const mS = iso(y, m, 1), mE = iso(y, m, nd);
    const inMonth = e => eS(e) <= mE && e.end >= mS;
    const agendaGroups = groupBy(calAll.filter(inMonth));
    const tlRows = Object.entries(UNITS).filter(([id]) => !s.calUnits.length || s.calUnits.includes(id)).map(([id, [name, color]]) => { const lanes = [];
      const bars = calAll.filter(e => e.unit === id && inMonth(e)).sort((a, b) => eS(a).localeCompare(eS(b))).map(e => {
        const a = eS(e) < mS ? 1 : +eS(e).slice(8, 10), b = e.end > mE ? nd : +e.end.slice(8, 10);
        let lane = lanes.findIndex(l => l < a); if (lane < 0) { lane = lanes.length; lanes.push(b); } else lanes[lane] = b;
        return { title: e.title, col: a + ' / ' + (b + 1), row: String(lane + 1), bg: color, fg: '#fff', opacity: isFer(e) ? '0.75' : '1', view: () => this.openView(e) }; });
      return { name, color, bars, minH: Math.max(1, lanes.length) * 30 + 'px' }; });
    const tlDays = Array.from({ length: nd }, (_, i) => { const d = iso(y, m, i + 1); return { n: i + 1, fg: d === TODAY ? '#fff' : ((off + i) % 7 >= 5 ? '#9aa5a0' : '#3d4943'), bg: d === TODAY ? '#1f9d4c' : 'transparent' }; });
    const cal = { title: s.calMode === 'semana' ? weekTitle : MONTHS[m] + ' de ' + y, m: String(m), y: String(y),
      months: MONTHS.map((n, i) => ({ v: String(i), n })), years: [...new Set([y - 1, y, y + 1].concat(all.map(e => +String(e.start || '').slice(0, 4)).filter(Boolean)))].sort().map(String).map(x => ({ v: x, n: x })),
      setMonth: e => { const mm = +e.target.value; this.setState({ ym: [y, mm], day: iso(y, mm, 1) }); }, setYear: e => { const yy = +e.target.value; this.setState({ ym: [yy, m], day: iso(yy, m, 1) }); },
      modes: [['mes','Mês','ph-calendar-blank'],['semana','Semana','ph-columns'],['agenda','Agenda','ph-list-dashes'],['timeline','Linha do tempo','ph-chart-bar-horizontal']].map(([id, name, ic]) => { const on = s.calMode === id; return { name, icon: 'ph-duotone ' + ic, pick: set({ calMode: id }), bg: on ? '#fff' : 'transparent', fg: on ? '#0b3d7a' : '#7a867f', sh: on ? '0 1px 3px #0b2b5524' : 'none', fw: on ? '600' : '500' }; }),
      isMes: s.calMode === 'mes', isSemana: s.calMode === 'semana', isAgenda: s.calMode === 'agenda', isTl: s.calMode === 'timeline',
      cells, week, agendaGroups, agendaEmpty: !agendaGroups.length, tlRows, tlDays, tlCols: 'repeat(' + nd + ',minmax(0,1fr))', units: chipsFor('calUnits') };

    let from = s.from, to = s.to;
    const [ly, lm] = s.lym;
    if (s.per === 'mes') { from = iso(ly, lm, 1); to = iso(ly, lm, new Date(ly, lm + 1, 0).getDate()); }
    if (s.per === 'prox') { from = TODAY; to = addDays(TODAY, 30); }
    if (s.per === 'todos') { from = ''; to = ''; }
    const lq = (s.lq || '').trim().toLowerCase();
    const base = all.filter(e => (!from || e.end >= from) && (!to || eS(e) <= to) && (s.fCat === 'all' || e.cat === s.fCat) && (s.fFst === 'all' || e.fst === s.fFst) && (s.fPrio === 'all' || e.prio === s.fPrio) && unitOk(e, s.lUnits) && (!lq || (e.title + ' ' + (e.loc || '') + ' ' + (e.resp || '') + ' ' + (e.person || '')).toLowerCase().includes(lq)));
    const lf = base.filter(e => s.fSt === 'all' || status(e) === s.fSt);
    const onSel = k => e => { const val = e.target.value; this.setState({ [k]: val }); };
    const evHead = ['Data início', 'Data fim', 'Horário', 'Título', 'Unidade', 'Categoria', 'Status', 'Local', 'Responsável', 'Confirmaram'];
    const evRowsX = list => list.map(e => [e.start ? dm(e.start) + '/' + e.start.slice(0, 4) : '', dm(e.end) + '/' + e.end.slice(0, 4), e.t1 ? e.t1 + '-' + e.t2 : 'Dia todo', e.title, UNITS[e.unit][0], catName(e.cat), e.fst ? 'Férias ' + e.fst.toLowerCase() : ST[status(e)][0], e.loc || '', e.resp || e.person || '', firstNames((s.presencaQuem || {})[e.id] || []).join(', ')]);
    const csv = () => { this.exportCsv('eventos-scpma', evHead, evRowsX(lf)); this.setState({ expOpen: false }); };
    const ics = () => { const fx = (d, t) => d.replace(/-/g, '') + (t ? 'T' + t.replace(':', '') + '00' : '');
      const lines = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Hub SCPMA//PT'];
      lf.forEach(e => lines.push('BEGIN:VEVENT', 'UID:' + e.id + '@hubscpma', e.t1 ? 'DTSTART:' + fx(eS(e), e.t1) : 'DTSTART;VALUE=DATE:' + fx(eS(e)), e.t2 ? 'DTEND:' + fx(e.end, e.t2) : 'DTEND;VALUE=DATE:' + fx(addDays(e.end, 1)), 'SUMMARY:' + e.title, 'LOCATION:' + (e.loc || ''), 'END:VEVENT'));
      lines.push('END:VCALENDAR'); this.download('eventos-scpma.ics', lines.join('\r\n'), 'text/calendar'); this.setState({ expOpen: false }); };
    const catOptsF = [{ v: 'all', n: 'Todas' }].concat(CATS.map(([x, n]) => ({ v: x, n })));
    const active = [];
    if (s.fCat !== 'all') active.push({ label: catName(s.fCat), remove: set({ fCat: 'all' }) });
    if (s.fPrio !== 'all') active.push({ label: 'Prioridade ' + PRIO.find(p => p[0] === s.fPrio)[1].toLowerCase(), remove: set({ fPrio: 'all' }) });
    if (s.per !== 'mes') active.push({ label: s.per === 'todos' ? 'Todos os períodos' : s.per === 'prox' ? 'Próximos 30 dias' : 'Período personalizado', remove: set({ per: 'mes' }) });
    if (s.fSt !== 'all') active.push({ label: ST[s.fSt][0], remove: set({ fSt: 'all' }) });
    if (s.fFst !== 'all') active.push({ label: 'Férias ' + s.fFst.toLowerCase(), remove: set({ fFst: 'all' }) });
    s.lUnits.forEach(id => active.push({ label: UNITS[id][0], remove: () => this.setState(st => ({ lUnits: st.lUnits.filter(x => x !== id) })) }));
    const stCount = k => base.filter(e => k === 'all' || status(e) === k).length;
    const lista = { q: s.lq || '', setQ: e => this.setState({ lq: e.target.value }), from, to, fCat: s.fCat, fFst: s.fFst, fPrio: s.fPrio, isCustom: s.per === 'custom',
      pers: [['mes','Mês selecionado'],['todos','Todos'],['prox','Próximos 30 dias'],['custom','Personalizado']].map(([id, name]) => { const on = s.per === id; return { name, pick: set({ per: id }), bg: on ? '#fff' : 'transparent', fg: on ? '#0b3d7a' : '#5f6b65', sh: on ? '0 1px 3px #0b2b551f' : 'none' }; }),
      catOpts: catOptsF, fstOpts: [{ v: 'all', n: 'Todas' }].concat(Object.keys(FST).map(x => ({ v: x, n: x }))), prioOpts: [{ v: 'all', n: 'Todas' }].concat(PRIO.map(([x, n]) => ({ v: x, n }))),
      setFrom: onSel('from'), setTo: onSel('to'), setCat: onSel('fCat'), setFst: onSel('fFst'), setPrio: onSel('fPrio'),
      units: Object.entries(UNITS).map(([id, [name, color]]) => { const on = s.lUnits.includes(id); return { name, color, pick: toggle('lUnits', id), bg: on ? '#e7eef8' : '#fff', fg: on ? '#0b3d7a' : '#3d4943', fw: on ? '600' : '500', border: on ? '#0b4f9c' : '#e4e8e6' }; }),
      clear: set({ fCat: 'all', fFst: 'all', fPrio: 'all', lUnits: [], fSt: 'all', per: 'mes' }),
      // navegação por mês da lista
      isMonth: s.per === 'mes', monthTitle: s.per === 'mes' ? MONTHS[lm] + ' de ' + ly : s.per === 'todos' ? 'Todos os períodos' : s.per === 'prox' ? 'Próximos 30 dias' : 'Período personalizado',
      prevM: () => this.setState(st => { const d = new Date(st.lym[0], st.lym[1] - 1, 1); return { per: 'mes', lym: [d.getFullYear(), d.getMonth()] }; }),
      nextM: () => this.setState(st => { const d = new Date(st.lym[0], st.lym[1] + 1, 1); return { per: 'mes', lym: [d.getFullYear(), d.getMonth()] }; }),
      thisM: () => this.setState({ per: 'mes', lym: [+TODAY.slice(0, 4), +TODAY.slice(5, 7) - 1] }),
      lm: String(lm), ly: String(ly), setLm: e => { const v = +e.target.value; this.setState(st => ({ per: 'mes', lym: [st.lym[0], v] })); }, setLy: e => { const v = +e.target.value; this.setState(st => ({ per: 'mes', lym: [v, st.lym[1]] })); },
      monthOpts: MONTHS.map((n, i) => ({ v: String(i), n })), yearOpts: [...new Set([ly - 1, ly, ly + 1, +TODAY.slice(0, 4)].concat(all.map(e => +String(e.start || '').slice(0, 4)).filter(Boolean)))].sort().map(x => ({ v: String(x), n: String(x) })),
      showAll: set({ per: 'todos' }),
      per: s.per, setPer: onSel('per'), perOpts: [['mes','Mês selecionado'],['todos','Todos'],['prox','Próximos 30 dias'],['custom','Personalizado']].map(([v, n]) => ({ v, n })),
      fSt: s.fSt, setSt: onSel('fSt'), stOpts: [{ v: 'all', n: 'Todos' }].concat(Object.entries(ST).map(([x, a]) => ({ v: x, n: a[0] }))),
      sort: s.asc ? 'asc' : 'desc', setSort: e => this.setState({ asc: e.target.value === 'asc' }), sortOpts: [{ v: 'asc', n: 'Mais antigos primeiro' }, { v: 'desc', n: 'Mais recentes primeiro' }],
      summary: lf.length + (lf.length === 1 ? ' evento' : ' eventos') + ' · ' + lf.filter(e => status(e) === 'em_andamento').length + ' em andamento',
      filtOpen: !!s.filtOpen, expOpen: !!s.expOpen, toggleFilt: () => this.setState(st => ({ filtOpen: !st.filtOpen, expOpen: false })), toggleExp: () => this.setState(st => ({ expOpen: !st.expOpen, filtOpen: false })),
      filtBg: active.length ? '#eaf6ee' : '#fff', filtBorder: active.length ? '#1f9d4c' : '#e4e8e6', active, hasActive: active.length > 0, activeCount: active.length, n: lf.length,
      stTabs: [['all','Todos'],['em_andamento','Em andamento'],['nao_iniciado','Não iniciados'],['concluido','Concluídos']].map(([id, name]) => { const on = s.fSt === id; return { name, n: stCount(id), pick: set({ fSt: id }), bg: on ? '#1f9d4c' : 'transparent', fg: on ? '#fff' : '#3d4943', cBg: on ? '#ffffff33' : '#e4e8e6', cFg: on ? '#fff' : '#3d4943' }; }),
      sortLabel: s.asc ? 'Mais antigos primeiro' : 'Mais recentes primeiro', toggleSort: set({ asc: !s.asc }),
      groups: groupBy(lf, s.asc), empty: !lf.length, csv, ics, print: () => { this.setState({ expOpen: false }); this.exportPdf('Eventos — Hub SCPMA', lista.monthTitle || '', evHead, evRowsX(lf)); } };
    const uWhen = s.uWhen || 'prox';
    const inUnit = e => s.uSel === 'all' || e.unit === s.uSel;
    const whenOk = e => uWhen === 'todos' || (uWhen === 'prox' ? e.end >= TODAY : e.end < TODAY);
    const uq = (s.uq || '').trim().toLowerCase();
    const uBase = all.filter(e => inUnit(e) && whenOk(e) && (!uq || (e.title + ' ' + (e.loc || '') + ' ' + (e.resp || '') + ' ' + (e.person || '')).toLowerCase().includes(uq)));
    const ul = uBase.filter(e => s.uCat === 'all' || e.cat === s.uCat);
    const selColor = s.uSel === 'all' ? '#0b3d7a' : UNITS[s.uSel][1];
    const headP = headOf(s.uSel === 'all' ? 1 : UNIT_HEAD[s.uSel]);
    const uAll = all.filter(inUnit);
    const porUnidade = { color: selColor, sigla: s.uSel === 'all' ? 'Todas as unidades' : UNITS[s.uSel][0], full: s.uSel === 'all' ? 'Subsecretaria de Planejamento, Monitoramento e Avaliação' : UNIT_FULL[s.uSel], head: headP,
      stats: [{ v: uAll.length, l: 'compromissos' }, { v: uAll.filter(e => !isFer(e) && e.end >= TODAY).length, l: 'eventos a seguir' }, { v: uAll.filter(e => isFer(e) && e.end >= TODAY).length, l: 'férias e licenças' }],
      list: [['all','Todas','#0b3d7a']].concat(Object.entries(UNITS).map(([id, [n, c]]) => [id, n, c])).map(([id, name, color]) => { const on = s.uSel === id; const n = all.filter(e => id === 'all' || e.unit === id).length;
        return { name, color, pick: set({ uSel: id, uCat: 'all' }), bg: on ? color : '#fff', fg: on ? '#fff' : '#122019', sub: on ? '#ffffffcc' : '#7a867f', border: on ? color : '#e4e8e6', count: n === 1 ? '1 compromisso' : n + ' compromissos', mine: !!me && id === me.unit, mineBg: on ? '#ffffff33' : '#dcf2e3', mineFg: on ? '#fff' : '#146c35' }; }),
      cats: [['all','Todas','ph-squares-four']].concat(CATS.map(([id, n]) => [id, n, CAT_ICON[id]])).map(([id, name, ic]) => ({ id, name, icon: 'ph-duotone ' + ic, n: id === 'all' ? uBase.length : uBase.filter(e => e.cat === id).length })).filter(c => c.id === 'all' || c.n > 0)
        .map(c => { const on = s.uCat === c.id; return { ...c, pick: set({ uCat: c.id }), bg: on ? '#122019' : '#fff', fg: on ? '#fff' : '#122019', border: on ? '#122019' : '#e4e8e6' }; }),
      whens: [['prox','Próximos'],['pass','Realizados'],['todos','Todos']].map(([id, name]) => { const on = uWhen === id; return { name, pick: set({ uWhen: id }), bg: on ? '#fff' : 'transparent', fg: on ? '#0b3d7a' : '#5f6b65', sh: on ? '0 1px 3px #0b2b551f' : 'none' }; }),
      groups: groupBy(ul, uWhen !== 'pass'), empty: !ul.length };

    // ---------- Pessoas
    const peT = { unidades: ['Servidores e unidades', 'Quem é quem na SCPMA — unidades, chefias e contatos'], diretorio: ['Diretório', people.length + ' servidores na SCPMA'], org: ['Organograma', 'Subsecretaria de Planejamento, Monitoramento e Avaliação · clique em um nome para ver os dados'] };
    const octS = TODAY.slice(0, 8) + '01', octE = addDays(iso(+TODAY.slice(0, 4), +curMon, 1), -1);
    const q = s.q.trim().toLowerCase();
    const dU = s.dUnits || [];
    const plist = people.filter(p => (!dU.length || dU.includes(p.unitId)) && (!q || (p.name + ' ' + p.role + ' ' + p.unit).toLowerCase().includes(q)));
    const kids = id => ORG.filter(o => o[1] === id && !SUBST_IDS.has(o[0])).sort((x, z) => x[3].localeCompare(z[3], 'pt'));
    const brs = kids(1); const staffB = brs.find(b => !kids(b[0]).some(c => kids(c[0]).length));
    const org = { top: byId(1), staff: { head: byId(staffB[0]), members: kids(staffB[0]).map(o => byId(o[0])) },
      branches: brs.filter(b => b !== staffB).map(b => { const ch = kids(b[0]); const hp = headOf(b[0]);
        return { head: hp, unit: hp.unit, color: hp.color, assessores: ch.filter(c => !kids(c[0]).length).map(o => byId(o[0])), hasAss: ch.some(c => !kids(c[0]).length),
          groups: ch.filter(c => kids(c[0]).length).map(g => { const gp = byId(g[0]); return { head: gp, unit: gp.unit, color: gp.color, members: kids(g[0]).map(o => byId(o[0])) }; }) }; }) };
    const pe = { title: peT[s.pTab][0], sub: peT[s.pTab][1], isUnidades: s.pTab === 'unidades', isDir: s.pTab === 'diretorio', isOrg: s.pTab === 'org', total: people.length,
      tabs: [['unidades','Unidades','ph-buildings'],['diretorio','Diretório','ph-address-book'],['org','Organograma','ph-tree-structure']].map(([id, name, ic]) => { const on = s.pTab === id; return { name, icon: 'ph-duotone ' + ic, pick: set({ pTab: id }), bg: on ? '#1f9d4c' : 'transparent', fg: on ? '#fff' : '#3d4943', fw: on ? '600' : '500' }; }),
      unitCards: Object.entries(UNITS).map(([id, [sigla, color]]) => { const ps = people.filter(p => p.unitId === id); const hd = headOf(UNIT_HEAD[id]); const ue = evs.filter(e => e.unit === id);
        return { sigla, color, full: UNIT_FULL[id], avs: ps.slice(0, 5), hasMore: ps.length > 5, more: '+' + (ps.length - 5), head: hd.name, n: ps.length,
          oct: ue.filter(e => eS(e) <= octE && e.end >= octS).length, next: ue.filter(e => eS(e) >= TODAY && eS(e) <= octE).length, open: set({ pTab: 'diretorio', dUnits: [id], q: '' }) }; }),
      tree: (() => { const card = id => { const ps = people.filter(p => p.unitId === id); return { sigla: UNITS[id][0], color: UNITS[id][1], fg: id === 'suplan' ? '#0b2b55' : '#fff', full: UNIT_FULL[id], head: headOf(UNIT_HEAD[id]), avs: ps.filter(p => p.id !== UNIT_HEAD[id]).slice(0, 4), nLabel: ps.length + (ps.length === 1 ? ' pessoa' : ' pessoas'), open: set({ pTab: 'diretorio', dUnits: [id], q: '' }) }; };
        return { top: card('scpma'), branches: [{ main: card('sma'), subs: [card('gappp'), card('gemonit')] }, { main: card('suplan'), subs: [card('geplan'), card('gpmlp')] }] }; })(),
      chips: [['all','Todas','#9aa5a0']].concat(Object.entries(UNITS).map(([id, [n, c]]) => [id, n, c])).map(([id, name, color]) => { const on = s.unitF === id; return { name, color, pick: set({ unitF: id }), bg: on ? '#0b3d7a' : '#fff', fg: on ? '#fff' : '#122019', border: on ? '#0b3d7a' : '#e4e8e6' }; }),
      excel: () => this.exportCsv('servidores-scpma', ['Nome', 'Cargo', 'Unidade', 'E-mail', 'Telefone', 'Aniversário'], plist.map(x => [x.name, x.role, x.unit, x.email, x.tel, x.bday])),
      pdf: () => this.exportPdf('Servidores — Hub SCPMA', 'Diretório', ['Nome', 'Cargo', 'Unidade', 'E-mail', 'Telefone', 'Aniversário'], plist.map(x => [x.name, x.role, x.unit, x.email, x.tel, x.bday])),
      list: plist, none: !plist.length, openDir: prevent(() => this.setState({ pTab: 'diretorio', dUnits: [] })) };
    const pp = s.person ? byId(s.person) : null;
    const same = (a, b) => { const x = a.split(' '), z = b.split(' '); return a === b || (x[0] === z[0] && x[x.length - 1] === z[z.length - 1]); };
    const pFer = pp ? fers.filter(e => e.person && e.end >= TODAY && same(e.person, pp.name)).map(e => ({ title: e.kind || 'Férias', range: e.start ? (e.start === e.end ? dm(e.start) : dm(e.start) + ' – ' + dm(e.end)) : 'até ' + dm(e.end) })) : [];
    const isAdmV = !!(me && me.admin), pa = pp && isAdmV ? (s.personAdm[pp.id] || null) : null;
    const admRows = pa && !pa.semUsuario ? [['Usuário', pa.usuario], ['Nível', pa.nivel === 'admin' ? 'Administrador' : 'Editor'], ['Acesso', pa.acesso], ['CPF', pa.pf.cpf], ['Matrícula', pa.pf.matricula], ['Computador', pa.pf.nome_computador], ['Armário', pa.pf.armario],
      ['Patrimônio', pa.pat && (pa.pat.tem || pa.pat.num) ? (pa.pat.num || 'Sim') : 'Não']].map(([l, v]) => ({ l, v: v || '—' })) : [];
    const pm = pp ? { ...pp, unitFull: UNIT_FULL[pp.unitId], hasTel: !!pp.tel, bdayL: bdayLong(pp.bday), hasBday: !!pp.bday, fer: pFer, hasFer: pFer.length > 0,
      isAdm: isAdmV, admLoading: isAdmV && !pa, admRows, hasAdm: admRows.length > 0, admNone: !!(pa && pa.semUsuario) } : { bgImg: 'none' };


    // ---------- Colegiados
    if (s.logged && view === 'colegiados' && !s.colLoaded && !this._colLoading) { this._colLoading = true; this.loadColegiados().finally(() => { this._colLoading = false; }); }
    const splitP = v => String(v || '').split('\n').map(x => x.trim()).filter(Boolean);
    const personOf = n => people.find(p => sameName(p.name, n)) || people.find(p => { const a = normName(p.name).split(' '), b = normName(n).split(' '); return a[0] === b[0] && b.includes(a[a.length - 1]); }) || null;
    const chip = (n, papel) => { const p = personOf(n); return { nome: n, papel, initials: ini(n.length > 3 ? n : n + ' x'), bgImg: p && p.img ? 'url("' + p.img + '")' : 'none', color: p ? p.color : '#9aa5a0', unit: p ? p.unit : '', hasUnit: !!p, open: p ? p.open : () => {} }; };
    const isMe = n => !!me && sameName(n, me.name);
    const cq = normName(s.colQ || ''), cpes = s.colPessoa || '';
    const colAll = (s.colItens || []).map(it => ({ ...it, tit: splitP(it.titulares), sup: splitP(it.suplentes) }));
    const pessoasCol = {}; colAll.forEach(it => it.tit.concat(it.sup).forEach(n => { const k = normName(n); pessoasCol[k] = pessoasCol[k] || { nome: n, t: 0, s: 0 }; }));
    colAll.forEach(it => { it.tit.forEach(n => pessoasCol[normName(n)].t++); it.sup.forEach(n => pessoasCol[normName(n)].s++); });
    const colList = colAll.filter(it => (!cq || normName([it.nome, it.sigla, it.titulares, it.suplentes, it.observacoes].join(' ')).includes(cq))
      && (!cpes || it.tit.concat(it.sup).some(n => normName(n) === cpes)) && (!s.colMine || it.tit.concat(it.sup).some(isMe)));
    const colHead = ['Colegiado', 'Sigla', 'Titular(es)', 'Suplente(s)', 'Processo SEI', 'Observações'];
    const colRowsX = () => colList.map(it => [it.nome, it.sigla, it.tit.join(' / '), it.sup.join(' / '), it.processo_sei, it.observacoes]);
    const setCe = k => e => { const v = e.target.value; this.setState(st => ({ colEdit: { ...st.colEdit, [k]: v } })); };
    const mineN = colAll.filter(it => it.tit.concat(it.sup).some(isMe)).length;
    const col = { loading: !s.colLoaded, empty: s.colLoaded && !colList.length, isAdm: !!(me && me.admin),
      summary: colAll.length + ' colegiados · ' + Object.keys(pessoasCol).length + ' servidores representando a SCPMA',
      stats: [{ v: colAll.length, l: 'colegiados' }, { v: Object.keys(pessoasCol).length, l: 'servidores' }, { v: colAll.filter(it => it.processo_sei).length, l: 'com processo SEI' }, { v: colAll.filter(it => !it.tit.length).length, l: 'sem titular definido' }],
      q: s.colQ || '', setQ: e => this.setState({ colQ: e.target.value }),
      mine: { label: 'Só os meus (' + mineN + ')', bg: s.colMine ? '#0b3d7a' : '#fff', fg: s.colMine ? '#fff' : '#122019', border: s.colMine ? '#0b3d7a' : '#e4e8e6', pick: () => this.setState(st => ({ colMine: !st.colMine })) },
      filtering: !!cpes, filtName: cpes ? (pessoasCol[cpes] || { nome: '' }).nome : '', clearP: () => this.setState({ colPessoa: '' }),
      count: colList.length === colAll.length ? colAll.length + ' colegiados' : colList.length + ' de ' + colAll.length + ' colegiados',
      people: Object.entries(pessoasCol).map(([k, v]) => ({ k, ...v, n: v.t + v.s })).sort((a, b) => b.n - a.n || a.nome.localeCompare(b.nome, 'pt')).map(v => { const c = chip(v.nome); const on = cpes === v.k;
        return { ...c, det: (v.t ? v.t + ' titular' : '') + (v.t && v.s ? ' · ' : '') + (v.s ? v.s + ' suplente' : ''), n: v.n, bg: on ? '#e7eef8' : 'transparent', border: on ? '#0b4f9c' : 'transparent', pick: () => this.setState({ colPessoa: on ? '' : v.k }) }; }),
      list: colList.map(it => { const mine = it.tit.concat(it.sup).some(isMe), proc = (String(it.processo_sei).match(/id_procedimento=(\d+)/) || [])[1] || '';
        return { ...it, hasSigla: !!it.sigla, mark: it.sigla || it.nome.split(' ').filter(w => w.length > 3).slice(0, 2).map(w => w[0]).join('').toUpperCase(),
          tits: it.tit.map(n => chip(n, 'Titular')), sups: it.sup.map(n => chip(n, 'Suplente')), noTit: !it.tit.length, noSup: !it.sup.length,
          hasSei: !!storableUrl(it.processo_sei), sei: storableUrl(it.processo_sei), seiLabel: proc ? 'Processo SEI · procedimento ' + proc : 'Abrir no SEI', noSei: !it.processo_sei,
          hasObs: !!it.observacoes, border: mine ? '#f5c518' : '#e4e8e6', mine, edit: () => this.setState({ colEdit: { ...it } }), del: () => this.delColegiado(it) }; }),
      excel: () => this.exportCsv('colegiados-scpma', colHead, colRowsX()), pdf: () => this.exportPdf('Colegiados — Hub SCPMA', 'Representações da SCPMA', colHead, colRowsX()),
      add: () => this.setState({ colEdit: { nome: '', sigla: '', titulares: '', suplentes: '', processo_sei: '', observacoes: '', ordem: colAll.length + 1 } }),
      editing: !!s.colEdit, e: s.colEdit || {}, editTitle: s.colEdit && s.colEdit.id ? 'Editar colegiado' : 'Novo colegiado',
      set: ['nome', 'sigla', 'titulares', 'suplentes', 'processo_sei', 'observacoes', 'ordem'].reduce((o, k) => (o[k] = setCe(k), o), {}),
      save: () => this.saveColegiado(), cancel: () => this.setState({ colEdit: null }) };

    // ---------- Relatórios / Usuários / Férias / Perfil
    const bars = (rows, color) => { const mx = Math.max(1, ...rows.map(r => r[1])); return rows.sort((a, b) => b[1] - a[1]).map(([label, value, c]) => ({ label, value, w: Math.round(value / mx * 100) + '%', color: c || color })); };
    const nAdm = s.users.filter(u => u.nivel === 'admin').length;
    const rc = s.relCat || 'all';
    const rEv = rc === 'ferias' ? all.filter(isFer) : evs.filter(e => rc === 'all' || e.cat === rc);
    const donut = (title, rows) => { rows = rows.filter(r => r[1]); const tot = rows.reduce((t, r) => t + r[1], 0); let acc = 0;
      const grad = tot ? 'conic-gradient(' + rows.map(([, v, c]) => { const a0 = acc / tot * 360; acc += v; return c + ' ' + a0 + 'deg ' + (acc / tot * 360) + 'deg'; }).join(',') + ')' : '#e4e8e6';
      return { title, total: tot, grad, empty: !tot, rows: rows.map(([label, value, color]) => ({ label, value, color, pct: Math.round(value / tot * 100) + '%' })) }; };
    const CATC = { eventos: '#0b4f9c', cursos: '#1f9d4c', workshop: '#f5c518', oficinas: '#5b8fd6', monitoramento: '#0f7a5c', relatorio: '#c99a00', indicadores: '#7cc576' };
    const STC = { nao_iniciado: '#9aa5a0', em_andamento: '#f5c518', concluido: '#1f9d4c', cancelado: '#d64545' };
    const inOct = e => eS(e) <= octE && e.end >= octS;
    const nCanc = rEv.filter(e => status(e) === 'cancelado').length;
    const relV = { excel: () => this.exportCsv('relatorio-eventos', evHead, evRowsX(rEv)), pdf: () => this.exportPdf('Relatório de eventos — Hub SCPMA', rc === 'all' ? 'Todas as categorias' : catName(rc), evHead, evRowsX(rEv)),
      period: curMonName.toLowerCase() + ' de ' + TODAY.slice(0, 4),
      // abas fixas: Todos, Eventos, Cursos e Férias
      cats: [['all', 'Todos'], ['eventos', 'Eventos'], ['cursos', 'Cursos'], ['ferias', 'Férias']].map(([id, name]) => { const on = rc === id; return { name, pick: set({ relCat: id }), bg: on ? '#fff' : 'transparent', fg: on ? '#0b3d7a' : '#5f6b65', sh: on ? '0 1px 3px #0b2b5524' : 'none', fw: on ? '600' : '500' }; }),
      ferN: ferNow.length, ferUnit: ferNow.length === 1 ? 'servidor' : 'servidores', ferNone: !ferNow.length,
      ferList: ferNow.map(e => ({ name: e.person || e.title, kind: e.kind || 'Férias', until: dm(e.end), color: UNITS[e.unit][1] })),
      kpis: [
        { label: 'Eventos no mês', value: rEv.filter(inOct).length, sub: curMonName + ' de ' + TODAY.slice(0, 4), icon: 'ph-duotone ph-calendar-blank', color: '#0b4f9c' },
        { label: 'Concluídos', value: rEv.filter(e => status(e) === 'concluido').length, sub: 'Em todo o período', icon: 'ph-duotone ph-check-circle', color: '#1f9d4c' },
        { label: 'A realizar', value: rEv.filter(e => ['nao_iniciado', 'em_andamento'].includes(status(e))).length, sub: 'Não iniciados + em andamento', icon: 'ph-duotone ph-clock', color: '#c99a00' },
        { label: 'Cancelados', value: nCanc, sub: nCanc ? 'Requerem atenção' : 'Nenhum no período', icon: 'ph-duotone ph-warning-circle', color: '#d64545' } ],
      donuts: [
        donut('Por status', Object.keys(ST).map(k => [ST[k][0], rEv.filter(e => status(e) === k).length, STC[k]])),
        rc === 'ferias' ? donut('Por situação', [['Solicitada', '#f5c518'], ['Aprovada', '#1f9d4c'], ['Recusada', '#d64545'], ['Cancelada', '#9aa5a0']].map(([k, c]) => [k, rEv.filter(e => (e.fst || 'Solicitada') === k).length, c]))
          : donut('Por categoria', CATS.filter(c => c[0] !== 'ferias').map(([id, n]) => [n, rEv.filter(e => e.cat === id).length, CATC[id]])),
        donut('Por unidade', Object.entries(UNITS).map(([id, [n, c]]) => [n, rEv.filter(e => e.unit === id).length, c])) ],
      next: rEv.filter(e => eS(e) >= TODAY && status(e) !== 'cancelado').sort((x, y) => eS(x).localeCompare(eS(y))).slice(0, 4).map(e => ({ title: e.title, d: +eS(e).slice(8, 10), mon: MONTHS[+eS(e).slice(5, 7) - 1].slice(0, 3).toUpperCase(), meta: (e.t1 ? e.t1 + '–' + e.t2 : 'Dia todo') + ' · ' + UNITS[e.unit][0], color: UNITS[e.unit][1], view: () => this.openView(e) })),
      canc: rEv.filter(e => status(e) === 'cancelado').map(e => ({ title: e.title, meta: longDate(eS(e)) + ' · ' + UNITS[e.unit][0], view: () => this.openView(e) })) };
    relV.nextNone = !relV.next.length; relV.cancNone = !relV.canc.length;
    const NV = { admin: ['Administrador', '#0b3d7a', '#fff'], editor: ['Editor', '#e7eef8', '#0b4f9c'], viewer: ['Visualizador', '#f2f5f4', '#3d4943'] };
    const unitColor = n => (Object.values(UNITS).find(u => u[0] === n) || [n, '#9aa5a0'])[1];
    const UL = s.users;
    const isAdmin = !!(me && me.admin);
    const scopeOf = u => { const sc = s.feriasScope[u.toLowerCase()] || []; return sc.length >= 7 ? 'Todas as unidades' : sc.join(', '); };
    // aba Documentos (pastas e PDFs) — só administradores
    if (isAdmin && s.view === 'usuarios' && s.usrTab === 'docs' && !s.docLoaded && !this._docLoading) { this._docLoading = true; this.loadDocs().finally(() => { this._docLoading = false; }); }
    const dq = normName(s.docQ || ''), dp = s.docPasta;
    const fmtSize = n => n >= 1048576 ? (n / 1048576).toFixed(1).replace('.', ',') + ' MB' : Math.max(1, Math.round(n / 1024)) + ' KB';
    const fmtDate = d => d ? new Date(d).toLocaleDateString('pt-BR') : '';
    const pathOf = id => { const out = []; let cur = s.docPastas.find(x => x.id === id); while (cur) { out.unshift(cur); cur = s.docPastas.find(x => x.id === cur.pai_id); } return out; };
    const cnt = id => { const ids = this.docDescendentes(id); return s.docArqs.filter(a => ids.includes(a.pasta_id)).length; };
    const folderRow = p => ({ nome: p.nome, n: cnt(p.id) + (cnt(p.id) === 1 ? ' arquivo' : ' arquivos'), sub: s.docPastas.filter(x => x.pai_id === p.id).length, open: () => this.setState({ docPasta: p.id, docQ: '' }),
      rename: () => this.setState({ docFolderEdit: { id: p.id, nome: p.nome } }), del: () => this.delDocPasta(p) });
    const fileRow = a => { const ext = (a.nome.split('.').pop() || '').toLowerCase(); const pdf = ext === 'pdf', lnk = !!a.url;
      return { nome: a.nome, info: (lnk ? a.url.replace(/^https?:\/\//, '').replace(/\/$/, '') : fmtSize(a.tamanho)) + ' · ' + fmtDate(a.criado_em) + (a.enviado_por ? ' · ' + a.enviado_por : ''), icon: 'ph-duotone ' + (lnk ? 'ph-link' : pdf ? 'ph-file-pdf' : /^(png|jpe?g)$/.test(ext) ? 'ph-file-image' : /^(xlsx?|csv)$/.test(ext) ? 'ph-file-xls' : /^docx?$/.test(ext) ? 'ph-file-doc' : 'ph-file'), color: lnk ? '#0b4f9c' : pdf ? '#b42318' : /^(xlsx?|csv)$/.test(ext) ? '#1f9d4c' : '#0b4f9c', isLink: lnk,
        pasta: a.pasta_id ? (s.docPastas.find(x => x.id === a.pasta_id) || { nome: '' }).nome : 'Raiz', open: () => this.openDoc(a), edit: () => this.setState({ docFileEdit: { id: a.id, nome: a.nome, pasta_id: a.pasta_id ? String(a.pasta_id) : '', isLink: lnk, url: a.url || '' } }), del: () => this.delDocArq(a) }; };
    const searching = !!dq;
    const docFolders = searching ? [] : s.docPastas.filter(x => (x.pai_id || null) === (dp || null)).map(folderRow);
    const docFiles = (searching ? s.docArqs.filter(a => normName(a.nome + ' ' + (a.url || '')).includes(dq)) : s.docArqs.filter(a => (a.pasta_id || null) === (dp || null))).map(fileRow);
    const crumbs = [{ nome: 'Documentos e projetos', go: () => this.setState({ docPasta: null, docQ: '' }), last: !dp }].concat(pathOf(dp).map((x, i, arr) => ({ nome: x.nome, go: () => this.setState({ docPasta: x.id, docQ: '' }), last: i === arr.length - 1 })));
    const docs = { loading: !s.docLoaded, busy: s.docBusy, q: s.docQ || '', setQ: e => this.setState({ docQ: e.target.value }), crumbs, searching, atRoot: !dp,
      folders: docFolders, files: docFiles, hasFolders: docFolders.length > 0, hasFiles: docFiles.length > 0, empty: s.docLoaded && !docFolders.length && !docFiles.length,
      emptyMsg: searching ? 'Nada encontrado.' : 'Esta pasta está vazia. Envie arquivos, adicione um link ou crie uma subpasta.',
      summary: s.docArqs.length + (s.docArqs.length === 1 ? ' item' : ' itens') + ' · ' + s.docPastas.length + (s.docPastas.length === 1 ? ' pasta' : ' pastas'),
      newFolder: () => this.setState({ docFolderEdit: { nome: '' } }), pick: e => { const fs = Array.from(e.target.files || []); e.target.value = ''; this.uploadDocs(fs); },
      folderEditing: !!s.docFolderEdit, fe: s.docFolderEdit || {}, folderTitle: s.docFolderEdit && s.docFolderEdit.id ? 'Renomear pasta' : 'Nova pasta' + (dp ? ' em "' + (pathOf(dp).slice(-1)[0] || { nome: '' }).nome + '"' : ''),
      setFolderNome: e => { const v = e.target.value; this.setState(st => ({ docFolderEdit: { ...st.docFolderEdit, nome: v } })); }, saveFolder: () => this.saveDocPasta(), cancelFolder: () => this.setState({ docFolderEdit: null }),
      newLink: () => this.setState({ docLinkEdit: { nome: '', url: '' } }), linkEditing: !!s.docLinkEdit, le: s.docLinkEdit || {},
      setLinkNome: e => { const v = e.target.value; this.setState(st => ({ docLinkEdit: { ...st.docLinkEdit, nome: v } })); }, setLinkUrl: e => { const v = e.target.value; this.setState(st => ({ docLinkEdit: { ...st.docLinkEdit, url: v } })); },
      saveLink: () => this.saveDocLink(), cancelLink: () => this.setState({ docLinkEdit: null }),
      setFileUrl: e => { const v = e.target.value; this.setState(st => ({ docFileEdit: { ...st.docFileEdit, url: v } })); },
      fileEditing: !!s.docFileEdit, fi: s.docFileEdit || {}, fiIsLink: !!(s.docFileEdit && s.docFileEdit.isLink), setFileNome: e => { const v = e.target.value; this.setState(st => ({ docFileEdit: { ...st.docFileEdit, nome: v } })); }, setFilePasta: e => { const v = e.target.value; this.setState(st => ({ docFileEdit: { ...st.docFileEdit, pasta_id: v } })); },
      uploadLabel: s.docBusy ? 'Enviando…' : 'Enviar arquivos',
      folderOpts: [{ v: '', n: 'Raiz (sem pasta)' }].concat(s.docPastas.map(x => ({ v: String(x.id), n: pathOf(x.id).map(y => y.nome).join(' / ') })).sort((a, b) => a.n.localeCompare(b.n, 'pt'))),
      saveFile: () => this.saveDocArq(), cancelFile: () => this.setState({ docFileEdit: null }) };
    // aba ASSPLAN (patrimônio dos computadores) — só administradores
    if (isAdmin && s.view === 'usuarios' && s.usrTab === 'assplan' && !s.patLoaded && !this._patLoading) { this._patLoading = true; this.loadPatItens().finally(() => { this._patLoading = false; }); }
    const pq = normName(s.patQ || '');
    const patList = (s.patItens || []).filter(it => !pq || normName([it.processo, it.setor, it.equipamento, it.numero, it.responsavel, it.observacao].join(' ')).includes(pq));
    const patHead = ['Processo', 'Setor', 'Equipamento', 'Nº patrimônio', 'Responsável', 'Observação'];
    const patRowsX = () => patList.map(it => [it.processo, it.setor, it.equipamento, it.numero, it.responsavel, it.observacao]);
    const procs = [...new Set(patList.map(it => it.processo || '(sem processo)'))];
    const setPe = k => e => { const v = e.target.value; this.setState(st => ({ patEdit: { ...st.patEdit, [k]: v } })); };
    const assplan = { q: s.patQ || '', setQ: e => this.setState({ patQ: e.target.value }), loading: !s.patLoaded, empty: s.patLoaded && !patList.length,
      summary: patList.length + (patList.length === 1 ? ' item' : ' itens') + ' · ' + procs.length + (procs.length === 1 ? ' processo' : ' processos'),
      groups: procs.map(pr => ({ processo: pr, n: patList.filter(it => (it.processo || '(sem processo)') === pr).length,
        items: patList.filter(it => (it.processo || '(sem processo)') === pr).map(it => ({ ...it, resp: it.responsavel || '—', obs: it.observacao || '', hasObs: !!it.observacao,
          edit: () => this.setState({ patEdit: { ...it } }), del: () => this.delPatItem(it) })) })),
      add: () => this.setState({ patEdit: { processo: (patList[0] && patList[0].processo) || '', setor: '', equipamento: '', numero: '', responsavel: '', observacao: '' } }),
      excel: () => this.exportCsv('patrimonio-computadores', patHead, patRowsX()), pdf: () => this.exportPdf('Patrimônio dos computadores — ASSPLAN', 'Hub SCPMA', patHead, patRowsX()),
      editing: !!s.patEdit, e: s.patEdit || {}, editTitle: s.patEdit && s.patEdit.id ? 'Editar item' : 'Novo item',
      set: ['processo', 'setor', 'equipamento', 'numero', 'responsavel', 'observacao'].reduce((o, k) => (o[k] = setPe(k), o), {}),
      save: () => this.savePatItem(), cancel: () => this.setState({ patEdit: null }) };
    const usrHead = ['Nome', 'Usuário', 'Acesso às unidades', 'Nível', 'Aprova férias'];
    const usr = { summary: UL.length + ' usuários · ' + nAdm + ' administradores' + (isAdmin ? ' · clique no nome para ver e editar os dados' : ''), isAdmin, notAdmin: !isAdmin,
      isUsers: !isAdmin || (s.usrTab !== 'assplan' && s.usrTab !== 'docs'), isAssplan: isAdmin && s.usrTab === 'assplan', isDocs: isAdmin && s.usrTab === 'docs', assplan, docs,
      tabsTop: [['usuarios', 'Usuários', 'ph-users'], ['assplan', 'Patrimônios', 'ph-laptop'], ['docs', 'Documentos e projetos', 'ph-folders']].map(([id, name, ic]) => { const on = (s.usrTab || 'usuarios') === id; return { name, icon: 'ph-duotone ' + ic, pick: () => this.setState({ usrTab: id }), bg: on ? '#1f9d4c' : 'transparent', fg: on ? '#fff' : '#3d4943', fw: on ? '600' : '500' }; }), cursor: isAdmin ? 'pointer' : 'default', nameColor: isAdmin ? '#0b4f9c' : '#122019', openTitle: isAdmin ? 'Ver e editar dados' : '',
      tabs: [['all', 'Todos'], ['admin', 'Administradores'], ['editor', 'Editores']].map(([id, name]) => { const on = s.nivelF === id; return { name, count: id === 'all' ? UL.length : UL.filter(u => u.nivel === id).length, pick: set({ nivelF: id }), bg: on ? '#fff' : 'transparent', fg: on ? '#0b3d7a' : '#5f6b65' }; }),
      list: UL.filter(u => (s.nivelF === 'all' || u.nivel === s.nivelF) && (!(s.usrQ || '').trim() || (u.nome + ' ' + u.usuario).toLowerCase().includes(s.usrQ.trim().toLowerCase())) && (!(s.usrUnits || []).length || u.acesso === 'Todas as unidades' || s.usrUnits.some(id => u.acesso.split(', ').includes(UNITS[id][0])))).slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt')).map(({ nome, usuario, acesso, nivel, senhaCriada }) => ({ nome, usuario, initials: ini(nome), photoBg: (() => { const pub = s.publicByUser[usuario.toLowerCase()], o = orgFor(usuario, nome), f = (pub && pub.foto_url) || (o && o[6]) || ''; return f ? 'url("' + f + '")' : 'none'; })(), avBg: me && usuario === me.usuario ? '#f5c518' : '#e7eef8',
        aprova: scopeOf(usuario) ? 'Aprova férias: ' + scopeOf(usuario) : '', acesso: acesso === 'Todas as unidades' ? [{ name: 'Todas as unidades', color: '#1f9d4c' }] : acesso.split(', ').map(n => ({ name: n, color: unitColor(n) })),
        nivel: NV[nivel][0], nBg: NV[nivel][1], nFg: NV[nivel][2], nivelId: nivel, senha: senhaCriada ? 'Senha criada' : 'Sem senha (primeiro acesso)',
        setNivel: e => this.setNivel(usuario, e.target.value), reset: () => this.resetPassword(usuario, nome), canReset: isAdmin && senhaCriada, open: () => this.openUserEdit({ usuario, nome, acesso }) })) };
    const ferHead = ['Servidor', 'Unidade', 'Tipo', 'Início', 'Fim', 'Dias', 'Situação'];
    const ferRowsX = () => ferSorted.map(e => [e.person || e.title, UNITS[e.unit][0], e.kind || 'Férias', e.start ? dm(e.start) + '/' + e.start.slice(0, 4) : '', dm(e.end) + '/' + e.end.slice(0, 4), e.start ? diff(e.start, e.end) + 1 : '', e.fst || '']);
    const fer = { excel: () => this.exportCsv('ferias-scpma', ferHead, ferRowsX()), pdf: () => this.exportPdf('Férias e licenças — Hub SCPMA', 'Programadas e em andamento', ferHead, ferRowsX()),
      summary: ferNow.length + ' em férias ou licença hoje · ' + (ferSorted.length - ferNow.length) + ' programadas',
      list: ferSorted.map(e => { const now = covers(e, TODAY); const o = people.find(p => e.person && same(e.person, p.name)); const r = ferRow(e); const days = e.start ? diff(e.start, e.end) + 1 : null;
        return { ...r, initials: ini(e.person || e.title), role: o ? o.role : '', status: e.fst || (now ? 'Em andamento' : 'Programada'),
          rel: now ? 'volta em ' + dm(addDays(e.end, 1)) : (days === 1 ? '1 dia' : days + ' dias') + ' · ' + r.rel,
          bg: now ? '#0b3d7a' : '#f6f8f7', fg: now ? '#fff' : '#122019', sub: now ? '#c9d8ec' : '#5f6b65',
          badgeBg: now ? '#f5c518' : (e.fst ? FST[e.fst][0] : '#dcf2e3'), badgeFg: now ? '#0b2b55' : (e.fst ? FST[e.fst][1] : '#146c35'), avBg: now ? '#ffffff22' : '#e7eef8', avFg: now ? '#fff' : '#0b4f9c' }; }) };
    const pr = s.prof; const filled = [1, pr.cargo, 1, 1, pr.tel, pr.bday, pr.mat, pr.pc, pr.arm, pr.cpf].filter(Boolean).length; const pctP = Math.round(filled / 10 * 100);
    const missing = [!pr.tel && 'telefone', !pr.bday && 'aniversário', !pr.pc && 'computador', !pr.arm && 'armário', !pr.cpf && 'CPF', !pr.mat && 'matrícula'].filter(Boolean);
    const prof = { ...pr, pct: pctP, pctW: pctP + '%', hint: missing.length ? 'Falta: ' + missing.join(', ') + '.' : 'Perfil completo.', saved: s.profSaved || 'Alterações ainda não salvas nesta sessão.' };
    const setProf = {}; ['cargo', 'tel', 'bday', 'mat', 'pc', 'arm', 'cpf'].forEach(k => setProf[k] = e => { const val = e.target.value; this.setState(st => ({ prof: { ...st.prof, [k]: val } })); });

    // ---------- Modais
    const fm = s.f || this.blank();
    const setF = {}; Object.keys(fm).forEach(k => setF[k] = e => { const val = e.target.value; this.setState(st => ({ f: { ...(st.f || this.blank()), [k]: val }, err: false })); });
    const open = (d, cat) => () => this.openNew(d, cat);
    const save = keepOpen => () => this.saveEvent(keepOpen);
    const ve = s.viewId ? all.find(e => e.id === s.viewId) : null;
    const vm = ve ? (() => { const r = evRow(ve);
      const pres = s.presencas[ve.id] || [], mine = me ? pres.find(p => p.nome_usuario === me.usuario) : null;
      const going = mine && mine.resposta === 'confirmado', notGoing = mine && mine.resposta !== 'confirmado';
      const nConf = s.presencaCounts[ve.id] || 0;
      const canApprove = this.canApprove(ve) && ve.fst === 'Solicitada';
      return { ...r, range: ve.start ? (ve.start === ve.end ? WDF[dt(ve.start).getDay()] + ', ' + longDate(ve.start) : longDate(ve.start) + ' – ' + longDate(ve.end)) : 'Até ' + longDate(ve.end), time: ve.t1 ? ve.t1 + ' – ' + ve.t2 : 'Dia todo',
        desc: ve.desc || '', hasDesc: !!ve.desc, noEdit: !r.canEdit,
        canApprove, approve: () => this.setFerias(ve, 'Aprovada'), refuse: () => this.setFerias(ve, 'Recusada'),
        ...(() => { // participantes: lista escolhida (com resposta de cada um) ou, nos demais eventos, quem já respondeu
          const nomeDe = u => (s.users.find(x => x.usuario === u) || { nome: u }).nome;
          const R = { confirmado: ['Vai participar', '#dcf2e3', '#146c35'], recusado: ['Não vai', '#fbe1e1', '#b42318'], '': ['Aguardando resposta', '#f2f5f4', '#5f6b65'] };
          const resp = u => { const p = pres.find(x => x.nome_usuario === u); return p ? (p.resposta === 'confirmado' ? 'confirmado' : 'recusado') : ''; };
          const lista = ve.part === 'lista' ? (s.convEv[ve.id] || []) : pres.map(p => p.nome_usuario);
          const parts = lista.map(u => ({ u, nome: nomeDe(u), r: resp(u) })).sort((a, b) => ['confirmado', '', 'recusado'].indexOf(a.r) - ['confirmado', '', 'recusado'].indexOf(b.r) || a.nome.localeCompare(b.nome, 'pt'))
            .map(p => { const ap = ve.exige && p.r === 'confirmado' ? ((pres.find(x => x.nome_usuario === p.u) || {}).aprovacao || 'pendente') : '', A = { pendente: ['Aguardando aprovação', '#fdf1c4', '#7a5d00'], aprovada: ['Aprovada', '#dcf2e3', '#146c35'], recusada: ['Recusada', '#fbe1e1', '#b42318'] };
              return { nome: p.nome, label: ap ? 'Vai participar' : R[p.r][0], bg: R[p.r][1], fg: R[p.r][2], hasAp: !!ap, apLabel: ap ? A[ap][0] : '', apBg: ap ? A[ap][1] : '', apFg: ap ? A[ap][2] : '',
                canDecide: !!ap && this.canApprovePessoa(p.u), ok: () => this.setAprovacao(ve, p.u, 'aprovada'), no: () => this.setAprovacao(ve, p.u, 'recusada') }; });
          const nSim = parts.filter(p => p.label === R.confirmado[0]).length;
          const nAp = ve.exige ? parts.filter(p => p.apLabel === 'Aprovada').length : 0;
          return { parts, hasParts: parts.length > 0, partsTitle: ve.part === 'lista' ? 'Participantes (' + nSim + ' de ' + parts.length + ' confirmados' + (ve.exige ? ', ' + nAp + ' aprovados' : '') + ')' : 'Respostas' }; })(),
        hasRsvp: RSVP_CATS.includes(ve.cat) && status(ve) !== 'cancelado' && status(ve) !== 'concluido',
        myAprov: (() => { if (!ve.exige || !mine || mine.resposta !== 'confirmado') return ''; const a = mine.aprovacao || 'pendente'; return a === 'aprovada' ? 'Sua participação foi aprovada pelo seu superior.' : a === 'recusada' ? 'Sua participação foi recusada pelo seu superior.' : 'Sua participação aguarda a aprovação do seu superior.'; })(),
        rsvpCount: (() => { const ns = pres.filter(p => p.resposta === 'confirmado').map(p => (s.users.find(x => x.usuario === p.nome_usuario) || { nome: p.nome_usuario }).nome); return ns.length ? 'Confirmaram (' + ns.length + '): ' + ns.join(', ') : 'Ninguém confirmou ainda.'; })(),
        rsvpYes: () => this.rsvp(ve, 'confirmado'), rsvpNo: () => this.rsvp(ve, 'recusado'),
        yesBg: going ? '#1f9d4c' : '#fff', yesFg: going ? '#fff' : '#146c35', noBg: notGoing ? '#b42318' : '#fff', noFg: notGoing ? '#fff' : '#b42318' }; })() : {};

    const fo = s.fo || '';
    const tog = k => () => this.setState(st => ({ fo: st.fo === k ? '' : k, filtOpen: false, expOpen: false }));
    const pickUnits = key => Object.entries(UNITS).map(([id, [name, color]]) => { const arr = s[key] || []; const on = arr.includes(id); return { name, color, pick: () => this.setState(st => { const a = st[key] || []; return { [key]: a.includes(id) ? a.filter(x => x !== id) : a.concat(id) }; }), bg: on ? '#e7eef8' : '#fff', fg: on ? '#0b3d7a' : '#3d4943', fw: on ? '600' : '500', border: on ? '#0b4f9c' : '#e4e8e6' }; });
    const unitChips = key => (s[key] || []).map(id => ({ label: UNITS[id][0], remove: () => this.setState(st => ({ [key]: (st[key] || []).filter(x => x !== id) })) }));
    const fWrap = (k, active, extra) => ({ open: fo === k, toggle: tog(k), active, hasActive: active.length > 0, activeCount: active.length, bg: active.length ? '#eaf6ee' : '#fff', border: active.length ? '#1f9d4c' : '#e4e8e6', ...extra });
    const calF = fWrap('cal', unitChips('calUnits'), { units: pickUnits('calUnits'), clear: set({ calUnits: [] }), summary: 'Exibindo' });
    const uniActive = [];
    if ((s.uWhen || 'prox') !== 'prox') uniActive.push({ label: s.uWhen === 'pass' ? 'Realizados' : 'Todos os períodos', remove: set({ uWhen: 'prox' }) });
    if (s.uCat !== 'all') uniActive.push({ label: catName(s.uCat), remove: set({ uCat: 'all' }) });
    const uniF = fWrap('uni', uniActive, { q: s.uq || '', setQ: e => this.setState({ uq: e.target.value }), when: s.uWhen || 'prox', setWhen: e => this.setState({ uWhen: e.target.value }),
      whenOpts: [{ v: 'prox', n: 'Próximos' }, { v: 'pass', n: 'Realizados' }, { v: 'todos', n: 'Todos' }], cat: s.uCat, setCat: e => this.setState({ uCat: e.target.value }),
      catOpts: [{ v: 'all', n: 'Todas' }].concat(CATS.map(([x, n]) => ({ v: x, n }))), clear: set({ uWhen: 'prox', uCat: 'all', uq: '' }),
      summary: ul.length + (ul.length === 1 ? ' compromisso' : ' compromissos') + ((s.uWhen || 'prox') === 'prox' ? ' a seguir' : '') });
    const dirF = fWrap('dir', unitChips('dUnits'), { q: s.q, setQ: e => this.setState({ q: e.target.value }), units: pickUnits('dUnits'), clear: set({ dUnits: [], q: '' }),
      summary: plist.length + (plist.length === 1 ? ' pessoa' : ' pessoas') });
    const usrRowsX = () => usr.list.map(u => [u.nome, u.usuario, u.acesso.map(a => a.name).join(', '), u.nivel, u.aprova.replace('Aprova férias: ', '')]);
    usr.excel = () => this.exportCsv('usuarios-hub-scpma', usrHead, usrRowsX()); usr.pdf = () => this.exportPdf('Usuários — Hub SCPMA', 'Lista de usuários', usrHead, usrRowsX());
    const usrActive = unitChips('usrUnits'); if (s.nivelF !== 'all') usrActive.unshift({ label: s.nivelF === 'admin' ? 'Administradores' : 'Editores', remove: set({ nivelF: 'all' }) });
    const usrF = fWrap('usr', usrActive, { q: s.usrQ || '', setQ: e => this.setState({ usrQ: e.target.value }), nivel: s.nivelF, setNivel: e => this.setState({ nivelF: e.target.value }),
      nivelOpts: [{ v: 'all', n: 'Todos' }, { v: 'admin', n: 'Administradores' }, { v: 'editor', n: 'Editores' }], units: pickUnits('usrUnits'), clear: set({ nivelF: 'all', usrUnits: [], usrQ: '' }),
      summary: usr.list.length + ' de ' + UL.length + ' usuários' });

    const isCreate = s.lstep === 'create';
    const myOrg = me && me.org ? byId(me.org[0]) : null;
    const photo = s.prof.foto || '';
    const hr = new Date().getHours();
    const unread = s.notifs.filter(n => !n.lida).length;
    const NI = { lembrete: 'ph-alarm', convite: 'ph-envelope-open', alteracao: 'ph-pencil-simple', presenca: 'ph-check-circle', ferias: 'ph-umbrella' };
    const notifList = s.notifs.slice(0, 30).map(n => ({ title: n.titulo || '', msg: n.mensagem || '', hasMsg: !!n.mensagem, icon: 'ph-duotone ' + (NI[n.tipo] || 'ph-bell'),
      when: (n.criada_em ? new Date(n.criada_em).toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' }) : '') + (n.remetente && n.remetente !== n.dest_usuario ? ' · enviada por ' + (((s.users || []).find(u => u.usuario === n.remetente) || {}).nome || n.remetente) : ''), bg: n.lida ? '#fff' : '#f2f7fd',
      open: () => { const ev = n.evento_id ? all.find(e => e.id === n.evento_id) : null; this.setState({ notifOpen: false }); if (ev) this.openView(ev); } }));
    const NIV = { admin: 'Administrador(a)', editor: 'Editor(a)', viewer: 'Visualizador(a)' };
    const ueS = s.uEdit;
    const setUe = (grp, k) => e => { const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value; this.setState(st => st.uEdit ? { uEdit: { ...st.uEdit, [grp]: { ...st.uEdit[grp], [k]: val } } } : null); };
    const ue = ueS ? { ...ueS, initials: ini(ueS.nome), loadingTxt: ueS.loading ? 'Carregando…' : '', ready: !ueS.loading, noAccount: !ueS.loading && !ueS.hasAccount, showFields: !ueS.loading && ueS.hasAccount, saveBtn: ueS.saving ? 'Salvando…' : 'Salvar',
      fotoBg: ueS.foto ? 'url("' + ueS.foto + '")' : 'none', hasFoto: !!ueS.foto && !ueS.loading && ueS.hasAccount, canPhoto: !ueS.loading && ueS.hasAccount, fotoTxt: ueS.uploading ? 'Enviando…' : 'Trocar foto',
      pickFoto: e => { const file = e.target.files && e.target.files[0]; e.target.value = ''; if (file) this.uploadUserPhoto(file); }, removeFoto: () => this.setState(st => st.uEdit ? { uEdit: { ...st.uEdit, foto: '' } } : null),
      set: ['nome', 'cargo', 'tel', 'email', 'bday', 'cpf', 'mat', 'pc', 'arm'].reduce((o, k) => (o[k] = setUe('f', k), o), {}), setPatTem: setUe('pat', 'tem'), setPatNum: setUe('pat', 'num'),
      save: () => this.saveUserEdit(), close: () => this.setState({ uEdit: null }) } : { f: {}, pat: {}, set: {} };
    const mp = s.myPat;
    const myPatV = { show: !!(me && me.admin && mp), tem: !!(mp && mp.tem), num: (mp && mp.num) || '',
      setTem: e => { const v = e.target.checked; this.setState(st => ({ myPat: { ...(st.myPat || {}), tem: v } })); }, setNum: e => { const v = e.target.value; this.setState(st => ({ myPat: { ...(st.myPat || {}), num: v } })); } };
    return {
      needLogin: !s.logged,
      login: { user: s.lu, pw: s.lp, pw2: s.lp2, pwType: s.showPw ? 'text' : 'password', eye: 'ph-duotone ' + (s.showPw ? 'ph-eye-slash' : 'ph-eye'), remember: s.remember,
        isCreate, title: isCreate ? 'Criar senha' : 'Entrar', sub: isCreate ? 'Primeiro acesso de ' + s.lu.trim() + '.' : 'Use seu usuário da rede do Estado.',
        btn: s.busy ? 'Aguarde…' : s.connecting ? 'Conectando…' : isCreate ? 'Criar senha e entrar' : 'Entrar',
        setUser: e => this.setState({ lu: e.target.value, lmsg: '', lstep: 'login', lp2: '' }), setPw: e => this.setState({ lp: e.target.value, lmsg: '' }), setPw2: e => this.setState({ lp2: e.target.value, lmsg: '' }),
        togglePw: e => { e.preventDefault(); this.setState({ showPw: !s.showPw }); }, toggleRemember: () => this.setState({ remember: !s.remember }),
        forgot: e => { e.preventDefault(); this.setState({ lmsg: 'ok:Peça a um administrador do Hub para redefinir sua senha (página Usuários). No próximo acesso você cria uma nova.' }); },
        back: e => { e && e.preventDefault && e.preventDefault(); this.setState({ lstep: 'login', lp: '', lp2: '', lmsg: '' }); },
        submit: () => this.doLogin(), onKey: e => { if (e.key === 'Enter') this.doLogin(); },
        hasMsg: !!s.lmsg, msg: s.lmsg.slice(s.lmsg.indexOf(':') + 1), msgColor: s.lmsg.startsWith('err') ? '#b42318' : '#146c35', msgBg: s.lmsg.startsWith('err') ? '#fbe1e1' : '#dcf2e3',
        border: s.lmsg.startsWith('err') ? '#d64545' : '#e4e8e6' },
      logout: e => { e && e.preventDefault && e.preventDefault(); this.doLogout(); },
      my: { name: myName, first: myName.split(' ')[0], initials: myName ? ini(myName) : '', email: myOrg ? myOrg.email : '', unit: me ? UNITS[me.unit][0] : '', role: me ? NIV[s.me.nivel] || '' : '',
        greet: (hr < 12 ? 'Bom dia' : hr < 18 ? 'Boa tarde' : 'Boa noite') + (myName ? ', ' + myName.split(' ')[0] : '') + '.', today: WDF[dt(TODAY).getDay()].split('-')[0] + ', ' + longDate(TODAY).toLowerCase(), month: curMonName },
      photoBg: photo ? 'url("' + photo + '")' : 'none', hasPhoto: !!photo, noPhoto: !photo,
      pickPhoto: e => { const file = e.target.files && e.target.files[0]; e.target.value = ''; if (file) this.uploadPhoto(file); },
      removePhoto: () => { this.setState(st => ({ prof: { ...st.prof, foto: '' } })); this.saveProfile({ foto_url: '' }); },
      calF, uniF, dirF, usrF, col, saveProf: () => this.saveProfile(),
      reset: { show: !!s.resetInfo, nome: s.resetInfo ? s.resetInfo.nome : '', usuario: s.resetInfo ? s.resetInfo.usuario : '', senha: s.resetInfo ? s.resetInfo.senha : '',
        copy: () => { try { navigator.clipboard.writeText(s.resetInfo.senha); this.notify('Senha copiada.'); } catch (e) {} }, close: () => this.setState({ resetInfo: null }) },
      pwc: { np1: s.np1, np2: s.np2, setNp1: e => this.setState({ np1: e.target.value }), setNp2: e => this.setState({ np2: e.target.value }), save: () => this.changePassword(), btn: s.pwBusy ? 'Alterando…' : 'Alterar senha' }, hasUe: !!ueS, ue, myPat: myPatV,
      notif: { open: s.notifOpen, count: unread, has: unread > 0, list: notifList, empty: !notifList.length,
        toggle: () => { const o = !s.notifOpen; this.setState({ notifOpen: o }); if (o && unread) this.markAllRead(); }, close: set({ notifOpen: false }) },
      toast: { show: !!s.toast, msg: s.toast || '', bg: s.toastErr ? '#b42318' : '#0b3d7a', icon: 'ph-duotone ' + (s.toastErr ? 'ph-warning-circle' : 'ph-check-circle') },
      navGroups, v, hl, nextEv, stat: { ferias: ferNow.length }, upcoming, feriasRows, links, aniv, anivCount: aniv.length, anivNames: aniv.map(p => p.name.split(' ')[0] + ' ' + p.bday).join(' · '),
      ag, cal, sel, lista, porUnidade, pe, org, rel: relV, usr, fer, prof, setProf,
      dows: ['SEG','TER','QUA','QUI','SEX','SÁB','DOM'], prevMonth: shift(-1), nextMonth: shift(1), pickToday: () => this.setState({ day: TODAY, ym: [+TODAY.slice(0, 4), +curMon - 1] }),
      railW: s.rail ? '248px' : '72px', railTextOp: s.rail ? 1 : 0, railShadow: s.rail ? '12px 0 40px #0b2b5533' : 'none',
      railIn: () => this.setState({ rail: true }), railOut: () => this.setState({ rail: false }), railToggle: () => this.setState({ rail: !s.rail }), railOpenS: s.rail ? '1' : '0',
      q: s.q, onSearch: e => this.setState({ q: e.target.value, view: 'pessoas', pTab: 'diretorio' }),
      goCal: goView('agenda', { agTab: 'cal' }), goFerias: goView('ferias'), goPerfil: goView('perfil'), goOrg: goView('pessoas', { pTab: 'org' }), perfilRing: view === 'perfil' ? '#fff' : 'transparent',
      modal: s.modal, f: fm, setF, openNew: open(), openNewOnDay: open(s.day), openFerias: open(TODAY, 'ferias'), saving: s.saving, partLista: fm.part === 'lista', pick: (() => {
        const sel = fm.convidados || [], q = normName(fm.pq || ''), byU = u => s.users.find(x => x.usuario === u);
        const tog = u => () => this.setState(st => { const cur = (st.f && st.f.convidados) || []; return { f: { ...st.f, convidados: cur.includes(u) ? cur.filter(x => x !== u) : cur.concat(u) } }; });
        const list = s.users.filter(x => !q || normName(x.nome + ' ' + x.usuario + ' ' + x.acesso).includes(q)).map(x => { const on = sel.includes(x.usuario); return { u: x.usuario, nome: x.nome, info: x.acesso, toggle: tog(x.usuario), bg: on ? '#eaf6ee' : '#fff', icon: 'ph-fill ' + (on ? 'ph-check-square' : 'ph-square'), ic: on ? '#1f9d4c' : '#c4ccc8' }; });
        return { q: fm.pq || '', setQ: e => { const v = e.target.value; this.setState(st => ({ f: { ...st.f, pq: v } })); }, list, none: !list.length,
          chips: sel.map(u => ({ nome: (byU(u) || { nome: u }).nome, remove: tog(u) })), count: sel.length === 1 ? '1 pessoa escolhida' : sel.length + ' pessoas escolhidas',
          all: () => this.setState(st => ({ f: { ...st.f, convidados: [...new Set(((st.f && st.f.convidados) || []).concat(list.map(x => x.u)))] } })), clear: () => this.setState(st => ({ f: { ...st.f, convidados: [] } })) }; })(),
      modalKicker: s.editId ? 'Editar compromisso' : 'Novo compromisso', modalTitle: s.editId ? 'Editar evento' : 'Novo evento', saveLabel: s.editId ? 'Salvar alterações' : 'Criar evento', saveBtn: s.saving ? 'Salvando…' : s.editId ? 'Salvar alterações' : 'Criar evento',
      closeNew: () => this.setState({ modal: false, editId: null, files: [] }), stop: e => e.stopPropagation(), create: save(false), createAndDup: save(true),
      toggleExige: () => this.setState(st => ({ f: { ...(st.f || this.blank()), exige: !(st.f || {}).exige } })),
      toggleDone: () => this.setState(st => ({ f: { ...(st.f || this.blank()), done: !(st.f || {}).done, cancel: false } })),
      toggleCancel: () => this.setState(st => ({ f: { ...(st.f || this.blank()), cancel: !(st.f || {}).cancel, done: false } })),
      doneBg: fm.done ? '#1f9d4c' : '#fff', doneFg: fm.done ? '#fff' : '#1f9d4c', doneBorder: '#1f9d4c',
      files: s.files.map((fl, i) => ({ name: fl.name, remove: () => this.setState(st => ({ files: st.files.filter((_, j) => j !== i) })) })),
      addFiles: e => { const picked = Array.from(e.target.files || []).map(file => ({ name: file.name, file })); e.target.value = ''; this.setState(st => ({ files: st.files.concat(picked) })); },
      unitOpts: Object.entries(UNITS).filter(([id]) => this.canEdit({ unit: id }) || id === fm.unit).map(([id, [name]]) => ({ id, name })), catOpts: CATS.map(([id, name]) => ({ id, name })),
      descCount: (fm.desc || '').length, titleBorder: s.err ? '#d64545' : '#e4e8e6',
      errText: s.err ? 'Informe o título do evento.' : '* preenchimento obrigatório', errColor: s.err ? '#d64545' : '#9aa5a0',
      hasPerson: !!pp, pm, closePerson: set({ person: null }), hasView: !!ve, vm, closeView: set({ viewId: null })
    };
  }
}
</script>


