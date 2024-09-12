import { Separator } from '@/components/ui/separator';
import CVAward from './award';
import CVEducation from './education';
import CVEmployment from './employment';
import CVLinks from './links';
import CVPublication from './publication';

export default function CV() {
  return (
    <main className="flex flex-col justify-center px-10 py-5 space-y-3">
      <section className="flex flex-col items-center justify-center space-y-2">
        <div>
          <h1 className="text-3xl">Henry (Taeksoo) Kwon</h1>
          <span>Fullstack | Korean developer in California.</span>
        </div>
        <CVLinks />
      </section>

      <section>
        <h1>Education</h1>
        <Separator />
        <CVEducation />
      </section>

      <section>
        <h1>Employment</h1>
        <Separator />
        <CVEmployment />
      </section>

      <section>
        <h1>Publication</h1>
        <Separator />
        <CVPublication />
      </section>

      <section>
        <h1>Honors & Awards</h1>
        <Separator />
        <CVAward />
      </section>
    </main>
  );
}
