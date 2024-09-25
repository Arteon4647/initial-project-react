import { useState } from "react";
import { CarCard } from "./CarCard";
import "../styles/Cars.css";

export const Cars = () => {
  const allCars: string[] = ["Tesla Model X", "Nissan Rogue", "Kia Ceed"];

  const [cars, setCars] = useState<string[]>([]);

  const addCar = (car: string) => {
    setCars([...cars, car]);
  };

  const removeCar = (car: string) => {
    setCars(cars.filter((carName) => carName !== car));
  };

  const clearCars = () => setCars([]);

  return (
    <div className="cars-component">
      <h1>Cars</h1>

      {cars.map((car, index) => (
        <CarCard
          key={`${car} - ${index}`}
          car={car}
          index={index}
          removeCar={removeCar}
        />
      ))}

      <div style={{ display: "flex" }}>
        {allCars.map((car) => (
          <button key={car} onClick={() => addCar(car)}>
            {car}
          </button>
        ))}
      </div>
      <button onClick={clearCars}>Clear Cars</button>
    </div>
  );
};
