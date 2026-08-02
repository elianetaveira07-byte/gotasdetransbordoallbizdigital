import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { AlertTriangle, Phone, Copy, Check, MessageCircle, X } from 'lucide-react';

const NOVO_NUMERO = '(62) 99968-8700';
const NOVO_NUMERO_RAW = '5562999688700';

const AlertaModal = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(NOVO_NUMERO);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback silencioso
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-md sm:max-w-lg border-2 border-yellow-500/60 bg-[#0D1117] p-0 overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.25)]"
        style={{ borderRadius: '1.25rem' }}
      >
        {/* Faixa superior de alerta */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-black animate-attention-shake" />
            <span className="text-black font-bold text-sm tracking-widest uppercase">Atenção</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-black/70 hover:text-black transition-colors"
            aria-label="Fechar alerta"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 pt-6 pb-8">
          <DialogHeader className="text-center sm:text-center mb-5">
            <div className="mx-auto w-16 h-16 rounded-full bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center mb-4 animate-attention-pulse">
              <Phone className="w-8 h-8 text-yellow-400" />
            </div>
            <DialogTitle className="text-2xl sm:text-3xl font-serif font-semibold text-white leading-tight">
              Meu número mudou
            </DialogTitle>
            <DialogDescription className="text-white/60 text-base mt-3 leading-relaxed">
              Se você guardou o número antigo <strong className="text-white/90">(88) 98834-8700</strong>,
              atualize agora. Estou usando este novo número de Goiânia para todos os contatos.
            </DialogDescription>
          </DialogHeader>

          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 text-center mb-5">
            <p className="text-xs font-semibold tracking-widest uppercase text-yellow-400 mb-1">
              Novo WhatsApp válido
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
              {NOVO_NUMERO}
            </p>
            <p className="text-sm text-white/50">Goiânia-GO • disponível agora</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={`https://wa.me/${NOVO_NUMERO_RAW}?text=Ol%C3%A1%20Diego!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-xl transition-all no-underline"
            >
              <MessageCircle className="w-5 h-5" /> Abrir WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 font-semibold px-5 py-3 rounded-xl transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" /> Copiar número
                </>
              )}
            </button>
          </div>

          <p className="text-center text-xs text-white/40 mt-5">
            Desculpe o transtorno. Enviei este link para várias pessoas e a mudança acabou de acontecer.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AlertaModal;
