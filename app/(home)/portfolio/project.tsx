import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({
  project,
}: {
  project: {
    name: string;
    date: string;
    description: string;
    image: string;
    url?: string;
    code?: string;
  };
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.date}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-3">
          <Image
            src={project.image}
            alt={project.name}
            width={400}
            height={200}
            className="object-cover border rounded-lg shadow-lg"
          />
          <span>{project.description}</span>
        </div>
      </CardContent>
      <CardFooter className="space-x-3">
        {project.url && (
          <Link href={project.url}>
            <Button>Visit</Button>
          </Link>
        )}
        {project.code && (
          <Link href={project.code}>
            <Button variant="secondary">Github</Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
