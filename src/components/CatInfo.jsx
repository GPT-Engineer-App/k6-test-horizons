import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CatInfo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      <Card>
        <CardHeader>
          <CardTitle>About Cats</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Cats are small carnivorous mammals that have been domesticated for thousands of years. Known for their independence, agility, and affectionate nature, cats have become one of the most popular pets worldwide.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Cat Breeds</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5">
            <li>Siamese</li>
            <li>Persian</li>
            <li>Maine Coon</li>
            <li>Bengal</li>
            <li>Scottish Fold</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CatInfo;