import { useState } from 'react';
import { AlertTriangle, Phone, Copy, Check, MessageCircle, X } from 'lucide-react';

const NOVO_NUMERO = '(62) 99968-8700';
const NOVO_NUMERO_RAW = '5562999688700';

const AlertaBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(NOVO_NUMERO);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // fallback silencioso
    }
  };

  if (dismissed) return null;

  return (
    <div className="animate-attention-slide-down sticky top-[57px] md:top-[61px] z-40 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black shadow-lg">
      <div className="container py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-start md:items-center gap-3">
            <div className="mt-0.5 md:mt-0 flex-shrink-0 w-9 h-9 rounded-full bg-black/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-black animate-attention-shake" />
            </div>
            <div>
              <p className="font-bold text-sm md:text-base leading-tight">
                Número atualizado: <span className="font-black">{NOVO_NUMERO}</span>
              </p>
              <p className="text-xs md:text-sm text-black/75 leading-snug">
                O antigo (88) 98834-8700 não é mais válido. Se você guardou, atualize para o novo de Goiânia.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pl-12 md:pl-0 flex-wrap">
            <a
              href={`https://wa.me/${NOVO_NUMERO_RAW}?text=Ol%C3%A1%20Diego!`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-black text-yellow-400 hover:bg-black/80 text-xs font-bold px-3 py-2 rounded-full transition-colors no-underline"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 bg-black/10 hover:bg-black/20 text-black text-xs font-bold px-3 py-2 rounded-full transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copiado
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copiar
                </>
              )}
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="p-1.5 rounded-full hover:bg-black/10 text-black/70 hover:text-black transition-colors"
              aria-label="Fechar aviso"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertaBanner;
