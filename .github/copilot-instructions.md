# Instruções para o Copilot

Responda em português do Brasil. Leia docs/CONTINUIDADE.md e app/README.md antes de alterar o projeto.

- O código editável está em app/. Use Node.js 22 e execute os comandos npm nessa pasta.
- Este é um site estático React/TypeScript com Vinext, publicado no GitHub Pages. Preserve a exportação estática e o caminho /conferencia-dedicaciones/.
- Processe PDFs e OCR apenas no navegador. Não envie PDFs, texto extraído ou sessões da equipe para servidores, telemetria ou serviços de IA. Não inclua dados reais no repositório ou testes.
- Compare a soma diária com 8 horas nos dias úteis. Use centésimos inteiros: 7,84 + 0,16 = 8. Não interprete horas decimais como horas e minutos.
- Some projetos e páginas. Não considere SEM VALIDAR/SIN VISAR uma divergência de horas.
- Dias ausentes, formatos desconhecidos e leitura duvidosa exigem revisão, nunca aprovação automática. OCR exige confirmação humana.
- Preserve confirmação do mês, exceções justificadas, correções com valor original e motivo, e validação das sessões JSON.
- Preserve escape de HTML e proteção contra fórmulas em CSV. O nome vem do arquivo e pode ser corrigido; metadados não comprovam identidade.
- Mantenha textos em português, acessibilidade e a paleta Minsait existente. Recursos de leitura devem usar assetPath.
- Para alterações de lógica, ajuste testes com dados sintéticos. Valide npm test, npx tsc --noEmit, npm run build e node scripts/prepare-pages.mjs com NEXT_PUBLIC_BASE_PATH=/conferencia-dedicaciones.
- Não edite dist/client ou public/vendor diretamente: são gerados. Não reintroduza application.tar.gz como fonte de desenvolvimento.
- Alterações em main publicam automaticamente; prefira alterações revisáveis em pull requests para trabalho futuro.
