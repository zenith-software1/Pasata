/**
 * Mujer Bonita — Catálogo de 96 productos
 * Datos reales de mayoreo y menudeo
 */

const PRICE_LABELS = {
    pieza: 'Pieza',
    caja: 'Caja',
    docena: 'Docena',
    paquete: 'Paquete',
    tira: 'Tira',
    mayoreo: 'Mayoreo',
    unica: 'P. único'
};

const CATEGORIES = [
    { id: 'todos', label: 'Todo', icon: '✨' },
    { id: 'labiales', label: 'Labiales', icon: '💋' },
    { id: 'rubores', label: 'Rubores', icon: '🌸' },
    { id: 'pestañas', label: 'Pestañas', icon: '👁️' },
    { id: 'cejas', label: 'Cejas', icon: '✏️' },
    { id: 'bases', label: 'Bases', icon: '🧴' },
    { id: 'perfumes', label: 'Perfumes', icon: '🌹' },
    { id: 'accesorios', label: 'Accesorios', icon: '🎀' }
];

const PRODUCTS = [
    { id: 1, img: 'IMG-20260616-WA0029.jpg', title: 'Polvo Traslúcido Mineral de Cereza', pieza: 28, caja: 289 },
    { id: 2, img: 'IMG-20260616-WA0059.jpg', title: 'Polvo Traslúcido Nude Makeup Look', pieza: 38, caja: 201 },
    { id: 3, img: 'IMG-20260616-WA0058.jpg', title: 'Rubor Animado de Kuromi / My Melody', pieza: 14, caja: 289 },
    { id: 4, img: 'IMG-20260616-WA0043.jpg', title: 'Vaselina Labial Humectante de Animalitos', pieza: 6, caja: 122 },
    { id: 5, img: 'IMG-20260616-WA0041.jpg', title: 'Bálsamo Labial en forma de Fresa', pieza: 8, caja: 175 },
    { id: 6, img: 'IMG-20260616-WA0074.jpg', title: 'Gel Máscara para Cejas y Pestañas Transparente', pieza: 13, caja: 271 },
    { id: 7, img: 'IMG-20260616-WA0008.jpg', title: 'Toallitas Desmaquillantes en Vasito de Panda "Honey"', pieza: 17, docena: 175 },
    { id: 8, img: 'IMG-20260616-WA0038.jpg', title: 'Fijador Mist & Fix', pieza: 25, caja: 245 },
    { id: 9, img: 'IMG-20260616-WA0036.jpg', title: 'Kit de Pestañas en Grupo "Silky Lashes" DIY', unica: 60 },
    { id: 10, img: 'IMG-20260616-WA0025.jpg', title: 'Bálsamo Labial Humectante tipo Lápiz', pieza: 6, caja: 122 },
    { id: 11, img: 'IMG-20260616-WA0040.jpg', title: 'Esmalte de Uñas Efecto Gel "Fashion Color"', pieza: 8, caja: 157 },
    { id: 12, img: 'IMG-20260616-WA0070.jpg', title: 'Fijador de Maquillaje "Stay Cool" Spray', pieza: 26, caja: 271 },
    { id: 13, img: 'IMG-20260616-WA0067.jpg', title: 'Kit de Pestañas "3D Faux Mink Lashes" Dingsen', unica: 60 },
    { id: 14, img: 'IMG-20260616-WA0072.jpg', title: 'Kit de Pestañas "DIY Cluster Lashes"', unica: 60 },
    { id: 15, img: 'IMG-20260616-WA0056.jpg', title: 'Mascarillas Faciales en Tuplemento de Sandía y Panda', pieza: 5, paquete: 45 },
    { id: 16, img: 'IMG-20260616-WA0019.jpg', title: 'Bálsamo / Mascarilla de Noche para Labios "Lip Sleeping Mask!"', pieza: 16, caja: 166 },
    { id: 17, img: 'IMG-20260616-WA0017.jpg', title: 'Kit de Máscara Voluminizadora y Pomada para Cejas "Volumizing"', pieza: 40, caja: 210 },
    { id: 18, img: 'IMG-20260616-WA0051.jpg', title: 'Mascarillas Faciales en Tuplemento de Cereza y Aguacatito', pieza: 5, paquete: 45 },
    { id: 19, img: 'IMG-20260616-WA0002.jpg', title: 'Gel para Cejas de Larga Duración "Brows" Waterproof', pieza: 9, caja: 192 },
    { id: 20, img: 'IMG-20260616-WA0063.jpg', title: 'Crema para Cejas en Paleta con Espejo "Brow Cream"', pieza: 22, caja: 236 },
    { id: 21, img: 'IMG-20260616-WA0034.jpg', title: 'Lip Gloss con Llavero de Hello Kitty "Create Sparkling Lips"', pieza: 14, caja: 289 },
    { id: 22, img: 'IMG-20260616-WA0068.jpg', title: 'Máscara de Pestañas "Make It Big" Bold Black', pieza: 13, caja: 271 },
    { id: 23, img: 'IMG-20260616-WA0026.jpg', title: 'Kit de Rímel "Volume Curl" y Tinta/Pomada para Cejas "Eyebrow Tint"', pieza: 40, caja: 210 },
    { id: 24, img: 'IMG-20260616-WA0053.jpg', title: 'Labial y Rubor en Barra "Milk Blush Lipstick"', pieza: 12, caja: 245 },
    { id: 25, img: 'IMG-20260616-WA0057.jpg', title: 'Brillo Labial en Tono Chocolate "Chocolate Lip Gloss"', pieza: 12, caja: 255 },
    { id: 26, img: 'IMG-20260616-WA0062.jpg', title: 'Brillo Labial Voluminizador "Lip Gloss Volumising Shine"', pieza: 10, caja: 219 },
    { id: 27, img: 'IMG-20260616-WA0031.jpg', title: 'Jabón Corporal/Facial "Rice Milk Soap" con Gluta y Colágeno', pieza: 13, caja: 136 },
    { id: 28, img: 'IMG-20260616-WA0028.jpg', title: 'Bálsamo Labial Humectante "Lip Glow Color Reviver Balm"', pieza: 10, caja: 210 },
    { id: 29, img: 'IMG-20260616-WA0066.jpg', title: 'Brillo Labial con Llavero de Esferas Metálicas "Galaxy Gloss"', pieza: 27, caja: 280 },
    { id: 30, img: 'IMG-20260616-WA0010.jpg', title: 'Pestañas Postizas "False Eyelashes Mink 3D Hair"', pieza: 12, caja: 122 },
    { id: 31, img: 'IMG-20260616-WA0007.jpg', title: 'Perfiladores / Navajas para Ceja "Eyebrow Razor" Set de 3', pieza: 9, caja: 149 },
    { id: 32, img: 'IMG-20260616-WA0001.jpg', title: 'Pestañas Postizas "New 3D Pestañas / Mink 3D Hair"', pieza: 12, caja: 122 },
    { id: 33, img: 'IMG-20260616-WA0027.jpg', title: 'Base de Maquillaje de Larga Duración "Lasting Finish SPF 20+"', pieza: 35, caja: 359 },
    { id: 34, img: 'IMG-20260616-WA0061.jpg', title: 'Delineador de Ojos y Cejas "36H Eye Brow" Liquid Eyeliner', pieza: 12, caja: 254 },
    { id: 35, img: 'IMG-20260616-WA0047.jpg', title: 'Labial Líquido Mate "Liquid Matte"', pieza: 9, caja: 192 },
    { id: 36, img: 'IMG-20260616-WA0052.jpg', title: 'Parches de Colágeno para Ojos "Collagen Crystal Eye Mask"', pieza: 3, docena: 31 },
    { id: 37, img: 'IMG-20260616-WA0011.jpg', title: 'Set de Brochas Cosméticas - Tonos Azul y Rosa', paquete: 36, categoria: 'accesorios' },
    { id: 38, img: 'IMG-20260616-WA0073.jpg', title: 'Set de Brochas Cosméticas - Tonos Verde y Morado', paquete: 36, categoria: 'accesorios' },
    { id: 39, img: 'IMG-20260616-WA0015.jpg', title: 'Base de Maquillaje Matificante "Perfect Matte + Poreless 12H"', pieza: 29, caja: 306 },
    { id: 40, img: 'IMG-20260616-WA0016.jpg', title: 'Base de Maquillaje Fluida "Nude Liquid Foundation"', pieza: 35, caja: 359 },
    { id: 41, img: 'IMG-20260616-WA0042.jpg', title: 'Base de Maquillaje "HD Liquid Coverage Foundation"', pieza: 37, caja: 385 },
    { id: 42, img: 'IMG-20260616-WA0024.jpg', title: 'Brillo Labial "New Lip Gloss - Moist"', pieza: 13, caja: 271 },
    { id: 43, img: 'IMG-20260616-WA0071.jpg', title: 'Perfume de Bolsillo Hello Kitty "Romantic"', pieza: 13, caja: 271 },
    { id: 44, img: 'IMG-20260616-WA0035.jpg', title: 'Polvo Traslúcido de Lujo "Luxury Powder Banana Setting Powder"', pieza: 19, caja: 201 },
    { id: 45, img: 'IMG-20260616-WA0048.jpg', title: 'Fragancia Corporal / Body Mist Hello Kitty 88ml', pieza: 30, caja: 315 },
    { id: 46, img: 'IMG-20260616-WA0003.jpg', title: 'Polvo Iluminador Banana "Banana Pouder De Luxe"', pieza: 15, caja: 157 },
    { id: 47, img: 'IMG-20260616-WA0030.jpg', title: 'Polvo Compacto Mate "Perfect Natural Face Powder SPF 35 - Fit us!"', pieza: 27, caja: 280 },
    { id: 48, img: 'IMG-20260616-WA0009.jpg', title: 'Fragancia Corporal / Body Mist "Emerald Glow" 88ml', pieza: 30, caja: 315 },
    { id: 49, img: 'IMG-20260616-WA0050.jpg', title: 'Perfume de Bolsillo Kuromi "Romantic And Rich Aroma"', pieza: 13, caja: 271 },
    { id: 50, img: 'IMG-20260616-WA0032.jpg', title: 'Lápiz para Cejas 2 en 1 Impermeable "36H Browlash Eyebrow Pencil"', pieza: 10, caja: 210 },
    { id: 51, img: 'IMG-20260616-WA0044.jpg', title: 'Máscara para Pestañas "Beauty Mascara Colos Sal"', pieza: 13, caja: 262 },
    { id: 52, img: 'IMG-20260616-WA0049.jpg', title: 'Perfume Infantil Stitch & Angel 50ml', pieza: 32, caja: 332 },
    { id: 53, img: 'IMG-20260616-WA0000.jpg', title: 'Perfume de Bolsillo en Spray Hello Kitty', pieza: 11, caja: 227 },
    { id: 54, img: 'IMG-20260616-WA0045.jpg', title: 'Tinta Líquida para Cejas "Grande Brow-Fill"', pieza: 11, caja: 227 },
    { id: 55, img: 'IMG-20260616-WA0023.jpg', title: 'Aceite para Labios "Lip Oil - Stay Hydrated"', pieza: 13, caja: 262 },
    { id: 56, img: 'IMG-20260616-WA0018.jpg', title: 'Máscara para Pestañas "Volumizing Lashcraft"', pieza: 12, caja: 254 },
    { id: 57, img: 'IMG-20260616-WA0033.jpg', title: 'Máscara para Pestañas de Fibras "Fiber Lashes 7D Waterproof"', pieza: 15, caja: 315 },
    { id: 58, img: 'IMG-20260616-WA0079.jpg', title: 'Delineador en Gel con Brocha "36H Delineador en Gel"', pieza: 9, caja: 185 },
    { id: 59, img: 'IMG-20260616-WA0046.jpg', title: 'Máscara para Pestañas "The Colossal Volum\' Express"', pieza: 10, caja: 201 },
    { id: 60, img: 'IMG-20260616-WA0077.jpg', title: 'Máscara para Pestañas "Wrap Lash - Mega Extension & Volume"', pieza: 15, caja: 315 },
    { id: 61, img: 'IMG-20260616-WA0013.jpg', title: 'Delineador Líquido de Colores "Perfect Long Lasting"', pieza: 10, caja: 201 },
    { id: 62, img: 'IMG-20260616-WA0012.jpg', title: 'Delineador con Sello "Eyeliner + Seal 4Seal"', pieza: 10, caja: 219 },
    { id: 63, img: 'IMG-20260616-WA0064.jpg', title: 'Delineador Líquido con Orejas de Gato "36H Quality Eyeliner"', pieza: 8, caja: 175 },
    { id: 64, img: 'IMG-20260616-WA0004.jpg', title: 'Gel y Máscara para Cejas "Eye Brow & Mascara Glam"', pieza: 11, caja: 227 },
    { id: 65, img: 'IMG-20260616-WA0037.jpg', title: 'Set de Maquillaje 3 en 1 "The Colossal Big Shot"', pieza: 37, caja: 385 },
    { id: 66, img: 'IMG-20260616-WA0005.jpg', title: 'Moños con Pin de Mariposa', pieza: 11, tira: 58, categoria: 'accesorios' },
    { id: 67, img: 'IMG-20260616-WA0091.jpg', title: 'Moños con Peluche', pieza: 12, tira: 61, categoria: 'accesorios' },
    { id: 68, img: 'IMG-20260616-WA0081.jpg', title: 'Moños con Listón', pieza: 11, tira: 58, categoria: 'accesorios' },
    { id: 69, img: 'IMG-20260616-WA0076.jpg', title: 'Moño con Perlas', pieza: 13, tira: 66, categoria: 'accesorios' },
    { id: 70, img: 'IMG-20260616-WA0083.jpg', title: 'Pinceles para Uñas', pieza: 20, docena: 210, categoria: 'accesorios' },
    { id: 71, img: 'IMG-20260616-WA0065.jpg', title: 'Pinzas para Cabello Diferentes Figuras', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 72, img: 'IMG-20260616-WA0054.jpg', title: 'Ligas de Tela', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 73, img: 'IMG-20260616-WA0006.jpg', title: 'Moños Pequeños', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 74, img: 'IMG-20260616-WA0055.jpg', title: 'Llavero de Signo Zodiacal', pieza: 8, docena: 89, categoria: 'accesorios' },
    { id: 75, img: 'IMG-20260616-WA0093.jpg', title: 'Llavero de Metal Carita Feliz', pieza: 8, docena: 89, categoria: 'accesorios' },
    { id: 76, img: 'IMG-20260616-WA0014.jpg', title: 'Uñas Postizas para Niños', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 77, img: 'IMG-20260616-WA0089.jpg', title: 'Moño Accesorio', pieza: 14, docena: 149, categoria: 'accesorios' },
    { id: 78, img: 'IMG-20260616-WA0086.jpg', title: 'Uñas Postizas Romantic', pieza: 14, docena: 149, categoria: 'accesorios' },
    { id: 79, img: 'IMG-20260616-WA0060.jpg', title: 'Diadema Suave con Diseño', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 80, img: 'IMG-20260616-WA0022.jpg', title: 'Moño con Estampado de Cereza', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 81, img: 'IMG-20260616-WA0087.jpg', title: 'Paquete de Ligas para Cabello', pieza: 5, docena: 49, categoria: 'accesorios' },
    { id: 82, img: 'IMG-20260616-WA0088.jpg', title: 'Pinzas para Cabello con Diferentes Diseños', pieza: 11, docena: 114, categoria: 'accesorios' },
    { id: 83, img: 'IMG-20260616-WA0085.jpg', title: 'Pinzas para Cabello Zhendong', pieza: 7, docena: 66, categoria: 'accesorios' },
    { id: 84, img: 'IMG-20260616-WA0084.jpg', title: 'Diadema Suave con Moño', pieza: 15, docena: 157, categoria: 'accesorios' },
    { id: 85, img: 'IMG-20260616-WA0069.jpg', title: 'Bolsas Plastificadas Costal', pieza: 8, docena: 79, categoria: 'accesorios' },
    { id: 86, img: 'IMG-20260616-WA0082.jpg', title: 'Esponjas de Maquillaje Colores Pastel', pieza: 7, docena: 70, categoria: 'accesorios' },
    { id: 87, img: 'IMG-20260616-WA0095.jpg', title: 'Pinzas de Pelo para Niños', pieza: 6, tira: 49, categoria: 'accesorios' },
    { id: 88, img: 'IMG-20260616-WA0078.jpg', title: 'Moño Brillante', pieza: 9, tira: 96, categoria: 'accesorios' },
    { id: 89, img: 'IMG-20260616-WA0094.jpg', title: 'Prosa Máscara para Pestañas', pieza: 45, mayoreo: 35, categoria: 'pestañas' },
    { id: 90, img: 'IMG-20260616-WA0092.jpg', title: 'Moño en Colores Pastel y Blanco', pieza: 8, tira: 79, categoria: 'accesorios' },
    { id: 91, img: 'IMG-20260616-WA0075.jpg', title: 'Cortauñas', pieza: 6, caja: 58, categoria: 'accesorios' },
    { id: 92, img: 'IMG-20260616-WA0020.jpg', title: 'Moño Grande', pieza: 6, docena: 66, categoria: 'accesorios' },
    { id: 93, img: 'IMG-20260616-WA0021.jpg', title: 'Llaveros', pieza: 10, categoria: 'accesorios' },
    { id: 94, img: 'IMG-20260616-WA0039.jpg', title: 'Moño con Listón Premium', pieza: 6, docena: 66, categoria: 'accesorios' },
    { id: 95, img: 'IMG-20260616-WA0090.jpg', title: 'Set de Esponjas Beauty Blender', pieza: 12, docena: 110, categoria: 'accesorios' },
    { id: 96, img: 'IMG-20260616-WA0080.jpg', title: 'Kit de Accesorios para Cabello', pieza: 15, paquete: 140, categoria: 'accesorios' }
];

const IMAGE_BASE = 'assets/images/';

function getImagePath(fileName) {
    if (!fileName) return '';
    if (/^https?:\/\//i.test(fileName) || fileName.startsWith('data:')) return fileName;
    return IMAGE_BASE + fileName;
}

function inferCategory(product) {
    if (product.categoria) return product.categoria;

    const title = product.title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');

    if (/labial|lip|gloss|balsamo|brillo|vaselina/.test(title)) return 'labiales';
    if (/rubor|blush/.test(title)) return 'rubores';
    if (/pestana|lash|mascara|rimel|delineador/.test(title)) return 'pestañas';
    if (/ceja|brow/.test(title)) return 'cejas';
    if (/base|foundation|polvo compacto|polvo traslucido|polvo iluminador/.test(title)) return 'bases';
    if (/perfume|fragancia|body mist/.test(title)) return 'perfumes';
    if (/mono|pinza|llavero|liga|diadema|cortaunas|esponja|bolsa|pincel|brocha|una|accesorio/.test(title)) return 'accesorios';
    return 'todos';
}

function getCategoryMeta(product) {
    const id = inferCategory(product);
    return CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
}

function getPrices(product) {
    return Object.entries(PRICE_LABELS)
        .filter(([key]) => product[key])
        .map(([key, label]) => ({ key, label, value: Number(product[key]) }));
}

function getCartPrice(product) {
    const price = product.unica || product.pieza || product.paquete || product.docena || product.caja || product.tira || product.mayoreo || 0;
    return Number(price);
}
