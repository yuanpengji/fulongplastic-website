import { company, Locale } from "@/lib/content";

type SocialLink = {
  label: string;
  href: string;
  ariaLabel: string;
  icon: "linkedin" | "facebook" | "whatsapp";
};

const iconClass = "h-4 w-4";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "linkedin") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.31 8.01h4.38V23H.31V8.01ZM8.13 8.01h4.2v2.05h.06c.58-1.1 2.01-2.26 4.14-2.26 4.43 0 5.25 2.92 5.25 6.71V23h-4.38v-7.52c0-1.79-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V23H8.13V8.01Z" />
      </svg>
    );
  }

  if (icon === "facebook") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={iconClass} fill="currentColor">
      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.11 0C5.55 0 .21 5.34.21 11.9c0 2.1.55 4.15 1.59 5.96L.11 24l6.29-1.65a11.88 11.88 0 0 0 5.7 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.49-8.42Zm-8.41 18.31a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 6.99c0 5.46-4.44 9.89-9.9 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" />
    </svg>
  );
}

function getSocialLinks(locale: Locale): SocialLink[] {
  return [
    {
      label: "LinkedIn",
      href: company.social.linkedin,
      ariaLabel: "Fulong Plastic LinkedIn",
      icon: "linkedin"
    },
    {
      label: "Facebook",
      href: company.social.facebook,
      ariaLabel: "Fulong Plastic Facebook",
      icon: "facebook"
    },
    {
      label: locale === "zh" ? "WhatsApp 联系我们" : "Chat with us on WhatsApp",
      href: company.social.whatsapp,
      ariaLabel: "Contact Fulong Plastic on WhatsApp",
      icon: "whatsapp"
    }
  ];
}

export function SocialLinks({ locale, showLabels = false }: { locale: Locale; showLabels?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {getSocialLinks(locale).map((link) => (
        <a
          key={link.icon}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="inline-flex items-center gap-2 rounded border border-line px-3 py-2 text-sm text-slate-200 transition hover:border-mint hover:text-mint"
        >
          <SocialIcon icon={link.icon} />
          {showLabels ? <span>{link.label}</span> : <span className="sr-only">{link.label}</span>}
        </a>
      ))}
    </div>
  );
}
