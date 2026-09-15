# Conferência Dedicaciones

Aplicação web estática para conferir a jornada diária de **8 horas em dias úteis** a partir dos PDFs exportados do Dedicaciones, com leitura local no navegador e relatório para gestão.

<p align="center">
  <a href="https://raiugami.github.io/conferencia-dedicaciones/">
    <strong>Abrir aplicação</strong>
  </a>
  ·
  <a href="app/README.md">
    Documentação de desenvolvimento
  </a>
</p>

<p align="center">
  <a href="https://github.com/Raiugami/conferencia-dedicaciones/actions/workflows/pages.yml">
    <img src="https://github.com/Raiugami/conferencia-dedicaciones/actions/workflows/pages.yml/badge.svg" alt="Status do build e publicação">
  </a>
</p>

## Visão geral

O Dedicaciones registra horas em projetos e páginas que podem aparecer em mais de um PDF. Esta aplicação reúne essas informações, soma os lançamentos por pessoa e dia e sinaliza o que precisa de revisão, sem alterar os documentos originais nem enviar dados da equipe para um servidor.

O fluxo foi pensado para o fechamento mensal:

1. confirmar o mês da conferência;
2. importar os PDFs da equipe;
3. revisar a leitura, especialmente documentos processados por OCR;
4. cadastrar feriados, férias e outras exceções justificadas;
5. analisar divergências e exportar o relatório.

## Recursos

- importação múltipla de PDFs;
- leitura de PDFs de texto e OCR de páginas em imagem;
- soma de lançamentos entre projetos e páginas;
- conferência diária e mensal por pessoa;
- calendário de dias úteis e sugestões de feriados nacionais;
- exceções para feriados, férias e ausências justificadas;
- confirmação humana para leituras por OCR e dados duvidosos;
- correções manuais com preservação do valor original e da justificativa;
- detecção de arquivos repetidos por hash;
- importação local de exportações do Jira (`.csv`, `.xls` e `.xlsx`);
- relatório HTML, CSV detalhado e sessão JSON para continuar depois.

## Regras importantes

- A meta é de **8 horas por dia útil**.
- As horas decimais são somadas em centésimos: `7,84 + 0,16 = 8`.
- Lançamentos em projetos diferentes e em páginas diferentes são somados.
- `SEM VALIDAR` e `SIN VISAR` não são tratados como divergência de horas.
- Dias ausentes, formatos desconhecidos e leituras duvidosas exigem revisão.
- OCR nunca resulta em aprovação automática: a leitura precisa ser confirmada.
- Feriados, férias e ausências só dispensam o dia depois de uma exceção ser registrada.
- A data de impressão do PDF não confirma o mês dos apontamentos.
- A comparação com o Jira é informativa e não justifica automaticamente uma falta no Dedicaciones.

## Privacidade

O processamento dos PDFs, a extração de texto e o OCR acontecem no navegador. PDFs, texto extraído, sessões e dados da equipe não são enviados ao GitHub, a serviços de telemetria ou a serviços de inteligência artificial.

Os dados da sessão ficam apenas na memória da aba. Exporte a sessão JSON antes de fechar ou recarregar a página.

## Uso local

Requisitos:

- Node.js `22.13` ou superior da série 22;
- npm.

```bash
cd app
npm ci
npm run dev
