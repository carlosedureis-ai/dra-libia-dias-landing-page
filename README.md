# 🌿 Dra. Líbia Dias — Landing Page de Alta Conversão

> Landing page profissional e ética para atendimento de Harmonização Facial e Estética Corporal em Manaus - AM.

---

## 💎 Arquitetura do Projeto

O projeto foi estruturado para **máxima performance, segurança, acessibilidade e conversão direta via WhatsApp**, eliminando Flash of Unstyled Content (FOUC) e dependências pesadas de runtime.

```
01_Dra_Libia_Dias_Landing_Page/
├── assets/
│   ├── css/
│   │   └── styles.css        # CSS Standalone compilado e minificado (< 14 KB)
│   ├── js/
│   │   └── main.js           # JavaScript modular vanilla, CSP-compliant e sem XSS
│   └── images/
│       ├── logo-dra-libia.png # Logotipo oficial em alta resolução
│       ├── og-dra-libia.jpg   # Banner Open Graph 1200x630 para WhatsApp/Redes
│       ├── dra-libia-hero.jpg # Foto principal
│       ├── dra-libia-about.jpg# Foto de atendimento
│       └── proc-*.jpg         # Fotografias temáticas dos procedimentos
├── index.html                 # Estrutura semântica HTML5 com Open Graph e Schema.org
├── DESIGN.md                  # Especificação do Design System
├── robots.txt                 # Diretrizes para indexadores de busca
├── sitemap.xml                # Sitemap XML para SEO
├── .gitignore                 # Proteção contra vazamento de credenciais
└── README.md                  # Documentação completa
```

---

## 🔒 Auditoria de Segurança & Boas Práticas

- **Sem Chaves / Segredos:** Nenhum token de API ou credencial exposta no repositório.
- **Proteção contra Tabnabbing:** Todos os links externos utilizam `rel="noopener noreferrer"`.
- **Headers de Segurança no HTML:**
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Código JavaScript Limpo:** Sem `eval()`, sem inserção desprotegida de HTML (`innerHTML` dinâmico não sanitizado) e rodando em modo estrito (`"use strict"`).
- **Sem FOUC:** CSS pré-compilado carregado de forma síncrona sem compilação de runtime CDN no navegador.

---

## 🎯 Pilares de Alta Conversão (CRO)

1. **Jornada Direta de Conversão:** Todos os CTAs abrem o WhatsApp (`api.whatsapp.com`) com mensagem pré-formatada específica do procedimento ou seção.
2. **Hero com Autoridade Local:** Nome da profissional + Cidade (Manaus) + Proposta de Valor ("Realce seus traços sem perder sua naturalidade") + COREN Ativo.
3. **Seção de Identificação:** Conexão de dores reais a tratamentos (Harmonia Facial, Contorno e Vitalidade).
4. **Como Funciona em 3 Passos:** Redução de incerteza da paciente (Contato ➔ Avaliação Presencial ➔ Plano Sob Medida).
5. **Procedimentos Focados no Benefício:** Para quem é indicado ➔ Objetivo ➔ CTA Contextual.
6. **FAQ Anti-Objeção:** Respostas claras sobre dor, recuperação, anestésicos e agendamento.
7. **Localização Exata no Google Maps:** Centro Comercial Rio Jutaí, Manaus.

---

## 🚀 Como Executar Localmente

### Opção 1: Servidor Web Nativo
Execute o script em PowerShell ou duplo clique no arquivo `.bat`:
```powershell
powershell -ExecutionPolicy Bypass -File ../start_server.ps1
```

### Opção 2: Abertura Direta
Abra o arquivo `index.html` em qualquer navegador web moderno.

---

## 🌐 Deploy em Produção

O projeto é 100% estático e compatível com:
- **Vercel:** `vercel deploy`
- **Netlify:** `netlify deploy --prod`
- **Cloudflare Pages / GitHub Pages**

---

© 2026 Dra. Líbia Dias. Todos os direitos reservados. COREN-AM 000.574.129.
