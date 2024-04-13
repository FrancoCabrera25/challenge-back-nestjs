interface FixtureData {
  categories: FixtureCategoriesData[];
  products: FixtureProductData[];
}

interface FixtureCategoriesData {
  name: string;
  description: string;
  active?: boolean;
}
interface FixtureProductData {
  code: string;
  name: string;
  price: number;
  size: 'SMALL' | 'MEDIUM' | 'LARGE' | 'EXTRA_LARGE';
}
export const INITIAL_DATA: FixtureData = {
  categories: [
    {
      name: 'Categoria 1',
      description: 'Esta es la categoria 1 del challenge',
      active: true,
    },
    {
      name: 'Categoria 2',
      description: 'Esta es la categoria 2 del challenge',
      active: true,
    },
    {
      name: 'Categoria 3',
      description: 'Esta es la categoria 3 del challenge',
      active: false,
    },
  ],
  products: [
    {
      name: 'Jean Navy Straight Mujer Desiderata',
      code: 'J-255-NAVY',
      price: 45582,
      size: 'LARGE',
    },
    {
      name: 'Jean Straight Boot Mujer Portsaid',
      code: 'J-255-Stra',
      price: 44086,
      size: 'SMALL',
    },
    {
      name: 'Jean Navy Straight Mujer Desiderata',
      code: 'J-2595-NAVY',
      price: 45582,
      size: 'LARGE',
    },
    {
      name: 'Sobretodo Minsk, De Hombre, Vestir, Lana, Militar, Equus',
      code: 'S-025-NAVY',
      price: 190000,
      size: 'LARGE',
    },
    {
      name: 'Campera adidas Varilite En Negro Hombre ',
      code: 'SC-025-NAVY',
      price: 173052,
      size: 'EXTRA_LARGE',
    },
    {
      name: 'Campera Deportiva Hombre C/capucha Elastizada Reflectivo ',
      code: 'SC-282-POT',
      price: 39070,
      size: 'MEDIUM',
    },
    {
      name: 'Remera Unisex Lacoste Th114722001 Algodón Estampada',
      code: 'SC-698-POT',
      price: 59000,
      size: 'LARGE',
    },
    {
      name: 'Remera Hombre Columbia Inc',
      code: 'SC-048-POT',
      price: 40000,
      size: 'EXTRA_LARGE',
    },
    {
      name: 'Remera Taverniti Mangas Cortas Clásica',
      code: 'SCF-789-POT',
      price: 25000,
      size: 'MEDIUM',
    },
    {
      name: 'Remera Lisa Taverniti Mangas Largas',
      code: 'SCF-000-POT',
      price: 35000,
      size: 'SMALL',
    },
    {
      name: 'Remeras Lisas Algodón Mangas Largass',
      code: 'SCF-001-POT',
      price: 25000,
      size: 'SMALL',
    },
    {
      name: 'Buzo Cuello Redondo Liso Frisa Peinada Premium Setum',
      code: 'RTG-001-POT',
      price: 58000,
      size: 'LARGE',
    },
    {
      name: 'Buzo Cuello Redondo Vs Colores',
      code: 'RTG-0025-POT',
      price: 20000,
      size: 'EXTRA_LARGE',
    },
    {
      name: 'Buzo Canguro Capucha Hombre Slim Fit Hoodie Camperas',
      code: 'UJK-0025-POT',
      price: 28000,
      size: 'MEDIUM',
    },
    {
      name: 'Buzo Canguro Capucha Gdo 24/7 Hombre Slim Fit Hoodie Premium',
      code: 'UJK-6982-POT',
      price: 15000,
      size: 'MEDIUM',
    },
    {
      name: 'Buzo Canguro Capucha Hombre Gdo Lines Hoodie Camperas',
      code: 'UIP-6982-POT',
      price: 19500,
      size: 'MEDIUM',
    },
    {
      name: 'Buzo Hombre Nuevo Con Capucha Lanilla Comodo Casual ',
      code: 'UIP-025-JUP',
      price: 25120,
      size: 'SMALL',
    },
    {
      name: 'Buzo Hombre Hoodie Con Capucha Nuevo Casual Comodo ',
      code: 'UIP-123-JPP',
      price: 25120,
      size: 'SMALL',
    },
  ],
};
