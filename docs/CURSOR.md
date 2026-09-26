# Regras de implementação no Cursor — CIATox-MT

## Regra principal

O Cursor é o ambiente padrão de implementação, revisão e continuidade técnica deste projeto.

Antes de alterar o código ou documentos estruturantes, o agente deve ler:

1. `README.md`
2. `data/premissas.yaml`
3. `data/financiamento.yaml`
4. `data/fontes.yaml`
5. `docs/REQUISITOS_PORTARIA_12151.md`
6. `docs/GAP_ANALYSIS.md`
7. `docs/ROADMAP.md`

## Agentes obrigatórios

Toda evolução relevante deve passar, conceitualmente ou por automação, pelos seguintes papéis:

### 1. Agente de Arquitetura
Valida estrutura, dependências, separação entre conteúdo, dados e apresentação, evitando duplicação.

### 2. Agente de Epidemiologia/Toxicovigilância
Valida definições, indicadores, fontes epidemiológicas, denominadores, temporalidade, cobertura e interpretação.

### 3. Agente Normativo
Valida aderência à Portaria GM/MS nº 12.151/2026 e demais atos relacionados, distinguindo requisito obrigatório, recomendação e proposta estadual.

### 4. Agente Financeiro
Recalcula cenários, marca hipóteses, evita tratar potencial de custeio como receita garantida e registra fonte de cada componente.

### 5. Agente de Dados
Valida origem, atualização, qualidade, granularidade, chaves, dicionário e rastreabilidade das bases.

### 6. Agente de Segurança/LGPD
Verifica dados pessoais, segredos, credenciais, exposição de dados nominais e regras de acesso.

### 7. Agente de QA
Executa validações de links, consistência entre documentos, regressões visuais e coerência de números.

### 8. Agente Executivo
Transforma o conteúdo técnico em mensagens decisórias, explicitando: situação, risco, decisão requerida, custo, prazo, responsável e evidência.

## Regras de alteração

- Não inserir números diretamente em múltiplos HTMLs quando puderem vir de `data/`.
- Não alterar premissa financeira sem registrar fonte e data.
- Não declarar requisito da Portaria sem apontar artigo/anexo.
- Não declarar dado epidemiológico como atual sem ano/período.
- Não misturar fato confirmado e proposta de desenho estadual.
- Não inserir dados pessoais ou credenciais.
- Não sobrescrever documento institucional sem preservar changelog.
- Não usar “novo CIATox estadual” como solução padrão; tratar como um dos cenários a comparar.
- Preservar a apresentação web como produto executivo, mas manter dados e regras fora da camada visual.

## Convenção de branches

- `main`: versão institucional estável.
- `v0.2-institucional`: consolidação atual.
- novas funcionalidades: `feat/<nome>`
- correções: `fix/<nome>`
- documentação: `docs/<nome>`

## Critério de pronto

Uma mudança só é considerada pronta quando:

- conteúdo validado;
- números reconciliados;
- fontes registradas;
- links funcionais;
- apresentação sem sobreposição;
- versão móvel minimamente funcional;
- impacto normativo avaliado;
- changelog atualizado;
- commit descritivo.
