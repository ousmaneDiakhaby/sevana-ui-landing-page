import {
  Cpu,
  Fingerprint,
  Pencil,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            L'essentiel pour créer des interfaces élégantes et puissantes
          </h2>
          <p>
            Sevana UI est une librairie de composants moderne, pensée pour la productivité des développeurs et la qualité des interfaces. Typée, accessible, performante, et taillée pour les projets ambitieux.
          </p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Zap className="size-4" />
              <h3 className="text-sm font-medium">Performance</h3>
            </div>
            <p className="text-sm">
              Rendu ultra-rapide et composants légers pour des apps toujours réactives.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu className="size-4" />
              <h3 className="text-sm font-medium">Architecture</h3>
            </div>
            <p className="text-sm">
              Conçue avec une logique modulaire, orientée DX, pour une intégration sans friction.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Fingerprint className="size-4" />
              <h3 className="text-sm font-medium">Accessibilité</h3>
            </div>
            <p className="text-sm">
              Chaque composant respecte les standards WCAG pour une inclusivité native.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Pencil className="size-4" />
              <h3 className="text-sm font-medium">Design adaptable</h3>
            </div>
            <p className="text-sm">
              Thématisation complète et surcouche Tailwind pour une personnalisation sans limite.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Settings2 className="size-4" />
              <h3 className="text-sm font-medium">Contrôle total</h3>
            </div>
            <p className="text-sm">
              Props typées, slots dynamiques, logique métier découpée pour un maximum de maîtrise.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4" />
              <h3 className="text-sm font-medium">IA native</h3>
            </div>
            <p className="text-sm">
              Conçue pour accueillir des assistants IA, des agents contextuels ou des automatisations LLM.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}