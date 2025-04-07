import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const TravelArtApp = () => {
  const [selectedTab, setSelectedTab] = useState('home');
  const [premiumUser, setPremiumUser] = useState(false);

  const handleStyleTransform = (style) => {
    if (!premiumUser && ['Renaissance', 'Surrealism', 'Islamic Art'].includes(style)) {
      alert('This style is only available for Premium Users. Please upgrade.');
    } else {
      alert(`Applying ${style} style transformation.`);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">Travel Art App</h1>
      <Tabs value={selectedTab} onValueChange={setSelectedTab}>
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="style">Style Transform</TabsTrigger>
        </TabsList>

        <TabsContent value="style">
          <Card className="p-4">
            <CardContent>
              <Input type="file" className="mt-2 mb-2" />
              <div className="mt-4 flex justify-around">
                <Button onClick={() => handleStyleTransform('Watercolor')}>Watercolor</Button>
                <Button onClick={() => handleStyleTransform('Renaissance')}>Renaissance</Button>
                <Button onClick={() => handleStyleTransform('Surrealism')}>Surrealism</Button>
                <Button onClick={() => handleStyleTransform('Islamic Art')}>Islamic Art</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TravelArtApp;