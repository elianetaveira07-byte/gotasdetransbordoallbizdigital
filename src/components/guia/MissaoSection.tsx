import { Target, TrendingUp, GraduationCap, Award, Building2, Heart, MapPin, Briefcase } from 'lucide-react';

const conquistas = [
  { icon: GraduationCap, title: 'Certificado ESPM', desc: 'Marketing Digital Avançado — 5 meses de curso com projetos práticos. Uma das credenciais mais respeitadas do Brasil.' },
  { icon: Award, title: 'Certificações Google & Meta', desc: 'Google Ads (Search, Display, Video, Analytics) e Meta Blueprint. Reconhecidas globalmente.' },
  { icon: TrendingUp, title: 'Placa 100K — DeliveryAds', desc: 'R$100.000 em faturamento gerado via anúncios para cliente real — comprovado no gerenciador, ao vivo.' },
  { icon: Briefcase, title: 'ALLBIZ DIGITAL', desc: 'Agência especializada em food service — com cases, selos de parceiro e credencial ESPM.' },
];

const MissaoSection = () => {
  return (
    <section id="missao" className="py-[72px]" style={{ background: 'linear-gradient(135deg, rgba(15,38,96,0.04) 0%, transparent 50%, rgba(43,108,176,0.04) 100%)' }}>
      <div className="container">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary bg-guia-blue-light inline-block px-3.5 py-1.5 rounded-full mb-3.5">A missão por trás</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Por que eu estou me <span className="text-primary">dedicando tanto</span>
          </h2>
        </div>

        {/* Manifesto */}
        <div className="bg-card rounded-lg p-8 md:p-10 shadow-guia border-l-[5px] border-primary mb-10">
          <p className="text-base leading-[1.75] mb-4">
            Eu sou <strong>Diego Allas</strong>. Estou isolado na Chapada do Araripe, num sítio no topo da Serra, estudando 12 horas por dia. Não porque é romântico — mas porque sem distração, sem cidade, sem movimento, só sobra o essencial: <strong>aprender, construir, executar</strong>.
          </p>
          <p className="text-base leading-[1.75] mb-4">
            Goiânia não é só o melhor lugar para o Matheuzinho — é também o <strong>segundo maior hub de food delivery do Centro-Oeste</strong>, com crescimento de 300% em hamburguerias nos últimos 3 anos. Um consumidor exigente, que usa apps, busca no Google e lê avaliações. É o mercado perfeito para a ALLBIZ DIGITAL.
          </p>
          <p className="text-base leading-[1.75]">
            Enquanto outros vendem promessa de resultado rápido, eu escolhi construir algo sólido: <strong>credencial real, case real, dados reais</strong>. Cada restaurante que cresce, cada conquista documentada — tudo faz parte dessa missão que une família e trabalho.
          </p>
        </div>

        {/* O que estou construindo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {conquistas.map((c, i) => (
            <div key={i} className="bg-card rounded-lg p-7 shadow-guia transition-all hover:-translate-y-1 hover:shadow-guia-lg">
              <div className="w-12 h-12 rounded-xl bg-guia-blue-light flex items-center justify-center mb-3.5">
                <c.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">{c.title}</h3>
              <p className="text-sm text-guia-text-muted">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Os dois motivos */}
        <div className="rounded-lg p-8 md:p-[52px] text-white" style={{ background: 'linear-gradient(135deg, hsl(222,67%,32%) 0%, #2B6CB0 100%)' }}>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 flex items-center gap-3">
            <Target className="w-7 h-7" /> Goiânia une tudo que eu preciso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="w-6 h-6 text-red-400" />
                <h4 className="text-lg font-semibold text-yellow-300">Para o Matheuzinho</h4>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-300" /> CRER — melhor centro de reabilitação do país (CER IV)</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-300" /> Crer em Casa — equipe completa 2-3x por semana</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-300" /> Hospital das Clínicas, Pestalozzi, CREAS</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-yellow-300" /> Tudo 100% gratuito pelo SUS</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="w-6 h-6 text-teal-400" />
                <h4 className="text-lg font-semibold text-teal-300">Para a carreira</h4>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-300" /> 2º maior hub de food delivery do Centro-Oeste</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-300" /> Crescimento de 300% em hamburguerias</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-300" /> Consumidor exigente e early adopter</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-teal-300" /> Mercado que valoriza resultado comprovado</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissaoSection;
