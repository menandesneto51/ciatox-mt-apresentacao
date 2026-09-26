# CIATox-MT — Rede Estadual de Informação, Assistência Toxicológica e Toxicovigilância

Repositório institucional para apoiar a estruturação da cobertura estadual de toxicologia clínica e toxicovigilância em Mato Grosso, em conformidade com a Portaria GM/MS nº 12.151, de 14 de setembro de 2026.

## Objetivo

Organizar, em uma única base versionada, os elementos necessários para:

- decisão institucional da SES-MT;
- diagnóstico do serviço existente;
- análise de aderência normativa;
- desenho da cobertura dos 142 municípios;
- articulação CIATox–CIEVS–Lacen–RUE/Regulação–Assistência Farmacêutica–ERS;
- estudo econômico-financeiro;
- preparação de pactuação CIR/CIB;
- preparação futura para habilitação federal.

A fase atual **não cria automaticamente novo estabelecimento**, não autoriza obra e não pressupõe substituição do Centro Antiveneno de Mato Grosso (CIAVE). O desenho definitivo deverá resultar do estudo técnico.

## Estado atual

**Versão de trabalho:** v0.2 Institucional  
**Fase:** diagnóstico e preparação do estudo técnico  
**Ambiente padrão de implementação:** Cursor  
**Repositório:** GitHub  
**UF:** Mato Grosso  
**Municípios:** 142  
**População estimada 2026:** 3.950.330 habitantes (IBGE, referência 01/07/2026)

## Produtos existentes

- `index.html` — apresentação executiva web;
- `nota-tecnica.html` — nota técnica executiva ao Secretário;
- `documento.html` — projeto técnico consolidado;
- `documentos/Projeto_CIATox_MT_Apresentacao_Executiva_v1.pptx`;
- `documentos/Projeto_CIATox_MT_Rede_Estadual_Toxicologia_v01.docx`;
- `documentos/Portaria_GM_MS_12151_2026.pdf`.

## Fonte única de verdade

As premissas que se repetem em mais de um produto devem migrar progressivamente para a pasta `data/`.

- `data/premissas.yaml` — população, território, organização e parâmetros do projeto;
- `data/financiamento.yaml` — premissas e cálculos financeiros;
- `data/fontes.yaml` — fontes institucionais e status de validação.

Nenhum número estratégico deve ser alterado em apenas um HTML sem atualização da fonte correspondente.

## Documentação técnica

- `docs/CURSOR.md` — regras de implementação pelo Cursor;
- `docs/FONTES_E_EVIDENCIAS.md` — rastreabilidade das principais afirmações;
- `docs/REQUISITOS_PORTARIA_12151.md` — matriz de requisitos normativos;
- `docs/GAP_ANALYSIS.md` — lacunas a validar na fase diagnóstica;
- `docs/ROADMAP.md` — evolução 60/90/180/365 dias.

## Princípios de arquitetura

1. **Rede antes de prédio.**
2. **Cobertura estadual antes de duplicação estrutural.**
3. **Teleconsultoria 24/7 como capacidade central.**
4. **ERS como nós territoriais, sem substituir o especialista.**
5. **Integração assistência–vigilância–laboratório–regulação–farmácia.**
6. **Antídotos e toxicovigilância como produtos estruturantes.**
7. **Dados agregados e governança compatível com LGPD.**
8. **Toda premissa financeira deve declarar sua fonte e grau de certeza.**
9. **Toda automação deve manter trilha de auditoria.**
10. **Cursor é o ambiente padrão para implementação e continuidade.**

## Modelo operacional

```text
Detectar → Orientar → Regular → Tratar → Investigar → Alertar → Aprender
```

Esse ciclo orientará o futuro desenho de processos, indicadores e sistemas do CIATox-MT.

## Próxima entrega

A v0.2 deve consolidar:

- matriz completa de aderência à Portaria nº 12.151/2026;
- diagnóstico do CIAVE/CIATox existente;
- roteiro de diagnóstico dos 16 ERS;
- inventário estadual de antídotos e soros;
- matriz de capacidade laboratorial;
- matriz de RH e cobertura 24/7;
- estudo dos três cenários institucionais;
- modelo de governança;
- plano de implantação;
- arquitetura inicial do painel de toxicovigilância.
