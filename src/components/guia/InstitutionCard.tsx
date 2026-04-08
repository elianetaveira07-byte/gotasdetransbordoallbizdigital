import { Check } from 'lucide-react';

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
    <div className={`bg-card rounded-lg shadow-guia overflow-hidden mb-9 transition-shadow hover:shadow-guia-lg`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 ${reverse ? '' : ''}`}>
        <div className={`${reverse ? 'md:order-1' : ''}`}>
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto object-contain bg-muted"
          />
        </div>
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
                <Check className="text-guia-green flex-shrink-0 mt-0.5 w-4 h-4" />
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
    </div>
  );
};

export default InstitutionCard;
