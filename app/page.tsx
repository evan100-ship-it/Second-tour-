import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-5 sm:px-10">
        <span className="font-display text-lg font-semibold tracking-tight text-navy">
          Second Tour
        </span>
      </header>

      {/* Hero */}
      <section className="px-6 pt-6 pb-12 sm:px-10 sm:pt-10">
        <div className="mx-auto max-w-xl">
          <h1 className="font-display text-[2.1rem] leading-[1.15] font-semibold text-navy sm:text-5xl">
            Vos clients reviennent tout seuls, même quand vous n&apos;y pensez plus.
          </h1>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-navy/80">
            Un client satisfait ne revient pas parce qu&apos;il oublie, pas parce
            qu&apos;il est déçu. Second Tour garde le contact et le relance
            automatiquement, au bon moment.
          </p>

          <Link
            href="/commencer"
            className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-ember px-6 py-4 text-base font-semibold text-cream shadow-sm transition-colors active:bg-ember-dark sm:w-auto"
          >
            Démarrer — 25&nbsp;€/mois
          </Link>
          <p className="mt-3 text-sm text-navy/60">
            Sans engagement. Annulez en un clic.
          </p>
        </div>
      </section>

      {/* Douleur chiffrée */}
      <section className="border-y border-navy/10 bg-navy px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-xl">
          <p className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            [À remplacer : votre chiffre]
          </p>
          <p className="mt-3 max-w-md text-cream/80">
            C&apos;est la part de vos clients satisfaits qui ne reprennent jamais
            rendez-vous — pas parce qu&apos;ils sont partis ailleurs, mais parce
            que personne ne les a rappelés. Remplacez ce chiffre par une
            estimation tirée de votre propre activité : c&apos;est ce qui
            convaincra le mieux un visiteur qui vous connaît déjà.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="px-6 py-14 sm:px-10">
        <div className="mx-auto max-w-xl space-y-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              Le contact se collecte tout seul
            </h2>
            <p className="mt-2 text-navy/75 leading-relaxed">
              Dès qu&apos;un client vous paie, son numéro ou son email est
              enregistré. Aucune saisie manuelle, aucun fichier à tenir à
              jour.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              La relance part au bon moment
            </h2>
            <p className="mt-2 text-navy/75 leading-relaxed">
              Second Tour connaît le délai naturel entre deux visites dans
              votre métier, et envoie le rappel juste avant que le client
              n&apos;oublie.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-navy">
              Chaque retour est compté
            </h2>
            <p className="mt-2 text-navy/75 leading-relaxed">
              Une offre à usage unique accompagne chaque rappel. Vous voyez
              combien de clients reviennent, et combien de chiffre d&apos;affaires
              cela représente.
            </p>
          </div>
        </div>
      </section>

      {/* CTA de fin */}
      <section className="px-6 pb-16 sm:px-10">
        <div className="mx-auto max-w-xl rounded-xl bg-navy px-6 py-8 text-center">
          <p className="font-display text-xl font-semibold text-cream">
            25&nbsp;€ par mois, ou 1&nbsp;% du chiffre rappelé.
          </p>
          <p className="mt-2 text-cream/75">
            À vous de choisir la formule qui vous convient le mieux.
          </p>
          <Link
            href="/commencer"
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-ember px-6 py-4 text-base font-semibold text-cream shadow-sm transition-colors active:bg-ember-dark sm:w-auto"
          >
            Démarrer maintenant
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy/10 px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-xl flex-wrap gap-x-6 gap-y-2 text-sm text-navy/60">
          <Link href="/mentions-legales" className="hover:text-navy">
            Mentions légales
          </Link>
          <Link href="/cgv" className="hover:text-navy">
            CGV
          </Link>
          <Link href="/confidentialite" className="hover:text-navy">
            Confidentialité
          </Link>
        </div>
      </footer>
    </main>
  );
}
