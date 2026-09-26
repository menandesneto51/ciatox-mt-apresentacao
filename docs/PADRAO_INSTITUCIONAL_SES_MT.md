# Padrão institucional SES-MT — documentos CIATox-MT

## Objetivo

Garantir identidade visual, linguagem administrativa, rastreabilidade e consistência entre apresentação, notas técnicas, projetos, relatórios e minutas.

## 1. Identidade institucional

Cabeçalho preferencial:
- Governo de Mato Grosso;
- Secretaria de Estado de Saúde;
- unidade responsável;
- CIEVS-MT quando proponente/coordenador técnico.

Usar somente logomarcas institucionais oficiais armazenadas em `assets/`.

## 2. Cores

Manter o padrão já utilizado no repositório:
- azul institucional;
- azul escuro/navy;
- fundo branco;
- laranja apenas como destaque;
- alto contraste disponível nas interfaces digitais.

Evitar paletas decorativas não institucionais.

## 3. Tipografia

Priorizar:
1. Uni Neue, quando institucionalmente disponível;
2. Segoe UI;
3. Calibri;
4. Arial.

Não incorporar arquivos de fonte ao repositório sem licença institucional clara.

## 4. Estrutura de notas técnicas

1. identificação;
2. assunto;
3. destinatário;
4. síntese executiva;
5. contextualização;
6. fundamentação legal/normativa;
7. situação epidemiológica/assistencial;
8. análise técnica;
9. alternativas;
10. impacto financeiro;
11. riscos;
12. encaminhamentos;
13. decisão requerida;
14. referências;
15. responsáveis técnicos e versão.

## 5. Linguagem

Usar linguagem:
- objetiva;
- impessoal;
- técnica;
- verificável;
- sem afirmações não comprovadas.

Preferir:
- “propõe-se”;
- “recomenda-se avaliar”;
- “recurso potencial”;
- “condicionado à habilitação”;
- “a validar”;
- “conforme evidência documental”.

Evitar:
- “garantido” quando depender de habilitação;
- “economia” sem estudo;
- “vai reduzir” sem evidência;
- “será criado” antes de decisão formal.

## 6. Controle de versão

Todo documento deve indicar:
- título;
- versão;
- data;
- status: minuta / em validação / aprovado;
- unidade responsável.

Exemplo:

```text
Versão: 0.2
Data: 26/09/2026
Status: MINUTA PARA VALIDAÇÃO
Unidade: CIEVS-MT / SES-MT
```

## 7. Evidências

Cada número deve possuir fonte e data.

Dados epidemiológicos:
- período;
- território;
- sistema/fonte;
- data de extração.

Dados financeiros:
- norma;
- fórmula;
- premissas;
- arredondamento;
- ressalva sobre disponibilidade orçamentária.

## 8. Documentos executivos

Apresentações ao Gabinete:
- máximo de uma mensagem central por slide;
- títulos conclusivos;
- fontes visíveis;
- evitar excesso de texto;
- decisão requerida no último bloco.

## 9. Acessibilidade

Produtos web:
- contraste adequado;
- navegação por teclado;
- textos alternativos;
- escalabilidade;
- impressão legível.

Documentos:
- títulos hierárquicos;
- tabelas com cabeçalho;
- siglas explicadas na primeira ocorrência.

## 10. Compatibilidade

Apresentações devem ser mantidas em:
- PPTX validado;
- PDF;
- versão web quando aplicável.

Documentos formais:
- DOCX;
- PDF;
- fonte editável no repositório.

## 11. Regra para produção pelo Cursor

Toda alteração deve preservar este padrão, atualizar `CHANGELOG.md` e evitar duplicação de números entre arquivos quando puderem ser centralizados em fonte única.
