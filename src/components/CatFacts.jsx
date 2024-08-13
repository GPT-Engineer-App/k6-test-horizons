import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CatFacts = () => {
  const facts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats have a third eyelid called the nictitating membrane."
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fun Cat Facts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {facts.map((fact, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-blue-500">•</span>
              {fact}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default CatFacts;