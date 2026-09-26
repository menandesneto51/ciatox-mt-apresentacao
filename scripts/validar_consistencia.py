from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]

ERROS = []

def erro(msg: str) -> None:
    ERROS.append(msg)

def ler(rel: str) -> str:
    p = ROOT / rel
    if not p.exists():
        erro(f"Arquivo ausente: {rel}")
        return ""
    return p.read_text(encoding="utf-8")

htmls = ["index.html", "nota-tecnica.html", "documento.html"]

for rel in htmls:
    texto = ler(rel)
    if "3.950.330" not in texto:
        erro(f"{rel}: população IBGE 2026 não encontrada")
    if "3.893.659" in texto:
        erro(f"{rel}: permanece população 2025 antiga (3.893.659)")
    if "Dados populacionais: IBGE, estimativa 2025." in texto:
        erro(f"{rel}: referência populacional 2025 permanece no aviso")

premissas = ler("data/premissas.yaml")
if "valor: 3950330" not in premissas:
    erro("data/premissas.yaml: população canônica divergente")
if 'ano: 2026' not in premissas:
    erro("data/premissas.yaml: ano da população divergente")

fin = ler("data/financiamento.yaml")
esperados = [
    "146325.53",
    "43897.66",
    "25412.67",
    "17742.78",
    "233378.64",
    "2800543.68",
]
for valor in esperados:
    if valor not in fin:
        erro(f"data/financiamento.yaml: valor esperado ausente: {valor}")

# Valida links/recursos locais simples.
for rel in htmls:
    texto = ler(rel)
    for alvo in re.findall(r'(?:href|src)="([^"]+)"', texto):
        if (
            alvo.startswith(("http://", "https://", "#", "mailto:", "tel:", "javascript:"))
            or not alvo
        ):
            continue
        caminho = alvo.split("#", 1)[0].split("?", 1)[0]
        if not caminho:
            continue
        if not (ROOT / caminho).exists():
            erro(f"{rel}: recurso local ausente: {alvo}")

if ERROS:
    print("VALIDAÇÃO FALHOU")
    for item in ERROS:
        print(f"- {item}")
    sys.exit(1)

print("VALIDAÇÃO OK")
print("- população IBGE 2026 reconciliada")
print("- premissas canônicas presentes")
print("- memória financeira mínima presente")
print("- recursos locais referenciados encontrados")
