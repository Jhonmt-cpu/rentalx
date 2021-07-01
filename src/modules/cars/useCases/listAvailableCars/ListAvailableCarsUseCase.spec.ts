import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepositoyInMemory: CarsRepositoryInMemory;
let listCarsUseCase: ListAvailableCarsUseCase;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoyInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListAvailableCarsUseCase(carsRepositoyInMemory);
  });

  it("shoul be able to list all available cars", async () => {
    const car = await carsRepositoyInMemory.create({
      name: "Car1",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1234",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all availble cars by brand", async () => {
    const car = await carsRepositoyInMemory.create({
      name: "Car2",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1233",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    await carsRepositoyInMemory.create({
      name: "Car3",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1233",
      fine_amount: 40,
      brand: "Car_brand_test_false",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all availble cars by name", async () => {
    const car = await carsRepositoyInMemory.create({
      name: "Car4",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    });

    await carsRepositoyInMemory.create({
      name: "Car5",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({
      name: "Car4",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all availble cars by category", async () => {
    const car = await carsRepositoyInMemory.create({
      name: "Car6",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "12345",
    });

    await carsRepositoyInMemory.create({
      name: "Car7",
      description: "Car description",
      daily_rate: 110,
      license_plate: "DEF-1235",
      fine_amount: 40,
      brand: "Car_brand",
      category_id: "54321",
    });

    const cars = await listCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]);
  });
});
