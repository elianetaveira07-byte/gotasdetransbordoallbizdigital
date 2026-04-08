interface InstitutionCardProps {
  image: string;
  imageAlt: string;
  badge: string;
  badgeColor: 'blue' | 'green' | 'amber';
  title: string;
  subtitle?: string;
  paragraphs: string[];
  features: string[];
  contact?: React.ReactNode;
  reverse?: boolean;
}

const badgeClasses = {
  blue: 'bg-guia-blue-light text-primary',
  green: 'bg-guia-green-light text-guia-green',
  amber: 'bg-guia-amber-light text-guia-amber',
};

const InstitutionCard = ({ image, imageAlt, badge, badgeColor, title, subtitle, paragraphs, features, contact, reverse }: InstitutionCardProps) => {
  return (
    <div className={`bg-card rounded-lg shadow-guia overflow-hidden mb-9 grid grid-cols-1 md:grid-cols-[340px_1fr] transition-shadow hover:shadow-guia-lg ${reverse ? 'md:grid-cols-[1fr_340px]' : ''}`}>
      <img
        src={image}
        alt={imageAlt}
        className={`h-[220px] md:h-[320px] object-cover w-full ${reverse ? 'md:order-1' : ''}`}
      />
      <div className="p-10 flex flex-col justify-center">
        <span className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full mb-4 w-fit ${badgeClasses[badgeColor]}`}>
          {badge}
        </span>
        <h2 className="font-serif text-2xl font-semibold text-foreground leading-tight mb-3">{title}</h2>
        {subtitle && <p className="text-sm font-semibold text-guia-text-muted mb-4 uppercase tracking-wider">{subtitle}</p>}
        {paragraphs.map((p, i) => (
          <p key={i} className="text-[0.95rem] text-guia-text-muted mb-3.5 leading-[1.7]" dangerouslySetInnerHTML={{ __html: p }} />
        ))}
        <ul className="mt-2.5 flex flex-col gap-2">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2.5 items-start text-sm">
              <span className="text-guia-green font-bold flex-shrink-0 mt-0.5">✓</span>
              {f}
            </li>
          ))}
        </ul>
        {contact && (
          <div className="mt-5 pt-5 border-t border-border">
            {contact}
          </div>
        )}
      </div>
    </div>
  );
};

export default InstitutionCard;
