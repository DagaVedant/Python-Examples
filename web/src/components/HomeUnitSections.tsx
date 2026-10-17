import type { CourseUnit } from '../types/courseInfo';
import {
  Unit1Section,
  Unit2Section,
  Unit3Section,
  Unit4Section,
  Unit5Section,
  Unit6Section,
  Unit7Section,
  Unit8Section,
  Unit9Section,
  Unit10Section,
  Unit11Section,
  Unit12Section,
} from './units';

type Props = {
  units: CourseUnit[];
  completedKeys: readonly string[];
};

function unitByNumber(units: CourseUnit[], n: number): CourseUnit | undefined {
  return units.find((u) => u.number === n);
}

/** Course grid composed from per-unit section components (swarm jobs 16–27). */
export function HomeUnitSections({ units, completedKeys }: Props) {
  const keys = [...completedKeys];

  return (
    <main className="course" id="course">
      <Unit1Section unit={unitByNumber(units, 1)} completedKeys={completedKeys} />
      <Unit2Section unit={unitByNumber(units, 2)} completedKeys={keys} />
      <Unit3Section unit={unitByNumber(units, 3)} completedKeys={keys} />
      <Unit4Section unit={unitByNumber(units, 4)} />
      <Unit5Section unit={unitByNumber(units, 5)} completedKeys={keys} />
      <Unit6Section unit={unitByNumber(units, 6)} completedKeys={keys} />
      <Unit7Section unit={unitByNumber(units, 7)} completedKeys={keys} />
      <Unit8Section unit={unitByNumber(units, 8)} completedKeys={keys} />
      <Unit9Section unit={unitByNumber(units, 9)} completedKeys={completedKeys} />
      <Unit10Section unit={unitByNumber(units, 10)} />
      <Unit11Section unit={unitByNumber(units, 11)} completedKeys={completedKeys} />
      <Unit12Section unit={unitByNumber(units, 12)} />
    </main>
  );
}
