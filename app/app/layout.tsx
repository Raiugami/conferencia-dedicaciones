import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Conferência de horas | Dedicaciones', description: 'Confira os apontamentos diários da equipe a partir dos PDFs do Dedicaciones.' };
export default function RootLayout({children}: {children: React.ReactNode}) { return <html lang="pt-BR"><body>{children}</body></html>; }
