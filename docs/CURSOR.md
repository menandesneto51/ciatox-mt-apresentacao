# Regras de trabalho no Cursor — CIATox-MT

## Regra principal

O Cursor é o ambiente padrão de implementação e continuidade técnica deste projeto.

Antes de alterar qualquer arquivo:
1. ler `README.md`;
2. ler `docs/BASE_LEGAL_E_NORMATIVA.md`;
3. ler `docs/MATRIZ_HABILITACAO_CIATOX.md`;
4. ler `docs/PADRAO_INSTITUCIONAL_SES_MT.md`;
5. revisar `CHANGELOG.md`.

## Não fazer

- não inventar dados;
- não assumir habilitação federal;
- não tratar estimativas como recursos disponíveis;
- não retirar ressalvas institucionais;
- não criar um novo CIATox como decisão já tomada;
- não substituir logomarcas oficiais;
- não inserir segredos, credenciais ou dados pessoais;
- não colocar dados nominais de pacientes no GitHub;
- não alterar números financeiros sem recalcular todas as saídas.

## Atualizações obrigatórias

Quando mudar:
- população;
- valores da Portaria;
- número de ERS;
- número de municípios;
- requisitos de habilitação;
- cronograma;
- governança;

atualizar:
- fonte de verdade;
- HTML;
- documentos;
- apresentação;
- CHANGELOG.

## Meta de arquitetura

Migrar gradualmente números repetidos para arquivos estruturados em `data/`, de modo que apresentação, nota técnica e projeto sejam gerados ou validados a partir da mesma fonte.

## Testes mínimos

Após alterações web:
- abrir `index.html`;
- testar 16 slides;
- testar setas;
- testar tela cheia;
- testar impressão;
- testar versão móvel;
- validar links.

Após alteração de PPTX:
- abrir o PPTX;
- verificar fontes;
- verificar sobreposições;
- exportar PDF;
- comparar visualmente.

Após alteração normativa:
- registrar fonte;
- registrar data de consulta;
- atualizar matriz;
- atualizar CHANGELOG.
