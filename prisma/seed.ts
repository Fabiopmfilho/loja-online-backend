/* eslint-disable @typescript-eslint/no-misused-promises */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed da farmácia...');

  console.log('Antes de deletar:', {
    products: await prisma.product.count(),
    categories: await prisma.category.count(),
    departments: await prisma.department.count(),
  });

  // Deletar dados anteriores
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.department.deleteMany();

  console.log('🧹 Dados antigos removidos');

  // Criar Departments
  const departments = await Promise.all([
    prisma.department.create({
      data: {
        name: 'Medicamentos',
        description: 'Produtos farmacêuticos e medicamentos',
        active: true,
      },
    }),
    prisma.department.create({
      data: {
        name: 'Higiene e Beleza',
        description: 'Produtos de higiene pessoal e beleza',
        active: true,
      },
    }),
    prisma.department.create({
      data: {
        name: 'Suplementos',
        description: 'Vitaminas e suplementos nutricionais',
        active: true,
      },
    }),
    prisma.department.create({
      data: {
        name: 'Bebê e Infantil',
        description: 'Produtos para bebês e crianças',
        active: true,
      },
    }),
    prisma.department.create({
      data: {
        name: 'Equipamentos',
        description: 'Equipamentos médicos e de saúde',
        active: true,
      },
    }),
  ]);

  console.log(`✅ ${departments.length} Departments criados`);

  // Criar Categories
  const categories = await Promise.all([
    // Categories de Medicamentos
    prisma.category.create({
      data: {
        name: 'Analgésicos',
        description: 'Medicamentos para alívio da dor',
        departmentId: departments[0].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Antibióticos',
        description: 'Medicamentos para combater infecções',
        departmentId: departments[0].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Anti-inflamatórios',
        description: 'Medicamentos anti-inflamatórios',
        departmentId: departments[0].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Gripe e Resfriado',
        description: 'Medicamentos para gripe e resfriado',
        departmentId: departments[0].id,
        active: true,
      },
    }),

    // Categories de Higiene e Beleza
    prisma.category.create({
      data: {
        name: 'Cuidados Faciais',
        description: 'Produtos para cuidados com o rosto',
        departmentId: departments[1].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Cuidados Corporais',
        description: 'Produtos para cuidados com o corpo',
        departmentId: departments[1].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Higiene Oral',
        description: 'Produtos para higiene bucal',
        departmentId: departments[1].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Cabelos',
        description: 'Produtos para cuidados capilares',
        departmentId: departments[1].id,
        active: true,
      },
    }),

    // Categories de Suplementos
    prisma.category.create({
      data: {
        name: 'Vitaminas',
        description: 'Complexos vitamínicos',
        departmentId: departments[2].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Proteínas',
        description: 'Suplementos proteicos',
        departmentId: departments[2].id,
        active: true,
      },
    }),

    // Categories Bebê e Infantil
    prisma.category.create({
      data: {
        name: 'Fraldas',
        description: 'Fraldas e produtos para troca',
        departmentId: departments[3].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Alimentação Infantil',
        description: 'Leites e papinhas para bebês',
        departmentId: departments[3].id,
        active: true,
      },
    }),

    // Categories de Equipamentos
    prisma.category.create({
      data: {
        name: 'Medição',
        description: 'Equipamentos para medição',
        departmentId: departments[4].id,
        active: true,
      },
    }),
    prisma.category.create({
      data: {
        name: 'Primeiros Socorros',
        description: 'Materiais de primeiros socorros',
        departmentId: departments[4].id,
        active: true,
      },
    }),
  ]);

  console.log(`✅ ${categories.length} Categories criadas`);

  // Criar Products
  const products = [
    // Analgésicos
    {
      name: 'Dipirona 500mg',
      slug: 'dipirona-500mg',
      description: 'Analgésico e antitérmico - Caixa com 20 comprimidos',
      price: 8.9,
      stock: 150,
      barcode: '7891234567890',
      image:
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      categoryId: categories[0].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Paracetamol 750mg',
      slug: 'paracetamol-750mg',
      description: 'Analgésico e antitérmico - Caixa com 20 comprimidos',
      price: 12.5,
      stock: 200,
      barcode: '7891234567891',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      categoryId: categories[0].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Ibuprofeno 600mg',
      slug: 'ibuprofeno-600mg',
      description: 'Anti-inflamatório e analgésico - Caixa com 20 comprimidos',
      price: 15.8,
      stock: 100,
      barcode: '7891234567892',
      image:
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop',
      categoryId: categories[2].id,
      medicalPrescription: false,
      active: true,
    },

    // Antibióticos
    {
      name: 'Amoxicilina 500mg',
      slug: 'amoxicilina-500mg',
      description: 'Antibiótico - Caixa com 21 cápsulas',
      price: 25.9,
      stock: 80,
      barcode: '7891234567893',
      image:
        'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=400&h=400&fit=crop',
      categoryId: categories[1].id,
      medicalPrescription: true,
      active: true,
    },
    {
      name: 'Azitromicina 500mg',
      slug: 'azitromicina-500mg',
      description: 'Antibiótico - Caixa com 5 comprimidos',
      price: 32.4,
      stock: 60,
      barcode: '7891234567894',
      image:
        'https://images.unsplash.com/photo-1550572017-edd951aa8442?w=400&h=400&fit=crop',
      categoryId: categories[1].id,
      medicalPrescription: true,
      active: true,
    },

    // Gripe e Resfriado
    {
      name: 'Benegrip Multi',
      slug: 'benegrip-multi',
      description: 'Antigripal - Caixa com 20 comprimidas',
      price: 18.9,
      stock: 120,
      barcode: '7891234567895',
      image:
        'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=400&fit=crop',
      categoryId: categories[3].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Coristina D',
      slug: 'coristina-d',
      description: 'Descongestionante nasal - Caixa com 12 comprimidos',
      price: 22.5,
      stock: 90,
      barcode: '7891234567896',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop',
      categoryId: categories[3].id,
      medicalPrescription: false,
      active: true,
    },

    // Cuidados Faciais
    {
      name: 'Protetor Solar FPS 60',
      slug: 'protetor-solar-fps-60',
      description: 'Protetor solar facial - Tubo 60ml',
      price: 45.9,
      stock: 80,
      barcode: '7891234567897',
      image:
        'https://images.unsplash.com/photo-1556228724-d2feecb0e556?w=400&h=400&fit=crop',
      categoryId: categories[4].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Hidratante Facial Neutrogena',
      slug: 'hidratante-facial-neutrogena',
      description: 'Hidratante para pele seca - Pote 50ml',
      price: 28.9,
      stock: 65,
      barcode: '7891234567898',
      image:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
      categoryId: categories[4].id,
      medicalPrescription: false,
      active: true,
    },

    // Cuidados Corporais
    {
      name: 'Sabonete Dove',
      slug: 'sabonete-dove',
      description: 'Sabonete hidratante - Barra 90g',
      price: 3.9,
      stock: 300,
      barcode: '7891234567899',
      image:
        'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=400&fit=crop',
      categoryId: categories[5].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Desodorante Rexona',
      slug: 'desodorante-rexona',
      description: 'Desodorante antitranspirante - Aerosol 150ml',
      price: 8.5,
      stock: 200,
      barcode: '7891234567800',
      image:
        'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&h=400&fit=crop',
      categoryId: categories[5].id,
      medicalPrescription: false,
      active: true,
    },

    // Higiene Oral
    {
      name: 'Creme Dental Colgate',
      slug: 'creme-dental-colgate',
      description: 'Creme dental total 12 - Tubo 90g',
      price: 4.9,
      stock: 250,
      barcode: '7891234567801',
      image:
        'https://images.unsplash.com/photo-1609541598031-421df13d7b86?w=400&h=400&fit=crop',
      categoryId: categories[6].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Enxaguante Listerine',
      slug: 'enxaguante-listerine',
      description: 'Enxaguante bucal - Frasco 500ml',
      price: 12.9,
      stock: 100,
      barcode: '7891234567802',
      image:
        'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      categoryId: categories[6].id,
      medicalPrescription: false,
      active: true,
    },

    // Cabelos
    {
      name: 'Shampoo Pantene',
      slug: 'shampoo-pantene',
      description: 'Shampoo hidratação - Frasco 400ml',
      price: 15.9,
      stock: 120,
      barcode: '7891234567803',
      image:
        'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&h=400&fit=crop',
      categoryId: categories[7].id,
      medicalPrescription: false,
      active: true,
    },

    // Vitaminas
    {
      name: 'Centrum Adulto',
      slug: 'centrum-adulto',
      description: 'Multivitamínico - Frasco com 30 comprimidos',
      price: 35.9,
      stock: 80,
      barcode: '7891234567804',
      image:
        'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop',
      categoryId: categories[8].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Vitamina D 2000UI',
      slug: 'vitamina-d-2000ui',
      description: 'Suplemento de Vitamina D - Frasco com 60 cápsulas',
      price: 28.5,
      stock: 90,
      barcode: '7891234567805',
      image:
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400&h=400&fit=crop',
      categoryId: categories[8].id,
      medicalPrescription: false,
      active: true,
    },

    // Proteínas
    {
      name: 'Whey Protein',
      slug: 'whey-protein',
      description: 'Proteína do soro do leite - Pote 900g',
      price: 89.9,
      stock: 40,
      barcode: '7891234567806',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      categoryId: categories[9].id,
      medicalPrescription: false,
      active: true,
    },

    // Fraldas
    {
      name: 'Fralda Pampers M',
      slug: 'fralda-pampers-m',
      description: 'Fralda descartável tamanho M - Pacote com 36 unidades',
      price: 32.9,
      stock: 150,
      barcode: '7891234567807',
      image:
        'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=400&h=400&fit=crop',
      categoryId: categories[10].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Fralda Huggies G',
      slug: 'fralda-huggies-g',
      description: 'Fralda descartável tamanho G - Pacote com 32 unidades',
      price: 35.5,
      stock: 120,
      barcode: '7891234567808',
      image:
        'https://images.unsplash.com/photo-1566218590571-df3728b4eb75?w=400&h=400&fit=crop',
      categoryId: categories[10].id,
      medicalPrescription: false,
      active: true,
    },

    // Alimentação Infantil
    {
      name: 'Leite Nan Supreme 1',
      slug: 'leite-nan-supreme-1',
      description: 'Fórmula infantil - Lata 800g',
      price: 45.9,
      stock: 60,
      barcode: '7891234567809',
      image:
        'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=400&fit=crop',
      categoryId: categories[11].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Papinha Nestlé Banana',
      slug: 'papinha-nestle-banana',
      description: 'Papinha de fruta sabor banana - Pote 115g',
      price: 4.5,
      stock: 200,
      barcode: '7891234567820',
      image:
        'https://images.unsplash.com/photo-1609501676725-7186f734006b?w=400&h=400&fit=crop',
      categoryId: categories[11].id,
      medicalPrescription: false,
      active: true,
    },

    // Medição
    {
      name: 'Termômetro Digital',
      slug: 'termometro-digital',
      description: 'Termômetro clínico digital',
      price: 25.9,
      stock: 50,
      barcode: '7891234567810',
      image:
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=400&fit=crop',
      categoryId: categories[12].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Aparelho de Pressão',
      slug: 'aparelho-de-pressao',
      description: 'Esfigmomanômetro digital de pulso',
      price: 89.9,
      stock: 30,
      barcode: '7891234567811',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=400&fit=crop',
      categoryId: categories[12].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Oxímetro de Pulso',
      slug: 'oximetro-de-pulso',
      description: 'Medidor de saturação de oxigênio no sangue',
      price: 45.0,
      stock: 35,
      barcode: '7891234567821',
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=400&fit=crop',
      categoryId: categories[12].id,
      medicalPrescription: false,
      active: true,
    },

    // Primeiros Socorros
    {
      name: 'Curativo Band-Aid',
      slug: 'curativo-band-aid',
      description: 'Curativo adesivo - Caixa com 40 unidades',
      price: 8.9,
      stock: 200,
      barcode: '7891234567812',
      image:
        'https://images.unsplash.com/photo-1602080858428-57174f9431cf?w=400&h=400&fit=crop',
      categoryId: categories[13].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Álcool 70%',
      slug: 'alcool-70-porcento',
      description: 'Álcool etílico 70% - Frasco 1L',
      price: 12.5,
      stock: 180,
      barcode: '7891234567813',
      image:
        'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop',
      categoryId: categories[13].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Gaze Estéril',
      slug: 'gaze-esteril',
      description: 'Compressa de gaze estéril - Pacote com 10 unidades',
      price: 5.9,
      stock: 150,
      barcode: '7891234567822',
      image:
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&h=400&fit=crop',
      categoryId: categories[13].id,
      medicalPrescription: false,
      active: true,
    },
    {
      name: 'Soro Fisiológico',
      slug: 'soro-fisiologico',
      description: 'Solução salina 0,9% - Frasco 500ml',
      price: 3.5,
      stock: 300,
      barcode: '7891234567823',
      image:
        'https://images.unsplash.com/photo-1550572017-edd951aa8442?w=400&h=400&fit=crop',
      categoryId: categories[13].id,
      medicalPrescription: false,
      active: true,
    },
  ];

  // Criar produtos um por um com melhor tratamento de erros
  console.log(`🚀 Iniciando criação de ${products.length} produtos...`);

  let productsCreated = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    try {
      const created = await prisma.product.create({ data: product });
      productsCreated++;
      console.log(
        `✅ Produto ${i + 1}/${products.length}: ${product.name} - ID: ${created.id}`,
      );
    } catch (error) {
      console.error(
        `❌ Erro ao criar produto ${i + 1} (${product.name}):`,
        error,
      );

      // Log adicional para debugging
      if (error instanceof Error) {
        console.error('Detalhes do erro:', error.message);
      }

      // Verificar se a categoria existe
      const categoryExists = await prisma.category.findUnique({
        where: { id: product.categoryId },
      });

      if (!categoryExists) {
        console.error(
          `❌ Categoria ${product.categoryId} não encontrada para o produto ${product.name}`,
        );
      }
    }
  }

  console.log(
    `✅ ${productsCreated} produtos criados com sucesso de ${products.length} tentativas`,
  );

  // Verificação final
  const finalCount = {
    departments: await prisma.department.count(),
    categories: await prisma.category.count(),
    products: await prisma.product.count(),
  };

  console.log('📊 Contagem final:', finalCount);
  console.log('🎉 Seed concluído!');
}

main()
  .catch((e) => {
    console.error('❌ Erro durante o seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    console.log('🔌 Conexão com o banco encerrada');
  });
