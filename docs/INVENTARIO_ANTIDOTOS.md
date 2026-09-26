# Inventário Estadual de Antídotos e Soros — especificação inicial

## Objetivo

Permitir visão estadual da disponibilidade, localização, validade e tempo de acesso a antídotos e soros estratégicos.

## Unidade de registro

Uma linha por:

`produto + lote + estabelecimento + data de atualização`

## Campos mínimos

| Campo | Tipo | Obrigatório |
|---|---|---|
| data_atualizacao | data/hora | sim |
| cnes | texto | sim |
| estabelecimento | texto | sim |
| municipio_ibge | texto | sim |
| municipio | texto | sim |
| ers | texto | sim |
| produto | texto | sim |
| principio_ativo | texto | recomendado |
| apresentacao | texto | sim |
| lote | texto | sim |
| validade | data | sim |
| quantidade_disponivel | número | sim |
| quantidade_reservada | número | não |
| estoque_minimo | número | recomendado |
| acesso_24h | booleano | sim |
| responsavel | texto | sim |
| telefone_operacional | texto | sim |
| latitude | número | recomendado |
| longitude | número | recomendado |
| observacao | texto | não |

## Indicadores

- % de itens estratégicos com estoque conhecido;
- % de registros atualizados em até 24/48h;
- lotes vencendo em 30/60/90 dias;
- estabelecimentos com estoque abaixo do mínimo;
- regiões sem cobertura do item;
- tempo estimado de acesso ao antídoto;
- consumo mensal;
- risco de ruptura.

## Alertas

### Vermelho
- estoque zero de item crítico sem alternativa regional;
- item vencido;
- indisponibilidade em região prioritária.

### Laranja
- estoque abaixo do mínimo;
- validade ≤ 30 dias;
- tempo de acesso acima do limite definido.

### Amarelo
- validade ≤ 90 dias;
- atualização atrasada.

## Governança proposta

- Assistência Farmacêutica: custódia e logística;
- CIATox: indicação clínica e priorização;
- ERS: validação territorial;
- CIEVS: eventos/alertas de risco;
- STI/Ciência de Dados: plataforma, integração e auditoria.

## Regra de segurança

O painel público, se existir, não deve expor informação operacional sensível que possa comprometer estoques ou logística. Perfis de acesso deverão ser definidos.
