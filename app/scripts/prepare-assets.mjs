import {copyFileSync,mkdirSync,readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
mkdirSync('public/vendor',{recursive:true});
for(const [from,to] of [['pdfjs-dist/build/pdf.worker.min.mjs','pdf.worker.min.mjs'],['tesseract.js/dist/worker.min.js','worker.min.js'],['tesseract.js-core/tesseract-core-lstm.wasm.js','tesseract-core-lstm.wasm.js'],['tesseract.js-core/tesseract-core-lstm.wasm','tesseract-core-lstm.wasm'],['pdfjs-dist/LICENSE','PDFJS-LICENSE.txt'],['tesseract.js/LICENSE.md','TESSERACT-LICENSE.txt']])copyFileSync('node_modules/'+from,'public/vendor/'+to);
const model='public/vendor/eng.traineddata.gz';
const expected='ed350f3752f81ee8f38769edc14d92d997dababe23b565c59879372cc46a2468';
let bytes;
if(existsSync(model))bytes=readFileSync(model);
else {const response=await fetch('https://tessdata.projectnaptha.com/4.0.0/eng.traineddata.gz',{signal:AbortSignal.timeout(60000)});if(!response.ok)throw new Error('Não foi possível obter o modelo de OCR.');bytes=Buffer.from(await response.arrayBuffer());}
if(createHash('sha256').update(bytes).digest('hex')!==expected)throw new Error('O modelo de OCR não corresponde à versão verificada.');
if(!existsSync(model))writeFileSync(model,bytes);
