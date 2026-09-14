# Conferência de horas · Dedicaciones

Aplicação para conferir a soma de 8 horas em cada dia de segunda a sexta nos PDFs do Dedicaciones. A leitura e o reconhecimento de imagem acontecem no navegador; não há armazenamento dos PDFs no servidor.

## Uso
1. Selecione e confirme o mês dos apontamentos. A data de impressão do PDF não comprova esse período.
2. Importe os PDFs da equipe. O nome do arquivo é usado como nome da pessoa e pode ser editado nos detalhes.
3. Revise os dias e confirme a leitura dos PDFs em imagem comparando com o original.
4. Registre feriados, férias e ausências como exceções. Nenhum feriado é aplicado automaticamente.
5. Exporte o relatório HTML para a gestão; ele abre sem a aplicação e permite imprimir/salvar em PDF. O CSV contém os dias e o JSON guarda a sessão para retomar depois.

Os dados permanecem apenas na memória desta aba. Salve a sessão antes de recarregar ou fechar. Os arquivos exportados contêm informações da equipe. O link da aplicação não compartilha os dados carregados em outro navegador.

## Regras e limites
- Horas decimais somadas em centésimos inteiros: 7,84 + 0,16 = 8.
- Lançamentos em projetos diferentes, inclusive entre páginas, são somados.
- Estados SEM VALIDAR / SIN VISAR não geram divergência de horas.
- Dias ausentes, formato desconhecido, mês incompatível e falhas de leitura exigem revisão; nunca são tratados como zero automaticamente.
- PDFs em imagem exigem confirmação humana. A leitura por colunas atende ao formato de impressão do Dedicaciones; outros layouts podem precisar de ajustes manuais ou nova exportação.
- Até 40 MB e 40 páginas por PDF; até 200 pessoas por sessão. Arquivos protegidos ou ilegíveis precisam ser exportados novamente.
- Finais de semana e exceções são dispensados. Horas identificadas nesses dias continuam visíveis e fazem parte do total identificado.
- Correções manuais alteram apenas a leitura e mantêm o valor original e o motivo. A aplicação não modifica o Dedicaciones.
- A conferência cobre somente os arquivos recebidos; não detecta pessoas da equipe que não enviaram PDF.

## Desenvolvimento
Use Node.js 22.13 ou superior da série 22 e npm. Nesta máquina o Node 24 gerou uma falha no encerramento do build de vinext; o Node 22 concluiu normalmente.

```
npm ci
npm run dev
npm test
npx tsc --noEmit
npm run build
```

A saída estática fica em `dist/client`. O modelo de OCR em inglês é distribuído localmente em `public/vendor`; nenhuma página do PDF é enviada ao serviço que distribui o modelo. Os demais recursos de leitura são sincronizados pelas dependências antes do build.

## Validação
Testes automatizados cobrem total diário/mensal, somas entre páginas, decimais, dias incompletos, OCR pendente, calendário, exceções, ajustes e escape nos relatórios. A versão inicial também foi verificada localmente com nove PDFs reais, incluindo dois em imagem; esses documentos e os dados pessoais de teste não integram o site publicado.
