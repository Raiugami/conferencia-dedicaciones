# Continuidade do projeto

## Objetivo e escopo
Facilitar o fechamento mensal: conferir se cada pessoa tem 8 horas por dia útil no Dedicaciones a partir dos PDFs exportados. O Jira é conferido separadamente no próprio Jira e está fora do escopo. A aplicação é compartilhável com a gestão e não altera apontamentos no sistema original.

Site: https://raiugami.github.io/conferencia-dedicaciones/

## Decisões já tomadas
O mês deve ser selecionado e confirmado: data de impressão não comprova o período. A pessoa é identificada inicialmente pelo nome do arquivo, com edição manual. Metadados de impressão não são identidade confiável. Dias de segunda a sexta esperam 8 horas; feriados, férias e ausências exigem exceções cadastradas, sem calendário automático. Some lançamentos entre projetos e páginas em centésimos de hora. Estados SEM VALIDAR/SIN VISAR não representam falta de horas.

PDFs em imagem usam OCR e exigem revisão humana. Dias não encontrados e formatos desconhecidos ficam pendentes. Correções manuais preservam original e justificativa. Arquivos repetidos são identificados por hash. Os limites atuais são 40 MB, 40 páginas por PDF e 200 pessoas. Leia o código para detalhes de validação e nomes duplicados.

## Recursos existentes
Importação múltipla, resumo por pessoa, calendário diário, evidências da leitura, correções justificadas, exceções por pessoa/equipe, CSV detalhado, relatório HTML para gestão e sessão JSON para salvar e retomar. O HTML pode ser impresso como PDF. A sessão fica em memória; fechar/recarregar perde dados não exportados. Compartilhar o link não compartilha os dados da sessão.

## Mapa do código
- app/app/page.tsx: interface e estado da sessão.
- app/app/globals.css: estilos e paleta.
- app/lib/audit.ts: tipos, calendário, interpretação, validação e cálculos.
- app/lib/pdf-reader.ts: PDF.js e coordenação da leitura/OCR.
- app/lib/ocr.ts: reconhecimento de imagem.
- app/lib/export.ts: relatórios e arquivos de saída.
- app/lib/asset-path.ts: prefixo de recursos para hospedagem.
- app/scripts/prepare-assets.mjs: recursos locais PDF/OCR e verificação do modelo.
- app/scripts/prepare-pages.mjs: caminhos estáticos para GitHub Pages.
- app/tests/audit.test.ts: testes sintéticos das regras.
- .github/workflows/pages.yml: testes, geração e publicação.

## Desenvolvimento e publicação
Na pasta app/, com Node.js 22: npm ci, npm run dev. Para validar: npm test e npx tsc --noEmit. Para o Pages, defina NEXT_PUBLIC_BASE_PATH=/conferencia-dedicaciones, execute npm run build e node scripts/prepare-pages.mjs. A saída publicada é app/dist/client. Em PowerShell, defina a variável com $env:NEXT_PUBLIC_BASE_PATH='/conferencia-dedicaciones'; em bash, use export NEXT_PUBLIC_BASE_PATH=/conferencia-dedicaciones.

O prebuild prepara workers, WASM e modelo OCR; o modelo é baixado no build com SHA-256 verificado. Nenhum PDF é transmitido para o serviço do modelo. Não versione node_modules, dist, public/vendor ou documentos da equipe. Use o lockfile. A exportação com basePath do Vinext apresentou problema de prerender nesta versão; preserve o preparo explícito dos caminhos até validar uma alternativa.

A referência visual aprovada é o site oficial da Minsait: vinho #480e2a, vinho escuro #260717, rosa #ff0054 e neutros #e3e2da/#f1f1ed. Fontes e logos estão em app/public/brand, com fontes de origem em SOURCES.txt.

## Verificação e limites
A versão publicada inicialmente passou em 11 testes automatizados e na geração estática. Houve conferência local de PDFs de texto e imagem; documentos reais não estão no repositório. Isso não garante reconhecimento correto de todo novo layout. Para mudanças no leitor, use PDFs sintéticos e confira visualmente o resultado, inclusive OCR e somas entre páginas. Não converta ausência de evidência em aprovação.

## Como retomar no Copilot
Selecione este repositório como contexto e peça: Leia .github/copilot-instructions.md, docs/CONTINUIDADE.md e app/README.md. Depois implemente a alteração que vou descrever, preserve as regras de conferência e processamento local e valide os testes e o build.

O histórico da conversa não é transferido ao Copilot; este documento registra as decisões relevantes. Não há nova funcionalidade pendente definida: aguarde a próxima solicitação do usuário.
